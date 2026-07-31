// components/QuizPreview.tsx
import type { GeneratedQuiz } from "@/src/lib/types";

export function QuizPreview({ quiz }: { quiz: GeneratedQuiz }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-zinc-100">{quiz.title}</h2>

      <div className="mt-5 space-y-5">
        {quiz.questions.map((q, i) => (
          <div key={i} className="rounded-2xl border border-indigo-500/20 bg-black/20 p-6">
            <p className="text-sm font-semibold text-zinc-100">
              {i + 1}. {q.question}
            </p>

            <div className="mt-4 space-y-2">
              {q.choices.map((choice) => (
                <div
                  key={choice}
                  className={`rounded-lg border px-3 py-2 text-sm ${
                    choice === q.answer
                      ? "border-indigo-500/50 bg-indigo-500/10 text-white"
                      : "border-zinc-800 text-zinc-400"
                  }`}
                >
                  {choice}
                </div>
              ))}
            </div>

            {q.explanation && (
              <p className="mt-3 text-xs text-zinc-400">{q.explanation}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}