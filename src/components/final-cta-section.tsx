export function FinalCtaSection() {
  return (
    <section id="contato" className="bg-[#031426] relative overflow-hidden py-32 sm:py-40">
      <div className="from-navy-deep absolute inset-0 bg-gradient-to-b to-transparent opacity-50" />
      
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-primary-foreground text-4xl leading-tight font-semibold sm:text-5xl lg:text-6xl">
          Pronto para transformar sua gestão?
        </h2>
        <p className="text-primary-foreground/70 mx-auto mt-10 max-w-xl text-xl leading-relaxed">
          Junte-se às revendas que já utilizam a Conferi para escalar seus resultados com inteligência e segurança.
        </p>
        
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="bg-[#22E38A] text-[#031426] hover:brightness-110 rounded-full px-10 py-5 text-lg font-bold transition-all shadow-xl shadow-[#22E38A]/20"
          >
            Solicitar demonstração grátis
          </a>
          <a
            href="tel:+55000000000"
            className="glass text-primary-foreground hover:bg-white/15 rounded-full px-10 py-5 text-lg font-medium transition-colors"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
