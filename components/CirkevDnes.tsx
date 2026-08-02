"use client";

import { useEffect, useState } from "react";
import type { Sbor } from "@/lib/sbory";

/**
 * Fakta o dnešku pro sekci „Kdo jsme“.
 *
 * Počet sborů se čte z /api/sbory, takže se nikdy nerozejde se skutečností
 * a nikdo ho nemusí hlídat. Když se načtení nepovede, dlaždice se prostě
 * nezobrazí a zbydou ostatní tři údaje.
 */
const fakta = [
  { hodnota: "5", popis: "diecézí v Česku, šestá na Slovensku" },
  { hodnota: "1920", popis: "vyhlášena 11. ledna v chrámu sv. Mikuláše" },
  { hodnota: "Tomáš Butta", popis: "patriarcha, v čele církve od roku 2006" },
];

export default function CirkevDnes() {
  const [pocetSboru, setPocetSboru] = useState<number | null>(null);

  useEffect(() => {
    let zruseno = false;
    fetch("/api/sbory")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { sbory?: Sbor[] } | null) => {
        if (!zruseno && d?.sbory?.length) setPocetSboru(d.sbory.length);
      })
      .catch(() => {});
    return () => {
      zruseno = true;
    };
  }, []);

  const polozky = [
    ...(pocetSboru
      ? [{ hodnota: String(pocetSboru), popis: "sborů po celé republice" }]
      : []),
    ...fakta,
  ];

  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brick mb-6">
        Církev dnes
      </p>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {polozky.map((p) => (
          <div key={p.popis} className="border-t border-border pt-4">
            <dt className="font-lora text-[26px] font-bold leading-none mb-2 text-brick">
              {p.hodnota}
            </dt>
            <dd className="text-[13px] font-light leading-[1.6] text-text-muted">
              {p.popis}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
