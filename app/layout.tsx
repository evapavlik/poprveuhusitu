import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Husitská církev — pro hledající",
  description:
    "Církev československá husitská. Otevřená, moderní církev v tradici Jana Husa a české reformace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${lora.variable} ${plusJakarta.variable} ${cormorant.variable} font-jakarta antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
