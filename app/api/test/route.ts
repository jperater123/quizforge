import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await prisma.user.create({
    data: {
      email: "test@quizforge1.com",
      name: "Test Teacher",
    },
  });

  return NextResponse.json(user);
}