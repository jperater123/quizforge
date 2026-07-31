export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <h2 className="text-lg font-bold text-white">
          Quiz<span className="text-indigo-500">Forge</span>
        </h2>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Features
          </a>

          <a href="#" className="hover:text-white">
            Pricing
          </a>

          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>

        <p>© 2026 QuizForge. All rights reserved.</p>
      </div>
    </footer>
  );
}