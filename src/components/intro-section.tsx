import { CheckCircle2, Monitor } from "lucide-react";

export function IntroSection() {
  const benefits = [
    {
      title: "Histórico e gravames",
      desc: "Consulte registros que podem impactar a negociação."
    },
    {
      title: "Débitos, multas e recall",
      desc: "Identifique pendências antes de fechar o negócio."
    },
    {
      title: "PRF, RENAINF e comunicado de venda",
      desc: "Aprofunde a análise antes de decidir pelo veículo."
    },
    {
      title: "Chassi e histórico de sinistro",
      desc: "Tenha mais elementos para validar o veículo antes da negociação."
    }
  ];

  return (
    <div className="bg-white px-4 md:px-8 lg:px-12 relative overflow-hidden">
      <section id="solucoes" className="mx-auto max-w-[1440px] overflow-hidden bg-white relative z-10">
        {/* Bloco Superior: Texto e Imagem Lado a Lado */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[48%_52%] items-stretch">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="relative flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 lg:pl-[64px] z-20">
            <div className="max-w-[580px]">
              <p className="text-[#00A99D] text-[13px] font-bold tracking-[0.08em] uppercase mb-4">
                VÁ ALÉM DA CONSULTA BÁSICA
              </p>
              <h2 className="text-[#031426] text-[38px] leading-[1.05] font-bold sm:text-[46px] lg:text-[52px] tracking-[-0.04em] mb-6">
                Sua loja já consulta veículos.
                <br />
                Mas consulta o suficiente para decidir?
              </h2>
              <p className="text-[#1D252D]/80 text-[18px] md:text-[20px] leading-relaxed mb-10 font-medium">
                A Gold aprofunda a análise com informações que ajudam sua equipe a entender melhor o veículo antes de comprar, aceitar uma troca ou colocar no estoque.
              </p>

              {/* Lista de benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-[#031426] text-[18px] font-bold flex items-center gap-2 tracking-tight">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00A99D] shrink-0" />
                      {benefit.title}
                    </h3>
                    <p className="text-[#1D252D]/70 text-[15px] leading-relaxed font-medium">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lado Direito: Mockup do Sistema */}
          <div className="relative min-h-[300px] md:min-h-full overflow-hidden flex items-center justify-end p-0">
            <div className="relative w-full h-full flex items-center justify-end">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Interface do sistema Company Conferi com dashboard e relatórios veiculares" 
                className="w-full h-full object-cover object-left"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Bloco Inferior: Callout */}
        <div className="bg-[#F5F7F8] border-t border-gray-100 px-8 py-10 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <CheckCircle2 className="text-[#00A99D] h-6 w-6 shrink-0" />
            <p className="text-[#031426] text-[19px] font-medium">
              Não é consultar mais. É saber mais antes de fechar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
