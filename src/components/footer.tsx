import logo from "@/assets/company-conferi-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-[#031426] py-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-center gap-5 text-center group">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold tracking-tighter text-white leading-none">
              COMPANY <span className="text-[#22E38A]">CONFERI</span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-[#22E38A] uppercase leading-none mt-2 opacity-80">
              Informação certa, bons negócios
            </span>
          </div>

          <p className="text-white/30 text-xs">
            © 2026 Company Conferi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
