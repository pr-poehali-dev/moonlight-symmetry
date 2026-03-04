import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"
import Icon from "@/components/ui/icon"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* News/Blog block */}
        <div className="mb-12 p-6 rounded-2xl border border-green-900/40 bg-green-950/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-950 flex items-center justify-center shrink-0">
                <Icon name="Newspaper" size={20} className="text-green-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-green-900/60 text-green-400 px-2 py-0.5 rounded-full font-medium">Новости</span>
                  <span className="text-xs text-zinc-600">Только для Админов и Медиа</span>
                </div>
                <h3 className="text-zinc-100 font-heading font-semibold text-lg">Новостной портал GliachWorld</h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Читай актуальные новости сервера, обновления и объявления. Публиковать могут только администраторы и медиа-группы.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-green-800/60 text-green-400 text-sm font-medium hover:bg-green-950/50 transition-colors whitespace-nowrap"
            >
              Читать новости
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/20 via-transparent to-green-950/20 rounded-3xl pointer-events-none" />
          <div className="relative">
            <div className="text-5xl mb-4">⛏️</div>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-zinc-100 mb-4 leading-tight">
              Готов присоединиться?
            </h2>
            <p className="text-lg text-zinc-500 mb-8 text-balance max-w-xl mx-auto">
              Тысячи игроков уже строят, сражаются и дружат на GliachWorld. Твоё место ждёт тебя!
            </p>
            <div className="font-mono text-green-400 bg-zinc-900 border border-green-900/50 rounded-xl px-6 py-3 inline-block mb-8 text-sm">
              play.gliachworld.ru
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing">
                <LiquidCtaButton>🎮 Играть сейчас</LiquidCtaButton>
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-green-400 transition-colors"
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
