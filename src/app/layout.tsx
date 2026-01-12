import type { Metadata } from "next";
import { Slabo_27px, Hanuman } from "next/font/google";
import "./globals.css";

// Primary font - Slabo 27px
const primaryFont = Slabo_27px({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400"],
  display: "swap",
});

// Secondary font - Hanuman Variable
const secondaryFont = Hanuman({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["100", "300", "400", "700", "900"],
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
