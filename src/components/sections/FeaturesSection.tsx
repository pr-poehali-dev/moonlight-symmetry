import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Sword",
    title: "PvP & Выживание",
    description: "Хардкорный PvP с уникальными механиками, кланами и экономикой. Стань сильнейшим на сервере!",
    wide: true,
    stats: [
      { label: "Игроков в PvP", value: "247", change: "+18%" },
      { label: "Кланов", value: "34", change: "+5" },
      { label: "Арен", value: "12", change: "Новые" },
    ],
  },
  {
    icon: "Zap",
    title: "Уникальные плагины",
    description: "Кастомные плагины, разработанные специально для GliachWorld.",
    wide: false,
    highlight: "100+ кастомных плагинов",
  },
  {
    icon: "Shield",
    title: "Анти-чит защита",
    description: "Честная игра гарантирована. Многоуровневая система защиты от читеров.",
    wide: false,
  },
  {
    icon: "Globe",
    title: "Мини-игры",
    description: "Бедварс, Скайварс, Кид-Фах и ещё 10+ режимов для любого настроения.",
    wide: false,
  },
  {
    icon: "Star",
    title: "Привилегии & Донат",
    description: "Поддержи сервер и получи уникальные возможности: скины, кейсы, бусты.",
    wide: false,
  },
]

const gameEvents = [
  { emoji: "🏆", label: "Турнир по PvP", time: "Сегодня 20:00" },
  { emoji: "🎁", label: "Ивент с призами", time: "Пт 19:00" },
  { emoji: "⚒️", label: "Строительный конкурс", time: "Вс 15:00" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-green-600 uppercase tracking-wider mb-4">О сервере</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-zinc-100 mb-4 leading-tight">
            Всё для эпичной игры
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            GliachWorld — это не просто сервер. Это мир, где каждый найдёт что-то своё.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Card 1 - Stats (wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-green-900/30 bg-zinc-900/50 hover:border-green-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-green-950 flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon name="Sword" size={20} className="text-green-400" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Статистика сервера</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Живые данные — онлайн, игроки, активность прямо сейчас.
                </p>
                <div className="rounded-xl border border-green-900/30 bg-zinc-950 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="online-dot" />
                      <span className="text-xs text-green-400">ONLINE</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Онлайн", value: "247", change: "🟢 макс" },
                      { label: "Зарегистрировано", value: "12 тыс", change: "+89 сегодня" },
                      { label: "Апtime", value: "99.9%", change: "Стабильно" },
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        className="bg-zinc-900/50 rounded-lg p-2.5"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <p className="text-zinc-500 text-xs mb-1">{metric.label}</p>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-zinc-100 font-semibold text-sm">{metric.value}</span>
                          <motion.span
                            className="text-green-500 text-xs"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {metric.change}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[35, 55, 40, 75, 50, 85, 60, 70, 45, 90, 65, 80].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-green-900 to-green-500 rounded-sm origin-bottom"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: h / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.04, ease: "easeOut" }}
                        whileHover={{ scaleY: 1, transition: { duration: 0.2 } }}
                      />
                    ))}
                  </div>
                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-green-700 to-transparent mt-3"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 - Ивенты */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-green-900/30 bg-zinc-900/50 hover:border-green-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-green-950 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon name="Calendar" size={20} className="text-green-400" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Ближайшие ивенты</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">Не пропусти активности на сервере.</p>
                <div className="mt-auto space-y-3">
                  {gameEvents.map((event, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-green-900/20"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{event.emoji}</span>
                        <span className="text-sm text-zinc-300">{event.label}</span>
                      </div>
                      <span className="text-xs text-green-500">{event.time}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom 3 cards */}
          {[
            { icon: "Shield", title: "Анти-чит", desc: "Честная игра. Многоуровневая защита от читеров и гриферов.", delay: 0.3 },
            { icon: "Gamepad2", title: "Мини-игры", desc: "Бедварс, Скайварс, Кид-Фах и ещё 10+ режимов.", delay: 0.4 },
            { icon: "Users", title: "Сообщество", desc: "Дружный Discord, стримы, конкурсы и активные игроки.", delay: 0.5 },
          ].map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.delay }}
              className="md:col-span-1 md:col-span-1"
              style={{ gridColumn: "span 1" }}
            >
              <Card className="group h-full overflow-hidden border-green-900/30 bg-zinc-900/50 hover:border-green-600/40 transition-all duration-300 rounded-2xl">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-green-950 flex items-center justify-center mb-3 group-hover:bg-green-900/50 transition-colors">
                    <Icon name={card.icon} size={20} className="text-green-400" />
                  </div>
                  <p className="font-heading font-semibold text-zinc-100 mb-2">{card.title}</p>
                  <p className="text-zinc-500 text-sm">{card.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
