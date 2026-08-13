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
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white sm:text-2xl leading-none">
              COMPANY <span className="text-white">CONFERI</span>
            </span>
            <span className="text-[8px] sm:text-[10px] font-medium tracking-widest text-white uppercase leading-none mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
              Informação certa, bons negócios
            </span>
          </div>
        </a>

        <div className="flex items-center gap-4">
          {/* Botão removido conforme solicitação */}
        </div>
      </div>
    </header>
  );
}
