import { certifications } from "@/data/certifications";
import Link from "next/link";
import React from "react";
import Title from "./Title";

export default function Certifications() {
  return (
    <section
      className="mt-[var(--space-20)]  min-h-[calc(100vh-10rem)]"
      id="certifications"
    >
      <Title title="Certifications" />
      <div className="p-20">
        <div className="mt-[var(--space-4)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[var(--space-10)]">
          {certifications.map((item) => (
            <li key={item.id}>
              <div>
                <Link
                  href={item.website.length === 0 ? item.pdf : item.website}
                  target="_blank"
                  className="group justify-center items-center aspect-square border p-[var(--space-4)] rounded-full transition-[var(--transition-base)] flex flex-col hover:shadow-[var(--shadow-lg)] relative cursor-pointer"
                  style={{
                    borderColor: "var(--card-border)",
                    backgroundColor: "var(--card-bg)",
                  }}
                >
                  <img
                    src={item?.imageUrl?.[0]?.src || "/vercel.svg"}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-cover"
                    style={{ display: "block", margin: "0 auto" }}
                  />
                  <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-0">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backdropFilter: "blur(8px)",
                        background:
                          "linear-gradient(135deg, var(--color-surface-hover)/80 0%, var(--color-primary)/30 50%, var(--color-surface-hover)/80 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full opacity-30"
                      style={{
                        backdropFilter: "blur(12px)",
                        background:
                          "radial-gradient(circle at center, var(--color-primary)/50 0%, transparent 70%)",
                      }}
                    />
                    <span
                      className="relative z-10 text-center text-[var(--button-primary-text)] font-[var(--font-weight-semibold)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center rounded-full"
                      style={{
                        width: 166,
                        height: 166,
                        minWidth: 166,
                        minHeight: 166,
                        background:
                          "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary) 60%, transparent 100%)",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        opacity: 0.95,
                        transition: "background 0.3s",
                      }}
                    >
                      View Certificate
                    </span>
                  </div>
                </Link>
                <div className="flex flex-col justify-center items-center text-center h-full w-full">
                  <strong className="block mb-[var(--space-2)] break-words font-[var(--font-weight-semibold)] text-[var(--color-primary)]">
                    {item.title}
                  </strong>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
