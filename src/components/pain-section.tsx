import { ArrowRight } from "lucide-react";

export function PainSection() {
  const steps = [
    {
      number: "01",
      title: "ALÉM DO VISUAL",
      question: "O que a vistoria física não mostra?",
      desc: "Complemente a análise da sua equipe com dados que vão além da inspeção visual",
      delay: "0s"
    },
    {
      number: "02",
      title: "MAIS INFORMAÇÃO",
      question: "Seu cliente pode receber uma análise mais completa.",
      desc: "Reúna informações relevantes para entregar ao cliente uma análise mais completa.",
      delay: "0.15s"
    },
    {
      number: "03",
      title: "LAUDO PROFISSIONAL",
      question: "Transforme dados em uma entrega de mais valor.",
      desc: "Entregue um relatório profissional em PDF, claro e organizado para o cliente.",
      delay: "0.3s"
    },
    {
      number: "04",
      title: "SUA MARCA",
      question: "Seu laudo. Sua identidade visual.",
      desc: "Personalize o laudo com o logo e as cores da sua empresa.",
      delay: "0.45s"
    }
  ];

  return (
    <div className="bg-[#F8F9FA] relative w-full overflow-hidden">
      <section id="rotina" className="mx-auto max-w-[1440px] bg-[#F8F9FA] pt-4 md:pt-6 pb-16 px-6 md:px-12 lg:px-24">
        {/* Selo e Headline Principal */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <div className="flex flex-col items-center gap-1 mb-6 animate-fade-in">
            <span className="text-[#00A99D] text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase">
              UM DIFERENCIAL PARA A SUA EMPRESA
            </span>
          </div>
          
          <h2 className="text-[#031426] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[68px] leading-[1.1] font-bold tracking-[-0.04em] mb-6 px-2">
            Transforme informação em um diferencial para a sua empresa.
          </h2>
          
          <p className="text-[#1D252D]/70 text-[17px] md:text-[21px] leading-relaxed max-w-3xl mx-auto font-medium px-4">
            A Auto Perícia Plus complementa sua vistoria com dados veiculares e um laudo profissional personalizado, ajudando sua empresa a entregar mais informação e valor ao cliente.
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
          <div className="mb-8 md:mb-10">
            <h3 className="text-[#031426] text-[32px] sm:text-[40px] md:text-[52px] lg:text-[62px] font-bold tracking-tighter animate-fade-in flex flex-col leading-[1.1]">
              <span>Mais informação em cada vistoria.</span>
              <span className="text-[#00A99D]">Mais valor em cada entrega.</span>
            </h3>
          </div>
          
          <a href="https://api.whatsapp.com/send/?phone=5511952267192&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="h-[64px] md:h-[72px] px-8 md:px-14 rounded-full bg-[#031426] text-white font-bold text-[18px] md:text-[20px] hover:bg-[#00A99D] transition-all duration-500 flex items-center gap-3 group shadow-xl shadow-[#031426]/10 hover:shadow-2xl hover:shadow-[#00A99D]/30 hover:-translate-y-1 w-full sm:w-auto justify-center">
            QUERO CONHECER A AUTO PERÍCIA PLUS →
          </a>
        </div>
      </section>
      
      {/* Frase de Transição Editorial entre Bloco 2 e 3 */}
      <div className="w-full bg-white py-12 border-y border-[#F5F7F8]">
        <div className="mx-auto max-w-[1440px] px-8 md:px-12 lg:px-24">
          <p className="text-[#031426]/20 text-[32px] md:text-[48px] lg:text-[64px] font-black tracking-[-0.04em] text-center leading-none uppercase select-none">
            E SE SUA VISTORIA ENTREGASSE MAIS?
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