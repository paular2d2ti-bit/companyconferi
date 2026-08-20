import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { PainSection } from "@/components/pain-section";
import { IntroSection } from "@/components/intro-section";
import { BenefitsSection } from "@/components/benefits-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/vistoria-plus")({
  head: () => ({
    meta: [
      { title: "Vistoria Plus | A Escolha Inteligente para sua Frota" },
      {
        name: "description",
        content:
          "Vistoria Plus: A solução completa para quem busca segurança e agilidade em vistorias veiculares de alta performance.",
      },
      { property: "og:title", content: "Vistoria Plus | A Escolha Inteligente para sua Frota" },
      {
        property: "og:description",
        content:
          "Segurança, agilidade e inteligência. Conheça a Vistoria Plus e transforme a gestão do seu estoque de veículos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VistoriaPlus,
});

function VistoriaPlus() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-grow">
        <Hero 
          title="VISTORIA PLUS: AGILIDADE E SEGURANÇA EM CADA DETALHE."
          subtitle="Aumente a velocidade das suas negociações com vistorias precisas e laudos que eliminam qualquer dúvida técnica ou documental."
          ctaText="QUERO CONHECER A AUTO PERÍCIA PLUS"
          supportText="Performance e confiança para o seu negócio!"
        />
        <PainSection />
        <IntroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FinalCtaSection ctaText="Quero conhecer a Auto Perícia Plus →" />
      </main>
      <Footer />
    </div>
  );
}
