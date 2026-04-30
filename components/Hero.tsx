export default function Hero() {
  const seekerQuestions = [
    "Musím věřit v Boha, abych mohl/a přijít?",
    "Co si mám obléct?",
    "Mohu přijít s dětmi?",
    "Musím se nějak zapojovat?",
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 md:pt-[100px] md:pb-20 bg-off-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -right-[60px] -top-[60px] w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(160,65,42,0.09)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -left-[100px] -bottom-[80px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(74,124,111,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative grid lg:grid-cols-[minmax(0,1fr)_360px] gap-12 lg:gap-16 items-center">
        <div className="max-w-[760px]">
          <div className="inline-flex items-center gap-2.5 bg-brick-pale text-brick text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-9">
            <span className="w-1.5 h-1.5 rounded-full bg-brick shrink-0" />
            Církev československá husitská
          </div>

          <h1 className="font-lora text-[clamp(44px,6.5vw,84px)] font-bold leading-[1.08] tracking-tight mb-7">
            Víra, která
            <br />
            se <em className="italic text-brick">nebojí</em>
            <br />
            otázek.
          </h1>

          <p className="text-lg font-light leading-[1.75] text-text-muted max-w-[520px] mb-13">
            Husitská církev je otevřená všem — těm, kdo hledají
            společenství, kdo si kladou otázky, i těm, kdo si zatím nejsou
            jistí vůbec ničím.
          </p>

          <div className="flex gap-4 flex-wrap items-center">
            <a
              href="#co-jsme"
              className="bg-brick text-white font-jakarta text-sm font-semibold px-8 py-4 rounded-md no-underline inline-block hover:bg-brick-light hover:-translate-y-px transition-all duration-200"
            >
              Poznejte nás
            </a>
            <a
              href="#bohosluzba"
              className="bg-transparent text-text-muted font-jakarta text-sm font-medium px-8 py-4 border-[1.5px] border-border-strong rounded-md no-underline inline-block hover:border-brick hover:text-brick transition-all duration-200"
            >
              Jak vypadá bohoslužba
            </a>
          </div>
        </div>

        <aside className="hidden lg:flex lg:flex-col bg-cream/80 backdrop-blur-sm border border-border rounded-2xl p-8 self-center">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-6 before:content-[''] before:w-5 before:h-0.5 before:bg-sage before:rounded-sm">
            Co se ptají hledající
          </div>
          <ul className="flex flex-col gap-4 mb-8">
            {seekerQuestions.map((q, i) => (
              <li
                key={i}
                className="font-lora text-[17px] leading-[1.4] text-text"
              >
                <span className="text-sage mr-2">—</span>
                {q}
              </li>
            ))}
          </ul>
          <a
            href="#faq"
            className="text-[13px] font-jakarta font-semibold tracking-wide text-brick hover:text-brick-light no-underline inline-flex items-center gap-2 group self-start"
          >
            Odpovědi níže
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}
