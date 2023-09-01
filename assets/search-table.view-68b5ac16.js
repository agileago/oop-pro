import{_ as M,d as g,g as k,c as y,s as H,o as N,a as P,b as A,n as q,f as W,v as L,i as R,l as r,F as ee,m as I,t as T,p as F,j as K,an as U,y as J,z as Q,E as X,x as ne,W as te,J as E}from"./index-3a7a52f8.js";import{I as re,D as ae,b as le,a as G}from"./index-43e7c448.js";import{I as ie}from"./index-179cf497.js";import{u as oe}from"./index-31a75fbf.js";const Y=Symbol("ArcoBreadcrumb"),se=g({name:"IconObliqueLine",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=k("icon"),l=y(()=>[t,"".concat(t,"-oblique-line"),{["".concat(t,"-spin")]:e.spin}]),a=y(()=>{const i={};return e.size&&(i.fontSize=H(e.size)?"".concat(e.size,"px"):e.size),e.rotate&&(i.transform="rotate(".concat(e.rotate,"deg)")),i});return{cls:l,innerStyle:a,onClick:i=>{n("click",i)}}}}),ce=["stroke-width","stroke-linecap","stroke-linejoin"],de=W("path",{d:"M29.506 6.502 18.493 41.498"},null,-1),ue=[de];function ve(e,n,t,l,a,v){return N(),P("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:A(e.cls),style:q(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...i)=>e.onClick&&e.onClick(...i))},ue,14,ce)}var x=M(se,[["render",ve]]);const me=Object.assign(x,{install:(e,n)=>{var t;const l=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(l+x.name,x)}});var _=g({name:"BreadcrumbItem",inheritAttrs:!1,props:{separator:{type:[String,Number]},droplist:{type:Array},dropdownProps:{type:Object},index:{type:Number,default:0}},setup(e,{slots:n,attrs:t}){const l=k("breadcrumb-item"),a=L(Y,void 0),v=R(!1),i=y(()=>!(a&&a.needHide&&e.index>1&&e.index<=a.total-a.maxCount)),p=y(()=>a&&a.needHide?e.index===1:!1),$=y(()=>a?e.index<a.total-1:!0),b=o=>{v.value=o},h=()=>{var o,d,c,f,C,V,D;if(!$.value)return null;const Z=(D=(V=(C=(d=(o=n.separator)==null?void 0:o.call(n))!=null?d:e.separator)!=null?C:(f=a==null?void 0:(c=a.slots).separator)==null?void 0:f.call(c))!=null?V:a==null?void 0:a.separator)!=null?D:r(me,null,null);return r("div",{"aria-hidden":"true",class:"".concat(l,"-separator")},[Z])},s=()=>{var o,d,c,f;return r("div",I({role:"listitem",class:[l,{["".concat(l,"-with-dropdown")]:e.droplist||n.droplist}]},p.value?{"aria-label":"ellipses of breadcrumb items"}:void 0,t),[p.value?(c=(d=a==null?void 0:(o=a.slots)["more-icon"])==null?void 0:d.call(o))!=null?c:r(re,null,null):(f=n.default)==null?void 0:f.call(n),(e.droplist||n.droplist)&&r("span",{"aria-hidden":!0,class:["".concat(l,"-dropdown-icon"),{["".concat(l,"-dropdown-icon-active")]:v.value}]},[r(ie,null,null)])])},m=()=>{var o,d,c;return(c=(o=n.droplist)==null?void 0:o.call(n))!=null?c:(d=e.droplist)==null?void 0:d.map(f=>r(le,{value:f.path},{default:()=>[f.label]}))},u=()=>r(ae,I({popupVisible:v.value,onPopupVisibleChange:b},e.dropdownProps),{default:()=>[s()],content:m});return()=>i.value?r(ee,null,[n.droplist||e.droplist?u():s(),h()]):null}}),S=g({name:"Breadcrumb",props:{maxCount:{type:Number,default:0},routes:{type:Array},separator:{type:[String,Number]},customUrl:{type:Function}},setup(e,{slots:n}){const{maxCount:t,separator:l,routes:a}=T(e),v=k("breadcrumb"),i=R(0),p=y(()=>t.value>0&&i.value>t.value+1);F(Y,K({total:i,maxCount:t,separator:l,needHide:p,slots:n}));const $=(s,m,u)=>{var o,d;if(m.indexOf(s)===m.length-1)return r("span",null,[s.label]);const c=(d=(o=e.customUrl)==null?void 0:o.call(e,u))!=null?d:"#/".concat(u.join("/").replace(/^\//,""));return r("a",{href:c},[s.label])},b=()=>{var s;if(!((s=a.value)!=null&&s.length))return null;i.value!==a.value.length&&(i.value=a.value.length);const m=[];return a.value.map((u,o,d)=>{m.push((u.path||"").replace(/^\//,""));const c=[...m];return r(_,{key:u.path||u.label,index:o,droplist:u.children},{default:()=>{var f,C;return[(C=(f=n["item-render"])==null?void 0:f.call(n,{route:u,routes:d,paths:c}))!=null?C:$(u,d,c)]}})})},h=()=>{var s,m;const u=U((m=(s=n.default)==null?void 0:s.call(n))!=null?m:[]);return i.value!==u.length&&(i.value=u.length),u.map((o,d)=>{var c;return o.props=I((c=o.props)!=null?c:{},{index:d}),o})};return()=>r("div",{role:"list",class:v},[n.default?h():b()])}});const fe=Object.assign(S,{Item:_,install:(e,n)=>{J(e,n);const t=Q(n);e.component(t+S.name,S),e.component(t+_.name,_)}}),O=Symbol("ArcoCard");var w=g({name:"Card",components:{Spin:G},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(e,{slots:n}){const t=k("card"),{size:l}=T(e),{mergedSize:a}=oe(l),v=y(()=>a.value==="small"||a.value==="mini"?"small":"medium"),i=b=>{const h=U(b);return r("div",{class:"".concat(t,"-actions")},[r("div",{class:"".concat(t,"-actions-right")},[h.map((s,m)=>r("span",{key:"action-".concat(m),class:"".concat(t,"-actions-item")},[s]))])])},p=K({hasMeta:!1,hasGrid:!1,slots:n,renderActions:i});F(O,p);const $=y(()=>[t,"".concat(t,"-size-").concat(v.value),{["".concat(t,"-loading")]:e.loading,["".concat(t,"-bordered")]:e.bordered,["".concat(t,"-hoverable")]:e.hoverable,["".concat(t,"-contain-grid")]:p.hasGrid}]);return()=>{var b,h,s,m,u,o,d;const c=!!((b=n.title)!=null?b:e.title),f=!!((h=n.extra)!=null?h:e.extra);return r("div",{class:$.value},[(c||f)&&r("div",{class:["".concat(t,"-header"),{["".concat(t,"-header-no-title")]:!c}],style:e.headerStyle},[c&&r("div",{class:"".concat(t,"-header-title")},[(m=(s=n.title)==null?void 0:s.call(n))!=null?m:e.title]),f&&r("div",{class:"".concat(t,"-header-extra")},[(o=(u=n.extra)==null?void 0:u.call(n))!=null?o:e.extra])]),n.cover&&r("div",{class:"".concat(t,"-cover")},[n.cover()]),r("div",{class:"".concat(t,"-body"),style:e.bodyStyle},[e.loading?r(G,null,null):(d=n.default)==null?void 0:d.call(n),n.actions&&!p.hasMeta&&i(n.actions())])])}}}),z=g({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(e,{slots:n}){const t=k("card-meta"),l=L(O);return X(()=>{l&&(l.hasMeta=!0)}),()=>{var a,v,i,p,$,b;const h=!!((a=n.title)!=null?a:e.title),s=!!((v=n.description)!=null?v:e.description);return r("div",{class:t},[(h||s)&&r("div",{class:"".concat(t,"-content")},[h&&r("div",{class:"".concat(t,"-title")},[(p=(i=n.title)==null?void 0:i.call(n))!=null?p:e.title]),s&&r("div",{class:"".concat(t,"-description")},[(b=($=n.description)==null?void 0:$.call(n))!=null?b:e.description])]),(n.avatar||(l==null?void 0:l.slots.actions))&&r("div",{class:["".concat(t,"-footer "),{["".concat(t,"-footer-only-actions")]:!n.avatar}]},[n.avatar&&r("div",{class:"".concat(t,"-avatar")},[n.avatar()]),l&&l.slots.actions&&l.renderActions(l.slots.actions())])])}}});const pe=g({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(e){const n=k("card-grid"),t=L(O);return X(()=>{t&&(t.hasGrid=!0)}),{cls:y(()=>[n,{["".concat(n,"-hoverable")]:e.hoverable}])}}});function be(e,n,t,l,a,v){return N(),P("div",{class:A(e.cls)},[ne(e.$slots,"default")],2)}var B=M(pe,[["render",be]]);const he=Object.assign(w,{Meta:z,Grid:B,install:(e,n)=>{J(e,n);const t=Q(n);e.component(t+w.name,w),e.component(t+z.name,z),e.component(t+B.name,B)}}),ye=g({name:"IconApps",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=k("icon"),l=y(()=>[t,"".concat(t,"-apps"),{["".concat(t,"-spin")]:e.spin}]),a=y(()=>{const i={};return e.size&&(i.fontSize=H(e.size)?"".concat(e.size,"px"):e.size),e.rotate&&(i.transform="rotate(".concat(e.rotate,"deg)")),i});return{cls:l,innerStyle:a,onClick:i=>{n("click",i)}}}}),$e=["stroke-width","stroke-linecap","stroke-linejoin"],_e=W("path",{d:"M7 7h13v13H7zM28 7h13v13H28zM7 28h13v13H7zM28 28h13v13H28z"},null,-1),ge=[_e];function ke(e,n,t,l,a,v){return N(),P("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:A(e.cls),style:q(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...i)=>e.onClick&&e.onClick(...i))},ge,14,$e)}var j=M(ye,[["render",ke]]);const Ce=Object.assign(j,{install:(e,n)=>{var t;const l=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(l+j.name,j)}});class Be extends te{render(){return r("div",{class:"p-5 pt-0"},[r(fe,{class:"mx-0 my-4"},{default:()=>[r(_,null,{default:()=>[r(Ce,null,null)]}),r(_,null,{default:()=>[E("列表页")]}),r(_,null,{default:()=>[E("查询表格")]})]}),r(he,{title:"查询表格",class:"general-card"},null)])}}export{Be as default};
