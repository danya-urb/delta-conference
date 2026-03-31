"use client";

import AnimatedSection from "./AnimatedSection";

const guests = [
  {
    name: "MOEX",
    full: "Московская биржа",
    desc: "Крупнейшая биржевая группа России",
  },
  {
    name: "Finam",
    full: "Финам",
    desc: "Ведущий брокер и инвестиционная компания",
  },
  {
    name: "MEXC",
    full: "MEXC Global",
    desc: "Международная криптовалютная биржа",
  },
  {
    name: "A7A5",
    full: "A7A5",
    desc: "Технологии и инфраструктура рынков",
  },
];

export default function Guests() {
  return (
    <section className="relative py-20 px-5">
      <div className="mx-auto max-w-5xl">
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
              <div className="group flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-6 text-center backdrop-blur-sm transition-colors hover:border-zinc-700">
                {/* Placeholder logo area */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-card-border bg-zinc-900 text-lg font-bold text-accent">
                  {g.name.charAt(0)}
                </div>
                <h3 className="text-base font-semibold">{g.name}</h3>
                <p className="mt-0.5 text-xs text-muted">{g.full}</p>
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
