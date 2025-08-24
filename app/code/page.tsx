"use client";

import { code } from "@/data/code";
import Image from "next/image";

import GetInTouch from "@/components/GetInTouch";
import Link from "next/link";

export default function page() {
  return (
    <>
      <section className="mt-32 sm:mt-16">
        <h2 className="text-yellow-400 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Code
        </h2>
        <ul className="grid gap-4 mt-8 grid-cols-1 sm:grid-cols-2">
          {code.map((item) => (
            <li
              key={item.id}
              className="border border-gray-800 p-8 min-h-[250px] rounded-lg flex flex-col "
            >
              <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                {item.category && <span>{item.category}</span>}
              </div>

              {item.image && (
                <div className="relative w-full h-80 mb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded object-contain"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mb-2">
                {item.shortDescription || item.description}
              </p>
              <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-gray-400">
                {item.isOpenSource && item.repo && (
                  <Link
                    href={item.repo}
                    target="_blank"
                    className="underline text-indigo-400 cursor-pointer"
                  >
                    Repo
                  </Link>
                )}
                {item.category !== "mobile" && item.demo && (
                  <Link
                    href={item.demo}
                    target="_blank"
                    className="underline text-green-400 cursor-pointer"
                  >
                    Demo
                  </Link>
                )}
                {item.repo && (
                  <Link
                    href={item.repo}
                    target="_blank"
                    className="underline text-blue-400"
                  >
                    Code
                  </Link>
                )}
              </div>
              {item.techStack && item.techStack.length > 0 && (
                <div className="mt-auto pt-2">
                  <span className="font-semibold text-gray-200">
                    Tech Stack:
                  </span>
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
      <GetInTouch />
    </>
  );
}
