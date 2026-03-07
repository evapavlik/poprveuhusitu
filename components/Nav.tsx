export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-6 md:px-12 h-[68px] flex items-center justify-between bg-white/93 backdrop-blur-[12px] border-b border-border">
      <a href="#" className="font-lora text-[15px] font-semibold text-brick no-underline">
        Husitská církev · CČSH
      </a>
      <ul className="hidden md:flex gap-9 list-none">
        {[
          { href: "#co-jsme", label: "Kdo jsme" },
          { href: "#farsky", label: "Příběh vzniku" },
          { href: "#bohosluzba", label: "Na bohoslužbě" },
          { href: "#dnes", label: "Proč dnes" },
          { href: "#kontakt", label: "Kontakt" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[13px] font-medium text-text-muted no-underline hover:text-brick transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
