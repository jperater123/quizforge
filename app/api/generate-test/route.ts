import { NextResponse } from "next/server";
import { generateQuiz } from "@/src/lib/gemini";

export async function GET() {
  try {
    const quiz = await generateQuiz({
      subject: "Science",
      topic: "Solar System",
      gradeLevel: "Grade 5",
      difficulty: "Easy",
      numberOfQuestions: 5,
    });

    return NextResponse.json(quiz);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate quiz." },
      { status: 500 }
    );
  }
}