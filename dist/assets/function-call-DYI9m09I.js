import{r as I,a6 as j,E as z,al as G,C as Q,am as V,an as X,ao as J,k as l,G as P,d as k,Y as Z,W as R,a4 as $,ap as ee,I as y,X as C,K as L,aq as ne,ar as te,T as oe,a0 as ae,O as le,c as H,Q as ie,as as se,at as ce,au as re,av as ue,aw as de,a2 as U,a1 as fe,ax as ge,P as me,ay as N,az as Be,aA as he,aB as be,aC as ve,aD as we,aE as Ce,aF as ye}from"./index-DBFXL0r3.js";const xe=(e,a)=>{const n=I(),o=()=>{n.value=J(e).height};return j(()=>{z(o);for(let s=1;s<=3;s++)setTimeout(o,100*s)}),G(()=>z(o)),Q([V,X],o),n};function Se(e,a){const n=xe(e);return o=>l("div",{class:a("placeholder"),style:{height:n.value?`${n.value}px`:void 0}},[o()])}const[W,F]=P("action-bar"),q=Symbol(W),Pe={placeholder:Boolean,safeAreaInsetBottom:R};var ke=k({name:W,props:Pe,setup(e,{slots:a}){const n=I(),o=Se(n,F),{linkChildren:s}=Z(q);s();const f=()=>{var B;return l("div",{ref:n,class:[F(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(B=a.default)==null?void 0:B.call(a)])};return()=>e.placeholder?o(f):f()}});const Te=$(ke),M={to:[String,Object],url:String,replace:Boolean};function Oe({to:e,url:a,replace:n,$router:o}){e&&o?o[n?"replace":"push"](e):a&&(n?location.replace(a):location.href=a)}function Y(){const e=ee().proxy;return()=>Oe(e)}const[De,w]=P("button"),pe=y({},M,{tag:C("button"),text:String,icon:String,type:C("default"),size:C("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:C("button"),loadingSize:L,loadingText:String,loadingType:String,iconPosition:C("left")});var Ae=k({name:De,props:pe,emits:["click"],setup(e,{emit:a,slots:n}){const o=Y(),s=()=>n.loading?n.loading():l(ae,{size:e.loadingSize,type:e.loadingType,class:w("loading")},null),f=()=>{if(e.loading)return s();if(n.icon)return l("div",{class:w("icon")},[n.icon()]);if(e.icon)return l(te,{name:e.icon,class:w("icon"),classPrefix:e.iconPrefix},null)},B=()=>{let i;if(e.loading?i=e.loadingText:i=n.default?n.default():e.text,i)return l("span",{class:w("text")},[i])},r=()=>{const{color:i,plain:h}=e;if(i){const g={color:h?i:"white"};return h||(g.background=i),i.includes("gradient")?g.border=0:g.borderColor=i,g}},b=i=>{e.loading?oe(i):e.disabled||(a("click",i),o())};return()=>{const{tag:i,type:h,size:g,block:x,round:T,plain:O,square:D,loading:p,disabled:t,hairline:c,nativeType:m,iconPosition:u}=e,v=[w([h,g,{plain:O,block:x,round:T,square:D,loading:p,disabled:t,hairline:c}]),{[ne]:c}];return l(i,{type:m,class:v,style:r(),disabled:t,onClick:b},{default:()=>[l("div",{class:w("content")},[u==="left"&&f(),B(),u==="right"&&f()])]})}}});const _=$(Ae),[Re,_e]=P("action-bar-button"),Ee=y({},M,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var Ie=k({name:Re,props:Ee,setup(e,{slots:a}){const n=Y(),{parent:o,index:s}=le(q),f=H(()=>{if(o){const r=o.children[s.value-1];return!(r&&"isButton"in r)}}),B=H(()=>{if(o){const r=o.children[s.value+1];return!(r&&"isButton"in r)}});return ie({isButton:!0}),()=>{const{type:r,icon:b,text:i,color:h,loading:g,disabled:x}=e;return l(_,{class:_e([r,{last:B.value,first:f.value}]),size:"large",type:r,icon:b,color:h,loading:g,disabled:x,onClick:n},{default:()=>[a.default?a.default():i]})}}});const K=$(Ie),[$e,d,S]=P("dialog"),ze=y({},se,{title:String,theme:String,width:L,message:[String,Function],callback:Function,allowHtml:Boolean,className:ce,transition:C("van-dialog-bounce"),messageAlign:String,closeOnPopstate:R,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:R,closeOnClickOverlay:Boolean}),He=[...re,"transition","closeOnPopstate"];var Ne=k({name:$e,props:ze,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:a,slots:n}){const o=I(),s=ue({confirm:!1,cancel:!1}),f=t=>a("update:show",t),B=t=>{var c;f(!1),(c=e.callback)==null||c.call(e,t)},r=t=>()=>{e.show&&(a(t),e.beforeClose?(s[t]=!0,ve(e.beforeClose,{args:[t],done(){B(t),s[t]=!1},canceled(){s[t]=!1}})):B(t))},b=r("cancel"),i=r("confirm"),h=de(t=>{var c,m;if(t.target!==((m=(c=o.value)==null?void 0:c.popupRef)==null?void 0:m.value))return;({Enter:e.showConfirmButton?i:N,Escape:e.showCancelButton?b:N})[t.key](),a("keydown",t)},["enter","esc"]),g=()=>{const t=n.title?n.title():e.title;if(t)return l("div",{class:d("header",{isolated:!e.message&&!n.default})},[t])},x=t=>{const{message:c,allowHtml:m,messageAlign:u}=e,v=d("message",{"has-title":t,[u]:u}),A=Be(c)?c():c;return m&&typeof A=="string"?l("div",{class:v,innerHTML:A},null):l("div",{class:v},[A])},T=()=>{if(n.default)return l("div",{class:d("content")},[n.default()]);const{title:t,message:c,allowHtml:m}=e;if(c){const u=!!(t||n.title);return l("div",{key:m?1:0,class:d("content",{isolated:!u})},[x(u)])}},O=()=>l("div",{class:[be,d("footer")]},[e.showCancelButton&&l(_,{size:"large",text:e.cancelButtonText||S("cancel"),class:d("cancel"),style:{color:e.cancelButtonColor},loading:s.cancel,disabled:e.cancelButtonDisabled,onClick:b},null),e.showConfirmButton&&l(_,{size:"large",text:e.confirmButtonText||S("confirm"),class:[d("confirm"),{[he]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:s.confirm,disabled:e.confirmButtonDisabled,onClick:i},null)]),D=()=>l(Te,{class:d("footer")},{default:()=>[e.showCancelButton&&l(K,{type:"warning",text:e.cancelButtonText||S("cancel"),class:d("cancel"),color:e.cancelButtonColor,loading:s.cancel,disabled:e.cancelButtonDisabled,onClick:b},null),e.showConfirmButton&&l(K,{type:"danger",text:e.confirmButtonText||S("confirm"),class:d("confirm"),color:e.confirmButtonColor,loading:s.confirm,disabled:e.confirmButtonDisabled,onClick:i},null)]}),p=()=>n.footer?n.footer():e.theme==="round-button"?D():O();return()=>{const{width:t,title:c,theme:m,message:u,className:v}=e;return l(me,U({ref:o,role:"dialog",class:[d([m]),v],style:{width:ge(t)},tabindex:0,"aria-labelledby":c||u,onKeydown:h,"onUpdate:show":f},fe(e,He)),{default:()=>[g(),T(),p()]})}}});let E;const Fe={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let Ke=y({},Fe);function Le(){({instance:E}=Ce({setup(){const{state:a,toggle:n}=ye();return()=>l(Ne,U(a,{"onUpdate:show":n}),null)}}))}function Ue(e){return we?new Promise((a,n)=>{E||Le(),E.open(y({},Ke,e,{callback:o=>{(o==="confirm"?a:n)(o)}}))}):Promise.resolve(void 0)}const qe=e=>Ue(y({showCancelButton:!0},e));export{qe as s};
