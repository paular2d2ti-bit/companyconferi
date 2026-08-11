import { CheckCircle2 } from "lucide-react";

export function IntroSection() {
  return (
    <section id="solucoes" className="bg-[#F5F7F8] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-6">
            <p className="text-teal text-[12px] font-bold tracking-widest uppercase">
              TODA A INFORMAÇÃO CERTA PARA A ESCOLHA CERTA.
            </p>
            <h2 className="text-foreground mt-6 text-[38px] leading-[1.1] font-bold">
              Não é só consultar. É cruzar, analisar e entender o que os dados estão dizendo.
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-muted-foreground text-[18px] leading-relaxed">
              Acesse informações completas de veículos, com cruzamento de dados de diversas fontes para negociar com segurança, precificar com precisão e vender com mais rapidez.
            </p>
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-foreground text-[16px] font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  Consulte mais informações
                </h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  Em segundos e tenha tudo que mais precisa para analisar um veículo.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-foreground text-[16px] font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  Compare com outros veículos
                </h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  Do mercado e negocie com embasamento.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-foreground text-[16px] font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  Valide melhor e reduza os riscos
                </h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  De prejuízos com dados que realmente importam.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-foreground text-[16px] font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  Agilize seu processo de venda
                </h3>
                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  E aumente o giro do seu estoque.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-sm">
          <CheckCircle2 className="text-teal h-6 w-6" />
          <p className="text-foreground text-[18px] font-medium text-center">
            Tenha dados para decidir. Venda com mais segurança e destaque-se da concorrência!
          </p>
        </div>
      </div>
    </section>
  );
}
