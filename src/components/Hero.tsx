"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trustLogos = [
  { name: "Finam", src: "/logos/finam.png", invert: false, w: 80 },
  { name: "MEXC", src: "/logos/mexc.svg", invert: true, w: 80 },
  { name: "CIFRA markets", src: "/logos/cifra.png", invert: false, w: 100 },
  { name: "Delta", src: "/logos/delta.png", invert: false, w: 70 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Main bright glow behind headline */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[900px] rounded-full bg-accent/20 blur-[180px]" />

      {/* Color-shifting animated orb */}
      <motion.div
        className="pointer-events-none absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[140px]"
        animate={{
          background: [
            "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(139,92,246,0.45) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary warm accent — creates visual tension */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-violet-600/12 blur-[150px] animate-float" />
      <div className="pointer-events-none absolute top-[20%] right-[10%] h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[80px] animate-pulse-glow" />

      {/* Bright floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { top: "12%", left: "8%", size: 4, delay: 0 },
          { top: "18%", left: "88%", size: 3, delay: 0.5 },
          { top: "65%", left: "12%", size: 3, delay: 1.5 },
          { top: "55%", left: "85%", size: 4, delay: 0.3 },
          { top: "35%", left: "3%", size: 3, delay: 2 },
          { top: "75%", left: "92%", size: 3, delay: 1 },
          { top: "8%", left: "45%", size: 3, delay: 2.5 },
          { top: "45%", left: "97%", size: 4, delay: 0.8 },
          { top: "85%", left: "40%", size: 3, delay: 1.2 },
          { top: "30%", left: "70%", size: 3, delay: 3 },
          { top: "50%", left: "20%", size: 4, delay: 0.7 },
          { top: "20%", left: "60%", size: 3, delay: 1.8 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/50"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -12, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 3 + i * 0.3, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Radial light streaks */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] opacity-[0.03]"
        style={{
          background: "conic-gradient(from 0deg, transparent 0deg, rgba(99,102,241,0.8) 10deg, transparent 20deg, transparent 90deg, rgba(139,92,246,0.6) 100deg, transparent 110deg, transparent 180deg, rgba(99,102,241,0.5) 190deg, transparent 200deg, transparent 270deg, rgba(59,130,246,0.6) 280deg, transparent 290deg, transparent 360deg)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-32 text-center">
        {/* Badge — brighter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-medium tracking-wide text-white backdrop-blur-sm"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
          Частная индустриальная конференция &middot; Москва &middot; 23 апреля
        </motion.div>

        {/* Headline — bigger, bolder */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Delta Community
          <br />
          <span className="glow-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Conference
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
        >
          Закрытое мероприятие для профессионалов арбитража и&nbsp;рыночной
          инфраструктуры. Дельта-нейтральные стратегии, кросс-маркет исполнение,
          прямой доступ к&nbsp;участникам рынка.
        </motion.p>

        {/* Date + location — prominent chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/20 bg-accent/8 px-3.5 py-1.5 text-sm font-medium text-white">
            <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
            23 апреля
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-card-border bg-card-bg px-3.5 py-1.5 text-sm font-medium text-zinc-300">
            <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Москва, Арбат
          </span>
        </motion.div>

        {/* CTAs — bigger, more glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          {/* TODO: Replace href with actual ticket purchase link / payment integration */}
          <a
            href="https://qtickets.ru/event/226851"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-accent-strong inline-flex h-14 items-center justify-center rounded-xl bg-accent px-10 text-base font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            Купить билет
          </a>
          <a
            href="https://t.me/businessadam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-xl border border-card-border bg-white/5 px-8 text-base font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-white/10 hover:text-white"
          >
            Стать партнёром
          </a>
        </motion.div>

        {/* Urgency line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 text-sm text-accent/80 font-medium"
        >
          Осталось всего 60 мест
        </motion.p>

        {/* Trust strip — participants */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="text-xs uppercase tracking-widest text-zinc-500">При участии</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {trustLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.w}
                  height={30}
                  className={`h-6 w-auto object-contain ${logo.invert ? "brightness-0 invert" : ""}`}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
