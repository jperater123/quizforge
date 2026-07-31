// app/trial/page.tsx
"use client";

import { useState } from "react";
import { LessonUploader } from "@/components/LessonUploader";
import { QuizPreview } from "@/components/QuizPreview";
import type { GeneratedQuiz, LessonQuizRequest, QuizRequest } from "@/src/lib/types";
import { downloadQuizPdf } from "@/src/lib/downloadQuizPdf";

type Mode = "topic" | "lesson";

export default function TrialPage() {
  const [mode, setMode] = useState<Mode>("topic");
  console.log("Current mode:", mode); // Debugging line to check the current mode

  // topic inputs
  const [topic, setTopic] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");

  // lesson input
  const [lessonText, setLessonText] = useState("");

  const [quiz, setQuiz] = useState<GeneratedQuiz | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canGenerate = mode === "topic" ? topic.trim().length > 0 : lessonText.trim().length > 0;

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    setQuiz(null);

    try {
      const endpoint = mode === "topic" ? "/api/generate-test" : "/api/generate-lesson-test";
      const payload =
        mode === "topic"
          ? ({
              subject: topic,
              topic,
              gradeLevel: gradeLevel || "General",
              difficulty,
              numberOfQuestions: 5,
            } satisfies QuizRequest)
          : ({ lesson: lessonText, numberOfQuestions: 5 } satisfies LessonQuizRequest);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate quiz.");

      setQuiz(data as GeneratedQuiz);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Generate a Quiz</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">
            Give QuizForge a topic or a lesson file — get a ready-to-use quiz back in seconds.
          </p>
        </div>

        {/* Mode tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode("topic")}
            className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition ${
              mode === "topic"
                ? "border-indigo-500/40 bg-indigo-500/10 text-white"
                : "border-zinc-800 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Topic Generator
          </button>
          <button
            onClick={() => setMode("lesson")}
            className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition ${
              mode === "lesson"
                ? "border-indigo-500/40 bg-indigo-500/10 text-white"
                : "border-zinc-800 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Lesson Generator
          </button>
        </div>

        <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-600/20 to-cyan-500/10 p-8">
          {mode === "topic" ? (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Topic, e.g. The Solar System"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-xl border border-indigo-500/20 bg-black/20 px-4 py-3 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Grade level, e.g. 8th Grade"
                  value={gradeLevel}
                  onChange={(e) => setGradeLevel(e.target.value)}
                  className="rounded-xl border border-indigo-500/20 bg-black/20 px-4 py-3 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="rounded-xl border border-indigo-500/20 bg-black/20 px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
          ) : (
            <LessonUploader onExtracted={setLessonText} />
          )}
        </div>

        <button
          onClick={handleGenerate}
          disabled={!canGenerate || loading}
          className="mt-6 w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Generating Quiz..." : "Generate Quiz"}
        </button>

        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

        {quiz && <QuizPreview quiz={quiz} />}

        {quiz && (
            <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                onClick={() => downloadQuizPdf(quiz, "student")}
                className="rounded-xl border border-indigo-500/30 bg-black/20 px-6 py-3 font-semibold text-white transition hover:border-indigo-500/60"
                >
                Download Quiz (Student Copy)
                </button>
                <button
                onClick={() => downloadQuizPdf(quiz, "answerKey")}
                className="rounded-xl border border-indigo-500/30 bg-black/20 px-6 py-3 font-semibold text-white transition hover:border-indigo-500/60"
                >
                Download Answer Key
                </button>
            </div>
            )}

      </div>
    </main>
  );
}