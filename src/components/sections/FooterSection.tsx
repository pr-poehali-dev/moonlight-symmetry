import Icon from "@/components/ui/icon"

const footerLinks = {
  server: [
    { label: "О сервере", href: "#features" },
    { label: "Донаты", href: "#pricing" },
    { label: "Состав", href: "#team" },
    { label: "Новости", href: "#" },
  ],
  community: [
    { label: "Discord", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "ВКонтакте", href: "#" },
  ],
  help: [
    { label: "Правила сервера", href: "#" },
    { label: "Поддержка", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-green-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl">⛏️</span>
              <span className="font-display text-sm text-green-400">GliachWorld</span>
            </a>
            <p className="text-sm text-zinc-500 max-w-xs mb-4">
              Лучший Minecraft-сервер с уникальными режимами и дружным сообществом.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-950/40 border border-green-900/30 w-fit">
              <span className="online-dot" />
              <span className="text-xs text-green-400">Сервер онлайн</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Сервер</h4>
            <ul className="space-y-3">
              {footerLinks.server.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-green-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Сообщество</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-green-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Помощь</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-green-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-green-900/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} GliachWorld. Все права защищены.</p>
            <p className="text-xs text-zinc-700">Не является официальным продуктом Mojang Studios</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-green-700 bg-green-950/40 border border-green-900/30 px-3 py-1.5 rounded-lg">
              play.gliachworld.ru
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
