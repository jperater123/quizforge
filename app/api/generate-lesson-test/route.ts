// app/api/generate-quiz/route.ts
import { NextResponse } from "next/server";
import { generateQuizFromLesson } from "@/src/lib/gemini";
import type { LessonQuizRequest } from "@/src/lib/types";

// comment: This API route generates a quiz based on a lesson submitted by the client.
// It uses the generateQuizFromLesson function from the gemini library to create the quiz.
// Needed: LessonQuizRequest types the incoming request body, which includes the lesson
// text and the number of questions to generate. The route handles POST requests (since
// the lesson text is sent in the request body, not the URL) and returns a JSON response
// containing the generated quiz or an error message if generation fails.
export async function POST(req: Request) {
  try {
    const body: LessonQuizRequest = await req.json();
    const { lesson, numberOfQuestions } = body;

    if (!lesson || typeof lesson !== "string" || lesson.trim().length < 20) {
      return NextResponse.json(
        { error: "Lesson content is missing or too short to generate a quiz." },
        { status: 400 }
      );
    }

    const quiz = await generateQuizFromLesson({
      lesson,
      numberOfQuestions: numberOfQuestions ?? 5,
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