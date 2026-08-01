import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Portréty duchovních z oficiálního adresáře CČSH. Přes next/image, aby se
    // z originálu 600×867 nestahoval celý soubor kvůli kolečku o 44 px.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "personal.ccsh.cz",
        pathname: "/images/pictures/**",
      },
    ],
  },
};

export default nextConfig;
