import { NextResponse } from "next/server";
import { generateQuiz } from "@/src/lib/gemini";
import {  QuizRequest } from "@/src/lib/types";
import { getOrCreateGuest } from "@/src/lib/guest";
import { prisma } from "@/src/lib/prisma";
import { cookies } from "next/headers";

export async function POST( req: Request) {

    const cookieStore = await cookies();

    const guest = await getOrCreateGuest(cookieStore);

    if (guest.remainingTrials <= 0) {
        return NextResponse.json(
            { error: "You have reached the maximum number of trials. Please sign up to continue." },
            { status: 403 }
        );
    }
    

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

       await prisma.guestTrial.update({
            where: {
                id: guest.id,
            },
            data: {
                remainingTrials: {
                    decrement: 1,
                },
            },
        });
        console.log("Guest remaining trials:", guest.remainingTrials); // Debugging line to check remaining trials

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
  
  

 
  