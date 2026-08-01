import { nactiSbory } from "@/lib/sbory";

// Prohlížeč si data z ccsh.cz stáhnout sám nemůže (CORS), takže je podává
// tenhle endpoint. Vlastní fetch je cachovaný na 24 h, viz lib/sbory.ts.
export const revalidate = 86400; // 24 h — musí být literál, Next to čte staticky

export async function GET() {
  const sbory = await nactiSbory();

  return Response.json(
    { sbory },
    {
      status: 200,
      headers: {
        // Když se parsování rozbije, ať se prázdný seznam nezakonzervuje na den.
        "Cache-Control": sbory.length
          ? "public, s-maxage=86400, stale-while-revalidate=604800"
          : "no-store",
      },
    }
  );
}
