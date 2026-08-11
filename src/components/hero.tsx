import { ArrowRight, Search, Gavel, DollarSign, FileText, Database, ShieldAlert, CheckCircle2, Info } from "lucide-react";
import heroCar from "@/assets/hero-showroom-suv.jpg";

export function Hero() {
  const floatingCards = [
    { label: "Gravames", icon: ShieldAlert },
    { label: "Débitos e multas", icon: DollarSign },
    { label: "Recall", icon: Info },
    { label: "PRF / RENAINF", icon: Search },
    { label: "Comunicado de venda", icon: FileText },
    { label: "Decodificação de chassi", icon: Database },
    { label: "Sinistro", icon: Gavel },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#031426] overflow-hidden flex flex-col">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-[46%_54%] items-stretch w-full">
        {/* COLUNA ESQUERDA — 46% */}
        <div className="relative z-10 flex w-full flex-col justify-center px-8 py-20 lg:py-0 lg:px-16 lg:pl-[80px]">
          <div className="max-w-[540px]">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="text-[#22E38A] text-[12px] font-bold uppercase tracking-[0.1em]">
                AUTO PERÍCIA GOLD • PARA LOJAS DE VEÍCULOS
              </span>
            </div>
            
            <h1 className="text-[42px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.03em] text-white">
              Vai colocar esse carro no estoque?<br />
              <span className="text-white/90">Consulte antes de comprar.</span>
            </h1>

            <p className="mt-8 text-[16px] md:text-[18px] text-white/70 leading-[1.6] max-w-[480px]">
              Descubra informações que podem mudar sua decisão antes de comprar, aceitar uma troca ou negociar um veículo.
            </p>
            
            <div className="mt-10 flex flex-col items-start gap-6">
              <button className="h-[60px] w-full md:w-auto rounded-[12px] bg-[#22E38A] px-[40px] text-[16px] font-bold text-[#031426] transition-all hover:brightness-110 active:scale-[0.98] shadow-xl shadow-[#22E38A]/20 flex items-center justify-center gap-3 group">
                Quero conhecer a Gold
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex items-center gap-4 text-white/40 text-[13px] font-medium tracking-wide uppercase px-2">
                <span>Compra</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>Troca</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>Avaliação</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>Estoque</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA — 54% */}
        <div className="relative overflow-hidden">
          <img
            src={heroCar}
            alt="SUV seminovo em showroom"
            className="absolute inset-0 h-full w-full object-cover object-[center_center]"
          />
          {/* Transition overlay */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#031426] via-[#031426]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-[#031426]/20" />

          {/* Floating Cards Container */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* We position them strategically around the car area */}
            <div className="absolute top-[20%] right-[35%] animate-float-slow">
              <FloatingCard label="Gravames" icon={ShieldAlert} />
            </div>
            <div className="absolute top-[12%] right-[10%] animate-float" style={{ animationDelay: '1s' }}>
              <FloatingCard label="Recall" icon={Info} />
            </div>
            <div className="absolute top-[40%] right-[15%] animate-float-slow" style={{ animationDelay: '0.5s' }}>
              <FloatingCard label="Débitos e multas" icon={DollarSign} />
            </div>
            <div className="absolute bottom-[35%] right-[25%] animate-float" style={{ animationDelay: '1.5s' }}>
              <FloatingCard label="PRF / RENAINF" icon={Search} />
            </div>
            <div className="absolute bottom-[20%] right-[40%] animate-float-slow" style={{ animationDelay: '2s' }}>
              <FloatingCard label="Comunicado de venda" icon={FileText} />
            </div>
            <div className="absolute bottom-[15%] right-[10%] animate-float" style={{ animationDelay: '0.8s' }}>
              <FloatingCard label="Sinistro" icon={Gavel} />
            </div>
            <div className="absolute top-[60%] right-[45%] animate-float-slow" style={{ animationDelay: '1.2s' }}>
              <FloatingCard label="Decodificação de chassi" icon={Database} />
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-30" />
    </section>
  );
}

function FloatingCard({ label, icon: Icon }: { label: string; icon: any }) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] border border-white/10 bg-[#031426]/60 p-2.5 shadow-2xl backdrop-blur-[8px] transform hover:scale-105 transition-transform">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#22E38A]/20 text-[#22E38A]">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="text-[10px] font-bold text-white whitespace-nowrap">{label}</span>
    </div>
  );
}
