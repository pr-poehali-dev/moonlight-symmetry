import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* News/Blog block */}
        <div className="mb-12 p-6 rounded-2xl border border-amber-900/40 bg-amber-950/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📰</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-amber-900/60 text-amber-400 px-2 py-0.5 rounded-full font-medium border border-amber-800/50">Новости</span>
                  <span className="text-xs text-zinc-600">Только для Админов и Медиа</span>
                </div>
                <h3 className="text-zinc-100 font-heading font-semibold text-lg">Новостной портал GliachWorld</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Читай актуальные новости сервера, обновления и объявления администрации.
                </p>
              </div>
            </div>
            <a
              href="/news"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-800/60 text-amber-400 text-sm font-medium hover:bg-amber-950/50 transition-colors whitespace-nowrap"
            >
              Читать новости
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/20 via-transparent to-amber-950/20 rounded-3xl pointer-events-none" />
          <div className="relative">
            <div className="text-5xl mb-4">⛏️</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-zinc-100 mb-4 leading-tight">
              Готов присоединиться?
            </h2>
            <p className="text-lg text-zinc-500 mb-8 text-balance max-w-xl mx-auto">
              Тысячи игроков уже строят, сражаются и дружат на GliachWorld. Твоё место ждёт тебя!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing">
                <LiquidCtaButton>🎮 Получить привилегию</LiquidCtaButton>
              </a>
              <a
                href="https://discord.gg/dAunh3S2YQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-amber-400 transition-colors"
              >
                <span>Наш Discord</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
