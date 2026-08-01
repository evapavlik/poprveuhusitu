import type { Metadata } from "next";
import KralovstviClient from "./KralovstviClient";

export const metadata: Metadata = {
  title: "Království boží na zemi — Husitská církev",
  description:
    "Proč v roce 1920 vznikla nová církev. Zakladatelský text Františka Kováře o krizi náboženství a hledání nové formy.",
};

export default function Page() {
  return <KralovstviClient />;
}
