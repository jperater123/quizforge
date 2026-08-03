// app/login/page.tsx
'use client';
import { createClient } from "@/src/lib/supabase/client";
import Link from "next/link";

async function handleGoogleLogin() {

    const supabase = await createClient();
        console.log("Initiating Google login..."); // Debugging line to check if the function is called
        try {
            await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                }
            });
        }
        catch (error) {
            console.error("Error during Google login:", error);
        }
    }
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <div className="text-center">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-400">
            Continue with QuizForge
          </span>

          <h1 className="mt-6 text-4xl font-bold">
            Welcome to <span className="text-indigo-500">QuizForge</span>
          </h1>

          <p className="mt-3 text-zinc-400">
            Sign in to continue generating AI-powered quizzes.
          </p>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 font-semibold transition hover:border-indigo-500 hover:bg-zinc-700"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
            />
          </svg>

          Continue with Google
        </button>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-sm text-zinc-500">or</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <Link
          href="/trial"
          className="block w-full rounded-xl border border-zinc-700 py-4 text-center font-semibold transition hover:border-zinc-600"
        >
          Continue as Guest
        </Link>

        <p className="mt-8 text-center text-sm text-zinc-500">
          New here?{" "}
          <Link
            href="/pricing"
            className="text-indigo-400 hover:text-indigo-300"
          >
            View Pricing
          </Link>
        </p>
      </div>
    </main>
  );
}