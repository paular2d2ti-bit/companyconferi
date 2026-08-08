import { useEffect, useState } from "react";

const links = [
  { label: "Problema", href: "#problema" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#como-funciona" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20">
        <a href="#" className="text-primary-foreground text-lg font-semibold tracking-tight">
          Conferi
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {/* Menus removidos conforme solicitação: manter apenas logo e botão */}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-primary-foreground/70 hover:text-primary-foreground hidden text-sm font-medium transition-colors sm:block"
          >
            Acessar plataforma
          </a>
          <a
            href="#contato"
            className="bg-teal text-accent-foreground hover:bg-teal/90 rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Solicitar demonstração
          </a>
        </div>
      </div>
    </header>
  );
}
