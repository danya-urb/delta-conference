"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="tickets" className="relative py-28 px-5">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-accent/6 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Забронируйте место
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
