const items = [
  "Otevřenost ·",
  "Přijímání pro všechny pokřtěné ·",
  "Faráři i farářky ·",
  "Svoboda svědomí ·",
];

export default function MarqueeBand() {
  return (
    <div className="bg-brick overflow-hidden">
      <div
        className="marquee flex whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={`a-${i}`}
            className="inline-flex items-center gap-5 px-10 py-[18px] shrink-0 text-xs font-semibold tracking-[0.15em] uppercase text-white/85"
          >
            {item}
          </span>
        ))}
        {/* Druhá sada existuje jen kvůli plynulé smyčce — čtečka ji číst nemá. */}
        {items.map((item, i) => (
          <span
            key={`b-${i}`}
            aria-hidden="true"
            className="inline-flex items-center gap-5 px-10 py-[18px] shrink-0 text-xs font-semibold tracking-[0.15em] uppercase text-white/85"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
