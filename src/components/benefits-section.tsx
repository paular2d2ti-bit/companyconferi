export function BenefitsSection() {
  const benefits = [
    {
      title: "Visibilidade Total",
      desc: "Dashboard inteligente com os KPIs que realmente importam para o seu negócio."
    },
    {
      title: "Agilidade Operacional",
      desc: "Reduza o tempo de ciclo da venda com automações desenhadas para o mercado auto."
    },
    {
      title: "Segurança de Dados",
      desc: "Todas as informações da sua loja protegidas com criptografia de ponta a ponta."
    }
  ];

  return (
    <section id="beneficios" className="bg-white py-32 sm:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-teal text-xs font-medium tracking-widest uppercase">Vantagens</p>
          <h2 className="text-foreground mt-8 text-4xl leading-tight font-semibold sm:text-5xl">
            Por que escolher a Conferi?
          </h2>
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} className="relative">
              <span className="text-teal/20 absolute -top-12 -left-4 text-8xl font-bold select-none">
                0{i + 1}
              </span>
              <div className="relative">
                <h3 className="text-2xl font-semibold">{b.title}</h3>
                <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
