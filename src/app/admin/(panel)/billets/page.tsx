import { Ticket } from "lucide-react";
import { isDatabaseConfigured } from "@/lib/db/client";
import { getTicketClickStats } from "@/lib/admin/stats";
import {
  AdminEmptyState,
  AdminMetaBadge,
  AdminPageHeader,
} from "@/components/admin/AdminUi";
import { cn } from "@/lib/cn";

const schemaHelp =
  "Dans Supabase → SQL Editor, exécute le fichier sql/schema.sql du projet, puis recharge cette page.";

const rankAccents = [
  {
    bar: "bg-brand-red/20",
    edge: "bg-brand-red",
    badge: "border-brand-red/40 bg-brand-red/15 text-brand-red",
    value: "text-brand-red",
  },
  {
    bar: "bg-amber-500/15",
    edge: "bg-amber-400",
    badge: "border-amber-500/40 bg-amber-500/10 text-amber-300",
    value: "text-amber-300",
  },
  {
    bar: "bg-sky-500/15",
    edge: "bg-sky-400",
    badge: "border-sky-500/40 bg-sky-500/10 text-sky-300",
    value: "text-sky-300",
  },
  {
    bar: "bg-violet-500/15",
    edge: "bg-violet-400",
    badge: "border-violet-500/40 bg-violet-500/10 text-violet-300",
    value: "text-violet-300",
  },
  {
    bar: "bg-emerald-500/15",
    edge: "bg-emerald-400",
    badge: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
    value: "text-emerald-300",
  },
] as const;

export default async function AdminTicketsPage() {
  const dbReady = isDatabaseConfigured();

  if (!dbReady) {
    return (
      <div>
        <AdminPageHeader
          title="Billetterie"
          description="Clics sur Réserver"
        />
        <AdminEmptyState
          title="En attente de Supabase"
          description="Les clics billets seront comptés dès que Supabase sera connecté."
          icon={<Ticket size={22} />}
        />
      </div>
    );
  }

  const { rows, schemaMissing } = await getTicketClickStats();

  if (schemaMissing) {
    return (
      <div>
        <AdminPageHeader
          title="Billetterie"
          description="Clics sur Réserver"
        />
        <AdminEmptyState
          title="Tables manquantes"
          description={schemaHelp}
          icon={<Ticket size={22} />}
        />
      </div>
    );
  }

  const totalClicks = rows.reduce((sum, row) => sum + row.clicks, 0);
  const maxClicks = Math.max(...rows.map((row) => row.clicks), 1);

  return (
    <div>
      <AdminPageHeader
        title="Billetterie"
        description="Répartition des clics sur les offres"
        meta={
          rows.length > 0 ? (
            <AdminMetaBadge className="border-amber-500/25 bg-amber-500/5 text-amber-200/90">
              <span className="font-semibold tabular-nums text-amber-300">
                {totalClicks}
              </span>{" "}
              clic{totalClicks > 1 ? "s" : ""} au total
            </AdminMetaBadge>
          ) : null
        }
      />

      {rows.length === 0 ? (
        <AdminEmptyState
          title="Aucun clic pour l’instant"
          description="Dès qu’un visiteur clique sur Réserver, le compteur apparaît ici."
          icon={<Ticket size={22} />}
        />
      ) : (
        <ul className="space-y-2.5">
          {rows.map((row, index) => {
            const share = Math.round((row.clicks / maxClicks) * 100);
            const accent = rankAccents[index % rankAccents.length];
            return (
              <li
                key={row.ticketId}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 px-4 py-4 sm:px-5"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-y-0 left-0 transition-[width]",
                    accent.bar
                  )}
                  style={{ width: `${share}%` }}
                  aria-hidden="true"
                />
                <div
                  className={cn(
                    "pointer-events-none absolute inset-y-0 left-0 w-1",
                    accent.edge
                  )}
                  aria-hidden="true"
                />
                <div className="relative flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border text-xs font-semibold tabular-nums",
                        accent.badge
                      )}
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-medium text-white">
                        {row.ticketName}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-zinc-500">
                        {row.ticketId}
                      </p>
                    </div>
                  </div>
                  <p
                    className={cn(
                      "shrink-0 font-display text-2xl tabular-nums sm:text-3xl",
                      accent.value
                    )}
                  >
                    {row.clicks}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
