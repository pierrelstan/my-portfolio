"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";
import { House } from "lucide-react";

const LINKS = [
  { title: "Code", url: "/code" },
  { title: "Design", url: "/design" },
  { title: "Blog", url: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 h-16  z-[1000] bg-transparent backdrop-blur-sm border-b border-gray-800/50">
      <div className="flex h-16 max-w-7xl items-center justify-between ">
        <Link
          href="/"
          title="Home"
          aria-label="Home"
          className="p-2 hover:bg-gray-800 rounded transition-colors"
        >
          <House />
        </Link>
        <section className="flex gap-4">
          {LINKS.map((link) => (
            <Link
              href={link.url}
              key={link.url}
              className={cn(
                "text-sm font-regular tracking-wide px-3 py-2 rounded transition-colors hover:bg-gray-800 cursor-pointer",
                pathname === link.url && "text-indigo-300 bg-gray-900"
              )}
              onClick={() => {
                console.log("cliked!!");
              }}
            >
              {link.title}
            </Link>
          ))}
        </section>
      </div>
      <div className="relative isolate flex-1 px-32 pt-14 ">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3eaa29] to-[#982727] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
