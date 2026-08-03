
import { createClient } from "@/src/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  if (data.session) {
    return NextResponse.json(
      { data: "Supabaseeee!!! " + JSON.stringify(data.session.user) },
      { status: 200 }
    );
  }

  return NextResponse.json({
    message: "Supabase connected!",
    session: data.session,
  });
}