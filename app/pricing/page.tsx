import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-28">
      {/* Hero */}
      <section className="text-center">

        <h1 className="text-5xl font-extrabold lg:text-6xl">
          Choose the plan that's
          <span className="text-indigo-500"> right for you.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Start generating quizzes for free. Upgrade anytime to unlock unlimited
          AI generations and premium features.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="mt-20 grid gap-8 lg:grid-cols-2">
        {/* Starter */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-indigo-500/40">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">🚀 Starter</h2>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-400">
              Free
            </span>
          </div>

          <h3 className="mt-8 text-5xl font-extrabold">
            $0
            <span className="text-lg font-medium text-zinc-500"> / forever</span>
          </h3>

          <p className="mt-4 text-zinc-400">
            Perfect for trying QuizForge before creating an account.
          </p>

          <Link href="trial">
          <button className="mt-8 w-full rounded-xl bg-indigo-600 py-4 font-semibold transition hover:bg-indigo-500">
            Try Free
          </button>
          </Link>

          <div className="mt-10 space-y-4 text-zinc-300">
            <div>✅ 3 AI Quiz Generations</div>
            <div>✅ Topic Generator</div>
            <div>✅ Upload PDF & DOCX</div>
            <div>✅ Download PDF Quiz</div>
            <div>✅ Answer Key Export</div>

            <div className="text-zinc-500">❌ Quiz History</div>
            <div className="text-zinc-500">❌ Unlimited Usage</div>
          </div>
        </div>

        {/* Pro */}
        <div className="relative rounded-3xl border border-indigo-500 bg-gradient-to-b from-indigo-500/10 to-zinc-900 p-8 shadow-2xl shadow-indigo-500/10">
          <span className="absolute right-6 top-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold">
            MOST POPULAR
          </span>

          <h2 className="text-2xl font-bold">⭐ Pro</h2>

          <h3 className="mt-8 text-5xl font-extrabold">
            $2
            <span className="text-lg font-medium text-zinc-400"> / month</span>
          </h3>

          <p className="mt-4 text-zinc-400">
            Designed for teachers who generate quizzes every day.
          </p>

          <button
            disabled
            className="mt-8 w-full cursor-not-allowed rounded-xl bg-white/10 py-4 font-semibold text-zinc-300"
          >
            Coming Soon
          </button>

          <div className="mt-10 space-y-4 text-zinc-300">
            <div>✅ Unlimited Quiz Generation</div>
            <div>✅ Topic Generator</div>
            <div>✅ Upload PDF & DOCX</div>
            <div>✅ Unlimited PDF Downloads</div>
            <div>✅ Quiz History</div>
            <div>✅ Faster AI Generation</div>
            <div>✅ Priority Support</div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mt-28">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Compare Plans
        </h2>

        <div className="overflow-hidden rounded-3xl border border-zinc-800">
          <table className="w-full">
            <thead className="bg-zinc-900">
              <tr>
                <th className="px-6 py-5 text-left">Feature</th>
                <th className="px-6 py-5 text-center">Starter</th>
                <th className="px-6 py-5 text-center">Pro</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800">
              {[
                ["AI Quiz Generation", "3", "Unlimited"],
                ["Topic Generator", "✓", "✓"],
                ["Lesson Upload", "✓", "✓"],
                ["PDF Export", "✓", "✓"],
                ["Answer Key", "✓", "✓"],
                ["Quiz History", "—", "✓"],
                ["Priority AI", "—", "✓"],
                ["Priority Support", "—", "✓"],
              ].map(([feature, starter, pro]) => (
                <tr key={feature}>
                  <td className="px-6 py-5 text-zinc-300">{feature}</td>
                  <td className="px-6 py-5 text-center">{starter}</td>
                  <td className="px-6 py-5 text-center text-indigo-400">
                    {pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}