import { CheckCircle2, Search, History, BarChart2, ShieldCheck, Database } from "lucide-react";

export function PainSection() {
  const benefits = [
    {
      icon: Search,
      title: "Busca Inteligente",
      desc: "Localize veículos em segundos."
    },
    {
      icon: History,
      title: "Histórico Completo",
      desc: "Dados reais de cada carro."
    },
    {
      icon: BarChart2,
      title: "Margem Real",
      desc: "Lucratividade sob controle."
    },
    {
      icon: ShieldCheck,
      title: "Decisão Segura",
      desc: "Menos risco na compra."
    },
    {
      icon: Database,
      title: "Dados em Dia",
      desc: "Informação 2019+ sempre online."
    }
  ];

  return (
    <section id="problema" className="w-full bg-white overflow-hidden">
      {/* Bloco Superior: Texto e Imagem Lado a Lado */}
      <div className="w-full grid grid-cols-1 md:grid-cols-[46%_54%] md:h-[480px] items-stretch">
        
        {/* Lado Esquerdo: Conteúdo Textual */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:pl-24 xl:pl-32 bg-white z-20">
          <div className="max-w-[520px]">
            <p className="text-[#00A99D] text-[12px] font-bold tracking-[0.08em] uppercase mb-4">O DESAFIO</p>
            <h2 className="text-[#031426] text-[30px] leading-[1.15] font-bold sm:text-[38px]">
              Sua loja cresce, mas os problemas de gestão acompanham?
            </h2>
            <p className="text-[#1D252D]/80 mt-6 text-[16px] leading-relaxed">
              Muitas revendas perdem margem e oportunidades por falta de dados precisos. 
              Estoque desatualizado, falta de histórico e processos manuais 
              são o freio que impede sua empresa de acelerar.
            </p>
          </div>
        </div>

        {/* Lado Direito: Imagem com Degradê */}
        <div className="relative min-h-[300px] md:min-h-full overflow-hidden">
          {/* Degradê suave que avança sobre a borda esquerda da imagem */}
          <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/60 to-transparent hidden md:block" />
          
          <img 
            src="/src/assets/professionals-analyzing-car.jpg" 
            alt="Profissionais analisando veículo em showroom" 
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </div>
      </div>

      {/* Bloco Inferior: Benefícios em uma única linha */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-x-8 items-start">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-[12px] bg-[#00A99D]/10">
                  <benefit.icon className="w-[30px] h-[30px] text-[#00A99D]" />
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#031426] mb-1">{benefit.title}</h3>
                  <p className="text-[12px] text-[#1D252D]/70 leading-[1.3]">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}