export function Footer() {
  return (
    <footer className="bg-navy-deep py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 border-b border-white/10 pb-12 sm:flex-row">
          <div className="text-primary-foreground text-2xl font-semibold tracking-tighter">
            Conferi
          </div>
          <nav className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {["Termos", "Privacidade", "Segurança", "Ajuda"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-8 sm:flex-row">
          <p className="text-primary-foreground/30 text-xs">
            © 2026 Company Conferi. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-primary-foreground/30 hover:text-primary-foreground/60 text-xs transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
