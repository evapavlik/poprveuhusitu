import CirkevDnes from "./CirkevDnes";
import FadeUp from "./FadeUp";


export default function WhoWeAre() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-white" id="co-jsme">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <FadeUp>
          <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
            Kdo jsme
          </div>
          <h2 className="font-lora text-[clamp(30px,3.5vw,46px)] font-bold leading-[1.2] mb-6">
            Církev, která vznikla
            <br />
            spolu s <em className="italic text-brick">první republikou.</em>
          </h2>
          <p className="text-base font-light leading-[1.85] text-text-muted mb-4">
            Církev československá husitská je křesťanská církev, vyhlášená 11. ledna 1920
            v chrámu sv. Mikuláše na Staroměstském náměstí v Praze. Hlásíme se k odkazu
            mistra Jana Husa a k tradici české reformace. Od počátku klademe důraz
            na svobodu svědomí a vědecké poznání.
          </p>
          <p className="text-base font-light leading-[1.85] text-text-muted">
            Nejsme uzavřená komunita. Sedí tu vedle sebe lidé, kteří věří,
            kteří pochybují, i ti, kdo přišli jen ze zvědavosti.
          </p>
        </FadeUp>

        <FadeUp>
          <CirkevDnes />
        </FadeUp>
      </div>
    </section>
  );
}
