import { ArrowRight, ShieldCheck, FileText, Search, Layout, Headset } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const benefits = [
  {
    icon: FileText,
    title: "LAUDO COM SUA MARCA",
    description: "Relatório em PDF personalizado com o logo e as cores da sua empresa.",
  },
  {
    icon: Search,
    title: "DADOS ALÉM DO VISUAL",
    description: "Informações veiculares que complementam a análise realizada pela sua equipe.",
  },
  {
    icon: Layout,
    title: "PLATAFORMA WEB",
    description: "Acesse a Auto Perícia Plus online e tenha as informações organizadas para sua operação.",
  },
  {
    icon: Headset,
    title: "SUPORTE TÉCNICO",
    description: "Conte com suporte dedicado para apoiar sua empresa no uso da solução.",
  },
];

export function HowItWorksSection() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div 
                key={index} 
                className="group h-full bg-white/40 backdrop-blur-sm border border-[#031426]/5 rounded-3xl p-8 flex flex-col transition-all hover:bg-white/60 hover:shadow-xl hover:shadow-[#031426]/5"
              >
                <div className="mb-6 p-3 rounded-2xl bg-[#031426]/5 w-fit group-hover:bg-teal/10 transition-colors">
                  <item.icon className="h-6 w-6 text-teal" />
                </div>
                
                <h3 className="font-bold text-[#031426] text-xl mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-[#031426]/70 text-base leading-[1.6]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a href="https://api.whatsapp.com/send/?phone=5511952267192&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 rounded-full bg-[#031426] px-12 py-6 font-bold text-white transition-all hover:bg-teal hover:text-[#031426] hover:scale-105 active:scale-95 shadow-2xl shadow-[#031426]/10 overflow-hidden text-center">
            <span className="relative z-10 flex items-center gap-3 text-lg">
              QUERO CONHECER A AUTO PERÍCIA PLUS
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-amber scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        </div>
      </div>
    </section>
  );
}