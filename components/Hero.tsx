import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center gap-20 px-6 py-20 lg:flex-row">
        {/* Left */}
        <div className="flex-1 max-w-2xl">

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
            Spend Less Time
            <br />
            <span className="text-indigo-500">
              Creating Quizzes.
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Upload your lesson material or enter a topic and let QuizForge
            generate classroom-ready quizzes complete with answer keys and
            printable PDFs in seconds.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/trial"
              className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-500"
            >
              Start Free Trial
            </Link>

            <Link
              href="/pricing"
              className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold transition hover:border-indigo-500"
            >
              View Pricing
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-500">
            <span>✓ 3 Free Quiz Generations</span>
            <span>✓ PDF Export</span>
            <span>✓ AI Answer Keys</span>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Lesson */}
          <div className="absolute left-0 top-12 w-72 rotate-[-8deg] rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold">Lesson.pdf</span>
              <span className="text-xs text-zinc-500">Uploaded</span>
            </div>

            <div className="space-y-3 text-sm text-zinc-400">
              <div className="h-3 w-3/4 rounded bg-zinc-800" />
              <div className="h-3 rounded bg-zinc-800" />
              <div className="h-3 w-5/6 rounded bg-zinc-800" />
              <div className="h-3 rounded bg-zinc-800" />
              <div className="h-3 w-2/3 rounded bg-zinc-800" />
            </div>
          </div>

          {/* AI */}
          <div className="z-20 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-6 py-4 text-lg font-semibold text-indigo-300 backdrop-blur">
            ✨ QuizForge AI
          </div>

          {/* Quiz */}
          <div className="absolute right-0 top-20 w-72 rotate-[8deg] rounded-3xl border border-indigo-500/20 bg-zinc-900 p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold">Quiz.pdf</span>

              <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-400">
                Ready
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl bg-zinc-800 p-3 text-sm">
                Which planet is closest to the Sun?
              </div>

              <div className="space-y-2">
                <div className="rounded-lg bg-zinc-800 p-2 text-sm">
                  A. Mercury
                </div>

                <div className="rounded-lg bg-zinc-800 p-2 text-sm">
                  B. Venus
                </div>

                <div className="rounded-lg bg-zinc-800 p-2 text-sm">
                  C. Earth
                </div>

                <div className="rounded-lg bg-zinc-800 p-2 text-sm">
                  D. Mars
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-0 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4 shadow-xl">
            <p className="text-sm text-zinc-500">
              Generated in
            </p>

            <h3 className="text-2xl font-bold text-indigo-400">
              12 seconds ⚡
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}