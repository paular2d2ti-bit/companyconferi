import { ArrowRight, ShieldCheck, Database, FileSearch, History, Search } from "lucide-react";

export function IntroSection() {
  const items = [
    {
      icon: <History className="w-5 h-5" />,
      title: "Histórico e gravames",
      desc: "Consulte registros que podem impactar a negociação."
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Débitos, multas e recall",
      desc: "Identifique pendências antes de fechar o negócio."
    },
    {
      icon: <FileSearch className="w-5 h-5" />,
      title: "PRF, RENAINF e comunicado de venda",
      desc: "Aprofunde a análise antes de decidir pelo veículo."
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Chassi e histórico de sinistro",
      desc: "Tenha mais elementos para validar o veículo antes da negociação."
    }
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      <section id="solucoes" className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-24 py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[46%_54%] gap-12 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="relative z-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[#00A99D] text-[12px] font-bold tracking-[0.2em] uppercase bg-[#00A99D]/5 px-3 py-1.5 rounded-full">
                VÁ ALÉM DA CONSULTA BÁSICA
              </span>
            </div>
            
            <h2 className="text-[#031426] text-[40px] leading-[1.05] font-bold sm:text-[48px] lg:text-[56px] tracking-[-0.04em] mb-8">
              Sua loja já consulta veículos.
              <br className="hidden md:block" />
              Mas consulta o suficiente para decidir?
            </h2>
            
            <p className="text-[#1D252D]/80 text-[18px] md:text-[20px] leading-relaxed mb-12 font-medium max-w-[540px]">
              A Gold aprofunda a análise com informações que ajudam sua equipe a entender melhor o veículo antes de comprar, aceitar uma troca ou colocar no estoque.
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
                <p className="text-[#031426] text-[20px] font-bold leading-tight tracking-tight">
                  Não é consultar mais. <span className="text-[#00A99D]">É saber mais antes de fechar.</span>
                </p>
              </div>
              
              <button className="h-[64px] px-10 rounded-full bg-[#031426] text-white font-bold text-[18px] hover:bg-[#00A99D] transition-all duration-500 flex items-center gap-3 group w-fit shadow-lg shadow-[#031426]/10">
                Quero conhecer a Gold
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Lado Direito: Visual do Produto Refinado */}
          <div className="relative lg:block">
            <div className="relative rounded-[32px] overflow-hidden border-[8px] border-[#F5F7F8] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.1)] bg-[#031426]">
              {/* Mockup do Sistema - Interface Limpa */}
              <div className="aspect-[1.3/1] bg-[#031426] p-8 md:p-12 flex flex-col gap-6 relative overflow-hidden">
                {/* Header Mockup */}
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00A99D] to-[#22E38A] flex items-center justify-center font-black text-white text-[20px]">G</div>
                    <div className="space-y-1">
                      <div className="w-24 h-2 bg-white/20 rounded-full"></div>
                      <div className="w-16 h-1.5 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10"></div>
                  </div>
                </div>

                {/* Content Mockup */}
                <div className="grid grid-cols-2 gap-6 h-full">
                  <div className="space-y-6">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                      <div className="w-full h-32 rounded-lg bg-white/5 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full border-4 border-[#00A99D]/30 border-t-[#00A99D] animate-spin-slow"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-3 bg-white/20 rounded-full"></div>
                        <div className="w-2/3 h-3 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10"></div>
                       <div className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 pt-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 shrink-0"></div>
                        <div className="space-y-2 flex-1">
                          <div className="w-full h-2.5 bg-white/20 rounded-full"></div>
                          <div className="w-1/2 h-2.5 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Efeito de Vidro Flutuante */}
                <div className="absolute top-1/2 right-12 translate-y-[-50%] w-[180px] p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl animate-float-slow">
                   <div className="w-10 h-10 rounded-lg bg-[#00A99D] flex items-center justify-center text-white mb-4">
                     <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div className="space-y-2">
                     <div className="w-full h-2 bg-white/40 rounded-full"></div>
                     <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Decoração de fundo */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#00A99D]/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#00A99D]/5 rounded-full blur-[100px] -z-10"></div>
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
