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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20">
        <a href="/" className="flex items-center">
          <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm">
            <img
              src={logo.url}
              alt="Company Conferi"
              className="h-7 w-auto sm:h-8"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {/* Menus removidos conforme solicitação: manter apenas logo e botão */}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="bg-[#22E38A] text-[#031426] hover:brightness-110 rounded-full px-6 py-2.5 text-sm font-bold transition-all shadow-lg shadow-[#22E38A]/20"
          >
            Quero conhecer a Auto Perícia Gold
          </a>
        </div>
      </div>
    </header>
  );
}
