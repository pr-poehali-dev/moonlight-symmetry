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
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/30 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Pixel decorations */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-green-600 opacity-30 rotate-12" />
      <div className="absolute top-48 right-16 w-3 h-3 bg-emerald-500 opacity-20" />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-green-400 opacity-25" />
      <div className="absolute bottom-48 right-24 w-5 h-5 bg-green-700 opacity-20 rotate-45" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-950/60 border border-green-800/60 mb-8">
          <span className="online-dot" />
          <span className="text-sm text-green-400">Сервер онлайн · play.gliachworld.ru</span>
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
          Лучший Minecraft-сервер с дружным сообществом, уникальными режимами и крутыми привилегиями. Присоединяйся — тебя ждут приключения!
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing">
            <LiquidCtaButton>⚔️ Получить привилегию</LiquidCtaButton>
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-green-400 transition-colors"
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
                    t.src = `https://via.placeholder.com/40/15803d/22c55e?text=${i + 1}`
                  }}
                />
              ))}
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div className="flex flex-col items-start">
              <span className="text-zinc-100 font-semibold text-sm">
                <span className="text-green-400">247</span> игроков онлайн
              </span>
              <p className="text-sm text-zinc-500">
                Всего зарегистрировано <span className="text-zinc-300 font-medium">12 000+</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/50">
            <Icon name="Server" size={16} className="text-green-400" />
            <span className="text-xs text-zinc-400">IP: <span className="text-green-400 font-mono font-semibold">play.gliachworld.ru</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
