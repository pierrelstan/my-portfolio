"use client";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

export default function IndexPage() {
  return (
    <main className="mx-auto max-w-7xl">
      <Hero />
      {/* <Skills /> */}
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
