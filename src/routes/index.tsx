import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { IntroSection } from "@/components/intro-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Conferi | Gestão para revendas e lojas de veículos" },
      {
        name: "description",
        content:
          "Plataforma Conferi para agências, revendas e lojas de veículos: mais controle, agilidade e segurança. Solicite uma demonstração.",
      },
      { property: "og:title", content: "Conferi | Gestão para o mercado automotivo" },
      {
        property: "og:description",
        content:
          "Controle, agilidade e segurança para agências, revendas e lojas de veículos. Peça uma demonstração.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <IntroSection />
    </main>
  );
}
