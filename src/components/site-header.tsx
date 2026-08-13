import { useEffect, useState } from "react";
const logoUrl = "/logo.png";

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
      className={`absolute inset-x-0 top-0 z-50 transition-all duration-500`}
    >
      <div className="mx-auto flex h-24 lg:h-32 max-w-full items-center justify-center px-6">
        <a href="/" className="flex items-center group">
          <img 
            src={logoUrl} 
            alt="Company Conferi" 
            className="h-10 lg:h-14 w-auto brightness-0 invert"
          />
        </a>

        <div className="flex items-center gap-4">
          {/* Botão removido conforme solicitação */}
        </div>
      </div>
    </header>
  );
}