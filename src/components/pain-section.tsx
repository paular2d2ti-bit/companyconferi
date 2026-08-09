export function PainSection() {
  return (
    <section id="problema" className="bg-[#FFFFFF] py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-teal text-xs font-medium tracking-widest uppercase">O desafio</p>
          <h2 className="text-foreground mt-8 text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
            Sua loja cresce, mas os problemas de gestão acompanham?
          </h2>
          <p className="text-muted-foreground mt-10 text-xl leading-relaxed">
            Muitas revendas perdem margem e oportunidades por falta de dados precisos. 
            Estoque desatualizado, falta de histórico de revisões e processos manuais 
            são o freio que impede sua empresa de acelerar.
          </p>
        </div>
        
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Estoque Fantasma",
              desc: "Veículos que você não sabe exatamente onde estão ou qual a margem real de lucro."
            },
            {
              title: "Processos Lentos",
              desc: "Aprovação de crédito e documentação que demoram mais do que o necessário."
            },
            {
              title: "Falta de Histórico",
              desc: "Informações cruciais sobre o estado do veículo perdidas em conversas de WhatsApp."
            }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="mb-6 h-px w-12 bg-border transition-all group-hover:w-full group-hover:bg-teal" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
