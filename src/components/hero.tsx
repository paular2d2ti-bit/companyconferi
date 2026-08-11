import { CheckCircle2, ShieldCheck, BarChart3, Users, Calendar, Network, Search, Car, FileText, Gavel, DollarSign, Database, ArrowRight } from "lucide-react";
import heroCar from "@/assets/hero-car-dealership-dark-v2.jpg";

export function Hero() {
  return (
    <div className="bg-white px-4 py-6 md:px-8 lg:px-12">
      <section className="hero relative mx-auto max-w-[1440px] overflow-hidden rounded-[36px] bg-[#031426] shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-[46%_54%] items-stretch w-full min-h-[560px] md:min-h-[640px]">
          {/* COLUNA ESQUERDA — 46% */}
          <div className="hero-left relative z-10 flex w-full flex-col justify-center px-8 py-12 md:py-16 lg:px-16 lg:pl-[64px]">
            <div className="max-w-[540px]">
              <div className="inline-flex items-center gap-2 mb-6 max-w-[460px]">
                <span className="text-[#22E38A] text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.08em] leading-[1.3]">
                  PARA LOJAS E AGÊNCIAS DE VEÍCULOS
                </span>
              </div>
              
              <h1 className="text-[30px] md:text-[38px] font-bold leading-[1.08] md:leading-[1.10] tracking-[-0.02em] text-white max-w-[650px]">
                Inteligência veicular<br />
                para decisões seguras<br />
                e lucros maiores.
              </h1>

              <p className="mt-6 text-[14px] md:text-[16px] text-white/70 leading-[1.5] max-w-[480px]">
                Com dados técnicos, financeiros e de mercado na sua mão, seu estoque gira mais rápido e sua margem aumenta.
              </p>
              
              <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row">
                <button className="h-[54px] w-full rounded-[10px] bg-[#22E38A] px-[28px] text-[14px] md:text-[15px] font-bold text-[#031426] leading-[1.2] transition-all hover:brightness-110 active:scale-[0.98] sm:w-auto shadow-lg shadow-[#22E38A]/20">
                  Comece grátis e domine o mercado
                </button>
                
                <div className="flex items-center gap-3 px-4 py-3 rounded-[12px] border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="text-[12px] md:text-[13px] font-semibold text-white/90 leading-[1.3]">
                    + 3.597 lojas aproximadamente
                  </span>
                </div>
              </div>

              {/* Metrics Row */}
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/5 pt-8 sm:grid-cols-4 sm:items-start md:grid-cols-[repeat(4,1fr)] lg:gap-x-[24px]">
                {[
                  { value: "+10 anos", label: "de mercado automotivo", icon: BarChart3 },
                  { value: "+2,1 mil", label: "usuários ativos", icon: Users },
                  { value: "Dados de 2019+", label: "atualizados", icon: Calendar },
                  { value: "4,4 bi+", label: "de dados consultados", icon: Network },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#22E38A]/10 text-[#22E38A] transition-colors group-hover:bg-[#22E38A]/20">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-[18px] font-bold text-white leading-tight">
                        {item.value}
                      </span>
                      <span className="text-[12px] font-normal leading-[1.3] text-white/40">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA — 54% */}
          <div className="hero-right relative overflow-hidden bg-gradient-to-l from-[#031426] to-[#031426]/80">
            <img
              src={heroCar}
              alt="Veículo premium em showroom"
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700"
            />
            {/* Enhanced transition gradient for a smoother integrated look */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#031426] via-[#031426]/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[#031426]/10" />

            {/* Floating Glassmorphism Cards */}
            <div className="absolute inset-0 z-20 hidden lg:block pointer-events-none">
              {/* Card 1: Histórico veicular */}
              <div className="absolute left-[10%] top-[15%] w-44 rounded-[12px] border border-white/10 bg-[#031426]/70 p-3 shadow-2xl backdrop-blur-[10px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22E38A]/20 text-[#22E38A]">
                    <Search className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Histórico veicular</div>
                    <div className="text-[10px] text-[#22E38A] font-medium">Completo</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Leilões */}
              <div className="absolute right-[12%] top-[10%] w-48 rounded-[12px] border border-white/10 bg-[#031426]/70 p-3 shadow-2xl backdrop-blur-[10px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22E38A]/20 text-[#22E38A]">
                    <Gavel className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Leilões</div>
                    <div className="text-[10px] text-[#22E38A] font-medium">Nacionais e regionais</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Fipe Online */}
              <div className="absolute left-[35%] top-[25%] w-40 rounded-[12px] border border-white/10 bg-[#031426]/70 p-3 shadow-2xl backdrop-blur-[10px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22E38A]/20 text-[#22E38A]">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Fipe Online</div>
                    <div className="text-[10px] text-[#22E38A] font-medium">Atualizado</div>
                  </div>
                </div>
              </div>

              {/* Card 4: Leilão */}
              <div className="absolute right-[15%] bottom-[35%] w-44 rounded-[12px] border border-white/10 bg-[#031426]/70 p-3 shadow-2xl backdrop-blur-[10px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22E38A]/20 text-[#22E38A]">
                    <Search className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Leilão</div>
                    <div className="text-[10px] text-[#22E38A] font-medium">Simulados e reais</div>
                  </div>
                </div>
              </div>

              {/* Card 5: Revenda & FIPE */}
              <div className="absolute left-[15%] bottom-[15%] w-48 rounded-[12px] border border-white/10 bg-[#031426]/70 p-3 shadow-2xl backdrop-blur-[10px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22E38A]/20 text-[#22E38A]">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Revenda & FIPE</div>
                    <div className="text-[10px] text-[#22E38A] font-medium">Precificação assertiva</div>
                  </div>
                </div>
              </div>

              {/* Card 6: Dívida ativa (Sefaz) */}
              <div className="absolute right-[30%] bottom-[10%] w-48 rounded-[12px] border border-white/10 bg-[#031426]/70 p-3 shadow-2xl backdrop-blur-[10px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22E38A]/20 text-[#22E38A]">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Dívida ativa (Sefaz)</div>
                    <div className="text-[10px] text-[#22E38A] font-medium">Todas as UF's</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Bottom CTA Bar */}
        <div className="relative z-20 mx-auto border-t border-white/5 bg-[#010912] px-8 py-8 md:px-16 md:py-10 mb-[-1px]">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#22E38A]/10 text-[#22E38A] border border-[#22E38A]/20">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <p className="text-[17px] md:text-[19px] font-bold text-white leading-[1.2]">
                  Não deixe a concorrência sair na frente.
                </p>
                <p className="text-[13px] md:text-[15px] font-normal text-white/40 leading-[1.3] mt-1">
                  Tenha mais inteligência e agilidade na sua loja.
                </p>
              </div>
            </div>
            <button className="flex items-center gap-3 rounded-[10px] bg-[#22E38A] px-8 py-4 text-[14px] md:text-[15px] font-bold text-[#031426] transition-all hover:brightness-110 active:scale-[0.98] shadow-lg shadow-[#22E38A]/10">
              Quero testar agora
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
