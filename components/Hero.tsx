/**
 * Web se typicky posílá lidem, kteří o CČSH nikdy neslyšeli a nevědí, co vyznává.
 * Hero proto musí hned odpovědět „co je to za církev a čím se liší“ – ne lákat
 * na návštěvu. Ta je až na konci stránky, jako možnost.
 */
const odlisnosti = [
  {
    co: "Farářky i faráři",
    detail: "Ženy u nás slouží od roku 1947 – dávno před většinou církví v Evropě.",
  },
  {
    co: "Bohoslužba česky",
    detail: "Od roku 1920. Kázání je rozhovor o dnešku, ne výčet dogmat.",
  },
  {
    co: "Přijímání napříč církvemi",
    // Pro člověka zvenčí je „přijímání“ prázdné slovo, proto hned chléb a víno.
    detail: "Chléb a víno může přijmout každý pokřtěný křesťan, bez ohledu na církev.",
  },
  {
    co: "Víra a věda se nevylučují",
    detail: "Pochybnosti nepotlačujeme. Tak to Farský napsal už ve dvacátých letech.",
  },
];

export default function Hero() {
  return (
    <section className="px-6 md:px-12 pt-28 pb-20 md:pt-32 md:pb-28 bg-off-white">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
        <div>
          {/* Datace místo štítku s tečkou. Pilulka s prostrkanými verzálkami je
              podpis šablony a neříkala nic, co není o kus výš v navigaci.
              Datum a místo založení odpovídá na otázku, kterou má návštěvník
              hned po „co to je za církev".

              Tmavě, ne červeně: na mobilu stojí datace přímo pod červeným logem
              v navigaci a nad červenou kurzívou v nadpisu. Tři červené prvky nad
              sebou se přebíjely. Červená v nadpisu nese sdělení, tohle je fakt. */}
          <div className="mb-8">
            <p className="font-lora text-[17px] font-semibold text-text leading-tight">
              Církev československá husitská
            </p>
            <p className="text-[13px] font-light text-text-muted mt-1.5 tracking-[0.02em]">
              založena 11. ledna 1920 v chrámu sv. Mikuláše v Praze
            </p>
          </div>

          <h1 className="font-lora text-[clamp(40px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6">
            Víra, která
            <br />
            se <em className="italic text-brick">nebojí</em>
            <br />
            otázek.
          </h1>

          <p className="text-[17px] font-light leading-[1.75] text-text-muted max-w-[460px] mb-9">
            Jsme otevření všem – těm, kdo hledají společenství, kdo si kladou
            otázky, i těm, kdo si zatím nejsou jistí vůbec ničím.
          </p>

          <div className="flex gap-3 flex-wrap items-center">
            <a
              href="#co-jsme"
              className="bg-brick text-white font-jakarta text-sm font-semibold px-7 py-3.5 rounded-md no-underline inline-block hover:bg-brick-light hover:-translate-y-px transition-all duration-200"
            >
              Poznejte nás
            </a>
            <a
              href="#bohosluzba"
              className="bg-transparent text-text-muted font-jakarta text-sm font-medium px-7 py-3.5 border-[1.5px] border-border-strong rounded-md no-underline inline-block hover:border-brick hover:text-brick transition-all duration-200"
            >
              Jak vypadá bohoslužba
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brick mb-6">
            Čím se lišíme
          </p>
          <ul className="list-none space-y-6">
            {odlisnosti.map((o) => (
              <li key={o.co} className="border-l-2 border-brick/25 pl-5">
                <p className="font-lora text-[19px] font-semibold leading-[1.3] mb-1.5">
                  {o.co}
                </p>
                <p className="text-[15px] font-light leading-[1.7] text-text-muted">
                  {o.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
