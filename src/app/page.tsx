import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWeAre from "@/components/HowWeAre";
import LanguageTicker from "@/components/language";
import WhatIsSyntax from "@/components/WhatIsSyntax";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#00FCA8] via-[#4C0DC8] to-[#4586FF] ">
      <Header />
      <Hero />
      <WhatIsSyntax />
      <Benefits />
      <HowWeAre />
      <LanguageTicker />
      <Footer />
    </div>
  );
}
