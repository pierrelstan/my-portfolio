import React from "react";
import Title from "./Title";

export default function About() {
  return (
    <section
      className="mt-[var(--space-20)]  min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center"
      id="about"
    >
      <Title title="About" />

      <div>
        <div className="mt-[var(--space-4)]">
          <p className="text-[var(--font-size-sm)]  text-pretty break-words leading-relaxed xl:text-center mt-[var(--space-4)]  max-w-3xl">
            Software Developer with 3+ years of experience building web and
            mobile applications. Skilled in React.js, Next.js, and React Native,
            with expertise in API integration and state management (Redux,
            Jotai). I contribute primarily to frontend development while
            assisting with backend, cloud infrastructure, and CI/CD tasks as
            needed, delivering scalable, user-centric applications.
          </p>
        </div>
      </div>
    </section>
  );
}
