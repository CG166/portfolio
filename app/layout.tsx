import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, Black_Ops_One} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

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

const oxanium = localFont({
  src: "./fonts/Oxanium-VariableFont_wght.ttf",
  variable: "--oxanium",
  display: "swap",
});

//

export const metadata: Metadata = {
  title: "Portfolio | Cindy Garcia",
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
