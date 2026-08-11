import { CheckCircle2, Monitor } from "lucide-react";

export function IntroSection() {
  const benefits = [
    {
      title: "Consulte mais informações",
      desc: "Em segundos e tenha tudo que mais precisa para analisar um veículo."
    },
    {
      title: "Compare com outros veículos",
      desc: "Do mercado e negocie com embasamento."
    },
    {
      title: "Valide melhor e reduza os riscos",
      desc: "De prejuízos com dados que realmente importam."
    },
    {
      title: "Agilize seu processo de venda",
      desc: "E aumente o giro do seu estoque."
    }
  ];

  return (
    <div className="bg-white px-4 py-6 md:px-8 lg:px-12">
      <section id="solucoes" className="mx-auto max-w-[1440px] overflow-hidden rounded-[36px] bg-[#F5F7F8] border border-gray-100 shadow-sm">
        {/* Bloco Superior: Texto e Imagem Lado a Lado */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[44%_56%] items-stretch min-h-[520px]">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="relative flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16 lg:pl-[64px] z-20">
            <div className="max-w-[480px]">
              <p className="text-[#00A99D] text-[12px] font-bold tracking-[0.08em] uppercase mb-4">
                TODA A INFORMAÇÃO CERTA PARA A ESCOLHA CERTA.
              </p>
              <h2 className="text-[#031426] text-[30px] leading-[1.1] font-bold sm:text-[38px] mb-6">
                Não é só consultar. É cruzar, analisar e entender o que os dados estão dizendo.
              </h2>
              <p className="text-[#1D252D]/80 text-[18px] leading-relaxed mb-10">
                Acesse informações completas de veículos, com cruzamento de dados de diversas fontes para negociar com segurança, precificar com precisão e vender com mais rapidez.
              </p>

              {/* Lista de benefícios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-[#031426] text-[16px] font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00A99D]" />
                      {benefit.title}
                    </h3>
                    <p className="text-[#1D252D]/70 text-[14px] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lado Direito: Mockup do Sistema */}
          <div className="relative min-h-[400px] md:min-h-full overflow-hidden flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full h-full max-w-[700px] flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="Interface do sistema Company Conferi com dashboard e relatórios veiculares" 
                className="w-full h-auto object-contain rounded-xl shadow-2xl border border-gray-200"
                loading="eager"
              />
              {/* Overlay suave para integrar melhor */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Bloco Inferior: Callout */}
        <div className="bg-white/50 border-t border-gray-200 px-8 py-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <CheckCircle2 className="text-[#00A99D] h-6 w-6 shrink-0" />
            <p className="text-[#031426] text-[19px] font-medium">
              Tenha dados para decidir. Venda com mais segurança e destaque-se da concorrência!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
