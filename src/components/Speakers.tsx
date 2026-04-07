"use client";

import AnimatedSection from "./AnimatedSection";

const speakers = [
  {
    name: "Спикер 1",
    role: "CEO, Компания",
    desc: "Эксперт по арбитражным стратегиям между MOEX и глобальными рынками",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Felix&backgroundColor=09090b",
  },
  {
    name: "Спикер 2",
    role: "Head of Trading, Компания",
    desc: "Специалист по дельта-нейтральным стратегиям и управлению рисками",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Aneka&backgroundColor=09090b",
  },
  {
    name: "Спикер 3",
    role: "Директор по развитию, Компания",
    desc: "Руководитель направления кросс-маркет инфраструктуры",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Leo&backgroundColor=09090b",
  },
  {
    name: "Спикер 4",
    role: "Основатель, Компания",
    desc: "Основатель проп-трейдинговой компании с фокусом на крипто-арбитраж",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Nolan&backgroundColor=09090b",
  },
  {
    name: "Спикер 5",
    role: "CTO, Компания",
    desc: "Архитектор торговых систем и алгоритмов исполнения",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Brian&backgroundColor=09090b",
  },
  {
    name: "Спикер 6",
    role: "Партнёр, Компания",
    desc: "Консультант по рыночной инфраструктуре и регуляторным вопросам",
    photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Sarah&backgroundColor=09090b",
  },
];

export default function Speakers() {
  return (
    <section className="relative py-20 px-5 overflow-hidden section-glow-center">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/4 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            На сцене
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Спикеры конференции
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Практики, которые делают деньги на&nbsp;рынках каждый день.
            Не&nbsp;теоретики — люди с&nbsp;реальным P&L.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s, i) => (
            <AnimatedSection key={s.name} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]">
                {/* Photo */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={s.photo}
                    alt={s.name}
                    className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
                </div>
                {/* Info */}
                <div className="relative p-5 -mt-8">
                  <h3 className="text-base font-bold">{s.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-accent">{s.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-8 text-center">
          <p className="text-sm text-muted">
            Полный список спикеров будет объявлен в&nbsp;ближайшее время
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
