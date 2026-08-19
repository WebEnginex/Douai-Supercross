"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "gpse_visitor_key";

function getOrCreateVisitorKey() {
  try {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    if (existing) return existing;
    const key =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `v_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    window.localStorage.setItem(STORAGE_KEY, key);
    return key;
  } catch {
    return `v_${Date.now()}`;
  }
}

export function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;

    const visitorKey = getOrCreateVisitorKey();
    void fetch("/api/track/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname, visitorKey }),
      keepalive: true,
    }).catch(() => undefined);
  }, [pathname]);

  return null;
}
