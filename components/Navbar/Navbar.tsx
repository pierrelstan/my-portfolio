"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";
import { Home, Menu, X } from "lucide-react";

const LINKS = [
  { title: "Bio", url: "#bio" },
  { title: "Portfolio", url: "#portfolio" },
  { title: "Certifications", url: "#certifications" },
  // { title: "Code", url: "/code" },
  { title: "Contact", url: "#contact" },
  {
    title: "Resume",
    url: "https://docs.google.com/document/d/1hQyMnNEHIoqCaDxGjJtlK8IiBbIQv69hBiCO8nh9oSE/edit?usp=sharing",
  },
];

interface NavbarProps {
  variant: "code" | "default";
}

interface NavLinkProps {
  title: string;
  url: string;
  isHash: boolean;
  active: boolean;
  onClick: () => void;
}

const NavLink = ({ title, url, isHash, active, onClick }: NavLinkProps) => (
  <li>
    <Link
      href={url}
      title={title}
      target={url.startsWith("https") ? "_blank" : "_self"}
      rel={url.startsWith("https") ? "noopener noreferrer" : undefined}
      aria-label={`Navigate to ${title}`}
      onClick={onClick}
      className={cn(
        "text-[var(--font-size-base)] font-regular tracking-wide transition-[var(--transition-base)] font-bold",
        active
          ? "text-[var(--color-primary)]"
          : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
        url.startsWith("https")
          ? "border border-[var(--color-primary)] px-[var(--space-4)] py-[var(--space-2)] rounded text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]"
          : ""
      )}
    >
      {title}
    </Link>
  </li>
);

const Navbar = ({ variant }: NavbarProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>(""); 
  useEffect(() => {
    if (typeof window === "undefined") return;
    setCurrentHash(window.location.hash || "");
    const updateHash = () => setCurrentHash(window.location.hash || "");
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links =
    variant === "code"
      ? [LINKS.find((link) => link.title === "Resume")!]
      : LINKS;

  const getActiveState = (url: string) => {
    const isExternal = url.startsWith("http");
    const isHash = url.startsWith("#");
    if (isExternal) return false;
    if (isHash) return currentHash === url;
    return pathname === url || pathname.startsWith(url);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 h-[var(--navbar-height)] bg-[#18181b] md:bg-transparent backdrop-blur-sm border-b transition-all duration-300 ease-in-out z-[var(--z-sticky)] border-[var(--navbar-border)]"
      )}
    >
      <div className="flex relative p-[var(--space-8)] h-[var(--navbar-height)] max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="font-regular tracking-wide text-balance font-bold text-[var(--color-primary)]"
        >
          {variant === "code" ? <Home /> : "Stanley"}
        </Link>

        <ul className="hidden md:flex gap-[var(--space-6)]">
          {links.map(({ title, url }) => {
            const isHash = url.startsWith("#");
            const active = getActiveState(url);
            return (
              <NavLink
                key={url}
                title={title}
                url={url}
                isHash={isHash}
                active={active}
                onClick={() => {
                  if (isHash) setCurrentHash(url);
                }}
              />
            );
          })}
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
          aria-expanded={isMenuOpen}
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
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <ul className="flex flex-col py-[var(--space-4)] px-[var(--space-8)] space-y-[var(--space-4)]">
            {links.map(({ title, url }) => {
              const isHash = url.startsWith("#");
              const active = getActiveState(url);
              return (
                <NavLink
                  key={url}
                  title={title}
                  url={url}
                  isHash={isHash}
                  active={active}
                  onClick={() => {
                    if (isHash) setCurrentHash(url);
                    closeMenu();
                  }}
                />
              );
            })}
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
