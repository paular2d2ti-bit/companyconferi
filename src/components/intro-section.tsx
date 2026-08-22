import { ArrowRight, ShieldCheck, Database, FileSearch, History, Search, Car, AlertTriangle, Scale, ClipboardCheck, Info, Gavel } from "lucide-react";

export function IntroSection() {
  const items = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "SINISTRO DE INDENIZAÇÃO INTEGRAL",
      desc: "Saiba se o veículo possui registro de sinistro com indenização integral."
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "ROUBO E FURTO",
      desc: "Consulte registros de roubo e furto em bases oficiais online."
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "LEILÃO E COMUNICADO DE VENDA",
      desc: "Saiba se o veículo já foi ofertado em leilão ou possui comunicação de venda em aberto."
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "RECALL E DADOS DO VEÍCULO",
      desc: "Consulte recall, dados de fabricação, Base BIN Nacional e comparativo de componentes."
    }
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      <section id="solucoes" className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-12 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="relative z-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#00A99D] text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase bg-[#00A99D]/5 px-3 py-1.5 rounded-full">
                O QUE A AUTO PERÍCIA PLUS ENTREGA
              </span>
            </div>
            
            <h2 className="text-[#031426] text-[32px] sm:text-[40px] leading-[1.1] md:leading-[1.05] font-bold sm:text-[48px] lg:text-[56px] tracking-[-0.04em] mb-6 md:mb-8 uppercase">
              DADOS QUE COMPLEMENTAM A SUA VISTORIA.
            </h2>
            
            <p className="text-[#1D252D]/80 text-[17px] md:text-[20px] leading-relaxed mb-10 md:mb-12 font-medium max-w-[540px]">
              Consulte informações veiculares relevantes e amplie o nível de informação entregue ao seu cliente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mb-16">
              {items.map((item, i) => (
                <div key={i} className="group flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F7F8] flex items-center justify-center text-[#00A99D] group-hover:bg-[#00A99D] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-[#031426] text-[18px] font-extrabold tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#1D252D]/70 text-[15px] leading-relaxed font-medium pl-0">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-3 py-6 border-y border-[#F5F7F8]">
                <ShieldCheck className="w-6 h-6 text-[#00A99D] shrink-0 mt-0.5" />
                <p className="text-[#031426] text-[18px] md:text-[20px] font-bold leading-tight tracking-tight">
                  Não é só consultar. <span className="text-[#00A99D]">É entregar mais valor em cada vistoria.</span>
                </p>
              </div>
              
              <a href="https://api.whatsapp.com/send/?phone=5511952267192&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="h-[60px] md:h-[64px] px-8 md:px-10 rounded-full bg-[#031426] text-white font-bold text-[16px] md:text-[18px] hover:bg-[#00A99D] transition-all duration-500 flex items-center gap-3 group w-full sm:w-fit justify-center shadow-lg shadow-[#031426]/10">
                QUERO CONHECER A AUTO PERÍCIA PLUS
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Lado Direito: Visual do Produto Refinado */}
          <div className="relative lg:block">
            {/* Pano de fundo sutil automotivo */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] scale-150 rotate-[-10deg]">
              <div className="grid grid-cols-4 gap-12">
                {Array.from({ length: 16 }).map((_, i) => (
                  <Car key={i} className="w-24 h-24 text-[#031426]" />
                ))}
              </div>
            </div>

            <div className="relative rounded-[32px] overflow-hidden border-[8px] border-[#F5F7F8] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.1)] bg-[#031426]">
              {/* Mockup do Sistema - Interface de Consulta Veicular */}
              <div className="aspect-[1.3/1] bg-[#031426] p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden">
                {/* Header Mockup */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00A99D] to-[#22E38A] flex items-center justify-center font-black text-white text-[18px] shadow-lg shadow-[#00A99D]/20">P</div>
                    <div className="space-y-1">
                      <div className="text-white/80 text-[12px] font-bold tracking-tight">AUTO PERÍCIA PLUS</div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#00A99D]"></div>
                        <div className="w-12 h-2 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/40 text-[10px] font-mono">
                    CONSULTA ATIVA
                  </div>
                </div>

                {/* Grid de Informações */}
                <div className="grid grid-cols-2 gap-4 h-full content-start overflow-hidden pt-2">
                  {/* Roubo e Furto */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#00A99D]" />
                        <span className="text-white/60 text-[11px] font-bold uppercase tracking-wider">Roubo e Furto</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#00A99D] bg-[#00A99D]/10 px-2 py-0.5 rounded uppercase">OK</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[#00A99D]/40"></div>
                    </div>
                  </div>

                  {/* Oferta em Leilão */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Gavel className="w-4 h-4 text-amber-500" />
                        <span className="text-white/60 text-[11px] font-bold uppercase tracking-wider">Oferta em Leilão</span>
                      </div>
                      <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded uppercase">Analisado</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-amber-500/40"></div>
                    </div>
                  </div>

                  {/* Comunicado de Venda */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FileSearch className="w-4 h-4 text-[#00A99D]" />
                        <span className="text-white/60 text-[11px] font-bold uppercase tracking-wider">Comunicado de Venda</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#00A99D] bg-[#00A99D]/10 px-2 py-0.5 rounded uppercase">OK</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[#00A99D]/40"></div>
                    </div>
                  </div>

                  {/* Sinistro / Indenização Integral */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span className="text-white/60 text-[11px] font-bold uppercase tracking-wider text-red-500">Sinistro</span>
                      </div>
                      <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded uppercase">Verificado</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-red-500/40"></div>
                    </div>
                  </div>

                  {/* Dados do Veículo */}
                  <div className="col-span-2 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Car className="w-5 h-5 text-[#00A99D]" />
                        <span className="text-white text-[13px] font-bold uppercase tracking-widest">Dados do Veículo</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00A99D] animate-pulse"></div>
                        <span className="text-[10px] font-bold text-[#00A99D]">ANALISADO</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="text-[9px] text-white/30 uppercase font-bold tracking-wider">Fabricação</div>
                        <div className="h-1 bg-[#00A99D]/40 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-[9px] text-white/30 uppercase font-bold tracking-wider">Base BIN</div>
                        <div className="h-1 bg-[#00A99D]/40 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-[9px] text-white/30 uppercase font-bold tracking-wider">Componentes</div>
                        <div className="h-1 bg-[#00A99D]/40 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge Flutuante Final */}
                <div className="absolute bottom-6 right-6 p-3 px-6 rounded-full bg-[#00A99D] text-white text-[12px] font-black uppercase tracking-widest shadow-xl shadow-[#00A99D]/40 animate-bounce">
                  Laudo com sua marca
                </div>
              </div>
            </div>
            
            {/* Decoração de fundo aprimorada */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#00A99D]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#00A99D]/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-55%) translateX(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
}
