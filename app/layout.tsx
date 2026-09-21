import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Black_Ops_One, Oxanium } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Custom Fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--orbitron",
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--blackOpsOne",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--oxanium",
});

//

export const metadata: Metadata = {
  title: "Cindy Garcia | Portfolio",
  description: "SWE portfolio created by Cindy Garcia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${blackOpsOne.variable} ${oxanium.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
