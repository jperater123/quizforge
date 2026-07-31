export interface QuizRequest {
  subject: string;
  topic: string;
  gradeLevel: string;
  difficulty: string;
  numberOfQuestions: number;
}

export interface Question {
  question: string;
  choices: string[];
  answer: string;
  explanation: string;
}

export interface GeneratedQuiz {
  title: string;
  questions: Question[];
}

export interface LessonQuizRequest {
  lesson: string;
  numberOfQuestions: number;
}