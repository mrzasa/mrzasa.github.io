import{w as B,x as E}from"../modules/unplugin-icons-7qU413e7.js";import{d as I,t as N,av as q,C as v,a3 as V,y as C,aw as $,o as r,b,f as z,A as d,c as k,g as D,i as M,h as R}from"../modules/vue-BLSydUt3.js";import{c as x,I as W,J,a2 as K,b as U}from"../index-DcHVXnvI.js";import{u as j}from"./context-CKsdHA5H.js";const F=["title"],G=I({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:x.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:a}=j(),o=N(),p=W();q(()=>{a.unregister(p)}),v(()=>{var t;(t=o.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),V(()=>{var m;if(!a||!((m=e.ranges)!=null&&m.length))return;const{start:t,end:s,delta:l}=a.resolve(e.at,e.ranges.length-1);a.register(p,{max:s,delta:l});const i=C(()=>Math.max(0,a.current-t+1)),c=C(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());v(()=>{if(!o.value)return;let u=e.ranges[i.value]??c.value;const h=u==="hide";o.value.classList.toggle(J,h),h&&(u=e.ranges[i.value+1]??c.value);const f=o.value.querySelector(".shiki"),y=Array.from(f.querySelectorAll("code > .line")),A=y.length;if(K(u,A,e.startLine,n=>[y[n]]),e.maxHeight){const n=Array.from(f.querySelectorAll(".line.highlighted"));n.reduce((_,L)=>L.offsetHeight+_,0)>o.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:g,copy:w}=$();function H(){var s,l;const t=(l=(s=o.value)==null?void 0:s.querySelector(".slidev-code"))==null?void 0:l.textContent;t&&w(t)}return(t,s)=>{const l=B,i=E;return r(),b("div",{ref_key:"el",ref:o,class:M(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:R({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[z(t.$slots,"default"),d(x).codeCopy?(r(),b("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:d(g)?"Copied":"Copy",onClick:s[0]||(s[0]=c=>H())},[d(g)?(r(),k(l,{key:0,class:"p-2 w-8 h-8"})):(r(),k(i,{key:1,class:"p-2 w-8 h-8"}))],8,F)):D("v-if",!0)],6)}}}),Y=U(G,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{Y as _};
