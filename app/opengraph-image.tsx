import { ImageResponse } from "next/og";

export const alt = "Víra, která se nebojí otázek. – Církev československá husitská";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Náhled odkazu na WhatsApp / Messenger / Facebook. Generuje se za buildu,
// takže není potřeba žádný externí obrázek.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#faf8f5",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c41e1e",
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          Církev československá husitská
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 104,
            lineHeight: 1.08,
            color: "#1f1a16",
            fontWeight: 700,
          }}
        >
          <span>Víra, která</span>
          <span>
            se <span style={{ color: "#c41e1e", fontStyle: "italic" }}>nebojí</span>
          </span>
          <span>otázek.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 30,
            color: "#6b6259",
          }}
        >
          Co vás čeká, když přijdete poprvé
        </div>
      </div>
    ),
    size
  );
}
