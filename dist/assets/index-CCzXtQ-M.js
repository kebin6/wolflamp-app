import{aL as B,E as L,d as C,r as h,aM as R,c as w,B as m,aN as N,a5 as _,O,R as U,k as r,U as j,W as y,V as A,D as M,ao as T,aO as V,$ as D,a3 as F}from"./index-Br0lMVMS.js";const H=Symbol(),I=()=>B(H,null),[K,o,W]=L("list"),Y={error:Boolean,offset:j(300),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:y("down"),loadingText:String,finishedText:String,immediateCheck:A};var $=C({name:K,props:Y,emits:["load","update:error","update:loading"],setup(e,{emit:c,slots:a}){const l=h(e.loading),u=h(),g=h(),s=I(),b=R(u),v=w(()=>e.scroller||b.value),n=()=>{M(()=>{if(l.value||e.finished||e.disabled||e.error||(s==null?void 0:s.value)===!1)return;const{direction:t}=e,d=+e.offset,i=T(v);if(!i.height||V(u))return;let f=!1;const x=T(g);t==="up"?f=i.top-x.top<=d:f=x.bottom-i.bottom<=d,f&&(l.value=!0,c("update:loading",!0),c("load"))})},S=()=>{if(e.finished){const t=a.finished?a.finished():e.finishedText;if(t)return r("div",{class:o("finished-text")},[t])}},k=()=>{c("update:error",!1),n()},P=()=>{if(e.error){const t=a.error?a.error():e.errorText;if(t)return r("div",{role:"button",class:o("error-text"),tabindex:0,onClick:k},[t])}},E=()=>{if(l.value&&!e.finished&&!e.disabled)return r("div",{class:o("loading")},[a.loading?a.loading():r(D,{class:o("loading-icon")},{default:()=>[e.loadingText||W("loading")]})])};return m(()=>[e.loading,e.finished,e.error],n),s&&m(s,t=>{t&&n()}),N(()=>{l.value=e.loading}),_(()=>{e.immediateCheck&&n()}),O({check:n}),U("scroll",n,{target:v,passive:!0}),()=>{var t;const d=(t=a.default)==null?void 0:t.call(a),i=r("div",{ref:g,class:o("placeholder")},null);return r("div",{ref:u,role:"feed",class:o(),"aria-busy":l.value},[e.direction==="down"?d:i,E(),S(),P(),e.direction==="up"?d:i])}}});const z=F($);export{z as L};
