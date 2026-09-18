"use client";

import { useState, type ReactNode } from "react";
import FadeUp from "./FadeUp";
import Section, { SectionLabel, NADPIS_2 } from "./Section";
import { FindCongregationLink } from "./FindCongregation";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Musím věřit v Boha, abych mohl/a přijít?",
    a: "Ne. Vůbec. Můžete být zcela nevěřící, můžete mít pochybnosti, můžete si jen chtít poslechnout, jak taková bohoslužba vypadá. Nikdo se vás nebude ptát, co věříte. Jste vítáni tak, jak jste.",
  },
  {
    q: "Nejsem pokřtěný/á. Můžu vůbec přijít?",
    a: "Ano. Křest není podmínkou návštěvy – týká se jen přijímání. Když ostatní jdou k přijímání, můžete zůstat sedět, nebo jít s nimi a přijmout požehnání. Obojí je naprosto v pořádku a nikdo to nebude řešit.",
  },
  {
    q: "Co si mám obléct?",
    a: "Cokoliv, v čem se cítíte dobře. Žádný dress code neexistuje. Přijďte tak, jak jste.",
  },
  {
    q: "Bude se po mně chtít, abych přispěl/a?",
    a: "Během bohoslužby se koná sbírka. Přispět ale nemusíte a nikdo nekontroluje, jestli jste přispěli – není to vstupné. Když košíček prostě podáte dál, nikdo se nepozastaví.",
  },
  {
    q: "Bude mě někdo oslovovat, když nikoho neznám?",
    a: "Nejspíš vás někdo pozdraví, ale nikdo vás nebude vyslýchat ani nutit se představit. Když budete chtít po bohoslužbě odejít rovnou, je to úplně v pořádku. A když si naopak budete chtít popovídat, je na to prostor.",
  },
  {
    q: "Mohu přijít s dětmi?",
    a: "Ano, děti jsou vítány. V mnoha sborech probíhá nedělní škola nebo program pro děti a mládež.",
  },
  {
    q: "Kdy se bohoslužba koná?",
    a: (
      <>
        Většinou v neděli dopoledne, ale záleží na konkrétním sboru. Některé
        sbory mají bohoslužby i ve všední den. Trvá přibližně 45–60 minut.
        Konkrétní čas najdete na stránce svého sboru.
        <span className="block mt-3">
          <FindCongregationLink>Najít sbor blízko vás</FindCongregationLink>
        </span>
      </>
    ),
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
    <Section id="otazky" tone="off-white" top="md" bottom="md" divider>
      <FadeUp>
        <SectionLabel>Časté otázky</SectionLabel>
      </FadeUp>
      <FadeUp>
        <h2 className={`${NADPIS_2} mb-12 max-w-[560px]`}>Ptáte se – odpovídáme.</h2>
      </FadeUp>

      <div className="max-w-[720px]">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <FadeUp key={faq.q} delay={i * 50}>
              <div className="border-b border-border">
                <button
                  id={`faq-tlacitko-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-odpoved-${i}`}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer bg-transparent border-none"
                >
                  <span className="font-lora text-[19px] font-semibold pr-8">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-brick text-xl shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {/* grid-rows 0fr→1fr místo pevného max-h: neořízne ani delší odpověď */}
                <div
                  id={`faq-odpoved-${i}`}
                  role="region"
                  aria-labelledby={`faq-tlacitko-${i}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-[15px] font-light leading-[1.8] text-text-muted">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </Section>
  );
}
