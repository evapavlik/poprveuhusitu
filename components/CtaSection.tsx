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
        Nenabízíme odpovědi na vše. Nabízíme společenství lidí, kteří hledají poctivě — a
        víru, která to unese.
      </p>
      <a
        href="https://www.ccsh.cz/mapka.html"
        className="bg-brick text-white font-jakarta text-sm font-semibold px-8 py-4 rounded-md no-underline inline-block hover:bg-brick-light hover:-translate-y-px transition-all duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        Najít sbor blízko vás
      </a>
    </section>
  );
}
