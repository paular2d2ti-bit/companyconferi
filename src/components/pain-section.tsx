import { ArrowRight } from "lucide-react";

export function PainSection() {
  const situations = [
    {
      title: "COMPRO?",
      desc: "Antes de colocar dinheiro no veículo, saiba melhor o que está comprando.",
      delay: "0s"
    },
    {
      title: "ACEITO NA TROCA?",
      desc: "Tenha mais informação para avaliar quanto aquele carro realmente vale no negócio.",
      delay: "0.2s"
    },
    {
      title: "QUANTO VALE?",
      desc: "Considere o histórico antes de definir preço, margem e entrada no estoque.",
      delay: "0.4s"
    }
  ];

  return (
    <div className="bg-[#F8F9FA] relative">
      <section id="problema" className="mx-auto max-w-[1440px] overflow-hidden bg-[#F8F9FA] pt-32 pb-40 px-8 md:px-12 lg:px-24">
        {/* Selo e Headline Principal */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
            <span className="text-[#00A99D] text-[13px] font-bold tracking-[0.2em] uppercase">
              ANTES DE FECHAR O NEGÓCIO
            </span>
          </div>
          
          <h2 className="text-[#031426] text-[42px] leading-[1.05] font-bold sm:text-[64px] lg:text-[72px] tracking-[-0.04em] mb-10">
            O problema não é descobrir.<br />
            <span className="text-[#031426]/30">É descobrir depois.</span>
          </h2>
          
          <p className="text-[#1D252D]/70 text-[20px] md:text-[22px] leading-relaxed max-w-2xl mx-auto font-medium">
            Na compra, na troca ou na avaliação, uma informação que chega tarde pode mudar o preço, comprometer a margem e transformar um bom negócio em problema de estoque.
          </p>
        </div>

        {/* Situações Comerciais - Grid Tipográfico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 mb-24 max-w-6xl mx-auto">
          {situations.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col group animate-slide-up"
              style={{ animationDelay: item.delay }}
            >
              <h3 className="text-[#031426] text-[32px] md:text-[36px] lg:text-[42px] font-black tracking-tighter mb-6 group-hover:text-[#00A99D] transition-colors duration-500">
                {item.title}
              </h3>
              <div className="w-12 h-1 bg-[#031426]/10 mb-6 group-hover:w-full group-hover:bg-[#00A99D] transition-all duration-700 ease-out" />
              <p className="text-[#1D252D]/60 text-[17px] md:text-[18px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fechamento e CTA */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-12">
            <span className="text-[#031426] text-[24px] md:text-[28px] font-bold tracking-tight">
              A Gold entra <span className="text-[#00A99D]">antes da decisão.</span>
            </span>
          </div>
          
          <button className="h-[64px] px-10 rounded-full bg-[#031426] text-white font-bold text-[18px] hover:bg-[#031426]/90 transition-all flex items-center gap-3 group shadow-xl shadow-[#031426]/10 hover:shadow-2xl hover:shadow-[#031426]/20 hover:-translate-y-1">
            Quero consultar antes de fechar
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
      
      {/* Transição Suave para o Bloco 3 (#FFFFFF) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
      `}} />
    </div>
  );
}