"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden hero-gradient grid-pattern">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent/8 blur-[150px] animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/6 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[200px] w-[200px] rounded-full bg-accent/5 blur-[80px] animate-pulse-glow" />

      {/* Decorative floating dots */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { top: "15%", left: "10%", size: 3, delay: 0 },
          { top: "25%", left: "85%", size: 2, delay: 1 },
          { top: "70%", left: "15%", size: 2, delay: 2 },
          { top: "60%", left: "80%", size: 3, delay: 0.5 },
          { top: "40%", left: "5%", size: 2, delay: 1.5 },
          { top: "80%", left: "90%", size: 2, delay: 3 },
          { top: "10%", left: "50%", size: 2, delay: 2.5 },
          { top: "50%", left: "95%", size: 3, delay: 1 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/30"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
            animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -10, 0] }}
            transition={{ duration: 4, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Decorative horizontal lines */}
      <div className="pointer-events-none absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/8 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs tracking-wide text-zinc-300 backdrop-blur-sm"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
          Частная индустриальная конференция &middot; Москва &middot; 23 апреля
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Delta Community
          <br />
          <span className="glow-text bg-gradient-to-r from-accent via-purple-400 to-accent bg-clip-text text-transparent">
            Conference
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Закрытое мероприятие для профессионалов арбитража и&nbsp;рыночной
          инфраструктуры. Дельта-нейтральные стратегии, кросс-маркет исполнение,
          прямой доступ к&nbsp;участникам рынка.
        </motion.p>

        {/* Date + location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-4 text-sm text-muted"
        >
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            23 апреля 2025
          </span>
          <span className="h-3 w-px bg-zinc-700" />
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Москва, Арбат
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          {/* TODO: Replace href with actual ticket purchase link / payment integration */}
          <a
            href="#tickets"
            className="glow-accent inline-flex h-12 items-center justify-center rounded-lg bg-accent px-8 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Купить билет
          </a>
          <a
            href="#partners"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-card-border bg-card-bg px-8 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-zinc-600 hover:text-white"
          >
            Стать партнёром
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
