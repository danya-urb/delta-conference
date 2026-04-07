"use client";

import AnimatedSection from "./AnimatedSection";

const tiers = [
  {
    name: "Классический",
    price: "2 490",
    accent: false,
    features: [
      "Посещение конференции",
      "Выступления спикеров",
      "Зона нетворкинга",
      "Кофе-брейк",
    ],
  },
  {
    name: "+1",
    subtitle: "2 человека",
    price: "3 990",
    accent: false,
    features: [
      "2 билета по цене одного с половиной",
      "Посещение конференции",
      "Выступления спикеров",
      "Зона нетворкинга",
      "Кофе-брейк",
    ],
  },
  {
    name: "VIP",
    price: "29 990",
    accent: true,
    features: [
      "Посещение конференции",
      "Выступления спикеров",
      "Зона нетворкинга",
      "Программа бизнес-зала",
      "Кофе-брейки и обеды",
      "Записи выступлений",
      "Preparty",
      "Второй день: afterparty в Timeless",
    ],
    note: "Timeless — премиальная кальянная в центре Москвы с авторскими миксами и приватной атмосферой",
  },
];

export default function Pricing() {
  return (
    <section className="relative py-20 px-5 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 section-glow-strong" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            Билеты
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Выберите свой формат участия
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted">
            Каждый билет — это инвестиция в&nbsp;ваши связи, знания и&nbsp;возможности.
            Окупается за&nbsp;одну правильную встречу.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.08}>
              <div
                className={`group relative flex flex-col overflow-hidden rounded-xl border backdrop-blur-sm transition-all h-full ${
                  tier.accent
                    ? "border-accent/40 bg-accent/5 shadow-[0_0_40px_rgba(99,102,241,0.1)]"
                    : "border-card-border bg-card-bg hover:border-accent/20"
                }`}
              >
                {/* Popular badge for VIP */}
                {tier.accent && (
                  <div className="bg-accent px-4 py-1.5 text-center text-xs font-bold uppercase tracking-wider text-white">
                    Максимум возможностей
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  {/* Header */}
                  <div className="mb-5">
                    <h3 className="text-lg font-bold">{tier.name}</h3>
                    {tier.subtitle && (
                      <p className="mt-0.5 text-xs text-accent">{tier.subtitle}</p>
                    )}
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className={`text-3xl font-extrabold ${tier.accent ? "text-accent" : "text-white"}`}>
                        {tier.price}
                      </span>
                      <span className="text-sm text-muted"> &#8381;</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mb-6 flex-1 space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 ${tier.accent ? "text-accent" : "text-zinc-500"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-zinc-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note for VIP */}
                  {tier.note && (
                    <p className="mb-4 rounded-lg bg-accent/5 border border-accent/10 px-3 py-2 text-[11px] leading-relaxed text-zinc-400">
                      {tier.note}
                    </p>
                  )}

                  {/* CTA */}
                  <a
                    href="https://qtickets.ru/event/226851"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex h-11 w-full items-center justify-center rounded-lg text-sm font-semibold transition-all active:scale-[0.98] ${
                      tier.accent
                        ? "glow-accent-strong bg-accent text-white hover:brightness-110"
                        : "border border-card-border bg-white/5 text-zinc-200 hover:border-accent/30 hover:bg-white/10"
                    }`}
                  >
                    Купить билет
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
