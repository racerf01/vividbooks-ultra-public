import{chatWithAIProxy as u}from"./ai-chat-proxy-ukDUoTHD.js";import"./index-DlNGoVZl.js";import"./vendor-react-Dd9NAHYY.js";import"./vendor-supabase-Ds0jIvEe.js";import"./vendor-tiptap-BwGqL9Gn.js";const k=["ZŠ standardní","Gymnázium","ZŠ praktická/speciální"];function m(t){const r=(t.keyTerms||[]).slice(0,25).map(i=>`${i.term}: ${i.definition}`).join("; "),o=(t.keyFacts||[]).slice(0,15).join("; "),n=t.rvpOutcomes.slice(0,6).join("; ");return[`Předmět: ${t.subjectName}, ${t.grade}. třída`,`Tematický celek: "${t.topicGroupName}"`,`Témata: ${t.coveredTopics.slice(0,8).join(", ")}`,n?`RVP výstupy: ${n}`:"",r?`Klíčové pojmy: ${r}`:"",o?`Hlavní fakta: ${o}`:""].filter(Boolean).join(`
`)}function h(t){const r=t.indexOf("{"),o=t.indexOf("[");let n=-1,i,e;if(r===-1&&o===-1)return null;r===-1?(n=o,i="[",e="]"):o===-1?(n=r,i="{",e="}"):o<r?(n=o,i="[",e="]"):(n=r,i="{",e="}");let s=0,a=!1,c=!1;for(let l=n;l<t.length;l++){const p=t[l];if(c){c=!1;continue}if(p==="\\"&&a){c=!0;continue}if(p==='"'){a=!a;continue}if(!a&&(p===i&&s++,p===e&&(s--,s===0)))return t.slice(n,l+1)}return null}function d(t){console.log("[MilestoneParser] Raw AI response (first 500 chars):",t.slice(0,500));const r=t.replace(/```(?:json)?\s*([\s\S]*?)```/g,"$1").trim(),o=h(r);if(!o)throw new Error("No JSON found");console.log("[MilestoneParser] Extracted block (first 200 chars):",o.slice(0,200));const n=o.replace(/,\s*([}\]])/g,"$1").replace(/\/\/[^\n]*/g,"").replace(/\/\*[\s\S]*?\*\//g,"").replace(/:\s*undefined/g,": null").replace(/[\u0000-\u001F\u007F]/g," ");return JSON.parse(n)}async function f(t,r){const n=`${m(t)}

Vygeneruj souhrnný test. Vrať POUZE JSON bez markdown, bez komentářů:
{"title":"Souhrnný test – ${t.topicGroupName}","totalPoints":16,"timeMinutes":30,"questions":[
{"id":"q1","type":"multiple-choice","text":"<otázka>","points":1,"options":["A) <možnost>","B) <možnost>","C) <možnost>","D) <možnost>"],"correctAnswer":"A) <správná>"},
{"id":"q2","type":"multiple-choice","text":"<otázka>","points":1,"options":["A) <možnost>","B) <možnost>","C) <možnost>","D) <možnost>"],"correctAnswer":"B) <správná>"},
{"id":"q3","type":"multiple-choice","text":"<otázka>","points":1,"options":["A) <možnost>","B) <možnost>","C) <možnost>","D) <možnost>"],"correctAnswer":"C) <správná>"},
{"id":"q4","type":"multiple-choice","text":"<otázka>","points":1,"options":["A) <možnost>","B) <možnost>","C) <možnost>","D) <možnost>"],"correctAnswer":"D) <správná>"},
{"id":"q5","type":"multiple-choice","text":"<otázka>","points":1,"options":["A) <možnost>","B) <možnost>","C) <možnost>","D) <možnost>"],"correctAnswer":"A) <správná>"},
{"id":"q6","type":"true-false","text":"<tvrzení>","points":1,"correctAnswer":"true"},
{"id":"q7","type":"true-false","text":"<tvrzení>","points":1,"correctAnswer":"false"},
{"id":"q8","type":"open","text":"<otázka>","points":2,"correctAnswer":"<vzorová odpověď>"},
{"id":"q9","type":"open","text":"<otázka>","points":2,"correctAnswer":"<vzorová odpověď>"},
{"id":"q10","type":"open","text":"<otázka>","points":2,"correctAnswer":"<vzorová odpověď>"},
{"id":"q11","type":"fill-blank","text":"<věta s ___ mezerou>","points":1,"correctAnswer":"<slovo>"},
{"id":"q12","type":"fill-blank","text":"<věta s ___ mezerou>","points":1,"correctAnswer":"<slovo>"},
{"id":"q13","type":"matching","text":"Přiřaď pojmy:","points":3,"matchPairs":[{"left":"<pojem>","right":"<definice>"},{"left":"<pojem>","right":"<definice>"},{"left":"<pojem>","right":"<definice>"}]}
]}

Vyplň místo <...> skutečnými otázkami z probíraných témat. POUZE JSON, nic jiného.`,i=await u([{role:"user",content:n}],r,{max_tokens:4096}),e=d(i);if(!Array.isArray(e.questions)||e.questions.length===0)throw new Error("Invalid test");return e}async function y(t,r){const n=`${m(t)}

Vygeneruj souhrnnou písemku (psané úlohy) pro uzavření tohoto tematického celku.
Vrať POUZE JSON (bez markdown), přesně v tomto formátu:
{
  "title": "Souhrnná písemka – ${t.topicGroupName}",
  "totalPoints": 20,
  "timeMinutes": 45,
  "tasks": [
    {"id":"t1","title":"<název>","instruction":"<podrobný pokyn pro žáka>","points":5,"hint":"<nápověda>"},
    {"id":"t2","title":"<název>","instruction":"<pokyn>","points":8},
    {"id":"t3","title":"<název>","instruction":"<pokyn>","points":7}
  ]
}

Požadavky: 3–4 úlohy různé náročnosti (popis, analýza, porovnání, esej).
Úlohy musí vycházet z probíraných témat. Všechny texty ČESKY. POUZE JSON.`,i=await u([{role:"user",content:n}],r,{max_tokens:4096}),e=d(i);if(!Array.isArray(e.tasks)||e.tasks.length===0)throw new Error("Invalid pisemka");return e}async function v(t,r){const n=`${m(t)}

Vygeneruj hodnoticí dokument. POUZE JSON, žádný text navíc:
{"outcomes":["<výstup 1>","<výstup 2>","<výstup 3>"],"levels":[{"schoolType":"ZŠ standardní","grades":[{"grade":1,"label":"Výborný","criteria":["<kritérium A>","<kritérium B>"]},{"grade":2,"label":"Chvalitebný","criteria":["<kritérium>"]},{"grade":3,"label":"Dobrý","criteria":["<kritérium>"]},{"grade":4,"label":"Dostatečný","criteria":["<kritérium>"]},{"grade":5,"label":"Nedostatečný","criteria":["<kritérium>"]}]},{"schoolType":"Gymnázium","grades":[{"grade":1,"label":"Výborný","criteria":["<analytické kritérium>","<srovnávací kritérium>"]},{"grade":2,"label":"Chvalitebný","criteria":["<kritérium>"]},{"grade":3,"label":"Dobrý","criteria":["<kritérium>"]},{"grade":4,"label":"Dostatečný","criteria":["<kritérium>"]},{"grade":5,"label":"Nedostatečný","criteria":["<kritérium>"]}]},{"schoolType":"ZŠ praktická/speciální","grades":[{"grade":1,"label":"Výborný","criteria":["<jednoduché kritérium>","<kritérium>"]},{"grade":2,"label":"Chvalitebný","criteria":["<kritérium>"]},{"grade":3,"label":"Dobrý","criteria":["<kritérium>"]},{"grade":4,"label":"Dostatečný","criteria":["<kritérium>"]},{"grade":5,"label":"Nedostatečný","criteria":["<kritérium>"]}]}]}

Pravidla: Kritéria konkrétní a měřitelná. Gymnázium=hlubší analýza. ZŠ praktická=základní pojmy. Texty ČESKY. POUZE JSON.`,i=await u([{role:"user",content:n}],r,{max_tokens:4096}),e=d(i);if(!Array.isArray(e.levels)||e.levels.length===0)throw new Error("Invalid hodnoceni");return e}async function g(t){const r=["gemini-3-pro","gemini-3-flash"];async function o(s,a){for(const c of r)try{return await s(c)}catch(l){if(console.warn(`[Milestone] ${a} failed on ${c}:`,l),c==="gemini-3-flash")throw new Error(`${a}: ${l}`)}throw new Error(`${a}: all models failed`)}const n=await o(s=>f(t,s),"Test"),i=await o(s=>y(t,s),"Písemka"),e=await o(s=>v(t,s),"Hodnocení");return{test:n,pisemka:i,hodnoceni:e}}async function $(t,r){r?.(`  🏁 Generuji uzlový bod pro "${t.topicGroupName}"...`);let o,n,i;try{const e=await g(t);o=e.test,n=e.pisemka,i=e.hodnoceni,r?.(`  ✅ Vygenerováno: ${o.questions.length} otázek, ${n.tasks.length} úloh, ${k.length} typy škol`)}catch(e){r?.(`  ⚠️ Generování selhalo, uložen prázdný: ${e}`)}return{topicGroupName:t.topicGroupName,coveredWeekNumbers:t.coveredWeekNumbers,coveredTopics:t.coveredTopics,test:o,pisemka:n,hodnoceni:i}}function N(t){return`Uzavření: ${t}`}export{$ as buildMilestoneData,N as formatMilestoneTopicName,g as generateMilestoneContent};
