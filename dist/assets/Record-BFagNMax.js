import{d as Y,r as v,a4 as x,ai as M,i as d,k as N,f as e,F as h,a7 as p,e as k,w as y,a9 as b,u as B,b as l,n as C,aj as z,t as a,h as L,z as H,A as I,_ as T}from"./index-D8l_vfLs.js";import{L as R}from"./index-Cv9Vt6BM.js";import{a as V}from"./index-1IXTo5CX.js";import{a as A}from"./index-B81w0VLZ.js";import{N as E}from"./Nav-B0Wn0l67.js";import{d as S}from"./dayjs.min-DE2R3_3L.js";import"./back-CpyWDUeq.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=f=>(H("data-v-3cb1711f"),f=f(),I(),f),F={class:"page-record g-box"},U={class:"tabs"},j={class:"tabs-header"},Q=["onClick"],W={class:"tabs-content"},q={cellpadding:"0",class:"table",key:"depositTable"},G={onClick:()=>{}},J=r(()=>e("th",null,"Time",-1)),K=r(()=>e("th",null,"Status",-1)),O=["onClick"],P={cellpadding:"0",class:"table",key:"withdrawTable"},X={tr:"",onClick:()=>{}},Z=r(()=>e("th",null,"Time",-1)),ee=r(()=>e("th",null,"Status",-1)),te=["onClick"],se={class:"block"},ae=["onClick"],oe={class:"flex"},ne=r(()=>e("section",{class:"flex"},"Exchange",-1)),le={class:"flex"},ie={class:"flex"},de=r(()=>e("section",null,"LAMB",-1)),ce={class:"flex"},re=r(()=>e("section",null,"Status",-1)),ue=Y({__name:"Record",setup(f){const c=v(0),$=v(["Deposit","Withdraw","Exchange"]),o=v([{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{type:"deposit"}},{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{type:"withdraw"}},{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{}}]),w=B(),_=x(),D=s=>{c.value=s},g=async()=>{let s=o.value[c.value];try{let n={0:A,1:A,2:V};const{data:i}=await n[c.value]({page:s.page,pageSize:s.pageSize,...s.params});s.list=s.list.concat(i.data||[]),s.total=i.total,s.page++,s.loading=!1,s.list.length>=(i.total||0)&&(s.finished=!0)}catch{s.finished=!0}},m=(s,n)=>{!s||!n||w.push(`/detail?id=${s.id}&type=${n}`)};return M((s,n,i)=>{let t=_.config.keepAliveList;s.path==="/detail"?t=["/record"]:t=[],_.setConfig({..._.config,keepAliveList:t}),setTimeout(()=>{i()})}),(s,n)=>{const i=R;return l(),d("section",F,[N(E,{title:"Record"}),e("section",U,[e("section",j,[(l(!0),d(h,null,p($.value,(t,u)=>(l(),d("section",{key:u,class:C(["tabs-header-item",{active:u===c.value}]),onClick:z(fe=>D(u),["self"])},a(t),11,Q))),128))]),e("section",W,[c.value===0?(l(),k(i,{key:0,loading:o.value[0].loading,"onUpdate:loading":n[0]||(n[0]=t=>o.value[0].loading=t),finished:o.value[0].finished,"finished-text":"没有更多了",onLoad:g,offset:"30"},{default:y(()=>[e("table",q,[e("thead",null,[e("tr",G,[e("th",null,"Quantity ("+a(s.$coinName)+")",1),J,K])]),e("tbody",null,[(l(!0),d(h,null,p(o.value[0].list,t=>(l(),d("tr",{key:t.id,onClick:u=>m(t,"deposit")},[e("td",null,"+"+a(t.coinAmount),1),e("td",null,a(L(S)(t.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1),e("td",{class:C({red:t.status===3})},a(t.statusDesc),3)],8,O))),128))])])]),_:1},8,["loading","finished"])):b("",!0),c.value===1?(l(),k(i,{key:1,loading:o.value[1].loading,"onUpdate:loading":n[1]||(n[1]=t=>o.value[1].loading=t),finished:o.value[1].finished,"finished-text":"没有更多了",onLoad:g,offset:"30"},{default:y(()=>[e("table",P,[e("thead",null,[e("tr",X,[e("th",null,"Quantity ("+a(s.$coinName)+")",1),Z,ee])]),e("tbody",null,[(l(!0),d(h,null,p(o.value[1].list,t=>(l(),d("tr",{key:t.id,onClick:u=>m(t,"withdraw")},[e("td",null,"-"+a(t.coinAmount),1),e("td",null,a(L(S)(t.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1),e("td",{class:C({red:t.status===3})},a(t.statusDesc),3)],8,te))),128))])])]),_:1},8,["loading","finished"])):b("",!0),c.value===2?(l(),k(i,{key:2,loading:o.value[2].loading,"onUpdate:loading":n[2]||(n[2]=t=>o.value[2].loading=t),finished:o.value[2].finished,"finished-text":"没有更多了",onLoad:g,offset:"30"},{default:y(()=>[e("section",se,[(l(!0),d(h,null,p(o.value[2].list,t=>(l(),d("section",{class:"block-item",key:t.id,onClick:u=>m(t,"exchange")},[e("section",oe,[e("section",null,a(t.type===1?`${s.$coinName}/LAMB`:`LAMB/${s.$coinName}`),1),e("section",null,a(L(S)(t.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1)]),ne,e("section",le,[e("section",null,a(s.$coinName),1),e("section",null,a(t.type===1?"-":"")+" "+a(t.coinAmount),1)]),e("section",ie,[de,e("section",null,a(t.type!==1?"-":"")+" "+a(t.lambAmount),1)]),e("section",ce,[re,e("section",null,a(t.statusDesc),1)])],8,ae))),128))])]),_:1},8,["loading","finished"])):b("",!0)])])])}}}),be=T(ue,[["__scopeId","data-v-3cb1711f"]]);export{be as default};
