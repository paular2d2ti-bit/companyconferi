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
    <div className="bg-white px-4 pt-4 pb-2 md:px-8 lg:px-12 relative overflow-hidden">
      <section id="solucoes" className="mx-auto max-w-[1440px] overflow-hidden rounded-[24px] bg-[#F5F7F8] border border-gray-100 shadow-sm relative z-10">
        {/* Bloco Superior: Texto e Imagem Lado a Lado */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[42%_58%] items-stretch">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="relative flex flex-col justify-center px-8 py-8 md:px-12 lg:px-16 lg:pl-[64px] z-20">
            <div className="max-w-[480px]">
              <p className="text-[#00A99D] text-[12px] font-bold tracking-[0.08em] uppercase mb-3">
                VÁ ALÉM DA CONSULTA BÁSICA
              </p>
              <h2 className="text-[#031426] text-[28px] leading-[1.1] font-bold sm:text-[34px] mb-4">
                Sua loja já consulta veículos.
                <br />
                Mas consulta o suficiente para decidir?
              </h2>
              <p className="text-[#1D252D]/80 text-[16px] leading-relaxed mb-6">
                A Gold aprofunda a análise com informações que ajudam sua equipe a entender melhor o veículo antes de comprar, aceitar uma troca ou colocar no estoque.
              </p>

              {/* Lista de benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="space-y-1">
                    <h3 className="text-[#031426] text-[15px] font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00A99D]" />
                      {benefit.title}
                    </h3>
                    <p className="text-[#1D252D]/70 text-[13px] leading-relaxed">
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
        <div className="bg-white/50 border-t border-gray-200 px-8 py-5 lg:px-16">
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
