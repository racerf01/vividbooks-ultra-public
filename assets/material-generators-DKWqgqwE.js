const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-app-BHMLsxig.js","assets/main-WVgqMlpC.js","assets/vendor-react-Bff9NmsZ.js","assets/vendor-supabase-Ds0jIvEe.js","assets/vendor-tiptap-WQxVZBcy.js","assets/main-app-R1p6ZZgE.css","assets/ai-chat-proxy-D2xiLy3b.js"])))=>i.map(i=>d[i]);
import{_ as Y}from"./main-WVgqMlpC.js";import{createInfoSlide as re,createABCSlide as ge,createOpenSlide as we,createVotingSlide as Ae,createBoardSlide as de,createConnectPairsSlide as Dt,createFillBlanksSlide as Ft}from"./quiz-BcYL7OA6.js";import{generateBlockId as T}from"./worksheet-6jNaTtzT.js";import{w as _t,T as at,l as Bt}from"./worksheet-to-presentation-Vbp4cRne.js";import{b as Ge,d as Ut}from"./czech-typography-TpB6xGy7.js";import{b as Ie,av as Kt,ay as rt,gW as Ce,at as xe,gX as Vt,gY as qt}from"./main-app-BHMLsxig.js";import{g as Ht,r as Gt,a as Jt,n as Re}from"./data-collector-C3Wig5Xb.js";import{chatWithAIProxy as _}from"./ai-chat-proxy-D2xiLy3b.js";import{c as ye}from"./layout-sections-Bo1N-qF6.js";import{c as it,m as st}from"./worksheet-designer-composer-BbLFQaZb.js";import{e as Zt,b as Yt,p as Qt,s as Wt,h as Xt,a as eo,f as to,d as oo}from"./section-images-match-grXi7KB1.js";import{b as no}from"./build-document-editor-dataset-images-D2O9C6In.js";const lt="https://qypiuvqglsmxdsnyazih.supabase.co",$e="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5cGl1dnFnbHNteGRzbnlhemloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MjU3NDAsImV4cCI6MjA4NjQwMTc0MH0.lVO7a-wuM2vkqsJcgqvLkthTmrt5g0R3U_Tu0jU7bfY";async function Se(e){try{console.log("[RAG] Searching for similar worksheets:",e.topic);const t=await fetch(`${lt}/functions/v1/worksheet-rag-search`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${$e}`,apikey:$e},body:JSON.stringify(e)});if(!t.ok)return console.warn("[RAG] Search request failed:",t.status),[];const o=await t.json();return o.fallback?(console.log("[RAG] Fallback (no examples yet or error):",o.reason),[]):(console.log(`[RAG] Found ${o.examples?.length||0} examples`),o.examples||[])}catch(t){return console.warn("[RAG] Search failed (soft fail):",t),[]}}function Ne(e,t="worksheet"){if(e.length===0)return"";const o=t==="textbook"?"LISTŮ UČEBNICE":"PRACOVNÍCH LISTŮ",n={};e.forEach(i=>{const p=Array.isArray(i.blocks_json)?i.blocks_json:[],s={};p.forEach(u=>{u?.type&&(s[u.type]=(s[u.type]||0)+1)}),Object.entries(s).forEach(([u,f])=>{n[u]||(n[u]=[]),n[u].push(f)})});const d=Object.entries(n).map(([i,p])=>`${i}: průměrně ${Math.round(p.reduce((s,u)=>s+u,0)/p.length)}x`).join(", "),r=e.map((i,p)=>{const s=Array.isArray(i.blocks_json)?i.blocks_json:[],u=s.reduce((a,v)=>(v?.type&&(a[v.type]=(a[v.type]||0)+1),a),{}),f=Object.entries(u).map(([a,v])=>`${a}(${v}x)`).join(", ")||"neznámé",g=[];s.forEach((a,v)=>{if(!a?.type)return;const l=a.content||{};if(a.type==="heading"){const h=(l.text||"").replace(/<[^>]+>/g,"").trim().substring(0,80),c=l.headingStyle?` [styl: ${l.headingStyle}]`:"",b=l.highlightColor&&l.highlightColor!=="transparent"?` [barva: ${l.highlightColor}]`:"";h&&g.push(`  ${v+1}. Nadpis: "${h}"${c}${b}`)}else if(a.type==="paragraph"){const h=(l.html||"").replace(/<[^>]+>/g,"").trim().substring(0,120);h&&g.push(`  ${v+1}. Odstavec: "${h}..."`)}else if(a.type==="image"){const h=a.gridSpan?` [gridSpan: ${a.gridSpan}]`:"";g.push(`  ${v+1}. Obrázek${l.caption?`: "${l.caption}"`:""}${h}`)}else if(a.type==="infobox"){const h=(l.html||"").replace(/<[^>]+>/g,"").trim().substring(0,80);g.push(`  ${v+1}. Infobox${h?`: "${h}..."`:""}`)}else["connect-pairs","fill-blank","free-answer","multiple-choice"].includes(a.type)?g.push(`  ${v+1}. [CVIČENÍ] ${a.type}`):g.push(`  ${v+1}. ${a.type}`)});const m=(i.style_notes||"").startsWith("Vygenerováno Curriculum Factory")?"automaticky generovaný obsah":i.style_notes||"kvalitní obsah a struktura";return`
### VZOR ${p+1}: "${i.title}" (podobnost: ${Math.round((i.similarity||0)*100)}%)
- Předmět: ${i.subject||"–"}, Ročník: ${i.grade||"–"}. třída, Téma: ${i.topic||"–"}
- Počet bloků celkem: ${s.length} (${f})
- Sekvence bloků:
${g.slice(0,15).join(`
`)}
- Styl: ${m}`.trim()});return`
## ⚠️ ZÁVAZNÉ VZORY — POVINNĚ DODRŽUJ TUTO STRUKTURU

Níže jsou ${e.length} kvalitní příklady ${o} z naší databáze se shodným tématem.
MUSÍŠ generovat obsah ve STEJNÉM stylu, stejném rozsahu a se STEJNÝMI typy bloků.

PRŮMĚRNÉ POČTY BLOKŮ v úspěšných příkladech: ${d}
→ Tvůj výsledek MUSÍ mít PODOBNÉ počty bloků. Nesnižuj počet bloků oproti vzorům!
→ Zachovej stejný poměr OBRÁZKŮ a TEXTU jako ve vzorech.
→ Pokud vzory obsahují interaktivní bloky (cvičení), ZAHRŇ je také.

${r.join(`

`)}

SHRNUTÍ POŽADAVKŮ:
- Celkový počet bloků: ${Math.round(e.reduce((i,p)=>i+(Array.isArray(p.blocks_json)?p.blocks_json.length:0),0)/e.length)} bloků (průměr ze vzorů)
- Struktura: kopíruj pořadí typů bloků z VZOR 1 (nejvyšší podobnost)
- NEDĚLEJ jednoduchý seznam — vytvoř vizuálně bohatý obsah jako ve vzorech
---`.trim()}function ao(e){if(e.length===0)return"";const t=e[0],o=Array.isArray(t.blocks_json)?t.blocks_json:[];if(o.length===0)return"";const n=o.map(s=>s.gridSpan??6),d=s=>{const u=n[s];if(u>=6)return!1;const f=n[s-1]??6,g=n[s+1]??6;return u+f<=6&&f<6||u+g<=6&&g<6},r=[];if(o.forEach((s,u)=>{if(!s?.type)return;const f=s.content||{},m=(s.gridSpan??6)<=4||d(u);if(s.type==="heading"){const a=f.level==="h1"?"HEADING-H1":"HEADING",v=f.headingStyle&&f.headingStyle!=="plain"?` [styl: ${f.headingStyle}]`:"";r.push(`${a}:${v}`)}else if(s.type==="paragraph"){const a=m?"PARAGRAPH: HALF LAYOUT":"PARAGRAPH";r.push(`${a}:`)}else if(s.type==="image"){const a=m?"OBRÁZEK: HALF LAYOUT":"OBRÁZEK:",v=f.caption?` "${f.caption}"`:"";r.push(`${a}${v}`)}else if(s.type==="infobox"){const a=m?"INFOBOX: HALF LAYOUT":"INFOBOX:";r.push(a)}else s.type==="table"?r.push("TABLE:"):s.type==="multiple-choice"?r.push("MULTIPLE-CHOICE:"):s.type==="fill-blank"?r.push("FILL-BLANK:"):s.type==="free-answer"?r.push("FREE-ANSWER:"):s.type==="connect-pairs"&&r.push("CONNECT-PAIRS:")}),r.length===0)return"";const i={};r.forEach(s=>{const u=s.split(":")[0].trim();i[u]=(i[u]||0)+1});const p=Object.entries(i).map(([s,u])=>`${s}×${u}`).join(", ");return`
## 📐 STRUKTURÁLNÍ ŠABLONA — POVINNĚ DODRŽUJ (z nejlepšího vzoru: "${t.title}", ${Math.round((t.similarity||0)*100)}% podobnost)

Tato sekvence bloků MUSÍ být zachována. Naplň každý blok jiným obsahem z ContentPlan:

${r.map((s,u)=>`${String(u+1).padStart(2," ")}. ${s}`).join(`
`)}

Shrnutí šablony: ${p} = ${r.length} bloků celkem
⚠️ NEDODÁVEJ méně bloků! Pokud ContentPlan nestačí, rozpiš texty do více odstavců.
---`.trim()}async function Xn(e){try{const{data:{user:t}}=await Ie.auth.getUser(),o=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e.worksheetId),{data:n,error:d}=await Ie.from("worksheet_rag_examples").insert({title:e.title,subject:e.subject,grade:e.grade,topic:e.topic,quality_score:e.qualityScore??.8,blocks_json:e.blocksJson,style_notes:e.styleNotes,teacher_worksheet_id:o?e.worksheetId:null,created_by:t?.id??null,source:"manual"}).select("id").single();return d?(console.error("[RAG] Failed to add worksheet:",d),{success:!1,error:d.message}):(ro(n.id,e),console.log("[RAG] Worksheet added to RAG database:",n.id),{success:!0,id:n.id})}catch(t){return console.error("[RAG] addWorksheetToRag error:",t),{success:!1,error:String(t)}}}async function ro(e,t){try{console.log("[RAG] Triggering embedding generation for:",e);const o=await fetch(`${lt}/functions/v1/worksheet-rag-index`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${$e}`,apikey:$e},body:JSON.stringify({ragId:e,topic:t.topic,subject:t.subject,grade:t.grade,styleNotes:t.styleNotes,blocksJson:t.blocksJson})});if(!o.ok){console.warn("[RAG] Embedding generation request failed:",o.status);return}const n=await o.json();n.success?console.log("[RAG] ✅ Embedding generated and saved for:",e):console.warn("[RAG] Embedding generation returned error:",n.error)}catch(o){console.warn("[RAG] Embedding generation trigger failed (soft fail):",o)}}const io=["kompetence k učení","kompetence k řešení problémů","kompetence občanské a kompetence sociální a personální"];function so(e,t,o,n,d){return[`Žák zpracuje učivo k tématu „${e}" a uplatní je v úlohách odpovídajících týdennímu plánu.`,`Klíčová otázka týdne: ${t}`,`Přesah do současnosti: ${o}`,`Metodický záměr týdne (pracovní list / aktivity): ${n}`,`Typ zážitku v lekci: ${d}.`]}function me(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ")}const lo=[{thematicArea:"Jak fungují dějiny",topic:"Detektivka jménem minulost",keyQuestion:"Jak víme, co se opravdu stalo?",worksheetPlMethod:'detektivka s prameny – žáci analyzují "falešné" a "pravé" prameny, učí se kritickému myšlení',experienceType:"detektiv",transferToToday:"Jak dnes ověřujeme pravdivost zpráv? Fake news, sociální sítě, deepfake.",textbookPageSpec:{requiresSource:!0},assessment:{lessonQuiz:!1,cellQuiz:!1},plFormatId:"detektiv"},{thematicArea:"Jak fungují dějiny",topic:"Proč se vůbec učit dějepis?",keyQuestion:"Co mi minulost říká o mně?",worksheetPlMethod:'rozhovor s prarodičem jako "živý pramen" – přesah do rodiny, čtenářská gramotnost',experienceType:"badatel",transferToToday:"Zeptej se prarodičů na jejich nejstarší vzpomínku. Co se z toho dá zjistit?",textbookPageSpec:{},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"ctenarska"},{thematicArea:"Jak fungují dějiny",topic:"Čas jako mapa",keyQuestion:"Jak se zorientovat v 5 000 letech?",worksheetPlMethod:"časová osa – žáci sestavují vlastní osobní + světovou časovou osu, učí se měřítkům času",experienceType:"badatel",transferToToday:"Vytvoř časovou osu své rodiny – kdy se narodili prarodiče, rodiče, sourozenci.",textbookPageSpec:{requiresTimeline:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"casova-osa",scaffoldLevel:"high"},{thematicArea:"Jak fungují dějiny",topic:"Co dělá archeolog?",keyQuestion:"Jak ze střepu vznikne příběh?",worksheetPlMethod:"roleplay – žáci jsou archeologové, rekonstruují příběh z fragmentů nálezu",experienceType:"roleplay",transferToToday:"Co by archeolog za 1 000 let zjistil o tobě z věcí ve tvém pokoji?",textbookPageSpec:{requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!0},plFormatId:"detektiv"},{thematicArea:"Pravěk",topic:"Proč jsme přežili právě my?",keyQuestion:"Bylo to náhodou, nebo schopnostmi?",worksheetPlMethod:"evoluční hra – každý žák je jiný druh člověka, porovnává schopnosti a šance přežít",experienceType:"roleplay",transferToToday:'Jaké schopnosti dnes potřebuješ ty, abys "přežil"? Liší se od pravěkých?',textbookPageSpec:{requiresTimeline:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"Pravěk",topic:"Homo habilis: první nástroje",keyQuestion:"Co z tebe dělá člověka?",worksheetPlMethod:"badatelský s prameny (archeologickými nálezy) – žáci porovnávají nástroje, vyvozují dovednosti",experienceType:"badatel",transferToToday:"Jaký nástroj bys dnes nemohl postrádat? A co bys uměl bez něj?",textbookPageSpec:{requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"pramen"},{thematicArea:"Pravěk",topic:"Oheň jako největší startup v dějinách",keyQuestion:"Co změnil oheň víc než internet?",worksheetPlMethod:'dilema – "Dáš oheň cizímu kmeni, nebo ne?" – rozhodovací hra s důsledky',experienceType:"dilema",transferToToday:"Jaká dnešní technologie by mohla mít podobný dopad jako oheň? AI? Internet?",textbookPageSpec:{},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"dilema"},{thematicArea:"Pravěk",topic:"Den lovce – přežiješ do večera?",keyQuestion:"Jaké dovednosti musíš mít, abys přežil?",worksheetPlMethod:"roleplay – simulace dne pravěkého lovce, rozhodování v situacích, mapování dovedností",experienceType:"roleplay",transferToToday:"Které z těch dovedností bys dnes potřeboval? A které jsi naopak ztratil?",textbookPageSpec:{requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"Pravěk",topic:"Homo sapiens vs. neandrtálci",keyQuestion:"Proč oni vyhynuli a my ne?",worksheetPlMethod:"badatelský s daty (archeologické nálezy, genetika) – žáci debatují, hledají hypotézy",experienceType:"badatel",transferToToday:"Co by se stalo, kdyby přežili neandrtálci? Jak bychom dnes vypadali?",textbookPageSpec:{requiresArtifactPhoto:!0,requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"pramen"},{thematicArea:"Pravěk",topic:"Neolitická revoluce",keyQuestion:"Největší výhra, nebo největší chyba lidstva?",worksheetPlMethod:"dilema + badatelský – simulace volby mezi kočovným a usedlým životem, co obětuješ",experienceType:"dilema",transferToToday:"Co dnes obětuješ pro pohodlí? Mobil, jídlo z obchodu, doprava…",textbookPageSpec:{requiresMap:!0,requiresTimeline:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"dilema"},{thematicArea:"Pravěk",topic:"Bronz a železo: jak kov změnil svět",keyQuestion:"Proč ten, kdo má kov, má moc?",worksheetPlMethod:"obchodní hra + práce s mapou – simulace obchodu s kovem, kdo má zdroje, ovládá obchod",experienceType:"roleplay",transferToToday:'Co je dnešní "bronz"? Lithium pro baterie? Vzácné kovy pro elektroniku?',textbookPageSpec:{requiresMap:!0,requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"mapa-udalosti"},{thematicArea:"Pravěk",topic:"Pravěk na našem území",keyQuestion:"Co se dělo tady, kde stojíš?",worksheetPlMethod:"badatelský s prameny – analýza Věstonické venuše a dalších nálezů z ČR, co nám říkají",experienceType:"badatel",transferToToday:"Najdi nejbližší archeologické naleziště od tvého domova. Co se tam našlo?",textbookPageSpec:{requiresMap:!0,requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!0},plFormatId:"pramen"},{thematicArea:"První civilizace",topic:"Mezopotámie: první města světa",keyQuestion:"Proč vznikají státy? Moc vs. chaos.",worksheetPlMethod:"roleplay – žák je obyvatel Uru, musí zaplatit daně, řešit konflikty; práce s mapou + Sedm divů světa",experienceType:"roleplay",transferToToday:"Proč dnes platíme daně? Co za to dostáváme? A co když ne?",textbookPageSpec:{requiresMap:!0,requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"První civilizace",topic:"Chammurabiho zákoník",keyQuestion:"Spravedlnost, nebo kontrola obyvatel?",worksheetPlMethod:"pramen – analýza originálních úryvků zákoníku, porovnání s dnešními zákony",experienceType:"badatel",transferToToday:"Najdi v dnešních zákonech něco, co tě překvapuje. Co bys změnil ty?",textbookPageSpec:{requiresSource:!0,requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"pramen"},{thematicArea:"První civilizace",topic:"Egypt: Nil jako dar nebo past?",keyQuestion:"Co dělá z řeky základ civilizace?",worksheetPlMethod:"badatelský s mapou + grafy povodní Nilu – jak rytmus řeky určoval celý život",experienceType:"badatel",transferToToday:"Na čem dnes závisí tvé město? Voda, elektřina, internet – co když selže?",textbookPageSpec:{requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"mapa-udalosti"},{thematicArea:"První civilizace",topic:"Faraon: bůh nebo člověk?",keyQuestion:"Jak se udržuje moc?",worksheetPlMethod:"roleplay – žáci navrhují, jak by vládli (jako bůh vs. jako politik), porovnání strategií",experienceType:"roleplay",transferToToday:"Jak se dnes udržuje moc? Kdo má největší vliv – politici, influenceři, šéfové firem?",textbookPageSpec:{requiresPortrait:!0,requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"První civilizace",topic:"Indie: kasty a duchovní hledání",keyQuestion:'Je spravedlivé, když ses narodil do "své" vrstvy?',worksheetPlMethod:"roleplay + dilema – žák dostane přidělenou kastu, řeší situace; úvod do buddhismu a hinduismu",experienceType:"dilema",transferToToday:'Existují dnes "neviditelné kasty"? Bohatství, vzdělání, region původu?',textbookPageSpec:{requiresMap:!0,requiresPortrait:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"dilema"},{thematicArea:"První civilizace",topic:"Čína: řád, vynálezy, Hedvábná stezka",keyQuestion:"Proč Čína vynalezla tolik věcí, ale neovládla svět?",worksheetPlMethod:"obchodní hra na Hedvábné stezce + práce s mapou – cesta z Číny do Evropy, co se převáželo",experienceType:"roleplay",transferToToday:"Co by tě dnes zaujalo z Číny? A co posíláme my tam?",textbookPageSpec:{requiresMap:!0,requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!0},plFormatId:"mapa-udalosti"},{thematicArea:"Řecko",topic:"Kréta a Mykény: kde to začalo",keyQuestion:"Co předcházelo řecké slávě?",worksheetPlMethod:"detektivka s prameny – záhadný zánik mínojské civilizace, žáci analyzují hypotézy (sopka, invaze)",experienceType:"detektiv",transferToToday:"Které dnešní civilizace by mohly zaniknout a proč? Klima, války, technologie?",textbookPageSpec:{requiresMap:!0,requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"detektiv"},{thematicArea:"Řecko",topic:"Athény vs. Sparta",keyQuestion:"Jaký stát by sis vybral?",worksheetPlMethod:"velká debata – žáci ve dvou táborech, příprava argumentů, porovnání hodnot",experienceType:"dilema",transferToToday:'Najdi dnešní státy, které jsou spíš "Athény" a které spíš "Sparta". Liší se v čem?',textbookPageSpec:{requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"dilema"},{thematicArea:"Řecko",topic:"Kdo je občan? A kdo není?",keyQuestion:"Platí rovnost pro všechny?",worksheetPlMethod:"roleplay – žáci dostanou role (otrok, cizinec, žena, občan); jak by vypadal jejich den",experienceType:"roleplay",transferToToday:"Kdo dnes nemá plná práva? Děti? Migranti? Co bys změnil?",textbookPageSpec:{},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"Řecko",topic:"Filozofové jako první influenceři",keyQuestion:"Proč si pamatujeme Sokrata po 2 500 letech?",worksheetPlMethod:"čtenářská gramotnost – úryvky z Platóna, Sokrata; žáci vymýšlejí vlastní filozofickou myšlenku",experienceType:"badatel",transferToToday:"Kdo jsou dnešní filozofové? Vědci, spisovatelé, nebo influenceři na sociálních sítích?",textbookPageSpec:{requiresSource:!0,requiresPortrait:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"ctenarska"},{thematicArea:"Řecko",topic:"Řecko-perské války",keyQuestion:"Evropa vs. Asie: kdo má právo vládnout?",worksheetPlMethod:"mapa + rozhodovací hra u Thermopyl – bojuješ, nebo ustoupíš?",experienceType:"dilema",transferToToday:'Existují dnes podobná "civilizační střetnutí"? Demokracie vs. autoritářství?',textbookPageSpec:{requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"mapa-udalosti"},{thematicArea:"Řecko",topic:"Peloponéská válka",keyQuestion:"Co se stane, když začnete válčit mezi sebou?",worksheetPlMethod:"badatelský s prameny (Thukydides) – analýza příčin občanských válek, paralely s dneškem",experienceType:"badatel",transferToToday:'Najdi dnešní příklad "občanské války" nebo rozdělené společnosti. Co je příčinou?',textbookPageSpec:{requiresSource:!0,requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"pramen"},{thematicArea:"Řecko",topic:"Alexandr Veliký",keyQuestion:"Hrdina, nebo tyran?",worksheetPlMethod:"roleplay – jsi Alexandrův poradce, radíš v klíčových rozhodnutích; časová osa výprav",experienceType:"roleplay",transferToToday:'Kdo jsou dnešní "Alexandři"? Vědci, podnikatelé, vojáci? Co je motivuje?',textbookPageSpec:{requiresMap:!0,requiresPortrait:!0,requiresTimeline:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"Řecko",topic:"Olympijské hry",keyQuestion:"Sport, politika, nebo prestiž?",worksheetPlMethod:"porovnávací – starověké OH vs. dnešní OH, žáci hledají kontinuitu a rozdíly",experienceType:"badatel",transferToToday:'Co jsou dnes "moderní olympiády"? Mistrovství světa, e-sport, sociální sítě?',textbookPageSpec:{requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!0},plFormatId:"procvicovaci"},{thematicArea:"Řím",topic:"Jak vznikl Řím? Záhadní Etruskové",keyQuestion:"Co dělá z vesnice velmoc?",worksheetPlMethod:"detektivka – mýtus o Romulovi: fakt, nebo propaganda? Žáci porovnávají mýtus a archeologii",experienceType:"detektiv",transferToToday:"Jaký mýtus o vzniku má tvá rodina? Tvé město? Tvá země?",textbookPageSpec:{requiresSource:!0,requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"detektiv"},{thematicArea:"Řím",topic:"Republika a Punské války",keyQuestion:"Jak funguje vláda lidu – a kdy nestačí?",worksheetPlMethod:"simulace senátu – žáci hlasují o válce s Kartágem, debata o důvodech",experienceType:"roleplay",transferToToday:"Jak se dnes rozhoduje o válce v demokraciích? Kdo má poslední slovo?",textbookPageSpec:{requiresMap:!0,requiresTimeline:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"Řím",topic:"Caesar: krize, moc, triumvirát",keyQuestion:"Zabil bys Caesara?",worksheetPlMethod:"klasické dilema – žáci jako senátoři v březnu 44 př. n. l., volba a důsledky",experienceType:"dilema",transferToToday:'Najdi dnešního "Caesara" – někoho, kdo má příliš velkou moc. Co bys s ním udělal?',textbookPageSpec:{requiresPortrait:!0,requiresSource:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"dilema"},{thematicArea:"Řím",topic:"Císařství a římská armáda",keyQuestion:"Stabilita, nebo diktatura?",worksheetPlMethod:"roleplay + strategická hra – žáci navrhují strategii legií, organizují provincii",experienceType:"roleplay",transferToToday:"Kdy je silný vůdce výhodou a kdy nebezpečím? Najdi dnešní příklad.",textbookPageSpec:{requiresMap:!0,requiresPortrait:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"Řím",topic:"Každodenní život v Římě",keyQuestion:"Jak žili lidé, o kterých se neučíme?",worksheetPlMethod:"roleplay – den z pohledu otroka vs. patricije; čtenářská gramotnost (Pompeje)",experienceType:"roleplay",transferToToday:'Kdo jsou dnes "neviditelní lidé" tvého města? Uklízeči, kurýři, lidé bez domova?',textbookPageSpec:{requiresArtifactPhoto:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"roleplay"},{thematicArea:"Řím",topic:"Křesťanství jako revoluce bez zbraní",keyQuestion:"Jak může idea změnit impérium?",worksheetPlMethod:"badatelský s prameny – analýza prvních křesťanských textů, šíření idejí",experienceType:"badatel",transferToToday:'Co dnes funguje jako "nové náboženství"? Klima, technologie, hnutí na sociálních sítích?',textbookPageSpec:{requiresSource:!0,requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!1},plFormatId:"pramen"},{thematicArea:"Řím",topic:"Pád Říma – proč končí civilizace?",keyQuestion:"Mohlo se tomu zabránit?",worksheetPlMethod:"badatelský + dilema – žáci hledají paralely se současností, analyzují příčiny pádu",experienceType:"dilema",transferToToday:'Co by mohlo způsobit "pád" naší civilizace? Klima, technologie, války? A co dělat?',textbookPageSpec:{requiresTimeline:!0,requiresMap:!0},assessment:{lessonQuiz:!0,cellQuiz:!0},plFormatId:"dilema"}];function co(e){return e.map((t,o)=>({...t,week:o+1}))}const ct={6:co(lo)},ea="Jak fungují dějiny a kořeny civilizací";function po(e){return e!==6?null:ct[e]}function uo(e,t){const o=po(e);if(!o)return null;const n=me(t),d=o.find(i=>me(i.topic)===n);return d||(o.find(i=>n.includes(me(i.topic))||me(i.topic).includes(n)||n.slice(0,20)===me(i.topic).slice(0,20))??null)}function ta(e,t){return ct[e].map(n=>({thematicArea:n.thematicArea,topic:n.topic,expectedOutcomes:so(n.topic,n.keyQuestion,n.transferToToday,n.worksheetPlMethod,n.experienceType),keyCompetencies:[...io],recommendedHours:t,orderIndex:n.week,sourceDocument:`Metodika PL: ${n.worksheetPlMethod} | Klíčová otázka: ${n.keyQuestion} | Transfer: ${n.transferToToday} | Zážitek: ${n.experienceType}`}))}const mo=["kompetence k učení","kompetence k řešení problémů","kompetence digitální"];function ko(e){const t=e.appletType==="none"?"bez miniaplikace, s aktivní papírovou nebo diskusní úlohou":`s miniaplikací typu ${e.appletType}`;return[`Žák vymezí problém v tématu „${e.topic}" a určí, jaké informace, data nebo pravidla potřebuje k jeho řešení.`,`Žák použije informatický postup odpovídající okruhu ${e.rvpArea}: ${e.worksheetPlMethod}.`,`Žák ověří nebo vysvětlí své řešení ${t} a zapíše závěr do pracovního listu.`,`Klíčová otázka týdne: ${e.keyQuestion}`]}function ke(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ")}function j(e,t,o,n,d,r,i,p,s,u,f,g={}){return{week:e,thematicArea:t,topic:o,rvpArea:n,secondaryRvpArea:g.secondaryRvpArea,keyQuestion:d,worksheetPlMethod:r,informatikaConceptId:i,plFormatId:p,appletType:s,textbookPageSpec:u,assessment:{lessonCheck:g.lessonCheck??!0,milestone:g.milestone??!1,portfolioArtifact:f}}}const ho=[j(1,"Data a informace","Data kolem nás","data-informace-modelovani","Jak poznáme, že z dat opravdu plyne informace?","data lab: třídění příkladů dat a informací, predikce, krátké tvrzení podložené daty","data-vs-informace","data-lab","data-table-explorer",{requiresDataset:!0,requiresWorkedExample:!0},"tvrzení podložené jedním údajem"),j(2,"Data a informace","Tabulka jako model reality","data-informace-modelovani","Co se vejde do tabulky a co už tabulka zkresluje?","modelování tabulkou: záznam, sloupec, hodnota, omezení modelu","tabulka-jako-model","modelovani","systems-table-builder",{requiresDataset:!0,requiresSystemModel:!0},"návrh malé tabulky se třemi atributy"),j(3,"Data a informace","Grafy a zavádějící interpretace","data-informace-modelovani","Kdy graf pomáhá a kdy nás může splést?","data lab: porovnání dvou grafů, hledání zavádějící interpretace, zápis férového závěru","graf-interpretace","data-lab","chart-interpreter",{requiresDataset:!0,requiresDiagram:!0},"opravený titulek grafu a vysvětlení"),j(4,"Kódování","Kódování textu a obrázku","data-informace-modelovani","Jak může být písmeno nebo obrázek uložený jako data?","algoritmický návod + simulace kódování znaků a pixelů","kodovani-text-obraz","algoritmicky-navod","encoding-simulator",{requiresDiagram:!0,requiresWorkedExample:!0},"zakódovaná krátká zpráva nebo mřížka"),j(5,"Algoritmy bez počítače","Přesný návod pro člověka i stroj","algoritmizace-programovani","Jak přesný musí být návod, aby ho mohl provést někdo jiný?","algoritmický návod: rozklad problému na kroky, test se spolužákem","presny-navod","algoritmicky-navod","robot-sequence",{requiresWorkedExample:!0,requiresAppletBrief:!0},"návod s testem na dvou vstupech"),j(6,"Algoritmy bez počítače","Robot podle příkazů","algoritmizace-programovani","Co se stane, když příkazům chybí přesnost?","robot-sequence: sekvence příkazů, predikce trasy, oprava nepřesného kroku","robot-sekvence","algoritmicky-navod","robot-sequence",{requiresDiagram:!0,requiresCodeTrace:!0},"opravená sada příkazů pro robota"),j(7,"Algoritmy bez počítače","Opakování v postupu","algoritmizace-programovani","Kdy je lepší použít opakování než psát kroky pořád dokola?","algoritmický návod: nahrazení opakovaných kroků cyklem a kontrola výsledku","opakujici-se-postup","algoritmicky-navod","algorithm-stepper",{requiresWorkedExample:!0,requiresCodeTrace:!0},"zkrácený postup s opakováním"),j(8,"Algoritmy bez počítače","Když záleží na podmínce","algoritmizace-programovani","Jak se postup rozhoduje podle situace?","modelování rozhodovacího stromu a test dvou různých případů","podminka-v-postupu","modelovani","algorithm-stepper",{requiresDiagram:!0,requiresWorkedExample:!0},"rozhodovací strom s podmínkou"),j(9,"Ladění","Chyba v postupu","algoritmizace-programovani","Jak poznáme, kde se postup pokazil?","debugging: očekávaný výsledek, skutečný výsledek, hypotéza chyby, oprava","debug-postupu","debugging","debug-trace",{requiresCodeTrace:!0,requiresWorkedExample:!0},"debug log s příčinou chyby"),j(10,"Modelování","Schéma jako model","data-informace-modelovani","Co ve schématu ukážeme a co vědomě vynecháme?","modelování: prvky, vztahy, omezení schématu, porovnání dvou modelů","schema-jako-model","modelovani","graph-modeler",{requiresDiagram:!0,requiresSystemModel:!0},"schéma se zapsanými omezeními"),j(11,"Modelování","Sítě a grafy kolem nás","data-informace-modelovani","Jak lze cestu, vztah nebo propojení popsat uzly a hranami?","modelování grafem: uzly, hrany, cesta, porovnání dvou tras","grafy-site","modelovani","graph-modeler",{requiresDiagram:!0,requiresWorkedExample:!0},"graf jednoduché situace"),j(12,"Mini-projekt","Data + model + postup","data-informace-modelovani","Jak z jednoho problému uděláme data, model a návod?","přehledový mini-projekt: dataset, model a přesný postup řešení","mini-projekt-data-model-postup","prehledovy","data-table-explorer",{requiresDataset:!0,requiresDiagram:!0,requiresAppletBrief:!0},"mini-projektový list",{milestone:!0}),j(13,"Data a rozhodování","Vyber správná data","data-informace-modelovani","Která data opravdu potřebujeme k rozhodnutí?","data lab: výběr relevantních dat, odmítnutí nepotřebných údajů","relevantni-data","data-lab","data-table-explorer",{requiresDataset:!0},"seznam potřebných a nepotřebných dat"),j(14,"Kódování","Kód, pravidlo a chyba přenosu","data-informace-modelovani","Jak zjistíme, že se zpráva cestou pokazila?","kódování a kontrola chyby: jednoduché parity/checklist pravidlo","kontrola-prenosu","debugging","encoding-simulator",{requiresDiagram:!0,requiresCodeTrace:!0},"opravená přenesená zpráva"),j(15,"Algoritmy v životě","Recept jako algoritmus","algoritmizace-programovani","Proč někdy běžný návod nestačí jako algoritmus?","algoritmický návod: zpřesnění nejednoznačného receptu nebo školního postupu","recept-algoritmus","algoritmicky-navod","algorithm-stepper",{requiresWorkedExample:!0},"zpřesněný algoritmus všední činnosti"),j(16,"Algoritmy v životě","Testovací případy","algoritmizace-programovani","Jak poznáme, že postup funguje nejen jednou?","debugging: navržení testovacích případů a oprava postupu podle selhání","testovaci-pripady","debugging","debug-trace",{requiresCodeTrace:!0},"tři testovací případy a výsledek"),j(17,"Modelování","Mapa třídy jako model","data-informace-modelovani","Jak se změní řešení, když změníme model prostoru?","modelování prostoru: mřížka, překážky, cesta, omezení modelu","mrizka-prostor-model","modelovani","robot-sequence",{requiresDiagram:!0,requiresAppletBrief:!0},"mřížkový model s cestou"),j(18,"Uzavření celku","Jak myslí informatika?","algoritmizace-programovani","Co mají společného data, modely a algoritmy?","přehledový list: propojení pojmů data, model, algoritmus, test, chyba","informaticke-mysleni-synteza","prehledovy","none",{requiresDiagram:!0},"pojmová mapa informatického myšlení",{milestone:!0}),j(19,"Práce s daty","Sběr dat ve třídě","data-informace-modelovani","Jak sesbírat data tak, aby šla porovnat?","data lab: návrh otázky, pravidla sběru, tabulka a první interpretace","sber-dat","data-lab","data-table-explorer",{requiresDataset:!0,requiresWorkedExample:!0},"malý třídní dataset"),j(20,"Práce s daty","Chyby v datech","data-informace-modelovani","Jak chyba v datech změní závěr?","debugging dat: hledání překlepu, chybějící hodnoty a podezřelého záznamu","chyby-v-datech","debugging","data-table-explorer",{requiresDataset:!0,requiresCodeTrace:!0},"opravený dataset s poznámkou"),j(21,"Modelování","Vývojový diagram","algoritmizace-programovani","Kdy je vývojový diagram přehlednější než seznam kroků?","modelování postupu vývojovým diagramem s větvením","vyvojovy-diagram","modelovani","algorithm-stepper",{requiresDiagram:!0,requiresWorkedExample:!0},"vývojový diagram školní situace"),j(22,"Modelování","Porovnání dvou řešení","algoritmizace-programovani","Které řešení je jednodušší, spolehlivější nebo rychlejší?","data/model lab: porovnání dvou algoritmů podle kritérií","porovnani-reseni","data-lab","algorithm-stepper",{requiresDataset:!0,requiresCodeTrace:!0},"tabulka kritérií pro dvě řešení"),j(23,"Digitální technologie","Zařízení jako systém","digitalni-technologie","Z jakých částí se skládá digitální zařízení?","modelování systému: vstup, zpracování, výstup, uložiště, propojení","zarizeni-system","modelovani","graph-modeler",{requiresDiagram:!0,requiresSystemModel:!0},"blokové schéma zařízení"),j(24,"Digitální technologie","Soubor, formát a velikost","digitalni-technologie","Proč stejný obsah může zabírat různě místa?","data lab: porovnání formátů a velikostí, jednoduchý model komprese","soubor-format-velikost","data-lab","encoding-simulator",{requiresDataset:!0,requiresWorkedExample:!0},"porovnání dvou formátů"),j(25,"Bezpečnost","Heslo jako algoritmický problém","digitalni-technologie","Co dělá heslo silným a co jen vypadá bezpečně?","technologie/bezpečnost: pravidla hesel, odhad útoku, rozhodovací strom","heslo-pravidla","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0,requiresWorkedExample:!0},"bezpečnostní doporučení pro heslo"),j(26,"Bezpečnost","Co o sobě sdílíme","digitalni-technologie","Která data o nás vznikají i bez našeho úmyslu?","technologie/bezpečnost: digitální stopa, scénáře sdílení, rizika a volby","digitalni-stopa","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0},"rozhodovací tabulka sdílení"),j(27,"Mini-projekt","Navrhni pravidla bezpečné práce","digitalni-technologie","Jak pravidla nastavíme tak, aby chránila a zároveň šla používat?","projektový list: návrh pravidel pro třídu/službu, argumentace principem","bezpecnostni-pravidla","technologie-bezpecnost","none",{requiresSafetyScenario:!0},"sada pravidel s odůvodněním",{milestone:!0}),j(28,"Opakování","Data, modely, algoritmy v jednom problému","data-informace-modelovani","Jak vybereme správný informatický nástroj pro problém?","přehledový list: rozpoznání, zda problém řešit daty, modelem nebo algoritmem","vyber-nastroje","prehledovy","none",{requiresDiagram:!0},"matice problém -> nástroj"),j(29,"Projekt","Problém ze školy jako informatická úloha","algoritmizace-programovani","Jak ze školního problému uděláme řešitelnou informatickou úlohu?","výzkumně-projektový list: formulace problému, data, model, postup","skolni-problem","modelovani","data-table-explorer",{requiresDataset:!0,requiresDiagram:!0},"zadání vlastního informatického problému"),j(30,"Projekt","Prototyp řešení","algoritmizace-programovani","Jak ověříme první verzi řešení?","debugging/prototyp: návrh, test, selhání, oprava","prototyp-reseni","debugging","debug-trace",{requiresCodeTrace:!0,requiresAppletBrief:!0},"test prototypu a seznam úprav"),j(31,"Projekt","Prezentace řešení","data-informace-modelovani","Jak vysvětlíme, proč naše řešení funguje?","přehledový list: důkaz, vizualizace, limity, doporučení","prezentace-reseni","prehledovy","none",{requiresDiagram:!0},"prezentační karta řešení"),j(32,"Reflexe","Co bych přenechal stroji?","algoritmizace-programovani","Kdy je lepší automatizovat a kdy ne?","technologie/bezpečnost + algoritmizace: rozhodnutí podle opakovatelnosti, rizika a odpovědnosti","automatizace-rozhodnuti","technologie-bezpecnost","algorithm-stepper",{requiresSafetyScenario:!0,requiresWorkedExample:!0},"argumentované rozhodnutí o automatizaci"),j(33,"Uzavření ročníku","Informatické portfolio 6. ročníku","data-informace-modelovani","Co už umím dělat jako informatický řešitel problémů?","přehledový a portfolio list: nejlepší důkaz práce s daty, modelem, algoritmem a chybou","portfolio-6","prehledovy","none",{requiresDiagram:!0},"portfolio sebehodnocení",{milestone:!0})],vo=[j(1,"Scratch a události","Scénář a první program","algoritmizace-programovani","Jak dáme postavě přesné příkazy?","programovací mise: scénář, sekvence bloků, spuštění a kontrola efektu","scratch-scenar","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0,requiresWorkedExample:!0},"první funkční scénář"),j(2,"Scratch a události","Událost spouští děj","algoritmizace-programovani","Jak program pozná, kdy má začít?","programovací mise: události, startovací bloky, více reakcí na vstup","udalosti","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0},"program se dvěma událostmi"),j(3,"Sekvence a kreslení","Kreslíme příkazy","algoritmizace-programovani","Jak ovlivní pořadí bloků výsledek?","algoritmický návod: sekvence, predikce obrázku, test pořadí","sekvence-kresleni","algoritmicky-navod","block-programming-sandbox",{requiresCodeTrace:!0,requiresDiagram:!0},"predikce a výsledný obrázek"),j(4,"Opakování","Opakování bloků","algoritmizace-programovani","Jak zkrátit program bez změny výsledku?","programovací mise: nahrazení opakovaných bloků cyklem","scratch-cyklus","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0,requiresWorkedExample:!0},"program s cyklem"),j(5,"Opakování","Opakování s podmínkou","algoritmizace-programovani","Jak program opakuje, dokud něco neplatí?","programovací mise: cyklus s podmínkou, test ukončení","cyklus-s-podminkou","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0},"program s ukončovací podmínkou"),j(6,"Ladění","Proč program dělá něco jiného?","algoritmizace-programovani","Jak najdeme chybu v blocích?","debugging: očekávání, krokování, oprava pořadí nebo špatného bloku","debug-scratch","debugging","debug-trace",{requiresCodeTrace:!0,requiresWorkedExample:!0},"debug log programu"),j(7,"Vstup uživatele","Myš a klávesnice","algoritmizace-programovani","Jak program reaguje na uživatele?","programovací mise: vstup z klávesnice/myši a změna chování postavy","vstup-uzivatele","programovaci-mise","coordinate-playground",{requiresCodeTrace:!0},"ovládání postavy vstupem"),j(8,"Souřadnice","Pohyb v souřadnicích","algoritmizace-programovani","Jak popíšeme místo na obrazovce čísly?","data/modelování: souřadnice, osa x/y, predikce polohy","souradnice","modelovani","coordinate-playground",{requiresDiagram:!0,requiresWorkedExample:!0},"mapa souřadnic a trasa"),j(9,"Souřadnice","Animace a změna polohy","algoritmizace-programovani","Jak vznikne plynulý pohyb?","programovací mise: změna souřadnic v čase, test rychlosti a směru","animace-polohy","programovaci-mise","coordinate-playground",{requiresCodeTrace:!0},"krátká animace s vysvětlením"),j(10,"Rozhodování","Když nastane podmínka","algoritmizace-programovani","Jak program vybírá mezi možnostmi?","programovací mise: if/else ve hře nebo scénce","if-else","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0,requiresDiagram:!0},"program s větvením"),j(11,"Rozhodování","Kolize a pravidla hry","algoritmizace-programovani","Jak program pozná zásah, výhru nebo prohru?","debugging/programovací mise: podmínka kolize, test okrajových případů","kolize-pravidla","debugging","debug-trace",{requiresCodeTrace:!0},"opravené pravidlo hry"),j(12,"Mini-projekt","Interaktivní scénka","algoritmizace-programovani","Jak poskládáme události, vstupy a podmínky do jednoho programu?","programovací mise: scénka se vstupem, větvením a testy","interaktivni-scenka","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0,requiresAppletBrief:!0},"interaktivní scénka",{milestone:!0}),j(13,"Zprávy a spolupráce objektů","Objekty si posílají zprávy","algoritmizace-programovani","Jak se části programu domluví?","modelování + programovací mise: zprávy mezi objekty, pořadí reakcí","zpravy-objektu","programovaci-mise","block-programming-sandbox",{requiresDiagram:!0,requiresCodeTrace:!0},"diagram zpráv a program"),j(14,"Zprávy a spolupráce objektů","Rozhovor postav","algoritmizace-programovani","Jak řídit dialog, aby se nerozpadl?","programovací mise: synchronizace zpráv v rozhovoru nebo scéně","dialog-zpravy","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0},"dialog řízený zprávami"),j(15,"Vlastní bloky","Pojmenuj opakovaný postup","algoritmizace-programovani","Kdy se vyplatí vytvořit vlastní blok?","programovací mise: extrakce opakované části do vlastního bloku","vlastni-blok","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0,requiresWorkedExample:!0},"program s vlastním blokem"),j(16,"Vlastní bloky","Parametr mění chování","algoritmizace-programovani","Jak jeden blok použít pro více situací?","programovací mise: vlastní blok s parametrem a test různých hodnot","parametr-bloku","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0},"blok s parametrem a testy"),j(17,"Proměnné","Proměnná jako paměť programu","algoritmizace-programovani","Co si program potřebuje pamatovat?","modelování + programovací mise: skóre, počítadlo, stav hry","promenna-pamet","programovaci-mise","block-programming-sandbox",{requiresDiagram:!0,requiresCodeTrace:!0},"program s proměnnou"),j(18,"Proměnné","Změna hodnoty v čase","algoritmizace-programovani","Jak proměnná ovlivňuje další kroky programu?","debugging: sledování hodnoty proměnné krok po kroku","trace-promenne","debugging","debug-trace",{requiresCodeTrace:!0,requiresWorkedExample:!0},"tabulka průběhu proměnné",{milestone:!0}),j(19,"Data v programu","Seznam hodnot","data-informace-modelovani","Kdy jedna proměnná nestačí?","data lab/programování: seznam hodnot, výběr položky, jednoduché zpracování","seznam-hodnot","data-lab","data-table-explorer",{requiresDataset:!0,requiresCodeTrace:!0},"malý seznam a pravidlo zpracování"),j(20,"Data v programu","Náhoda a simulace","algoritmizace-programovani","Jak program používá náhodu a jak ji testovat?","modelování: náhodný výběr, opakování pokusu, záznam výsledků","nahoda-simulace","modelovani","block-programming-sandbox",{requiresDataset:!0,requiresCodeTrace:!0},"simulace s tabulkou výsledků"),j(21,"Ladění","Testovací plán programu","algoritmizace-programovani","Jak otestovat program dřív, než ho ukážeme ostatním?","debugging: testovací scénáře, očekávaný výstup, chyba, oprava","test-plan-programu","debugging","debug-trace",{requiresCodeTrace:!0},"testovací plán"),j(22,"Ladění","Hraniční případy","algoritmizace-programovani","Kdy program selže na zvláštním vstupu?","debugging: hledání hraničních případů ve hře nebo simulaci","hranicni-pripady","debugging","debug-trace",{requiresCodeTrace:!0},"seznam hraničních případů"),j(23,"Návrh hry","Pravidla, cíle a feedback","algoritmizace-programovani","Jak hráč pozná, co má dělat a jestli uspěl?","programovací mise: návrh pravidel, zpětné vazby a podmínek výhry","navrh-hry","programovaci-mise","block-programming-sandbox",{requiresAppletBrief:!0,requiresDiagram:!0},"brief mini-hry"),j(24,"Návrh hry","Prototyp hry","algoritmizace-programovani","Jak vytvořit nejmenší funkční verzi?","programovací mise: minimum viable game, test a seznam úprav","prototyp-hry","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0,requiresAppletBrief:!0},"prototyp hry"),j(25,"Návrh hry","Ladění hry podle testu","algoritmizace-programovani","Co změnit podle pozorování hráče?","debugging: uživatelský test, pozorování, chyba v pravidle nebo ovládání","ladeni-hry","debugging","debug-trace",{requiresCodeTrace:!0},"záznam testu a změn"),j(26,"Mini-projekt","Dokončení hry","algoritmizace-programovani","Jak poznáme, že program splňuje zadání?","programovací mise + přehled: checklist požadavků, testy, reflexe","dokonceni-hry","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0,requiresAppletBrief:!0},"dokončená hra s checklistem",{milestone:!0}),j(27,"Program a data","Co program ukládá","data-informace-modelovani","Která data vznikají při používání programu?","data lab: log událostí, skóre, nastavení, interpretace záznamu","programova-data","data-lab","data-table-explorer",{requiresDataset:!0},"tabulka dat z programu"),j(28,"Program a bezpečnost","Sdílení projektu","digitalni-technologie","Co se stane, když projekt zveřejním?","technologie/bezpečnost: licence, osobní údaje, komentáře, nastavení sdílení","sdileni-projektu","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0},"bezpečný plán sdílení"),j(29,"Refaktoring","Stejný výsledek, lepší program","algoritmizace-programovani","Jak upravit program, aby byl přehlednější?","debugging/refaktoring: odstranění duplicit, pojmenování bloků, zjednodušení","refaktoring","debugging","debug-trace",{requiresCodeTrace:!0},"před/po úprava programu"),j(30,"Projekt","Vlastní interaktivní program","algoritmizace-programovani","Jak si navrhnout projekt, který půjde dokončit?","programovací mise: zadání, požadavky, rizika, testovací plán","vlastni-projekt-plan","programovaci-mise","block-programming-sandbox",{requiresAppletBrief:!0},"plán vlastního projektu"),j(31,"Projekt","Stavba vlastního programu","algoritmizace-programovani","Jak postupovat po malých funkčních krocích?","programovací mise: inkrementální tvorba, průběžné testy, debug log","vlastni-projekt-stavba","programovaci-mise","block-programming-sandbox",{requiresCodeTrace:!0},"funkční meziverze programu"),j(32,"Projekt","Testování vlastního programu","algoritmizace-programovani","Jak zjistíme, co má projekt ještě zlepšit?","debugging: test spolužákem, záznam chyb, prioritizace oprav","vlastni-projekt-test","debugging","debug-trace",{requiresCodeTrace:!0},"testovací protokol projektu"),j(33,"Uzavření ročníku","Programátorské portfolio","algoritmizace-programovani","Co ukazuje, že umím tvořit a ladit program?","přehledový portfolio list: program, algoritmus, testy, opravy, reflexe","portfolio-7","prehledovy","none",{requiresCodeTrace:!0},"portfolio 7. ročníku",{milestone:!0})],go=[j(1,"Informacni systemy","K čemu je informační systém","informacni-systemy","Jak systém pomáhá lidem pracovat s daty?","systemová evidence: účel systému, uživatelé, data, výstupy","ucel-is","systemova-evidence","systems-table-builder",{requiresSystemModel:!0,requiresDiagram:!0},"karta účelu systému"),j(2,"Informacni systemy","Záznam a atribut","informacni-systemy","Co musí mít jeden záznam, aby šel použít?","systemová evidence: záznam, atribut, typ hodnoty, příklad a protipříklad","zaznam-atribut","systemova-evidence","systems-table-builder",{requiresDataset:!0,requiresSystemModel:!0},"návrh záznamu s atributy"),j(3,"Informacni systemy","Pravidla pro data","informacni-systemy","Jak zabránit špatným datům v systému?","debugging dat: validační pravidla, povinná pole, chyba a oprava","validace-dat","debugging","systems-table-builder",{requiresDataset:!0,requiresCodeTrace:!0},"validační pravidla evidence"),j(4,"Informacni systemy","Filtrování a třídění","informacni-systemy","Jak se z velké tabulky dostaneme k odpovědi?","data lab: filtr, řazení, otázka nad daty, závěr","filtr-trideni","data-lab","data-table-explorer",{requiresDataset:!0,requiresWorkedExample:!0},"dotaz nad tabulkou a odpověď"),j(5,"Informacni systemy","Role uživatelů","informacni-systemy","Proč každý uživatel nemá dělat všechno?","systemová evidence + bezpečnost: role, oprávnění, rizika","role-opravneni","systemova-evidence","systems-table-builder",{requiresSystemModel:!0,requiresSafetyScenario:!0},"matice rolí a oprávnění"),j(6,"Informacni systemy","Život záznamu","informacni-systemy","Co se se záznamem děje od vytvoření po smazání?","modelování procesu: stav záznamu, změny, kdo může co upravit","zivot-zaznamu","modelovani","graph-modeler",{requiresDiagram:!0,requiresSystemModel:!0},"stavový diagram záznamu"),j(7,"Informacni systemy","Návrh evidence pro třídu","informacni-systemy","Jak navrhnout evidenci, která nebude sbírat zbytečnosti?","systemová evidence: účel, minimální data, atributy, pravidla","evidence-tridy","systemova-evidence","systems-table-builder",{requiresSystemModel:!0,requiresDataset:!0},"návrh třídní evidence"),j(8,"Informacni systemy","Test evidence","informacni-systemy","Jak poznáme, že evidence odpoví na otázky, kvůli kterým vznikla?","debugging systému: testovací záznamy, dotazy, chyba návrhu","test-evidence","debugging","systems-table-builder",{requiresDataset:!0,requiresCodeTrace:!0},"testovací protokol evidence"),j(9,"Data a rozhodovani","Data podporují rozhodnutí","data-informace-modelovani","Kdy nám data pomáhají a kdy nestačí?","data lab: rozhodovací otázka, metrika, interpretace a limit dat","data-rozhodovani","data-lab","chart-interpreter",{requiresDataset:!0,requiresWorkedExample:!0},"rozhodnutí s limitem dat"),j(10,"Data a rozhodovani","Metrika a její stín","data-informace-modelovani","Co se pokazí, když sledujeme špatné číslo?","data lab: porovnání metrik, Goodhartův efekt ve věku přiměřeném scénáři","metrika-limit","data-lab","chart-interpreter",{requiresDataset:!0,requiresSafetyScenario:!0},"vybraná metrika s rizikem"),j(11,"Data a rozhodovani","Chybná interpretace dat","data-informace-modelovani","Jak odhalit tvrzení, které data nepodporují?","debugging interpretace: tvrzení vs. data, chybějící proměnná, oprava závěru","debug-interpretace","debugging","data-table-explorer",{requiresDataset:!0,requiresCodeTrace:!0},"opravená interpretace"),j(12,"Mini-projekt","Datový příběh","data-informace-modelovani","Jak z dat vytvořit poctivý příběh?","přehledový datový projekt: otázka, data, graf, závěr, limit","datovy-pribeh","data-lab","chart-interpreter",{requiresDataset:!0,requiresDiagram:!0},"datový příběh s grafem",{milestone:!0}),j(13,"Automatizace","Co je rutina vhodná pro stroj","algoritmizace-programovani","Které činnosti stojí za automatizaci?","algoritmický návod: opakovatelnost, pravidla, riziko automatizace","rutina-automatizace","algoritmicky-navod","algorithm-stepper",{requiresWorkedExample:!0,requiresSafetyScenario:!0},"rozhodnutí o automatizaci"),j(14,"Automatizace","Pravidlo pro automatickou akci","algoritmizace-programovani","Jak z rozhodnutí udělat pravidlo?","modelování pravidla: spouštěč, podmínka, akce, výjimka","trigger-condition-action","modelovani","algorithm-stepper",{requiresDiagram:!0,requiresCodeTrace:!0},"pravidlo spouštěč-podmínka-akce"),j(15,"Automatizace","Automatizace a chyba","algoritmizace-programovani","Co se stane, když pravidlo spustí špatnou akci?","debugging automatizace: scénář selhání, pojistka, oprava pravidla","automatizace-chyba","debugging","debug-trace",{requiresCodeTrace:!0,requiresSafetyScenario:!0},"opravené automatizační pravidlo"),j(16,"Modelovani systemu","Systém jako uzly a toky","informacni-systemy","Kudy v systému tečou data?","modelování systému: uzly, data flow, vstupy/výstupy","data-flow","modelovani","graph-modeler",{requiresDiagram:!0,requiresSystemModel:!0},"data-flow diagram"),j(17,"Modelovani systemu","Místo, kde vzniká chyba","informacni-systemy","Kde v systému se chyba projeví a kde vznikne?","debugging systému: sledování dat tokem, lokalizace chyby","debug-systemu","debugging","graph-modeler",{requiresDiagram:!0,requiresCodeTrace:!0},"mapa chyby v systému"),j(18,"Uzavření celku","Navrhni informační systém","informacni-systemy","Jak navrhnout systém, který má jasný účel a bezpečná data?","projekt: účel, role, data, pravidla, test a rizika systému","projekt-is","systemova-evidence","systems-table-builder",{requiresSystemModel:!0,requiresSafetyScenario:!0,requiresDataset:!0},"návrh informačního systému",{milestone:!0}),j(19,"Digitální technologie","Cloud, lokální data a synchronizace","digitalni-technologie","Kde jsou moje data, když je mám v cloudu?","technologie/bezpečnost: model uložení dat, synchronizace, rizika","cloud-synchronizace","technologie-bezpecnost","network-simulator",{requiresDiagram:!0,requiresSafetyScenario:!0},"schéma uložení a synchronizace"),j(20,"Digitální technologie","Verze souboru a obnova","digitalni-technologie","Jak se vrátit před chybu?","debugging dat: verze, záloha, obnova, konflikt","verze-zaloha","debugging","systems-table-builder",{requiresSafetyScenario:!0,requiresCodeTrace:!0},"plán obnovy souboru"),j(21,"Digitální technologie","Spolupráce v online dokumentu","informacni-systemy","Jak systém pozná, kdo co změnil?","systemová evidence: historie změn, role, komentáře, konflikt","online-spoluprace","systemova-evidence","systems-table-builder",{requiresSystemModel:!0,requiresSafetyScenario:!0},"model historie změn"),j(22,"Bezpecnost systemu","Soukromí v evidenci","informacni-systemy","Která data systém opravdu nesmí sbírat zbytečně?","technologie/bezpečnost: minimalizace dat, citlivá data, účel zpracování","minimalizace-dat","technologie-bezpecnost","systems-table-builder",{requiresSafetyScenario:!0,requiresSystemModel:!0},"upravený návrh evidence bez zbytečných dat"),j(23,"Bezpecnost systemu","Když uniknou data","digitalni-technologie","Co se změní, když se data dostanou mimo systém?","bezpečnostní scénář: dopad úniku, prevence, reakce","unik-dat","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0},"reakční plán po úniku dat"),j(24,"Mini-projekt","Audit třídní/službové evidence","informacni-systemy","Jak poznáme, že systém je užitečný a nepřehání sběr dat?","přehledový audit: účel, data, role, rizika, doporučení","audit-evidence","prehledovy","systems-table-builder",{requiresSystemModel:!0,requiresSafetyScenario:!0},"auditní karta systému",{milestone:!0}),j(25,"Algoritmy nad daty","Najdi záznam podle pravidla","algoritmizace-programovani","Jak systém vybírá správné záznamy?","algoritmický návod: filtr jako pravidlo, kombinace podmínek","filtr-algoritmus","algoritmicky-navod","data-table-explorer",{requiresDataset:!0,requiresCodeTrace:!0},"filtrační pravidla"),j(26,"Algoritmy nad daty","Seřaď a porovnej","algoritmizace-programovani","Jak pořadí dat mění odpověď?","data lab: řazení, kritérium, shody, interpretace","razeni-dat","data-lab","data-table-explorer",{requiresDataset:!0},"odpověď získaná řazením"),j(27,"Algoritmy nad daty","Jednoduché doporučení","algoritmizace-programovani","Jak by systém mohl něco doporučit podle pravidel?","modelování doporučovacího pravidla bez AI: vstupy, pravidlo, riziko","doporucovaci-pravidlo","modelovani","algorithm-stepper",{requiresDiagram:!0,requiresSafetyScenario:!0},"návrh jednoduchého doporučovače"),j(28,"Etika dat","Spravedlivé pravidlo?","data-informace-modelovani","Kdy stejné pravidlo dopadá na různé lidi různě?","technologie/bezpečnost: scénář datového rozhodnutí, kritéria a dopady","spravedlive-pravidlo","technologie-bezpecnost","data-table-explorer",{requiresDataset:!0,requiresSafetyScenario:!0},"upravené pravidlo s odůvodněním"),j(29,"Projekt","Vyber problém pro systém","informacni-systemy","Jaký školní nebo osobní problém má smysl řešit systémem?","projektový list: výběr problému, uživatelé, data, rizika","projekt-system-plan","systemova-evidence","systems-table-builder",{requiresSystemModel:!0,requiresDataset:!0},"plán systému"),j(30,"Projekt","Postav prototyp evidence","informacni-systemy","Jak vytvořit nejmenší užitečnou evidenci?","systemová evidence: tabulka, atributy, pravidla, testovací záznamy","projekt-system-prototyp","systemova-evidence","systems-table-builder",{requiresDataset:!0,requiresSystemModel:!0},"prototyp evidence"),j(31,"Projekt","Otestuj systém na otázkách","informacni-systemy","Umí systém odpovědět na otázky, kvůli kterým vznikl?","debugging systému: testovací otázky, selhání, opravy atributů/pravidel","projekt-system-test","debugging","systems-table-builder",{requiresDataset:!0,requiresCodeTrace:!0},"test systému"),j(32,"Projekt","Doporučení pro uživatele","digitalni-technologie","Jak uživatelům vysvětlíme pravidla a rizika systému?","technologie/bezpečnost: návod, pravidla, limity, soukromí","projekt-system-metodika","technologie-bezpecnost","none",{requiresSafetyScenario:!0},"návod pro uživatele"),j(33,"Uzavření ročníku","Portfolio informačních systémů","informacni-systemy","Co ukazuje, že rozumím systému, datům a rizikům?","přehledový portfolio list: systém, data, role, test, bezpečnostní doporučení","portfolio-8","prehledovy","none",{requiresSystemModel:!0,requiresSafetyScenario:!0},"portfolio 8. ročníku",{milestone:!0})],yo=[j(1,"Vrstvy technologii","Hardware, software a data","digitalni-technologie","Jak spolu souvisí zařízení, program a data?","modelování vrstev: hardware, OS/aplikace, data, uživatel","vrstvy-technologii","modelovani","graph-modeler",{requiresDiagram:!0,requiresSystemModel:!0},"vrstvový model zařízení"),j(2,"Vrstvy technologii","Operační systém jako správce","digitalni-technologie","Co za nás řídí operační systém?","modelování systému: prostředky, oprávnění, soubory, procesy věkově přiměřeně","operacni-system","modelovani","graph-modeler",{requiresDiagram:!0,requiresSystemModel:!0},"schéma role OS"),j(3,"Sítě","Cesta dat po síti","digitalni-technologie","Kudy putuje zpráva, než se zobrazí druhému člověku?","modelování sítě: uzly, zpráva, cesta, zpoždění, selhání","cesta-dat","modelovani","network-simulator",{requiresDiagram:!0,requiresAppletBrief:!0},"síťový model cesty dat"),j(4,"Sítě","Adresa a směrování","digitalni-technologie","Jak síť pozná, kam má data poslat?","algoritmický návod: adresa, směrovací rozhodnutí, chyba adresy","adresa-smerovani","algoritmicky-navod","network-simulator",{requiresDiagram:!0,requiresCodeTrace:!0},"směrovací pravidlo"),j(5,"Sítě","Když část sítě selže","digitalni-technologie","Jak systém reaguje na výpadek?","debugging sítě: očekávaná cesta, selhání uzlu, náhradní cesta","selhani-site","debugging","network-simulator",{requiresDiagram:!0,requiresCodeTrace:!0},"debug síťové cesty"),j(6,"Kódování a prenos","Komprese a ztráta informace","data-informace-modelovani","Co můžeme zmenšit bez ztráty a kdy už něco ztratíme?","data lab: porovnání reprezentací, komprese, ztrátový kompromis","komprese","data-lab","encoding-simulator",{requiresDataset:!0,requiresWorkedExample:!0},"porovnání kompresních voleb"),j(7,"Kódování a prenos","Šifrování jako princip","digitalni-technologie","Jak může být zpráva čitelná jen pro někoho?","algoritmický návod: jednoduché šifrování, klíč, útok hrubou silou věkově přiměřeně","sifrovani-princip","algoritmicky-navod","encoding-simulator",{requiresWorkedExample:!0,requiresSafetyScenario:!0},"zašifrovaná a dešifrovaná zpráva"),j(8,"Bezpecnost","Heslo, správce hesel a 2FA","digitalni-technologie","Proč nestačí jedno dobré heslo všude?","technologie/bezpečnost: scénáře účtů, správce hesel, druhý faktor","hesla-2fa","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0,requiresWorkedExample:!0},"bezpečnostní plán účtů"),j(9,"Bezpecnost","Phishing a sociální inženýrství","digitalni-technologie","Proč útok často míří na člověka, ne na počítač?","technologie/bezpečnost: analýza zpráv, signály rizika, rozhodovací strom","phishing","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0},"rozhodovací strom pro podezřelou zprávu"),j(10,"Bezpecnost","Digitální identita","digitalni-technologie","Z čeho se skládá naše identita online?","modelování identity: účty, data, vztahy, rizika a kontrola","digitalni-identita","modelovani","graph-modeler",{requiresDiagram:!0,requiresSafetyScenario:!0},"mapa digitální identity"),j(11,"Bezpecnost","Dopady sdílení","digitalni-technologie","Jak se změní riziko, když data sdílíme s různými lidmi?","technologie/bezpečnost: publikum, citlivost dat, trvání digitální stopy","dopady-sdileni","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0},"matice sdílení a rizik"),j(12,"Uzavření celku","Bezpečnostní audit účtu/služby","digitalni-technologie","Jak poznáme, že je účet nebo služba rozumně zabezpečená?","přehledový audit: heslo, 2FA, sdílení, obnova, rizika","bezpecnostni-audit","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0,requiresSystemModel:!0},"bezpečnostní audit",{milestone:!0}),j(13,"Algoritmy online","Jak algoritmus řadí obsah","algoritmizace-programovani","Podle čeho může systém rozhodnout, co uvidíme první?","modelování doporučovacího pravidla: vstupy, váhy, výstup, riziko","razeni-obsahu","modelovani","algorithm-stepper",{requiresDiagram:!0,requiresSafetyScenario:!0},"model řazení obsahu"),j(14,"Algoritmy online","Personalizace a bubliny","data-informace-modelovani","Jak data o chování mění další nabídku?","data lab: chování uživatele, pravidlo doporučení, důsledek opakování","personalizace","data-lab","data-table-explorer",{requiresDataset:!0,requiresSafetyScenario:!0},"vysvětlení personalizační smyčky"),j(15,"Algoritmy online","Férovost algoritmu","data-informace-modelovani","Kdy stejné pravidlo není spravedlivé?","technologie/bezpečnost + data: scénář rozhodování, bias v datech, úprava pravidla","ferovost-algoritmu","technologie-bezpecnost","data-table-explorer",{requiresDataset:!0,requiresSafetyScenario:!0},"upravené rozhodovací pravidlo"),j(16,"AI a strojove uceni","Model učený z dat","data-informace-modelovani","Jak se liší pravidlo napsané člověkem a model naučený z dat?","AI lab: ruční pravidlo vs. trénovaný model, trénovací data, chyba","model-uceny-z-dat","ai-lab","ml-training-simulator",{requiresDataset:!0,requiresWorkedExample:!0},"porovnání pravidla a modelu"),j(17,"AI a strojove uceni","Trénovací data","data-informace-modelovani","Co se model naučí, když mu dáme špatná data?","AI lab: výběr trénovacích příkladů, nevyváženost dat, dopad na predikci","trenovaci-data","ai-lab","ml-training-simulator",{requiresDataset:!0,requiresSafetyScenario:!0},"upravená trénovací sada"),j(18,"AI a strojove uceni","Chyby modelu a bias","data-informace-modelovani","Jak poznáme, kde model selhává?","debugging AI: matice chyb, falešný pozitivní/negativní příklad věkově přiměřeně","chyby-modelu-bias","ai-lab","ml-training-simulator",{requiresDataset:!0,requiresCodeTrace:!0,requiresSafetyScenario:!0},"záznam chyb modelu",{milestone:!0}),j(19,"AI a strojove uceni","Kdy AI nepoužít","digitalni-technologie","Kdy je automatické rozhodnutí příliš rizikové?","technologie/bezpečnost: kritéria pro použití AI, odpovědnost, kontrola člověkem","kdy-nepouzit-ai","technologie-bezpecnost","ml-training-simulator",{requiresSafetyScenario:!0},"rozhodnutí použít/nepoužít AI"),j(20,"AI a tvorba obsahu","Generativní AI jako nástroj","digitalni-technologie","Co AI vytváří a proč to musíme ověřovat?","technologie/bezpečnost: výstup modelu, halucinace, ověřování zdrojů, autorská odpovědnost","generativni-ai-overovani","technologie-bezpecnost","none",{requiresSafetyScenario:!0,requiresWorkedExample:!0},"checklist ověření AI výstupu"),j(21,"AI a data","Soukromí při práci s AI","digitalni-technologie","Jaká data do AI nástroje nepatří?","technologie/bezpečnost: citlivá data, anonymizace, školní pravidla","ai-soukromi","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0},"pravidla bezpečného zadání"),j(22,"AI mini-projekt","Natrénuj jednoduchý model","data-informace-modelovani","Jak ovlivní data úspěšnost modelu?","AI lab: trénování jednoduchého klasifikátoru, test, změna dat","ai-mini-trenink","ai-lab","ml-training-simulator",{requiresDataset:!0,requiresAppletBrief:!0},"záznam trénování a testu"),j(23,"AI mini-projekt","Vysvětli limity modelu","data-informace-modelovani","Co model neumí a jak to poznáme?","debugging AI: testovací příklady, hranice modelu, doporučení pro použití","ai-limity","ai-lab","ml-training-simulator",{requiresDataset:!0,requiresCodeTrace:!0},"karta limitů modelu"),j(24,"Uzavření celku","AI karta odpovědného použití","digitalni-technologie","Jak poznáme, že AI používáme odpovědně?","přehledový list: data, chyba, bias, soukromí, lidská kontrola","ai-odpovedne-pouziti","prehledovy","none",{requiresSafetyScenario:!0,requiresDataset:!0},"AI karta odpovědného použití",{milestone:!0}),j(25,"Zaverecny projekt","Vyber problém a technologii","digitalni-technologie","Jaký problém má smysl řešit digitálním prototypem?","projektový list: problém, uživatel, data, technologie, rizika","projekt-9-plan","modelovani","graph-modeler",{requiresDiagram:!0,requiresSystemModel:!0},"zadání závěrečného projektu"),j(26,"Zaverecny projekt","Navrhni data a model","data-informace-modelovani","Jaká data a model potřebuje naše řešení?","data/model lab: datové položky, model vztahů, limity a rizika","projekt-9-data-model","data-lab","data-table-explorer",{requiresDataset:!0,requiresDiagram:!0},"datový model projektu"),j(27,"Zaverecny projekt","Navrhni algoritmus nebo pravidla","algoritmizace-programovani","Jak bude řešení rozhodovat nebo reagovat?","algoritmický návod: pravidla, tok, testovací případy","projekt-9-algoritmus","algoritmicky-navod","algorithm-stepper",{requiresCodeTrace:!0,requiresDiagram:!0},"algoritmus projektu"),j(28,"Zaverecny projekt","Bezpečnost a dopady projektu","digitalni-technologie","Jaké riziko vytváří naše řešení a jak ho snížit?","technologie/bezpečnost: osobní data, zneužití, přístup, dopad na uživatele","projekt-9-bezpecnost","technologie-bezpecnost","password-privacy-simulator",{requiresSafetyScenario:!0},"riziková karta projektu"),j(29,"Zaverecny projekt","Prototyp nebo specifikace miniaplikace","algoritmizace-programovani","Jak vypadá nejmenší ověřitelná verze řešení?","programovací mise/specifikace: vstupy, pravidla, feedback, výstup","projekt-9-prototyp","programovaci-mise","block-programming-sandbox",{requiresAppletBrief:!0,requiresCodeTrace:!0},"prototyp nebo app brief"),j(30,"Zaverecny projekt","Test a ladění prototypu","algoritmizace-programovani","Co se při testu pokazilo a co opravíme?","debugging: testovací scénáře, pozorování, chyba, priorita opravy","projekt-9-test","debugging","debug-trace",{requiresCodeTrace:!0},"debug protokol projektu"),j(31,"Zaverecny projekt","Vysvětlení řešení","data-informace-modelovani","Jak prokážeme, že řešení dává smysl?","přehledový list: problém, data, model, algoritmus, bezpečnost, limity","projekt-9-vysvetleni","prehledovy","none",{requiresDiagram:!0,requiresSafetyScenario:!0},"prezentační karta projektu"),j(32,"Zaverecny projekt","Obhajoba a zpětná vazba","digitalni-technologie","Jak přijmout zpětnou vazbu a rozhodnout, co zlepšit?","přehledový/portfolio list: rubrika, peer feedback, plán další iterace","projekt-9-obhajoba","prehledovy","none",{requiresDiagram:!0},"zpětná vazba a plán iterace"),j(33,"Uzavření ročníku","Informatické portfolio 9. ročníku","digitalni-technologie","Co ukazuje, že rozumím digitálním technologiím jako tvůrce i uživatel?","přehledové portfolio: sítě, bezpečnost, algoritmy online, AI, projekt","portfolio-9","prehledovy","none",{requiresSystemModel:!0,requiresSafetyScenario:!0},"portfolio 9. ročníku",{milestone:!0})],pt={6:ho,7:vo,8:go,9:yo};function fo(e){return e!==6&&e!==7&&e!==8&&e!==9?null:pt[e]}function bo(e,t){const o=fo(e);if(!o)return null;const n=ke(t),d=o.find(i=>ke(i.topic)===n);return d||(o.find(i=>n.includes(ke(i.topic))||ke(i.topic).includes(n)||n.slice(0,20)===ke(i.topic).slice(0,20))??null)}function oa(e,t){return pt[e].map(o=>({thematicArea:o.thematicArea,topic:o.topic,expectedOutcomes:ko(o),keyCompetencies:[...mo],recommendedHours:t,orderIndex:o.week,sourceDocument:[`RVP okruh: ${o.rvpArea}`,o.secondaryRvpArea?`Sekundární RVP okruh: ${o.secondaryRvpArea}`:null,`Klíčová otázka: ${o.keyQuestion}`,`Metodika PL: ${o.worksheetPlMethod}`,`Informatika concept: ${o.informatikaConceptId}`,`PL format: ${o.plFormatId}`,`Applet type: ${o.appletType}`,`Portfolio: ${o.assessment.portfolioArtifact}`].filter(Boolean).join(" | ")}))}const zo=["kompetence k učení","kompetence k řešení problémů","kompetence občanské a kompetence sociální a personální"];function jo(e,t){return[`Žák zpracuje učivo k tématu „${e}“ a uplatní je v úlohách odpovídajících týdennímu plánu.`,"Žák pracuje s geografickými podklady (mapa, data, text, schéma, tabulka) a vyvozuje z nich souvislosti, nejen pojmy z paměti.",`Metodický záměr týdne (pracovní list / aktivity): ${t}`]}const Ao=[{thematicArea:"Mapy",topic:"Co je mapa a co obsahuje",worksheetPlMethod:"procvičovací s přiřazováním a zakreslováním do mapy"},{thematicArea:"Mapy",topic:"Tematické mapy",worksheetPlMethod:"procvičovací na práci s mapou – ano/ne, ABCD apod."},{thematicArea:"Mapy",topic:"Určování polohy a vzdálenosti",worksheetPlMethod:"tajenka podle souřadnic, praktické úlohy s kompasem, GPS"},{thematicArea:"Mapy",topic:"Mapování v terénu",worksheetPlMethod:"praktický – návod na tvorbu tematické mapy"},{thematicArea:"Litosféra",topic:"Typy reliéfu, členitost",worksheetPlMethod:"výklad a procvičování, různé formy dle třídy"},{thematicArea:"Litosféra",topic:"Desková tektonika a zemětřesení",worksheetPlMethod:"badatelský"},{thematicArea:"Litosféra",topic:"Sopečná činnost",worksheetPlMethod:"badatelský – kde jsou sopky a jak se od sebe liší"},{thematicArea:"Litosféra",topic:"Erozní činnost vnějších činitelů",worksheetPlMethod:"přiřazování obrázků, pojmů, charakteristik"},{thematicArea:"Litosféra",topic:"Akumulační činnost vnějších činitelů",worksheetPlMethod:"přiřazování obrázků, pojmů, charakteristik"},{thematicArea:"Litosféra",topic:"Modelace reliéfu na konkrétním místě",worksheetPlMethod:"badatelský, aplikace předchozího s návodem"},{thematicArea:"Atmosféra",topic:"Pohyby Země a teplo / zima",worksheetPlMethod:"badatelský"},{thematicArea:"Atmosféra",topic:"Časová pásma",worksheetPlMethod:"práce s mapou časových pásem"},{thematicArea:"Atmosféra",topic:"Meteorologické veličiny",worksheetPlMethod:"práce s tabulkou, tvorba grafu, výpočty, vlastní měření (volitelně)"},{thematicArea:"Atmosféra",topic:"Vlivy na teplotu vzduchu",worksheetPlMethod:"badatelský – tabulky, grafy, obrázky a vyvozování"},{thematicArea:"Atmosféra",topic:"Jak fouká vítr",worksheetPlMethod:"propojení schématu a textu"},{thematicArea:"Atmosféra",topic:"Skleníkový efekt",worksheetPlMethod:"schéma + text, výroky; hodnocení"},{thematicArea:"Hydrosféra",topic:"Hydrologický cyklus",worksheetPlMethod:"argumentace na základě schématu"},{thematicArea:"Hydrosféra",topic:"Zásoby vody na Zemi",worksheetPlMethod:"práce s grafy, texty, hodnocením"},{thematicArea:"Hydrosféra",topic:"Územní a prostorové rozložení srážek",worksheetPlMethod:"badatelsky s grafy a obrázky"},{thematicArea:"Hydrosféra",topic:"Klimadiagramy",worksheetPlMethod:"kombinace textu a grafu"},{thematicArea:"Hydrosféra",topic:"Vodní režimy řek",worksheetPlMethod:"badatelsky s grafy a obrázky"},{thematicArea:"Hydrosféra",topic:"Příčiny povodní",worksheetPlMethod:"vyvozování z textu, odhady do budoucna"},{thematicArea:"Hydrosféra",topic:"Protipovodňová opatření",worksheetPlMethod:"hodnocení"},{thematicArea:"Pedosféra",topic:"Půdotvorní činitelé",worksheetPlMethod:"badatelsky s obrázky půdních profilů"},{thematicArea:"Pedosféra",topic:"Půdní typy",worksheetPlMethod:"badatelsky s mapou a půdními profily"},{thematicArea:"Biosféra",topic:"Tropy",worksheetPlMethod:"myšlenkové schéma"},{thematicArea:"Biosféra",topic:"Mírné pásmo",worksheetPlMethod:"mapy + grafy"},{thematicArea:"Biosféra",topic:"Chladné oblasti",worksheetPlMethod:"myšlenkové schéma"},{thematicArea:"Biosféra",topic:"Uspořádání biomů",worksheetPlMethod:"badatelsky"},{thematicArea:"Přírodní prostředí jako systém",topic:"Charakteristika přírodních podmínek",worksheetPlMethod:"vlastní tvorba dle příkladu"},{thematicArea:"Přírodní prostředí jako systém",topic:"Vztahy a souvislosti",worksheetPlMethod:"myšlenkové schéma vlastní, vyvozování"},{thematicArea:"Přírodní prostředí a činnost člověka",topic:"Překážka nebo potenciál",worksheetPlMethod:"práce s mapami"},{thematicArea:"Přírodní prostředí a činnost člověka",topic:"Cestovní ruch a přírodní podmínky",worksheetPlMethod:"psaní doporučení pro turisty"}],Po=[{thematicArea:"Místopis",topic:"Kontinenty, světadíly, státy",worksheetPlMethod:"jednoduché přiřazovačky, slepé mapy"},{thematicArea:"Obyvatelstvo",topic:"Přirozený pohyb obyvatelstva",worksheetPlMethod:"výpočty, mapy"},{thematicArea:"Obyvatelstvo",topic:"Migrace – základy",worksheetPlMethod:"výpočty, mapy, případové studie"},{thematicArea:"Obyvatelstvo",topic:"Vývoj počtu obyvatel obecně",worksheetPlMethod:"grafy z různých států, badatelsky"},{thematicArea:"Obyvatelstvo",topic:"Vývoj počtu obyvatel – mikro region",worksheetPlMethod:"práce s daty a pamětníky"},{thematicArea:"Obyvatelstvo",topic:"Rozmístění obyvatelstva",worksheetPlMethod:"badatelsky dle map"},{thematicArea:"Obyvatelstvo",topic:"Struktura obyvatelstva – jazyky, národy",worksheetPlMethod:"schémata, otázky"},{thematicArea:"Obyvatelstvo",topic:"Struktura obyvatelstva – náboženství",worksheetPlMethod:"charakteristiky náboženství, mapy"},{thematicArea:"Obyvatelstvo",topic:"Struktura obyvatelstva jako problém",worksheetPlMethod:"případové studie + závěr"},{thematicArea:"Obyvatelstvo",topic:"Charakteristika obyvatelstva – mikro",worksheetPlMethod:"tvorba vlastní charakteristiky, práce s daty"},{thematicArea:"Obyvatelstvo",topic:"Charakteristika obyvatelstva státu",worksheetPlMethod:"práce s mapami a daty – tvorba vlastní charakteristiky"},{thematicArea:"Obyvatelstvo",topic:"Pozitiva a negativa migrace",worksheetPlMethod:"případové studie + závěr"},{thematicArea:"Sídla",topic:"Jádro a periferie",worksheetPlMethod:"procvičovací"},{thematicArea:"Sídla",topic:"Typy sídel",worksheetPlMethod:"schéma, práce s online mapami"},{thematicArea:"Sídla",topic:"Kde vznikají sídla?",worksheetPlMethod:"práce s fotomapou"},{thematicArea:"Sídla",topic:"Urbanizační procesy",worksheetPlMethod:"badatelsky s grafy, mapami"},{thematicArea:"Sídla",topic:"Slumy",worksheetPlMethod:"postojově"},{thematicArea:"Sídla",topic:"Územní plán",worksheetPlMethod:"výzkumně"},{thematicArea:"Sídla",topic:"Kvalita života",worksheetPlMethod:"terénní šetření"},{thematicArea:"Sídla",topic:"Sídelní hierarchie",worksheetPlMethod:"výzkum s mapovými portály do připraveného schématu"},{thematicArea:"Hospodářství",topic:"Základní ukazatele",worksheetPlMethod:"badatelsky – na datech"},{thematicArea:"Hospodářství",topic:"Vyspělost států",worksheetPlMethod:"práce s mapami"},{thematicArea:"Hospodářství",topic:"Sektory ekonomiky",worksheetPlMethod:"přiřazování apod."},{thematicArea:"Hospodářství",topic:"Lokalizace rostlinné výroby",worksheetPlMethod:"aplikace"},{thematicArea:"Hospodářství",topic:"Lokalizace zemědělství II",worksheetPlMethod:"aplikace"},{thematicArea:"Hospodářství",topic:"Lokalizace průmyslu",worksheetPlMethod:"aplikace"},{thematicArea:"Hospodářství",topic:"Lokalizace elektráren",worksheetPlMethod:"aplikace"},{thematicArea:"Hospodářství",topic:"Lokalizace služeb",worksheetPlMethod:"aplikace"},{thematicArea:"Hospodářství",topic:"Sektorová struktura podruhé: pohled do světa",worksheetPlMethod:"práce s daty – hledání souvislostí"},{thematicArea:"Hospodářství",topic:"Co dělat v… (aplikační úloha)",worksheetPlMethod:"vlastní návrh vhodné činnosti"},{thematicArea:"Hospodářství",topic:"Výhody a nevýhody zemědělských systémů",worksheetPlMethod:"analýza případových studií"},{thematicArea:"Hospodářství",topic:"Závislost ekonomiky na produktu",worksheetPlMethod:"postojově, práce s textem"},{thematicArea:"Lidé na Zemi",topic:"Shrnutí ročníku – obyvatelstvo, sídla, hospodářství",worksheetPlMethod:"přehledový a syntetizující týden (doplněno pro 33. týden oproti původní 32 v tabulce)"}],To=[{thematicArea:"Region",topic:"Pojem region, regionalizace",worksheetPlMethod:"aplikace do připraveného schématu"},{thematicArea:"Můj region",topic:"Kde žiju a na co jsem hrdý",worksheetPlMethod:"postojově"},{thematicArea:"Můj region",topic:"Čím se podobají a liší regiony v mém okolí",worksheetPlMethod:"analýza rozhovorů i dalších dat"},{thematicArea:"Můj region",topic:"Problémy mého regionu",worksheetPlMethod:"výzkum"},{thematicArea:"Můj region",topic:"Řešení problémů mého regionu",worksheetPlMethod:"nadstavba výzkumu"},{thematicArea:"Můj region",topic:"Plán zahraniční návštěvy",worksheetPlMethod:"projektově"},{thematicArea:"Makroregiony světa",topic:"Evropa – opakovací přehled",worksheetPlMethod:"opakovací přehled"},{thematicArea:"Makroregiony světa",topic:"Specifika subregionů Evropy",worksheetPlMethod:"práce s textem a mapou"},{thematicArea:"Makroregiony světa",topic:"Severní Eurasie",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Východní Asie",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Kultura Japonska a Číny",worksheetPlMethod:"práce s texty a mapami"},{thematicArea:"Makroregiony světa",topic:"Jihovýchodní Asie",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Jižní Asie",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Specifika Indie",worksheetPlMethod:"případové studie"},{thematicArea:"Makroregiony světa",topic:"Islámský svět",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Ropa a rozvoj",worksheetPlMethod:"práce s daty"},{thematicArea:"Makroregiony světa",topic:"Subsaharská Afrika",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Angloamerika",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Severní Amerika – světový „gigant“",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Latinská Amerika",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Austrálie a Oceánie",worksheetPlMethod:"přehled"},{thematicArea:"Makroregiony světa",topic:"Polární oblasti",worksheetPlMethod:"přehled"},{thematicArea:"Zdroje informací",topic:"Tipy na vhodné kvalitní zdroje",worksheetPlMethod:"práce se zdroji a hodnocení zdrojů"},{thematicArea:"Vnímání regionů",topic:"Dva pohledy proti sobě",worksheetPlMethod:"práce s textem"},{thematicArea:"Vnímání regionů",topic:"Stereotypizace regionů",worksheetPlMethod:"práce s texty"},{thematicArea:"Porovnání regionů",topic:"Základní charakteristiky",worksheetPlMethod:"výzkumně"},{thematicArea:"Moje charakteristika regionu",topic:"Jak na to",worksheetPlMethod:"tvorba vlastní charakteristiky"},{thematicArea:"Cestování po světě",topic:"Lokalizační předpoklady cestovního ruchu",worksheetPlMethod:"badatelsky"},{thematicArea:"Cestování po světě",topic:"Selektivní a realizační předpoklady cestovního ruchu",worksheetPlMethod:"badatelsky"},{thematicArea:"Cestování po světě",topic:"Cestujeme po Česku",worksheetPlMethod:"práce s mapami"},{thematicArea:"Cestování po světě",topic:"Cestujeme po Evropě",worksheetPlMethod:"návrh vlastní dovolené"},{thematicArea:"Cestování po světě",topic:"Cestujeme po světě",worksheetPlMethod:"práce s materiály cestovek, vazba na obecné znalosti"},{thematicArea:"Regiony",topic:"Globální a lokální vazby regionů (syntéza ročníku)",worksheetPlMethod:"přehledový / projektový týden (doplněno pro 33. týden)"}],Oo=[{thematicArea:"Globalizace",topic:"Pojem a podoby globalizace",worksheetPlMethod:"práce s texty"},{thematicArea:"Globalizace",topic:"Stručný vývoj globalizace",worksheetPlMethod:"práce s texty a schématy"},{thematicArea:"Globalizace",topic:"V čem se liším / v čem jsem stejný",worksheetPlMethod:"práce s texty"},{thematicArea:"Globalizace",topic:"Konkrétní příklady propojení",worksheetPlMethod:"práce s daty dle příkladu"},{thematicArea:"Globalizace",topic:"Výhody globalizace",worksheetPlMethod:"práce s daty"},{thematicArea:"Globalizace",topic:"Nevýhody globalizace",worksheetPlMethod:"práce s daty"},{thematicArea:"Globální problémy lidstva",topic:"Globální změna klimatu",worksheetPlMethod:"badatelsky"},{thematicArea:"Globální problémy lidstva",topic:"Desertifikace",worksheetPlMethod:"myšlenkové schéma"},{thematicArea:"Globální problémy lidstva",topic:"Deforestace",worksheetPlMethod:"popis příběhu"},{thematicArea:"Globální problémy lidstva",topic:"Nedostatek pitné vody",worksheetPlMethod:"analýza dat"},{thematicArea:"Globální problémy lidstva",topic:"Znečištění ovzduší",worksheetPlMethod:"práce s mapami, vlastní měření (volitelně)"},{thematicArea:"Globální problémy lidstva",topic:"Nedostatek půdy",worksheetPlMethod:"práce s obrázky"},{thematicArea:"Globální problémy lidstva",topic:"Nedostatek jídla",worksheetPlMethod:"práce s mapami"},{thematicArea:"Globální problémy lidstva",topic:"Globální nerovnost",worksheetPlMethod:"práce s grafy, tvorba textu"},{thematicArea:"Globální problémy lidstva",topic:"Moderní otroctví",worksheetPlMethod:"práce s textem"},{thematicArea:"Globální problémy lidstva",topic:"Drogy",worksheetPlMethod:"práce s textem a mapou"},{thematicArea:"Globální problémy lidstva",topic:"Mapování důsledků konkrétní činnosti",worksheetPlMethod:"analýza"},{thematicArea:"Globální problémy lidstva",topic:"Odpady",worksheetPlMethod:"práce s grafy a texty"},{thematicArea:"Globální problémy lidstva",topic:"Negramotnost",worksheetPlMethod:"badatelsky"},{thematicArea:"Globální problémy lidstva",topic:"Civilizační choroby",worksheetPlMethod:"práce s textem"},{thematicArea:"Udržitelný rozvoj",topic:"Koncept udržitelného rozvoje",worksheetPlMethod:"schémata"},{thematicArea:"Udržitelný rozvoj",topic:"SDGs",worksheetPlMethod:"práce s daty a online zdroji"},{thematicArea:"Udržitelný rozvoj",topic:"Příklady udržitelných řešení",worksheetPlMethod:"případové studie"},{thematicArea:"Udržitelný rozvoj",topic:"Návrh udržitelného řešení",worksheetPlMethod:"vlastní návrh"},{thematicArea:"Ohniska napětí",topic:"Mapa konfliktů",worksheetPlMethod:"práce s mapou"},{thematicArea:"Ohniska napětí",topic:"Izraelsko-palestinský konflikt",worksheetPlMethod:"mapy, časová osa, text"},{thematicArea:"Ohniska napětí",topic:"Vybraná ohniska napětí",worksheetPlMethod:"do připravené struktury vlastní tvorba"},{thematicArea:"Ohniska napětí",topic:"Co by se stalo, kdyby…",worksheetPlMethod:"předvídání v případových studiích"},{thematicArea:"Ohniska napětí",topic:"Typologie konfliktů",worksheetPlMethod:"vlastní typologie dle žákovských prezentací"},{thematicArea:"Ohniska napětí",topic:"Mírová řešení",worksheetPlMethod:"práce s texty"},{thematicArea:"Integrace zemí",topic:"Proč státy spolupracují",worksheetPlMethod:"badatelsky"},{thematicArea:"Integrace zemí",topic:"EU z geografického pohledu",worksheetPlMethod:"práce s infografikami"},{thematicArea:"Integrace zemí",topic:"Integrace ve světě",worksheetPlMethod:"práce s mapami"}];function Pe(e){return e.map((t,o)=>({...t,week:o+1}))}const ut={6:Pe(Ao),7:Pe(Po),8:Pe(To),9:Pe(Oo)};function wo(e){return e!==6&&e!==7&&e!==8&&e!==9?null:ut[e]}function na(e,t){return ut[e].map(n=>({thematicArea:n.thematicArea,topic:n.topic,expectedOutcomes:jo(n.topic,n.worksheetPlMethod),keyCompetencies:[...zo],recommendedHours:t,orderIndex:n.week,sourceDocument:`Metodika PL (autor učebnice): ${n.worksheetPlMethod}`}))}const aa={badatelsky:"Badatelský (data → závěr)",schema:"Myšlenkové schéma",ctenarska:"Čtenářská gramotnost",vyzkumny:"Výzkumný (terén / online)",procvicovaci:"Procvičovací (opakování, mix úloh)",prehledovy:"Přehledový (souvislosti, syntéza)",pramen:"Práce s historickým pramenem","casova-osa":"Časová osa (chronologie)",dilema:"Dilema / rozhodovací hra",roleplay:"Role-play (pohled postavy)",detektiv:"Detektivka s prameny","mapa-udalosti":"Mapa + události","algoritmicky-navod":"Algoritmický návod",debugging:"Debugging (najdi a oprav chybu)","data-lab":"Data lab",modelovani:"Modelování","programovaci-mise":"Programovací mise","systemova-evidence":"Systémová evidence","technologie-bezpecnost":"Technologie a bezpečnost","ai-lab":"AI lab"};function Io(){return`### Společný rámec (všechny formáty)
- **E–U–R:** Každý list má fáze *evokace* (před prací), *uvědomění si významu* (práce se zdrojem) a *reflexe* (alespoň 1–2 věty nebo mini-otázka na konci).
- **Bloom:** Cíleně míchat úrovně kognitivních procesů; u syntézy a přehledu požaduj alespoň úlohy na analýzu / hodnocení / tvorbu, ne jen vybavování.
- **Kognitivní zátěž:** Krátké jasné instrukce, obrázek blízko textu, méně drobností na stránce; heuristiky: max ~4 nové klíčové pojmy na list (2. stupeň).
- **Diferenciace (volitelné v plánu):** Uveď v layoutHint nápovědu na zjednodušení (víc scaffoldu) a ztížení (otevřenější otázka) u 1–2 úloh, **bez změny vzdělávacího cíle**.
- **Formativní přístup:** Alespoň sebehodnocení, klíč, nebo prostor „co jsem se naučil/a, kde si nejsem jistý/á“.
- **Zeměpis (když předmět dává smysl):** U úloh zvaž kartografickou, informační, terénní nebo prostorovou dovednost (Řezníčková).
- U každé sekce uveď **bloomTarget** (číslo 1–6: 1 zapsat → 6 tvořit) podle revidované taxonomie; u cvičení a shrnutí je to povinné, kde dává smysl. Doplňovací upřesnění můžeš stručně zopakovat v **layoutHint**.`}function ae(e){return e.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ")}function $o(e,t){const o=wo(e);if(!o)return null;const n=ae(t),d=o.find(i=>ae(i.topic)===n);return d?d.worksheetPlMethod:o.find(i=>n.includes(ae(i.topic))||ae(i.topic).includes(n)||n.slice(0,20)===ae(i.topic).slice(0,20))?.worksheetPlMethod??null}function dt(e){const t=ae(e);return/pramen|zakonik|zakoník|dokument|napis|nápis|thukydid|herodot/.test(t)?"pramen":/casov(a|á) osa|chronolog|posloupnost/.test(t)?"casova-osa":/dilema|rozhodni|co bys|volba mezi/.test(t)?"dilema":/\bjsi\b|roleplay|role play|pohled (z )?postav|simulace dne|simulace senatu|simulace senátu/.test(t)?"roleplay":/detektiv|rekonstruk|zahada|záhada|mýtus o/.test(t)?"detektiv":/mapa.*(trasa|bitva|lokac|udalost|událost)|obchodn(i|í) hra.*map/.test(t)?"mapa-udalosti":/badatelsk|data|graf|tabulk|analyz|vyvoz|hodnot|interpret/.test(t)?"badatelsky":/schem|myslenk|mapa myslen|myšlenk|kombinac.*textu a sch|propojen(i|i) (textu|schem)/.test(t)?"schema":/cten|pripadov|pripadov|gramotnost|textu|clanek|postojove|rozhovor s prarodic/.test(t)?"ctenarska":/vyzkum|vyzkumn|teren|terén|kroky|protokol|nabor|sb(i|e)r|evalu|online zdroj/.test(t)?"vyzkumny":/prehled|syntez|opakovac|projektove|souhrn|shrnuti ro(c|č)niku|uzavren|uzavřen|porovnavac|porovnávac/.test(t)?"prehledovy":(/procv|cvic|abec|abecd|doplnov|priraz|slep|ano.ne|tajenk|jednoduch(pri|é)/.test(t),"procvicovaci")}function Eo(e,t){const o=uo(e,t);return o?{plFormatId:o.plFormatId??dt(o.worksheetPlMethod),worksheetPlMethod:o.worksheetPlMethod,scaffoldLevel:o.scaffoldLevel}:null}function Co(e,t){const o=bo(e,t);return o?{plFormatId:o.plFormatId,worksheetPlMethod:`${o.worksheetPlMethod} | appletType: ${o.appletType} | portfolio: ${o.assessment.portfolioArtifact}`}:null}function Fe(e,t){if(t?.plFormatId)return{plFormatId:t.plFormatId,worksheetPlMethodSource:void 0};const o=(e.subjectCode||"").toLowerCase();if(o==="dejepis"){const d=Eo(e.grade,e.topic);if(d)return{plFormatId:d.plFormatId,worksheetPlMethodSource:d.worksheetPlMethod,scaffoldLevel:d.scaffoldLevel}}if(o==="informatika"){const d=Co(e.grade,e.topic);if(d)return{plFormatId:d.plFormatId,worksheetPlMethodSource:d.worksheetPlMethod}}const n=o==="zemepis"?$o(e.grade,e.topic):null;return n?{plFormatId:dt(n),worksheetPlMethodSource:n}:{plFormatId:"procvicovaci"}}function xo(e,t){const o=t?.scaffoldLevel,n=o?`Úroveň předpřipravení schématu (kde dává smysl): ${o} — high = víc doplňovaček a nápověd, none = téměř vlastní tvorba žáka.`:"",d={badatelsky:`
### Formát: BADATELSKÝ (1 hodina, data na listu — ne plnohodnotný projekt)
- Cíl: **žák sám dospěje k závěru z dat** (hypotéza → analýza → porovnání s hypotézou), ne opisování čísel ani přečtení vysvětlení pod grafem. Vyhni se pseudo-bádání (data + otázka + hned odpověď ve stejném bloku).
- Fáze v obsahu: (1) motivace / problém, (2) **badatelská otázka** (zodpověditelná, otevřená, vyhodnotitelná — ne triviální ANO/NE o vkusu), (3) **hypotéza** žáka, (4) **surová data** (tabulka, graf, mapa, krátký fakt. text) *bez* hotové interpretace v těle zdroje, (5) gradované úlohy (MCQ + free-answer) směrem k „proč / co z toho plyne“, (6) **zápis závěru** a srovnání s hypotézou, (7) **reflexe** (co překvapilo, co by zjistit dál).
- Poměr cíleně: cca 10 : 70 : 20 (krátký úvod : práce : reflexe).
- Nevytvářej úlohy typu „přepiš jednu hodnotu z grafu“ hned u téže hodnoty. V summary sekci explicitně místo pro *klíčovou myšlenku / závěr* žáka.`,schema:`
### Formát: MYŠLENKOVÉ SCHÉMA (pojmová / mentální mapa — není jen výčet bublin)
- Cíl: **vizuálně propojit pojmy**; u pojmové mapy (Novak) požaduj u hran **pojmenované vztahy** („je součástí“, „způsobuje“…), ne jen prázdné spojnice. Odlisuj od radiální mind mapy (Buzan) — pokud dáš radiální strukturu, dej to najevo a nepředstírej objektivní „správnou“ mapu.
${n}
- Struktura: centrální pojem; slovní zásoba / pool pojmů u slabších ročníků; pravidla mapy (3–4 řádky) v intro nebo reading; sekce cvičení: co doplnit, popř. „vyber 2 hrany a vysvětli 1 větou“; **exercise-free-answer** s velkým prostorem pro vlastní nákres / mapu; reflexe (co bys do mapy přidal/a znovu).
- Nevytvářej mapu bez požadavku na **vztahy**; max ~5 uzlů na úroveň, ať není chaos.`,ctenarska:`
### Formát: ČTENÁŘSKÁ GRAMOTNOST
- Cíl: rozvíjet **strategie čtení a porozumění** (E–U–R: před / při / po textu) — ne čistě test faktů z článku. Text je předmětem čtenářské práce, ne jen úložištěm dat pro badatelskou inferenci.
- Struktura: (1) evokace: predikce z titulku, hlavní otázka, slovní zásoba; (2) 1–2 kvalitní **reading** sekce s reálným textem (2. stupeň cca 200–500 slov celkem dle věku); (3) při čtení: explicitně značkování nebo zastavení (např. I.N.S.E.R.T. — popiš v content/in items); (4) po čtení: gradované úlohy (doslovné + vyvozování + krátký názor); (5) **metakognitivní** reflexe (co překvapilo, kterou strategii žák použil).
- Kognitivně: typografie mysli (řádkování) — odborné pojmy u textu, ne až na konci listu.
- Není vhodné jako náhrada čistě procvičovacího drillu bez čtenářských strategií.`,vyzkumny:`
### Formát: VÝZKUMNÝ (více kroků, často mimo list — odliš od badatelského)
- Cíl: **vlastní sběr dat** (terén, ulice, online rešerše s pravidly), protokol, zpracování, **výstup**; badatelský list = data už připravená v rámci hodiny.
- Struktura: (1) briefing: výzkumná otázka, hypotéza, (2) **plán a metoda** (co měřit / kde / čím, bezpečnost u terénu v jedné větě v content), (3) očíslované kroky = samostatné sekce s free-answer / položkami v items pro záznam, (4) zpracování (tabulka, mapa, graf) + interpretace, (5) šablona nebo popis **prezentace / produktu** s nápovědou kritérií, (6) reflexe + sebehodnocení dle rubriky.
- Úkoly: vyžaduj **zdroje** a vlastní syntézu u rešerše — ne copy-paste bez kritérií.
- Překryv s badatelským: když vše stihneš jen v lavici s papírovými daty, preferuj spíš badatelský formát.`,procvicovaci:`
### Formát: PROCVIČOVACÍ (retrieval, gradace, zpětná vazba)
- Cíl: **zautomatizovat** dovednost opakováním s pestrými formami a **sebekontrolou**; ne učit zcela nové učivo (na úvod lekce to není ono).
- Struktura: cíl listu 1 větou; krátké pravidlo nebo vzorec; **1 vyřešený vzor (worked example)** v content intro nebo reading; bloky cvičení A→B→C rostoucí obtížností, mix typů (MCQ, fill-blank, connect-pairs, free-answer) — alespoň jedna souvislost/vztah v free-answer; **klíč nebo místo pro kontrolu**; mini-reflexe (kde si nejsem jistý).
- Nevytvářej 30× stejnou mechanickou úlohu; vyvaruj se skoku z vybavování rovnou na těžkou syntézu bez mezikroků.
- Při plánování: aspoň část úloh mimo nejnižší Bloom (nepoužívej jen „vypíš fakt“).`,prehledovy:`
### Formát: PŘEHLEDOVÝ (syntéza po celku — ne úvod)
- Cíl: **propojit subtémata** v pevné struktuře (srovnávací matice, tabulka, časová osa) + **syntetické a hodnotící** úlohy (Bloom 4–6), ne jen tahoňák faktů.
- Struktura: krátký box klíčových pojmů; hlavní část: strukturovaný formát (doplňování do matice/tabulky) + **úloha „z tabulky vyvoď“** (společné, rozdíly, důsledek pro…); alespoň jedna otevřená / aplikační otázka; summary + reflexe (co se propojilo, co nejasné).
- Odliš od \`schema\`: zde **direktivní** formát (daná pole), u schématu větší volnost topologie mapy.
- **NE** na začátku nového celku (žáci nemají co syntetizovat).`,pramen:`
### Formát: PRAMEN (historický zdroj → interpretace)
- Cíl: **kritická analýza pramene** — kdo, kdy, proč psal; co z toho plyne; ne opisování textu.
- Struktura: kontext pramene; autentický nebo věrohodně stylizovaný úryvek/obraz; úlohy k autorovi, účelu, biasu; závěr **Klíčová myšlenka / co jsme z pramene zjistili**; reflexe (souvislost s dneškem).
- Pramen musí mít uvedený zdroj; u citace krátký překlad nebo parafráze pro žáka.`,"casova-osa":`
### Formát: ČASOVÁ OSA (chronologie)
- Cíl: práce s **relativní a absolutní chronologií**, příčinami a důsledky v čase.
${n}
- Struktura: kontext epochy; min. 5 událostí s daty; úlohy seřaď/doplň/najdi souvislost; reflexe: která událost byla zlomová a proč.`,dilema:`
### Formát: DILEMA (rozhodovací hra v historické situaci)
- Cíl: vžít se do situace, **etické a příčinné uvažování**; historicky uvěřitelné, věkově přiměřené.
- Struktura: scénář; volby A/B/C s důsledky; otevřená otázka proč; sekce **Skutečnost** — co se opravdu stalo; reflexe současnosti.`,roleplay:`
### Formát: ROLEPLAY (pohled historické postavy)
- Cíl: pochopit kontext z pozice účastníka (status, povinnosti, každodenní život).
- Struktura: karta postavy (kdo jsi, role); situace / den; rozhodnutí nebo krátký produkt (dopis, popis); porovnání s dneškem.`,detektiv:`
### Formát: DETEKTIVKA (rekonstrukce z fragmentů)
- Cíl: z pramenů, mapy a nálezů **hypotéza → test → závěr** („historik jako detektiv“).
- Struktura: zadání záhady; 3–5 stop; postupné odhalování; závěr a srovnání se skutečností.`,"mapa-udalosti":`
### Formát: MAPA + UDÁLOSTI
- Cíl: propojit **prostor a čas** — kde se co odehrálo, trasy, bitvy.
- Struktura: historická mapa; seznam událostí/lokací; úkol zakreslit nebo spojit; otázka proč právě tam (geografie ovlivňuje děj).`,"algoritmicky-navod":`
### Formát: ALGORITMICKÝ NÁVOD (informatika)
- Cíl: převést problém na přesný postup, který může provést člověk nebo stroj.
- Struktura: problém a omezení; vstupy/výstupy; návrh kroků; 2–3 testovací případy; oprava postupu; reflexe, kdy by postup selhal.
- Pokud je v metodice uveden appletType, pracovní list musí říct, co žák v miniaplikaci spouští/krokuje a co zapisuje zpět na papír.`,debugging:`
### Formát: DEBUGGING (informatika)
- Cíl: najít příčinu chyby v postupu, datech, modelu nebo programu; nestačí jen napsat správnou odpověď.
- Struktura: očekávaný výsledek; skutečný výsledek; stopa/krokování; hypotéza chyby; oprava; ověření na novém testu.
- Vždy vyžaduj větu „Chyba vznikla proto, že…“.`,"data-lab":`
### Formát: DATA LAB (informatika)
- Cíl: získat z dat informaci, interpretovat data a odhalit slabinu nebo chybu interpretace.
- Struktura: otázka; malý dataset/tabulka/graf; predikce; práce s filtrem/tříděním/grafem; závěrečné tvrzení podložené daty; limit dat.
- Nevytvářej úlohy, které jen opisují jednu hodnotu. Aspoň jedna úloha musí vyžadovat interpretaci nebo porovnání.`,modelovani:`
### Formát: MODELOVÁNÍ (informatika)
- Cíl: vytvořit model situace a popsat, co model zjednodušuje, zanedbává nebo neumí.
- Struktura: popis situace; prvky modelu; vztahy/pravidla; diagram/tabulka/graf; test modelu změnou vstupu; limity modelu.
- Žák musí uvést, k čemu je model dobrý a kde selhává.`,"programovaci-mise":`
### Formát: PROGRAMOVACÍ MISE (informatika)
- Cíl: vytvořit funkční program/prototyp podle zadání a ověřit ho testy.
- Struktura: scénář; požadavky; rozklad na části; implementační kroky; testovací případy; checklist splnění; reflexe úprav.
- Nepiš jen návod „klikni na blok“. Každý krok spoj s důvodem nebo testem.`,"systemova-evidence":`
### Formát: SYSTÉMOVÁ EVIDENCE (informatika)
- Cíl: navrhnout jednoduchý informační systém nebo evidenci dat.
- Struktura: účel systému; uživatelé/role; záznamy a atributy; pravidla validace; testovací záznamy; rizika soukromí a zbytečných dat.
- Systém musí odpovídat konkrétní otázce nebo potřebě, ne být jen tabulkou pro tabulku.`,"technologie-bezpecnost":`
### Formát: TECHNOLOGIE A BEZPEČNOST (informatika)
- Cíl: porozumět principu digitální technologie a udělat bezpečné/etické rozhodnutí.
- Struktura: konkrétní scénář; princip fungování; volby a dopady; rozhodovací strom/checklist; doporučení s odůvodněním.
- Vyhni se moralizování. Rozhodnutí musí vycházet z principu, rizika nebo dat.`,"ai-lab":`
### Formát: AI LAB (informatika)
- Cíl: pochopit základní princip modelu učeného z dat, chyby modelu a bias.
- Struktura: co model vidí; trénovací data; testovací příklady; predikce; omyly; úprava dat nebo pravidel použití; bezpečnostní/etická reflexe.
- AI není autorita. Žák má ověřit výstup, popsat limit modelu a navrhnout, kdy je nutná kontrola člověkem.`};return d[e]||d.procvicovaci}function So(e){const t={badatelsky:"Zobraz data čistě (TABLE / PARAGRAPH u zdroje). Odděl hypotézu, důkaz a závěr; poslední blok FREE-ANSWER nebo INFOBOX pro hlavní závěr; prostor pro reflexi. Žádná interpretace hned pod surovými daty v jednom sloupci s úlohami.",schema:"Velká plocha pro mapu (volitelně poloviční sloupec + nápověda); u pojmové mapy jasné popisky hran. Pool pojmů bokem; FREE-ANSWER na vysvětlení 2 hran. Reflexe na spodku.",ctenarska:"Hlavní text oddělený, vysoká čitelnost; úlohy v bloku až po pasážích, ke kterým se vztahují. Box slovní zásoby u textu. Místo na značky/REFLEXE po čtení (FOOTER může být metakognice).",vyzkumny:"Číslované HEADING/SECTION, záznamová tabulka, checklist kroků, dost řádků v FREE-ANSWER. Bezpečnost terénu v INFOBOX. Šablona výstupu (plakát / body prezentace) + reflexe.",procvicovaci:"Worked example nahoře; pak gradované bloky. Klíč nebo místo na sebehodnocení (oddělitelně). Skákej mezi formáty úloh. Bonusový obtížnější úkol stranou.",prehledovy:"Centrální matice nebo osa (TABLE); méně drobností, více FREE-ANSWER pro syntézu a srovnání. Reflexe „co se propojilo“. INFOBOX s klíčovými pojmy stranou.",pramen:"SOURCE-BOX pro pramen (citace + překlad); úlohy pod ním; závěrečný FREE-ANSWER pro klíčovou myšlenku; zdroj v patičce bloku.","casova-osa":"Horizontální timeline nebo TABLE s daty; doplňovačky mezi body; reflexe na zlomovou událost.",dilema:"Scénář nahoře; volby jako MCQ nebo choice-card; sekce Skutečnost odděleně; transfer do dneška v reflexi.",roleplay:"Role-card nahoře (portrét + atributy); situace v PARAGRAPH; rozhodovací FREE-ANSWER; porovnání s dneškem.",detektiv:"Postupné sekce stop (pramen, mapa, nález); hypotéza v FREE-ANSWER; závěr vs. skutečnost.","mapa-udalosti":"Mapa dominantně; seznam událostí bokem; úkoly zakreslení/spojení tras.","algoritmicky-navod":"Sekce PROBLÉM → VSTUPY/VÝSTUPY → KROKY → TESTY → OPRAVA. Vhodný je code/trace box nebo tabulka kroků; dole reflexe, kdy postup selže.",debugging:"Debug log: očekávaný výsledek, skutečný výsledek, stopa/kroky, hypotéza chyby, oprava, ověření. Zvýrazni větu „Chyba vznikla proto, že…“.","data-lab":"Dataset nebo graf jako dominantní zdroj; vedle/níže predikce, filtrování/třídění, interpretace a limit dat. Závěr musí být podložen daty.",modelovani:"Velký diagram/model; samostatné boxy pro prvky, vztahy, pravidla a limity. Přidej úlohu „změň vstup / parametr a vysvětli dopad“.","programovaci-mise":"Mission brief nahoře; požadavky/checklist; kroky implementace; testovací případy; debug/reflexe. Nezahlť stránku dlouhým návodem ke klikání.","systemova-evidence":"Tabulka/evidence dominantně; sekce účel, uživatelé/role, atributy, validační pravidla, testovací záznamy, rizika dat.","technologie-bezpecnost":"Scénář nahoře; princip technologie jako schéma; rozhodovací strom nebo checklist; doporučení s odůvodněním. Přidej bezpečnostní riziko a prevenci.","ai-lab":"Rozděl trénovací data, testovací data, predikce a chyby. Musí být místo pro limit modelu, bias a rozhodnutí, kdy je nutná kontrola člověkem."};return t[e]||t.procvicovaci}async function No(e){if(e.length===0)return console.log("[translateImageCaptions] Žádné obrázky k překladu."),e;console.log(`[translateImageCaptions] Překládám popisky ${e.length} obrázků...`);const t=e.map((n,d)=>({i:d,title:n.title,description:n.description||""})),o=`Přelož následující popisky obrázků do češtiny. Zachovej věcnost a stručnost. Odpověz POUZE jako JSON pole ve formátu:
[{"i": 0, "title": "...", "description": "..."}]

Popisky k překladu:
${JSON.stringify(t,null,2)}`;try{console.log("[translateImageCaptions] Volám Gemini Flash...");const n=await _([{role:"user",content:o}],"gemini-3-flash",{max_tokens:4096});console.log("[translateImageCaptions] Odpověď přijata, parsuju JSON...");const d=n.match(/\[[\s\S]*\]/);if(!d)return console.warn("[translateImageCaptions] Nenalezen JSON v odpovědi, vracím originály."),e;const r=JSON.parse(d[0]),i=[...e];for(const p of r)p.i>=0&&p.i<i.length&&(i[p.i]={...i[p.i],title:p.title||i[p.i].title,description:p.description||i[p.i].description});return console.log(`[translateImageCaptions] ✅ Přeloženo ${r.length} popisků.`),i}catch(n){return console.error("[translateImageCaptions] Chyba překladu:",n),e}}async function mt(e){try{const t=localStorage.getItem(`vivid-doc-${e}`);if(t){const o=JSON.parse(t);if(o?.content)return o.content.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}}catch{}try{const{data:t}=await Ie.from("user_documents").select("content").eq("id",e).single();if(t?.content)return(typeof t.content=="string"?t.content:JSON.stringify(t.content)).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}catch{}return null}async function Lo(e,t){let o=null;try{const y=localStorage.getItem(`vivid-doc-${e}`);if(y){const w=JSON.parse(y);w?.content&&(o=w.content)}}catch{}if(!o)try{const{data:y}=await Ie.from("user_documents").select("content").eq("id",e).single();y?.content&&(o=typeof y.content=="string"?y.content:JSON.stringify(y.content))}catch{}if(!o)return null;const n=y=>{const w=String(y||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu," ").replace(/\s+/g," ").trim();return/(^|\s)(galerie|skupina obrazku|obrazkova galerie|prehled obrazku)(\s|$)/i.test(w)},d=(y,w)=>{if(w<2)return!1;const C=String(y||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return/(galerie|srovnani|porovnani|typy|druhy|faze|postup|serie|timeline)/i.test(C)};let r=[];try{const y=localStorage.getItem(`vivid-doc-${e}`);if(y){const w=JSON.parse(y);Array.isArray(w?.sectionImages)&&(r=w.sectionImages)}}catch{}const i=new Map;for(const y of r){const w=(y.heading||"").toLowerCase().trim();if(!w||n(y.heading))continue;const C=y.imageSteps?.[0]?.url||y.imageUrl||"";C&&i.set(w,{url:C,title:y.heading||"",caption:y.imageSteps?.[0]?.description||y.heading||"",imageSteps:y.imageSteps})}const p=[...(t.media?.generatedIllustrations||[]).map(y=>({url:y.url||"",title:y.name||y.title||"",caption:y.name||y.title||""})),...(t.media?.generatedPhotos||[]).map(y=>({url:y.url||"",title:y.name||y.title||"",caption:y.name||y.title||""})),...(t.media?.generatedMapBetaImages||[]).map(y=>({url:y.url||"",title:y.name||y.title||"Mapa",caption:y.name||y.title||"Mapa"})),...(t.media?.generatedEnvironment3dImages||[]).map(y=>({url:y.url||"",title:y.name||y.title||"3D prostředí",caption:y.name||y.title||"3D prostředí",isPanorama:!0})),...(t.media?.images||[]).map(y=>{const w=[y.source,y.license].filter(Boolean).join(" • ");return{url:y.webUrl||y.url||"",title:y.title||"",caption:w?`${y.title||""}
${w}`:y.title||""}})].filter(y=>!!y.url),s=[],u=/<(h1|h2|h3|h4|p|ul|ol|blockquote)[^>]*>([\s\S]*?)<\/\1>/gi;let f;for(;(f=u.exec(o))!==null;){const y=f[1].toLowerCase(),w=f[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();w&&s.push({tag:y,html:f[0],text:w})}if(s.length===0)return null;const g=/^(shrnut[ií]|v[eě]d[eě]li jste|pozor|tip\b|poznámka|zajímavost|důležit[eé] pojm)/i,m=y=>{const w=y.toLowerCase();return/shrnut/.test(w)?"green":/v[eě]d[eě]li/.test(w)?"blue":/pozor/.test(w)?"yellow":/tip/.test(w)?"purple":"blue"},a=y=>{if(y.tag==="h1")return"h1";if(y.tag==="h2")return"h2";if(y.tag==="h3"||y.tag==="h4")return"h3";if(y.tag==="blockquote")return"blockquote";if(y.tag==="ul"||y.tag==="ol")return"list";const w=y.text.trim();return g.test(w)?"infobox-heading":w.length<=80&&!/[.!?;]$/.test(w)&&!w.startsWith("📚")?"section-heading":"paragraph"},v=[];let l={headingText:null,headingLevel:"h2",paragraphs:[],infoboxes:[],lists:[]};const h=()=>{(l.headingText!==null||l.paragraphs.length>0||l.infoboxes.length>0)&&v.push(l)};for(let y=0;y<s.length;y++){const w=s[y],C=a(w);if(C==="h1"||C==="h2"||C==="h3"||C==="section-heading"){h();const M=C==="h1"?"h1":C==="h3"||C==="section-heading"?"h3":"h2";l={headingText:w.text,headingLevel:M,paragraphs:[],infoboxes:[],lists:[]}}else if(C==="infobox-heading"){const M=m(w.text),G=s[y+1],U=G&&a(G)==="paragraph"?G.html:"";U&&y++,l.infoboxes.push({title:w.text,html:U,variant:M})}else C==="blockquote"?l.infoboxes.push({title:"",html:w.html,variant:"blue"}):C==="list"?l.lists.push(w):C==="paragraph"&&l.paragraphs.push(w)}if(h(),v.length===0)return null;const c=v.filter(y=>!n(y.headingText)),b=c.filter(y=>y.paragraphs.length>0),k=new Set,z=new Set(Array.from(i.values()).map(y=>y.url)),A=p.filter(y=>!z.has(y.url)),O=b.filter(y=>!i.has((y.headingText||"").toLowerCase().trim()));if(A.length>0&&O.length>0){const y=Math.max(1,Math.ceil(O.length/A.length));let w=0;for(let C=0;C<O.length&&w<A.length;C+=y)k.add(c.indexOf(O[C])),w++}let E=0;const D=(y,w)=>{if(y.headingLevel==="h1")return"G";const C=y.infoboxes.length>0,M=y.paragraphs.reduce((G,U)=>G+U.text.length,0);return w&&C?E%2===0?"B+G+I":"B2+G+I":w?["A","B","A2","B2"][E%4]:C?"C+I":M>350?"C":"G"};let L=0,x=0;const P=[],$={heading:(y,w,C=12)=>({id:T(),type:"heading",order:L++,width:C<12?"half":"full",gridSpan:C,content:{text:Ut(y),level:w}}),para:(y,w=12,C)=>({id:T(),type:"paragraph",order:L++,width:w<12?"half":"full",gridSpan:w,content:C?{html:Ge(y),columns:C}:{html:Ge(y)}}),img:(y,w=6)=>({id:T(),type:"image",order:L++,width:w<12?"half":"full",gridSpan:w,content:{url:y.url,alt:y.title,caption:y.caption,alignment:"center",size:100,...y.isPanorama?{mediaKind:"panorama",isPanorama:!0,projection:"equirectangular-360-aerial"}:{}}}),floatImg:(y,w,C,M)=>({id:T(),type:"image",order:L++,width:"half",gridSpan:C,floatSide:w,floatSpanBlocks:M,floatGridSpan:C,content:{url:y.url,alt:y.title,caption:y.caption,alignment:"center",size:100,...y.isPanorama?{mediaKind:"panorama",isPanorama:!0,projection:"equirectangular-360-aerial"}:{}}}),gallery:(y,w,C,M,G)=>({id:T(),type:"image",order:L++,width:"half",gridSpan:C,floatSide:w,floatSpanBlocks:M,floatGridSpan:C,content:{url:y[0]||"",alt:"",caption:"",alignment:"center",size:100,gallery:y,galleryLayout:"grid",gridColumns:G}}),infobox:(y,w=12)=>({id:T(),type:"infobox",order:L++,width:w<12?"half":"full",gridSpan:w,content:{title:y.title,html:y.html,variant:y.variant}}),inlineGallery:(y,w,C,M=12)=>({id:T(),type:"image",order:L++,width:"full",gridSpan:M,content:{url:y[0]||"",alt:w[0]||"",caption:"",alignment:"center",size:100,gallery:y,galleryCaptions:w,galleryLayout:"grid",gridColumns:Math.min(C,y.length)}})};!c.some(y=>y.headingLevel==="h1")&&t.topic&&P.push($.heading(t.topic,"h1",12)),c.forEach((y,w)=>{const C=i.get((y.headingText||"").toLowerCase().trim())||null;C||k.has(w);const M=C||(k.has(w)&&x<A.length?A[x]:null),G=C?.imageSteps?.filter(S=>!!S.url)||[],U=d(y.headingText,G.length);if(y.headingLevel==="h1"){y.headingText&&P.push($.heading(y.headingText,"h1",12));for(const S of y.paragraphs)P.push($.para(S.html,12));for(const S of y.lists)P.push($.para(S.html,12));for(const S of y.infoboxes)P.push($.infobox(S,12));return}if(U){y.headingText&&P.push($.heading(y.headingText,y.headingLevel,12));for(const I of y.paragraphs)P.push($.para(I.html,12));for(const I of y.lists)P.push($.para(I.html,12));for(const I of y.infoboxes)P.push($.infobox(I,12));const S=G.map(I=>I.url),N=G.map(I=>I.description||I.name||"");P.push($.inlineGallery(S,N,Math.min(G.length,4))),E++;return}const q=D(y,!!M);M?(C||x++,E++):y.paragraphs.length>0&&E++;const K=y.headingLevel,R=y.paragraphs[0],Q=y.paragraphs.slice(1),H=y.infoboxes[0],W=y.infoboxes.slice(1);switch(q){case"A":y.headingText&&P.push($.heading(y.headingText,K,12)),R&&M?(P.push($.para(R.html,6)),P.push($.img(M,6))):R&&P.push($.para(R.html,12));break;case"A2":y.headingText&&P.push($.heading(y.headingText,K,12)),R&&M?(P.push($.img(M,6)),P.push($.para(R.html,6))):R&&P.push($.para(R.html,12));break;case"B":M?(P.push($.floatImg(M,"left",6,y.headingText?2:1)),y.headingText&&P.push($.heading(y.headingText,K,6)),R&&P.push($.para(R.html,6))):(y.headingText&&P.push($.heading(y.headingText,K,12)),R&&P.push($.para(R.html,12)));break;case"B2":M?(P.push($.floatImg(M,"right",6,y.headingText?2:1)),y.headingText&&P.push($.heading(y.headingText,K,6)),R&&P.push($.para(R.html,6))):(y.headingText&&P.push($.heading(y.headingText,K,12)),R&&P.push($.para(R.html,12)));break;case"C":y.headingText&&P.push($.heading(y.headingText,K,12)),R&&P.push($.para(R.html,12,2));break;case"C+I":y.headingText&&P.push($.heading(y.headingText,K,12)),R&&P.push($.para(R.html,8)),H&&P.push($.infobox(H,4));break;case"B+G+I":{M&&P.push($.floatImg(M,"left",5,3)),y.headingText&&P.push($.heading(y.headingText,K,7)),R&&P.push($.para(R.html,7)),P.push($.infobox(H||{title:"Klíčové pojmy",html:"<p>Doplňte klíčové pojmy...</p>",variant:"blue"},7));break}case"B2+G+I":{M&&P.push($.floatImg(M,"right",5,3)),y.headingText&&P.push($.heading(y.headingText,K,7)),R&&P.push($.para(R.html,7)),P.push($.infobox(H||{title:"Klíčové pojmy",html:"<p>Doplňte klíčové pojmy...</p>",variant:"blue"},7));break}default:y.headingText&&P.push($.heading(y.headingText,K,12)),R&&P.push($.para(R.html,12));break}for(const S of Q)P.push($.para(S.html,12));for(const S of y.lists)P.push($.para(S.html,12));const je=q==="C+I"||H?W:y.infoboxes;for(const S of je)P.push($.infobox(S,12))});const J=t.media?.charts||[];for(const y of J){if(!y.columns||!y.rows||y.rows.length===0)continue;const w={id:`chart-${y.id||Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:"chart",order:P.length,width:"full",gridSpan:12,content:{chartType:y.chartType||"bar",chartTitle:y.title||"",chartColumns:y.columns,chartRows:y.rows,chartHeight:320}};P.push(w)}const X=ye(P);return console.log(`[loadSourceTextAsBlocks] ${c.length}/${v.length} sekcí → ${X.length} bloků, ${i.size} H2→img mapování, ${x}/${A.length} fallback obrázků, ${J.length} grafů`),X.length>0?X:null}const Ee=[];let ie="";function _e(e){Ee.push(e),kt()}function Be(){Ee.pop(),kt()}function fe(){return Ee[Ee.length-1]??{folderId:null,adminFolderId:null,storageMode:"auto"}}function kt(){const e=fe();e.folderId,e.adminFolderId,e.storageMode}const le=e=>typeof e=="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e),Ro={tema:"topic",rocnik:"grade",predmet:"subject",podklady:"context","podklady z datasetu":"context",dataset:"context","poznamky ucitele":"feedback","zpetna vazba":"feedback",media:"mediaSection","obrazky a ilustrace":"imageList",ilustrace:"illustrationList",fotky:"photoList",fotografie:"photoList","obrazky z webu":"imageList","galerie obrazku":"imageGroupList","3d prostredi":"environment3dList","360 prostredi":"environment3dList",prostredi3d:"environment3dList","rag vzory":"ragSection","podobne vzory":"ragSection","zdrojovy text":"sourceTextSection","pravidla pro obrazky":"boardImageRules","pocet abc otazek":"boardAbcCount",obtiznost:"difficultyLabel","temata bloku":"topicsBlock","vystupy rvp":"rvpOutputs","klicove pojmy":"keyTermsList",fakta:"keyFactsList",osobnosti:"personalitiesList","casova osa":"timelineList","vychozi instrukce testu":"testDefaultInstructions",vizualy:"allVisuals"};function Mo(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g," ")}function Je(e,t){const o=e[t];if(o!=null)return String(o);const n=Ro[Mo(t)],d=n?e[n]:void 0;return d==null?n?"":t:String(d)}function ee(e){return ie.trim()?ie.replace(/\[\[([^\]]+)\]\]/g,(t,o)=>Je(e,o)).replace(/\{([a-zA-Z0-9_]+)\}/g,(t,o)=>Je(e,o)):null}function B(e,t){return Jt(e,t)}function Do(e){const t=e.replace(/\s+/g," ").trim();return t.includes("Napiš PODROBNÝ výukový text")&&t.includes("FORMÁT TEXTU")&&t.includes("## 📚 Důležité pojmy")&&!t.includes("## ... další sekce ...")}function Fo(e){const t=e.replace(/\s+/g," ").trim().toLowerCase();return t.includes("contentplan")||t.includes("výstup: pouze validní json")||t.includes("vrať pouze validní json")||t.includes("odpovídáš výhradně validním json")||t.includes('"sections"')||t.includes("selectedimages")}function ht(e){return(e.match(/^##\s+\S.*$/gm)||[]).length}function vt(e){return e.replace(/<[^>]+>/g," ").split(/\s+/).filter(t=>t.trim().length>1).length}function Ze(e){const t=e.trim();if(!t)return!0;const o=ht(t),n=vt(t),d=/důležit[éeèê]\s+(pojmy|data|osobnosti)/i.test(t),r=/(?:ObrázekH2|IlustraceH2|FotkaH2|SkupinaH2|Prostredi3dH2)\s*:?\s*$/i.test(t);return o<4||n<350||!d||r}const Me=[1500,4e3,8e3];function _o(e){return new Promise(t=>setTimeout(t,e))}function Bo(e){const t=(e instanceof Error?e.message:String(e)).toLowerCase();return/\b(429|500|502|503|504)\b/.test(t)||/rate|quota|overload|temporar|timeout|network|empty or invalid json|invalid json|empty response|empty ai response/.test(t)}function Uo(e){const t=B(e,"text");return[...new Set([t,Re.PRO_CZECH,Re.PRO_LEGACY,Re.FLASH_LEGACY])]}async function Ye(e,t,o){let n;for(let d=0;d<=Me.length;d+=1)try{const r=await _(e,t,{temperature:o.temperature,max_tokens:o.max_tokens,persistToGlobalThread:!1});if(!r.trim())throw new Error("Empty AI response");return r}catch(r){if(n=r,!(Bo(r)&&d<Me.length))break;console.warn("[Generator] Text AI call failed, retrying",{model:t,attempt:d+1,error:r instanceof Error?r.message:String(r)}),await _o(Me[d])}throw n}async function Ko(e,t){const o=`

DŮLEŽITÉ: Předchozí pokus byl neúplný nebo skončil u media direktivy.
Vygeneruj znovu CELÝ výukový text od začátku až po závěrečné sekce.
Neukončuj odpověď po řádku IlustraceH2/FotkaH2/ObrázekH2/SkupinaH2/Prostredi3dH2.
Každý H2 musí mít po případné media direktivě normální odstavcový text.`;let n;for(const d of Uo(t))try{let r=await Ye([{role:"user",content:e}],d,{temperature:.7,max_tokens:8192});if(!Ze(r)||(console.warn("[Generator] Text response looked incomplete, retrying once",{h2Count:ht(r),wordCount:vt(r),model:d}),r=await Ye([{role:"user",content:`${e}${o}`}],d,{temperature:.65,max_tokens:8192}),!Ze(r)))return r}catch(r){n=r,console.warn("[Generator] Text generation failed on model, trying fallback",{model:d,error:r instanceof Error?r.message:String(r)})}throw n instanceof Error?n:new Error(String(n))}function ce(e){const{folderId:t}=fe(),o={...e,blocks:ye(e.blocks||[])};return Kt(o,{folderId:t??null}),o}function be(e){fe().storageMode!=="admin"&&xe(e)}function te(e){const{storageMode:t,adminFolderId:o}=fe();return t==="admin"?Vt(e,{folderId:o}):qt(e)}function Vo(e,t){const{folderId:o}=fe();rt({...e,folderId:o??null},t)}async function qo(e,t,o,n,d){console.log(`[Generator] Generating ${t} from DataSet:`,e.topic,"folder:",n),_e({folderId:n??null,storageMode:d?.storageMode??"auto",adminFolderId:le(d?.adminFolderId)?d.adminFolderId:le(n)?n:null}),ie="";try{if(t==="test-abc-6")return await he(e,"abc-6",d?.promptOverride,o);if(t==="pisemka-reflexe-6")return await he(e,"reflection-6",d?.promptOverride,o);let r=t;try{const i=await Ht("creator",e.subjectCode,e.grade),p=i.resolvedConfig.materialProfile?.enabledTypes||[];if(p.length>0&&!p.includes(t))return{success:!1,error:`Typ materiálu "${t}" není pro ${e.subjectCode}/${e.grade} povolen v Creator configu.`};const u=Gt(i.resolvedConfig,e.subjectCode).find(f=>f.id===t);u?.prompt&&(ie=u.prompt),u&&u.baseType&&u.baseType!==t&&(r=u.baseType)}catch(i){console.warn("[Generator] Creator config lookup failed, falling back to code defaults:",i)}d?.promptOverride?.trim()&&(ie=d.promptOverride.trim());try{switch(r){case"text":return await cn(e);case"board-easy":return await Qe(e,"easy");case"board-hard":return await Qe(e,"hard");case"worksheet":return await Zo(e,o);case"textbook-page":{const i=(e.generatedMaterials??[]).find(s=>s.type==="text"),p=i?.id?await mt(i.id):null;return p&&(console.log("[Generator] Nalezen učební text, použiji ho jako zdroj pro list učebnice"),o?.("source-text","Načten učební text jako zdroj obsahu...")),await on(e,o,p??void 0)}case"test":return await he(e,"mixed",void 0,o);case"test-abc-6":return await he(e,"abc-6");case"pisemka-reflexe-6":return await he(e,"reflection-6");case"lesson":return await dn(e);case"lessons":return await mn(e);case"methodology":return await kn(e);case"hodnoceni":return await hn(e);case"vocabulary-set":return(e.subjectCode||"").toLowerCase()==="zemepis"?await Cn(e,o):await xn(e,o);case"grammar-lesson":return await Nn(e,o);case"reading-activity":return await Ln(e,o);case"writing-activity":return await Rn(e,o);case"speaking-activity":return await Mn(e,o);case"language-quiz":return await Dn(e,o);case"listening-activity":return await Fn(e,o);case"unit-plan":return await _n(e);default:return{success:!1,error:`Neznámý typ materiálu: ${t}`}}}finally{ie=""}}finally{Be()}}async function Ho(e,t,o){t?.("rag","Hledám podobné pracovní listy v RAG databázi...");const n=e.content?.keyTerms?.map(f=>f.term)??[],d=await Se({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:n,matchCount:3}),r=Ne(d);t?.("rag-done",`Nalezeno ${d.length} podobných listů v RAG databázi`,{examples:d,ragSection:r});const i=Fe(e,{plFormatId:o?.plFormatId===null||o?.plFormatId===void 0?void 0:o.plFormatId}),p={plFormatId:i.plFormatId,worksheetPlMethodSource:i.worksheetPlMethodSource,scaffoldLevel:o?.scaffoldLevel,promptOverride:o?.promptOverride};t?.("agent1",`Agent 1: Plánuji obsah prac. listu (formát: ${p.plFormatId})...`);const s=await Le(e,r,"worksheet",void 0,p,t);if(!s.ok)return{success:!1,error:s.error||"Agent 1 selhal — nepodařilo se sestavit plán obsahu"};const u=s.plan;return t?.("agent1-done",`Agent 1 hotovo — ${u.sections.length} sekcí, obtížnost: ${u.difficulty}, ${u.estimatedTimeMinutes} min`),{success:!0,contentPlan:u,ragCount:d.length,resolvedPlFormatId:p.plFormatId}}async function Go(e,t,o,n,d){_e({folderId:n??null,storageMode:d?.storageMode??"admin",adminFolderId:le(d?.adminFolderId)?d.adminFolderId:le(n)?n:null});try{o?.("agent2","Skládám pracovní list jako sazbu stránek (designer composer)…");const r=it(e,t),i=r.blocks;ft(r.diagnostics,o),o?.("agent2-done",`Sestaveno ${i.length} bloků (${r.diagnostics.pageCount} str.)`),o?.("saving","Ukládám pracovní list...");const p=crypto.randomUUID(),s={id:p,title:t.title||`${e.topic} - Pracovní list`,blocks:i,settings:{showAnswerKey:!0,pageSize:"A4",margins:"normal"},metadata:st(e,t),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return ce(s),o?.("done",`Uloženo (${i.length} bloků)`),{success:!0,id:p,preview:yt(r.diagnostics),generationMethod:"two-agent",contentPlan:t,worksheet:{...s,blocks:ye(s.blocks||[])}}}finally{Be()}}function oe(e){const t=[];e.rvp?.expectedOutcomes?.length>0&&(t.push("🎯 OČEKÁVANÉ VÝSTUPY RVP:"),e.rvp.expectedOutcomes.forEach(r=>{t.push(`• ${r}`)}),t.push(""));const o=e.rvp?.competencies;o?.length>0&&(t.push("🔑 KLÍČOVÉ KOMPETENCE:"),o.forEach(r=>{t.push(`• ${r}`)}),t.push("")),e.content?.keyTerms?.length>0&&(t.push("📖 KLÍČOVÉ POJMY:"),e.content.keyTerms.forEach(r=>{t.push(`• ${r.term} — ${r.definition}`)}),t.push("")),e.content?.keyFacts?.length>0&&(t.push("✓ KLÍČOVÁ FAKTA:"),e.content.keyFacts.forEach(r=>{t.push(`• ${r}`)}),t.push("")),e.content?.timeline&&e.content.timeline.length>0&&(t.push("📅 ČASOVÁ OSA:"),e.content.timeline.forEach(r=>{t.push(`• ${r.year||r.date||""}: ${r.event||r.description||""}`)}),t.push("")),e.content?.personalities&&e.content.personalities.length>0&&(t.push("👤 OSOBNOSTI:"),e.content.personalities.forEach(r=>{t.push(`• ${r.name} — ${r.description}`)}),t.push(""));const n=e.media?.images||[],d=[...e.media?.generatedIllustrations||[],...e.media?.generatedMapBetaImages||[],...e.media?.generatedEnvironment3dImages||[]];return(n.length>0||d.length>0)&&(t.push("🖼️ DOSTUPNÉ VIZUÁLY:"),n.forEach((r,i)=>{t.push(`  - Obrázek: "${r.title}"`)}),d.forEach((r,i)=>{t.push(`  - Ilustrace: "${r.name}"`)})),e.content?.userFeedback&&(t.push(""),t.push("⚠️ DŮLEŽITÉ POKYNY OD UŽIVATELE (musíš je respektovat!):"),t.push(e.content.userFeedback),t.push("")),t.join(`
`)}function pe(e){try{const t=localStorage.getItem("generator_feedback");if(console.log("[Feedback] Raw localStorage:",t),!t)return console.log("[Feedback] No feedback found in localStorage"),"";const o=JSON.parse(t);console.log("[Feedback] Parsed history:",o);const n=o[e]||[];if(console.log(`[Feedback] For type "${e}":`,n),n.length===0)return console.log("[Feedback] No feedback for this type"),"";const d=`

DŮLEŽITÉ POKYNY OD UŽIVATELE (musíš je respektovat!):
${n.map(r=>`- ${r}`).join(`
`)}`;return console.log("[Feedback] Adding to prompt:",d),d}catch(t){return console.error("[Feedback] Error:",t),""}}function gt(e){const t=[],o=e.split(`
`);let n=0,d=!1;for(t.push("HEADER:"),t.push(""),d=!0;n<o.length;){const r=o[n].trim();if(!r){n++;continue}if(/^(HEADER|FOOTER|HEADING|PARAGRAPH|INFOBOX|OBRÁZEK|IMAGE|MULTIPLE-CHOICE|FILL-BLANK|FREE-ANSWER|CONNECT-PAIRS|TABLE):/i.test(r)){if(r.toUpperCase().startsWith("HEADER:")&&d){n++;continue}t.push(""),t.push(r),n++;continue}if(r.startsWith("#")){const i=r.replace(/^#+\s*/,"").trim();t.push(""),t.push(`HEADING: ${i}`),n++;continue}if(r.startsWith("❓")||/^[0-9]+\.\s*❓/.test(r)){const i=r.replace(/^[0-9]*\.?\s*❓\s*/,"").trim();for(t.push(""),t.push("MULTIPLE-CHOICE:"),t.push(i),n++;n<o.length;){const p=o[n].trim();if(/^[A-D]\)/.test(p))t.push(p),n++;else break}continue}if(r.startsWith("📝")||r.toLowerCase().includes("doplň:")){let i=r.replace(/^[0-9]*\.?\s*📝\s*(Doplň:?\s*)?/i,"").trim();if(i=i.replace(/^Doplň:?\s*/i,"").trim(),i.includes("___")&&i.includes("="))t.push(""),t.push("FILL-BLANK:"),t.push(i);else if(i.includes("___")){const p=i.match(/\(([^)]+)\)/);if(p){const s=p[1];i=i.replace(/\([^)]+\)/,""),t.push(""),t.push("FILL-BLANK:"),t.push(`${i.trim()} = ${s}`)}else t.push(""),t.push("FILL-BLANK:"),t.push(`${i} = ???`)}else t.push(""),t.push("FILL-BLANK:"),t.push(i.includes("=")?i:`${i} = ???`);n++;continue}if(r.startsWith("✍️")){const i=r.replace(/^[0-9]*\.?\s*✍️\s*/,"").trim();t.push(""),t.push("FREE-ANSWER:"),t.push(i),n++;continue}if(r.startsWith("**")&&r.includes(":**")){const i=r.replace(/\*\*/g,"").replace(/:/," - ");t.push(""),t.push("INFOBOX:"),t.push(i),n++;continue}if(r.toLowerCase().includes("zpětná vazba")||r.includes("😊")||r.includes("😐")||r.includes("☹️")){for(t.push(""),t.push("FOOTER:"),t.push(r),n++;n<o.length;){const i=o[n].trim();if(!i)break;t.push(i),n++}continue}if(r.toLowerCase().includes("jméno")&&r.includes("třída")){n++;continue}if(/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ][a-záčďéěíňóřšťúůýž\s]+:/.test(r)&&r.length<150&&!r.toLowerCase().includes("poznámky")){t.push(""),t.push("INFOBOX:"),t.push(r.replace(":"," -")),n++;continue}if(r.length>80){for(t.push(""),t.push("PARAGRAPH:"),t.push(r),n++;n<o.length;){const i=o[n].trim();if(!i||/^(#|❓|📝|✍️|\*\*|[A-D]\)|HEADER|FOOTER|HEADING|PARAGRAPH)/i.test(i)||i.length<30)break;t.push(i),n++}continue}n++}return t.push(""),t.push("FOOTER:"),t.join(`
`)}async function Qe(e,t){console.log(`[Generator] Generating board (${t})...`);const o=oe(e),n=t==="easy"?5:6,d=pe(t==="easy"?"board-easy":"board-hard"),r=e.media?.images||[],i=[...e.media?.generatedIllustrations||[],...e.media?.generatedMapBetaImages||[],...e.media?.generatedEnvironment3dImages||[]];let p="";r.length>0&&(p+=`
🖼️ DOSTUPNÉ OBRÁZKY:
${r.map((g,m)=>`  ${m+1}. "${g.title}"`).join(`
`)}`),i.length>0&&(p+=`
🎨 DOSTUPNÉ ILUSTRACE:
${i.map((g,m)=>`  ${m+1}. "${g.name}"`).join(`
`)}`);const s=r.length>0||i.length>0?`- K 1-2 ABC otázkám SMÍŠ přidat obrázek — použij PŘESNÝ název ze seznamu výše
- Můžeš použít obrázky (🖼️) i ilustrace (🎨)
- Formát: OBRÁZEK: Přesný název ze seznamu`:`- ŽÁDNÉ obrázky nejsou k dispozici — ABSOLUTNĚ ZAKAZUJI:
  - Nepiš "na tomto obrázku", "na ilustraci", "co vidíš na obrázku"
  - Nepoužívej formát OBRÁZEK: ...
  - Pátej POUZE textové otázky bez jakéhokoliv odkazu na vizuální materiály`;console.log(`[Generator] Board media: ${r.length} images, ${i.length} illustrations`);const u=`Vytvoř interaktivní procvičování k tématu "${e.topic}" pro ${e.grade}. třídu.
Obtížnost: ${t==="easy"?"lehká":"těžší"}

${o}
${d||""}
${p}

===== STRUKTURA PROCVIČOVÁNÍ =====
Vygeneruj mix aktivit v tomto pořadí:
1. ${n-2}x ABC OTÁZKA (většina)
2. 1x SPOJOVAČKA (propojování dvojic)
3. 1x DOPLŇOVAČKA (doplnění slov do mezer)

===== FORMÁTY =====

ABC OTÁZKA:
OTÁZKA: Text otázky?
A) možnost
B) správná odpověď *
C) možnost
D) možnost

${r.length>0||i.length>0?`ABC OTÁZKA S OBRÁZKEM (použij název z 🖼️ OBRÁZKY nebo 🎨 ILUSTRACE):
OTÁZKA: Co je na tomto obrázku?
OBRÁZEK: Řecká helma hoplíta
A) Špatná odpověď
B) Správná odpověď *
C) Špatná odpověď
D) Špatná odpověď`:""}

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
${s}

ZAČNI GENEROVAT:`,f=ee({topic:e.topic,grade:e.grade,subject:e.subjectCode||"Dějepis",context:o,feedback:d,mediaSection:p,difficultyLabel:t==="easy"?"lehká":"těžší",questionCount:n,boardAbcCount:n-2,boardImageRules:s})||u;console.log("[Generator] Board prompt:",f);try{const g=await _([{role:"user",content:f}],B(e.subjectCode,"agent"),{temperature:.7,max_tokens:4096}),m=Jo(g,e,t);if(m.length===0)throw new Error("Nepodařilo se parsovat otázky z odpovědi");const a=crypto.randomUUID(),v={id:a,title:`${e.topic} - ${t==="easy"?"Lehké":"Těžké"} procvičování`,slides:m,settings:{showPoints:!0,allowBack:!0,shuffleSlides:!1,shuffleOptions:t==="hard",timeLimit:null,passingScore:60},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),sourceDatasetId:e.id};try{be(v)}catch(c){console.warn(`[Generator] localStorage failed for board ${a}:`,c)}if(!await te(v))throw new Error("Board se nepodařilo uložit do Supabase. Zkus generování spustit znovu.");const h=m.map((c,b)=>{const k=c;if(k.activityType==="abc"&&k.question&&k.options){const z=k.media?.url,A=z?`
🖼️ Obrázek: ${z.split("/").pop()?.split("?")[0]||"přiložen"}`:"",O=k.options.map(E=>`${E.label}) ${E.content}${E.isCorrect?" ✓":""}`).join(`
`);return`**ABC otázka ${b+1}:** ${k.question}${A}
${O}`}if(k.activityType==="connect-pairs"&&k.pairs){const z=k.pairs.map(A=>`${A.left?.content||""} ↔ ${A.right?.content||""}`).join(`
`);return`**🔗 Spojovačka:** ${k.instruction||"Spoj dvojice"}
${z}`}if(k.activityType==="fill-blanks"&&k.sentences){const z=k.sentences.map(A=>{const O=A.blanks?.[0]?.text||"";return`${A.text?.replace(/\[.*?\]/g,"___")} = ${O}`}).join(`
`);return`**✏️ Doplňovačka:** ${k.instruction||"Doplň slova"}
${z}`}return""}).filter(Boolean).join(`

`);return console.log("[Generator] Board saved:",a,"with",m.length,"slides"),{success:!0,id:a,preview:h}}catch(g){return console.error("[Generator] Board error:",g),{success:!1,error:String(g)}}}function Jo(e,t,o){const n=[];return e.split(/(?=OTÁZKA:|SPOJOVAČKA:|DOPLŇOVAČKA:)/i).filter(r=>r.trim()).forEach(r=>{const i=r.trim().split(`
`).filter(s=>s.trim());if(i.length<2)return;const p=i[0].trim();if(p.match(/^SPOJOVAČKA:/i)){const s=p.replace(/^SPOJOVAČKA:\s*/i,"").trim()||"Spoj správné dvojice",u=[];i.slice(1).forEach((f,g)=>{const m=f.match(/^(.+?)\s*\|\s*(.+)$/);m&&u.push({id:`pair-${g+1}`,left:{id:`left-${g+1}`,type:"text",content:m[1].trim()},right:{id:`right-${g+1}`,type:"text",content:m[2].trim()}})}),u.length>=2&&(n.push({...Dt(n.length),instruction:s,pairs:u}),console.log("[Parser] ✅ Created connect-pairs slide with",u.length,"pairs"));return}if(p.match(/^DOPLŇOVAČKA:/i)){const s=p.replace(/^DOPLŇOVAČKA:\s*/i,"").trim()||"Doplň chybějící slova",u=[];i.slice(1).forEach((f,g)=>{const m=f.match(/^(.+?___.*?)\s*=\s*(.+)$/);if(m){const a=m[1].trim(),v=m[2].trim(),l=`blank-${g+1}`,h=a.indexOf("___"),c=a.replace(/___/,`[${l}]`);u.push({id:`sentence-${g+1}`,text:c,blanks:[{id:l,text:v,position:h}]})}}),u.length>=1&&(n.push({...Ft(n.length),instruction:s,sentences:u,distractors:[]}),console.log("[Parser] ✅ Created fill-blanks slide with",u.length,"sentences"));return}if(p.match(/^OTÁZKA:/i)){const s=p.replace(/^OTÁZKA:\s*/i,"").trim();let u;const f=[];for(const g of i){const m=g.match(/^OBRÁZEK:\s*(.+)/i);if(m){const a=m[1].trim().toLowerCase(),v=t.media?.images?.find(l=>{const h=(l.title||"").toLowerCase();return h===a||h.includes(a)||a.includes(h)||h.replace(/[^a-z0-9]/g,"").includes(a.replace(/[^a-z0-9]/g,""))||a.replace(/[^a-z0-9]/g,"").includes(h.replace(/[^a-z0-9]/g,""))});if(v?.url)u=v.url,console.log("[Parser] ✅ Found image:",a);else{const l=t.media?.generatedIllustrations?.find(h=>{const c=(h.name||"").toLowerCase();return c===a||c.includes(a)||a.includes(c)||c.replace(/[^a-z0-9]/g,"").includes(a.replace(/[^a-z0-9]/g,""))||a.replace(/[^a-z0-9]/g,"").includes(c.replace(/[^a-z0-9]/g,""))});l?.url&&(u=l.url,console.log("[Parser] ✅ Found illustration:",a,"->",l.name))}}}i.forEach(g=>{const m=g.match(/^([A-D])\)\s*(.+)/i);if(m){const a=m[1].toUpperCase();let v=m[2].trim();const l=v.endsWith("*");l&&(v=v.slice(0,-1).trim()),f.push({id:a.toLowerCase(),label:a,content:v,isCorrect:l})}}),f.length>0&&!f.some(g=>g.isCorrect)&&(f[0].isCorrect=!0),f.length>=2&&(n.push({...ge(n.length),question:s,options:f,points:o==="easy"?1:2,...u?{media:{type:"image",url:u}}:{}}),console.log("[Parser] ✅ Created ABC slide:",s.substring(0,30)))}}),n}async function Zo(e,t){console.log("[Generator] Starting two-agent worksheet pipeline..."),t?.("rag","Hledám podobné pracovní listy v RAG databázi...");const o=e.content?.keyTerms?.map(a=>a.term)??[],n=await Se({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:o,matchCount:3}),d=Ne(n);console.log(`[Generator] RAG: ${n.length} examples found`),t?.("rag-done",`RAG: nalezeno ${n.length} podobných listů`,{examples:n,ragSection:d});const r=Fe(e,{}),i={plFormatId:r.plFormatId,worksheetPlMethodSource:r.worksheetPlMethodSource};t?.("agent1",`Agent 1: Plánuji obsah (formát: ${i.plFormatId}, sekce, cvičení, obrázky)...`);const p=await Le(e,d,"worksheet",void 0,i,t);if(!p.ok)return console.warn("[Generator] Agent 1 failed:",p.error),t?.("fallback",`Agent 1 selhal → záložní generátor (${p.error})`),{...await De(e),generationMethod:"legacy"};const s=p.plan;console.log("[Generator] Agent 1 done, sections:",s.sections.length),t?.("agent1-done",`Agent 1 ✅ — ${s.sections.length} sekcí, obtížnost: ${s.difficulty}, ${s.estimatedTimeMinutes} min`),t?.("agent2","Skládám pracovní list jako sazbu stránek (designer composer)…");const u=it(e,s),f=u.blocks;ft(u.diagnostics,t),t?.("agent2-done",`Bloky sestaveny (${f.length} ks, ${u.diagnostics.pageCount} str.)`);const g=crypto.randomUUID(),m={id:g,title:s.title||`${e.topic} - Pracovní list`,blocks:f,settings:{showAnswerKey:!0,pageSize:"A4",margins:"normal"},metadata:st(e,s),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return t?.("saving","Ukládám pracovní list..."),ce(m),console.log("[Generator] Worksheet saved:",g),t?.("done",`Hotovo ✅ — uloženo ${f.length} bloků`),{success:!0,id:g,preview:yt(u.diagnostics),generationMethod:"two-agent",contentPlan:s,worksheet:{...m,blocks:ye(m.blocks||[])}}}const We=16,Xe=12288;function Yo(e){const t=String(e??"reading").trim().toLowerCase().replace(/\s+/g,"-").replace(/_/g,"-"),o={"multiple-choice":"exercise-multiple-choice",mcq:"exercise-multiple-choice","fill-blank":"exercise-fill-blank","fill-in-blank":"exercise-fill-blank","free-answer":"exercise-free-answer",open:"exercise-free-answer","connect-pairs":"exercise-connect-pairs",pairs:"exercise-connect-pairs"};return o[t]?o[t]:["intro","vocabulary","exercise-multiple-choice","exercise-fill-blank","exercise-free-answer","exercise-connect-pairs","timeline","reading","summary"].includes(t)?t:"reading"}function Z(e){if(e==null)return"";if(typeof e!="object")return String(e).trim();if(Array.isArray(e))return e.map(Z).filter(Boolean).join(" | ");const t=e,o=(...p)=>p.map(s=>t[s]).find(s=>s!=null&&String(s).trim()),n=o("left","term","pojem","label","name","title"),d=o("right","definition","vyznam","meaning","answer","odpoved","value"),r=o("question","otazka","prompt","zadani"),i=o("content","text","description","popis");return n&&d?`${Z(n)} | ${Z(d)}`:r&&d?`${Z(r)} -> ${Z(d)}`:i?Z(i):r?Z(r):Object.entries(t).map(([p,s])=>{const u=Z(s);return u?`${p}: ${u}`:""}).filter(Boolean).join(" | ")}function Oe(e,t,o){const n=e.topic||"Téma",d=e.content||{},r=Array.isArray(d.keyFacts)?d.keyFacts.map(Z).filter(Boolean):[],i=Array.isArray(d.keyTerms)?d.keyTerms.map(f=>Z(f)).filter(Boolean):[],p=String(o||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim(),s=p?p.slice(0,1200):"",u=r.slice(0,8).join(`
`);return i.slice(0,8).join(`
`),t==="textbook"?{title:`${n} - list učebnice`,learningGoal:`Žák vysvětlí hlavní myšlenky tématu ${n} a propojí je s klíčovými pojmy.`,difficulty:"medium",estimatedTimeMinutes:35,selectedImages:[],sections:[{type:"intro",title:n,content:s||`Úvodní přehled tématu ${n}.`,items:[],layoutHint:"Úvodní nadpis a krátký perex."},{type:"reading",title:"Hlavní výklad",content:u||s||`Shrň hlavní fakta a souvislosti k tématu ${n}.`,items:[],layoutHint:"Souvislý učebnicový text ve 2 sloupcích."},{type:"vocabulary",title:"Klíčové pojmy",content:"Pojmy, které je dobré si zapamatovat.",items:i.slice(0,8),layoutHint:"Krátký slovníček v bočním boxu."},{type:"summary",title:"Zapamatuj si",content:u||`Nejdůležitější závěry k tématu ${n}.`,items:r.slice(0,5),bloomTarget:2,layoutHint:"Závěrečný infobox."}]}:{title:`${n} - pracovní list`,learningGoal:`Žák procvičí a vysvětlí klíčové pojmy a souvislosti tématu ${n}.`,difficulty:"medium",estimatedTimeMinutes:30,selectedImages:[],sections:[{type:"intro",title:n,content:u||`Krátké uvedení do tématu ${n}.`,items:[],layoutHint:"Úvodní blok."},{type:"vocabulary",title:"Pojmy",content:"Vysvětli pojmy vlastními slovy.",items:i.slice(0,8),bloomTarget:2,layoutHint:"Slovníček nebo spojovačka."},{type:"exercise-free-answer",title:"Vysvětli souvislosti",content:`Co je na tématu ${n} nejdůležitější?`,items:r.slice(0,4),bloomTarget:4,layoutHint:"Otevřené odpovědi."},{type:"summary",title:"Shrnutí",content:"Napiš hlavní závěr.",items:[],bloomTarget:3,layoutHint:"Závěrečný box."}]}}function Qo(e,t){if(!e||typeof e!="object")return{plan:null,error:"Model nevrátil JSON objekt."};const o=e;let n=o.sections;if(!Array.isArray(n)&&Array.isArray(o.section)&&(n=o.section),!Array.isArray(n)||n.length===0)return{plan:null,error:'V odpovědi chybí neprázdné pole "sections".'};const d=[];for(let m=0;m<n.length;m++){const a=n[m];if(!a||typeof a!="object")continue;const v=a,l=Yo(v.type),h=String(v.title??`Sekce ${m+1}`),c=v.content!=null?Z(v.content):"",b=Array.isArray(v.items)?v.items.map(Z).filter(Boolean):void 0,k=v.layoutHint!=null?String(v.layoutHint):void 0;let z=v.bloomTarget;typeof z=="string"&&(z=parseInt(z,10));const A=typeof z=="number"&&z>=1&&z<=6?z:void 0;d.push({type:l,title:h,content:c,items:b,layoutHint:k,bloomTarget:A})}if(d.length===0)return{plan:null,error:'Žádná platná sekce — zkontroluj typy a strukturu "sections".'};const r=o.selectedImages;let i=[];Array.isArray(r)&&(i=r.filter(m=>m&&typeof m=="object"&&m.url).map(m=>{const a=m,v=a.suggestedPlacement,l=Number(a.width??a.naturalWidth??a.dimensions?.width),h=Number(a.height??a.naturalHeight??a.dimensions?.height),c=Number(a.aspectRatio),b=v==="header"||v==="intro"||v==="alongside-section"||v==="standalone"?v:"intro";return{url:String(a.url),title:String(a.title??""),description:String(a.description??""),license:a.license!=null?String(a.license):void 0,width:Number.isFinite(l)&&l>0?l:void 0,height:Number.isFinite(h)&&h>0?h:void 0,aspectRatio:Number.isFinite(c)&&c>0?c:void 0,suggestedPlacement:b,sectionIndex:typeof a.sectionIndex=="number"?a.sectionIndex:void 0,sectionHint:a.sectionHint!=null?String(a.sectionHint):void 0}}));const p=o.difficulty,s=p==="easy"||p==="hard"||p==="medium"?p:"medium",u=o.estimatedTimeMinutes,f=typeof u=="number"&&u>0&&u<1e3?u:30;return{plan:{title:(String(o.title||t)||"Pracovní list").trim()||"Pracovní list",learningGoal:String(o.learningGoal||""),difficulty:s,estimatedTimeMinutes:f,selectedImages:i,sections:d}}}async function Le(e,t,o="worksheet",n,d,r,i){const p=oe(e),s=e.media?.images??[],u=[...e.media?.generatedIllustrations??[],...e.media?.generatedMapBetaImages??[],...e.media?.generatedEnvironment3dImages??[]],f=e.media?.generatedPhotos??[],g=[...s.map((A,O)=>`[OBRAZ-${O}] url="${A.url}" title="${String(A.title||"")}" popis="${String(A.description||"")}"`),...u.map((A,O)=>`[ILUSTRACE-${O}] url="${A.url||""}" title="${String(A.name||A.title||"")}" popis="${String(A.description||"")}"`),...f.map((A,O)=>`[FOTO-${O}] url="${A.url||""}" title="${String(A.title||A.name||"")}" popis="${String(A.description||"")}"`)],m=g.length-We,a=g.slice(0,We).join(`
`)+(m>0?`
(… a dalších ${m} obrázků/ilustrací v datasetu. V "selectedImages" uveřejni přesné URL max 1–3 nejrelevantnějších z celého datasetu.)`:""),v=o==="textbook"?`
## PRAVIDLA PRO LIST UČEBNICE
- Toto je UČEBNÍ TEXT (stránka z učebnice), NE pracovní list s úkoly
- Hlavní obsah: čtivé výkladové texty, vysvětlení pojmů, příběhy osobností, zajímavosti
- Obrázky: POVINNĚ vyber 2-4 obrázky z datasetu — jsou klíčové pro učebnicový styl
- Cvičení: MAX 1-2 krátká cvičení na konci (connect-pairs nebo fill-blank), zbytek je text
- Sekce: 5-8 sekcí, převaha "reading", "intro", "timeline", "vocabulary"
- Styl: přístupný, zajímavý, jako dobrá učebnice — ne suchý výčet faktů
- Délka textů: obsáhlejší odstavce (8-15 vět), ne krátké bullet pointy
- Konec: "summary" sekce s klíčovými poznatky
- Vyber VŠECHNY dobré obrázky z datasetu — čím více, tím lepší (priorita: historické fotky, mapy, portréty osobností)
`:`
## PRAVIDLA PRO PRACOVNÍ LIST
- Vždy začni s "intro" sekcí (shrnutí tématu)
- Zahrni sekci "vocabulary" pro klíčové pojmy
- Mix cvičení: alespoň 2 různé typy (multiple-choice, fill-blank, connect-pairs, free-answer)
- Konec: "summary" sekce
- Obrázky z datasetu jsou primární zdroj
- Pro selectedImages použij přesné url z dostupných obrázků
`,l=o==="textbook"?"stránky učebnice":"pracovního listu",h=o==="textbook"&&n?`
## ⭐ ZDROJOVÝ UČEBNÍ TEXT (PRIORITNÍ ZDROJ)
Níže je učební text který byl pro toto téma vygenerován. Použij ho jako HLAVNÍ ZDROJ obsahu — zachovej stejná fakta, stejnou terminologii, stejnou strukturu výkladu. Jen uprav formát do podoby vizuálně bohaté stránky učebnice.

${n.substring(0,6e3)}
`:"",c=`Jsi pedagogický expert. Vytvoř plán obsahu ${l} pro žáky.

${t}

## VSTUPNÍ DATA
Téma: ${e.topic}
Předmět: ${e.subjectCode||"Dějepis"}
Ročník: ${e.grade}. třída
${h}
## OBSAH Z DATASETU
${p}

## DOSTUPNÉ OBRÁZKY A ILUSTRACE
${a||"Žádné obrázky nejsou dostupné."}

${v}

## ÚKOL
⚠️ ZÁVAZNÉ: Pokud jsou výše uvedeny vzory (VZOR 1, VZOR 2...), plán MUSÍ odpovídat jejich rozsahu a struktuře. Počet sekcí, typy cvičení a výběr obrázků kopíruj ze vzorů!

Vytvoř ContentPlan jako JSON:
1. title — hlavní název
2. learningGoal — co žák po přečtení/vyplnění umí
3. difficulty — "easy" | "medium" | "hard"
4. estimatedTimeMinutes — odhadovaný čas
5. selectedImages — ${o==="textbook"?"2-4 obrázky":"1-3 obrázky"} z dostupných (přesné URL)
6. sections — ${o==="textbook"?"5-8":"6-10"} sekcí (podle vzorů výše)

Pro každou sekci:
- type: "intro" | "vocabulary" | "exercise-multiple-choice" | "exercise-fill-blank" | "exercise-free-answer" | "exercise-connect-pairs" | "timeline" | "reading" | "summary"
- title, content, items (pole), **bloomTarget** (číslo 1–6: Anderson & Krathwohl, 1=zapamatovat … 6=tvořit) u cvičení a u summary, kde dává smysl, layoutHint (nápověda pro designéra — odvoď z layoutu vzorů)

Výstup: POUZE validní JSON, žádný jiný text.

\`\`\`json
{
  "title": "...",
  "learningGoal": "...",
  "difficulty": "medium",
  "estimatedTimeMinutes": 45,
  "selectedImages": [
    {
      "url": "...",
      "title": "...",
      "description": "...",
      "suggestedPlacement": "intro",
      "sectionIndex": 0,
      "sectionHint": "..."
    }
  ],
  "sections": [
    {
      "type": "intro",
      "title": "...",
      "content": "...",
      "items": [],
      "bloomTarget": 2,
      "layoutHint": "..."
    }
  ]
}
\`\`\``,b=ee({topic:e.topic,subject:e.subjectCode||"Dějepis",grade:e.grade,context:p,ragSection:t,imageList:a||"Žádné obrázky nejsou dostupné.",modeInstructions:v,sourceTextSection:h,docLabel:l})||c;let k=b;if(o==="worksheet"&&d){const O=!!d.promptOverride?.trim()?`### AUTOREM UPRAVENÝ FORMÁTOVÝ PROMPT — NEJVYŠŠÍ PRIORITA
Následující instrukce mají přednost před obecnými pravidly pracovního listu, RAG vzory i výchozím formátem. Pokud je mezi instrukcemi konflikt, řiď se tímto autorským promptem.

${d.promptOverride?.trim()}`:xo(d.plFormatId,{scaffoldLevel:d.scaffoldLevel});k=`${b}

## SPOLEČNÝ DIDAKTICKÝ RÁMEC (všechny formáty)
${Io()}

## DIDAKTICKÝ FORMÁT (závazné pro tento plán)
${O}${d.worksheetPlMethodSource?`

Kontext z metodické tabulky autora: ${d.worksheetPlMethodSource}`:""}

Výsledný JSON (ContentPlan) musí být sestaven v souladu s tímto formátem.`}o==="textbook"&&i?.trim()&&(k=`${b}

### AUTOREM UPRAVENÝ FORMÁTOVÝ PROMPT — NEJVYŠŠÍ PRIORITA
Následující instrukce mají přednost před obecnými pravidly listu učebnice, RAG vzory i výchozím formátem. Pokud je mezi instrukcemi konflikt, řiď se tímto autorským promptem.

${i.trim()}

Výsledný JSON (ContentPlan) musí být sestaven v souladu s tímto formátem.`),r?.("agent1-prompt",`Kompletní prompt Agent 1 (${k.length} znaků)`,{prompt:k});let z="";try{z=await _([{role:"system",content:"Jsi expert na tvorbu vzdělávacích materiálů. Odpovídáš VÝHRADNĚ validním JSON objektem dle zadané struktury. Žádný jiný text."},{role:"user",content:k}],B(e.subjectCode,"agent"),{temperature:.4,max_tokens:Xe})}catch(A){const O=A instanceof Error?A.message:String(A);return console.error("[Agent 1] chatWithAIProxy failed:",A),{ok:!1,error:`Volání AI selhalo: ${O}`}}if(!z||!String(z).trim())return{ok:!1,error:"Prázdná odpověď od modelu (zkus znovu nebo zkrátit dataset)."};try{let A=z.trim();const O=A.match(/```(?:json)?\s*([\s\S]+?)\s*```/);if(O)A=O[1].trim();else{const x=A.indexOf("{"),P=A.lastIndexOf("}");x!==-1&&P!==-1&&P>x&&(A=A.slice(x,P+1))}if(console.log("[Agent 1] Parsing JSON, length:",A.length,"preview:",A.substring(0,200)),A.length<10)return{ok:!1,error:"V odpovědi není rozpoznán JSON (příliš krátký výstup — možná useknutí)."};let E;try{E=JSON.parse(A)}catch(x){const P=x instanceof Error?x.message:String(x),$=!A.trim().endsWith("}")&&A.includes("{");console.error("[Agent 1] JSON.parse failed:",P,"tail:",A.slice(-200));try{const V=await _([{role:"system",content:"Opravuješ rozbitý JSON. Vrať výhradně jeden validní JSON objekt, bez markdownu a bez komentářů."},{role:"user",content:`Oprav následující odpověď do validního ContentPlan JSON objektu. Zachovej pole title, learningGoal, difficulty, estimatedTimeMinutes, selectedImages a sections. U každé sections položky musí být type, title, content, items jako pole stringů a layoutHint.

ROZBITÝ VÝSTUP:
${A.slice(0,14e3)}`}],B(e.subjectCode,"fast"),{temperature:.1,max_tokens:Xe});let J=String(V||"").trim();const X=J.match(/```(?:json)?\s*([\s\S]+?)\s*```/);X&&(J=X[1].trim());const y=J.indexOf("{"),w=J.lastIndexOf("}");y!==-1&&w!==-1&&w>y&&(J=J.slice(y,w+1)),E=JSON.parse(J),console.warn("[Agent 1] JSON repaired after parse failure.")}catch(V){return console.error("[Agent 1] JSON repair failed:",V),o==="textbook"?(console.warn("[Agent 1] Using deterministic textbook ContentPlan fallback."),{ok:!0,plan:Oe(e,o,n)}):{ok:!1,error:$?`JSON v odpovědi je nekompletní (pravděpodobně useknutý). ${P}`:`Neplatný JSON: ${P}`}}}const D=Qo(E,e.topic);if(!D.plan)return o==="textbook"?(console.warn("[Agent 1] Validation failed, using deterministic textbook ContentPlan fallback:",D.error),{ok:!0,plan:Oe(e,o,n)}):{ok:!1,error:D.error||"Validace plánu selhala."};const L=D.plan;return o==="worksheet"&&d&&(L.plFormatId=d.plFormatId,d.worksheetPlMethodSource&&(L.worksheetPlMethodSource=d.worksheetPlMethodSource),d.scaffoldLevel&&(L.scaffoldLevel=d.scaffoldLevel)),{ok:!0,plan:L}}catch(A){const O=A instanceof Error?A.message:String(A);return console.error("[Agent 1] Failed to build ContentPlan:",A),z&&console.error("[Agent 1] Raw response (first 500):",String(z).substring(0,500)),o==="textbook"?(console.warn("[Agent 1] Unexpected processing failure, using deterministic textbook ContentPlan fallback."),{ok:!0,plan:Oe(e,o,n)}):{ok:!1,error:`Zpracování odpovědi: ${O}`}}}function Wo(e){if(e.length===0)return null;const t=e[0],o=at.find(n=>n.id===t);if(o)return o;try{return JSON.parse(localStorage.getItem("vividbooks_custom_layouts")||"[]").find(d=>d.id===t)??null}catch{return null}}async function Xo(e,t,o,n="worksheet",d=[],r,i=[]){const p=Wo(i);if(console.log("[Agent 2] selectedLayoutIds:",i,"→ template:",p?.id??"none (free-form)"),p&&n==="textbook"){console.log("[Agent 2] ✅ Template-fill mode — layout:",p.name,`(${p.template.length} slotů)`);const{blocks:u,template:f}=await en(e,t,p,r);return{blocks:u,template:f}}return console.log("[Agent 2] 🔄 Free-form mode (no template selected or worksheet mode)"),{text:await tn(e,t,o,n,d,r,i)??"",template:null}}async function en(e,t,o,n){const d=[...e.media?.generatedIllustrations||[],...e.media?.generatedPhotos||[],...e.media?.generatedMapBetaImages||[],...e.media?.generatedEnvironment3dImages||[],...e.media?.images||[]],r=d.length>0?d.map(l=>`- ${l.url||""} (${l.title||l.name||"bez názvu"})`).join(`
`):"(žádné obrázky)",i=t.sections.map((l,h)=>`${h+1}. [${l.type}] "${l.title}"
Obsah: ${l.content}`).join(`

`),s=o.template.filter(l=>!l.fixed).map(l=>{const h=l.type.toUpperCase(),c=l.width==="half"?" [polovina šíře]":"",z=(l.imageSlot?" → vrať URL obrázku z datasetu":"")||{"connect-pairs":' → formát: "Pojem | Definice" (každý pár na nový řádek)',"fill-blank":' → formát: "věta s ___ mezerou = odpověď"',"multiple-choice":' → formát: "Otázka?\\nA) možnost\\nB) správná *\\nC) možnost"',table:' → formát: "Záhlaví A | Záhlaví B\\nHodnota 1 | Hodnota 2"',"free-answer":" → vrať text otázky","heading-h1":" → 2-5 slov",heading:" → 3-6 slov"}[l.type]||"";return`  "${l.id}": "${h}${c} — ${l.role}${z}"`}).join(`,
`),u=`Vyplňuješ stránku učebnice "${e.topic}" (${e.subjectCode}, ${e.grade}. třída).

## UČEBNÍ TEXT — použij tento obsah v plném rozsahu:
${i}

## DOSTUPNÉ OBRÁZKY (pro IMAGE sloty vrať přesné URL):
${r}

## ÚKOL
Rozděl výše uvedený učební text do slotů šablony. NEKRAŤ, NEPŘEPISUJ — použij přímo dodaný obsah.
Pro odstavce (PARAGRAPH) použij celé pasáže z učebního textu, ne jen shrnutí.
Pro nadpisy (HEADING) použij nadpisy z učebního textu.
Pro infobox, connect-pairs atd. extrahuj relevantní data z textu.

Vrať POUZE validní JSON (bez markdown backticks):
{
${s}
}

PRAVIDLA:
- Použij přesně dodaný text, nevymýšlej vlastní
- Pro PARAGRAPH sloty: plné odstavce (5–10 vět), ne zkráceniny
- Pro IMAGE sloty: vrať přesné URL ze seznamu výše
- Nevynechej žádný klíč
- Piš v češtině`;n?.("agent2-prompt",`Template-fill JSON prompt (${u.length} znaků)`,{prompt:u});let f={};try{const l=await _([{role:"system",content:"Jsi asistent vyplňující obsah do šablon učebnic. Vrať POUZE čistý JSON bez markdown. Žádný jiný text. Použij CELÝ dodaný obsah — nepřepisuj ho vlastními slovy, ale využij ho v plném rozsahu."},{role:"user",content:u}],B(e.subjectCode,"text"),{temperature:.4,max_tokens:8192});n?.("agent2-raw",`JSON odpověď (${l.length} znaků)`,{raw:l});const h=l.replace(/```json?\s*/gi,"").replace(/```\s*/g,"").trim();f=JSON.parse(h),console.log("[Agent 2 Template] AI JSON parsed OK, keys:",Object.keys(f).join(", "))}catch(l){console.error("[Agent 2 Template] JSON parse failed:",l)}const g=l=>{const h=l.trim();if(h.startsWith("http://")||h.startsWith("https://"))return{url:h,caption:""};const c=h.toLowerCase().replace(/[^a-z0-9]/g,""),b=d.find(k=>{const z=(k.title||k.name||"").toLowerCase().replace(/[^a-z0-9]/g,"");return z&&(z.includes(c)||c.includes(z))});return b?{url:b.url||"",caption:h}:d.length>0?{url:d[0].url||"",caption:h}:{url:"",caption:h}},m=[];let a=0,v=0;for(;v<o.template.length;){const l=o.template[v],h=String(f[String(l.id)]??""),c=o.template[v+1];if(l.width==="half"&&c?.width==="half"){const k=String(f[String(c.id)]??"");m.push(se(l,h,a++,"half",e,g)),m.push(se(c,k,a++,"half",e,g)),v+=2}else m.push(se(l,h,a++,l.width,e,g)),v++}return console.log("[Agent 2 Template] Built",m.length,"blocks from template:",o.id),{blocks:m,template:o.template}}async function tn(e,t,o,n="worksheet",d=[],r,i=[]){const p=`
DOSTUPNÉ TYPY BLOKŮ (použij PŘESNĚ tato klíčová slova):

HEADER:
Jméno: ________________ Třída: ________ Datum: ________

HEADING-H1:
Hlavní nadpis (pouze jeden, na začátku)

HEADING:
Podnadpis sekce (H2)

PARAGRAPH:
Odstavec textu.

PARAGRAPH: HALF LAYOUT
Text na půl šířky (vedle obrázku nebo infoboxu).

INFOBOX:
Zvýrazněný rámeček s důležitou informací.

INFOBOX: HALF LAYOUT
Infobox na půl šířky.

OBRÁZEK: url obrázku nebo název
(Používej pro obrázky z datasetu)

TABLE:
Sloupec A | Sloupec B
Hodnota 1 | Hodnota 2

MULTIPLE-CHOICE:
Otázka?
A) možnost
B) správná odpověď *
C) možnost
D) možnost

FILL-BLANK:
Věta s ___ mezerou pro doplnění. = správná odpověď

FREE-ANSWER:
Otevřená otázka pro žáka?

CONNECT-PAIRS:
Pojem 1 | Definice 1
Pojem 2 | Definice 2
Pojem 3 | Definice 3

FOOTER:
Zpětná vazba: 😊 😐 ☹️

PRAVIDLA FORMÁTU:
- Typ bloku VŽDY VELKÝMI PÍSMENY + dvojtečka
- Obsah VŽDY na nových řádcích (nikoli na stejném jako typ)
- Prázdný řádek mezi bloky
- HEADING-H1 pouze jednou na začátku
- Začni VŽDY s "HEADER:"
`.trim(),s=t.sections.map((l,h)=>{const c=t.selectedImages?.filter(z=>z.sectionIndex===h)??[],b=c.length>0?`
    → Obrázek: ${c.map(z=>z.url).join(", ")} (${c[0].sectionHint||""})`:"",k="bloomTarget"in l?l.bloomTarget:void 0;return`${h+1}. [${l.type}] "${l.title}"
   Obsah: ${l.content.substring(0,200)}${l.content.length>200?"...":""}
   ${k!=null?`Bloom (bloomTarget): ${k}`:""}
   ${l.items&&l.items.length>0?`Položky (${l.items.length}x): ${l.items.slice(0,3).join(" | ")}${l.items.length>3?"...":""}`:""}
   Hint designu: ${l.layoutHint||"–"}${b}`}).join(`

`),u=ao(d),f=t.plFormatId?{plFormatId:t.plFormatId,worksheetPlMethodSource:t.worksheetPlMethodSource}:Fe(e,{}),g=n==="worksheet"?`## FORMAŤ PŘI ROZMÍSTĚNÍ BLOKŮ
Formát: ${f.plFormatId} — ${So(f.plFormatId)}${f.worksheetPlMethodSource?`
Kontext metodiky: ${f.worksheetPlMethodSource}`:""}
`:"",m=i.length>0?at.filter(l=>i.includes(l.id)):[],a=m.length>0?`## 🎯 UŽIVATELEM VYBRANÉ TYPY LAYOUTU — POVINNĚ POUŽIJ TYTO SEKVENCE BLOKŮ

Uživatel vybral ${m.length} typů layoutu. MUSÍŠ je zapracovat do stránky v tomto pořadí:
${Bt(m)}

⚠️ KAŽDÝ vybraný layout musí být na stránce zastoupen alespoň jednou.
⚠️ Bloky z každé sekce naplň obsahem z ContentPlan výše.
---`:"",v=`Jsi expert na design vzdělávacích pracovních listů. Převeď ContentPlan do formátu bloků.

${g}
${o}

${u}

${a}

## OBSAH (od Agenta 1 — obsahového planera)
Název: ${t.title}
Cíl: ${t.learningGoal}
Obtížnost: ${t.difficulty}
Čas: ${t.estimatedTimeMinutes} minut

SEKCE:
${s}

## DOSTUPNÉ BLOKY A JEJICH FORMÁT
${p}

## TVŮJ ÚKOL
Přepiš CELÝ ContentPlan do formátu bloků.

⚠️ PRIORITY (seřazeno od nejdůležitějšího):
1. STRUKTURÁLNÍ ŠABLONA výše — dodržuj počet a pořadí bloků
2. VZORY výše — pokud mají HALF LAYOUT, INFOBOX, cvičení, MUSÍŠ je také použít
3. Níže uvedená pravidla jsou jen doplňková — NESMÍ omezovat co říkají vzory

${n==="textbook"?`### PRAVIDLA PRO LIST UČEBNICE (platí jen tam kde vzory neurčují jinak)
- Toto je STRÁNKA UČEBNICE — důraz na čtivý výklad, vizuální bohatost
- intro sekce → HEADING-H1 + PARAGRAPH (delší, 8-12 vět)
- reading sekce → střídej PARAGRAPH a PARAGRAPH: HALF LAYOUT + OBRÁZEK: HALF LAYOUT naproti
- Většina výkladových sekcí má být dvousloupcová: PARAGRAPH: HALF LAYOUT + OBRÁZEK: HALF LAYOUT nebo PARAGRAPH: HALF LAYOUT + INFOBOX: HALF LAYOUT
- vocabulary sekce → TABLE (Pojem | Vysvětlení) nebo INFOBOX: HALF LAYOUT pro každý pojem
- timeline sekce → TABLE s roky nebo INFOBOX: HALF LAYOUT pro každou událost
- Obrázky: použij jen 3-5 nejvhodnějších obrázků z ContentPlan.selectedImages, ne všechny za každou cenu
- Galerie nepoužívej jako výchozí layout. Použij ji jen u sekcí, kde se opravdu porovnává série typů/druhů/fází. Jinak vždy jeden obrázek vedle textu.
- Cvičení: zahrň TOLIK cvičení kolik ukazují vzory (CONNECT-PAIRS, FILL-BLANK, FREE-ANSWER, MULTIPLE-CHOICE)
- Přidej INFOBOX bloky pro zajímavosti — "Věděl jsi, že...", tipy, citáty
- summary sekce → INFOBOX se shrnutím klíčových poznatků
- Styl: vizuálně bohatý, jako moderní učebnice — NIKDY ne jednoduchý seznam odstavců`:`### PRAVIDLA PRO PRACOVNÍ LIST
- intro sekce → PARAGRAPH (nebo PARAGRAPH: HALF LAYOUT + OBRÁZEK vedle sebe)
- vocabulary sekce → TABLE (2 sloupce: Pojem | Definice)
- timeline sekce → TABLE nebo PARAGRAPH s chronologickým seznamem
- exercise-multiple-choice → MULTIPLE-CHOICE blok
- exercise-fill-blank → FILL-BLANK blok
- exercise-connect-pairs → CONNECT-PAIRS blok
- exercise-free-answer → FREE-ANSWER blok
- Pokud má sekce layoutHint "dvousloupec" → použij PARAGRAPH: HALF LAYOUT + INFOBOX: HALF LAYOUT
- Pokud má sekce layoutHint "infobox" → INFOBOX blok
- Pro obrázky: OBRÁZEK: [url z ContentPlan.selectedImages]
- Obrázky umísti vedle textu (PARAGRAPH: HALF LAYOUT + OBRÁZEK: ...)`}

Dodržuj přesný formát. Začni s HEADER:, konči FOOTER:.`;r?.("agent2-prompt",`Prompt Agent 2 (${v.length} znaků)`,{prompt:v});try{const l=await _([{role:"system",content:`Jsi designér ${n==="textbook"?"stránek učebnice":"pracovních listů"}. MUSÍŠ dodržet PŘESNÝ formát bloků.
ABSOLUTNÍ PRAVIDLA:
1. Každý blok MUSÍ začínat klíčovým slovem VELKÝMI PÍSMENY + dvojtečka
2. Obsah VŽDY na NOVÝCH ŘÁDCÍCH, prázdný řádek mezi bloky
3. Žádný Markdown (žádné #, **, _)
4. Začni VŽDY s "HEADER:"
5. HALF LAYOUT: "PARAGRAPH: HALF LAYOUT" a "OBRÁZEK: HALF LAYOUT" jsou vždy páry vedle sebe — použij je pro vizuální bohatost
6. Dodržuj STRUKTURÁLNÍ ŠABLONU a vzory — jsou závazné${n==="textbook"?`
7. Preferuj dvousloupcový layout před plnou šířkou textu
8. Nepřidávej galerie automaticky; galerie jen pro skutečnou sérii typů/druhů/fází
9. NIKDY negeneruj méně než 18 bloků pro list učebnice`:""}`},{role:"user",content:v}],B(e.subjectCode,"agent"),{temperature:.5,max_tokens:8192});return r?.("agent2-raw",`Raw výstup Agent 2 (${l.length} znaků)`,{raw:l}),l.trim().startsWith("HEADER:")?l:gt(l)}catch(l){return console.error("[Agent 2] Layout generation failed:",l),null}}async function on(e,t,o){console.log("[Generator] Starting textbook page two-agent pipeline..."),t?.("rag","Hledám podobné listy učebnice v RAG databázi...");const n=e.content?.keyTerms?.map(a=>a.term)??[],d=await Se({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:n,matchCount:3}),r=Ne(d,"textbook");t?.("rag-done",`RAG: nalezeno ${d.length} podobných listů`,{examples:d,ragSection:r}),t?.("agent1","Agent 1: Plánuji obsah stránky učebnice...");const i=await Le(e,r,"textbook",o);if(!i.ok)return t?.("fallback",`Agent 1 selhal → záložní generátor (${i.error})`),{...await De(e),generationMethod:"legacy"};const p=i.plan;t?.("agent1-done",`Agent 1 ✅ — ${p.sections.length} sekcí, ${p.estimatedTimeMinutes} min`),t?.("agent2","Agent 2: Navrhuji vizuální layout stránky učebnice...");const s=await Xo(e,p,r,"textbook",d,t);t?.("agent2-done","Agent 2 ✅ — layout připraven"),t?.("saving","Ukládám list učebnice...");let u;if(s.blocks)u=s.blocks;else if(s.text){const a=s.text;u=s.template?rn(s.template,a,e):zt(a,e)}else return t?.("fallback","Agent 2 selhal → záložní generátor"),{...await De(e),generationMethod:"legacy"};const f=crypto.randomUUID(),g={id:f,title:p.title||`${e.topic} - List učebnice`,blocks:u,settings:{showAnswerKey:!1,pageSize:"A4",margins:"normal"},metadata:bt(e,p),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},m=ce(g);return t?.("done",`Hotovo ✅ — uloženo ${u.length} bloků`),{success:!0,id:f,preview:s.text||"",generationMethod:"two-agent",contentPlan:p,worksheet:m}}async function nn(e,t,o,n){t?.("rag","Hledám podobné listy učebnice v RAG databázi...");const d=e.content?.keyTerms?.map(u=>u.term)??[],r=await Se({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:d,matchCount:3}),i=Ne(r,"textbook");t?.("rag-done",`Nalezeno ${r.length} podobných listů v RAG databázi`,{examples:r,ragSection:i}),o&&t?.("source-text","📄 Učební text načten — použiji ho jako zdroj obsahu..."),t?.("agent1","Agent 1: Plánuji obsah stránky učebnice...");const p=await Le(e,i,"textbook",o,void 0,t,n);if(!p.ok){console.warn("[TextbookPlan] Agent 1 failed, using deterministic fallback plan:",p.error);const u=Oe(e,"textbook",o);return t?.("agent1-done",`Agent 1 fallback — sestaven lokální plán (${u.sections.length} sekcí)`),{success:!0,contentPlan:u,ragCount:r.length}}const s=p.plan;return t?.("agent1-done",`Agent 1 hotovo — ${s.sections.length} sekcí, ${s.estimatedTimeMinutes} min`),{success:!0,contentPlan:s,ragCount:r.length}}async function an(e,t,o,n=[],d,r){_e({folderId:d??null,storageMode:r?.storageMode??"admin",adminFolderId:le(r?.adminFolderId)?r.adminFolderId:le(d)?d:null});try{o?.("agent2","Skládám obsah do bloků...");const i=[];let p=0;const s=new Map;console.log("[TextbookGen] selectedImages from plan:",JSON.stringify(t.selectedImages?.map(l=>({url:l.url?.substring(0,40),sectionIndex:l.sectionIndex}))));for(const l of t.selectedImages||[]){const h=l.url,c=l.sectionIndex;h&&c!==void 0&&c!==null&&!s.has(c)&&s.set(c,{url:h,title:l.title||""})}console.log("[TextbookGen] imagesBySectionIndex keys:",[...s.keys()]);const u=new Set(["vocabulary","summary"]),f=l=>u.has(l);i.push({id:T(),type:"heading",order:p++,width:"full",gridSpan:12,content:{text:t.title||e.topic,level:"h1"}});for(let l=0;l<t.sections.length;l++){const h=t.sections[l],c=s.get(l),b=f(h.type);i.push({id:T(),type:"heading",order:p++,width:"full",gridSpan:12,content:{text:h.title,level:"h2"}}),b?i.push({id:T(),type:"paragraph",order:p++,width:"full",gridSpan:12,content:{html:`<p>${h.content||""}</p>`},visualStyles:{displayPreset:"infobox",backgroundColor:h.type==="summary"?"#f0fdf4":"#dbeafe",borderColor:h.type==="summary"?"#22c55e":"#3b82f6",borderRadius:12}}):c?(i.push({id:T(),type:"paragraph",order:p++,width:"half",gridSpan:6,content:{html:`<p>${h.content||""}</p>`}}),i.push({id:T(),type:"image",order:p++,width:"half",gridSpan:6,content:{url:c.url,alt:c.title,caption:c.title,alignment:"center",size:100}})):i.push({id:T(),type:"paragraph",order:p++,width:"full",gridSpan:12,content:{html:`<p>${h.content||""}</p>`}})}console.log("[TextbookGen] Built",i.length,"blocks (rule-based layout)");const g=e.media?.charts||[];for(const l of g)!l.columns||!l.rows||l.rows.length===0||i.push({id:T(),type:"chart",order:p++,width:"full",gridSpan:12,content:{chartType:l.chartType||"bar",chartTitle:l.title||"",chartColumns:l.columns,chartRows:l.rows,chartHeight:320}});g.length>0?o?.("agent2-done",`✅ Obsah poskládán (${i.length} bloků, ${g.filter(l=>l.columns).length} grafů)`):o?.("agent2-done",`✅ Obsah poskládán (${i.length} bloků)`),o?.("saving",`Ukládám list učebnice (${i.length} bloků)...`);const m=crypto.randomUUID(),a={id:m,title:t.title||`${e.topic} - List učebnice`,blocks:i,settings:{showAnswerKey:!1,pageSize:"A4",margins:"normal"},metadata:bt(e,t),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},v=ce(a);return o?.("done",`Uloženo (${i.length} bloků)`),{success:!0,id:m,preview:"",generationMethod:"two-agent",contentPlan:t,worksheet:v}}finally{Be()}}function yt(e){const t=[`Designer composer: ${e.profileId}`,`Stránek: ${e.pageCount}`,...e.pages.map(o=>`Strana ${o.page}: ${Math.round(o.utilization*100)} % (${o.sections.join(" / ")})`)];return e.warnings.length>0&&t.push("","Varování:",...e.warnings.map(o=>`- ${o}`)),t.join(`
`)}function ft(e,t){t?.("layout-preflight",e.pages.map(o=>`str. ${o.page}: ${Math.round(o.utilization*100)} %`).join(", "),e);for(const o of e.warnings)console.warn("[WorksheetComposer]",o)}function bt(e,t){return{subject:e.subjectCode,grade:e.grade,topic:e.topic,estimatedTime:t.estimatedTimeMinutes,sourceDatasetId:e.id,plFormatId:t.plFormatId,worksheetPlMethodSource:t.worksheetPlMethodSource,layoutMode:"grid",gridColumns:12,gridGap:"medium"}}async function De(e){console.log("[Generator] Using legacy worksheet generator...");const t=oe(e),o=pe("worksheet"),n=`PROMPT PRO VYTVOŘENÍ TEXTOVÉHO PRACOVNÍHO LISTU

Vytvořte komplexní textový pracovní list podle vstupních informací v přesném formátu pro parser.

VSTUPNÍ INFORMACE:
📌 TÉMA: ${e.topic}
🎓 ROČNÍK: ${e.grade}. třída
📚 PŘEDMĚT: ${e.subjectCode||"Dějepis"}

${t}

---

KRITICKÁ PRAVIDLA PRO FORMÁT

ZÁKLADNÍ SYNTAXE (POVINNÁ!)
Každý blok má tento formát:
TYP_BLOKU:
obsah na dalších řádcích

DŮLEŽITÉ:
- Typ bloku VŽDY VELKÝMI PÍSMENY následovaný dvojtečkou
- Obsah VŽDY na NOVÝCH ŘÁDCÍCH (nikdy ne na stejném řádku jako typ)
- HALF LAYOUT se píše za dvojtečku: PARAGRAPH: HALF LAYOUT
- Prázdný řádek mezi bloky pro čitelnost

TYPY BLOKŮ A JEJICH FORMÁT:

HEADER:
Jméno: ________________ Třída: ________ Známka: ________

HEADING-H1:
Hlavní nadpis pracovního listu (pouze jeden, na začátku)

HEADING:
Název sekce nebo podkapitoly (H2)

PARAGRAPH:
Text odstavce s vysvětlením tématu. Může mít více vět.

PARAGRAPH: HALF LAYOUT
Text, který bude vedle obrázku.

INFOBOX:
Důležitá informace nebo zvýraznění klíčového faktu.

INFOBOX: HALF LAYOUT
Informace vedle obrázku.

OBRÁZEK: Přesný název obrázku ze seznamu

TABLE:
Sloupec 1 | Sloupec 2 | Sloupec 3
Hodnota 1 | Hodnota 2 | Hodnota 3

MULTIPLE-CHOICE:
Znění otázky?
A) nesprávná možnost
B) správná odpověď *
C) nesprávná možnost
D) nesprávná možnost
(Správná odpověď končí hvězdičkou *)

FILL-BLANK:
Text s ___ mezerou pro doplnění. = správná odpověď
(Formát: text s ___ = odpověď)

FREE-ANSWER:
Otevřená otázka pro žáka, na kterou napíše vlastní odpověď?

CONNECT-PAIRS:
Pojem 1 | Definice 1
Pojem 2 | Definice 2
Pojem 3 | Definice 3
Pojem 4 | Definice 4
(Formát: pojem | definice)

FOOTER:
Zpětná vazba: 😊 😐 ☹️
Poznámky učitele: _______________________

POŽADAVKY NA OBSAH:
✅ 6-10 sekcí s logickou návazností (učební linka)
✅ Minimálně 3 různé typy aktivit rozložené rovnoměrně
✅ Pokryj všechny klíčové pojmy ze vstupních informací
✅ Zahrň osobnosti a časovou osu (pokud jsou ve vstupu)
✅ Header na začátku + Footer na konci
✅ NEPOUŽÍVEJ obrázky (OBRÁZEK:) - pracovní list je pouze textový

STRUKTURA PRACOVNÍHO LISTU:

1. HEADER (jméno, třída, známka)

2. HEADING-H1 (název tématu)

3. ÚVODNÍ TEXT (1-2 obsáhlé odstavce)
   - Shrň celé téma v 8-12 větách
   - Zahrň všechny klíčové pojmy a fakta
   - Zmiň důležité osobnosti a události
   - Tento text slouží jako podklad pro aktivity

4. AKTIVITY (zbytek pracovního listu)
   - 8-12 různých aktivit
   - Střídej typy: MULTIPLE-CHOICE, FILL-BLANK, CONNECT-PAIRS, FREE-ANSWER
   - NEPOUŽÍVEJ HEADING před aktivitami - typ aktivity je dostatečný
   - Aktivity ověřují pochopení úvodního textu

5. FOOTER (zpětná vazba)

PŘÍKLAD SPRÁVNÉHO FORMÁTU:

HEADER:
Jméno: ________________ Třída: ________ Známka: ________

HEADING-H1:
Starověké Řecko

PARAGRAPH:
Starověké Řecko se rozkládalo na Balkánském poloostrově a mnoha ostrovech. Řekové byli vynikající mořeplavci a obchodníci. Nežili v jednom velkém státě, ale v samostatných městských státech zvaných polis. Dva nejmocnější byly Athény (centrum umění a demokracie) a Sparta (vojenský stát). V Athénách vznikla demokracie – vláda lidu. Řekové věřili v mnoho bohů, kteří sídlili na hoře Olymp. Nejvyšší byl Zeus. Na jeho počest se konaly olympijské hry. Řekové vymysleli divadlo a položili základy evropské kultury. Mezi slavné osobnosti patří filosof Sókratés, básník Homér a vojevůdce Alexandr Veliký.

MULTIPLE-CHOICE:
Jak se nazývaly řecké městské státy?
A) Kolonie
B) Polis *
C) Provincie
D) Království

FILL-BLANK:
Vláda lidu se nazývá ___ a vznikla v Athénách. = demokracie
Nejvyšší řecký bůh se jmenoval ___. = Zeus
Sportovní hry na počest Dia se nazývaly ___. = olympijské hry

CONNECT-PAIRS:
Athény | demokracie a umění
Sparta | vojenský stát
Sókratés | filosof
Homér | básník

MULTIPLE-CHOICE:
Kdo nikdy neprohrál bitvu a rozšířil řeckou kulturu až do Indie?
A) Periklés
B) Homér
C) Alexandr Veliký *
D) Zeus

FREE-ANSWER:
Co z odkazu starověkého Řecka používáme dodnes? Uveď alespoň dva příklady.

FOOTER:
Zpětná vazba: 😊 😐 ☹️

PRAVIDLA PRO OTÁZKY:
- NIKDY nedávej otázku přímo na informaci, která je v textu TĚSNĚ PŘED ní
- Otázky ověřují pochopení, ne mechanické opakování
- Otázky dávej na konec sekce nebo na začátek další sekce
- Otázka může odkazovat na informace z PŘEDCHOZÍCH sekcí (opakování)

Špatně:
PARAGRAPH: Řecko leží na Balkánském poloostrově.
MULTIPLE-CHOICE: Kde leží Řecko? ❌

Správně:
PARAGRAPH: Řecko leží na Balkánském poloostrově.
PARAGRAPH: Bylo rozděleno na městské státy...
MULTIPLE-CHOICE: Co bylo typické pro organizaci Řecka? ✓

CHECKLIST:
✅ Typy bloků VELKÝMI PÍSMENY s dvojtečkou
✅ Obsah na nových řádcích
✅ HEADING-H1: pouze jeden (hlavní nadpis na začátku)
✅ HEADING: pro všechny ostatní podnadpisy (H2)
✅ Multiple-choice: * u správné odpovědi
✅ Fill-blank: ___ = odpověď
✅ Connect-pairs: pojem | definice
✅ NEPOUŽÍVEJ obrázky - pracovní list je textový
✅ Sekce čísluj a dodržuj logickou návaznost
✅ Otázky NIKDY přímo na předchozí text

${o}`,d=`Jsi přísný generátor pracovních listů. MUSÍŠ dodržet PŘESNÝ formát výstupu.

ABSOLUTNÍ PRAVIDLA:
1. KAŽDÝ blok MUSÍ začínat klíčovým slovem VELKÝMI PÍSMENY následovaným dvojtečkou
2. NIKDY nepiš prostý text bez označení typu bloku
3. NIKDY nepoužívej Markdown formátování (žádné #, **, _)
4. Začni VŽDY s "HEADER:" jako první řádek

POVOLENÉ TYPY BLOKŮ (použij PŘESNĚ takto):
HEADER:
HEADING:
PARAGRAPH:
PARAGRAPH: HALF LAYOUT
INFOBOX:
INFOBOX: HALF LAYOUT
OBRÁZEK: [název]
TABLE:
MULTIPLE-CHOICE:
FILL-BLANK:
FREE-ANSWER:
CONNECT-PAIRS:
FOOTER:

PŘÍKLAD SPRÁVNÉHO VÝSTUPU:
HEADER:
Jméno: ___ Třída: ___ Známka: ___

HEADING:
Název sekce

PARAGRAPH:
Text odstavce.

MULTIPLE-CHOICE:
Otázka?
A) možnost
B) správná *
C) možnost

FOOTER:
Zpětná vazba: 😊 😐 ☹️

ZAČNI ODPOVĚĎ PŘESNĚ TAKTO: "HEADER:"
`;console.log("[Generator] Worksheet prompt:",n),console.log("[Generator] Full prompt being sent:",n.substring(0,500)+"...");try{const r=await _([{role:"system",content:d},{role:"user",content:n}],B(e.subjectCode,"agent"),{temperature:.5,max_tokens:8192});console.log("[Generator] Raw worksheet response:",r);const i=r.trim().startsWith("HEADER:"),p=i?r:gt(r);console.log("[Generator] Using normalization:",!i),console.log("[Generator] Final response:",p.substring(0,500)+"...");const s=zt(p,e),u=crypto.randomUUID(),f={id:u,title:`${e.topic} - Pracovní list`,blocks:s,settings:{showAnswerKey:!0,pageSize:"A4",margins:"normal"},metadata:{subject:e.subjectCode,grade:e.grade,topic:e.topic,sourceDatasetId:e.id},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};ce(f);const g=r;return console.log("[Generator] Worksheet saved:",u),{success:!0,id:u,preview:g,worksheet:{...f,blocks:ye(f.blocks||[])}}}catch(r){return console.error("[Generator] Worksheet error:",r),{success:!1,error:String(r)}}}function rn(e,t,o){const n=new Map,d=/\[SLOT\s+(\d+)\]\s*\n?([\s\S]*?)(?=\[SLOT\s+\d+\]|$)/g;let r;for(;(r=d.exec(t))!==null;){const m=parseInt(r[1],10),a=r[2].trim();n.set(m,a)}console.log("[TemplateParser] Parsed slots:",n.size,"of",e.length,"template slots"),console.log("[TemplateParser] Slot IDs found:",Array.from(n.keys()).join(", "));const i=[];let p=0;const s=[...o.media?.generatedIllustrations||[],...o.media?.generatedPhotos||[],...o.media?.generatedMapBetaImages||[],...o.media?.generatedEnvironment3dImages||[],...o.media?.images||[]];let u=0;const f=m=>{const a=m.trim();if(a.startsWith("http://")||a.startsWith("https://"))return{url:a,caption:""};if(a.length>0){const v=a.toLowerCase().replace(/[^a-z0-9]/g,""),l=s.find(h=>{const c=(h.title||h.name||"").toLowerCase().replace(/[^a-z0-9]/g,"");return c&&(c.includes(v)||v.includes(c))});if(l)return{url:l.url||"",caption:a}}if(s.length>0){const v=s[u%s.length];return u++,{url:v.url||"",caption:a}}return{url:"",caption:a}};let g=0;for(;g<e.length;){const m=e[g],a=n.get(m.id)||"";if(m.width==="half"&&g+1<e.length&&e[g+1].width==="half"){const l=e[g+1],h=n.get(l.id)||"";i.push(se(m,a,p++,"half",o,f)),i.push(se(l,h,p++,"half",o,f)),g+=2}else i.push(se(m,a,p++,"full",o,f)),g++}return console.log("[TemplateParser] Built",i.length,"blocks"),i}function se(e,t,o,n,d,r){const i={id:T(),order:o,width:n,...n==="half"?{widthPercent:50,gridSpan:6}:{}};switch(e.type){case"header":return{...i,width:"full",type:"header-footer",content:{variant:"header",columns:1,showName:!0,showSurname:!0,showClass:!0,showGrade:!0}};case"footer":return{...i,width:"full",type:"header-footer",content:{variant:"footer",columns:1,showFeedback:!0,feedbackType:"smileys",feedbackCount:3,feedbackText:"Zpětná vazba:"}};case"heading-h1":return{...i,width:"full",type:"heading",content:{text:t||d.topic,level:"h1"}};case"heading":return{...i,type:"heading",content:{text:t||"Sekce",level:"h2"}};case"paragraph":{const p=t.startsWith("<")?t:`<p>${t}</p>`;return{...i,type:"paragraph",content:{html:p}}}case"image":{const{url:p,caption:s}=r(t);return{...i,type:"image",content:{url:p,alt:s,caption:s,size:100,alignment:"center",showCaption:!!s}}}case"infobox":{const p=t.startsWith("<")?t:`<p>${t}</p>`;return{...i,type:"paragraph",content:{html:p},visualStyles:{displayPreset:"infobox",backgroundColor:"#dbeafe",borderColor:"#3b82f6",borderRadius:12}}}case"table":{const p=t.split(`
`).map(a=>a.trim()).filter(a=>a.length>0).map(a=>a.split("|").map(v=>v.trim()));if(p.length===0)return{...i,type:"paragraph",content:{html:`<p>${t}</p>`}};const s=p[0],u=p.slice(1),f=s.map(a=>`<th><p>${a}</p></th>`).join(""),g=u.map(a=>`<tr>${a.map((l,h)=>`<td><p>${l||s[h]?l:""}</p></td>`).join("")}</tr>`).join(""),m=`<table><tbody><tr>${f}</tr>${g}</tbody></table>`;return{...i,type:"table",content:{html:m,rows:p.length,columns:s.length,hasHeader:!0,hasBorder:!0,hasRoundedCorners:!0}}}case"connect-pairs":{const s=t.split(`
`).filter(u=>u.includes("|")).map((u,f)=>{const[g,m]=u.split("|").map(a=>a.trim());return{id:`pair-${o}-${f}`,left:{id:`left-${o}-${f}`,type:"text",content:g||""},right:{id:`right-${o}-${f}`,type:"text",content:m||""}}});return s.length===0?{...i,type:"paragraph",content:{html:`<p>${t}</p>`}}:{...i,type:"connect-pairs",content:{instruction:"Spoj správné dvojice",pairs:s,shuffleSides:!0}}}case"fill-blank":{const p=t.match(/^([\s\S]+?)\s*=\s*(.+)$/);if(p){const s=p[1].trim(),u=p[2].trim(),f=s.split(/_{2,}/),g=[];return f.forEach((m,a)=>{m&&g.push({type:"text",content:m}),a<f.length-1&&g.push({type:"blank",id:`blank-${o}-${a}`,correctAnswer:u,acceptedAnswers:[u]})}),{...i,type:"fill-blank",content:{instruction:"",segments:g}}}return{...i,type:"paragraph",content:{html:`<p>${t}</p>`}}}case"free-answer":return{...i,type:"free-answer",content:{question:t,lines:3}};case"multiple-choice":{const p=t.split(`
`).map(g=>g.trim()).filter(Boolean),s=p[0]||"",u=[],f=[];return p.slice(1).forEach((g,m)=>{const a=g.match(/^([A-Da-d])\)\s*(.+)/);if(a){let v=a[2].trim();const l=v.endsWith("*");l&&(v=v.slice(0,-1).trim());const h=`opt-${o}-${m}`;u.push({id:h,text:v}),l&&f.push(h)}}),s&&u.length>0?{...i,type:"multiple-choice",content:{question:s,options:u,correctAnswers:f.length>0?f:[u[0]?.id||"opt-0"],allowMultiple:!1}}:{...i,type:"paragraph",content:{html:`<p>${t}</p>`}}}default:return{...i,type:"paragraph",content:{html:`<p>${t}</p>`}}}}function sn(e){return e.map(t=>t.width!=="half"||typeof t.gridSpan=="number"&&t.gridSpan>0?t:{...t,gridSpan:6})}function ln(e){return e.map(t=>{if(t.type==="multiple-choice"||t.type==="fill-blank"||t.type==="connect-pairs")return{...t,gridSpan:t.gridSpan??12,marginBottom:Math.max(t.marginBottom??0,28)};if(t.type==="free-answer"){const o=t.content||{},n=Math.max(5,Math.min(12,o.lines??5));return{...t,gridSpan:t.gridSpan??12,marginBottom:Math.max(t.marginBottom??0,n*40),marginStyle:t.marginStyle??"lined",content:{...o,lines:0}}}if(t.type==="heading"){const o=t.content?.level;if(o==="h2"||o==="h1")return{...t,marginBottom:Math.max(t.marginBottom??0,o==="h1"?8:14)}}return t})}function zt(e,t){const o=[];let n=0;if(console.log("[Worksheet Parser] Input text length:",e?.length||0),console.log("[Worksheet Parser] First 500 chars:",e?.substring(0,500)),!e||e.trim().length<50)return console.error("[Worksheet Parser] Text is empty or too short!"),[{id:T(),type:"heading",order:0,width:"full",content:{text:`${t.topic} - Pracovní list`,level:"h1"}},{id:T(),type:"paragraph",order:1,width:"full",content:{html:"<p>Generování pracovního listu selhalo. Zkuste to prosím znovu.</p>"}}];const d=e.split(`
`);let r="",i=[],p=!1;const s=()=>{if(!r||i.length===0)return;const u=i.join(`
`).trim(),f=p?"half":"full";switch(r.toUpperCase()){case"HEADER":o.push({id:T(),type:"header-footer",order:n++,width:"full",content:{variant:"header",columns:1,showName:!0,showSurname:!0,showClass:!0,showGrade:!0}});break;case"FOOTER":o.push({id:T(),type:"header-footer",order:n++,width:"full",content:{variant:"footer",columns:1,showFeedback:!0,feedbackType:"smileys",feedbackCount:3,feedbackText:"Zpětná vazba:"}});break;case"HEADING-H1":o.push({id:T(),type:"heading",order:n++,width:"full",content:{text:u,level:"h1"}});break;case"HEADING":o.push({id:T(),type:"heading",order:n++,width:"full",content:{text:u,level:"h2"}});break;case"PARAGRAPH":o.push({id:T(),type:"paragraph",order:n++,width:f,widthPercent:p?50:void 0,content:{html:`<p>${u}</p>`}});break;case"INFOBOX":o.push({id:T(),type:"paragraph",order:n++,width:f,widthPercent:p?50:void 0,content:{html:`<p>${u}</p>`},visualStyles:{displayPreset:"infobox",backgroundColor:"#dbeafe",borderColor:"#3b82f6",borderRadius:12}});break;case"OBRÁZEK":case"IMAGE":{const c=u.replace(/- HALF LAYOUT/i,"").trim();let b="",k=c;if(c.startsWith("http://")||c.startsWith("https://"))b=c,k="";else{const z=c.toLowerCase().replace(/[^a-z0-9]/g,""),A=x=>{const P=x.toLowerCase().replace(/[^a-z0-9]/g,"");return P===z||P.includes(z)||z.includes(P)},O=(t.media?.images||[]).find(x=>A(x.title||"")),E=[...t.media?.generatedIllustrations||[],...t.media?.generatedMapBetaImages||[],...t.media?.generatedEnvironment3dImages||[]].find(x=>A(x.name||x.title||"")),D=(t.media?.generatedPhotos||[]).find(x=>A(x.name||x.title||""));b=(O||E||D)?.url||"",b?console.log("[Parser] ✅ Image resolved by name:",c,"->",b.slice(0,60)):(b=[...t.media?.generatedIllustrations||[],...t.media?.generatedPhotos||[],...t.media?.generatedMapBetaImages||[],...t.media?.generatedEnvironment3dImages||[],...t.media?.images||[]][0]?.url||"",console.log("[Parser] Image not matched by name, using first available:",b?"found":"none"))}o.push({id:T(),type:"image",order:n++,width:p?"half":"full",widthPercent:p?50:void 0,...p?{gridSpan:6}:{},content:{url:b,alt:k,caption:k,size:100,alignment:"center"}});break}case"MULTIPLE-CHOICE":const g=u.split(`
`).filter(c=>c.trim()),m=g[0]?.trim()||"",a=[],v=[];g.slice(1).forEach((c,b)=>{const k=c.match(/^([A-D])\)\s*(.+)/i);if(k){let z=k[2].trim();const A=z.endsWith("*");A&&(z=z.slice(0,-1).trim());const O=`opt-${b}`;a.push({id:O,text:z}),A&&v.push(O)}}),m&&a.length>0&&o.push({id:T(),type:"multiple-choice",order:n++,width:"full",content:{question:m,options:a,correctAnswers:v.length>0?v:["opt-0"],allowMultiple:!1}});break;case"FILL-BLANK":const l=u.match(/(.+?)=\s*(.+)/);if(l){const c=l[1].trim(),b=l[2].trim(),k=c.split(/___+/),z=[];k.forEach((A,O)=>{A&&z.push({type:"text",content:A}),O<k.length-1&&z.push({type:"blank",id:`blank-${n}-${O}`,correctAnswer:b,acceptedAnswers:[b]})}),o.push({id:T(),type:"fill-blank",order:n++,width:"full",content:{instruction:"",segments:z}})}break;case"FREE-ANSWER":o.push({id:T(),type:"free-answer",order:n++,width:"full",content:{question:u,lines:3}});break;case"CONNECT-PAIRS":const h=[];u.split(`
`).forEach((c,b)=>{const k=c.match(/(.+?)\s*\|\s*(.+)/);k&&h.push({id:`pair-${b}`,left:{id:`left-${b}`,type:"text",content:k[1].trim()},right:{id:`right-${b}`,type:"text",content:k[2].trim()}})}),h.length>0&&o.push({id:T(),type:"connect-pairs",order:n++,width:"full",content:{instruction:"Spoj správné dvojice",pairs:h,shuffleSides:!0}});break}i=[],p=!1};for(const u of d){const f=u.match(/^(HEADER|FOOTER|HEADING-H1|HEADING|PARAGRAPH|INFOBOX|OBRÁZEK|IMAGE|MULTIPLE-CHOICE|FILL-BLANK|FREE-ANSWER|CONNECT-PAIRS|TABLE):\s*(.*)/i);if(f){s(),r=f[1];const g=f[2]?.trim()||"";p=g.toUpperCase().includes("HALF LAYOUT")||u.toUpperCase().includes("HALF LAYOUT");const m=g.replace(/- HALF LAYOUT/i,"").replace(/HALF LAYOUT/i,"").trim();m&&i.push(m)}else u.trim()&&r&&i.push(u.trim())}return s(),o.length===0&&(console.warn("[Worksheet Parser] No blocks parsed! Adding fallback."),o.push({id:T(),type:"heading",order:n++,width:"full",content:{text:`${t.topic} - Pracovní list`,level:"h1"}})),console.log("[Worksheet Parser] Generated",o.length,"blocks"),console.log("[Worksheet Parser] Block types:",o.map(u=>u.type).join(", ")),ln(sn(o))}async function cn(e){console.log("[Generator] Generating text...");const t=oe(e),o=pe("text"),n=(k,z)=>(z.priority?1:0)-(k.priority?1:0),d=(e.media?.images||[]).filter(k=>!k.excluded).sort(n),r=(e.media?.generatedEnvironment3dImages||[]).filter(k=>!k.excluded).sort(n),i=[...e.media?.generatedIllustrations||[],...e.media?.generatedMapBetaImages||[]].filter(k=>!k.excluded).sort(n),p=(e.media?.generatedPhotos||[]).filter(k=>!k.excluded).sort(n),s=(k,z)=>{const A=k[z]||"Bez názvu";return k.priority?`⭐ "${A}" (PRIORITNÍ - POUŽIJ!)`:`"${A}"`},u=d.length>0?`
🖼️ DOSTUPNÉ OBRÁZKY Z WEBU (vyber 2-3 relevantní):
${d.map((k,z)=>`  ${z+1}. ${s(k,"title")}`).join(`
`)}`:"",f=i.length>0?`
🎨 DOSTUPNÉ ILUSTRACE (preferuj tyto! vyber 3-4):
${i.map((k,z)=>`  ${z+1}. ${s(k,"name")}`).join(`
`)}`:"",g=r.length>0,m=g?`
🌍 DOSTUPNÁ 3D PROSTŘEDÍ (360° panoramy – PŘEDNOST u vhodných H2! vyber 1-2):
${r.map((k,z)=>`  ${z+1}. ${s(k,"name")}`).join(`
`)}`:"",a=p.length>0?`
📷 DOSTUPNÉ FOTKY (vyber 1-2 relevantní):
${p.map((k,z)=>`  ${z+1}. ${s(k,"name")}`).join(`
`)}`:"",v=(e.media?.imageGroups||[]).filter(k=>(k.subjects||[]).some(z=>z.status==="done"&&z.imageUrl)),l=v.length>0?`
🖼️ SKUPINY OBRÁZKŮ (GALERIE) - pod vhodné H2 přidej SkupinaH2: Název skupiny:
${v.map((k,z)=>`  ${z+1}. "${k.title}" (${(k.subjects||[]).filter(A=>A.status==="done"&&A.imageUrl).length} obrázků)`).join(`
`)}`:"",h=`Napiš PODROBNÝ výukový text k tématu "${e.topic}" pro ${e.grade}. třídu ZŠ.

${t}${o}${m}${f}${a}${u}${l}

FORMÁT TEXTU (NEZAČÍNEJ H1 nadpisem - ten je automaticky z názvu dokumentu):

## Podnadpis sekce 1
${g?`Prostredi3dH2: Název 3D prostředí ze seznamu (PŘEDNOST u historických/geografických scén – 360° panorama)
`:""}IlustraceH2: Název ilustrace ze seznamu (PREFERUJ - pro vygenerované ikony/ilustrace)
FotkaH2: Název fotky ze seznamu (pro vygenerované fotografie)
ObrázekH2: Název obrázku ze seznamu (pro fotky z webu - POUZE pokud nejsou lepší ilustrace/fotky)
SkupinaH2: Název skupiny ze seznamu skupin (pro galerii více obrázků najednou)
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
- **Jméno** – kdo to byl a proč je důležitý (1 věta)
- **Jméno** – kdo to byl a proč je důležitý (1 věta)
(2-4 osobnosti, pokud jsou k tématu relevantní)

PRAVIDLA:
- 500-800 slov celkem (PODROBNĚJI!)
- 5-7 hlavních sekcí + 3 závěrečné sekce (pojmy, data, osobnosti)
- ${g?"PREFERUJ 3D PROSTŘEDÍ (🌍) u vhodných sekcí, pak ilustrace, fotky, web!":"PREFERUJ ILUSTRACE (50%), pak FOTKY (30%), pak OBRÁZKY Z WEBU (20%)!"}
- ${g?`Prostredi3dH2: [přesný název z 🌍 DOSTUPNÁ 3D PROSTŘEDÍ] – 360° panorama pod H2, kde to dává smysl
`:""}- IlustraceH2: [přesný název z 🎨 DOSTUPNÉ ILUSTRACE] - PŘEDNOSTNĚ POD H2 nadpis
- FotkaH2: [přesný název z 📷 DOSTUPNÉ FOTKY] - pro AI fotografie
- ObrázekH2: [přesný název z 🖼️ DOSTUPNÉ OBRÁZKY Z WEBU] - pouze jako doplněk
- SkupinaH2: [přesný název ze 🖼️ SKUPINY OBRÁZKŮ] - použij pro H2 kde se hodí zobrazit galerii více obrázků (může obsahovat i 3D prostředí)
- U většiny H2 použij ${g?"3D prostředí nebo ":""}ilustraci nebo fotku, obrázky z webu jen výjimečně
- INFOBOX modrý: pro zajímavosti, "věděli jste?" (info)
- INFOBOX zelený: pro tipy a rady (tip)
- INFOBOX oranžový: pro upozornění (warning)
- INFOBOX fialový: pro shrnutí (summary)
- Srozumitelný jazyk pro ${e.grade}. třídu
- Každý obrázek/ilustraci použij MAX 1x
- INFOBOX musí mít nadpis a text na dalším řádku
- VŽDY přidej závěrečné sekce: Důležité pojmy, Důležitá data, Důležité osobnosti
- NEPIŠ závěrečnou galerii obrázků — obrázky se automaticky zobrazí pod příslušnými H2 jako přepínatelný karusel`,c=ee({topic:e.topic,subject:e.subjectCode||"Dějepis",grade:e.grade,context:t,feedback:o,environment3dList:m,illustrationList:f,photoList:a,imageList:u,imageGroupList:l}),b=c&&!Do(c)&&!Fo(c)?c:h;try{const k=await Ko(b,e.subjectCode);console.log("[Generator] Raw text response:",k.substring(0,500));let z=[];const A=Zt(k),O=Yt(e),E=new Set,D=g?["environment-3d"]:void 0,L=(U,q)=>{const K=O.filter(W=>q.includes(W.kind)),R=A.get(U),Q=Qt(U,K,E,R,D);if(!Q)return null;const H=Wt(U,Q);H.imageUrl&&E.add(H.imageUrl);for(const W of H.imageSteps||[])W.url&&E.add(W.url);return H},x=k.split(`
`);let P="";for(let U=0;U<x.length;U++){const q=x[U].trim(),K=q.match(/^##\s*(.+)/);K&&(P=K[1].trim());const R=q.match(/^ObrázekH2:\s*(.+)/i),Q=q.match(/^IlustraceH2:\s*(.+)/i),H=q.match(/^FotkaH2:\s*(.+)/i),W=q.match(/^Prostredi3dH2:\s*(.+)/i),je=q.match(/^SkupinaH2:\s*(.+)/i);if(W&&P){const S=W[1].trim().toLowerCase(),N=r.find(I=>{const F=(I.name||"").toLowerCase();return F===S||F.includes(S)||S.includes(F)||F.replace(/[^a-z0-9]/g,"").includes(S.replace(/[^a-z0-9]/g,""))});if(N?.url){const I={id:crypto.randomUUID(),heading:P,type:"environment-3d",imageUrl:N.url,environmentUrl:N.url,environmentLabel:N.name,imageSteps:[{id:crypto.randomUUID(),url:N.url,description:N.name}]};z.push(I),E.add(N.url),console.log("[Generator] Found 3D environment for H2:",P,"->",N.name)}else{const I=L(P,["environment-3d"]);I&&(z.push(I),console.log("[Generator] Content fallback 3D environment for H2:",P,"->",I.imageUrl))}}else if(R&&P){const S=R[1].trim().toLowerCase(),N=e.media?.images?.filter(I=>!I.excluded)?.find(I=>{const F=(I.title||"").toLowerCase();return F===S||F.includes(S)||S.includes(F)||F.replace(/[^a-z0-9]/g,"").includes(S.replace(/[^a-z0-9]/g,""))});if(N?.url){const I={id:crypto.randomUUID(),heading:P,type:"image",imageUrl:N.url,imageSteps:[{id:crypto.randomUUID(),url:N.url,description:N.title}]};z.push(I),E.add(N.url),console.log("[Generator] Found image for H2:",P,"->",N.title)}else{const I=L(P,["web"]);I&&(z.push(I),console.log("[Generator] Content fallback web image for H2:",P,"->",I.imageUrl))}}else if(Q&&P){const S=Q[1].trim().toLowerCase(),N=[...e.media?.generatedIllustrations||[],...e.media?.generatedMapBetaImages||[]].filter(I=>!I.excluded)?.find(I=>{const F=(I.name||"").toLowerCase();return F===S||F.includes(S)||S.includes(F)||F.replace(/[^a-z0-9]/g,"").includes(S.replace(/[^a-z0-9]/g,""))});if(N?.url){const I={id:crypto.randomUUID(),heading:P,type:"image",imageUrl:N.url,imageSteps:[{id:crypto.randomUUID(),url:N.url,description:N.name}]};z.push(I),E.add(N.url),console.log("[Generator] Found illustration for H2:",P,"->",N.name)}else{const I=L(P,g?["environment-3d","illustration"]:["illustration","environment-3d"]);I&&(z.push(I),console.log("[Generator] Content fallback illustration for H2:",P,"->",I.imageUrl))}}else if(H&&P){const S=H[1].trim().toLowerCase(),N=e.media?.generatedPhotos?.filter(I=>!I.excluded)?.find(I=>{const F=(I.name||"").toLowerCase();return F===S||F.includes(S)||S.includes(F)||F.replace(/[^a-z0-9]/g,"").includes(S.replace(/[^a-z0-9]/g,""))});if(N?.url){const I={id:crypto.randomUUID(),heading:P,type:"image",imageUrl:N.url,imageSteps:[{id:crypto.randomUUID(),url:N.url,description:N.name}]};z.push(I),E.add(N.url),console.log("[Generator] Found photo for H2:",P,"->",N.name)}else{const I=L(P,["photo"]);I&&(z.push(I),console.log("[Generator] Content fallback photo for H2:",P,"->",I.imageUrl))}}else if(je&&P){const S=je[1].trim().toLowerCase(),N=(e.media?.imageGroups||[]).find(I=>{const F=(I.title||"").toLowerCase();return F===S||F.includes(S)||S.includes(F)||F.replace(/[^a-z0-9]/g,"").includes(S.replace(/[^a-z0-9]/g,""))});if(N){const I=(N.subjects||[]).filter(F=>F.status==="done"&&F.imageUrl);if(I.length>0){const F={id:crypto.randomUUID(),heading:P,type:"image",imageUrl:I[0].imageUrl,imageGroupId:N.id,imageSteps:I.map(ue=>({id:crypto.randomUUID(),url:ue.imageUrl,description:ue.name}))};z.push(F);for(const ue of I)ue.imageUrl&&E.add(ue.imageUrl);console.log("[Generator] Found image group for H2:",P,"->",N.title,`(${I.length} subjects)`)}}else{const I=L(P,["image-group"]);I&&(z.push(I),console.log("[Generator] Content fallback image group for H2:",P,"->",I.imageUrl))}}}const $=Xt(k);z=eo(z,$,O,A,D),z=to(z,$,O,A,D,{topic:e.topic,useAllMedia:!0});let V=k.replace(/^\s*(?:ObrázekH2|IlustraceH2|FotkaH2|SkupinaH2|Prostredi3dH2)\s*:?.*$/gmi,"");V=V.replace(/^#\s+.+$/gm,"");const J={modrý:"info",červený:"danger",zelený:"tip",oranžový:"warning",fialový:"summary"};V=V.replace(/INFOBOX (modrý|červený|zelený|oranžový|fialový):\s*(.+?)(?:\n([^\n#]*))?(?=\n\n|\n##|$)/gim,(U,q,K,R)=>{const Q=J[q.toLowerCase()]||"info",H=R?R.trim():"";return`
<div data-type="callout" data-callout-type="${Q}" class="callout callout-${Q}"><p><strong>${K.trim()}</strong></p>${H?`<p>${H}</p>`:""}</div>
`});let X=Ue(V);z=oo(z);const y=crypto.randomUUID(),w={type:"text",id:y,title:e.topic+" - Učební text",status:"draft",createdAt:new Date().toISOString()},C=no(e.media),M={id:y,title:e.topic,content:X,documentType:"ucebni-text",sectionImages:z,metadata:{sourceDatasetId:e.id,datasetPickerAssets:C}};console.log("[Generator] 💾 Saving document:",{id:y,title:M.title,contentLength:M.content?.length});try{if(Vo({id:y,title:e.topic,name:e.topic,type:"document",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},M),console.log(`[Generator] ✅ Document saved to localStorage: ${y}`),!await Ce({id:y,title:e.topic,content:X,documentType:"ucebni-text",sectionImages:z,metadata:M.metadata}))throw new Error("Učební text se nepodařilo uložit do Supabase. Zkus generování spustit znovu.");console.log(`[Generator] ✅ Document synced to Supabase: ${y}`);const q=localStorage.getItem(`vivid-doc-${y}`);console.log("[Generator] 💾 localStorage verification:",q?"SUCCESS":"FAILED")}catch(U){console.error(`[Generator] ❌ saveDocument failed for ${y}:`,U);try{localStorage.setItem(`vivid-doc-${y}`,JSON.stringify(M)),console.log(`[Generator] ✅ Fallback localStorage save OK for ${y}`)}catch(q){console.error("[Generator] ❌ Fallback also failed:",q)}return{success:!1,error:U instanceof Error?U.message:String(U)}}console.log("[Generator] Text saved with",z.length,"sectionImages (H2 carousels)");const G=k.replace(/^ObrázekH2:\s*(.+)$/gm,"🖼️ [$1]").replace(/INFOBOX (modrý|červený):\s*/gi,"📦 INFOBOX: ");return console.log("[Generator] Text saved:",y),{success:!0,id:y,preview:G}}catch(k){return console.error("[Generator] Text error:",k),{success:!1,error:String(k)}}}function Ue(e){return e.replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n\n/g,"</p><p>").replace(/^(?!<[a-z])(.+)$/gm,"<p>$1</p>").replace(/<p><\/p>/g,"").replace(/<p>(<figure.*?<\/figure>)<\/p>/gs,"$1").replace(/<p>(<div.*?<\/div>)<\/p>/gs,"$1")}async function he(e,t="mixed",o,n){console.log("[Generator] Generating test...");const d=oe(e),r=pe("test"),i=e.media?.images||[],p=[...e.media?.generatedIllustrations||[],...e.media?.generatedMapBetaImages||[],...e.media?.generatedEnvironment3dImages||[]];let s="";i.length>0&&(s+=`
🖼️ DOSTUPNÉ OBRÁZKY:
${i.map((l,h)=>`  ${h+1}. "${l.title}"`).join(`
`)}`),p.length>0&&(s+=`
🎨 DOSTUPNÉ ILUSTRACE:
${p.map((l,h)=>`  ${h+1}. "${l.name}"`).join(`
`)}`),console.log(`[Generator] Test media: ${i.length} images, ${p.length} illustrations`);const u=o?.trim()?o.trim():t==="abc-6"?`
Vytvoř přesně 6 ABC otázek. Každá otázka má 4 možnosti A-D a právě jednu správnou možnost označenou hvězdičkou (*). Nepřidávej otevřené otázky.`:t==="reflection-6"?`
Vytvoř přesně 6 otevřených otázek k zamyšlení nebo validaci pochopení tématu. Nepřidávej ABC možnosti. Každá otázka má ověřit porozumění, příčiny, důsledky nebo aplikaci tématu.`:`
Vytvoř přesně 6 otázek:
- 4 ABC otázky (každá se 4 možnostmi A-D, jedna správná s hvězdičkou *)
- 2 otevřené otázky k zamyšlení`,f=t==="abc-6"?"Test: 6 ABC otázek":t==="reflection-6"?"Písemka: 6 otázek k zamyšlení":"Test",g=t==="abc-6"?`Formát odpovědi:
Vrať POUZE 6 bloků OTÁZKA 1 až OTÁZKA 6. Všechno piš česky. Nepoužívej anglické nadpisy jako QUESTION.

OTÁZKA X (ABC):
[český text otázky]
OBRÁZEK: [přesný název obrázku/ilustrace ze seznamu - volitelné]
A) [možnost]
B) [možnost *pokud správná]
C) [možnost]
D) [možnost]

PRAVIDLA:
- Přesně 6 otázek, ani méně, ani více.
- Každá otázka má přesně 4 možnosti A-D.
- Právě jedna možnost má hvězdičku (*).
- Nepřidávej otevřené otázky.
- Nepřidávej shrnutí, nadpis mimo otázky ani komentář.
- Pokud použiješ obrázek, použij PŘESNÝ název ze seznamu výše.`:t==="reflection-6"?`Formát odpovědi:
Vrať POUZE 6 bloků OTÁZKA 1 až OTÁZKA 6. Všechno piš česky. Nepoužívej anglické nadpisy jako QUESTION.

OTÁZKA X (OTEVŘENÁ):
[česká otázka vyžadující zamyšlení a vlastní odpověď]

PRAVIDLA:
- Přesně 6 otevřených otázek, ani méně, ani více.
- Nepřidávej ABC možnosti.
- Nepřidávej shrnutí, nadpis mimo otázky ani komentář.`:`Formát odpovědi:
Vrať POUZE 6 bloků OTÁZKA 1 až OTÁZKA 6. Všechno piš česky. Nepoužívej anglické nadpisy jako QUESTION.

Pro ABC otázku:
OTÁZKA X (ABC):
[text otázky]
OBRÁZEK: [název obrázku/ilustrace ze seznamu - volitelné]
A) [možnost]
B) [možnost *pokud správná]
C) [možnost]
D) [možnost]

Pro otevřenou otázku:
OTÁZKA X (OTEVŘENÁ):
[otázka vyžadující zamyšlení a vlastní odpověď]

PRAVIDLA:
- Přesně 6 otázek, ani méně, ani více.
- Použij 4 ABC otázky a 2 otevřené otázky.
- Nepřidávej shrnutí, nadpis mimo otázky ani komentář.`,m=ee({topic:e.topic,subject:e.subjectCode||"Dějepis",grade:e.grade,context:d,feedback:r,mediaSection:s,testDefaultInstructions:u})||`Vytvoř ${f.toLowerCase()} k tématu "${e.topic}" pro ${e.grade}. třídu.

${u}`,a=!/form[áa]t odpov[eě]di|OT[ÁA]ZKA X|PRAVIDLA/i.test(m),v=`${m.trim()}${a?`

${g}`:""}

## OBSAHOVÁ ČÁST PROMPTU
Tuhle část generátor dosazuje z aktuálního datasetu.

${d}
${r||""}
${s}`.trim();console.log("[Generator] Test prompt:",v),n?.("test-prompt",`Kompletní prompt ${f} (${v.length} znaků)`,{prompt:v});try{const l=await _([{role:"user",content:v}],B(e.subjectCode,"agent"),{temperature:.7,max_tokens:4096}),h=un(pn(l,e),e,t),c=crypto.randomUUID(),b={id:c,title:`${f}: ${e.topic}`,slides:h,settings:{showPoints:!0,allowBack:!1,shuffleSlides:!1,shuffleOptions:!0,timeLimit:30,passingScore:50},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),sourceDatasetId:e.id},{stripBase64FromObject:k}=await Y(async()=>{const{stripBase64FromObject:E}=await import("./main-app-BHMLsxig.js").then(D=>D.il);return{stripBase64FromObject:E}},__vite__mapDeps([0,1,2,3,4,5])),z=k(b);try{be(z)}catch(E){console.warn(`[Generator] localStorage failed for test ${c}:`,E)}if(!await te(z))throw new Error("Písemku se nepodařilo uložit do Supabase. Zkus generování spustit znovu.");const O=h.slice(1).map((E,D)=>{const L=E,x=L.media?.url,P=x?`
🖼️ Obrázek: ${x.split("/").pop()?.split("?")[0]||"přiložen"}`:"";if(L.question&&L.options){const $=L.options.map(V=>`${V.label}) ${V.content}${V.isCorrect?" ✓":""}`).join(`
`);return`**Otázka ${D+1}:** ${L.question}${P}
${$}`}else if(L.question)return`**Otázka ${D+1} (otevřená):** ${L.question}`;return""}).filter(Boolean).join(`

`);return console.log("[Generator] Test saved:",c),{success:!0,id:c,preview:O}}catch(l){return console.error("[Generator] Test error:",l),{success:!1,error:String(l)}}}function pn(e,t){const o=r=>{const i=String(r||"").trim();if(!i)return;if(/^https?:\/\/|^\/\//i.test(i))return i;const p=i.toLowerCase(),s=m=>String(m||"").toLowerCase().replace(/[^a-z0-9]/g," ").replace(/\s+/g," ").trim(),u=s(p);return[...t.media?.images||[],...t.media?.generatedIllustrations||[],...t.media?.generatedMapBetaImages||[],...t.media?.generatedEnvironment3dImages||[],...t.media?.generatedPhotos||[]].find(m=>{const a=(m.title||"").toLowerCase(),v=(m.name||"").toLowerCase(),l=(m.url||"").toLowerCase(),h=s(a),c=s(v);return m.url===i||a===p||v===p||h===u||c===u||a.includes(p)||v.includes(p)||p.includes(a)||p.includes(v)||h.includes(u)||u.includes(h)||c.includes(u)||u.includes(c)||l.includes(p)})?.url},n=[];return n.push({...re(0,"title-content"),title:`✏️ Písemka: ${t.topic}`,content:`<p><strong>Jméno:</strong> _________________</p><p><strong>Třída:</strong> ${t.grade}._____</p>`}),e.split(/(?:^|\n)\s*(?:OTÁZKA|Otázka)\s*\d+\s*(?:[:\.)]|(?:\s*\([^)]+\))?\s*:?)?/gim).filter(r=>r.trim()).forEach((r,i)=>{const p=r.trim().split(`
`).filter(g=>g.trim());if(p.length===0)return;const s=p[0].toLowerCase();let u;for(const g of p){const m=g.match(/^OBRÁZEK:\s*(.+)/i);if(m){const a=m[1].trim().toLowerCase(),v=t.media?.images?.find(l=>{const h=(l.title||"").toLowerCase();return h===a||h.includes(a)||a.includes(h)||h.replace(/[^a-z0-9]/g,"").includes(a.replace(/[^a-z0-9]/g,""))||a.replace(/[^a-z0-9]/g,"").includes(h.replace(/[^a-z0-9]/g,""))});if(v?.url)u=v.url,console.log("[Parser] ✅ Test found image:",a);else{const l=t.media?.generatedIllustrations?.find(h=>{const c=(h.name||"").toLowerCase();return c===a||c.includes(a)||a.includes(c)||c.replace(/[^a-z0-9]/g,"").includes(a.replace(/[^a-z0-9]/g,""))||a.replace(/[^a-z0-9]/g,"").includes(c.replace(/[^a-z0-9]/g,""))});l?.url&&(u=l.url,console.log("[Parser] ✅ Test found illustration:",a,"->",l.name))}}}const f=[];if(p.forEach(g=>{const m=g.match(/^([A-D])\)\s*(.+)/i);if(m){let a=m[2].trim(),v;const l=a.match(/OBRÁZEK:\s*(.+)$/i);l&&(v=o(l[1]),a=a.replace(/\s*OBRÁZEK:\s*(.+)$/i,"").trim());const h=a.endsWith("*");h&&(a=a.slice(0,-1).trim()),f.push({id:m[1].toLowerCase(),label:m[1].toUpperCase(),content:a,isCorrect:h,...v?{imageUrl:v}:{}})}}),s.includes("abc")||s.includes("vyber")||f.length>=2){const g=p.find(m=>{const a=m.trim();return a&&!/^\(?abc\)?:?$/i.test(a)&&!/^obrázek:/i.test(a)&&!/^[A-D]\)/i.test(a)})?.trim()||"";!f.some(m=>m.isCorrect)&&f.length>0&&(f[0].isCorrect=!0),g&&f.length>=2&&n.push({...ge(n.length),question:g,options:f,points:1,...u?{media:{type:"image",url:u}}:{}})}else if(s.includes("otevřen")||s.includes("odpověz")){const g=p[1]?.trim()||p[0].replace(/\([^)]+\)/g,"").trim();g&&n.push({...we(n.length),question:g,correctAnswers:[],points:3})}else{const g=p.find(m=>{const a=m.trim();return a&&!/^\(?abc\)?:?$/i.test(a)&&!/^\(?otevřen/i.test(a)&&!/^obrázek:/i.test(a)&&!/^[A-D]\)/i.test(a)})?.trim()||p[0]?.replace(/\([^)]+\)/g,"").trim()||"";g&&n.push({...we(n.length),question:g,correctAnswers:[],points:3})}}),n}function Te(e,t){const o=[{id:"a",label:"A",content:`Správné vysvětlení podle učiva k tématu ${t.topic}`,isCorrect:!0},{id:"b",label:"B",content:"Náhodný detail bez souvislosti s tématem",isCorrect:!1},{id:"c",label:"C",content:"Tvrzení, které zaměňuje příčinu a důsledek",isCorrect:!1},{id:"d",label:"D",content:"Příliš obecná odpověď bez konkrétního významu",isCorrect:!1}],n=["a","b","c","d"].map((r,i)=>{const p=e?.find(u=>u.id.toLowerCase()===r)||e?.[i]||o[i],s=p;return{id:r,label:r.toUpperCase(),content:p.content?.trim()||o[i].content,isCorrect:!1,...s?.imageUrl?{imageUrl:s.imageUrl}:{}}}),d=Math.max(0,n.findIndex((r,i)=>!!(e?.find(s=>s.id.toLowerCase()===r.id)||e?.[i])?.isCorrect));return n[d].isCorrect=!0,n}function un(e,t,o){const n=e[0]||{...re(0,"title-content"),title:o==="mixed"?`✅ Test: ${t.topic}`:`✏️ Písemka: ${t.topic}`,content:`<p><strong>Jméno:</strong> _________________</p><p><strong>Třída:</strong> ${t.grade}._____</p>`},d=[`Které tvrzení nejlépe vystihuje téma "${t.topic}"?`,`Co je pro téma "${t.topic}" nejdůležitější si zapamatovat?`,`Která souvislost k tématu "${t.topic}" dává největší smysl?`,`Jaký důsledek nejvíce souvisí s tématem "${t.topic}"?`,`Které vysvětlení bys použil/a u mapy nebo příkladu k tématu "${t.topic}"?`,`Která odpověď nejlépe ověřuje porozumění tématu "${t.topic}"?`],r=[`Vysvětli vlastními slovy, co je na tématu "${t.topic}" nejdůležitější.`,`Uveď jednu příčinu nebo podmínku, která s tématem "${t.topic}" souvisí, a vysvětli proč.`,`Popiš jeden důsledek tématu "${t.topic}" pro člověka, krajinu nebo mapu.`,`Vyber jeden konkrétní příklad k tématu "${t.topic}" a vysvětli ho ve 2-4 větách.`,`Porovnej dvě situace nebo místa, kde se téma "${t.topic}" projevuje jinak.`,"Napiš, podle čeho by učitel poznal, že tomuto tématu opravdu rozumíš."];if(o==="mixed"){const s=e.slice(1).filter(g=>g?.question||Array.isArray(g?.options)).map(g=>Array.isArray(g.options)&&g.options.length>=2?{...g,options:Te(g.options,t),points:g.points||1}:g);let u=s.filter(g=>Array.isArray(g.options)&&g.options.length>=2).length,f=s.length-u;for(;s.length<6;)u<4?(s.push({...ge(s.length+1),question:d[u%d.length],options:Te(void 0,t),points:1}),u+=1):(s.push({...we(s.length+1),question:r[f%r.length],correctAnswers:[],points:3}),f+=1);return[n,...s.slice(0,6).map((g,m)=>({...g,order:m+1}))]}if(o==="abc-6"){const p=e.slice(1).filter(s=>Array.isArray(s.options)&&s.options.length>=2).slice(0,6);for(p.forEach(s=>{s.options=Te(s.options,t),s.points=s.points||1});p.length<6;){const s=p.length+1;p.push({...ge(s),question:d[p.length],options:Te(void 0,t),points:1})}return[n,...p.map((s,u)=>({...s,order:u+1}))]}const i=e.slice(1).filter(p=>p.question&&!Array.isArray(p.options)).slice(0,6);for(;i.length<6;)i.push({...we(i.length+1),question:r[i.length],correctAnswers:[],points:3});return[n,...i.map((p,s)=>({...p,order:s+1}))]}async function dn(e){console.log("[Generator] Generating E-U-R lesson...");const t=oe(e),o=pe("lesson"),n=e.media?.images||[],d=[...e.media?.generatedIllustrations||[],...e.media?.generatedMapBetaImages||[],...e.media?.generatedEnvironment3dImages||[]],r=[...n.slice(0,8).map(f=>`🖼️ "${f.title}"`),...d.slice(0,5).map(f=>`🎨 "${f.name}"`)],i=e.content?.keyTerms?.slice(0,5).map(f=>f.term).join(", ")||"",p=e.content?.keyFacts?.slice(0,3).join("; ")||"",s=`Vytvoř BADATELSKOU E-U-R lekci o tématu "${e.topic}" pro ${e.grade}. třídu.

PRVNÍ KROK - VYBER JEDNO SILNÉ METODICKÉ TÉMA:
Na základě kontextu níže vyber JEDNO konkrétní metodické/badatelské téma, které:
- Je relevantní k "${e.topic}" (NE obecné téma jako "demokracie" pokud to není přímo součást látky!)
- Umožňuje badatelský přístup (žáci mohou něco objevit, zjistit, přijít na to)
- Je zajímavé a provokuje k diskuzi
- Vychází z konkrétních pojmů/faktů: ${i}

KONTEXT:
${t}${o}

POVINNÁ STRUKTURA (10 slidů):

INFO: 🎯 [Název lekce vycházející z vybraného metodického tématu]
OBRÁZEK: [vyber z dostupných vizuálů]
[1-2 motivační věty - proč je TOTO téma zajímavé pro žáky]

HLASOVÁNÍ: [Provokativní otázka kde žáci TIPUJÍ odpověď - musí se vztahovat k metodickému tématu]

NÁSTĚNKA: [Brainstorming otázka k metodickému tématu]

INFO: 📚 [Nadpis první části - souvisí s metodickým tématem]
OBRÁZEK: [vyber z dostupných vizuálů]
[2-3 věty s klíčovými informacemi]

ABC: [Otázka ověřující porozumění]
OBRÁZEK: [volitelně - pro vizuální otázku]
A) [možnost]
B) [správná odpověď] *
C) [možnost]
D) [možnost]

NÁSTĚNKA: [Diskuzní otázka k tématu]

INFO: 💡 [Zajímavost nebo překvapivý fakt]
OBRÁZEK: [vyber z dostupných vizuálů]
[2-3 věty]

HLASOVÁNÍ: [Názorová otázka]
MOŽNOSTI: Určitě ano | Spíše ano | Spíše ne | Určitě ne

ABC: [Další otázka]
OBRÁZEK: [vyber z dostupných vizuálů]
A) [možnost]
B) [možnost]
C) [správná odpověď] *
D) [možnost]

NÁSTĚNKA: [Reflexe - co jsme zjistili?]

INFO: ✅ Shrnutí
OBRÁZEK: [volitelně]
[3 klíčové body]

DOSTUPNÉ VIZUÁLY (použij 5-7 z nich!):
${r.join(`
`)}

PRAVIDLA:
- Každý slide MUSÍ začínat: INFO: nebo HLASOVÁNÍ: nebo NÁSTĚNKA: nebo ABC:
- OBRÁZEK: přidej ke 4-5 slidům (INFO i ABC) - použij PŘESNÝ název z výše!
- Lekce musí být o konkrétním tématu "${e.topic}", NE o obecných pojmech!
- Metodické téma vyber na základě faktů: ${p}
- MOŽNOSTI: jen u HLASOVÁNÍ kde chceš vlastní odpovědi
- ABC musí mít 4 možnosti, správná má * na konci`,u=ee({topic:e.topic,subject:e.subjectCode||"Dějepis",grade:e.grade,context:t,feedback:o,keyTermsList:i,factsList:p,allVisuals:r.join(`
`)})||s;try{const f=await _([{role:"user",content:u}],B(e.subjectCode,"agent"),{temperature:.7,max_tokens:2048}),g=jt(f,e),m=`lesson-${Date.now()}`,a={id:m,title:`Lekce: ${e.topic}`,slides:g,settings:{showPoints:!1,allowBack:!0,shuffleSlides:!1,shuffleOptions:!1,timeLimit:null,passingScore:null},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};try{be(a)}catch(h){console.warn(`[Generator] localStorage failed for lesson ${m}:`,h)}await te(a)||console.warn(`[Generator] Supabase sync failed for lesson ${m}`);const l=g.map((h,c)=>{const b=h,k=c<3?"🔵 EVOKACE":c<g.length-2?"🟢 UVĚDOMĚNÍ":"🟣 REFLEXE";if(b.type==="info"){const A=b.layout?.blocks?.some(E=>E.type==="image")?" 🖼️":"",O=b.background?" 🎨":"";return`${k} | 📚 **${b.title||"Info"}**${A}${O}
${b.content?.replace(/<[^>]+>/g,"")||""}`}else{if(b.activityType==="voting")return`${k} | 📊 **Hlasování:** ${b.question}
${b.options?.map(z=>`   ${z.label}) ${z.content}`).join(`
`)||""}`;if(b.activityType==="board"){const z=b.questionImage?" 🖼️":"";return`${k} | 💬 **Nástěnka:**${z} ${b.question}`}else if(b.activityType==="abc"){const z=b.media?.url?" 🖼️":"";return`${k} | ❓ **ABC:**${z} ${b.question}
${b.options?.map(A=>`   ${A.label}) ${A.content}${A.isCorrect?" ✓":""}`).join(`
`)||""}`}else if(b.question)return`${k} | 💬 ${b.question}`}return""}).filter(Boolean).join(`

`);return console.log("[Generator] Lesson saved:",m),{success:!0,id:m,preview:l}}catch(f){return console.error("[Generator] Lesson error:",f),{success:!1,error:String(f)}}}function jt(e,t){const o=[];let n=e.replace(/\*\*SLIDE\s*\d+[^*]*\*\*/gi,`
`).replace(/SLIDE\s*\d+[:\-–]\s*[^\n]*/gi,`
`).replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/<\/?p>/gi,`
`).replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/---+/g,`
`).replace(/🎨\s*OBRÁZEK:/gi,"OBRÁZEK:").replace(/🖼️\s*OBRÁZEK:/gi,"OBRÁZEK:").replace(/\n{3,}/g,`

`).trim();console.log("[Lesson Parser] Cleaned text preview:",n.substring(0,300));const d=/(?=^INFO:|^NÁSTĚNKA PRO A PROTI:|^NÁSTĚNKA ÚKOL:|^NÁSTĚNKA:|^HLASOVÁNÍ OD-DO:|^HLASOVÁNÍ ZPĚTNÁ VAZBA:|^HLASOVÁNÍ:|^ABC:|^KVÍZ-VÝBĚR:|^KVÍZ:)/mi,r=n.split(d).filter(p=>p.trim());console.log("[Lesson Parser] Found",r.length,"blocks");const i={blue:"#E3F2FD",green:"#E8F5E9",purple:"#F3E5F5",orange:"#FFF3E0",pink:"#FCE4EC",yellow:"#FFFDE7"};if(r.forEach(p=>{const s=p.trim().split(`
`).filter(a=>a.trim());if(s.length===0)return;const u=s[0].trim();let f,g,m=[];for(const a of s){const v=a.match(/^OBRÁZEK:\s*(.+)/i);if(v){const c=v[1].trim().toLowerCase(),b=t.media?.images?.find(k=>{const z=(k.title||"").toLowerCase();return z.includes(c)||c.includes(z)||z.replace(/[^a-z0-9]/g,"").includes(c.replace(/[^a-z0-9]/g,""))});if(b?.url)f=b.url;else{const k=[...t.media?.generatedIllustrations||[],...t.media?.generatedMapBetaImages||[],...t.media?.generatedEnvironment3dImages||[]].find(z=>{const A=(z.name||"").toLowerCase();return A.includes(c)||c.includes(A)||A.replace(/[^a-z0-9]/g,"").includes(c.replace(/[^a-z0-9]/g,""))});k?.url&&(f=k.url,console.log("[Parser] ✅ Lesson found illustration:",c,"->",k.name))}}const l=a.match(/^POZADÍ:\s*(.+)/i);if(l){const c=l[1].trim().toLowerCase();g=i[c]||c}const h=a.match(/^MOŽNOSTI:\s*(.+)/i);h&&(m=h[1].split("|").map(c=>c.trim()))}if(u.match(/^INFO:/i)){const a=u.replace(/^INFO:\s*/i,"").trim();let v="";for(let c=1;c<s.length;c++)s[c].match(/^(OBRÁZEK|POZADÍ|MOŽNOSTI):/i)||(v+=s[c].trim()+" ");console.log("[Lesson Parser] Creating INFO slide:",a,f?"(with image)":"");const l=f?"title-2cols":"title-content",h=re(o.length,l);h.layout?.blocks&&(h.layout.blocks[0]&&(h.layout.blocks[0].content=a||t.topic),h.layout.blocks[1]&&(h.layout.blocks[1].content=v.trim()),f&&h.layout.blocks[2]&&(h.layout.blocks[2].type="image",h.layout.blocks[2].content=f)),h.title=a||t.topic,h.content=v.trim(),g&&(h.background={type:"color",value:g}),o.push(h);return}if(u.match(/^HLASOVÁNÍ ZPĚTNÁ VAZBA:/i)){const a=u.replace(/^HLASOVÁNÍ ZPĚTNÁ VAZBA:\s*/i,"").trim();console.log("[Lesson Parser] Creating VOTING feedback slide:",a),o.push({...Ae(o.length,"feedback"),question:a||"Jak se vám v této lekci dařilo?",showResultsToStudents:!0,feedbackStyle:"emoji"});return}if(u.match(/^HLASOVÁNÍ OD-DO:/i)){const a=u.replace(/^HLASOVÁNÍ OD-DO:\s*/i,"").trim();let v="Určitě ne",l="Určitě ano";for(const c of s.slice(1)){const b=c.match(/^Od:\s*(.+)/i),k=c.match(/^Do:\s*(.+)/i);b&&(v=b[1].trim()),k&&(l=k[1].trim())}console.log("[Lesson Parser] Creating VOTING scale slide:",a);const h=Ae(o.length,"scale");o.push({...h,question:a||"Jak byste ohodnotili?",scaleMinLabel:v,scaleMaxLabel:l,showResultsToStudents:!0});return}if(u.match(/^HLASOVÁNÍ:/i)){const a=u.replace(/^HLASOVÁNÍ:\s*/i,"").trim(),v=[];for(const h of s){const c=h.match(/^([A-D])\)\s*(.+)/i);if(c){const b=c[2].trim().replace(/\*/g,"").trim();v.push({id:c[1].toLowerCase(),label:c[1].toUpperCase(),content:b})}}const l=v.length>=2?v:m.length>=2?m.map((h,c)=>({id:String.fromCharCode(97+c),label:String.fromCharCode(65+c),content:h})):[{id:"a",label:"A",content:"Ano"},{id:"b",label:"B",content:"Ne"},{id:"c",label:"C",content:"Nevím"}];console.log("[Lesson Parser] Creating VOTING slide:",a,"options:",l.length),o.push({...Ae(o.length,"single"),question:a,options:l,showResultsToStudents:!0});return}if(u.match(/^NÁSTĚNKA PRO A PROTI:/i)){const a=u.replace(/^NÁSTĚNKA PRO A PROTI:\s*/i,"").trim();console.log("[Lesson Parser] Creating BOARD pros-cons slide:",a),o.push({...de(o.length),question:a||"Argumenty pro a proti",boardType:"pros-cons",leftColumnLabel:"Pro",rightColumnLabel:"Proti",allowMedia:!0,allowAnonymous:!1});return}if(u.match(/^NÁSTĚNKA ÚKOL:/i)){const a=u.replace(/^NÁSTĚNKA ÚKOL:\s*/i,"").trim();console.log("[Lesson Parser] Creating BOARD presentation slide:",a),o.push({...de(o.length),question:a||"Krátký úkol – výsledky na nástěnku",boardType:"presentation",allowMedia:!0,allowAnonymous:!1});return}if(u.match(/^NÁSTĚNKA:/i)){const a=u.replace(/^NÁSTĚNKA:\s*/i,"").trim();console.log("[Lesson Parser] Creating BOARD slide:",a),o.push({...de(o.length),question:a,boardType:"text",allowMedia:!0,allowAnonymous:!1});return}if(u.match(/^(ABC|KVÍZ-VÝBĚR|KVÍZ):/i)){const a=u.replace(/^(ABC|KVÍZ-VÝBĚR|KVÍZ):\s*/i,"").trim();console.log("[Lesson Parser] Creating ABC/KVÍZ slide:",a);const v=[];for(const c of s){const b=c.match(/^([A-D])\)\s*(.+)/i);if(b){let k=b[2].trim();const z=k.endsWith("*")||k.includes("*"),A=/\s*\(správn[áeě]\)|\s*-\s*správn[áeě]|\s*\(correct\)/i.test(k)||/správná odpověď/i.test(k),O=z||A;k=k.replace(/\*/g,"").replace(/\s*\(správn[áeě]\)/gi,"").replace(/\s*-\s*správn[áeě]/gi,"").replace(/\s*\(correct\)/gi,"").replace(/správná odpověď/gi,"").trim(),v.push({id:b[1].toLowerCase(),label:b[1].toUpperCase(),content:k,isCorrect:O})}}if(!v.some(c=>c.isCorrect)&&v.length>0&&(v[0].isCorrect=!0,console.warn("[Lesson Parser] ABC: žádná správná odpověď označená (* nebo správně), použita A jako fallback")),v.filter(c=>c.isCorrect).length>1){let c=!0;for(const b of v)b.isCorrect&&(c||(b.isCorrect=!1),c=!1)}a&&v.length>=2&&o.push({...ge(o.length),question:a,options:v,points:1,...f?{media:{type:"image",url:f}}:{}})}}),o.length===0){const p=re(0,"title-content");if(p.layout?.blocks&&(p.layout.blocks[0].content=`🎯 ${t.topic}`,p.layout.blocks[1].content=`<p>Vítejte v badatelské lekci! Dnes společně objevíme téma: ${t.topic}.</p>`),p.title=`🎯 ${t.topic}`,p.content=`<p>Vítejte v badatelské lekci! Dnes společně objevíme téma: ${t.topic}.</p>`,o.push(p),o.push({...Ae(1,"single"),question:`Co už víte o tématu ${t.topic}?`,options:[{id:"a",label:"A",content:"Hodně toho vím"},{id:"b",label:"B",content:"Něco vím"},{id:"c",label:"C",content:"Skoro nic"}],showResults:!0}),o.push({...de(2),question:`Co vás napadá, když se řekne "${t.topic}"? 🤔`,boardType:"text",allowMedia:!0}),t.content?.keyFacts?.[0]){const u=re(3,"title-content");u.layout?.blocks&&(u.layout.blocks[0].content="📚 Klíčové informace",u.layout.blocks[1].content=`<p>${t.content.keyFacts.slice(0,3).join(" ")}</p>`),u.title="📚 Klíčové informace",u.content=`<p>${t.content.keyFacts.slice(0,3).join(" ")}</p>`,u.background={type:"color",value:"#E3F2FD"},o.push(u)}o.push({...de(o.length),question:"Co nového jste se dnes dozvěděli? Co vás překvapilo?",boardType:"text",allowMedia:!1});const s=re(o.length,"title-content");s.layout?.blocks&&(s.layout.blocks[0].content="✅ Shrnutí",s.layout.blocks[1].content=`<p>Dnes jsme společně prozkoumali téma ${t.topic}. Skvělá práce!</p>`),s.title="✅ Shrnutí",s.content=`<p>Dnes jsme společně prozkoumali téma ${t.topic}. Skvělá práce!</p>`,o.push(s)}return o}async function mn(e){console.log("[Generator] Generating multiple E-U-R lessons...");const t=oe(e),o=e.content,n=o?.lessonTopics||[],d=(o?.lessonBrief||"").trim();let r=[];if(n.length>0||d){const g=n.length>0?n[0]:e.topic;r=[g],console.log("[Generator] User-directed lesson, topic:",g,"brief:",d?"yes":"no")}if(r.length===0){const g=`Pro téma "${e.topic}" (${e.grade}. třída) navrhni 2-3 konkrétní PODTÉMATA vhodná pro badatelské lekce.

KONTEXT:
${t}

Každé podtéma by mělo:
- Být specifické a zajímavé
- Umožňovat badatelský přístup
- Mít potenciál pro diskuzi a objevování

PŘÍKLADY pro "${e.topic}":
${e.topic.toLowerCase().includes("egypt")?`
- "Společnost starověkého Egypta a podobnost s dnešní dobou"
- "Hieroglyfy - jejich význam a rozluštění"  
- "Nil a význam řek pro vznik civilizací"`:`
- První specifické podtéma související s ${e.topic}
- Druhé specifické podtéma
- Třetí specifické podtéma`}

Vrať POUZE JSON pole s 2-3 podtématy:
["Podtéma 1", "Podtéma 2", "Podtéma 3"]`;try{const a=(await _([{role:"user",content:g}],B(e.subjectCode,"agent"),{temperature:.7,max_tokens:500})).match(/\[[\s\S]*\]/);a&&(r=JSON.parse(a[0]))}catch(m){console.error("[Generator] Failed to get subtopics:",m),r=[e.topic]}r.length===0&&(r=[e.topic])}console.log("[Generator] Subtopics:",r);const i=[],p=e.media?.images||[],s=[...e.media?.generatedIllustrations||[],...e.media?.generatedMapBetaImages||[],...e.media?.generatedEnvironment3dImages||[]];for(let g=0;g<r.length;g++){const m=r[g];console.log(`[Generator] Generating lesson ${g+1}/${r.length}: ${m}`);const a=Math.floor(g*p.length/r.length),v=Math.floor((g+1)*p.length/r.length),l=p.slice(a,v),h=s.slice(Math.floor(g*s.length/r.length),Math.floor((g+1)*s.length/r.length)),c=[...l.map(k=>`🖼️ "${k.title}"`),...h.map(k=>`🎨 "${k.name}"`)],b=`Vytvoř BADATELSKOU E-U-R lekci na podtéma: "${m}"
(Součást většího tématu: ${e.topic}, ${e.grade}. třída)

${d?`
⚠️ ZADÁNÍ AUTORA (dodržuj přesně!):
${d}

`:""}

KONTEXT:
${t}

${c.length>0?`🖼️ DOSTUPNÉ VIZUÁLY (použij 3-5):
${c.join(`
`)}`:""}

STRUKTURA LEKCE (E-U-R metoda – důsledně dodržuj):
1. EVOKACE (5–7 min): Aktivace předchozích znalostí, provokativní otázka. Použij NÁSTĚNKU (brainstorming) a/nebo HLASOVÁNÍ (tipování).
2. UVĚDOMĚNÍ (20–25 min): Hlavní badatelská aktivita, práce s materiály. Střídej INFO (výklad), KVÍZ (ověření), NÁSTĚNKU (diskuze, krátké úkoly, pro a proti) a HLASOVÁNÍ (názor, škála od–do).
3. REFLEXE (8–10 min): Shrnutí, diskuze, propojení s dneškem. NÁSTĚNKA (co jsme zjistili), na závěr HLASOVÁNÍ ZPĚTNÁ VAZBA (jak se vám dařilo).

PRAVIDLA:
- Více diskuzních a samostatných aktivit: nástěnky (diskuze, krátké úkoly, pro a proti), hlasování v různých typech.
- Rozmanitost: použij alespoň 2× NÁSTĚNKA (různé typy), 2× HLASOVÁNÍ (různé typy), 1–2× KVÍZ, zbytek INFO. Celkem 10–14 slidů.
- Na konec lekce vždy zařaď HLASOVÁNÍ ZPĚTNÁ VAZBA (zpětná vazba žáků).

DOSTUPNÉ TYPY SLIDŮ (piš přesně tyto značky):

INFO: Nadpis
Obsah jako prostý text. Bez markdown, bez HTML.
OBRÁZEK: název obrázku

KVÍZ: Otázka?
A) Odpověď 1
B) Odpověď 2 *
C) Odpověď 3
(Správná odpověď = ta s hvězdičkou * na konci. Může být A, B, C nebo D – vždy označ skutečně správnou!)

NÁSTĚNKA: Otázka k diskuzi? (brainstorming, žáci píší nápady)

NÁSTĚNKA PRO A PROTI: Otázka k argumentaci?
(žáci píší argumenty do sloupců Pro / Proti)

NÁSTĚNKA ÚKOL: Krátký úkol – např. Připravte jeden slide na téma X. Společná prezentace.
(úkol pro skupiny, výsledek na nástěnku)

HLASOVÁNÍ: Názorová otázka? (VŽDY napiš konkrétní možnosti A) B) C) odpovídající otázce – nikdy ne Ano/Ne/Nevím!)
A) Konkrétní odpověď 1
B) Konkrétní odpověď 2
C) Konkrétní odpověď 3

HLASOVÁNÍ OD-DO: Otázka se škálou?
Od: Určitě ne
Do: Určitě ano

HLASOVÁNÍ ZPĚTNÁ VAZBA: Jak se vám v této lekci dařilo?
(použij na konec lekce – emoji reakce)

DŮLEŽITÉ:
- Každý slide začíná typem (INFO / KVÍZ / NÁSTĚNKA / … / HLASOVÁNÍ / …). Žádné "SLIDE 1:", markdown ani HTML.
- U HLASOVÁNÍ (ne OD-DO, ne ZPĚTNÁ VAZBA) vždy napiš A) B) C) s konkrétními možnostmi. Nikdy Ano/Ne/Nevím.
- U KVÍZ: Správná odpověď musí být označená hvězdičkou * na konci řádku. Správná může být kterákoli z A/B/C/D – podle skutečnosti, ne vždy A!
- Střídej výklad (INFO) s interaktivními slidy. E-U-R fáze dodržuj v pořadí.`;try{const k=await _([{role:"user",content:b}],B(e.subjectCode,"agent"),{temperature:.7,max_tokens:3e3}),z=jt(k,{...e,media:{...e.media,images:l,generatedIllustrations:h}});z.length>0&&i.push({subtopic:m,slides:z,rawResponse:k})}catch(k){console.error(`[Generator] Failed to generate lesson for ${m}:`,k)}}if(i.length===0)return{success:!1,error:"Nepodařilo se vygenerovat žádnou lekci"};const u=[];for(const g of i){const m=`lesson-${e.id}-${crypto.randomUUID().slice(0,8)}`,a={id:m,title:`Interaktivní lekce: ${g.subtopic}`,slides:g.slides,settings:{showProgress:!0,showScore:!0,allowSkip:!0,allowBack:!0,shuffleQuestions:!1,shuffleOptions:!1,showExplanations:"immediately"},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};try{be(a)}catch(l){console.warn(`[Generator] localStorage failed for ${m}:`,l)}await te(a)?(console.log(`[Generator] ✅ Lesson synced to Supabase: ${m}`),u.push(m)):console.error(`[Generator] ❌ Failed to sync lesson to Supabase: ${m}`),console.log(`[Generator] Lesson saved: ${m} - ${g.subtopic}`)}const f=i.map((g,m)=>`${m+1}. ${g.subtopic} (${g.slides.length} slidů)`).join(`
`);return console.log("[Generator] Lessons saved to Supabase:",u),{success:!0,id:u[0],preview:`Vytvořeno ${i.length} lekcí:
${f}`}}async function kn(e){console.log("[Generator] Generating methodology...");const t=pe("methodology"),o=e.rvp?.expectedOutcomes?.join(`
- `)||"Nejsou specifikovány",n=e.content?.keyTerms?.map(u=>`**${u.term}** – ${u.definition}`).join(`
`)||"",d=e.content?.keyFacts?.join(`
- `)||"",r=e.content?.personalities?.map(u=>`**${u.name}** – ${u.description}`).join(`
`)||"",i=e.content?.timeline?.map(u=>`**${u.year||u.date}** – ${u.event||u.description}`).join(`
`)||"",p=`Napiš METODICKOU INSPIRACI pro učitele k tématu "${e.topic}" pro ${e.grade}. třídu.

${t}

Toto je přehled pro učitele - jak téma uchopit, na co se zaměřit, jaké aktivity zařadit.

POVINNÁ STRUKTURA:

## 📋 Anotace tématu
Stručný přehled tématu (3-4 věty). Proč je téma důležité? Jak se pojí s dalším učivem?

## 🎯 Očekávané výstupy dle RVP
${`Relevantní výstupy z RVP:
- ${o}`}

## 📚 Klíčové pojmy
${n||"Vypiš 5-8 klíčových pojmů s definicemi."}

## 📖 Faktografický přehled
Základní fakta k tématu, která by měl učitel znát:
${d?`- ${d}`:"- Vypiš 8-10 klíčových faktů"}

${r?`### Významné osobnosti
${r}
`:""}
${i?`### Časová osa
${i}
`:""}

## 🎓 Didaktické poznámky
INFOBOX zelený: Jak téma uchopit
Napiš 2-3 věty o tom, jak téma představit žákům zajímavě.

INFOBOX oranžový: Na co si dát pozor
Uveď typické miskoncepce nebo obtížná místa.

## 💡 Náměty na aktivity
Navrhni 3-4 konkrétní aktivity:
1. **Evokace** – aktivita na začátek hodiny
2. **Hlavní aktivita** – práce s učivem
3. **Reflexe** – závěrečná aktivita
4. **Rozšíření** – pro rychlejší žáky

## 🔗 Mezipředmětové vztahy
Jak téma souvisí s jinými předměty (zeměpis, výtvarná výchova, český jazyk...)?

## 📎 Materiály Vividbooks
K tomuto tématu máte k dispozici tyto materiály:
- 📖 **Učební text** – Výkladový text pro žáky s obrázky a infoboxy
- 🎮 **Procvičování (lehké)** – Interaktivní kvíz pro slabší žáky
- 🎯 **Procvičování (těžké)** – Náročnější kvíz pro pokročilé
- 📝 **Pracovní list** – Tisknutelný pracovní list s aktivitami
- ✏️ **Písemka** – Test pro ověření znalostí
- 🎓 **Lekce E-U-R** – Kompletní interaktivní lekce podle metody E-U-R

Všechny materiály najdete v knihovně Vividbooks pod tématem "${e.topic}".

PRAVIDLA:
- Piš profesionálně, ale přístupně
- INFOBOX zelený/oranžový pro zvýraznění tipů a upozornění
- Využij data z podkladů (pojmy, fakta, osobnosti, časová osa)
- Zaměř se na praktické využití v hodině`,s=ee({topic:e.topic,subject:e.subjectCode||"Dějepis",grade:e.grade,feedback:t,rvpOutputs:`Relevantní výstupy z RVP:
- ${o}`,keyTermsList:n||"Vypiš 5-8 klíčových pojmů s definicemi.",keyFactsList:d?`- ${d}`:"- Vypiš 8-10 klíčových faktů",personalitiesList:r,timelineList:i})||p;try{const u=await _([{role:"user",content:s}],B(e.subjectCode,"agent"),{temperature:.7,max_tokens:3e3});console.log("[Generator] Methodology raw response:",u.substring(0,500));const f={modrý:"info",červený:"danger",zelený:"tip",oranžový:"warning",fialový:"summary"};let g=u.replace(/INFOBOX (modrý|červený|zelený|oranžový|fialový):\s*(.+?)(?:\n([^\n#]*))?(?=\n\n|\n##|$)/gim,(c,b,k,z)=>{const A=f[b.toLowerCase()]||"info",O=z?z.trim():"";return`
<div data-type="callout" data-callout-type="${A}" class="callout callout-${A}"><p><strong>${k.trim()}</strong></p>${O?`<p>${O}</p>`:""}</div>
`});const m=Ue(g),a=crypto.randomUUID(),v={id:a,title:`${e.topic} – Metodická inspirace`,content:m,documentType:"methodology",sectionImages:[]};try{localStorage.setItem(`vivid-doc-${a}`,JSON.stringify(v))}catch(c){console.warn(`[Generator] localStorage failed for methodology ${a}:`,c)}await Ce(v)||console.warn(`[Generator] Supabase sync failed for methodology ${a}`);const h=g.replace(/INFOBOX (modrý|červený|zelený|oranžový):\s*/gi,"📦 ").replace(/<[^>]+>/g,"");return console.log("[Generator] Methodology saved:",a),{success:!0,id:a,preview:h}}catch(u){return console.error("[Generator] Methodology error:",u),{success:!1,error:String(u)}}}async function hn(e){console.log("[Generator] Generating hodnoceni...");const t=(e.content?.keyFacts||[]).map(p=>typeof p=="string"?p.replace(/^Téma:\s*/i,""):p.topic||p).filter(Boolean),o=e.rvp?.expectedOutcomes?.join(`
- `)||"",n=(e.content?.keyTerms||[]).map(p=>typeof p=="string"?p:p.term).filter(Boolean).join(", "),d=t.length>0?t.map(p=>`- ${p}`).join(`
`):`- ${e.topic}`,r=`Napiš VÝSTUPNÍ HODNOCENÍ uzávěru tematického bloku "${e.topic}" pro ${e.grade}. třídu.

Tematický blok zahrnoval tato témata:
${d}

${o?`Očekávané výstupy dle RVP:
- ${o}
`:""}
${n?`Klíčové pojmy: ${n}
`:""}

POVINNÁ STRUKTURA:

## ✅ Co žáci po absolvování bloku znají a umí

Napiš 6–10 konkrétních bodů. Každý začíná "Žák..."
Příklady: "Žák vysvětlí...", "Žák popíše...", "Žák rozlišuje...", "Žák ukáže na mapě..."

## 📝 Kritéria hodnocení

Pro KAŽDÝ ze 3 typů škol napiš hodnocení pro stupně 1–5.
Struktura pro každý typ školy:

### 🏫 ZŠ praktická / speciální
**1 – Výborný:** Co přesně žák zvládne (jednodušší nároky, základní pojmy)
**2 – Chvalitebný:** ...
**3 – Dobrý:** ...
**4 – Dostatečný:** ...
**5 – Nedostatečný:** Co žák nezvládl

### 🏫 ZŠ standardní
**1 – Výborný:** Co přesně žák zvládne (standardní nároky RVP)
**2 – Chvalitebný:** ...
**3 – Dobrý:** ...
**4 – Dostatečný:** ...
**5 – Nedostatečný:** Co žák nezvládl

### 🏫 Gymnázium
**1 – Výborný:** Co přesně žák zvládne (rozšiřující nároky, aplikace, analýza)
**2 – Chvalitebný:** ...
**3 – Dobrý:** ...
**4 – Dostatečný:** ...
**5 – Nedostatečný:** Co žák nezvládl

## 🔑 Klíčové pojmy

Vypiš 8–12 nejdůležitějších pojmů které žák musí znát.

INFOBOX oranžový: Na co si dát pozor
Typické chyby nebo obtížná místa v tomto bloku.

PRAVIDLA:
- Každé kritérium = 1–2 konkrétní věty, ne obecné fráze
- Kritéria musí být MĚŘITELNÁ ("žák vyjmenuje 3 planety" ne "žák chápe")
- Liš obtížnost mezi typy škol (speciální = základní pojmy, gymnázium = analýza, vztahy, aplikace)`,i=ee({topic:e.topic,subject:e.subjectCode||"Dějepis",grade:e.grade,topicsBlock:d,rvpOutputs:o?`Očekávané výstupy dle RVP:
- ${o}`:"",keyTermsList:n?`Klíčové pojmy: ${n}`:""})||r;try{const p=await _([{role:"user",content:i}],B(e.subjectCode,"text"),{temperature:.5,max_tokens:6e3}),s={modrý:"info",červený:"danger",zelený:"tip",oranžový:"warning",fialový:"summary"};let u=p.replace(/INFOBOX (modrý|červený|zelený|oranžový|fialový):\s*(.+?)(?:\n([^\n#]*))?(?=\n\n|\n##|$)/gim,(l,h,c,b)=>{const k=s[h.toLowerCase()]||"info",z=b?b.trim():"";return`
<div data-type="callout" data-callout-type="${k}" class="callout callout-${k}"><p><strong>${c.trim()}</strong></p>${z?`<p>${z}</p>`:""}</div>
`});const f=Ue(u),g=crypto.randomUUID(),m={id:g,title:`${e.topic} – Výstupní dokument`,content:f,documentType:"hodnoceni",sectionImages:[]};try{localStorage.setItem(`vivid-doc-${g}`,JSON.stringify(m))}catch{}await Ce(m)||console.warn(`[Generator] Supabase sync failed for hodnoceni ${g}`);const v=u.replace(/<[^>]+>/g,"").substring(0,200);return console.log("[Generator] Hodnoceni saved:",g),{success:!0,id:g,preview:v}}catch(p){return console.error("[Generator] Hodnoceni error:",p),{success:!1,error:String(p)}}}const vn=/^\s*(?:\d+[\).]\s*)?\*{0,2}(?:ILUSTRACE|FOTKA|KATEGORIE|KL[IÍ][CČ]OV[AÁ]\s+SLOVA|POPIS)\*{0,2}\s*:/i,At=(e,t)=>{const o=String(e||"").split(`
`);let n=!1;const d=[],r=/^\s*(?:\d+[\).]\s*)?\*{0,2}POPIS\*{0,2}\s*:\s*(.*)$/i;for(const i of o){if(!n){const p=i.match(r);if(!p)continue;n=!0;const s=p[1]?.trim();s&&d.push(s);continue}if(vn.test(i))break;i.trim()&&d.push(i.trim())}return d.join(" ").trim()},Pt="Požadavky na styl:",Tt="BEZ TEXTU: Do ilustrace nepřidávej žádný text, slova, písmena, číslice ani popisky.",Ot=e=>`POPISKY: Přidej krátký český popisek přímo do ilustrace. Jednoduché bezpatkové písmo, tučné, tmavá barva, dole nebo vedle hlavního prvku. Text popisku: "${e}"`,wt="BEZ TEXTU: Do fotografie nepřidávej žádný text, slova ani popisky.",Ke="MOTIV:",gn=e=>/(?:NO TEXT|BEZ TEXTU|TEXT LABEL|POPISKY):/i.test(String(e||"")),Ve=e=>{let t=String(e||"").trim();const o=t.search(/\n\n(?:Style requirements|Požadavky na styl):\n/i);o>=0&&(t=t.slice(0,o).trim());const n=t.search(/\n\n(?:NO TEXT|BEZ TEXTU):/i);n>=0&&(t=t.slice(0,n).trim());const d=t.search(/\n\n(?:TEXT LABEL|POPISKY):/i);return d>=0&&(t=t.slice(0,d).trim()),t.replace(/^MOTIV:\s*/i,"").trim()},yn=e=>{const t=Ve(e),o=String(e||"").slice(t.length).replace(/^\s*\n+/,"").trim();return o?`${t}

${o}`:t},It="detailed",$t="2K",qe=`Vytvoř vzdělávací ilustraci ve stylu Ligne Claire (jako komiks Tintin):

Kresba:
- Technika pevné linky – stejná tloušťka čáry, bez tlakových odchylek
- Čistý, technický a uspořádaný vzhled
- Každý objekt jasně obtažený černým nebo tmavě šedým obrysem
- Uzavřené tvary s jasnými hranicemi

Barvy a stínování:
- Omezená pastelová paleta s výraznými, profesionálními barvami
- Plochý design – bez přechodů, velké plochy jedné barvy
- Jen minimální tvrdé stíny (ostře vymezené tmavší plochy, bez rozmazání)
- Často vůbec bez stínování kvůli přehlednosti

Kompozice:
- Stylizovaná anatomie – zjednodušené, ale proporční tvary
- Klidné, statické pózy – čelný nebo mírně boční pohled
- Dojem ikony nebo infografiky
- Čistě bílé pozadí (negativní prostor)
- Přehledná, esteticky příjemná kompozice

Technické:
- 1024×1024 pixelů nebo vyšší
- Vzdělávací a profesionální vzhled
- Vhodné pro školní materiály

DŮLEŽITÉ:
- Nepřidávej do obrázku žádný text, popisky, písmena, číslice, titulky ani anotace
- Ilustrace musí fungovat i bez slov – význam vyjádři výhradně vizuálně`,Et=`Popisky v obraze (pouze pokud to výslovně vyžaduje sekce POPISKY výše):
- Přidej jen jeden krátký český popisek podle instrukce v POPISKY
- Jednoduché bezpatkové písmo, tučné, tmavá barva, maximálně 2–4 slova
- Popisek nesmí překrývat hlavní motiv`,fn=qe,Ct=({stylePrompt:e,subject:t,withLabels:o=!1,labelText:n="",feedback:d})=>{const r=Ve(t)||String(t||"").trim(),i=o?Et:qe,p=[e.trim(),`${Ke} ${r}`,o?Ot(n||r.slice(0,80)):Tt,`${Pt}
${i}`].filter(Boolean).join(`

`),s=String(d||"").trim();return s?`${p}

REFERENCE IMAGE — EDIT INSTRUCTIONS:
The attached image is the current illustration. Apply the user feedback below precisely.
Keep the educational illustration style and overall composition unless the feedback requires a clear change.

USER FEEDBACK:
${s}`:p},xt=`Vytvoř SKUTEČNOU FOTOGRAFII, která vypadá, jako by ji pořídil běžný člověk dobrým fotoaparátem, NE studiová produkce.

Vzhled a dojem:
- Autentická, nearanžovaná fotka – jako z cestovního blogu nebo učebnice
- Přirozené okolní světlo (denní světlo, zatažená obloha, interiér u oken)
- Drobné nedokonalosti: jemný odlesk objektivu, soft vignette, lehký šum ve stínech
- Teplá, přirozená barevná paleta – bez přesycených barev a HDR vzhledu
- Mělká až střední hloubka ostrosti (f/2,8–f/5,6), jemné rozostření pozadí

Charakter fotoaparátu:
- Snímek z bezzrcadlovky nebo kvalitního telefonu (přirozená perspektiva, ~35–50 mm ekvivalent)
- Mírně mimo střed nebo kompozice podle pravidla třetin – NE dokonale centrované
- Přirozené vyvážení bílé (teplejší ve zlaté hodině, chladnější ve stínu)
- ŽÁDNé studiové světlo, ŽÁDNé odlesky kruhového světla v očích, ŽÁDNé rovnoměrné osvětlení

Znaky realismu:
- Skutečné textury: prach, opotřebení, patina, záhyby látek, textura pleti s póry
- Kontext prostředí: pozadí vypráví příběh (lidé, nábytek, krajina, budovy)
- Náznaky pohybu tam, kde dává smysl: lehké rozmazání rukou, vítr ve vlasech či oblečení
- Realistické proporce mezi objekty

Přísně zakázáno:
- Ilustrace, kresba, kreslený film, anime, digitální malba, vektor, malba
- Plastická vosková pleť, uncanny valley obličeje, dokonalá symetrie
- Přehnané ostření, HDR mapování tónů, neónově jasné barvy
- Studiové pozadí, izolované objekty na ploche
- Stockové pózy (ukazování do objektivu, firemní podání rukou, palec nahoru)`,St=`Vytvoř SKUPINOVÉ SELFIE jako fotografii z pohledu fotoaparátu.

Kompozice:
- Pohled kamery: jsme fotoaparát/telefon – díváme se přímo na skupinu
- 3–5 historických postav pohromadě, usmívají se do objektivu
- Detailní záběr: tváře vyplňují většinu snímku
- Mírné širokoúhlé zkreslení typické pro selfie z telefonu
- Někteří lidé mírně useknuti na okrajích (přirozené ořezání selfie)
- Paže jedné osoby může být částečně vidět dole (drží neviditelný fotoaparát)

Styl:
- Fotorealistické, přirozené světlo, neformální dojem
- Veselé výrazy, pohled přímo do kamery
- Autentické historické oblečení a prostředí v pozadí
- NIKDE nesmí být vidět telefon ani fotoaparát

Zakázáno: viditelný telefon, viditelná kamera, ilustrace, kreslený film, pohled třetí osoby`,Nt=({category:e,subject:t,topic:o,keywords:n=[],feedback:d})=>{const r=e==="selfie"?St:xt,i=He(t)||String(t||"").trim(),p=n.filter(Boolean).length>0?`DETAILY: ${n.join(", ")}
`:"",s=`${r}

${Ke} ${i}
${o?`KONTEXT: ${o}
`:""}${p}${wt}

VÝSTUP: Ultra realistická fotografie ve stylu dokumentu. ŽÁDNÁ ilustrace, kreslený film ani digitální malba.`,u=String(d||"").trim();return u?`${s}

REFERENCE IMAGE — EDIT INSTRUCTIONS:
The attached image is the current photograph. Apply the user feedback below precisely.
Keep the photorealistic documentary style and overall composition unless the feedback requires a clear change.

USER FEEDBACK:
${u}`:s},He=(e,t)=>{const o=String(e||"").trim(),n=String(t||"").trim();return o?n&&!o.toLowerCase().includes(n.toLowerCase())?`${n}. ${o}`:o:n};async function bn(e){console.log("[Generator] Generating photo prompts for:",e.topic);const t=Lt(e),o=e.content||{},n=Array.isArray(o.keyTerms)?o.keyTerms:Array.isArray(o.key_terms)?o.key_terms:[],r=(Array.isArray(o.keyFacts)?o.keyFacts:Array.isArray(o.facts)?o.facts:Array.isArray(o.key_facts)?o.key_facts:[]).map(m=>typeof m=="string"?m:m.fact||m.text||m.description||"").filter(Boolean).slice(0,5).join("; "),i=et(t),p=m=>{const a=String(m||"").trim().toLowerCase();return["selfie","scene","portrait","artifact","location"].includes(a)?a:/selfie|sel[fv]ie/.test(a)?"selfie":/portr[eé]t|postava|osob/.test(a)?"portrait":/artefakt|předmět|predmet|objekt|n[aá]stroj|zbra[nň]/.test(a)?"artifact":/m[ií]sto|lokace|stavba|architektura|krajina/.test(a)?"location":"scene"},s=(m,a)=>{for(const v of a){const l=m?.[v];if(typeof l=="string"&&l.trim())return l.trim()}return""},u=(m,a)=>{const v=s(m,["name","title","název","nazev","fotka","label"]),l=s(m,["description","popis","prompt","scene","scéna","scena"]);if(!v&&!l)return;const h=p(s(m,["category","kategorie","type","typ"]));a.push({id:crypto.randomUUID(),name:v||"Fotka",category:h,keywords:Array.isArray(m?.keywords||m?.klíčováSlova||m?.klicovaSlova||m?.["klíčová slova"]||m?.["klicova slova"])?(m?.keywords||m?.klíčováSlova||m?.klicovaSlova||m?.["klíčová slova"]||m?.["klicova slova"]).map(c=>String(c||"").trim()).filter(Boolean):typeof(m?.keywords||m?.["klíčová slova"])=="string"?String(m?.keywords||m?.["klíčová slova"]).split(",").map(c=>c.trim()).filter(Boolean):[],description:tt(v||"Fotka",l||v||String(e.topic||"Vzdělávací fotografie"),t,n,h),status:"pending"})},f=()=>{const m=t.topic,a=n.map(k=>({name:typeof k=="string"?k.trim():String(k.term||k.name||"").trim(),definition:typeof k=="object"&&k?String(k.definition||k.popis||"").trim():""})).filter(k=>k.name).slice(0,4),v=(Array.isArray(o.personalities)?o.personalities:Array.isArray(o.osobnosti)?o.osobnosti:[]).map(k=>typeof k=="string"?k.trim():String(k.name||"").trim()).filter(Boolean),l=v[0],h=t.timeline!=="—"||t.personalities!=="—"||v.length>0,c=r.split(";").map(k=>k.trim()).filter(Boolean).slice(0,2);return[...h?[{name:`Selfie z prostředí: ${m}`,category:"selfie",definition:`typický člověk z prostředí tématu ${m} v autentickém oblečení a účesu`}]:[],{name:`Hlavní scéna: ${m}`,category:"scene",definition:`typická situace nebo proces ilustrující podstatu tématu ${m}`},...l?[{name:`Portrét: ${l}`,category:"portrait",definition:l}]:[],...a.map(k=>({name:`Detail: ${k.name}`,category:"artifact",definition:k.definition||k.name})),...c.map(k=>({name:`Scéna k tématu ${m}`,category:"scene",definition:k})),{name:`Prostředí: ${m}`,category:"location",definition:`charakteristické místo nebo krajina související s tématem ${m}`}].filter((k,z,A)=>A.findIndex(O=>O.name===k.name)===z).slice(0,7).map(k=>({id:crypto.randomUUID(),name:k.name,category:k.category,keywords:[],description:Rt(k.name,k.definition,t,k.category),status:"pending"}))},g=(m,a=6)=>{if(m.length>=a)return;const v=new Set(m.map(l=>l.name.trim().toLowerCase()));for(const l of f()){if(m.length>=a)break;const h=l.name.trim().toLowerCase();v.has(h)||(v.add(h),m.push(l))}};try{const m=await _([{role:"user",content:i}],B(e.subjectCode,"agent"),{temperature:.85,max_tokens:8192});console.log("[Generator] Photo prompts raw:",m.substring(0,400));const a=[],v=m.split(/(?=FOTKA:)/gi).filter(l=>l.trim());for(const l of v){const h=l.match(/FOTKA:\s*([^\n]+)/i),c=l.match(/KATEGORIE:\s*([^\n]+)/i),b=l.match(/KL[IÍ][CČ]OV[AÁ]\s+SLOVA:\s*(.+)/i),k=At(l,"POPIS");if(h&&k){const z=(c?.[1]??"").trim().replace(/^\*{1,2}(.*)\*{1,2}$/,"$1").trim().toLowerCase(),A=["selfie","scene","portrait","artifact","location"].includes(z)?z:"scene";a.push({id:crypto.randomUUID(),name:h[1].trim().replace(/^\*{1,2}(.*)\*{1,2}$/,"$1").trim(),category:A,keywords:b?.[1]?.split(",").map(O=>O.trim()).filter(Boolean)||[],description:tt(h[1].trim().replace(/^\*{1,2}(.*)\*{1,2}$/,"$1").trim(),k.trim(),t,n,A),status:"pending"})}}if(a.length===0){const l=m.match(/\[[\s\S]*\]/);if(l)try{const h=JSON.parse(l[0]);for(const c of h)u(c,a)}catch{}}if(a.length===0){console.warn("[Generator] Text parsing failed, retrying as JSON...");const l=`${et(t)}

Vrať POUZE JSON pole:
[{"name":"název česky","category":"selfie|scene|portrait|artifact|location","keywords":["slovo1","slovo2"],"description":"konkrétní foto brief 4–6 vět — typ záběru, světlo, popředí/pozadí, textury, co má být vidět"}]
POUZE JSON, žádný jiný text.`,c=(await _([{role:"user",content:l}],B(e.subjectCode,"agent"),{temperature:.85,max_tokens:8192})).match(/\[[\s\S]*\]/);if(c)try{const b=JSON.parse(c[0]);for(const k of b)u(k,a)}catch{}}return a.length===0&&(console.warn("[Generator] Photo AI parsing failed, using deterministic fallback prompts"),a.push(...f())),g(a,6),console.log("[Generator] Generated photo prompts:",a.length),a}catch(m){return console.error("[Generator] Photo prompts error:",m),f()}}async function zn(e,t,o={}){console.log("[Generator] Generating photo:",e.name);const{generateImageWithImagen:n}=await Y(async()=>{const{generateImageWithImagen:r}=await import("./ai-chat-proxy-D2xiLy3b.js");return{generateImageWithImagen:r}},__vite__mapDeps([6,0,1,2,3,4,5])),d=Nt({category:e.category,subject:He(e.description,e.name),topic:t.topic,keywords:e.keywords});try{const r=await n(d,{aspectRatio:o.aspectRatio||"1:1",numberOfImages:1,dataSetId:t.id,illustrationName:`📷 ${e.name}`,model:o.model||"openai-gpt-image-2"});if(r.success&&(r.url||r.images?.[0]?.base64)){let i=r.url||`data:${r.images?.[0]?.mimeType||"image/png"};base64,${r.images?.[0]?.base64}`;const{processImageUrl:p}=await Y(async()=>{const{processImageUrl:u}=await import("./main-app-BHMLsxig.js").then(f=>f.il);return{processImageUrl:u}},__vite__mapDeps([0,1,2,3,4,5])),s=await p(i,`${t.id}-${e.id}`,"photos");return s?(console.log("[Generator] Photo generated successfully:",s.substring(0,100)+"..."),s):(console.error("[Generator] Photo upload to storage failed"),null)}else return console.error("[Generator] Photo generation failed:",r.error||"No image data returned"),null}catch(r){return console.error("[Generator] Photo generation error:",r),null}}function Lt(e){const t=e.content||{},o=Array.isArray(t.keyTerms)?t.keyTerms:Array.isArray(t.key_terms)?t.key_terms:[],n=Array.isArray(t.personalities)?t.personalities:Array.isArray(t.osobnosti)?t.osobnosti:[],d=Array.isArray(t.keyFacts)?t.keyFacts:Array.isArray(t.facts)?t.facts:Array.isArray(t.key_facts)?t.key_facts:[],r=Array.isArray(t.timeline)?t.timeline:[],i=Array.isArray(t.funFacts)?t.funFacts:[],p=o.map(l=>{if(typeof l=="string")return l.trim();const h=String(l.term||l.name||"").trim(),c=String(l.definition||l.popis||"").trim();return h&&c?`• ${h} — ${c}`:h||c}).filter(Boolean).join(`
`),s=n.map(l=>{if(typeof l=="string")return l.trim();const h=String(l.name||"").trim(),c=String(l.role||"").trim(),b=String(l.description||"").trim();return[h,c,b].filter(Boolean).join(", ")}).filter(Boolean).join(`
`),u=d.map(l=>typeof l=="string"?l:l.fact||l.text||l.description||"").filter(Boolean).slice(0,8).map(l=>`• ${l}`).join(`
`),f=r.slice(0,6).map(l=>{const h=String(l.date||"").trim(),c=String(l.event||l.title||"").trim();return h&&c?`• ${h}: ${c}`:c}).filter(Boolean).join(`
`),g=i.slice(0,4).map(l=>`• ${String(l||"").trim()}`).filter(l=>l.length>2).join(`
`),m=(e.rvp?.expectedOutcomes||[]).slice(0,4).map(l=>`• ${l}`).join(`
`),a=String(e.subjectCode||"").trim(),v=a?{dejepis:"dějepis",zemepis:"zeměpis",fyzika:"fyzika",chemie:"chemie",prirodopis:"přírodopis",biologie:"biologie"}[a]||a:"obecné učivo";return{topic:String(e.topic||"Téma"),grade:e.grade||6,subjectLabel:v,keyTermsDetailed:p||"—",personalities:s||"—",keyFacts:u||"—",timeline:f||"—",funFacts:g||"—",expectedOutcomes:m||"—"}}function et(e){const t=e.timeline!=="—"||e.personalities!=="—",o=t?"PRVNÍ FOTKA MUSÍ být kategorie selfie — historický člověk si dělá selfie mobilem (telefon neviditelný). Vzdělávací anachronismus: autentické oblečení, účes a prostředí dané doby.":"PRVNÍ FOTKA ať bude nejsilnější dokumentární scéna (scene) zachycující podstatu tématu — ne obecná stocková fotka.";return`Jsi zkušený foto editor vzdělávacích učebnic a dokumentární fotograf. Pro téma "${e.topic}" (${e.grade}. třída, ${e.subjectLabel}) navrhni 6–8 fotorealistických fotografií.

KONTEXT TÉMATU (použij ho — nevymýšlej obecné fráze):
Klíčové pojmy:
${e.keyTermsDetailed}

Osobnosti:
${e.personalities}

Hlavní fakta:
${e.keyFacts}

${e.timeline!=="—"?`Časová osa:
${e.timeline}
`:""}${e.funFacts!=="—"?`Zajímavosti:
${e.funFacts}
`:""}${e.expectedOutcomes!=="—"?`Očekávané výstupy:
${e.expectedOutcomes}
`:""}
${o}

Pro každou fotku uveď:
FOTKA: [název česky]
KATEGORIE: [selfie/scene/portrait/artifact/location]
KLÍČOVÁ SLOVA: [3–5 slov česky]
POPIS: [foto brief — 4–6 vět]

POPIS musí být KONKRÉTNÍ vizuální zadání pro generátor fotografií. V každém POPISU explicitně uveď:
1. Co je hlavní motiv a proč je důležitý pro pochopení učiva
2. Typ záběru a kompozici (wide shot, detail/makro, POV, street photo, 3/4 portrét, bird's eye…)
3. Světlo a atmosféru (zlatá hodina, zatažená obloha, světlo z okna, stín pod stromem…)
4. Které konkrétní prvky, materiály a textury MUSÍ být vidět (látka, kov, dřevo, kůže, prach, opotřebení…)
5. Co má žák z fotky pochopit nebo cítit (měřítko, proces, prostředí, charakter doby…)

ZAKÁZÁNO v POPISU:
- generické věty typu „fotorealistická rekonstrukce situace v kontextu tématu X“
- „přirozené světlo, dokumentární styl“ bez konkrétních objektů a kompozice
- „rušný trh / typické prostředí“ bez popisu postav, předmětů a detailů
- opakování názvu pojmu bez vizuálního návrhu

KATEGORIE:
- selfie — skupinové selfie, pohled z telefonu, usmívající se lidé v autentickém prostředí (telefon neviditelný)
- scene — dokumentární scéna, proces nebo situace v akci
- portrait — portrét osobnosti nebo typického člověka, viditelné detaily obličeje a oblečení
- artifact — detailní záběr předmětu, nástroje nebo přírodního objektu v kontextu
- location — široký záběr místa, architektury nebo krajiny s charakteristickými prvky

PŘÍKLADY DOBRÝCH POPISŮ:

FOTKA: Selfie římského legionáře
KATEGORIE: selfie
KLÍČOVÁ SLOVA: legionář, lorica, štít, kasárna
POPIS: Skupinové selfie tří římských legionářů v červených sagách a bronzových lorikách, usmívají se do objektivu. V pozadí dřevěná kasárna s věncem vítězství nad branou. Mírné širokoúhlé zkreslení typické pro telefon, teplé odpolední slunce zleva, viditelná textura kůže na štítu a opotřebení sandálů.

FOTKA: Vypařování z hladiny moře
KATEGORIE: scene
KLÍČOVÁ SLOVA: vypařování, slunce, hladina, pára
POPIS: Wide shot mořské hladiny za poledne: nízko nad vodou viditelný jemný opar stoupající v horkém vzduchu, slunce vysoko vpravo vytváří ostré odlesky na vlnách. V popředí tmavší modrá voda s jemnou strukturou vln, v dálce obzor bez lodí. Kompozice podle pravidla třetin, teplá modro-zelená paleta.

FOTKA: Bronzová helma hoplíta
KATEGORIE: artifact
KLÍČOVÁ SLOVA: hoplít, helma, bronz, chochol
POPIS: Detail makro bronzové korintské přilby položené na dřevěném stole, chochol z koňských žíní v červené barvě. Boční světlo z okna zvýrazňuje patinu kovu a jemné promáčkliny. Mělká hloubka ostrosti — ostro jen přední lem helmy, pozadí měkce rozostřené.

FOTKA: Terasy rýžových polí
KATEGORIE: location
KLÍČOVÁ SLOVA: rýže, terasy, krajina, voda
POPIS: Bird's eye wide shot terasovitých rýžových polí ve svahu: zelené výhonky v zalité vodě, tenké hráze mezi poli tvoří geometrický vzor. V popředí jeden farmář v klobouku s kosou pro měřítko. Ranní mlha v údolí, měkké difúzní světlo.

Navrhni fotky pokrývající různé aspekty tématu — scény, detaily, portréty, místa${t?" i selfie":""}. Vše piš česky.`}const jn=/fotorealistick[aá]\s+(rekonstrukce|fotografie|fotka)|v\s+kontextu\s+t[eé]matu|přirozen[eé]\s+světlo,?\s*dokumentární\s+styl|jako\s+dokumentární\s+fotografie|typick[eé]\s+prostředí\s+pro\s+t[eé]ma/i;function An(e){const t=e.trim();return t.length<90?!0:jn.test(t)}function Rt(e,t,o,n){const d=t?.trim()||e.trim(),r=o.grade,i=o.topic,p={selfie:`Skupinové selfie z prostředí „${i}": 3–4 lidé v autentickém dobovém nebo tematickém oblečení, usmívají se do objektivu telefonu (telefon neviditelný). V pozadí konkrétní prvky prostředí související s ${d}. Mírné širokoúhlé zkreslení, teplé denní světlo z boku.`,scene:`Dokumentární wide shot scény související s „${d}" (${i}). V popředí konkrétní postavy nebo objekty v akci, viditelné materiály a textury. Přirozené denní světlo, kompozice podle pravidla třetin — ne stocková póza.`,portrait:`Polo-portrét (3/4 profil) osoby nebo typického člověka souvisejícího s „${d}". Viditelné detaily obličeje, výrazu a charakteristického oblečení. Mělká hloubka ostrosti, měkké světlo z okna z boku, neutrální ale výrazné pozadí.`,artifact:`Detailní/makro záběr artefaktu nebo předmětu „${d}": viditelná textura materiálu, opotřebení a patina. Předmět v kontextu (na stole, v ruce, ve vitríně) — ne izolovaný na bílém. Boční světlo zvýrazňující strukturu povrchu.`,location:`Wide-angle dokumentární záběr místa souvisejícího s „${d}" (${i}). Charakteristická architektura, krajina nebo interiér s čitelnými prvky v popředí i pozadí. Přirozené světlo, postava nebo objekt pro měřítko.`},s=p[n]||p.scene,u=t?.trim()?` Vizuálně ilustruje: ${t.trim()}.`:"";return`${s}${u} Vhodné pro ${r}. třídu.`}function tt(e,t,o,n,d){const r=t.trim();if(r&&!An(r))return r;const i=Mt(e,n)||r;return Rt(e,i,o,d)}function ot(e){return`Jsi zkušený art director vzdělávacích učebnic. Pro téma "${e.topic}" (${e.grade}. třída, ${e.subjectLabel}) navrhni 8–12 ilustrací.

KONTEXT TÉMATU (použij ho — nevymýšlej obecné fráze):
Klíčové pojmy:
${e.keyTermsDetailed}

Osobnosti:
${e.personalities}

Hlavní fakta:
${e.keyFacts}

${e.timeline!=="—"?`Časová osa:
${e.timeline}
`:""}${e.funFacts!=="—"?`Zajímavosti:
${e.funFacts}
`:""}${e.expectedOutcomes!=="—"?`Očekávané výstupy:
${e.expectedOutcomes}
`:""}
Pro každou ilustraci uveď:
ILUSTRACE: [název česky]
KATEGORIE: [icon/portrait/object/scene/map]
KLÍČOVÁ SLOVA: [3–5 slov česky]
POPIS: [vizuální brief — 4–6 vět]

POPIS musí být KONKRÉTNÍ vizuální zadání pro ilustrátora / generátor obrázků. V každém POPISU explicitně uveď:
1. Co přesně je hlavní motiv a proč je důležitý pro pochopení učiva
2. Typ zobrazení (řez, průřez, půdorys, schéma, detail, scéna, mapa, srovnání před/po, symbol…)
3. Pohled a kompozici (pohled shora, z boku, průřez zemí, detail v popředí…)
4. Které konkrétní prvky MUSÍ být vidět a jak spolu souvisí
5. Co má žák z ilustrace pochopit (vztah, proces, strukturu…)

ZAKÁZÁNO v POPISU:
- generické věty typu „jednoduchá edukativní ilustrace pojmu X v kontextu tématu Y“
- „izolovaný hlavní objekt na bílém pozadí“ bez upřesnění, CO a JAK je zobrazeno
- opakování názvu pojmu bez vizuálního návrhu

KATEGORIE:
- icon — jednoduchý symbol (max. 1–2 hlavní tvary)
- portrait — postava / osobnost
- object — artefakt, nástroj, detail přírody
- scene — proces, situace, průřez, srovnání
- map — stylizovaná mapa nebo geografické schéma

PŘÍKLADY DOBRÝCH POPISŮ:

ILUSTRACE: Hypocentrum a epicentrum
KATEGORIE: scene
KLÍČOVÁ SLOVA: zemětřesení, hypocentrum, epicentrum, litosféra, řez
POPIS: Průřez zemským pláštěm z boku: dvě litosferické desky se střetávají, jedna klesá pod druhou. Hluboko v místě tření žhavé hypocentrum s radiálními seismickými vlnami. Kolmo nad ním na povrchu zvýrazněné epicentrum (bez textu). Desky v odlišných barvách, pod nimi jemně vyznačená astenosféra. Kompozice musí jasně ukázat vztah hloubka–povrch.

ILUSTRACE: Řecká helma hoplíta
KATEGORIE: object
KLÍČOVÁ SLOVA: hoplít, helma, bronz, chochol
POPIS: Detail bronzové korintské přilby z mírného bočního pohledu, chochol z koňských žíní v červené barvě. Zvýraznit tvar lemů chránících krk a tváře, kovový lesk bez zbytečného pozadí. Ilustrace má ukázat typický vzhled výzbroje hoplíta, ne válečnou scénu.

ILUSTRACE: Koloběh vody v přírodě
KATEGORIE: scene
KLÍČOVÁ SLOVA: vypařování, srážky, řeka, oblak
POPIS: Schéma krajiny v jednom obraze: slunce nad mořem, smyčky naznačují vypařování, oblak, srážku a odtok do řeky zpět do moře. Přehledná kompozice z ptačí perspektivy, každá fáze koloběhu vizuálně oddělená.

Navrhni ilustrace pokrývající různé aspekty tématu — procesy, struktury, srovnání, symboly i scény. Vše piš česky.`}function ve(e,t,o,n,d){const r=e.trim(),i=t?.trim();return i?`Edukativní ilustrace k pojmu „${r}“ (téma ${o}). Vizuálně zobraz: ${i}. Zvol nejvhodnější typ zobrazení (${d==="map"?"mapa nebo schéma":d==="scene"?"průřez, proces nebo scéna":"detail nebo symbol"}) — uveď konkrétní prvky, pohled a prostorové vztahy, které musí být v obraze vidět. Přehledná kompozice pro ${n}. třídu, bílé pozadí, bez textu.`:`Edukativní ilustrace k pojmu „${r}“ v tématu ${o}. Navrhni konkrétní obraz — co je v popředí, z jakého pohledu, které části musí být vidět a jaký vztah / proces ilustrace vysvětluje. Vhodné pro ${n}. třídu, bílé pozadí, bez textu.`}const Pn=/jednoduch[aá]\s+edukativn[ií]\s+ilustrace\s+pojmu|izolovan[yý]\s+hlavn[ií]\s+objekt\s+na\s+b[íi]l[ée]m\s+pozad[ií]|v\s+kontextu\s+t[eé]matu\s+.+,?\s*izolovan/i;function Mt(e,t){const o=e.trim().toLowerCase();for(const n of t){const d=typeof n=="string"?n:String(n?.term||n?.name||"").trim();if(!d)continue;const r=d.toLowerCase();if((o.includes(r)||r.includes(o))&&typeof n=="object"&&n)return String(n.definition||n.popis||"").trim()}return""}function nt(e,t,o,n,d){const r=t.trim();if(!r||!Pn.test(r))return r;const i=Mt(e,n);return ve(e,i,o.topic,o.grade,d)}async function Tn(e,t=!1){console.log("[Generator] Generating illustration prompts for:",e.topic);const o=Lt(e),n=e.content||{},d=Array.isArray(n.keyTerms)?n.keyTerms:Array.isArray(n.key_terms)?n.key_terms:[],r=(Array.isArray(n.keyFacts)?n.keyFacts:Array.isArray(n.facts)?n.facts:[]).map(a=>typeof a=="string"?a:a.fact||a.text||a.description||"").filter(Boolean).slice(0,5),i=ot(o),p=(a,v,l)=>({id:crypto.randomUUID(),name:a,prompt:v.trim(),styleId:It,category:["icon","portrait","object","scene","map"].includes(l)?l:"icon",keywords:[],status:"pending"}),s=a=>{const v=String(a||"").trim().toLowerCase();return["icon","portrait","object","scene","map"].includes(v)?v:/portr[eé]t|postava|osob/.test(v)?"portrait":/objekt|artefakt|předmět|predmet|symbol|ikona/.test(v)?"object":/map/.test(v)?"map":/sc[eé]na|situace|život|zivot/.test(v)?"scene":"icon"},u=(a,v)=>{for(const l of v){const h=a?.[l];if(typeof h=="string"&&h.trim())return h.trim()}return""},f=(a,v)=>{const l=u(a,["name","title","název","nazev","ilustrace","label"]),h=u(a,["description","popis","prompt","scene","scéna","scena"]);if(!l&&!h)return;const c=p(l||"Ilustrace",nt(l||"Ilustrace",h||l||String(e.topic||"Vzdělávací ilustrace"),o,d,s(u(a,["category","kategorie","type","typ"]))),s(u(a,["category","kategorie","type","typ"]))),b=a?.keywords||a?.klíčováSlova||a?.klicovaSlova||a?.["klíčová slova"]||a?.["klicova slova"];c.keywords=Array.isArray(b)?b.map(k=>String(k||"").trim()).filter(Boolean):typeof b=="string"?b.split(",").map(k=>k.trim()).filter(Boolean):[],v.push(c)},g=()=>{const a=o.topic,v=o.grade,l=d.map(c=>({name:typeof c=="string"?c.trim():String(c.term||c.name||"").trim(),definition:typeof c=="object"&&c?String(c.definition||c.popis||"").trim():""})).filter(c=>c.name).slice(0,5);return[{name:`Přehled tématu: ${a}`,category:"scene",description:ve(`Přehled tématu ${a}`,`hlavní pojmy, procesy a souvislosti tématu ${a} v jedné přehledné kompozici`,a,v,"scene")},...l.map(c=>({name:c.name,category:"scene",description:ve(c.name,c.definition,a,v,"scene")})),...r.slice(0,2).map((c,b)=>({name:`Scéna ${b+1}: ${a}`,category:"scene",description:ve(`Scéna k tématu ${a}`,c,a,v,"scene")})),{name:`Mapa / schéma: ${a}`,category:"map",description:ve(`Mapa nebo schéma k tématu ${a}`,"stylizované geografické nebo pojmové schéma s jasnými oblastmi a vztahy, bez drobných textových popisků",a,v,"map")}].filter((c,b,k)=>k.findIndex(z=>z.name===c.name)===b).slice(0,8).map(c=>p(c.name,c.description,c.category))},m=(a,v=8)=>{if(a.length>=v)return;const l=new Set(a.map(h=>h.name.trim().toLowerCase()));for(const h of g()){if(a.length>=v)break;const c=h.name.trim().toLowerCase();l.has(c)||(l.add(c),a.push(h))}};try{const a=await _([{role:"user",content:i}],B(e.subjectCode,"agent"),{temperature:.85,max_tokens:8192});console.log("[Generator] Illustration prompts raw:",a.substring(0,500));const v=[],l=a.split(/(?=ILUSTRACE:)/i).filter(h=>h.trim());for(const h of l){const c=h.match(/\*{0,2}ILUSTRACE\*{0,2}\s*:\s*([^\n]+)/i),b=h.match(/\*{0,2}KATEGORIE\*{0,2}\s*:\s*([^\n]+)/i),k=h.match(/\*{0,2}KL[IÍ][CČ]OV[AÁ]\s+SLOVA\*{0,2}\s*:\s*(.+)/i),z=At(h,"POPIS");if(c&&z){const A=c[1].trim().replace(/^\*{1,2}(.*)\*{1,2}$/,"$1").trim(),O=(b?.[1]??"icon").trim().replace(/^\*{1,2}(.*)\*{1,2}$/,"$1").trim(),E=s(O||"icon"),D=p(A,nt(A,z,o,d,E),E);D.keywords=k?.[1]?.split(",").map(L=>L.trim()).filter(Boolean)||[],v.push(D)}}if(v.length===0){const h=a.match(/\[[\s\S]*\]/);if(h)try{const c=JSON.parse(h[0]);for(const b of c)f(b,v)}catch{}}if(v.length===0){console.warn("[Generator] Text parsing failed, retrying as JSON...");const h=`${ot(o)}

Vrať POUZE JSON pole:
[{"name":"název česky","category":"icon|portrait|object|scene|map","keywords":["slovo1","slovo2"],"description":"konkrétní vizuální brief 4–6 vět — typ zobrazení, pohled, prvky, vztahy"}]
POUZE JSON, žádný jiný text.`,b=(await _([{role:"user",content:h}],B(e.subjectCode,"agent"),{temperature:.85,max_tokens:8192})).match(/\[[\s\S]*\]/);if(b)try{const k=JSON.parse(b[0]);for(const z of k)f(z,v)}catch{}}return v.length===0&&(console.warn("[Generator] Illustration AI parsing failed, using deterministic fallback prompts"),v.push(...g())),m(v,8),console.log("[Generator] Generated prompts:",v.length),v}catch(a){return console.error("[Generator] Illustration prompts error:",a),[]}}async function On(e,t="imagen",o={}){console.log("[Generator] Generating illustration:",e.name);try{const{generateImageWithImagen:n}=await Y(async()=>{const{generateImageWithImagen:m}=await import("./ai-chat-proxy-D2xiLy3b.js");return{generateImageWithImagen:m}},__vite__mapDeps([6,0,1,2,3,4,5])),{processImageUrl:d}=await Y(async()=>{const{processImageUrl:m}=await import("./main-app-BHMLsxig.js").then(a=>a.il);return{processImageUrl:m}},__vite__mapDeps([0,1,2,3,4,5])),r=o.model||(t==="dalle"?"openai-gpt-image-2":"flash"),i=/POPISKY:|TEXT LABEL:/i.test(e.prompt),p=Ct({stylePrompt:"Vzdělávací ilustrace, čistý styl vhodný pro učebnici, bílé pozadí.",subject:e.prompt,withLabels:i,labelText:e.name}),s=await n(p,{aspectRatio:o.aspectRatio||"1:1",numberOfImages:1,dataSetId:o.dataSetId,illustrationName:e.name,model:r,imageSize:o.imageSize??$t,referenceImageUrl:o.referenceImageUrl});if(!s.success||!(s.url||s.images?.[0]?.base64))return{success:!1,error:s.error||"Image generation returned no image data."};const u=s.url||`data:${s.images?.[0]?.mimeType||"image/png"};base64,${s.images?.[0]?.base64}`,f=o.dataSetId?`${o.dataSetId}-${e.id}`:`illustration-${e.id}`,g=await d(u,f,o.folder||"illustrations");return g?{success:!0,url:g}:{success:!1,error:"Upload obrázku do Storage selhal."}}catch(n){return{success:!1,error:String(n)}}}async function wn(e,t={}){const o=t.groupType??"illustration";console.log("[suggestImageGroups] START for topic:",e.topic,"| type:",o);const n=e.content||{},d=Array.isArray(n.keyTerms)?n.keyTerms:Array.isArray(n.key_terms)?n.key_terms:[],r=Array.isArray(n.keyFacts)?n.keyFacts:Array.isArray(n.facts)?n.facts:Array.isArray(n.key_facts)?n.key_facts:[],i=d.map(a=>typeof a=="string"?a:a.term||a.name||"").filter(Boolean).join(", "),p=r.map(a=>typeof a=="string"?a:a.fact||a.text||a.description||"").filter(Boolean).slice(0,6).join("; "),s=o==="photo",u=s?`Jsi pedagog navrhující fotorealistické vizuální materiály pro učebnici.
Téma: "${e.topic}" (${e.grade}. třída, ${e.subjectCode||e.subject_code||""})

Klíčové pojmy: ${i}
Fakta: ${p}

Navrhni 1–3 SKUPINY FOTEK (type: "photo") kde má smysl mít sérii reálných fotografií se stejným stylem a osvětlením (např. "Typy krajiny v terénu" → 3 fotky, "Fáze procesu v reálném prostředí" → 4 fotky).

PRAVIDLA:
- Každá skupina musí mít type: "photo"
- stylePrompt popisuje společný fotografický styl (přirozené světlo, autentický dojem, konzistentní úhel)
- Min 2, max 8 subjektů na skupinu — přesný počet dle tématu

Vrať POUZE validní JSON pole (žádný markdown, čistý JSON):
[
  {
    "title": "Název skupiny česky",
    "description": "Vzdělávací záměr 1 věta",
    "type": "photo",
    "stylePrompt": "authentic documentary photograph, natural light, same camera style, realistic colors",
    "layout": "gallery",
    "subjects": [
      { "name": "Přesný název subjektu 1" },
      { "name": "Přesný název subjektu 2" }
    ]
  }
]`:`Jsi pedagog navrhující vizuální materiály pro učebnici.
Téma: "${e.topic}" (${e.grade}. třída, ${e.subjectCode||e.subject_code||""})

Klíčové pojmy: ${i}
Fakta: ${p}

Navrhni 2–4 SKUPINY ILUSTRACÍ (type: "illustration") kde má smysl mít sérii obrázků se stejným stylem (např. "Typy řeckých sloupů" → 3 druhy, "Fáze měsíce" → 8 fází).

PRAVIDLO PRO POČET SUBJEKTŮ: Zvol přesně tolik kolik jich téma přirozeně má.
- Min 2, max 8 subjektů na skupinu
- Každá skupina musí mít type: "illustration"

Vrať POUZE validní JSON pole (žádný markdown, čistý JSON):
[
  {
    "title": "Název skupiny česky",
    "description": "Vzdělávací záměr 1 věta",
    "type": "illustration",
    "stylePrompt": "detailed educational illustration, white background, same scale and composition, consistent line weight",
    "layout": "gallery",
    "subjects": [
      { "name": "Přesný název subjektu 1" },
      { "name": "Přesný název subjektu 2" }
    ]
  }
]`,f=()=>new Date().toISOString(),g=(a,v,l,h="illustration",c="consistent educational illustration, white background, same scale and composition, clean documentary details")=>{const b=f(),k=l.map(z=>z.trim()).filter(Boolean);return{id:`ig-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,title:a,description:v,type:h,stylePrompt:c,layout:"gallery",subjects:k.slice(0,8).map(z=>({id:`subj-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:z,status:"pending"})),createdAt:b,updatedAt:b}},m=()=>{const a=String(e.topic||"téma"),v=i.split(",").map(k=>k.trim()).filter(Boolean),l=p.split(";").map(k=>k.trim()).filter(Boolean),h=[],c=o,b=s?"authentic documentary photograph, natural light, realistic colors, same camera style":"consistent educational illustration, white background, same scale and composition, clean documentary details";return v.length>=2&&h.push(g(`Klíčové pojmy: ${a}`,s?`Série fotografií pro hlavní pojmy tématu ${a}.`:`Série sjednocených ilustrací pro hlavní pojmy tématu ${a}.`,v.slice(0,Math.min(6,Math.max(2,v.length))),c,b)),l.length>=2&&h.push(g(`Scény a souvislosti: ${a}`,s?`Série fotografií, které vizuálně vysvětlí důležité souvislosti tématu ${a}.`:`Série scén, které vizuálně vysvětlí důležité souvislosti tématu ${a}.`,l.slice(0,4).map((k,z)=>`Scéna ${z+1}: ${k.slice(0,70)}`),c,s?"authentic documentary photograph, natural light, realistic outdoor setting, same visual style":"consistent educational scene illustration, same camera angle, same visual style, clear school textbook composition")),h.length===0&&h.push(g(`Vizuální přehled: ${a}`,s?`Základní série fotografií pro rychlé vizuální pochopení tématu ${a}.`:`Základní série ilustrací pro rychlé vizuální pochopení tématu ${a}.`,[`Úvod do tématu ${a}`,`Hlavní pojem tématu ${a}`,`Praktický příklad tématu ${a}`,`Shrnutí tématu ${a}`],c,b)),h.filter(k=>k.subjects.length>=2).slice(0,3)};try{const a=await _([{role:"user",content:u}],B(e.subjectCode,"agent"),{temperature:.7,max_tokens:1500});console.log("[suggestImageGroups] raw response (first 600):",a.substring(0,600));const l=a.replace(/```json\s*/gi,"").replace(/```\s*/gi,"").trim().match(/\[[\s\S]*\]/);if(!l)return console.warn("[suggestImageGroups] no JSON array found in response"),m();const h=JSON.parse(l[0]);console.log("[suggestImageGroups] parsed",h.length,"groups");const c=new Date().toISOString(),k=h.map(z=>({id:`ig-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,title:z.title||"Skupina obrázků",description:z.description||"",type:["illustration","photo","diagram"].includes(z.type)?z.type:o,stylePrompt:z.stylePrompt||"educational illustration, white background, consistent style",layout:"gallery",subjects:(z.subjects||[]).map(A=>({id:`subj-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:typeof A=="string"?A:A.name,status:"pending"})).filter(A=>!!A.name),createdAt:c,updatedAt:c})).filter(z=>z.subjects.length>=2).map(z=>({...z,type:o}));return k.length===0?(console.warn("[suggestImageGroups] AI returned no usable groups, using deterministic fallback groups"),m()):k}catch(a){return console.error("[suggestImageGroups] error:",a),m()}}function In(e){const t=[];return(e.media?.generatedIllustrations||[]).forEach(o=>{o.url&&t.push({url:o.url,text:[o.name,o.promptId].filter(Boolean).join(" ").toLowerCase()})}),(e.media?.generatedMapBetaImages||[]).forEach(o=>{o.url&&t.push({url:o.url,text:[o.name,o.title,o.promptId].filter(Boolean).join(" ").toLowerCase()})}),(e.media?.generatedEnvironment3dImages||[]).forEach(o=>{o.url&&t.push({url:o.url,text:[o.name,o.title,o.promptId].filter(Boolean).join(" ").toLowerCase()})}),(e.media?.generatedPhotos||[]).forEach(o=>{o.url&&t.push({url:o.url,text:[o.name,o.promptId].filter(Boolean).join(" ").toLowerCase()})}),(e.media?.savedMaps||[]).forEach(o=>{const n=o.url||o.imageUrl||o.thumbnailUrl;n&&t.push({url:n,text:[o.title,o.description,o.name].filter(Boolean).join(" ").toLowerCase()})}),(e.media?.imageGroups||[]).forEach(o=>{(o.subjects||[]).forEach(n=>{n.imageUrl&&n.status==="done"&&t.push({url:n.imageUrl,text:[o.title,o.description,n.name,n.subject,n.extraPrompt].filter(Boolean).join(" ").toLowerCase()})})}),(e.media?.images||[]).forEach(o=>{o.url&&t.push({url:o.url,text:[o.title,o.description,o.query,o.alt,...o.keywords||[]].filter(Boolean).join(" ").toLowerCase()})}),t}function $n(e,t){const o=[e.concept,e.visualHint,...(e.concept||"").split(/\s+/).filter(d=>d.length>4)].filter(Boolean).map(d=>String(d).toLowerCase());return t.find(d=>o.some(r=>d.text.includes(r)))?.url??t[0]?.url??null}function En(e){const t=(e.content?.keyTerms||[]).filter(o=>o?.term&&o?.definition).slice(0,16).map(o=>({concept:o.term,explanation:o.definition,visualHint:o.term,category:"concept"}));return t.length>0?t:[{concept:e.topic,explanation:`Vysvětli hlavní myšlenku tématu ${e.topic} vlastními slovy a uveď jeden konkrétní příklad z mapy, obrázku nebo života lidí.`,visualHint:e.topic,category:"concept"}]}async function Cn(e,t){t?.("plan","Generuji kartičky zeměpisných pojmů...");const o=oe(e),n=[...(e.media?.images||[]).slice(0,12).map(c=>`Obrázek: ${c.title||c.name||c.url}`),...(e.media?.generatedIllustrations||[]).slice(0,12).map(c=>`Ilustrace: ${c.name||c.title||c.url}`),...(e.media?.generatedPhotos||[]).slice(0,8).map(c=>`Fotka: ${c.name||c.title||c.url}`),...(e.media?.generatedMapBetaImages||[]).slice(0,8).map(c=>`Mapa: ${c.title||c.name||c.url}`)].join(`
`),d=ee({topic:e.topic,grade:e.grade,subject:e.subjectCode,context:o,keyTermsList:(e.content?.keyTerms||[]).map(c=>typeof c=="string"?c:`${c.term||""}${c.definition?` — ${c.definition}`:""}`).filter(Boolean).join(`
`),keyFactsList:(e.content?.keyFacts||[]).join(`
`),mediaSection:n}),r=`${d?`AUTOREM NASTAVENÝ PROMPT PRO TENTO ZEMĚPISNÝ FORMÁT — NEJVYŠŠÍ PRIORITA:
${d}

Níže je technický výstupní kontrakt. Pokud je mezi instrukcemi konflikt, zachovej autorský záměr, ale stále vrať validní JSON ve smluveném tvaru.

`:""}Jsi didaktik zeměpisu pro 2. stupeň ZŠ. Vytvoř sadu kartiček k učení pojmů.

TÉMA: "${e.topic}"
ROČNÍK: ${e.grade}. třída

KONTEXT Z DATASETU:
${o}

Vygeneruj 12-16 kartiček. Nejde o cizojazyčnou slovní zásobu.
Kartičky mají být:
- přední strana: složitější zeměpisný pojem / jev / místopisný objekt + vhodný obrázek nebo mapa,
- zadní strana: krátké, přesné vysvětlení pro žáka,
- u místopisu používej i vztahy místo-mapa, místo-stát, místo-kontinent,
- vybírej pojmy, které pomáhají chápat souvislosti, ne izolovaný seznam slov.

Return ONLY this JSON (no markdown fences):
{
  "title": "string — český název sady",
  "items": [
    {
      "concept": "string — pojem nebo místopisný objekt na přední stranu",
      "explanation": "string — vysvětlení na zadní stranu, 1-3 věty",
      "visualHint": "string — co hledat v obrázcích/mapách",
      "category": "concept | process | place | map-skill | relationship"
    }
  ]
}`;t?.("zemepis-prompt",`Kompletní prompt kartiček pojmů (${r.length} znaků)`,{prompt:r});const i=await _([{role:"user",content:r}],B(e.subjectCode,"agent"),{max_tokens:8192});let p=`${e.topic} – kartičky pojmů`,s=[];if(i)try{const c=i.match(/\{[\s\S]*\}/);if(!c)throw new Error("Žádný JSON v odpovědi");const b=JSON.parse(c[0]);p=b.title||p,s=Array.isArray(b.items)?b.items:[]}catch(c){console.warn("[generateZemepisConceptFlashcards] AI parse failed, using key terms fallback:",c)}s=s.filter(c=>c?.concept&&c?.explanation).slice(0,16),s.length===0&&(s=En(e)),t?.("build","Přiřazuji obrázky a mapy ke kartičkám...");const u=In(e),{createFlashcardSlide:f,createInfoSlide:g}=await Y(async()=>{const{createFlashcardSlide:c,createInfoSlide:b}=await import("./quiz-BcYL7OA6.js");return{createFlashcardSlide:c,createInfoSlide:b}},[]),m=[],a=g(0,"title-only");a.title=p,a.backgroundColor="#0f766e",m.push(a),s.forEach((c,b)=>{const k=f(b+1);k.mode="general",k.word=c.concept,k.translation=c.explanation,k.exampleSentence=c.category?`Typ: ${c.category}`:"",k.exampleTranslation="",k.audioLang=void 0,k.image=$n(c,u)||void 0,k.cardColor="#0f766e",m.push(k)});const v={id:crypto.randomUUID(),title:p,slides:m,settings:{showProgress:!0,showScore:!1,allowSkip:!0,allowBack:!0,shuffleQuestions:!1,shuffleOptions:!1,showExplanations:"immediately"},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{stripBase64FromObject:l}=await Y(async()=>{const{stripBase64FromObject:c}=await import("./main-app-BHMLsxig.js").then(b=>b.il);return{stripBase64FromObject:c}},__vite__mapDeps([0,1,2,3,4,5])),h=l(v);return xe(h),t?.("save","Ukládám kartičky do Supabase..."),await te(h),{success:!0,id:v.id,preview:`Kartičky pojmů: ${s.length} pojmů | Téma: ${e.topic}`}}function ne(e){return e<=6?"A1":e===7?"A2":e===8||e>=9?"B1":"A2"}async function xn(e,t){t?.("plan","Generuji slovní zásobu pro téma...");const o=ne(e.grade);e.subjectCode?.includes("nemcin")||e.subjectCode?.includes("francouz");const n=e.subjectCode?.includes("nemcin")?"German":e.subjectCode?.includes("francouz")?"French":"English",d=`You are an EFL/EFL material designer. Generate a structured vocabulary set for Czech school students.

TOPIC: "${e.topic}"
LANGUAGE: ${n}
CEFR LEVEL: ${o}
GRADE: ${e.grade}. ročník (Czech school)

Generate exactly 16 vocabulary items relevant to this topic at the ${o} level.

Return ONLY this JSON (no markdown fences):
{
  "title": "string — e.g. 'Food & Restaurants - Vocabulary'",
  "cefrLevel": "${o}",
  "items": [
    {
      "word": "string — ${n} word or phrase",
      "translation": "string — Czech translation",
      "phonetic": "string — IPA transcription e.g. /pɔːʃ.ən/",
      "exampleSentence": "string — simple example sentence at ${o} level",
      "exampleTranslation": "string — Czech translation of the example"
    }
  ]
}

Rules:
- Items must be thematically coherent with the topic
- Example sentences must be at ${o} level (simple grammar, common vocabulary)
- Czech translations must be natural, not overly formal
- Phonetics in IPA for all items
- Mix: nouns, verbs, adjectives, useful phrases
`,r=await _([{role:"user",content:d}],B(e.subjectCode,"agent"),{max_tokens:8192});if(!r)return{success:!1,error:"AI neodpovědělo"};let i;try{const c=r.match(/\{[\s\S]*\}/);if(!c)throw new Error("Žádný JSON v odpovědi");i=JSON.parse(c[0])}catch(c){return{success:!1,error:`Chyba parsování: ${c}`}}t?.("build","Přiřazuji obrázky z datasetu...");const p=i.items||[],s=[];(e.media?.illustrations||[]).forEach(c=>{c.url&&s.push({url:c.url,text:(c.prompt||c.subject||"").toLowerCase()})}),(e.media?.imageGroups||[]).forEach(c=>{(c.subjects||[]).forEach(b=>{b.imageUrl&&b.status==="done"&&s.push({url:b.imageUrl,text:(b.name||b.subject||"").toLowerCase()})})}),(e.media?.images||[]).forEach(c=>{const b=c.webUrl||c.url;b&&s.push({url:b,text:[c.title,c.description,c.query,c.alt].filter(Boolean).join(" ").toLowerCase()})});const u=p.map(c=>{const b=(c.word||"").toLowerCase(),k=(c.translation||"").toLowerCase();return s.find(A=>A.text.includes(b)||A.text.includes(k))?.url??null});t?.("build","Sestavuji flashcard board...");const{createFlashcardSlide:f,createInfoSlide:g}=await Y(async()=>{const{createFlashcardSlide:c,createInfoSlide:b}=await import("./quiz-BcYL7OA6.js");return{createFlashcardSlide:c,createInfoSlide:b}},[]),m=[],a=g(0,"title-only");a.title=i.title||`${e.topic} – Vocabulary`,a.backgroundColor="#6366f1",m.push(a),p.forEach((c,b)=>{const k=f(b+1);k.word=c.word||"",k.translation=c.translation||"",k.phonetic=c.phonetic||"",k.exampleSentence=c.exampleSentence||"",k.exampleTranslation=c.exampleTranslation||"",k.audioLang="en-US",k.mode="language",u[b]&&(k.image=u[b]),m.push(k)});const v={id:crypto.randomUUID(),title:i.title||`${e.topic} – Slovní zásoba`,slides:m,settings:{showProgress:!0,showScore:!1,allowSkip:!0,allowBack:!0,shuffleQuestions:!1,shuffleOptions:!1,showExplanations:"immediately"},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{stripBase64FromObject:l}=await Y(async()=>{const{stripBase64FromObject:c}=await import("./main-app-BHMLsxig.js").then(b=>b.il);return{stripBase64FromObject:c}},__vite__mapDeps([0,1,2,3,4,5])),h=l(v);return xe(h),t?.("save","Ukládám do Supabase..."),await te(h),{success:!0,id:v.id,preview:`Kartičky: ${(i.items||[]).length} slov | Téma: ${e.topic} | Úroveň: ${o}`}}async function ze(e,t,o){const{stripBase64FromObject:n}=await Y(async()=>{const{stripBase64FromObject:f}=await import("./main-app-BHMLsxig.js").then(g=>g.il);return{stripBase64FromObject:f}},__vite__mapDeps([0,1,2,3,4,5])),d=crypto.randomUUID(),r=crypto.randomUUID(),i={id:d,title:t,blocks:e,settings:{showAnswerKey:!0,pageSize:"A4",margins:"normal"},metadata:{subject:o.subjectCode,grade:o.grade,topic:o.topic},linkedBoardId:r,status:"draft",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};ce(i);const p={...i,blocks:e.filter(f=>!f.worksheetOnly)},s=_t(p);s.id=r,s.linkedWorksheetId=d,s.title=t;const u=n(s);return be(u),await te(u),{worksheetId:d,boardId:r}}function Sn(e,t,o){const n=e.split("___");if(n.length<2)return[{type:"text",content:e}];const d=[];return d.push({type:"text",content:n[0]}),d.push({type:"blank",id:o,correctAnswer:t.trim()}),d.push({type:"text",content:n.slice(1).join("___")}),d}async function Nn(e,t){t?.("plan","Generuji gramatickou lekci (PPP struktura)...");const o=ne(e.grade);t?.("agent1","Generuji obsah lekce...");const n=`You are an EFL teacher creating a grammar lesson for Czech students (grade ${e.grade}, CEFR ${o}).

TOPIC/GRAMMAR POINT: "${e.topic}"
CEFR LEVEL: ${o}

Return ONLY this JSON (no markdown, no code fences):
{
  "title": "string — grammar topic in English, e.g. 'Present Simple – Habits & Routines'",
  "grammarPoint": "string — short grammar name, e.g. 'Present Simple'",
  "contextText": "string — short dialogue or 4-6 sentences showcasing the grammar. Use **word** to bold target structures.",
  "noticeNote": "string — Czech: brief observation, e.g. 'Všimni si, jak tvoříme přítomný čas...'",
  "ruleExplanation": "string — Czech: clear concise rule explanation (1-3 sentences)",
  "ruleAffirmative": "string — English affirmative example sentence",
  "ruleNegative": "string — English negative example sentence",
  "ruleQuestion": "string — English question example sentence",
  "examples": [
    "string — English example 1",
    "string — English example 2",
    "string — English example 3"
  ],
  "fillBlanks": [
    { "sentence": "I ___ (go) to school every day.", "answer": "go" },
    { "sentence": "She ___ (not/like) vegetables.", "answer": "doesn't like" },
    { "sentence": "We ___ (have) English on Mondays.", "answer": "have" },
    { "sentence": "My sister ___ (study) hard.", "answer": "studies" },
    { "sentence": "They ___ (not/be) at home.", "answer": "aren't" },
    { "sentence": "___ he ___ (play) football every week?", "answer": "Does / play" }
  ],
  "productionTask": "string — Czech production task, e.g. 'Napiš 4-5 vět o svém denním programu pomocí přítomného času.'"
}

Rules:
- Czech for explanations and instructions, English for all examples
- Fill-blank sentences MUST use ___ as the blank marker — exactly one ___ per sentence
- Exactly 6 fill-blank sentences, exactly 3 examples
- CEFR ${o} appropriate difficulty throughout`,d=await _([{role:"user",content:n}],B(e.subjectCode,"agent"),{max_tokens:4096});if(!d)return{success:!1,error:"AI neodpovědělo"};let r;try{const a=d.match(/\{[\s\S]*\}/);if(!a)throw new Error("Žádný JSON v odpovědi");r=JSON.parse(a[0])}catch(a){return{success:!1,error:`Chyba parsování JSON: ${a}`}}t?.("build","Sestavuji pracovní list...");const i=r.title||`${e.topic} – Gramatická lekce`;let p=0;const s=[];s.push({id:T(),order:p++,type:"heading",width:"full",content:{text:i,level:"h1",headingStyle:"left-border"}}),s.push({id:T(),order:p++,type:"paragraph",width:"full",content:{html:`<h3>🔍 Gramatika v kontextu</h3><p>${(r.contextText||"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>")}</p><p><em>${r.noticeNote||""}</em></p>`}}),s.push({id:T(),order:p++,type:"infobox",width:"full",content:{title:`📋 Pravidlo: ${r.grammarPoint||""}`,html:`<p>${r.ruleExplanation||""}</p>
<table style="width:100%;border-collapse:collapse;margin-top:8px">
<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>(+)</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${r.ruleAffirmative||""}</td></tr>
<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>(−)</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${r.ruleNegative||""}</td></tr>
<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>(?)</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${r.ruleQuestion||""}</td></tr>
</table>`,variant:"blue"}});const u=(r.examples||[]).map(a=>`<li>${a}</li>`).join("");s.push({id:T(),order:p++,type:"paragraph",width:"full",content:{html:`<h3>✏️ Příklady</h3><ul>${u}</ul>`}});const f=r.fillBlanks||[];if(f.length>0){s.push({id:T(),order:p++,type:"heading",width:"full",content:{text:"Cvičení – Doplň správný tvar",level:"h2"}});const a=[];f.forEach((v,l)=>{l>0&&a.push({type:"text",content:"   "}),a.push({type:"text",content:`${l+1}. `});const h=Sn(v.sentence||"",v.answer||"",`gram-blank-${l+1}`);a.push(...h)}),s.push({id:T(),order:p++,type:"fill-blank",width:"full",content:{instruction:"Doplň správný tvar slovesa do mezer.",segments:a}})}s.push({id:T(),order:p++,type:"heading",width:"full",content:{text:"🗣️ Volné použití (Production)",level:"h2"}}),s.push({id:T(),order:p++,type:"free-answer",width:"full",content:{question:r.productionTask||"Napiš 4-5 vět pomocí nové gramatiky.",lines:5}}),t?.("save","Ukládám lekci jako pracovní list a board...");const{worksheetId:g,boardId:m}=await ze(s,i,e);return{success:!0,id:g,linkedBoardId:m,preview:`Gramatická lekce (PPP) | ${o} | ${e.grade}. ročník | + Board`}}async function Ln(e,t){t?.("plan","Generuji čtecí aktivitu...");const o=ne(e.grade),n=o==="A1"?"100-150":o==="A2"?"150-220":"250-350";t?.("agent1","Generuji čtecí text a úkoly...");const d=`You are an EFL material designer. Create a reading activity for Czech students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"
CEFR LEVEL: ${o}
TEXT LENGTH: ${n} words

Return ONLY this JSON (no markdown, no code fences):
{
  "title": "string — title of the reading text in English, e.g. 'Life in the City'",
  "preReadingVocab": [
    { "word": "string — English word/phrase", "translation": "string — Czech translation" }
  ],
  "predictionQuestion": "string — Czech prediction question to think about before reading",
  "text": "string — the reading text in English, ${n} words. Use \\n\\n for paragraph breaks.",
  "trueFalseStatements": [
    { "statement": "string — English statement about the text", "answer": "T or F or NM" }
  ],
  "comprehensionQuestions": [
    "string — Czech question, student answers in English"
  ],
  "discussionQuestion": "string — Czech personal response question connecting text to student's life",
  "answerKey": "string — compact answer key for T/F, e.g. '1-T, 2-F, 3-NM, 4-T, 5-F, 6-T'"
}

Rules:
- Exactly 4-5 pre-reading vocabulary items
- Text strictly at ${o} level (simple grammar and common vocabulary for A1/A2, more varied for B1)
- Exactly 6 True/False/NM statements
- Exactly 3 comprehension questions
- Czech for instructions and questions, English for the reading text
- Engaging scenario connected to "${e.topic}"`,r=await _([{role:"user",content:d}],B(e.subjectCode,"agent"),{max_tokens:6144});if(!r)return{success:!1,error:"AI neodpovědělo"};let i;try{const h=r.match(/\{[\s\S]*\}/);if(!h)throw new Error("Žádný JSON v odpovědi");i=JSON.parse(h[0])}catch(h){return{success:!1,error:`Chyba parsování JSON: ${h}`}}t?.("build","Sestavuji pracovní list...");const p=i.title?`${i.title}`:`${e.topic} – Čtení`;let s=0;const u=[];u.push({id:T(),order:s++,type:"heading",width:"full",content:{text:`📖 ${p}`,level:"h1",headingStyle:"left-border"}});const f=(i.preReadingVocab||[]).map(h=>`<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>${h.word||""}</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${h.translation||""}</td></tr>`).join("");u.push({id:T(),order:s++,type:"infobox",width:"full",content:{title:"📚 Před čtením – Nová slovíčka",html:`<table style="width:100%;border-collapse:collapse">${f}</table>
<p style="margin-top:8px"><strong>Přemýšlej:</strong> ${i.predictionQuestion||""}</p>`,variant:"green"}});const g=(i.text||"").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");u.push({id:T(),order:s++,type:"paragraph",width:"full",content:{html:`<h3>📖 Text</h3><p>${g}</p>`}});const m=i.trueFalseStatements||[];m.length>0&&(u.push({id:T(),order:s++,type:"heading",width:"full",content:{text:"Úkol 1 – Pravda / Nepravda / Nezmíněno",level:"h2"}}),u.push({id:T(),order:s++,type:"free-answer",width:"full",content:{question:"Označ každé tvrzení: T (True) / F (False) / NM (Not Mentioned)",lines:1,subQuestions:m.map((h,c)=>({id:`tf-${c+1}`,text:`${c+1}. ${h.statement||""}`,lines:1,sampleAnswer:h.answer||""})),subColumns:1}}));const a=i.comprehensionQuestions||[];a.length>0&&(u.push({id:T(),order:s++,type:"heading",width:"full",content:{text:"Úkol 2 – Otázky s porozuměním",level:"h2"}}),u.push({id:T(),order:s++,type:"free-answer",width:"full",content:{question:"Odpověz na otázky anglicky.",lines:2,subQuestions:a.map((h,c)=>({id:`comp-${c+1}`,text:`${c+1}. ${h}`,lines:2})),subColumns:1}})),i.answerKey&&u.push({id:T(),order:s++,type:"infobox",width:"full",content:{title:"✔️ Klíč k odpovědím",html:`<p>${i.answerKey}</p>`,variant:"yellow"}}),u.push({id:T(),order:s++,type:"free-answer",width:"full",content:{question:`💬 Diskuse: ${i.discussionQuestion||"Co si myslíš o tématu textu?"}`,lines:3}}),t?.("save","Ukládám čtecí aktivitu jako pracovní list a board...");const{worksheetId:v,boardId:l}=await ze(u,p,e);return{success:!0,id:v,linkedBoardId:l,preview:`Čtení s porozuměním | ${o} | ${n} slov | ${e.grade}. ročník | + Board`}}async function Rn(e,t){t?.("plan","Generuji aktivitu pro psaní...");const o=ne(e.grade),n=o==="A1"?"40-60":o==="A2"?"60-100":"100-150";t?.("agent1","Generuji zadání a vzorový text...");const d=`Create a guided writing activity for Czech EFL students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"
WRITING TARGET: ${n} words

Return ONLY this JSON (no markdown, no code fences):
{
  "title": "string — writing task title in English, e.g. 'My Favourite Place'",
  "task": "string — Czech: clear writing task (who, why, what to include). End with: Napiš ${n} slov.",
  "modelText": "string — model text in English (${n} words). Use **phrase** to bold key phrases. Use \\n\\n for paragraphs.",
  "languageBank": [
    { "phrase": "string — English phrase/connector", "translation": "string — Czech translation" }
  ],
  "writingFrame": "string — writing frame with sentence starters, e.g. 'My favourite place is ___.\\nI like it because ___.\\nEvery time I go there, I ___.'",
  "checklist": [
    "string — self-assessment item, e.g. 'Did I write ${n} words?'"
  ]
}

Rules:
- Exactly 8-10 language bank phrases
- Exactly 5 checklist items
- Model text strictly at ${o} level
- Czech for task and checklist; English for model text, language bank phrases, and writing frame`,r=await _([{role:"user",content:d}],B(e.subjectCode,"agent"),{max_tokens:4096});if(!r)return{success:!1,error:"AI neodpovědělo"};let i;try{const l=r.match(/\{[\s\S]*\}/);if(!l)throw new Error("Žádný JSON v odpovědi");i=JSON.parse(l[0])}catch(l){return{success:!1,error:`Chyba parsování JSON: ${l}`}}t?.("build","Sestavuji pracovní list...");const p=i.title||`${e.topic} – Psaní`;let s=0;const u=[];u.push({id:T(),order:s++,type:"heading",width:"full",content:{text:`✍️ ${p}`,level:"h1",headingStyle:"left-border"}}),u.push({id:T(),order:s++,type:"infobox",width:"full",content:{title:"📝 Zadání",html:`<p>${(i.task||"").replace(/\n/g,"<br>")}</p>`,variant:"blue"}});const f=(i.modelText||"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");u.push({id:T(),order:s++,type:"paragraph",width:"full",content:{html:`<h3>📄 Vzorový text</h3><p>${f}</p>`}});const g=(i.languageBank||[]).map(l=>`<tr><td style="padding:4px 8px;border:1px solid #ccc"><em>${l.phrase||""}</em></td><td style="padding:4px 8px;border:1px solid #ccc">${l.translation||""}</td></tr>`).join("");u.push({id:T(),order:s++,type:"infobox",width:"full",content:{title:"💡 Užitečné fráze",html:`<table style="width:100%;border-collapse:collapse">${g}</table>`,variant:"green"}}),u.push({id:T(),order:s++,type:"paragraph",width:"full",content:{html:`<h3>🗂️ Šablona pro psaní</h3><p style="font-style:italic">${(i.writingFrame||"").replace(/\n/g,"<br>")}</p>`}}),u.push({id:T(),order:s++,type:"free-answer",width:"full",content:{question:`Napiš svůj text (${n} slov):`,lines:8}});const m=(i.checklist||[]).map(l=>`<li>☐ ${l}</li>`).join("");u.push({id:T(),order:s++,type:"infobox",width:"full",content:{title:"✅ Sebehodnocení",html:`<ul>${m}</ul>`,variant:"yellow"}}),t?.("save","Ukládám aktivitu psaní jako pracovní list a board...");const{worksheetId:a,boardId:v}=await ze(u,p,e);return{success:!0,id:a,linkedBoardId:v,preview:`Řízené psaní | ${o} | ${n} slov | ${e.grade}. ročník | + Board`}}async function Mn(e,t){t?.("plan","Generuji aktivitu pro mluvení...");const o=ne(e.grade);t?.("agent1","Generuji diskusní otázky a role-play...");const n=`Create a speaking activity for Czech EFL students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"

Return ONLY this JSON (no markdown, no code fences):
{
  "title": "string — speaking activity title in English, e.g. 'Talking About Food'",
  "discussionQuestions": [
    "string — English discussion question suitable for ${o}"
  ],
  "rolePlayA": "string — Student A role: Czech role description + English conversation prompts. Use \\n for line breaks.",
  "rolePlayB": "string — Student B role: Czech role description + English conversation prompts. Use \\n for line breaks.",
  "usefulLanguage": [
    { "phrase": "string — English phrase", "translation": "string — Czech translation" }
  ],
  "selfAssessment": [
    "string — Czech 'Can I...' self-assessment statement"
  ]
}

Rules:
- Exactly 8 discussion questions (vary difficulty slightly: start easier, get harder)
- Exactly 8-10 useful language phrases (include: agreeing, disagreeing, giving opinion, asking for opinion)
- Exactly 3-4 self-assessment items (Can I...? statements)
- English for discussion questions and useful phrases; Czech for role descriptions and self-assessment`,d=await _([{role:"user",content:n}],B(e.subjectCode,"agent"),{max_tokens:4096});if(!d)return{success:!1,error:"AI neodpovědělo"};let r;try{const v=d.match(/\{[\s\S]*\}/);if(!v)throw new Error("Žádný JSON v odpovědi");r=JSON.parse(v[0])}catch(v){return{success:!1,error:`Chyba parsování JSON: ${v}`}}t?.("build","Sestavuji pracovní list...");const i=r.title||`${e.topic} – Mluvení`;let p=0;const s=[];s.push({id:T(),order:p++,type:"heading",width:"full",content:{text:`🗣️ ${i}`,level:"h1",headingStyle:"left-border"}});const u=(r.discussionQuestions||[]).map((v,l)=>`<li>${l+1}. ${v}</li>`).join("");s.push({id:T(),order:p++,type:"paragraph",width:"full",content:{html:`<h3>💬 Diskusní otázky</h3><ol>${u}</ol>`}}),s.push({id:T(),order:p++,type:"heading",width:"full",content:{text:"🎭 Role-play",level:"h2"}}),s.push({id:T(),order:p++,type:"infobox",width:"half",content:{title:"Student A",html:`<p>${(r.rolePlayA||"").replace(/\n/g,"<br>")}</p>`,variant:"blue"}}),s.push({id:T(),order:p++,type:"infobox",width:"half",content:{title:"Student B",html:`<p>${(r.rolePlayB||"").replace(/\n/g,"<br>")}</p>`,variant:"green"}});const f=(r.usefulLanguage||[]).map(v=>`<tr><td style="padding:4px 8px;border:1px solid #ccc"><em>${v.phrase||""}</em></td><td style="padding:4px 8px;border:1px solid #ccc">${v.translation||""}</td></tr>`).join("");s.push({id:T(),order:p++,type:"infobox",width:"full",content:{title:"💬 Užitečný jazyk",html:`<table style="width:100%;border-collapse:collapse">${f}</table>`,variant:"purple"}});const g=(r.selfAssessment||[]).map(v=>`<li>☐ ${v}</li>`).join("");s.push({id:T(),order:p++,type:"infobox",width:"full",content:{title:"⭐ Sebehodnocení",html:`<ul>${g}</ul>`,variant:"yellow"}}),t?.("save","Ukládám aktivitu mluvení jako pracovní list a board...");const{worksheetId:m,boardId:a}=await ze(s,i,e);return{success:!0,id:m,linkedBoardId:a,preview:`Konverzační aktivita | ${o} | Role-play + diskuse | ${e.grade}. ročník | + Board`}}async function Dn(e,t){t?.("plan","Generuji jazykový kvíz (slovní zásoba + gramatika)...");const o=ne(e.grade),n=e.subjectCode?.includes("nemcin")?"German":e.subjectCode?.includes("francouz")?"French":"English",d=`You are an EFL assessment designer. Create a language quiz for Czech students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"
LANGUAGE: ${n}
CEFR LEVEL: ${o}

Return ONLY this JSON (no markdown fences, no extra text):
{
  "title": "string — e.g. 'Food & Restaurants – Language Quiz'",
  "sections": [
    {
      "sectionTitle": "🔤 Slovní zásoba",
      "abcVocab": [
        {
          "question": "string — e.g. 'What does \\"portion\\" mean?'",
          "options": ["string (correct)", "string (wrong)", "string (wrong)", "string (wrong)"],
          "correctIndex": 0
        }
      ],
      "connectPairs": [
        { "english": "string — English word", "czech": "string — Czech translation" }
      ]
    },
    {
      "sectionTitle": "📐 Gramatika",
      "fillBlanks": [
        {
          "sentence": "string — sentence with [BLANK] marker, e.g. 'She [BLANK] to school every day.'",
          "answer": "string — correct answer, e.g. 'goes'"
        }
      ],
      "abcGrammar": [
        {
          "question": "string — e.g. 'Choose the correct form: She ___ happy.'",
          "options": ["is (correct)", "are (wrong)", "am (wrong)", "be (wrong)"],
          "correctIndex": 0
        }
      ]
    }
  ]
}

Rules:
- abcVocab: exactly 5 questions. Each has 4 options (1 correct Czech translation + 3 plausible distractors).
- connectPairs: exactly 6 word-translation pairs (different words from abcVocab).
- fillBlanks: exactly 6 sentences. Each has exactly one [BLANK] marker. Answer is 1-2 words.
- abcGrammar: exactly 4 questions. Cover grammar typical for ${o} level.
- All questions must relate to topic "${e.topic}".
- Difficulty appropriate for CEFR ${o}.
- Options in abcVocab and abcGrammar are plain strings WITHOUT "(correct)" labels — correctIndex specifies which is correct.
`,r=await _([{role:"user",content:d}],B(e.subjectCode,"agent"),{max_tokens:8192});if(!r)return{success:!1,error:"AI neodpovědělo"};let i;try{const b=r.match(/\{[\s\S]*\}/);if(!b)throw new Error("Žádný JSON v odpovědi");i=JSON.parse(b[0])}catch(b){return{success:!1,error:`Chyba parsování JSON: ${b}`}}t?.("build","Sestavuji VividBoard kvíz...");const{createInfoSlide:p,createABCSlide:s,createFillBlanksSlide:u,createConnectPairsSlide:f}=await Y(async()=>{const{createInfoSlide:b,createABCSlide:k,createFillBlanksSlide:z,createConnectPairsSlide:A}=await import("./quiz-BcYL7OA6.js");return{createInfoSlide:b,createABCSlide:k,createFillBlanksSlide:z,createConnectPairsSlide:A}},[]),g=[];let m=0;const a=p(m++,"title-only");a.title=i.title||`${e.topic} – Jazykový kvíz`,a.backgroundColor="#4f46e5",g.push(a);for(const b of i.sections||[]){const k=p(m++,"title-only");k.title=b.sectionTitle||"Sekce",k.backgroundColor="#7c3aed",g.push(k);for(const O of b.abcVocab||[]){const E=s(m++);E.question=O.question||"";const D=(O.options||[]).slice(0,4);E.options=D.map((L,x)=>({id:["a","b","c","d"][x]||`opt-${x}`,label:["A","B","C","D"][x]||String(x+1),content:L,isCorrect:x===(O.correctIndex??0)})),g.push(E)}for(const O of b.abcGrammar||[]){const E=s(m++);E.question=O.question||"";const D=(O.options||[]).slice(0,4);E.options=D.map((L,x)=>({id:["a","b","c","d"][x]||`opt-${x}`,label:["A","B","C","D"][x]||String(x+1),content:L,isCorrect:x===(O.correctIndex??0)})),g.push(E)}const z=(b.connectPairs||[]).slice(0,6);if(z.length>=2){const O=f(m++);O.instruction=`Spoj ${n==="English"?"anglické":n==="German"?"německé":"francouzské"} slovo s českým překladem`,O.pairs=z.map((E,D)=>({id:`pair-${D+1}`,left:{id:`left-${D+1}`,type:"text",content:E.english||""},right:{id:`right-${D+1}`,type:"text",content:E.czech||""}})),O.countAsMultiple=!0,O.shuffleSides=!0,g.push(O)}const A=(b.fillBlanks||[]).slice(0,6);if(A.length>0){const O=u(m++);O.instruction="Doplň správný tvar slova",O.sentences=A.map((E,D)=>{const L=E.sentence||"",x=E.answer||"",P=`blank-${D+1}-1`,$=L.replace("[BLANK]",`[${P}]`),V=$.indexOf(`[${P}]`);return{id:`sentence-${D+1}`,text:$,blanks:[{id:P,text:x,position:V>=0?V:0}]}}),O.distractors=[],O.shuffleOptions=!0,g.push(O)}}const v={id:crypto.randomUUID(),title:i.title||`${e.topic} – Jazykový kvíz`,slides:g,settings:{showProgress:!0,showScore:!0,allowSkip:!1,allowBack:!1,shuffleQuestions:!1,shuffleOptions:!0,showExplanations:"after-all"},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{stripBase64FromObject:l}=await Y(async()=>{const{stripBase64FromObject:b}=await import("./main-app-BHMLsxig.js").then(k=>k.il);return{stripBase64FromObject:b}},__vite__mapDeps([0,1,2,3,4,5])),h=l(v);xe(h),t?.("save","Ukládám kvíz do Supabase..."),await te(h);const c=g.length-1;return{success:!0,id:v.id,preview:`Jazykový kvíz | ${c} slides | ABC + Spojovačka + Doplňování | ${o} | ${e.grade}. ročník`}}async function Fn(e,t){t?.("plan","Generuji poslechovou aktivitu...");const o=ne(e.grade),n=o==="A1"?"80-120":o==="A2"?"130-190":"200-280";t?.("build","Generuji ilustraci tématu..."),t?.("agent1","Generuji audioskript a úkoly...");const d=`Create a listening activity for Czech EFL students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"
SCRIPT LENGTH: ${n} words

Return ONLY this JSON (no markdown, no code fences):
{
  "title": "string — listening activity title in English, e.g. 'A Day at the Market'",
  "preListeningVocab": [
    { "word": "string — English word/phrase", "translation": "string — Czech translation" }
  ],
  "predictionQuestion": "string — Czech prediction question to think about before listening",
  "script": "string — the listening script in English, ${n} words. Natural dialogue or monologue. Use 'Speaker: ' labels for dialogues. Use \\n\\n for paragraph breaks.",
  "orderingEvents": [
    "string — English sentence describing an event from the script (scrambled order)"
  ],
  "correctOrder": [1, 2, 3, 4, 5],
  "trueFalseStatements": [
    { "statement": "string — English statement about the script", "answer": "T or F" }
  ],
  "comprehensionQuestions": [
    "string — Czech comprehension question, student answers in English"
  ],
  "discussionQuestions": [
    "string — Czech personal discussion question"
  ],
  "answerKey": "string — compact key, e.g. 'Ordering: 3-1-4-2-5 | T/F: T-F-T-T-F'"
}

Rules:
- Exactly 5 pre-listening vocabulary items
- Exactly 5 ordering events (scrambled) + correctOrder array with numbers 1-5
- Exactly 5 True/False statements
- Exactly 3 comprehension questions
- Exactly 2 discussion questions
- Script at CEFR ${o} level — short sentences for A1/A2, varied for B1
- Czech for instructions and questions, English for the script`,r=await _([{role:"user",content:d}],B(e.subjectCode,"agent"),{max_tokens:6144});if(!r)return{success:!1,error:"AI neodpovědělo"};let i;try{const k=r.match(/\{[\s\S]*\}/);if(!k)throw new Error("Žádný JSON v odpovědi");i=JSON.parse(k[0])}catch(k){return{success:!1,error:`Chyba parsování JSON: ${k}`}}t?.("build","Sestavuji pracovní list...");const p=i.title||`${e.topic} – Poslech`;let s=0;const u=[];u.push({id:T(),order:s++,type:"heading",width:"full",content:{text:`🎧 ${p}`,level:"h1",headingStyle:"left-border"}});const f=(i.preListeningVocab||[]).map(k=>`<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>${k.word||""}</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${k.translation||""}</td></tr>`).join("");u.push({id:T(),order:s++,type:"infobox",width:"full",content:{title:"📚 Před poslechem – Klíčová slovíčka",html:`<table style="width:100%;border-collapse:collapse">${f}</table>
<p style="margin-top:8px"><strong>Přemýšlej:</strong> ${i.predictionQuestion||""}</p>`,variant:"green"}}),u.push({id:T(),order:s++,type:"paragraph",width:"full",worksheetOnly:!0,content:{html:`<p><em>📌 Pro učitele: Přečtěte text nahlas nebo přehrajte nahrávku. Tempo: přirozené pro ${o}. Speaker: viz audioskript níže.</em></p>`}});const g=(i.script||"").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");u.push({id:T(),order:s++,type:"infobox",width:"full",content:{title:"🎧 Audioskript",html:`<p>${g}</p>`,variant:"blue",ttsText:i.script||"",ttsLang:"en-US"}});const m=i.orderingEvents||[],a=i.correctOrder||[];if(m.length>0){u.push({id:T(),order:s++,type:"heading",width:"full",content:{text:"Úkol 1 – Seřaď události",level:"h2"}});const k=m.map((A,O)=>`${String.fromCharCode(65+O)}. ${A}`).join("<br>"),z=a.length>0?` (Správné pořadí: ${a.map(A=>String.fromCharCode(64+A)).join(" → ")})`:"";u.push({id:T(),order:s++,type:"paragraph",width:"full",content:{html:`<p>Seřaď tyto události ve správném pořadí (1–${m.length}) podle poslechu:</p><p>${k}</p><p style="color:#666;font-size:0.85em">${z}</p>`}}),u.push({id:T(),order:s++,type:"free-answer",width:"full",content:{question:"Moje pořadí: ___ → ___ → ___ → ___ → ___",lines:1}})}const v=i.trueFalseStatements||[];if(v.length>0){u.push({id:T(),order:s++,type:"heading",width:"full",content:{text:"Úkol 2 – Pravda / Nepravda",level:"h2"}});for(let k=0;k<v.length;k++){const z=v[k],A=(z.answer||"").toUpperCase().startsWith("T");u.push({id:T(),order:s++,type:"multiple-choice",width:"full",content:{question:`${k+1}. ${z.statement||""}`,options:[{id:"T",text:"✅ True"},{id:"F",text:"❌ False"}],correctAnswers:[A?"T":"F"],allowMultiple:!1,layout:"horizontal",visualStyle:"playful"}})}}const l=i.comprehensionQuestions||[];l.length>0&&(u.push({id:T(),order:s++,type:"heading",width:"full",content:{text:"Úkol 3 – Otázky s porozuměním",level:"h2"}}),u.push({id:T(),order:s++,type:"free-answer",width:"full",content:{question:"Odpověz na otázky anglicky.",lines:2,subQuestions:l.map((k,z)=>({id:`comp-${z+1}`,text:`${z+1}. ${k}`,lines:2})),subColumns:1}})),i.answerKey&&u.push({id:T(),order:s++,type:"infobox",width:"full",content:{title:"✔️ Klíč",html:`<p>${i.answerKey}</p>`,variant:"yellow"}});const h=i.discussionQuestions||[];if(h.length>0){const k=h.map((z,A)=>`${A+1}. ${z}`).join("<br>");u.push({id:T(),order:s++,type:"free-answer",width:"full",content:{question:`💬 Diskuse:
${k}`,lines:3}})}t?.("save","Ukládám poslechovou aktivitu jako pracovní list a board...");const{worksheetId:c,boardId:b}=await ze(u,p,e);return{success:!0,id:c,linkedBoardId:b,preview:`Poslechová aktivita | ${o} | ${n} slov | ${e.grade}. ročník | + Board`}}async function _n(e){fetch("http://127.0.0.1:7440/ingest/5ac8e2f6-5348-4a4c-957d-ad64f132a847",{method:"POST",headers:{"Content-Type":"application/json","X-Debug-Session-Id":"e40c0a"},body:JSON.stringify({sessionId:"e40c0a",runId:"pre-fix",hypothesisId:"H1",location:"frontend/src/app/utils/dataset/material-generators.ts:8232",message:"generateUnitPlan start",data:{topic:e.topic,grade:e.grade,subjectCode:e.subjectCode},timestamp:Date.now()})}).catch(()=>{});const t=ne(e.grade),o=e.subjectCode?.includes("nemcin")?"German":e.subjectCode?.includes("francouz")?"French":"English",n=`Create a complete language unit plan for a Czech EFL teacher (grade ${e.grade}, CEFR ${t}).

TOPIC: "${e.topic}"
LANGUAGE: ${o}
LEVEL: ${t}

Return ONLY HTML (no markdown fences, no extra text). This is a TEACHER document — formal language, Czech, professional layout.

<h1>📋 Plán jazykové lekce</h1>
<h2>${e.topic}</h2>
<p class="meta-info">Ročník: ${e.grade}. | CEFR: ${t} | Jazyk: ${o}</p>

<h2>🎯 Výukové cíle</h2>
<p><strong>Po skončení lekce žák:</strong></p>
<ul>
  [4-5 CEFR-based "Can do" statements in Czech, specific to the topic]
  [e.g. "... dokáže pojmenovat 10 klíčových slov z tématu ..."]
  [e.g. "... dokáže napsat krátký text (50 slov) o tématu ..."]
</ul>

<h2>📚 Jazykový obsah</h2>
<table>
  <tr><th>Složka</th><th>Obsah</th></tr>
  <tr><td>Slovní zásoba</td><td>[15 key lexical items for this topic and level]</td></tr>
  <tr><td>Gramatika</td><td>[2-3 grammar structures relevant to topic + level]</td></tr>
  <tr><td>Funkce jazyka</td><td>[Communicative functions: describing, comparing, asking about...]</td></tr>
</table>

<h2>⏱️ Plán lekcí (4 × 45 minut)</h2>

<h3>Lekce 1 – Úvod do tématu + slovní zásoba</h3>
[Detailed lesson plan: warm-up (5 min), main activities (35 min), closure (5 min)]
[Include: materials needed, grouping (individual/pairs/groups), instructions in Czech]

<h3>Lekce 2 – Čtení a gramatika</h3>
[Detailed plan for lesson 2]

<h3>Lekce 3 – Poslech a mluvení</h3>
[Detailed plan for lesson 3]

<h3>Lekce 4 – Psaní + zopakování + test</h3>
[Detailed plan with revision and assessment]

<h2>📊 Hodnocení</h2>
<table>
  <tr><th>Aktivita</th><th>Typ hodnocení</th><th>Váha</th></tr>
  <tr><td>Slovní zásoba (kvíz)</td><td>Formativní</td><td>—</td></tr>
  <tr><td>Psaní</td><td>Sumativní</td><td>40 %</td></tr>
  <tr><td>Mluvení (role-play)</td><td>Sumativní</td><td>30 %</td></tr>
  <tr><td>Gramatický test</td><td>Sumativní</td><td>30 %</td></tr>
</table>

<h2>📎 Materiály</h2>
<ul>
  [List of all materials the teacher needs: worksheets, VividBoard quizzes, printouts, etc.]
  [Include digital tools suggestions]
</ul>

<h2>🔧 Diferenciace</h2>
<p><strong>Pro slabší žáky:</strong></p>
[2-3 scaffolding strategies]
<p><strong>Pro rychlejší žáky:</strong></p>
[2-3 extension tasks]

<h2>🔗 Mezipředmětové vztahy</h2>
[2-3 connections to other school subjects]

Rules:
- Professional teacher-facing document in Czech
- Practical, specific, actionable (not generic advice)
- Timing should be realistic for a 45-minute lesson
- Activities should match CEFR ${t} and grade ${e.grade}
`,d=await _([{role:"user",content:n}],B(e.subjectCode,"agent"),{max_tokens:8192});if(!d)return{success:!1,error:"AI neodpovědělo"};fetch("http://127.0.0.1:7440/ingest/5ac8e2f6-5348-4a4c-957d-ad64f132a847",{method:"POST",headers:{"Content-Type":"application/json","X-Debug-Session-Id":"e40c0a"},body:JSON.stringify({sessionId:"e40c0a",runId:"pre-fix",hypothesisId:"H1",location:"frontend/src/app/utils/dataset/material-generators.ts:8312",message:"generateUnitPlan response",data:{hasResponse:!!d,responseLength:d?.length||0},timestamp:Date.now()})}).catch(()=>{});const r=`doc-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,i=`${e.topic} – Plán lekce`;return fetch("http://127.0.0.1:7440/ingest/5ac8e2f6-5348-4a4c-957d-ad64f132a847",{method:"POST",headers:{"Content-Type":"application/json","X-Debug-Session-Id":"e40c0a"},body:JSON.stringify({sessionId:"e40c0a",runId:"pre-fix",hypothesisId:"H1",location:"frontend/src/app/utils/dataset/material-generators.ts:8319",message:"generateUnitPlan saving",data:{docId:r,documentType:"lesson",isTextInObject:!!d},timestamp:Date.now()})}).catch(()=>{}),rt({id:r,title:i,content:d,type:"lesson"}),await Ce({id:r,title:i,content:d,documentType:"lesson"}),{success:!0,id:r,preview:`Plán lekce | 4 × 45 min | Cíle, aktivity, hodnocení, diferenciace | ${t} | ${e.grade}. ročník`}}const ra=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_ILLUSTRATION_STYLE_ID:It,ILLUSTRATION_IMAGE_SIZE:$t,ILLUSTRATION_LABEL_STYLE_APPEND:Et,ILLUSTRATION_PROMPT_NO_TEXT:Tt,ILLUSTRATION_PROMPT_STYLE_HEADER:Pt,ILLUSTRATION_PROMPT_TEXT_LABEL:Ot,ILLUSTRATION_STYLE:fn,ILLUSTRATION_STYLE_BASE:qe,PHOTO_PROMPT_NO_TEXT:wt,PHOTO_STYLE:xt,PROMPT_SUBJECT_HEADER:Ke,SELFIE_STYLE:St,composeIllustrationGenerationPrompt:Ct,composePhotoGenerationPrompt:Nt,formatIllustrationPromptForDisplay:yn,generateContentPlanOnly:Ho,generateFromContentPlan:Go,generateFromDataSet:qo,generateIllustration:On,generateIllustrationPrompts:Tn,generatePhoto:zn,generatePhotoPrompts:bn,generateTextbookFromContentPlan:an,generateTextbookPlanOnly:nn,getIllustrationPromptSubjectText:Ve,getPhotoPromptSubjectText:He,loadSourceTextAsBlocks:Lo,loadSourceTextContent:mt,promptHasIllustrationLabelInstruction:gn,suggestImageGroups:wn,translateImageCaptions:No},Symbol.toStringTag,{value:"Module"}));export{ea as D,$t as I,xt as P,It as a,Nt as b,Ct as c,ta as d,He as e,Ke as f,Ve as g,wt as h,oa as i,aa as j,xo as k,Tt as l,Pt as m,qe as n,Xn as o,gn as p,ra as q,No as t,na as z};
