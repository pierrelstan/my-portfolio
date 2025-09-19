"use client";

import { useState, useEffect } from "react";
import { code } from "@/data/code";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 mt-[var(--space-32)] sm:mt-[var(--space-16)] overflow-x-hidden">
      <div className="w-full flex items-center justify-center mb-[var(--space-8)]">
        <div className="inline-flex gap-[var(--space-2)] flex-wrap justify-center">
          {[
            { label: "All", value: "" },
            { label: "Web", value: "web" },
            { label: "Mobile", value: "mobile" },
          ].map((btn) => {
            const active = selectedValue === btn.value;
            return (
              <button
                key={btn.label}
                onClick={() => setSelectedValue(btn.value)}
                className={`px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-md)] border transition-[var(--transition-base)] ${
                  active
                    ? "bg-[var(--color-primary)] text-white border-transparent"
                    : "bg-[var(--card-bg)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-secondary)]"
                }`}
                style={{ borderColor: "var(--card-border)" }}
                aria-pressed={active}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      <h2
        className="text-[var(--font-size-3xl)] font-[var(--font-weight-semibold)] tracking-tight text-balance sm:text-[var(--font-size-5xl)] max-w-[1200px]"
        style={{ color: "var(--color-primary)" }}
      >
        Code
      </h2>
      <ul className="grid gap-[var(--space-4)] mt-[var(--space-8)] grid-cols-1 sm:grid-cols-2 max-w-[1200px]">
        {code
          .filter(
            (item) => selectedValue === "" || item.category === selectedValue
          )
          .map((item) => (
            <li
              key={item.id}
              className="border p-[var(--space-8)] min-h-[250px] rounded-[var(--radius-lg)] flex flex-col transition-[var(--transition-base)] hover:shadow-[var(--shadow-lg)]"
              style={{
                borderColor: "var(--card-border)",
                backgroundColor: "var(--card-bg)",
              }}
            >
              <div
                className="mb-[var(--space-2)] flex flex-wrap items-center gap-[var(--space-2)] text-[var(--font-size-sm)]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.category && <span>{item.category}</span>}
              </div>

              {item.image && (
                <div className="relative w-full h-80 mb-[var(--space-2)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-[var(--radius-md)] object-contain"
                  />
                </div>
              )}

              <h3
                className="text-[var(--font-size-xl)] font-[var(--font-weight-semibold)]"
                style={{ color: "var(--color-text-primary)" }}
              >
                {item.title}
              </h3>
              <p
                className="mb-[var(--space-2)]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.shortDescription || item.description}
              </p>
              <div
                className="mb-[var(--space-2)] flex flex-wrap items-center gap-[var(--space-2)] text-[var(--font-size-sm)]"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.isOpenSource && item.repo && (
                  <Link
                    href={item.repo}
                    target="_blank"
                    className="underline cursor-pointer transition-[var(--transition-base)] hover:opacity-80"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Repo
                  </Link>
                )}
                {item.category !== "mobile" && item.demo && (
                  <Link
                    href={item.demo}
                    target="_blank"
                    className="underline cursor-pointer transition-[var(--transition-base)] hover:opacity-80"
                    style={{ color: "var(--color-success)" }}
                    role="button"
                  >
                    Demo
                  </Link>
                )}
                {item.repo && (
                  <Link
                    href={item.repo}
                    target="_blank"
                    className="underline cursor-pointer transition-[var(--transition-base)] hover:opacity-80"
                    style={{ color: "var(--color-info)" }}
                  >
                    Code
                  </Link>
                )}
              </div>
              {item.techStack && item.techStack.length > 0 && (
                <div className="mt-auto pt-[var(--space-2)]">
                  <span
                    className="font-[var(--font-weight-semibold)]"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-[var(--space-2)] mt-[var(--space-1)]">
                    {item.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[var(--font-size-xs)] px-[var(--space-2)] py-[var(--space-1)] rounded-[var(--radius-sm)] flex items-center gap-[var(--space-1)]"
                        style={{
                          backgroundColor: "var(--color-surface-secondary)",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {tech.icon && (
                          <span className="inline-block">
                            {/* Icon library placeholder */}
                            {/* <span className={`icon-${tech.icon}`} /> */}
                          </span>
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
      </ul>
    </section>
  );
}
