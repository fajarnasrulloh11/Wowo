import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import WhyUs from "@/components/why-us/WhyUs";
import Process from "@/components/process/Process";
import TechStack from "@/components/tech-stack/TechStack";
import Pricing from "@/components/pricing/Pricing";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} — We Build Digital Products That Move Businesses Forward`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: `${SITE_NAME} — We Build Digital Products That Move Businesses Forward`,
    description: SITE_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <TechStack />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
