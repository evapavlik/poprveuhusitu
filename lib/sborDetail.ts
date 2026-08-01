/**
 * Detail jednoho sboru — čas bohoslužby a kdo ho vede.
 *
 * Skládá se ze dvou stránek na ccsh.cz:
 *   obec-detail.html?oid=N   → čas bohoslužby, jméno duchovního, odkaz na jeho záznam
 *   osoba-detail.html?oid=M  → portrét
 *
 * Načítá se jen pro sbory, které se opravdu zobrazí (tři nejbližší), ne pro
 * všech 282. Stejně jako u mapy jde o čtení cizí šablony, ne o API — proto
 * všechno vrací volitelné hodnoty a volající musí počítat s tím, že přijde
 * prázdno.
 */

const UA = "poprveuhusitu.vercel.app (kontakt: eva.pavlik+husiti@gmail.com)";

export type Duchovni = {
  jmeno: string;
  /** „farář“, „farářka“, „administrující farář“… podle toho, co je v adresáři. */
  role: string;
  fotoUrl?: string;
};

export type SborDetail = {
  bohosluzby?: string;
  duchovni?: Duchovni;
};

/** V adresáři jsou u sboru i zmocněnci a členové rady — hledáme toho, kdo slouží. */
const DUCHOVENSKA_ROLE = /fará[řr]|kazatel|jáhen|biskup/i;

function text(s: string): string {
  return s
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function parsujDetailObce(html: string): SborDetail & { osobaOid?: string } {
  const out: SborDetail & { osobaOid?: string } = {};

  // Bohoslužby</strong><br/>Pravidelné: v neděli v 9:00…</p>
  // [\s\S] místo tečky s flagem /s — ten cíl TypeScriptu v projektu nepodporuje.
  const boh = html.match(/Bohoslužby<\/strong>\s*<br\s*\/?>([\s\S]*?)(?:<\/p>|<strong)/i);
  if (boh) {
    const t = text(boh[1]).replace(/^Pravidelné:\s*/i, "");
    if (t) out.bohosluzby = t;
  }

  // Správa náboženské obce</strong><ul>…<li><a href="/osoba-detail.html?oid=259…">Jméno</a>, farář, tel.: …
  const sprava = html.match(
    /Správa náboženské obce<\/strong>([\s\S]*?)(?:<\/ul>|<\/section>)/i
  );
  if (sprava) {
    const polozky = sprava[1].matchAll(
      /<a href="\/osoba-detail\.html\?oid=(\d+)[^"]*"\s*>([\s\S]*?)<\/a>\s*,\s*([^,<]+)/gi
    );
    for (const [, osobaOid, jmenoRaw, roleRaw] of polozky) {
      const role = text(roleRaw);
      if (!DUCHOVENSKA_ROLE.test(role)) continue;
      out.duchovni = { jmeno: text(jmenoRaw), role };
      out.osobaOid = osobaOid;
      break;
    }
  }

  return out;
}

/** Portrét bývá vložený s `src` bez uvozovek, proto ta volnější podoba vzoru. */
export function parsujFotku(html: string): string | undefined {
  const m = html.match(
    /<img\s+src=["']?(https?:\/\/personal\.ccsh\.cz\/images\/pictures\/[^\s"'>]+)/i
  );
  return m?.[1];
}

async function stahni(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA },
      next: { revalidate: 604800 },
    });
    return res.ok ? await res.text() : null;
  } catch {
    return null;
  }
}

export async function nactiDetailSboru(oid: string): Promise<SborDetail> {
  const html = await stahni(`https://www.ccsh.cz/obec-detail.html?oid=${oid}&bck=1`);
  if (!html) return {};

  const { osobaOid, ...detail } = parsujDetailObce(html);
  if (!detail.duchovni || !osobaOid) return detail;

  const osoba = await stahni(`https://www.ccsh.cz/osoba-detail.html?oid=${osobaOid}&bck=1`);
  if (osoba) {
    const foto = parsujFotku(osoba);
    if (foto) detail.duchovni.fotoUrl = foto;
  }

  return detail;
}
