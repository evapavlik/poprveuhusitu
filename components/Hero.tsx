export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 md:pt-[100px] md:pb-20 bg-off-white relative overflow-hidden">
      {/* Atmospheric gradients — softened, spread across full width */}
      <div className="absolute -right-[140px] -top-[140px] w-[760px] h-[760px] rounded-full bg-[radial-gradient(circle,rgba(160,65,42,0.10)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute -left-[160px] -bottom-[120px] w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,rgba(74,124,111,0.10)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute right-[15%] bottom-[20%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(74,124,111,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1100px] relative">
        <div className="inline-flex items-center gap-2.5 bg-brick-pale text-brick text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-brick shrink-0" />
          Církev československá husitská
        </div>

        <h1 className="font-lora text-[clamp(48px,9vw,124px)] font-bold leading-[1.04] tracking-tight mb-10">
          Víra, která
          <br />
          se <em className="italic text-brick">nebojí</em>
          <br />
          otázek.
        </h1>

        <div className="flex items-stretch gap-6 mb-13 max-w-[680px]">
          <div className="hidden md:block w-[2px] flex-shrink-0 bg-sage/35 rounded-full" />
          <p className="text-lg font-light leading-[1.75] text-text-muted">
            Husitská církev je otevřená všem — těm, kdo hledají
            společenství, kdo si kladou otázky, i těm, kdo si zatím nejsou
            jistí vůbec ničím.
          </p>
        </div>

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
