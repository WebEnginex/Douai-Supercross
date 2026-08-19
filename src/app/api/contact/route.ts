import { NextResponse } from "next/server";
import { getSupabaseAdmin, isDatabaseConfigured } from "@/lib/db/client";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      subject?: string;
      category?: string;
      message?: string;
    };

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const subject = body.subject?.trim() ?? "";
    const category = body.category?.trim() || "general";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    if (!isDatabaseConfigured()) {
      console.info("[contact] Supabase absent — message non persisté:", {
        name,
        email,
        subject,
        category,
      });
      return NextResponse.json({
        ok: true,
        stored: false,
        message:
          "Message reçu (Supabase non configuré). Branche le projet pour la persistance admin.",
      });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      subject,
      category,
      message,
    });

    if (error) throw error;

    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Impossible d’envoyer le message pour le moment." },
      { status: 500 }
    );
  }
}
