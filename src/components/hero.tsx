import { CheckCircle2, ShieldCheck, BarChart3, Users } from "lucide-react";
import heroCar from "@/assets/hero-car-dealership-dark-v2.jpg";

export function Hero() {
  return (
    <div className="bg-white px-4 py-6 md:px-8 lg:px-12">
      <section className="hero relative mx-auto max-w-[1440px] overflow-hidden rounded-[36px] bg-[#031426] grid grid-cols-1 md:grid-cols-[46%_54%] min-h-[520px] md:h-[580px] items-stretch w-full shadow-2xl">
        {/* COLUNA ESQUERDA — 48% */}
        <div className="hero-left relative z-10 flex w-full flex-col justify-center px-8 py-10 md:py-12 lg:px-16 lg:pl-[64px]">
          <div className="max-w-[540px]">
            <div className="inline-flex items-center gap-2 mb-6 max-w-[460px]">
              <span className="text-[#22E38A] text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.08em] leading-[1.3]">
                PARA LOJAS E AGÊNCIAS DE VEÍCULOS
              </span>
            </div>
            
            <h1 className="text-[30px] md:text-[38px] font-bold leading-[1.08] md:leading-[1.10] tracking-[-0.02em] text-white max-w-[540px]">
              Inteligência veicular para decisões seguras e lucros maiores.
            </h1>

            <p className="mt-6 text-[14px] md:text-[16px] text-white/70 leading-[1.5] max-w-[480px]">
              Com dados técnicos, financeiros e de mercado na sua mão, seu estoque gira mais rápido e sua margem aumenta.
            </p>
            
            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row">
              <button className="h-[54px] w-full rounded-[10px] bg-[#22E38A] px-[28px] text-[14px] md:text-[15px] font-bold text-[#031426] leading-[1.2] transition-all hover:brightness-110 active:scale-[0.98] sm:w-auto shadow-lg shadow-[#22E38A]/20">
                Comece grátis e domine o mercado
              </button>
              
              <div className="flex items-center gap-3 max-w-[180px]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-7 w-7 rounded-full border-2 border-[#031426] bg-gray-700 overflow-hidden shadow-inner" />
                  ))}
                </div>
                <span className="text-[12px] md:text-[13px] font-semibold text-white/50 leading-[1.3]">
                  + 3.597 lojas aproximadamente
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/5 pt-8 sm:grid-cols-4">
              {[
                { value: "+10 anos", label: "de mercado automotivo" },
                { value: "+2,1 mil", label: "usuários ativos" },
                { value: "Dados de 2019+", label: "atualizados" },
                { value: "4,4 bi+", label: "de dados consultados" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <span className="text-[18px] md:text-[20px] font-bold text-white leading-none">{item.value}</span>
                  <span className="text-[10px] md:text-[12px] font-normal leading-[1.25] text-white/40">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA — 52% */}
        <div className="hero-right relative overflow-hidden bg-gradient-to-l from-[#031426] to-[#031426]/80">
          <img
            src={heroCar}
            alt="Veículo premium em showroom"
            className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
          />
          {/* Enhanced transition gradient for a smoother integrated look */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#031426] via-[#031426]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#031426]/10" />

          
          {/* Floating Glassmorphism Cards - Positioned over the integrated image */}
          <div className="absolute inset-0 z-20 hidden lg:block pointer-events-none">
            <div 
              className="absolute right-[8%] top-20 w-52 rounded-[10px] border border-white/10 bg-[#031426]/60 p-4 shadow-xl backdrop-blur-[8px]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-semibold uppercase tracking-widest text-white/40">Status</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22E38A]" />
              </div>
              <div className="text-lg font-bold text-[#22E38A]">Aprovado</div>
              <div className="mt-1 text-[10px] text-white/50">Vistoria cautelar 100%</div>
            </div>

            <div 
              className="absolute right-[12%] bottom-24 w-56 rounded-[10px] border border-white/10 bg-[#031426]/60 p-4 shadow-xl backdrop-blur-[8px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22E38A]/10 text-[#22E38A]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <div>
                  <div className="text-[9px] font-semibold uppercase tracking-widest text-white/40">Garantia</div>
                  <div className="text-sm font-bold text-white">Certificado Gold</div>
                </div>
              </div>
              <div className="h-1 w-full rounded-full bg-white/10">
                <div className="h-full w-[98%] rounded-full bg-[#22E38A]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Bottom CTA Bar - Subtle */}
      <div className="mx-auto mt-6 max-w-[1440px] overflow-hidden rounded-xl border border-black/5 bg-[#031426]/5 px-8 py-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="h-1.5 w-1.5 rounded-full bg-[#22E38A]" />
            <div className="flex flex-col">
              <p className="text-[17px] md:text-[19px] font-bold text-[#1D252D] leading-[1.2]">
                Não deixe a concorrência sair na sua frente.
              </p>
              <p className="text-[13px] md:text-[15px] font-normal text-[#1D252D]/60 leading-[1.3]">
                Tenha mais inteligência e agilidade na sua loja.
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-[14px] md:text-[15px] font-bold text-[#031426] leading-[1.2] transition-colors hover:text-[#22E38A]">
            Quero testar agora
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
