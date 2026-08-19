import { getSupabaseAdmin } from "@/lib/db/client";

function startOfMonthISO(): string {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  return `${y}-${m}-01`;
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function uniqueVisitorCount(
  rows: Array<{ visitor_key: string }> | null
): number {
  if (!rows?.length) return 0;
  return new Set(rows.map((row) => row.visitor_key)).size;
}

function isMissingRelationError(error: { code?: string } | null | undefined) {
  return error?.code === "PGRST205" || error?.code === "42P01";
}

export type VisitStats = {
  daily: number;
  monthly: number;
  total: number;
  schemaMissing: boolean;
};

export async function getVisitStats(): Promise<VisitStats> {
  const supabase = getSupabaseAdmin();
  const today = todayISO();
  const monthStart = startOfMonthISO();

  const [dailyRes, monthlyRes, totalRes] = await Promise.all([
    supabase.from("page_views").select("visitor_key").eq("viewed_on", today),
    supabase
      .from("page_views")
      .select("visitor_key")
      .gte("viewed_on", monthStart),
    supabase.from("page_views").select("visitor_key"),
  ]);

  const firstError = dailyRes.error || monthlyRes.error || totalRes.error;
  if (firstError) {
    if (isMissingRelationError(firstError)) {
      return { daily: 0, monthly: 0, total: 0, schemaMissing: true };
    }
    throw new Error(firstError.message);
  }

  return {
    daily: uniqueVisitorCount(dailyRes.data),
    monthly: uniqueVisitorCount(monthlyRes.data),
    total: uniqueVisitorCount(totalRes.data),
    schemaMissing: false,
  };
}

export type TicketClickStat = {
  ticketId: string;
  ticketName: string;
  clicks: number;
};

export async function getTicketClickStats(): Promise<{
  rows: TicketClickStat[];
  schemaMissing: boolean;
}> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("ticket_clicks")
    .select("ticket_id, ticket_name");

  if (error) {
    if (isMissingRelationError(error)) {
      return { rows: [], schemaMissing: true };
    }
    throw new Error(error.message);
  }

  const map = new Map<string, TicketClickStat>();

  for (const row of data ?? []) {
    const key = row.ticket_id as string;
    const current = map.get(key);
    if (current) {
      current.clicks += 1;
    } else {
      map.set(key, {
        ticketId: key,
        ticketName: row.ticket_name as string,
        clicks: 1,
      });
    }
  }

  return {
    rows: Array.from(map.values()).sort(
      (a, b) => b.clicks - a.clicks || a.ticketName.localeCompare(b.ticketName)
    ),
    schemaMissing: false,
  };
}
