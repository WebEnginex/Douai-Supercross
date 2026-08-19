import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * /admin/* protégé par session Supabase Auth.
 * Comptes créés manuellement dans le dashboard (pas d’inscription publique).
 * /admin/login : accessible uniquement par URL directe (pas de lien public).
 * Accès non authentifié à /admin → redirection vers l’accueil (pas vers login).
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { supabaseResponse, user } = await updateSession(request);

  const isLogin = pathname === "/admin/login";
  const isAdminArea = pathname.startsWith("/admin");

  if (!isAdminArea) {
    return supabaseResponse;
  }

  const isAuthenticated = Boolean(user);

  if (isLogin) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return supabaseResponse;
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
