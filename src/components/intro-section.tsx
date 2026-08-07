export function IntroSection() {
  return (
    <section id="solucoes" className="bg-[#F5F7F8] py-32 sm:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="text-teal text-xs font-medium tracking-widest uppercase">A plataforma</p>
            <h2 className="text-foreground mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl">
              Tudo o que sua operação precisa, em um só lugar.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-muted-foreground text-xl leading-relaxed">
              Da entrada do veículo ao fechamento da venda, a Conferi organiza processos, reduz
              retrabalho e dá visibilidade real sobre o seu estoque.
            </p>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Texto provisório para o próximo bloco de conteúdo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
