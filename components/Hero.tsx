import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative grid justify-center  min-h-[calc(100vh-10rem)] mt-[var(--space-32)] gap-[var(--space-8)] md:grid-cols-[1fr_1fr]">
      <div className="flex justify-center ">
        <Image
          src="/profile.png"
          width={200}
          height={200}
          quality={80}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="profile"
          className="w-[200px] h-[200px] object-cover "
        />
      </div>
      <div className="flex flex-col">
        <h1
          className="font-[var(--font-weight-semibold)] tracking-tight text-balance break-words leading-[1.15] text-[var(--font-size-xl)] md:text-[var(--font-size-5xl)] text-left"
          style={{ color: "var(--color-text-primary)" }}
        >
          My name is Stanley Pierre Louis
        </h1>

        <p
          className="text-pretty break-words leading-relaxed text-[var(--font-size-base)] sm:text-[var(--font-size-sm)] text-left mt-[var(--space-4)]"
          style={{ color: "var(--color-text-secondary)" }}
        >
          I’m a Software Developer specializing in frontend (React, React
          Native, TypeScript) with 3+ years of experience in web and mobile
          development. Certified in Frontend and Full Stack Development, I
          currently lead frontend development at Greenstand, where I build
          scalable, user-centric applications.
        </p>

        <div className="flex gap-[var(--space-4)] mt-[var(--space-8)] text-[var(--color-text-primary)]">
          <Link href="https://github.com/pierrelstan">
            <FaGithub size={24} />
          </Link>
          <Link href="www.linkedin.com/in/pierre-louis-stanley-930110133">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://twitter.com/pierrelstan">
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>

      {/* background blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        style={{ zIndex: "var(--z-background)", pointerEvents: "none" }}
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background:
              "linear-gradient(to top right, var(--color-accent), var(--color-secondary))",
            opacity: "0.3",
            zIndex: "var(--z-background)",
            pointerEvents: "none",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}
