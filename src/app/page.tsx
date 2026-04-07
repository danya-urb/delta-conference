import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyAttend from "@/components/WhyAttend";
import Speakers from "@/components/Speakers";
import Guests from "@/components/Guests";
import Sponsors from "@/components/Sponsors";
import Pricing from "@/components/Pricing";
import Agenda from "@/components/Agenda";
import Audience from "@/components/Audience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <div className="divider-gradient" />
      <About />
      <div className="divider-gradient" />
      <WhyAttend />
      <div className="divider-gradient" />
      <Speakers />
      <div className="divider-gradient" />
      <Guests />
      <div className="divider-gradient" />
      <Sponsors />
      <div className="divider-gradient" />
      <Pricing />
      <div className="divider-gradient" />
      <Agenda />
      <div className="divider-gradient" />
      <Audience />
      <div className="divider-gradient" />
      <CTA />
      <Footer />
    </main>
  );
}
