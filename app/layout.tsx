import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteBackground } from "./components/SiteBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intempt — GrowthOS",
  description:
    "Intempt is an all-in-one GrowthOS that helps teams acquire, convert, retain, and expand customers using data, AI, and agent automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <SiteBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
