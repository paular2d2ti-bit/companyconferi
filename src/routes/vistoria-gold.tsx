import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PainSection } from "@/components/pain-section";
import { IntroSection } from "@/components/intro-section";
import { BenefitsSection } from "@/components/benefits-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/vistoria-gold")({
  head: () => ({
    meta: [
      { title: "Vistoria Gold | Inteligência e Laudos Completos" },
      {
        name: "description",
        content:
          "Vistoria Gold: A evolução do laudo veicular. Mais informação, mais segurança e mais valor para sua empresa.",
      },
      { property: "og:title", content: "Vistoria Gold | Inteligência e Laudos Completos" },
      {
        property: "og:description",
        content:
          "Entregue laudos profissionais com a inteligência da Auto Perícia Gold. A solução definitiva para vistorias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VistoriaGold,
});

function VistoriaGold() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <Hero 
          title="VISTORIA GOLD: O PADRÃO MÁXIMO EM INTELIGÊNCIA VEICULAR."
          subtitle="Transforme sua vistoria em uma análise profunda de dados e entregue laudos que transmitem confiança total para quem compra e para quem vende."
          ctaText="QUERO CONHECER A VISTORIA GOLD"
          supportText="A informação certa no momento da decisão!"
        />
        <PainSection />
        <IntroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
