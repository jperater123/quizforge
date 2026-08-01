import { NextResponse } from "next/server";
import { generateQuiz } from "@/src/lib/gemini";
import {  QuizRequest } from "@/src/lib/types";

export async function POST( req: Request) {

  try {
      const body: QuizRequest = await req.json();
      const { subject, topic, gradeLevel, difficulty, numberOfQuestions } = body;

      if (!subject || !topic || !gradeLevel || !difficulty || !numberOfQuestions) {
          return NextResponse.json(
              { error: "Missing required fields in the request body." },
              { status: 400 }
          );
      }

      const quiz = await generateQuiz({
          subject,
          topic,
          gradeLevel,
          difficulty,
          numberOfQuestions
      });

      return NextResponse.json(quiz);

  }
  catch (error) {
      console.error(error);
      return NextResponse.json(
          { error: "Failed to generate quiz." },
          { status: 500 }
      );
  }

}
  
  

 
  