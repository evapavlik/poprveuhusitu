"use client";

import { useRef, useState } from "react";
import { vzdalenostKm, type Sbor } from "@/lib/sbory";
import { FindCongregationLink, FindCongregationSteps } from "./FindCongregation";

type Nalezeny = Sbor & { km: number };
type Stav =
  | { typ: "vychozi" }
  | { typ: "hledam" }
  | { typ: "hotovo"; odkud: string; sbory: Nalezeny[] }
  | { typ: "chyba"; zprava: string };

const POCET = 3;

function formatVzdalenost(km: number): string {
  // Pod 100 m by zaokrouhlování na desítky metrů dávalo „0 m“.
  if (km < 0.1) return "méně než 100 m";
  if (km < 1) return `${Math.round(km * 100) * 10} m`;
  if (km < 10) return `${km.toFixed(1).replace(".", ",")} km`;
  return `${Math.round(km)} km`;
}

export default function NearestCongregations() {
  const [stav, setStav] = useState<Stav>({ typ: "vychozi" });
  const [mesto, setMesto] = useState("");
  const sboryCache = useRef<Sbor[] | null>(null);

  // Seznam se stahuje až při první interakci — stránka je jinak čistě textová
  // a nemá důvod tahat 280 záznamů někomu, kdo si jen čte.
  async function ziskejSbory(): Promise<Sbor[]> {
    if (sboryCache.current) return sboryCache.current;
    const res = await fetch("/api/sbory");
    if (!res.ok) throw new Error("seznam");
    const { sbory } = (await res.json()) as { sbory: Sbor[] };
    if (!sbory?.length) throw new Error("seznam");
    sboryCache.current = sbory;
    return sbory;
  }

  async function najdi(pozice: { lat: number; lng: number }, odkud: string) {
    try {
      const sbory = await ziskejSbory();
      const nejblizsi = sbory
        .map((s) => ({ ...s, km: vzdalenostKm(pozice, s) }))
        .sort((a, b) => a.km - b.km)
        .slice(0, POCET);
      setStav({ typ: "hotovo", odkud, sbory: nejblizsi });
    } catch {
      setStav({
        typ: "chyba",
        zprava: "Seznam sborů se teď nepodařilo načíst. Zkuste to za chvíli, nebo použijte adresář níže.",
      });
    }
  }

  function pouzijPolohu() {
    if (!navigator.geolocation) {
      setStav({ typ: "chyba", zprava: "Váš prohlížeč neumí zjistit polohu. Napište prosím město." });
      return;
    }
    setStav({ typ: "hledam" });
    navigator.geolocation.getCurrentPosition(
      (p) => najdi({ lat: p.coords.latitude, lng: p.coords.longitude }, "podle vaší polohy"),
      () =>
        setStav({
          typ: "chyba",
          zprava: "Polohu se nepodařilo zjistit — možná ji máte zakázanou. Napište prosím město.",
        }),
      { timeout: 10000, maximumAge: 300000 }
    );
  }

  async function hledejMesto(e: React.FormEvent) {
    e.preventDefault();
    const dotaz = mesto.trim();
    if (dotaz.length < 2) return;

    setStav({ typ: "hledam" });
    try {
      const res = await fetch(`/api/geokod?mesto=${encodeURIComponent(dotaz)}`);
      if (res.status === 404) {
        setStav({ typ: "chyba", zprava: `Město „${dotaz}“ jsme nenašli. Zkuste ho napsat jinak.` });
        return;
      }
      if (!res.ok) throw new Error("geokod");
      const { lat, lng, nazev } = (await res.json()) as { lat: number; lng: number; nazev: string };
      // „podle města X“ drží nominativ, takže odpadá skloňování názvu.
      await najdi({ lat, lng }, `podle města ${nazev}`);
    } catch {
      setStav({
        typ: "chyba",
        zprava: "Vyhledávání se teď nepodařilo. Zkuste to za chvíli, nebo použijte adresář níže.",
      });
    }
  }

  return (
    <div className="max-w-[520px] mx-auto text-left">
      <div className="bg-white border border-border rounded-xl px-6 py-6">
        <h3 className="font-lora text-[17px] font-semibold mb-1.5">
          Kde je to k vám nejblíž?
        </h3>
        <p className="text-[13px] font-light leading-[1.7] text-text-muted mb-5">
          Najdeme tři nejbližší sbory. U každého pak uvidíte adresu, čas nedělní
          bohoslužby a telefon na faráře nebo farářku.
        </p>

        <button
          type="button"
          onClick={pouzijPolohu}
          disabled={stav.typ === "hledam"}
          className="w-full bg-brick text-white font-jakarta text-sm font-semibold px-6 py-3.5 rounded-md cursor-pointer border-none hover:bg-brick-light transition-colors duration-200 disabled:opacity-60"
        >
          {stav.typ === "hledam" ? "Hledám…" : "Použít moji polohu"}
        </button>

        <form onSubmit={hledejMesto} className="mt-4">
          <label
            htmlFor="mesto"
            className="block text-[13px] font-medium text-text-muted mb-2"
          >
            Nebo napište město
          </label>
          <div className="flex gap-2">
            <input
              id="mesto"
              type="text"
              value={mesto}
              onChange={(e) => setMesto(e.target.value)}
              placeholder="např. Kolín"
              autoComplete="address-level2"
              className="flex-1 min-w-0 border border-border-strong rounded-md px-4 py-3 text-sm bg-white focus:outline-none focus:border-brick transition-colors"
            />
            <button
              type="submit"
              disabled={stav.typ === "hledam" || mesto.trim().length < 2}
              className="shrink-0 bg-transparent text-text-muted font-jakarta text-sm font-medium px-5 py-3 border-[1.5px] border-border-strong rounded-md cursor-pointer hover:border-brick hover:text-brick transition-colors duration-200 disabled:opacity-40"
            >
              Najít
            </button>
          </div>
        </form>

        {/* Výsledky i chyby ohlašuje čtečka, aniž by se na ně muselo přejít. */}
        <div aria-live="polite">
          {stav.typ === "chyba" && (
            <p className="mt-5 text-[13px] leading-[1.7] text-brick">{stav.zprava}</p>
          )}

          {stav.typ === "hotovo" && stav.sbory.length > 0 && (
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-muted mb-4">
                Nejbližší sbory {stav.odkud}
              </p>
              <ol className="list-none space-y-3">
                {stav.sbory.map((s) => (
                  <li
                    key={s.detailUrl}
                    className="border border-border rounded-lg px-4 py-3.5"
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="font-lora text-[15px] font-semibold">
                        {s.nazev}
                      </span>
                      <span className="shrink-0 text-[12px] text-sage font-medium">
                        {formatVzdalenost(s.km)}
                      </span>
                    </div>
                    <p className="text-[13px] font-light text-text-muted leading-[1.6] mb-2.5">
                      {s.ulice}
                      {s.ulice && s.mesto ? ", " : ""}
                      {s.mesto}
                    </p>
                    <a
                      href={s.detailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brick no-underline hover:text-brick-light transition-colors"
                    >
                      Čas bohoslužby a kontakt
                      <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-[12px] font-light leading-[1.7] text-text-muted">
                Vzdálenost je vzdušnou čarou. Uvedená adresa je kontaktní —
                bohoslužba někdy bývá jinde ve městě, přesné místo i čas najdete
                po rozkliknutí. Údaje pocházejí z oficiálního adresáře CČSH.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Ruční cesta zůstává — pro toho, komu hledání nevyjde nebo mu nevěří. */}
      <details className="mt-4 group">
        <summary className="cursor-pointer text-[13px] font-medium text-text-muted hover:text-brick transition-colors list-none flex items-center gap-2">
          <span aria-hidden="true" className="text-brick transition-transform group-open:rotate-45">
            +
          </span>
          Raději si projdu celý seznam sám
        </summary>
        <FindCongregationSteps className="mt-4" />
        <div className="mt-4">
          <FindCongregationLink>Otevřít adresář sborů</FindCongregationLink>
        </div>
      </details>
    </div>
  );
}
