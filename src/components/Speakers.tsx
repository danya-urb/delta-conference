"use client";

import AnimatedSection from "./AnimatedSection";

const speakers = [
  {
    name: "Адам Джазири",
    role: "Сооснователь Delta Team",
    desc: "Трейдер и предприниматель с 6-летним опытом. Специализация — арбитражные стратегии и рыночные неэффективности. Ежемесячный оборот на MOEX — 2 млрд ₽",
    photo: "/speakers/jaziri.jpg",
    fullFrame: true,
    logo: "/logos/delta-team.png",
    logoClass: "h-6 rounded",
  },
  {
    name: "Георгий Шилов",
    role: "Генеральный директор, Delta Prop",
    desc: "Более 7 лет на рынках. Практик с опытом управления капиталом в арбитражных стратегиях объёмом до 500 млн ₽",
    photo: null,
    logo: "/logos/delta.png",
    logoClass: "h-6",
  },
  {
    name: "Александр Шпагин",
    role: "CIS BD Lead, MEXC",
    desc: "Автор канала «крипта для опоздавших», победитель премии «Открытие года» на 0xConnect 2025, магистр маркетинга ВШЭ",
    photo: "/speakers/shpagin.jpg",
    logo: "/logos/mexc.svg",
    logoClass: "h-4 brightness-0 invert",
  },
  {
    name: "Владимир Цыбенко",
    role: "Руководитель Управления инвестиционного консультирования, Финам",
    desc: "Закончил МЭСИ, специальность — «Антикризисное управление». В «Финаме» работает с 2006 года",
    photo: "/speakers/tsybenko.jpg",
    logo: "/logos/finam.png",
    logoClass: "h-6",
  },
  {
    name: "Александр Крайко",
    role: "Ведущий аналитик, CIFRA markets",
    desc: "Более 9 лет в крипте. Регулярно публикуется в РБК, Forbes, Коммерсанте и других ведущих деловых СМИ",
    photo: "/speakers/kraiko.jpg",
    logo: "/logos/cifra.png",
    logoClass: "h-4",
  },
  {
    name: "Мария Силкина",
    role: "Главный менеджер по срочному рынку, MOEX",
    desc: "Специалист Московской биржи по развитию срочного рынка",
    photo: "/speakers/silkina.jpg",
    fullFrame: true,
    logo: "/logos/moex.svg",
    logoClass: "h-6",
  },
  {
    name: "Скоро",
    role: "Спикер, Финам",
    desc: "Имя будет раскрыто ближе к мероприятию",
    photo: null,
    mystery: true,
    logo: "/logos/finam.png",
    logoClass: "h-6",
  },
  {
    name: "Скоро",
    role: "Спикер",
    desc: "Следите за обновлениями",
    photo: null,
    mystery: true,
    logo: null,
    logoClass: "",
  },
  {
    name: "Скоро",
    role: "Спикер",
    desc: "Следите за обновлениями",
    photo: null,
    mystery: true,
    logo: null,
    logoClass: "",
  },
];

export default function Speakers() {
  return (
    <section className="relative py-20 px-5 overflow-hidden section-glow-center">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/4 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <AnimatedSection className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            На сцене
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Спикеры конференции
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Практики, которые делают деньги на&nbsp;рынках каждый день.
            Не&nbsp;теоретики — люди с&nbsp;реальным P&L.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((s, i) => (
            <AnimatedSection key={`${s.name}-${i}`} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg backdrop-blur-sm transition-all hover:border-accent/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]">
                {/* Photo or mystery placeholder */}
                <div className={`relative h-52 w-full overflow-hidden ${"fullFrame" in s && s.fullFrame ? "bg-white" : "bg-zinc-900"}`}>
                  {s.photo ? (
                    <img
                      src={s.photo}
                      alt={s.name}
                      className={`h-full w-full opacity-90 transition-opacity group-hover:opacity-100 ${"fullFrame" in s && s.fullFrame ? "object-contain" : "object-cover object-top"}`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800/30 to-zinc-900">
                      <div className="relative">
                        <span className="text-7xl font-black text-accent/20 blur-[2px] group-hover:blur-0 group-hover:text-accent/30 transition-all duration-500">?</span>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-20 w-20 rounded-full border border-accent/10 animate-pulse-glow" />
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />
                  {/* Company logo badge */}
                  {s.logo && (
                    <div className="absolute top-3 right-3 rounded-lg border border-card-border bg-zinc-900/80 px-2.5 py-1.5 backdrop-blur-sm">
                      <img src={s.logo} alt="" className={`w-auto object-contain ${s.logoClass}`} />
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="relative p-5 -mt-10">
                  <h3 className={`text-base font-bold ${"mystery" in s && s.mystery ? "text-zinc-500 italic" : ""}`}>{s.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-accent">{s.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
