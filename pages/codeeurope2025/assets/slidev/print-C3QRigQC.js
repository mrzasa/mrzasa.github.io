import{d,_ as u,y as h,b as a,e as t,x as s,A as r,F as f,Z as g,o as n,$ as v,l as x,g as b}from"../modules/vue-BLSydUt3.js";import{u as y,h as N,c as m,b as k}from"../index-DIwVQIh_.js";import{N as w}from"./NoteDisplay-C2AMAEGW.js";import"../modules/shiki-CLbx7ow3.js";const D={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},z={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=d({__name:"print",setup(M){const{slides:p,total:_}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const l=h(()=>p.value.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(n(),a("div",D,[t("div",L,[t("div",T,[t("h1",V,s(r(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(l.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",z,s(e==null?void 0:e.no)+"/"+s(r(_)),1),v(" "+s(e==null?void 0:e.title)+" ",1),A])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<l.value.length-1?(n(),a("hr",C)):b("v-if",!0)]))),128))])]))}}),Z=k(F,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};
