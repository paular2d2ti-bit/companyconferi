import { Quote, ArrowRight, Star } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative w-full overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-slate-50 blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <p className="text-teal text-[12px] font-bold tracking-[0.2em] uppercase mb-4">
            QUEM USA, CONFIRMA
          </p>
          <h2 className="text-[32px] sm:text-[42px] font-bold leading-[1.1] text-[#031426] tracking-tight">
            Quem negocia veículos todos os dias sabe o valor de descobrir antes.
          </h2>
          <p className="mt-6 text-[18px] text-slate-500 max-w-2xl mx-auto">
            A experiência de quem usa a Auto Perícia Gold na rotina fala mais do que qualquer promessa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-50 p-8 sm:p-16 border border-slate-100 shadow-sm">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 sm:left-16 sm:translate-x-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-[#031426] shadow-lg shadow-teal/20">
                <Quote className="h-6 w-6" fill="currentColor" />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center sm:items-start gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                <blockquote className="text-[20px] sm:text-[26px] font-medium leading-[1.4] text-[#031426] italic text-center sm:text-left">
                  "O lojista que não consulta o que está comprando está deixando o lucro da loja na mão da sorte. Com a Gold, a gente parou de ter surpresa ruim depois que o carro já estava no pátio."
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-[#031426] flex items-center justify-center text-teal font-bold text-xl border-4 border-white shadow-md">
                    JD
                  </div>
                  <div>
                    <div className="font-bold text-[#031426] text-lg">João D.</div>
                    <div className="text-slate-500 text-sm">Loja de Veículos • São Paulo/SP</div>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <p className="text-[#031426] font-semibold text-sm tracking-wide uppercase">
                    Mais informação antes da decisão.
                  </p>
                  <p className="text-teal font-bold text-sm tracking-wide uppercase">
                    Mais confiança na negociação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <button className="group relative flex items-center gap-3 rounded-full bg-[#031426] px-10 py-5 font-bold text-white transition-all hover:bg-teal hover:text-[#031426] hover:scale-105 active:scale-95 shadow-xl shadow-[#031426]/10 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Quero ter essa segurança na minha loja
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FFB800] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
          
          <div className="sm:hidden text-center mt-4">
            <p className="text-[#031426] font-semibold text-xs tracking-wide uppercase">
              Mais informação antes da decisão.
            </p>
            <p className="text-teal font-bold text-xs tracking-wide uppercase">
              Mais confiança na negociação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}