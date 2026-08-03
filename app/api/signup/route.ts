import { supabase } from "@/src/lib/supabase";
import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/login/callback`,
    }
  });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
  console.log("Supabase sign-in data:", data); // Debugging line to check the response from Supabase
}