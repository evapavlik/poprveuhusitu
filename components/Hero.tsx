export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 md:pt-[100px] md:pb-20 bg-off-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -right-[60px] -top-[60px] w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(160,65,42,0.09)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -left-[100px] -bottom-[80px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(74,124,111,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[760px] relative">
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
          Přicházíme z tradice Jana Husa a české reformace. Jsme otevřená, moderní církev
          — pro ty, kdo hledají, pochybují i věří.
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
    </section>
  );
}
