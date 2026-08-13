import { ArrowRight, Quote, ShieldCheck } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative w-full overflow-hidden bg-[#031426] py-24 sm:py-32">
      {/* Elementos gráficos de fundo */}
      <div className="absolute top-0 right-0 -z-0 h-[600px] w-[600px] rounded-full bg-teal/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-0 h-[400px] w-[400px] rounded-full bg-amber/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-5 w-5 text-teal" />
            <p className="text-teal text-[12px] font-bold tracking-[0.2em] uppercase">
              QUEM USA, CONFIRMA
            </p>
          </div>
          
          <h2 className="text-[32px] sm:text-[48px] font-bold leading-[1.1] text-white tracking-tight mb-8">
            Quem vive a negociação no dia a dia sente a diferença de descobrir antes.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Aspas grandes como elemento gráfico */}
            <Quote className="absolute -left-8 -top-12 h-24 w-24 text-teal/10 rotate-12" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <blockquote className="text-[24px] sm:text-[32px] font-medium leading-[1.4] text-slate-200 italic mb-12">
                "[Inserir depoimento real do lojista]"
              </blockquote>

              <div className="flex flex-col items-center mb-16">
                <div className="h-px w-12 bg-teal/30 mb-6" />
                <div className="font-bold text-white text-2xl mb-1">Nome da loja</div>
                <div className="text-slate-400 text-sm tracking-wide uppercase">Loja de veículos • Cidade/UF</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-16">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="h-2 w-2 rounded-full bg-teal" />
                  <p className="text-white font-medium text-lg">Mais segurança na compra.</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="h-2 w-2 rounded-full bg-amber" />
                  <p className="text-white font-medium text-lg">Mais confiança na avaliação.</p>
                </div>
              </div>

              <button className="group relative flex items-center gap-3 rounded-full bg-teal px-12 py-6 font-bold text-[#031426] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-2xl shadow-teal/20 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Quero essa segurança na minha loja
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute bottom-0 left-0 h-1.5 w-full bg-amber scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </div>

            <Quote className="absolute -right-8 -bottom-12 h-24 w-24 text-teal/10 -rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
}