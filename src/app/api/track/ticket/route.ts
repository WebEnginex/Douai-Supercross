import { NextResponse } from "next/server";
import { getSupabaseAdmin, isDatabaseConfigured } from "@/lib/db/client";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      ticketId?: string;
      ticketName?: string;
    };

    const ticketId = body.ticketId?.trim() ?? "";
    const ticketName = body.ticketName?.trim() ?? "";

    if (!ticketId || !ticketName) {
      return NextResponse.json(
        { error: "ticketId et ticketName requis." },
        { status: 400 }
      );
    }

    if (!isDatabaseConfigured()) {
      return NextResponse.json({ ok: true, tracked: false });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("ticket_clicks").insert({
      ticket_id: ticketId,
      ticket_name: ticketName,
    });

    if (error) throw error;

    return NextResponse.json({ ok: true, tracked: true });
  } catch (error) {
    console.error("[track/ticket]", error);
    return NextResponse.json({ ok: true, tracked: false });
  }
}
