import { CalendarDays, CalendarRange, Users } from "lucide-react";
import { isDatabaseConfigured } from "@/lib/db/client";
import { getVisitStats } from "@/lib/admin/stats";
import {
  AdminEmptyState,
  AdminPageHeader,
  AdminStatCard,
} from "@/components/admin/AdminUi";

const schemaHelp =
  "Dans Supabase → SQL Editor, exécute le fichier sql/schema.sql du projet, puis recharge cette page.";

export default async function AdminOverviewPage() {
  const dbReady = isDatabaseConfigured();

  if (!dbReady) {
    return (
      <div>
        <AdminPageHeader
          title="Vue d’ensemble"
          description="Statistiques de fréquentation du site"
        />
        <AdminEmptyState
          title="Supabase pas encore branché"
          description="Ajoute les clés dans .env.local, exécute sql/schema.sql, puis les stats s’afficheront ici."
        />
      </div>
    );
  }

  const stats = await getVisitStats();

  if (stats.schemaMissing) {
    return (
      <div>
        <AdminPageHeader
          title="Vue d’ensemble"
          description="Statistiques de fréquentation du site"
        />
        <AdminEmptyState title="Tables manquantes" description={schemaHelp} />
      </div>
    );
  }

  return (
    <div>
      <AdminPageHeader
        title="Vue d’ensemble"
        description="Visiteurs uniques (1 vue maximum par page et par jour)"
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        <AdminStatCard
          label="Aujourd’hui"
          value={stats.daily}
          icon={<CalendarDays size={16} />}
          hint="Visiteurs du jour"
          accent="sky"
        />
        <AdminStatCard
          label="Ce mois"
          value={stats.monthly}
          icon={<CalendarRange size={16} />}
          hint="Visiteurs du mois en cours"
          accent="amber"
        />
        <AdminStatCard
          label="Total"
          value={stats.total}
          icon={<Users size={16} />}
          hint="Depuis le début"
          accent="violet"
        />
      </div>
    </div>
  );
}
