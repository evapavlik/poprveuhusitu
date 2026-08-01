/**
 * Převod názvu města na souřadnice — pro lidi, kteří nechtějí povolit polohu.
 * Používá Nominatim (OpenStreetMap). Jeho podmínky vyžadují identifikaci
 * v User-Agent a rozumnou zátěž, proto se dotaz posílá ze serveru a cachuje;
 * jména měst se navíc opakují, takže cache zabere.
 */

const NOMINATIM = "https://nominatim.openstreetmap.org/search";

export const revalidate = 2592000; // 30 dní — musí být literál, Next to čte staticky

export async function GET(request: Request) {
  const mesto = new URL(request.url).searchParams.get("mesto")?.trim();

  if (!mesto || mesto.length < 2) {
    return Response.json({ chyba: "kratky-dotaz" }, { status: 400 });
  }

  const url = new URL(NOMINATIM);
  url.searchParams.set("q", mesto);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");
  // Bez omezení na ČR a SR by „Brno“ mohlo skončit v Texasu.
  url.searchParams.set("countrycodes", "cz,sk");
  url.searchParams.set("accept-language", "cs");

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "poprveuhusitu.vercel.app (kontakt: eva.pavlik+husiti@gmail.com)",
      },
      next: { revalidate: 60 * 60 * 24 * 30 },
    });

    if (!res.ok) {
      return Response.json({ chyba: "sluzba-nedostupna" }, { status: 502 });
    }

    const [nalez] = (await res.json()) as { lat: string; lon: string; display_name: string }[];

    if (!nalez) {
      return Response.json({ chyba: "nenalezeno" }, { status: 404 });
    }

    return Response.json({
      lat: Number(nalez.lat),
      lng: Number(nalez.lon),
      nazev: nalez.display_name.split(",")[0].trim(),
    });
  } catch {
    return Response.json({ chyba: "sluzba-nedostupna" }, { status: 502 });
  }
}
