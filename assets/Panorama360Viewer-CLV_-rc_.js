import{a as s,j as a}from"./vendor-react-Bff9NmsZ.js";import{aj as I}from"./main-app-BHMLsxig.js";import{M as N}from"./minimize-2-BosznF78.js";import{M as j}from"./maximize-2-D3XP0e5i.js";function B({url:o,className:l,style:m,autoRotate:c=!0,fov:u=70}){const r=s.useRef(null),n=s.useRef({dragging:!1,lastX:0,lastY:0}),f=s.useRef({yaw:0,pitch:0,fov:u});s.useEffect(()=>{f.current={yaw:0,pitch:0,fov:u}},[o,u]),s.useEffect(()=>{const t=r.current;if(!t)return;const e=t.getContext("webgl",{antialias:!0});if(!e)return;const b=`
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `,p=`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uResolution;
      uniform float uYaw;
      uniform float uPitch;
      uniform float uFov;
      varying vec2 vUv;
      const float PI = 3.141592653589793;
      mat3 rotateX(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c);
      }
      mat3 rotateY(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
      }
      void main() {
        vec2 ndc = vUv * 2.0 - 1.0;
        ndc.x *= uResolution.x / uResolution.y;
        float z = 1.0 / tan(radians(uFov) * 0.5);
        vec3 dir = normalize(vec3(ndc.x, -ndc.y, z));
        dir = rotateY(uYaw) * rotateX(uPitch) * dir;
        float lon = atan(dir.x, dir.z);
        float lat = asin(clamp(dir.y, -1.0, 1.0));
        vec2 panoUv = vec2(fract(0.5 + lon / (2.0 * PI)), clamp(0.5 + lat / PI, 0.001, 0.999));
        gl_FragColor = texture2D(uTexture, panoUv);
      }
    `,_=(E,w)=>{const d=e.createShader(E);if(!d)throw new Error("WebGL shader unavailable");return e.shaderSource(d,w),e.compileShader(d),d},i=e.createProgram();if(!i)return;e.attachShader(i,_(e.VERTEX_SHADER,b)),e.attachShader(i,_(e.FRAGMENT_SHADER,p)),e.linkProgram(i),e.useProgram(i);const D=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,D),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const U=e.getAttribLocation(i,"aPosition");e.enableVertexAttribArray(U),e.vertexAttribPointer(U,2,e.FLOAT,!1,0,0);const P=e.createTexture();e.bindTexture(e.TEXTURE_2D,P),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([20,30,45,255]));const x=new Image;x.crossOrigin="anonymous",x.onload=()=>{e.bindTexture(e.TEXTURE_2D,P),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,x)},x.src=o;const k=e.getUniformLocation(i,"uResolution"),M=e.getUniformLocation(i,"uYaw"),X=e.getUniformLocation(i,"uPitch"),S=e.getUniformLocation(i,"uFov");let R=0,T=0;const y=E=>{const w=t.getBoundingClientRect(),d=window.devicePixelRatio||1,F=Math.max(1,Math.floor(w.width*d)),L=Math.max(1,Math.floor(w.height*d));if((t.width!==F||t.height!==L)&&(t.width=F,t.height=L),c&&!n.current.dragging){const C=T?Math.min(48,E-T):16;f.current.yaw+=C*18e-5}T=E,e.viewport(0,0,t.width,t.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);const A=f.current;e.uniform2f(k,t.width,t.height),e.uniform1f(M,A.yaw),e.uniform1f(X,A.pitch),e.uniform1f(S,A.fov),e.drawArrays(e.TRIANGLES,0,6),R=requestAnimationFrame(y)};return R=requestAnimationFrame(y),()=>cancelAnimationFrame(R)},[o,c]);const g=(t,e)=>{n.current={dragging:!0,lastX:t,lastY:e}},v=(t,e)=>{if(!n.current.dragging)return;const b=t-n.current.lastX,p=e-n.current.lastY;n.current.lastX=t,n.current.lastY=e,f.current.yaw+=b*.006,f.current.pitch=Math.max(-1.2,Math.min(1.2,f.current.pitch+p*.004))},h=()=>{n.current.dragging=!1};return a.jsx("canvas",{ref:r,className:l,onMouseDown:t=>g(t.clientX,t.clientY),onMouseMove:t=>v(t.clientX,t.clientY),onMouseUp:h,onMouseLeave:h,onTouchStart:t=>g(t.touches[0]?.clientX||0,t.touches[0]?.clientY||0),onTouchMove:t=>v(t.touches[0]?.clientX||0,t.touches[0]?.clientY||0),onTouchEnd:h,style:{width:"100%",height:"100%",display:"block",cursor:n.current.dragging?"grabbing":"grab",touchAction:"none",background:"#020617",...m}})}function Y(o){const[l,m]=s.useState(!1),c=s.useCallback(()=>{m(document.fullscreenElement===o.current)},[o]);s.useEffect(()=>(document.addEventListener("fullscreenchange",c),document.addEventListener("webkitfullscreenchange",c),()=>{document.removeEventListener("fullscreenchange",c),document.removeEventListener("webkitfullscreenchange",c)}),[c]),s.useEffect(()=>{if(!l)return;const r=n=>{n.key==="Escape"&&document.fullscreenElement===o.current&&document.exitFullscreen()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[l,o]);const u=s.useCallback(async()=>{const r=o.current;if(r)try{if(document.fullscreenElement===r)await document.exitFullscreen();else{const n=r.requestFullscreen?.bind(r)||r.webkitRequestFullscreen?.bind(r);n&&await n()}}catch{}},[o]);return{isFullscreen:l,toggleFullscreen:u}}function W({url:o,label:l="3D prostředí",className:m="",fullscreen:c=!0,layout:u="sidebar"}){const r=s.useRef(null),{isFullscreen:n,toggleFullscreen:f}=Y(r),g=u==="sidebar"?"relative aspect-square w-full shrink-0 overflow-hidden bg-slate-950 fullscreen:min-h-0 fullscreen:flex-1 fullscreen:aspect-auto fullscreen:w-full":"relative min-h-0 flex-1 overflow-hidden bg-slate-950 fullscreen:min-h-0 fullscreen:flex-1 fullscreen:w-full",v=u==="sidebar"?`relative flex w-full min-h-0 flex-col overflow-hidden rounded-lg bg-card text-card-foreground fullscreen:flex fullscreen:h-full fullscreen:w-full fullscreen:rounded-none fullscreen:border-0 fullscreen:bg-slate-950 ${m}`:`relative flex h-full min-h-0 w-full flex-col overflow-hidden bg-card text-card-foreground fullscreen:flex fullscreen:h-full fullscreen:w-full fullscreen:rounded-none fullscreen:border-0 fullscreen:bg-slate-950 ${m}`,h=a.jsxs("div",{className:"flex min-h-12 shrink-0 flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-border bg-muted/20 px-3 py-2 fullscreen:border-slate-800 fullscreen:bg-slate-900/90",onClick:e=>e.stopPropagation(),children:[a.jsx("span",{className:"min-w-0 truncate text-xs font-medium text-muted-foreground fullscreen:text-slate-300",children:n&&l?l:"360° · otáčej tažením"}),c?a.jsx(I,{type:"button",size:"icon",variant:"ghost",onClick:()=>{f()},className:"h-8 w-8 shrink-0 fullscreen:text-slate-200 fullscreen:hover:bg-slate-800",title:n?"Ukončit celou obrazovku":"Celá obrazovka","aria-label":n?"Ukončit celou obrazovku":"Celá obrazovka",children:n?a.jsx(N,{size:18}):a.jsx(j,{size:18})}):null]}),t=l&&u==="sidebar"&&!n?a.jsx("p",{className:"shrink-0 border-t border-border bg-muted/20 px-3 py-2 text-xs leading-snug text-muted-foreground",children:l}):null;return a.jsxs("div",{ref:r,className:v,children:[a.jsxs("div",{className:g,children:[a.jsx(B,{url:o,autoRotate:!0,className:"absolute inset-0 h-full w-full"}),n?a.jsx("div",{className:"pointer-events-none absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white",children:"360° · otáčej tažením"}):null]}),h,t]})}export{W as P};
