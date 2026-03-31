export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-card-border py-10 px-5">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/3 to-transparent" />
      {/* Top gradient border enhancement */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Brand */}
        <div>
          <p className="text-sm font-semibold">Delta Community</p>
          <p className="mt-1 text-xs text-muted">
            23 апреля 2025 &middot; Москва, Арбат
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">
          {/* TODO: Replace with actual Telegram link */}
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            Telegram
          </a>
          {/* TODO: Replace with actual contact email */}
          <a
            href="mailto:contact@delta.community"
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            Контакты
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-6 max-w-5xl">
        <p className="text-center text-[10px] text-zinc-700">
          &copy; {new Date().getFullYear()} Delta Community. Все права защищены.
          {/* TODO: Payment integration notice — remove once payments are live */}
          {" "}Интеграция оплаты будет подключена позже.
        </p>
      </div>
    </footer>
  );
}
