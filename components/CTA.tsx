import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-600/20 to-cyan-500/10 p-16 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Create Better Quizzes?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            Generate quizzes in seconds instead of spending hours writing
            questions manually.
          </p>

          <Link href="/trial">
            <button className="mt-10 rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-500">
              Get Started for Free
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}