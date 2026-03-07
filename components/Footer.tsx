export default function Footer() {
  const linkClass =
    "underline hover:text-white/55 transition-colors duration-200";

  return (
    <footer className="bg-text px-6 md:px-12 py-12 flex flex-col items-center gap-5 text-center">
      <span className="font-lora text-sm font-semibold text-white/70">
        Husitská církev · CČSH
      </span>
      <p className="text-[11px] text-white/30 leading-relaxed max-w-[520px]">
        Obsah čerpá z{" "}
        <a href="https://www.ccsh.cz" className={linkClass} target="_blank" rel="noopener noreferrer">
          ccsh.cz
        </a>
        {" "}a{" "}
        <a href="https://www.ccshpraha.cz/karel-farsky.html" className={linkClass} target="_blank" rel="noopener noreferrer">
          ccshpraha.cz
        </a>
        {" "}· citáty Karla Farského z brožury CČS (1925)
      </p>
      <p className="text-[11px] text-white/30 leading-relaxed">
        Eva Pavlíková · Soukromý projekt · Není oficiální stránkou{" "}
        <a href="https://www.ccsh.cz" className={linkClass} target="_blank" rel="noopener noreferrer">
          CČSH
        </a>
      </p>
    </footer>
  );
}
