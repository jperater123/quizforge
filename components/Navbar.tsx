'use client';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => window.location.href = '/'}>
          Quiz<span className="text-indigo-500">Forge</span>
        </h1>

        <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
          <a href="/trial" className="hover:text-white">
            Try Free
          </a>

          <a href="/pricing" className="hover:text-white">
            Pricing
          </a>

          <a href="/login" className="hover:text-white">
            Login
          </a>
        </nav>

        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium transition hover:bg-indigo-500 cursor-pointer" onClick={() => window.location.href = '/trial'}>
          Get Started
        </button>
      </div>
    </header>
  );
}