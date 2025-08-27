import { certifications } from "@/data/certifications";
import { skills } from "@/data/skills";
import Link from "next/link";
import React from "react";
import Title from "./Title";

export default function Skills() {
  return (
    <section
      className="mt-[var(--space-20)] min-h-[calc(100vh-10rem)]"
      id="certifications"
    >
      <Title title="Expertise & Skills" />

      <div className="mt-[var(--space-4)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3   gap-[var(--space-10)]">
        {skills.map((item) => (
          <div
            key={item.id}
            className="group justify-center items-center aspect-square border p-[var(--space-4)] rounded-[var(--radius-lg)] transition-[var(--transition-base)] flex flex-col hover:shadow-[var(--shadow-lg)] relative"
            style={{
              borderColor: "var(--card-border)",
              backgroundColor: "var(--card-bg)",
            }}
          >
            <div className="flex flex-col h-full w-full">
              <h4 className="block mb-[var(--space-2)] break-words font-[var(--font-weight-semibold)] text-[var(--color-primary)] underline">
                {item.title}
              </h4>
              <div className="flex flex-col gap-[var(--space-2)]">
                <div>
                  <strong className="font-[var(--font-weight-semibold)] text-[var(--color-primary)]">
                    Languages & Frameworks:
                  </strong>
                  <span className="text-[var(--color-text-primary)]">
                    {item.languagesAndFrameworks}
                  </span>
                </div>
                <div>
                  <strong className="font-[var(--font-weight-semibold)] text-[var(--color-primary)]">
                    State Management:{" "}
                  </strong>
                  <span className="text-[var(--color-text-primary)]">
                    {item.stateManagement}
                  </span>
                </div>
                <div>
                  <strong className="font-[var(--font-weight-semibold)] text-[var(--color-primary)]">
                    Navigation:
                  </strong>
                  <span className="text-[var(--color-text-primary)]">
                    {item.navigation}
                  </span>
                </div>
                <div>
                  <strong className="font-[var(--font-weight-semibold)] text-[var(--color-primary)]">
                    Design System:
                  </strong>
                  <span className="text-[var(--color-text-primary)]">
                    {item.designSystem}
                  </span>
                </div>
                <div>
                  <strong className="font-[var(--font-weight-semibold)] text-[var(--color-primary)]">
                    Testing:
                  </strong>
                  <span className="text-[var(--color-text-primary)]">
                    {item.testing}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
