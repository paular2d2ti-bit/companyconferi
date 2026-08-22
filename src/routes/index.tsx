import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PainSection } from "@/components/pain-section";
import { IntroSection } from "@/components/intro-section";
import { BenefitsSection } from "@/components/benefits-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auto Perícia Gold | Inteligência Veicular para Lojistas" },
      {
        name: "description",
        content:
          "Auto Perícia Gold: Inteligência veicular para lojas e agências. Consulte antes de comprar e garanta lucros maiores.",
      },
      { property: "og:title", content: "Auto Perícia Gold | Inteligência Veicular" },
      {
        property: "og:description",
        content:
          "Consulte antes de comprar. Inteligência veicular para decisões seguras and lucros maiores no mercado automotivo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <Hero 
          eyebrow="PARA EMPRESAS DE VISTORIA VEICULAR"
          title="DADOS ALÉM DO VISUAL PARA LAUDOS MAIS COMPLETOS." 
          subtitle="Complemente sua vistoria com informações veiculares e entregue ao cliente um laudo profissional personalizado com a marca da sua empresa."
          ctaText="QUERO CONHECER A AUTO PERÍCIA PLUS"
        />
        <PainSection />
        <IntroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FinalCtaSection 
          eyebrow="PRONTO PARA ENTREGAR MAIS EM CADA VISTORIA?"
          title="LEVE MAIS INFORMAÇÃO E PROFISSIONALISMO PARA CADA LAUDO."
          description="Com a Auto Perícia Plus, sua empresa complementa a vistoria com dados veiculares e entrega ao cliente um relatório profissional personalizado com a sua marca."
          ctaText="QUERO CONHECER A AUTO PERÍCIA PLUS"
        />
      </main>
      <Footer />
    </div>
  );
}
