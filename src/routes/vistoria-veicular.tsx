import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PainSection } from "@/components/pain-section";
import { IntroSection } from "@/components/intro-section";
import { BenefitsSection } from "@/components/benefits-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/vistoria-veicular")({
  head: () => ({
    meta: [
      { title: "Vistoria Veicular | Auto Perícia Gold" },
      {
        name: "description",
        content:
          "Soluções de vistoria veicular com a inteligência da Auto Perícia Gold. Decisões seguras para o seu estoque.",
      },
      { property: "og:title", content: "Vistoria Veicular | Auto Perícia Gold" },
      {
        property: "og:description",
        content:
          "Vistoria veicular profissional para decisões seguras e lucros maiores no mercado automotivo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VistoriaVeicular,
});

function VistoriaVeicular() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <Hero 
          title="DADOS ALÉM DO VISUAL PARA LAUDOS MAIS COMPLETOS."
          subtitle="Complemente sua vistoria com informações veiculares e entregue ao cliente um laudo profissional personalizado com a marca da sua empresa."
          ctaText="CONHEÇA A AUTO PERÍCIA PLUS"
          supportText="Mais informação para sua vistoria. Mais valor para a sua entrega!"
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
