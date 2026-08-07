import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section className="bg-navy-deep relative flex h-[100vh] items-center overflow-hidden">
      <img
        src={heroCar}
        alt="Veículo premium em showroom moderno com iluminação cinematográfica"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="from-navy-deep via-navy/80 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="from-navy-deep absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl items-center px-6 pt-20">
        <div className="max-w-2xl">
          <span className="glass text-primary-foreground/80 inline-flex rounded-full px-4 py-1.5 text-xs tracking-widest uppercase">
            Company Conferi
          </span>

          <h1 className="text-primary-foreground mt-8 text-5xl leading-[0.95] font-semibold sm:text-6xl lg:text-7xl">
            Gestão inteligente
            <br />
            para o mercado
            <br />
            <span className="text-teal">automotivo.</span>
          </h1>

          <p className="text-primary-foreground/70 mt-8 max-w-lg text-lg leading-relaxed">
            Uma plataforma única para agências, revendas e lojas de veículos operarem com mais
            controle, agilidade e segurança.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="bg-teal text-accent-foreground hover:bg-teal/90 rounded-full px-8 py-4 text-base font-medium transition-colors"
            >
              Solicitar demonstração
            </a>
            <a
              href="#solucoes"
              className="glass text-primary-foreground hover:bg-white/15 rounded-full px-8 py-4 text-base font-medium transition-colors"
            >
              Conhecer a plataforma
            </a>
          </div>
          </div>
        </div>

        <div className="hidden lg:ml-auto lg:block">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Status", value: "Aprovado", color: "text-green-400" },
              { label: "Confiança", value: "98%", color: "text-teal" },
              { label: "Restrições", value: "Nenhuma", color: "text-primary-foreground/60" },
              { label: "Histórico", value: "Limpo", color: "text-primary-foreground/60" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass flex flex-col gap-1 rounded-2xl p-6 transition-transform hover:scale-105"
              >
                <span className="text-primary-foreground/40 text-[10px] tracking-widest uppercase">
                  {item.label}
                </span>
                <span className={`text-xl font-semibold ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
