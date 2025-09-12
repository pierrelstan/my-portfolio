"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";
import { Menu, X } from "lucide-react";

const LINKS = [
  { title: "Bio", url: "#bio" },
  { title: "Portfolio", url: "#portfolio" },
  { title: "Certifications", url: "#certifications" },
  { title: "Contact", url: "#contact" },
  {
    title: "Resume",
    url: "https://docs.google.com/document/d/1hQyMnNEHIoqCaDxGjJtlK8IiBbIQv69hBiCO8nh9oSE/edit?usp=sharing",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="sticky top-0 h-[var(--navbar-height)] bg-[#18181b] md:bg-transparent backdrop-blur-sm border-b transition-all duration-300 ease-in-out z-[var(--z-sticky)]"
      style={{ borderColor: "var(--navbar-border)" }}
    >
      <div className="flex relative p-[var(--space-8)] h-[var(--navbar-height)] max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="font-regular tracking-wide text-balance font-bold text-[var(--color-primary)]"
        >
          Stanley.
        </Link>

        <ul className="hidden md:flex gap-[var(--space-6)]">
          {LINKS.map(({ title, url }) => (
            <li key={url}>
              <Link
                href={url}
                title={title}
                target={url.startsWith("https") ? "_blank" : "_self"}
                aria-label={`Navigate to ${title}`}
                className={cn(
                  "text-[var(--font-size-base)] font-regular tracking-wide transition-[var(--transition-base)] font-bold",
                  pathname.includes(url)
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
                  url.startsWith("https")
                    ? "border-1 var(--color-primary) px-[var(--space-4)] py-[var(--space-2)] rounded text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]"
                    : ""
                )}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden transition-[var(--transition-base)] p-[var(--space-2)]"
          style={{
            color: isMenuOpen
              ? "var(--color-text-primary)"
              : "var(--color-primary)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-text-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = isMenuOpen
              ? "var(--color-text-primary)"
              : "var(--color-primary)")
          }
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "absolute top-[var(--navbar-height)] left-0 right-0 md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          )}
          style={{
            backgroundColor: "#18181b",
            borderColor: "var(--navbar-border)",
          }}
        >
          <ul className="flex flex-col py-[var(--space-4)] px-[var(--space-8)] space-y-[var(--space-4)]">
            {LINKS.map(({ title, url }) => (
              <li key={url}>
                <Link
                  href={url}
                  title={title}
                  aria-label={`Navigate to ${title}`}
                  onClick={closeMenu}
                  className={cn(
                    "text-[var(--font-size-base)] font-regular tracking-wide transition-[var(--transition-base)] font-bold",
                    pathname.includes(url)
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
                    url.startsWith("https")
                      ? "border-1 var(--color-primary) px-[var(--space-4)] py-[var(--space-2)] rounded text-[var(--color-primary)]"
                      : ""
                  )}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative flex-1 px-[var(--space-32)] pt-[var(--space-14)]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
          style={{ zIndex: "var(--z-background)" }}
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
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
