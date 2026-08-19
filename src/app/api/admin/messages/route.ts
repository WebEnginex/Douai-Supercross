import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  deleteContactMessages,
  updateContactMessagesStatus,
} from "@/lib/admin/messages";
import { isDatabaseConfigured } from "@/lib/db/client";

async function requireAdminUser() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function PATCH(request: Request) {
  try {
    const user = await requireAdminUser();
    if (!user) {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }
    if (!isDatabaseConfigured()) {
      return NextResponse.json(
        { error: "Base de données non configurée." },
        { status: 503 }
      );
    }

    const body = (await request.json()) as {
      ids?: string[];
      status?: string;
    };

    const ids = Array.isArray(body.ids)
      ? body.ids.filter((id) => typeof id === "string" && id.length > 0)
      : [];
    const status = body.status?.trim();

    if (ids.length === 0 || !status) {
      return NextResponse.json(
        { error: "ids et status requis." },
        { status: 400 }
      );
    }

    await updateContactMessagesStatus(ids, status);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[admin/messages PATCH]", error);
    return NextResponse.json(
      { error: "Impossible de mettre à jour les messages." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await requireAdminUser();
    if (!user) {
      return NextResponse.json({ error: "Non autorisé." }, { status: 401 });
    }
    if (!isDatabaseConfigured()) {
      return NextResponse.json(
        { error: "Base de données non configurée." },
        { status: 503 }
      );
    }

    const body = (await request.json()) as { ids?: string[] };
    const ids = Array.isArray(body.ids)
      ? body.ids.filter((id) => typeof id === "string" && id.length > 0)
      : [];

    if (ids.length === 0) {
      return NextResponse.json({ error: "ids requis." }, { status: 400 });
    }

    await deleteContactMessages(ids);
    return NextResponse.json({ ok: true, deleted: ids.length });
  } catch (error) {
    console.error("[admin/messages DELETE]", error);
    return NextResponse.json(
      { error: "Impossible de supprimer les messages." },
      { status: 500 }
    );
  }
}
