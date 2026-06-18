const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lottie-screenshot-DGPJk93J.js","assets/vendor-lottie-BrCSp3ta.js","assets/vendor-react-Bff9NmsZ.js","assets/vendor-supabase-Ds0jIvEe.js","assets/vendor-tiptap-WQxVZBcy.js"])))=>i.map(i=>d[i]);
import{generateBlockId as ne}from"./worksheet-6jNaTtzT.js";import{chatWithAIProxy as se}from"./ai-chat-proxy-D2xiLy3b.js";import{_ as ae}from"./main-WVgqMlpC.js";import{a as y,j as s}from"./vendor-react-Bff9NmsZ.js";import{L as U,aj as G,B as re}from"./main-app-BHMLsxig.js";import{I as L}from"./image-0zkkqiva.js";import{C as H}from"./check-D7r9NWeZ.js";import{F as le}from"./film-7GPv0U8W.js";import{S as ie}from"./sparkles-DpC1Y208.js";import{S as ce}from"./search-D8xFRExI.js";function ue(e,o,t,a){return{id:`msg-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,role:e,content:o,timestamp:new Date().toISOString(),suggestedActions:t,generatedBlocks:a,applied:!1}}const de=`Jsi expertní asistent pro tvorbu vzdělávacích pracovních listů pro české základní školy.

## KRITICKY DŮLEŽITÉ - PŘIZPŮSOBENÍ VĚKU:

Musíš VŽDY odhadnout cílovou věkovou skupinu podle tématu a přizpůsobit:
1. **Slovní zásobu** - jednodušší slova pro mladší děti
2. **Délku vět** - kratší a přehlednější pro mladší
3. **Složitost otázek** - přiměřenou věku
4. **Tón komunikace** - přátelský a povzbuzující

### Příklady odhadu věku podle tématu:

| Téma | Ročník | Věk | Jak psát |
|------|--------|-----|----------|
| Sčítání do 10 | 1. třída | 6-7 let | Velmi jednoduché věty, obrázky, hravý tón |
| Hmota a atomy | 6. třída | 11-12 let | Srozumitelné vysvětlení, ne příliš odborné termíny |
| Zlomky | 5. třída | 10-11 let | Praktické příklady ze života |
| Kvadratické rovnice | 9. třída | 14-15 let | Může být odbornější, ale stále srozumitelné |
| Starověký Egypt | 6. třída | 11-12 let | Zajímavosti, příběhy, ne suchá fakta |
| Fotosyntéza | 7. třída | 12-13 let | Vysvětlit proces jednoduše, s příklady |

### Pravidla pro 6. třídu (11-12 let):
- Jsou to STÁLE DĚTI, ne středoškoláci!
- Používej běžná slova, vysvětli odborné termíny
- Otázky formuluj jasně a jednoznačně
- Přidej zajímavosti a příklady ze života
- Vyhni se dlouhým složitým souvětím
- Buď přátelský: "Zkus přemýšlet...", "Vzpomeneš si...?"

### Pravidla pro 1.-3. třídu (6-9 let):
- Velmi krátké věty
- Základní slovní zásoba
- Hodně vizuální podpory v textu
- Hravý a povzbuzující tón
- Jednoduché otázky typu ANO/NE nebo výběr ze 2-3 možností

## Tvoje schopnosti:
- Vytváříš strukturované pracovní listy s různými typy bloků
- AUTOMATICKY odhaduješ věk podle tématu a přizpůsobuješ jazyk
- Používáš srozumitelný český jazyk přiměřený věku
- Vytváříš pestré a zajímavé úlohy

## Dostupné typy bloků:

1. **heading** - Nadpis
   \`\`\`json
   { "type": "heading", "content": { "text": "Text nadpisu", "level": "h1" | "h2" | "h3" } }
   \`\`\`

2. **paragraph** - Odstavec textu
   \`\`\`json
   { "type": "paragraph", "content": { "html": "<p>Text odstavce</p>" } }
   \`\`\`

3. **infobox** - Informační box (pro důležité informace, definice, tipy)
   \`\`\`json
   { "type": "infobox", "content": { "title": "Titulek", "html": "<p>Text</p>", "variant": "blue" | "green" | "yellow" | "purple" } }
   \`\`\`

4. **multiple-choice** - Otázka s výběrem odpovědí
   \`\`\`json
   {
     "type": "multiple-choice",
     "content": {
       "question": "Text otázky?",
       "options": [
         { "id": "a", "text": "Možnost A" },
         { "id": "b", "text": "Možnost B" },
         { "id": "c", "text": "Možnost C" }
       ],
       "correctAnswers": ["a"],
       "allowMultiple": false,
       "explanation": "Vysvětlení správné odpovědi"
     }
   }
   \`\`\`

5. **fill-blank** - Doplňování do textu
   \`\`\`json
   {
     "type": "fill-blank",
     "content": {
       "instruction": "Doplňte chybějící slova:",
       "segments": [
         { "type": "text", "content": "Hlavní město České republiky je " },
         { "type": "blank", "id": "b1", "correctAnswer": "Praha", "acceptedAnswers": ["Praha"] },
         { "type": "text", "content": "." }
       ]
     }
   }
   \`\`\`

6. **free-answer** - Otázka s volnou odpovědí
   \`\`\`json
   {
     "type": "free-answer",
     "content": {
       "question": "Otázka pro žáka?",
       "lines": 3,
       "hint": "Nápověda (volitelné)",
       "sampleAnswer": "Vzorová odpověď pro učitele"
     }
   }
   \`\`\`

7. **image** - Obrázek (pro ilustrace, diagramy, fotografie)
   \`\`\`json
   {
     "type": "image",
     "content": {
       "url": "https://example.com/obrazek.jpg",
       "alt": "Popis obrázku pro přístupnost",
       "caption": "Volitelný titulek pod obrázkem",
       "size": "medium",
       "alignment": "center"
     }
   }
   \`\`\`
   - size: "small" | "medium" | "large" | "full"
   - alignment: "left" | "center" | "right"
   - Používej pouze pokud máš k dispozici URL obrázku v kontextu

8. **table** - Tabulka (pro přehledné zobrazení dat, porovnání, seznamy)
   \`\`\`json
   {
     "type": "table",
     "content": {
       "html": "<table><thead><tr><th>Sloupec 1</th><th>Sloupec 2</th></tr></thead><tbody><tr><td>Data 1</td><td>Data 2</td></tr></tbody></table>",
       "rows": 3,
       "columns": 2,
       "hasHeader": true,
       "hasBorder": true,
       "hasRoundedCorners": true,
       "colorStyle": "blue"
     }
   }
   \`\`\`
   - colorStyle: "default" | "blue" | "green" | "purple" | "yellow" | "red" | "pink" | "cyan"
   - Používej tabulky pro:
     - Porovnání vlastností (např. živočichové, planety)
     - Přehled dat (např. historické události, chemické prvky)
     - Doplňovací cvičení v tabulkové formě
     - Slovíčka a jejich překlady
     - Matematické tabulky (násobky, převody jednotek)

## Formát odpovědi:

Vždy odpovídej v tomto JSON formátu:
\`\`\`json
{
  "message": "Krátká odpověď pro uživatele v češtině",
  "blocks": [
    // Pole bloků podle struktury výše
  ]
}
\`\`\`

## Pravidla:
- Odpovídej POUZE validním JSON
- Vytvárej obsah přiměřený zadanému ročníku
- Používej češtinu bez pravopisných chyb
- Pro matematiku používej správné matematické výrazy
- Vždy začni nadpisem (h1) s názvem pracovního listu
- Střídej různé typy úloh pro zajímavost
- U multiple-choice dávej 3-4 možnosti
- Správné odpovědi musí být vždy správné!
- Pokud jsou v kontextu dostupné obrázky (URL), můžeš je vložit jako image bloky tam, kde dávají smysl
- Obrázky vkládej pouze pokud máš platnou URL adresu`;function pe(e){const o=e instanceof Error?e.message:String(e||"");return/denied access|permission_denied/i.test(o)?"AI služba Gemini je pro tento Google projekt zablokovaná. Administrátor musí v Supabase nastavit platný GEMINI_API_KEY (Google AI Studio) nebo OPENAI_API_KEY jako zálohu.":/gemini api key is not configured/i.test(o)?"AI není nakonfigurované na serveru. Chybí GEMINI_API_KEY v Supabase secrets.":/must be signed in/i.test(o)?"Pro AI generování se musíte přihlásit.":o||"Neznámá chyba AI generování"}async function Oe(e){const{prompt:o,context:t,apiKey:a}=e;let l="";t.subject&&(l+=`Předmět: ${ke(t.subject)}
`),t.grade&&(l+=`Ročník: ${t.grade}. třída ZŠ
`),t.topic&&(l+=`Téma: ${t.topic}
`),t.existingBlocks&&t.existingBlocks.length>0&&(l+=`
Existující bloky v pracovním listu: ${t.existingBlocks.length}
`);const c=l?`${l}
Požadavek: ${o}`:o;try{const i=await me(c),d=he(i);return d.blocks&&(d.blocks=ge(d.blocks,t.existingBlocks?.length||0)),d}catch(i){console.error("AI generation error:",i);const d=pe(i);return{message:/AI služba Gemini|AI není nakonfigurované|Pro AI generování se musíte přihlásit/i.test(d)?d:`Omlouvám se, při generování došlo k chybě. ${d}`,error:i instanceof Error?i.message:"Unknown error"}}}async function me(e){console.log("Calling Gemini API via Supabase Edge Function...");const o=await se([{role:"system",content:de},{role:"user",content:e}],"gemini-3-flash",{temperature:.7,max_tokens:8192,persistToGlobalThread:!1});return console.log("Gemini response received via proxy"),o}function he(e){const o=e.match(/```json\s*([\s\S]*?)\s*```/)||e.match(/\{[\s\S]*"blocks"[\s\S]*\}/);if(o)try{const t=JSON.parse(o[1]||o[0]);return{message:t.message||"Pracovní list byl vygenerován.",blocks:t.blocks||[],suggestedActions:ve(t.blocks||[])}}catch(t){console.error("JSON parse error:",t)}return{message:e||"Odpověď byla vygenerována, ale nepodařilo se ji zpracovat."}}function ge(e,o){return e.map((t,a)=>{const l=ne(),c=o+a;switch(t.type){case"heading":return{id:l,type:"heading",order:c,width:"full",content:{text:t.content?.text||"Nadpis",level:t.content?.level||"h2"}};case"paragraph":return{id:l,type:"paragraph",order:c,width:"full",content:{html:t.content?.html||"<p>Text odstavce</p>"}};case"infobox":return{id:l,type:"paragraph",order:c,width:"full",content:{html:`<strong>${t.content?.title||"Informace"}</strong><br/>${t.content?.html||"<p>Text infoboxu</p>"}`},visualStyles:{displayPreset:"infobox",backgroundColor:(()=>{switch(t.content?.variant||"blue"){case"green":return"#dcfce7";case"yellow":return"#fef9c3";case"purple":return"#f3e8ff";case"red":return"#fee2e2";default:return"#dbeafe"}})(),borderColor:(()=>{switch(t.content?.variant||"blue"){case"green":return"#22c55e";case"yellow":return"#eab308";case"purple":return"#a855f7";case"red":return"#ef4444";default:return"#3b82f6"}})(),borderRadius:12,shadow:"none"}};case"multiple-choice":return{id:l,type:"multiple-choice",order:c,width:"full",content:{question:t.content?.question||"Otázka?",options:(t.content?.options||[]).map((i,d)=>({id:i.id||`opt-${d}`,text:i.text||`Možnost ${d+1}`})),correctAnswers:t.content?.correctAnswers||[],allowMultiple:t.content?.allowMultiple||!1,explanation:t.content?.explanation}};case"fill-blank":return{id:l,type:"fill-blank",order:c,width:"full",content:{instruction:t.content?.instruction,segments:(t.content?.segments||[]).map((i,d)=>i.type==="blank"?{type:"blank",id:i.id||`blank-${d}`,correctAnswer:i.correctAnswer||"",acceptedAnswers:i.acceptedAnswers}:{type:"text",content:i.content||""})}};case"free-answer":return{id:l,type:"free-answer",order:c,width:"full",content:{question:t.content?.question||"Otázka?",lines:t.content?.lines||3,hint:t.content?.hint,sampleAnswer:t.content?.sampleAnswer}};case"image":return{id:l,type:"image",order:c,width:"full",content:{url:t.content?.url||"",alt:t.content?.alt,caption:t.content?.caption,size:t.content?.size||"medium",alignment:t.content?.alignment||"center"}};default:return{id:l,type:"paragraph",order:c,width:"full",content:{html:"<p>Neznámý typ bloku</p>"}}}})}function ve(e){return!e||e.length===0?[]:[{type:"generate-content",description:`Přidat ${e.length} bloků do pracovního listu`,payload:{}}]}function ke(e){return{fyzika:"Fyzika",chemie:"Chemie",matematika:"Matematika",prirodopis:"Přírodopis",zemepis:"Zeměpis",dejepis:"Dějepis",cestina:"Čeština",anglictina:"Angličtina",other:"Jiný předmět"}[e]||e}function Re(e){return ue("assistant",e.message,e.suggestedActions,e.blocks)}const Me=[{label:"Nový pracovní list",prompt:"Vytvoř kompletní pracovní list s informacemi a různými typy úloh",icon:"📝"},{label:"Nový test",prompt:"Vytvoř test s otázkami ABC a otevřenými otázkami",icon:"📋"},{label:"Nová písemka",prompt:"Vytvoř písemku pouze s otevřenými otázkami",icon:"✍️"},{label:"Nový učební text",prompt:"Vytvoř učební text s vysvětlením tématu a informačními boxy",icon:"📖"}],Ke=[{label:"Přidat otázku",prompt:"Přidej otázku s výběrem odpovědí na aktuální téma",icon:"❓"},{label:"Přidat doplňovačku",prompt:"Vytvoř cvičení na doplňování slov do textu",icon:"✏️"},{label:"Přidat infobox",prompt:"Přidej informační box s důležitými fakty",icon:"ℹ️"},{label:"Přidat otevřenou otázku",prompt:"Přidej otevřenou otázku na zamyšlení",icon:"💭"},{label:"Více úloh",prompt:"Přidej další 3 různorodé úlohy k procvičení",icon:"➕"}];function ye(e){if(!e||e.length===0)return"";const o={};e.forEach(i=>{o[i.type]=(o[i.type]||0)+1});const t=(o["multiple-choice"]||0)+(o["free-answer"]||0)+(o["fill-blank"]||0),a=(o.infobox||0)>0,l=(o.paragraph||0)>0,c=[];if(t>0&&(t===1?c.push("jednu úlohu"):t<5?c.push(`${t} úlohy`):c.push(`${t} úloh`)),a){const i=o.infobox;c.push(i===1?"informační box":`${i} informační boxy`)}return l&&c.push("textové bloky"),c.length===0?"základní strukturu":c.join(", ")}function De(e,o){if(!e||e.length===0)return`Ahoj! 👋 Pracovní list je zatím prázdný – pojďme to změnit!

Co chceš vytvořit?
• **Pracovní list** – mix informací a různých cvičení
• **Test** – otázky s výběrem odpovědí + otevřené otázky  
• **Písemka** – jen otevřené otázky k zamyšlení
• **Učební text** – vysvětlení látky s infoboxes

Klikni na některou z rychlých akcí nebo mi napiš, co potřebuješ.`;const t=ye(e),a=o?` „${o}"`:"";return e.length<5?`Ahoj! 👋 Koukám, že${a} máš rozděláno – zatím tam je ${t}.

Co bys chtěl přidat? Můžu vygenerovat další otázky, doplňovačky nebo třeba shrnutí v infoboxu.`:e.length<15?`Ahoj! 👋 Pěkná práce${a}! Už máš ${t}.

Chceš přidat něco dalšího? Třeba víc úloh k procvičení, nebo informační box se shrnutím?`:`Ahoj! 👋 Ten pracovní list${a} už je pořádně nabitý – ${t} a další obsah.

Pokud potřebuješ ještě něco doladit nebo přidat, jsem tu pro tebe!`}const fe="demo";async function N(e,o={}){const{perPage:t=5,page:a=1,orientation:l}=o;return console.log("[Unsplash] API Key configured:","YES (first 10 chars: "+fe.substring(0,10)+"...)"),console.log("[Unsplash] Query:",e),console.log("[Unsplash] Using Unsplash Source API (no API key configured)"),be(e,t)}function be(e,o=5){console.log("[Unsplash Source] Searching for:",e);const t=e.trim().replace(/\s+/g,","),a=[];for(let l=0;l<o;l++){const c=`${Date.now()}-${l}-${Math.random().toString(36).substr(2,9)}`,i=`https://source.unsplash.com/800x600/?${encodeURIComponent(t)}&sig=${c}`,d=`https://source.unsplash.com/400x300/?${encodeURIComponent(t)}&sig=${c}`;a.push({id:`unsplash-source-${l}-${c}`,url:i,thumbUrl:d,alt:`Obrázek: ${e}`,author:"Unsplash",authorUrl:"https://unsplash.com",downloadUrl:"",width:800,height:600})}return console.log("[Unsplash Source] Generated",o,"image URLs for query:",t),{images:a,total:o,totalPages:1}}function B(e,o=3){const t=new Set(["a","i","o","u","v","k","s","z","na","do","od","pro","při","po","je","jsou","byl","byla","bylo","být","bude","budou","to","ta","ten","ty","ti","tě","toto","tato","tyto","toho","tomu","této","co","jak","kde","kdy","proč","který","která","které","kteří","nebo","ale","když","že","aby","protože","pokud","jestli","se","si","ho","mu","mi","mě","nám","vám","jim","jej","něj","jako","také","tak","jen","pouze","velmi","více","méně","ještě","již","už","tím","čím","něco","nic","někdo","nikdo","všechno","každý","některý","tento","tenhle","tamten","onen","sám","sama","samo","svůj","jeho","její","náš","váš","jejich","můj","tvůj","the","a","an","is","are","was","were","be","been","have","has","had","do","does","did","will","would","can","could","may","might","must","shall","should","pracovní","list","test","otázka","odpověď","úloha","cvičení","nový","nová","nové","první","druhý","třetí","další","jeden","jedna","jedno","dva","dvě","tři","čtyři","pět","věc","věci","způsob","případ","příklad","skutečnost","možnost","problém","otázka","odpověď","informace","materiál","obsah","část","celek","základ","princip","proces","postup","metoda"]),a=["ovat","ávat","ít","ět","at","it","out","ýt","íst","ést"],l=n=>a.some(p=>n.endsWith(p)&&n.length>p.length+2),c=["ný","ná","né","ní","ký","ká","ké","ší","čí","ově","sky"],i=n=>c.some(p=>n.endsWith(p)),h=e.toLowerCase().replace(/<[^>]*>/g," ").replace(/[^\wáčďéěíňóřšťúůýž\s]/gi," ").split(/\s+/).filter(n=>n.length>2&&!t.has(n)).map(n=>{let p=0;return V[n]&&(p+=100),n.length>=4&&n.length<=10&&(p+=20),l(n)&&(p-=50),i(n)&&(p-=20),n.length>12&&(p-=10),{word:n,score:p}});h.sort((n,p)=>p.score-n.score);const g=new Set,f=[];for(const{word:n,score:p}of h)!g.has(n)&&f.length<o&&(g.add(n),f.push(n),console.log(`[Keywords] "${n}" (score: ${p}, translated: ${V[n]||"no"})`));return f}const V={hmota:"matter",hmoty:"matter",látka:"substance",látky:"substances",těleso:"object",tělesa:"objects",síla:"force",síly:"forces",pohyb:"motion",rychlost:"speed",zrychlení:"acceleration",setrvačnost:"inertia",tření:"friction",tlak:"pressure",hustota:"density",objem:"volume",hmotnost:"mass",váha:"weight",pevný:"solid",kapalný:"liquid",plynný:"gas",skupenství:"state of matter",tání:"melting",vření:"boiling",vypařování:"evaporation",kondenzace:"condensation",voda:"water",oheň:"fire",vzduch:"air",země:"earth",hora:"mountain",hory:"mountains",moře:"sea",řeka:"river",les:"forest",strom:"tree",stromy:"trees",květina:"flower",zvíře:"animal",zvířata:"animals",pták:"bird",ryba:"fish",rostlina:"plant",rostliny:"plants",atom:"atom",atomy:"atoms",molekula:"molecule",molekuly:"molecules",buňka:"cell",buňky:"cells",energie:"energy",elektřina:"electricity",elektrický:"electric",magnetismus:"magnet",magnetický:"magnetic",světlo:"light",zvuk:"sound",teplo:"heat",teplota:"temperature",gravitace:"gravity",fyzika:"physics",chemie:"chemistry",biologie:"biology",matematika:"mathematics",geometrie:"geometry",věda:"science",experiment:"experiment",laboratoř:"laboratory",prvek:"element",sloučenina:"compound",reakce:"reaction",kyselina:"acid",zásada:"base",roztok:"solution",krystal:"crystal",orgán:"organ",sval:"muscle",kost:"bone",krev:"blood",dýchání:"breathing",trávení:"digestion",fotosyntéza:"photosynthesis",evoluce:"evolution",dědičnost:"genetics",historie:"history",starověk:"ancient",středověk:"medieval",novověk:"modern history",pravěk:"prehistoric",egyptský:"egyptian",egypt:"egypt pyramid",římský:"roman",řím:"rome ancient",řecký:"greek",řecko:"greece ancient",válka:"war",bitva:"battle",král:"king",královna:"queen",hrad:"castle",zámek:"palace",pyramida:"pyramid",chrám:"temple",mapa:"map",kontinent:"continent",ostrov:"island",poušť:"desert",oceán:"ocean",jezero:"lake",město:"city",vesnice:"village",krajina:"landscape",klima:"climate",počasí:"weather",vesmír:"space universe",planeta:"planet",hvězda:"star",slunce:"sun",měsíc:"moon",galaxie:"galaxy",sluneční:"solar",stroj:"machine",motor:"engine",počítač:"computer",robot:"robot",technologie:"technology",vynález:"invention",čtení:"reading",psaní:"writing",počítání:"counting",malování:"painting",hudba:"music",sport:"sport",rodina:"family",škola:"school classroom",práce:"work",jídlo:"food",zdraví:"health",člověk:"human",lidé:"people",tělo:"human body",srdce:"heart",mozek:"brain",oko:"eye",ucho:"ear"};function Z(e){return e.map(o=>{const t=o.toLowerCase();for(const[a,l]of Object.entries(V))if(t.includes(a))return l;return o})}async function je(e,o,t){const l=["nový pracovní list","pracovní list","test","nový","cvičení"].some(n=>e.toLowerCase().includes(n));let c=[];t&&t.length>20&&c.push(t.substring(0,1500)),!l&&e&&c.push(e);const i=c.join(" ");if(i.length<10)return console.log("[ImageSearch] Not enough content to search"),(await N("education science",{perPage:5})).images;console.log("[ImageSearch] Search text length:",i.length),console.log("[ImageSearch] First 200 chars:",i.substring(0,200));const d=B(i,8);console.log("[ImageSearch] Extracted keywords:",d);const h=Z(d).slice(0,4);if(console.log("[ImageSearch] Translated keywords:",h),h.length===0||h.every(n=>n===d[0]))return console.log("[ImageSearch] No good translations, using generic science search"),(await N("science education",{perPage:5})).images;const g=h.slice(0,3).join(" ");return console.log("[ImageSearch] Final search query:",g),(await N(g,{perPage:5,orientation:"landscape"})).images}async function Fe(e){}function xe(e,o,t,a,l,c){const i=[l,c?.substring(0,500)].filter(Boolean).join(" ").toLowerCase(),d=ze(i);if(d.length>0){const h=Math.min(o,d.length-1);return d[h]}return we(o,t,l||"téma")}function ze(e){return e.includes("atom")||e.includes("hmota")||e.includes("částic")?["Ilustrace hmoty a její základní struktury","Znázornění atomů, ze kterých je vše složeno","Pohled na mikroskopickou stavbu látek","Struktura atomu a jeho složení","Atomy jako základní stavební kameny hmoty"]:e.includes("molekul")||e.includes("sloučenin")||e.includes("vazb")?["Vizualizace molekulární struktury","Jak se atomy spojují do molekul","Chemické vazby mezi atomy","Prostorové uspořádání molekul","Výsledná molekulární struktura"]:e.includes("skupenství")||e.includes("pevn")||e.includes("kapaln")||e.includes("plyn")?["Uspořádání částic v pevné látce","Přechod mezi skupenstvími","Pohyb částic při změně teploty","Rozdíly mezi pevným, kapalným a plynným skupenstvím","Znázornění chování částic v různých skupenstvích"]:e.includes("síla")||e.includes("pohyb")||e.includes("rychlost")?["Znázornění působení síly na těleso","Jak síla ovlivňuje pohyb","Směr a velikost působící síly","Výsledek působení síly","Změna pohybu vlivem síly"]:e.includes("energi")||e.includes("teplo")||e.includes("práce")?["Vizualizace přenosu energie","Přeměna jedné formy energie v jinou","Tok energie v systému","Zachování energie při přeměnách","Výsledný stav po přeměně energie"]:e.includes("elektř")||e.includes("proud")||e.includes("napětí")||e.includes("obvod")?["Elektrický obvod a jeho součásti","Tok elektrického proudu","Znázornění elektrického napětí","Propojení prvků v obvodu","Funkce elektrického obvodu"]:e.includes("světl")||e.includes("paprs")||e.includes("odraz")||e.includes("lom")?["Šíření světelných paprsků","Interakce světla s povrchem","Chování světla při průchodu prostředím","Optické jevy v praxi","Výsledný optický efekt"]:e.includes("buňk")||e.includes("orgán")||e.includes("tkan")?["Struktura živé buňky","Vnitřní uspořádání buňky","Jednotlivé organely a jejich funkce","Procesy probíhající v buňce","Buňka jako základní jednotka života"]:e.includes("voda")||e.includes("koloběh")||e.includes("vypařování")?["Koloběh vody v přírodě","Vypařování a vznik vodní páry","Kondenzace a vznik srážek","Cesta vody krajinou","Uzavření vodního cyklu"]:e.includes("země")||e.includes("vrstva")||e.includes("hora")||e.includes("sopka")?["Struktura zemského tělesa","Geologické vrstvy Země","Procesy formující zemský povrch","Pohyb tektonických desek","Výsledný tvar krajiny"]:[]}function we(e,o,t){const a=t.replace(/nový pracovní list/gi,"").trim()||"téma";if(o===1)return`Ilustrace k tématu: ${a}`;const l=[`Úvodní vizualizace k tématu ${a}`,"Grafické znázornění probíraného konceptu","Ilustrace klíčového principu","Vizuální vysvětlení tématu","Závěrečné shrnutí v obraze"];return l[Math.min(e,l.length-1)]}function _e({topic:e,content:o,lessonImages:t,onConfirm:a,onSkip:l}){const[c,i]=y.useState(!0),[d,h]=y.useState([]),[g,f]=y.useState([]),[n,p]=y.useState([]),[v,A]=y.useState(new Set),[C,x]=y.useState({lottie:!1,unsplash:!1,extracted:!1}),[w,O]=y.useState(""),[R,M]=y.useState(!1);y.useEffect(()=>{console.log("[ImageSelection] Starting with:",{topic:e,contentLength:o?.length,lessonImagesCount:t.length,lessonImages:t.map(r=>({url:r.url?.substring(0,50),type:r.type,alt:r.alt}))}),W()},[e,o,t]);const W=async()=>{i(!0),await Promise.all([J(),q(),Y()]),i(!1)},J=async()=>{x(u=>({...u,lottie:!0}));const r=t.filter(u=>u.type==="lottie"&&u.url);console.log("[ImageSelection] Found Lottie items:",r.length,r.map(u=>u.url));const m=[];for(const u of r){try{console.log("[ImageSelection] Generating Lottie screenshots:",u.url);const k=await fetch(u.url);if(!k.ok)continue;const b=await k.json(),I=b.fr||30,j=(b.op||60)-(b.ip||0),P=j/I,z=Math.min(5,Math.max(1,Math.floor(P/2)+1));console.log("[ImageSelection] Lottie duration:",P,"s, taking",z,"screenshots");const D=u.alt||u.caption||b.nm||"Animace";for(let S=0;S<z;S++){const F=z===1?.5:S/(z-1),ee=Math.floor(F*j),_=xe(D,S,z,F,e,o);try{const{generateScreenshotFromData:T}=await ae(async()=>{const{generateScreenshotFromData:oe}=await import("./lottie-screenshot-DGPJk93J.js");return{generateScreenshotFromData:oe}},__vite__mapDeps([0,1,2,3,4])),te=await T(b,{frame:ee,width:600});m.push({id:`lottie-${m.length}`,url:te,alt:`${D} - ${_}`,caption:_,source:"lottie"})}catch(T){console.warn("[ImageSelection] Failed to generate frame",S,T)}}console.log("[ImageSelection] Generated",z,"screenshots for this Lottie")}catch(k){console.warn("[ImageSelection] Failed to process Lottie:",k)}if(m.length>=10)break}console.log("[ImageSelection] Total Lottie screenshots generated:",m.length),h(m),x(u=>({...u,lottie:!1}))},q=async()=>{x(r=>({...r,unsplash:!0}));try{console.log("[ImageSelection] === UNSPLASH SEARCH START ==="),console.log("[ImageSelection] Searching images for topic:",e),console.log("[ImageSelection] Content length:",o?.length||0),console.log("[ImageSelection] Content preview:",o?.substring(0,200));const r=[e,o?.substring(0,1500)].filter(Boolean).join(" "),m=B(r,5),k=Z(m).slice(0,3).join(", ");O(k),console.log("[ImageSelection] Keywords for search:",k);const b=await je(e,void 0,o);console.log("[ImageSelection] === UNSPLASH SEARCH RESULT ==="),console.log("[ImageSelection] Image search returned:",b.length,"images"),console.log("[ImageSelection] First image:",b[0]);const I=b.slice(0,5).map((j,P)=>({id:`unsplash-${P}`,url:j.url,alt:j.alt,caption:`Foto: ${j.author}`,source:"unsplash",author:j.author}));console.log("[ImageSelection] Setting",I.length,"Unsplash images to state"),f(I)}catch(r){console.error("[ImageSelection] === UNSPLASH SEARCH FAILED ===",r)}x(r=>({...r,unsplash:!1}))},K=async()=>{if(w.trim()){M(!0);try{console.log("[ImageSelection] Custom search:",w);const m=(await N(w.trim(),{perPage:5})).images.slice(0,5).map((u,k)=>({id:`unsplash-${k}-${Date.now()}`,url:u.url,alt:u.alt,caption:`Foto: ${u.author}`,source:"unsplash",author:u.author}));f(m)}catch(r){console.warn("[ImageSelection] Custom search failed:",r)}M(!1)}},Y=async()=>{x(u=>({...u,extracted:!0}));const r=t.filter(u=>u.type==="image"&&u.url);console.log("[ImageSelection] Found lesson images:",r.length,r.map(u=>u.url?.substring(0,50)));const m=r.slice(0,6).map((u,k)=>({id:`lesson-${k}`,url:u.url,alt:u.alt||"Obrázek z lekce",caption:u.caption,source:"lesson"}));console.log("[ImageSelection] Lesson image options:",m.length),p(m),x(u=>({...u,extracted:!1}))},$=r=>{A(m=>{const u=new Set(m);return u.has(r)?u.delete(r):u.add(r),u})},Q=()=>{const m=[...d,...g,...n].filter(u=>v.has(u.id));a(m)},X=[...d,...g,...n].length>0;return c?s.jsxs("div",{className:"h-full flex flex-col items-center justify-center bg-white p-6",children:[s.jsx(U,{className:"h-12 w-12 text-blue-500 animate-spin mb-4"}),s.jsx("p",{className:"text-slate-600 font-medium mb-2",children:"Hledám obrázky..."}),s.jsxs("div",{className:"text-xs text-slate-400 space-y-1",children:[C.lottie&&s.jsx("p",{children:"• Generuji screenshoty z animací..."}),C.unsplash&&s.jsx("p",{children:"• Hledám na Unsplash..."}),C.extracted&&s.jsx("p",{children:"• Načítám obrázky z lekce..."})]})]}):s.jsxs("div",{className:"h-full flex flex-col bg-white overflow-hidden",children:[s.jsx("div",{className:"shrink-0 py-6 px-4 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-purple-50",children:s.jsxs("div",{className:"flex flex-col items-center text-center",children:[s.jsx("div",{className:"w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-4",style:{background:"linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)"},children:s.jsx(L,{className:"h-8 w-8 text-white",strokeWidth:2})}),s.jsx("h2",{className:"text-2xl font-bold text-slate-800 mb-1",children:"Chcete přidat obrázky?"}),s.jsx("p",{className:"text-slate-600 text-lg mb-4",children:"Toto jsem pro vás našel ✨"}),s.jsxs("div",{className:"flex gap-3 w-full max-w-xs",children:[s.jsx(G,{variant:"outline",onClick:l,className:"flex-1",children:"Přeskočit"}),s.jsxs(G,{onClick:Q,disabled:v.size===0,className:"flex-1 gap-2 text-white",style:{backgroundColor:v.size>0?"#2563eb":"#94a3b8"},children:[s.jsx(H,{className:"h-4 w-4"}),"Vložit (",v.size,")"]})]})]})}),s.jsx("div",{className:"flex-1 min-h-0 overflow-y-auto p-4",children:!X&&g.length===0?s.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-slate-400",children:[s.jsx(L,{className:"h-12 w-12 mb-3"}),s.jsx("p",{children:"Nenalezeny žádné obrázky"})]}):s.jsxs("div",{className:"space-y-6",children:[(d.length>0||n.length>0)&&s.jsxs("div",{children:[s.jsxs("h3",{className:"text-base font-semibold text-slate-800 mb-4 flex items-center gap-2",children:[s.jsx(re,{className:"h-5 w-5 text-green-600"}),"Obrázky z našich lekcí"]}),d.length>0&&s.jsxs("div",{className:"mb-4",children:[s.jsxs("p",{className:"text-xs text-slate-500 mb-2 flex items-center gap-1",children:[s.jsx(le,{className:"h-3 w-3"}),"Z animací (",d.length,")"]}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:d.map(r=>s.jsx(E,{image:r,isSelected:v.has(r.id),onToggle:()=>$(r.id)},r.id))})]}),n.length>0&&s.jsxs("div",{children:[s.jsxs("p",{className:"text-xs text-slate-500 mb-2",children:["Další obrázky (",n.length,")"]}),s.jsx("div",{className:"grid grid-cols-2 gap-3",children:n.map(r=>s.jsx(E,{image:r,isSelected:v.has(r.id),onToggle:()=>$(r.id)},r.id))})]})]}),s.jsxs("div",{children:[s.jsxs("h3",{className:"text-base font-semibold text-slate-800 mb-3 flex items-center gap-2",children:[s.jsx(ie,{className:"h-5 w-5 text-blue-600"}),"A nebo jsem pro tebe vyhledal"]}),s.jsxs("div",{className:"mb-4",children:[s.jsxs("div",{className:"flex gap-2",children:[s.jsx("input",{type:"text",value:w,onChange:r=>O(r.target.value),onKeyDown:r=>r.key==="Enter"&&K(),placeholder:"Klíčová slova pro vyhledávání...",className:"flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}),s.jsxs("button",{onClick:K,disabled:R||!w.trim(),className:"px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2 disabled:opacity-50",style:{backgroundColor:"#2563eb"},children:[R?s.jsx(U,{className:"h-4 w-4 animate-spin"}):s.jsx(ce,{className:"h-4 w-4"}),"Hledat"]})]}),s.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Upravte klíčová slova a stiskněte Enter nebo tlačítko Hledat"})]}),g.length>0?s.jsx("div",{className:"grid grid-cols-2 gap-3",children:g.map(r=>s.jsx(E,{image:r,isSelected:v.has(r.id),onToggle:()=>$(r.id)},r.id))}):s.jsx("p",{className:"text-sm text-slate-400 text-center py-4",children:"Zadejte klíčová slova a vyhledejte obrázky"})]})]})})]})}function E({image:e,isSelected:o,onToggle:t}){const[a,l]=y.useState(!1),[c,i]=y.useState(!1),d={lottie:"Animace",unsplash:"Unsplash",lesson:"Lekce"}[e.source];return c?s.jsx("div",{className:"aspect-video bg-slate-100 rounded-lg flex items-center justify-center",children:s.jsx(L,{className:"h-8 w-8 text-slate-300"})}):s.jsxs("div",{onClick:t,className:`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${o?"border-blue-500 ring-2 ring-blue-200":"border-slate-200 hover:border-slate-300"}`,children:[s.jsxs("div",{className:"aspect-video bg-slate-100 relative",children:[!a&&s.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:s.jsx(U,{className:"h-6 w-6 text-slate-400 animate-spin"})}),s.jsx("img",{src:e.url,alt:e.alt,className:`w-full h-full object-cover transition-opacity ${a?"opacity-100":"opacity-0"}`,onLoad:()=>l(!0),onError:()=>i(!0)})]}),s.jsx("div",{className:`absolute top-2 right-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${o?"bg-blue-500 border-blue-500":"bg-white/80 border-slate-300"}`,children:o&&s.jsx(H,{className:"h-4 w-4 text-white"})}),s.jsxs("div",{className:"p-2 bg-white",children:[s.jsx("div",{className:"flex items-center gap-1 mb-0.5",children:s.jsx("span",{className:"text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500",children:d})}),e.caption&&s.jsx("p",{className:"text-xs text-slate-600 truncate",children:e.caption})]})]})}function Ge(e){const o=[];if(!e)return o;const t=/<img[^>]+src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*>/gi;let a;for(;(a=t.exec(e))!==null;){const n=a[1],p=a[2]||"";n.includes("spacer")||n.includes("pixel")||n.includes("1x1")||o.push({url:n,alt:p,type:"image"})}const l=/<img[^>]+alt=["']([^"']*)["'][^>]+src=["']([^"']+)["'][^>]*>/gi;for(;(a=l.exec(e))!==null;){const n=a[1]||"",p=a[2];o.some(v=>v.url===p)||o.push({url:p,alt:n,type:"image"})}const c=/<figure[^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<figcaption[^>]*>([^<]+)<\/figcaption>[\s\S]*?<\/figure>/gi;for(;(a=c.exec(e))!==null;){const n=a[1],p=a[2]?.trim()||"",v=o.find(A=>A.url===n);v?v.caption=p:o.push({url:n,alt:p,caption:p,type:"image"})}const i=/<lottie-player[^>]+src=["']([^"']+)["'][^>]*>/gi;for(;(a=i.exec(e))!==null;){const n=a[1];o.some(p=>p.url===n)||o.push({url:n,alt:"Animace",type:"lottie"})}const d=/data-lottie=["']([^"']+)["']/gi;for(;(a=d.exec(e))!==null;){const n=a[1];o.push({url:"",alt:"Animace",type:"lottie",lottieData:n})}const h=/lottie(?:sequence)?player[^>]+(?:src|animation)=["']([^"']+\.json)["']/gi;for(;(a=h.exec(e))!==null;){const n=a[1];o.some(p=>p.url===n)||o.push({url:n,alt:"Animace",type:"lottie"})}const g=/["'](https?:\/\/[^"']+\.json)["']/gi;for(;(a=g.exec(e))!==null;){const n=a[1];(n.includes("lottie")||n.includes("animation")||n.includes("anim"))&&!o.some(p=>p.url===n)&&o.push({url:n,alt:"Animace",type:"lottie"})}const f=/(?:data-)?animation-src=["']([^"']+)["']/gi;for(;(a=f.exec(e))!==null;){const n=a[1];o.some(p=>p.url===n)||o.push({url:n,alt:"Animace",type:n.endsWith(".json")?"lottie":"image"})}return o}function He(e){if(e.length===0)return"";const o=e.filter(t=>t.type==="image"&&t.url&&!t.url.startsWith("data:")).map((t,a)=>{const l=t.url.length>100?t.url.substring(0,100)+"...":t.url,c=[`Obrázek ${a+1}: ${l}`];return t.alt&&c.push(`Popis: "${t.alt}"`),t.caption&&c.push(`Titulek: "${t.caption}"`),c.join(", ")});return o.length===0?"":`

### Dostupné obrázky:
${o.join(`
`)}

Pokud je to vhodné, můžeš tyto obrázky vložit do pracovního listu pomocí bloku typu "image" s odpovídající URL.`}export{_e as I,Ke as Q,ue as a,Re as b,De as c,Me as d,Ge as e,He as f,Oe as g,je as s,Fe as t};
