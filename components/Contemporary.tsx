import FadeUp from "./FadeUp";

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
    text: "CČSH nikdy nestavěla vědu proti Bohu. Ptát se, zkoumat, pochybovat — to je projev vážného vztahu s pravdou.",
  },
  {
    title: "Bez okázalosti",
    text: "Farský trval na církvi bez okázalého bohatství. Jednoduchost, služba, přítomnost u těch, kdo trpí.",
  },
];

export default function Contemporary() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-white" id="dnes">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div>
          <FadeUp>
            <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
              Proč dnes
            </div>
          </FadeUp>
          <FadeUp>
            <h2 className="font-lora text-[clamp(30px,3.5vw,46px)] font-bold leading-[1.2] mb-6">
              Farského slova zní
              <br />
              i v roce <em className="italic text-brick">2026.</em>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="text-base font-light leading-[1.85] text-text-muted mb-4">
              Farský psal o korupci, která rozkládá společnost. O stranickém
              kompromisnictví. O odpuštění jako radikálním činu. O solidaritě, která nesmí
              být jen rétorika. Čteme ho dnes — a je to jako číst dnešní noviny, jen s
              nadějí navíc.
            </p>
          </FadeUp>
          <FadeUp>
            <p className="text-base font-light leading-[1.85] text-text-muted mb-6">
              Husitská církev vždy věřila, že křesťanství není útočiště před světem. Je to
              výzva žít ve světě jinak.
            </p>
          </FadeUp>
          <FadeUp>
            <a
              href="#kontakt"
              className="bg-brick text-white font-jakarta text-sm font-semibold px-8 py-4 rounded-md no-underline inline-block hover:bg-brick-light hover:-translate-y-px transition-all duration-200"
            >
              Přijďte se přesvědčit
            </a>
          </FadeUp>
        </div>

        <FadeUp>
          <div className="bg-sage-pale rounded-2xl p-10">
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
                <h4 className="font-lora text-[17px] font-semibold text-sage mb-1.5">
                  {theme.title}
                </h4>
                <p className="text-sm font-light leading-[1.75] text-text-muted">
                  {theme.text}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
