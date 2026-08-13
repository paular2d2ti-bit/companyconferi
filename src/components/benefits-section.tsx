import { ArrowRight } from "lucide-react";

export function BenefitsSection() {
  const stats = [
    {
      value: "+10 anos",
      label: "mercado automotivo"
    },
    {
      value: "+2,1 mil",
      label: "usuários ativos"
    },
    {
      value: "Dados desde 2019",
      label: "atualização contínua"
    },
    {
      value: "4,4 bi+",
      label: "dados consultados"
    }
  ];

  return (
    <section id="beneficios" className="relative w-full overflow-hidden bg-[#031426] py-24 sm:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Automotive Showroom" 
          className="h-full w-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#031426] via-[#031426]/90 to-[#031426]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-teal text-xs font-bold tracking-[0.2em] uppercase">
            PROVA SOCIAL
          </p>
          <h2 className="mt-6 text-[32px] font-bold leading-tight text-white sm:text-[42px] lg:text-[48px] tracking-tight">
            Mais segurança para decidir.<br />
            <span className="text-white/60">Mais confiança para fechar.</span>
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="text-[32px] font-bold text-teal sm:text-[38px] lg:text-[42px] tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50 group-hover:text-white/80 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col items-start gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[18px] leading-relaxed text-white/70">
            Quando a decisão vale dinheiro, consultar antes faz diferença.
          </p>
          
          <button className="group flex items-center gap-3 rounded-full bg-teal px-8 py-4 font-bold text-[#031426] transition-all hover:bg-white hover:scale-105 active:scale-95">
            Quero ver a Gold em ação
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
