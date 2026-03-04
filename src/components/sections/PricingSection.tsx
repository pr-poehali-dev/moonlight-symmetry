import { Check } from "lucide-react"

const plans = [
  {
    name: "Пользователь",
    emoji: "👤",
    description: "Базовая привилегия для всех игроков",
    price: "Бесплатно",
    period: "",
    features: [
      "Доступ ко всем режимам",
      "Базовый чат",
      "Личный дом (1 шт.)",
      "Стандартный инвентарь",
      "Участие в ивентах",
    ],
    cta: "Начать играть",
    highlighted: false,
    gradient: "",
  },
  {
    name: "Медиа",
    emoji: "🎥",
    description: "Для YouTube и TikTok блогеров",
    price: "Бесплатно",
    period: "при 10к+ подписчиков",
    features: [
      "Всё из Пользователя",
      "Тег [МЕДИА] в чате",
      "Доступ к медиа-зоне",
      "Публикация новостей",
      "Приоритетная поддержка",
      "Уникальный ник-цвет",
    ],
    cta: "Подать заявку",
    highlighted: false,
    gradient: "border-purple-800/50 bg-purple-950/20",
    tagColor: "text-purple-400",
  },
  {
    name: "Донатер",
    emoji: "⭐",
    description: "Поддержи сервер и получи бонусы",
    price: "199 ₽",
    period: "/мес",
    features: [
      "Всё из Пользователя",
      "Тег [VIP] в чате",
      "3 личных дома",
      "Расширенный инвентарь",
      "Эксклюзивные кейсы",
      "Бонусы каждый день",
      "Приватные острова",
    ],
    cta: "Купить привилегию",
    highlighted: true,
    gradient: "",
    tagColor: "text-yellow-400",
  },
  {
    name: "Админ",
    emoji: "👑",
    description: "Только для администрации сервера",
    price: "По назначению",
    period: "",
    features: [
      "Всё из Донатера",
      "Тег [ADMIN] в чате",
      "Управление сервером",
      "Публикация новостей",
      "Бан и кик игроков",
      "Доступ к консоли",
      "Максимальные права",
    ],
    cta: "Только для команды",
    highlighted: false,
    gradient: "border-red-900/40 bg-red-950/10",
    tagColor: "text-red-400",
    disabled: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-green-600 uppercase tracking-wider mb-4">Привилегии</p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-zinc-100 mb-4 leading-tight">
            Выбери свою роль
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg">
            Поддержи сервер и получи уникальные возможности. Все донаты идут на развитие GliachWorld!
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 rounded-2xl border flex flex-col h-full relative overflow-hidden ${
                plan.highlighted
                  ? "bg-gradient-to-b from-green-950/80 to-zinc-900 border-green-600/60"
                  : plan.gradient
                  ? plan.gradient
                  : "bg-zinc-900/50 border-zinc-800/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              )}

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{plan.emoji}</span>
                  <h3 className={`font-heading text-lg font-semibold ${plan.highlighted ? "text-green-400" : plan.tagColor || "text-zinc-100"}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className="text-sm text-zinc-500">{plan.description}</p>
              </div>

              <div className="mb-5">
                <span className={`font-display text-2xl font-bold ${plan.highlighted ? "text-zinc-100" : "text-zinc-100"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-zinc-500 ml-1">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-green-400" : "text-zinc-500"}`} />
                    <span className="text-sm text-zinc-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full py-2.5 px-4 text-center rounded-full font-medium text-sm transition-colors mt-auto ${
                  plan.disabled
                    ? "bg-zinc-800/50 text-zinc-600 cursor-not-allowed"
                    : plan.highlighted
                    ? "bg-green-500 text-zinc-950 hover:bg-green-400"
                    : "bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
