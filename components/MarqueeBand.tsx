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
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-10 py-[18px] shrink-0 text-xs font-semibold tracking-[0.15em] uppercase text-white/85"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
