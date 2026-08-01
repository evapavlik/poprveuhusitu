import type { MetadataRoute } from "next";

const base = "https://poprveuhusitu.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    { url: `${base}/pruvodce`, priority: 0.8 },
    { url: `${base}/otcenas`, priority: 0.6 },
    { url: `${base}/kralovstvi-bozi`, priority: 0.6 },
  ];
}
