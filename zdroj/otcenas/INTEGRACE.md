# Integrace stránky Otčenáš do projektu poprveuhusitu.cz

## Soubory

Komponenta je v souboru `app/otcenas/page.tsx` a je zcela samostatná (single-file).

## Postup integrace

### 1. Zkopírujte soubor do projektu

```bash
cp app/otcenas/page.tsx /cesta/k/poprveuhusitu/app/otcenas/page.tsx
```

### 2. Přidejte odkaz do průvodce

V sekci průvodce (krok 12 o Otčenáši) přidejte odkaz:

```tsx
<Link href="/otcenas" className="...">
  Prozkoumat výklad Otčenáše →
</Link>
```

### 3. Volitelně přidejte do navigace

V hlavní navigaci nebo na úvodní stránce můžete přidat odkaz na `/otcenas`.

## Obsah

Stránka obsahuje kompletní výklad všech 7 proseb modlitby Otčenáš podle díla Dr. Františka Kováře z roku 1952:

1. **Otče náš, jenž jsi v nebesích** — Oslovení, význam slova Abbá
2. **Posvěť se jméno Tvé** — Co znamená jméno a posvěcení
3. **Přijď království Tvé** — Království jako duchovní skutečnost
4. **Buď vůle Tvá** — Odevzdanost do Boží vůle
5. **Chléb náš vezdejší** — Prosba o denní potřeby
6. **Odpusť nám naše viny** — Hřích a odpuštění
7. **Neuvoď nás v pokušení, ale zbav nás od zlého** — Zkoušky a ochrana

## Funkce

- **Dva módy zobrazení:**
  - ☽ Kontemplativní — čistý, dýchající text pro meditaci
  - ◈ Magazín — dvousloupcový layout s typografickými prvky

- **Navigace:** tečky pro rychlý přechod mezi prosbami + šipky

- **Responzivní design:** funguje na mobilu i desktopu

## Barevná paleta

Sladěno s poprveuhusitu.cz:
- Základní: krémová `#FFFCF7`, stone paleta
- Akcent: zelená `#16a34a`, `#dcfce7`
- Pull-quotes: černá `#1c1917`

## Zdroj

Veškerý text vychází autenticky z díla:

> Dr. František Kovář: *Výklad Otčenáše*  
> Nakladatelské družstvo „Blahoslav", Praha, 1952  
> 29 stran, náklad 750 ks
