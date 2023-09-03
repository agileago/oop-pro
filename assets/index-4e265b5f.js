import{v as b,c as u,aB as B,a8 as E,_ as G,d as D,ai as H,t as P,g as K,e as R,o as d,a as c,b as p,h as I,x as f,X as j,ac as T,p as q,j as L,y as N,z as O}from"./index-9aac2f7a.js";const V=Symbol("ArcoFormItemContext"),x=Symbol("ArcoFormContext"),X=({size:e,disabled:s,error:t,uninject:l}={})=>{const n=l?{}:b(V,{}),o=u(()=>{var g;return(g=e==null?void 0:e.value)!=null?g:n.size}),a=u(()=>(s==null?void 0:s.value)||n.disabled),r=u(()=>(t==null?void 0:t.value)||n.error),y=B(n,"feedback"),m=B(n,"eventHandlers");return{formItemCtx:n,mergedSize:o,mergedDisabled:a,mergedError:r,feedback:y,eventHandlers:m}},w=(e,{defaultValue:s="medium"}={})=>{const t=b(E,void 0);return{mergedSize:u(()=>{var n,o;return(o=(n=e==null?void 0:e.value)!=null?n:t==null?void 0:t.size)!=null?o:s})}},A=Symbol("ArcoButtonGroup"),J=D({name:"Button",components:{IconLoading:H},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:s}){const{size:t,disabled:l}=P(e),n=K("btn"),o=b(A,void 0),a=u(()=>{var i;return(i=t.value)!=null?i:o==null?void 0:o.size}),r=u(()=>!!(l.value||o!=null&&o.disabled)),{mergedSize:y,mergedDisabled:m}=X({size:a,disabled:r}),{mergedSize:g}=w(y),F=u(()=>{var i,C,k,S,h,z;return[n,"".concat(n,"-").concat((C=(i=e.type)!=null?i:o==null?void 0:o.type)!=null?C:"secondary"),"".concat(n,"-shape-").concat((S=(k=e.shape)!=null?k:o==null?void 0:o.shape)!=null?S:"square"),"".concat(n,"-size-").concat(g.value),"".concat(n,"-status-").concat((z=(h=e.status)!=null?h:o==null?void 0:o.status)!=null?z:"normal"),{["".concat(n,"-long")]:e.long,["".concat(n,"-loading")]:e.loading,["".concat(n,"-disabled")]:m.value,["".concat(n,"-link")]:T(e.href)}]});return{prefixCls:n,cls:F,mergedDisabled:m,handleClick:i=>{if(e.disabled||e.loading){i.preventDefault();return}s("click",i)}}}}),M=["href"],Q=["type","disabled"];function U(e,s,t,l,n,o){const a=R("icon-loading");return e.href?(d(),c("a",{key:0,class:p([e.cls,{["".concat(e.prefixCls,"-only-icon")]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:s[0]||(s[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[e.loading||e.$slots.icon?(d(),c("span",{key:0,class:p("".concat(e.prefixCls,"-icon"))},[e.loading?(d(),I(a,{key:0,spin:"true"})):f(e.$slots,"icon",{key:1})],2)):j("v-if",!0),f(e.$slots,"default")],10,M)):(d(),c("button",{key:1,class:p([e.cls,{["".concat(e.prefixCls,"-only-icon")]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:s[1]||(s[1]=(...r)=>e.handleClick&&e.handleClick(...r))},[e.loading||e.$slots.icon?(d(),c("span",{key:0,class:p("".concat(e.prefixCls,"-icon"))},[e.loading?(d(),I(a,{key:0,spin:!0})):f(e.$slots,"icon",{key:1})],2)):j("v-if",!0),f(e.$slots,"default")],10,Q))}var v=G(J,[["render",U]]);const W=D({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:s,size:t,status:l,disabled:n,shape:o}=P(e),a=K("btn-group");return q(A,L({type:s,size:t,shape:o,status:l,disabled:n})),{prefixCls:a}}});function Y(e,s,t,l,n,o){return d(),c("div",{class:p(e.prefixCls)},[f(e.$slots,"default")],2)}var $=G(W,[["render",Y]]);const ee=Object.assign(v,{Group:$,install:(e,s)=>{N(e,s);const t=O(s);e.component(t+v.name,v),e.component(t+$.name,$)}});export{ee as B,w as a,V as b,$ as c,x as f,X as u};