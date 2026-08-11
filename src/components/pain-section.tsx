import { CheckCircle2, Search, History, BarChart2, ShieldCheck, Database } from "lucide-react";

export function PainSection() {
  const benefits = [
    {
      icon: Search,
      title: "Histórico de roubos e furtos atualizado",
      desc: ""
    },
    {
      icon: History,
      title: "Débitos e multas em tempo real",
      desc: ""
    },
    {
      icon: BarChart2,
      title: "Venda com mais segurança e agilidade",
      desc: ""
    },
    {
      icon: ShieldCheck,
      title: "Problemas estruturais e sinistros",
      desc: ""
    },
    {
      icon: Database,
      title: "Consulte com certeza informações que impactam a tomada de decisão",
      desc: ""
    }
  ];

  return (
    <div className="bg-[#F8F9FA] px-4 md:px-8 lg:px-12 pt-0 pb-16">
      <section id="problema" className="mx-auto max-w-[1440px] overflow-hidden bg-[#F8F9FA]">
        {/* Bloco Superior: Texto e Imagem Lado a Lado */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[46%_54%] md:min-h-[600px] items-stretch">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="relative flex flex-col justify-start px-8 pt-32 pb-16 md:px-12 lg:px-16 lg:pl-[80px] bg-[#F8F9FA] z-20">
            <div className="max-w-[520px]">
              <p className="text-[#00A99D] text-[12px] font-bold tracking-[0.08em] uppercase mb-5">O MEDO DE LEVAR PREJUÍZO FAZ PARTE DO JOGO</p>
              <h2 className="text-[#031426] text-[32px] leading-[1.1] font-bold sm:text-[40px] tracking-[-0.02em]">
                Um carro pode parecer um ótimo negócio. Até aparecer o que ninguém verificou.
              </h2>
              <p className="text-[#1D252D]/80 mt-8 text-[17px] leading-relaxed">
                Informações ocultas, leilões, dívidas, sinistros e muito mais em segundos. Com tudo certo, sua análise fica completa e você negocia com confiança total.
              </p>
            </div>
          </div>

          {/* Lado Direito: Imagem com Degradê */}
          <div className="relative min-h-[400px] md:min-h-full overflow-hidden bg-[#F8F9FA] pt-24 md:pt-40">
            <div className="relative w-full h-full md:h-[480px]">
              <img 
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2000&auto=format&fit=crop" 
                alt="Profissionais analisando veículo em showroom" 
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              {/* Degradê horizontal e vertical suave integrado ao off-white */}
              <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/60 to-transparent z-10 hidden md:block" />
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F8F9FA] to-transparent z-10" />
            </div>
          </div>
        </div>

        {/* Bloco Inferior: Benefícios em uma única linha */}
        <div className="bg-white border-t border-gray-100/50 px-8 py-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-x-12 items-start">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left group">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-[12px] bg-[#00A99D]/10 transition-colors group-hover:bg-[#00A99D]/20">
                  <benefit.icon className="w-[30px] h-[30px] text-[#00A99D]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[14px] font-bold text-[#031426] mb-1">{benefit.title}</h3>
                  {benefit.desc && <p className="text-[12px] text-[#1D252D]/70 leading-[1.3]">{benefit.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}