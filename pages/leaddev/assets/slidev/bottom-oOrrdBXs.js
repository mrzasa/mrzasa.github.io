function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as n,an as z,ao as k,ap as $,y as m,aq as F,ar as j,Q as a,S as C,R as A,as as E,d as v,a3 as b,o as p,b as _,F as L,g as B,e as f,Y as r,at as S,c as D,h as P,i as N,ag as O,A as R,au as M,v as T,$ as x}from"../modules/vue-BLSydUt3.js";import{f as V,_ as q,c,b as w,v as I,w as W,x as G,y as K,z as U}from"../index-DcHVXnvI.js";import{u as H}from"./context-CKsdHA5H.js";const de=n(!1),ue=n(!1),pe=n(!1),Q=n(!1),ge=n(!0),me=z({xs:460,...E}),y=k(),fe=$(),ve=m(()=>y.height.value-y.width.value/V.value>120),_e=F(C?document.body:null),h=j(),he=m(()=>{var s,e;return["INPUT","TEXTAREA"].includes(((s=h.value)==null?void 0:s.tagName)||"")||((e=h.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),Ce=m(()=>{var s;return["BUTTON","A"].includes(((s=h.value)==null?void 0:s.tagName)||"")});a("slidev-camera","default",{listenToStorageChanges:!1});a("slidev-mic","default",{listenToStorageChanges:!1});const we=a("slidev-scale",0),Se=a("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),xe=a("slidev-show-editor",!1,{listenToStorageChanges:!1}),ye=a("slidev-editor-vertical",!1,{listenToStorageChanges:!1});a("slidev-editor-width",C?window.innerWidth*.4:318,{listenToStorageChanges:!1});a("slidev-editor-height",C?window.innerHeight*.4:300,{listenToStorageChanges:!1});const g=a("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),u=a("slidev-presenter-layout",1,{listenToStorageChanges:!1});function be(){u.value=u.value+1,u.value>2&&(u.value=1)}function Te(){g.value=Math.min(2,g.value+.1)}function ze(){g.value=Math.max(.5,g.value-.1)}const ke=A(Q);function $e(s,e=""){var t,o;const i=["slidev-page",e],l=(o=(t=s==null?void 0:s.meta)==null?void 0:t.slide)==null?void 0:o.no;return l!=null&&i.push(`slidev-page-${l}`),i.filter(Boolean).join(" ")}async function Fe(){const{saveAs:s}=await q(()=>import("../modules/file-saver-EUMWMpoS.js").then(e=>e.F),__vite__mapDeps([]));s(typeof c.download=="string"?c.download:c.exportFilename?`${c.exportFilename}.pdf`:"/pages/leaddev/slidev-exported.pdf",`${c.title}.pdf`)}const X={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},Y=f("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),J=f("div",null,"Loading slide...",-1),Z=v({__name:"SlideLoading",setup(s){const e=n(!1);return b(()=>{setTimeout(()=>{e.value=!0},200)}),(i,l)=>(p(),_("div",X,[e.value?(p(),_(L,{key:0},[Y,J],64)):B("v-if",!0)]))}}),ee=w(Z,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/internals/SlideLoading.vue"]]),se=v({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},active:{type:Boolean,default:!1},is:{type:Function,required:!0},route:{type:Object,required:!0}},setup(s){const e=s;r(I,e.route),r(W,n(e.route.no)),r(G,n(e.renderContext)),r(K,S(e,"active")),r(U,S(e,"clicksContext"));const i=m(()=>{var o,d;const t=((d=(o=e.route.meta)==null?void 0:o.slide)==null?void 0:d.frontmatter.zoom)??1;return t===1?void 0:{width:`${100/t}%`,height:`${100/t}%`,transformOrigin:"top left",transform:`scale(${t})`}}),l=M({loader:async()=>{const t=await e.is();return v({setup(o,{attrs:d}){return b(()=>{e.clicksContext.onMounted()}),()=>T(t.default,d)}})},delay:300,loadingComponent:ee});return(t,o)=>(p(),D(O(R(l)),{style:P(i.value),class:N({"disable-view-transition":!["slide","presenter"].includes(e.renderContext)})},null,8,["style","class"]))}}),je=w(se,[["__scopeId","data-v-026ee359"],["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/internals/SlideWrapper.vue"]]),Ae={render(){return[]}},te={class:"absolute top-0 right-4 p-2 text-base/4 text-neutral-400"},ae=f("br",null,null,-1),ne=f("span",{class:"mt-0",style:{"font-size":"0.8rem"}}," @mjrzasa ",-1),oe={__name:"global-bottom",setup(s){return H(),(e,i)=>(p(),_("footer",te,[x("Maciek Rząsa "),ae,x(),ne]))}},ie=w(oe,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/global-bottom.vue"]]),Ee={render(){return[T(ie)]}};export{Ee as G,je as S,Ae as a,Q as b,g as c,ze as d,de as e,ue as f,$e as g,ve as h,Te as i,xe as j,we as k,ye as l,pe as m,fe as n,Fe as o,u as p,ge as q,Ce as r,Se as s,ke as t,he as u,_e as v,y as w,me as x,be as y,h as z};