import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Průvodce bohoslužbou — Husitská církev",
  description:
    "Krok za krokem celou bohoslužbou CČSH. Otevřete si na mobilu přímo v lavici.",
};

const steps = [
  {
    num: "01",
    title: "Příchod kněze",
    text: "Lidé povstanou na znamení pozdravu. Nemusíte — nikdo si toho nevšimne.",
    note: "vstává se",
  },
  {
    num: "02",
    title: "Doznání hříchů a vin",
    text: "Kněz vyzve ke chvíli ticha a pohledu do vlastního svědomí. Pak společné doznání vin. Pokud přiznáváme své chyby a litujeme jich, můžeme prožít milost Božího odpuštění.",
  },
  {
    num: "03",
    title: "První čtení z Bible",
    text: "Kněz nebo lektor přečte úryvek z Bible — většinou ze Starého zákona.",
  },
  {
    num: "04",
    title: "Přímluvné modlitby",
    text: 'Zaznívají díky, chvály a prosby. Obec odpovídá krátkými modlitebními zvoláními — česky, řecky nebo staroslověnsky. Slovo AMEN znamená „staň se".',
    tip: 'Kyrie eleison = Pane, smiluj se (řecky). Gospodi pomiluj = totéž staroslověnsky. Smiluj se, Hospodine = česky.',
  },
  {
    num: "05",
    title: "Druhé čtení z Bible",
    text: "Další úryvek z Písma — většinou z Nového zákona (epištoly).",
    tip: "Epištoly jsou dopisy apoštolů prvním křesťanským obcím. Nejznámější jsou listy apoštola Pavla.",
  },
  {
    num: "06",
    title: "Blahoslavenství",
    text: "Připomínka toho, jak bychom měli žít. Zpívá se nebo recituje. Mění se podle období liturgického roku.",
    tip: 'Blahoslavenství pochází z Ježíšova Kázání na hoře. Začíná slovy „Blahoslavení chudí duchem…" — tedy ti, kdo nespoléhají jen na sebe.',
  },
  {
    num: "07",
    title: "Evangelium",
    text: "Lidé povstanou. Kněz čte z evangelia podle Matouše, Marka, Lukáše nebo Jana. Po čtení se usedá.",
    note: "vstává se",
    tip: "Slovo evangelium pochází z řeckého euangelion = dobrá zpráva. Povstání je projevem úcty k Ježíšovým slovům.",
  },
  {
    num: "08",
    title: "Kázání",
    text: "Výklad právě přečteného textu — co říká do našeho života dnes. Konkrétní, osobní, srozumitelné.",
  },
  {
    num: "09",
    title: "Vyznání víry",
    text: "Společná odpověď — vyjadřuje, v koho věříme a ke komu upínáme svou naději.",
    tip: "CČSH má vlastní Velké vyznání víry, které formuloval Karel Farský. Příležitostně se používá i Apoštolské nebo Nicejsko-cařihradské vyznání.",
  },
  {
    num: "10",
    title: "Obětování a chvalozpěv",
    text: 'Kněz připraví chléb a víno. Připomínáme si oběť Ježíše Krista za nás. Vděčnost vyjadřujeme chvalozpěvem „Svatý, svatý, svatý".',
    tip: "Kněz smísí víno s vodou — tento zvyk sahá až k nejstarším křesťanským obcím. Už ve 2. století se při bohoslužbě používal chléb a kalich vína smíšeného s vodou.",
  },
  {
    num: "11",
    title: "Eucharistická modlitba",
    text: "Lidé povstanou. Velká modlitba díků za zjevení Boží milosti. Následuje zpřítomnění poslední večeře Ježíše s učedníky — kněz pozvedá hostii a kalich s vínem. Po zpřítomnění se usedá.",
    note: "vstává se",
    tip: 'Eucharistie = řecky eu (dobře) + chairein (radovat se). Doslova „díkůvzdání". Jde o zpřítomnění — ne opakování — poslední večeře.',
  },
  {
    num: "12",
    title: "Otčenáš",
    text: "Lidé povstanou. Modlitba, kterou naučil své učedníky Ježíš Kristus. Sjednocuje křesťany po celém světě.",
    note: "vstává se",
    tip: 'Otčenáš = Modlitba Páně. Začíná slovy „Otče náš, který jsi v nebesích…" Text najdete ve zpěvníku.',
  },
  {
    num: "13",
    title: "Přijímání",
    text: "K přijímání může přistoupit každý pokřtěný křesťan, bez rozdílu církevní příslušnosti. Kněz podává hostii (chléb) namočenou ve víně. Děti a ti, kdo nechtějí přistoupit, dostanou požehnání — křížek na čelo.",
    note: "otevřené všem pokřtěným",
    tip: 'Přijímání „pod obojí" (chléb i víno) je základní znak husitské tradice — od dob Jana Husa. Hostie je nekvašený chléb.',
  },
  {
    num: "14",
    title: "Požehnání",
    text: "Lidé povstanou. Závěrečné požehnání do každodenního života — s přáním Boží ochrany a pomoci. Po požehnání se usedá.",
    note: "vstává se",
  },
  {
    num: "15",
    title: "Oznámení",
    text: "Co se děje ve sboru v nejbližší době. Se závěrečnou písní kněz odchází, lidé povstanou na znamení pozdravu. Součástí bohoslužby je i sbírka na provoz kostela nebo na charitativní účely.",
  },
];

export default function PruvodcePage() {
  return (
    <main className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="px-5 pt-12 pb-8 max-w-[540px] mx-auto">
        <Link
          href="/"
          className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brick no-underline hover:text-brick-light transition-colors"
        >
          ← Zpět na hlavní stránku
        </Link>

        <h1 className="font-lora text-[clamp(28px,5vw,40px)] font-bold leading-[1.2] mt-8 mb-4">
          Průvodce
          <br />
          <em className="italic text-brick">bohoslužbou.</em>
        </h1>

        <p className="text-[15px] font-light leading-[1.8] text-text-muted mb-6">
          Krok za krokem celou bohoslužbou Církve československé husitské.
          Otevřete si na mobilu přímo v lavici.
        </p>

        <div className="bg-sage-pale border border-sage/15 rounded-xl px-5 py-4">
          <p className="text-[13px] leading-[1.75] text-sage font-medium">
            💡 Zpěvník máte k dispozici v lavici. V zadní části je text celé
            bohoslužby s odpověďmi. Nemusíte se aktivně zapojovat — stačí být.
          </p>
        </div>
      </header>

      {/* Steps */}
      <section className="px-5 pb-8 max-w-[540px] mx-auto">
        <div className="space-y-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-border rounded-xl px-5 py-5"
            >
              <div className="flex items-start gap-4">
                <span className="font-cormorant text-[32px] font-semibold text-brick/20 leading-none shrink-0 mt-0.5">
                  {step.num}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="font-lora text-[15px] font-semibold">
                      {step.title}
                    </h3>
                    {step.note && (
                      <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-sage bg-sage-pale px-2 py-0.5 rounded-full shrink-0">
                        {step.note}
                      </span>
                    )}
                  </div>
                  <p className="text-[13px] font-light leading-[1.75] text-text-muted">
                    {step.text}
                  </p>
                  {step.tip && (
                    <div className="mt-3 bg-brick-pale/50 rounded-lg px-3.5 py-2.5 flex items-start gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-brick/40 shrink-0 mt-0.5">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                      <p className="text-[12px] leading-[1.7] text-text-muted/80 italic">
                        {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 pt-4 pb-12 max-w-[540px] mx-auto text-center space-y-5">
        <div className="border-t border-border pt-8">
          <a
            href="https://www.ccsh.cz/mapka.html"
            className="inline-block bg-brick text-white font-jakarta text-sm font-semibold px-7 py-3.5 rounded-md no-underline hover:bg-brick-light hover:-translate-y-px transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Najít sbor blízko vás
          </a>
        </div>

        <p className="text-[11px] text-text-muted/50 leading-relaxed">
          Podle letáku{" "}
          <em>Poprvé na bohoslužbě</em> (pastorační komise ÚR CČSH)
          <br />
          a{" "}
          <em>Liturgie CČSH podle patriarchy Karla Farského</em>
        </p>

        <Link
          href="/"
          className="text-[12px] text-brick font-medium no-underline hover:text-brick-light transition-colors"
        >
          poprveuhusitu.cz
        </Link>
      </footer>
    </main>
  );
}
