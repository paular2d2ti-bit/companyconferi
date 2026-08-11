import { ArrowRight, AlertTriangle, TrendingDown, Clock } from "lucide-react";

export function PainSection() {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Compra errada",
      desc: "Evite colocar dinheiro em um veículo sem ter todas as informações para decidir."
    },
    {
      icon: AlertTriangle,
      title: "Margem comprometida",
      desc: "O que você descobre depois pode mudar completamente o valor do negócio."
    },
    {
      icon: Clock,
      title: "Estoque parado",
      desc: "Um histórico problemático pode dificultar a revenda e prender capital na loja."
    }
  ];

  return (
    <div className="bg-[#F8F9FA] px-4 md:px-8 lg:px-12 pt-0 pb-12">
      <section id="problema" className="mx-auto max-w-[1440px] overflow-hidden bg-[#F8F9FA]">
        <div className="w-full grid grid-cols-1 md:grid-cols-[46%_54%] md:min-h-[700px] items-stretch">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="relative flex flex-col justify-start px-8 pt-32 pb-16 md:px-12 lg:px-16 lg:pl-[80px] bg-[#F8F9FA] z-20">
            <div className="max-w-[540px]">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#00A99D] text-[12px] font-bold tracking-[0.1em] uppercase">
                  O RISCO NEM SEMPRE APARECE NO CARRO
                </span>
              </div>
              
              <h2 className="text-[#031426] text-[36px] leading-[1.1] font-bold sm:text-[48px] tracking-[-0.03em]">
                O carro pode estar impecável.<br />
                <span className="text-[#031426]/60">O negócio, nem tanto.</span>
              </h2>
              
              <p className="text-[#1D252D]/80 mt-8 text-[18px] leading-relaxed max-w-[480px]">
                Antes de comprar, aceitar uma troca ou colocar um veículo no estoque, sua loja precisa enxergar além da aparência.
              </p>
              
              <p className="text-[#1D252D]/70 mt-4 text-[16px] leading-relaxed max-w-[480px]">
                A Gold ajuda a identificar informações que podem impactar o valor da compra, a margem e a revenda do veículo.
              </p>

              {/* Destaques de dor */}
              <div className="mt-12 space-y-8">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#031426] group-hover:bg-[#00A99D]/5 group-hover:border-[#00A99D]/20 transition-all">
                      <point.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[17px] font-bold text-[#031426] mb-1">{point.title}</h4>
                      <p className="text-[15px] text-[#1D252D]/70 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200/60">
                <p className="text-[18px] font-semibold text-[#031426] mb-6 italic">
                  Descobrir antes muda a decisão.
                </p>
                <button className="h-[56px] px-8 rounded-xl bg-[#031426] text-white font-bold text-[16px] hover:bg-[#031426]/90 transition-all flex items-center gap-3 group">
                  Quero analisar antes de comprar
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Lado Direito: Imagem Comercial */}
          <div className="relative min-h-[500px] md:min-h-full overflow-hidden bg-[#F8F9FA] pt-32 md:pt-48 pb-12">
            <div className="relative w-full h-full pr-8 lg:pr-16">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop" 
                alt="Pátio de veículos com vários carros estacionados" 
                className="w-full h-full object-cover rounded-3xl shadow-xl"
                loading="eager"
              />
              {/* Degradê horizontal suave integrado ao off-white */}
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/20 to-transparent z-10 hidden md:block" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F8F9FA] to-transparent z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}