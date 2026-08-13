import { ArrowRight, ShieldCheck, Calendar, Users, BarChart3, SearchCheck } from "lucide-react";

export function BenefitsSection() {
  const stats = [
    {
      value: "+10 anos",
      label: "mercado automotivo",
      icon: Calendar
    },
    {
      value: "+2,1 mil",
      label: "usuários ativos",
      icon: Users
    },
    {
      value: "Desde 2019",
      label: "atualização contínua",
      icon: SearchCheck
    },
    {
      value: "4,4 bi+",
      label: "dados consultados",
      icon: BarChart3
    }
  ];

  return (
    <section id="beneficios" className="relative w-full overflow-hidden bg-[#031426] py-24 sm:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Car" 
          className="h-full w-full object-cover opacity-70 grayscale-0 brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031426] via-[#031426]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031426] via-transparent to-[#031426]/60" />
        {/* Persistent Amber Graphical Element */}
        <div className="absolute bottom-0 right-0 h-1/2 w-1/3 bg-[#FFB800]/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-teal text-[12px] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#FFB800]" />
            RESULTADOS QUE DÃO SEGURANÇA
          </p>
          <h2 className="mt-4 text-[38px] font-bold leading-[1.1] text-white tracking-tight">
            Números que reforçam a decisão.
          </h2>
          <p className="mt-4 text-[18px] text-white/70">
            A Company Conferi, com a Auto Perícia Gold, apoia operações que precisam decidir com mais segurança.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-teal/30">
              {/* Amber accent bar */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#FFB800] transition-all duration-500 group-hover:w-12" />
              
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-colors group-hover:bg-[#FFB800]/10 group-hover:text-[#FFB800]">
                <stat.icon className="h-5 w-5" />
              </div>

              <div className="text-[34px] font-bold text-teal tracking-tight flex items-baseline gap-1">
                {stat.value}
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-1 text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors uppercase tracking-wider">
                {stat.label}
              </div>
              {/* Sutil glow effect on hover with mixed teal/amber */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-teal/5 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="absolute -left-4 -bottom-4 h-16 w-16 rounded-full bg-[#FFB800]/5 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[18px] font-medium leading-relaxed text-white/80">
            Quando a decisão vale dinheiro, consultar antes faz diferença.
          </p>
          
          <button className="group relative flex items-center gap-3 rounded-full bg-teal px-8 py-4 font-bold text-[#031426] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-teal/10 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Quero ver como funciona na minha loja
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Amber accent on button hover */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FFB800] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
}
