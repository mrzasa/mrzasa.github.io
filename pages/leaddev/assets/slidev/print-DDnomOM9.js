function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-fh-022lh.js","assets/modules/vue-BLSydUt3.js","assets/index-vXZpaxuA.js","assets/modules/shiki-CLbx7ow3.js","assets/modules/shiki-BSchMNmt.css","assets/index-vuRWC2uH.css","assets/slidev/bottom-BUw4MwU6.js","assets/slidev/context-DKbhXxfY.js","assets/bottom-DbIWt59F.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as m,y as l,M as R,Y as z,J as E,o as i,b as c,l as d,A as e,i as D,c as _,g as S,h as L,F as v,Z as q,e as A,f as F,C as V}from"../modules/vue-BLSydUt3.js";import{G as j,g as G,S as M,a as W,w as I}from"./bottom-BUw4MwU6.js";import{s as O,a as g,_ as T,c as k,i as H,b as h,u as C,d as x,C as J,e as $,f,p as K,g as X}from"../index-vXZpaxuA.js";import{P as Y}from"./PrintStyle-C1I3lnat.js";import"./context-DKbhXxfY.js";import"../modules/shiki-CLbx7ow3.js";const Z=["id"],Q=m({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(o){const{nav:t}=o,s=l(()=>t.currentSlideRoute.value),r=l(()=>({height:`${O.value}px`,width:`${g.value}px`})),n=R();T(()=>import("./DrawingPreview-fh-022lh.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(a=>n.value=a.default);const u=l(()=>`${s.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return z(H,E({nav:t,configs:k,themeConfigs:l(()=>k.themeConfig)})),(a,y)=>(i(),c("div",{id:u.value,class:"print-slide-container",style:L(r.value)},[d(e(j)),d(M,{is:s.value.component,"clicks-context":a.nav.clicksContext.value,class:D(e(G)(s.value)),route:s.value},null,8,["is","clicks-context","class","route"]),n.value?(i(),_(e(n),{key:0,page:s.value.no},null,8,["page"])):S("v-if",!0),d(e(W))],12,Z))}}),N=h(Q,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),U=m({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(o){const{route:t}=o,{isPrintWithClicks:s}=C(),r=x(t,s.value?0:J);return(n,u)=>(i(),c(v,null,[d(N,{"clicks-context":e(r),nav:e($)(n.route,e(r))},null,8,["clicks-context","nav"]),e(s)?(i(!0),c(v,{key:0},q(e(r).total,a=>(i(),_(N,{key:a,nav:e($)(n.route,e(x)(n.route,a))},null,8,["nav"]))),128)):S("v-if",!0)],64))}}),ee=h(U,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/internals/PrintSlide.vue"]]),te={id:"print-content"},se=m({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(o){const t=o,{slides:s,currentRoute:r}=C(),n=l(()=>t.width),u=l(()=>t.width/f.value),a=l(()=>n.value/u.value),y=l(()=>a.value<f.value?n.value/g.value:u.value*f.value/g.value);let p=s.value;r.value.query.range&&(p=K(p.length,r.value.query.range).map(w=>p[w-1]));const B=l(()=>({"select-none":!k.selectable}));return z(X,y),(b,w)=>(i(),c("div",{id:"print-container",class:D(B.value)},[A("div",te,[(i(!0),c(v,null,q(e(p),P=>(i(),_(ee,{key:P.no,route:P},null,8,["route"]))),128))]),F(b.$slots,"controls")],2))}}),ne=h(se,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ie=m({__name:"print",setup(o){const{isPrintMode:t}=C();return V(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,r)=>(i(),c(v,null,[e(t)?(i(),_(Y,{key:0})):S("v-if",!0),A("div",ae,[d(ne,{class:"w-full h-full",style:L({background:"var(--slidev-slide-container-background, black)"}),width:e(I).width.value},null,8,["style","width"])])],64))}}),pe=h(ie,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/pages/print.vue"]]);export{pe as default};
