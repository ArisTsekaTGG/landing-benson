import type { Metadata } from "next";
import { Geist, Fraunces, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Benson Goldstein — Mis-sold car finance? Make your claim in 60 seconds.",
  description:
    "Benson Goldstein is a regulated UK law firm helping drivers reclaim mis-sold car finance. No win, no fee. Check your eligibility in 60 seconds.",
  metadataBase: new URL("https://makeyourclaim.com"),
  openGraph: {
    title: "Benson Goldstein — Make your claim in 60 seconds",
    description:
      "Mis-sold car finance? Our regulated legal team handles the heavy lifting. No win, no fee.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${geist.variable} ${fraunces.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
