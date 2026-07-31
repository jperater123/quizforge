import { GoogleGenAI } from "@google/genai";
import { GeneratedQuiz, LessonQuizRequest, QuizRequest } from "./types";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

async function generateFromPrompt(prompt: string): Promise<GeneratedQuiz> {

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
    });

    const text = response.text;
    if (!text) {
        throw new Error("Gemini returned an empty response.");
    }

    const quiz: GeneratedQuiz = JSON.parse(text);
    return quiz;

}

export async function generateQuiz(request: QuizRequest) {
    const prompt = `
        You are an expert teacher.

        Generate a ${request.numberOfQuestions}-question multiple choice quiz.

        Requirements:
        - Subject: ${request.subject}
        - Topic: ${request.topic}
        - Grade Level: ${request.gradeLevel}
        - Difficulty: ${request.difficulty}

        Rules:
        - Exactly 4 choices per question.
        - Only one correct answer.
        - Include a short explanation for each answer.
        - Return valid JSON only.
        - Do not include markdown.
        - Do not wrap the JSON in \`\`\`.

        JSON format:

        {
        "title": "Quiz Title",
        "questions": [
            {
            "question": "...",
            "choices": [
                "...",
                "...",
                "...",
                "..."
            ],
            "answer": "...",
            "explanation": "..."
            }
        ]
        }
        `;

    return generateFromPrompt(prompt);
}


export async function generateQuizFromLesson(request: LessonQuizRequest) {
    const prompt = `
        You are an expert teacher.

        Read the lesson below carefully.

        Generate exactly ${request.numberOfQuestions} multiple-choice questions.

        Rules:
        - Use ONLY information found in the lesson.
        - Do NOT invent facts or use outside knowledge.
        - Each question must have exactly 4 choices.
        - Only one correct answer.
        - Include a short explanation for the correct answer.
        - Return valid JSON only.
        - Do not include markdown.
        - Do not wrap the JSON in \`\`\`.

        Lesson:

        ${request.lesson}

        JSON format:

        {
        "title": "Quiz Title",
        "questions": [
            {
            "question": "...",
            "choices": [
                "...",
                "...",
                "...",
                "..."
            ],
            "answer": "...",
            "explanation": "..."
            }
        ]
        }
        `;
    return generateFromPrompt(prompt);
}