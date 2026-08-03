import { NextResponse } from "next/server";
import { createClient } from "@/src/lib/supabase/server";
import { prisma } from "@/src/lib/prisma";


export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  const {
    data: { user },
    } = await (await createClient()).auth.getUser();

    if(!user) {
        return NextResponse.redirect(`${origin}/login`);
    }

    // Create a new user in the database if they don't exist
    const existingUser = await prisma.user.findUnique({
        where: {
            email: user.email!,
        },
    });

    if (!existingUser) {
        await prisma.user.create({
            data: {
                email: user.email!,
                name: user.user_metadata.full_name || "",
                avatar_url: user.user_metadata.avatar_url || "",
            },
        });
    }

  return NextResponse.redirect(`${origin}/dashboard`);
}