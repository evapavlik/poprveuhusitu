/* Dočasná stránka jen pro porovnání variant hero. Před commitem smazat. */
const odlisnosti = [
  { co: "Farářky i faráři", detail: "Ženy u nás slouží od roku 1947 – dávno před většinou církví v Evropě." },
  { co: "Bohoslužba česky", detail: "Od roku 1920. Kázání je rozhovor o dnešku, ne výčet dogmat." },
  { co: "Přijímání napříč církvemi", detail: "Chléb a víno může přijmout každý pokřtěný křesťan, bez ohledu na církev." },
  { co: "Víra a věda se nevylučují", detail: "Pochybnosti nepotlačujeme. Tak to Farský napsal už ve dvacátých letech." },
];

function Sloupec() {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brick mb-6">Čím se lišíme</p>
      <ul className="list-none space-y-6">
        {odlisnosti.map((o) => (
          <li key={o.co} className="border-l-2 border-brick/25 pl-5">
            <p className="font-lora text-[19px] font-semibold leading-[1.3] mb-1.5">{o.co}</p>
            <p className="text-[15px] font-light leading-[1.7] text-text-muted">{o.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tlacitka() {
  return (
    <div className="flex gap-3 flex-wrap items-center">
      <a href="#" className="bg-brick text-white font-jakarta text-sm font-semibold px-7 py-3.5 rounded-md no-underline inline-block">Poznejte nás</a>
      <a href="#" className="bg-transparent text-text-muted font-jakarta text-sm font-medium px-7 py-3.5 border-[1.5px] border-border-strong rounded-md no-underline inline-block">Jak vypadá bohoslužba</a>
    </div>
  );
}

function Nadpis() {
  return (
    <h1 className="font-lora text-[clamp(40px,5.5vw,68px)] font-bold leading-[1.08] tracking-tight mb-6">
      Víra, která<br />se <em className="italic text-brick">nebojí</em><br />otázek.
    </h1>
  );
}

function Stitek({ text }: { text: string }) {
  return (
    <div className="inline-block bg-white border border-border-strong text-[11px] font-semibold tracking-[0.1em] uppercase text-text-light px-3 py-1 rounded absolute top-6 left-6">
      {text}
    </div>
  );
}

export default function Nahled() {
  return (
    <main className="pt-4">
      {/* ---------- STÁVAJÍCÍ ---------- */}
      <section className="relative px-6 md:px-12 pt-24 pb-20 bg-off-white border-b-4 border-text/10">
        <Stitek text="0 · stávající" />
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 bg-brick-pale text-brick text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brick shrink-0" />
              Církev československá husitská
            </div>
            <Nadpis />
            <p className="text-[17px] font-light leading-[1.75] text-text-muted max-w-[460px] mb-9">
              Husitská církev je otevřená všem – těm, kdo hledají společenství, kdo si kladou otázky, i těm, kdo si zatím nejsou jistí vůbec ničím.
            </p>
            <Tlacitka />
          </div>
          <Sloupec />
        </div>
      </section>

      {/* ---------- A ---------- */}
      <section className="relative px-6 md:px-12 pt-24 pb-20 bg-off-white border-b-4 border-text/10">
        <Stitek text="A · bez štítku" />
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          <div>
            <Nadpis />
            <p className="text-[17px] font-light leading-[1.75] text-text-muted max-w-[470px] mb-9">
              <strong className="font-semibold text-text">Církev československá husitská</strong> je
              otevřená všem – těm, kdo hledají společenství, kdo si kladou otázky, i těm, kdo si zatím
              nejsou jistí vůbec ničím.
            </p>
            <Tlacitka />
          </div>
          <Sloupec />
        </div>
      </section>

      {/* ---------- B ---------- */}
      <section className="relative px-6 md:px-12 pt-24 pb-20 bg-off-white border-b-4 border-text/10">
        <Stitek text="B · linka jako ve zbytku stránky" />
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-brick mb-7 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
              Církev československá husitská
            </div>
            <Nadpis />
            <p className="text-[17px] font-light leading-[1.75] text-text-muted max-w-[460px] mb-9">
              Husitská církev je otevřená všem – těm, kdo hledají společenství, kdo si kladou otázky, i těm, kdo si zatím nejsou jistí vůbec ničím.
            </p>
            <Tlacitka />
          </div>
          <Sloupec />
        </div>
      </section>

      {/* ---------- C ---------- */}
      <section className="relative px-6 md:px-12 pt-24 pb-20 bg-off-white border-b-4 border-text/10">
        <Stitek text="C · datace" />
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
          <div>
            <div className="mb-8">
              <p className="font-lora text-[17px] font-semibold text-brick leading-tight">
                Církev československá husitská
              </p>
              <p className="text-[13px] font-light text-text-muted mt-1.5 tracking-[0.02em]">
                založena 11. ledna 1920 v chrámu sv. Mikuláše v Praze
              </p>
            </div>
            <Nadpis />
            <p className="text-[17px] font-light leading-[1.75] text-text-muted max-w-[460px] mb-9">
              Husitská církev je otevřená všem – těm, kdo hledají společenství, kdo si kladou otázky, i těm, kdo si zatím nejsou jistí vůbec ničím.
            </p>
            <Tlacitka />
          </div>
          <Sloupec />
        </div>
      </section>
    </main>
  );
}
