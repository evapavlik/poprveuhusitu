'use client';

import { useState } from 'react';

// Data structure for all 7 petitions based on authentic Kovář text
const prosby = [
  {
    id: 1,
    label: 'Oslovení',
    title: 'Otče náš, jenž jsi v nebesích',
    titleEmphasis: 'v nebesích',
    deck: 'Že Ježíš nazýval Boha Otcem, je naprosto bezpečně dosvědčeno vzpomínkami svědků jeho života.',
    calmContent: [
      'Že Ježíš nazýval Boha Otcem, je naprosto bezpečně dosvědčeno vzpomínkami svědků Ježíšova života, jež se nám zachovaly v Evangeliích.',
      'Ježíš mluvil jazykem aramejským. Užil při tom k označení Boha výrazu, který byl řecky mluvícími křesťany přeložen slovem, neužívaným v jazyce spisovném. Také apoštol Pavel dosvědčuje, že křesťané i v řeckém prostředí užívali Ježíšova aramejského slova k označení Boha.',
      'To slovo zní: **Abbá** a znamená: Otec, Otec můj, Otec náš, Otče, Otče můj, Otče náš.',
      'Že Ježíš užíval pro označení a oslovení Boha výrazu aramejského, bylo něco zcela zvláštního. Tehdejší Židé také nazývali Boha Otcem, ale užívali k tomu jen hebrejského výrazu: *Áb*. Aramejština byla řečí lidovou, mluvilo se jí v běžném životě, zatímco hebrejština byla řečí starozákonní, posvátnou, jíž se užívalo jen v náboženství.',
      'Pro Ježíše nebyl Bůh jen od světa vzdálený, jak si jej tehdáž představovali Židé. Ale nebyl mu také Bohem jen blízkým, se světem a s člověkem splývajícím, jako si jej zase pohané představovali.',
      'Bůh Ježíšův, Bůh křesťanský, je **Bůh vzdálený i blízký**, blízký i vzdálený. Je něco jiného než svět a člověk, ale není něco světu a člověku nepřátelského.',
    ],
    quote: {
      text: '„Jakou posvátnou úctu mi toto vědomí vnuká, jak mě povznáší, jakou důvěrou a uklidňující jistotou mě plní!"',
      author: 'František Kovář',
    },
    magCol1: [
      'Ježíš mluvil jazykem aramejským a Evangelia, ač byla napsána jazykem řeckým, nám zachovala i aramejský výraz, jehož Ježíš pro Boha užíval. To slovo zní: **Abbá** a znamená: Otec, Otec můj, Otec náš.',
      'Že Ježíš užíval pro oslovení Boha výrazu aramejského, bylo něco zcela zvláštního. Tehdejší Židé také nazývali Boha Otcem, ale užívali k tomu jen hebrejského výrazu: *Áb*.',
    ],
    magCol2: [
      'Aramejského slova *abbá* se užívalo pro označení lidského otce v rodinném životě, tak jako našeho: tatínek. Jestliže ho Ježíš užil o Bohu a k oslovení Boha, bylo to něco překvapujícího.',
      'Bůh Ježíšův je **Bůh vzdálený i blízký**. Je něco jiného než svět a člověk, ale není něco světu a člověku nepřátelského, odděleného od nich naprosto nepřeklenutelnou propastí.',
    ],
    aside: {
      label: 'Rozdíl jazyků',
      text: 'Aramejština byla řečí lidovou, mluvilo se jí v běžném životě. Hebrejština byla řečí starozákonní, posvátnou, jíž se užívalo jen v náboženství.',
    },
    reflection: 'V ideji Božího otcovství je obsažena idea Božího synovství pro člověka. Nejsme Božími syny svou přirozeností, ale můžeme a máme se jimi stát.',
  },
  {
    id: 2,
    label: 'První prosba',
    title: 'Posvěť se jméno Tvé',
    titleEmphasis: 'Tvé',
    deck: 'Ve starozákonním myšlení znamená jméno nějaké bytosti tu bytost samu. Boží jméno je Bůh sám.',
    calmContent: [
      'Těmto slovům porozumíme správně jen tehdy, jestliže je chápeme ve shodě s dobou a prostředím, v nichž vznikla. Zaznívá z nich způsob myšlení a cítění starozákonního, v němž byl Ježíš vychován.',
      'Ve starozákonním myšlení znamená **jméno nějaké bytosti tu bytost samu**. Boží jméno je Bůh sám, Boží podoba. První prosba tedy vyslovuje přání, aby Bůh byl všude posvěcován, stal se svatým, byl svatý.',
      'Podle Starého zákona je Bůh svatý. Prorok Izaiáš ve vidění slyšel, jak serafínové volají: „Svatý, svatý, svatý Hospodin zástupů." Svatost Boží znamená Boží naprostou dokonalost, ve které není ani stínu zla a hříchu.',
      'Podle biblického přesvědčení Boží svatost vyžaduje, aby byla člověkem uznávána, a to tím, **že člověk plní Boží vůli**. Jestliže ji člověk neplní, neuzná Boží svatost, znesvěcuje Boha, jeho jméno.',
      'Splnění tohoto přání závisí zajisté na Bohu, neboť on řídí svět a má prostředky k tomu, aby lidi přivedl k uznání své svatosti. Proto nás Ježíš učí, abychom Boha prosili o splnění tohoto přání.',
      'Ale splnění tohoto přání závisí **také na člověku**. Vyslovuje-li to přání, přijímá na sebe zároveň závazek, přispěti podle svých sil k jeho splnění.',
    ],
    quote: {
      text: '„Tak svěť světlo vaše před lidmi, aby viděli vaše dobré skutky a velebili vašeho Otce v nebesích."',
      author: 'Matouš 5,16',
    },
    magCol1: [
      'Těmto slovům porozumíme správně jen tehdy, jestliže je chápeme ve shodě s dobou a prostředím, v nichž vznikla. Zaznívá z nich způsob myšlení starozákonního, v němž byl Ježíš vychován.',
      'Podle Starého zákona je Bůh svatý. Prorok Izaiáš ve vidění slyšel, jak serafínové volají: „Svatý, svatý, svatý Hospodin zástupů."',
    ],
    magCol2: [
      'Splnění přání závisí na Bohu, neboť on řídí svět a má prostředky k tomu, aby lidi přivedl k uznání své svatosti. Proto nás Ježíš učí, abychom Boha prosili.',
    ],
    box: {
      title: 'Co znamená „posvětit"?',
      text: 'Boží svatost vyžaduje, aby byla člověkem uznávána, a to tím, **že člověk plní Boží vůli**. Jestliže ji neplní, znesvěcuje Boha.',
    },
    aside: {
      label: 'Závazek člověka',
      text: 'Vyslovuje-li člověk toto přání, přijímá na sebe zároveň závazek, přispěti podle svých sil k jeho splnění. **Bůh uskutečňuje svou svatou vůli ve světě skrze lidi.**',
    },
    reflection: 'Býti křesťanem neznamená jen věřiti a modliti se, ale znamená také jednati, žíti ve shodě s vírou.',
  },
  {
    id: 3,
    label: 'Druhá prosba',
    title: 'Přijď království Tvé',
    titleEmphasis: 'Tvé',
    deck: 'Když Ježíš mluvil o království Božím, nemínil žádné území, nýbrž duchovní skutečnost, že Bůh je králem.',
    calmContent: [
      'Ježíš tu své učedníky a tedy i nás naučil, abychom Boha prosili o příchod jeho království. Co rozuměl tím Božím královstvím?',
      'Když my mluvíme o království, rozumíváme tím území, v němž vládne král. Když Ježíš mluvil o království Božím, nemínil žádné území ani místo, **nýbrž duchovní skutečnost, že Bůh je králem, vládcem, pánem**, rozuměl Boží kralování.',
      'Jeho krajané již celá staletí očekávali příchod království Božího a modlili se za něj. Ježíš jim nyní zvěstoval radostnou zprávu, že se přestalo blížit, že se již přiblížilo.',
      'Není tedy pochyby o tom, že Ježíšovi bylo království Boží skutečností již přítomnou na zemi. Bylo přítomno v něm a s ním. V jeho duši Bůh naprosto kraloval, on byl hlasatelem a nositelem, ale i uskutečňovatelem království Božího na zemi.',
      'Království Boží je tedy podle Ježíše **přítomné i budoucí**. Přítomné je ve svých začátcích, ale jednou bude dovršeno ve své plnosti. Zatím je jako síť, v níž jsou dobré i špatné ryby, jako pole, na němž roste koukol spolu s pšenicí, ale jednou bude samo vítězem naprostým.',
    ],
    quote: {
      text: '„Vždyť království Boží je již mezi vámi."',
      author: 'Lukáš 17,21',
    },
    magCol1: [
      'Ježíš tu své učedníky naučil, abychom Boha prosili o příchod jeho království. Co rozuměl tím Božím královstvím? Nemínil žádné území ani místo, nýbrž duchovní skutečnost, že Bůh je králem, vládcem, pánem.',
      'Židé Ježíšovy doby se také modlili o příchod království Božího, ale chápali království Boží národně politicky, rozuměli jím obnovení starého a mocného davidovského království.',
    ],
    magCol2: [
      'Ježíš však odmítl toto národně politické pojetí království Božího a chápal je nábožensko mravně. Království Boží mu bylo stavem lidské duše i lidské společnosti, v níž Bůh kraluje svou svatou mravní vůlí.',
    ],
    box: {
      title: 'Přítomné i budoucí',
      text: 'Přítomné je ve svých začátcích, ale jednou bude dovršeno ve své plnosti. Je jako síť s dobrými i špatnými rybami.',
    },
    aside: {
      label: 'Úkol člověka',
      text: 'Království Boží se nestává na zemi skutečností bez člověka. **Bůh musí kralovati v duších jednotlivců** a skrze ně v lidských společnostech.',
    },
    reflection: 'Království Boží je Božím darem, ale zároveň člověkovým úkolem, nejvyšším cílem, ale i odměnou.',
  },
  {
    id: 4,
    label: 'Třetí prosba',
    title: 'Buď vůle Tvá jako v nebi, tak i na zemi',
    titleEmphasis: 'Tvá',
    deck: 'Boží vůle má býti na zemi tak jako je v nebi. V nebi platí vůle Boží naprosto a dokonale.',
    calmContent: [
      'První skupina proseb modlitby Páně má ve znění Lukášově jen dvě prosby. Ve znění Matoušově má o jednu prosbu více. Tato třetí, jež je pouze u Matouše, zní: Buď vůle Tvá, jako v nebi, tak i na zemi.',
      'V této prosbě se vyslovuje přání, **aby Boží vůle platila na zemi tak, jako platí v nebi**. V nebi platí vůle Boží naprosto a dokonale. Jde tedy o království Boží čili nebeské na zemi, aby nebe se stalo skutečností i na zemi.',
      'Ježíš sám se tak podřizoval Boží vůli. Ukazuje nám to příklad jeho modlitby ve chvíli úzkosti v zahradě Getsemanské: „Abba, Otče, tobě je všecko možno; přenes mimo mne tento kalich. Ale ne co já chci, nýbrž co ty chceš."',
      'Je to odevzdanost do Boží vůle, která řídí svaté osudy. Takovou důvěryhodnou odevzdanost Ježíš od lidí žádal a sám ji žil.',
      'Boží vůlí se také nazývá řád, uložený světu a především mravní řád, uložený člověku. Boží vůle je duchovní moc, která chce dobré a odmítá všechno zlé. Taková svatá vůle platí naprostě ve světě Božím, v nebi. Ale na světě je zlo vedle dobra.',
      'Také splnění tohoto přání závisí na Bohu i na člověku, a kdo se ji modlí, přijímá zároveň osobní závazek člověka, učiniti ze své strany vše, co je v jeho moci, aby mravní vůle Boží byla na zemi plněna.',
    ],
    quote: {
      text: '„Ale ne co já chci, nýbrž co ty chceš."',
      author: 'Marek 14,36',
    },
    magCol1: [
      'V této prosbě se vyslovuje přání, aby Boží vůle platila na zemi tak, jako platí v nebi. V nebi platí vůle Boží naprosto a dokonale.',
      'Ježíš sám se tak podřizoval Boží vůli. Ukazuje nám to příklad jeho modlitby v zahradě Getsemanské.',
    ],
    magCol2: [
      'Boží vůlí se také nazývá mravní řád, uložený člověku. Boží vůle je duchovní moc, která chce dobré a odmítá všechno zlé.',
    ],
    box: {
      title: 'Odevzdanost',
      text: 'Je to odevzdanost do Boží vůle, která řídí svaté osudy. Takovou důvěryhodnou odevzdanost Ježíš od lidí žádal a sám ji žil.',
    },
    aside: {
      label: 'Závazek',
      text: 'Kdo se tuto prosbu modlí, přijímá zároveň osobní závazek **učiniti ze své strany vše**, aby mravní vůle Boží byla na zemi plněna.',
    },
    reflection: 'Činiti Boží vůli znamená podřizovati svou vůli Boží vůli. Modlíme-li se: Buď vůle Tvá, říkáme vlastně: Učiň Tvá vůle mou vůlí.',
  },
  {
    id: 5,
    label: 'Čtvrtá prosba',
    title: 'Chléb náš vezdejší dej nám dnes',
    titleEmphasis: 'vezdejší',
    deck: 'Ježíš nás naučil prosit Boha nejen o statky duchovní, ale také o potřeby časné, o to, čeho potřebujeme k zachování života.',
    calmContent: [
      'Čtvrtou prosbou se začíná druhá skupina proseb modlitby Páně. Jestliže v prvé šlo o to, co se týká Boha, ale co si má i člověk přát splněno, jde v druhé o to, co se týká člověka, ale co člověk nemůže mít splněno bez Boha.',
      'Ten, kdo tato slova se modlí, vyslovuje prosbu, aby mu Bůh dal chléb. **Chléb pak v biblické mluvě znamená pokrm vůbec, výživu, živobytí**, vše, čeho je třeba k zachování života, vše, co je podmínkou života.',
      'Pán Ježíš nás tedy naučil prosit Boha nejen o statky duchovní, jakéž jsou obsaženy v prvých třech i také v posledních třech prosbách modlitby Páně, nýbrž také o potřeby časné, o to, čeho potřebujeme k zachování života.',
      'Člověk, nepočítající s Bohem, ovšem řekne: Proč bych prosil Boha o chléb a o živobytí? Vydělám si je sám svým přičiněním, svou prací. Záleží na mě, abych měl živobytí, nanejvýš na jiných lidech, ale Bůh s tím nemá co dělat!',
      'Ale člověk, který nejde světem hluchý a slepý, ví, že jeho živobytí nezáleží jen na něm a jen na ostatních lidech. Ani zajištění chleba samého nespočívá jen v lidských rukách. Abychom měli chléb, nestačí zasít obilí; musí se urodit, a k tomu musí být vhodné podmínky přírodní.',
      'Moje a naše práce se neobejde bez Boží pomoci. Jsme závislí na dárci života a zdraví, na Pánu a vládci světa, lidstva, národů i jednotlivých.',
    ],
    quote: {
      text: '„Nestarejte se tedy a neříkejte: Co budeme jísti? nebo Co budeme píti? nebo Čím se budeme odívati?"',
      author: 'Matouš 6,31',
    },
    magCol1: [
      'Ten, kdo tato slova se modlí, vyslovuje prosbu, aby mu Bůh dal chléb. Chléb pak v biblické mluvě znamená pokrm vůbec, výživu, živobytí, vše, čeho je třeba k zachování života.',
      'Pán Ježíš nás naučil prosit Boha nejen o statky duchovní, nýbrž také o potřeby časné.',
    ],
    magCol2: [
      'Člověk, který nejde světem hluchý a slepý, ví, že jeho živobytí nezáleží jen na něm. Abychom měli chléb, nestačí zasít obilí; musí se urodit.',
    ],
    box: {
      title: 'Proč „vezdejší"?',
      text: 'Ježíš nás naučil modlit se o vezdejší, denní chléb, nikoli o maso, hostiny, rozkoše a bohatství. K zajištění existence stačí splnění podmínek skromných.',
    },
    aside: {
      label: 'Závislost na Bohu',
      text: 'Moje a naše práce se neobejde bez Boží pomoci. **Jsme závislí na dárci života a zdraví**, na Pánu a vládci světa.',
    },
    reflection: 'Ježíš nás nenaučil modlit se: chléb můj dej mně, nýbrž chléb náš dej nám. Křesťan nemyslí nikdy jen na sebe, nýbrž jako pravý syn na celou rodinu bratří a sester.',
  },
  {
    id: 6,
    label: 'Pátá prosba',
    title: 'Odpusť nám naše viny',
    titleEmphasis: 'viny',
    deck: 'Ježíšovi byl hřích věcí nesmírně vážnou. Hřích znamená totéž jako odchod syna od otce, odchod do ciziny.',
    calmContent: [
      'Nejdelší prosbou modlitby Páně je prosba pátá. V aramejštině, kterou mluvil Ježíš a ve které po prvé byl Otčenáš pronesen, byl pro hřích i vinu jeden a týž výraz.',
      'Ježíšovi byl hřích věcí nesmírně vážnou. Dal to najevo svými slovy i skutky, jak to plynulo z jeho přímé znalosti Boha. Z Ježíšova podobenství o marnotratném synu poznáváme, že **hřích znamená totéž jako odchod syna od otce, odchod do ciziny**.',
      'Hřích je vědomé a dobrovolné přestoupení mravní vůle Boží, je to stav oddělenosti od Boha. Člověk každý je podle Ježíše stvořen od Boha pro Boha, úkolem a cílem jeho života je stávat se synem Božím.',
      'Ale hříchem se člověk vzdaluje od Boha, odmítá být jeho synem, odmítá obecenství s Bohem, království Boží i život věčný a volí opak.',
      'Proto Ježíš tak naléhavými slovy napomínal, abychom se varovali hříchu, a to v samých jeho začátcích v našem nitru. Ale Ježíš také počítal s lidskou slabostí. Člověk může podlehnouti té své slabosti a může se rozhodnout pro hřích.',
      'Ale v jeho moci také je v hříchu nesetrvat a jej napravit. Marnotratný syn poznal ve světě cenu otcovského domu, uvědomil si otcovu lásku, poznal svůj hřích, rozhodl se přerušit svůj pobyt ve světě, vrátit se k otci, poprosit jej s lítostí za odpuštění.',
    ],
    quote: {
      text: '„Jakož i my odpouštíme viníkům našim."',
      author: 'Matouš 6,12',
    },
    magCol1: [
      'Ježíšovi byl hřích věcí nesmírně vážnou. Z jeho podobenství o marnotratném synu poznáváme, že hřích znamená totéž jako odchod syna od otce, odchod do ciziny.',
      'Hřích je vědomé a dobrovolné přestoupení mravní vůle Boží, je to stav oddělenosti od Boha.',
    ],
    magCol2: [
      'Ježíš nás ze své znalosti nebeského Otce ujistil, že Otec čeká návrat marnotratného syna s otevřenou náručí a odpustí a lásku mu projevuje ještě dřív než syn s lítostí vyzná svůj hřích.',
    ],
    box: {
      title: 'Podmínka odpuštění',
      text: 'Odpuštění bližnímu je podmínkou nezbytnou. **Musíme i my odpustit hříchy a viny bližním**, kteří se provinili proti nám.',
    },
    aside: {
      label: 'Náš závazek',
      text: 'Ve chvíli kdy prosíme Boha za odpuštění svých hříchů a vin, musíme být v situaci, že jsme v duši provedli odpuštění svým bližním.',
    },
    reflection: 'Odpuštění hříchů od Boha je zajisté věcí, na které člověku musí záležeti, neboť bez sjednocení s Bohem míjí se cíle a smyslu svého života.',
  },
  {
    id: 7,
    label: 'Šestá a sedmá prosba',
    title: 'Neuvoď nás v pokušení, ale zbav nás od zlého',
    titleEmphasis: 'pokušení',
    deck: 'V páté prosbě nás Ježíš naučil modlit se za odpuštění hříchu, kterých jsme se dopustili v minulosti. V této prosbě nás učí modlit se, abychom neupadli do hříchu v budoucnosti.',
    calmContent: [
      'Abychom těm slovům správně porozuměli, musíme je chápat tak, jak je chápali lidé v době a prostředí, v nichž vznikla. Řecké slovo *peirasmos* znamená zkoušku i pokušení.',
      'Zkouškami se rozumějí těžké a nebezpečné životní události, kterými člověk prochází, aby byl vyzkoušen, zdali a jak se osvědčí či neosvědčí. Takové **zkoušky života mohou ovšem snadno znamenat také pokušení**, neboť se mohou stát příležitostí, aby v nich člověk neobstál.',
      'V páté prosbě nás Ježíš naučil modlit se za odpuštění hříchu, kterých jsme se dopustili v minulosti. V této prosbě nás učí modlit se, abychom neupadli do hříchu v budoucnosti.',
      'Ježíš znal dobře člověkovu slabost i člověkovu mravní povinnost a závaznost vůči Bohu. Znal také Boží sílu a Otcovu ochotu pomáhati dětem. Naučil nás, že musíme čeliti pokušení a že při tom má důležitý význam modlitba.',
      'Touto prosbou Otčenáše prosíme Boha, aby nás chránil příležitostí k hříchu, které by byly pokušením nad naše síly, aby od nás odvrátil nebezpečí hříchu. Prosíme ji však také, aby nám Bůh pro případy pokušení poskytl svou pomoc a sílu, abychom pokušení odolali a nepodlehli.',
      'Poslední prosba: Ale zbav nás od zlého, je rozšířením a doplněním proseb předchozích. K prosbě za odpuštění hříchů a za ochranu před pokušením k hříchu přistupuje prosba za ochranu před zlem vůbec.',
    ],
    quote: {
      text: '„Bděte a modlete se, abyste neupadli do pokušení."',
      author: 'Marek 14,38',
    },
    magCol1: [
      'Řecké slovo *peirasmos* znamená zkoušku i pokušení. Zkouškami se rozumějí těžké životní události, kterými člověk prochází, aby byl vyzkoušen, zdali se osvědčí.',
      'V páté prosbě jsme prosili za odpuštění hříchu z minulosti. V této prosbě prosíme, abychom neupadli do hříchu v budoucnosti.',
    ],
    magCol2: [
      'Prosíme Boha, aby nás chránil příležitostí k hříchu, které by byly pokušením nad naše síly. Prosíme také, aby nám Bůh poskytl sílu, abychom pokušení odolali.',
    ],
    box: {
      title: 'Zbav nás od zlého',
      text: 'K prosbě za odpuštění hříchů a za ochranu před pokušením přistupuje prosba **za ochranu před zlem vůbec** — fyzickým i mravním.',
    },
    aside: {
      label: 'Náš závazek',
      text: 'Modlíce se tuto prosbu, přijímáme závazek, že se budeme varovat příležitostí k hříchu a že se ze své strany učiníme vše, čím bychom svou vůli proti hříchu posilovali.',
    },
    reflection: 'I tato prosba je tedy výrazným příspěvkem k obsahu křesťanské víry. Jde o spolučinnost Boha a člověka, člověka a Boha na díle tvoření.',
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

export default function OtcenasPage() {
  const [mode, setMode] = useState<'calm' | 'mag'>('mag');
  const [currentProsba, setCurrentProsba] = useState(0);

  const goToProsba = (index: number) => {
    setCurrentProsba(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prosba = prosby[currentProsba];

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
        <a href="/pruvodce" className="text-sm text-stone-400 font-sans hover:text-stone-600 transition">
          ← Zpět na průvodce
        </a>
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
        {prosby.map((_, i) => (
          <button
            key={i}
            onClick={() => goToProsba(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentProsba ? 'w-6 bg-stone-700' : 'w-2 bg-stone-300'
            }`}
          />
        ))}
      </div>

      {/* Author intro - shown on first petition */}
      {currentProsba === 0 && (
        <div className="max-w-[540px] mx-auto px-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[44px] h-[44px] rounded-full overflow-hidden shrink-0 ring-1 ring-[#4a7c6f]/30">
              <img
                src="/frantisek-kovar.jpg"
                alt="Portrét Dr. Františka Kováře"
                className="w-full h-full object-cover object-top"
                style={{
                  filter: 'sepia(1) saturate(1.2) hue-rotate(-10deg) contrast(0.95) brightness(0.95)',
                  mixBlendMode: 'multiply',
                }}
              />
            </div>
            <p className="text-sm font-medium font-sans tracking-wide" style={{ color: '#4a7c6f' }}>
              Dr. František Kovář · 1888–1969 · druhý biskup-patriarcha
            </p>
          </div>
          <p className="text-[15px] leading-[1.8] text-stone-500 font-sans">
            Profesor Husovy bohoslovecké fakulty a překladatel Nového zákona z řečtiny do češtiny. Tento výklad Otčenáše napsal v roce 1952 pro studenty teologie.
          </p>
        </div>
      )}

      {/* Content */}
      {mode === 'calm' ? (
        // KONTEMPLATIVNÍ MÓD
        <article className="max-w-[540px] mx-auto px-6 pb-12">
          <p className="text-xs tracking-widest uppercase text-stone-400 font-sans text-center mb-8">
            Výklad modlitby Páně · {prosba.label}
          </p>
          <h1 className="text-2xl text-stone-900 text-center mb-12 leading-relaxed">
            {prosba.title}
          </h1>

          <div className="text-lg text-stone-600 leading-loose space-y-7">
            {prosba.calmContent.map((paragraph, i) => (
              <p key={i}>{renderText(paragraph)}</p>
            ))}
          </div>

          {prosba.quote && (
            <blockquote className="my-10 text-center px-4">
              <p className="text-xl italic text-stone-500 leading-relaxed mb-3">
                {prosba.quote.text}
              </p>
              <footer className="text-sm text-stone-400 font-sans">
                — {prosba.quote.author}
              </footer>
            </blockquote>
          )}

          <div className="mt-16 pt-8 text-center">
            <p className="text-xs tracking-widest uppercase text-stone-400 font-sans mb-4">
              Kovářova myšlenka
            </p>
            <p className="text-xl italic text-stone-700 leading-relaxed">
              {prosba.reflection}
            </p>
          </div>
        </article>
      ) : (
        // MAGAZÍNOVÝ MÓD
        <article className="max-w-[700px] mx-auto px-6 pb-12">
          {/* Header - only bottom black line like original */}
          <div 
            className="py-6 mb-8"
            style={{ borderBottom: '3px solid #1c1917' }}
          >
            <p className="text-xs tracking-widest uppercase text-[#4a7c6f] font-sans font-medium mb-4">
              Modlitba Páně · {prosba.label}
            </p>
            <h1 className="text-4xl text-stone-900 leading-tight tracking-tight" style={{ fontSize: '38px' }}>
              {prosba.title.split(prosba.titleEmphasis)[0]}
              <em className="font-normal">{prosba.titleEmphasis}</em>
              {prosba.title.split(prosba.titleEmphasis)[1] || ''}
            </h1>
            <p className="text-lg text-stone-600 mt-4 leading-relaxed">
              {prosba.deck}
            </p>
          </div>

          {/* Two columns - always two columns like the original widget */}
          <div className="mag-columns">
            {/* Column 1 - text + aside at bottom */}
            <div className="text-[15px] text-stone-700 space-y-4" style={{ lineHeight: '1.75' }}>
              {prosba.magCol1.map((paragraph, i) => (
                <p key={i}>
                  {i === 0 && (
                    <span style={{ fontSize: '3.2rem', float: 'left', lineHeight: '0.85', paddingRight: '0.5rem', paddingTop: '0.2rem', fontWeight: 400, color: '#1c1917' }}>
                      {paragraph.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? renderText(paragraph.slice(1)) : renderText(paragraph)}
                </p>
              ))}

              {/* Aside in left column like original */}
              {prosba.aside && (
                <div 
                  className="p-4 my-6"
                  style={{ backgroundColor: '#eaf3f1', borderLeft: '3px solid #4a7c6f' }}
                >
                  <p className="text-[10px] tracking-widest uppercase text-[#4a7c6f] font-sans font-medium mb-1">
                    {prosba.aside.label}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {renderText(prosba.aside.text)}
                  </p>
                </div>
              )}
            </div>

            {/* Column 2 - text + quote + more text */}
            <div className="text-[15px] text-stone-700 space-y-4" style={{ lineHeight: '1.75' }}>
              {prosba.magCol2.map((paragraph, i) => (
                <p key={i}>
                  {i === 0 && (
                    <span style={{ fontSize: '3.2rem', float: 'left', lineHeight: '0.85', paddingRight: '0.5rem', paddingTop: '0.2rem', fontWeight: 400, color: '#1c1917' }}>
                      {paragraph.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? renderText(paragraph.slice(1)) : renderText(paragraph)}
                </p>
              ))}

              {/* Pull-quote in right column like original */}
              {prosba.quote && (
                <div className="text-white p-5 my-6" style={{ backgroundColor: '#1c1917' }}>
                  <p className="text-lg italic leading-relaxed" style={{ margin: 0 }}>
                    {prosba.quote.text}
                  </p>
                  <footer className="text-xs mt-3 opacity-60 font-sans">
                    {prosba.quote.author}
                  </footer>
                </div>
              )}

              {/* Box in left column for some prosba - move to condition check */}
              {prosba.box && (
                <div className="border-2 border-stone-900 p-4 my-6">
                  <p className="text-[10px] tracking-widest uppercase text-stone-900 font-sans font-medium mb-2">
                    {prosba.box.title}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {renderText(prosba.box.text)}
                  </p>
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
              {prosba.reflection}
            </p>
          </div>
        </article>
      )}

      {/* Navigation */}
      <nav className="border-t border-stone-200 bg-white px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => goToProsba(Math.max(0, currentProsba - 1))}
          disabled={currentProsba === 0}
          className="px-5 py-2.5 rounded-lg border border-stone-200 text-sm font-sans text-stone-500 disabled:opacity-30"
        >
          ← Předchozí
        </button>
        <span className="text-sm text-stone-400 font-sans">
          {currentProsba + 1} / {prosby.length}
        </span>
        <button
          onClick={() => goToProsba(Math.min(prosby.length - 1, currentProsba + 1))}
          disabled={currentProsba === prosby.length - 1}
          className="px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-sans disabled:opacity-30"
        >
          Další →
        </button>
      </nav>

      {/* Source attribution */}
      <footer className="text-center py-8 text-xs text-stone-400 font-sans">
        Podle díla Dr. Františka Kováře „Výklad Otčenáše" (1952)
      </footer>
    </div>
  );
}
