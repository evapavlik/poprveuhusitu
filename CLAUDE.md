# CČSH — Projekt: Landing page pro hledající

Tento projekt je veřejná landing page Církve československé husitské, určená primárně **hledajícím a laikům** — lidem, kteří církev neznají nebo teprve zvažují první návštěvu. Nejde o interní web pro věřící, ale o vstupní bránu pro zvědavé.

---

## Kontext a cíl

- **Organizace:** Církev československá husitská (CČSH)
- **Web organizace:** https://www.ccsh.cz
- **Cílová skupina:** hledající, lidé bez vyznání, laici zvažující první návštěvu, lidé zajímající se o českou historii a spiritualitu
- **Tón:** otevřený, přívětivý, intelektuálně upřímný — bez zbytečného církevního žargonu, bez přehnaného evangelizačního tlaku
- **Jazyk:** čeština

---

## Zdroje obsahu — VŽDY použít před psaním textů

Před psaním jakéhokoli textu na stránce Claude MUSÍ projít tyto zdroje a vytěžit relevantní obsah:

### 1. Průvodce bohoslužbou (PDF)
- **URL ke stažení:** `https://www.ccsh.cz/index.php?preview=1&option=com_dropfiles&format=&task=frontfile.download&catid=154&id=4347&Itemid=1000000000000`
- Obsahuje: strukturu bohoslužby CČSH krok po kroku, vysvětlení pro nováčky, přijímání, modlitby
- Použít pro sekce: **Bohoslužba**, **Průvodce první návštěvou**

### 2. Web CČSH — klíčové stránky ke zpracování
```
https://www.ccsh.cz/kdo-jsme.html          # identita církve
https://www.ccsh.cz/historie.html           # vznik, Farský, první republika
https://www.ccsh.cz/cirkev.html             # struktura, hodnoty
https://www.ccsh.cz/aktualne.html           # aktuální dění (pro sekci Dnes)
```

### 3. Karel Farský — zdroje
```
https://www.ccshpraha.cz/karel-farsky.html  # biografie, teologie, citáty
```

**Workflow pro psaní obsahu:**
1. Načti příslušnou stránku/dokument
2. Vytěž klíčové informace, citáty, fakta
3. Přepiš vlastními slovy, zachovej věcnou přesnost
4. Nepoužívej fráze, které znějí jako propagandistický leták

---

## Design systém

### Barvy
```css
--red:        #c41e1e;   /* hlavní akcent — přesná červená z loga CČSH */
--red-hover:  #d63030;   /* hover stav */
--red-pale:   #fdf0f0;   /* světlé pozadí, karty */
--sage:       #4a7c6f;   /* doplňková — naděje, příroda, citáty */
--sage-pale:  #eaf3f1;   /* světlé pozadí sekcí */
--off-white:  #faf8f5;   /* alternativní pozadí sekcí */
--cream:      #f4f0ea;   /* další střídání */
--text:       #1f1a16;   /* hlavní text */
--text-muted: #6b6259;   /* popisný text, perex */
--border:     #e8e0d5;   /* oddělovače */
```

### Typografie
```
Nadpisy (h1–h3):    Lora — serif, teplá, čitelná (Google Fonts)
Perex / UI text:    Plus Jakarta Sans — moderní, přívětivý (Google Fonts)
Speciální citáty:   Cormorant Garamond — italika pro velké citáty (Google Fonts)
```

### Vizuální principy
- **Světlé pozadí** — žádné dramatické tmavé sekce (výjimka: citátová sekce může být v sage zelené)
- **Zaoblené rohy** na kartách (border-radius: 12px)
- **Jemné stíny** při hover, ne při klidovém stavu
- **Animace fade-up** při scrollování pomocí IntersectionObserver
- **Marquee band** pod hero sekcí — živá červená, klíčová slova v pohybu
- Inspirace vizuálem: https://www.praya.app/farnost.html (struktura, ne barvy)

---

## Struktura stránky — sekce v pořadí

### 1. `<nav>` — Navigace
- Fixní, bílá s backdrop-filter blur
- Logo: „Husitská církev · CČSH" v Loře, červená
- Odkazy: Co jsme / Karel Farský / Bohoslužba / Dnes / Kontakt

### 2. `<hero>` — Hero sekce
- Tag badge: „Církev československá husitská"
- H1: „Víra, která se nebojí otázek." (nebo variace — ověřit, zda odpovídá duchu CČSH)
- Perex: krátký, přívětivý, pro hledající
- CTA tlačítka: „Poznejte nás" (primary) + „Jak vypadá bohoslužba" (ghost)
- Pozadí: off-white s jemnými radiálními gradienty (červená + sage)

### 3. Marquee band
- Červené pozadí, bílý text
- Obsah: Otevřenost · Bohoslužba v češtině od roku 1920 · Jan Hus · Karel Farský · Přijímání pro všechny pokřtěné · Česká reformace

### 4. `#co-jsme` — Co jsme (2 sloupce)
- **Vlevo:** H2 + 2 odstavce o identitě církve (čerpat z kdo-jsme.html)
- **Vpravo:** 4 pilíře číslované (01–04)
  - Svoboda svědomí
  - Otevřené přijímání
  - Živé kázání
  - Farářky i faráři

### 5. `#farsky` — Karel Farský (příběh vzniku)
- Velký nadpis, subtitle s daty
- Intro odstavec o Farském
- **Timeline:** 1919 / 1920 / 1922 / 1924 — čerpat z ccshpraha.cz/karel-farsky.html a ccsh.cz/historie.html

### 6. Citátová sekce
- Sage zelené pozadí
- Velký italický citát Farského v Cormorant Garamond
- Zdroj citátu

### 7. `#bohosluzba` — Co vás čeká poprvé (6 karet)
- **OBSAH POVINNĚ z PDF průvodce** — projít dokument a vytěžit
- 6 karet: atmosféra / kázání / přijímání / zpěv / modlitba / nezapojování

### 8. `#dnes` — Proč dnes (2 sloupce)
- **Vlevo:** text o současnosti Farského myšlenek
- **Vpravo:** 4 témata v sage-pale boxu (pravda / odpuštění / víra+věda / chudá církev)

### 9. Průvodce první návštěvou (4 kroky)
- **OBSAH POVINNĚ z PDF průvodce**
- Krok 01–04: příchod / čtení+kázání / eucharistie / závěr

### 10. `#kontakt` — CTA sekce
- Světle červené pozadí (red-pale)
- H2 + perex + tlačítko → ccsh.cz (najít náboženskou obec)

### 11. Footer
- Tmavý, jednoduchý
- Logo text + ccsh.cz odkaz

---

## Technický stack

```
Framework:    Next.js 14+ (App Router)
Styling:      Tailwind CSS + CSS proměnné pro barvy
Fonty:        next/font s Google Fonts (Lora, Plus Jakarta Sans, Cormorant Garamond)
Deployment:   Vercel
CMS:          (volitelně v další fázi) Sanity.io nebo Contentful
```

### Struktura souborů
```
app/
  page.tsx              # hlavní landing page
  layout.tsx            # fonty, metadata
  globals.css           # CSS proměnné, base styles
components/
  Nav.tsx
  Hero.tsx
  MarqueeBand.tsx
  WhoWeAre.tsx
  KarelFarsky.tsx
  Quote.tsx
  FirstVisit.tsx
  Contemporary.tsx
  ServiceGuide.tsx
  CtaSection.tsx
  Footer.tsx
public/
  (obrázky, ikony)
CLAUDE.md               # tento soubor
```

---

## Hotový HTML prototyp

Máme hotový funkční HTML prototyp (`ccs-husitska.html`) se správnou strukturou a design systémem. Při přepisu do Next.js z něj vycházej — **neměň strukturu ani obsah sekcí**, pouze přepiš do React komponent a doplň obsah ze zdrojů výše.

---

## Důležité poznámky

- **Nepsát z hlavy** — vždy čerpat ze zdrojů výše. Obsah musí být věcně přesný.
- **Nepoužívat církevní klišé** jako „přijďte k nám domů" nebo „Boží rodina" — tón je intelektuálně upřímný
- **Citáty Farského** — vždy ověřit zdroj, nepafrázovat jako přímou řeč
- **Přijímání** — správná formulace: „může přistoupit každý pokřtěný, bez ohledu na příslušnost k církvi"
- **Farářky** — zmínit, je to důležitý rozlišovací prvek CČSH
- Červená `#c41e1e` je přesná barva z loga na ccsh.cz — neměnit
