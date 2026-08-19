import { NextResponse } from "next/server";
import { createHash, randomUUID } from "crypto";
import { getSupabaseAdmin, isDatabaseConfigured } from "@/lib/db/client";

function getVisitorKey(request: Request): string {
  const existing = request.headers.get("x-visitor-key");
  if (existing && existing.length >= 8 && existing.length <= 128) {
    return existing;
  }
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ua = request.headers.get("user-agent") ?? "unknown";
  const raw = `${forwarded ?? "anon"}|${ua}|${new Date().toISOString().slice(0, 10)}`;
  return createHash("sha256").update(raw).digest("hex").slice(0, 32);
}

export async function POST(request: Request) {
  try {
    if (!isDatabaseConfigured()) {
      return NextResponse.json({ ok: true, tracked: false });
    }

    const body = (await request.json().catch(() => ({}))) as {
      path?: string;
      visitorKey?: string;
    };

    const path =
      body.path?.trim() ||
      new URL(request.headers.get("referer") ?? "http://localhost/").pathname;

    const visitorKey =
      body.visitorKey?.trim() || getVisitorKey(request) || randomUUID();

    const viewedOn = new Date().toISOString().slice(0, 10);
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("page_views").upsert(
      {
        path,
        visitor_key: visitorKey,
        viewed_on: viewedOn,
      },
      {
        onConflict: "visitor_key,path,viewed_on",
        ignoreDuplicates: true,
      }
    );

    if (error) throw error;

    return NextResponse.json({ ok: true, tracked: true, visitorKey });
  } catch (error) {
    console.error("[track/visit]", error);
    return NextResponse.json({ ok: true, tracked: false });
  }
}
