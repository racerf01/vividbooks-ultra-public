const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ai-chat-proxy-D2xiLy3b.js","assets/main-app-BHMLsxig.js","assets/main-WVgqMlpC.js","assets/vendor-react-Bff9NmsZ.js","assets/vendor-supabase-Ds0jIvEe.js","assets/vendor-tiptap-WQxVZBcy.js","assets/main-app-R1p6ZZgE.css"])))=>i.map(i=>d[i]);
import{_ as u}from"./main-WVgqMlpC.js";import{b as l}from"./czech-typography-TpB6xGy7.js";const d=["#fde68a","#bbf7d0","#bfdbfe","#fecaca","#e9d5ff","#fed7aa","#a5f3fc","#fbcfe8"],g=8,f="gemini-3-flash";function m(r,i){return`Jsi editor učebnicových textů. Formátuj každý blok a vrať POUZE čistý JSON.

${r.map(n=>{if(n.type==="heading"){const s=n.content?.text||"",t=i[n.id]||"#fde68a";return`ID:${n.id} | TYPE:heading | COLOR:${t} | TEXT:${s}`}const c=(n.content?.html||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();return`ID:${n.id} | TYPE:paragraph | TEXT:${c.substring(0,500)}`}).join(`
---
`)}

PRAVIDLA:
- paragraph: identifikuj 3-6 klíčových odborných pojmů, obaluj je <strong>POJEM</strong>. Vrať celý text jako: <p>text s <strong>pojmy</strong></p>
- heading: identifikuj 1-2 klíčové pojmy, obaluj je <mark style="background-color:COLOR;border-radius:3px;padding:0 3px">POJEM</mark> kde COLOR je hodnota z COLOR pole výše. Vrať jen text bez <p> tagů.
- Neměň slovosled ani délku textu. Jen přidej tagy.

Vrať JSON kde každý klíč je ID bloku a hodnota je upravený text:
{
  "ID_BLOKU": "upravený text",
  "ID_BLOKU2": "upravený text"
}`}async function j(r){const i=r.filter(a=>a.type==="paragraph"||a.type==="heading");if(i.length===0)return r;try{const{chatWithAIProxy:a}=await u(async()=>{const{chatWithAIProxy:t}=await import("./ai-chat-proxy-D2xiLy3b.js");return{chatWithAIProxy:t}},__vite__mapDeps([0,1,2,3,4,5,6])),n=[],h=()=>{const t=d.filter(p=>!n.includes(p)),e=t.length>0?t:d,o=e[Math.floor(Math.random()*e.length)];return n.push(o),o},c={};i.filter(t=>t.type==="heading").forEach(t=>{c[t.id]=h()});const s={};for(let t=0;t<i.length;t+=g){const e=i.slice(t,t+g);try{const p=(await a([{role:"system",content:"Vrať POUZE čistý JSON objekt. Žádný markdown, žádný text mimo JSON."},{role:"user",content:m(e,c)}],f,{temperature:.2,max_tokens:4096,persistToGlobalThread:!1,threadId:null,rag:{enabled:!1}})).replace(/```json?\s*/gi,"").replace(/```\s*/g,"").trim();Object.assign(s,JSON.parse(p))}catch(o){console.warn("[TextHighlight] Batch failed, keeping original text:",o)}}return Object.keys(s).length===0?r:r.map(t=>{const e=s[t.id];if(!e)return t;if(t.type==="heading")return{...t,content:{...t.content,text:l(e)}};if(t.type==="paragraph"){const o=e.startsWith("<p>")?e:`<p>${e}</p>`;return{...t,content:{...t.content,html:l(o)}}}return t})}catch(a){return console.warn("[TextHighlight] Highlighting skipped:",a),r}}export{j as h};
