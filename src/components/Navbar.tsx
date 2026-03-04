const navLinks = [
  { href: "#features", label: "О сервере" },
  { href: "#team", label: "Состав" },
  { href: "#pricing", label: "Донаты" },
  { href: "/news", label: "Новости" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-amber-900/50 backdrop-blur-md">
        <a href="/" className="flex items-center gap-2">
          <span className="text-lg">⛏️</span>
          <span className="font-display text-sm font-semibold text-amber-400 tracking-tight">
            GliachWorld
          </span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="offline-dot" />
            <span className="text-xs text-red-400 font-medium">Тех. Работы</span>
          </div>
          <a
            href="#pricing"
            className="px-4 py-1.5 text-sm rounded-full bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition-colors"
          >
            Донат
          </a>
        </div>
      </nav>
    </header>
  )
}