import{chatWithAIProxy as U}from"./ai-chat-proxy-CZyoh9V4.js";import{a as j}from"./index-NANQf1aA.js";import"./vendor-react-Dd9NAHYY.js";import"./vendor-supabase-Ds0jIvEe.js";import"./vendor-tiptap-BwGqL9Gn.js";const w="gemini-3-pro",x="gemini-3-flash";async function b(t,c){return U([{role:"user",content:t}],c)}async function X(t,c,a,n){const o=crypto.randomUUID();n?.(`📚 Sbírám data pro: "${t}"`);const[p,i,r,s]=await Promise.all([G(t,c,a,n),O(a,n),V(t,c,a,n),F(t,c,n)]);return n?.("✅ Všechna data shromážděna!"),{id:o,topic:t,subjectCode:c,grade:a,status:"ready",rvp:p,targetGroup:i,content:r,media:s,generatedMaterials:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}}async function G(t,c,a,n){n?.("📋 Analyzuji RVP očekávané výstupy...");const p=`Jsi expert na český Rámcový vzdělávací program (RVP ZV).

Analyzuj téma "${t}" pro předmět ${{dejepis:"Dějepis",zemepis:"Zeměpis",anglictina:"Anglický jazyk",cestina:"Český jazyk"}[c]||c}, ${a}. třída ZŠ.

Vrať JSON s těmito informacemi:
{
  "thematicArea": "Název tematického okruhu podle RVP",
  "expectedOutcomes": ["3-5 očekávaných výstupů z RVP relevantních k tomuto tématu"],
  "competencies": ["2-3 klíčové kompetence, které téma rozvíjí"],
  "hoursAllocated": <odhadovaný počet vyučovacích hodin pro toto téma>,
  "crossCurricular": ["1-2 průřezová témata nebo mezipředmětové vztahy"]
}

Vrať POUZE validní JSON, nic jiného.`;try{const i=await b(p,w),r=$(i);return{thematicArea:r.thematicArea||"",expectedOutcomes:r.expectedOutcomes||[],competencies:r.competencies||[],hoursAllocated:r.hoursAllocated||4,crossCurricular:r.crossCurricular||[]}}catch(i){return console.error("RVP collection error:",i),{thematicArea:t,expectedOutcomes:[],competencies:[],hoursAllocated:4,crossCurricular:[]}}}async function O(t,c){c?.("👥 Definuji cílovou skupinu...");const a={6:{ageRange:"11-12 let",gradeLevel:"6. třída ZŠ",cognitiveLevel:"Přechod od konkrétních k formálním operacím",priorKnowledge:["Základy pravěku z 1. stupně","Čtení mapy","Práce s časovou osou"]},7:{ageRange:"12-13 let",gradeLevel:"7. třída ZŠ",cognitiveLevel:"Formální operace, abstraktní myšlení",priorKnowledge:["Starověk","Základy středověku","Orientace v mapě"]},8:{ageRange:"13-14 let",gradeLevel:"8. třída ZŠ",cognitiveLevel:"Rozvinuté formální operace",priorKnowledge:["Středověk","Raný novověk","Historické souvislosti"]},9:{ageRange:"14-15 let",gradeLevel:"9. třída ZŠ",cognitiveLevel:"Pokročilé abstraktní myšlení, kritické hodnocení",priorKnowledge:["Novověk do 19. století","Průmyslová revoluce","Národní obrození"]}};return a[t]||a[6]}async function V(t,c,a,n){n?.("📖 Sbírám klíčové pojmy a fakta...");const o=`Jsi učitel ${c==="dejepis"?"dějepisu":c} na ZŠ.

Připrav podrobné obsahové informace k tématu "${t}" pro ${a}. třídu.

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
Vrať POUZE validní JSON.`;try{const p=await b(o,w),i=$(p);return{keyTerms:(i.keyTerms||[]).map(r=>({term:r.term||"",definition:r.definition||"",emoji:r.emoji||""})),keyFacts:i.keyFacts||[],timeline:(i.timeline||[]).map(r=>({date:r.date||"",event:r.event||"",importance:r.importance||"medium"})),personalities:(i.personalities||[]).map(r=>({name:r.name||"",role:r.role||"",description:r.description||""})),modernConnections:i.modernConnections||[],funFacts:i.funFacts||[],sources:i.sources||[]}}catch(p){return console.error("Content collection error:",p),{keyTerms:[],keyFacts:[],timeline:[],personalities:[],modernConnections:[],funFacts:[],sources:[]}}}async function F(t,c,a){a?.("🖼️ Hledám relevantní obrázky...");const n=`Pro téma "${t}" (předmět: ${c}) vygeneruj:
{
  "searchKeywords": ["5-8 klíčových slov pro vyhledávání obrázků v angličtině"],
  "emojis": ["5-8 relevantních emoji pro toto téma"],
  "themeColors": ["3-4 hex barvy vhodné pro vizuální styl tohoto tématu"]
}
Vrať POUZE JSON.`;let o=[],p=[],i=[];try{const s=await b(n,x),l=$(s);o=l.searchKeywords||[],p=l.emojis||[],i=l.themeColors||[]}catch(s){console.error("Keywords error:",s),o=[t.toLowerCase().replace(/\s+/g," ")],p=["📚","🎓"],i=["#8B4513","#D4A574"]}a?.(`🔍 Hledám obrázky pro: ${o.slice(0,3).join(", ")}...`);const r=await L(o,t);return a?.(`✅ Nalezeno ${r.length} obrázků`),{images:r,emojis:p,themeColors:i}}async function L(t,c,a,n){const o=[];try{const r=await J(t,c);o.push(...r)}catch(r){console.error("Image search error:",r)}return _(o).sort((r,s)=>s.relevanceScore-r.relevanceScore).slice(0,15)}async function J(t,c){const a=[];for(const n of t.slice(0,3))try{const o=`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(n)}&srnamespace=6&srlimit=5&format=json&origin=*`,p=await fetch(o);if(!p.ok)continue;const r=(await p.json()).query?.search||[];for(const s of r){const l=s.title,e=`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(l)}&prop=imageinfo&iiprop=url|extmetadata&format=json&origin=*`,u=await fetch(e);if(!u.ok)continue;const h=(await u.json()).query?.pages||{},d=Object.values(h)[0]?.imageinfo?.[0];d?.url&&a.push({id:crypto.randomUUID(),url:d.url,thumbnailUrl:d.url.replace("/commons/","/commons/thumb/")+"/400px-"+l.replace("File:",""),title:l.replace("File:","").replace(/\.[^/.]+$/,""),description:d.extmetadata?.ImageDescription?.value||"",source:"Wikimedia Commons",license:d.extmetadata?.LicenseShortName?.value||"CC",relevanceScore:Z(l,c,n),keywords:[n]})}}catch(o){console.error("Wikimedia search error:",o)}return a}function Z(t,c,a){const n=t.toLowerCase(),o=c.toLowerCase(),p=a.toLowerCase();let i=50;n.includes(o)&&(i+=30),n.includes(p)&&(i+=15);const r=o.split(/\s+/);for(const s of r)s.length>3&&n.includes(s)&&(i+=5);return Math.min(100,i)}function _(t){const c=new Set;return t.filter(a=>c.has(a.url)?!1:(c.add(a.url),!0))}function $(t){try{return JSON.parse(t)}catch{const c=t.match(/```(?:json)?\s*([\s\S]*?)```/);if(c)return JSON.parse(c[1].trim());const a=t.match(/\{[\s\S]*\}/);if(a)return JSON.parse(a[0]);throw new Error("Could not parse JSON from response")}}async function E(t,c,a,n,o){const p=crypto.randomUUID(),i=t.topicTitle;o?.(`📚 Vytvářím DataSet pro týden ${t.weekNumber}: "${i}"`);const r={thematicArea:c?.thematicArea||i,expectedOutcomes:c?.expectedOutcomes||[],competencies:c?.keyCompetencies||[],hoursAllocated:t.hoursAllocated||2,crossCurricular:c?.crossCurricularTopics||[]},s=await O(n);o?.("📖 Sbírám obsahová data...");const[l,e]=await Promise.all([K(i,a,n,t),F(i,a,o)]);return o?.(`✅ DataSet pro "${i}" vytvořen!`),{id:p,topic:i,subjectCode:a,grade:n,status:"ready",rvp:r,targetGroup:s,content:l,media:e,generatedMaterials:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}}async function K(t,c,a,n,o){const p=(n.vocabulary||[]).join(", "),i=(n.learningGoals||[]).join("; "),r=`Jsi učitel ${c==="dejepis"?"dějepisu":c} na ZŠ.

Připrav podrobné obsahové informace k tématu "${t}" pro ${a}. třídu.

${p?`Klíčové pojmy k zahrnutí: ${p}`:""}
${i?`Učební cíle: ${i}`:""}
${n.topicDescription?`Popis tématu: ${n.topicDescription}`:""}

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
Vrať POUZE validní JSON.`;try{const s=await b(r,w),l=$(s);return{keyTerms:(l.keyTerms||[]).map(e=>({term:e.term||"",definition:e.definition||"",emoji:e.emoji||""})),keyFacts:l.keyFacts||[],timeline:(l.timeline||[]).map(e=>({date:e.date||"",event:e.event||"",importance:e.importance||"medium"})),personalities:(l.personalities||[]).map(e=>({name:e.name||"",role:e.role||"",description:e.description||""})),modernConnections:l.modernConnections||[],funFacts:l.funFacts||[],sources:l.sources||[]}}catch(s){return console.error("Content collection from plan error:",s),{keyTerms:(n.vocabulary||[]).map(l=>({term:l,definition:"",emoji:"📖"})),keyFacts:[],timeline:[],personalities:[],modernConnections:[],funFacts:[],sources:[]}}}async function Y(t,c,a,n,o,p=!0){const i=[];o?.(`📦 Vytvářím ${t.length} DataSetů...`);for(let r=0;r<t.length;r++){const s=t[r],l=c.get(s.id)||null;o?.(`[${r+1}/${t.length}] ${s.topicTitle}`);try{const e=await E(s,l,a,n,o);if(p){const{data:u}=await j.auth.getUser();o?.("💾 Ukládám DataSet do databáze...");const v={thematicArea:String(e.rvp?.thematicArea||""),expectedOutcomes:Array.isArray(e.rvp?.expectedOutcomes)?e.rvp.expectedOutcomes:[],competencies:Array.isArray(e.rvp?.competencies)?e.rvp.competencies:[],hoursAllocated:Number(e.rvp?.hoursAllocated)||2,crossCurricular:Array.isArray(e.rvp?.crossCurricular)?e.rvp.crossCurricular:[]},h={ageRange:String(e.targetGroup?.ageRange||""),gradeLevel:String(e.targetGroup?.gradeLevel||""),cognitiveLevel:String(e.targetGroup?.cognitiveLevel||""),priorKnowledge:Array.isArray(e.targetGroup?.priorKnowledge)?e.targetGroup.priorKnowledge:[],specialNeeds:e.targetGroup?.specialNeeds||null},y={keyTerms:Array.isArray(e.content?.keyTerms)?e.content.keyTerms:[],keyFacts:Array.isArray(e.content?.keyFacts)?e.content.keyFacts:[],facts:Array.isArray(e.content?.facts)?e.content.facts:[],timeline:Array.isArray(e.content?.timeline)?e.content.timeline:[],personalities:Array.isArray(e.content?.personalities)?e.content.personalities:[],modernConnections:Array.isArray(e.content?.modernConnections)?e.content.modernConnections:[],funFacts:Array.isArray(e.content?.funFacts)?e.content.funFacts:[],sources:Array.isArray(e.content?.sources)?e.content.sources:[]},d={images:Array.isArray(e.media?.images)?e.media.images:[],emojis:Array.isArray(e.media?.emojis)?e.media.emojis:[],themeColors:Array.isArray(e.media?.themeColors)?e.media.themeColors:[]},f={topic:String(e.topic),subject_code:String(e.subjectCode),grade:Number(e.grade),status:"ready",rvp:v,target_group:h,content:y,media:d,generated_materials:[]};u.user?.id&&(f.created_by=u.user.id),s.id&&typeof s.id=="string"&&s.id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)&&(f.weekly_plan_id=s.id),console.log("[DataCollector] Inserting DataSet:",JSON.stringify(f,null,2));const{data:A,error:g}=await j.from("topic_data_sets").insert(f).select("id").single();g?(console.error("[DataCollector] Error saving DataSet:",g),console.error("[DataCollector] Insert data was:",JSON.stringify(f,null,2)),o?.(`❌ Chyba ukládání: ${g.message} (code: ${g.code}, details: ${g.details}, hint: ${g.hint})`)):(A?.id&&(e.id=A.id),o?.(`✅ DataSet "${s.topicTitle}" uložen (ID: ${A?.id})`))}i.push(e)}catch(e){console.error(`Error creating DataSet for ${s.topicTitle}:`,e),o?.(`❌ Chyba pro "${s.topicTitle}": ${e}`)}}return o?.(`✅ Vytvořeno ${i.length}/${t.length} DataSetů`),i}async function P(t,c,a,n,o,p=!0){const i=[];o?.(`📦 Vytvářím ${t.length} DataSetů z RVP témat...`);for(let r=0;r<t.length;r++){const s=t[r],l=c.get(s.id)||[],e=s.topic||s.thematicArea;o?.(`[${r+1}/${t.length}] ${e}`);try{const u=new Set,v=new Set;let h=0;const y=[];for(const k of l)k.vocabulary?.forEach(S=>u.add(S)),k.learningGoals?.forEach(S=>v.add(S)),h+=k.hoursAllocated||2,y.push(k.weekNumber);o?.(`  📅 ${l.length} týdnů, ${h} hodin`);const d={thematicArea:s.thematicArea,expectedOutcomes:s.expectedOutcomes||[],competencies:s.keyCompetencies||[],hoursAllocated:h||s.hoursAllocated||2,crossCurricular:s.crossCurricularTopics||[]},f=await O(n);o?.("  📖 Sbírám obsahová data...");const A={id:s.id,weekNumber:y[0]||1,topicTitle:e,topicDescription:s.expectedOutcomes.join(". "),learningGoals:Array.from(v),vocabulary:Array.from(u),hoursAllocated:h},[g,z]=await Promise.all([M(e,a,n,A,o),F(e,a,o)]),m={id:crypto.randomUUID(),topic:e,subjectCode:a,grade:n,status:"ready",rvp:d,targetGroup:f,content:g,media:z,generatedMaterials:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};if(o?.(`✅ DataSet pro "${e}" vytvořen!`),p){const{data:k}=await j.auth.getUser();o?.("💾 Ukládám DataSet do databáze...");const S={thematicArea:String(m.rvp?.thematicArea||""),expectedOutcomes:Array.isArray(m.rvp?.expectedOutcomes)?m.rvp.expectedOutcomes:[],competencies:Array.isArray(m.rvp?.competencies)?m.rvp.competencies:[],hoursAllocated:Number(m.rvp?.hoursAllocated)||2,crossCurricular:Array.isArray(m.rvp?.crossCurricular)?m.rvp.crossCurricular:[]},N={ageRange:String(m.targetGroup?.ageRange||""),gradeLevel:String(m.targetGroup?.gradeLevel||""),cognitiveLevel:String(m.targetGroup?.cognitiveLevel||""),priorKnowledge:Array.isArray(m.targetGroup?.priorKnowledge)?m.targetGroup.priorKnowledge:[],specialNeeds:m.targetGroup?.specialNeeds||null},R={keyTerms:Array.isArray(m.content?.keyTerms)?m.content.keyTerms:[],keyFacts:Array.isArray(m.content?.keyFacts)?m.content.keyFacts:[],facts:Array.isArray(m.content?.facts)?m.content.facts:[],timeline:Array.isArray(m.content?.timeline)?m.content.timeline:[],personalities:Array.isArray(m.content?.personalities)?m.content.personalities:[],modernConnections:Array.isArray(m.content?.modernConnections)?m.content.modernConnections:[],funFacts:Array.isArray(m.content?.funFacts)?m.content.funFacts:[],sources:Array.isArray(m.content?.sources)?m.content.sources:[]},T={images:Array.isArray(m.media?.images)?m.media.images:[],emojis:Array.isArray(m.media?.emojis)?m.media.emojis:[],themeColors:Array.isArray(m.media?.themeColors)?m.media.themeColors:[]},C={topic:String(m.topic),subject_code:String(m.subjectCode),grade:Number(m.grade),status:"ready",rvp:S,target_group:N,content:R,media:T,generated_materials:[]};k.user?.id&&(C.created_by=k.user.id),console.log("[DataCollector] Inserting RVP DataSet:",C.topic);const{data:D,error:I}=await j.from("topic_data_sets").insert(C).select("id").single();I?(console.error("[DataCollector] Error saving DataSet:",I),o?.(`❌ Chyba ukládání: ${I.message}`)):(D?.id&&(m.id=D.id),o?.(`✅ DataSet "${e}" uložen (ID: ${D?.id})`))}i.push(m)}catch(u){console.error(`Error creating DataSet for ${e}:`,u),o?.(`❌ Chyba pro "${e}": ${u}`)}}return o?.(`✅ Vytvořeno ${i.length}/${t.length} DataSetů z RVP`),i}async function M(t,c,a,n,o){const p=(n.vocabulary||[]).join(", "),i=(n.learningGoals||[]).join("; "),r=`Jsi učitel ${c==="dejepis"?"dějepisu":c} na ZŠ.

Připrav podrobné obsahové informace k tématu "${t}" pro ${a}. třídu.

${p?`Klíčové pojmy k zahrnutí: ${p}`:""}
${i?`Učební cíle: ${i}`:""}
${n.topicDescription?`Popis tématu: ${n.topicDescription}`:""}

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
Vrať POUZE validní JSON.`;try{const s=await b(r,w),l=$(s);return{keyTerms:(l.keyTerms||[]).map(e=>({term:e.term||"",definition:e.definition||"",emoji:e.emoji||""})),keyFacts:l.keyFacts||[],facts:l.keyFacts||[],timeline:(l.timeline||[]).map(e=>({date:e.date||"",event:e.event||"",importance:e.importance||"medium"})),personalities:(l.personalities||[]).map(e=>({name:e.name||"",role:e.role||"",description:e.description||""})),modernConnections:l.modernConnections||[],funFacts:l.funFacts||[],sources:l.sources||[]}}catch(s){return console.error("Error collecting content info:",s),{keyTerms:n.vocabulary?.map(l=>({term:l,definition:"",emoji:""}))||[],keyFacts:n.learningGoals||[],facts:n.learningGoals||[],timeline:[],personalities:[],modernConnections:[],funFacts:[],sources:[]}}}async function ee(t,c=6){console.log("[ImageSearch] Searching for:",t);const a=[];try{const n=`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(t)}&srnamespace=6&srlimit=${c*2}&format=json&origin=*`,o=await fetch(n);if(!o.ok)throw new Error(`Wikimedia search failed: ${o.status}`);const i=(await o.json()).query?.search||[];for(const r of i.slice(0,c))try{const s=r.title.replace("File:",""),l=`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(r.title)}&prop=imageinfo&iiprop=url|size|mime&format=json&origin=*`,e=await fetch(l);if(!e.ok)continue;const v=(await e.json()).query?.pages;if(!v)continue;const h=Object.keys(v)[0],y=v[h]?.imageinfo?.[0];if(!y?.url)continue;const d=y.mime||"";if(!d.startsWith("image/")||d.includes("svg")||d.includes("gif"))continue;a.push({url:y.url,thumbnailUrl:y.url.replace(/\/commons\//,"/commons/thumb/")+"/300px-"+encodeURIComponent(s),title:s.replace(/_/g," ").replace(/\.\w+$/,""),source:"wikimedia",license:"cc",width:y.width||0,height:y.height||0,relevanceScore:1-i.indexOf(r)/i.length})}catch(s){console.error("Error processing search result:",s)}}catch(n){console.error("[ImageSearch] Error:",n)}return console.log("[ImageSearch] Found:",a.length,"images"),a.slice(0,c)}export{F as collectMediaInfo,O as collectTargetGroupInfo,X as collectTopicData,E as createDataSetFromWeeklyPlan,P as createDataSetsFromRvpTopics,Y as createDataSetsFromWeeklyPlans,ee as searchImagesForTopic};
