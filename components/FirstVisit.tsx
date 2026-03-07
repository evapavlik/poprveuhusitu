import FadeUp from "./FadeUp";

const icons = {
  candle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2c-1 3-3 4-3 7a3 3 0 0 0 6 0c0-3-2-4-3-7Z" />
      <rect x="10" y="12" width="4" height="10" rx="1" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
    </svg>
  ),
  bread: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M3 12h18" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
};

const cards = [
  {
    icon: icons.candle,
    title: "Neformální atmosféra",
    text: "Nemusíte nic umět, nic znát. Zpěvník je k dispozici. Bohoslužba má svůj řád, ale nikdy není strojená — je to setkání, ne výkon.",
  },
  {
    icon: icons.book,
    title: "Kázání v živém jazyce",
    text: "Kázání není přednáška z minulého století. Je to rozhovor textu Bible s tím, co prožíváme dnes. Konkrétní, osobní, hledající.",
  },
  {
    icon: icons.bread,
    title: "Přijímání otevřené všem",
    text: "Ke stolu Páně může přistoupit každý pokřtěný křesťan, bez ohledu na církev. Děti dostávají požehnání.",
  },
  {
    icon: icons.heart,
    title: "Nemusíte se aktivně zapojovat",
    text: "Stačí přijít, sednout, být. Nechte se oslovit. Bohoslužba je tu pro vás — ne vy pro ni.",
  },
];

export default function FirstVisit() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-cream" id="bohosluzba">
      <FadeUp>
        <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
          Na bohoslužbě
        </div>
      </FadeUp>
      <FadeUp>
        <h2 className="font-lora text-[clamp(30px,3.5vw,46px)] font-bold leading-[1.2] max-w-[560px] mb-14">
          Co vás čeká,
          <br />
          když přijdete <em className="italic text-brick">poprvé.</em>
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, i) => (
          <FadeUp key={card.title} delay={i * 70}>
            <div className="bg-white border border-border rounded-xl px-7 py-9 hover:shadow-[0_8px_30px_rgba(160,65,42,0.08)] hover:-translate-y-0.5 transition-all duration-[250ms]">
              <div className="w-11 h-11 rounded-[10px] bg-brick-pale flex items-center justify-center text-brick mb-5">
                {card.icon}
              </div>
              <h3 className="font-lora text-lg font-semibold mb-2.5">{card.title}</h3>
              <p className="text-sm font-light leading-[1.8] text-text-muted">
                {card.text}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
