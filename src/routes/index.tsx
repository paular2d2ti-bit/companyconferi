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
      { title: "Auto Perícia Plus para Empresas de Vistoria | Company Conferi" },
      {
        name: "description",
        content:
          "Complemente suas vistorias com dados veiculares e entregue laudos profissionais personalizados com a marca da sua empresa. Conheça a Auto Perícia Plus.",
      },
      {
        property: "og:title",
        content: "Auto Perícia Plus para Empresas de Vistoria | Company Conferi",
      },
      {
        property: "og:description",
        content:
          "Complemente suas vistorias com dados veiculares e entregue laudos profissionais personalizados com a marca da sua empresa. Conheça a Auto Perícia Plus.",
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
          badgeText="Mais informação. Mais valor na entrega. Sua marca em cada laudo."
          ctaText="QUERO CONHECER A AUTO PERÍCIA PLUS"
        />
      </main>
      <Footer />
    </div>
  );
}
