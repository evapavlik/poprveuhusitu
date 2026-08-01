"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#co-jsme", label: "Kdo jsme" },
  { href: "/#farsky", label: "Příběh vzniku" },
  { href: "/#bohosluzba", label: "Na bohoslužbě" },
  { href: "/#dnes", label: "Proč dnes" },
  { href: "/pruvodce", label: "Průvodce bohoslužbou" },
  { href: "/#kontakt", label: "Přijít" },
];

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 bg-white/93 backdrop-blur-[12px] border-b border-border">
      <div className="px-6 md:px-12 h-[68px] flex items-center justify-between">
        <Link
          href="/"
          className="font-lora text-[15px] font-semibold text-brick no-underline"
          onClick={() => setOpen(false)}
        >
          Husitská církev · CČSH
        </Link>

        <ul className="hidden md:flex gap-9 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-medium text-text-muted no-underline hover:text-brick transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Na mobilu je konverzní místo jinak až za třinácti sekcemi. */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/#kontakt"
            className="bg-brick text-white text-[12px] font-semibold px-4 py-2 rounded-md no-underline"
            onClick={() => setOpen(false)}
          >
            Najít sbor
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobilni-menu"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            className="w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer"
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
        className="md:hidden border-t border-border bg-white px-6 py-3"
      >
        <ul className="list-none">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[15px] font-medium text-text no-underline border-b border-border last:border-b-0"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
