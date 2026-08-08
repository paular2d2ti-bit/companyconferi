import heroShowroom from "@/assets/hero-showroom.jpg";
import { QrCode, ShieldCheck, History, AlertCircle, FileText, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-navy-deep relative flex min-h-[100vh] items-center overflow-hidden pt-20 pb-16">
      <img
        src={heroShowroom}
        alt="Showroom automotivo com profissional avaliando veículo"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="from-navy-deep via-navy-deep/80 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="from-navy-deep absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 lg:flex-row">
        <div className="flex-1 py-12 text-center lg:text-left">
          <div className="glass text-primary-foreground/90 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] tracking-widest uppercase">
            <ShieldCheck className="text-teal h-3.5 w-3.5" />
            Inteligência veicular para agências, revendas e lojas de veículos
          </div>

          <h1 className="text-primary-foreground mt-8 text-4xl leading-[1.1] font-semibold sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            Informação certa antes de um veículo entrar{" "}
            <span className="text-teal block sm:inline">no seu estoque.</span>
          </h1>

          <p className="text-primary-foreground/70 mt-8 max-w-lg text-lg leading-relaxed lg:mx-0 mx-auto">
            Consulte o histórico, identifique restrições e reduza riscos de entrada de veículos. 
            Mais segurança para comprar, avaliar e revender com confiança.
          </p>

          <div className="mt-10 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#demonstracao"
              className="bg-teal text-accent-foreground hover:bg-teal/90 w-full rounded-full px-8 py-4 text-base font-semibold transition-all hover:scale-105 sm:w-auto"
            >
              Solicitar uma demonstração
            </a>
            <a
              href="#contato"
              className="glass text-primary-foreground hover:bg-white/15 w-full rounded-full px-8 py-4 text-base font-medium transition-colors sm:w-auto"
            >
              Falar com um especialista
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 text-left sm:grid-cols-4">
            {[
              { label: "consultas", value: "+10 milhões" },
              { label: "clientes ativos", value: "+2.000" },
              { label: "no mercado", value: "Desde 2009" },
              { label: "satisfação", value: "4,9 de 5" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-primary-foreground text-lg font-bold">{stat.value}</span>
                <span className="text-primary-foreground/50 text-[10px] tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 hidden items-center gap-4 lg:flex">
            <div className="glass flex items-center gap-4 rounded-2xl p-4">
              <div className="bg-white rounded-lg p-2">
                <QrCode className="text-navy-deep h-10 w-10" />
              </div>
              <div className="text-left">
                <p className="text-primary-foreground text-sm font-semibold">Prefere acessar pelo celular?</p>
                <p className="text-primary-foreground/60 text-xs">Escaneie e faça uma consulta em segundos.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 flex flex-1 items-center justify-center lg:mt-0 lg:justify-end">
          <div className="relative h-[400px] w-full max-w-[500px] lg:h-[600px]">
            {/* Glass Cards */}
            <div className="glass absolute top-[10%] -left-4 z-20 flex items-center gap-3 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-red-500/20 flex h-8 w-8 items-center justify-center rounded-full">
                <AlertCircle className="h-4 w-4 text-red-400" />
              </div>
              <div>
                <p className="text-primary-foreground/40 text-[10px] tracking-widest uppercase">Sinistro</p>
                <p className="text-primary-foreground text-sm font-semibold uppercase">Identificado</p>
              </div>
            </div>

            <div className="glass absolute top-[30%] -right-4 z-20 flex items-center gap-3 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-orange-500/20 flex h-8 w-8 items-center justify-center rounded-full">
                <History className="h-4 w-4 text-orange-400" />
              </div>
              <div>
                <p className="text-primary-foreground/40 text-[10px] tracking-widest uppercase">Leilão</p>
                <p className="text-primary-foreground text-sm font-semibold uppercase">Consta</p>
              </div>
            </div>

            <div className="glass absolute bottom-[35%] -left-8 z-20 flex items-center gap-3 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-teal/20 flex h-8 w-8 items-center justify-center rounded-full">
                <FileText className="h-4 w-4 text-teal" />
              </div>
              <div>
                <p className="text-primary-foreground/40 text-[10px] tracking-widest uppercase">Situação cadastral</p>
                <p className="text-primary-foreground text-sm font-semibold uppercase text-teal">Regular</p>
              </div>
            </div>

            <div className="glass absolute bottom-[10%] right-0 z-20 flex flex-col gap-2 rounded-2xl p-6 shadow-2xl backdrop-blur-xl animate-float" style={{ animationDelay: '0.5s' }}>
              <p className="text-primary-foreground/40 text-[10px] tracking-widest uppercase">Nível de confiança</p>
              <div className="flex items-end gap-2">
                <span className="text-teal text-4xl font-bold">94</span>
                <span className="text-teal/70 pb-1 text-sm font-medium">Muito bom</span>
              </div>
              <div className="bg-white/10 h-1.5 w-full overflow-hidden rounded-full">
                <div className="bg-teal h-full w-[94%]" />
              </div>
            </div>
            
            <div className="glass absolute top-[55%] left-[20%] z-20 flex items-center gap-3 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="bg-white/10 flex h-8 w-8 items-center justify-center rounded-full">
                <CheckCircle2 className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-primary-foreground/40 text-[10px] tracking-widest uppercase">Restrições</p>
                <p className="text-primary-foreground text-sm font-semibold uppercase">Nenhuma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
