"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const guests = [
  {
    name: "Финам",
    full: "Финам",
    desc: "Ведущий брокер и инвестиционная компания. Мост между вами и рынком.",
    logo: "/logos/finam.svg",
    invert: false,
  },
  {
    name: "MEXC",
    full: "MEXC Global",
    desc: "Международная криптовалютная биржа. Глобальная ликвидность и листинг.",
    logo: "/logos/mexc.svg",
    invert: true,
  },
  {
    name: "CIFRA markets",
    full: "CIFRA markets",
    desc: "Брокерская платформа нового поколения. Технологии и инфраструктура рынков.",
    logo: "/logos/cifra.svg",
    invert: false,
  },
];

export default function Guests() {
  return (
    <section className="relative py-20 px-5 overflow-hidden section-glow-left">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] rounded-full bg-accent/5 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/4 blur-[90px] animate-float" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            За одним столом с лидерами
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Эти компании определяют правила рынка.
            <br />
            <span className="text-zinc-400">Вы будете с&nbsp;ними в&nbsp;одной комнате.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Не смотрите на&nbsp;них из&nbsp;зала на&nbsp;1000 человек.
            Задавайте вопросы лично, обменивайтесь контактами, обсуждайте условия.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guests.map((g, i) => (
            <AnimatedSection key={g.name} delay={i * 0.07}>
              <div className="group flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-6 text-center backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]">
                {/* Real logo */}
                <div className="mb-4 flex h-16 w-full items-center justify-center">
                  <Image
                    src={g.logo}
                    alt={g.name}
                    width={120}
                    height={40}
                    className={`h-8 w-auto object-contain ${g.invert ? "brightness-0 invert" : ""}`}
                  />
                </div>
                <h3 className="text-base font-semibold">{g.name}</h3>
                <p className="mt-0.5 text-xs text-zinc-400">{g.full}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                  {g.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
