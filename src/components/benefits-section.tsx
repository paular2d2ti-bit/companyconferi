import { ArrowRight, ShieldCheck, Calendar, Users, BarChart3, SearchCheck } from "lucide-react";

export function BenefitsSection() {
  const stats = [
    {
      value: "+10M",
      label: "CONSULTAS REALIZADAS",
      icon: SearchCheck
    },
    {
      value: "+2.000",
      label: "CLIENTES ATIVOS",
      icon: Users
    },
    {
      value: "Desde 2019",
      label: "atualização contínua",
      icon: SearchCheck
    },
    {
      value: "4,4 bi+",
      label: "dados consultados",
      icon: BarChart3
    }
  ];

  return (
    <section id="beneficios" className="relative w-full overflow-hidden bg-[#031426] py-24 sm:py-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Car" 
          className="h-full w-full object-cover opacity-70 grayscale-0 brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031426] via-[#031426]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031426] via-transparent to-[#031426]/60" />
        {/* Persistent Amber Graphical Element */}
        <div className="absolute bottom-0 right-0 h-1/2 w-1/3 bg-[#FFB800]/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="max-w-2xl text-center sm:text-left lg:flex-1">
            <p className="text-teal text-[10px] sm:text-[12px] font-bold tracking-[0.2em] uppercase flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="h-4 w-4 text-[#FFB800]" />
              NÚMEROS QUE REFORÇAM A CONFIANÇA
            </p>
            <h2 className="mt-4 text-[30px] sm:text-[38px] font-bold leading-[1.2] sm:leading-[1.1] text-white tracking-tight uppercase">
              Números que reforçam a confiança.
            </h2>
            <p className="mt-4 text-[17px] sm:text-[18px] text-white/70">
              A Company Conferi, com a Auto Perícia Plus, apoia empresas de vistoria com mais informação, tecnologia e segurança na entrega ao cliente.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stats.map((stat, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-teal/30">
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#FFB800] transition-all duration-500 group-hover:w-12" />
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/40 group-hover:bg-[#FFB800]/10 group-hover:text-[#FFB800]">
                    <stat.icon className="h-4 w-4" />
                  </div>
                  <div className="text-[28px] font-bold text-teal tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-medium text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Information Seal/Card */}
          <div className="mt-16 lg:mt-0 lg:flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] animate-fade-up">
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-teal via-[#FFB800] to-teal" />
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <h3 className="text-xs font-bold tracking-[0.2em] text-teal">AUTO PERÍCIA PLUS</h3>
                    <p className="mt-1 text-[10px] font-medium text-white/50 uppercase">CONSULTA ATIVA</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/20 text-teal ring-1 ring-teal/50">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>

                {/* Status Items */}
                <div className="mt-8 space-y-4">
                  {[
                    { label: "ROUBO E FURTO", status: "OK", color: "text-teal" },
                    { label: "OFERTA EM LEILÃO", status: "ANALISADO", color: "text-[#FFB800]" },
                    { label: "COMUNICADO DE VENDA", status: "OK", color: "text-teal" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
                      <span className="text-[11px] font-semibold text-white/70 uppercase">{item.label}</span>
                      <span className={`text-[10px] font-bold ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>

                {/* Center Focus */}
                <div className="my-8 flex flex-col items-center justify-center rounded-2xl bg-[#031426]/60 border border-teal/20 p-6 text-center shadow-inner">
                  <div className="text-[24px] font-black tracking-tighter text-white uppercase leading-none">SINISTRO</div>
                  <div className="mt-1 text-[12px] font-bold text-teal tracking-widest uppercase">INDENIZAÇÃO INTEGRAL</div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[9px] font-medium text-white/50 border border-white/10 uppercase">
                    Base Nacional — <span className="text-white">CONSULTA</span>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center border-t border-white/10 pt-6 text-center">
                    <div className="text-[11px] font-bold text-white/70 uppercase tracking-widest">DADOS DO VEÍCULO</div>
                    <div className="mt-2 text-[10px] font-medium text-white/40 uppercase tracking-tighter">
                      FABRICAÇÃO <span className="mx-2 text-white/20">|</span> BASE BIN <span className="mx-2 text-white/20">|</span> COMPONENTES
                    </div>
                  </div>
                  
                  {/* Bottom Badge */}
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2 text-[10px] font-black text-[#031426] shadow-lg shadow-teal/20 uppercase tracking-widest ring-4 ring-teal/10">
                      <ArrowRight className="h-3 w-3" />
                      LAUDO COM SUA MARCA
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-teal/10 blur-3xl" />
              <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-[#FFB800]/10 blur-3xl" />
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 flex flex-col items-center sm:items-center gap-8 border-t border-white/10 pt-12 sm:flex-row sm:justify-between text-center sm:text-left">
          <p className="max-w-md text-[17px] sm:text-[18px] font-medium leading-relaxed text-white/80">
            Mais confiança para sua empresa.<br />
            Mais segurança para o seu cliente.
          </p>
          
          <a href="https://api.whatsapp.com/send/?phone=5511952267192&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-teal px-8 py-4 font-bold text-[#031426] transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-teal/10 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              QUERO CONHECER A AUTO PERÍCIA PLUS
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            {/* Amber accent on button hover */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#FFB800] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        </div>
      </div>
    </section>
  );
}
