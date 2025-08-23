import { code } from "@/data/code";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="mt-32 sm:mt-16">
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
        Code
      </h2>

      <ul className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2">
        {code.map((item) => (
          <li
            key={item.title}
            className="border border-gray-800 p-4 min-h-[250px] rounded-lg flex flex-col"
          >
            {item.image && (
              <div className="relative w-full h-80 mb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded object-contain"
                />
              </div>
            )}

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300 mb-2">
              {item.shortDescription || item.description}
            </p>
            <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-gray-400">
              {item.category && <span>{item.category}</span>}
              {item.isOpenSource && item.repo && (
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-indigo-400"
                >
                  Repo
                </a>
              )}
              {item.demo && (
                <a
                  href={item.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-green-400"
                >
                  Demo
                </a>
              )}
              {item.caseStudyUrl && (
                <a href={item.caseStudyUrl} className="underline text-blue-400">
                  Case Study
                </a>
              )}
            </div>
            {item.techStack && item.techStack.length > 0 && (
              <div className="mt-auto pt-2">
                <span className="font-semibold text-gray-200">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-xs px-2 py-1 rounded flex items-center gap-1"
                    >
                      {tech.icon && (
                        <span className="inline-block">
                          {/* You can use an icon library here if available */}
                          <span className={`icon-${tech.icon}`} />
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
