import{chatWithAIProxy as je}from"./ai-chat-proxy-D2xiLy3b.js";import{d6 as R,d5 as Se,b as j,fs as Pe}from"./main-app-BHMLsxig.js";const S={FLASH_LEGACY:"gemini-3-flash",FLASH_AGENT:"gemini-3.5-flash",PRO_CZECH:"gemini-3.1-pro",PRO_LEGACY:"gemini-3-pro"};function Oe(e){return(e||"").trim().toLowerCase()==="dejepis"}function re(e){return(e||"").trim().toLowerCase()==="informatika"}function we(e,t="agent"){return Oe(e)||re(e)?t==="text"?re(e)?S.PRO_LEGACY:S.PRO_CZECH:t==="fast"?S.FLASH_LEGACY:S.FLASH_AGENT:(e||"").trim().toLowerCase()==="zemepis"&&t==="text"?S.PRO_CZECH:t==="text"?S.PRO_LEGACY:t==="fast"?S.FLASH_LEGACY:S.PRO_LEGACY}const se={dejepis:"Dějepis",zemepis:"Zeměpis",cestina:"Český jazyk",anglictina:"Anglický jazyk",nemcina:"Německý jazyk",francouzstina:"Francouzský jazyk",matematika:"Matematika",prirodopis:"Přírodopis",fyzika:"Fyzika",chemie:"Chemie",informatika:"Informatika",cestina_1st:"Český jazyk (1. st.)",matematika_1st:"Matematika (1. st.)",anglictina_1st:"Anglický jazyk (1. st.)",prvouka:"Prvouka",prirodoveda:"Přírodověda",vlastiveda:"Vlastivěda",hudebni_vychova:"Hudební výchova",vytvarna_vychova:"Výtvarná výchova",telesna_vychova:"Tělesná výchova",pracovni_cinnosti:"Pracovní činnosti"},Re={1:"1. třída",2:"2. třída",3:"3. třída",4:"4. třída",5:"5. třída",6:"6. třída",7:"7. třída",8:"8. třída",9:"9. třída"},zt={1:"září",2:"září",3:"září",4:"září",5:"říjen",6:"říjen",7:"říjen",8:"říjen",9:"listopad",10:"listopad",11:"listopad",12:"listopad",13:"prosinec",14:"prosinec",15:"prosinec",16:"prosinec",17:"leden",18:"leden",19:"leden",20:"leden",21:"únor",22:"únor",23:"únor",24:"únor",25:"březen",26:"březen",27:"březen",28:"březen",29:"duben",30:"duben",31:"duben",32:"duben",33:"květen",34:"květen",35:"květen",36:"květen",37:"červen",38:"červen",39:"červen",40:"červen"},At=["rvp_scout","planner","data_collector","creator"],Te=[{key:"rvp",label:"RVP info"},{key:"content",label:"Obsah"},{key:"media",label:"Média / obrázky"}],A=new Map,ce="curriculum-agent-config-local-overrides",Ce=new Set(["anglictina","anglictina_1st","nemcina","francouzstina"]);function H(){return new Date().toISOString()}function le(){try{return`local-${crypto.randomUUID()}`}catch{return`local-${Date.now()}-${Math.random().toString(36).slice(2)}`}}function ue(e,t){return e&&t?"subject_grade":e?"subject_default":t?"grade_default":"global_default"}function W(){try{if(typeof window>"u")return[];const e=JSON.parse(window.localStorage.getItem(ce)||"[]");return Array.isArray(e)?e.filter(t=>t&&typeof t=="object"&&t.agentKey).map(t=>({id:String(t.id||le()),agentKey:t.agentKey,subjectCode:t.subjectCode??null,grade:t.grade??null,scope:t.scope||ue(t.subjectCode,t.grade),config:t.config||{},isActive:!!(t.isActive??!0),notes:t.notes??null,createdAt:t.createdAt||t.updatedAt||H(),updatedAt:t.updatedAt||H()})):[]}catch{return[]}}function de(e){try{if(typeof window>"u")return;window.localStorage.setItem(ce,JSON.stringify(e))}catch{}}function N(e,t,a,o){return e.agentKey===t&&(e.subjectCode??null)===(a??null)&&(e.grade??null)===(o??null)}function B(e){const t=e.updatedAt||H(),a=W(),o=a.find(s=>N(s,e.agentKey,e.subjectCode,e.grade)),n={id:e.id||o?.id||le(),agentKey:e.agentKey,subjectCode:e.subjectCode??null,grade:e.grade??null,scope:ue(e.subjectCode,e.grade),config:e.config,isActive:e.isActive??o?.isActive??!0,notes:e.notes??o?.notes??null,createdAt:e.createdAt||o?.createdAt||t,updatedAt:t};return de([n,...a.filter(s=>!N(s,e.agentKey,e.subjectCode,e.grade))]),n}function Ne(e){const t=W();de(t.filter(a=>a.id!==e))}function G(e){return W().filter(t=>t.agentKey===e)}const D=["text","board-easy","board-hard","worksheet","textbook-page","test","lessons","methodology"],xe=["vocabulary-set","language-quiz","grammar-lesson","reading-activity","listening-activity","writing-activity","speaking-activity","unit-plan","methodology"],me={text:{label:"Učební text",description:"Souvislý výklad k tématu",outputKind:"document"},"board-easy":{label:"Board Easy",description:"Jednodušší procvičovací VividBoard",outputKind:"board"},"board-hard":{label:"Board Hard",description:"Náročnější procvičovací VividBoard",outputKind:"board"},worksheet:{label:"Pracovní list",description:"Tisknutelný pracovní list",outputKind:"worksheet"},"textbook-page":{label:"List učebnice",description:"Stránka do učebnice nebo workbooku",outputKind:"worksheet"},test:{label:"Písemka / test",description:"Samostatné ověření znalostí",outputKind:"board"},lesson:{label:"Lekce",description:"Jedna připravená lekce",outputKind:"document"},lessons:{label:"Lekce",description:"Sada lekcí nebo lesson wizard",outputKind:"document"},methodology:{label:"Metodika",description:"Pokyny pro učitele",outputKind:"document"},hodnoceni:{label:"Hodnocení",description:"Výstupní hodnocení pro milestone",outputKind:"document"},"vocabulary-set":{label:"Slovní zásoba",description:"Flashcards, překlady, příklady",outputKind:"board"},"language-quiz":{label:"Jazykový kvíz",description:"Interaktivní kvíz pro jazyk",outputKind:"board"},"grammar-lesson":{label:"Gramatická lekce",description:"Pravidlo, cvičení, použití",outputKind:"worksheet"},"reading-activity":{label:"Čtení",description:"Text a otázky s porozuměním",outputKind:"worksheet"},"listening-activity":{label:"Poslech",description:"Audioskript a poslechové úkoly",outputKind:"worksheet"},"writing-activity":{label:"Psaní",description:"Psaný výstup a scaffold",outputKind:"worksheet"},"speaking-activity":{label:"Mluvení",description:"Diskuse, role-play, otázky",outputKind:"board"},"unit-plan":{label:"Plán lekce",description:"Cíle, aktivity, hodnocení",outputKind:"document"}},_e={document:"text",board:"board-easy",worksheet:"worksheet"};function pe(e){return!!(e&&Ce.has(e))}const Ie=[...D,"vocabulary-set"],Ee=[...D,"vocabulary-set"],De=[...D,"methodology"];function Y(e){return e==="zemepis"?Ie:e==="dejepis"?Ee:e==="informatika"?De:pe(e)?xe:D}function ke(e){return Y(e).map(t=>{const a=t,o=me[a],n=e==="zemepis"&&t==="vocabulary-set",s=e==="dejepis"&&t==="vocabulary-set",l=e==="informatika"&&t==="methodology",r=e==="informatika"&&t==="text";return{id:t,label:n||s?"Kartičky pojmů":l?"Metodika + miniaplikace":o?.label||String(t),description:n?"Flashcards: pojem, obrázek nebo mapa, vysvětlení":s?"Flashcards: pojem, datum, osobnost, pramen, obrázek":l?"Pokyny pro učitele a specifikace navazné miniaplikace":o?.description||"",outputKind:o?.outputKind||"document",baseType:a,prompt:n?`Vytvoř zeměpisné kartičky pojmů k tématu [[Téma]] pro [[Ročník]]. třídu.

Nejde o cizojazyčnou slovní zásobu.
Přední strana kartičky: složitější pojem, jev nebo místopisný objekt + vhodný obrázek nebo mapa.
Zadní strana kartičky: krátké odborně správné vysvětlení pro žáka.
U místopisu můžeš použít vztahy místo-mapa, místo-stát, místo-kontinent.
Vybírej pojmy, které pomáhají chápat souvislosti, ne izolovaný seznam slov.`:s?`Vytvoř dějepisné kartičky k tématu [[Téma]] pro [[Ročník]]. třídu.

Typy párů (mix dle tématu): pojem–definice, datum–událost, osobnost–kontext, pramen–interpretace, pojem–obrázek.
Přední strana: pojem, datum, jméno osobnosti nebo úryvek pramene (+ portrét/obrázek kde dává smysl).
Zadní strana: stručné vysvětlení v kontextu období a souvislostí.
Vybírej pojmy, které pomáhají chápat příčiny a důsledky, ne izolovaný seznam faktů.`:l?`Vytvoř metodiku pro informatiku k tématu [[Téma]] pro [[Ročník]]. třídu.

Metodika musí popsat hybridní lekci: tisknutelný pracovní list + učební text + navazná miniaplikace.
Uveď cíl, klíčový informatický koncept, průběh hodiny, co žák zapisuje na papír, co dělá v miniaplikaci, jak dostane zpětnou vazbu, typické chyby a bezpečnostní/etické poznámky tam, kde dávají smysl.
Miniaplikaci neimplementuj; napiš její specifikaci: vstupy, pravidla, interakce, feedback a portfolio výstup.`:r?`Napiš PODROBNÝ výukový text k tématu [[Téma]] pro [[Ročník]]. třídu ZŠ.

Pracuj s:
[[Podklady z datasetu]]
[[Poznámky učitele]]
[[Ilustrace]]
[[Fotky]]
[[Obrázky z webu]]
[[Galerie obrázků]]

ZAMĚŘENÍ INFORMATIKY:
- Nejde o ovládání kancelářských programů.
- Vysvětli informatický koncept přes konkrétní problém, příklad, postup a test.
- Kde to dává smysl, propojuj text s budoucí miniaplikací: co žák v aplikaci změní, spustí, ověří nebo odladí.
- Piš česky, věcně, pro žáka [[Ročník]]. třídy.

FORMÁT TEXTU (NEZAČÍNEJ H1 nadpisem - ten je automaticky z názvu dokumentu):

## Problém týdne
Text odstavce (3-5 vět): co řešíme, proč to dává smysl, kde se s tím žák potká.

## Klíčový koncept
IlustraceH2: Název ilustrace ze seznamu (pokud se hodí)
Text odstavce s vysvětlením pojmu/principu a jedním konkrétním příkladem.

## Ukázka krok za krokem
ObrázekH2: Název obrázku ze seznamu (volitelné)
Popiš worked example: vstup, postup, výstup, kontrola.

## Co si žák vyzkouší
Popiš experiment, miniaplikaci nebo papírový model: co žák mění, co pozoruje, jak pozná chybu.

## Typická chyba
INFOBOX oranžový: Pozor
Krátce popiš časté nedorozumění a jak ho odhalit testem.

## 📚 Důležité pojmy
- **Pojem 1** – stručná definice
- **Pojem 2** – stručná definice
- **Pojem 3** – stručná definice
(5-8 klíčových pojmů)

## 🧭 Postup / model
- Krok nebo část modelu 1
- Krok nebo část modelu 2
- Krok nebo část modelu 3

## ✅ Shrnutí a reflexe
3-5 vět: co si má žák odnést, jak by poznal správné řešení, kde je limit modelu/postupu.

PRAVIDLA:
- 500-800 slov celkem.
- Vrať markdown text, NE JSON.
- Nepiš ContentPlan, selectedImages ani pole sections.
- Nepiš „Důležitá data“ ani „Důležité osobnosti“, pokud téma výjimečně není historické.
- Obrázkové direktivy používej jen s přesnými názvy z dostupných médií.
- Každý obrázek/ilustraci použij max 1x.`:x(t)}})}function jt(e,t){const a=ke(t),o=new Map(a.map(r=>[r.id,r])),n=e?.materialProfile?.creatorFormats||[],s=new Map;for(const r of[...a,...n]){if(!r?.id)continue;const c=o.get(r.id),m=r.outputKind||c?.outputKind||"document",i=t==="zemepis"&&r.id==="vocabulary-set",u=t==="dejepis"&&r.id==="vocabulary-set",p=t==="informatika"&&r.id==="methodology",k=r.label==="Slovní zásoba";s.set(r.id,{id:r.id,label:(i||u)&&(!r.label||k)?"Kartičky pojmů":p&&(!r.label||r.label==="Metodika")?"Metodika + miniaplikace":r.label||c?.label||String(r.id),description:i&&(!r.description||r.description==="Flashcards, překlady, příklady")?"Flashcards: pojem, obrázek nebo mapa, vysvětlení":u&&(!r.description||r.description==="Flashcards, překlady, příklady")?"Flashcards: pojem, datum, osobnost, pramen, obrázek":p&&(!r.description||r.description==="Pokyny pro učitele")?"Pokyny pro učitele a specifikace navazné miniaplikace":r.description??c?.description??"",outputKind:m,baseType:r.baseType||c?.baseType||_e[m],prompt:Ve(r.id,r.prompt??c?.prompt)})}return(e?.materialProfile?.enabledTypes?.length?e.materialProfile.enabledTypes:a.map(r=>r.id)).map(r=>s.get(r)||{id:r,label:String(r),description:"",outputKind:"document",baseType:"text",prompt:x(r)})}function x(e){const t=e,o=me[t]?.label||String(e);switch(t){case"board-easy":case"board-hard":return`Vytvoř interaktivní procvičování k tématu [[Téma]] pro [[Ročník]]. třídu.
Obtížnost: [[Obtížnost]]

Pracuj s:
[[Podklady z datasetu]]
[[Poznámky učitele]]
[[Média]]

===== STRUKTURA PROCVIČOVÁNÍ =====
Vygeneruj mix aktivit v tomto pořadí:
1. [[Počet ABC otázek]]x ABC OTÁZKA (většina)
2. 1x SPOJOVAČKA (propojování dvojic)
3. 1x DOPLŇOVAČKA (doplnění slov do mezer)

===== FORMÁTY =====

ABC OTÁZKA:
OTÁZKA: Text otázky?
A) možnost
B) správná odpověď *
C) možnost
D) možnost

SPOJOVAČKA (4 dvojice):
SPOJOVAČKA: Spoj správné dvojice
Pojem1 | Význam1
Pojem2 | Význam2
Pojem3 | Význam3
Pojem4 | Význam4

DOPLŇOVAČKA (2-3 věty):
DOPLŇOVAČKA: Doplň chybějící slova
Text věty s ___ mezerou. = správná odpověď
Další věta s ___. = odpověď

===== PRAVIDLA PRO OBRÁZKY =====
[[Pravidla pro obrázky]]

ZAČNI GENEROVAT:`;case"worksheet":return`Jsi pedagogický expert. Vytvoř plán obsahu pracovního listu pro žáky.

Použij podobné vzory:
[[RAG vzory]]

## VSTUPNÍ DATA
Téma: [[Téma]]
Předmět: [[Předmět]]
Ročník: [[Ročník]]. třída

## OBSAH Z DATASETU
[[Podklady z datasetu]]

## DOSTUPNÉ OBRÁZKY A ILUSTRACE
[[Obrázky a ilustrace]]

## PRAVIDLA PRO PRACOVNÍ LIST
- Vždy začni s "intro" sekcí (shrnutí tématu)
- Zahrni sekci "vocabulary" pro klíčové pojmy
- Mix cvičení: alespoň 2 různé typy (multiple-choice, fill-blank, connect-pairs, free-answer)
- Konec: "summary" sekce
- Obrázky z datasetu jsou primární zdroj
- Pro selectedImages použij přesné url z dostupných obrázků

## ÚKOL
Vytvoř ContentPlan jako JSON:
1. title
2. learningGoal
3. difficulty: "easy" | "medium" | "hard"
4. estimatedTimeMinutes
5. selectedImages: 1-3 obrázky z dostupných (přesné URL)
6. sections: 6-10 sekcí

Pro každou sekci:
- type: "intro" | "vocabulary" | "exercise-multiple-choice" | "exercise-fill-blank" | "exercise-free-answer" | "exercise-connect-pairs" | "timeline" | "reading" | "summary"
- title, content, items, layoutHint

Výstup: POUZE validní JSON, žádný jiný text.`;case"textbook-page":return`Jsi pedagogický expert. Vytvoř plán obsahu stránky učebnice pro žáky.

Použij podobné vzory:
[[RAG vzory]]

## VSTUPNÍ DATA
Téma: [[Téma]]
Předmět: [[Předmět]]
Ročník: [[Ročník]]. třída
[[Zdrojový text]]

## OBSAH Z DATASETU
[[Podklady z datasetu]]

## DOSTUPNÉ OBRÁZKY A ILUSTRACE
[[Obrázky a ilustrace]]

## PRAVIDLA PRO LIST UČEBNICE
- Toto je UČEBNÍ TEXT (stránka z učebnice), NE pracovní list s úkoly
- Hlavní obsah: čtivé výkladové texty, vysvětlení pojmů, příběhy osobností, zajímavosti
- Obrázky: POVINNĚ vyber 2-4 obrázky z datasetu
- Cvičení: MAX 1-2 krátká cvičení na konci, zbytek je text
- Sekce: 5-8 sekcí, převaha "reading", "intro", "timeline", "vocabulary"
- Styl: přístupný, zajímavý, jako dobrá učebnice
- Délka textů: obsáhlejší odstavce (8-15 vět), ne krátké bullet pointy
- Konec: "summary" sekce s klíčovými poznatky

Výstup: POUZE validní JSON ContentPlan, žádný jiný text.`;case"text":return`Napiš PODROBNÝ výukový text k tématu [[Téma]] pro [[Ročník]]. třídu ZŠ.

Pracuj s:
[[Podklady z datasetu]]
[[Poznámky učitele]]
[[Ilustrace]]
[[Fotky]]
[[Obrázky z webu]]
[[Galerie obrázků]]

FORMÁT TEXTU (NEZAČÍNEJ H1 nadpisem - ten je automaticky z názvu dokumentu):

## Podnadpis sekce 1
Prostredi3dH2: Název 3D prostředí ze seznamu (360° panorama – PŘEDNOST u vhodných sekcí)
IlustraceH2: Název ilustrace ze seznamu (PREFERUJ - pro vygenerované ikony/ilustrace)
FotkaH2: Název fotky ze seznamu (pro vygenerované fotografie)
ObrázekH2: Název obrázku ze seznamu (pro fotky z webu - POUZE pokud nejsou lepší ilustrace/fotky)
SkupinaH2: Název skupiny ze seznamu (pro galerii více obrázků najednou)
Text odstavce (3-5 vět s konkrétními fakty a příklady)...

INFOBOX modrý: Věděli jste?
Zajímavost nebo překvapivý fakt.

## Podnadpis sekce 2
ObrázekH2: Název jiného obrázku
Další text odstavce s detaily...

## ... další sekce ...

## 📚 Důležité pojmy
- **Pojem 1** – stručná definice
- **Pojem 2** – stručná definice
- **Pojem 3** – stručná definice
(5-8 klíčových pojmů k tématu)

## 📅 Důležitá data
- **Rok/období** – co se stalo
- **Rok/období** – co se stalo
(3-5 důležitých dat, pokud jsou k tématu relevantní)

## 👤 Důležité osobnosti
- **Jméno** – kdo to byl a proč je důležitý
- **Jméno** – kdo to byl a proč je důležitý
(2-4 osobnosti, pokud jsou k tématu relevantní)

PRAVIDLA:
- 500-800 slov celkem (PODROBNĚJI!)
- 5-7 hlavních sekcí + 3 závěrečné sekce
- PREFERUJ ILUSTRACE (50%), pak FOTKY (30%), pak OBRÁZKY Z WEBU (20%)!
- IlustraceH2: [přesný název z dostupných ilustrací] - PŘEDNOSTNĚ POD H2 nadpis
- FotkaH2: [přesný název z dostupných fotek] - pro AI fotografie
- ObrázekH2: [přesný název z dostupných obrázků z webu] - pouze jako doplněk
- SkupinaH2: [přesný název z galerie obrázků] - použij pro H2 kde se hodí zobrazit galerii více obrázků
- U většiny H2 použij ilustraci nebo fotku, obrázky z webu jen výjimečně
- INFOBOX modrý: pro zajímavosti, "věděli jste?" (info)
- INFOBOX zelený: pro tipy a rady (tip)
- INFOBOX oranžový: pro upozornění (warning)
- INFOBOX fialový: pro shrnutí (summary)
- Srozumitelný jazyk pro [[Ročník]]. třídu
- Každý obrázek/ilustraci použij MAX 1x
- INFOBOX musí mít nadpis a text na dalším řádku
- VŽDY přidej závěrečné sekce: Důležité pojmy, Důležitá data, Důležité osobnosti
- NEPIŠ závěrečnou galerii obrázků — obrázky se automaticky zobrazí pod příslušnými H2 jako přepínatelný karusel`;case"test":return`Vytvoř písemku k tématu [[Téma]] pro [[Ročník]]. třídu.

Pracuj s:
[[Podklady z datasetu]]
[[Poznámky učitele]]
[[Média]]
[[Výchozí instrukce testu]]

Formát odpovědi:
Pro ABC otázku:
OTÁZKA X (ABC):
[text otázky]
OBRÁZEK: [název obrázku/ilustrace ze seznamu - volitelné]
A) [možnost]
B) [možnost *pokud správná]
C) [možnost]

Pro otevřenou otázku:
OTÁZKA X (OPEN):
[text otázky]
BODY: 3
SPRÁVNÁ ODPOVĚĎ: [vzorová odpověď]

ZAČNI GENEROVAT:`;case"lesson":case"lessons":return`Vytvoř BADATELSKOU E-U-R lekci o tématu [[Téma]] pro [[Ročník]]. třídu.

PRVNÍ KROK - VYBER JEDNO SILNÉ METODICKÉ TÉMA:
- Je relevantní k [[Téma]]
- Umožňuje badatelský přístup
- Je zajímavé a provokuje k diskuzi
- Vychází z konkrétních pojmů/faktů: [[Klíčové pojmy]]

KONTEXT:
[[Podklady z datasetu]]
[[Poznámky učitele]]

POVINNÁ STRUKTURA (10 slidů):
INFO: 🎯 [Název lekce]
HLASOVÁNÍ: [Provokativní otázka]
NÁSTĚNKA: [Brainstorming otázka]
INFO: 📚 [Klíčové informace]
ABC: [Otázka ověřující porozumění]
NÁSTĚNKA: [Diskuzní otázka]
INFO: 🎯 [Shrnutí]

ZAČNI GENEROVAT:`;case"methodology":return`Napiš METODICKOU INSPIRACI pro učitele k tématu [[Téma]] pro [[Ročník]]. třídu.

[[Poznámky učitele]]

Toto je přehled pro učitele - jak téma uchopit, na co se zaměřit, jaké aktivity zařadit.

POVINNÁ STRUKTURA:
## 📋 Anotace tématu
## 🎯 Očekávané výstupy dle RVP
[[Výstupy RVP]]
## 📚 Klíčové pojmy
[[Klíčové pojmy]]
## 📖 Faktografický přehled
[[Fakta]]
## 🎓 Didaktické poznámky
## 💡 Náměty na aktivity
## 🔗 Mezipředmětové vztahy
## 📎 Materiály Vividbooks

PRAVIDLA:
- Piš profesionálně, ale přístupně
- INFOBOX zelený/oranžový pro zvýraznění tipů a upozornění
- Využij data z podkladů`;case"hodnoceni":return`Napiš VÝSTUPNÍ HODNOCENÍ uzávěru tematického bloku [[Téma]] pro [[Ročník]]. třídu.

Tematický blok zahrnoval tato témata:
[[Témata bloku]]

[[Výstupy RVP]]
[[Klíčové pojmy]]

POVINNÁ STRUKTURA:

## ✅ Co žáci po absolvování bloku znají a umí
Napiš 6-10 konkrétních bodů. Každý začíná "Žák..."

## 📝 Kritéria hodnocení
Pro každý ze 3 typů škol napiš hodnocení pro stupně 1-5:
- ZŠ praktická / speciální
- ZŠ standardní
- Gymnázium

## 🔑 Klíčové pojmy
Vypiš 8-12 nejdůležitějších pojmů.

INFOBOX oranžový: Na co si dát pozor
Typické chyby nebo obtížná místa v tomto bloku.`;default:return`Vytvoř výstup "${o}" z aktuálního DataSetu.

Téma: [[Téma]]
Ročník: [[Ročník]]. třída
Předmět: [[Předmět]]

[[Podklady z datasetu]]

Respektuj téma, ročník, RVP cíle, klíčové pojmy, fakta a dostupná média.
Výstup má být didakticky použitelný pro učitele i žáka a přizpůsobený věku.`}}function Ve(e,t){const a=t?.trim();return!a||/^Vytvoř výstup "[^"]+" z aktuálního DataSetu\./.test(a)?x(e):Fe(t||x(e))}function Fe(e){return e.replace(/\{topic\}/g,"[[Téma]]").replace(/\{grade\}/g,"[[Ročník]]").replace(/\{subject\}/g,"[[Předmět]]").replace(/\{context\}/g,"[[Podklady z datasetu]]").replace(/\{feedback\}/g,"[[Poznámky učitele]]").replace(/\{mediaSection\}/g,"[[Média]]").replace(/\{imageList\}/g,"[[Obrázky a ilustrace]]").replace(/\{illustrationList\}/g,"[[Ilustrace]]").replace(/\{photoList\}/g,"[[Fotky]]").replace(/\{imageGroupList\}/g,"[[Galerie obrázků]]").replace(/\{ragSection\}/g,"[[RAG vzory]]").replace(/\{sourceTextSection\}/g,"[[Zdrojový text]]").replace(/\{boardImageRules\}/g,"[[Pravidla pro obrázky]]").replace(/\{boardAbcCount\}/g,"[[Počet ABC otázek]]").replace(/\{difficultyLabel\}/g,"[[Obtížnost]]").replace(/\{topicsBlock\}/g,"[[Témata bloku]]").replace(/\{rvpOutputs\}/g,"[[Výstupy RVP]]").replace(/\{keyTermsList\}/g,"[[Klíčové pojmy]]").replace(/\{keyFactsList\}/g,"[[Fakta]]").replace(/\{personalitiesList\}/g,"[[Osobnosti]]").replace(/\{timelineList\}/g,"[[Časová osa]]").replace(/\{testDefaultInstructions\}/g,"[[Výchozí instrukce testu]]").replace(/\{allVisuals\}/g,"[[Vizuály]]")}const Ke=`

Kontext učebnice Vividbooks – zeměpis (jedna řada, soulad s revizí RVP; týdenní výuková témata):
- Učební text: odborně správný jazyk, vyhni se zbytečnému „díky / kvůli“, kde lze použít přesnější odborné spojení; klidně odrážky pro přehlednost; kombinace schémat, ilustrací a reálných fotografií míst; mapy různých charakteristik; u vhodných kapitol zvaž mapku s vyznačením poloh míst z fotografií nebo dalších jevů (např. desky u sopek); u regionálních témat především fotografie a mapy.
- Pracovní listy: badatelské (grafy, mapy, tabulky, krátké texty → závěr s klíčovou myšlenkou); myšlenková schémata (zdroje + doplňování, postupně méně struktury); čtenářská gramotnost (krátké texty, případové studie, pravda/nepravda, otevřené odpovědi, shrnutí); výzkumné (kroky výzkumu, terén / internet); procvičovací (pojmy i souvislosti, úzce i široce otevřené úlohy).
- Testy: po lekci jednodušší; po tematickém celku souhrnný; nejvýše cca polovina čistá faktická paměť, zbytek vztahy a souvislosti.
- Kartičky pojmů / flashcards: pojem–definice; u místopisu místo–mapa, místo–stát, místo–kontinent; též pojem–obrázek.`,$e=`

Kontext učebnice Vividbooks – dějepis (jedna řada, soulad s revizí RVP; týdenní výuková témata, 6. ročník):
- Učební text: klíčová otázka nahoře; hook → jádro → aktivita → transfer do dneška; mapa, časová osa, pramen nebo portrét dle tématu.
- Pracovní listy: pramen, časová osa, dilema, roleplay, detektiv, mapa+události, čtenářská, procvičovací — vždy s reflexí a přesah do současnosti tam, kde to dává smysl.
- Testy: po lekci lehčí; po celku souhrnný; max. polovina čistá fakta, zbytek souvislosti a příčiny/důsledky.
- Kartičky: pojem–definice, datum–událost, osobnost–kontext, pramen–interpretace, pojem–obrázek.
- Timeline a personalities doplň bohatě — dějepis stojí na chronologii a historických postavách.`,Le=`

Kontext učebnice Vividbooks – informatika (nová informatika RVP; hybridní tisk + miniaplikace):
- Učební text: krátký koncept, worked example, diagram/tabulka/trace, jasná vazba na problém týdne.
- Pracovní list: drží zadání, predikci, návrh postupu/modelu/dotazu, testy, debug log a reflexi. Papír není jen opis obrazovky.
- Miniaplikace: zatím jako specifikace (appletType, vstupy, pravidla, feedback, portfolio výstup). Slouží pro experiment, krokování, ladění, simulaci nebo práci s daty.
- Oborové formáty: algoritmický návod, debugging, data lab, modelování, programovací mise, systémová evidence, technologie a bezpečnost, AI lab.
- Vyhni se obecnému ICT obsahu typu „nauč se Word/PowerPoint“. Informatika = data, modely, algoritmy, systémy, principy technologií a bezpečné/etické rozhodování.`;function Ue(e,t,a){if(e==="creator"){const o=Y(t),n=t==="zemepis"?["text","textbook-page","worksheet","vocabulary-set","test","board-easy"]:t==="dejepis"?["text","textbook-page","worksheet","vocabulary-set","test","board-easy"]:t==="informatika"?["text","textbook-page","worksheet","methodology","test","board-easy"]:o.slice(0,Math.min(3,o.length));return{materialProfile:{enabledTypes:o,preferredTypes:n,creatorFormats:ke(t)}}}if(e==="planner"){const o={materialProfile:{plannerMaterialHints:pe(t)?["explanation_text","worksheet","quiz","project"]:["explanation_text","worksheet","quiz","comparison_table","timeline","case_study","project"]},outputRules:{minItems:1}};return t==="zemepis"?{...o,variables:{schoolWeeks:"33"},materialProfile:{...o.materialProfile,plannerMaterialHints:["explanation_text (učební text + mapy, schémata, fotografie reálných míst)","worksheet (badatelské, schémata, čtenářská gramotnost, výzkumné, procvičovací)","quiz / test (po lekci lehčí; po celku souhrnný; polovina souvislosti, ne jen fakta)","comparison_table","case_study","project"]},userPromptSuffix:"Zeměpis: jedna výuková jednotka odpovídá jednomu týdnu (cca 33 výukových týdnů v ročníku). Learning units nesplývej do generických Bloom názvů; názvy konkrétní (mapa, region, jev)."}:t==="dejepis"?{...o,variables:{schoolWeeks:"33"},materialProfile:{...o.materialProfile,plannerMaterialHints:["explanation_text (učební text: klíčová otázka, hook, jádro, vizuál, aktivita, transfer)","worksheet (pramen, časová osa, dilema, roleplay, detektiv, mapa+události, čtenářská, procvičovací)","quiz / test (po lekci; po celku souhrnný; max. polovina čistá fakta)","timeline","case_study"]},userPromptSuffix:"Dějepis: jedna výuková jednotka = jeden týden (33 týdnů v 6. ročníku). Každá lekce má klíčovou otázku, typ zážitku (detektiv/roleplay/dilema/badatel) a transfer do současnosti. Názvy konkrétní, ne generické Bloom nadpisy."}:t==="informatika"?{...o,variables:{schoolWeeks:"33"},materialProfile:{...o.materialProfile,plannerMaterialHints:["explanation_text (krátký koncept, worked example, diagram/tabulka/trace)","worksheet (algoritmický návod, debugging, data lab, modelování, programovací mise, systémová evidence, technologie/bezpečnost, AI lab)","methodology (průběh hybridní lekce + specifikace miniaplikace: vstupy, pravidla, feedback, portfolio výstup)","quiz / lesson check (po lekci; ověřuje postup, testování a vysvětlení chyby, ne jen pojmy)","project"]},userPromptSuffix:"Informatika: jedna výuková jednotka = jeden týden (33 týdnů v ročníku). Každá lekce má problémovou otázku, tisknutelný zápis a tam, kde dává smysl, specifikaci miniaplikace. Nevytvářej obecné ICT lekce typu Word/PowerPoint."}:o}if(e==="data_collector"){const o={datasetRules:{requiredSections:["keyTerms","keyFacts","modernConnections","funFacts"]}};return t==="zemepis"?{...o,userPromptSuffix:Ke}:t==="dejepis"?{...o,userPromptSuffix:$e}:t==="informatika"?{...o,userPromptSuffix:Le}:o}if(e==="rvp_scout"){const o={outputRules:{mustStartOutcomesWith:"Žák",minItems:3,maxItems:6}};return t==="zemepis"?{...o,variables:{schoolWeeks:"33"},userPromptSuffix:"Výstup navrhuj jako cca 33 týdenních témat v ročníku (jedno téma ≈ jeden týden při 2 h/týden), seskupených do tematické linie ročníku podle zadání autora učebnice."}:t==="dejepis"?{...o,variables:{schoolWeeks:"33"},userPromptSuffix:"Dějepis 6. ročník: výstup navrhuj jako cca 33 týdenních témat (1 téma = 1 týden). Každé téma má klíčovou otázku, metodiku PL a transfer do současnosti dle kanonu učebnice."}:t==="informatika"?{...o,variables:{schoolWeeks:"33"},userPromptSuffix:"Informatika 6.–9. ročník: výstup navrhuj jako 33 týdenních témat podle nové informatiky RVP. Témata musí rozvíjet informatické myšlení: data, modely, algoritmy, programování, informační systémy, technologie, bezpečnost a v 9. ročníku základní vhled do AI. Každé téma má problémovou otázku a hybridní formu tisk + miniaplikace/specifikace."}:o}return{}}function Me(e,t){const a=e?se[e]||e:"[předmět]",o=t?`${t}. třída`:"[ročník]",n=e==="dejepis"?"dějepisu":e==="zemepis"?"zeměpisu":a,s=e==="zemepis"&&t?`

Kontext řady Vividbooks zeměpis (${t}. třída): struktura učiva vychází z modelového ŠVP a tematické linie ročníku — 6. Přírodní prostředí Země, 7. Lidé na Zemi, 8. Regiony, 9. Propojený svět. Témata jsou týdenní (cca 33 v ročníku).`:"";return{rvp:`Jsi expert na český Rámcový vzdělávací program (RVP ZV).

Analyzuj téma "{topic}" pro předmět ${a}, ${o} ZŠ.${s}${e==="dejepis"&&t===6?`

Kontext řady Vividbooks dějepis (6. třída): Jak fungují dějiny → Pravěk → První civilizace → Řecko → Řím. Témata jsou týdenní (33 v ročníku); každé má klíčovou otázku a transfer do současnosti.`:""}

Vrať JSON s těmito informacemi:
{
  "thematicArea": "Název tematického okruhu podle RVP",
  "expectedOutcomes": ["3-5 očekávaných výstupů z RVP relevantních k tomuto tématu"],
  "competencies": ["2-3 klíčové kompetence, které téma rozvíjí"],
  "hoursAllocated": <odhadovaný počet vyučovacích hodin pro toto téma>,
  "crossCurricular": ["1-2 průřezová témata nebo mezipředmětové vztahy"]
}

Vrať POUZE validní JSON, nic jiného.`,content:`Jsi učitel ${n} na ZŠ.

Připrav podrobné obsahové informace k tématu "{topic}" pro ${o}.

Vrať JSON s těmito daty:
{
  "keyTerms": [
    {
      "term": "název pojmu",
      "definition": "stručná definice vhodná pro žáky ${o}",
      "emoji": "relevantní emoji"
    }
  ],
  "keyFacts": ["8-12 klíčových faktů, které by žáci měli znát"],
  "timeline": [
    {
      "date": "datum nebo období",
      "event": "co se stalo",
      "importance": "high/medium/low"
    }
  ],
  "personalities": [
    {
      "name": "jméno osobnosti",
      "role": "role/povolání",
      "description": "krátký popis významu"
    }
  ],
  "modernConnections": ["2-3 propojení s dnešní dobou"],
  "funFacts": ["3-4 zajímavosti pro motivaci žáků"],
  "sources": ["doporučené zdroje pro hlubší studium"]
}

Obsah přizpůsob věku a úrovni ${o} ZŠ.
Vrať POUZE validní JSON.`,media:`Pro téma "{topic}" (předmět: ${a}) vygeneruj:
{
  "searchKeywords": ["5-8 klíčových slov pro vyhledávání obrázků v angličtině"],
  "emojis": ["5-8 relevantních emoji pro toto téma"],
  "themeColors": ["3-4 hex barvy vhodné pro vizuální styl tohoto tématu"]
}
${e==="zemepis"?"Preferuj kombinaci: reálné lokace (fotografie), mapové podklady (charakteristiky, polohy), schémata jevů (např. litosféra, proudění). Kde dává smysl, navrhni klíčová slova pro mapu s vyznačením míst z kontextu tématu.":""}
Vrať POUZE JSON.`}}function St(e,t,a){const o=t?se[t]||t:"[předmět]",n=a?Re[a]||`${a}. třída`:"[ročník]";return e==="rvp_scout"?`Jsi expert na RVP ZV a české základní vzdělávání.

Vytvoř strukturu učiva pro předmět ${o}, ${n}.

Pro každé téma uveď:
1. tematický celek
2. konkrétní téma
3. očekávané výstupy začínající "Žák..."
4. klíčové kompetence z RVP
5. doporučený počet hodin
6. pořadí v ročníku

Odpověz pouze validním JSON polem.`:e==="planner"?`Jsi odborník na pedagogiku a tvorbu osnov pro ZŠ v ČR.

Rozlož RVP téma pro ${o}, ${n} na logické learning units.

Každý celek má mít:
1. konkrétní název
2. Bloom úroveň
3. doporučené typy materiálů
4. počet hodin
5. nové pojmy zavedené poprvé v této lekci
6. konkrétní výukové cíle začínající "Žák..."

Postupuj od jednodušších činností ke složitějším a odpověz pouze validním JSON polem.`:e==="data_collector"?Te.map(s=>`### ${s.label}
${Me(t,a)[s.key]}`).join(`

`):`Creator negeneruje jeden společný prompt. Řídí, jaké typy materiálů smí Curriculum Factory pro ${o}, ${n} vytvářet.

Výchozí sada materiálů:
${Y(t).map(s=>`- ${s}`).join(`
`)}

Jednotlivé generátory pak používají vlastní prompt podle typu materiálu, například text, board, pracovní list, test, lekce nebo metodika.`}function C(e){return!e||e.length===0?e:[...new Set(e.map(t=>String(t).trim()).filter(Boolean))]}function ie(e,t){const a=t||{};return{...e,...a,outputRules:{...e.outputRules||{},...a.outputRules||{}},materialProfile:{...e.materialProfile||{},...a.materialProfile||{},enabledTypes:C(a.materialProfile?.enabledTypes||e.materialProfile?.enabledTypes),preferredTypes:C(a.materialProfile?.preferredTypes||e.materialProfile?.preferredTypes),plannerMaterialHints:C(a.materialProfile?.plannerMaterialHints||e.materialProfile?.plannerMaterialHints),creatorFormats:a.materialProfile?.creatorFormats||e.materialProfile?.creatorFormats},datasetRules:{...e.datasetRules||{},...a.datasetRules||{},requiredSections:C(a.datasetRules?.requiredSections||e.datasetRules?.requiredSections)},variables:{...e.variables||{},...a.variables||{}},promptSections:{...e.promptSections||{},...a.promptSections||{}}}}function q(e){return{id:e.id,agentKey:e.agentKey,subjectCode:e.subjectCode??null,grade:e.grade??null,scope:e.scope,config:e.config||{},isActive:!!(e.isActive??!0),notes:e.notes??null,createdAt:e.createdAt,updatedAt:e.updatedAt}}function ve(e){return{id:e.id,agentKey:e.agent_key,subjectCode:e.subject_code??null,grade:e.grade??null,scope:e.scope,config:e.config||{},isActive:!!(e.is_active??!0),notes:e.notes??null,createdAt:e.created_at,updatedAt:e.updated_at}}function X(e){const t=e instanceof Error?e.message:String(e||"");return/curriculum_agent_configs|relation .* does not exist|schema cache|404|not found/i.test(t)}function _(e){return X(e)?new Error("Chybí storage pro agent config. Aplikujte migraci 20260420143000_curriculum_agent_configs.sql a/nebo deployněte Edge Function api route."):e instanceof Error?e:new Error(String(e||"Agent config request failed"))}function Be(e,t,a){if(!e.isActive)return!1;const o=t??null,n=a??null;return e.subjectCode===o&&e.grade===n||e.subjectCode===o&&e.grade===null||e.subjectCode===null&&e.grade===n||e.subjectCode===null&&e.grade===null}function ye(e,t,a){if(!e)return"code_default";const o=t??null,n=a??null;return e.subjectCode===o&&e.grade===n?"exact":e.subjectCode===o&&e.grade===null?"subject_default":e.subjectCode===null&&e.grade===n?"grade_default":"global_default"}function Ge(e,t,a){const o=n=>{const s=ye(n,t,a);return s==="exact"?0:s==="subject_default"?1:s==="grade_default"?2:3};return[...e].sort((n,s)=>o(n)-o(s)||s.updatedAt.localeCompare(n.updatedAt))}function fe(e,t,a,o){const n=Ue(e,t),s=o?.appliedRecord||null,l=o?.inheritedRecords||[],r=l.slice().reverse().reduce((c,m)=>ie(c,m.config),n);return{agentKey:e,subjectCode:t??null,grade:a??null,source:o?.source||"code_default",exactRecord:o?.exactRecord||null,appliedRecord:s,inheritedRecords:l,resolvedConfig:l.length>0?r:ie(n,s?.config)}}async function Q(e,t){const a=await Se({Accept:"application/json",...t?.body?{"Content-Type":"application/json"}:{}}),o=await fetch(e,{...t,headers:a});if(!o.ok){const n=await o.text().catch(()=>"");throw new Error(n||`Request failed (${o.status})`)}return o.json()}function Ze(e){const t=new URLSearchParams;for(const[o,n]of Object.entries(e))n!=null&&`${n}`.trim()!==""&&t.set(o,String(n));const a=t.toString();return a?`?${a}`:""}function Je(e,t,a){return[e,t||"*",a??"*"].join(":")}async function He(e={}){let t=j.from("curriculum_agent_configs").select("id, agent_key, subject_code, grade, scope, config, is_active, notes, created_at, updated_at").order("agent_key").order("subject_code").order("grade").order("updated_at",{ascending:!1});e.agentKey&&(t=t.eq("agent_key",e.agentKey)),e.subjectCode!==void 0&&(t=e.subjectCode?t.eq("subject_code",e.subjectCode):t.is("subject_code",null)),e.grade!==void 0&&(t=e.grade?t.eq("grade",e.grade):t.is("grade",null));const{data:a,error:o}=await t;if(o)throw _(o);return(a||[]).map(ve)}function Z(e,t,a,o){const n=Ge(t.filter(r=>Be(r,a,o)),a,o),s=n[0]||null,l=n.find(r=>r.subjectCode===(a??null)&&r.grade===(o??null))||null;return fe(e,a,o,{source:ye(s,a,o),appliedRecord:s,exactRecord:l,inheritedRecords:n})}async function qe(e){const t=e.subjectCode??null,a=e.grade??null,o=t&&a?"subject_grade":t?"subject_default":a?"grade_default":"global_default";let n=j.from("curriculum_agent_configs").select("id").eq("agent_key",e.agentKey);n=t?n.eq("subject_code",t):n.is("subject_code",null),n=a?n.eq("grade",a):n.is("grade",null);const{data:s,error:l}=await n.maybeSingle();if(l)throw _(l);const r={agent_key:e.agentKey,subject_code:t,grade:a,scope:o,config:e.config,notes:e.notes??null,is_active:e.isActive??!0},c=s?.id?j.from("curriculum_agent_configs").update(r).eq("id",s.id).select("id, agent_key, subject_code, grade, scope, config, is_active, notes, created_at, updated_at").maybeSingle():j.from("curriculum_agent_configs").insert(r).select("id, agent_key, subject_code, grade, scope, config, is_active, notes, created_at, updated_at").maybeSingle(),{data:m,error:i}=await c;if(i)throw _(i);return ve(m)}async function We(e){const{error:t}=await j.from("curriculum_agent_configs").delete().eq("id",e);if(t)throw _(t)}async function Ye(e,t,a){const o=Je(e,t,a),n=A.get(o);if(n)return n;let s;try{const l=Ze({agentKey:e,subjectCode:t,grade:a}),r=await Q(`${R}/platform-admin/curriculum/agent-config/resolved${l}`),c=(r.inheritedRecords||[]).map(q),m=r.appliedRecord?q(r.appliedRecord):null,i=m&&!c.some(p=>p.id===m.id)?[m,...c]:c,u=G(e);s=Z(e,[...u,...i.filter(p=>!u.some(k=>N(k,p.agentKey,p.subjectCode,p.grade)))],t,a)}catch(l){console.warn("[AgentConfig] Admin API unavailable, falling back to Supabase RLS:",l);try{const r=await He({agentKey:e}),c=G(e);s=Z(e,[...c,...r.filter(m=>!c.some(i=>N(i,m.agentKey,m.subjectCode,m.grade)))],t,a)}catch(r){if(!X(r))throw r;console.warn("[AgentConfig] Config storage unavailable, using code defaults:",r);const c=G(e);s=c.length>0?Z(e,c,t,a):fe(e,t,a)}}return A.set(o,s),s}async function Pt(e){const t=B(e);A.clear();try{const a=await Q(`${R}/platform-admin/curriculum/agent-config`,{method:"POST",body:JSON.stringify(e)}),o=q(a.record);return B({...e,id:o.id,createdAt:o.createdAt,updatedAt:o.updatedAt}),A.clear(),o}catch(a){console.warn("[AgentConfig] Admin API save failed, falling back to Supabase RLS:",a);try{const o=await qe(e);return B({...e,id:o.id,createdAt:o.createdAt,updatedAt:o.updatedAt}),A.clear(),o}catch(o){return X(o)||console.warn("[AgentConfig] Supabase save failed, keeping local override:",o),A.clear(),t}}}async function Ot(e){Ne(e),A.clear();try{await Q(`${R}/platform-admin/curriculum/agent-config/${encodeURIComponent(e)}`,{method:"DELETE"}),A.clear()}catch(t){console.warn("[AgentConfig] Admin API delete failed, falling back to Supabase RLS:",t),await We(e),A.clear()}}function Xe(e,t,a=[]){return t.promptOverride?.trim()?[t.promptOverride.trim(),...a.filter(Boolean)].filter(Boolean).join(`

`):[t.userPromptPrefix||"",e,...a.filter(Boolean),t.userPromptSuffix||""].filter(Boolean).join(`

`)}function ee(e,t,a,o=[]){const n=t.promptSections?.[a]?.trim();return n?[n,...o.filter(Boolean)].filter(Boolean).join(`

`):Xe(e,t,o)}function wt(e,t,a=[]){return[e,t.systemPrompt||"",...a.filter(Boolean)].filter(Boolean).join(`

`)}async function P(e,t,a="agent"){return je([{role:"user",content:e}],we(t,a))}function te(e){const t=(e||"").split("?")[0].toLowerCase();return t.endsWith(".png")?"image/png":t.endsWith(".jpg")||t.endsWith(".jpeg")?"image/jpeg":t.endsWith(".webp")?"image/webp":t.endsWith(".gif")?"image/gif":t.endsWith(".svg")||t.includes("/svg")?"image/svg+xml":""}function ge(e,t,a){let o=(e||"").toLowerCase();return!o.startsWith("image/")&&a&&(o=te(a).toLowerCase()),!(!o.startsWith("image/")||o.includes("svg")&&!t.allowSvg||o.includes("gif")&&!t.allowGif)}function Qe(e){const t=new URLSearchParams;for(const[a,o]of Object.entries(e))o!==void 0&&t.set(a,String(o));return t.get("format")||t.set("format","json"),t.get("origin")||t.set("origin","*"),t.toString()}async function he(e){const t=Qe(e),a=`https://commons.wikimedia.org/w/api.php?${t}`;if(typeof window<"u"&&R)try{const o=await Pe(),n=`${R}/commons-wikimedia?${t}`,s=await fetch(n,{method:"GET",headers:o,mode:"cors"});if(s.ok)return s}catch(o){console.warn("[ImageSearch] Commons via Edge proxy failed, trying direct:",o)}return fetch(a,{method:"GET",mode:"cors"})}function I(e,t=""){return e?typeof e=="string"?e.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():typeof e=="object"&&e.value?String(e.value).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim():t:t}async function T(e,t){return(await Ye("data_collector",e,t)).resolvedConfig}function oe(e){const t=[],a=Array.isArray(e.datasetRules?.requiredSections)?e.datasetRules.requiredSections.filter(Boolean):[];return a.length>0&&t.push(`- povinné sekce datasetu: ${a.join(", ")}`),e.datasetRules?.imageSearchStyle&&t.push(`- styl hledání médií/obrázků: ${e.datasetRules.imageSearchStyle}`),typeof e.outputRules?.minItems=="number"&&t.push(`- minimum položek podle struktury: ${e.outputRules.minItems}`),typeof e.outputRules?.maxItems=="number"&&t.push(`- maximum položek podle struktury: ${e.outputRules.maxItems}`),t.length>0?`Dodatečná pravidla konfigurace:
${t.join(`
`)}`:""}function et(e,t,a,o){const n=`Jsi expert na český Rámcový vzdělávací program (RVP ZV).

Analyzuj téma "${e}" pro předmět ${t}, ${a}. třída ZŠ.

Vrať JSON s těmito informacemi:
{
  "thematicArea": "Název tematického okruhu podle RVP",
  "expectedOutcomes": ["3-5 očekávaných výstupů z RVP relevantních k tomuto tématu"],
  "competencies": ["2-3 klíčové kompetence, které téma rozvíjí"],
  "hoursAllocated": <odhadovaný počet vyučovacích hodin pro toto téma>,
  "crossCurricular": ["1-2 průřezová témata nebo mezipředmětové vztahy"]
}

Vrať POUZE validní JSON, nic jiného.`;return ee(n,o,"rvp",[oe(o)]).replaceAll("{topic}",e)}function ae(e,t,a,o,n=[]){const s=`Jsi učitel ${t==="dejepis"?"dějepisu":t} na ZŠ.

Připrav podrobné obsahové informace k tématu "${e}" pro ${a}. třídu.

${n.filter(Boolean).join(`
`)}

Vrať JSON s těmito daty:
{
  "keyTerms": [
    {
      "term": "název pojmu",
      "definition": "stručná definice vhodná pro žáky ${a}. třídy",
      "emoji": "relevantní emoji"
    }
  ],
  "keyFacts": ["8-12 klíčových faktů, které by žáci měli znát"],
  "timeline": [
    {
      "date": "datum nebo období",
      "event": "co se stalo",
      "importance": "high/medium/low"
    }
  ],
  "personalities": [
    {
      "name": "jméno osobnosti",
      "role": "role/povolání",
      "description": "krátký popis významu"
    }
  ],
  "modernConnections": ["2-3 propojení s dnešní dobou"],
  "funFacts": ["3-4 zajímavosti pro motivaci žáků"],
  "sources": ["doporučené zdroje pro hlubší studium"]
}

Obsah přizpůsob věku a úrovni ${a}. třídy ZŠ.
Vrať POUZE validní JSON.`;return ee(s,o,"content",[oe(o)]).replaceAll("{topic}",e)}function tt(e,t,a){const o=`Pro téma "${e}" (předmět: ${t}) vygeneruj:
{
  "searchKeywords": ["5-8 klíčových slov pro vyhledávání obrázků v angličtině"],
  "emojis": ["5-8 relevantních emoji pro toto téma"],
  "themeColors": ["3-4 hex barvy vhodné pro vizuální styl tohoto tématu"]
}
Vrať POUZE JSON.`;return ee(o,a,"media",[oe(a)]).replaceAll("{topic}",e)}async function ot(e,t,a,o){const n=crypto.randomUUID();o?.(`📚 Sbírám data pro: "${e}"`);const[s,l,r,c]=await Promise.all([at(e,t,a,o),V(a,o),nt(e,t,a,o),F(e,t,a,o)]);return o?.("✅ Všechna data shromážděna!"),{id:n,topic:e,subjectCode:t,grade:a,status:"ready",rvp:s,targetGroup:l,content:r,media:c,generatedMaterials:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}}async function at(e,t,a,o){o?.("📋 Analyzuji RVP očekávané výstupy...");const n={dejepis:"Dějepis",zemepis:"Zeměpis",anglictina:"Anglický jazyk",cestina:"Český jazyk"},s=await T(t,a),l=et(e,n[t]||t,a,s);try{const r=await P(l,t,"agent"),c=O(r);return{thematicArea:c.thematicArea||"",expectedOutcomes:c.expectedOutcomes||[],competencies:c.competencies||[],hoursAllocated:c.hoursAllocated||4,crossCurricular:c.crossCurricular||[]}}catch(r){return console.error("RVP collection error:",r),{thematicArea:e,expectedOutcomes:[],competencies:[],hoursAllocated:4,crossCurricular:[]}}}async function V(e,t){t?.("👥 Definuji cílovou skupinu...");const a={6:{ageRange:"11-12 let",gradeLevel:"6. třída ZŠ",cognitiveLevel:"Přechod od konkrétních k formálním operacím",priorKnowledge:["Základy pravěku z 1. stupně","Čtení mapy","Práce s časovou osou"]},7:{ageRange:"12-13 let",gradeLevel:"7. třída ZŠ",cognitiveLevel:"Formální operace, abstraktní myšlení",priorKnowledge:["Starověk","Základy středověku","Orientace v mapě"]},8:{ageRange:"13-14 let",gradeLevel:"8. třída ZŠ",cognitiveLevel:"Rozvinuté formální operace",priorKnowledge:["Středověk","Raný novověk","Historické souvislosti"]},9:{ageRange:"14-15 let",gradeLevel:"9. třída ZŠ",cognitiveLevel:"Pokročilé abstraktní myšlení, kritické hodnocení",priorKnowledge:["Novověk do 19. století","Průmyslová revoluce","Národní obrození"]}};return a[e]||a[6]}async function nt(e,t,a,o){o?.("📖 Sbírám klíčové pojmy a fakta...");const n=await T(t,a),s=ae(e,t,a,n);try{const l=await P(s,t,"agent"),r=O(l);return{keyTerms:(r.keyTerms||[]).map(c=>({term:c.term||"",definition:c.definition||"",emoji:c.emoji||""})),keyFacts:r.keyFacts||[],timeline:(r.timeline||[]).map(c=>({date:c.date||"",event:c.event||"",importance:c.importance||"medium"})),personalities:(r.personalities||[]).map(c=>({name:c.name||"",role:c.role||"",description:c.description||""})),modernConnections:r.modernConnections||[],funFacts:r.funFacts||[],sources:r.sources||[]}}catch(l){return console.error("Content collection error:",l),{keyTerms:[],keyFacts:[],timeline:[],personalities:[],modernConnections:[],funFacts:[],sources:[]}}}async function F(e,t,a,o){o?.("🖼️ Hledám relevantní obrázky...");const n=await T(t,a||6),s=tt(e,t,n);let l=[],r=[],c=[];try{const i=await P(s,t,"fast"),u=O(i);l=u.searchKeywords||[],r=u.emojis||[],c=u.themeColors||[]}catch(i){console.error("Keywords error:",i),l=[e.toLowerCase().replace(/\s+/g," ")],r=["📚","🎓"],c=["#8B4513","#D4A574"]}o?.(`🔍 Hledám obrázky pro: ${l.slice(0,3).join(", ")}...`);const m=await rt(l,e,t,o);return o?.(`✅ Nalezeno ${m.length} obrázků`),{images:m,emojis:r,themeColors:c}}async function rt(e,t,a,o){const n=[];try{const r=await it(e,t,o);n.push(...r)}catch(r){console.error("Image search error:",r)}return be(n).sort((r,c)=>c.relevanceScore-r.relevanceScore).slice(0,15)}async function it(e,t,a){const o=await ne(t,e);a?.(`🔎 Zkouším Wikimedia keywordy: ${o.slice(0,5).join(", ")}`);const n=async l=>{const r=[];for(const c of o.slice(0,8))try{const m=await he({action:"query",generator:"search",gsrsearch:String(c).trim(),gsrnamespace:6,gsrlimit:20,prop:"imageinfo",iiprop:"url|extmetadata|mime",iiurlwidth:400});if(!m.ok)continue;const i=await m.json();if(i.error?.info)continue;const u=i.query?.pages;if(!u)continue;const p=Object.values(u);for(const k of p){const v=k.title||"",y=k.imageinfo?.[0],f=y?.mime||"";if(!y?.url||!ge(f,{allowSvg:l,allowGif:!1},y.url)||r.some(z=>z.url===y.url))continue;const g=(f||te(y.url)).toLowerCase().includes("svg"),w=pt(v,t,c),d=g&&l?Math.max(0,w-15):w,h=y.extmetadata;r.push({id:crypto.randomUUID(),url:y.url,thumbnailUrl:y.thumburl||y.url,title:v.replace("File:","").replace(/\.[^/.]+$/,""),description:I(h?.ImageDescription,""),source:"Wikimedia Commons",license:I(h?.LicenseShortName,"CC")||"CC",relevanceScore:d,keywords:[c],excluded:!0})}}catch(m){console.error("Wikimedia search error:",m)}return r};let s=await n(!1);return s.length===0&&(s=await n(!0)),s}const st=[[/starov[eě]k[áaýy]?\s+mezopot[aá]mi/i,"Ancient Mesopotamia"],[/mezopot[aá]mi/i,"Mesopotamia"],[/starov[eě]k[ýy]?\s+egypt/i,"Ancient Egypt"],[/\begypt\b/i,"Ancient Egypt"],[/doba\s+kamenn[aá]/i,"Stone Age"],[/doba\s+bronzov[aá]/i,"Bronze Age"],[/doba\s+[žz]elezn[aá]/i,"Iron Age"],[/starov[eě]k[éeýy]?\s+[řr][eé]cko/i,"Ancient Greece"],[/starov[eě]k[ýy]?\s+[řr][ií]m/i,"Ancient Rome"],[/prav[eě]k/i,"Prehistory"],[/neolit/i,"Neolithic"],[/paleolit/i,"Paleolithic"],[/sumer/i,"Sumer"],[/babylon/i,"Babylon"],[/as[yý]rie/i,"Assyria"],[/pohyby\s+zem[eě]/i,"Earth rotation seasons solstice"],[/teplo\s*\/\s*zima|zima.*teplo|ro[cč]n[ií] obdob[ií]/i,"equinox solstice diagram"],[/ur[cč]ov[aá]n[ií](\s+polohy)?(\s+a\s+vzd[aá]lenost[ií])?/i,"geographic coordinates latitude longitude"],[/mapov[aá]n[ií](\s+v)?\s+ter[eé]n(u)?/i,"surveying topographic field mapping"],[/tematick[éy]\s+mapy/i,"thematic map"],[/\b[gG]PS\b|poloh[ay].*vzd[aá]lenost/i,"Global Positioning System map"],[/[Čč]asov[áa]\s+p[áa]sm[ao]/i,"time zone world map"],[/meteorologick[éy]\s+veli[cč]iny/i,"meteorology weather station instruments"],[/typy\s+reli[eé]f|reli[eé]f.*[cč]lenitost/i,"landforms topography relief"],[/modelac[ií].*reli[eé]f|reli[eé]f.*m[ií]st[eě]/i,"relief model terrain 3D"],[/desk[oó]v[áa]\s+tektonik/i,"plate tectonics"],[/sope[cč]n[áa]\s+[cč]innost|vulk[aá]n/i,"volcano eruption"],[/hydrologick[ýy]\s+cyklus|cyklus\s+vody/i,"water cycle"],[/sklen[íi]kov[ýy]?\s+efekt/i,"greenhouse effect diagram"],[/\bvlivy\s+na\s+teplotu/i,"factors air temperature climate"],[/\bfouk[aá].*v[ií]tr|v[ií]trn[éy]\s+proud/i,"global wind circulation"],[/\bvodn[íi]\s+re[žz]im[yů]?\b|\b(hydrolog|re[žz]im).{0,20}\b[řr]ek/i,"river hydrology hydrograph"],[/p[rř][íi]činy?\s+povodn[ií]/i,"flood causes"],[/p[ůu]d[n]í\s+typy|p[ůu]d[n]otvorn[ií]/i,"soil types soil profile"],[/\bm[ií]rn[éy]\s+p[áa]sm[ao]\b|^\s*[Tt]ropy\s*$/i,"biome vegetation climate"],[/\busp[oó]r[aá]d[aá]n[ií].*biom/i,"biome distribution world map"]];function ct(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function lt(e){return String(e||"").replace(/[–—]/g,"-").split(/\s+-\s+|:/)[0].replace(/\b(procvi[cč]en[ií]|aplikace|porozum[eě]n[ií]|vztahy|opakovan[ií]|test|lekce|[uú]vod\s+do\s+studia)\b/gi," ").replace(/\s+/g," ").trim()}function E(e){const t=[],a=o=>{const n=o.replace(/\s+/g," ").trim();n&&!t.some(s=>s.toLowerCase()===n.toLowerCase())&&t.push(n)};for(const o of e){const n=lt(o);if(!n)continue;for(const[l,r]of st)l.test(n)&&a(r);a(n);const s=ct(n);s!==n&&a(s)}return t}async function ne(e,t=[]){const a=E([e,...t]),o=`Navrhni 5 krátkých anglických vyhledávacích dotazů pro Wikimedia Commons.

Téma ze školního datasetu: "${e}"
Už dostupné keywordy: ${t.filter(Boolean).join(", ")||"žádné"}

Pravidla:
- vrať obecné pojmy, které mají šanci existovat na Wikimedia Commons
- preferuj angličtinu
- nepoužívej školní fráze jako exercise, application, understanding, relationships
- pro historii používej názvy období, civilizací, míst, artefaktů, památek
- vrať POUZE JSON pole stringů, max 5 položek

Příklad: ["Ancient Mesopotamia", "Babylon", "Sumer", "cuneiform tablet", "Ishtar Gate"]`;try{const n=await P(o,subjectCode,"fast"),s=O(n),l=Array.isArray(s)?s:Array.isArray(s?.keywords)?s.keywords:[];return E([...l.map(r=>String(r||"")),...a])}catch(n){return console.warn("[ImageSearch] Keyword suggestion failed, using fallback queries:",n),a}}function ut(e){return(e.content?.keyTerms||[]).map(a=>typeof a=="string"?a:a?.term).filter(Boolean).slice(0,10)}function dt(e){return(e.content?.keyFacts||[]).map(t=>String(t||"").trim()).filter(Boolean).slice(0,8)}async function mt(e,t){const a=String(e.topic||"").trim(),o=String(e.subjectCode||e.subject_code||"").trim()||"unknown",n=Number(e.grade||6),s=e.rvp||{},l=String(s.thematicArea||e.thematic_area||"").trim(),r=(s.expectedOutcomes||s.expected_outcomes||[]).map(k=>String(k||"").trim()).filter(Boolean).slice(0,5),c=ut(e),m=dt(e),i=(e.content?.sources||[]).map(k=>String(k||"").trim()).filter(Boolean).slice(0,5),u=E([a,l,...c.slice(0,5)]),p=`Jsi AI agent pro vyhledávání vzdělávacích obrázků na Wikimedia Commons.

Z podkladů datasetu vytvoř 5-8 krátkých anglických vyhledávacích dotazů.

Dataset:
- subjectCode: ${o}
- grade: ${n}
- topic: ${a}
- thematicArea: ${l||"not provided"}
- expectedOutcomes: ${JSON.stringify(r)}
- keyTerms: ${JSON.stringify(c)}
- keyFacts: ${JSON.stringify(m)}
- sources: ${JSON.stringify(i)}

Pravidla:
- Vracej konkrétní vizuální pojmy, které pravděpodobně existují jako fotografie, diagramy, mapy nebo schémata na Wikimedia Commons.
- Piš anglicky.
- Nepiš české školní fráze ani slepený kontext typu "${a} ${l} ${o}".
- Nepoužívej abstraktní slova bez vizuálního objektu: understanding, relationships, data around us, application, worksheet, education, curriculum.
- U informatiky preferuj vizuální koncepty jako data table, flowchart, algorithm, binary code, computer network diagram, database table, password security, machine learning model podle tématu.
- U zeměpisu preferuj reálné jevy, mapy, biomy, regiony, klimata, reliéf, vodstvo.
- U dějepisu preferuj civilizace, artefakty, prameny, mapy, osobnosti, památky.
- Dotaz má mít 1-4 slova. Žádné celé věty.
- Vrať POUZE JSON pole stringů.

Příklad pro téma "Tabulka jako model reality":
["data table", "spreadsheet table", "database table", "entity relationship diagram", "data model diagram"]`;try{t?.("🤖 Generuji AI klíčová slova z podkladů datasetu...");const k=await P(p,o,"fast"),v=O(k),y=Array.isArray(v)?v:Array.isArray(v?.searchKeywords)?v.searchKeywords:Array.isArray(v?.keywords)?v.keywords:[],f=E(y.map(g=>String(g||""))),b=f.length?f.slice(0,8):u.slice(0,8);return t?.(`🔎 AI klíčová slova: ${b.join(", ")}`),b}catch(k){return console.warn("[ImageSearch] Dataset keyword agent failed, using fallback queries:",k),t?.("⚠️ AI klíčová slova se nepodařila, používám fallback."),u.slice(0,8)}}function pt(e,t,a){const o=e.toLowerCase(),n=t.toLowerCase(),s=a.toLowerCase();let l=50;o.includes(n)&&(l+=30),o.includes(s)&&(l+=15);const r=n.split(/\s+/);for(const c of r)c.length>3&&o.includes(c)&&(l+=5);return Math.min(100,l)}function be(e){const t=new Set;return e.filter(a=>t.has(a.url)?!1:(t.add(a.url),!0))}function O(e){try{return JSON.parse(e)}catch{const t=e.match(/```(?:json)?\s*([\s\S]*?)```/);if(t)return JSON.parse(t[1].trim());const a=e.match(/\{[\s\S]*\}/);if(a)return JSON.parse(a[0]);const o=e.match(/\[[\s\S]*\]/);if(o)return JSON.parse(o[0]);throw new Error("Could not parse JSON from response")}}async function ze(e,t,a,o,n){const s=crypto.randomUUID(),l=e.topicTitle;n?.(`📚 Vytvářím DataSet pro týden ${e.weekNumber}: "${l}"`);const r={thematicArea:t?.thematicArea||l,expectedOutcomes:t?.expectedOutcomes||[],competencies:t?.keyCompetencies||[],hoursAllocated:e.hoursAllocated||2,crossCurricular:t?.crossCurricularTopics||[]},c=await V(o);n?.("📖 Sbírám obsahová data...");const[m,i]=await Promise.all([kt(l,a,o,e),F(l,a,o,n)]);return n?.(`✅ DataSet pro "${l}" vytvořen!`),{id:s,topic:l,subjectCode:a,grade:o,status:"ready",rvp:r,targetGroup:c,content:m,media:i,generatedMaterials:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}}async function kt(e,t,a,o,n){const s=(o.vocabulary||[]).join(", "),l=(o.learningGoals||[]).join("; "),r=await T(t,a),c=ae(e,t,a,r,[s?`Klíčové pojmy k zahrnutí: ${s}`:"",l?`Učební cíle: ${l}`:"",o.topicDescription?`Popis tématu: ${o.topicDescription}`:""]);try{const m=await P(c,t,"agent"),i=O(m);return{keyTerms:(i.keyTerms||[]).map(u=>({term:u.term||"",definition:u.definition||"",emoji:u.emoji||""})),keyFacts:i.keyFacts||[],timeline:(i.timeline||[]).map(u=>({date:u.date||"",event:u.event||"",importance:u.importance||"medium"})),personalities:(i.personalities||[]).map(u=>({name:u.name||"",role:u.role||"",description:u.description||""})),modernConnections:i.modernConnections||[],funFacts:i.funFacts||[],sources:i.sources||[]}}catch(m){return console.error("Content collection from plan error:",m),{keyTerms:(o.vocabulary||[]).map(i=>({term:i,definition:"",emoji:"📖"})),keyFacts:[],timeline:[],personalities:[],modernConnections:[],funFacts:[],sources:[]}}}async function vt(e,t,a,o,n,s=!0){const l=[];n?.(`📦 Vytvářím ${e.length} DataSetů...`);for(let r=0;r<e.length;r++){const c=e[r],m=t.get(c.id)||null;n?.(`[${r+1}/${e.length}] ${c.topicTitle}`);try{const i=await ze(c,m,a,o,n);if(s){const{data:u}=await j.auth.getUser();n?.("💾 Ukládám DataSet do databáze...");const p={thematicArea:String(i.rvp?.thematicArea||""),expectedOutcomes:Array.isArray(i.rvp?.expectedOutcomes)?i.rvp.expectedOutcomes:[],competencies:Array.isArray(i.rvp?.competencies)?i.rvp.competencies:[],hoursAllocated:Number(i.rvp?.hoursAllocated)||2,crossCurricular:Array.isArray(i.rvp?.crossCurricular)?i.rvp.crossCurricular:[]},k={ageRange:String(i.targetGroup?.ageRange||""),gradeLevel:String(i.targetGroup?.gradeLevel||""),cognitiveLevel:String(i.targetGroup?.cognitiveLevel||""),priorKnowledge:Array.isArray(i.targetGroup?.priorKnowledge)?i.targetGroup.priorKnowledge:[],specialNeeds:i.targetGroup?.specialNeeds||null},v={keyTerms:Array.isArray(i.content?.keyTerms)?i.content.keyTerms:[],keyFacts:Array.isArray(i.content?.keyFacts)?i.content.keyFacts:[],facts:Array.isArray(i.content?.facts)?i.content.facts:[],timeline:Array.isArray(i.content?.timeline)?i.content.timeline:[],personalities:Array.isArray(i.content?.personalities)?i.content.personalities:[],modernConnections:Array.isArray(i.content?.modernConnections)?i.content.modernConnections:[],funFacts:Array.isArray(i.content?.funFacts)?i.content.funFacts:[],sources:Array.isArray(i.content?.sources)?i.content.sources:[]},y={images:Array.isArray(i.media?.images)?i.media.images:[],emojis:Array.isArray(i.media?.emojis)?i.media.emojis:[],themeColors:Array.isArray(i.media?.themeColors)?i.media.themeColors:[]},f={topic:String(i.topic),subject_code:String(i.subjectCode),grade:Number(i.grade),status:"ready",rvp:p,target_group:k,content:v,media:y,generated_materials:[]};u.user?.id&&(f.created_by=u.user.id),c.id&&typeof c.id=="string"&&c.id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)&&(f.weekly_plan_id=c.id),console.log("[DataCollector] Inserting DataSet:",JSON.stringify(f,null,2));const{data:b,error:g}=await j.from("topic_data_sets").insert(f).select("id").single();g?(console.error("[DataCollector] Error saving DataSet:",g),console.error("[DataCollector] Insert data was:",JSON.stringify(f,null,2)),n?.(`❌ Chyba ukládání: ${g.message} (code: ${g.code}, details: ${g.details}, hint: ${g.hint})`)):(b?.id&&(i.id=b.id),n?.(`✅ DataSet "${c.topicTitle}" uložen (ID: ${b?.id})`))}l.push(i)}catch(i){console.error(`Error creating DataSet for ${c.topicTitle}:`,i),n?.(`❌ Chyba pro "${c.topicTitle}": ${i}`)}}return n?.(`✅ Vytvořeno ${l.length}/${e.length} DataSetů`),l}async function yt(e,t,a,o,n,s=!0){const l=[];n?.(`📦 Vytvářím ${e.length} DataSetů z RVP témat...`);for(let r=0;r<e.length;r++){const c=e[r],m=t.get(c.id)||[],i=c.topic||c.thematicArea;n?.(`[${r+1}/${e.length}] ${i}`);try{const u=new Set,p=new Set;let k=0;const v=[];for(const h of m)h.vocabulary?.forEach(z=>u.add(z)),h.learningGoals?.forEach(z=>p.add(z)),k+=h.hoursAllocated||2,v.push(h.weekNumber);n?.(`  📅 ${m.length} týdnů, ${k} hodin`);const y={thematicArea:c.thematicArea,expectedOutcomes:c.expectedOutcomes||[],competencies:c.keyCompetencies||[],hoursAllocated:k||c.hoursAllocated||2,crossCurricular:c.crossCurricularTopics||[]},f=await V(o);n?.("  📖 Sbírám obsahová data...");const b={id:c.id,weekNumber:v[0]||1,topicTitle:i,topicDescription:c.expectedOutcomes.join(". "),learningGoals:Array.from(p),vocabulary:Array.from(u),hoursAllocated:k},[g,w]=await Promise.all([ft(i,a,o,b,n),F(i,a,o,n)]),d={id:crypto.randomUUID(),topic:i,subjectCode:a,grade:o,status:"ready",rvp:y,targetGroup:f,content:g,media:w,generatedMaterials:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};if(n?.(`✅ DataSet pro "${i}" vytvořen!`),s){const{data:h}=await j.auth.getUser();n?.("💾 Ukládám DataSet do databáze...");const z={thematicArea:String(d.rvp?.thematicArea||""),expectedOutcomes:Array.isArray(d.rvp?.expectedOutcomes)?d.rvp.expectedOutcomes:[],competencies:Array.isArray(d.rvp?.competencies)?d.rvp.competencies:[],hoursAllocated:Number(d.rvp?.hoursAllocated)||2,crossCurricular:Array.isArray(d.rvp?.crossCurricular)?d.rvp.crossCurricular:[]},K={ageRange:String(d.targetGroup?.ageRange||""),gradeLevel:String(d.targetGroup?.gradeLevel||""),cognitiveLevel:String(d.targetGroup?.cognitiveLevel||""),priorKnowledge:Array.isArray(d.targetGroup?.priorKnowledge)?d.targetGroup.priorKnowledge:[],specialNeeds:d.targetGroup?.specialNeeds||null},$={keyTerms:Array.isArray(d.content?.keyTerms)?d.content.keyTerms:[],keyFacts:Array.isArray(d.content?.keyFacts)?d.content.keyFacts:[],facts:Array.isArray(d.content?.facts)?d.content.facts:[],timeline:Array.isArray(d.content?.timeline)?d.content.timeline:[],personalities:Array.isArray(d.content?.personalities)?d.content.personalities:[],modernConnections:Array.isArray(d.content?.modernConnections)?d.content.modernConnections:[],funFacts:Array.isArray(d.content?.funFacts)?d.content.funFacts:[],sources:Array.isArray(d.content?.sources)?d.content.sources:[]},Ae={images:Array.isArray(d.media?.images)?d.media.images:[],emojis:Array.isArray(d.media?.emojis)?d.media.emojis:[],themeColors:Array.isArray(d.media?.themeColors)?d.media.themeColors:[]},L={topic:String(d.topic),subject_code:String(d.subjectCode),grade:Number(d.grade),status:"ready",rvp:z,target_group:K,content:$,media:Ae,generated_materials:[]};h.user?.id&&(L.created_by=h.user.id),console.log("[DataCollector] Inserting RVP DataSet:",L.topic);const{data:U,error:M}=await j.from("topic_data_sets").insert(L).select("id").single();M?(console.error("[DataCollector] Error saving DataSet:",M),n?.(`❌ Chyba ukládání: ${M.message}`)):(U?.id&&(d.id=U.id),n?.(`✅ DataSet "${i}" uložen (ID: ${U?.id})`))}l.push(d)}catch(u){console.error(`Error creating DataSet for ${i}:`,u),n?.(`❌ Chyba pro "${i}": ${u}`)}}return n?.(`✅ Vytvořeno ${l.length}/${e.length} DataSetů z RVP`),l}async function ft(e,t,a,o,n){const s=(o.vocabulary||[]).join(", "),l=(o.learningGoals||[]).join("; "),r=await T(t,a),c=ae(e,t,a,r,[s?`Klíčové pojmy k zahrnutí: ${s}`:"",l?`Učební cíle: ${l}`:"",o.topicDescription?`Popis tématu: ${o.topicDescription}`:""]);try{const m=await P(c,t,"agent"),i=O(m);return{keyTerms:(i.keyTerms||[]).map(u=>({term:u.term||"",definition:u.definition||"",emoji:u.emoji||""})),keyFacts:i.keyFacts||[],facts:i.keyFacts||[],timeline:(i.timeline||[]).map(u=>({date:u.date||"",event:u.event||"",importance:u.importance||"medium"})),personalities:(i.personalities||[]).map(u=>({name:u.name||"",role:u.role||"",description:u.description||""})),modernConnections:i.modernConnections||[],funFacts:i.funFacts||[],sources:i.sources||[]}}catch(m){return console.error("Error collecting content info:",m),{keyTerms:o.vocabulary?.map(i=>({term:i,definition:"",emoji:""}))||[],keyFacts:o.learningGoals||[],facts:o.learningGoals||[],timeline:[],personalities:[],modernConnections:[],funFacts:[],sources:[]}}}async function J(e,t,a){const o=[],n=Math.min(Math.max(t*4,30),50);for(const s of e){if(o.length>=t*3)break;if(!String(s||"").trim())continue;const l=await he({action:"query",generator:"search",gsrsearch:String(s).trim(),gsrnamespace:6,gsrlimit:n,prop:"imageinfo",iiprop:"url|mime|extmetadata",iiurlwidth:400});if(!l.ok){console.warn(`[ImageSearch] Commons search HTTP ${l.status} for:`,s);continue}const r=await l.json();if(r.error?.info){console.warn("[ImageSearch] Commons search warning:",r.error);continue}const c=r.query?.pages;if(!c)continue;const m=Object.values(c);m.sort((i,u)=>(i.index??0)-(u.index??0));for(let i=0;i<m.length;i++)try{const u=m[i];if(u.missing)continue;const p=u.imageinfo?.[0];if(!p?.url)continue;const k=p.mime||"";if(!ge(k,a,p.url)||o.some($=>$.url===p.url))continue;const v=p.extmetadata,y=String(u.title||"").replace(/^File:/,"").replace(/_/g," ").replace(/\.\w+$/i,""),f=Math.round((1-i/Math.max(m.length,1))*100),w=(k||te(p.url)).toLowerCase().includes("svg")&&a.allowSvg?18:0,d=Math.max(0,f-w),h=v?.LicenseShortName,z=I(h,"CC")||"CC",K=I(v?.ImageDescription,"");o.push({id:crypto.randomUUID(),url:p.url,thumbnailUrl:p.thumburl||p.url,title:y,description:K,source:"Wikimedia Commons",license:z,relevanceScore:d,keywords:[s],excluded:!0})}catch(u){console.error("Error processing search result:",u)}}return o}async function gt(e,t=24,a){console.log("[ImageSearch] Searching for:",e);let o=[];try{const s=await ne(e);if(a?.(s.slice(0,5)),console.log("[ImageSearch] Commons queries:",s),o=await J(s,t,{allowSvg:!1,allowGif:!1}),o.length===0&&(console.log("[ImageSearch] No bitmap/WebP results; including SVG diagrams from Commons (typical for Earth/seasons topics)."),o=await J(s,t,{allowSvg:!0,allowGif:!1})),o.length===0){const l=["temperate climate","temperate forest","Köppen C climate","ecoregion","biome world map"];o=await J([...new Set([...s,...l].map(r=>String(r||"").trim()).filter(Boolean))],t,{allowSvg:!0,allowGif:!1})}}catch(s){console.error("[ImageSearch] Error:",s)}const n=be(o).sort((s,l)=>l.relevanceScore-s.relevanceScore);return console.log("[ImageSearch] Found:",n.length,"images"),n.slice(0,t)}const Rt=Object.freeze(Object.defineProperty({__proto__:null,collectMediaInfo:F,collectTargetGroupInfo:V,collectTopicData:ot,createDataSetFromWeeklyPlan:ze,createDataSetsFromRvpTopics:yt,createDataSetsFromWeeklyPlans:vt,generateWebImageSearchKeywordsFromDataSet:mt,searchImagesForTopic:gt,suggestWikimediaSearchKeywords:ne},Symbol.toStringTag,{value:"Module"}));export{At as C,Te as D,Re as G,se as S,zt as W,we as a,Xe as b,yt as c,wt as d,F as e,V as f,Ye as g,St as h,Y as i,ke as j,x as k,Ot as l,Me as m,S as n,ot as o,Rt as p,jt as r,Pt as s};
