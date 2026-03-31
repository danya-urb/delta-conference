"use client";

import AnimatedSection from "./AnimatedSection";

const guests = [
  {
    name: "MOEX",
    full: "Московская биржа",
    desc: "Крупнейшая биржевая группа России",
    accent: "from-blue-500/20 to-indigo-500/20",
  },
  {
    name: "Finam",
    full: "Финам",
    desc: "Ведущий брокер и инвестиционная компания",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "MEXC",
    full: "MEXC Global",
    desc: "Международная криптовалютная биржа",
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "A7A5",
    full: "A7A5",
    desc: "Технологии и инфраструктура рынков",
    accent: "from-violet-500/20 to-purple-500/20",
  },
];

export default function Guests() {
  return (
    <section className="relative py-20 px-5 overflow-hidden section-glow-left">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] rounded-full bg-accent/5 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/4 blur-[90px] animate-float" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            Участники
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Приглашённые гости
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Среди участников — представители ключевых бирж, брокеров
            и&nbsp;компаний рыночной инфраструктуры.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guests.map((g, i) => (
            <AnimatedSection key={g.name} delay={i * 0.07}>
              <div className="group flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-6 text-center backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]">
                {/* Gradient ring avatar */}
                <div className="gradient-ring mb-4 rounded-full">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${g.accent} text-lg font-bold text-white`}>
                    {g.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-base font-semibold">{g.name}</h3>
                <p className="mt-0.5 text-xs text-zinc-400">{g.full}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                  {g.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
