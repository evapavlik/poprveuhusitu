import NearestCongregations from "./NearestCongregations";

export default function CtaSection() {
  return (
    <section
      className="bg-brick-pale py-[100px] px-6 md:px-12 text-center border-t border-brick/12"
      id="kontakt"
    >
      <h2 className="font-lora text-[clamp(32px,4vw,54px)] font-bold leading-[1.15] mb-5">
        Přijďte.
        <br />
        <em className="italic text-brick">Otázky jsou vítány.</em>
      </h2>
      <p className="text-[17px] font-light text-text-muted max-w-[460px] mx-auto mb-11 leading-[1.75]">
        Nenabízíme odpovědi na vše. Nabízíme společenství lidí, kteří hledají poctivě – a
        víru, která to unese.
      </p>

      <NearestCongregations />

      {/* Tišší cesta pro toho, kdo se zatím nechce ukázat mezi lidmi. */}
      <div className="max-w-[460px] mx-auto mt-10 pt-8 border-t border-brick/12">
        <p className="text-[15px] font-light leading-[1.8] text-text-muted">
          Nechcete přijít rovnou?{" "}
          <a
            href="mailto:eva.pavlik+husiti@gmail.com?subject=Dotaz%20z%20webu%20Poprv%C3%A9%20u%20husit%C5%AF"
            className="text-brick font-medium underline underline-offset-2 hover:text-brick-light transition-colors"
          >
            Napište mi
          </a>{" "}
          a zeptejte se na cokoli. Nejsem farářka – jsem člověk, který tenhle web
          udělal, protože sám hledal.
        </p>
      </div>
    </section>
  );
}
