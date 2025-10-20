import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Title from "./Title";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const image = hero.querySelector<HTMLElement>(".hero-image");
    const title = hero.querySelector<HTMLElement>(".hero-title");
    const para = hero.querySelector<HTMLElement>(".hero-para");
    const icons = hero.querySelector<HTMLElement>(".hero-icons");

    // helper to restart an animation class so it replays
    const restart = (node: Element | null, cls: string) => {
      if (!node) return;
      node.classList.remove(cls);
      // force reflow so re-adding the class restarts the animation
      void (node as HTMLElement).offsetWidth;
      node.classList.add(cls);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Restart animations each time the section enters the viewport
            restart(image, "animate-pop");
            restart(title, "animate-fade-up-slow");
            restart(para, "animate-fade-up-slow");
            restart(icons, "animate");
          } else {
            // Remove animation classes when out of view so they can replay
            image?.classList.remove("animate-pop");
            title?.classList.remove("animate-fade-up-slow");
            para?.classList.remove("animate-fade-up-slow");
            icons?.classList.remove("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);

    // allow keyboard users to retrigger animations by focusing the section
    const onFocus = () => {
      restart(image, "animate-pop");
      restart(title, "animate-fade-up-slow");
      restart(para, "animate-fade-up-slow");
      restart(icons, "animate");
    };

    hero.addEventListener("focus", onFocus, true);

    return () => {
      observer.disconnect();
      hero.removeEventListener("focus", onFocus, true);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      tabIndex={0}
      className="relative grid justify-center items-center min-h-[calc(100vh-10rem)] gap-[var(--space-8)] md:grid-cols-[1fr_1fr]"
    >
      <div className="flex justify-center">
        <Image
          src="/profile.png"
          alt="Profile"
          width={200}
          height={200}
          className="hero-image w-[200px] h-[200px] object-cover bg-[url(/profile.png)] bg-cover bg-center rounded-full"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col">
        <div className="hero-title">
          <Title title="Hi!" />
        </div>

        <p
          className="hero-para text-pretty break-words leading-relaxed text-[var(--font-size-base)] sm:text-[var(--font-size-sm)] text-left mt-[var(--space-4)]"
          style={{ color: "var(--color-text-secondary)" }}
        >
          I’m Stanley, a <strong>Front-End Developer</strong> with 3+ years of
          experience building responsive, high-performing web apps using React
          and Next.js. I’ve led a small team, guiding code quality and front-end
          architecture, and enjoy creating fast, maintainable interfaces that
          delight users
        </p>

        <div className="hero-icons flex gap-[var(--space-4)] mt-[var(--space-8)] text-[var(--color-text-primary)]">
          <Link href="https://github.com/pierrelstan" aria-label="GitHub">
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pierre-louis-stanley-930110133"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://twitter.com/pierrelstan" aria-label="Twitter">
            <FaTwitter size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}
