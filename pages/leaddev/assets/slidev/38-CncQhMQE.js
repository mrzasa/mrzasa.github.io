import{d as _,o as a,b as p,e as s,f as i,i as l,ak as h,c as f,k as c,a1 as g,q as y,s as v,A as u,$ as e}from"../modules/vue-BLSydUt3.js";import{b as m,an as d}from"../index-DcHVXnvI.js";import{p as w,u as k,f as b}from"./context-CKsdHA5H.js";import"../modules/shiki-CLbx7ow3.js";const C=_({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(r){const t=r;return(o,n)=>(a(),p("div",{class:l(["slidev-layout two-columns w-full h-full grid grid-cols-2",t.layoutClass])},[s("div",{class:l(["col-left",t.class])},[i(o.$slots,"default")],2),s("div",{class:l(["col-right",t.class])},[i(o.$slots,"right")],2)],2))}}),P=m(C,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/layouts/two-cols.vue"]]),S=s("h1",null,[e("Some Musings and "),s("br"),e(" Questions")],-1),x=s("ol",null,[s("li",null,[e("Why passenger doesn’t start a new process "),s("br"),e("("),s("strong",null,"H:"),e(' maybe old processes aren’t "fully" killed?)')]),s("li",null,[e("Why only after reaching threshold the queue starts growing rapidly? "),s("br"),e(" ("),s("strong",null,"H:"),e(" ~5 slow requests at the same time?)")]),s("li",null,"Memory leak - Nope!")],-1),B=s("h1",null,[e("Transatlantic "),s("br"),e(" Answer")],-1),T=s("ol",null,[s("li",null,[e("Passenger enters deployment resist mode because of "),s("code",null,"PassengerStartTimeout")]),s("li",null,"When a process dies, passenger is in resist mode, no new process are spawn")],-1),$=[B,T],q={__name:"38",setup(r){return w(d),k(),(t,o)=>{const n=h("click");return a(),f(P,y(v(u(b)(u(d),37))),{right:c(z=>[g((a(),p("div",null,[...$])),[[n]])]),default:c(()=>[S,x]),_:1},16)}}},H=m(q,[["__file","/@slidev/slides/38.md"]]);export{H as default};
