import FadeUp from "./FadeUp";

const pillars = [
  {
    num: "01",
    title: "Svoboda svědomí",
    text: "Věříme, že víra je osobní cesta – ne soubor pravidel, která musíte přijmout celá. Pochybnosti nepotlačujeme. Karel Farský napsal, že víra a věda si neodporují. To platí od roku 1920 dodnes.",
  },
  {
    num: "02",
    title: "Otevřené přijímání",
    text: "K přijímání může přistoupit každý pokřtěný křesťan – bez ohledu na to, ke které církvi patří. V mnoha církvích to možné není.",
  },
  {
    num: "03",
    title: "Živé kázání",
    text: "Bohoslužba se u nás koná v češtině od roku 1920. Kázání není výčet dogmat – je to rozhovor s tím, co nás trápí, raduje i bolí dnes.",
  },
  {
    num: "04",
    title: "Farářky i faráři",
    text: "Ženy u nás slouží jako farářky od roku 1947 – dávno před většinou církví v Evropě. Naši duchovní žijí běžný život: mají rodiny, děti, partnerské vztahy. Celibát není podmínkou.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-white" id="co-jsme">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <FadeUp>
          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
            Kdo jsme
          </div>
          <h2 className="font-lora text-[clamp(30px,3.5vw,46px)] font-bold leading-[1.2] mb-6">
            Církev, která vznikla
            <br />
            spolu s <em className="italic text-brick">první republikou.</em>
          </h2>
          <p className="text-base font-light leading-[1.85] text-text-muted mb-4">
            Církev československá husitská je křesťanská církev, vyhlášená 11. ledna 1920
            v chrámu sv. Mikuláše na Staroměstském náměstí v Praze. Hlásíme se k odkazu
            mistra Jana Husa a k tradici české reformace. Od počátku klademe důraz
            na svobodu svědomí a vědecké poznání.
          </p>
          <p className="text-base font-light leading-[1.85] text-text-muted">
            Nejsme uzavřená komunita – přicházejí k nám lidé různí:
            hledající, pochybující i věřící, prostě jsme prostorem pro všechny.
          </p>
        </FadeUp>

        <FadeUp>
          {pillars.map((p) => (
            <div
              key={p.num}
              className="py-6 border-b border-border first:border-t first:border-border"
            >
              <div className="flex items-start gap-4 mb-2">
                <span className="font-cormorant text-[13px] text-brick font-semibold tracking-[0.1em] pt-[3px] shrink-0">
                  {p.num}
                </span>
                <h3 className="font-lora text-[19px] font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm font-light leading-[1.75] text-text-muted pl-10">
                {p.text}
              </p>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
