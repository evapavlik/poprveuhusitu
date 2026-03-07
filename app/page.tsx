import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import WhoWeAre from "@/components/WhoWeAre";
import KarelFarsky from "@/components/KarelFarsky";
import Quote from "@/components/Quote";
import FirstVisit from "@/components/FirstVisit";
import Contemporary from "@/components/Contemporary";
import ServiceGuide from "@/components/ServiceGuide";
import CtaSection from "@/components/CtaSection";
import FAQ from "@/components/FAQ";
import LifeEvents from "@/components/LifeEvents";
import AboutProject from "@/components/AboutProject";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MarqueeBand />
      <WhoWeAre />
      <KarelFarsky />
      <Quote />
      <FirstVisit />
      <Contemporary />
      <ServiceGuide />
      <FAQ />
      <LifeEvents />
      <AboutProject />
      <CtaSection />
      <Footer />
    </>
  );
}
