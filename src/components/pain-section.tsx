import { ArrowRight, AlertTriangle, TrendingDown, Clock, CheckCircle2 } from "lucide-react";

export function PainSection() {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Comprar errado",
      desc: "Um veículo problemático pode virar dinheiro parado no estoque."
    },
    {
      icon: AlertTriangle,
      title: "Avaliar errado",
      desc: "Uma informação que passou despercebida pode mudar o valor do negócio."
    },
    {
      icon: Clock,
      title: "Descobrir depois",
      desc: "O pior momento para encontrar um problema é quando o carro já entrou na sua operação."
    }
  ];

  return (
    <div className="bg-[#F8F9FA] px-4 md:px-8 lg:px-12 pt-0 pb-12">
      <section id="problema" className="mx-auto max-w-[1440px] overflow-hidden bg-[#F8F9FA]">
        <div className="w-full grid grid-cols-1 md:grid-cols-[46%_54%] md:min-h-[700px] items-stretch">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="relative flex flex-col justify-start px-8 pt-48 pb-16 md:px-12 lg:px-16 lg:pl-[80px] bg-[#F8F9FA] z-20">
            <div className="max-w-[540px]">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#00A99D]/5 border border-[#00A99D]/10">
                <span className="text-[#00A99D] text-[11px] font-bold tracking-[0.08em] uppercase">
                  O RISCO NÃO APARECE NA LATARIA
                </span>
              </div>
              
              <h2 className="text-[#031426] text-[34px] leading-[1.1] font-bold sm:text-[44px] tracking-[-0.03em]">
                Um carro pode parecer um ótimo negócio.<br />
                <span className="text-[#031426]/70">Até você descobrir o que não foi consultado.</span>
              </h2>
              
              <p className="text-[#1D252D]/80 mt-8 text-[17px] leading-relaxed max-w-[480px]">
                Boa aparência, preço atrativo e oportunidade não contam toda a história. Antes de comprar, aceitar uma troca ou colocar um veículo no estoque, sua loja precisa verificar informações que podem impactar a negociação, a margem e até a revenda.
              </p>

              {/* Destaques de dor */}
              <div className="mt-12 space-y-8">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#031426] group-hover:bg-[#00A99D]/5 group-hover:border-[#00A99D]/20 transition-all">
                      <point.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-[#031426] mb-1">{point.title}</h4>
                      <p className="text-[14px] text-[#1D252D]/70 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200/60">
                <p className="text-[17px] font-semibold text-[#031426] mb-6">
                  A Gold ajuda sua equipe a descobrir antes de decidir.
                </p>
                <button className="flex items-center gap-2 text-[#00A99D] font-bold text-[16px] hover:gap-3 transition-all group">
                  Quero analisar meus veículos melhor
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Lado Direito: Imagem Comercial */}
          <div className="relative min-h-[500px] md:min-h-full overflow-hidden bg-[#F8F9FA] pt-40 md:pt-64">
            <div className="relative w-full h-full md:h-[600px] pr-8 lg:pr-16">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000&auto=format&fit=crop" 
                alt="Contexto comercial de estoque de veículos" 
                className="absolute inset-0 h-full w-full object-cover rounded-3xl md:rounded-l-3xl shadow-2xl"
                loading="eager"
              />
              {/* Degradê horizontal suave integrado ao off-white */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/40 to-transparent z-10 hidden md:block" />
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F8F9FA] to-transparent z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}