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
          <AnimatedSection delay={0.05}>
            <div className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg p-8 backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
              <div className="pointer-events-none absolute -top-20 -right-20 h-[200px] w-[200px] rounded-full bg-accent/5 blur-[60px] transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="relative">
                <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Генеральный партнёр
                </span>
                <div className="mb-4 flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900/50">
                  <img src="/logos/cashers.png" alt="Cashers" className="h-10 w-auto object-contain" />
                </div>
                <h3 className="text-lg font-semibold">Cashers</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Ваш надёжный крипто-консьерж с&nbsp;2021&nbsp;г.
                  Безопасные офисы во&nbsp;всех крупных городах.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg p-8 backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
              <div className="pointer-events-none absolute -top-20 -left-20 h-[200px] w-[200px] rounded-full bg-purple-500/5 blur-[60px] transition-opacity group-hover:opacity-100 opacity-50" />
              <div className="relative">
                <span className="mb-4 inline-block rounded-full bg-purple-500/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-400">
                  Партнёр
                </span>
                <div className="mb-4 flex h-16 w-full items-center justify-center rounded-lg bg-zinc-900/50">
                  <img src="/logos/delta.png" alt="Delta Prop" className="h-10 w-auto object-contain" />
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
        </div>
      </div>
    </section>
  );
}
