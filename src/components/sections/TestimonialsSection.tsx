import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"
import Icon from "@/components/ui/icon"

const teamMembers = [
  {
    text: "Слежу за порядком на сервере и помогаю новичкам освоиться. GliachWorld — это семья!",
    image: "https://mc-heads.net/avatar/MHF_Steve/80",
    name: "Gliach",
    role: "👑 Основатель",
  },
  {
    text: "Занимаюсь разработкой уникальных плагинов. Каждый день делаем сервер лучше!",
    image: "https://mc-heads.net/avatar/Notch/80",
    name: "DevMaster",
    role: "🔧 Разработчик",
  },
  {
    text: "Провожу ивенты и турниры по PvP. Приходите — будет жарко!",
    image: "https://mc-heads.net/avatar/jeb_/80",
    name: "EventPro",
    role: "🛡️ Администратор",
  },
  {
    text: "Снимаю видео про GliachWorld уже год. Это лучший сервер, который я встречал!",
    image: "https://mc-heads.net/avatar/Dinnerbone/80",
    name: "CraftTuber",
    role: "🎥 YouTube · 50к подп.",
  },
  {
    text: "Стримлю здесь каждую неделю! Зрители в восторге от уникальных режимов.",
    image: "https://mc-heads.net/avatar/MHF_Alex/80",
    name: "StreamerGG",
    role: "📱 TikTok · 120к подп.",
  },
  {
    text: "Помогаю новым игрокам и слежу за чатом. Атмосфера здесь просто огонь!",
    image: "https://mc-heads.net/avatar/Herobrine/80",
    name: "ModHelper",
    role: "🛡️ Модератор",
  },
  {
    text: "Лучший сервер! Уже 2 года здесь. Друзья, ивенты, крутые режимы — всё есть.",
    image: "https://mc-heads.net/avatar/MHF_Blaze/80",
    name: "VeteranCraft",
    role: "⭐ Ветеран сервера",
  },
  {
    text: "Построил целый город на сервере. Администрация всегда помогает и поддерживает.",
    image: "https://mc-heads.net/avatar/MHF_Golem/80",
    name: "BuilderKing",
    role: "🏗️ Билдер",
  },
  {
    text: "Купил привилегию Медиа — это просто топ! Возможностей море, цена адекватная.",
    image: "https://mc-heads.net/avatar/MHF_Chicken/80",
    name: "ContentKing",
    role: "🎬 Контент-мейкер",
  },
]

const firstColumn = teamMembers.slice(0, 3)
const secondColumn = teamMembers.slice(3, 6)
const thirdColumn = teamMembers.slice(6, 9)

const roles = ["👑 Gliach", "🛡️ Администраторы", "🔧 Разработчики", "🎥 Медиа", "🛡️ Модераторы", "⭐ Ветераны"]

export function TestimonialsSection() {
  return (
    <section id="team" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-green-900/60 py-1.5 px-4 rounded-full text-sm text-green-500">
            Состав сервера
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold text-zinc-100 mt-6 text-center tracking-tight leading-tight">
            Наша команда
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Познакомься с администрацией, медиа-командой и ветеранами GliachWorld.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-green-900/30">
          <p className="text-center text-sm text-zinc-500 mb-8">Роли в нашей команде</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 20, repeat: Infinity, ease: "linear" } }}
            >
              {[...roles, ...roles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="text-lg font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {role}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
