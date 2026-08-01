import Link from "next/link";
import FadeUp from "./FadeUp";

const steps = [
  {
    num: "00",
    title: "Než to začne",
    text: "Přijďte klidně o pár minut dřív. Sednout si můžete kamkoli — žádná místa nejsou rezervovaná a zadní lavice jsou úplně v pořádku. Zpěvník bývá v lavici nebo u vchodu.",
  },
  {
    num: "01",
    title: "Příchod kněze",
    text: "Lidé povstanou na pozdrav. Nemusíte — nikdo vás nebude kárat. Kostel je místo úcty, ne disciplíny.",
  },
  {
    num: "02",
    title: "Čtení a kázání",
    text: "Čtení z Bible a evangelium. Pak kázání — srozumitelné, o tom, co žijeme dnes.",
  },
  {
    num: "03",
    title: "Přijímání",
    text: "Přijímání pod obojí — chléb i víno. Může přistoupit každý pokřtěný křesťan, bez ohledu na církev. Pokud pokřtění nejste, můžete zůstat sedět, nebo přijít pro požehnání.",
  },
  {
    num: "04",
    title: "Závěr a oznámení",
    text: "Závěrečné požehnání a oznámení o dění ve sboru. Pak je prostor na rozhovor. Komunita začíná po bohoslužbě.",
  },
];

export default function ServiceGuide() {
  return (
    <section className="py-[100px] px-6 md:px-12 bg-off-white" id="pruvodce">
      <FadeUp>
        <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-5 before:content-[''] before:w-5 before:h-0.5 before:bg-brick before:rounded-sm">
          Průvodce první návštěvou
        </div>
      </FadeUp>
      <FadeUp>
        <h2 className="font-lora text-[clamp(30px,3.5vw,46px)] font-bold mb-3">
          Jak to chodí
          <br />
          na bohoslužbě.
        </h2>
      </FadeUp>
      <FadeUp>
        <p className="text-base font-light text-text-muted max-w-[520px] leading-[1.75] mb-13">
          Nemusíte nic vědět předem. Ale pokud chcete vědět, co vás čeká — tady je to
          jednoduše.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step, i) => (
          <FadeUp key={step.num} delay={i * 70}>
            <div className="bg-white border border-border rounded-xl px-6 py-8">
              <div className="font-cormorant text-[52px] font-semibold text-brick-pale leading-none mb-5">
                {step.num}
              </div>
              <h4 className="font-lora text-[17px] font-semibold mb-2">{step.title}</h4>
              <p className="text-[13px] font-light leading-[1.75] text-text-muted">
                {step.text}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <div className="mt-10 bg-white border border-brick/15 rounded-xl px-7 py-8 max-w-[620px]">
          <h3 className="font-lora text-lg font-semibold mb-2.5">
            Vezměte si průvodce s sebou
          </h3>
          <p className="text-sm font-light leading-[1.8] text-text-muted mb-6">
            Celá bohoslužba krok za krokem — u každého kroku je napsané, co se
            právě děje a kdy se vstává. Otevřete si ji v mobilu přímo v lavici.
            Nikdo si toho nevšimne.
          </p>
          <Link
            href="/pruvodce"
            className="bg-brick text-white font-jakarta text-sm font-semibold px-7 py-3.5 rounded-md no-underline inline-block hover:bg-brick-light hover:-translate-y-px transition-all duration-200"
          >
            Otevřít průvodce bohoslužbou
          </Link>
        </div>
      </FadeUp>

      <FadeUp>
        <div className="mt-6">
          <Link
            href="/otcenas"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-sage no-underline hover:text-sage/80 transition-colors"
          >
            Výklad Otčenáše — podle patriarchy Kováře
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
