"use client";

import AnimatedSection from "./AnimatedSection";

export default function Sponsors() {
  return (
    <section id="partners" className="relative py-20 px-5 overflow-hidden">
      {/* Strong background glow for sponsors */}
      <div className="pointer-events-none absolute inset-0 section-glow-strong" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-accent/4 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            Партнёры
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Спонсоры конференции
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Delta — Генеральный партнёр */}
          <AnimatedSection delay={0.05}>
            <div className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg p-8 backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
              <div className="pointer-events-none absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-accent/5 blur-[60px] transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="relative">
                <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Генеральный партнёр
                </span>
                <div className="mb-4 flex h-16 w-full items-center justify-center">
                  <img src="/logos/delta.png" alt="Delta Prop" className="h-14 w-auto object-contain" />
                </div>
                <h3 className="text-lg font-semibold">Delta Prop</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Проп-трейдинговая компания с&nbsp;десятками успешных трейдеров
                  и&nbsp;уникальными технологическими решениями для рынка арбитража
                  и&nbsp;кросс-маркет стратегий.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Cashers — Партнёр */}
          <AnimatedSection delay={0.1}>
            <div className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg p-8 backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
              <div className="pointer-events-none absolute -top-20 -left-20 h-[200px] w-[200px] rounded-full bg-purple-500/5 blur-[60px] transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="relative">
                <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-400">
                  Партнёр
                </span>
                <div className="mb-4 flex h-16 w-full items-center justify-center">
                  <img src="/logos/cashers.png" alt="Cashers" className="h-10 w-auto object-contain" />
                </div>
                <h3 className="text-lg font-semibold">Cashers</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Крипто-карта для расчётов за&nbsp;рубежом.
                  Покупка и&nbsp;продажа криптовалюты без&nbsp;P2P.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Giveaways section */}
        <AnimatedSection delay={0.15}>
          <div className="mt-10">
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-accent">
              Розыгрыши на конференции
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Delta giveaway */}
              <div className="relative overflow-hidden rounded-xl border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm">
                <div className="pointer-events-none absolute -top-16 -right-16 h-[150px] w-[150px] rounded-full bg-accent/10 blur-[50px]" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <img src="/logos/delta.png" alt="Delta" className="h-6 w-auto" />
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                      Главный приз
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white">1 000 000 &#8381;</p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Покупательская способность на&nbsp;счёт трейдера от&nbsp;Delta Prop
                  </p>
                </div>
              </div>

              {/* Cashers giveaway */}
              <div className="relative overflow-hidden rounded-xl border border-purple-500/20 bg-purple-500/5 p-6 backdrop-blur-sm">
                <div className="pointer-events-none absolute -top-16 -left-16 h-[150px] w-[150px] rounded-full bg-purple-500/10 blur-[50px]" />
                <div className="relative">
                  <div className="mb-3 flex items-center gap-3">
                    <img src="/logos/cashers.png" alt="Cashers" className="h-8 w-auto" />
                    <span className="rounded-full bg-purple-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-400">
                      Розыгрыш
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-white">Поездка в&nbsp;Китай</p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Cashers разыгрывает полноценную поездку в&nbsp;Китай среди участников конференции
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
