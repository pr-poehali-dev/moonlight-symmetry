const footerLinks = {
  server: [
    { label: "О сервере", href: "#features" },
    { label: "Роли & Донаты", href: "#pricing" },
    { label: "Состав", href: "#team" },
    { label: "Новости", href: "/news" },
  ],
  community: [
    { label: "Telegram канал", href: "https://t.me/GliachWorld", external: true },
    { label: "Чат Telegram", href: "https://t.me/GliachWorldChat", external: true },
    { label: "Discord", href: "https://discord.gg/dAunh3S2YQ", external: true },
    { label: "ВКонтакте", href: "https://vk.com/GliachWorld", external: true },
  ],
  help: [
    { label: "Правила сервера", href: "#", external: false },
    { label: "Поддержка", href: "https://discord.gg/dAunh3S2YQ", external: true },
    { label: "FAQ", href: "#", external: false },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-amber-900/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl">⛏️</span>
              <span className="font-display text-sm text-amber-400">GliachWorld</span>
            </a>
            <p className="text-sm text-zinc-500 max-w-xs mb-4">
              Лучший Minecraft-сервер с режимом анархии и дружным сообществом.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-950/40 border border-red-900/30 w-fit">
              <span className="offline-dot" />
              <span className="text-xs text-red-400">Тех. Работы</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Сервер</h4>
            <ul className="space-y-3">
              {footerLinks.server.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-amber-400 transition-colors">
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
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-zinc-500 hover:text-amber-400 transition-colors"
                  >
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
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-zinc-500 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-900/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} GliachWorld. Все права защищены.</p>
            <p className="text-xs text-zinc-700">Не является официальным продуктом Mojang Studios</p>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <a href="https://t.me/GliachWorld" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Telegram">✈️</a>
            <a href="https://discord.gg/dAunh3S2YQ" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Discord">🎮</a>
            <a href="https://vk.com/GliachWorld" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="VK">🔵</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
