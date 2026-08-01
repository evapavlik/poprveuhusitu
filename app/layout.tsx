import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const title = "Husitská církev — pro hledající";
const description =
  "Církev československá husitská. Otevřená, moderní církev v tradici Jana Husa a české reformace.";

export const metadata: Metadata = {
  metadataBase: new URL("https://poprveuhusitu.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "cs_CZ",
    siteName: "Husitská církev — pro hledající",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        {/* Bez JS by IntersectionObserver nikdy nesundal opacity:0 a ze stránky
            by zbyl jen hero. */}
        <noscript>
          <style>{`.fade-up{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body
        className={`${lora.variable} ${plusJakarta.variable} ${cormorant.variable} font-jakarta antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
