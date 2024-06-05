import{T as Nt,Q as st,aA as kt,t as z,y as rt,J as It,aB as At,n as Ct,D as Ft,d as Tt,A as ct,o as Kt,b as $t,g as Ot}from"../modules/vue-BLSydUt3.js";import{u as Rt,c as dt,a8 as nt,a9 as ft,aa as zt,b as Ut}from"../index-vXZpaxuA.js";import{u as Vt}from"./bottom-BUw4MwU6.js";var jt=Object.defineProperty,pt=Object.getOwnPropertySymbols,Ht=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,gt=(t,e,s)=>e in t?jt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,it=(t,e)=>{for(var s in e||(e={}))Ht.call(e,s)&&gt(t,s,e[s]);if(pt)for(var s of pt(e))qt.call(e,s)&&gt(t,s,e[s]);return t},Bt=()=>({emit(t,...e){for(let s=0,r=this.events[t]||[],i=r.length;s<i;s++)r[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(i=>e!==i)}}});function mt(t,e,s,r=i=>i){return t*r(.5-e*(.5-s))}function Gt(t){return[-t[0],-t[1]]}function M(t,e){return[t[0]+e[0],t[1]+e[1]]}function b(t,e){return[t[0]-e[0],t[1]-e[1]]}function E(t,e){return[t[0]*e,t[1]*e]}function Xt(t,e){return[t[0]/e,t[1]/e]}function U(t){return[t[1],-t[0]]}function vt(t,e){return t[0]*e[0]+t[1]*e[1]}function Yt(t,e){return t[0]===e[0]&&t[1]===e[1]}function Zt(t){return Math.hypot(t[0],t[1])}function Qt(t){return t[0]*t[0]+t[1]*t[1]}function yt(t,e){return Qt(b(t,e))}function Pt(t){return Xt(t,Zt(t))}function Jt(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function V(t,e,s){let r=Math.sin(s),i=Math.cos(s),n=t[0]-e[0],a=t[1]-e[1],o=n*i-a*r,l=n*r+a*i;return[o+e[0],l+e[1]]}function ot(t,e,s){return M(t,E(b(e,t),s))}function xt(t,e,s){return M(t,E(e,s))}var{min:K,PI:Wt}=Math,_t=.275,j=Wt+1e-4;function te(t,e={}){let{size:s=16,smoothing:r=.5,thinning:i=.5,simulatePressure:n=!0,easing:a=u=>u,start:o={},end:l={},last:g=!1}=e,{cap:v=!0,easing:y=u=>u*(2-u)}=o,{cap:P=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=o.taper===!1?0:o.taper===!0?Math.max(s,d):o.taper,S=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,T=Math.pow(s*r,2),D=[],h=[],x=t.slice(0,10).reduce((u,w)=>{let p=w.pressure;if(n){let m=K(1,w.distance/s),W=K(1,1-m);p=K(1,u+(W-u)*(m*_t))}return(u+p)/2},t[0].pressure),_=mt(s,i,t[t.length-1].pressure,a),Y,Z=t[0].vector,O=t[0].point,H=O,A=O,C=H,Q=!1;for(let u=0;u<t.length;u++){let{pressure:w}=t[u],{point:p,vector:m,distance:W,runningLength:R}=t[u];if(u<t.length-1&&d-R<3)continue;if(i){if(n){let I=K(1,W/s),et=K(1,1-I);w=K(1,x+(et-x)*(I*_t))}_=mt(s,i,w,a)}else _=s/2;Y===void 0&&(Y=_);let Mt=R<c?y(R/c):1,Lt=d-R<S?f((d-R)/S):1;_=Math.max(.01,_*Math.min(Mt,Lt));let ht=(u<t.length-1?t[u+1]:t[u]).vector,tt=u<t.length-1?vt(m,ht):1,Dt=vt(m,Z)<0&&!Q,lt=tt!==null&&tt<0;if(Dt||lt){let I=E(U(Z),_);for(let et=1/13,B=0;B<=1;B+=et)A=V(b(p,I),p,j*B),D.push(A),C=V(M(p,I),p,j*-B),h.push(C);O=A,H=C,lt&&(Q=!0);continue}if(Q=!1,u===t.length-1){let I=E(U(m),_);D.push(b(p,I)),h.push(M(p,I));continue}let ut=E(U(ot(ht,m,tt)),_);A=b(p,ut),(u<=1||yt(O,A)>T)&&(D.push(A),O=A),C=M(p,ut),(u<=1||yt(H,C)>T)&&(h.push(C),H=C),x=w,Z=m}let N=t[0].point.slice(0,2),k=t.length>1?t[t.length-1].point.slice(0,2):M(t[0].point,[1,1]),J=[],q=[];if(t.length===1){if(!(c||S)||g){let u=xt(N,Pt(U(b(N,k))),-(Y||_)),w=[];for(let p=1/13,m=p;m<=1;m+=p)w.push(V(u,N,j*2*m));return w}}else{if(!(c||S&&t.length===1))if(v)for(let w=1/13,p=w;p<=1;p+=w){let m=V(h[0],N,j*p);J.push(m)}else{let w=b(D[0],h[0]),p=E(w,.5),m=E(w,.51);J.push(b(N,p),b(N,m),M(N,m),M(N,p))}let u=U(Gt(t[t.length-1].vector));if(S||c&&t.length===1)q.push(k);else if(P){let w=xt(k,u,_);for(let p=1/29,m=p;m<1;m+=p)q.push(V(w,k,j*3*m))}else q.push(M(k,E(u,_)),M(k,E(u,_*.99)),b(k,E(u,_*.99)),b(k,E(u,_)))}return D.concat(q,h.reverse(),J)}function ee(t,e={}){var s;let{streamline:r=.5,size:i=16,last:n=!1}=e;if(t.length===0)return[];let a=.15+(1-r)*.85,o=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(o.length===2){let f=o[1];o=o.slice(0,-1);for(let d=1;d<5;d++)o.push(ot(o[0],f,d/4))}o.length===1&&(o=[...o,[...M(o[0],[1,1]),...o[0].slice(2)]]);let l=[{point:[o[0][0],o[0][1]],pressure:o[0][2]>=0?o[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],g=!1,v=0,y=l[0],P=o.length-1;for(let f=1;f<o.length;f++){let d=n&&f===P?o[f].slice(0,2):ot(y.point,o[f],a);if(Yt(y.point,d))continue;let c=Jt(d,y.point);if(v+=c,f<P&&!g){if(v<i)continue;g=!0}y={point:d,pressure:o[f][2]>=0?o[f][2]:.5,vector:Pt(b(y.point,d)),distance:c,runningLength:v},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function se(t,e={}){return te(ee(t,e),e)}function G(t,e){return t-e}function re(t){return t<0?-1:1}function X(t){return[Math.abs(t),re(t)]}function bt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var ne=2,L=ne,$=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,r;const i=this.drauu.el,n=(e=this.drauu.options.coordinateScale)!=null?e:1,a=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-o.left+a.x)*n,y:(t.pageY-o.top+a.y)*n,pressure:t.pressure}}else{const o=this.drauu.svgPoint;o.x=t.clientX+a.x,o.y=t.clientY+a.y;const l=o.matrixTransform((r=i.getScreenCTM())==null?void 0:r.inverse());return{x:l.x*n,y:l.y*n,pressure:t.pressure}}}createElement(t,e){var s;const r=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?it(it({},this.brush),e):this.brush;return r.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),r.setAttribute("stroke",i.color),r.setAttribute("stroke-width",i.size.toString()),r.setAttribute("stroke-linecap","round"),i.dasharray&&r.setAttribute("stroke-dasharray",i.dasharray),r}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(L))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},ie=class St extends ${constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return St.getSvgData(e,this.brush)}static getSvgData(e,s){const r=se(e,it({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!r.length)return"";const i=r.reduce((n,[a,o],l,g)=>{const[v,y]=g[(l+1)%g.length];return n.push(a,o,(a+v)/2,(o+y)/2),n},["M",...r[0],"Q"]);return i.push("Z"),i.map(n=>typeof n=="number"?n.toFixed(2):n).join(" ")}},oe=class extends ${onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=X(t.x-this.start.x),[r,i]=X(t.y-this.start.y);if(this.shiftPressed){const n=Math.min(e,r);e=n,r=n}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",r);else{const[n,a]=[this.start.x,this.start.x+e*s].sort(G),[o,l]=[this.start.y,this.start.y+r*i].sort(G);this.attr("cx",(n+a)/2),this.attr("cy",(o+l)/2),this.attr("rx",(a-n)/2),this.attr("ry",(l-o)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Et(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",e),r.setAttribute("id",t),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(i),s.appendChild(r),s}var ae=class extends ${onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=bt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Et(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const r=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let n=r/i;n=Math.round(n),Math.abs(n)<=1?(e=this.start.x+i*n,s=this.start.y+i):(e=this.start.x+r,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},he=class extends ${onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=X(t.x-this.start.x),[r,i]=X(t.y-this.start.y);if(this.shiftPressed){const n=Math.min(e,r);e=n,r=n}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-r),this.attr("width",e*2),this.attr("height",r*2);else{const[n,a]=[this.start.x,this.start.x+e*s].sort(G),[o,l]=[this.start.y,this.start.y+r*i].sort(G);this.attr("x",n),this.attr("y",o),this.attr("width",a-n),this.attr("height",l-o)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function le(t,e){const s=t.x-e.x,r=t.y-e.y;return s*s+r*r}function ue(t,e,s){let r=e.x,i=e.y,n=s.x-r,a=s.y-i;if(n!==0||a!==0){const o=((t.x-r)*n+(t.y-i)*a)/(n*n+a*a);o>1?(r=s.x,i=s.y):o>0&&(r+=n*o,i+=a*o)}return n=t.x-r,a=t.y-i,n*n+a*a}function ce(t,e){let s=t[0];const r=[s];let i;for(let n=1,a=t.length;n<a;n++)i=t[n],le(i,s)>e&&(r.push(i),s=i);return s!==i&&i&&r.push(i),r}function at(t,e,s,r,i){let n=r,a=0;for(let o=e+1;o<s;o++){const l=ue(t[o],t[e],t[s]);l>n&&(a=o,n=l)}n>r&&(a-e>1&&at(t,e,a,r,i),i.push(t[a]),s-a>1&&at(t,a,s,r,i))}function de(t,e){const s=t.length-1,r=[t[0]];return at(t,0,s,e,r),r.push(t[s]),r}function wt(t,e,s=!1){if(t.length<=2)return t;const r=e!==void 0?e*e:1;return t=s?t:ce(t,r),t=de(t,r),t}var fe=class F extends ${constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=bt();const s=Et(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=wt(this.points,1,!0),this.count=0),this.attr("d",F.toSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",F.toSvgData(wt(this.points,1,!0))),!e.getTotalLength()))}static line(e,s){const r=s.x-e.x,i=s.y-e.y;return{length:Math.sqrt(r**2+i**2),angle:Math.atan2(i,r)}}static controlPoint(e,s,r,i){const n=s||e,a=r||e,o=.2,l=F.line(n,a),g=l.angle+(i?Math.PI:0),v=l.length*o,y=e.x+Math.cos(g)*v,P=e.y+Math.sin(g)*v;return{x:y,y:P}}static bezierCommand(e,s,r){const i=F.controlPoint(r[s-1],r[s-2],e),n=F.controlPoint(e,r[s-1],r[s+1],!0);return`C ${i.x.toFixed(L)},${i.y.toFixed(L)} ${n.x.toFixed(L)},${n.y.toFixed(L)} ${e.x.toFixed(L)},${e.y.toFixed(L)}`}static toSvgData(e){return e.reduce((s,r,i,n)=>i===0?`M ${r.x.toFixed(L)},${r.y.toFixed(L)}`:`${s} ${F.bezierCommand(r,i,n)}`,"")}},pe=class extends ${constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,r)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const n=s[i];if(n.getTotalLength){const a=n.getTotalLength();for(let o=0;o<this.pathSubFactor;o++){const l=n.getPointAtLength(a*o/this.pathSubFactor),g=n.getPointAtLength(a*(o+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:g.x,y1:l.y,y2:g.y,segment:o,element:r||n})}}else n.children&&e(n.children,n)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,r=t.x2,i=e.x1,n=e.x2,a=t.y1,o=t.y2,l=e.y1,g=e.y2,v=(s-r)*(l-g)-(a-o)*(i-n),y=(s*o-a*r)*(i-n)-(s-r)*(i*g-l*n),P=(s*o-a*r)*(l-g)-(a-o)*(i*g-l*n),f=(d,c,S)=>d>=c&&d<=S?!0:d>=S&&d<=c;if(v===0)return!1;{const d={x:y/v,y:P/v};return f(d.x,s,r)&&f(d.y,a,o)&&f(d.x,i,n)&&f(d.y,l,g)}}};function ge(t){return{draw:new fe(t),stylus:new ie(t),line:new ae(t),rectangle:new he(t),ellipse:new oe(t),eraseLine:new pe(t)}}var me=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Bt(),this._originalPointerId=null,this._models=ge(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const r=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),n=this.eventMove.bind(this),a=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);r.addEventListener("pointerdown",i,{passive:!1}),s.addEventListener("pointermove",n,{passive:!1}),s.addEventListener("pointerup",a,{passive:!1}),s.addEventListener("pointercancel",a,{passive:!1}),s.addEventListener("keydown",o,!1),s.addEventListener("keyup",o,!1),this._disposables.push(()=>{r.removeEventListener("pointerdown",i),s.removeEventListener("pointermove",n),s.removeEventListener("pointerup",a),s.removeEventListener("pointercancel",a),s.removeEventListener("keydown",o,!1),s.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const r=this._elements[s];if(r){r.after(t);return}}this.el.prepend(t)}};function ve(t){return new me(t)}const ye=Nt(()=>{const{currentSlideNo:t,isPresenter:e}=Rt(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],r=st("slidev-drawing-enabled",!1),i=st("slidev-drawing-pinned",!1),n=kt(st("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),a=z(!1),o=z(!1),l=z(!1),g=z(!1),v=z("stylus"),y=rt(()=>dt.drawings.syncAll||e.value);let P=!1;const f=rt({get(){return v.value},set(h){v.value=h,h==="arrow"?(c.mode="line",n.arrowEnd=!0):(c.mode=h,n.arrowEnd=!1)}}),d=It({brush:n,acceptsInputTypes:rt(()=>r.value&&(!dt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=At(ve(d));function S(){c.clear(),y.value&&ft(t.value,"")}function T(){var h;l.value=c.canRedo(),o.value=c.canUndo(),g.value=!!((h=c.el)!=null&&h.children.length)}function D(h){P=!0;const x=nt[h||t.value];x!=null?c.load(x):c.clear(),T(),P=!1}return c.on("changed",()=>{if(T(),!P){const h=c.dump(),x=t.value;(nt[x]||"")!==h&&y.value&&ft(x,c.dump())}}),zt(h=>{P=!0,h[t.value]!=null&&c.load(h[t.value]||""),P=!1,T()}),Ct(()=>{Ft(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>a.value=!0),c.on("end",()=>a.value=!1),window.addEventListener("keydown",h=>{if(!r.value||Vt.value)return;const x=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let _=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?r.value=!1:h.code==="KeyL"&&x?f.value="line":h.code==="KeyA"&&x?f.value="arrow":h.code==="KeyS"&&x?f.value="stylus":h.code==="KeyR"&&x?f.value="rectangle":h.code==="KeyE"&&x?f.value="ellipse":h.code==="KeyC"&&x?S():h.code.startsWith("Digit")&&x&&+h.code[5]<=s.length?n.color=s[+h.code[5]-1]:_=!1,_&&(h.preventDefault(),h.stopPropagation())},!1),{brush:n,brushColors:s,canClear:g,canRedo:l,canUndo:o,clear:S,drauu:c,drauuOptions:d,drawingEnabled:r,drawingMode:f,drawingPinned:i,drawingState:nt,isDrawing:a,loadCanvas:D}}),xe=["innerHTML"],_e=Tt({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){const{drawingState:e}=ye();return(s,r)=>ct(e)[s.page]?(Kt(),$t("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:ct(e)[s.page]},null,8,xe)):Ot("v-if",!0)}}),we=Ut(_e,[["__file","/home/mrzasa/Documents/presentations/debug-like-scientists/presentation-2024/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),Ee=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));export{we as D,Ee as a,ye as u};
