"use client";

import AnimatedSection from "./AnimatedSection";

const tags = [
  "Трейдеры",
  "Арбитражники",
  "Проп-трейдеры",
  "Маркет-мейкеры",
  "Инфраструктурные специалисты",
  "Квант-разработчики",
  "Профессионалы CeFi/DeFi",
  "Участники рынков",
];

export default function Audience() {
  return (
    <section className="relative py-20 px-5">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            Аудитория
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Для кого это мероприятие
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Если вы работаете с&nbsp;рынками, строите инфраструктуру исполнения
            или&nbsp;торгуете арбитражные стратегии — это ваша конференция.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-card-border bg-card-bg px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-8 text-xs text-zinc-600">
            Это не массовая конференция. Мы собираем людей, которые понимают рынки.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
