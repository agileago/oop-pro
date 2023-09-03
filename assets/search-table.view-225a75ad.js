import{_ as A,d as $,g as _,c as b,s as k,o as O,a as L,b as V,n as W,f as K,v as D,i as J,l as a,F as ae,m as P,t as Z,p as Q,j as X,aj as Y,y as G,z as H,N as ee,x as re,Z as le,G as ie,J as F,A as oe,M as se,B as de}from"./index-9aac2f7a.js";import{I as ce,D as ue,b as me,a as R}from"./index-76cee1c4.js";import{I as ve,h as U,j as S,b as fe}from"./index-7a90f923.js";import{a as pe}from"./index-4e265b5f.js";import{F as be,a as he}from"./index-c0409540.js";const te=Symbol("ArcoBreadcrumb"),ye=$({name:"IconObliqueLine",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=_("icon"),l=b(()=>[n,"".concat(n,"-oblique-line"),{["".concat(n,"-spin")]:e.spin}]),i=b(()=>{const r={};return e.size&&(r.fontSize=k(e.size)?"".concat(e.size,"px"):e.size),e.rotate&&(r.transform="rotate(".concat(e.rotate,"deg)")),r});return{cls:l,innerStyle:i,onClick:r=>{t("click",r)}}}}),ge=["stroke-width","stroke-linecap","stroke-linejoin"],$e=K("path",{d:"M29.506 6.502 18.493 41.498"},null,-1),_e=[$e];function xe(e,t,n,l,i,o){return O(),L("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:W(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...r)=>e.onClick&&e.onClick(...r))},_e,14,ge)}var z=A(ye,[["render",xe]]);const Ce=Object.assign(z,{install:(e,t)=>{var n;const l=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(l+z.name,z)}});var x=$({name:"BreadcrumbItem",inheritAttrs:!1,props:{separator:{type:[String,Number]},droplist:{type:Array},dropdownProps:{type:Object},index:{type:Number,default:0}},setup(e,{slots:t,attrs:n}){const l=_("breadcrumb-item"),i=D(te,void 0),o=J(!1),r=b(()=>!(i&&i.needHide&&e.index>1&&e.index<=i.total-i.maxCount)),p=b(()=>i&&i.needHide?e.index===1:!1),g=b(()=>i?e.index<i.total-1:!0),h=s=>{o.value=s},y=()=>{var s,u,c,f,C,q,E;if(!g.value)return null;const ne=(E=(q=(C=(u=(s=t.separator)==null?void 0:s.call(t))!=null?u:e.separator)!=null?C:(f=i==null?void 0:(c=i.slots).separator)==null?void 0:f.call(c))!=null?q:i==null?void 0:i.separator)!=null?E:a(Ce,null,null);return a("div",{"aria-hidden":"true",class:"".concat(l,"-separator")},[ne])},d=()=>{var s,u,c,f;return a("div",P({role:"listitem",class:[l,{["".concat(l,"-with-dropdown")]:e.droplist||t.droplist}]},p.value?{"aria-label":"ellipses of breadcrumb items"}:void 0,n),[p.value?(c=(u=i==null?void 0:(s=i.slots)["more-icon"])==null?void 0:u.call(s))!=null?c:a(ce,null,null):(f=t.default)==null?void 0:f.call(t),(e.droplist||t.droplist)&&a("span",{"aria-hidden":!0,class:["".concat(l,"-dropdown-icon"),{["".concat(l,"-dropdown-icon-active")]:o.value}]},[a(ve,null,null)])])},v=()=>{var s,u,c;return(c=(s=t.droplist)==null?void 0:s.call(t))!=null?c:(u=e.droplist)==null?void 0:u.map(f=>a(me,{value:f.path},{default:()=>[f.label]}))},m=()=>a(ue,P({popupVisible:o.value,onPopupVisibleChange:h},e.dropdownProps),{default:()=>[d()],content:v});return()=>r.value?a(ae,null,[t.droplist||e.droplist?m():d(),y()]):null}}),w=$({name:"Breadcrumb",props:{maxCount:{type:Number,default:0},routes:{type:Array},separator:{type:[String,Number]},customUrl:{type:Function}},setup(e,{slots:t}){const{maxCount:n,separator:l,routes:i}=Z(e),o=_("breadcrumb"),r=J(0),p=b(()=>n.value>0&&r.value>n.value+1);Q(te,X({total:r,maxCount:n,separator:l,needHide:p,slots:t}));const g=(d,v,m)=>{var s,u;if(v.indexOf(d)===v.length-1)return a("span",null,[d.label]);const c=(u=(s=e.customUrl)==null?void 0:s.call(e,m))!=null?u:"#/".concat(m.join("/").replace(/^\//,""));return a("a",{href:c},[d.label])},h=()=>{var d;if(!((d=i.value)!=null&&d.length))return null;r.value!==i.value.length&&(r.value=i.value.length);const v=[];return i.value.map((m,s,u)=>{v.push((m.path||"").replace(/^\//,""));const c=[...v];return a(x,{key:m.path||m.label,index:s,droplist:m.children},{default:()=>{var f,C;return[(C=(f=t["item-render"])==null?void 0:f.call(t,{route:m,routes:u,paths:c}))!=null?C:g(m,u,c)]}})})},y=()=>{var d,v;const m=Y((v=(d=t.default)==null?void 0:d.call(t))!=null?v:[]);return r.value!==m.length&&(r.value=m.length),m.map((s,u)=>{var c;return s.props=P((c=s.props)!=null?c:{},{index:u}),s})};return()=>a("div",{role:"list",class:o},[t.default?y():h()])}});const ke=Object.assign(w,{Item:x,install:(e,t)=>{G(e,t);const n=H(t);e.component(n+w.name,w),e.component(n+x.name,x)}}),T=Symbol("ArcoCard");var B=$({name:"Card",components:{Spin:R},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(e,{slots:t}){const n=_("card"),{size:l}=Z(e),{mergedSize:i}=pe(l),o=b(()=>i.value==="small"||i.value==="mini"?"small":"medium"),r=h=>{const y=Y(h);return a("div",{class:"".concat(n,"-actions")},[a("div",{class:"".concat(n,"-actions-right")},[y.map((d,v)=>a("span",{key:"action-".concat(v),class:"".concat(n,"-actions-item")},[d]))])])},p=X({hasMeta:!1,hasGrid:!1,slots:t,renderActions:r});Q(T,p);const g=b(()=>[n,"".concat(n,"-size-").concat(o.value),{["".concat(n,"-loading")]:e.loading,["".concat(n,"-bordered")]:e.bordered,["".concat(n,"-hoverable")]:e.hoverable,["".concat(n,"-contain-grid")]:p.hasGrid}]);return()=>{var h,y,d,v,m,s,u;const c=!!((h=t.title)!=null?h:e.title),f=!!((y=t.extra)!=null?y:e.extra);return a("div",{class:g.value},[(c||f)&&a("div",{class:["".concat(n,"-header"),{["".concat(n,"-header-no-title")]:!c}],style:e.headerStyle},[c&&a("div",{class:"".concat(n,"-header-title")},[(v=(d=t.title)==null?void 0:d.call(t))!=null?v:e.title]),f&&a("div",{class:"".concat(n,"-header-extra")},[(s=(m=t.extra)==null?void 0:m.call(t))!=null?s:e.extra])]),t.cover&&a("div",{class:"".concat(n,"-cover")},[t.cover()]),a("div",{class:"".concat(n,"-body"),style:e.bodyStyle},[e.loading?a(R,null,null):(u=t.default)==null?void 0:u.call(t),t.actions&&!p.hasMeta&&r(t.actions())])])}}}),j=$({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(e,{slots:t}){const n=_("card-meta"),l=D(T);return ee(()=>{l&&(l.hasMeta=!0)}),()=>{var i,o,r,p,g,h;const y=!!((i=t.title)!=null?i:e.title),d=!!((o=t.description)!=null?o:e.description);return a("div",{class:n},[(y||d)&&a("div",{class:"".concat(n,"-content")},[y&&a("div",{class:"".concat(n,"-title")},[(p=(r=t.title)==null?void 0:r.call(t))!=null?p:e.title]),d&&a("div",{class:"".concat(n,"-description")},[(h=(g=t.description)==null?void 0:g.call(t))!=null?h:e.description])]),(t.avatar||(l==null?void 0:l.slots.actions))&&a("div",{class:["".concat(n,"-footer "),{["".concat(n,"-footer-only-actions")]:!t.avatar}]},[t.avatar&&a("div",{class:"".concat(n,"-avatar")},[t.avatar()]),l&&l.slots.actions&&l.renderActions(l.slots.actions())])])}}});const Se=$({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(e){const t=_("card-grid"),n=D(T);return ee(()=>{n&&(n.hasGrid=!0)}),{cls:b(()=>[t,{["".concat(t,"-hoverable")]:e.hoverable}])}}});function ze(e,t,n,l,i,o){return O(),L("div",{class:V(e.cls)},[re(e.$slots,"default")],2)}var I=A(Se,[["render",ze]]);const we=Object.assign(B,{Meta:j,Grid:I,install:(e,t)=>{G(e,t);const n=H(t);e.component(n+B.name,B),e.component(n+j.name,j),e.component(n+I.name,I)}});var N=$({name:"Divider",props:{direction:{type:String,default:"horizontal"},orientation:{type:String,default:"center"},type:{type:String},size:{type:Number},margin:{type:[Number,String]}},setup(e,{slots:t}){const n=_("divider"),l=b(()=>e.direction==="horizontal"),i=b(()=>{const o={};if(e.size&&(o[l.value?"border-bottom-width":"border-left-width"]=k(e.size)?"".concat(e.size,"px"):e.size),e.type&&(o[l.value?"border-bottom-style":"border-left-style"]=e.type),!le(e.margin)){const r=k(e.margin)?"".concat(e.margin,"px"):e.margin;o.margin=l.value?"".concat(r," 0"):"0 ".concat(r)}return o});return()=>{var o;const r=(o=t.default)==null?void 0:o.call(t),p=[n,"".concat(n,"-").concat(e.direction),{["".concat(n,"-with-text")]:r}];return a("div",{role:"separator",class:p,style:i.value},[r&&e.direction==="horizontal"&&a("span",{class:["".concat(n,"-text"),"".concat(n,"-text-").concat(e.orientation)]},[r])])}}});const Be=Object.assign(N,{install:(e,t)=>{G(e,t);const n=H(t);e.component(n+N.name,N)}}),je=$({name:"IconApps",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=_("icon"),l=b(()=>[n,"".concat(n,"-apps"),{["".concat(n,"-spin")]:e.spin}]),i=b(()=>{const r={};return e.size&&(r.fontSize=k(e.size)?"".concat(e.size,"px"):e.size),e.rotate&&(r.transform="rotate(".concat(e.rotate,"deg)")),r});return{cls:l,innerStyle:i,onClick:r=>{t("click",r)}}}}),Ie=["stroke-width","stroke-linecap","stroke-linejoin"],Ne=K("path",{d:"M7 7h13v13H7zM28 7h13v13H28zM7 28h13v13H7zM28 28h13v13H28z"},null,-1),Me=[Ne];function Pe(e,t,n,l,i,o){return O(),L("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(e.cls),style:W(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...r)=>e.onClick&&e.onClick(...r))},Me,14,Ie)}var M=A(je,[["render",Pe]]);const Ae=Object.assign(M,{install:(e,t)=>{var n;const l=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(l+M.name,M)}});class Oe extends ie{constructor(){super(...arguments),this.model={number:"",name:"",contentType:"",filterType:"",createdTime:[],status:""}}render(){return a("div",{class:"p-5 pt-0"},[a(ke,{class:"mx-0 my-4"},{default:()=>[a(x,null,{default:()=>[a(Ae,null,null)]}),a(x,null,{default:()=>[F("列表页")]}),a(x,null,{default:()=>[F("查询表格")]})]}),a(we,{title:"查询表格",class:"general-card"},{default:()=>[a(U,null,{default:()=>[a(S,{flex:1},{default:()=>[a(be,{model:this.model,labelColProps:{span:6},wrapperColProps:{span:18},labelAlign:"left"},{default:()=>[a(U,{gutter:16},{default:()=>[a(S,{span:8},{default:()=>[a(he,{field:"number",label:"集合编号"},{default:()=>[a(fe,{modelValue:this.model.number,"onUpdate:modelValue":t=>this.model.number=t},null)]})]})]})]})]}),a(Be,{direction:"vertical",class:"h-[84px]"},null),a(S,{flex:"86px",class:"text-right"},null)]})]})])}}oe([se(),de("design:type",Object)],Oe.prototype,"model",void 0);export{Oe as default};