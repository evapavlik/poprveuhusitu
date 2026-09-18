# CČSH — Projekt: Landing page pro hledající

Tento projekt je veřejná landing page Církve československé husitské, určená primárně **hledajícím a laikům** — lidem, kteří církev neznají nebo teprve zvažují první návštěvu. Nejde o interní web pro věřící, ale o vstupní bránu pro zvědavé.

---

## Kontext a cíl

- **Organizace:** Církev československá husitská (CČSH)
- **Web organizace:** https://www.ccsh.cz
- **Cílová skupina:** hledající, lidé bez vyznání, laici zvažující první návštěvu, lidé zajímající se o českou historii a spiritualitu
- **Tón:** otevřený, přívětivý, intelektuálně upřímný — bez zbytečného církevního žargonu, bez přehnaného evangelizačního tlaku, ale s teologickým ukotvením (nejde o volnomyšlenkářský spolek)
- **Jazyk:** čeština
- **GitHub:** https://github.com/evapavlik/poprveuhusitu
- **Vercel:** https://poprveuhusitu.vercel.app
- **Stav:** v1 nasazená na Vercel, auto-deploy z main větve
- **Git workflow:** Nikdy nepushovat přímo do main. Vždy vytvořit feature větev a PR přes `gh pr create`.

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

### 4. Karel Farský — brožura 1925 (PDF, skenovaný)
- **Lokální soubor:** `/Users/evapavlikova/Documents/Husitská teologie/Hotové předměty/Dějiny teologie a teologické filozofie CČSH/Karel Farský/FARSKÝ. CČS.pdf`
- Plný název: *CČS — Stručné informace o náboženských názorech, úkolech a organisaci církve československé* (K. Farský, 1925)
- 34 stran, skenovaný dokument (nutno číst jako obrázky přes pdftoppm)
- Obsahuje: Farského vlastní formulace víry, pohled na vědu, ekumenismus, sociální službu
- **Klíčové citáty vytěžené pro budoucí použití:**
  - „Dokazovati Boha nelze. Pojem Boha vymyká se lidskému pomyslu." (s. 3)
  - „V CČS směřuje naprosto a bez jakýchkoliv výhrad k svobodě vědy." (s. 30)
  - Husův citát, který Farský přejímá: „Poznej pravdu, hledej pravdu…" (s. 33)

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

### Rytmus stránky — ZÁVAZNÉ

Pozadí se nestřídá po každé sekci. Tón pozadí říká, **která kapitola** právě běží;
vlásková linka říká, že uvnitř kapitoly začíná další sekce.

| Kapitola | Tón | Sekce |
|---|---|---|
| Kdo jsme a odkud | `white` | Kdo jsme, Karel Farský |
| Co vás čeká | `off-white` | Co vás čeká poprvé, Proč dnes, Průvodce, FAQ |
| Vstup a autorka | `cream` | Životní události, O tomto webu |

Mezi kapitolami stojí **interpunkce** — sytá plocha, která dělá zlom:
červený marquee pod hero, zelený citát Farského, `brick-pale` závěrečné CTA,
tmavá patička. `sage-pale` zůstává jen pro box témat v sekci „Proč dnes".

Tři pravidla, která platí bez výjimky:
1. **Jedna osa.** Každá sekce jde přes `components/Section.tsx`, který drží
   `max-w-[1180px] mx-auto`. Žádná sekce si šířku neřeší sama — dřív se text
   při scrollování posouval do stran.
2. **Dvě úrovně nadpisů.** `NADPIS_1` pro nosné sekce (Kdo jsme, Farský,
   Co vás čeká, závěrečné CTA), `NADPIS_2` pro zbytek. Ne všechny sekce mají
   stejnou váhu.
3. **Červená kurzíva v nadpisu jen tam, kde nese sdělení.** Zůstává na čtyřech
   místech (hero, Kdo jsme, Farský, CTA). Osmkrát na jedné stránce je manýra.

### Typografická škála — ZÁVAZNÁ

Jiné velikosti na stránce nepoužívat. Dřív jich bylo v oběhu deset (11, 13, 14,
15, 16, 17, 19, 52 px) bez pravidla, podle čeho se vybírá.

| Role | Velikost | Řez |
|---|---|---|
| Štítek nad nadpisem (`SectionLabel`) | 12 px | 600, verzálky, tracking .2em |
| H1 | `clamp(40px,5.5vw,68px)` | 700 |
| H2 nosné sekce (`NADPIS_1`) | `clamp(32px,4vw,50px)` | 700 |
| H2 ostatní (`NADPIS_2`) | `clamp(26px,3vw,38px)` | 700 |
| H3 / nadpis karty | 19 px | 600 |
| Perex a hlavní text | 17 px | 300 |
| Text v kartách a seznamech | 15 px | 300 |
| Popisky, data, meta | 13 px | 500 |

Odsazení sekcí je responzivní (`Section` prop `top` / `bottom`): na mobilu
48–80 px, na desktopu 56–112 px. Pevných `py-[100px]` se na mobilu nedrží.

---

## Struktura stránky — sekce v pořadí

### 1. `<nav>` — Navigace
- Fixní, bílá s backdrop-filter blur
- Logo: „Husitská církev · CČSH" v Loře, červená
- Odkazy: Kdo jsme / Karel Farský / Bohoslužba / Dnes / Kontakt

### 2. `<hero>` — Hero sekce
- Tag badge: „Církev československá husitská"
- H1: „Víra, která se nebojí otázek."
- Perex: krátký, přívětivý, pro hledající
- CTA tlačítka: „Poznejte nás" (primary) + „Jak vypadá bohoslužba" (ghost)
- Pozadí: off-white s jemnými radiálními gradienty (červená + sage)

### 3. Marquee band
- Červené pozadí, bílý text
- Obsah: Otevřenost · Bohoslužba v češtině od roku 1920 · Jan Hus · Karel Farský · Přijímání pro všechny pokřtěné · Česká reformace

### 4. `#co-jsme` — Kdo jsme (2 sloupce)
- **Vlevo:** H2 + 2 odstavce o identitě církve
- **Vpravo:** 4 pilíře číslované (01–04)
  - Svoboda svědomí
  - Otevřené přijímání
  - Živé kázání
  - Farářky i faráři

### 5. `#farsky` — Karel Farský (příběh vzniku)
- Velký nadpis, subtitle s daty
- Intro odstavec o Farském (duchovní linie Hus → Chelčický → Komenský → Farský)
- **Timeline:** Velikonoce 1919 / Vánoce 1919 / 1920 / 1922 / 1924

### 6. Citátová sekce
- Sage zelené pozadí
- Velký italický citát Farského v Cormorant Garamond
- Aktuální citát: „Člověk není na světě, aby činil zlé, nýbrž aby žil pro dobro, a tak plnil věčný zákon Boží, řídící vesmír."
- ✅ **Zdroj ověřen:** Karel Farský, *Postila* (1922), s. 70

### 7. `#bohosluzba` — Co vás čeká poprvé (4 karty)
- 4 karty: neformální atmosféra / kázání v živém jazyce / přijímání otevřené všem / nemusíte se zapojovat

### 8. `#dnes` — Proč dnes (2 sloupce)
- **Vlevo:** text o současnosti Farského myšlenek
- **Vpravo:** 4 témata v sage-pale boxu:
  - Pravda jako odvaha
  - Odpuštění ve třech krocích
  - Víra a věda společně
  - Bez okázalosti

### 9. Průvodce první návštěvou (4 kroky)
- Krok 01–04: příchod kněze / čtení a kázání / přijímání / závěr a oznámení

### 10. FAQ — Časté otázky (accordion)
- 6 otázek pro hledající (víra, oblečení, děti, čas, komunita, zapojení)
- Bílé pozadí, accordion s animací

### 11. Životní události (4 karty)
- Sage-pale pozadí, SVG ikony v sage barvě
- 4 karty: křest / svatba / pohřeb / rozhovor s farářem

### 12. `#kontakt` — CTA sekce
- Brick-pale pozadí
- H2 + perex + tlačítko → ccsh.cz („Najít sbor blízko vás")

### 13. Footer
- Tmavý, jednoduchý
- Logo text „Husitská církev · CČSH"
- Disclaimer: „Soukromý projekt · Není oficiální stránkou CČSH" (odkaz na ccsh.cz)
- ⚠️ **Žádné ®, ©, ani adresa sídla** — tohle je soukromá iniciativa, ne oficiální web

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
  page.tsx              # hlavní landing page — řadí všechny sekce
  layout.tsx            # fonty, metadata
  globals.css           # CSS proměnné, base styles, marquee animace
components/
  Section.tsx           # kostra sekce (šířka, tón, odsazení) + SectionLabel + NADPIS_1/2
  Nav.tsx               # fixní navigace
  Hero.tsx              # hero sekce s CTA
  MarqueeBand.tsx       # červený marquee pás
  WhoWeAre.tsx          # identita církve (2 sloupce + pilíře)
  KarelFarsky.tsx       # příběh vzniku + timeline
  Quote.tsx             # citátová sekce (sage pozadí)
  FirstVisit.tsx        # co vás čeká poprvé (4 karty)
  Contemporary.tsx      # proč dnes (2 sloupce + témata)
  ServiceGuide.tsx      # průvodce bohoslužbou (4 kroky)
  FAQ.tsx               # časté otázky (accordion)
  LifeEvents.tsx        # životní události (4 karty)
  CtaSection.tsx        # závěrečné CTA
  Footer.tsx            # patička
  FadeUp.tsx            # animační wrapper (IntersectionObserver)
public/
  farsky-portrait.webp  # portrét Karla Farského (stylizovaný CSS filtry)
CLAUDE.md               # tento soubor
```

---

## Pravidla pro texty a terminologii

### Terminologie — ZÁVAZNÁ
| ❌ Nepoužívat | ✅ Správně |
|---|---|
| Eucharistie | Přijímání |
| náboženská obec | sbor |
| kalich (v kontextu přijímání) | víno |
| pastorační rozhovor | osobní rozhovor |
| souputníci | spojenci / společně |
| nekáře | nebude kárat |
| blahoslavenství (bez kontextu) | konkrétní popis čtení |

### Jazyková pravidla
- **Žádné archaismy** — text musí být srozumitelný pro člověka, který nikdy nebyl v kostele
- **Žádné církevní klišé** jako „přijďte k nám domů", „Boží rodina", „služebníci Páně"
- **Žádný evangelizační tlak** — tón je zvoucí, ne přesvědčovací
- **Citáty Farského** — vždy ověřit zdroj, nepafrázovat jako přímou řeč
- **Přijímání** — správná formulace: „může přistoupit každý pokřtěný křesťan, bez ohledu na církev"
- **Farářky** — zmínit, je to důležitý rozlišovací prvek CČSH
- **Název církve** — malé „č" a „h": Církev **č**eskoslovenská **h**usitská

### Faktické kontroly
- **Datum vzniku:** vyhlášena 11. ledna 1920 v chrámu sv. Mikuláše
- **Karel Farský:** první biskup-patriarcha (ne jen „patriarcha")
- Červená `#c41e1e` je přesná barva z loga na ccsh.cz — neměnit

---

## Otevřené úkoly

- [x] **Ověřit zdroj citátu v Quote.tsx** — ✅ dohledáno: Karel Farský, *Postila* (1922), s. 70. Znění na webu bylo parafráze; opraveno na doložené „Člověk není na světě, aby páchal zlo, nýbrž aby žil dobru, a tak naplnil věčný zákon Boží, vládnoucí vesmírem."
- [x] **Nasazení na Vercel** — ✅ poprveuhusitu.vercel.app
- [ ] **Fotografie** — zvážit přidání fotografií sborů / bohoslužeb do sekcí (nyní je stránka čistě textová + ikony)
