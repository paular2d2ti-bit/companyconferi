import { ArrowRight } from "lucide-react";

export function PainSection() {
  const steps = [
    {
      number: "01",
      title: "COMPRA",
      question: "Vale a pena comprar esse carro?",
      desc: "Consulte antes de colocar dinheiro no veículo.",
      delay: "0s"
    },
    {
      number: "02",
      title: "TROCA",
      question: "Vale a pena aceitar esse carro no negócio?",
      desc: "Tenha mais informação antes de definir a entrada.",
      delay: "0.15s"
    },
    {
      number: "03",
      title: "AVALIAÇÃO",
      question: "Quanto esse veículo realmente vale?",
      desc: "Use mais informações do histórico para avaliar e negociar com mais critério.",
      delay: "0.3s"
    },
    {
      number: "04",
      title: "ESTOQUE",
      question: "Vale a pena esse carro entrar na sua loja?",
      desc: "Conheça melhor o veículo antes de ele virar estoque.",
      delay: "0.45s"
    }
  ];

  return (
    <div className="bg-[#F8F9FA] relative w-full overflow-hidden">
      <section id="rotina" className="mx-auto max-w-[1440px] bg-[#F8F9FA] pt-12 pb-16 px-8 md:px-12 lg:px-24">
        {/* Selo e Headline Principal */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 animate-fade-in">
            <span className="text-[#00A99D] text-[12px] font-bold tracking-[0.2em] uppercase">
              EM CADA ETAPA, UMA DECISÃO
            </span>
          </div>
          
          <h2 className="text-[#031426] text-[40px] leading-[1.1] font-bold sm:text-[56px] lg:text-[68px] tracking-[-0.04em] mb-6">
            Da avaliação à entrada no estoque,<br className="hidden md:block" /> informação muda a decisão.
          </h2>
          
          <p className="text-[#1D252D]/70 text-[19px] md:text-[21px] leading-relaxed max-w-3xl mx-auto font-medium">
            A Gold entra nos momentos em que sua loja precisa decidir se vale a pena comprar, aceitar, avaliar ou colocar um veículo no estoque.
          </p>
        </div>

        {/* 4 Momentos - Composição Horizontal Tipográfica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-12 mb-20 max-w-[1300px] mx-auto">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col group animate-slide-up"
              style={{ animationDelay: item.delay }}
            >
              {/* Número Gigante como Recurso Gráfico */}
              <span className="text-[60px] md:text-[80px] lg:text-[100px] font-black text-[#031426]/5 leading-none mb-2 tracking-tighter select-none group-hover:text-[#00A99D]/10 transition-colors duration-700">
                {item.number}
              </span>
              
              <h3 className="text-[#031426] text-[24px] md:text-[28px] lg:text-[32px] font-black tracking-tighter mb-2 group-hover:text-[#00A99D] transition-colors duration-500 uppercase">
                {item.title}
              </h3>
              
              <p className="text-[#031426] text-[17px] md:text-[19px] font-bold leading-tight mb-3 tracking-tight">
                {item.question}
              </p>
              
              <p className="text-[#1D252D]/60 text-[15px] md:text-[16px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fechamento em destaque e CTA */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-10">
            <h3 className="text-[#031426] text-[40px] md:text-[52px] lg:text-[62px] font-bold tracking-tighter animate-fade-in flex flex-col leading-[1.1]">
              <span>Mais informação antes.</span>
              <span className="text-[#00A99D]">Decisões melhores depois.</span>
            </h3>
          </div>
          
          <button className="h-[72px] px-14 rounded-full bg-[#031426] text-white font-bold text-[20px] hover:bg-[#00A99D] transition-all duration-500 flex items-center gap-3 group shadow-xl shadow-[#031426]/10 hover:shadow-2xl hover:shadow-[#00A99D]/30 hover:-translate-y-1">
            Quero decidir com mais segurança
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
      
      {/* Frase de Transição Editorial entre Bloco 2 e 3 */}
      <div className="w-full bg-white py-12 border-y border-[#F5F7F8]">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-24">
          <p className="text-[#031426]/20 text-[32px] md:text-[48px] lg:text-[64px] font-black tracking-[-0.04em] text-center leading-none uppercase select-none">
            O QUE VOCÊ PRECISA SABER ANTES?
          </p>
        </div>
      </div>


      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
      `}} />
    </div>
  );
}