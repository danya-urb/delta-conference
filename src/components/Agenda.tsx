"use client";

import AnimatedSection from "./AnimatedSection";

const timeline = [
  { time: "14:00", title: "Регистрация и нетворкинг", desc: "Приветственный кофе, знакомства" },
  { time: "15:00", title: "Основные доклады", desc: "Арбитраж, рыночная инфраструктура, кросс-маркет стратегии" },
  { time: "16:30", title: "Панельная дискуссия", desc: "Представители бирж, брокеров и технологических компаний" },
  { time: "17:30", title: "Партнёрские сессии", desc: "Презентации спонсоров и демонстрации продуктов" },
  { time: "18:30", title: "Закрытый нетворкинг", desc: "Приватное общение для участников конференции" },
];

export default function Agenda() {
  return (
    <section className="relative py-20 px-5 overflow-hidden section-glow-center">
      {/* Decorative */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full bg-accent/4 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            Программа
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Формат мероприятия
          </h2>
        </AnimatedSection>

        <div className="relative mt-12">
          {/* Vertical accent line */}
          <div className="absolute left-[4.5rem] top-0 bottom-0 w-px timeline-line sm:left-[5.25rem]" />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.time} delay={i * 0.06}>
                <div className="group relative flex gap-5 py-5 sm:gap-6">
                  {/* Time */}
                  <div className="flex w-14 shrink-0 items-start pt-0.5 sm:w-16">
                    <span className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-sm font-semibold text-accent">
                      {item.time}
                    </span>
                  </div>
                  {/* Dot */}
                  <div className="relative flex flex-col items-center pt-2">
                    <div className="relative h-2.5 w-2.5 rounded-full bg-accent/70 ring-[3px] ring-accent/15">
                      <div className="absolute inset-0 rounded-full bg-accent/50 animate-pulse-glow" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 rounded-lg border border-transparent pb-1 transition-colors group-hover:border-card-border group-hover:bg-card-bg group-hover:px-4 group-hover:py-3 group-hover:-my-1">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
