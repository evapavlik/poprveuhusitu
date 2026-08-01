/**
 * Sdílený odkaz a návod na hledání sboru.
 *
 * Adresář na ccsh.cz obsahuje u každého sboru adresu, čas nedělní bohoslužby
 * a telefon na faráře — jenže cesta k němu vede přes pojmy („diecéze", „vikariát"),
 * kterým člověk zvenčí nerozumí. Tenhle návod ty pojmy sundá.
 *
 * Dřív obě tlačítka mířila na ccsh.cz/mapka.html — mapa s 332 špendlíky naráz,
 * bez filtru a bez jediného času bohoslužby.
 */

export const SBORY_URL = "https://www.ccsh.cz/nabozenske-obce.html";

/** Tlačítko „Najít sbor blízko vás". */
export function FindCongregationButton({
  variant = "primary",
  children = "Najít sbor blízko vás",
}: {
  variant?: "primary" | "sage";
  children?: React.ReactNode;
}) {
  const base =
    "font-jakarta text-sm font-semibold px-8 py-4 rounded-md no-underline inline-block hover:-translate-y-px transition-all duration-200";
  const color =
    variant === "sage"
      ? "bg-sage text-white hover:bg-sage-light"
      : "bg-brick text-white hover:bg-brick-light";

  return (
    <a
      href={SBORY_URL}
      className={`${base} ${color}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

/** Tři kroky, které vysvětlí, co uživatele po kliknutí čeká. */
export function FindCongregationSteps({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`bg-white border border-border rounded-xl px-6 py-6 text-left ${className}`}
    >
      <p className="font-lora text-[15px] font-semibold mb-3">
        Jak v seznamu hledat
      </p>
      <ol className="list-none space-y-2.5 text-[13px] font-light leading-[1.75] text-text-muted">
        <li className="flex gap-3">
          <span className="text-brick font-semibold shrink-0">1.</span>
          <span>
            Otevře se seznam sborů na oficiálním webu církve. Nahoře vyberte{" "}
            <em className="italic">diecézi</em> — je to jen velká oblast podle
            nejbližšího z měst: Praha, Hradec Králové, Brno, Olomouc, Plzeň.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-brick font-semibold shrink-0">2.</span>
          <span>Klikněte na název sboru u vás.</span>
        </li>
        <li className="flex gap-3">
          <span className="text-brick font-semibold shrink-0">3.</span>
          <span>
            Na jeho stránce najdete adresu, čas nedělní bohoslužby a telefon na
            faráře nebo farářku.
          </span>
        </li>
      </ol>
    </div>
  );
}

/** Nenápadný textový odkaz do adresáře — pro sekce, kde by tlačítko rušilo. */
export function FindCongregationLink({
  children = "Najít sbor blízko vás",
  variant = "brick",
}: {
  children?: React.ReactNode;
  variant?: "brick" | "sage";
}) {
  const color =
    variant === "sage"
      ? "text-sage hover:text-sage/80"
      : "text-brick hover:text-brick-light";

  return (
    <a
      href={SBORY_URL}
      className={`inline-flex items-center gap-1.5 text-sm font-medium no-underline transition-colors ${color}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
