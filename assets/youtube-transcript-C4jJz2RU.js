import{chatWithAIProxy as l}from"./ai-chat-proxy-CZyoh9V4.js";import{c4 as u,c5 as p}from"./index-NANQf1aA.js";import"./vendor-react-Dd9NAHYY.js";import"./vendor-supabase-Ds0jIvEe.js";import"./vendor-tiptap-BwGqL9Gn.js";function d(n){try{const e=new URL(n);return e.hostname.includes("youtube.com")?e.searchParams.get("v"):e.hostname==="youtu.be"?e.pathname.slice(1):null}catch{return null}}async function c(n,e=8192,r=.7){return l([{role:"user",content:n}],"gemini-2.0-flash",{temperature:r,max_tokens:e})}async function z(n){console.log("[YouTubeTranscript] Starting extraction for:",n);const e=d(n);let r="",a="";try{const t=`https://www.youtube.com/oembed?url=${encodeURIComponent(n)}&format=json`,o=await fetch(t);if(o.ok){const s=await o.json();r=s.title||"",a=s.author_name||"",console.log("[YouTubeTranscript] Got video info:",{title:r,author:a})}}catch{console.log("[YouTubeTranscript] oEmbed failed")}try{const t=await fetch(`${u}/youtube-transcript`,{method:"POST",headers:p({"Content-Type":"application/json"}),body:JSON.stringify({videoUrl:n,videoId:e})});if(t.ok){const o=await t.json();if(o.success&&o.transcript&&o.transcript.length>100)return console.log("[YouTubeTranscript] Got real transcript from Edge Function, length:",o.transcript.length),{success:!0,transcript:o.transcript,videoTitle:r};console.log("[YouTubeTranscript] Edge Function returned no transcript:",o.error)}else console.log("[YouTubeTranscript] Edge Function failed:",t.status)}catch(t){console.log("[YouTubeTranscript] Edge Function error:",t)}console.log("[YouTubeTranscript] Using AI fallback for video:",r);try{const t=await c(`Jsi expert na vzdelavani. Na zaklade nazvu YouTube videa vytvor podrobny vzdelavaci obsah vhodny pro pracovni list.

VIDEO:
- Nazev: "${r||"Neznamy nazev"}"
- Autor: "${a||"Neznamy autor"}"
- URL: ${n}

UKOL:
Vytvor strukturovany vzdelavaci text (v cestine), ktery bude slouzit jako zaklad pro pracovni list. Zamer se na:

1. Uvod - O cem video pravdepodobne pojednava (2-3 vety)
2. Hlavni temata - 3-5 klicovych temat/konceptu
3. Klicove pojmy - Definice 5-8 dulezitych pojmu
4. Diskuzni otazky - 5-7 otazek pro zaky
5. Fakta k zapamatovani - 5-8 dulezitych faktu
6. Prakticke aktivity - 2-3 navrhy aktivit
7. Shrnuti - Co by se zaci meli naucit

Pis v cestine. Vystup ma byt strukturovany text.`);if(t&&t.length>200)return console.log("[YouTubeTranscript] Generated content with AI, length:",t.length),{success:!0,transcript:`[Obsah generovany AI na zaklade nazvu videa]

${t.trim()}`,videoTitle:r};throw new Error("Prazdna odpoved z AI")}catch(t){return console.error("[YouTubeTranscript] AI fallback error:",t),{success:!1,error:"Video nema dostupne titulky a nepodarilo se vygenerovat obsah"}}}async function x(n,e,r){console.log("[WorksheetGen] Generating from transcript, length:",n.length);try{let a=await c(`Jsi expert na tvorbu vzdelavacich pracovnich listu pro zakladni a stredni skoly. Z nasledujiciho obsahu vytvor komplexni a interaktivni pracovni list pro zaky.

OBSAH VIDEA/ZDROJE:
${n}

Vytvor pracovni list v JSON formatu a vytvor minimalne 12-15 ruznorodych bloku.

POVINNA STRUKTURA:
{
  "title": "Nazev pracovniho listu (kratky, vystizny)",
  "blocks": [
    { "type": "heading", "content": { "text": "Uvodni nadpis", "level": "h1" } },
    { "type": "paragraph", "content": { "text": "Kratky uvodni text..." } },
    { "type": "infobox", "content": { "title": "Klicove pojmy", "text": "...", "variant": "info" } },
    { "type": "heading", "content": { "text": "Test porozumeni", "level": "h2" } },
    { "type": "multiple-choice", "content": { "question": "Otazka?", "options": ["A", "B", "C", "D"], "correctAnswer": 0 } },
    { "type": "fill-blank", "content": { "text": "Veta s ___ mezerou.", "blanks": [{"answer": "odpoved"}] } },
    { "type": "free-answer", "content": { "question": "Otevrena otazka?", "placeholder": "Napis odpoved...", "lines": 4 } },
    { "type": "infobox", "content": { "title": "Shrnuti", "text": "...", "variant": "success" } }
  ]
}

TYPY BLOKU:
- heading
- paragraph
- infobox (info/warning/success/tip)
- multiple-choice (correctAnswer = index 0-3)
- fill-blank
- free-answer

PRAVIDLA:
1. Vytvor minimalne 12-15 bloku.
2. Zahrn mix vsech typu uloh.
3. Otazky musi testovat porozumeni obsahu.
4. Odpovez pouze validnim JSON objektem bez markdownu.`,16384,.6);console.log("[WorksheetGen] Raw response length:",a.length),a=a.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim();const t=JSON.parse(a);if(t.blocks&&Array.isArray(t.blocks)){const o=[];let s=0;r&&o.push({id:`gen-${Date.now()}-qr`,type:"qr-code",order:s++,width:"half",content:{url:r,caption:"Naskenuj a podivej se na video",captionPosition:"under",size:120}});for(const i of t.blocks)o.push({id:`gen-${Date.now()}-${s}`,type:h(i.type),order:s++,width:"full",content:v(i.type,i.content)});return console.log("[WorksheetGen] Generated",o.length,"blocks"),{success:!0,title:t.title||e,blocks:o}}return{success:!1,error:"Neplatny format odpovedi"}}catch(a){return console.error("[WorksheetGen] Error:",a),{success:!1,error:a instanceof Error?a.message:"Neznama chyba"}}}function h(n){return{text:"paragraph","short-answer":"free-answer","fill-in-blank":"fill-blank",matching:"paragraph",ordering:"paragraph"}[n]||n}function v(n,e){if(!e)return{text:""};switch(n){case"multiple-choice":{const r=e.correctAnswer||0,a=`opt-${r}`;return{question:e.question||"",options:(e.options||[]).map((t,o)=>({id:`opt-${o}`,text:t,isCorrect:o===r})),correctAnswers:[a],allowMultiple:!1}}case"free-answer":return{question:e.question||"",placeholder:e.placeholder||"Napis odpoved...",lines:e.lines||4};case"fill-blank":return{segments:y(e.text||"",e.blanks||[])};case"infobox":return{title:e.title||"Informace",text:e.text||"",html:`<p>${(e.text||"").replace(/\n/g,"<br/>")}</p>`,variant:e.variant||"info"};case"heading":return{text:e.text||"",level:e.level||"h2"};case"paragraph":{const r=e.text||"";return{text:r,html:`<p>${r.replace(/\n/g,"<br/>")}</p>`}}default:return e}}function y(n,e){const r=[];return n.split("___").forEach((t,o)=>{t&&r.push({type:"text",content:t}),o<e.length&&r.push({type:"blank",id:`blank-${o}`,answer:e[o]?.answer||"",userAnswer:""})}),r}export{d as extractYouTubeVideoId,x as generateWorksheetFromTranscript,z as getYouTubeTranscript};
