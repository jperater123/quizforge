export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center gap-16 px-6 py-20 lg:flex-row">
      {/* Left Side */}
      <div className="max-w-2xl flex-1">
        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
          🚀 AI-Powered Quiz Generator
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
          Generate
          <span className="text-indigo-500"> Professional </span>
          Quizzes in Seconds.
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          QuizForge helps teachers create multiple-choice quizzes using AI.
          Generate from a topic or upload your lesson materials and let AI do
          the work.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-500">
            Get Started
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-zinc-500">
            Learn More
          </button>
        </div>

        <div className="mt-12 flex gap-8 text-sm text-zinc-500">
          <span>✓ AI Generated</span>
          <span>✓ Teacher Friendly</span>
          <span>✓ Export Ready</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 justify-center">
        <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-semibold">Quiz Preview</h3>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
              Generated
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-2 text-sm text-zinc-500">Subject</p>
              <div className="rounded-lg bg-zinc-800 p-3">
                Science
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-zinc-500">Topic</p>
              <div className="rounded-lg bg-zinc-800 p-3">
                Solar System
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-zinc-500">
                Sample Question
              </p>

              <div className="rounded-xl bg-zinc-800 p-4">
                Which planet is closest to the Sun?

                <div className="mt-4 space-y-2">
                  <div className="rounded-lg bg-zinc-700 p-2">
                    Mercury
                  </div>

                  <div className="rounded-lg bg-zinc-700 p-2">
                    Venus
                  </div>

                  <div className="rounded-lg bg-zinc-700 p-2">
                    Earth
                  </div>

                  <div className="rounded-lg bg-zinc-700 p-2">
                    Mars
                  </div>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full rounded-xl bg-indigo-600 py-3 font-semibold">
              Export Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}