export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} BlueBlog. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900">About</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
