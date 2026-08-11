import { ArrowRight } from "lucide-react";

export function PainSection() {
  const steps = [
    {
      number: "01",
      title: "COMPRA",
      question: "Vale mesmo colocar dinheiro nesse carro?",
      desc: "Tenha mais informação antes de decidir pela compra.",
      delay: "0s"
    },
    {
      number: "02",
      title: "TROCA",
      question: "Quanto esse veículo realmente vale no negócio?",
      desc: "Consulte antes de definir o valor de entrada.",
      delay: "0.2s"
    },
    {
      number: "03",
      title: "ESTOQUE",
      question: "Esse carro vai ser fácil de revender depois?",
      desc: "Conheça melhor o histórico antes de ele entrar na loja.",
      delay: "0.4s"
    }
  ];

  return (
    <div className="bg-[#F8F9FA] relative">
      <section id="problema" className="mx-auto max-w-[1440px] overflow-hidden bg-[#F8F9FA] pt-32 pb-40 px-8 md:px-12 lg:px-24">
        {/* Selo e Headline Principal */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
            <span className="text-[#00A99D] text-[13px] font-bold tracking-[0.2em] uppercase">
              ANTES DE FECHAR O NEGÓCIO
            </span>
          </div>
          
          <h2 className="text-[#031426] text-[42px] leading-[1.05] font-bold sm:text-[64px] lg:text-[72px] tracking-[-0.04em] mb-10">
            O problema não é descobrir.<br />
            <span className="text-[#031426]/30">É descobrir depois.</span>
          </h2>
          
          <p className="text-[#1D252D]/70 text-[20px] md:text-[22px] leading-relaxed max-w-3xl mx-auto font-medium">
            Uma informação que chega tarde pode mudar o valor da compra, comprometer sua margem e transformar uma oportunidade em problema de estoque.
          </p>
        </div>

        {/* 3 Momentos - Composição Horizontal Tipográfica */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-20 mb-32 max-w-7xl mx-auto">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col group animate-slide-up"
              style={{ animationDelay: item.delay }}
            >
              {/* Número Gigante como Recurso Gráfico */}
              <span className="text-[80px] md:text-[100px] lg:text-[120px] font-black text-[#031426]/5 leading-none mb-4 tracking-tighter select-none group-hover:text-[#00A99D]/10 transition-colors duration-700">
                {item.number}
              </span>
              
              <h3 className="text-[#031426] text-[28px] md:text-[32px] lg:text-[38px] font-black tracking-tighter mb-4 group-hover:text-[#00A99D] transition-colors duration-500">
                {item.title}
              </h3>
              
              <p className="text-[#031426] text-[18px] md:text-[20px] font-bold leading-tight mb-4 tracking-tight">
                {item.question}
              </p>
              
              <p className="text-[#1D252D]/60 text-[16px] md:text-[17px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fechamento Grande e CTA */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-14">
            <h3 className="text-[#031426] text-[36px] md:text-[48px] lg:text-[56px] font-bold tracking-tighter animate-fade-in">
              A diferença está em <span className="text-[#00A99D]">descobrir antes.</span>
            </h3>
          </div>
          
          <button className="h-[68px] px-12 rounded-full bg-[#031426] text-white font-bold text-[19px] hover:bg-[#031426]/90 transition-all flex items-center gap-3 group shadow-xl shadow-[#031426]/10 hover:shadow-2xl hover:shadow-[#031426]/20 hover:-translate-y-1">
            Quero conhecer a Gold
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
