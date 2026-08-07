export function HowItWorksSection() {
  const steps = [
    {
      title: "Integração",
      desc: "Conectamos sua base atual de veículos à nossa plataforma de forma rápida e segura."
    },
    {
      title: "Otimização",
      desc: "Seus processos são mapeados e automatizados para máxima eficiência."
    },
    {
      title: "Escalabilidade",
      desc: "Com dados na mão, sua equipe foca em vender mais e melhor."
    }
  ];

  return (
    <section id="como-funciona" className="bg-[#F5F7F8] py-32 sm:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-teal text-xs font-medium tracking-widest uppercase">Fluxo</p>
            <h2 className="text-foreground mt-8 text-4xl leading-tight font-semibold sm:text-5xl">
              Simples, direto e inteligente.
            </h2>
          </div>
          <div className="text-muted-foreground max-w-md text-lg">
            Implementação guiada para que sua loja não pare nem por um minuto durante a transição.
          </div>
        </div>

        <div className="mt-32 grid gap-12 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-12 rounded-2xl shadow-sm border border-border/50">
              <div className="bg-navy text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
