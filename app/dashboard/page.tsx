import { createClient } from "@/src/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { NextResponse } from "next/server";

export default async function DashboardPage() {

    const supabase = await createClient();

    const {
       data: { user },
           } = await (await createClient()).auth.getUser();
        
        console.log("User data:", user); // Debugging line to check the user data
        if(!user) {
            redirect('/login');
        }

  return (
    <main className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-sm text-indigo-400">
              Teacher Workspace
            </p>

            <h1 className="mt-2 text-4xl font-bold">
              Good { new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 18 ? "Afternoon" : "Evening" }, { user?.user_metadata?.full_name?.split(' ')[0] || "there" } 👋
            </h1>

            <p className="mt-3 text-zinc-400">
              Ready to create another classroom-ready quiz?
            </p>
          </div>

          <Link
            href="/trial"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500"
          >
            New Quiz
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2">

          <Link
            href="/trial"
            className="rounded-3xl border border-indigo-500/20 bg-zinc-900 p-8 transition hover:border-indigo-500"
          >
            <div className="text-5xl">📝</div>

            <h2 className="mt-6 text-2xl font-bold">
              Generate from Topic
            </h2>

            <p className="mt-3 text-zinc-400">
              Enter a subject and let AI create a quiz instantly.
            </p>
          </Link>

          <Link
            href="/trial"
            className="rounded-3xl border border-indigo-500/20 bg-zinc-900 p-8 transition hover:border-indigo-500"
          >
            <div className="text-5xl">📄</div>

            <h2 className="mt-6 text-2xl font-bold">
              Upload Lesson
            </h2>

            <p className="mt-3 text-zinc-400">
              Upload a PDF or DOCX and generate questions from your lesson.
            </p>
          </Link>

        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-zinc-500">
              Total Quizzes
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              24
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-zinc-500">
              This Month
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              8
            </h2>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-zinc-500">
              Current Plan
            </p>

            <h2 className="mt-3 text-4xl font-bold text-indigo-400">
              { user?.user_metadata?.plan || "Starter"}
            </h2>
          </div>

        </div>

        {/* Recent Quizzes */}
        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Recent Quizzes
            </h2>

            <Link
              href="#"
              className="text-indigo-400 hover:text-indigo-300"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">

            <div className="rounded-2xl border border-zinc-800 p-5">
              <h3 className="font-semibold">
                Science • Solar System
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Generated 2 hours ago
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-5">
              <h3 className="font-semibold">
                English • Parts of Speech
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Yesterday
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 p-5">
              <h3 className="font-semibold">
                Mathematics • Fractions
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                2 days ago
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}