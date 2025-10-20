import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
// import { Geist, Geist_Mono } from "next/font/google";

import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";

//@ts-ignore

import "./globals.css";
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional: define weights you need
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // optional: define weights you need
});

export const metadata: Metadata = {
  title: "Stanley Pierre Louis",
  description: "Showcasing the projects and skills of Stanley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased  text-white mx-auto px-8 md:px-32`}
      >
        <div id="__next">{children}</div>

        {process.env.NODE_ENV === "production" && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}
          />
        )}
      </body>
    </html>
  );
}
