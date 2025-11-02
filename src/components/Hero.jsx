import { PenSquare, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-medium">
              <Star size={14} /> Fresh stories daily
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Discover ideas, insights, and inspiration
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              BlueBlog is a modern space for writers and readers. Explore curated articles on design, development, productivity, and more.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#posts" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
                Browse Latest Posts
              </a>
              <a href="#" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-900 hover:bg-white">
                <span className="inline-flex items-center gap-2">
                  <PenSquare size={18} /> Start Writing
                </span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 p-[2px] shadow-lg">
              <div className="h-full w-full rounded-2xl bg-white/90 backdrop-blur">
                <div className="h-full w-full p-6 grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm" />
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-28 w-28 rounded-full bg-indigo-200/50 blur-2xl" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-sky-200/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
