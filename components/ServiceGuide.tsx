import FadeUp from "./FadeUp";

const steps = [
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
    text: "Přijímání pod obojí — chléb i víno. Může přistoupit každý pokřtěný křesťan, bez ohledu na církev. Ostatní dostanou požehnání.",
  },
  {
    num: "04",
    title: "Závěr a oznámení",
    text: "Závěrečné požehnání a oznámení o dění v obci. Pak je prostor na rozhovor. Komunita začíná po bohoslužbě.",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </section>
  );
}
