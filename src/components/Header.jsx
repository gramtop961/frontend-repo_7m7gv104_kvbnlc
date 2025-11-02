import { useState } from 'react';
import { Menu, Search } from 'lucide-react';

export default function Header() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const anchor = document.querySelector('#posts');
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50" aria-label="Open menu">
              <Menu size={20} />
            </button>
            <a href="#" className="font-semibold text-slate-900 text-lg tracking-tight">
              BlueBlog
            </a>
          </div>

          <form onSubmit={handleSubmit} className="hidden md:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 w-72"
                placeholder="Search articles..."
                aria-label="Search"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Search
            </button>
          </form>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-600 hover:text-slate-900">Login</a>
            <a href="#" className="rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Sign up</a>
          </div>
        </div>
      </div>
    </header>
  );
}
