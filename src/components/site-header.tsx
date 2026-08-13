import { useEffect, useState } from "react";
import logo from "@/assets/company-conferi-logo.png.asset.json";

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
      <div className="mx-auto flex h-20 lg:h-24 max-w-full items-center justify-between px-6 lg:px-[80px]">
        <a href="/" className="flex items-center group">
          <img 
            src={logo.url} 
            alt="Company Conferi" 
            className="h-8 lg:h-10 w-auto brightness-0 invert"
          />
        </a>

        <div className="flex items-center gap-4">
          {/* Botão removido conforme solicitação */}
        </div>
      </div>
    </header>
  );
}
