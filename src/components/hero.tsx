import heroCar from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section className="bg-navy-deep relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroCar}
        alt="Veículo premium em showroom moderno com iluminação cinematográfica"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="from-navy-deep via-navy/80 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="from-navy-deep absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
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
    </section>
  );
}
