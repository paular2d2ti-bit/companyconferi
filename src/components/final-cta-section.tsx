import { ShieldCheck } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[#031426] py-24 sm:py-32">
      {/* Background visual element */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,227,138,0.1),transparent_70%)]" />
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80" 
          alt="" 
          className="h-full w-full object-cover opacity-10 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold tracking-widest text-[#22E38A] uppercase sm:text-xs">
            <ShieldCheck size={14} />
            PRONTO PARA LEVAR ISSO PARA SUA LOJA?
          </div>
        </div>

        <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Antes do próximo carro entrar no estoque, tenha mais informação para decidir.
        </h2>
        
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
          Leve a Auto Perícia Gold, da Company Conferi, para sua operação e consulte antes de comprar, aceitar uma troca, avaliar ou colocar um veículo no estoque.
        </p>

        <div className="mt-8 mb-12">
          <span className="inline-block rounded-lg bg-[#FFB800]/10 px-4 py-2 text-sm font-semibold text-[#FFB800]">
            Menos risco na entrada. Mais segurança para fechar negócio.
          </span>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#22E38A] px-10 py-5 text-lg font-bold text-[#031426] transition-all hover:scale-105 active:scale-95 sm:w-auto"
          >
            Quero contratar a Auto Perícia Gold →
          </a>
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
          >
            Falar com a Company Conferi
          </a>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="flex items-center justify-center gap-2 opacity-50 transition-opacity hover:opacity-100">
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Uma solução</span>
            <span className="text-lg font-black italic tracking-tighter text-white">COMPANY CONFERI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
