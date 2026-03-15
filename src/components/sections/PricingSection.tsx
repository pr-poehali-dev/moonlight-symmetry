import { Check } from "lucide-react"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Пользователь",
    emoji: "👤",
    tag: "USER",
    description: "Базовая роль для всех игроков сервера",
    price: "Бесплатно",
    period: "",
    features: [
      "Доступ ко всем режимам",
      "Базовый чат",
      "Личный дом (1 шт.)",
      "Стандартный инвентарь",
      "Участие в ивентах",
    ],
    cta: "Уже выбрано ✓",
    selected: true,
    border: "border-amber-600/60",
    bg: "bg-gradient-to-b from-amber-950/50 to-zinc-900",
    tagStyle: "bg-amber-900/60 text-amber-400 border border-amber-700/50",
    topLine: "from-transparent via-amber-500 to-transparent",
    ctaStyle: "bg-amber-500/20 text-amber-400 border border-amber-600/40 cursor-default",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.1)]",
  },
  {
    name: "Хелпер",
    emoji: "🤝",
    tag: "HELPER",
    description: "Помощник администрации. С Хелпера можно повыситься до Модератора и выше!",
    price: "Discord",
    period: "подать заявку",
    features: [
      "Всё из Пользователя",
      "Тег [HELPER] в чате",
      "Помощь новичкам",
      "Доступ к тикетам",
      "⬆️ Повышение до Модератора",
    ],
    cta: "Получить в Discord",
    border: "border-sky-700/40",
    bg: "bg-gradient-to-b from-sky-950/30 to-zinc-900",
    tagStyle: "bg-sky-900/60 text-sky-400 border border-sky-700/50",
    topLine: "from-transparent via-sky-500 to-transparent",
    ctaStyle: "bg-sky-900/40 text-sky-300 hover:bg-sky-800/50 border border-sky-700/40",
    glow: "",
    href: "https://discord.gg/dAunh3S2YQ",
  },
  {
    name: "YouTube",
    emoji: "▶️",
    tag: "YOUTUBE",
    description: "Для YouTube-блогеров. Уникальный тег и доступ к медиа-зоне.",
    price: "Discord",
    period: "при 1к+ подписчиков",
    features: [
      "Всё из Пользователя",
      "Тег [YOUTUBE] в чате",
      "Доступ к медиа-зоне",
      "Публикация новостей",
      "Уникальный цвет ника",
    ],
    cta: "Получить в Discord",
    border: "border-red-700/40",
    bg: "bg-gradient-to-b from-red-950/30 to-zinc-900",
    tagStyle: "bg-red-900/60 text-red-400 border border-red-700/50",
    topLine: "from-transparent via-red-500 to-transparent",
    ctaStyle: "bg-red-900/40 text-red-300 hover:bg-red-800/50 border border-red-700/40",
    glow: "",
    href: "https://discord.gg/dAunh3S2YQ",
  },
  {
    name: "TikTok",
    emoji: "🎵",
    tag: "TIKTOK",
    description: "Для TikTok-блогеров. Уникальный тег и привилегии контент-мейкера.",
    price: "Discord",
    period: "при 1к+ подписчиков",
    features: [
      "Всё из Пользователя",
      "Тег [TIKTOK] в чате",
      "Доступ к медиа-зоне",
      "Публикация новостей",
      "Уникальный цвет ника",
    ],
    cta: "Получить в Discord",
    border: "border-pink-700/40",
    bg: "bg-gradient-to-b from-pink-950/30 to-zinc-900",
    tagStyle: "bg-pink-900/60 text-pink-400 border border-pink-700/50",
    topLine: "from-transparent via-pink-500 to-transparent",
    ctaStyle: "bg-pink-900/40 text-pink-300 hover:bg-pink-800/50 border border-pink-700/40",
    glow: "",
    href: "https://discord.gg/dAunh3S2YQ",
  },
  {
    name: "Медиа",
    emoji: "🎥",
    tag: "MEDIA",
    description: "Универсальная медиа-роль для крупных контент-мейкеров на любой платформе.",
    price: "Discord",
    period: "при 10к+ подписчиков",
    features: [
      "Всё из YouTube/TikTok",
      "Тег [МЕДИА] в чате",
      "VIP медиа-зона",
      "Приоритетная поддержка",
      "Особый цвет ника",
    ],
    cta: "Получить в Discord",
    border: "border-purple-700/40",
    bg: "bg-gradient-to-b from-purple-950/30 to-zinc-900",
    tagStyle: "bg-purple-900/60 text-purple-400 border border-purple-700/50",
    topLine: "from-transparent via-purple-500 to-transparent",
    ctaStyle: "bg-purple-900/40 text-purple-300 hover:bg-purple-800/50 border border-purple-700/40",
    glow: "",
    href: "https://discord.gg/dAunh3S2YQ",
  },
]

const socials = [
  { emoji: "✈️", label: "Телеграм канал", value: "@GliachWorld", href: "https://t.me/GliachWorld" },
  { emoji: "💬", label: "Чат Telegram", value: "GliachWorldChat", href: "https://t.me/GliachWorldChat" },
  { emoji: "🎮", label: "Discord", value: "Сервер Discord", href: "https://discord.gg/dAunh3S2YQ" },
  { emoji: "🔵", label: "ВКонтакте", value: "vk.com/GliachWorld", href: "https://vk.com/GliachWorld" },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-4">Роли & Привилегии</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-zinc-100 mb-4 leading-tight">
            Выбери свою роль
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Каждому найдётся место на GliachWorld. Контент-мейкеры получают роль через Discord!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mb-16 rounded-none">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-5 rounded-2xl border flex flex-col h-full relative overflow-hidden ${plan.border} ${plan.bg} ${plan.glow}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${plan.topLine}`} />

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{plan.emoji}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full font-mono ${plan.tagStyle}`}>Медиа</span>
                </div>
                <h3 className="font-heading text-base font-semibold text-zinc-100 mb-1">{plan.name}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-4">
                <span className="font-heading text-xl font-bold text-zinc-100">{plan.price}</span>
                {plan.period && (
                  <span className="text-xs text-zinc-600 ml-1 block mt-0.5">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-2 mb-5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-zinc-500" />
                    <span className="text-xs text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={"href" in plan ? plan.href : "#"}
                target={"href" in plan ? "_blank" : undefined}
                rel={"href" in plan ? "noopener noreferrer" : undefined}
                className={`block w-full py-2 px-3 text-center rounded-full font-medium text-xs transition-colors mt-auto ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Socials block */}
        <div className="rounded-2xl border border-amber-900/30 bg-zinc-900/40 p-6">
          <div className="flex items-center gap-2 mb-5">
            <Icon name="Share2" size={18} className="text-amber-400" />
            <h3 className="font-heading font-semibold text-zinc-100">Наши соцсети</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950 border border-zinc-800/50 hover:border-amber-800/50 transition-colors group"
              >
                <span className="text-xl">{s.emoji}</span>
                <div>
                  <p className="text-xs text-zinc-500">{s.label}</p>
                  <p className="text-sm text-zinc-300 group-hover:text-amber-400 transition-colors font-medium">{s.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}