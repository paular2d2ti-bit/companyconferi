import { CheckCircle2, ShieldCheck, BarChart3, Users } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <div className="bg-[#031322] px-4 py-8 md:px-8 lg:px-12">
      <section className="hero relative mx-auto max-w-[1440px] overflow-hidden rounded-[36px] bg-[#031322] grid grid-cols-1 md:grid-cols-[48%_52%] min-h-[720px] items-stretch w-full">
        {/* COLUNA ESQUERDA — 48% */}
        <div className="hero-left relative z-10 flex min-h-[720px] w-full flex-col justify-center px-8 py-16 md:py-20 lg:px-16 lg:pb-[48px] lg:pt-[56px] lg:pl-[64px] lg:pr-[56px]">
          <div className="max-w-[620px]">
            <span className="text-[#22E38A] text-sm md:text-base font-semibold uppercase tracking-wider">
              LIDERANÇA EM TECNOLOGIA AUTOMOTIVA
            </span>
            
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-[64px]">
              Acelere sua <span className="text-[#22E38A]">gestão</span> com inteligência de ponta.
            </h1>
            
            <p className="mt-8 text-[18px] md:text-[20px] leading-relaxed text-[#C7D0D9]">
              A plataforma completa para agências e revendas que buscam máxima performance, 
              segurança e controle absoluto sobre o estoque e operações.
            </p>
            
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
              <button className="h-[56px] w-full rounded-[10px] bg-[#22E38A] px-10 text-[16px] font-bold text-[#041522] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto">
                Agendar Demonstração
              </button>
              
              <div className="flex items-center gap-3 rounded-[10px] border border-[#22E38A]/30 bg-[#22E38A]/5 px-5 py-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-[#031322] bg-gray-600" />
                  ))}
                </div>
                <span className="text-sm font-medium text-white/90">
                  +500 agências confiam
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
              {[
                { icon: <BarChart3 className="w-5 h-5" />, label: "Vendas", value: "+24%" },
                { icon: <ShieldCheck className="w-5 h-5" />, label: "Segurança", value: "100%" },
                { icon: <Users className="w-5 h-5" />, label: "Clientes", value: "8.5k" },
                { icon: <CheckCircle2 className="w-5 h-5" />, label: "Status", value: "Pro" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="text-[#22E38A]">{item.icon}</div>
                  <span className="text-2xl font-bold text-white">{item.value}</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#C7D0D9]/60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA — 52% */}
        <div className="hero-right relative min-h-[500px] md:min-h-[720px] overflow-hidden">
          <img
            src={heroCar}
            alt="Showroom automotivo premium"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          
          {/* Gradients and Overlays strictly on the right side image container */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031322] via-[#031322]/80 to-transparent md:via-[#031322]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,19,34,0.4)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#031322]/60 to-transparent" />

          {/* Floating Glassmorphism Cards */}
          <div className="relative z-10 hidden h-full lg:block">
            <div 
              className="absolute right-12 top-24 w-64 rounded-[12px] border border-white/12 bg-[#030F1C]/78 p-6 shadow-2xl backdrop-blur-[10px]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Status do Veículo</span>
                <span className="h-2 w-2 rounded-full bg-[#22E38A] shadow-[0_0_8px_#22E38A]" />
              </div>
              <div className="text-2xl font-bold text-[#22E38A]">Aprovado</div>
              <div className="mt-2 text-xs text-white/60">Vistoria cautelar concluída</div>
            </div>

            <div 
              className="absolute right-32 bottom-32 w-72 rounded-[12px] border border-white/12 bg-[#030F1C]/78 p-6 shadow-2xl backdrop-blur-[10px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22E38A]/10 text-[#22E38A]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">Garantia</div>
                  <div className="text-lg font-bold text-white">Certificado Gold</div>
                </div>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div className="h-full w-[98%] rounded-full bg-[#22E38A]" />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-white/60">
                <span>Confiabilidade</span>
                <span>98%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Bottom CTA Bar */}
      <div className="mx-auto mt-4 max-w-[1440px] overflow-hidden rounded-2xl border border-white/5 bg-[#020D18] px-8 py-5">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-[#22E38A]" />
            <p className="text-sm font-medium text-[#C7D0D9]">
              Pronto para transformar sua revenda? <span className="hidden sm:inline text-white/40 ml-2">Junte-se a centenas de líderes do setor.</span>
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-[#22E38A] transition-colors hover:text-white">
            FALAR COM ESPECIALISTA 
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
