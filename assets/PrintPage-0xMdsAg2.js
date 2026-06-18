import{t as R,v as T,a as n,j as s}from"./vendor-react-Bff9NmsZ.js";import{PrintGridCanvas as D}from"./PrintGridCanvas-BatwgtXb.js";import{PrintFreeformCanvas as F}from"./PrintFreeformCanvas-B6zyQIp8.js";import{P as k,M}from"./page-layout-oZbXeFhn.js";import{s as N,g as L}from"./main-app-BHMLsxig.js";import{p as O}from"./pdf-export-D7NzDfyx.js";import"./vendor-supabase-Ds0jIvEe.js";import"./vendor-tiptap-WQxVZBcy.js";import"./worksheet-activity-numbers-DZa1qGbU.js";import"./vendor-dnd-DN7BAfCT.js";import"./maximize-2-D3XP0e5i.js";import"./square-sBKYi_qX.js";import"./minus-esWJTOeP.js";import"./type-561LWFuG.js";import"./image-0zkkqiva.js";import"./lock-_MiMY8YI.js";import"./trash-2-C4aJeDjs.js";import"./grid-3x3-BbkK2Yiq.js";import"./zoom-out-EV6H-zXb.js";import"./chevron-up-D9liPaKm.js";import"./check-D7r9NWeZ.js";import"./AssetPicker-CAXb9RYY.js";import"./useFileStorage-CUuppS1C.js";import"./main-WVgqMlpC.js";import"./teacher-file-image-url-CtbUuua6.js";import"./folder-open-DROotc_v.js";import"./film-7GPv0U8W.js";import"./search-D8xFRExI.js";import"./sparkles-DpC1Y208.js";import"./external-link-B-wiBpRb.js";import"./circle-alert-C-ZuM-Wp.js";import"./shapes-Gafp33zi.js";import"./index-Qh6DzrLM.js";import"./vendor-katex-BwoE7Amc.js";import"./GalleryGridPreview-LdXo8qQ8.js";import"./useTeacherFileImageUrl-DsYRB72P.js";import"./multiple-choice-answer-layout-CMjZ89xL.js";import"./worksheet-6jNaTtzT.js";import"./pocetnik-types-DYXoYMCV.js";import"./czech-typography-TpB6xGy7.js";import"./worksheet-blocks-k6EpGKRl.js";import"./fill-blank-editor-B-eWwXIz.js";import"./input-pAsqGAFv.js";import"./select-6-z1Ge6e.js";import"./controls-B557y2gx.js";import"./layout-grid-C5Tr75Fn.js";import"./pocetnik-problem-display-Bq7pWUMI.js";/* empty css                         */import"./worksheet-text-CtL_YAqE.js";import"./list-checks-BlKxxiRo.js";import"./message-square-ENNLKRm_.js";import"./info-kQjc9RxV.js";import"./text-align-start-DHWZUFYG.js";import"./text-highlight-DhYhpy5o.js";import"./VividbooksAiIcon-ChQVCK7O.js";import"./index-DDlvirwQ.js";import"./ai-chat-proxy-D2xiLy3b.js";import"./history-56PLsy2-.js";import"./chevron-left-YcBtt5PE.js";import"./qr-code-Bsr-S4Te.js";import"./circle-play-FBAFZhcB.js";import"./grip-vertical-DgcoYkfL.js";import"./generateCategoricalChart-D9AmZjB6.js";import"./diverging-DQ5vVfGJ.js";import"./index-BQm-5daC.js";import"./AreaChart-DxbO-iJq.js";import"./LineChart-DJfNDVTE.js";import"./RadarChart-Difdrerw.js";import"./design-system-aqCk2HjX.js";import"./worksheet-layout-context-BetG0jwm.js";async function W(o){try{const m=await fetch(`${N}/get-worksheet?id=${encodeURIComponent(o)}`,{headers:L({Accept:"application/json"})});return m.ok?await m.json():null}catch{return null}}function ee(){const{worksheetId:o}=R(),[m]=T(),[r,p]=n.useState(null),[h,f]=n.useState(null),[g,i]=n.useState(!0),e=r?.metadata?.pageFormat||"a4",w=k[e]||k.a4,l=m.get("bleed")==="1"||!!window.__PRINT_BLEED__,y=m.get("solutions")==="1",b=m.get("autoprint")==="1",_=n.useRef(!1),x=l?3*M:0,P=w.width+x*2;w.height+x*2;const v=l?e==="a4"?216:e==="a5"?154:182:e==="a4"?210:e==="a5"?148:176,S=l?e==="a4"?303:e==="a5"?216:256:e==="a4"?297:e==="a5"?210:250,A=n.useMemo(()=>`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
    transition: none !important;
    animation: none !important;
  }
  html, body {
    margin: 0;
    padding: 0;
    background: white;
    width: ${P}px;
    font-size: 16px;
  }
  @page {
    size: ${v}mm ${S}mm;
    margin: 0;
  }
  @media screen {
    html, body {
      background: #d1d5db;
      width: auto;
    }
    body {
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    .print-sheet {
      box-shadow: 0 4px 40px rgba(0,0,0,0.25);
    }
  }
  @media print {
    .print-sheet {
      box-shadow: none !important;
    }
  }
  .a4-page .overflow-hidden {
    overflow: hidden !important;
  }
`,[S,v,P]);n.useEffect(()=>{if(!o){f("Chybí ID pracovního listu"),i(!1);return}(async()=>{let c=!1;f(null);try{const t=window.__WORKSHEET_DATA__;if(t&&typeof t=="object"&&t.blocks){p(t),i(!1);return}}catch{}try{const t=O(o),d=sessionStorage.getItem(t)??localStorage.getItem(t);if(d){sessionStorage.removeItem(t),localStorage.removeItem(t),p(JSON.parse(d)),i(!1);return}}catch{}if(await new Promise(t=>{let d=0;const E=setInterval(()=>{d++;try{const u=window.__WORKSHEET_DATA__;if(u&&typeof u=="object"&&u.blocks){clearInterval(E),c=!0,p(u),i(!1),t();return}}catch{}d>=50&&(clearInterval(E),t())},100)}),c)return;try{const t=localStorage.getItem(`vividbooks_worksheet_${o}`);if(t){p(JSON.parse(t)),i(!1);return}}catch{}const a=await W(o);if(a){p(a),i(!1);return}f("Pracovní list nebyl nalezen. Otevři tisk z editoru (Export PDF), nebo se přihlas — přímé načtení /print/… nemusí mít data v prohlížeči."),i(!1)})()},[o]);const I=n.useCallback(()=>{const j=()=>{const c=Array.from(document.querySelectorAll("img"));return c.length===0?Promise.resolve():Promise.all(c.map(a=>a.complete&&a.naturalWidth>0?Promise.resolve():new Promise(t=>{a.addEventListener("load",()=>t(),{once:!0}),a.addEventListener("error",()=>t(),{once:!0}),setTimeout(t,1e4)}))).then(()=>{})};Promise.all([document.fonts.ready,j()]).then(()=>{setTimeout(()=>{window.__PRINT_READY__=!0,console.log("[PrintPage] __PRINT_READY__ set (fonts + images loaded)"),b&&!_.current&&(_.current=!0,window.print())},500)})},[b]);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:A}}),g&&s.jsx("div",{style:{padding:60,textAlign:"center",fontFamily:"system-ui",color:"#64748b"},children:"Načítám pracovní list…"}),h&&!r&&!g&&s.jsx("div",{style:{padding:60,textAlign:"center",fontFamily:"system-ui",color:"#ef4444"},children:h}),r&&r.metadata?.layoutMode==="freeform"?s.jsx(F,{worksheet:r,onStable:I,bleed:l,showSolutions:y}):r?s.jsx(D,{worksheet:r,onStable:I,bleed:l,showSolutions:y}):null]})}export{ee as PrintPage};
