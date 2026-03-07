"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    q: "Musím věřit v Boha, abych mohl/a přijít?",
    a: "Ne. Přicházejí k nám i hledající a pochybující. Bohoslužba je otevřená všem — víra není podmínka vstupu, ale cesta, na kterou se můžete vydat.",
  },
  {
    q: "Co si mám obléct?",
    a: "Cokoliv, v čem se cítíte dobře. Žádný dress code neexistuje. Přijďte tak, jak jste.",
  },
  {
    q: "Mohu přijít s dětmi?",
    a: "Ano, děti jsou vítány. V mnoha sborech probíhá nedělní škola nebo program pro děti a mládež.",
  },
  {
    q: "Kdy se bohoslužba koná?",
    a: "Většinou v neděli dopoledne, ale záleží na konkrétním sboru. Některé obce mají bohoslužby i ve všední den. Trvá přibližně 45–60 minut.",
  },
  {
    q: "Děje se něco i mimo bohoslužbu?",
    a: "Ano. Mnoho sborů pořádá setkání, přednášky, koncerty, programy pro děti nebo dobrovolnické aktivity. Komunita nežije jen v neděli.",
  },
  {
    q: "Musím se nějak zapojovat?",
    a: "Ne. Stačí přijít, sednout si a nechat se oslovit. Nikdo vás nebude nutit vstávat, zpívat ani odpovídat. Bohoslužba je tu pro vás.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-[100px] px-6 md:px-12 bg-white">
      <FadeUp>
        <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
          Časté otázky
        </div>
      </FadeUp>
      <FadeUp>
        <h2 className="font-lora text-[clamp(30px,3.5vw,46px)] font-bold leading-[1.2] mb-12 max-w-[560px]">
          Ptáte se —{" "}
          <em className="italic text-brick">odpovídáme.</em>
        </h2>
      </FadeUp>

      <div className="max-w-[720px]">
        {faqs.map((faq, i) => (
          <FadeUp key={i} delay={i * 50}>
            <div className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer bg-transparent border-none"
              >
                <span className="font-lora text-[17px] font-semibold pr-8">
                  {faq.q}
                </span>
                <span
                  className={`text-brick text-xl shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm font-light leading-[1.8] text-text-muted">
                  {faq.a}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
