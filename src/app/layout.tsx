import type { Metadata } from "next";
import { Poiret_One, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Primary font - thin and elegant
const primaryFont = Poiret_One({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400"],
  display: "swap",
});

// Secondary font - for headings
const secondaryFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${secondaryFont.variable}`}>
      <body className={`${primaryFont.className} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
