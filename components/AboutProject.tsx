import FadeUp from "./FadeUp";

export default function AboutProject() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-cream">
      <div className="max-w-[620px]">
        <FadeUp>
          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
            O tomto webu
          </div>
        </FadeUp>
        <FadeUp>
          <h2 className="font-lora text-[clamp(26px,3vw,36px)] font-bold leading-[1.3] mb-8">
            Proč tato stránka vznikla.
          </h2>
        </FadeUp>
        <FadeUp>
          <div className="space-y-5 text-[15px] font-light leading-[1.85] text-text-muted">
            <p>
              Slovo <em className="italic">církev</em> nese nánosy, které mnoha
              lidem brání se vůbec podívat blíž. Často si pod ním představí
              jen katolickou církev — a tím to pro ně končí.
            </p>
            <p>
              Přitom naše husitská církev je svobodné místo k víře. Místo,
              kde je vítán opravdu každý — věřící, hledající i ten, kdo si
              zatím není jistý vůbec ničím. Místo, kde mohou sloužit ženy.
              Místo, kde se mluví česky, srozumitelně a bez okázalosti.
            </p>
            <p>
              Jenže kdo u nás nikdy nebyl, to nemá jak zjistit. Církevní weby
              mluví k těm, kdo už věří. Tato stránka se snaží mluvit k těm,
              kdo teprve zvažují, jestli se přijít podívat.
            </p>
            <p className="text-text font-normal">
              — Eva Pavlíková
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
