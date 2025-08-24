"use client";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import TimeLine from "@/components/TimeLine";

export default function IndexPage() {
  return (
    <main className="mx-auto max-w-7xl">
      <Hero />
      <TimeLine />
      <GetInTouch />
    </main>
  );
}
