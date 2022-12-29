import{l as z,u as E,w as q,x as oe,v as B,t as r,p as M,g as N,b as ue,d as O,i as de,c as k,h as U,Q as F,a as ce,z as re,o as ve,ad as fe,ae as me,k as ge,af as be,s as he,Y as ye,I as R,N as ke,R as Ce}from"./index.6a94bbc0.js";import{m as W,j,a as Q,b as Y,l as H,p as J,d as X,e as Z,f as K,R as Ie,v as Ve,w as Be,x as pe,k as Se,y as xe,o as Pe,z as we,A as _e,B as $e,C as Ge,n as De,q as Te,V as P,h as w,D as Ae}from"./VRow.7d6ef586.js";import{m as ee,u as _}from"./VContainer.de924b25.js";import{m as Le,u as Re}from"./VResponsive.0e1d3426.js";const ze=z({name:"VBtnGroup",props:{divided:Boolean,...W(),...j(),...Q(),...Y(),...ee(),...E(),...H()},setup(e,i){let{slots:l}=i;const{themeClasses:n}=q(e),{densityClasses:t}=J(e),{borderClasses:o}=X(e),{elevationClasses:f}=Z(e),{roundedClasses:b}=K(e);oe({VBtn:{height:"auto",color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),_(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,o.value,t.value,f.value,b.value]},l))}}),Ee=M({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),qe=M({value:null,disabled:Boolean,selectedClass:String},"group-item");function Me(e,i){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=N("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const t=ue();O(Symbol.for(`${i.description}:id`),t);const o=de(i,null);if(!o){if(!l)return o;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${i.description}`)}const f=B(e,"value"),b=k(()=>o.disabled.value||e.disabled);o.register({id:t,value:f,disabled:b},n),U(()=>{o.unregister(t)});const v=k(()=>o.isSelected(t)),I=k(()=>v.value&&[o.selectedClass.value,e.selectedClass]);return F(v,y=>{n.emit("group:selected",{value:y})}),{id:t,isSelected:v,toggle:()=>o.select(t,!v.value),select:y=>o.select(t,y),selectedClass:I,value:f,disabled:b,group:o}}function Ne(e,i){let l=!1;const n=ce([]),t=re(e,"modelValue",[],s=>s==null?[]:ne(n,me(s)),s=>{const a=Ue(n,s);return e.multiple?a:a[0]}),o=N("useGroup");function f(s,a){const d=s,u=Symbol.for(`${i.description}:id`),h=ge(u,o==null?void 0:o.vnode).indexOf(a);h>-1?n.splice(h,0,d):n.push(d)}function b(s){if(l)return;v();const a=n.findIndex(d=>d.id===s);n.splice(a,1)}function v(){const s=n.find(a=>!a.disabled);s&&e.mandatory==="force"&&!t.value.length&&(t.value=[s.id])}ve(()=>{v()}),U(()=>{l=!0});function I(s,a){const d=n.find(u=>u.id===s);if(!(a&&d!=null&&d.disabled))if(e.multiple){const u=t.value.slice(),m=u.findIndex(c=>c===s),h=~m;if(a=a!=null?a:!h,h&&e.mandatory&&u.length<=1||!h&&e.max!=null&&u.length+1>e.max)return;m<0&&a?u.push(s):m>=0&&!a&&u.splice(m,1),t.value=u}else{const u=t.value.includes(s);if(e.mandatory&&u)return;t.value=(a!=null?a:!u)?[s]:[]}}function y(s){if(e.multiple&&be('This method is not supported when using "multiple" prop'),t.value.length){const a=t.value[0],d=n.findIndex(h=>h.id===a);let u=(d+s)%n.length,m=n[u];for(;m.disabled&&u!==d;)u=(u+s)%n.length,m=n[u];if(m.disabled)return;t.value=[n[u].id]}else{const a=n.find(d=>!d.disabled);a&&(t.value=[a.id])}}const p={register:f,unregister:b,selected:t,select:I,disabled:B(e,"disabled"),prev:()=>y(n.length-1),next:()=>y(1),isSelected:s=>t.value.includes(s),selectedClass:k(()=>e.selectedClass),items:k(()=>n),getItemIndex:s=>Oe(n,s)};return O(i,p),p}function Oe(e,i){const l=ne(e,[i]);return l.length?e.findIndex(n=>n.id===l[0]):-1}function ne(e,i){const l=[];for(let n=0;n<e.length;n++){const t=e[n];t.value!=null?i.find(o=>fe(o,t.value))!=null&&l.push(t.id):i.includes(n)&&l.push(t.id)}return l}function Ue(e,i){const l=[];for(let n=0;n<e.length;n++){const t=e[n];i.includes(t.id)&&l.push(t.value!=null?t.value:n)}return l}const te=Symbol.for("vuetify:v-btn-toggle");he()({name:"VBtnToggle",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:l}=i;const{isSelected:n,next:t,prev:o,select:f,selected:b}=Ne(e,te);return _(()=>{var v;return r(ze,{class:"v-btn-toggle"},{default:()=>[(v=l.default)==null?void 0:v.call(l,{isSelected:n,next:t,prev:o,select:f,selected:b})]})}),{next:t,prev:o,select:f}}});function Fe(e,i){F(()=>{var l;return(l=e.isActive)==null?void 0:l.value},l=>{e.isLink.value&&l&&i&&ye(()=>{i(!0)})},{immediate:!0})}const He=z({name:"VBtn",directives:{Ripple:Ie},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:te},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:R,appendIcon:R,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...W(),...Y(),...j(),...Le(),...Q(),...qe(),...Ve(),...Be(),...pe(),...Se(),...xe(),...ee({tag:"button"}),...E(),...H({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,i){let{attrs:l,slots:n}=i;const{themeClasses:t}=q(e),{borderClasses:o}=X(e),{colorClasses:f,colorStyles:b,variantClasses:v}=Pe(e),{densityClasses:I}=J(e),{dimensionStyles:y}=Re(e),{elevationClasses:p}=Z(e),{loaderClasses:s}=we(e),{locationStyles:a}=_e(e),{positionClasses:d}=$e(e),{roundedClasses:u}=K(e),{sizeClasses:m,sizeStyles:h}=Ge(e),c=Me(e,e.symbol,!1),C=De(e,l),le=k(()=>{var V;return e.active!==!1&&(e.active||((V=C.isActive)==null?void 0:V.value)||(c==null?void 0:c.isSelected.value))}),S=k(()=>(c==null?void 0:c.disabled.value)||e.disabled),se=k(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border));return Fe(C,c==null?void 0:c.select),_(()=>{var V,$,G,D;const T=C.isLink.value?"a":e.tag,A=!c||c.isSelected.value,ae=!!(e.prependIcon||n.prepend),ie=!!(e.appendIcon||n.append),L=!!(e.icon&&e.icon!==!0);return ke(r(T,{type:T==="a"?void 0:"button",class:["v-btn",c==null?void 0:c.selectedClass.value,{"v-btn--active":le.value,"v-btn--block":e.block,"v-btn--disabled":S.value,"v-btn--elevated":se.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},t.value,o.value,A?f.value:void 0,I.value,p.value,s.value,d.value,u.value,m.value,v.value],style:[A?b.value:void 0,y.value,a.value,h.value],disabled:S.value||void 0,href:C.href.value,onClick:x=>{var g;S.value||((g=C.navigate)==null||g.call(C,x),c==null||c.toggle())}},{default:()=>{var x;return[Te(!0,"v-btn"),!e.icon&&ae&&r(P,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var g;return[r("span",{class:"v-btn__prepend"},[(g=(V=n.prepend)==null?void 0:V.call(n))!=null?g:r(w,null,null)])]}}),r("span",{class:"v-btn__content","data-no-activator":""},[r(P,{key:"content",defaults:{VIcon:{icon:L?e.icon:void 0}}},{default:()=>{var g;return[(g=($=n.default)==null?void 0:$.call(n))!=null?g:L&&r(w,{key:"icon"},null)]}})]),!e.icon&&ie&&r(P,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var g;return[r("span",{class:"v-btn__append"},[(g=(G=n.append)==null?void 0:G.call(n))!=null?g:r(w,null,null)])]}}),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[(x=(D=n.loader)==null?void 0:D.call(n))!=null?x:r(Ae,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ce("ripple"),!S.value&&e.ripple,null]])}),{}}});export{He as V};
