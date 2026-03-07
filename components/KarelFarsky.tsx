import FadeUp from "./FadeUp";

const timeline = [
  {
    year: "1919",
    title: "Český misál a první česká mše",
    text: "Farský překládá celý misál do češtiny — po večerech, při petrolejové lampě. O Velikonocích slouží jako jeden z prvních mši v mateřském jazyce. Do konce roku slaví česky již tisíc kněží po celé zemi.",
  },
  {
    year: "1920",
    title: "Vyhlášení nové církve — chrám sv. Mikuláše",
    text: "11. ledna 1920 zazní v chrámu sv. Mikuláše na Staroměstském náměstí prohlášení nové, nezávislé Církve československé.",
  },
  {
    year: "1922",
    title: "Farský jako teolog a myslitel",
    text: "Společně s Aloisem Kalousem vydává Československý katechismus — věrouku, která chápe vědu a víru ne jako protivníky, ale jako spojence.",
  },
  {
    year: "1924",
    title: "První biskup-patriarcha",
    text: "Farský se stává prvním biskupem-patriarchou církve, které zasvětil celý život. Tři roky nato umírá ve 47 letech — vyčerpán prací, které se nevzdal.",
  },
];

export default function KarelFarsky() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-off-white" id="farsky">
      <div className="max-w-[820px]">
        <FadeUp>
          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
            Příběh vzniku
          </div>
        </FadeUp>

        <FadeUp>
          <h2 className="font-lora text-[clamp(34px,4.5vw,58px)] font-bold leading-[1.12] mb-4">
            Muž, který řekl
            <br />
            <em className="italic text-brick">ne — ale jinak.</em>
          </h2>
        </FadeUp>
        <FadeUp>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[44px] h-[44px] rounded-full overflow-hidden shrink-0 ring-1 ring-sage/30">
              <img
                src="/karel-farsky.png"
                alt="Portrét Dr. Karla Farského"
                className="w-full h-full object-cover object-top"
                style={{
                  filter: "sepia(1) saturate(1.2) hue-rotate(-10deg) contrast(0.95) brightness(0.95)",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            <p className="text-sm font-medium text-sage tracking-[0.05em]">
              Dr. Karel Farský · 1880–1927 · první biskup-patriarcha
            </p>
          </div>
        </FadeUp>
        <FadeUp>
          <p className="text-[17px] font-light leading-[1.8] text-text-muted max-w-[620px] mb-14">
            Karel Farský nebyl rebelant bez vize. Byl to kněz, učitel a člověk,
            který viděl, že církev ztratila kontakt s lidmi. Nechtěl ji zrušit —
            chtěl ji vrátit lidem.
          </p>
        </FadeUp>

        <div className="flex flex-col">
          {timeline.map((item, i) => (
            <FadeUp key={`${item.year}-${i}`}>
              <div
                className={`grid grid-cols-[72px_1fr] gap-7 py-7 border-t border-border ${
                  i === timeline.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="font-lora text-sm font-semibold text-brick pt-[3px]">
                  {item.year}
                </div>
                <div>
                  <h4 className="font-lora text-[19px] font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm font-light leading-[1.8] text-text-muted">
                    {item.text}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
