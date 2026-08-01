import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// ESLint 9 už nečte .eslintrc. eslint-config-next 16 exportuje rovnou flat config,
// takže není potřeba FlatCompat. core-web-vitals už v sobě má i next/typescript.
const config = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default config;
