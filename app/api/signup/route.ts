import { supabase } from "@/src/lib/supabase";
import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  if (!data.user) {
    return NextResponse.json(
      { error: "User creation failed" },
      { status: 500 }
    );
  }

  const user = await prisma.user.create({
    data: {
      authId: data.user.id,
      email: data.user.email!,
    },
  });

  return NextResponse.json({
    message: "User signed up successfully!",
    user: data.user,
  });
}