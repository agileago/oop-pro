import{_ as d,d as k,g as m,c as l,s as f,o as h,a as p,b as v,n as C,f as r}from"./index-09a727b1.js";const $=k({name:"IconExclamation",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=m("icon"),i=l(()=>[n,"".concat(n,"-exclamation"),{["".concat(n,"-spin")]:e.spin}]),s=l(()=>{const o={};return e.size&&(o.fontSize=f(e.size)?"".concat(e.size,"px"):e.size),e.rotate&&(o.transform="rotate(".concat(e.rotate,"deg)")),o});return{cls:i,innerStyle:s,onClick:o=>{t("click",o)}}}}),_=["stroke-width","stroke-linecap","stroke-linejoin"],g=r("path",{d:"M23 9h2v21h-2z"},null,-1),z=r("path",{fill:"currentColor",stroke:"none",d:"M23 9h2v21h-2z"},null,-1),y=r("path",{d:"M23 37h2v2h-2z"},null,-1),b=r("path",{fill:"currentColor",stroke:"none",d:"M23 37h2v2h-2z"},null,-1),w=[g,z,y,b];function S(e,t,n,i,s,a){return h(),p("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:v(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},w,14,_)}var c=d($,[["render",S]]);const M=Object.assign(c,{install:(e,t)=>{var n;const i=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(i+c.name,c)}}),j=k({name:"IconCheck",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=m("icon"),i=l(()=>[n,"".concat(n,"-check"),{["".concat(n,"-spin")]:e.spin}]),s=l(()=>{const o={};return e.size&&(o.fontSize=f(e.size)?"".concat(e.size,"px"):e.size),e.rotate&&(o.transform="rotate(".concat(e.rotate,"deg)")),o});return{cls:i,innerStyle:s,onClick:o=>{t("click",o)}}}}),L=["stroke-width","stroke-linecap","stroke-linejoin"],N=r("path",{d:"M41.678 11.05 19.05 33.678 6.322 20.95"},null,-1),x=[N];function B(e,t,n,i,s,a){return h(),p("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:v(e.cls),style:C(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...o)=>e.onClick&&e.onClick(...o))},x,14,L)}var u=d(j,[["render",B]]);const P=Object.assign(u,{install:(e,t)=>{var n;const i=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(i+u.name,u)}});export{P as I,M as a};
