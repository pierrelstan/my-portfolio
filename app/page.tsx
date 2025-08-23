"use client";

import { code } from "@/data/code";
import { timeline } from "@/data/timeline";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function IndexPage() {
  return (
    <main className="mx-auto max-w-7xl">
      <section className="relative grid min-h-screen items-center gap-8 md:grid-cols-2">
        {/* left: text */}
        <div className="w-full max-w-2xl space-y-4 sm:space-y-6">
          <h6 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-50/90 sm:text-base break-words">
            Stanley Pierre Louis
          </h6>

          <h1 className="font-semibold tracking-tight text-balance break-words leading-[1.15] text-[clamp(2rem,8vw,3.5rem)] sm:text-[clamp(3rem,6vw,6rem)]">
            Hello 👋🏾, I turn ideas into apps.
          </h1>

          <p className="text-pretty text-gray-300 break-words leading-relaxed text-[clamp(1rem,4vw,1.125rem)] sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>

        {/* right: emoji */}
        <div className="flex items-center justify-center text-[clamp(3rem,18vw,6rem)] md:text-8xl">
          👨🏿‍💻
        </div>

        {/* background blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#3eaa29] to-[#982727] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>

      <section className="mt-16 min-h-screen">
        <h2 className="font-semibold tracking-tight text-balance break-words text-[clamp(1.75rem,6vw,3rem)]">
          Timeline
        </h2>

        <ul className="mt-4 ">
          {timeline.map((item) => (
            <li
              key={item.id}
              className="mb-12 border-b border-t border-gray-800 p-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="break-words">
                  <time dateTime={item.startDate}>{item.startDate}</time>
                  {item.endDate && (
                    <>
                      {" "}
                      – <time dateTime={item.endDate}>{item.endDate}</time>
                    </>
                  )}
                  <span className="ml-2 text-sm text-gray-400">
                    {item.type}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-1 sm:mt-0 break-words">
                  {item.location}
                </div>
              </div>
              <strong className="block mt-2 break-words">{item.company}</strong>
              <h3 className="text-xl font-semibold break-words">
                {item.position}
              </h3>
              <p className="text-gray-300 mb-2 leading-relaxed break-words">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="min-h-screen w-full justify-center items-center flex">
        <div className="flex flex-col border border-gray-800 px-16 py-16 w-full text-center gap-10">
          <h2 className="font-semibold tracking-tight text-balance break-words text-[clamp(1.75rem,6vw,3rem)]">
            Get in touch
          </h2>
          <p className="break-words leading-relaxed text-[clamp(1rem,4.5vw,1.125rem)]">
            Have a project for me, or just want to say Hi🙋🏾‍♂️? Feel free to email
            me at stanleypldev@gmail.com.
          </p>
        </div>
      </section>
    </main>
  );
}
