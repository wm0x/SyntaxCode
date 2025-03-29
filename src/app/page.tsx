"use client"
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import WhatIsSyntax from "@/components/WhatIsSyntax";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false, // تعطيل الـ SSR لهذا المكون
});
const LanguageTicker= dynamic(() => import("@/components/language") , {
  ssr:false,
})
const HowWeAre = dynamic(() => import("@/components/HowWeAre") , {
  ssr: false,
})




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
