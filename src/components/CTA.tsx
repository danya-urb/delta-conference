"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="tickets" className="relative py-28 px-5 overflow-hidden grid-pattern">
      {/* Multiple layered glows */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-accent/8 blur-[150px]" />
      </div>
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/6 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/3 h-[250px] w-[250px] rounded-full bg-indigo-400/5 blur-[80px] animate-float" />

      {/* Horizontal accent lines */}
      <div className="pointer-events-none absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      <div className="pointer-events-none absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="glow-text text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Забронируйте место
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
          Количество мест ограничено. Ранний доступ к&nbsp;концентрированной
          среде серьёзных участников рынка.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          {/* TODO: Replace href with actual ticket purchase link / payment integration */}
          <a
            href="#tickets"
            className="glow-accent inline-flex h-12 items-center justify-center rounded-lg bg-accent px-10 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Купить билет
          </a>
          <a
            href="#partners"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-card-border bg-card-bg px-8 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-zinc-600 hover:text-white"
          >
            Стать партнёром
          </a>
        </div>

        <p className="mt-6 text-xs text-zinc-600">
          Оплата будет подключена в ближайшее время. Оставьте заявку — мы свяжемся с вами.
        </p>
      </motion.div>
    </section>
  );
}
