"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error || "Connexion impossible.");
        return;
      }

      router.replace(callbackUrl.startsWith("/admin") ? callbackUrl : "/admin");
      router.refresh();
    } catch {
      setError("Erreur réseau. Réessaie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-lg border border-white/10 bg-surface p-6 sm:p-8">
        <p className="text-[11px] uppercase tracking-[0.18em] text-brand-red font-semibold mb-2">
          Administration
        </p>
        <h1 className="font-display text-3xl text-white mb-6">Connexion</h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red/50"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-zinc-400 mb-2"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red/50"
            />
          </div>

          {error ? (
            <p className="text-sm text-brand-red" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 text-white font-semibold uppercase tracking-widest text-sm py-3 rounded-sm transition-colors"
          >
            {loading ? "Connexion…" : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
