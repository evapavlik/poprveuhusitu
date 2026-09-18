/* Dočasná porovnávací stránka variant CTA v hero. Před nasazením smazat. */
import type { ReactNode } from "react";

const odlisnosti = [
  { co: "Farářky i faráři", detail: "Ženy u nás slouží od roku 1947 – dávno před většinou církví v Evropě." },
  { co: "Bohoslužba česky", detail: "Od roku 1920. Kázání je rozhovor o dnešku, ne výčet dogmat." },
  { co: "Přijímání napříč církvemi", detail: "Chléb a víno může přijmout každý pokřtěný křesťan, bez ohledu na církev." },
  { co: "Víra a věda se nevylučují", detail: "Pochybnosti nepotlačujeme. Tak to Farský napsal už ve dvacátých letech." },
];

function Tlacitko({ children }: { children: ReactNode }) {
  return (
    <span className="bg-brick text-white font-jakarta text-sm font-semibold px-7 py-3.5 rounded-md inline-block">
      {children}
    </span>
  );
}

function Odkaz({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sage">
      {children}
      <span aria-hidden="true">→</span>
    </span>
  );
}

function Hero({ znacka, popis, akce }: { znacka: string; popis: string; akce: ReactNode }) {
  return (
    <>
      <div className="bg-text text-white px-4 py-2 flex items-baseline gap-3">
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase">{znacka}</p>
        <p className="text-[11px] font-light text-white/70">{popis}</p>
      </div>
      <div className="bg-white border-b border-border">
        <div className="max-w-[1180px] mx-auto px-12 h-[68px] flex items-center justify-between">
          <span className="font-lora text-[15px] font-semibold text-brick">Poprvé u husitů</span>
          <div className="flex gap-8 text-[13px] font-medium text-text-muted">
            <span>Kdo jsme</span><span>Příběh vzniku</span><span>Na bohoslužbě</span><span>Proč dnes</span><span>Průvodce bohoslužbou</span>
          </div>
          <span className="bg-brick text-white text-[13px] font-semibold px-5 py-2.5 rounded-md">Najít sbor</span>
        </div>
      </div>
      <section className="px-12 pt-14 pb-16 bg-off-white">
        <div className="max-w-[1180px] mx-auto grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <p className="font-lora text-[17px] font-semibold text-text leading-tight">Církev československá husitská</p>
              <p className="text-[13px] font-light text-text-muted mt-1.5">založena 11. ledna 1920 v chrámu sv. Mikuláše v Praze</p>
            </div>
            <h1 className="font-lora text-[56px] font-bold leading-[1.08] tracking-tight mb-6">
              Víra, která<br />se <em className="italic text-brick">nebojí</em><br />otázek.
            </h1>
            <p className="text-[17px] font-light leading-[1.75] text-text-muted max-w-[460px] mb-9">
              Jsme otevření všem – těm, kdo hledají společenství, kdo si kladou otázky, i těm, kdo si zatím nejsou jistí vůbec ničím.
            </p>
            {akce}
          </div>
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
        </div>
      </section>
    </>
  );
}

export default function Nahled() {
  return (
    <main>
      <Hero
        znacka="0 · stávající"
        popis="dvě tlačítka, obě jen scrollují"
        akce={
          <div className="flex gap-3 items-center">
            <Tlacitko>Poznejte nás</Tlacitko>
            <span className="text-text-muted font-jakarta text-sm font-medium px-7 py-3.5 border-[1.5px] border-border-strong rounded-md inline-block">
              Jak vypadá bohoslužba
            </span>
          </div>
        }
      />
      <Hero
        znacka="T1 · jen textový odkaz"
        popis="nejlehčí, červená zbude na lištu"
        akce={<Odkaz>Jak vypadá bohoslužba</Odkaz>}
      />
      <Hero
        znacka="T2 · jedno tlačítko + odkaz"
        popis="akce zůstane, symetrická dvojice zmizí"
        akce={
          <div className="flex gap-6 items-center flex-wrap">
            <Tlacitko>Jak vypadá bohoslužba</Tlacitko>
            <Odkaz>Kdo jsme</Odkaz>
          </div>
        }
      />
      <Hero
        znacka="T3 · tlačítko vede k akci"
        popis="nejakčnější, ale tlačí na návštěvu"
        akce={
          <div className="flex gap-6 items-center flex-wrap">
            <Tlacitko>Najít sbor blízko vás</Tlacitko>
            <Odkaz>Jak vypadá bohoslužba</Odkaz>
          </div>
        }
      />
    </main>
  );
}
