import Link from "next/link";

const cteni = [
  { href: "/pruvodce", label: "Průvodce bohoslužbou" },
  { href: "/otcenas", label: "Výklad Otčenáše" },
  { href: "/kralovstvi-bozi", label: "Království boží na zemi" },
];

export default function Footer() {
  const linkClass = "underline hover:text-white transition-colors duration-200";

  return (
    <footer className="bg-text px-6 md:px-12 py-12 flex flex-col items-center gap-5 text-center">
      <span className="font-lora text-sm font-semibold text-white/70">
        Husitská církev · CČSH
      </span>

      <nav className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-[12px] text-white/55">
        {cteni.map((item, i) => (
          <span key={item.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">·</span>}
            <Link
              href={item.href}
              className="no-underline hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          </span>
        ))}
      </nav>

      <p className="text-[11px] text-white/55 leading-relaxed max-w-[520px]">
        Obsah čerpá z{" "}
        <a href="https://www.ccsh.cz" className={linkClass} target="_blank" rel="noopener noreferrer">
          ccsh.cz
        </a>
        {" "}a{" "}
        <a href="https://www.ccshpraha.cz/karel-farsky.html" className={linkClass} target="_blank" rel="noopener noreferrer">
          ccshpraha.cz
        </a>
        {" "}· citát Karla Farského z Postily (1922)
      </p>
      <p className="text-[11px] text-white/55 leading-relaxed">
        Eva Pavlíková · Soukromý projekt · Není oficiální stránkou{" "}
        <a href="https://www.ccsh.cz" className={linkClass} target="_blank" rel="noopener noreferrer">
          CČSH
        </a>
      </p>
    </footer>
  );
}
