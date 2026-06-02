import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🛠️ SEO és Megosztási adatok beállítása az osztrák piacra
export const metadata: Metadata = {
  title: "Wohnungreparatur Wien | Handwerker zum fairen Pauschalpreis",
  description:
    "Professionelle Montage, Reparaturen, Wand- & Holzreparaturen in Wien und Umgebung. Transparente Fixpreise ohne versteckte Kosten. Jetzt Angebot anfordern!",
  keywords: [
    "Handwerker Wien",
    "Wohnungreparatur",
    "Möbelmontage",
    "Lampenmontage",
    "Mikrozement Wien",
    "Fixpreis Handwerker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 🌐 Átírva 'de' (német) nyelvre, hogy a Google tudja, kiknek szól,
    // és a böngészők ne akarják folyton lefordítani az oldalt.
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
