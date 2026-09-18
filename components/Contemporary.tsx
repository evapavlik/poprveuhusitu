import FadeUp from "./FadeUp";
import Link from "next/link";
import Section, { SectionLabel, NADPIS_2 } from "./Section";

const themes = [
  {
    title: "Pravda jako odvaha",
    text: "Hus odmítl lhát, i když ho to stálo život. CČSH z toho dělá základ: říkat pravdu je duchovní čin, ne jen morální povinnost.",
  },
  {
    title: "Odpuštění ve třech krocích",
    text: "Farský chápal odpuštění trojmo: odpustit druhému, smířit se s ním, a pak smířit se se sebou. Psychologie, která předběhla dobu.",
  },
  {
    title: "Víra a věda společně",
    text: "CČSH nikdy nestavěla vědu proti Bohu. Ptát se, zkoumat, pochybovat – to je projev vážného vztahu s pravdou.",
  },
  {
    title: "Bez okázalosti",
    text: "Farský trval na církvi bez okázalého bohatství. Jednoduchost, služba, přítomnost u těch, kdo trpí.",
  },
];

export default function Contemporary() {
  return (
    <Section id="dnes" tone="off-white" top="md" bottom="md" divider>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div>
          <FadeUp>
            <SectionLabel>Proč dnes</SectionLabel>
          </FadeUp>
          <FadeUp>
            <h2 className={`${NADPIS_2} mb-6`}>
              Farského slova platí
              <br />
              i po sto letech.
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-[17px] font-light leading-[1.8] text-text-muted mb-4">
              Farský psal o korupci, která rozkládá společnost. O stranickém
              kompromisnictví. O odpuštění jako radikálním činu. O solidaritě, která nesmí
              být jen rétorika. Čteme ho dnes – a je to jako číst dnešní noviny, jen s
              nadějí navíc.
            </p>
          </FadeUp>
          <FadeUp>
            <p className="text-[17px] font-light leading-[1.8] text-text-muted mb-8">
              Husitská církev vždy věřila, že křesťanství není útočiště před světem. Je to
              výzva žít ve světě jinak.
            </p>
          </FadeUp>
          <FadeUp>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="bg-brick text-white font-jakarta text-sm font-semibold px-8 py-4 rounded-md no-underline inline-block hover:bg-brick-light hover:-translate-y-px transition-all duration-200"
              >
                Přijďte se přesvědčit
              </a>
              <Link
                href="/kralovstvi-bozi"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sage no-underline hover:text-sage/80 transition-colors"
              >
                Jak a proč církev vznikla
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeUp>
        </div>

        <FadeUp>
          <div className="bg-sage-pale rounded-2xl p-8 md:p-10">
            {themes.map((theme, i) => (
              <div
                key={theme.title}
                className={`py-5 ${
                  i === 0 ? "pt-0" : ""
                } ${
                  i === themes.length - 1
                    ? "pb-0"
                    : "border-b border-sage/15"
                }`}
              >
                <h3 className="font-lora text-[19px] font-semibold text-sage mb-1.5">
                  {theme.title}
                </h3>
                <p className="text-[15px] font-light leading-[1.75] text-text-muted">
                  {theme.text}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
