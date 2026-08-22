import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    content: "Relatório em PDF personalizado com o logo e as cores da sua empresa.",
    store: "LAUDO COM SUA MARCA",
    location: "Sua Identidade",
    rating: 5,
  },
  {
    content: "Informações veiculares que complementam a análise realizada pela sua equipe.",
    store: "DADOS ALÉM DO VISUAL",
    location: "Dados Profissionais",
    rating: 5,
  },
  {
    content: "Acesse a Auto Perícia Plus online e tenha as informações organizadas para sua operação.",
    store: "PLATAFORMA WEB",
    location: "Acesso Rápido",
    rating: 5,
  },
  {
    content: "Trabalhamos com revenda há 15 anos e a Auto Perícia Gold se tornou nossa principal ferramenta de avaliação. A segurança que passamos para o cliente final ao mostrar o relatório não tem preço.",
    store: "Showroom Automóveis",
    location: "Belo Horizonte/MG",
    rating: 5,
  },
];

export function HowItWorksSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 1024px)": { slidesToScroll: 1 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="como-funciona" className="relative w-full overflow-hidden bg-[#F2EDE4] py-24 sm:py-32">
      {/* Elementos gráficos de fundo sutis */}
      <div className="absolute top-0 right-0 -z-0 h-[600px] w-[600px] rounded-full bg-white/40 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-0 h-[400px] w-[400px] rounded-full bg-teal/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center gap-2 mb-4">
            <ShieldCheck className="h-5 w-5 text-teal" />
            <p className="text-[#031426] text-[12px] font-bold tracking-[0.2em] uppercase">
              FEITA PARA QUEM EMITE LAUDOS
            </p>
          </div>
          
          <h2 className="text-[32px] sm:text-[48px] font-bold leading-[1.1] text-[#031426] tracking-tight">
            Tudo o que sua empresa precisa para entregar um laudo mais profissional.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="h-full bg-white/40 backdrop-blur-sm border border-[#031426]/5 rounded-3xl p-8 flex flex-col transition-all hover:bg-white/60 hover:shadow-xl hover:shadow-[#031426]/5">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                      ))}
                    </div>
                    
                    <p className="text-[#031426] text-lg leading-[1.6] mb-8 flex-grow">
                      "{item.content}"
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-[#031426]/5">
                      <div className="font-bold text-[#031426] text-lg mb-1">
                        {item.store}
                      </div>
                      <div className="text-slate-500 text-xs tracking-wide uppercase">
                        Loja de veículos • {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index ? "w-8 bg-[#031426]" : "w-2 bg-[#031426]/20"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a href="https://api.whatsapp.com/send/?phone=5511952267192&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 rounded-full bg-[#031426] px-12 py-6 font-bold text-white transition-all hover:bg-teal hover:text-[#031426] hover:scale-105 active:scale-95 shadow-2xl shadow-[#031426]/10 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Quero essa segurança na minha loja
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-amber scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        </div>
      </div>
    </section>
  );
}