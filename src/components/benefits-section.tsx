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
      value: "Desde 2019",
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
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Car" 
          className="h-full w-full object-cover opacity-40 grayscale-0 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031426] via-[#031426]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031426] via-transparent to-[#031426]/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-teal text-[12px] font-bold tracking-[0.2em] uppercase">
            PROVA SOCIAL
          </p>
          <h2 className="mt-4 text-[38px] font-bold leading-[1.1] text-white tracking-tight">
            Números que reforçam a decisão.
          </h2>
          <p className="mt-4 text-[18px] text-white/70">
            A Gold já apoia operações que precisam decidir com mais segurança.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-teal/30">
              <div className="text-[34px] font-bold text-teal tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors uppercase tracking-wider">
                {stat.label}
              </div>
              {/* Sutil glow effect on hover */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-teal/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[18px] font-medium leading-relaxed text-white/80">
            Quando a decisão vale dinheiro, consultar antes faz diferença.
          </p>
          
          <button className="group flex items-center gap-3 rounded-full bg-teal px-8 py-4 font-bold text-[#031426] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-teal/10">
            Quero ver a Gold em ação →
          </button>
        </div>
      </div>
    </section>
  );
}
