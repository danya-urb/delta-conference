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
    <section className="relative py-20 px-5 overflow-hidden grid-pattern">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 section-glow-center" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-accent/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
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
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className="rounded-full border border-accent/15 bg-accent/5 px-4 py-2 text-xs font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 inline-flex items-center gap-2 rounded-lg border border-card-border bg-card-bg px-4 py-2 text-xs text-zinc-500">
            <svg className="h-3.5 w-3.5 text-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            Это не массовая конференция. Мы собираем людей, которые понимают рынки.
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
