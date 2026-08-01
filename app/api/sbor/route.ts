import { nactiDetailSboru } from "@/lib/sborDetail";

// Detail se načítá jen pro sbory, které se opravdu zobrazí. Data se na ccsh.cz
// mění řádově jednou za rok, proto týdenní cache.
export const revalidate = 604800; // 7 dní — musí být literál, Next to čte staticky

export async function GET(request: Request) {
  const oid = new URL(request.url).searchParams.get("oid");

  if (!oid || !/^\d+$/.test(oid)) {
    return Response.json({ chyba: "neplatne-oid" }, { status: 400 });
  }

  const detail = await nactiDetailSboru(oid);
  const mameNeco = Boolean(detail.bohosluzby || detail.duchovni);

  return Response.json(detail, {
    headers: {
      // Prázdný výsledek znamená spíš rozbité parsování než sbor bez faráře,
      // ať se to na týden nezakonzervuje.
      "Cache-Control": mameNeco
        ? "public, s-maxage=604800, stale-while-revalidate=2592000"
        : "no-store",
    },
  });
}
