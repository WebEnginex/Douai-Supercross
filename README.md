# GP SuperEnduro Paris

Site Next.js pour le GP SuperEnduro Paris.

## Admin (Supabase Auth)

1. Créer un projet Supabase (région EU de préférence)
2. SQL Editor → exécuter `sql/schema.sql`
3. Authentication → Providers → Email : **désactiver** “Confirm email” si besoin, et surtout **ne pas activer** l’inscription publique (ou désactiver Sign ups)
4. Authentication → Users → **Add user** manuellement (email + mot de passe) pour chaque admin
5. Remplir `.env.local` (voir `.env.example`) : URL + anon key + service_role key
6. `npm run dev` → ouvrir **directement** `/admin/login` (lien privé, non listé sur le site)

Les images restent dans `public/` (GitHub / Vercel), compressées.

### Suite

Envoi des réponses mail (Brevo) à brancher après.
