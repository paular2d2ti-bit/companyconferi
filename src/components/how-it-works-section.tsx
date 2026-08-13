import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative w-full overflow-hidden bg-[#F5F7F8] py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* LADO ESQUERDO: Imagem/Foto */}
          <div className="relative order-1 lg:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Lojista Parceiro Gold" 
                className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decoração sutil */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-2xl bg-teal/10 blur-2xl" />
          </div>

          {/* LADO DIREITO: Conteúdo */}
          <div className="flex flex-col items-start order-2 lg:order-2">
            <p className="text-teal text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
              QUEM USA, CONFIRMA
            </p>
            
            <h2 className="text-[32px] sm:text-[42px] font-bold leading-[1.1] text-[#031426] tracking-tight mb-8">
              Quem negocia veículos todos os dias sabe o valor de descobrir antes.
            </h2>

            <div className="relative mb-8">
              {/* Aspas grandes como elemento gráfico */}
              <span className="absolute -left-4 -top-8 text-[120px] font-serif leading-none text-teal/10 pointer-events-none select-none">“</span>
              
              <blockquote className="relative z-10 text-[20px] sm:text-[24px] font-medium leading-[1.5] text-[#031426] italic">
                [Inserir depoimento real do lojista]
              </blockquote>
            </div>

            <div className="mb-10">
              <div className="font-bold text-[#031426] text-xl">Nome do cliente</div>
              <div className="text-slate-500 text-sm">Loja de veículos • Cidade/UF</div>
            </div>

            <div className="mb-12 border-l-2 border-teal/30 pl-6 py-2">
              <p className="text-[#031426] font-semibold text-sm tracking-wide uppercase">
                Mais informação antes da decisão.
              </p>
              <p className="text-teal font-bold text-sm tracking-wide uppercase">
                Mais confiança na negociação.
              </p>
            </div>

            <button className="group relative flex items-center gap-3 rounded-full bg-[#031426] px-10 py-5 font-bold text-white transition-all hover:bg-teal hover:text-[#031426] hover:scale-105 active:scale-95 shadow-xl shadow-[#031426]/10 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Quero ter essa segurança na minha loja
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FFB800] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}