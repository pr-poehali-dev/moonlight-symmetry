import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

const playerAvatars = [
  "https://mc-heads.net/avatar/MHF_Steve/40",
  "https://mc-heads.net/avatar/MHF_Alex/40",
  "https://mc-heads.net/avatar/Notch/40",
  "https://mc-heads.net/avatar/jeb_/40",
  "https://mc-heads.net/avatar/Dinnerbone/40",
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Pixel decorations */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-amber-600 opacity-30 rotate-12" />
      <div className="absolute top-48 right-16 w-3 h-3 bg-orange-500 opacity-20" />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-amber-400 opacity-25" />
      <div className="absolute bottom-48 right-24 w-5 h-5 bg-amber-700 opacity-20 rotate-45" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/60 border border-red-800/60 mb-8">
          <span className="offline-dot" />
          <span className="text-sm text-red-400">Сервер на технических работах</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
          <span className="text-zinc-100 block mb-2">Добро пожаловать в</span>
          <span className="mc-text-gradient">
            GliachWorld
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          Лучший Minecraft-сервер с дружным сообществом, режимом анархии и крутыми привилегиями. Присоединяйся — тебя ждут приключения!
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing">
            <LiquidCtaButton>⚔️ Получить привилегию</LiquidCtaButton>
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-amber-400 transition-colors"
          >
            <span>Узнать о сервере</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {playerAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Player"
                  className="w-10 h-10 rounded border-2 border-zinc-950 hover:-translate-y-1 transition object-cover"
                  style={{ zIndex: i + 1, imageRendering: "pixelated" }}
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.src = `https://via.placeholder.com/40/7c3d00/f59e0b?text=${i + 1}`
                  }}
                />
              ))}
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div className="flex flex-col items-start">
              <span className="text-zinc-100 font-semibold text-sm">
                Уже <span className="text-amber-400">30</span> игроков зарегистрировано
              </span>
              <p className="text-sm text-zinc-500">
                Макс. онлайн: <span className="text-zinc-300 font-medium">20 человек</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
