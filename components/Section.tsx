import type { ReactNode } from "react";

/**
 * Jedna kostra pro všechny sekce stránky.
 *
 * Předtím si každá sekce řešila šířku i odsazení sama: Hero měl
 * max-w-[1180px] na střed, „Kdo jsme" neměl omezení vůbec (na širokém monitoru
 * se roztáhl přes celou plochu) a Farský seděl na 820px zarovnaných vlevo.
 * Text se tak při scrollování posouval do stran. Tohle to drží na jedné ose.
 *
 * Rytmus stránky stojí na dvou signálech:
 *   • změna `tone` = nová kapitola (bílá „kdo jsme", off-white „co vás čeká",
 *     cream „vstup a autorka"),
 *   • `divider` = další sekce uvnitř téže kapitoly, oddělená jen vláskovou
 *     linkou.
 * Dřív se pozadí střídalo po každé sekci mezi pěti odstíny bez logiky, takže
 * z barvy nešlo poznat, co spolu souvisí.
 *
 * Sytá pozadí (červený pás, zelený citát, závěrečné CTA) nejsou sekce v tomhle
 * smyslu — dělají interpunkci a zůstávají ve svých komponentách.
 */

type Tone = "white" | "off-white" | "cream";
type Pad = "lg" | "md" | "sm";

const TONE: Record<Tone, string> = {
  white: "bg-white",
  "off-white": "bg-off-white",
  cream: "bg-cream",
};

/** Na mobilu je 100px nahoře i dole zbytečná díra — proto dvě hodnoty. */
const PAD_TOP: Record<Pad, string> = {
  lg: "pt-20 md:pt-28",
  md: "pt-16 md:pt-20",
  sm: "pt-12 md:pt-14",
};

const PAD_BOTTOM: Record<Pad, string> = {
  lg: "pb-20 md:pb-28",
  md: "pb-16 md:pb-20",
  sm: "pb-12 md:pb-14",
};

export default function Section({
  id,
  tone = "white",
  top = "lg",
  bottom = "lg",
  divider = false,
  children,
  className = "",
}: {
  id?: string;
  tone?: Tone;
  top?: Pad;
  bottom?: Pad;
  /** Vlásková linka nad obsahem — sekce pokračuje v téže kapitole. */
  divider?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    /* U sekce s linkou nese horní mezeru až obsah pod linkou — jinak by se
       mezera sečetla s odsazením předchozí sekce a linka by seděla nakřivo,
       daleko nad předchozím obsahem a těsně pod následujícím nadpisem. */
    <section
      id={id}
      className={`px-6 md:px-12 ${TONE[tone]} ${divider ? "" : PAD_TOP[top]} ${PAD_BOTTOM[bottom]} ${className}`}
    >
      <div className="max-w-[1180px] mx-auto">
        {divider ? (
          <div className={`border-t border-border ${PAD_TOP[top]}`}>{children}</div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

/**
 * Červený (nebo zelený) štítek nad nadpisem. Byl osmkrát zkopírovaný
 * v osmi souborech, pokaždé s drobně jinou mezerou pod sebou.
 */
export function SectionLabel({
  children,
  variant = "brick",
}: {
  children: ReactNode;
  variant?: "brick" | "sage";
}) {
  const barva = variant === "sage" ? "text-sage before:bg-sage" : "text-brick before:bg-brick";

  return (
    <div
      className={`inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase mb-5 before:content-[''] before:w-5 before:h-0.5 before:rounded-sm ${barva}`}
    >
      {children}
    </div>
  );
}

/**
 * Dvě úrovně nadpisů místo jedné. Dřív měly všechny sekce identický
 * clamp(30px,3.5vw,46px), takže ze stránky nešlo poznat, co je hlavní kapitola
 * a co jen doplněk.
 *
 * `level 1` — čtyři nosné sekce (Kdo jsme, Farský, Co vás čeká, závěrečné CTA).
 * `level 2` — vše ostatní.
 */
export const NADPIS_1 =
  "font-lora text-[clamp(32px,4vw,50px)] font-bold leading-[1.15] tracking-[-0.01em]";
export const NADPIS_2 =
  "font-lora text-[clamp(26px,3vw,38px)] font-bold leading-[1.25] tracking-[-0.01em]";
