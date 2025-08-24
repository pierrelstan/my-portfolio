import React from "react";

export default function Hero() {
  return (
    <section className="relative grid min-h-screen items-center gap-8 md:grid-cols-2">
      {/* left: text */}
      <div className="w-full max-w-2xl space-y-4 sm:space-y-6">
        <h6 className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-50/90 sm:text-base break-words">
          Stanley Pierre Louis
        </h6>

        <h1 className="text-yellow-400 font-semibold tracking-tight text-balance break-words leading-[1.15] text-[clamp(2rem,8vw,3.5rem)] sm:text-[clamp(3rem,6vw,6rem)]">
          Hello 👋🏾, I turn ideas into apps.
        </h1>

        <p className="text-pretty text-gray-300 break-words leading-relaxed text-[clamp(1rem,4vw,1.125rem)] sm:text-xl/8">
          As a <strong className="text-yellow-400">full-stack developer</strong>{" "}
          with a strong focus on{" "}
          <strong className="text-yellow-400">front-end</strong>, I build
          user-friendly applications designed to solve real-world problems.
        </p>
      </div>

      {/* right: emoji */}
      <div className="flex items-center justify-center text-[clamp(3rem,18vw,6rem)] md:text-8xl">
        👨🏾‍💻
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
  );
}
