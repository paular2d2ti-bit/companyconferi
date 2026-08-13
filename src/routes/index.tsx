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
          "Consulte antes de comprar. Inteligência veicular para decisões seguras e lucros maiores no mercado automotivo.",
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
      {/* <SiteHeader /> REMOVED as per Hero request */}
      <main className="flex-grow">
        <Hero />
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
