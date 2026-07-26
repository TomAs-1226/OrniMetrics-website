import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { BoldBand } from "@/components/sections/bold-band";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Architecture } from "@/components/sections/architecture";
import { Technology } from "@/components/sections/technology";
import { Capabilities } from "@/components/sections/capabilities";
import { Videos } from "@/components/sections/videos";
import { Impact } from "@/components/sections/impact";
import { AppShowcase } from "@/components/sections/app";
import { Roadmap } from "@/components/sections/roadmap";
import { Plans } from "@/components/sections/plans";
import { Research } from "@/components/sections/research";
import { Source } from "@/components/sections/source";
import { Faq } from "@/components/sections/faq";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BoldBand />
        <Problem />
        <HowItWorks />
        <Architecture />
        <Technology />
        <Capabilities />
        <Videos />
        <Impact />
        <AppShowcase />
        <Roadmap />
        <Plans />
        <Research />
        <Source />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
