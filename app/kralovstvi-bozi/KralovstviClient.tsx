'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FindCongregationLink } from '@/components/FindCongregation';

// Data structure for the 3 chapters of "Království boží na zemi" (Kovář, 1920)
const kapitoly = [
  {
    id: 1,
    label: 'Kapitola I',
    title: 'Harmonie zítřka',
    titleEmphasis: 'zítřka',
    deck: 'Vize nového náboženství, které smiřuje rozum, cit a vůli. Království boží jako mravní ideál člověka i společnosti.',
    calmContent: [
      'Století XVIII., „století rozumu", skládalo víru svou ve filosofii a očekávalo od vítězství rozumu příchod zlatého věku. Století XIX., zklamáno filosofií, vložilo víru a naději svou ve **vědy přírodní**, čekalo od nich odpovědi na všecky otázky, rozluštění záhady světa, života i vlastního nitra.',
      'Teprve století XX. poznává jednostrannost tohoto dosavadního počínání. Na počátku století svítá pravé a správné poznání, že nemá člověk pouze rozumu, jejž třeba upokojiti, ale také **cit a vůli**, jež nutno ve jménu harmonického života také upokojiti jako rozum.',
      'Citu pak a vůle neupokojí pouze věda sama, která je především věcí rozumu. A tak hned na samém počátku století u vůdčích hlav života duchovního jsme svědky **obrození náboženství**.',
      'Smír může vytvořiti pouze náboženství, které upokojí rozum, vůli i cit a přinese harmonii nitra, tím i spokojenost a tvořivost nového činorodého života.',
      'Přiblížilo se království boží! Oblecte se v nového člověka! Stanete se syny božími!',
      'Nové náboženství žádá především **náboženskosti** od člověka, vede ho k ní, pěstuje a zdokonaluje ho v ní. Jsou pak náboženskostí životní vztahy, vztahy citu a vůle k nadosobnímu, nadlidskému, nadsvětovému, absolutnímu, věčnému, božskému.',
      'Existenci tohoto božství si nový člověk rozumem nedokazuje, protože rozumem nelze ji dokázati, ale ví také, že nelze ji vyvrátiti. To co k uznání a žití dle toho přesvědčení ho vede, je jeho **cit, vnitřní hlas**, který mu praví, že za tím vším — vesmírem, jehož zákony věda stanoví a zkoumá, i jeho nitrem — za tím vším a nad tím vším něco musí být.',
      'Člověk poznává, že jsou tu pravdy, které jeho rozum uznati musí, že jsou tu dobra, po nichž nutně touží jeho vůle, že jsou tu krásna, jimž nemůže se jeho cit oddati jinak než s láskou. Uvědomuje si soubor **Pravdy, Dobra a Krásna** jako něčeho, co je nad ním, nadindividuálné, ale i nad jinými, nadlidské, ano nadsvětové, absolutní, věčné, božské.',
      'A čím více lidí žije tak, tím více uskutečňuje se království boží na zemi, život dle oněch věčných pravd, vyššího řádu, řádu Pravdy, Dobra a Krásna, jehož hlasatelem jest svědomí.',
    ],
    quote: {
      text: '„Smyšlet a žít v souhlase s tím, znamená štěstí, harmonii, plnost života, spolupracovnictví na díle božím, synovství boží."',
      author: 'František Kovář, Království boží na zemi (1920)',
    },
    magCol1: [
      'Století XVIII., „století rozumu", skládalo víru svou ve filosofii a očekávalo od vítězství rozumu příchod zlatého věku. Století XIX., zklamáno filosofií, vložilo víru a naději svou ve **vědy přírodní**, čekalo od nich odpovědi na všecky otázky.',
      'Teprve století XX. poznává jednostrannost tohoto dosavadního počínání. Svítá pravé poznání, že nemá člověk pouze rozumu, jejž třeba upokojiti, ale také **cit a vůli**, jež nutno ve jménu harmonického života také upokojiti jako rozum.',
      'A tak hned na samém počátku století u vůdčích hlav života duchovního jsme svědky **obrození náboženství**. U většiny je to však hledání nové formy náboženství.',
      'Nové náboženství žádá především **náboženskosti** od člověka. Jsou pak náboženskostí životní vztahy, vztahy citu a vůle k nadosobnímu, nadlidskému, nadsvětovému, absolutnímu, věčnému, božskému.',
    ],
    magCol2: [
      'Existenci tohoto božství si nový člověk rozumem nedokazuje, protože rozumem nelze ji dokázati, ale ví také, že nelze ji vyvrátiti. To co k uznání a žití dle toho přesvědčení ho vede, je jeho **cit, vnitřní hlas**.',
      'Člověk poznává, že jsou tu pravdy, které jeho rozum uznati musí, že jsou tu dobra, po nichž nutně touží jeho vůle, že jsou tu krásna, jimž nemůže se jeho cit oddati jinak než s láskou.',
      'Uvědomuje si soubor **Pravdy, Dobra a Krásna** jako něčeho nadindividuálního, nadlidského, nadsvětového, absolutního, věčného, božského.',
    ],
    aside: {
      label: 'Základ nového náboženství',
      text: 'Smír může vytvořiti pouze náboženství, které upokojí rozum, vůli i cit a přinese **harmonii nitra**, tím i spokojenost a tvořivost nového činorodého života.',
    },
    box: {
      title: 'Království boží',
      text: 'Čím více lidí žije v souhlase s Pravdou, Dobrem a Krásnem, tím více uskutečňuje se **království boží na zemi**.',
    },
    reflection: 'Nový člověk v království božím má duševní harmonii synů božích. Není v něm rozporu mezi poznáním a životem, mezi rozumem a mravností, mezi světem vnějším a vnitřním.',
  },
  {
    id: 2,
    label: 'Kapitola II',
    title: 'Disharmonie dneška',
    titleEmphasis: 'dneška',
    deck: 'Proč dosavadní náboženské formy nestačí. Krize víry po válce, selhání katolicismu i rozumového monismu — a naléhavá potřeba nových cest.',
    calmContent: [
      'Pravým opakem této duchové a náboženské harmonie zítřka jsou poměry dneška. Snad ani v době vzniku křesťanství nebyla krise náboženství tak veliká, jako v době naší, bezradnost v otázkách náboženských a následkem toho i v oceňování hodnot mravních tak tíživá.',
      'Válkou krise náboženská vyvrcholila, ale rozhodla se již, aspoň u vůdčích duchů, ve prospěch **návratu k náboženství**. Vidí se však jasně, že žádná z dosavadních náboženských forem nepostačuje.',
      'Počátek novodobé krise náboženské způsobil rozvoj vědy, která na mnohé otázky podala odpovědi jiné než podávaly dosavadní formy náboženské. Odtud vznikaly v myslích rozpory mezi vědou a vírou.',
      'Dosavadní náboženské formy se nedovedly přizpůsobit, uvědomit si, že náboženství nelze pojímati jako poznání. Je sice náboženská víra vždy provázena z jedné strany poznáním, ale tento rozumový prvek, nezbytný sice, není přece podstatný a základní.',
      'Je mnoho lidí u nás, kteří stojí vůči náboženství každému na stanovisku úplné **negace**. Popírají potřebu náboženství vůbec, nepotřebují ho, je dle nich něčím překonaným a odbytým, moderního člověka nedůstojným. Většinou plynou tyto názory z nevědomosti, neboť náboženstvím je pro ně jen církev katolická.',
      'Vojna ukázala však mnohým absurdnost a neudržitelnost těchto názorů, nemá-li se lidstvo navzájem vyhubiti. Pouhou nevěrou nelze žíti, je potřeba kladného životního názoru, který by dal směr jednání a žití.',
      'Na pouhém rozumu a vědě nelze budovat mravnosti. Mravnosti nelze žádným rozumováním dokázati, dobré a zlé nepoznává se rozumem, nýbrž hodnotí se citem a vůlí.',
      'Církev staví na slepé víře v autoritu, její dogmata třeba míti za pravdu ne proto, že by rozum člověka je za pravdu uznati musel, nýbrž proto, že je církev k věření předkládá. Moderní člověk však nemůže slepě věřit autoritě, může uznat jen to, o čem se sám přesvědčí, **žádá zdůvodněného přesvědčení, ne slepé víry**.',
    ],
    quote: {
      text: '„Náboženství není pouze poměr člověka k Bohu, ale světovým názorem, kterým si zodpovídáme též otázky po účelu a cíli našeho života a snažení."',
      author: 'T. G. Masaryk',
    },
    magCol1: [
      'Pravým opakem duchové a náboženské harmonie zítřka jsou poměry dneška. Snad ani v době vzniku křesťanství nebyla krise náboženství tak veliká jako v době naší.',
      'Válkou krise náboženská vyvrcholila, ale rozhodla se již, aspoň u vůdčích duchů, ve prospěch **návratu k náboženství**. Vidí se však jasně, že žádná z dosavadních náboženských forem nepostačuje.',
      'Počátek novodobé krise náboženské způsobil rozvoj vědy, která na mnohé otázky podala odpovědi jiné než podávaly dosavadní formy náboženské. Odtud vznikaly v myslích rozpory mezi vědou a vírou.',
      'Na pouhém rozumu a vědě nelze budovat mravnosti. Mravnosti nelze žádným rozumováním dokázati, dobré a zlé nepoznává se rozumem, nýbrž hodnotí se **citem a vůlí**.',
    ],
    magCol2: [
      'Je mnoho lidí u nás, kteří stojí vůči náboženství na stanovisku úplné **negace**. Většinou plynou tyto názory z nevědomosti, neboť náboženstvím je pro ně jen církev katolická.',
      'Vojna ukázala však mnohým absurdnost těchto názorů. Pouhou nevěrou nelze žíti, je potřeba kladného životního názoru, který by dal směr jednání a žití.',
      'Moderní člověk nemůže slepě věřit autoritě, může uznat jen to, o čem se sám přesvědčí — žádá **zdůvodněného přesvědčení, ne slepé víry**.',
    ],
    aside: {
      label: 'Proč věda nestačí',
      text: 'Nový člověk si je vědom toho, že **žádná věda ani filosofie nemůže mu odpověděti na otázky**, přesahující lidskou zkušenost, na otázky o původu, osudu a podstatě světa, člověka, života.',
    },
    box: {
      title: 'Mareš o vědě a náboženství',
      text: '„Věda nemůže náboženství nahraditi, aniž může náboženství vytvořiti, může jen sloužiti životu v jeho úsilí po vyšších ideálech. **Není sporu mezi náboženstvím a vědou**, avšak těžký spor mezi náboženstvím a náboženstvím theologických theorií." (Mareš)',
    },
    reflection: 'Dnes vidí se jasně, že náboženství je třeba, nestačí jeho negace, ale že také nestačí dosavadní jeho formy; nezbývá tedy, než začít tvořiti formy nové.',
  },
  {
    id: 3,
    label: 'Kapitola III',
    title: 'Cesta za souladem',
    titleEmphasis: 'souladem',
    deck: 'Praktický program nové církve: bez násilí, organickým vývojem, návratem ke Kristu — a vírou, že půda je připravena.',
    calmContent: [
      'Vytčený ideál, vysoký cíl by tu byl, ale každý ví, jak příliš vzdáleni jsme dosud onoho stavu harmonie. Pro vzdálený ideál nelze pouštěti se zřetele úkolů dne a den je proniknut disharmonií.',
      'A v tom je právě úkol nejtěžší, jak překlenouti obě propasti, jak z dnešní disharmonie dospěti k souladu, kterou cestou.',
      'Žijeme v otroctví egyptském, v dálce kyne svobodná země zaslíbená, mlékem a medem oplývající. Ale cesta do ní vede vyprahlou pouští duševních přerodů, bezvodou, plnou nebezpečí.',
      'Především tedy třeba velikého uvědomování, poučování o přítomnosti, budoucnosti a nutnosti cesty a jejím nebezpečí, ale i sladkosti cíle.',
      'Tolik především je jisto, že **cesta za souladem musí býti bez násilí**. Jen organickým vývojem může vše dozráti. Dílna duše lidské je příliš jemného složení než aby se v ní bez hrozných následků řádilo násilím.',
      'Třeba stavěti na tom, co tu je. Ne přelom, ale vývoj, ponenáhlý vzrůst. **Nikomu ničeho nebrati, ničeho nevnucovati**, pouze nové předkládati a hlavně dle nového žíti a vše ponechati vývoji.',
      'Žijeme za svítání. Není již noc, ale také ne ještě jasný den. Třtiny nalomené nesmíme dolomiti, knotu doutnajícího uhasiti.',
      'Nemůžeme pro své jednání nalézti vzoru lepšího, než Ježíše samého. Jeho učení bylo základem a příčinou vzniku nové formy náboženské. Kristus hlásá jen království Boží a to samo působí v srdcích a roste.',
      'Zasejeme dobré símě království božího, Pravdy, Dobra a Krásna. Je to dnes ještě zrno hořčičné, ale i ono vzroste v strom.',
      'Co tu vypsáno a co hluboce a bolestně bylo prožito v nitrech reformních kněží českých po dlouhých zápasech, vedlo k tomu, že **8. ledna 1920 prohlášena byla církev československá**, která chce jíti cestou za novými náboženskými ideály a volá všecky lidi dobré vůle k spolupráci.',
    ],
    quote: {
      text: '„Nezbývá tedy, než začít tvořiti formy nové, vyhovující stupni duchového vývoje současného lidstva, nejsoucí ve sporu s poznatky vědeckými."',
      author: 'František Kovář, Království boží na zemi (1920)',
    },
    magCol1: [
      'Vytčený ideál, vysoký cíl by tu byl, ale každý ví, jak příliš vzdáleni jsme dosud onoho stavu harmonie. A v tom je právě úkol nejtěžší, jak překlenouti obě propasti, jak z dnešní disharmonie dospěti k souladu.',
      'Žijeme v otroctví egyptském, v dálce kyne svobodná země zaslíbená. Ale cesta do ní vede vyprahlou pouští duševních přerodů.',
      'Tolik je jisto, že **cesta za souladem musí býti bez násilí**. Jen organickým vývojem může vše dozráti. Ne přelom, ale vývoj, ponenáhlý vzrůst.',
      'Nikomu ničeho nebrati, ničeho nevnucovati, pouze nové předkládati a hlavně dle nového žíti a vše ponechati vývoji.',
    ],
    magCol2: [
      'Nemůžeme pro své jednání nalézti vzoru lepšího, než Ježíše samého. Kristus hlásá jen království Boží a to samo působí v srdcích a roste.',
      'Zasejeme dobré símě království božího, Pravdy, Dobra a Krásna. Je to dnes ještě zrno hořčičné, ale i ono vzroste v strom.',
      'Co tu vypsáno a co hluboce a bolestně bylo prožito v nitrech reformních kněží českých po dlouhých zápasech, vedlo k tomu, že **8. ledna 1920 prohlášena byla církev československá**, která chce jíti cestou za novými náboženskými ideály.',
    ],
    aside: {
      label: 'Bez násilí',
      text: 'Dílna duše lidské je příliš jemného složení než aby se v ní bez hrozných následků řádilo násilím. **Třeba stavěti na tom, co tu je.** Žijeme za svítání. Není již noc, ale také ne ještě jasný den.',
    },
    box: {
      title: 'Závěr — vznik církve',
      text: '8. ledna 1920 prohlášena byla **církev československá**, která chce jíti cestou za novými náboženskými ideály a volá všecky lidi dobré vůle k spolupráci.',
      note: 'Kovář píše o 8. lednu 1920, kdy se schůze reformních kněží usnesla církev založit. Veřejně byla vyhlášena o tři dny později, 11. ledna, v chrámu sv. Mikuláše — proto se na úvodní stránce uvádí toto datum.',
    },
    reflection: 'Odkládati nelze, třeba jednati brzy a rychle, život je krátký, potřeba vnitřní rovnováhy a bezpečnosti vůči záhadám a různostem života je naléhavá.',
  },
];

// Helper function to render text with markdown-like formatting
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-stone-900 font-medium">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i} className="text-stone-500">{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

export default function KralovstviBozi() {
  const [mode, setMode] = useState<'calm' | 'mag'>('mag');
  const [currentKapitola, setCurrentKapitola] = useState(0);

  const goToKapitola = (index: number) => {
    setCurrentKapitola(index);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  const kapitola = kapitoly[currentKapitola];

  return (
    <div className="min-h-screen bg-[#FFFCF7] font-serif">
      <style>{`
        .mag-columns {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .mag-columns {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#FFFCF7] border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-sm text-stone-400 font-sans hover:text-stone-600 transition">
          ← Zpět na hlavní stránku
        </Link>
        <div className="flex gap-1 bg-stone-100 rounded-full p-1">
          <button
            onClick={() => setMode('calm')}
            className={`px-4 py-2 rounded-full text-sm font-sans transition ${
              mode === 'calm' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500'
            }`}
          >
            ☽ Kontemplativní
          </button>
          <button
            onClick={() => setMode('mag')}
            className={`px-4 py-2 rounded-full text-sm font-sans transition ${
              mode === 'mag' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-500'
            }`}
          >
            ◈ Magazín
          </button>
        </div>
      </header>

      {/* Progress dots */}
      <div className="flex gap-2 justify-center py-6">
        {kapitoly.map((_, i) => (
          <button
            key={i}
            onClick={() => goToKapitola(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentKapitola ? 'w-6 bg-stone-700' : 'w-2 bg-stone-300'
            }`}
          />
        ))}
      </div>

      {/* Author intro - shown on first chapter */}
      {currentKapitola === 0 && (
        <div className="max-w-[540px] mx-auto px-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[44px] h-[44px] rounded-full overflow-hidden shrink-0 ring-1 ring-[#4a7c6f]/30">
              <Image
                src="/frantisek-kovar.jpg"
                alt="Portrét Dr. Františka Kováře"
                width={400}
                height={587}
                className="w-full h-full object-cover object-top"
                style={{
                  filter: 'sepia(1) saturate(1.2) hue-rotate(-10deg) contrast(0.95) brightness(0.95)',
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
            <p className="text-sm font-medium font-sans tracking-wide" style={{ color: '#4a7c6f' }}>
              Dr. František Kovář · 1888–1969 · třetí patriarcha CČSH
            </p>
          </div>
          <p className="text-[15px] leading-[1.8] text-stone-500 font-sans">
            Profesor novozákonní vědy na Husově bohoslovecké fakultě a překladatel Nového zákona z řečtiny do češtiny.
            Tento programový text o ideových základech Církve československé napsal v roce 1920, v&nbsp;samotném roce vzniku církve.
          </p>
        </div>
      )}

      {/* Content */}
      {mode === 'calm' ? (
        // KONTEMPLATIVNÍ MÓD
        <article className="max-w-[540px] mx-auto px-6 pb-12">
          <p className="text-xs tracking-widest uppercase text-stone-400 font-sans text-center mb-8">
            Království boží na zemi · {kapitola.label}
          </p>
          <h1 className="text-2xl text-stone-900 text-center mb-12 leading-relaxed">
            {kapitola.title}
          </h1>

          <div className="text-lg text-stone-600 leading-loose space-y-7">
            {kapitola.calmContent.map((paragraph, i) => (
              <p key={i}>{renderText(paragraph)}</p>
            ))}
          </div>

          {kapitola.quote && (
            <blockquote className="my-10 text-center px-4">
              <p className="text-xl italic text-stone-500 leading-relaxed mb-3">
                {kapitola.quote.text}
              </p>
              <footer className="text-sm text-stone-400 font-sans">
                — {kapitola.quote.author}
              </footer>
            </blockquote>
          )}

          <div className="mt-16 pt-8 text-center">
            <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-4">
              Kovářova myšlenka
            </p>
            <p className="text-xl italic text-stone-700 leading-relaxed">
              {kapitola.reflection}
            </p>
          </div>
        </article>
      ) : (
        // MAGAZÍNOVÝ MÓD
        <article className="max-w-[700px] mx-auto px-6 pb-12">
          {/* Header */}
          <div
            className="py-6 mb-8"
            style={{ borderBottom: '3px solid #1c1917' }}
          >
            <p className="text-xs tracking-widest uppercase text-[#4a7c6f] font-sans font-medium mb-4">
              Království boží na zemi · {kapitola.label}
            </p>
            <h1 className="text-4xl text-stone-900 leading-tight tracking-tight" style={{ fontSize: '38px' }}>
              {kapitola.title.split(kapitola.titleEmphasis)[0]}
              <em className="font-normal">{kapitola.titleEmphasis}</em>
              {kapitola.title.split(kapitola.titleEmphasis)[1] || ''}
            </h1>
            <p className="text-lg text-stone-600 mt-4 leading-relaxed">
              {kapitola.deck}
            </p>
          </div>

          {/* Two columns */}
          <div className="mag-columns">
            {/* Column 1 */}
            <div className="text-[15px] text-stone-700 space-y-4" style={{ lineHeight: '1.75' }}>
              {kapitola.magCol1.map((paragraph, i) => (
                <p key={i}>
                  {i === 0 && (
                    <span style={{ fontSize: '3.2rem', float: 'left', lineHeight: '0.85', paddingRight: '0.5rem', paddingTop: '0.2rem', fontWeight: 400, color: '#1c1917' }}>
                      {paragraph.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? renderText(paragraph.slice(1)) : renderText(paragraph)}
                </p>
              ))}

              {kapitola.aside && (
                <div
                  className="p-4 my-6"
                  style={{ backgroundColor: '#eaf3f1', borderLeft: '3px solid #4a7c6f' }}
                >
                  <p className="text-[10px] tracking-widest uppercase text-[#4a7c6f] font-sans font-medium mb-1">
                    {kapitola.aside.label}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {renderText(kapitola.aside.text)}
                  </p>
                </div>
              )}
            </div>

            {/* Column 2 */}
            <div className="text-[15px] text-stone-700 space-y-4" style={{ lineHeight: '1.75' }}>
              {kapitola.magCol2.map((paragraph, i) => (
                <p key={i}>
                  {i === 0 && (
                    <span style={{ fontSize: '3.2rem', float: 'left', lineHeight: '0.85', paddingRight: '0.5rem', paddingTop: '0.2rem', fontWeight: 400, color: '#1c1917' }}>
                      {paragraph.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? renderText(paragraph.slice(1)) : renderText(paragraph)}
                </p>
              ))}

              {kapitola.quote && (
                <div className="text-white p-5 my-6" style={{ backgroundColor: '#1c1917' }}>
                  <p className="text-lg italic leading-relaxed" style={{ margin: 0 }}>
                    {kapitola.quote.text}
                  </p>
                  <footer className="text-xs mt-3 opacity-60 font-sans">
                    {kapitola.quote.author}
                  </footer>
                </div>
              )}

              {kapitola.box && (
                <div className="border-2 border-stone-900 p-4 my-6">
                  <p className="text-[10px] tracking-widest uppercase text-stone-900 font-sans font-medium mb-2">
                    {kapitola.box.title}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {renderText(kapitola.box.text)}
                  </p>
                  {'note' in kapitola.box && kapitola.box.note && (
                    <p className="mt-3 pt-3 border-t border-stone-200 text-xs text-stone-500 font-sans leading-relaxed">
                      <span className="font-medium">Poznámka: </span>
                      {kapitola.box.note}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div
            className="pt-6 mt-10"
            style={{ borderTop: '3px solid #1c1917' }}
          >
            <p className="text-[10px] tracking-widest uppercase text-[#4a7c6f] font-sans font-medium mb-2">
              Kovářova myšlenka
            </p>
            <p className="text-xl italic text-stone-900 leading-relaxed">
              {kapitola.reflection}
            </p>
          </div>
        </article>
      )}

      {/* Navigation */}
      <nav className="border-t border-stone-200 bg-white px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => goToKapitola(Math.max(0, currentKapitola - 1))}
          disabled={currentKapitola === 0}
          className="px-5 py-2.5 rounded-lg border border-stone-200 text-sm font-sans text-stone-500 disabled:opacity-30"
        >
          ← Předchozí
        </button>
        <span className="text-sm text-stone-400 font-sans">
          {currentKapitola + 1} / {kapitoly.length}
        </span>
        <button
          onClick={() => goToKapitola(Math.min(kapitoly.length - 1, currentKapitola + 1))}
          disabled={currentKapitola === kapitoly.length - 1}
          className="px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-sans disabled:opacity-30"
        >
          Další →
        </button>
      </nav>

      {/* Cross-link to Otčenáš */}
      <div className="text-center py-6 border-t border-stone-100">
        <Link
          href="/otcenas"
          className="text-sm font-sans text-[#4a7c6f] hover:text-[#4a7c6f]/70 transition no-underline"
        >
          Číst také: Výklad Otčenáše — podle patriarchy Kováře →
        </Link>
      </div>

      {/* Kam dál — stránka jinak končí v prázdnu */}
      <div className="text-center py-8 px-6 border-t border-stone-100">
        <p className="text-sm text-stone-500 font-sans leading-relaxed mb-4">
          Takhle to začalo před sto lety. Chcete vidět, jak to vypadá dnes?
        </p>
        <FindCongregationLink variant="sage">
          Najít sbor blízko vás
        </FindCongregationLink>
      </div>

      {/* Source attribution */}
      <footer className="text-center py-8 text-xs text-stone-400 font-sans">
        Podle díla Dr. Františka Kováře „Království boží na zemi — K ideovým základům Církve československé“ (1920)
      </footer>
    </div>
  );
}
