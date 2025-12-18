import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { SiteBackground } from "./components/SiteBackground";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrowthOS by Intempt",
  description:
    "Intempt is an all-in-one GrowthOS that helps teams acquire, convert, retain, and expand customers using data, AI, and agent automation.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={onest.variable}>
      <body className="antialiased">
        <SiteBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
