import { ArrowLeft } from "lucide-react"
import Icon from "@/components/ui/icon"

const posts = [
  {
    id: 1,
    tag: "Обновление",
    tagColor: "bg-amber-900/60 text-amber-400 border border-amber-700/50",
    title: "Сервер скоро откроется!",
    excerpt: "Мы активно работаем над запуском GliachWorld. Следите за новостями в нашем Telegram и Discord — анонс совсем скоро!",
    author: "Gliach",
    authorRole: "👑 Основатель",
    date: "4 марта 2026",
    emoji: "🚀",
  },
  {
    id: 2,
    tag: "Анонс",
    tagColor: "bg-sky-900/60 text-sky-400 border border-sky-700/50",
    title: "Режим Анархия — что это?",
    excerpt: "На нашем сервере будет режим полной анархии. Никаких правил, PvP везде, гриферство разрешено. Выживи любой ценой и стань легендой GliachWorld!",
    author: "Gliach",
    authorRole: "👑 Основатель",
    date: "3 марта 2026",
    emoji: "🏴",
  },
  {
    id: 3,
    tag: "Новость",
    tagColor: "bg-purple-900/60 text-purple-400 border border-purple-700/50",
    title: "Как получить роль Медиа / YouTube / TikTok?",
    excerpt: "Если ты контент-мейкер с аудиторией 1к+ подписчиков — заходи в наш Discord и подавай заявку на медиа-роль. Мы рассматриваем все заявки!",
    author: "DevMaster",
    authorRole: "🔧 Разработчик",
    date: "2 марта 2026",
    emoji: "🎥",
  },
]

const socials = [
  { emoji: "✈️", label: "@GliachWorld", href: "https://t.me/GliachWorld" },
  { emoji: "💬", label: "Чат TG", href: "https://t.me/GliachWorldChat" },
  { emoji: "🎮", label: "Discord", href: "https://discord.gg/dAunh3S2YQ" },
  { emoji: "🔵", label: "ВКонтакте", href: "https://vk.com/GliachWorld" },
]

export default function News() {
  return (
    <div className="min-h-screen bg-zinc-950 dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-4">
        <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-amber-900/50 backdrop-blur-md">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg">⛏️</span>
            <span className="font-display text-sm font-semibold text-amber-400 tracking-tight">GliachWorld</span>
          </a>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="offline-dot" />
              <span className="text-xs text-red-400 font-medium">Тех. Работы</span>
            </div>
            <a
              href="#"
              className="px-4 py-1.5 text-sm rounded-full bg-amber-500 text-zinc-950 font-semibold hover:bg-amber-400 transition-colors"
            >
              Донат
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          На главную
        </a>

        {/* Page title */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs bg-amber-900/60 text-amber-400 px-3 py-1 rounded-full border border-amber-700/50 font-medium">
              Новостной портал
            </span>
          </div>
          <h1 className="font-display text-2xl md:text-4xl font-bold text-zinc-100 mb-3 leading-tight">
            Новости GliachWorld
          </h1>
          <p className="text-zinc-500">
            Актуальные новости, обновления и объявления от администрации.
          </p>
        </div>

        {/* Notice for admins */}
        <div className="mb-10 p-4 rounded-xl border border-amber-800/40 bg-amber-950/20 flex items-start gap-3">
          <Icon name="Info" size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <p className="text-sm text-zinc-400">
            Публиковать новости могут только <span className="text-amber-400 font-medium">Администраторы</span> и члены <span className="text-purple-400 font-medium">Медиа-группы</span>.
            Хочешь стать частью команды? Заходи в{" "}
            <a href="https://discord.gg/dAunh3S2YQ" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">Discord</a>.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6 mb-16">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 hover:border-amber-900/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl shrink-0">{post.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${post.tagColor}`}>
                      {post.tag}
                    </span>
                    <span className="text-xs text-zinc-600">{post.date}</span>
                  </div>
                  <h2 className="font-heading text-lg font-semibold text-zinc-100 mb-2 group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-600">Автор:</span>
                    <span className="text-sm font-medium text-zinc-400">{post.author}</span>
                    <span className="text-xs text-zinc-600">{post.authorRole}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Socials block */}
        <div className="rounded-2xl border border-amber-900/30 bg-zinc-900/40 p-6">
          <h3 className="font-heading font-semibold text-zinc-100 mb-4">Следи за новостями</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-zinc-950 border border-zinc-800/50 hover:border-amber-800/50 transition-colors group"
              >
                <span className="text-lg">{s.emoji}</span>
                <span className="text-sm text-zinc-400 group-hover:text-amber-400 transition-colors">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="px-6 py-8 border-t border-amber-900/20 text-center">
        <p className="text-sm text-zinc-700">© {new Date().getFullYear()} GliachWorld · Не является продуктом Mojang Studios</p>
      </footer>
    </div>
  )
}
