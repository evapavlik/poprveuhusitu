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
    <section className="px-6 md:px-12 pt-28 pb-20 md:pt-32 md:pb-24 bg-off-white">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2.5 bg-brick-pale text-brick text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brick shrink-0" />
            Církev československá husitská
          </div>

          <h1 className="font-lora text-[clamp(40px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6">
            Víra, která
            <br />
            se <em className="italic text-brick">nebojí</em>
            <br />
            otázek.
          </h1>

          <p className="text-[17px] font-light leading-[1.75] text-text-muted max-w-[460px] mb-9">
            Husitská církev je otevřená všem – těm, kdo hledají společenství, kdo
            si kladou otázky, i těm, kdo si zatím nejsou jistí vůbec ničím.
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
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brick mb-6">
            Čím se lišíme
          </p>
          <ul className="list-none space-y-5">
            {odlisnosti.map((o) => (
              <li key={o.co} className="border-l-2 border-brick/25 pl-5">
                <p className="font-lora text-[17px] font-semibold leading-[1.3] mb-1">
                  {o.co}
                </p>
                <p className="text-[13px] font-light leading-[1.65] text-text-muted">
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
