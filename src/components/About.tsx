"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section className="relative py-20 px-5 overflow-hidden section-glow-center">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[250px] w-[250px] rounded-full bg-purple-500/4 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            О мероприятии
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Не массовая конференция.
            <br />
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Точка входа в&nbsp;индустрию.
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            <strong className="text-zinc-200">Delta Community</strong> —
            закрытое сообщество трейдеров, специализирующихся на&nbsp;дельта-нейтральных
            и&nbsp;арбитражных стратегиях между Московской биржей и&nbsp;глобальными рынками.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Конференция 23&nbsp;апреля — это концентрированная встреча людей,
            которые строят, управляют и&nbsp;масштабируют рыночную инфраструктуру.
            Здесь нет случайных участников. Только те, кто понимает рынки.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: "1", label: "день" },
              { value: "100+", label: "участников" },
              { value: "6+", label: "спикеров" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-accent-top rounded-xl border border-card-border bg-card-bg p-5 backdrop-blur-sm"
              >
                <p className="glow-text text-3xl font-bold text-accent sm:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
