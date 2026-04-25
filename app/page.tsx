import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { HowItWorks } from "@/components/sections/how-it-works";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { Stats } from "@/components/sections/stats";
import { CasesPinned } from "@/components/sections/cases-pinned";
import { Testimonial } from "@/components/sections/testimonial";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <HowItWorks />
        <MarqueeBand direction="left" baseSpeed={36} />
        <Stats />
        <CasesPinned />
        <MarqueeBand direction="right" baseSpeed={28} />
        <Testimonial />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
