"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";
import { Home, Menu, X } from "lucide-react";

const LINKS1 = [
  { title: "About", url: "#about" },
  { title: "Portfolio", url: "#portfolio" },
  // { title: "Code", url: "/code" },
  { title: "Contact", url: "/contact" },
  {
    title: "Resume",
    url: "https://docs.google.com/document/d/1hQyMnNEHIoqCaDxGjJtlK8IiBbIQv69hBiCO8nh9oSE/edit?usp=sharing",
  },
];

const LINKS2 = [
  // { title: "Code", url: "/code" },
  { title: "Contact", url: "/contact" },
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

  const links = variant === "code" ? LINKS2 : LINKS1;

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
        "sticky top-0 h-[var(--navbar-height)] transition-all duration-300 ease-in-out z-[var(--z-sticky)] border-[var(--navbar-border)]"
      )}
    >
      <div className="flex  h-[var(--navbar-height)] max-w-7xl items-center justify-between bg-transparent backdrop-blur-2xl">
        <Link
          href="/"
          className="font-regular tracking-wide text-balance font-bold text-[var(--color-primary)]"
        >
          {variant === "code" ? <Home /> : "Stanley"}
        </Link>

        <ul className="hidden md:flex gap-[var(--space-6)]">
          {links.filter(Boolean).map(({ title, url }) => {
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
            "absolute top-[var(--navbar-height)] left-0 right-0 md:hidden transition-all duration-300 ease-in-out border-b border-[var(--navbar-border)] z-[var(--z-sticky)]",
            " ",
            isMenuOpen
              ? "opacity-100 translate-y-0 visible bg-background"
              : "opacity-0 -translate-y-4 invisible"
          )}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          <ul className="flex flex-col  space-y-[var(--space-4)] ">
            {links.filter(Boolean).map(({ title, url }) => {
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
    </nav>
  );
};

export default Navbar;
