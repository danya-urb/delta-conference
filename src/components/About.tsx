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
            Почему это важно
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Пока вы торгуете в&nbsp;одиночку —
            <br />
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              другие уже договорились.
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg">
            Лучшие сделки, условия и&nbsp;доступ к&nbsp;ликвидности получают те,
            кто сидит за&nbsp;одним столом с&nbsp;биржами, брокерами и&nbsp;инфраструктурными
            компаниями. <strong className="text-white">Не&nbsp;те, кто читает об&nbsp;этом
            в&nbsp;Telegram.</strong>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            <strong className="text-zinc-200">Delta Community Conference</strong> — это
            единственное мероприятие в&nbsp;году, где профессионалы арбитража, дельта-нейтральных
            стратегий и&nbsp;кросс-маркет торговли встречаются лично с&nbsp;теми, кто управляет
            рыночной инфраструктурой.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: "1", label: "день, который изменит ваши связи" },
              { value: "100+", label: "профессионалов рынка в одном зале" },
              { value: "6+", label: "спикеров из индустрии" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-accent-top rounded-xl border border-card-border bg-card-bg p-5 backdrop-blur-sm"
              >
                <p className="glow-text text-3xl font-bold text-accent sm:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-[11px] font-medium leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
