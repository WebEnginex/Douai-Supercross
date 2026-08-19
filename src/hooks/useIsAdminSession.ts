"use client";

import { useEffect, useState } from "react";
import {
  createBrowserSupabaseClient,
  hasSupabasePublicConfig,
} from "@/lib/supabase/client";

/** True si une session Supabase Auth est active (compte admin créé manuellement). */
export function useIsAdminSession() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!hasSupabasePublicConfig()) return;

    const supabase = createBrowserSupabaseClient();
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setIsAdmin(Boolean(data.session?.user));
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(Boolean(session?.user));
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  return isAdmin;
}
