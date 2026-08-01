/**
 * Seznam sborů se čte živě z mapy na ccsh.cz, ne z kopie v repozitáři.
 * Když církev sbor přidá nebo přestěhuje, projeví se to sem samo.
 *
 * Data jsou v mapce natvrdo v inline skriptu ve tvaru:
 *   L.marker([50.47, 14.93], ).addTo(map).bindPopup("<strong><a href='/obec-detail.html?oid=149'
 *   target=_blank>NO Bakov nad Jizerou</a></strong><br/>ul. 5.&nbsp;května 513<br/>Bakov nad Jizerou")
 *
 * Není to API — je to čtení cizí šablony. Když ji CČSH změní, parsování přestane
 * dávat výsledky; proto se všude počítá s tím, že seznam může přijít prázdný,
 * a stránka v tom případě spadne zpět na ruční návod do adresáře.
 */

export type Sbor = {
  /** Název bez prefixu „NO “ (= náboženská obec). */
  nazev: string;
  ulice: string;
  mesto: string;
  lat: number;
  lng: number;
  /** Odkaz na detail sboru, kde je čas bohoslužby a telefon na faráře. */
  detailUrl: string;
};

const MAPA_URL = "https://www.ccsh.cz/mapka.html";

/**
 * Mapa obsahuje i diakonie, hospice, církevní školy a dětské domovy — dohromady
 * 50 z 332 značek. Ty na bohoslužbu neposílají, takže by je nováček dostat neměl.
 * Náboženské obce jsou v datech důsledně označené prefixem „NO “.
 */
const PREFIX_OBCE = "NO ";

const MARKER = new RegExp(
  String.raw`L\.marker\(\[\s*([-\d.]+)\s*,\s*([-\d.]+)\s*\][^)]*\)` +
    String.raw`\.addTo\(map\)\.bindPopup\("(.*?)"\)\.addTo\(map\);`,
  "g"
);

function odstranHtml(s: string): string {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/\\'/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function parsujSbory(html: string): Sbor[] {
  const sbory: Sbor[] = [];

  for (const [, lat, lng, popup] of html.matchAll(MARKER)) {
    const nazev = odstranHtml(popup.match(/>([^<]+)<\/a>/)?.[1] ?? "");
    if (!nazev.startsWith(PREFIX_OBCE)) continue;

    const oid = popup.match(/oid=(\d+)/)?.[1];
    if (!oid) continue;

    // Popup je: <strong><a …>název</a></strong><br/>ulice<br/>město
    const [, ulice = "", mesto = ""] = popup.split(/<br\s*\/?>/).map(odstranHtml);

    sbory.push({
      nazev: nazev.slice(PREFIX_OBCE.length),
      ulice,
      mesto,
      lat: Number(lat),
      lng: Number(lng),
      detailUrl: `https://www.ccsh.cz/obec-detail.html?oid=${oid}`,
    });
  }

  return sbory;
}

export async function nactiSbory(): Promise<Sbor[]> {
  try {
    const res = await fetch(MAPA_URL, {
      headers: { "User-Agent": "poprveuhusitu.vercel.app (kontakt: eva.pavlik+husiti@gmail.com)" },
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) return [];
    return parsujSbory(await res.text());
  } catch {
    return [];
  }
}

/** Vzdálenost vzdušnou čarou v km. */
export function vzdalenostKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number }
): number {
  const R = 6371;
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
