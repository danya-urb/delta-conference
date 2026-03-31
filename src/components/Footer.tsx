export default function Footer() {
  return (
    <footer className="border-t border-card-border py-10 px-5">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
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
            className="text-xs text-muted transition-colors hover:text-white"
          >
            Telegram
          </a>
          {/* TODO: Replace with actual contact email */}
          <a
            href="mailto:contact@delta.community"
            className="text-xs text-muted transition-colors hover:text-white"
          >
            Контакты
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-5xl">
        <p className="text-center text-[10px] text-zinc-700">
          &copy; {new Date().getFullYear()} Delta Community. Все права защищены.
          {/* TODO: Payment integration notice — remove once payments are live */}
          {" "}Интеграция оплаты будет подключена позже.
        </p>
      </div>
    </footer>
  );
}
