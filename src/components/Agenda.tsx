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
    <section className="relative py-20 px-5">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            Программа
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Формат мероприятия
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-0">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.time} delay={i * 0.06}>
              <div className="group relative flex gap-6 py-5 border-b border-card-border last:border-b-0">
                {/* Time */}
                <div className="flex w-14 shrink-0 items-start pt-0.5">
                  <span className="font-mono text-sm font-semibold text-accent">
                    {item.time}
                  </span>
                </div>
                {/* Dot + line */}
                <div className="relative flex flex-col items-center pt-1.5">
                  <div className="h-2 w-2 rounded-full bg-accent/60 ring-2 ring-accent/20" />
                </div>
                {/* Content */}
                <div className="pb-1">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
