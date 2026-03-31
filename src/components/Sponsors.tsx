"use client";

import AnimatedSection from "./AnimatedSection";

export default function Sponsors() {
  return (
    <section id="partners" className="relative py-20 px-5">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            Партнёры
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Спонсоры конференции
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {/* TODO: Replace placeholder with actual Cashers logo */}
          <AnimatedSection delay={0.05}>
            <div className="flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-8 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="mb-3 flex h-14 w-40 items-center justify-center rounded-lg border border-dashed border-zinc-700 text-sm font-medium text-zinc-500">
                Cashers Logo
              </div>
              <h3 className="text-base font-semibold">Cashers</h3>
              <p className="mt-1 text-xs text-muted">Обменный сервис</p>
            </div>
          </AnimatedSection>

          {/* TODO: Replace placeholder with actual Delta Prop logo */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-8 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="mb-3 flex h-14 w-40 items-center justify-center rounded-lg border border-dashed border-zinc-700 text-sm font-medium text-zinc-500">
                Delta Prop Logo
              </div>
              <h3 className="text-base font-semibold">Delta Prop</h3>
              <p className="mt-1 text-xs text-muted">Проп-компания</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
