const features = [
  {
    title: "Generate by Topic",
    description:
      "Create complete quizzes from any subject and topic in seconds using AI.",
  },
  {
    title: "Generate from Lesson",
    description:
      "Paste your lesson or upload materials and let AI generate questions based on the content.",
  },
  {
    title: "Export & Print",
    description:
      "Download quizzes as PDF or Word documents, or print them instantly.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-zinc-900 bg-zinc-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-4xl font-bold">
            Everything You Need to Build Quizzes
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Save hours of manual work and focus on teaching while QuizForge
            creates professional quizzes for you.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-500"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-2xl">
                ✨
              </div>

              <h3 className="text-2xl font-semibold">{feature.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}