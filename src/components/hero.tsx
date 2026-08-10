import { CheckCircle2, ShieldCheck, BarChart3, Users } from "lucide-react";
import heroCar from "@/assets/hero-car-dealership-dark-v2.jpg";

export function Hero() {
  return (
    <div className="bg-white px-4 py-6 md:px-8 lg:px-12">
      <section className="hero relative mx-auto max-w-[1440px] overflow-hidden rounded-[36px] bg-[#031426] grid grid-cols-1 lg:grid-cols-[42%_58%] min-h-[600px] md:min-h-[680px] items-stretch w-full shadow-2xl">
        {/* COLUNA ESQUERDA — 48% */}
        <div className="hero-left relative z-10 flex w-full flex-col justify-center px-8 py-10 md:py-12 lg:px-16 lg:pl-[64px]">
          <div className="max-w-[540px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#22E38A]/10 px-3 py-1 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-[#22E38A] animate-pulse" />
              <span className="text-[#22E38A] text-[10px] font-bold uppercase tracking-[0.15em]">
                Liderança em Tecnologia Automotiva
              </span>
            </div>
            
            <h1 className="text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-[52px]">
              Acelere sua <span className="text-[#22E38A]">gestão</span> com inteligência de ponta.
            </h1>
            
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#C7D0D9]/90">
              A plataforma completa para agências e revendas que buscam máxima performance, 
              segurança e controle absoluto sobre o estoque.
            </p>
            
            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row">
              <button className="h-[52px] w-full rounded-[10px] bg-[#22E38A] px-10 text-[15px] font-bold text-[#031426] transition-all hover:brightness-110 active:scale-[0.98] sm:w-auto shadow-lg shadow-[#22E38A]/20">
                Agendar Demonstração
              </button>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-7 w-7 rounded-full border-2 border-[#031426] bg-gray-700 overflow-hidden shadow-inner" />
                  ))}
                </div>
                <span className="text-xs font-medium text-white/50">
                  +500 agências confiam
                </span>
              </div>
            </div>

            {/* Metrics Grid - More subtle */}
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/5 pt-8 sm:grid-cols-4">
              {[
                { icon: <BarChart3 className="w-4 h-4" />, label: "Vendas", value: "+24%" },
                { icon: <ShieldCheck className="w-4 h-4" />, label: "Segurança", value: "100%" },
                { icon: <Users className="w-4 h-4" />, label: "Clientes", value: "8.5k" },
                { icon: <CheckCircle2 className="w-4 h-4" />, label: "Status", value: "Pro" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="text-[#22E38A]/70">{item.icon}</div>
                  <span className="text-xl font-bold text-white leading-none">{item.value}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA — 52% */}
        <div className="hero-right relative overflow-hidden bg-[#031426]">
          <img
            src={heroCar}
            alt="Veículo premium em showroom"
            className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
          />
          {/* Transition gradient - wider for a more natural fade between text and image */}
          <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-[#031426] via-[#031426]/80 to-transparent z-10" />


          
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
            <p className="text-sm font-medium text-[#1D252D]">
              Pronto para transformar sua revenda? <span className="hidden sm:inline text-[#1D252D]/40 ml-2">Junte-se a centenas de líderes do setor.</span>
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-[#031426] transition-colors hover:text-[#22E38A]">
            FALAR COM ESPECIALISTA 
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
