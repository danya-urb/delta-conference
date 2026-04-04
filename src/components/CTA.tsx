"use client";

import { motion } from "framer-motion";

const valuePoints = [
  "Личные контакты с представителями Finam, MEXC, CIFRA markets",
  "Стратегии и инсайды закрытого формата",
  "Нетворкинг с 100+ профессионалами рынка",
  "Доступ к партнёрским условиям и ликвидности",
];

export default function CTA() {
  return (
    <section id="tickets" className="relative py-28 px-5 overflow-hidden">
      {/* Multiple layered glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-accent/10 blur-[150px]" />
      </div>
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/8 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/3 h-[250px] w-[250px] rounded-full bg-indigo-400/6 blur-[80px] animate-float" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="glow-text text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Не упустите единственную
          <br />
          <span className="bg-gradient-to-r from-accent via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            возможность в&nbsp;этом году
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-300">
          Следующая встреча такого уровня — не&nbsp;раньше осени.
          Те, кто будет в&nbsp;зале 23&nbsp;апреля, получат преимущество,
          которое нельзя купить позже.
        </p>

        {/* Value stack */}
        <div className="mx-auto mt-8 max-w-md text-left">
          {valuePoints.map((point) => (
            <div key={point} className="flex items-start gap-3 py-1.5">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-zinc-300">{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          {/* TODO: Replace href with actual ticket purchase link / payment integration */}
          <a
            href="https://qtickets.ru/event/226851"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-accent-strong inline-flex h-14 items-center justify-center rounded-xl bg-accent px-10 text-base font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            Забронировать место
          </a>
          <a
            href="https://t.me/businessadam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-xl border border-card-border bg-white/5 px-8 text-base font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white/10 hover:text-white"
          >
            Стать партнёром
          </a>
        </div>

        <p className="mt-4 text-sm font-medium text-accent/80">
          Осталось всего 60 мест
        </p>
      </motion.div>
    </section>
  );
}
