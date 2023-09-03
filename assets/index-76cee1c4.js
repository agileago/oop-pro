import{_ as O,d as k,g as z,c as b,s as pe,o as g,a as B,b as h,n as E,f as P,v as G,a8 as Be,l as u,y as q,z as K,F as ce,P as Te,Q as Me,ai as De,i as m,h as H,W as p,al as He,a6 as je,S as oe,T as we,N as Ie,q as Ne,e as S,m as fe,x as f,X as j,L as Le,t as ve,p as Ee,j as Ae,az as de,J as We,a5 as Ze}from"./index-9aac2f7a.js";import{u as Fe,R as Ge,T as Pe,a as qe}from"./index-7a90f923.js";import{B as Ke,c as Ue}from"./index-4e265b5f.js";const Xe=k({name:"IconEmpty",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=z("icon"),l=b(()=>[t,"".concat(t,"-empty"),{["".concat(t,"-spin")]:e.spin}]),s=b(()=>{const n={};return e.size&&(n.fontSize=pe(e.size)?"".concat(e.size,"px"):e.size),e.rotate&&(n.transform="rotate(".concat(e.rotate,"deg)")),n});return{cls:l,innerStyle:s,onClick:n=>{o("click",n)}}}}),Ye=["stroke-width","stroke-linecap","stroke-linejoin"],Je=P("path",{d:"M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z"},null,-1),Qe=[Je];function xe(e,o,t,l,s,a){return g(),B("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:h(e.cls),style:E(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:o[0]||(o[0]=(...n)=>e.onClick&&e.onClick(...n))},Qe,14,Ye)}var te=O(Xe,[["render",xe]]);const eo=Object.assign(te,{install:(e,o)=>{var t;const l=(t=o==null?void 0:o.iconPrefix)!=null?t:"";e.component(l+te.name,te)}});var ne=k({name:"Empty",props:{description:String,imgSrc:String,inConfigProvider:{type:Boolean,default:!1}},setup(e,{slots:o}){const t=z("empty"),{t:l}=Fe(),s=G(Be,void 0);return()=>{var a,n,i,r;return!e.inConfigProvider&&(s!=null&&s.slots.empty)&&!(o.image||e.imgSrc||e.description)?s.slots.empty({component:"empty"}):u("div",{class:t},[u("div",{class:"".concat(t,"-image")},[(n=(a=o.image)==null?void 0:a.call(o))!=null?n:e.imgSrc?u("img",{src:e.imgSrc,alt:e.description||"empty"},null):u(eo,null,null)]),u("div",{class:"".concat(t,"-description")},[(r=(i=o.default)==null?void 0:i.call(o))!=null?r:e.description||l("empty.description")])])}}});const oo=Object.assign(ne,{install:(e,o)=>{q(e,o);const t=K(o);e.component(t+ne.name,ne)}}),to=5;var no=k({name:"DotLoading",props:{size:{type:Number}},setup(e){const o=z("dot-loading");return()=>{const t=e.size?{width:"".concat(e.size,"px"),height:"".concat(e.size,"px")}:{};return u("div",{class:o,style:{width:e.size?"".concat(e.size*7,"px"):void 0,height:e.size?"".concat(e.size,"px"):void 0}},[Array(to).fill(1).map((l,s)=>u("div",{class:"".concat(o,"-item"),key:s,style:t},null))])}}}),le=k({name:"Spin",props:{size:{type:Number},loading:Boolean,dot:Boolean,tip:String,hideIcon:{type:Boolean,default:!1}},setup(e,{slots:o}){const t=z("spin"),l=G(Be,void 0),s=b(()=>[t,{["".concat(t,"-loading")]:e.loading,["".concat(t,"-with-tip")]:e.tip&&!o.default}]),a=()=>{if(o.icon){const i=Te(o.icon());if(i)return Me(i,{spin:!0})}return o.element?o.element():e.dot?u(no,{size:e.size},null):l!=null&&l.slots.loading?l.slots.loading():u(De,{spin:!0,size:e.size},null)},n=()=>{var i,r,c;const v=e.size?{fontSize:"".concat(e.size,"px")}:void 0,V=!!((i=o.tip)!=null?i:e.tip);return u(ce,null,[!e.hideIcon&&u("div",{class:"".concat(t,"-icon"),style:v},[a()]),V&&u("div",{class:"".concat(t,"-tip")},[(c=(r=o.tip)==null?void 0:r.call(o))!=null?c:e.tip])])};return()=>u("div",{class:s.value},[o.default?u(ce,null,[o.default(),e.loading&&u("div",{class:"".concat(t,"-mask")},[u("div",{class:"".concat(t,"-mask-icon")},[n()])])]):n()])}});const Mo=Object.assign(le,{install:(e,o)=>{q(e,o);const t=K(o);e.component(t+le.name,le)}}),lo=k({name:"Thumb",props:{data:{type:Object},direction:{type:String,default:"horizontal"},alwaysShow:{type:Boolean,default:!1},both:{type:Boolean,default:!1}},emits:["scroll"],setup(e,{emit:o}){const t=z("scrollbar"),l=m(!1),s=m(),a=m(),n=b(()=>e.direction==="horizontal"?{size:"width",direction:"left",offset:"offsetWidth",client:"clientX"}:{size:"height",direction:"top",offset:"offsetHeight",client:"clientY"}),i=m(0),r=m(!1),c=m(0),v=b(()=>{var d,w;return{[n.value.size]:"".concat((w=(d=e.data)==null?void 0:d.thumbSize)!=null?w:0,"px"),[n.value.direction]:"".concat(i.value,"px")}}),V=d=>{d.preventDefault(),a.value&&(c.value=d[n.value.client]-a.value.getBoundingClientRect()[n.value.direction],r.value=!0,oe(window,"mousemove",A),oe(window,"mouseup",I),oe(window,"contextmenu",I))},_=d=>{var w,$,y,C;if(d.preventDefault(),a.value){const R=T(d[n.value.client]>a.value.getBoundingClientRect()[n.value.direction]?i.value+(($=(w=e.data)==null?void 0:w.thumbSize)!=null?$:0):i.value-((C=(y=e.data)==null?void 0:y.thumbSize)!=null?C:0));R!==i.value&&(i.value=R,o("scroll",R))}},T=d=>d<0?0:e.data&&d>e.data.max?e.data.max:d,A=d=>{if(s.value&&a.value){const w=T(d[n.value.client]-s.value.getBoundingClientRect()[n.value.direction]-c.value);w!==i.value&&(i.value=w,o("scroll",w))}},I=()=>{r.value=!1,we(window,"mousemove",A),we(window,"mouseup",I)},U=d=>{r.value||(d=T(d),d!==i.value&&(i.value=d))},X=b(()=>["".concat(t,"-thumb"),"".concat(t,"-thumb-direction-").concat(e.direction),{["".concat(t,"-thumb-dragging")]:r.value}]);return{visible:l,trackRef:s,thumbRef:a,prefixCls:t,thumbCls:X,thumbStyle:v,handleThumbMouseDown:V,handleTrackClick:_,setOffset:U}}});function io(e,o,t,l,s,a){return g(),H(je,null,{default:p(()=>[P("div",{ref:"trackRef",class:h(["".concat(e.prefixCls,"-track"),"".concat(e.prefixCls,"-track-direction-").concat(e.direction)]),onMousedown:o[1]||(o[1]=He((...n)=>e.handleTrackClick&&e.handleTrackClick(...n),["self"]))},[P("div",{ref:"thumbRef",class:h(e.thumbCls),style:E(e.thumbStyle),onMousedown:o[0]||(o[0]=(...n)=>e.handleThumbMouseDown&&e.handleThumbMouseDown(...n))},[P("div",{class:h("".concat(e.prefixCls,"-thumb-bar"))},null,2)],38)],34)]),_:1})}var so=O(lo,[["render",io]]);const Ve=20,W=15,ao=k({name:"Scrollbar",components:{ResizeObserver:Ge,Thumb:so},inheritAttrs:!1,props:{type:{type:String,default:"embed"},outerClass:[String,Object,Array],outerStyle:{type:[String,Object,Array]},hide:{type:Boolean,default:!1},disableHorizontal:{type:Boolean,default:!1},disableVertical:{type:Boolean,default:!1}},emits:{scroll:e=>!0},setup(e,{emit:o}){const t=z("scrollbar"),l=m(),s=m(),a=m(),n=m(),i=m(),r=m(!1),c=m(!1),v=b(()=>r.value&&!e.disableHorizontal),V=b(()=>c.value&&!e.disableVertical),_=m(!1),T=()=>{var $,y,C,R,N,L;if(l.value){const{clientWidth:D,clientHeight:M,offsetWidth:be,offsetHeight:ge,scrollWidth:Y,scrollHeight:J,scrollTop:$e,scrollLeft:ye}=l.value;r.value=Y>D,c.value=J>M,_.value=v.value&&V.value;const Q=e.type==="embed"&&_.value?be-W:be,x=e.type==="embed"&&_.value?ge-W:ge,Ce=Math.round(Q/Math.min(Y/D,Q/Ve)),Se=Q-Ce,_e=(Y-D)/Se,ke=Math.round(x/Math.min(J/M,x/Ve)),ze=x-ke,Re=(J-M)/ze;if(s.value={ratio:_e,thumbSize:Ce,max:Se},a.value={ratio:Re,thumbSize:ke,max:ze},$e>0){const ee=Math.round($e/((y=($=a.value)==null?void 0:$.ratio)!=null?y:1));(C=i.value)==null||C.setOffset(ee)}if(ye>0){const ee=Math.round(ye/((N=(R=a.value)==null?void 0:R.ratio)!=null?N:1));(L=n.value)==null||L.setOffset(ee)}}};Ie(()=>{T()});const A=()=>{T()},I=$=>{var y,C,R,N,L,D;if(l.value){if(v.value&&!e.disableHorizontal){const M=Math.round(l.value.scrollLeft/((C=(y=s.value)==null?void 0:y.ratio)!=null?C:1));(R=n.value)==null||R.setOffset(M)}if(V.value&&!e.disableVertical){const M=Math.round(l.value.scrollTop/((L=(N=a.value)==null?void 0:N.ratio)!=null?L:1));(D=i.value)==null||D.setOffset(M)}}o("scroll",$)},U=$=>{var y,C;l.value&&l.value.scrollTo({left:$*((C=(y=s.value)==null?void 0:y.ratio)!=null?C:1)})},X=$=>{var y,C;l.value&&l.value.scrollTo({top:$*((C=(y=a.value)==null?void 0:y.ratio)!=null?C:1)})},d=b(()=>{const $={};return e.type==="track"&&(v.value&&($.paddingBottom="".concat(W,"px")),V.value&&($.paddingRight="".concat(W,"px"))),[$,e.outerStyle]}),w=b(()=>["".concat(t),"".concat(t,"-type-").concat(e.type),{["".concat(t,"-both")]:_.value},e.outerClass]);return{prefixCls:t,cls:w,style:d,containerRef:l,horizontalThumbRef:n,verticalThumbRef:i,horizontalData:s,verticalData:a,isBoth:_,hasHorizontalScrollbar:v,hasVerticalScrollbar:V,handleResize:A,handleScroll:I,handleHorizontalScroll:U,handleVerticalScroll:X}},methods:{scrollTo(e,o){var t,l;Ne(e)?(t=this.$refs.containerRef)==null||t.scrollTo(e):(e||o)&&((l=this.$refs.containerRef)==null||l.scrollTo(e,o))},scrollTop(e){var o;(o=this.$refs.containerRef)==null||o.scrollTo({top:e})},scrollLeft(e){var o;(o=this.$refs.containerRef)==null||o.scrollTo({left:e})}}});function ro(e,o,t,l,s,a){const n=S("ResizeObserver"),i=S("thumb");return g(),B("div",{class:h(e.cls),style:E(e.style)},[u(n,{onResize:e.handleResize},{default:p(()=>[P("div",fe({ref:"containerRef",class:"".concat(e.prefixCls,"-container")},e.$attrs,{onScroll:o[0]||(o[0]=(...r)=>e.handleScroll&&e.handleScroll(...r))}),[u(n,{onResize:e.handleResize},{default:p(()=>[f(e.$slots,"default")]),_:3},8,["onResize"])],16)]),_:3},8,["onResize"]),!e.hide&&e.hasHorizontalScrollbar?(g(),H(i,{key:0,ref:"horizontalThumbRef",data:e.horizontalData,direction:"horizontal",both:e.isBoth,onScroll:e.handleHorizontalScroll},null,8,["data","both","onScroll"])):j("v-if",!0),!e.hide&&e.hasVerticalScrollbar?(g(),H(i,{key:1,ref:"verticalThumbRef",data:e.verticalData,direction:"vertical",both:e.isBoth,onScroll:e.handleVerticalScroll},null,8,["data","both","onScroll"])):j("v-if",!0)],6)}var ie=O(ao,[["render",ro]]);const uo=Object.assign(ie,{install:(e,o)=>{q(e,o);const t=K(o);e.component(t+ie.name,ie)}}),co=k({name:"IconMore",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=z("icon"),l=b(()=>[t,"".concat(t,"-more"),{["".concat(t,"-spin")]:e.spin}]),s=b(()=>{const n={};return e.size&&(n.fontSize=pe(e.size)?"".concat(e.size,"px"):e.size),e.rotate&&(n.transform="rotate(".concat(e.rotate,"deg)")),n});return{cls:l,innerStyle:s,onClick:n=>{o("click",n)}}}}),po=["stroke-width","stroke-linecap","stroke-linejoin"],fo=P("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",fill:"currentColor",stroke:"none"},null,-1),vo=P("path",{d:"M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z"},null,-1),mo=[fo,vo];function ho(e,o,t,l,s,a){return g(),B("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:h(e.cls),style:E(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:o[0]||(o[0]=(...n)=>e.onClick&&e.onClick(...n))},mo,14,po)}var se=O(co,[["render",ho]]);const bo=Object.assign(se,{install:(e,o)=>{var t;const l=(t=o==null?void 0:o.iconPrefix)!=null?t:"";e.component(l+se.name,se)}}),me=Symbol("ArcoDropdown"),go=k({name:"DropdownPanel",components:{Scrollbar:uo,Empty:oo},props:{loading:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},bottomOffset:{type:Number,default:0},onScroll:{type:[Function,Array]},onReachBottom:{type:[Function,Array]}},emits:["scroll","reachBottom"],setup(e,{emit:o,slots:t}){const l=z("dropdown"),s=G(me,{}),a=m(),n=c=>{const{scrollTop:v,scrollHeight:V,offsetHeight:_}=c.target;V-(v+_)<=e.bottomOffset&&o("reachBottom",c),o("scroll",c)},i=b(()=>{if(pe(s.popupMaxHeight))return{maxHeight:"".concat(s.popupMaxHeight,"px")};if(!s.popupMaxHeight)return{maxHeight:"none",overflowY:"hidden"}}),r=b(()=>[l,{["".concat(l,"-has-footer")]:!!t.footer}]);return{prefixCls:l,cls:r,style:i,wrapperRef:a,handleScroll:n}}});function $o(e,o,t,l,s,a){const n=S("empty"),i=S("Scrollbar");return g(),B("div",{class:h(e.cls)},[e.isEmpty?(g(),B("div",{key:0,class:h("".concat(e.prefixCls,"-empty"))},[f(e.$slots,"empty",{},()=>[u(n)])],2)):j("v-if",!0),u(i,{ref:"wrapperRef",class:h("".concat(e.prefixCls,"-list-wrapper")),style:E(e.style),onScroll:e.handleScroll},{default:p(()=>[P("ul",{class:h("".concat(e.prefixCls,"-list"))},[f(e.$slots,"default")],2)]),_:3},8,["class","style","onScroll"]),e.$slots.footer&&!e.isEmpty?(g(),B("div",{key:1,class:h("".concat(e.prefixCls,"-footer"))},[f(e.$slots,"footer")],2)):j("v-if",!0)],2)}var Oe=O(go,[["render",$o]]);const he=({popupVisible:e,defaultPopupVisible:o,emit:t})=>{var l;const s=m((l=o==null?void 0:o.value)!=null?l:!1),a=b(()=>{var i;return(i=e==null?void 0:e.value)!=null?i:s.value}),n=i=>{i!==a.value&&(s.value=i,t("update:popupVisible",i),t("popupVisibleChange",i))};return Le(a,i=>{s.value!==i&&(s.value=i)}),{computedPopupVisible:a,handlePopupVisibleChange:n}},yo=k({name:"Dropdown",components:{Trigger:Pe,DropdownPanel:Oe},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"bottom"},popupContainer:{type:[String,Object]},popupMaxHeight:{type:[Boolean,Number],default:!0},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:l,popupMaxHeight:s}=ve(e),a=z("dropdown"),{computedPopupVisible:n,handlePopupVisibleChange:i}=he({defaultPopupVisible:t,popupVisible:l,emit:o});return Ee(me,Ae({popupMaxHeight:s,onOptionClick:(c,v)=>{o("select",c,v),e.hideOnSelect&&i(!1)}})),{prefixCls:a,computedPopupVisible:n,handlePopupVisibleChange:i}}});function Co(e,o,t,l,s,a){const n=S("DropdownPanel"),i=S("Trigger");return g(),H(i,{"popup-visible":e.computedPopupVisible,"animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",trigger:e.trigger,position:e.position,"popup-offset":4,"popup-container":e.popupContainer,"opened-class":"".concat(e.prefixCls,"-open"),onPopupVisibleChange:e.handlePopupVisibleChange},{content:p(()=>[u(n,null,de({default:p(()=>[f(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:p(()=>[f(e.$slots,"footer")])}:void 0]),1024)]),default:p(()=>[f(e.$slots,"default")]),_:3},8,["popup-visible","trigger","position","popup-container","opened-class","onPopupVisibleChange"])}var Z=O(yo,[["render",Co]]);const So=k({name:"Doption",props:{value:{type:[String,Number,Object]},disabled:{type:Boolean,default:!1},active:Boolean,uninjectContext:Boolean},emits:{click:e=>!0},setup(e,{emit:o}){const t=z("dropdown-option"),l=m(),s=b(()=>{var r,c,v;return(v=(c=e.value)!=null?c:(r=l.value)==null?void 0:r.textContent)!=null?v:void 0}),a=e.uninjectContext?void 0:G(me,void 0),n=r=>{e.disabled||(o("click",r),a==null||a.onOptionClick(s.value,r))},i=b(()=>[t,{["".concat(t,"-disabled")]:e.disabled,["".concat(t,"-active")]:e.active}]);return{prefixCls:t,cls:i,liRef:l,handleClick:n}}});function ko(e,o,t,l,s,a){return g(),B("li",{ref:"liRef",class:h([e.cls,{["".concat(e.prefixCls,"-has-suffix")]:!!e.$slots.suffix}]),onClick:o[0]||(o[0]=(...n)=>e.handleClick&&e.handleClick(...n))},[e.$slots.icon?(g(),B("span",{key:0,class:h("".concat(e.prefixCls,"-icon"))},[f(e.$slots,"icon")],2)):j("v-if",!0),P("span",{class:h("".concat(e.prefixCls,"-content"))},[f(e.$slots,"default")],2),e.$slots.suffix?(g(),B("span",{key:1,class:h("".concat(e.prefixCls,"-suffix"))},[f(e.$slots,"suffix")],2)):j("v-if",!0)],2)}var F=O(So,[["render",ko]]);const zo=k({name:"Dgroup",props:{title:String},setup(){return{prefixCls:z("dropdown-group")}}});function wo(e,o,t,l,s,a){return g(),B(ce,null,[P("li",{class:h("".concat(e.prefixCls,"-title"))},[f(e.$slots,"title",{},()=>[We(Ze(e.title),1)])],2),f(e.$slots,"default")],64)}var ae=O(zo,[["render",wo]]);const Vo=k({name:"Dsubmenu",components:{Trigger:Pe,DropdownPanel:Oe,DropdownOption:F,IconRight:qe},props:{value:{type:[String,Number]},disabled:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"rt"},popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},optionProps:{type:Object}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:l}=ve(e),s=z("dropdown"),{computedPopupVisible:a,handlePopupVisibleChange:n}=he({defaultPopupVisible:t,popupVisible:l,emit:o});return{prefixCls:s,computedPopupVisible:a,handlePopupVisibleChange:n}}});function Bo(e,o,t,l,s,a){const n=S("IconRight"),i=S("dropdown-option"),r=S("dropdown-panel"),c=S("Trigger");return g(),H(c,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,disabled:e.disabled,"popup-offset":4,onPopupVisibleChange:e.handlePopupVisibleChange},{content:p(()=>[u(r,{class:h("".concat(e.prefixCls,"-submenu"))},de({default:p(()=>[f(e.$slots,"content")]),_:2},[e.$slots.footer?{name:"footer",fn:p(()=>[f(e.$slots,"footer")])}:void 0]),1032,["class"])]),default:p(()=>[u(i,fe(e.optionProps,{active:e.computedPopupVisible,"uninject-context":""}),de({suffix:p(()=>[f(e.$slots,"suffix",{},()=>[u(n)])]),default:p(()=>[f(e.$slots,"default")]),_:2},[e.$slots.icon?{name:"icon",fn:p(()=>[f(e.$slots,"icon")])}:void 0]),1040,["active"])]),_:3},8,["popup-visible","trigger","position","disabled","onPopupVisibleChange"])}var re=O(Vo,[["render",Bo]]);const Po=k({name:"DropdownButton",components:{IconMore:bo,Button:Ke,ButtonGroup:Ue,Dropdown:Z},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"click"},position:{type:String,default:"br"},popupContainer:{type:[String,Object]},disabled:{type:Boolean,default:!1},type:{type:String},size:{type:String},buttonProps:{type:Object},hideOnSelect:{type:Boolean,default:!0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,click:e=>!0,select:(e,o)=>!0},setup(e,{emit:o}){const{defaultPopupVisible:t,popupVisible:l}=ve(e),s=z("dropdown"),{computedPopupVisible:a,handlePopupVisibleChange:n}=he({defaultPopupVisible:t,popupVisible:l,emit:o});return{prefixCls:s,computedPopupVisible:a,handleClick:c=>{o("click",c)},handleSelect:(c,v)=>{o("select",c,v)},handlePopupVisibleChange:n}}});function Oo(e,o,t,l,s,a){const n=S("Button"),i=S("IconMore"),r=S("Dropdown"),c=S("ButtonGroup");return g(),H(c,null,{default:p(()=>[u(n,fe({size:e.size,type:e.type,disabled:e.disabled},e.buttonProps,{onClick:e.handleClick}),{default:p(()=>[f(e.$slots,"default")]),_:3},16,["size","type","disabled","onClick"]),u(r,{"popup-visible":e.computedPopupVisible,trigger:e.trigger,position:e.position,"popup-container":e.popupContainer,"hide-on-select":e.hideOnSelect,onSelect:e.handleSelect,onPopupVisibleChange:e.handlePopupVisibleChange},{content:p(()=>[f(e.$slots,"content")]),default:p(()=>[u(n,{size:e.size,type:e.type,disabled:e.disabled},{icon:p(()=>[f(e.$slots,"icon",{popupVisible:e.computedPopupVisible},()=>[u(i)])]),_:3},8,["size","type","disabled"])]),_:3},8,["popup-visible","trigger","position","popup-container","hide-on-select","onSelect","onPopupVisibleChange"])]),_:3})}var ue=O(Po,[["render",Oo]]);const Do=Object.assign(Z,{Option:F,Group:ae,Submenu:re,Button:ue,install:(e,o)=>{q(e,o);const t=K(o);e.component(t+Z.name,Z),e.component(t+F.name,F),e.component(t+ae.name,ae),e.component(t+re.name,re),e.component(t+ue.name,ue)}});export{Do as D,oo as E,bo as I,uo as S,Mo as a,F as b,he as u};