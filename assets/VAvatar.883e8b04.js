import{l as i,ac as g,q as f,n as y,p as V,I as k,u as C,w as h,t as o}from"./index.6a94bbc0.js";import{j as P,b as S,y as z,l as p,o as A,p as I,f as _,C as R,g as T,h as $,q}from"./VRow.7d6ef586.js";import{m as B,u as D}from"./VContainer.de924b25.js";function x(a){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return i({name:e!=null?e:g(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:n}},setup(l,r){let{slots:s}=r;return()=>{var t;return y(l.tag,{class:a},(t=s.default)==null?void 0:t.call(s))}}})}const F=V({start:Boolean,end:Boolean,icon:k,image:String,...P(),...S(),...z(),...B(),...C(),...p({variant:"flat"})},"v-avatar"),N=i({name:"VAvatar",props:F(),setup(a,n){let{slots:e}=n;const{themeClasses:l}=h(a),{colorClasses:r,colorStyles:s,variantClasses:t}=A(a),{densityClasses:c}=I(a),{roundedClasses:m}=_(a),{sizeClasses:v,sizeStyles:d}=R(a);return D(()=>{var u;return o(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},l.value,r.value,c.value,m.value,v.value,t.value],style:[s.value,d.value]},{default:()=>[a.image?o(T,{key:"image",src:a.image,alt:""},null):a.icon?o($,{key:"icon",icon:a.icon},null):(u=e.default)==null?void 0:u.call(e),q(!1,"v-avatar")]})}),{}}});export{N as V,x as c};