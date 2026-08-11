export function PainSection() {
  return (
    <section id="problema" className="relative w-full overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45%_55%] lg:gap-0">
          
          {/* Coluna de Texto */}
          <div className="relative z-10 lg:pr-12">
            <p className="text-[#00A99D] text-[12px] font-bold tracking-[0.08em] uppercase">O DESAFIO</p>
            <h2 className="text-[#031426] mt-6 text-[32px] leading-[1.15] font-bold sm:text-[38px] lg:max-w-[480px]">
              Sua loja cresce, mas os problemas de gestão acompanham?
            </h2>
            <p className="text-[#1D252D]/80 mt-8 text-[16px] leading-relaxed lg:max-w-[440px]">
              Muitas revendas perdem margem e oportunidades por falta de dados precisos. 
              Estoque desatualizado, falta de histórico e processos manuais 
              são o freio que impede sua empresa de acelerar.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-1">
              {[
                {
                  title: "Estoque Fantasma",
                  desc: "Veículos sem localização exata ou margem real de lucro definida."
                },
                {
                  title: "Processos Lentos",
                  desc: "Aprovação de crédito e documentação que demoram mais do que o necessário."
                },
                {
                  title: "Falta de Histórico",
                  desc: "Informações cruciais sobre o estado do veículo perdidas em conversas informais."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00A99D]" />
                  <div>
                    <h3 className="text-[16px] font-bold text-[#031426]">{item.title}</h3>
                    <p className="text-[14px] mt-1 text-[#1D252D]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna de Imagem com Degradê */}
          <div className="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 z-20 hidden lg:block bg-gradient-to-r from-white via-white/80 to-transparent w-1/3" />
            <img 
              src="/src/assets/hero-car-showroom-premium.jpg" 
              alt="Showroom automotivo premium" 
              className="h-full w-full object-cover grayscale-[0.3] opacity-90"
            />
            {/* Overlay para suavizar em mobile */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
          </div>

        </div>
      </div>
    </section>
  );
}
