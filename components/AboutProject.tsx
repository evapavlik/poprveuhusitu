import FadeUp from "./FadeUp";
import Section, { SectionLabel, NADPIS_2 } from "./Section";

export default function AboutProject() {
  return (
    <Section tone="cream" top="md" bottom="lg" divider>
      <div className="max-w-[620px]">
        <FadeUp>
          <SectionLabel>O tomto webu</SectionLabel>
        </FadeUp>
        <FadeUp>
          <h2 className={`${NADPIS_2} mb-8`}>Proč tato stránka vznikla.</h2>
        </FadeUp>
        <FadeUp>
          <div className="space-y-5 text-[17px] font-light leading-[1.8] text-text-muted">
            <p>
              Slovo <em className="italic">církev</em> nese nánosy, které mnoha
              lidem brání se vůbec podívat blíž. Často si pod ním představí
              jen katolickou církev – a tím to pro ně končí.
            </p>
            <p>
              Přitom naše husitská církev je svobodné místo k víře. Místo,
              kde je vítán opravdu každý – věřící, hledající i ten, kdo si
              zatím není jistý vůbec ničím. Místo, kde mohou sloužit ženy.
              Místo, kde se mluví česky, srozumitelně a bez okázalosti.
            </p>
            <p>
              Jenže kdo u nás nikdy nebyl, to nemá jak zjistit. Církevní weby
              mluví k těm, kdo už věří. Tato stránka se snaží mluvit k těm,
              kdo teprve zvažují, jestli se přijít podívat.
            </p>
            <p className="text-text font-normal">– Eva Pavlíková</p>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
