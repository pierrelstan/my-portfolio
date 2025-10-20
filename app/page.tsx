"use client";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar/Navbar";
// import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

export default function IndexPage() {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar variant="default" />
      <Hero />
      {/* <About /> */}
      <Portfolio />
      {/* <Certifications /> */}
      <Footer />
    </main>
  );
}
