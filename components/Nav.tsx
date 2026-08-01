"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const sekce = [
  { href: "/#co-jsme", label: "Kdo jsme" },
  { href: "/#farsky", label: "Příběh vzniku" },
  { href: "/#bohosluzba", label: "Na bohoslužbě" },
  { href: "/#dnes", label: "Proč dnes" },
  { href: "/pruvodce", label: "Průvodce bohoslužbou" },
];

const CTA = { href: "/#kontakt", label: "Najít sbor" };

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Zavření na Esc — bez toho je rozbalené menu past pro klávesnici.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const ctaTrida =
    "bg-brick text-white text-[13px] font-semibold px-5 py-2.5 rounded-md no-underline whitespace-nowrap hover:bg-brick-light transition-colors duration-200";

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white/93 backdrop-blur-[12px] border-b border-border">
      {/* Tři sloupce: značka vlevo, sekce doprostřed, akce vpravo. Prostřední
          sloupec je auto, takže odkazy sedí na optické ose bez ohledu na to,
          jak široké je logo nebo tlačítko. */}
      {/* minmax(max-content, 1fr): krajní sloupce se nikdy nezúží pod obsah,
          takže se logo neláme, ale dokud je místo, zůstávají stejně široké
          a prostřední sloupec sedí na ose. */}
      <div className="px-6 lg:px-12 h-[68px] grid grid-cols-[1fr_auto] lg:grid-cols-[minmax(max-content,1fr)_auto_minmax(max-content,1fr)] items-center gap-6">
        <Link
          href="/"
          className="font-lora text-[15px] font-semibold text-brick no-underline justify-self-start whitespace-nowrap"
          onClick={() => setOpen(false)}
        >
          Husitská církev · CČSH
        </Link>

        {/* Plná navigace se zapíná až na lg (1024 px). Na md (768) se šest
            položek nevešlo a lišta se lámala do dvou řádků. */}
        <ul className="hidden lg:flex gap-8 list-none justify-self-center">
          {sekce.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-medium text-text-muted no-underline hover:text-brick transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 justify-self-end">
          <Link href={CTA.href} className={ctaTrida} onClick={() => setOpen(false)}>
            {CTA.label}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilni-menu"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            className="lg:hidden w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer"
          >
            <span
              className={`block w-5 h-[1.5px] bg-text transition-transform duration-200 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text transition-transform duration-200 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobilni-menu"
        hidden={!open}
        className="lg:hidden border-t border-border bg-white px-6 py-3"
      >
        <ul className="list-none">
          {sekce.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] font-medium text-text no-underline border-b border-border"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={CTA.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-semibold text-brick no-underline"
            >
              Přijít
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
