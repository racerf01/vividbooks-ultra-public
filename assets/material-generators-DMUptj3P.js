const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ai-chat-proxy-CZyoh9V4.js","assets/index-NANQf1aA.js","assets/vendor-react-Dd9NAHYY.js","assets/vendor-supabase-Ds0jIvEe.js","assets/vendor-tiptap-BwGqL9Gn.js","assets/index-BGoLaAfu.css","assets/upload-image-DE-r4_8e.js"])))=>i.map(i=>d[i]);
import{a as ke,aN as J,ay as lt,cv as Je,cw as be,aY as Se,cx as ct}from"./index-NANQf1aA.js";import{createEmptyQuiz as pt,createSlideBlock as V,createExampleSlide as ut,createOpenSlide as me,createABCSlide as Ae,createInfoSlide as ie,createVotingSlide as de,createBoardSlide as re,createConnectPairsSlide as dt,createFillBlanksSlide as ht}from"./quiz-CwIMLgSO.js";import{createEmptyBlock as mt,generateBlockId as O}from"./worksheet-DEu-RCJT.js";import{chatWithAIProxy as R}from"./ai-chat-proxy-CZyoh9V4.js";const Ue=[{id:"ocean",name:"Ocean",slideBg:{type:"color",color:"#0f172a"},titleBlock:{bg:"#1e40af",textColor:"#ffffff"},contentBlock:{bg:"#1e293b",textColor:"#e2e8f0"},altBlock:{bg:"#172554",textColor:"#bfdbfe"},imageBg:"#0f172a",blockRadius:12,blockGap:10},{id:"forest",name:"Forest",slideBg:{type:"color",color:"#052e16"},titleBlock:{bg:"#166534",textColor:"#ffffff"},contentBlock:{bg:"#14532d",textColor:"#dcfce7"},altBlock:{bg:"#15803d",textColor:"#f0fdf4"},imageBg:"#052e16",blockRadius:12,blockGap:10},{id:"warm",name:"Warm",slideBg:{type:"color",color:"#431407"},titleBlock:{bg:"#c2410c",textColor:"#ffffff"},contentBlock:{bg:"#7c2d12",textColor:"#fed7aa"},altBlock:{bg:"#9a3412",textColor:"#ffedd5"},imageBg:"#431407",blockRadius:12,blockGap:10},{id:"slate",name:"Slate",slideBg:{type:"color",color:"#0f172a"},titleBlock:{bg:"#334155",textColor:"#ffffff"},contentBlock:{bg:"#1e293b",textColor:"#e2e8f0"},altBlock:{bg:"#475569",textColor:"#f1f5f9"},imageBg:"#1e293b",blockRadius:8,blockGap:8},{id:"violet",name:"Violet",slideBg:{type:"color",color:"#1e1b4b"},titleBlock:{bg:"#4c1d95",textColor:"#ffffff"},contentBlock:{bg:"#2e1065",textColor:"#ede9fe"},altBlock:{bg:"#5b21b6",textColor:"#f5f3ff"},imageBg:"#1e1b4b",blockRadius:12,blockGap:10},{id:"light",name:"Light",slideBg:{type:"color",color:"#f8fafc"},titleBlock:{bg:"#5C5CFF",textColor:"#ffffff"},contentBlock:{bg:"#ffffff",textColor:"#1e293b"},altBlock:{bg:"#e2e8f0",textColor:"#334155"},imageBg:"#f1f5f9",blockRadius:12,blockGap:10}];function gt(e){return Ue.find(t=>t.id===e)??Ue[0]}const Fe=new Set(["multiple-choice","free-answer","fill-blank","examples","connect-pairs","image-hotspots","video-quiz"]);function ft(e,t){const o=gt(t),i=pt(`board-${Date.now()}`);i.title=e.title||"Prezentace",i.description=e.description,i.subject=e.metadata.subject,i.grade=e.metadata.grade,i.createdAt=new Date().toISOString(),i.updatedAt=new Date().toISOString();const s=[vt(e,o,0)],n=kt(e.blocks);let p=1;for(const r of n){const a=bt(r,o,p);for(const u of a)u.order=p++,s.push(u)}return i.slides=s,i}function kt(e){const t=[];let o=null;const i=()=>{o&&o.length>0&&(t.push(yt(o)),o=null)};for(const l of e)if(l.type!=="spacer"&&!(!Fe.has(l.type)&&!Ye(l))){if(Fe.has(l.type)){i(),t.push({blocks:[l],role:"activity"});continue}if(l.type==="heading"){i(),o=[l];continue}if(l.type==="image"&&!o){t.push({blocks:[l],role:"image-only"});continue}if(o){o.push(l);const s=o.filter(p=>p.type==="heading").length;o.length-s>=2&&i()}else o=[l]}return i(),t}function yt(e){return e.every(t=>t.type==="image")?{blocks:e,role:"image-only"}:e.length===0?{blocks:e,role:"content"}:{blocks:e,role:"content"}}function Ye(e){if(e.type==="image"){const o=e.content;return!!(o.url||o.gallery&&o.gallery.length>0)}return Oe(e).trim().length>2}function vt(e,t,o){const i=Pe(o,t);return i.layout={type:"single",blocks:[{...V("text"),content:e.title||"Prezentace",fontSize:"xxlarge",fontWeight:"bold",textAlign:"center",verticalAlign:"middle",textColor:t.titleBlock.textColor,background:{type:"color",color:t.titleBlock.bg},textPadding:48}]},i}function bt(e,t,o){return e.role==="activity"?Ot(e.blocks[0],o):e.role==="image-only"?[qe(e.blocks[0],t,o)]:e.blocks.every(i=>!Ye(i))?[]:[At(e.blocks,t,o)]}function At(e,t,o){const i=Pe(o,t),l=e.find(d=>d.type==="heading"),s=e.filter(d=>d.type!=="heading"),n=s.filter(d=>d.type==="image"),p=s.filter(d=>d.type!=="image"),r=n.length>0,a=p.length;if(l&&a===0&&!r)return i.layout={type:"single",blocks:[X(l,t)]},i;if(l&&a===0&&r){const d=we(n[0]);return i.layout={type:"title-content",titleHeight:20,blocks:[X(l,t),d?ee(d,t):{...V("text"),content:"",background:{type:"color",color:t.imageBg}}]},i}if(l&&a===1&&!r)return i.layout={type:"title-content",titleHeight:22,blocks:[X(l,t),K(p[0],t,"content")]},i;if(l&&a===1&&r){const d=we(n[0]);return i.layout={type:"right-large-left-split",columnRatios:[42,58],splitRatio:25,blocks:[X(l,t),K(p[0],t,"content"),d?ee(d,t):{...V("text"),content:"",background:{type:"color",color:t.imageBg}}]},i}if(l&&a===2&&!r)return i.layout={type:"title-2cols",titleHeight:22,columnRatios:[50,50],blocks:[X(l,t),K(p[0],t,"content"),K(p[1],t,"alt")]},i;if(l&&a===2&&r){const d=we(n[0]);return i.layout={type:"title-3cols",titleHeight:22,columnRatios:[35,35,30],blocks:[X(l,t),K(p[0],t,"content"),K(p[1],t,"alt"),d?ee(d,t):{...V("text"),content:"",background:{type:"color",color:t.imageBg}}]},i}if(!l&&a===1&&!r)return i.layout={type:"single",blocks:[K(p[0],t,"content")]},i;if(!l&&a===2)return i.layout={type:"2cols",columnRatios:[50,50],blocks:[K(p[0],t,"content"),K(p[1],t,"alt")]},i;if(r&&a===0&&!l)return qe(n[0],t,o);const u=e.map(d=>Oe(d)).filter(Boolean).join(`

`);return i.layout={type:"single",blocks:[{...V("text"),content:u,fontSize:"medium",textColor:t.contentBlock.textColor,background:{type:"color",color:t.contentBlock.bg},textPadding:32,verticalAlign:"middle"}]},i}function qe(e,t,o){const i=Pe(o,t),l=e.content,s=l.gallery?.length?l.gallery:l.url?[l.url]:[];if(s.length>=4)i.layout={type:"grid-2x2",blocks:s.slice(0,4).map(n=>ee(n,t))};else if(s.length>=2)i.layout={type:"2cols",columnRatios:[50,50],blocks:s.slice(0,2).map(n=>ee(n,t))};else{const n=s[0]||"",p=l.caption||l.alt||"";i.layout={type:"single",blocks:[{...ee(n,t),imageCaption:p||void 0}]}}return i}function Ot(e,t){switch(e.type){case"multiple-choice":{const o=e.content,i=Ae(t);return i.question=o.question||"",i.options=o.options.map((l,s)=>({id:l.id,label:String.fromCharCode(65+s),content:l.text,isCorrect:o.correctAnswers.includes(l.id)})),i.explanation=o.explanation,[i]}case"free-answer":{const o=e.content;if(o.subQuestions&&o.subQuestions.length>0)return o.subQuestions.map((l,s)=>{const n=me(t+s);return n.question=o.question?`${o.question}

${l.text}`:l.text,l.sampleAnswer&&(n.correctAnswers=[l.sampleAnswer]),n});const i=me(t);return i.question=o.question||"",o.sampleAnswer&&(i.correctAnswers=[o.sampleAnswer]),i.explanation=o.hint,[i]}case"fill-blank":{const o=e.content,i=me(t);let l=o.instruction?o.instruction+`

`:"";const s=[];for(const n of o.segments)n.type==="text"?l+=n.content:(l+="_____",s.push(n.correctAnswer));return i.question=l,i.correctAnswers=s,[i]}case"examples":{const o=e.content;return(o.examples||[]).map((i,l)=>{const s=ut(t+l);return s.title=o.topic||`Příklad ${l+1}`,s.problem=i.expression,s.finalAnswer=i.answer,s})}default:return[]}}function X(e,t){const o=Oe(e);return{...V("text"),content:o,fontSize:"xlarge",fontWeight:"bold",textAlign:"left",verticalAlign:"middle",textColor:t.titleBlock.textColor,background:{type:"color",color:t.titleBlock.bg},textPadding:28}}function K(e,t,o){const i=Oe(e),l=o==="alt"?t.altBlock:t.contentBlock,s=e.content,n=s?.ttsText?{ttsEnabled:!0,ttsText:s.ttsText,ttsLang:s.ttsLang||"cs-CZ"}:{};return{...V("text"),content:i,fontSize:"small",fontWeight:"normal",textAlign:"left",verticalAlign:"top",textColor:l.textColor,background:{type:"color",color:l.bg},textPadding:24,lineHeight:1.6,...n}}function ee(e,t){return{...V("image"),content:e,imageFit:"cover",imagePositionX:50,imagePositionY:50,background:{type:"color",color:t.imageBg}}}function Pe(e,t){return{id:`slide-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,type:"info",order:e,title:"",content:"",slideBackground:t.slideBg,blockRadius:t.blockRadius,blockGap:t.blockGap,layout:{type:"single",blocks:[]}}}function Oe(e){switch(e.type){case"heading":return e.content.text||"";case"paragraph":{const t=e.content;return He(t.html||t.text||"")}case"infobox":{const t=e.content;return(t.title?t.title+`
`:"")+He(t.html||t.text||"")}default:return""}}function we(e){const t=e.content;return t.gallery?.length?t.gallery[0]:t.url||""}function He(e){return e.replace(/<br\s*\/?>/gi,`
`).replace(/<\/p>/gi,`
`).replace(/<\/li>/gi,`
`).replace(/<\/th>/gi,"	").replace(/<\/td>/gi,"	").replace(/<\/tr>/gi,`
`).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/[ \t]+/g," ").replace(/ \n/g,`
`).replace(/\n{3,}/g,`

`).trim()}const We="https://qypiuvqglsmxdsnyazih.supabase.co",ye="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5cGl1dnFnbHNteGRzbnlhemloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4MjU3NDAsImV4cCI6MjA4NjQwMTc0MH0.lVO7a-wuM2vkqsJcgqvLkthTmrt5g0R3U_Tu0jU7bfY";async function le(e){try{console.log("[RAG] Searching for similar worksheets:",e.topic);const t=await fetch(`${We}/functions/v1/worksheet-rag-search`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ye}`,apikey:ye},body:JSON.stringify(e)});if(!t.ok)return console.warn("[RAG] Search request failed:",t.status),[];const o=await t.json();return o.fallback?(console.log("[RAG] Fallback (no examples yet or error):",o.reason),[]):(console.log(`[RAG] Found ${o.examples?.length||0} examples`),o.examples||[])}catch(t){return console.warn("[RAG] Search failed (soft fail):",t),[]}}function ce(e,t="worksheet"){if(e.length===0)return"";const o=t==="textbook"?"LISTŮ UČEBNICE":"PRACOVNÍCH LISTŮ",i={};e.forEach(n=>{const p=Array.isArray(n.blocks_json)?n.blocks_json:[],r={};p.forEach(a=>{a?.type&&(r[a.type]=(r[a.type]||0)+1)}),Object.entries(r).forEach(([a,u])=>{i[a]||(i[a]=[]),i[a].push(u)})});const l=Object.entries(i).map(([n,p])=>`${n}: průměrně ${Math.round(p.reduce((r,a)=>r+a,0)/p.length)}x`).join(", "),s=e.map((n,p)=>{const r=Array.isArray(n.blocks_json)?n.blocks_json:[],a=r.reduce((c,h)=>(h?.type&&(c[h.type]=(c[h.type]||0)+1),c),{}),u=Object.entries(a).map(([c,h])=>`${c}(${h}x)`).join(", ")||"neznámé",d=[];r.forEach((c,h)=>{if(!c?.type)return;const m=c.content||{};if(c.type==="heading"){const y=(m.text||"").replace(/<[^>]+>/g,"").trim().substring(0,80),g=m.headingStyle?` [styl: ${m.headingStyle}]`:"",b=m.highlightColor&&m.highlightColor!=="transparent"?` [barva: ${m.highlightColor}]`:"";y&&d.push(`  ${h+1}. Nadpis: "${y}"${g}${b}`)}else if(c.type==="paragraph"){const y=(m.html||"").replace(/<[^>]+>/g,"").trim().substring(0,120);y&&d.push(`  ${h+1}. Odstavec: "${y}..."`)}else if(c.type==="image"){const y=c.gridSpan?` [gridSpan: ${c.gridSpan}]`:"";d.push(`  ${h+1}. Obrázek${m.caption?`: "${m.caption}"`:""}${y}`)}else if(c.type==="infobox"){const y=(m.html||"").replace(/<[^>]+>/g,"").trim().substring(0,80);d.push(`  ${h+1}. Infobox${y?`: "${y}..."`:""}`)}else["connect-pairs","fill-blank","free-answer","multiple-choice"].includes(c.type)?d.push(`  ${h+1}. [CVIČENÍ] ${c.type}`):d.push(`  ${h+1}. ${c.type}`)});const f=(n.style_notes||"").startsWith("Vygenerováno Curriculum Factory")?"automaticky generovaný obsah":n.style_notes||"kvalitní obsah a struktura";return`
### VZOR ${p+1}: "${n.title}" (podobnost: ${Math.round((n.similarity||0)*100)}%)
- Předmět: ${n.subject||"–"}, Ročník: ${n.grade||"–"}. třída, Téma: ${n.topic||"–"}
- Počet bloků celkem: ${r.length} (${u})
- Sekvence bloků:
${d.slice(0,15).join(`
`)}
- Styl: ${f}`.trim()});return`
## ⚠️ ZÁVAZNÉ VZORY — POVINNĚ DODRŽUJ TUTO STRUKTURU

Níže jsou ${e.length} kvalitní příklady ${o} z naší databáze se shodným tématem.
MUSÍŠ generovat obsah ve STEJNÉM stylu, stejném rozsahu a se STEJNÝMI typy bloků.

PRŮMĚRNÉ POČTY BLOKŮ v úspěšných příkladech: ${l}
→ Tvůj výsledek MUSÍ mít PODOBNÉ počty bloků. Nesnižuj počet bloků oproti vzorům!
→ Zachovej stejný poměr OBRÁZKŮ a TEXTU jako ve vzorech.
→ Pokud vzory obsahují interaktivní bloky (cvičení), ZAHRŇ je také.

${s.join(`

`)}

SHRNUTÍ POŽADAVKŮ:
- Celkový počet bloků: ${Math.round(e.reduce((n,p)=>n+(Array.isArray(p.blocks_json)?p.blocks_json.length:0),0)/e.length)} bloků (průměr ze vzorů)
- Struktura: kopíruj pořadí typů bloků z VZOR 1 (nejvyšší podobnost)
- NEDĚLEJ jednoduchý seznam — vytvoř vizuálně bohatý obsah jako ve vzorech
---`.trim()}function zt(e){if(e.length===0)return"";const t=e[0],o=Array.isArray(t.blocks_json)?t.blocks_json:[];if(o.length===0)return"";const i=o.map(r=>r.gridSpan??6),l=r=>{const a=i[r];if(a>=6)return!1;const u=i[r-1]??6,d=i[r+1]??6;return a+u<=6&&u<6||a+d<=6&&d<6},s=[];if(o.forEach((r,a)=>{if(!r?.type)return;const u=r.content||{},f=(r.gridSpan??6)<=4||l(a);if(r.type==="heading"){const c=u.level==="h1"?"HEADING-H1":"HEADING",h=u.headingStyle&&u.headingStyle!=="plain"?` [styl: ${u.headingStyle}]`:"";s.push(`${c}:${h}`)}else if(r.type==="paragraph"){const c=f?"PARAGRAPH: HALF LAYOUT":"PARAGRAPH";s.push(`${c}:`)}else if(r.type==="image"){const c=f?"OBRÁZEK: HALF LAYOUT":"OBRÁZEK:",h=u.caption?` "${u.caption}"`:"";s.push(`${c}${h}`)}else if(r.type==="infobox"){const c=f?"INFOBOX: HALF LAYOUT":"INFOBOX:";s.push(c)}else r.type==="table"?s.push("TABLE:"):r.type==="multiple-choice"?s.push("MULTIPLE-CHOICE:"):r.type==="fill-blank"?s.push("FILL-BLANK:"):r.type==="free-answer"?s.push("FREE-ANSWER:"):r.type==="connect-pairs"&&s.push("CONNECT-PAIRS:")}),s.length===0)return"";const n={};s.forEach(r=>{const a=r.split(":")[0].trim();n[a]=(n[a]||0)+1});const p=Object.entries(n).map(([r,a])=>`${r}×${a}`).join(", ");return`
## 📐 STRUKTURÁLNÍ ŠABLONA — POVINNĚ DODRŽUJ (z nejlepšího vzoru: "${t.title}", ${Math.round((t.similarity||0)*100)}% podobnost)

Tato sekvence bloků MUSÍ být zachována. Naplň každý blok jiným obsahem z ContentPlan:

${s.map((r,a)=>`${String(a+1).padStart(2," ")}. ${r}`).join(`
`)}

Shrnutí šablony: ${p} = ${s.length} bloků celkem
⚠️ NEDODÁVEJ méně bloků! Pokud ContentPlan nestačí, rozpiš texty do více odstavců.
---`.trim()}async function vo(e){try{const{data:{user:t}}=await ke.auth.getUser(),o=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e.worksheetId),{data:i,error:l}=await ke.from("worksheet_rag_examples").insert({title:e.title,subject:e.subject,grade:e.grade,topic:e.topic,quality_score:e.qualityScore??.8,blocks_json:e.blocksJson,style_notes:e.styleNotes,teacher_worksheet_id:o?e.worksheetId:null,created_by:t?.id??null,source:"manual"}).select("id").single();return l?(console.error("[RAG] Failed to add worksheet:",l),{success:!1,error:l.message}):($t(i.id,e),console.log("[RAG] Worksheet added to RAG database:",i.id),{success:!0,id:i.id})}catch(t){return console.error("[RAG] addWorksheetToRag error:",t),{success:!1,error:String(t)}}}async function $t(e,t){try{console.log("[RAG] Triggering embedding generation for:",e);const o=await fetch(`${We}/functions/v1/worksheet-rag-index`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ye}`,apikey:ye},body:JSON.stringify({ragId:e,topic:t.topic,subject:t.subject,grade:t.grade,styleNotes:t.styleNotes,blocksJson:t.blocksJson})});if(!o.ok){console.warn("[RAG] Embedding generation request failed:",o.status);return}const i=await o.json();i.success?console.log("[RAG] ✅ Embedding generated and saved for:",e):console.warn("[RAG] Embedding generation returned error:",i.error)}catch(o){console.warn("[RAG] Embedding generation trigger failed (soft fail):",o)}}const ge=120,fe=170,Q=5,Te=ge-2*Q,wt=fe-2*Q,Ge=2,xe=3,Ie={"heading-h1":15,heading:10,paragraph:28,image:38,infobox:20,table:30,"connect-pairs":32,"fill-blank":14,"free-answer":18,"multiple-choice":24},Ee={"heading-h1":"#6366f1",heading:"#818cf8",paragraph:"#dde6f0",image:"#94a3b8",infobox:"#fde68a",table:"#ddd6fe","connect-pairs":"#bbf7d0","fill-blank":"#d1fae5","free-answer":"#c7f0d8","multiple-choice":"#a7f3d0"},je={"heading-h1":"H1 Nadpis",heading:"H2 Nadpis",paragraph:"Odstavec",image:"📷 Obrázek",infobox:"💡 Infobox",table:"Tabulka","connect-pairs":"🔗 Spojovačka","fill-blank":"✏️ Doplň","free-answer":"📝 Otázka","multiple-choice":"☑ Test"};function Ne(e,t,o,i,l,s){const n=Math.max(4.5,Math.min(6.5,i*.38)),r=i>=7&&o>=18?`<text x="${(e+o/2).toFixed(1)}" y="${(t+i/2).toFixed(1)}" font-size="${n.toFixed(1)}" fill="#374151" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif">${s}</text>`:"";return`<rect x="${e.toFixed(1)}" y="${t.toFixed(1)}" width="${o.toFixed(1)}" height="${i.toFixed(1)}" fill="${l}" rx="2"/>${r}`}function Tt(e){const t=[];let o=0;for(;o<e.length;){const u=e[o];if(u.width==="half"&&o+1<e.length&&e[o+1].width==="half"){const d=Math.max(Ie[u.type],Ie[e[o+1].type]);t.push({slots:[u,e[o+1]],rawH:d}),o+=2}else t.push({slots:[u],rawH:Ie[u.type]}),o++}const i=(t.length-1)*Ge,l=t.reduce((u,d)=>u+d.rawH,0),s=(wt-i)/Math.max(l,1),n=Math.floor((Te-xe)/2),p=Te-n-xe,r=[];let a=Q;for(const u of t){const d=Math.max(3,Math.round(u.rawH*s));if(u.slots.length===1){const f=u.slots[0];r.push(Ne(Q,a,Te,d,Ee[f.type],je[f.type]))}else{const[f,c]=u.slots;r.push(Ne(Q,a,n,d,Ee[f.type],je[f.type])),r.push(Ne(Q+n+xe,a,p,d,Ee[c.type],je[c.type]))}a+=d+Ge}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ge} ${fe}" width="${ge}" height="${fe}"><rect width="${ge}" height="${fe}" fill="white" rx="5" stroke="#e2e8f0" stroke-width="1"/>`+r.join("")+"</svg>"}function T(e,t,o,i,l={}){return{id:e,type:t,width:o,role:i,...l}}const Re=[{id:"classic-page",name:"Klasická stránka",description:"H1 nadpis vedle obrázku, text se střídá s obrázky a infoboxem, spojovačka na závěr.",category:"visual",template:[T(1,"heading-h1","half","hlavní nadpis tématu (2-5 slov)"),T(2,"image","half","hlavní obrázek tématu",{imageSlot:!0}),T(3,"paragraph","full","úvodní odstavec 8-10 vět, přehled tématu"),T(4,"heading","half","nadpis první sekce"),T(5,"infobox","half","Věděl jsi, že...? 3-4 věty zajímavost"),T(6,"paragraph","half","text první sekce 5-7 vět"),T(7,"image","half","obrázek k první sekci",{imageSlot:!0}),T(8,"heading","full","nadpis druhé sekce"),T(9,"paragraph","half","text druhé sekce 5-7 vět"),T(10,"image","half","obrázek k druhé sekci",{imageSlot:!0}),T(11,"infobox","full","shrnutí — klíčové poznatky formou odrážek"),T(12,"connect-pairs","full","cvičení: přiřaď pojmy k definicím, 4-5 párů")],svgPreview:""},{id:"expository-page",name:"Výkladová stránka",description:"Velký hero obrázek, hlavní nadpis, bohatý výklad s obrázky, slovníček pojmů na závěr.",category:"text",template:[T(1,"image","full","hero obrázek přes celou šíři",{imageSlot:!0}),T(2,"heading-h1","full","hlavní nadpis tématu"),T(3,"paragraph","full","úvodní odstavec 10-12 vět, přehled celého tématu"),T(4,"heading","full","nadpis první výkladové sekce"),T(5,"paragraph","half","text výkladové sekce 5-7 vět"),T(6,"image","half","obrázek k výkladové sekci",{imageSlot:!0}),T(7,"paragraph","full","pokračování výkladu 5-7 vět, detaily a příklady"),T(8,"heading","full","Slovníček pojmů"),T(9,"table","full","tabulka: Pojem | Vysvětlení, 5-7 řádků"),T(10,"infobox","full","závěrečný infobox: shrnutí nebo zajímavost")],svgPreview:""},{id:"exercise-page",name:"Cvičební stránka",description:"Krátký úvod, pak různé typy cvičení: spojovačka, doplňovačka, otevřené otázky, test.",category:"exercise",template:[T(1,"heading-h1","full","název pracovního listu"),T(2,"paragraph","full","krátký úvod 3-4 věty, motivace a cíl"),T(3,"heading","full","Cvičení 1: Přiřazování — název cvičení"),T(4,"connect-pairs","full","4-5 párů: Pojem | Definice"),T(5,"heading","full","Cvičení 2: Doplňovačka — název cvičení"),T(6,"fill-blank","full","věta s ___ mezerou = správná odpověď"),T(7,"fill-blank","full","věta s ___ mezerou = správná odpověď"),T(8,"fill-blank","full","věta s ___ mezerou = správná odpověď"),T(9,"heading","full","Cvičení 3: Zamysli se"),T(10,"free-answer","full","první otevřená otázka k přemýšlení"),T(11,"free-answer","full","druhá otevřená otázka k přemýšlení"),T(12,"heading","full","Cvičení 4: Otestuj se"),T(13,"multiple-choice","full","otázka, A) možnost B) možnost* C) možnost D) možnost"),T(14,"multiple-choice","full","druhá otázka s 4 možnostmi")],svgPreview:""},{id:"hero-intro-page",name:"Hero intro",description:"Otevírací stránka tématu: velký hero obrázek, hlavní nadpis, úvod, první sekce.",category:"intro",template:[T(1,"image","full","velký hero obrázek tématu",{imageSlot:!0}),T(2,"heading-h1","full","hlavní nadpis tématu"),T(3,"paragraph","full","úvodní odstavec 8-10 vět, nadchne čtenáře"),T(4,"heading","half","nadpis sekce"),T(5,"infobox","half","Věděl jsi, že...? 3 věty zajímavost"),T(6,"paragraph","half","text sekce 5-7 vět"),T(7,"image","half","obrázek k sekci",{imageSlot:!0}),T(8,"infobox","full","shrnutí nebo výzva: co nás čeká dál")],svgPreview:""},{id:"vocabulary-summary-page",name:"Slovníček a shrnutí",description:"Stránka opakování: tabulka pojmů, klíčové poznatky, doplňovačky na procvičení.",category:"summary",template:[T(1,"heading-h1","full","název opakování nebo slovníčku"),T(2,"paragraph","half","úvod k opakování 4-5 vět"),T(3,"image","half","obrázek k tématu",{imageSlot:!0}),T(4,"heading","full","Slovníček pojmů"),T(5,"table","full","tabulka: Pojem | Vysvětlení, 6-8 řádků"),T(6,"heading","full","Co jsme se naučili"),T(7,"infobox","full","klíčové poznatky formou odrážek, 5-7 bodů"),T(8,"heading","full","Ověř si znalosti"),T(9,"fill-blank","full","věta s ___ mezerou = správná odpověď"),T(10,"fill-blank","full","věta s ___ mezerou = správná odpověď"),T(11,"fill-blank","full","věta s ___ mezerou = správná odpověď")],svgPreview:""}];Re.forEach(e=>{e.svgPreview=Tt(e.template)});function xt(e){const t=[];let o=1;return e.forEach((i,l)=>{t.push(`
[SEKCE ${l+1}: ${i.name.toUpperCase()}]`),i.template.forEach(s=>{if(!s.fixed){const n=s.role?` (${s.role})`:"";t.push(`${o++}. ${s.type.toUpperCase()}${n} [šíře=${s.width}]`)}})}),t.join(`
`)}const Ke={columnGap:16,minHeight:180};function Ce(e){return Math.round(e*10)/10}function It(e,t="equal"){return e===3?[34,33,33]:t==="sidebar-left"?[65,35]:t==="sidebar-right"?[35,65]:[50,50]}function Xe(e,t,o="equal"){const i=It(e,o),l=e===3?15:25,n=(Array.isArray(t)&&t.length>=e?t.slice(0,e):i).map((u,d)=>Number.isFinite(u)?Math.max(l,Number(u)):i[d]),p=n.reduce((u,d)=>u+d,0)||i.reduce((u,d)=>u+d,0),r=n.map(u=>Ce(u/p*100)),a=Ce(100-r.reduce((u,d)=>u+d,0));return r[r.length-1]=Ce(r[r.length-1]+a),r}function ae(e){return e.type==="layout-section"}function Et(e){const t=e?.columns===3?3:2,o=e?.layoutStyle??"equal";return{columns:t,layoutStyle:o,columnRatios:Xe(t,e?.columnRatios,o),columnGap:typeof e?.columnGap=="number"?e.columnGap:Ke.columnGap,minHeight:typeof e?.minHeight=="number"?e.minHeight:Ke.minHeight}}function Qe(e){return e===3?["col-1","col-2","col-3"]:["col-1","col-2"]}function Ve(e){const t=new Map,o=e.map(l=>{if(ae(l)){const s=Et(l.content);return t.set(l.id,s),{...l,content:s,layoutSectionId:void 0,layoutColumnId:void 0,layoutOrder:void 0}}return l}),i=new Map;return o.map(l=>{if(ae(l))return l;if(!l.layoutSectionId)return{...l,layoutSectionId:void 0,layoutColumnId:void 0,layoutOrder:void 0};const s=t.get(l.layoutSectionId);if(!s)return{...l,layoutSectionId:void 0,layoutColumnId:void 0,layoutOrder:void 0};const n=Qe(s.columns),p=n.includes(l.layoutColumnId)?l.layoutColumnId:n[0],r=`${l.layoutSectionId}:${p}`,a=i.get(r)??0;return i.set(r,a+1),{...l,layoutSectionId:l.layoutSectionId,layoutColumnId:p,layoutOrder:a}})}function Le(e){return{...e,floatSide:void 0,floatSpanBlocks:void 0,floatGridSpan:void 0,floatWidthPercent:void 0}}function he(e,t){return typeof e.gridSpan=="number"&&Number.isFinite(e.gridSpan)?Math.max(1,Math.min(t,Math.round(e.gridSpan))):e.width==="half"?Math.max(1,Math.round(t/2)):t}function Me(e){const t=mt("layout-section",0),o=Qe(e.columns),i=t.id,l={...t,gridSpan:e.fullGridSpan,content:{...t.content,columns:e.columns,layoutStyle:"custom",columnRatios:Xe(e.columns,e.columnRatios,"custom")}},s=e.columnsBlocks.flatMap((n,p)=>n.map((r,a)=>({...Le(r),layoutSectionId:i,layoutColumnId:o[p],layoutOrder:a,gridSpan:e.fullGridSpan,width:"full"})));return[l,...s]}function et(e,t=12){const o=Ve(e),i=[];let l=0;for(;l<o.length;){const s=o[l];if(ae(s)||s.layoutSectionId){i.push(Le(s)),l+=1;continue}if(s.floatSide&&(s.floatSpanBlocks??0)>0){const p=Math.max(1,s.floatSpanBlocks??0),r=[];for(let a=1;a<=p&&l+a<o.length;a+=1){const u=o[l+a];if(ae(u)||u.layoutSectionId)break;r.push(u)}if(r.length>0){const a=Math.max(1,Math.min(t-1,s.floatGridSpan??he(s,t))),u=Math.max(1,t-a),d=[a,u],f=s.floatSide==="left"?[[s],r]:[r,[s]];i.push(...Me({fullGridSpan:t,columns:2,columnRatios:d,columnsBlocks:f})),l+=r.length+1;continue}}const n=he(s,t);if(n<t){const p=[s];let r=n,a=l+1;for(;a<o.length&&p.length<3;){const u=o[a];if(ae(u)||u.layoutSectionId||u.floatSide)break;const d=he(u,t);if(d>=t||r+d>t||(p.push(u),r+=d,a+=1,r>=t))break}if(p.length>=2&&r===t){const u=p.length===3?3:2;i.push(...Me({fullGridSpan:t,columns:u,columnRatios:p.map(d=>he(d,t)),columnsBlocks:p.map(d=>[d])})),l+=p.length;continue}}i.push(Le(s)),l+=1}return Ve(i.map((s,n)=>({...s,order:n})))}async function jt(e){if(e.length===0)return console.log("[translateImageCaptions] Žádné obrázky k překladu."),e;console.log(`[translateImageCaptions] Překládám popisky ${e.length} obrázků...`);const t=e.map((i,l)=>({i:l,title:i.title,description:i.description||""})),o=`Přelož následující popisky obrázků do češtiny. Zachovej věcnost a stručnost. Odpověz POUZE jako JSON pole ve formátu:
[{"i": 0, "title": "...", "description": "..."}]

Popisky k překladu:
${JSON.stringify(t,null,2)}`;try{console.log("[translateImageCaptions] Volám Gemini Flash...");const i=await R([{role:"user",content:o}],"gemini-3-flash",{max_tokens:4096});console.log("[translateImageCaptions] Odpověď přijata, parsuju JSON...");const l=i.match(/\[[\s\S]*\]/);if(!l)return console.warn("[translateImageCaptions] Nenalezen JSON v odpovědi, vracím originály."),e;const s=JSON.parse(l[0]),n=[...e];for(const p of s)p.i>=0&&p.i<n.length&&(n[p.i]={...n[p.i],title:p.title||n[p.i].title,description:p.description||n[p.i].description});return console.log(`[translateImageCaptions] ✅ Přeloženo ${s.length} popisků.`),n}catch(i){return console.error("[translateImageCaptions] Chyba překladu:",i),e}}async function tt(e){try{const t=localStorage.getItem(`vivid-doc-${e}`);if(t){const o=JSON.parse(t);if(o?.content)return o.content.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}}catch{}try{const{data:t}=await ke.from("user_documents").select("content").eq("id",e).single();if(t?.content)return(typeof t.content=="string"?t.content:JSON.stringify(t.content)).replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}catch{}return null}async function Nt(e,t){let o=null;try{const k=localStorage.getItem(`vivid-doc-${e}`);if(k){const $=JSON.parse(k);$?.content&&(o=$.content)}}catch{}if(!o)try{const{data:k}=await ke.from("user_documents").select("content").eq("id",e).single();k?.content&&(o=typeof k.content=="string"?k.content:JSON.stringify(k.content))}catch{}if(!o)return null;let i=[];try{const k=localStorage.getItem(`vivid-doc-${e}`);if(k){const $=JSON.parse(k);Array.isArray($?.sectionImages)&&(i=$.sectionImages)}}catch{}const l=new Map;for(const k of i){const $=(k.heading||"").toLowerCase().trim();if(!$)continue;const E=k.imageSteps?.[0]?.url||k.imageUrl||"";E&&l.set($,{url:E,title:k.heading||"",caption:k.imageSteps?.[0]?.description||k.heading||"",imageSteps:k.imageSteps})}const s=[...(t.media?.generatedIllustrations||[]).map(k=>({url:k.url||"",title:k.name||k.title||"",caption:k.name||k.title||""})),...(t.media?.generatedPhotos||[]).map(k=>({url:k.url||"",title:k.name||k.title||"",caption:k.name||k.title||""})),...(t.media?.images||[]).map(k=>{const $=[k.source,k.license].filter(Boolean).join(" • ");return{url:k.url||"",title:k.title||"",caption:$?`${k.title||""}
${$}`:k.title||""}})].filter(k=>!!k.url),n=[],p=/<(h1|h2|h3|h4|p|ul|ol|blockquote)[^>]*>([\s\S]*?)<\/\1>/gi;let r;for(;(r=p.exec(o))!==null;){const k=r[1].toLowerCase(),$=r[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();$&&n.push({tag:k,html:r[0],text:$})}if(n.length===0)return null;const a=/^(shrnut[ií]|v[eě]d[eě]li jste|pozor|tip\b|poznámka|zajímavost|důležit[eé] pojm)/i,u=k=>{const $=k.toLowerCase();return/shrnut/.test($)?"green":/v[eě]d[eě]li/.test($)?"blue":/pozor/.test($)?"yellow":/tip/.test($)?"purple":"blue"},d=k=>{if(k.tag==="h1")return"h1";if(k.tag==="h2")return"h2";if(k.tag==="h3"||k.tag==="h4")return"h3";if(k.tag==="blockquote")return"blockquote";if(k.tag==="ul"||k.tag==="ol")return"list";const $=k.text.trim();return a.test($)?"infobox-heading":$.length<=80&&!/[.!?;]$/.test($)&&!$.startsWith("📚")?"section-heading":"paragraph"},f=[];let c={headingText:null,headingLevel:"h2",paragraphs:[],infoboxes:[],lists:[]};const h=()=>{(c.headingText!==null||c.paragraphs.length>0||c.infoboxes.length>0)&&f.push(c)};for(let k=0;k<n.length;k++){const $=n[k],E=d($);if(E==="h1"||E==="h2"||E==="h3"||E==="section-heading"){h();const C=E==="h1"?"h1":E==="h3"||E==="section-heading"?"h3":"h2";c={headingText:$.text,headingLevel:C,paragraphs:[],infoboxes:[],lists:[]}}else if(E==="infobox-heading"){const C=u($.text),F=n[k+1],P=F&&d(F)==="paragraph"?F.html:"";P&&k++,c.infoboxes.push({title:$.text,html:P,variant:C})}else E==="blockquote"?c.infoboxes.push({title:"",html:$.html,variant:"blue"}):E==="list"?c.lists.push($):E==="paragraph"&&c.paragraphs.push($)}if(h(),f.length===0)return null;const m=f.filter(k=>k.paragraphs.length>0),y=new Set,g=new Set(Array.from(l.values()).map(k=>k.url)),b=s.filter(k=>!g.has(k.url)),v=m.filter(k=>!l.has((k.headingText||"").toLowerCase().trim()));if(b.length>0&&v.length>0){const k=Math.max(1,Math.ceil(v.length/b.length));let $=0;for(let E=0;E<v.length&&$<b.length;E+=k)y.add(f.indexOf(v[E])),$++}let A=0;const j=(k,$)=>{if(k.headingLevel==="h1")return"G";const E=k.infoboxes.length>0,C=k.paragraphs.reduce((F,P)=>F+P.text.length,0);return $&&E?A%2===0?"B+G+I":"B2+G+I":$?["A","B","A2","B2"][A%4]:E?"C+I":C>350?"C":"G"},N=k=>k.replace(/(\s|^)([aiouvzksAIOUVZKS])\s+/g,($,E,C)=>`${E}${C} `);let S=0,D=0;const z=[],w={heading:(k,$,E=12)=>({id:O(),type:"heading",order:S++,width:E<12?"half":"full",gridSpan:E,content:{text:N(k),level:$}}),para:(k,$=12,E)=>({id:O(),type:"paragraph",order:S++,width:$<12?"half":"full",gridSpan:$,content:E?{html:k,columns:E}:{html:k}}),img:(k,$=6)=>({id:O(),type:"image",order:S++,width:$<12?"half":"full",gridSpan:$,content:{url:k.url,alt:k.title,caption:k.caption,alignment:"center",size:100}}),floatImg:(k,$,E,C)=>({id:O(),type:"image",order:S++,width:"half",gridSpan:E,floatSide:$,floatSpanBlocks:C,floatGridSpan:E,content:{url:k.url,alt:k.title,caption:k.caption,alignment:"center",size:100}}),gallery:(k,$,E,C,F)=>({id:O(),type:"image",order:S++,width:"half",gridSpan:E,floatSide:$,floatSpanBlocks:C,floatGridSpan:E,content:{url:k[0]||"",alt:"",caption:"",alignment:"center",size:100,gallery:k,galleryLayout:"grid",gridColumns:F}}),infobox:(k,$=12)=>({id:O(),type:"infobox",order:S++,width:$<12?"half":"full",gridSpan:$,content:{title:k.title,html:k.html,variant:k.variant}}),inlineGallery:(k,$,E,C=12)=>({id:O(),type:"image",order:S++,width:"full",gridSpan:C,content:{url:k[0]||"",alt:$[0]||"",caption:"",alignment:"center",size:100,gallery:k,galleryCaptions:$,galleryLayout:"grid",gridColumns:Math.min(E,k.length)}})};!f.some(k=>k.headingLevel==="h1")&&t.topic&&z.push(w.heading(t.topic,"h1",12)),f.forEach((k,$)=>{const E=l.get((k.headingText||"").toLowerCase().trim())||null;E||y.has($);const C=E||(y.has($)&&D<b.length?b[D]:null),F=E?.imageSteps?.filter(U=>!!U.url)||[],P=F.length>=2;if(k.headingLevel==="h1"){k.headingText&&z.push(w.heading(k.headingText,"h1",12));for(const U of k.paragraphs)z.push(w.para(U.html,12));for(const U of k.lists)z.push(w.para(U.html,12));for(const U of k.infoboxes)z.push(w.infobox(U,12));return}if(P){k.headingText&&z.push(w.heading(k.headingText,k.headingLevel,12));for(const G of k.paragraphs)z.push(w.para(G.html,12));for(const G of k.lists)z.push(w.para(G.html,12));for(const G of k.infoboxes)z.push(w.infobox(G,12));const U=F.map(G=>G.url),at=F.map(G=>G.description||G.name||"");z.push(w.inlineGallery(U,at,Math.min(F.length,4))),A++;return}const B=j(k,!!C);C?(E||D++,A++):k.paragraphs.length>0&&A++;const L=k.headingLevel,x=k.paragraphs[0],rt=k.paragraphs.slice(1),se=k.infoboxes[0],De=k.infoboxes.slice(1);switch(B){case"A":k.headingText&&z.push(w.heading(k.headingText,L,12)),x&&C?(z.push(w.para(x.html,6)),z.push(w.img(C,6))):x&&z.push(w.para(x.html,12));break;case"A2":k.headingText&&z.push(w.heading(k.headingText,L,12)),x&&C?(z.push(w.img(C,6)),z.push(w.para(x.html,6))):x&&z.push(w.para(x.html,12));break;case"B":C?(z.push(w.floatImg(C,"left",6,k.headingText?2:1)),k.headingText&&z.push(w.heading(k.headingText,L,6)),x&&z.push(w.para(x.html,6))):(k.headingText&&z.push(w.heading(k.headingText,L,12)),x&&z.push(w.para(x.html,12)));break;case"B2":C?(z.push(w.floatImg(C,"right",6,k.headingText?2:1)),k.headingText&&z.push(w.heading(k.headingText,L,6)),x&&z.push(w.para(x.html,6))):(k.headingText&&z.push(w.heading(k.headingText,L,12)),x&&z.push(w.para(x.html,12)));break;case"C":k.headingText&&z.push(w.heading(k.headingText,L,12)),x&&z.push(w.para(x.html,12,2));break;case"C+I":k.headingText&&z.push(w.heading(k.headingText,L,12)),x&&z.push(w.para(x.html,8)),se&&z.push(w.infobox(se,4));break;case"B+G+I":{const U=[C?.url||"",""];z.push(w.gallery(U,"left",5,3,1)),k.headingText&&z.push(w.heading(k.headingText,L,7)),x&&z.push(w.para(x.html,7)),z.push(w.infobox(se||{title:"Klíčové pojmy",html:"<p>Doplňte klíčové pojmy...</p>",variant:"blue"},7));break}case"B2+G+I":{const U=[C?.url||"",""];z.push(w.gallery(U,"right",5,3,1)),k.headingText&&z.push(w.heading(k.headingText,L,7)),x&&z.push(w.para(x.html,7)),z.push(w.infobox(se||{title:"Klíčové pojmy",html:"<p>Doplňte klíčové pojmy...</p>",variant:"blue"},7));break}default:k.headingText&&z.push(w.heading(k.headingText,L,12)),x&&z.push(w.para(x.html,12));break}for(const U of rt)z.push(w.para(U.html,12));for(const U of k.lists)z.push(w.para(U.html,12));const it=B==="C+I"||se?De:k.infoboxes;for(const U of it)z.push(w.infobox(U,12))});const Z=t.media?.charts||[];for(const k of Z){if(!k.columns||!k.rows||k.rows.length===0)continue;const $={id:`chart-${k.id||Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:"chart",order:z.length,width:"full",gridSpan:12,content:{chartType:k.chartType||"bar",chartTitle:k.title||"",chartColumns:k.columns,chartRows:k.rows,chartHeight:320}};z.push($)}const I=t.media?.imageGroups||[];for(const k of I){const $=(k.subjects||[]).filter(C=>C.status==="done"&&C.imageUrl);if($.length===0)continue;z.push(w.heading(k.title,"h2",12));const E={id:`ig-${k.id}-${Math.random().toString(36).slice(2,7)}`,type:"image",order:z.length,width:"full",gridSpan:12,content:{url:$[0].imageUrl,gallery:$.map(C=>C.imageUrl),galleryCaptions:$.map(C=>C.name),gridColumns:Math.min($.length,4),containerHeight:220}};z.push(E)}const _=et(z);return console.log(`[loadSourceTextAsBlocks] ${f.length} sekcí → ${_.length} bloků, ${l.size} H2→img mapování, ${D}/${b.length} fallback obrázků, ${Z.length} grafů, ${I.length} skupin`),_.length>0?_:null}let Y=null;function oe(e){lt({...e,blocks:et(e.blocks||[])},Y)}function pe(e){Se(e,Y)}function q(e){return ct(e)}function Ct(e,t){Je({...e,folderId:Y},t)}async function Lt(e,t,o,i){switch(console.log(`[Generator] Generating ${t} from DataSet:`,e.topic,"folder:",i),Y=i??null,t){case"text":return Vt(e);case"board-easy":return Ze(e,"easy");case"board-hard":return Ze(e,"hard");case"worksheet":return Bt(e,o);case"textbook-page":{const l=(e.generatedMaterials??[]).find(n=>n.type==="text"),s=l?.id?await tt(l.id):null;return s&&(console.log("[Generator] Nalezen učební text, použiji ho jako zdroj pro list učebnice"),o?.("source-text","Načten učební text jako zdroj obsahu...")),Ft(e,o,s??void 0)}case"test":return Mt(e);case"lesson":return Jt(e);case"lessons":return Yt(e);case"methodology":return qt(e);case"hodnoceni":return Wt(e);case"vocabulary-set":return ro(e,o);case"grammar-lesson":return ao(e,o);case"reading-activity":return lo(e,o);case"writing-activity":return co(e,o);case"speaking-activity":return po(e,o);case"language-quiz":return uo(e,o);case"listening-activity":return ho(e,o);case"unit-plan":return mo(e);default:return{success:!1,error:`Neznámý typ materiálu: ${t}`}}}async function St(e,t){t?.("rag","Hledám podobné pracovní listy v RAG databázi...");const o=e.content?.keyTerms?.map(n=>n.term)??[],i=await le({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:o,matchCount:3}),l=ce(i);t?.("rag-done",`Nalezeno ${i.length} podobných listů v RAG databázi`,{examples:i,ragSection:l}),t?.("agent1","Agent 1: Plánuji obsah pracovního listu...");const s=await ze(e,l);return s?(t?.("agent1-done",`Agent 1 hotovo — ${s.sections.length} sekcí, obtížnost: ${s.difficulty}, ${s.estimatedTimeMinutes} min`),{success:!0,contentPlan:s,ragCount:i.length}):{success:!1,error:"Agent 1 selhal — nepodařilo se sestavit plán obsahu"}}async function Pt(e,t,o,i){Y=i??Y,o?.("rag","Načítám RAG příklady pro layout...");const l=e.content?.keyTerms?.map(d=>d.term)??[],s=await le({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:l,matchCount:3}),n=ce(s);o?.("rag-done",`RAG: nalezeno ${s.length} příkladů pro Agent 2`,{examples:s,ragSection:n}),o?.("agent2","Agent 2: Navrhuji layout a rozmísťuji bloky...");const{text:p}=await Be(e,t,n,"worksheet",s,o);if(!p)return o?.("error","Agent 2 selhal"),{success:!1,error:"Agent 2 selhal — nepodařilo se vygenerovat layout"};o?.("agent2-done","Agent 2 hotovo — layout připraven"),o?.("saving","Ukládám pracovní list...");const r=$e(p,e),a=`worksheet-${Date.now()}`,u={id:a,title:t.title||`${e.topic} - Pracovní list`,blocks:r,settings:{showAnswerKey:!0,pageSize:"A4",margins:"normal"},metadata:{subject:e.subjectCode,grade:e.grade,topic:e.topic,estimatedTime:t.estimatedTimeMinutes,sourceDatasetId:e.id},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return oe(u),o?.("done",`Uloženo (${r.length} bloků)`),{success:!0,id:a,preview:p,generationMethod:"two-agent",contentPlan:t}}function W(e){const t=[];e.rvp?.expectedOutcomes?.length>0&&(t.push("🎯 OČEKÁVANÉ VÝSTUPY RVP:"),e.rvp.expectedOutcomes.forEach(s=>{t.push(`• ${s}`)}),t.push(""));const o=e.rvp?.competencies;o?.length>0&&(t.push("🔑 KLÍČOVÉ KOMPETENCE:"),o.forEach(s=>{t.push(`• ${s}`)}),t.push("")),e.content?.keyTerms?.length>0&&(t.push("📖 KLÍČOVÉ POJMY:"),e.content.keyTerms.forEach(s=>{t.push(`• ${s.term} — ${s.definition}`)}),t.push("")),e.content?.keyFacts?.length>0&&(t.push("✓ KLÍČOVÁ FAKTA:"),e.content.keyFacts.forEach(s=>{t.push(`• ${s}`)}),t.push("")),e.content?.timeline&&e.content.timeline.length>0&&(t.push("📅 ČASOVÁ OSA:"),e.content.timeline.forEach(s=>{t.push(`• ${s.year||s.date||""}: ${s.event||s.description||""}`)}),t.push("")),e.content?.personalities&&e.content.personalities.length>0&&(t.push("👤 OSOBNOSTI:"),e.content.personalities.forEach(s=>{t.push(`• ${s.name} — ${s.description}`)}),t.push(""));const i=e.media?.images||[],l=e.media?.generatedIllustrations||[];return(i.length>0||l.length>0)&&(t.push("🖼️ DOSTUPNÉ VIZUÁLY:"),i.forEach((s,n)=>{t.push(`  - Obrázek: "${s.title}"`)}),l.forEach((s,n)=>{t.push(`  - Ilustrace: "${s.name}"`)})),e.content?.userFeedback&&(t.push(""),t.push("⚠️ DŮLEŽITÉ POKYNY OD UŽIVATELE (musíš je respektovat!):"),t.push(e.content.userFeedback),t.push("")),t.join(`
`)}function ne(e){try{const t=localStorage.getItem("generator_feedback");if(console.log("[Feedback] Raw localStorage:",t),!t)return console.log("[Feedback] No feedback found in localStorage"),"";const o=JSON.parse(t);console.log("[Feedback] Parsed history:",o);const i=o[e]||[];if(console.log(`[Feedback] For type "${e}":`,i),i.length===0)return console.log("[Feedback] No feedback for this type"),"";const l=`

DŮLEŽITÉ POKYNY OD UŽIVATELE (musíš je respektovat!):
${i.map(s=>`- ${s}`).join(`
`)}`;return console.log("[Feedback] Adding to prompt:",l),l}catch(t){return console.error("[Feedback] Error:",t),""}}function ot(e){const t=[],o=e.split(`
`);let i=0,l=!1;for(t.push("HEADER:"),t.push(""),l=!0;i<o.length;){const s=o[i].trim();if(!s){i++;continue}if(/^(HEADER|FOOTER|HEADING|PARAGRAPH|INFOBOX|OBRÁZEK|IMAGE|MULTIPLE-CHOICE|FILL-BLANK|FREE-ANSWER|CONNECT-PAIRS|TABLE):/i.test(s)){if(s.toUpperCase().startsWith("HEADER:")&&l){i++;continue}t.push(""),t.push(s),i++;continue}if(s.startsWith("#")){const n=s.replace(/^#+\s*/,"").trim();t.push(""),t.push(`HEADING: ${n}`),i++;continue}if(s.startsWith("❓")||/^[0-9]+\.\s*❓/.test(s)){const n=s.replace(/^[0-9]*\.?\s*❓\s*/,"").trim();for(t.push(""),t.push("MULTIPLE-CHOICE:"),t.push(n),i++;i<o.length;){const p=o[i].trim();if(/^[A-D]\)/.test(p))t.push(p),i++;else break}continue}if(s.startsWith("📝")||s.toLowerCase().includes("doplň:")){let n=s.replace(/^[0-9]*\.?\s*📝\s*(Doplň:?\s*)?/i,"").trim();if(n=n.replace(/^Doplň:?\s*/i,"").trim(),n.includes("___")&&n.includes("="))t.push(""),t.push("FILL-BLANK:"),t.push(n);else if(n.includes("___")){const p=n.match(/\(([^)]+)\)/);if(p){const r=p[1];n=n.replace(/\([^)]+\)/,""),t.push(""),t.push("FILL-BLANK:"),t.push(`${n.trim()} = ${r}`)}else t.push(""),t.push("FILL-BLANK:"),t.push(`${n} = ???`)}else t.push(""),t.push("FILL-BLANK:"),t.push(n.includes("=")?n:`${n} = ???`);i++;continue}if(s.startsWith("✍️")){const n=s.replace(/^[0-9]*\.?\s*✍️\s*/,"").trim();t.push(""),t.push("FREE-ANSWER:"),t.push(n),i++;continue}if(s.startsWith("**")&&s.includes(":**")){const n=s.replace(/\*\*/g,"").replace(/:/," - ");t.push(""),t.push("INFOBOX:"),t.push(n),i++;continue}if(s.toLowerCase().includes("zpětná vazba")||s.includes("😊")||s.includes("😐")||s.includes("☹️")){for(t.push(""),t.push("FOOTER:"),t.push(s),i++;i<o.length;){const n=o[i].trim();if(!n)break;t.push(n),i++}continue}if(s.toLowerCase().includes("jméno")&&s.includes("třída")){i++;continue}if(/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ][a-záčďéěíňóřšťúůýž\s]+:/.test(s)&&s.length<150&&!s.toLowerCase().includes("poznámky")){t.push(""),t.push("INFOBOX:"),t.push(s.replace(":"," -")),i++;continue}if(s.length>80){for(t.push(""),t.push("PARAGRAPH:"),t.push(s),i++;i<o.length;){const n=o[i].trim();if(!n||/^(#|❓|📝|✍️|\*\*|[A-D]\)|HEADER|FOOTER|HEADING|PARAGRAPH)/i.test(n)||n.length<30)break;t.push(n),i++}continue}i++}return t.push(""),t.push("FOOTER:"),t.join(`
`)}async function Ze(e,t){console.log(`[Generator] Generating board (${t})...`);const o=W(e),i=t==="easy"?5:6,l=ne(t==="easy"?"board-easy":"board-hard"),s=e.media?.images||[],n=e.media?.generatedIllustrations||[];let p="";s.length>0&&(p+=`
🖼️ DOSTUPNÉ OBRÁZKY:
${s.map((a,u)=>`  ${u+1}. "${a.title}"`).join(`
`)}`),n.length>0&&(p+=`
🎨 DOSTUPNÉ ILUSTRACE:
${n.map((a,u)=>`  ${u+1}. "${a.name}"`).join(`
`)}`),console.log(`[Generator] Board media: ${s.length} images, ${n.length} illustrations`);const r=`Vytvoř interaktivní procvičování k tématu "${e.topic}" pro ${e.grade}. třídu.
Obtížnost: ${t==="easy"?"lehká":"těžší"}

${o}
${l||""}
${p}

===== STRUKTURA PROCVIČOVÁNÍ =====
Vygeneruj mix aktivit v tomto pořadí:
1. ${i-2}x ABC OTÁZKA (většina)
2. 1x SPOJOVAČKA (propojování dvojic)
3. 1x DOPLŇOVAČKA (doplnění slov do mezer)

===== FORMÁTY =====

ABC OTÁZKA:
OTÁZKA: Text otázky?
A) možnost
B) správná odpověď *
C) možnost
D) možnost

${s.length>0||n.length>0?`ABC OTÁZKA S OBRÁZKEM (použij název z 🖼️ OBRÁZKY nebo 🎨 ILUSTRACE):
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
${s.length>0||n.length>0?`- K 1-2 ABC otázkám SMÍŠ přidat obrázek — použij PŘESNÝ název ze seznamu výše
- Můžeš použít obrázky (🖼️) i ilustrace (🎨)
- Formát: OBRÁZEK: Přesný název ze seznamu`:`- ŽÁDNÉ obrázky nejsou k dispozici — ABSOLUTNĚ ZAKAZUJI:
  - Nepiš "na tomto obrázku", "na ilustraci", "co vidíš na obrázku"
  - Nepoužívej formát OBRÁZEK: ...
  - Pátej POUZE textové otázky bez jakéhokoliv odkazu na vizuální materiály`}

ZAČNI GENEROVAT:`;console.log("[Generator] Board prompt:",r);try{const a=await R([{role:"user",content:r}],"gemini-3-flash",{temperature:.7,max_tokens:4096}),u=Rt(a,e,t);if(u.length===0)throw new Error("Nepodařilo se parsovat otázky z odpovědi");const d=`quiz-${Date.now()}`,f={id:d,title:`${e.topic} - ${t==="easy"?"Lehké":"Těžké"} procvičování`,slides:u,settings:{showPoints:!0,allowBack:!0,shuffleSlides:!1,shuffleOptions:t==="hard",timeLimit:null,passingScore:60},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),sourceDatasetId:e.id};try{pe(f)}catch(m){console.warn(`[Generator] localStorage failed for board ${d}:`,m)}await q(f)||console.warn(`[Generator] Supabase sync failed for board ${d}`);const h=u.map((m,y)=>{const g=m;if(g.activityType==="abc"&&g.question&&g.options){const b=g.media?.url,v=b?`
🖼️ Obrázek: ${b.split("/").pop()?.split("?")[0]||"přiložen"}`:"",A=g.options.map(j=>`${j.label}) ${j.content}${j.isCorrect?" ✓":""}`).join(`
`);return`**ABC otázka ${y+1}:** ${g.question}${v}
${A}`}if(g.activityType==="connect-pairs"&&g.pairs){const b=g.pairs.map(v=>`${v.left?.content||""} ↔ ${v.right?.content||""}`).join(`
`);return`**🔗 Spojovačka:** ${g.instruction||"Spoj dvojice"}
${b}`}if(g.activityType==="fill-blanks"&&g.sentences){const b=g.sentences.map(v=>{const A=v.blanks?.[0]?.text||"";return`${v.text?.replace(/\[.*?\]/g,"___")} = ${A}`}).join(`
`);return`**✏️ Doplňovačka:** ${g.instruction||"Doplň slova"}
${b}`}return""}).filter(Boolean).join(`

`);return console.log("[Generator] Board saved:",d,"with",u.length,"slides"),{success:!0,id:d,preview:h}}catch(a){return console.error("[Generator] Board error:",a),{success:!1,error:String(a)}}}function Rt(e,t,o){const i=[];return e.split(/(?=OTÁZKA:|SPOJOVAČKA:|DOPLŇOVAČKA:)/i).filter(s=>s.trim()).forEach(s=>{const n=s.trim().split(`
`).filter(r=>r.trim());if(n.length<2)return;const p=n[0].trim();if(p.match(/^SPOJOVAČKA:/i)){const r=p.replace(/^SPOJOVAČKA:\s*/i,"").trim()||"Spoj správné dvojice",a=[];n.slice(1).forEach((u,d)=>{const f=u.match(/^(.+?)\s*\|\s*(.+)$/);f&&a.push({id:`pair-${d+1}`,left:{id:`left-${d+1}`,type:"text",content:f[1].trim()},right:{id:`right-${d+1}`,type:"text",content:f[2].trim()}})}),a.length>=2&&(i.push({...dt(i.length),instruction:r,pairs:a}),console.log("[Parser] ✅ Created connect-pairs slide with",a.length,"pairs"));return}if(p.match(/^DOPLŇOVAČKA:/i)){const r=p.replace(/^DOPLŇOVAČKA:\s*/i,"").trim()||"Doplň chybějící slova",a=[];n.slice(1).forEach((u,d)=>{const f=u.match(/^(.+?___.*?)\s*=\s*(.+)$/);if(f){const c=f[1].trim(),h=f[2].trim(),m=`blank-${d+1}`,y=c.indexOf("___"),g=c.replace(/___/,`[${m}]`);a.push({id:`sentence-${d+1}`,text:g,blanks:[{id:m,text:h,position:y}]})}}),a.length>=1&&(i.push({...ht(i.length),instruction:r,sentences:a,distractors:[]}),console.log("[Parser] ✅ Created fill-blanks slide with",a.length,"sentences"));return}if(p.match(/^OTÁZKA:/i)){const r=p.replace(/^OTÁZKA:\s*/i,"").trim();let a;const u=[];for(const d of n){const f=d.match(/^OBRÁZEK:\s*(.+)/i);if(f){const c=f[1].trim().toLowerCase(),h=t.media?.images?.find(m=>{const y=(m.title||"").toLowerCase();return y===c||y.includes(c)||c.includes(y)||y.replace(/[^a-z0-9]/g,"").includes(c.replace(/[^a-z0-9]/g,""))||c.replace(/[^a-z0-9]/g,"").includes(y.replace(/[^a-z0-9]/g,""))});if(h?.url)a=h.url,console.log("[Parser] ✅ Found image:",c);else{const m=t.media?.generatedIllustrations?.find(y=>{const g=(y.name||"").toLowerCase();return g===c||g.includes(c)||c.includes(g)||g.replace(/[^a-z0-9]/g,"").includes(c.replace(/[^a-z0-9]/g,""))||c.replace(/[^a-z0-9]/g,"").includes(g.replace(/[^a-z0-9]/g,""))});m?.url&&(a=m.url,console.log("[Parser] ✅ Found illustration:",c,"->",m.name))}}}n.forEach(d=>{const f=d.match(/^([A-D])\)\s*(.+)/i);if(f){const c=f[1].toUpperCase();let h=f[2].trim();const m=h.endsWith("*");m&&(h=h.slice(0,-1).trim()),u.push({id:c.toLowerCase(),label:c,content:h,isCorrect:m})}}),u.length>0&&!u.some(d=>d.isCorrect)&&(u[0].isCorrect=!0),u.length>=2&&(i.push({...Ae(i.length),question:r,options:u,points:o==="easy"?1:2,...a?{media:{type:"image",url:a}}:{}}),console.log("[Parser] ✅ Created ABC slide:",r.substring(0,30)))}}),i}async function Bt(e,t){console.log("[Generator] Starting two-agent worksheet pipeline..."),t?.("rag","Hledám podobné pracovní listy v RAG databázi...");const o=e.content?.keyTerms?.map(u=>u.term)??[],i=await le({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:o,matchCount:3}),l=ce(i);console.log(`[Generator] RAG: ${i.length} examples found`),t?.("rag-done",`RAG: nalezeno ${i.length} podobných listů`,{examples:i,ragSection:l}),t?.("agent1","Agent 1: Plánuji obsah (sekce, cvičení, obrázky)...");const s=await ze(e,l);if(!s)return console.warn("[Generator] Agent 1 failed, falling back to legacy generator"),t?.("fallback","Agent 1 selhal → záložní generátor"),{...await ve(e),generationMethod:"legacy"};console.log("[Generator] Agent 1 done, sections:",s.sections.length),t?.("agent1-done",`Agent 1 ✅ — ${s.sections.length} sekcí, obtížnost: ${s.difficulty}, ${s.estimatedTimeMinutes} min`),t?.("agent2","Agent 2: Navrhuji layout a rozmísťuji bloky...");const{text:n}=await Be(e,s,l,"worksheet",i,t);if(!n)return console.warn("[Generator] Agent 2 failed, falling back to legacy generator"),t?.("fallback","Agent 2 selhal → záložní generátor"),{...await ve(e),generationMethod:"legacy"};console.log("[Generator] Agent 2 done, layout text length:",n.length),t?.("agent2-done",`Agent 2 ✅ — layout připraven (${n.length} znaků)`);const p=$e(n,e),r=`worksheet-${Date.now()}`,a={id:r,title:s.title||`${e.topic} - Pracovní list`,blocks:p,settings:{showAnswerKey:!0,pageSize:"A4",margins:"normal"},metadata:{subject:e.subjectCode,grade:e.grade,topic:e.topic,estimatedTime:s.estimatedTimeMinutes,sourceDatasetId:e.id},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return t?.("saving","Ukládám pracovní list..."),oe(a),console.log("[Generator] Worksheet saved:",r),t?.("done",`Hotovo ✅ — uloženo ${p.length} bloků`),{success:!0,id:r,preview:n,generationMethod:"two-agent",contentPlan:s}}async function ze(e,t,o="worksheet",i){const l=W(e),s=e.media?.images??[],n=e.media?.generatedIllustrations??[],p=[...s.map((f,c)=>`[OBRAZ-${c}] url="${f.url}" title="${f.title}" popis="${f.description||""}"`),...n.map((f,c)=>`[ILUSTRACE-${c}] url="${f.url||""}" title="${f.name||f.title||""}" popis="${f.description||""}"`)].join(`
`),r=o==="textbook"?`
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
`,a=o==="textbook"?"stránky učebnice":"pracovního listu",u=o==="textbook"&&i?`
## ⭐ ZDROJOVÝ UČEBNÍ TEXT (PRIORITNÍ ZDROJ)
Níže je učební text který byl pro toto téma vygenerován. Použij ho jako HLAVNÍ ZDROJ obsahu — zachovej stejná fakta, stejnou terminologii, stejnou strukturu výkladu. Jen uprav formát do podoby vizuálně bohaté stránky učebnice.

${i.substring(0,6e3)}
`:"",d=`Jsi pedagogický expert. Vytvoř plán obsahu ${a} pro žáky.

${t}

## VSTUPNÍ DATA
Téma: ${e.topic}
Předmět: ${e.subjectCode||"Dějepis"}
Ročník: ${e.grade}. třída
${u}
## OBSAH Z DATASETU
${l}

## DOSTUPNÉ OBRÁZKY A ILUSTRACE
${p||"Žádné obrázky nejsou dostupné."}

${r}

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
- title, content, items (pole), layoutHint (nápověda pro designéra — odvoď z layoutu vzorů)

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
      "layoutHint": "..."
    }
  ]
}
\`\`\``;try{let c=(await R([{role:"system",content:"Jsi expert na tvorbu vzdělávacích materiálů. Odpovídáš VÝHRADNĚ validním JSON objektem dle zadané struktury. Žádný jiný text."},{role:"user",content:d}],"gemini-3-pro",{temperature:.4,max_tokens:8192})).trim();const h=c.match(/```(?:json)?\s*([\s\S]+?)\s*```/);if(h)c=h[1].trim();else{const y=c.indexOf("{"),g=c.lastIndexOf("}");y!==-1&&g!==-1&&g>y&&(c=c.slice(y,g+1))}console.log("[Agent 1] Parsing JSON, length:",c.length,"preview:",c.substring(0,200));const m=JSON.parse(c);return!m.sections||!Array.isArray(m.sections)||m.sections.length===0?(console.error("[Agent 1] ContentPlan has no sections"),null):m}catch(f){return console.error("[Agent 1] Failed to parse ContentPlan:",f),console.error("[Agent 1] Raw response (first 500):",response?.substring(0,500)),null}}function _t(e){if(e.length===0)return null;const t=e[0],o=Re.find(i=>i.id===t);if(o)return o;try{return JSON.parse(localStorage.getItem("vividbooks_custom_layouts")||"[]").find(l=>l.id===t)??null}catch{return null}}async function Be(e,t,o,i="worksheet",l=[],s,n=[]){const p=_t(n);if(console.log("[Agent 2] selectedLayoutIds:",n,"→ template:",p?.id??"none (free-form)"),p&&i==="textbook"){console.log("[Agent 2] ✅ Template-fill mode — layout:",p.name,`(${p.template.length} slotů)`);const{blocks:a,template:u}=await Dt(e,t,p,s);return{blocks:a,template:u}}return console.log("[Agent 2] 🔄 Free-form mode (no template selected or worksheet mode)"),{text:await Ut(e,t,o,i,l,s,n)??"",template:null}}async function Dt(e,t,o,i){const l=[...e.media?.generatedIllustrations||[],...e.media?.generatedPhotos||[],...e.media?.images||[]],s=l.length>0?l.map(m=>`- ${m.url||""} (${m.title||m.name||"bez názvu"})`).join(`
`):"(žádné obrázky)",n=t.sections.map((m,y)=>`${y+1}. [${m.type}] "${m.title}"
Obsah: ${m.content}`).join(`

`),r=o.template.filter(m=>!m.fixed).map(m=>{const y=m.type.toUpperCase(),g=m.width==="half"?" [polovina šíře]":"",A=(m.imageSlot?" → vrať URL obrázku z datasetu":"")||{"connect-pairs":' → formát: "Pojem | Definice" (každý pár na nový řádek)',"fill-blank":' → formát: "věta s ___ mezerou = odpověď"',"multiple-choice":' → formát: "Otázka?\\nA) možnost\\nB) správná *\\nC) možnost"',table:' → formát: "Záhlaví A | Záhlaví B\\nHodnota 1 | Hodnota 2"',"free-answer":" → vrať text otázky","heading-h1":" → 2-5 slov",heading:" → 3-6 slov"}[m.type]||"";return`  "${m.id}": "${y}${g} — ${m.role}${A}"`}).join(`,
`),a=`Vyplňuješ stránku učebnice "${e.topic}" (${e.subjectCode}, ${e.grade}. třída).

## UČEBNÍ TEXT — použij tento obsah v plném rozsahu:
${n}

## DOSTUPNÉ OBRÁZKY (pro IMAGE sloty vrať přesné URL):
${s}

## ÚKOL
Rozděl výše uvedený učební text do slotů šablony. NEKRAŤ, NEPŘEPISUJ — použij přímo dodaný obsah.
Pro odstavce (PARAGRAPH) použij celé pasáže z učebního textu, ne jen shrnutí.
Pro nadpisy (HEADING) použij nadpisy z učebního textu.
Pro infobox, connect-pairs atd. extrahuj relevantní data z textu.

Vrať POUZE validní JSON (bez markdown backticks):
{
${r}
}

PRAVIDLA:
- Použij přesně dodaný text, nevymýšlej vlastní
- Pro PARAGRAPH sloty: plné odstavce (5–10 vět), ne zkráceniny
- Pro IMAGE sloty: vrať přesné URL ze seznamu výše
- Nevynechej žádný klíč
- Piš v češtině`;i?.("agent2-prompt",`Template-fill JSON prompt (${a.length} znaků)`,{prompt:a});let u={};try{const m=await R([{role:"system",content:"Jsi asistent vyplňující obsah do šablon učebnic. Vrať POUZE čistý JSON bez markdown. Žádný jiný text. Použij CELÝ dodaný obsah — nepřepisuj ho vlastními slovy, ale využij ho v plném rozsahu."},{role:"user",content:a}],"gemini-3-pro",{temperature:.4,max_tokens:8192});i?.("agent2-raw",`JSON odpověď (${m.length} znaků)`,{raw:m});const y=m.replace(/```json?\s*/gi,"").replace(/```\s*/g,"").trim();u=JSON.parse(y),console.log("[Agent 2 Template] AI JSON parsed OK, keys:",Object.keys(u).join(", "))}catch(m){console.error("[Agent 2 Template] JSON parse failed:",m)}const d=m=>{const y=m.trim();if(y.startsWith("http://")||y.startsWith("https://"))return{url:y,caption:""};const g=y.toLowerCase().replace(/[^a-z0-9]/g,""),b=l.find(v=>{const A=(v.title||v.name||"").toLowerCase().replace(/[^a-z0-9]/g,"");return A&&(A.includes(g)||g.includes(A))});return b?{url:b.url||"",caption:y}:l.length>0?{url:l[0].url||"",caption:y}:{url:"",caption:y}},f=[];let c=0,h=0;for(;h<o.template.length;){const m=o.template[h],y=String(u[String(m.id)]??""),g=o.template[h+1];if(m.width==="half"&&g?.width==="half"){const v=String(u[String(g.id)]??"");f.push(te(m,y,c++,"half",e,d)),f.push(te(g,v,c++,"half",e,d)),h+=2}else f.push(te(m,y,c++,m.width,e,d)),h++}return console.log("[Agent 2 Template] Built",f.length,"blocks from template:",o.id),{blocks:f,template:o.template}}async function Ut(e,t,o,i="worksheet",l=[],s,n=[]){const p=`
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
`.trim(),r=t.sections.map((c,h)=>{const m=t.selectedImages?.filter(g=>g.sectionIndex===h)??[],y=m.length>0?`
    → Obrázek: ${m.map(g=>g.url).join(", ")} (${m[0].sectionHint||""})`:"";return`${h+1}. [${c.type}] "${c.title}"
   Obsah: ${c.content.substring(0,200)}${c.content.length>200?"...":""}
   ${c.items&&c.items.length>0?`Položky (${c.items.length}x): ${c.items.slice(0,3).join(" | ")}${c.items.length>3?"...":""}`:""}
   Hint designu: ${c.layoutHint||"–"}${y}`}).join(`

`),a=zt(l),u=n.length>0?Re.filter(c=>n.includes(c.id)):[],d=u.length>0?`## 🎯 UŽIVATELEM VYBRANÉ TYPY LAYOUTU — POVINNĚ POUŽIJ TYTO SEKVENCE BLOKŮ

Uživatel vybral ${u.length} typů layoutu. MUSÍŠ je zapracovat do stránky v tomto pořadí:
${xt(u)}

⚠️ KAŽDÝ vybraný layout musí být na stránce zastoupen alespoň jednou.
⚠️ Bloky z každé sekce naplň obsahem z ContentPlan výše.
---`:"",f=`Jsi expert na design vzdělávacích pracovních listů. Převeď ContentPlan do formátu bloků.

${o}

${a}

${d}

## OBSAH (od Agenta 1 — obsahového planera)
Název: ${t.title}
Cíl: ${t.learningGoal}
Obtížnost: ${t.difficulty}
Čas: ${t.estimatedTimeMinutes} minut

SEKCE:
${r}

## DOSTUPNÉ BLOKY A JEJICH FORMÁT
${p}

## TVŮJ ÚKOL
Přepiš CELÝ ContentPlan do formátu bloků.

⚠️ PRIORITY (seřazeno od nejdůležitějšího):
1. STRUKTURÁLNÍ ŠABLONA výše — dodržuj počet a pořadí bloků
2. VZORY výše — pokud mají HALF LAYOUT, INFOBOX, cvičení, MUSÍŠ je také použít
3. Níže uvedená pravidla jsou jen doplňková — NESMÍ omezovat co říkají vzory

${i==="textbook"?`### PRAVIDLA PRO LIST UČEBNICE (platí jen tam kde vzory neurčují jinak)
- Toto je STRÁNKA UČEBNICE — důraz na čtivý výklad, vizuální bohatost
- intro sekce → HEADING-H1 + PARAGRAPH (delší, 8-12 vět)
- reading sekce → střídej PARAGRAPH a PARAGRAPH: HALF LAYOUT + OBRÁZEK: HALF LAYOUT naproti
- Každá reading sekce by měla mít alespoň 1 PARAGRAPH: HALF LAYOUT + OBRÁZEK: HALF LAYOUT pár
- vocabulary sekce → TABLE (Pojem | Vysvětlení) nebo INFOBOX: HALF LAYOUT pro každý pojem
- timeline sekce → TABLE s roky nebo INFOBOX: HALF LAYOUT pro každou událost
- Obrázky: POVINNĚ umísti VŠECHNY obrázky z ContentPlan.selectedImages — VŽDY jako OBRÁZEK: HALF LAYOUT vedle textu
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

Dodržuj přesný formát. Začni s HEADER:, konči FOOTER:.`;s?.("agent2-prompt",`Prompt Agent 2 (${f.length} znaků)`,{prompt:f});try{const c=await R([{role:"system",content:`Jsi designér ${i==="textbook"?"stránek učebnice":"pracovních listů"}. MUSÍŠ dodržet PŘESNÝ formát bloků.
ABSOLUTNÍ PRAVIDLA:
1. Každý blok MUSÍ začínat klíčovým slovem VELKÝMI PÍSMENY + dvojtečka
2. Obsah VŽDY na NOVÝCH ŘÁDCÍCH, prázdný řádek mezi bloky
3. Žádný Markdown (žádné #, **, _)
4. Začni VŽDY s "HEADER:"
5. HALF LAYOUT: "PARAGRAPH: HALF LAYOUT" a "OBRÁZEK: HALF LAYOUT" jsou vždy páry vedle sebe — použij je pro vizuální bohatost
6. Dodržuj STRUKTURÁLNÍ ŠABLONU a vzory — jsou závazné${i==="textbook"?`
7. Umísti KAŽDÝ obrázek z ContentPlan.selectedImages — žádný nevynechej
8. NIKDY negeneruj méně než 18 bloků pro list učebnice`:""}`},{role:"user",content:f}],"gemini-3-pro",{temperature:.5,max_tokens:8192});return s?.("agent2-raw",`Raw výstup Agent 2 (${c.length} znaků)`,{raw:c}),c.trim().startsWith("HEADER:")?c:ot(c)}catch(c){return console.error("[Agent 2] Layout generation failed:",c),null}}async function Ft(e,t,o){console.log("[Generator] Starting textbook page two-agent pipeline..."),t?.("rag","Hledám podobné listy učebnice v RAG databázi...");const i=e.content?.keyTerms?.map(d=>d.term)??[],l=await le({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:i,matchCount:3}),s=ce(l,"textbook");t?.("rag-done",`RAG: nalezeno ${l.length} podobných listů`,{examples:l,ragSection:s}),t?.("agent1","Agent 1: Plánuji obsah stránky učebnice...");const n=await ze(e,s,"textbook",o);if(!n)return t?.("fallback","Agent 1 selhal → záložní generátor"),{...await ve(e),generationMethod:"legacy"};t?.("agent1-done",`Agent 1 ✅ — ${n.sections.length} sekcí, ${n.estimatedTimeMinutes} min`),t?.("agent2","Agent 2: Navrhuji vizuální layout stránky učebnice...");const p=await Be(e,n,s,"textbook",l,t);t?.("agent2-done","Agent 2 ✅ — layout připraven"),t?.("saving","Ukládám list učebnice...");let r;if(p.blocks)r=p.blocks;else if(p.text){const d=p.text;r=p.template?Kt(p.template,d,e):$e(d,e)}else return t?.("fallback","Agent 2 selhal → záložní generátor"),{...await ve(e),generationMethod:"legacy"};const a=`worksheet-${Date.now()}`,u={id:a,title:n.title||`${e.topic} - List učebnice`,blocks:r,settings:{showAnswerKey:!1,pageSize:"A4",margins:"normal"},metadata:{subject:e.subjectCode,grade:e.grade,topic:e.topic,estimatedTime:n.estimatedTimeMinutes,sourceDatasetId:e.id},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return oe(u),t?.("done",`Hotovo ✅ — uloženo ${r.length} bloků`),{success:!0,id:a,preview:p.text||"",generationMethod:"two-agent",contentPlan:n}}async function Ht(e,t,o){t?.("rag","Hledám podobné listy učebnice v RAG databázi...");const i=e.content?.keyTerms?.map(p=>p.term)??[],l=await le({topic:e.topic,subject:e.subjectCode,grade:e.grade,keyTerms:i,matchCount:3}),s=ce(l,"textbook");t?.("rag-done",`Nalezeno ${l.length} podobných listů v RAG databázi`,{examples:l,ragSection:s}),o&&t?.("source-text","📄 Učební text načten — použiji ho jako zdroj obsahu..."),t?.("agent1","Agent 1: Plánuji obsah stránky učebnice...");const n=await ze(e,s,"textbook",o);return n?(t?.("agent1-done",`Agent 1 hotovo — ${n.sections.length} sekcí, ${n.estimatedTimeMinutes} min`),{success:!0,contentPlan:n,ragCount:l.length}):{success:!1,error:"Agent 1 selhal — nepodařilo se sestavit plán obsahu"}}async function Gt(e,t,o,i=[],l){l&&(Y=l),o?.("agent2","Skládám obsah do bloků...");const s=[];let n=0;const p=new Map;console.log("[TextbookGen] selectedImages from plan:",JSON.stringify(t.selectedImages?.map(h=>({url:h.url?.substring(0,40),sectionIndex:h.sectionIndex}))));for(const h of t.selectedImages||[]){const m=h.url,y=h.sectionIndex;m&&y!==void 0&&y!==null&&!p.has(y)&&p.set(y,{url:m,title:h.title||""})}console.log("[TextbookGen] imagesBySectionIndex keys:",[...p.keys()]);const r=new Set(["vocabulary","summary"]),a=h=>r.has(h);s.push({id:O(),type:"heading",order:n++,width:"full",gridSpan:12,content:{text:t.title||e.topic,level:"h1"}});for(let h=0;h<t.sections.length;h++){const m=t.sections[h],y=p.get(h),g=a(m.type);s.push({id:O(),type:"heading",order:n++,width:"full",gridSpan:12,content:{text:m.title,level:"h2"}}),g?s.push({id:O(),type:"paragraph",order:n++,width:"full",gridSpan:12,content:{html:`<p>${m.content||""}</p>`},visualStyles:{displayPreset:"infobox",backgroundColor:m.type==="summary"?"#f0fdf4":"#dbeafe",borderColor:m.type==="summary"?"#22c55e":"#3b82f6",borderRadius:12}}):y?(s.push({id:O(),type:"paragraph",order:n++,width:"half",gridSpan:6,content:{html:`<p>${m.content||""}</p>`}}),s.push({id:O(),type:"image",order:n++,width:"half",gridSpan:6,content:{url:y.url,alt:y.title,caption:y.title,alignment:"center",size:100}})):s.push({id:O(),type:"paragraph",order:n++,width:"full",gridSpan:12,content:{html:`<p>${m.content||""}</p>`}})}console.log("[TextbookGen] Built",s.length,"blocks (rule-based layout)");const u=e.media?.charts||[];for(const h of u)!h.columns||!h.rows||h.rows.length===0||s.push({id:O(),type:"chart",order:n++,width:"full",gridSpan:12,content:{chartType:h.chartType||"bar",chartTitle:h.title||"",chartColumns:h.columns,chartRows:h.rows,chartHeight:320}});const d=e.media?.imageGroups||[];for(const h of d){const m=(h.subjects||[]).filter(y=>y.status==="done"&&y.imageUrl);m.length!==0&&(s.push({id:O(),type:"heading",order:n++,width:"full",gridSpan:12,content:{text:h.title,level:"h2"}}),s.push({id:O(),type:"image",order:n++,width:"full",gridSpan:12,content:{url:m[0].imageUrl,gallery:m.map(y=>y.imageUrl),galleryCaptions:m.map(y=>y.name),gridColumns:Math.min(m.length,4),containerHeight:220}}))}u.length>0||d.length>0?o?.("agent2-done",`✅ Obsah poskládán (${s.length} bloků, ${u.filter(h=>h.columns).length} grafů, ${d.length} skupin)`):o?.("agent2-done",`✅ Obsah poskládán (${s.length} bloků)`),o?.("saving",`Ukládám list učebnice (${s.length} bloků)...`);const f=`worksheet-${Date.now()}`,c={id:f,title:t.title||`${e.topic} - List učebnice`,blocks:s,settings:{showAnswerKey:!1,pageSize:"A4",margins:"normal"},metadata:{subject:e.subjectCode,grade:e.grade,topic:e.topic,estimatedTime:t.estimatedTimeMinutes,sourceDatasetId:e.id,layoutMode:"grid",gridColumns:12},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return oe(c),o?.("done",`Uloženo (${s.length} bloků)`),{success:!0,id:f,preview:"",generationMethod:"two-agent",contentPlan:t}}async function ve(e){console.log("[Generator] Using legacy worksheet generator...");const t=W(e),o=ne("worksheet"),i=`PROMPT PRO VYTVOŘENÍ TEXTOVÉHO PRACOVNÍHO LISTU

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

${o}`,l=`Jsi přísný generátor pracovních listů. MUSÍŠ dodržet PŘESNÝ formát výstupu.

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
`;console.log("[Generator] Worksheet prompt:",i),console.log("[Generator] Full prompt being sent:",i.substring(0,500)+"...");try{const s=await R([{role:"system",content:l},{role:"user",content:i}],"gemini-3-flash",{temperature:.5,max_tokens:8192});console.log("[Generator] Raw worksheet response:",s);const n=s.trim().startsWith("HEADER:"),p=n?s:ot(s);console.log("[Generator] Using normalization:",!n),console.log("[Generator] Final response:",p.substring(0,500)+"...");const r=$e(p,e),a=`worksheet-${Date.now()}`,u={id:a,title:`${e.topic} - Pracovní list`,blocks:r,settings:{showAnswerKey:!0,pageSize:"A4",margins:"normal"},metadata:{subject:e.subjectCode,grade:e.grade,topic:e.topic,sourceDatasetId:e.id},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};oe(u);const d=s;return console.log("[Generator] Worksheet saved:",a),{success:!0,id:a,preview:d}}catch(s){return console.error("[Generator] Worksheet error:",s),{success:!1,error:String(s)}}}function Kt(e,t,o){const i=new Map,l=/\[SLOT\s+(\d+)\]\s*\n?([\s\S]*?)(?=\[SLOT\s+\d+\]|$)/g;let s;for(;(s=l.exec(t))!==null;){const f=parseInt(s[1],10),c=s[2].trim();i.set(f,c)}console.log("[TemplateParser] Parsed slots:",i.size,"of",e.length,"template slots"),console.log("[TemplateParser] Slot IDs found:",Array.from(i.keys()).join(", "));const n=[];let p=0;const r=[...o.media?.generatedIllustrations||[],...o.media?.generatedPhotos||[],...o.media?.images||[]];let a=0;const u=f=>{const c=f.trim();if(c.startsWith("http://")||c.startsWith("https://"))return{url:c,caption:""};if(c.length>0){const h=c.toLowerCase().replace(/[^a-z0-9]/g,""),m=r.find(y=>{const g=(y.title||y.name||"").toLowerCase().replace(/[^a-z0-9]/g,"");return g&&(g.includes(h)||h.includes(g))});if(m)return{url:m.url||"",caption:c}}if(r.length>0){const h=r[a%r.length];return a++,{url:h.url||"",caption:c}}return{url:"",caption:c}};let d=0;for(;d<e.length;){const f=e[d],c=i.get(f.id)||"";if(f.width==="half"&&d+1<e.length&&e[d+1].width==="half"){const m=e[d+1],y=i.get(m.id)||"";n.push(te(f,c,p++,"half",o,u)),n.push(te(m,y,p++,"half",o,u)),d+=2}else n.push(te(f,c,p++,"full",o,u)),d++}return console.log("[TemplateParser] Built",n.length,"blocks"),n}function te(e,t,o,i,l,s){const n={id:O(),order:o,width:i,...i==="half"?{widthPercent:50,gridSpan:6}:{}};switch(e.type){case"header":return{...n,width:"full",type:"header-footer",content:{variant:"header",columns:1,showName:!0,showSurname:!0,showClass:!0,showGrade:!0}};case"footer":return{...n,width:"full",type:"header-footer",content:{variant:"footer",columns:1,showFeedback:!0,feedbackType:"smileys",feedbackCount:3,feedbackText:"Zpětná vazba:"}};case"heading-h1":return{...n,width:"full",type:"heading",content:{text:t||l.topic,level:"h1"}};case"heading":return{...n,type:"heading",content:{text:t||"Sekce",level:"h2"}};case"paragraph":{const p=t.startsWith("<")?t:`<p>${t}</p>`;return{...n,type:"paragraph",content:{html:p}}}case"image":{const{url:p,caption:r}=s(t);return{...n,type:"image",content:{url:p,alt:r,caption:r,size:100,alignment:"center",showCaption:!!r}}}case"infobox":{const p=t.startsWith("<")?t:`<p>${t}</p>`;return{...n,type:"paragraph",content:{html:p},visualStyles:{displayPreset:"infobox",backgroundColor:"#dbeafe",borderColor:"#3b82f6",borderRadius:12}}}case"table":{const p=t.split(`
`).map(c=>c.trim()).filter(c=>c.length>0).map(c=>c.split("|").map(h=>h.trim()));if(p.length===0)return{...n,type:"paragraph",content:{html:`<p>${t}</p>`}};const r=p[0],a=p.slice(1),u=r.map(c=>`<th><p>${c}</p></th>`).join(""),d=a.map(c=>`<tr>${c.map((m,y)=>`<td><p>${m||r[y]?m:""}</p></td>`).join("")}</tr>`).join(""),f=`<table><tbody><tr>${u}</tr>${d}</tbody></table>`;return{...n,type:"table",content:{html:f,rows:p.length,columns:r.length,hasHeader:!0,hasBorder:!0,hasRoundedCorners:!0}}}case"connect-pairs":{const r=t.split(`
`).filter(a=>a.includes("|")).map((a,u)=>{const[d,f]=a.split("|").map(c=>c.trim());return{id:`pair-${o}-${u}`,left:{id:`left-${o}-${u}`,type:"text",content:d||""},right:{id:`right-${o}-${u}`,type:"text",content:f||""}}});return r.length===0?{...n,type:"paragraph",content:{html:`<p>${t}</p>`}}:{...n,type:"connect-pairs",content:{instruction:"Spoj správné dvojice",pairs:r,shuffleSides:!0}}}case"fill-blank":{const p=t.match(/^([\s\S]+?)\s*=\s*(.+)$/);if(p){const r=p[1].trim(),a=p[2].trim(),u=r.split(/_{2,}/),d=[];return u.forEach((f,c)=>{f&&d.push({type:"text",content:f}),c<u.length-1&&d.push({type:"blank",id:`blank-${o}-${c}`,correctAnswer:a,acceptedAnswers:[a]})}),{...n,type:"fill-blank",content:{instruction:"",segments:d}}}return{...n,type:"paragraph",content:{html:`<p>${t}</p>`}}}case"free-answer":return{...n,type:"free-answer",content:{question:t,lines:3}};case"multiple-choice":{const p=t.split(`
`).map(d=>d.trim()).filter(Boolean),r=p[0]||"",a=[],u=[];return p.slice(1).forEach((d,f)=>{const c=d.match(/^([A-Da-d])\)\s*(.+)/);if(c){let h=c[2].trim();const m=h.endsWith("*");m&&(h=h.slice(0,-1).trim());const y=`opt-${o}-${f}`;a.push({id:y,text:h}),m&&u.push(y)}}),r&&a.length>0?{...n,type:"multiple-choice",content:{question:r,options:a,correctAnswers:u.length>0?u:[a[0]?.id||"opt-0"],allowMultiple:!1}}:{...n,type:"paragraph",content:{html:`<p>${t}</p>`}}}default:return{...n,type:"paragraph",content:{html:`<p>${t}</p>`}}}}function $e(e,t){const o=[];let i=0;if(console.log("[Worksheet Parser] Input text length:",e?.length||0),console.log("[Worksheet Parser] First 500 chars:",e?.substring(0,500)),!e||e.trim().length<50)return console.error("[Worksheet Parser] Text is empty or too short!"),[{id:O(),type:"heading",order:0,width:"full",content:{text:`${t.topic} - Pracovní list`,level:"h1"}},{id:O(),type:"paragraph",order:1,width:"full",content:{html:"<p>Generování pracovního listu selhalo. Zkuste to prosím znovu.</p>"}}];const l=e.split(`
`);let s="",n=[],p=!1;const r=()=>{if(!s||n.length===0)return;const a=n.join(`
`).trim(),u=p?"half":"full";switch(s.toUpperCase()){case"HEADER":o.push({id:O(),type:"header-footer",order:i++,width:"full",content:{variant:"header",columns:1,showName:!0,showSurname:!0,showClass:!0,showGrade:!0}});break;case"FOOTER":o.push({id:O(),type:"header-footer",order:i++,width:"full",content:{variant:"footer",columns:1,showFeedback:!0,feedbackType:"smileys",feedbackCount:3,feedbackText:"Zpětná vazba:"}});break;case"HEADING-H1":o.push({id:O(),type:"heading",order:i++,width:"full",content:{text:a,level:"h1"}});break;case"HEADING":o.push({id:O(),type:"heading",order:i++,width:"full",content:{text:a,level:"h2"}});break;case"PARAGRAPH":o.push({id:O(),type:"paragraph",order:i++,width:u,widthPercent:p?50:void 0,content:{html:`<p>${a}</p>`}});break;case"INFOBOX":o.push({id:O(),type:"paragraph",order:i++,width:u,widthPercent:p?50:void 0,content:{html:`<p>${a}</p>`},visualStyles:{displayPreset:"infobox",backgroundColor:"#dbeafe",borderColor:"#3b82f6",borderRadius:12}});break;case"OBRÁZEK":case"IMAGE":{const g=a.replace(/- HALF LAYOUT/i,"").trim();let b="",v=g;if(g.startsWith("http://")||g.startsWith("https://"))b=g,v="";else{const A=g.toLowerCase().replace(/[^a-z0-9]/g,""),j=w=>{const H=w.toLowerCase().replace(/[^a-z0-9]/g,"");return H===A||H.includes(A)||A.includes(H)},N=(t.media?.images||[]).find(w=>j(w.title||"")),S=(t.media?.generatedIllustrations||[]).find(w=>j(w.name||w.title||"")),D=(t.media?.generatedPhotos||[]).find(w=>j(w.name||w.title||""));b=(N||S||D)?.url||"",b?console.log("[Parser] ✅ Image resolved by name:",g,"->",b.slice(0,60)):(b=[...t.media?.generatedIllustrations||[],...t.media?.generatedPhotos||[],...t.media?.images||[]][0]?.url||"",console.log("[Parser] Image not matched by name, using first available:",b?"found":"none"))}o.push({id:O(),type:"image",order:i++,width:"half",widthPercent:50,content:{url:b,alt:v,caption:v,size:100,alignment:"center"}});break}case"MULTIPLE-CHOICE":const d=a.split(`
`).filter(g=>g.trim()),f=d[0]?.trim()||"",c=[],h=[];d.slice(1).forEach((g,b)=>{const v=g.match(/^([A-D])\)\s*(.+)/i);if(v){let A=v[2].trim();const j=A.endsWith("*");j&&(A=A.slice(0,-1).trim());const N=`opt-${b}`;c.push({id:N,text:A}),j&&h.push(N)}}),f&&c.length>0&&o.push({id:O(),type:"multiple-choice",order:i++,width:"full",content:{question:f,options:c,correctAnswers:h.length>0?h:["opt-0"],allowMultiple:!1}});break;case"FILL-BLANK":const m=a.match(/(.+?)=\s*(.+)/);if(m){const g=m[1].trim(),b=m[2].trim(),v=g.split(/___+/),A=[];v.forEach((j,N)=>{j&&A.push({type:"text",content:j}),N<v.length-1&&A.push({type:"blank",id:`blank-${i}-${N}`,correctAnswer:b,acceptedAnswers:[b]})}),o.push({id:O(),type:"fill-blank",order:i++,width:"full",content:{instruction:"",segments:A}})}break;case"FREE-ANSWER":o.push({id:O(),type:"free-answer",order:i++,width:"full",content:{question:a,lines:3}});break;case"CONNECT-PAIRS":const y=[];a.split(`
`).forEach((g,b)=>{const v=g.match(/(.+?)\s*\|\s*(.+)/);v&&y.push({id:`pair-${b}`,left:{id:`left-${b}`,type:"text",content:v[1].trim()},right:{id:`right-${b}`,type:"text",content:v[2].trim()}})}),y.length>0&&o.push({id:O(),type:"connect-pairs",order:i++,width:"full",content:{instruction:"Spoj správné dvojice",pairs:y,shuffleSides:!0}});break}n=[],p=!1};for(const a of l){const u=a.match(/^(HEADER|FOOTER|HEADING-H1|HEADING|PARAGRAPH|INFOBOX|OBRÁZEK|IMAGE|MULTIPLE-CHOICE|FILL-BLANK|FREE-ANSWER|CONNECT-PAIRS|TABLE):\s*(.*)/i);if(u){r(),s=u[1];const d=u[2]?.trim()||"";p=d.toUpperCase().includes("HALF LAYOUT")||a.toUpperCase().includes("HALF LAYOUT");const f=d.replace(/- HALF LAYOUT/i,"").replace(/HALF LAYOUT/i,"").trim();f&&n.push(f)}else a.trim()&&s&&n.push(a.trim())}return r(),o.length===0&&(console.warn("[Worksheet Parser] No blocks parsed! Adding fallback."),o.push({id:O(),type:"heading",order:i++,width:"full",content:{text:`${t.topic} - Pracovní list`,level:"h1"}})),console.log("[Worksheet Parser] Generated",o.length,"blocks"),console.log("[Worksheet Parser] Block types:",o.map(a=>a.type).join(", ")),o}async function Vt(e){console.log("[Generator] Generating text...");const t=W(e),o=ne("text"),i=(h,m)=>(m.priority?1:0)-(h.priority?1:0),l=(e.media?.images||[]).filter(h=>!h.excluded).sort(i),s=(e.media?.generatedIllustrations||[]).filter(h=>!h.excluded).sort(i),n=(e.media?.generatedPhotos||[]).filter(h=>!h.excluded).sort(i),p=(h,m)=>{const y=h[m]||"Bez názvu";return h.priority?`⭐ "${y}" (PRIORITNÍ - POUŽIJ!)`:`"${y}"`},r=l.length>0?`
🖼️ DOSTUPNÉ OBRÁZKY Z WEBU (vyber 2-3 relevantní):
${l.map((h,m)=>`  ${m+1}. ${p(h,"title")}`).join(`
`)}`:"",a=s.length>0?`
🎨 DOSTUPNÉ ILUSTRACE (preferuj tyto! vyber 3-4):
${s.map((h,m)=>`  ${m+1}. ${p(h,"name")}`).join(`
`)}`:"",u=n.length>0?`
📷 DOSTUPNÉ FOTKY (vyber 1-2 relevantní):
${n.map((h,m)=>`  ${m+1}. ${p(h,"name")}`).join(`
`)}`:"",d=(e.media?.imageGroups||[]).filter(h=>(h.subjects||[]).some(m=>m.status==="done"&&m.imageUrl)),f=d.length>0?`
🖼️ SKUPINY OBRÁZKŮ (GALERIE) - pod vhodné H2 přidej SkupinaH2: Název skupiny:
${d.map((h,m)=>`  ${m+1}. "${h.title}" (${(h.subjects||[]).filter(y=>y.status==="done"&&y.imageUrl).length} obrázků)`).join(`
`)}`:"",c=`Napiš PODROBNÝ výukový text k tématu "${e.topic}" pro ${e.grade}. třídu ZŠ.

${t}${o}${a}${u}${r}${f}

FORMÁT TEXTU (NEZAČÍNEJ H1 nadpisem - ten je automaticky z názvu dokumentu):

## Podnadpis sekce 1
IlustraceH2: Název ilustrace ze seznamu (PREFERUJ - pro vygenerované ikony/ilustrace)
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
- PREFERUJ ILUSTRACE (50%), pak FOTKY (30%), pak OBRÁZKY Z WEBU (20%)!
- IlustraceH2: [přesný název z 🎨 DOSTUPNÉ ILUSTRACE] - PŘEDNOSTNĚ POD H2 nadpis
- FotkaH2: [přesný název z 📷 DOSTUPNÉ FOTKY] - pro AI fotografie
- ObrázekH2: [přesný název z 🖼️ DOSTUPNÉ OBRÁZKY Z WEBU] - pouze jako doplněk
- SkupinaH2: [přesný název ze 🖼️ SKUPINY OBRÁZKŮ] - použij pro H2 kde se hodí zobrazit galerii více obrázků
- U většiny H2 použij ilustraci nebo fotku, obrázky z webu jen výjimečně
- INFOBOX modrý: pro zajímavosti, "věděli jste?" (info)
- INFOBOX zelený: pro tipy a rady (tip)
- INFOBOX oranžový: pro upozornění (warning)
- INFOBOX fialový: pro shrnutí (summary)
- Srozumitelný jazyk pro ${e.grade}. třídu
- Každý obrázek/ilustraci použij MAX 1x
- INFOBOX musí mít nadpis a text na dalším řádku
- VŽDY přidej závěrečné sekce: Důležité pojmy, Důležitá data, Důležité osobnosti`;try{const h=await R([{role:"user",content:c}],"gemini-3-flash",{temperature:.7,max_tokens:4096});console.log("[Generator] Raw text response:",h.substring(0,500));const m=[],y=h.split(`
`);let g="";for(let I=0;I<y.length;I++){const _=y[I].trim(),k=_.match(/^##\s*(.+)/);k&&(g=k[1].trim());const $=_.match(/^ObrázekH2:\s*(.+)/i),E=_.match(/^IlustraceH2:\s*(.+)/i),C=_.match(/^FotkaH2:\s*(.+)/i),F=_.match(/^SkupinaH2:\s*(.+)/i);if($&&g){const P=$[1].trim().toLowerCase(),B=e.media?.images?.filter(L=>!L.excluded)?.find(L=>{const x=(L.title||"").toLowerCase();return x===P||x.includes(P)||P.includes(x)||x.replace(/[^a-z0-9]/g,"").includes(P.replace(/[^a-z0-9]/g,""))});B?.url&&(m.push({id:crypto.randomUUID(),heading:g,type:"image",imageUrl:B.url,imageSteps:[{id:crypto.randomUUID(),url:B.url,description:B.title}]}),console.log("[Generator] Found image for H2:",g,"->",B.title))}else if(E&&g){const P=E[1].trim().toLowerCase(),B=e.media?.generatedIllustrations?.filter(L=>!L.excluded)?.find(L=>{const x=(L.name||"").toLowerCase();return x===P||x.includes(P)||P.includes(x)||x.replace(/[^a-z0-9]/g,"").includes(P.replace(/[^a-z0-9]/g,""))});B?.url&&(m.push({id:crypto.randomUUID(),heading:g,type:"image",imageUrl:B.url,imageSteps:[{id:crypto.randomUUID(),url:B.url,description:B.name}]}),console.log("[Generator] Found illustration for H2:",g,"->",B.name))}else if(C&&g){const P=C[1].trim().toLowerCase(),B=e.media?.generatedPhotos?.filter(L=>!L.excluded)?.find(L=>{const x=(L.name||"").toLowerCase();return x===P||x.includes(P)||P.includes(x)||x.replace(/[^a-z0-9]/g,"").includes(P.replace(/[^a-z0-9]/g,""))});B?.url&&(m.push({id:crypto.randomUUID(),heading:g,type:"image",imageUrl:B.url,imageSteps:[{id:crypto.randomUUID(),url:B.url,description:B.name}]}),console.log("[Generator] Found photo for H2:",g,"->",B.name))}else if(F&&g){const P=F[1].trim().toLowerCase(),B=(e.media?.imageGroups||[]).find(L=>{const x=(L.title||"").toLowerCase();return x===P||x.includes(P)||P.includes(x)||x.replace(/[^a-z0-9]/g,"").includes(P.replace(/[^a-z0-9]/g,""))});if(B){const L=(B.subjects||[]).filter(x=>x.status==="done"&&x.imageUrl);L.length>0&&(m.push({id:crypto.randomUUID(),heading:g,type:"image",imageUrl:L[0].imageUrl,imageSteps:L.map(x=>({id:crypto.randomUUID(),url:x.imageUrl,description:x.name}))}),console.log("[Generator] Found image group for H2:",g,"->",B.title,`(${L.length} subjects)`))}}}let b=h.replace(/^ObrázekH2:.*$/gm,"");b=b.replace(/^IlustraceH2:.*$/gm,""),b=b.replace(/^FotkaH2:.*$/gm,""),b=b.replace(/^SkupinaH2:.*$/gm,""),b=b.replace(/^#\s+.+$/gm,"");const v={modrý:"info",červený:"danger",zelený:"tip",oranžový:"warning",fialový:"summary"};b=b.replace(/INFOBOX (modrý|červený|zelený|oranžový|fialový):\s*(.+?)(?:\n([^\n#]*))?(?=\n\n|\n##|$)/gim,(I,_,k,$)=>{const E=v[_.toLowerCase()]||"info",C=$?$.trim():"";return`
<div data-type="callout" data-callout-type="${E}" class="callout callout-${E}"><p><strong>${k.trim()}</strong></p>${C?`<p>${C}</p>`:""}</div>
`});let A=_e(b);const j=(I,_)=>(_.priority?1:0)-(I.priority?1:0),N=(e.media?.images||[]).filter(I=>!I.excluded).sort(j),S=(e.media?.generatedIllustrations||[]).filter(I=>!I.excluded).sort(j),D=(e.media?.generatedPhotos||[]).filter(I=>!I.excluded).sort(j);if(console.log("[Generator] Adding gallery with",N.length,"web images,",S.length,"illustrations, and",D.length,"photos"),N.length>0||S.length>0||D.length>0){A+=`
<h2>🖼️ Galerie</h2>
`,A+='<div class="image-gallery not-prose" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px;">';for(const I of S)A+=`<figure data-gallery-image data-image-url="${I.url}" data-image-title="🎨 ${I.name}" style="margin: 0; text-align: center; cursor: pointer;">`,A+=`<img src="${I.url}" alt="${I.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />`,A+=`<figcaption style="font-size: 12px; color: #666; margin-top: 4px;">🎨 ${I.name}</figcaption>`,A+="</figure>",m.find(_=>_.imageUrl===I.url)||m.push({id:crypto.randomUUID(),heading:"🖼️ Galerie",type:"image",imageUrl:I.url,imageSteps:[{id:crypto.randomUUID(),url:I.url,description:I.name}]});for(const I of D)A+=`<figure data-gallery-image data-image-url="${I.url}" data-image-title="📷 ${I.name}" style="margin: 0; text-align: center; cursor: pointer;">`,A+=`<img src="${I.url}" alt="${I.name}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />`,A+=`<figcaption style="font-size: 12px; color: #666; margin-top: 4px;">📷 ${I.name}</figcaption>`,A+="</figure>",m.find(_=>_.imageUrl===I.url)||m.push({id:crypto.randomUUID(),heading:"🖼️ Galerie",type:"image",imageUrl:I.url,imageSteps:[{id:crypto.randomUUID(),url:I.url,description:I.name}]});for(const I of N)A+=`<figure data-gallery-image data-image-url="${I.url}" data-image-title="🌐 ${I.title}" style="margin: 0; text-align: center; cursor: pointer;">`,A+=`<img src="${I.url}" alt="${I.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />`,A+=`<figcaption style="font-size: 12px; color: #666; margin-top: 4px;">🌐 ${I.title}</figcaption>`,A+="</figure>",m.find(_=>_.imageUrl===I.url)||m.push({id:crypto.randomUUID(),heading:"🖼️ Galerie",type:"image",imageUrl:I.url,imageSteps:[{id:crypto.randomUUID(),url:I.url,description:I.title}]});A+="</div>",A+="<style>.image-gallery figure:hover { opacity: 0.9; }</style>"}const z=e.id+"-text",w={type:"text",id:z,title:e.topic+" - Učební text",status:"draft",createdAt:new Date().toISOString()},H={id:z,title:e.topic,content:A,documentType:"lesson",sectionImages:m};console.log("[Generator] 💾 Saving document:",{id:z,title:H.title,contentLength:H.content?.length});try{Ct({id:z,title:e.topic,name:e.topic,type:"document",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},H),console.log(`[Generator] ✅ Document saved to localStorage: ${z}`),await be({id:z,title:e.topic,content:A,documentType:"lesson",sectionImages:m})?console.log(`[Generator] ✅ Document synced to Supabase: ${z}`):console.warn(`[Generator] ⚠️ Supabase sync failed for ${z}, will retry via queue`);const _=localStorage.getItem(`vivid-doc-${z}`);console.log("[Generator] 💾 localStorage verification:",_?"SUCCESS":"FAILED")}catch(I){console.error(`[Generator] ❌ saveDocument failed for ${z}:`,I);try{localStorage.setItem(`vivid-doc-${z}`,JSON.stringify(H)),console.log(`[Generator] ✅ Fallback localStorage save OK for ${z}`)}catch(_){console.error("[Generator] ❌ Fallback also failed:",_)}}console.log("[Generator] Text saved with",m.length,"sectionImages (including gallery)");const Z=h.replace(/^ObrázekH2:\s*(.+)$/gm,"🖼️ [$1]").replace(/INFOBOX (modrý|červený):\s*/gi,"📦 INFOBOX: ");return console.log("[Generator] Text saved:",z),{success:!0,id:z,preview:Z}}catch(h){return console.error("[Generator] Text error:",h),{success:!1,error:String(h)}}}function _e(e){return e.replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n\n/g,"</p><p>").replace(/^(?!<[a-z])(.+)$/gm,"<p>$1</p>").replace(/<p><\/p>/g,"").replace(/<p>(<figure.*?<\/figure>)<\/p>/gs,"$1").replace(/<p>(<div.*?<\/div>)<\/p>/gs,"$1")}async function Mt(e){console.log("[Generator] Generating test...");const t=W(e),o=ne("test"),i=e.media?.images||[],l=e.media?.generatedIllustrations||[];let s="";i.length>0&&(s+=`
🖼️ DOSTUPNÉ OBRÁZKY:
${i.map((r,a)=>`  ${a+1}. "${r.title}"`).join(`
`)}`),l.length>0&&(s+=`
🎨 DOSTUPNÉ ILUSTRACE:
${l.map((r,a)=>`  ${a+1}. "${r.name}"`).join(`
`)}`),console.log(`[Generator] Test media: ${i.length} images, ${l.length} illustrations`);const n=o?"":`
Vytvoř:
- 3 ABC otázky
- 2 otevřené otázky`,p=`Vytvoř písemku k tématu "${e.topic}" pro ${e.grade}. třídu.

${t}
${o||""}
${s}
${n}

Formát odpovědi:
Pro ABC otázku:
OTÁZKA X (ABC):
[text otázky]
OBRÁZEK: [název obrázku/ilustrace ze seznamu - volitelné]
A) [možnost]
B) [možnost *pokud správná]
C) [možnost]

Pro ABC otázku s obrázkem (Co je na obrázku?):
OTÁZKA X (ABC):
Co je na tomto obrázku?
OBRÁZEK: Řecká helma hoplíta
A) Špatná odpověď
B) Správná odpověď *
C) Špatná odpověď
D) Špatná odpověď

Pro otevřenou otázku:
OTÁZKA X (OTEVŘENÁ):
[otázka vyžadující zamyšlení a vlastní odpověď]

PRAVIDLA PRO OBRÁZKY:
- Používej PŘESNÉ názvy obrázků (🖼️) nebo ilustrací (🎨) ze seznamu výše
- Přidej obrázek/ilustraci k 1-2 ABC otázkám
- Minimálně 1 otázka by měla být typu "Co je na tomto obrázku?" nebo "Co vidíš na ilustraci?"
- U otevřených otázek obrázky nepoužívej`;console.log("[Generator] Test prompt:",p);try{const r=await R([{role:"user",content:p}],"gemini-3-flash",{temperature:.7,max_tokens:2048}),a=Zt(r,e),u=`test-${Date.now()}`,d={id:u,title:`Písemka: ${e.topic}`,slides:a,settings:{showPoints:!0,allowBack:!1,shuffleSlides:!1,shuffleOptions:!0,timeLimit:30,passingScore:50},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),sourceDatasetId:e.id};try{pe(d)}catch(h){console.warn(`[Generator] localStorage failed for test ${u}:`,h)}await q(d)||console.warn(`[Generator] Supabase sync failed for test ${u}`);const c=a.slice(1).map((h,m)=>{const y=h,g=y.media?.url,b=g?`
🖼️ Obrázek: ${g.split("/").pop()?.split("?")[0]||"přiložen"}`:"";if(y.question&&y.options){const v=y.options.map(A=>`${A.label}) ${A.content}${A.isCorrect?" ✓":""}`).join(`
`);return`**Otázka ${m+1}:** ${y.question}${b}
${v}`}else if(y.question)return`**Otázka ${m+1} (otevřená):** ${y.question}`;return""}).filter(Boolean).join(`

`);return console.log("[Generator] Test saved:",u),{success:!0,id:u,preview:c}}catch(r){return console.error("[Generator] Test error:",r),{success:!1,error:String(r)}}}function Zt(e,t){const o=[];return o.push({...ie(0,"title-content"),title:`✏️ Písemka: ${t.topic}`,content:`<p><strong>Jméno:</strong> _________________</p><p><strong>Třída:</strong> ${t.grade}._____</p>`}),e.split(/OTÁZKA\s*\d+/i).filter(l=>l.trim()).forEach((l,s)=>{const n=l.trim().split(`
`).filter(a=>a.trim());if(n.length===0)return;const p=n[0].toLowerCase();let r;for(const a of n){const u=a.match(/^OBRÁZEK:\s*(.+)/i);if(u){const d=u[1].trim().toLowerCase(),f=t.media?.images?.find(c=>{const h=(c.title||"").toLowerCase();return h===d||h.includes(d)||d.includes(h)||h.replace(/[^a-z0-9]/g,"").includes(d.replace(/[^a-z0-9]/g,""))||d.replace(/[^a-z0-9]/g,"").includes(h.replace(/[^a-z0-9]/g,""))});if(f?.url)r=f.url,console.log("[Parser] ✅ Test found image:",d);else{const c=t.media?.generatedIllustrations?.find(h=>{const m=(h.name||"").toLowerCase();return m===d||m.includes(d)||d.includes(m)||m.replace(/[^a-z0-9]/g,"").includes(d.replace(/[^a-z0-9]/g,""))||d.replace(/[^a-z0-9]/g,"").includes(m.replace(/[^a-z0-9]/g,""))});c?.url&&(r=c.url,console.log("[Parser] ✅ Test found illustration:",d,"->",c.name))}}}if(p.includes("abc")||p.includes("vyber")){const a=n[1]?.trim()||"",u=[];n.slice(2).forEach(d=>{const f=d.match(/^([A-D])\)\s*(.+)/i);if(f){let c=f[2].trim();const h=c.endsWith("*");h&&(c=c.slice(0,-1).trim()),u.push({id:f[1].toLowerCase(),label:f[1].toUpperCase(),content:c,isCorrect:h})}}),!u.some(d=>d.isCorrect)&&u.length>0&&(u[0].isCorrect=!0),a&&u.length>=2&&o.push({...Ae(o.length),question:a,options:u,points:1,...r?{media:{type:"image",url:r}}:{}})}else if(p.includes("otevřen")||p.includes("odpověz")){const a=n[1]?.trim()||n[0].replace(/\([^)]+\)/g,"").trim();a&&o.push({...me(o.length),question:a,correctAnswers:[],points:3})}}),o}async function Jt(e){console.log("[Generator] Generating E-U-R lesson...");const t=W(e),o=ne("lesson"),i=e.media?.images||[],l=e.media?.generatedIllustrations||[],s=[...i.slice(0,8).map(a=>`🖼️ "${a.title}"`),...l.slice(0,5).map(a=>`🎨 "${a.name}"`)],n=e.content?.keyTerms?.slice(0,5).map(a=>a.term).join(", ")||"",p=e.content?.keyFacts?.slice(0,3).join("; ")||"",r=`Vytvoř BADATELSKOU E-U-R lekci o tématu "${e.topic}" pro ${e.grade}. třídu.

PRVNÍ KROK - VYBER JEDNO SILNÉ METODICKÉ TÉMA:
Na základě kontextu níže vyber JEDNO konkrétní metodické/badatelské téma, které:
- Je relevantní k "${e.topic}" (NE obecné téma jako "demokracie" pokud to není přímo součást látky!)
- Umožňuje badatelský přístup (žáci mohou něco objevit, zjistit, přijít na to)
- Je zajímavé a provokuje k diskuzi
- Vychází z konkrétních pojmů/faktů: ${n}

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
${s.join(`
`)}

PRAVIDLA:
- Každý slide MUSÍ začínat: INFO: nebo HLASOVÁNÍ: nebo NÁSTĚNKA: nebo ABC:
- OBRÁZEK: přidej ke 4-5 slidům (INFO i ABC) - použij PŘESNÝ název z výše!
- Lekce musí být o konkrétním tématu "${e.topic}", NE o obecných pojmech!
- Metodické téma vyber na základě faktů: ${p}
- MOŽNOSTI: jen u HLASOVÁNÍ kde chceš vlastní odpovědi
- ABC musí mít 4 možnosti, správná má * na konci`;try{const a=await R([{role:"user",content:r}],"gemini-3-flash",{temperature:.7,max_tokens:2048}),u=nt(a,e),d=`lesson-${Date.now()}`,f={id:d,title:`Lekce: ${e.topic}`,slides:u,settings:{showPoints:!1,allowBack:!0,shuffleSlides:!1,shuffleOptions:!1,timeLimit:null,passingScore:null},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};try{pe(f)}catch(m){console.warn(`[Generator] localStorage failed for lesson ${d}:`,m)}await q(f)||console.warn(`[Generator] Supabase sync failed for lesson ${d}`);const h=u.map((m,y)=>{const g=m,b=y<3?"🔵 EVOKACE":y<u.length-2?"🟢 UVĚDOMĚNÍ":"🟣 REFLEXE";if(g.type==="info"){const A=g.layout?.blocks?.some(N=>N.type==="image")?" 🖼️":"",j=g.background?" 🎨":"";return`${b} | 📚 **${g.title||"Info"}**${A}${j}
${g.content?.replace(/<[^>]+>/g,"")||""}`}else{if(g.activityType==="voting")return`${b} | 📊 **Hlasování:** ${g.question}
${g.options?.map(v=>`   ${v.label}) ${v.content}`).join(`
`)||""}`;if(g.activityType==="board"){const v=g.questionImage?" 🖼️":"";return`${b} | 💬 **Nástěnka:**${v} ${g.question}`}else if(g.activityType==="abc"){const v=g.media?.url?" 🖼️":"";return`${b} | ❓ **ABC:**${v} ${g.question}
${g.options?.map(A=>`   ${A.label}) ${A.content}${A.isCorrect?" ✓":""}`).join(`
`)||""}`}else if(g.question)return`${b} | 💬 ${g.question}`}return""}).filter(Boolean).join(`

`);return console.log("[Generator] Lesson saved:",d),{success:!0,id:d,preview:h}}catch(a){return console.error("[Generator] Lesson error:",a),{success:!1,error:String(a)}}}function nt(e,t){const o=[];let i=e.replace(/\*\*SLIDE\s*\d+[^*]*\*\*/gi,`
`).replace(/SLIDE\s*\d+[:\-–]\s*[^\n]*/gi,`
`).replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/<\/?p>/gi,`
`).replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,"").replace(/---+/g,`
`).replace(/🎨\s*OBRÁZEK:/gi,"OBRÁZEK:").replace(/🖼️\s*OBRÁZEK:/gi,"OBRÁZEK:").replace(/\n{3,}/g,`

`).trim();console.log("[Lesson Parser] Cleaned text preview:",i.substring(0,300));const l=/(?=^INFO:|^NÁSTĚNKA PRO A PROTI:|^NÁSTĚNKA ÚKOL:|^NÁSTĚNKA:|^HLASOVÁNÍ OD-DO:|^HLASOVÁNÍ ZPĚTNÁ VAZBA:|^HLASOVÁNÍ:|^ABC:|^KVÍZ-VÝBĚR:|^KVÍZ:)/mi,s=i.split(l).filter(p=>p.trim());console.log("[Lesson Parser] Found",s.length,"blocks");const n={blue:"#E3F2FD",green:"#E8F5E9",purple:"#F3E5F5",orange:"#FFF3E0",pink:"#FCE4EC",yellow:"#FFFDE7"};if(s.forEach(p=>{const r=p.trim().split(`
`).filter(c=>c.trim());if(r.length===0)return;const a=r[0].trim();let u,d,f=[];for(const c of r){const h=c.match(/^OBRÁZEK:\s*(.+)/i);if(h){const g=h[1].trim().toLowerCase(),b=t.media?.images?.find(v=>{const A=(v.title||"").toLowerCase();return A.includes(g)||g.includes(A)||A.replace(/[^a-z0-9]/g,"").includes(g.replace(/[^a-z0-9]/g,""))});if(b?.url)u=b.url;else{const v=t.media?.generatedIllustrations?.find(A=>{const j=(A.name||"").toLowerCase();return j.includes(g)||g.includes(j)||j.replace(/[^a-z0-9]/g,"").includes(g.replace(/[^a-z0-9]/g,""))});v?.url&&(u=v.url,console.log("[Parser] ✅ Lesson found illustration:",g,"->",v.name))}}const m=c.match(/^POZADÍ:\s*(.+)/i);if(m){const g=m[1].trim().toLowerCase();d=n[g]||g}const y=c.match(/^MOŽNOSTI:\s*(.+)/i);y&&(f=y[1].split("|").map(g=>g.trim()))}if(a.match(/^INFO:/i)){const c=a.replace(/^INFO:\s*/i,"").trim();let h="";for(let g=1;g<r.length;g++)r[g].match(/^(OBRÁZEK|POZADÍ|MOŽNOSTI):/i)||(h+=r[g].trim()+" ");console.log("[Lesson Parser] Creating INFO slide:",c,u?"(with image)":"");const m=u?"title-2cols":"title-content",y=ie(o.length,m);y.layout?.blocks&&(y.layout.blocks[0]&&(y.layout.blocks[0].content=c||t.topic),y.layout.blocks[1]&&(y.layout.blocks[1].content=h.trim()),u&&y.layout.blocks[2]&&(y.layout.blocks[2].type="image",y.layout.blocks[2].content=u)),y.title=c||t.topic,y.content=h.trim(),d&&(y.background={type:"color",value:d}),o.push(y);return}if(a.match(/^HLASOVÁNÍ ZPĚTNÁ VAZBA:/i)){const c=a.replace(/^HLASOVÁNÍ ZPĚTNÁ VAZBA:\s*/i,"").trim();console.log("[Lesson Parser] Creating VOTING feedback slide:",c),o.push({...de(o.length,"feedback"),question:c||"Jak se vám v této lekci dařilo?",showResultsToStudents:!0,feedbackStyle:"emoji"});return}if(a.match(/^HLASOVÁNÍ OD-DO:/i)){const c=a.replace(/^HLASOVÁNÍ OD-DO:\s*/i,"").trim();let h="Určitě ne",m="Určitě ano";for(const g of r.slice(1)){const b=g.match(/^Od:\s*(.+)/i),v=g.match(/^Do:\s*(.+)/i);b&&(h=b[1].trim()),v&&(m=v[1].trim())}console.log("[Lesson Parser] Creating VOTING scale slide:",c);const y=de(o.length,"scale");o.push({...y,question:c||"Jak byste ohodnotili?",scaleMinLabel:h,scaleMaxLabel:m,showResultsToStudents:!0});return}if(a.match(/^HLASOVÁNÍ:/i)){const c=a.replace(/^HLASOVÁNÍ:\s*/i,"").trim(),h=[];for(const y of r){const g=y.match(/^([A-D])\)\s*(.+)/i);if(g){const b=g[2].trim().replace(/\*/g,"").trim();h.push({id:g[1].toLowerCase(),label:g[1].toUpperCase(),content:b})}}const m=h.length>=2?h:f.length>=2?f.map((y,g)=>({id:String.fromCharCode(97+g),label:String.fromCharCode(65+g),content:y})):[{id:"a",label:"A",content:"Ano"},{id:"b",label:"B",content:"Ne"},{id:"c",label:"C",content:"Nevím"}];console.log("[Lesson Parser] Creating VOTING slide:",c,"options:",m.length),o.push({...de(o.length,"single"),question:c,options:m,showResultsToStudents:!0});return}if(a.match(/^NÁSTĚNKA PRO A PROTI:/i)){const c=a.replace(/^NÁSTĚNKA PRO A PROTI:\s*/i,"").trim();console.log("[Lesson Parser] Creating BOARD pros-cons slide:",c),o.push({...re(o.length),question:c||"Argumenty pro a proti",boardType:"pros-cons",leftColumnLabel:"Pro",rightColumnLabel:"Proti",allowMedia:!0,allowAnonymous:!1});return}if(a.match(/^NÁSTĚNKA ÚKOL:/i)){const c=a.replace(/^NÁSTĚNKA ÚKOL:\s*/i,"").trim();console.log("[Lesson Parser] Creating BOARD presentation slide:",c),o.push({...re(o.length),question:c||"Krátký úkol – výsledky na nástěnku",boardType:"presentation",allowMedia:!0,allowAnonymous:!1});return}if(a.match(/^NÁSTĚNKA:/i)){const c=a.replace(/^NÁSTĚNKA:\s*/i,"").trim();console.log("[Lesson Parser] Creating BOARD slide:",c),o.push({...re(o.length),question:c,boardType:"text",allowMedia:!0,allowAnonymous:!1});return}if(a.match(/^(ABC|KVÍZ-VÝBĚR|KVÍZ):/i)){const c=a.replace(/^(ABC|KVÍZ-VÝBĚR|KVÍZ):\s*/i,"").trim();console.log("[Lesson Parser] Creating ABC/KVÍZ slide:",c);const h=[];for(const g of r){const b=g.match(/^([A-D])\)\s*(.+)/i);if(b){let v=b[2].trim();const A=v.endsWith("*")||v.includes("*"),j=/\s*\(správn[áeě]\)|\s*-\s*správn[áeě]|\s*\(correct\)/i.test(v)||/správná odpověď/i.test(v),N=A||j;v=v.replace(/\*/g,"").replace(/\s*\(správn[áeě]\)/gi,"").replace(/\s*-\s*správn[áeě]/gi,"").replace(/\s*\(correct\)/gi,"").replace(/správná odpověď/gi,"").trim(),h.push({id:b[1].toLowerCase(),label:b[1].toUpperCase(),content:v,isCorrect:N})}}if(!h.some(g=>g.isCorrect)&&h.length>0&&(h[0].isCorrect=!0,console.warn("[Lesson Parser] ABC: žádná správná odpověď označená (* nebo správně), použita A jako fallback")),h.filter(g=>g.isCorrect).length>1){let g=!0;for(const b of h)b.isCorrect&&(g||(b.isCorrect=!1),g=!1)}c&&h.length>=2&&o.push({...Ae(o.length),question:c,options:h,points:1,...u?{media:{type:"image",url:u}}:{}})}}),o.length===0){const p=ie(0,"title-content");if(p.layout?.blocks&&(p.layout.blocks[0].content=`🎯 ${t.topic}`,p.layout.blocks[1].content=`<p>Vítejte v badatelské lekci! Dnes společně objevíme téma: ${t.topic}.</p>`),p.title=`🎯 ${t.topic}`,p.content=`<p>Vítejte v badatelské lekci! Dnes společně objevíme téma: ${t.topic}.</p>`,o.push(p),o.push({...de(1,"single"),question:`Co už víte o tématu ${t.topic}?`,options:[{id:"a",label:"A",content:"Hodně toho vím"},{id:"b",label:"B",content:"Něco vím"},{id:"c",label:"C",content:"Skoro nic"}],showResults:!0}),o.push({...re(2),question:`Co vás napadá, když se řekne "${t.topic}"? 🤔`,boardType:"text",allowMedia:!0}),t.content?.keyFacts?.[0]){const a=ie(3,"title-content");a.layout?.blocks&&(a.layout.blocks[0].content="📚 Klíčové informace",a.layout.blocks[1].content=`<p>${t.content.keyFacts.slice(0,3).join(" ")}</p>`),a.title="📚 Klíčové informace",a.content=`<p>${t.content.keyFacts.slice(0,3).join(" ")}</p>`,a.background={type:"color",value:"#E3F2FD"},o.push(a)}o.push({...re(o.length),question:"Co nového jste se dnes dozvěděli? Co vás překvapilo?",boardType:"text",allowMedia:!1});const r=ie(o.length,"title-content");r.layout?.blocks&&(r.layout.blocks[0].content="✅ Shrnutí",r.layout.blocks[1].content=`<p>Dnes jsme společně prozkoumali téma ${t.topic}. Skvělá práce!</p>`),r.title="✅ Shrnutí",r.content=`<p>Dnes jsme společně prozkoumali téma ${t.topic}. Skvělá práce!</p>`,o.push(r)}return o}async function Yt(e){console.log("[Generator] Generating multiple E-U-R lessons...");const t=W(e),o=e.content,i=o?.lessonTopics||[],l=(o?.lessonBrief||"").trim();let s=[];if(i.length>0||l){const d=i.length>0?i[0]:e.topic;s=[d],console.log("[Generator] User-directed lesson, topic:",d,"brief:",l?"yes":"no")}if(s.length===0){const d=`Pro téma "${e.topic}" (${e.grade}. třída) navrhni 2-3 konkrétní PODTÉMATA vhodná pro badatelské lekce.

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
["Podtéma 1", "Podtéma 2", "Podtéma 3"]`;try{const c=(await R([{role:"user",content:d}],"gemini-3-flash",{temperature:.7,max_tokens:500})).match(/\[[\s\S]*\]/);c&&(s=JSON.parse(c[0]))}catch(f){console.error("[Generator] Failed to get subtopics:",f),s=[e.topic]}s.length===0&&(s=[e.topic])}console.log("[Generator] Subtopics:",s);const n=[],p=e.media?.images||[],r=e.media?.generatedIllustrations||[];for(let d=0;d<s.length;d++){const f=s[d];console.log(`[Generator] Generating lesson ${d+1}/${s.length}: ${f}`);const c=Math.floor(d*p.length/s.length),h=Math.floor((d+1)*p.length/s.length),m=p.slice(c,h),y=r.slice(Math.floor(d*r.length/s.length),Math.floor((d+1)*r.length/s.length)),g=[...m.map(v=>`🖼️ "${v.title}"`),...y.map(v=>`🎨 "${v.name}"`)],b=`Vytvoř BADATELSKOU E-U-R lekci na podtéma: "${f}"
(Součást většího tématu: ${e.topic}, ${e.grade}. třída)

${l?`
⚠️ ZADÁNÍ AUTORA (dodržuj přesně!):
${l}

`:""}

KONTEXT:
${t}

${g.length>0?`🖼️ DOSTUPNÉ VIZUÁLY (použij 3-5):
${g.join(`
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
- Střídej výklad (INFO) s interaktivními slidy. E-U-R fáze dodržuj v pořadí.`;try{const v=await R([{role:"user",content:b}],"gemini-3-flash",{temperature:.7,max_tokens:3e3}),A=nt(v,{...e,media:{...e.media,images:m,generatedIllustrations:y}});A.length>0&&n.push({subtopic:f,slides:A,rawResponse:v})}catch(v){console.error(`[Generator] Failed to generate lesson for ${f}:`,v)}}if(n.length===0)return{success:!1,error:"Nepodařilo se vygenerovat žádnou lekci"};const a=[];for(const d of n){const f=`lesson-${e.id}-${crypto.randomUUID().slice(0,8)}`,c={id:f,title:`Interaktivní lekce: ${d.subtopic}`,slides:d.slides,settings:{showProgress:!0,showScore:!0,allowSkip:!0,allowBack:!0,shuffleQuestions:!1,shuffleOptions:!1,showExplanations:"immediately"},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};try{pe(c)}catch(m){console.warn(`[Generator] localStorage failed for ${f}:`,m)}await q(c)?(console.log(`[Generator] ✅ Lesson synced to Supabase: ${f}`),a.push(f)):console.error(`[Generator] ❌ Failed to sync lesson to Supabase: ${f}`),console.log(`[Generator] Lesson saved: ${f} - ${d.subtopic}`)}const u=n.map((d,f)=>`${f+1}. ${d.subtopic} (${d.slides.length} slidů)`).join(`
`);return console.log("[Generator] Lessons saved to Supabase:",a),{success:!0,id:a[0],preview:`Vytvořeno ${n.length} lekcí:
${u}`}}async function qt(e){console.log("[Generator] Generating methodology...");const t=ne("methodology"),o=e.rvp?.expectedOutcomes?.join(`
- `)||"Nejsou specifikovány",i=e.content?.keyTerms?.map(r=>`**${r.term}** – ${r.definition}`).join(`
`)||"",l=e.content?.keyFacts?.join(`
- `)||"",s=e.content?.personalities?.map(r=>`**${r.name}** – ${r.description}`).join(`
`)||"",n=e.content?.timeline?.map(r=>`**${r.year||r.date}** – ${r.event||r.description}`).join(`
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
${i||"Vypiš 5-8 klíčových pojmů s definicemi."}

## 📖 Faktografický přehled
Základní fakta k tématu, která by měl učitel znát:
${l?`- ${l}`:"- Vypiš 8-10 klíčových faktů"}

${s?`### Významné osobnosti
${s}
`:""}
${n?`### Časová osa
${n}
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
- Zaměř se na praktické využití v hodině`;try{const r=await R([{role:"user",content:p}],"gemini-3-flash",{temperature:.7,max_tokens:3e3});console.log("[Generator] Methodology raw response:",r.substring(0,500));const a={modrý:"info",červený:"danger",zelený:"tip",oranžový:"warning",fialový:"summary"};let u=r.replace(/INFOBOX (modrý|červený|zelený|oranžový|fialový):\s*(.+?)(?:\n([^\n#]*))?(?=\n\n|\n##|$)/gim,(y,g,b,v)=>{const A=a[g.toLowerCase()]||"info",j=v?v.trim():"";return`
<div data-type="callout" data-callout-type="${A}" class="callout callout-${A}"><p><strong>${b.trim()}</strong></p>${j?`<p>${j}</p>`:""}</div>
`});const d=_e(u),f=crypto.randomUUID(),c={id:f,title:`${e.topic} – Metodická inspirace`,content:d,documentType:"methodology",sectionImages:[]};try{localStorage.setItem(`vivid-doc-${f}`,JSON.stringify(c))}catch(y){console.warn(`[Generator] localStorage failed for methodology ${f}:`,y)}await be(c)||console.warn(`[Generator] Supabase sync failed for methodology ${f}`);const m=u.replace(/INFOBOX (modrý|červený|zelený|oranžový):\s*/gi,"📦 ").replace(/<[^>]+>/g,"");return console.log("[Generator] Methodology saved:",f),{success:!0,id:f,preview:m}}catch(r){return console.error("[Generator] Methodology error:",r),{success:!1,error:String(r)}}}async function Wt(e){console.log("[Generator] Generating hodnoceni...");const t=(e.content?.keyFacts||[]).map(n=>typeof n=="string"?n.replace(/^Téma:\s*/i,""):n.topic||n).filter(Boolean),o=e.rvp?.expectedOutcomes?.join(`
- `)||"",i=(e.content?.keyTerms||[]).map(n=>typeof n=="string"?n:n.term).filter(Boolean).join(", "),l=t.length>0?t.map(n=>`- ${n}`).join(`
`):`- ${e.topic}`,s=`Napiš VÝSTUPNÍ HODNOCENÍ uzávěru tematického bloku "${e.topic}" pro ${e.grade}. třídu.

Tematický blok zahrnoval tato témata:
${l}

${o?`Očekávané výstupy dle RVP:
- ${o}
`:""}
${i?`Klíčové pojmy: ${i}
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
- Liš obtížnost mezi typy škol (speciální = základní pojmy, gymnázium = analýza, vztahy, aplikace)`;try{const n=await R([{role:"user",content:s}],"gemini-3-pro",{temperature:.5,max_tokens:6e3}),p={modrý:"info",červený:"danger",zelený:"tip",oranžový:"warning",fialový:"summary"};let r=n.replace(/INFOBOX (modrý|červený|zelený|oranžový|fialový):\s*(.+?)(?:\n([^\n#]*))?(?=\n\n|\n##|$)/gim,(h,m,y,g)=>{const b=p[m.toLowerCase()]||"info",v=g?g.trim():"";return`
<div data-type="callout" data-callout-type="${b}" class="callout callout-${b}"><p><strong>${y.trim()}</strong></p>${v?`<p>${v}</p>`:""}</div>
`});const a=_e(r),u=crypto.randomUUID(),d={id:u,title:`${e.topic} – Výstupní dokument`,content:a,documentType:"hodnoceni",sectionImages:[]};try{localStorage.setItem(`vivid-doc-${u}`,JSON.stringify(d))}catch{}await be(d)||console.warn(`[Generator] Supabase sync failed for hodnoceni ${u}`);const c=r.replace(/<[^>]+>/g,"").substring(0,200);return console.log("[Generator] Hodnoceni saved:",u),{success:!0,id:u,preview:c}}catch(n){return console.error("[Generator] Hodnoceni error:",n),{success:!1,error:String(n)}}}const st=`Create educational illustration in Ligne Claire style (like Tintin comics):

LINE ART:
- Dead line technique - consistent line weight, no pressure variation
- Clean, technical, organized appearance
- Every object clearly outlined with black or dark gray contour
- Closed shapes with clear boundaries

COLORS & SHADING:
- Limited pastel palette with vibrant, professional colors
- Flat design - no gradients, large areas of single color
- Minimal hard-edged shadows only (sharply defined darker blocks, no blur)
- Often no shading at all for clarity

COMPOSITION:
- Stylized anatomy - simplified features but proportional
- Static, calm poses - frontal or slight profile view
- Icon/infographic feel
- Pure white background (negative space)
- Clean, clear, aesthetically pleasing

TECHNICAL:
- 800x800 pixels
- Educational and professional look
- Suitable for school materials

TEXT:
- If the subject or description includes any text, labels, numbers, or annotations — include them in the image
- Render all text in a simple geometric grotesque sans-serif typeface (like Futura or Avenir)
- Text must be clean, minimal, and clearly legible — no decorative or serif fonts`,Xt=`Generate a REAL PHOTOGRAPH that looks like it was taken by a regular person with a good camera, NOT a studio production.

LOOK & FEEL:
- Candid, authentic, unstaged — like a travel blog or school textbook photo
- Natural ambient lighting (sunlight, overcast sky, indoor daylight from windows)
- Slight imperfections: minor lens flare, soft vignetting, gentle noise/grain in shadows
- Warm, natural color palette — no oversaturated colors, no HDR look
- Shallow-to-medium depth of field (f/2.8–f/5.6), gentle background bokeh

CAMERA CHARACTERISTICS:
- Shot on a mirrorless camera or quality smartphone (natural perspective, ~35-50mm equivalent)
- Slightly off-center or rule-of-thirds composition — NOT perfectly centered or symmetrical
- Natural white balance (slightly warm in golden hour, slightly cool in shade)
- NO studio lighting, NO ring light reflections in eyes, NO perfectly even illumination

REALISM MARKERS:
- Real textures: dust, weathering, patina, fabric creases, skin texture with pores and fine lines
- Environmental context: background tells a story (other people, furniture, landscape, buildings)
- Motion hints where appropriate: slight motion blur on moving hands, wind in hair/clothes
- Realistic scale relationships between objects

STRICTLY FORBIDDEN:
- Illustration, drawing, cartoon, anime, digital art, painting, vector art
- Plastic/waxy skin, uncanny valley faces, symmetrical perfection
- Hyper-sharpened details, HDR tone mapping, neon-bright colors
- Studio backdrop, isolated subjects on plain backgrounds
- Stock photo poses (pointing at camera, corporate handshake, thumbs up)`,Qt=`Generate a GROUP SELFIE photograph from the camera's point of view.
COMPOSITION:
- Camera POV: We ARE the camera/phone - looking directly at the group
- 3-5 historical people gathered together, smiling at the camera
- Close-up framing: faces fill most of the frame
- Slight wide-angle distortion typical of phone selfies
- Some people slightly cut off at edges (natural selfie cropping)
- One person's arm may be partially visible at bottom edge (holding the invisible camera)

STYLE:
- Photorealistic, natural lighting, candid feel
- Happy expressions, looking directly at camera
- Authentic historical clothing and environment visible behind them
- NO phone or device visible anywhere in the image

FORBIDDEN: visible phone, visible camera, illustration, cartoon, third-person view`;async function eo(e){console.log("[Generator] Generating photo prompts for:",e.topic);const t=e.content?.keyTerms?.map(s=>s.term).join(", ")||"",o=e.content?.personalities?.map(s=>s.name).join(", ")||"",i=e.content?.keyFacts?.slice(0,5).join("; ")||"",l=`Pro vzdělávací materiály k tématu "${e.topic}" (${e.grade}. třída) navrhni 5-8 fotorealistických fotografií.

KONTEXT TÉMATU:
- Klíčové pojmy: ${t}
- Osobnosti: ${o}
- Fakta: ${i}

DŮLEŽITÉ: PRVNÍ FOTKA MUSÍ BÝT "HISTORICKÉ SELFIE"!
= Fotorealistická fotka kde si typický člověk z té doby dělá selfie mobilem.
= Ukazuje autentické oblečení, účes, prostředí té doby.
= Je to vtipný anachronismus ale vzdělávací - žáci uvidí jak lidé vypadali.

Pro každou fotku uveď:
FOTKA: [název česky]
KATEGORIE: [selfie/scene/portrait/artifact/location]
KLÍČOVÁ SLOVA: [3-5 slov česky]
POPIS: [detailní popis česky - co přesně má být na fotce, jaké detaily]

TYPY FOTOGRAFIÍ:
1. **Selfie** (selfie) - POVINNÉ! Člověk z doby si dělá selfie telefonem
2. **Scéna** (scene) - autentická scéna z každodenního života
3. **Portrét** (portrait) - fotorealistický portrét osobnosti nebo typické osoby
4. **Artefakt** (artifact) - detailní fotka historického předmětu
5. **Místo** (location) - rekonstrukce historického místa/architektury

PŘÍKLAD PRO STAROVĚKÝ EGYPT:
FOTKA: Selfie egyptského písaře
KATEGORIE: selfie
KLÍČOVÁ SLOVA: písař, papyrus, hieroglyfy, bílá suknice
POPIS: Mladý egyptský písař si dělá selfie. Má oholenou hlavu, na sobě bílou lněnou suknici. V pozadí je vidět chrám s hieroglyfy. Drží smartphone a usmívá se do kamery.

FOTKA: Denní trh v Memphisu
KATEGORIE: scene
KLÍČOVÁ SLOVA: trh, obchodníci, ovoce, Nil
POPIS: Rušný trh ve starověkém egyptském městě. Obchodníci prodávají ovoce a látky. V pozadí palmy a pohled na Nil.

Navrhni 5-8 fotek (první MUSÍ být selfie):`;try{const s=await R([{role:"user",content:l}],"gemini-3-flash",{temperature:.8,max_tokens:2048});console.log("[Generator] Photo prompts raw:",s.substring(0,400));const n=[],p=s.split(/(?=FOTKA:)/gi).filter(r=>r.trim());for(const r of p){const a=r.match(/FOTKA:\s*\*{0,2}(.+?)\*{0,2}\s*\n/i),u=r.match(/KATEGORIE:\s*\*{0,2}(.+?)\*{0,2}\s*\n/i),d=r.match(/KL[IÍ][CČ]OV[AÁ]\s+SLOVA:\s*(.+)/i),f=r.match(/POPIS:\s*([\s\S]+?)(?=FOTKA:|$)/i);if(a&&f){const c=(u?.[1]??"").trim().toLowerCase(),h=["selfie","scene","portrait","artifact","location"].includes(c)?c:"scene";n.push({id:crypto.randomUUID(),name:a[1].trim(),category:h,keywords:d?.[1]?.split(",").map(m=>m.trim()).filter(Boolean)||[],description:f[1].trim(),status:"pending"})}}if(n.length===0){const r=s.match(/\[[\s\S]*\]/);if(r)try{const a=JSON.parse(r[0]);for(const u of a)(u.name||u.title||u.description)&&n.push({id:crypto.randomUUID(),name:u.name||u.title||"Fotka",category:["selfie","scene","portrait","artifact","location"].includes(u.category)?u.category:"scene",keywords:Array.isArray(u.keywords)?u.keywords:[],description:u.description||u.popis||"",status:"pending"})}catch{}}if(n.length===0){console.warn("[Generator] Text parsing failed, retrying as JSON...");const r=`Navrhni 6 fotorealistických fotografií pro vzdělávací téma "${e.topic}" (${e.grade}. třída).
Vrať POUZE JSON pole:
[{"name":"název","category":"selfie|scene|portrait|artifact|location","keywords":["slovo1","slovo2"],"description":"detailní popis fotky"}]
První fotka musí být "selfie" – člověk z tématu si dělá selfie s mobilem. POUZE JSON.`,u=(await R([{role:"user",content:r}],"gemini-3-flash")).match(/\[[\s\S]*\]/);if(u)try{const d=JSON.parse(u[0]);for(const f of d)n.push({id:crypto.randomUUID(),name:f.name||f.title||"Fotka",category:["selfie","scene","portrait","artifact","location"].includes(f.category)?f.category:"scene",keywords:Array.isArray(f.keywords)?f.keywords:[],description:f.description||"",status:"pending"})}catch{}}return console.log("[Generator] Generated photo prompts:",n.length),n}catch(s){return console.error("[Generator] Photo prompts error:",s),[]}}async function to(e,t,o="flash"){console.log("[Generator] Generating photo:",e.name);const{generateImageWithImagen:i}=await J(async()=>{const{generateImageWithImagen:n}=await import("./ai-chat-proxy-CZyoh9V4.js");return{generateImageWithImagen:n}},__vite__mapDeps([0,1,2,3,4,5])),s=`${e.category==="selfie"?Qt:Xt}

SUBJECT: ${e.name}
CONTEXT: ${t.topic}
SCENE: ${e.description}
DETAILS: ${e.keywords.join(", ")}

OUTPUT: Ultra-realistic 8K photograph, documentary style. NO illustration, NO cartoon, NO digital art.`;try{const n=await i(s,{aspectRatio:"1:1",numberOfImages:1,dataSetId:t.id,illustrationName:`📷 ${e.name}`,model:o});if(n.success&&(n.url||n.images?.[0]?.base64)){let p=n.url||`data:${n.images?.[0]?.mimeType||"image/png"};base64,${n.images?.[0]?.base64}`;const{processImageUrl:r}=await J(async()=>{const{processImageUrl:u}=await import("./upload-image-DE-r4_8e.js");return{processImageUrl:u}},__vite__mapDeps([6,1,2,3,4,5])),a=await r(p,`${t.id}-${e.id}`,"photos");return a?(console.log("[Generator] Photo generated successfully:",a.substring(0,100)+"..."),a):(console.error("[Generator] Photo upload to storage failed"),null)}else return console.error("[Generator] Photo generation failed:",n.error||"No image data returned"),null}catch(n){return console.error("[Generator] Photo generation error:",n),null}}async function oo(e,t=!1){console.log("[Generator] Generating illustration prompts for:",e.topic);const o=e.content?.keyTerms?.map(p=>p.term).join(", ")||"",i=e.content?.personalities?.map(p=>p.name).join(", ")||"",l=e.content?.keyFacts?.slice(0,5).join("; ")||"",s=`Pro vzdělávací materiály k tématu "${e.topic}" (${e.grade}. třída) navrhni 8-12 ilustrací.

KONTEXT TÉMATU:
- Klíčové pojmy: ${o}
- Osobnosti: ${i}
- Fakta: ${l}

Pro každou ilustraci uveď:
ILUSTRACE: [název česky]
KATEGORIE: [icon/portrait/object/scene/map]
KLÍČOVÁ SLOVA: [3-5 slov česky]
POPIS: [detailní popis česky - 2-3 věty]

TYPY ILUSTRACÍ:
1. **Ikony** (icon) - jednoduché symboly: helma, štít, váza, sloup, mince
2. **Portréty** (portrait) - stylizované postavy: filosof, válečník, panovník
3. **Objekty** (object) - artefakty: zbraně, nástroje, šperky, architektura
4. **Scény** (scene) - situace: bitva, agora, obchod, škola
5. **Mapy** (map) - stylizované mapy území

PŘÍKLAD:
ILUSTRACE: Řecká helma hoplíta
KATEGORIE: icon
KLÍČOVÁ SLOVA: helma, hoplít, válečník, bronz
POPIS: Bronzová korintská přilba řeckého hoplíty zobrazená z boku, s červeným chocholem z koňských žíní, čistá minimalistická ilustrace.

Navrhni ilustrace pokrývající různé aspekty tématu. Soustřeď se na vizuálně zajímavé a edukativně hodnotné náměty. Vše piš v češtině.`,n=(p,r,a)=>{const u=t?`

TEXT LABEL: Add a clean, short Czech label directly on the illustration. Use simple sans-serif font, bold, dark color, placed at the bottom or beside the main element. Label text: "${p}"`:`

NO TEXT: Do not include any text, words, letters or labels in the illustration.`;return{id:crypto.randomUUID(),name:p,prompt:`${r}${u}

Style requirements:
${st}`,category:["icon","portrait","object","scene","map"].includes(a)?a:"icon",keywords:[],status:"pending"}};try{const p=await R([{role:"user",content:s}],"gemini-3-flash",{temperature:.8,max_tokens:2500});console.log("[Generator] Illustration prompts raw:",p.substring(0,500));const r=[],a=p.split(/(?=ILUSTRACE:)/i).filter(u=>u.trim());for(const u of a){const d=u.match(/ILUSTRACE:\s*\*{0,2}(.+?)\*{0,2}\s*\n/i),f=u.match(/KATEGORIE:\s*\*{0,2}(\w+)\*{0,2}/i),c=u.match(/KL[IÍ][CČ]OV[AÁ]\s+SLOVA:\s*(.+)/i),h=u.match(/POPIS:\s*([\s\S]+?)(?=ILUSTRACE:|$)/i);if(d&&h){const m=d[1].trim(),y=h[1].trim().split(`
`).filter(v=>v.trim()).join(" "),g=(f?.[1]??"icon").toLowerCase(),b=n(m,y,g);b.keywords=c?.[1]?.split(",").map(v=>v.trim()).filter(Boolean)||[],r.push(b)}}if(r.length===0){const u=p.match(/\[[\s\S]*\]/);if(u)try{const d=JSON.parse(u[0]);for(const f of d)(f.name||f.title)&&r.push(n(f.name||f.title,f.description||f.popis||"",f.category||"icon"))}catch{}}if(r.length===0){console.warn("[Generator] Text parsing failed, retrying as JSON...");const u=`Navrhni 8 ilustrací pro vzdělávací téma "${e.topic}" (${e.grade}. třída).
Vrať POUZE JSON pole:
[{"name":"název česky","category":"icon|portrait|object|scene|map","description":"detailní popis co zobrazit (2-3 věty)"}]
POUZE JSON, žádný jiný text.`,f=(await R([{role:"user",content:u}],"gemini-3-flash")).match(/\[[\s\S]*\]/);if(f)try{const c=JSON.parse(f[0]);for(const h of c)r.push(n(h.name||h.title||"Ilustrace",h.description||"",h.category||"icon"))}catch{}}return console.log("[Generator] Generated prompts:",r.length),r}catch(p){return console.error("[Generator] Illustration prompts error:",p),[]}}async function no(e,t="imagen"){console.log("[Generator] Generating illustration:",e.name);try{return{success:!1,error:"Image generation API not yet connected. Prompts are ready for manual generation."}}catch(o){return{success:!1,error:String(o)}}}async function so(e){console.log("[suggestImageGroups] START for topic:",e.topic);const t=e.content?.keyTerms?.map(l=>l.term).join(", ")||"",o=e.content?.keyFacts?.slice(0,6).join("; ")||"",i=`Jsi pedagog navrhující vizuální materiály pro učebnici.
Téma: "${e.topic}" (${e.grade}. třída, ${e.subjectCode||e.subject_code||""})

Klíčové pojmy: ${t}
Fakta: ${o}

Navrhni 2–4 SKUPINY OBRÁZKŮ kde má smysl mít sérii obrázků se stejným stylem (např. "Typy řeckých sloupů" → 3 druhy, "Fáze měsíce" → 8 fází, "Světové náboženské symboly" → 5–6 symbolů).

PRAVIDLO PRO POČET SUBJEKTŮ: Zvol přesně tolik kolik jich téma přirozeně má.
- Pokud jsou to diskrétní kategorie (druhy, typy, fáze): přesný počet (2, 3, 4, 5, 6, 7, 8...)
- Nekrát uměle doplňuj ani nezkracuj — "4 roční období" = právě 4, "3 typy hornin" = právě 3
- Min 2, max 8 subjektů na skupinu

Vrať POUZE validní JSON pole (žádný markdown, žádné bloky kódu, čistý JSON):
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
]`;try{const l=await R([{role:"user",content:i}],"gemini-3-flash",{temperature:.7,max_tokens:1500});console.log("[suggestImageGroups] raw response (first 600):",l.substring(0,600));const n=l.replace(/```json\s*/gi,"").replace(/```\s*/gi,"").trim().match(/\[[\s\S]*\]/);if(!n)return console.warn("[suggestImageGroups] no JSON array found in response"),[];const p=JSON.parse(n[0]);console.log("[suggestImageGroups] parsed",p.length,"groups");const r=new Date().toISOString();return p.map(a=>({id:`ig-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,title:a.title||"Skupina obrázků",description:a.description||"",type:["illustration","photo","diagram"].includes(a.type)?a.type:"illustration",stylePrompt:a.stylePrompt||"educational illustration, white background, consistent style",layout:"gallery",subjects:(a.subjects||[]).map(u=>({id:`subj-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:typeof u=="string"?u:u.name,status:"pending"})),createdAt:r,updatedAt:r}))}catch(l){return console.error("[suggestImageGroups] error:",l),[]}}function M(e){return e<=6?"A1":e===7?"A2":e===8||e>=9?"B1":"A2"}async function ro(e,t){t?.("plan","Generuji slovní zásobu pro téma...");const o=M(e.grade);e.subjectCode?.includes("nemcin")||e.subjectCode?.includes("francouz");const i=e.subjectCode?.includes("nemcin")?"German":e.subjectCode?.includes("francouz")?"French":"English",l=`You are an EFL/EFL material designer. Generate a structured vocabulary set for Czech school students.

TOPIC: "${e.topic}"
LANGUAGE: ${i}
CEFR LEVEL: ${o}
GRADE: ${e.grade}. ročník (Czech school)

Generate exactly 16 vocabulary items relevant to this topic at the ${o} level.

Return ONLY this JSON (no markdown fences):
{
  "title": "string — e.g. 'Food & Restaurants - Vocabulary'",
  "cefrLevel": "${o}",
  "items": [
    {
      "word": "string — ${i} word or phrase",
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
`,s=await R([{role:"user",content:l}],"gemini-3.1-pro",{max_tokens:8192});if(!s)return{success:!1,error:"AI neodpovědělo"};let n;try{const g=s.match(/\{[\s\S]*\}/);if(!g)throw new Error("Žádný JSON v odpovědi");n=JSON.parse(g[0])}catch(g){return{success:!1,error:`Chyba parsování: ${g}`}}t?.("build","Přiřazuji obrázky z datasetu...");const p=n.items||[],r=[];(e.media?.illustrations||[]).forEach(g=>{g.url&&r.push({url:g.url,text:(g.prompt||g.subject||"").toLowerCase()})}),(e.media?.imageGroups||[]).forEach(g=>{(g.subjects||[]).forEach(b=>{b.imageUrl&&b.status==="done"&&r.push({url:b.imageUrl,text:(b.name||b.subject||"").toLowerCase()})})}),(e.media?.images||[]).forEach(g=>{g.url&&r.push({url:g.url,text:[g.title,g.description,g.query,g.alt].filter(Boolean).join(" ").toLowerCase()})});const a=p.map(g=>{const b=(g.word||"").toLowerCase(),v=(g.translation||"").toLowerCase();return r.find(j=>j.text.includes(b)||j.text.includes(v))?.url??null});t?.("build","Sestavuji flashcard board...");const{createFlashcardSlide:u,createInfoSlide:d}=await J(async()=>{const{createFlashcardSlide:g,createInfoSlide:b}=await import("./quiz-CwIMLgSO.js");return{createFlashcardSlide:g,createInfoSlide:b}},[]),f=[],c=d(0,"title-only");c.title=n.title||`${e.topic} – Vocabulary`,c.backgroundColor="#6366f1",f.push(c),p.forEach((g,b)=>{const v=u(b+1);v.word=g.word||"",v.translation=g.translation||"",v.phonetic=g.phonetic||"",v.exampleSentence=g.exampleSentence||"",v.exampleTranslation=g.exampleTranslation||"",v.audioLang="en-US",v.mode="language",a[b]&&(v.image=a[b]),f.push(v)});const h={id:`quiz-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,title:n.title||`${e.topic} – Slovní zásoba`,slides:f,settings:{showProgress:!0,showScore:!1,allowSkip:!0,allowBack:!0,shuffleQuestions:!1,shuffleOptions:!1,showExplanations:"immediately"},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{stripBase64FromObject:m}=await J(async()=>{const{stripBase64FromObject:g}=await import("./upload-image-DE-r4_8e.js");return{stripBase64FromObject:g}},__vite__mapDeps([6,1,2,3,4,5])),y=m(h);return Se(y),t?.("save","Ukládám do Supabase..."),await q(y),{success:!0,id:h.id,preview:`Kartičky: ${(n.items||[]).length} slov | Téma: ${e.topic} | Úroveň: ${o}`}}async function ue(e,t,o){const{stripBase64FromObject:i}=await J(async()=>{const{stripBase64FromObject:u}=await import("./upload-image-DE-r4_8e.js");return{stripBase64FromObject:u}},__vite__mapDeps([6,1,2,3,4,5])),l=`worksheet-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,s=`board-${Date.now()+1}-${Math.random().toString(36).slice(2,6)}`,n={id:l,title:t,blocks:e,settings:{showAnswerKey:!0,pageSize:"A4",margins:"normal"},metadata:{subject:o.subjectCode,grade:o.grade,topic:o.topic},linkedBoardId:s,status:"draft",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};oe(n);const p={...n,blocks:e.filter(u=>!u.worksheetOnly)},r=ft(p);r.id=s,r.linkedWorksheetId=l,r.title=t;const a=i(r);return pe(a),await q(a),{worksheetId:l,boardId:s}}function io(e,t,o){const i=e.split("___");if(i.length<2)return[{type:"text",content:e}];const l=[];return l.push({type:"text",content:i[0]}),l.push({type:"blank",id:o,correctAnswer:t.trim()}),l.push({type:"text",content:i.slice(1).join("___")}),l}async function ao(e,t){t?.("plan","Generuji gramatickou lekci (PPP struktura)...");const o=M(e.grade);t?.("agent1","Generuji obsah lekce...");const i=`You are an EFL teacher creating a grammar lesson for Czech students (grade ${e.grade}, CEFR ${o}).

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
- CEFR ${o} appropriate difficulty throughout`,l=await R([{role:"user",content:i}],"gemini-3.1-pro",{max_tokens:4096});if(!l)return{success:!1,error:"AI neodpovědělo"};let s;try{const c=l.match(/\{[\s\S]*\}/);if(!c)throw new Error("Žádný JSON v odpovědi");s=JSON.parse(c[0])}catch(c){return{success:!1,error:`Chyba parsování JSON: ${c}`}}t?.("build","Sestavuji pracovní list...");const n=s.title||`${e.topic} – Gramatická lekce`;let p=0;const r=[];r.push({id:O(),order:p++,type:"heading",width:"full",content:{text:n,level:"h1",headingStyle:"left-border"}}),r.push({id:O(),order:p++,type:"paragraph",width:"full",content:{html:`<h3>🔍 Gramatika v kontextu</h3><p>${(s.contextText||"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n/g,"<br>")}</p><p><em>${s.noticeNote||""}</em></p>`}}),r.push({id:O(),order:p++,type:"infobox",width:"full",content:{title:`📋 Pravidlo: ${s.grammarPoint||""}`,html:`<p>${s.ruleExplanation||""}</p>
<table style="width:100%;border-collapse:collapse;margin-top:8px">
<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>(+)</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${s.ruleAffirmative||""}</td></tr>
<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>(−)</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${s.ruleNegative||""}</td></tr>
<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>(?)</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${s.ruleQuestion||""}</td></tr>
</table>`,variant:"blue"}});const a=(s.examples||[]).map(c=>`<li>${c}</li>`).join("");r.push({id:O(),order:p++,type:"paragraph",width:"full",content:{html:`<h3>✏️ Příklady</h3><ul>${a}</ul>`}});const u=s.fillBlanks||[];if(u.length>0){r.push({id:O(),order:p++,type:"heading",width:"full",content:{text:"Cvičení – Doplň správný tvar",level:"h2"}});const c=[];u.forEach((h,m)=>{m>0&&c.push({type:"text",content:"   "}),c.push({type:"text",content:`${m+1}. `});const y=io(h.sentence||"",h.answer||"",`gram-blank-${m+1}`);c.push(...y)}),r.push({id:O(),order:p++,type:"fill-blank",width:"full",content:{instruction:"Doplň správný tvar slovesa do mezer.",segments:c}})}r.push({id:O(),order:p++,type:"heading",width:"full",content:{text:"🗣️ Volné použití (Production)",level:"h2"}}),r.push({id:O(),order:p++,type:"free-answer",width:"full",content:{question:s.productionTask||"Napiš 4-5 vět pomocí nové gramatiky.",lines:5}}),t?.("save","Ukládám lekci jako pracovní list a board...");const{worksheetId:d,boardId:f}=await ue(r,n,e);return{success:!0,id:d,linkedBoardId:f,preview:`Gramatická lekce (PPP) | ${o} | ${e.grade}. ročník | + Board`}}async function lo(e,t){t?.("plan","Generuji čtecí aktivitu...");const o=M(e.grade),i=o==="A1"?"100-150":o==="A2"?"150-220":"250-350";t?.("agent1","Generuji čtecí text a úkoly...");const l=`You are an EFL material designer. Create a reading activity for Czech students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"
CEFR LEVEL: ${o}
TEXT LENGTH: ${i} words

Return ONLY this JSON (no markdown, no code fences):
{
  "title": "string — title of the reading text in English, e.g. 'Life in the City'",
  "preReadingVocab": [
    { "word": "string — English word/phrase", "translation": "string — Czech translation" }
  ],
  "predictionQuestion": "string — Czech prediction question to think about before reading",
  "text": "string — the reading text in English, ${i} words. Use \\n\\n for paragraph breaks.",
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
- Engaging scenario connected to "${e.topic}"`,s=await R([{role:"user",content:l}],"gemini-3.1-pro",{max_tokens:6144});if(!s)return{success:!1,error:"AI neodpovědělo"};let n;try{const y=s.match(/\{[\s\S]*\}/);if(!y)throw new Error("Žádný JSON v odpovědi");n=JSON.parse(y[0])}catch(y){return{success:!1,error:`Chyba parsování JSON: ${y}`}}t?.("build","Sestavuji pracovní list...");const p=n.title?`${n.title}`:`${e.topic} – Čtení`;let r=0;const a=[];a.push({id:O(),order:r++,type:"heading",width:"full",content:{text:`📖 ${p}`,level:"h1",headingStyle:"left-border"}});const u=(n.preReadingVocab||[]).map(y=>`<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>${y.word||""}</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${y.translation||""}</td></tr>`).join("");a.push({id:O(),order:r++,type:"infobox",width:"full",content:{title:"📚 Před čtením – Nová slovíčka",html:`<table style="width:100%;border-collapse:collapse">${u}</table>
<p style="margin-top:8px"><strong>Přemýšlej:</strong> ${n.predictionQuestion||""}</p>`,variant:"green"}});const d=(n.text||"").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");a.push({id:O(),order:r++,type:"paragraph",width:"full",content:{html:`<h3>📖 Text</h3><p>${d}</p>`}});const f=n.trueFalseStatements||[];f.length>0&&(a.push({id:O(),order:r++,type:"heading",width:"full",content:{text:"Úkol 1 – Pravda / Nepravda / Nezmíněno",level:"h2"}}),a.push({id:O(),order:r++,type:"free-answer",width:"full",content:{question:"Označ každé tvrzení: T (True) / F (False) / NM (Not Mentioned)",lines:1,subQuestions:f.map((y,g)=>({id:`tf-${g+1}`,text:`${g+1}. ${y.statement||""}`,lines:1,sampleAnswer:y.answer||""})),subColumns:1}}));const c=n.comprehensionQuestions||[];c.length>0&&(a.push({id:O(),order:r++,type:"heading",width:"full",content:{text:"Úkol 2 – Otázky s porozuměním",level:"h2"}}),a.push({id:O(),order:r++,type:"free-answer",width:"full",content:{question:"Odpověz na otázky anglicky.",lines:2,subQuestions:c.map((y,g)=>({id:`comp-${g+1}`,text:`${g+1}. ${y}`,lines:2})),subColumns:1}})),n.answerKey&&a.push({id:O(),order:r++,type:"infobox",width:"full",content:{title:"✔️ Klíč k odpovědím",html:`<p>${n.answerKey}</p>`,variant:"yellow"}}),a.push({id:O(),order:r++,type:"free-answer",width:"full",content:{question:`💬 Diskuse: ${n.discussionQuestion||"Co si myslíš o tématu textu?"}`,lines:3}}),t?.("save","Ukládám čtecí aktivitu jako pracovní list a board...");const{worksheetId:h,boardId:m}=await ue(a,p,e);return{success:!0,id:h,linkedBoardId:m,preview:`Čtení s porozuměním | ${o} | ${i} slov | ${e.grade}. ročník | + Board`}}async function co(e,t){t?.("plan","Generuji aktivitu pro psaní...");const o=M(e.grade),i=o==="A1"?"40-60":o==="A2"?"60-100":"100-150";t?.("agent1","Generuji zadání a vzorový text...");const l=`Create a guided writing activity for Czech EFL students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"
WRITING TARGET: ${i} words

Return ONLY this JSON (no markdown, no code fences):
{
  "title": "string — writing task title in English, e.g. 'My Favourite Place'",
  "task": "string — Czech: clear writing task (who, why, what to include). End with: Napiš ${i} slov.",
  "modelText": "string — model text in English (${i} words). Use **phrase** to bold key phrases. Use \\n\\n for paragraphs.",
  "languageBank": [
    { "phrase": "string — English phrase/connector", "translation": "string — Czech translation" }
  ],
  "writingFrame": "string — writing frame with sentence starters, e.g. 'My favourite place is ___.\\nI like it because ___.\\nEvery time I go there, I ___.'",
  "checklist": [
    "string — self-assessment item, e.g. 'Did I write ${i} words?'"
  ]
}

Rules:
- Exactly 8-10 language bank phrases
- Exactly 5 checklist items
- Model text strictly at ${o} level
- Czech for task and checklist; English for model text, language bank phrases, and writing frame`,s=await R([{role:"user",content:l}],"gemini-3.1-pro",{max_tokens:4096});if(!s)return{success:!1,error:"AI neodpovědělo"};let n;try{const m=s.match(/\{[\s\S]*\}/);if(!m)throw new Error("Žádný JSON v odpovědi");n=JSON.parse(m[0])}catch(m){return{success:!1,error:`Chyba parsování JSON: ${m}`}}t?.("build","Sestavuji pracovní list...");const p=n.title||`${e.topic} – Psaní`;let r=0;const a=[];a.push({id:O(),order:r++,type:"heading",width:"full",content:{text:`✍️ ${p}`,level:"h1",headingStyle:"left-border"}}),a.push({id:O(),order:r++,type:"infobox",width:"full",content:{title:"📝 Zadání",html:`<p>${(n.task||"").replace(/\n/g,"<br>")}</p>`,variant:"blue"}});const u=(n.modelText||"").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");a.push({id:O(),order:r++,type:"paragraph",width:"full",content:{html:`<h3>📄 Vzorový text</h3><p>${u}</p>`}});const d=(n.languageBank||[]).map(m=>`<tr><td style="padding:4px 8px;border:1px solid #ccc"><em>${m.phrase||""}</em></td><td style="padding:4px 8px;border:1px solid #ccc">${m.translation||""}</td></tr>`).join("");a.push({id:O(),order:r++,type:"infobox",width:"full",content:{title:"💡 Užitečné fráze",html:`<table style="width:100%;border-collapse:collapse">${d}</table>`,variant:"green"}}),a.push({id:O(),order:r++,type:"paragraph",width:"full",content:{html:`<h3>🗂️ Šablona pro psaní</h3><p style="font-style:italic">${(n.writingFrame||"").replace(/\n/g,"<br>")}</p>`}}),a.push({id:O(),order:r++,type:"free-answer",width:"full",content:{question:`Napiš svůj text (${i} slov):`,lines:8}});const f=(n.checklist||[]).map(m=>`<li>☐ ${m}</li>`).join("");a.push({id:O(),order:r++,type:"infobox",width:"full",content:{title:"✅ Sebehodnocení",html:`<ul>${f}</ul>`,variant:"yellow"}}),t?.("save","Ukládám aktivitu psaní jako pracovní list a board...");const{worksheetId:c,boardId:h}=await ue(a,p,e);return{success:!0,id:c,linkedBoardId:h,preview:`Řízené psaní | ${o} | ${i} slov | ${e.grade}. ročník | + Board`}}async function po(e,t){t?.("plan","Generuji aktivitu pro mluvení...");const o=M(e.grade);t?.("agent1","Generuji diskusní otázky a role-play...");const i=`Create a speaking activity for Czech EFL students (grade ${e.grade}, CEFR ${o}).

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
- English for discussion questions and useful phrases; Czech for role descriptions and self-assessment`,l=await R([{role:"user",content:i}],"gemini-3.1-pro",{max_tokens:4096});if(!l)return{success:!1,error:"AI neodpovědělo"};let s;try{const h=l.match(/\{[\s\S]*\}/);if(!h)throw new Error("Žádný JSON v odpovědi");s=JSON.parse(h[0])}catch(h){return{success:!1,error:`Chyba parsování JSON: ${h}`}}t?.("build","Sestavuji pracovní list...");const n=s.title||`${e.topic} – Mluvení`;let p=0;const r=[];r.push({id:O(),order:p++,type:"heading",width:"full",content:{text:`🗣️ ${n}`,level:"h1",headingStyle:"left-border"}});const a=(s.discussionQuestions||[]).map((h,m)=>`<li>${m+1}. ${h}</li>`).join("");r.push({id:O(),order:p++,type:"paragraph",width:"full",content:{html:`<h3>💬 Diskusní otázky</h3><ol>${a}</ol>`}}),r.push({id:O(),order:p++,type:"heading",width:"full",content:{text:"🎭 Role-play",level:"h2"}}),r.push({id:O(),order:p++,type:"infobox",width:"half",content:{title:"Student A",html:`<p>${(s.rolePlayA||"").replace(/\n/g,"<br>")}</p>`,variant:"blue"}}),r.push({id:O(),order:p++,type:"infobox",width:"half",content:{title:"Student B",html:`<p>${(s.rolePlayB||"").replace(/\n/g,"<br>")}</p>`,variant:"green"}});const u=(s.usefulLanguage||[]).map(h=>`<tr><td style="padding:4px 8px;border:1px solid #ccc"><em>${h.phrase||""}</em></td><td style="padding:4px 8px;border:1px solid #ccc">${h.translation||""}</td></tr>`).join("");r.push({id:O(),order:p++,type:"infobox",width:"full",content:{title:"💬 Užitečný jazyk",html:`<table style="width:100%;border-collapse:collapse">${u}</table>`,variant:"purple"}});const d=(s.selfAssessment||[]).map(h=>`<li>☐ ${h}</li>`).join("");r.push({id:O(),order:p++,type:"infobox",width:"full",content:{title:"⭐ Sebehodnocení",html:`<ul>${d}</ul>`,variant:"yellow"}}),t?.("save","Ukládám aktivitu mluvení jako pracovní list a board...");const{worksheetId:f,boardId:c}=await ue(r,n,e);return{success:!0,id:f,linkedBoardId:c,preview:`Konverzační aktivita | ${o} | Role-play + diskuse | ${e.grade}. ročník | + Board`}}async function uo(e,t){t?.("plan","Generuji jazykový kvíz (slovní zásoba + gramatika)...");const o=M(e.grade),i=e.subjectCode?.includes("nemcin")?"German":e.subjectCode?.includes("francouz")?"French":"English",l=`You are an EFL assessment designer. Create a language quiz for Czech students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"
LANGUAGE: ${i}
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
`,s=await R([{role:"user",content:l}],"gemini-3.1-pro",{max_tokens:8192});if(!s)return{success:!1,error:"AI neodpovědělo"};let n;try{const b=s.match(/\{[\s\S]*\}/);if(!b)throw new Error("Žádný JSON v odpovědi");n=JSON.parse(b[0])}catch(b){return{success:!1,error:`Chyba parsování JSON: ${b}`}}t?.("build","Sestavuji VividBoard kvíz...");const{createInfoSlide:p,createABCSlide:r,createFillBlanksSlide:a,createConnectPairsSlide:u}=await J(async()=>{const{createInfoSlide:b,createABCSlide:v,createFillBlanksSlide:A,createConnectPairsSlide:j}=await import("./quiz-CwIMLgSO.js");return{createInfoSlide:b,createABCSlide:v,createFillBlanksSlide:A,createConnectPairsSlide:j}},[]),d=[];let f=0;const c=p(f++,"title-only");c.title=n.title||`${e.topic} – Jazykový kvíz`,c.backgroundColor="#4f46e5",d.push(c);for(const b of n.sections||[]){const v=p(f++,"title-only");v.title=b.sectionTitle||"Sekce",v.backgroundColor="#7c3aed",d.push(v);for(const N of b.abcVocab||[]){const S=r(f++);S.question=N.question||"";const D=(N.options||[]).slice(0,4);S.options=D.map((z,w)=>({id:["a","b","c","d"][w]||`opt-${w}`,label:["A","B","C","D"][w]||String(w+1),content:z,isCorrect:w===(N.correctIndex??0)})),d.push(S)}for(const N of b.abcGrammar||[]){const S=r(f++);S.question=N.question||"";const D=(N.options||[]).slice(0,4);S.options=D.map((z,w)=>({id:["a","b","c","d"][w]||`opt-${w}`,label:["A","B","C","D"][w]||String(w+1),content:z,isCorrect:w===(N.correctIndex??0)})),d.push(S)}const A=(b.connectPairs||[]).slice(0,6);if(A.length>=2){const N=u(f++);N.instruction=`Spoj ${i==="English"?"anglické":i==="German"?"německé":"francouzské"} slovo s českým překladem`,N.pairs=A.map((S,D)=>({id:`pair-${D+1}`,left:{id:`left-${D+1}`,type:"text",content:S.english||""},right:{id:`right-${D+1}`,type:"text",content:S.czech||""}})),N.countAsMultiple=!0,N.shuffleSides=!0,d.push(N)}const j=(b.fillBlanks||[]).slice(0,6);if(j.length>0){const N=a(f++);N.instruction="Doplň správný tvar slova",N.sentences=j.map((S,D)=>{const z=S.sentence||"",w=S.answer||"",H=`blank-${D+1}-1`,Z=z.replace("[BLANK]",`[${H}]`),I=Z.indexOf(`[${H}]`);return{id:`sentence-${D+1}`,text:Z,blanks:[{id:H,text:w,position:I>=0?I:0}]}}),N.distractors=[],N.shuffleOptions=!0,d.push(N)}}const h={id:`quiz-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,title:n.title||`${e.topic} – Jazykový kvíz`,slides:d,settings:{showProgress:!0,showScore:!0,allowSkip:!1,allowBack:!1,shuffleQuestions:!1,shuffleOptions:!0,showExplanations:"after-all"},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},{stripBase64FromObject:m}=await J(async()=>{const{stripBase64FromObject:b}=await import("./upload-image-DE-r4_8e.js");return{stripBase64FromObject:b}},__vite__mapDeps([6,1,2,3,4,5])),y=m(h);Se(y),t?.("save","Ukládám kvíz do Supabase..."),await q(y);const g=d.length-1;return{success:!0,id:h.id,preview:`Jazykový kvíz | ${g} slides | ABC + Spojovačka + Doplňování | ${o} | ${e.grade}. ročník`}}async function ho(e,t){t?.("plan","Generuji poslechovou aktivitu...");const o=M(e.grade),i=o==="A1"?"80-120":o==="A2"?"130-190":"200-280";t?.("build","Generuji ilustraci tématu..."),t?.("agent1","Generuji audioskript a úkoly...");const l=`Create a listening activity for Czech EFL students (grade ${e.grade}, CEFR ${o}).

TOPIC: "${e.topic}"
SCRIPT LENGTH: ${i} words

Return ONLY this JSON (no markdown, no code fences):
{
  "title": "string — listening activity title in English, e.g. 'A Day at the Market'",
  "preListeningVocab": [
    { "word": "string — English word/phrase", "translation": "string — Czech translation" }
  ],
  "predictionQuestion": "string — Czech prediction question to think about before listening",
  "script": "string — the listening script in English, ${i} words. Natural dialogue or monologue. Use 'Speaker: ' labels for dialogues. Use \\n\\n for paragraph breaks.",
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
- Czech for instructions and questions, English for the script`,s=await R([{role:"user",content:l}],"gemini-3.1-pro",{max_tokens:6144});if(!s)return{success:!1,error:"AI neodpovědělo"};let n;try{const v=s.match(/\{[\s\S]*\}/);if(!v)throw new Error("Žádný JSON v odpovědi");n=JSON.parse(v[0])}catch(v){return{success:!1,error:`Chyba parsování JSON: ${v}`}}t?.("build","Sestavuji pracovní list...");const p=n.title||`${e.topic} – Poslech`;let r=0;const a=[];a.push({id:O(),order:r++,type:"heading",width:"full",content:{text:`🎧 ${p}`,level:"h1",headingStyle:"left-border"}});const u=(n.preListeningVocab||[]).map(v=>`<tr><td style="padding:4px 8px;border:1px solid #ccc"><strong>${v.word||""}</strong></td><td style="padding:4px 8px;border:1px solid #ccc">${v.translation||""}</td></tr>`).join("");a.push({id:O(),order:r++,type:"infobox",width:"full",content:{title:"📚 Před poslechem – Klíčová slovíčka",html:`<table style="width:100%;border-collapse:collapse">${u}</table>
<p style="margin-top:8px"><strong>Přemýšlej:</strong> ${n.predictionQuestion||""}</p>`,variant:"green"}}),a.push({id:O(),order:r++,type:"paragraph",width:"full",worksheetOnly:!0,content:{html:`<p><em>📌 Pro učitele: Přečtěte text nahlas nebo přehrajte nahrávku. Tempo: přirozené pro ${o}. Speaker: viz audioskript níže.</em></p>`}});const d=(n.script||"").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");a.push({id:O(),order:r++,type:"infobox",width:"full",content:{title:"🎧 Audioskript",html:`<p>${d}</p>`,variant:"blue",ttsText:n.script||"",ttsLang:"en-US"}});const f=n.orderingEvents||[],c=n.correctOrder||[];if(f.length>0){a.push({id:O(),order:r++,type:"heading",width:"full",content:{text:"Úkol 1 – Seřaď události",level:"h2"}});const v=f.map((j,N)=>`${String.fromCharCode(65+N)}. ${j}`).join("<br>"),A=c.length>0?` (Správné pořadí: ${c.map(j=>String.fromCharCode(64+j)).join(" → ")})`:"";a.push({id:O(),order:r++,type:"paragraph",width:"full",content:{html:`<p>Seřaď tyto události ve správném pořadí (1–${f.length}) podle poslechu:</p><p>${v}</p><p style="color:#666;font-size:0.85em">${A}</p>`}}),a.push({id:O(),order:r++,type:"free-answer",width:"full",content:{question:"Moje pořadí: ___ → ___ → ___ → ___ → ___",lines:1}})}const h=n.trueFalseStatements||[];if(h.length>0){a.push({id:O(),order:r++,type:"heading",width:"full",content:{text:"Úkol 2 – Pravda / Nepravda",level:"h2"}});for(let v=0;v<h.length;v++){const A=h[v],j=(A.answer||"").toUpperCase().startsWith("T");a.push({id:O(),order:r++,type:"multiple-choice",width:"full",content:{question:`${v+1}. ${A.statement||""}`,options:[{id:"T",text:"✅ True"},{id:"F",text:"❌ False"}],correctAnswers:[j?"T":"F"],allowMultiple:!1,layout:"horizontal",visualStyle:"playful"}})}}const m=n.comprehensionQuestions||[];m.length>0&&(a.push({id:O(),order:r++,type:"heading",width:"full",content:{text:"Úkol 3 – Otázky s porozuměním",level:"h2"}}),a.push({id:O(),order:r++,type:"free-answer",width:"full",content:{question:"Odpověz na otázky anglicky.",lines:2,subQuestions:m.map((v,A)=>({id:`comp-${A+1}`,text:`${A+1}. ${v}`,lines:2})),subColumns:1}})),n.answerKey&&a.push({id:O(),order:r++,type:"infobox",width:"full",content:{title:"✔️ Klíč",html:`<p>${n.answerKey}</p>`,variant:"yellow"}});const y=n.discussionQuestions||[];if(y.length>0){const v=y.map((A,j)=>`${j+1}. ${A}`).join("<br>");a.push({id:O(),order:r++,type:"free-answer",width:"full",content:{question:`💬 Diskuse:
${v}`,lines:3}})}t?.("save","Ukládám poslechovou aktivitu jako pracovní list a board...");const{worksheetId:g,boardId:b}=await ue(a,p,e);return{success:!0,id:g,linkedBoardId:b,preview:`Poslechová aktivita | ${o} | ${i} slov | ${e.grade}. ročník | + Board`}}async function mo(e){const t=M(e.grade),o=e.subjectCode?.includes("nemcin")?"German":e.subjectCode?.includes("francouz")?"French":"English",i=`Create a complete language unit plan for a Czech EFL teacher (grade ${e.grade}, CEFR ${t}).

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
`,l=await R([{role:"user",content:i}],"gemini-3.1-pro",{max_tokens:8192});if(!l)return{success:!1,error:"AI neodpovědělo"};const s=`doc-${Date.now()}-${Math.random().toString(36).slice(2,8)}`,n=`${e.topic} – Plán lekce`;return Je({id:s,title:n,content:l,type:"lesson"}),await be({id:s,title:n,content:l,documentType:"lesson"}),{success:!0,id:s,preview:`Plán lekce | 4 × 45 min | Cíle, aktivity, hodnocení, diferenciace | ${t} | ${e.grade}. ročník`}}const bo=Object.freeze(Object.defineProperty({__proto__:null,ILLUSTRATION_STYLE:st,generateContentPlanOnly:St,generateFromContentPlan:Pt,generateFromDataSet:Lt,generateIllustration:no,generateIllustrationPrompts:oo,generatePhoto:to,generatePhotoPrompts:eo,generateTextbookFromContentPlan:Gt,generateTextbookPlanOnly:Ht,loadSourceTextAsBlocks:Nt,loadSourceTextContent:tt,suggestImageGroups:so,translateImageCaptions:jt},Symbol.toStringTag,{value:"Module"}));export{st as I,vo as a,bo as m,jt as t};
