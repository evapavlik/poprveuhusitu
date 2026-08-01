import type { Metadata } from "next";
import OtcenasClient from "./OtcenasClient";

export const metadata: Metadata = {
  title: "Výklad Otčenáše — Husitská církev",
  description:
    "Nejznámější křesťanská modlitba prosbu po prosbě, podle výkladu patriarchy Františka Kováře z roku 1952.",
};

export default function Page() {
  return <OtcenasClient />;
}
