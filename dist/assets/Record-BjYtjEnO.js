import{d as w,r as v,a4 as D,ai as Y,i as d,k as x,f as e,F as h,a7 as p,e as k,w as b,a9 as y,u as B,b as l,n as C,aj as z,t as o,h as L,z as H,A as I,_ as T}from"./index-BDfR2T7Q.js";import{L as R}from"./index-Dgghtilq.js";import{a as V}from"./index-0VCCdNUa.js";import{a as A}from"./index-CwghfKXp.js";import{N as E}from"./Nav-DCYi3rhb.js";import{d as S}from"./dayjs.min-DE2R3_3L.js";import"./back-CpyWDUeq.js";import"./_commonjsHelpers-Cpj98o6Y.js";const r=f=>(H("data-v-ce867bbd"),f=f(),I(),f),F={class:"page-record g-box"},U={class:"tabs"},j={class:"tabs-header"},Q=["onClick"],W={class:"tabs-content"},q={cellpadding:"0",class:"table",key:"depositTable"},G={onClick:()=>{}},J=r(()=>e("th",null,"Time",-1)),K=r(()=>e("th",null,"Status",-1)),O=["onClick"],P={cellpadding:"0",class:"table",key:"withdrawTable"},X={tr:"",onClick:()=>{}},Z=r(()=>e("th",null,"Time",-1)),ee=r(()=>e("th",null,"Status",-1)),te=["onClick"],se={class:"block"},oe=["onClick"],ae={class:"flex"},ne=r(()=>e("section",{class:"flex"},"Exchange",-1)),le={class:"flex"},ie={class:"flex"},de=r(()=>e("section",null,"LAMB",-1)),ce={class:"flex"},re=r(()=>e("section",null,"Status",-1)),ue=w({__name:"Record",setup(f){const c=v(0),M=v(["Deposit","Withdraw","Exchange"]),a=v([{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{type:"deposit"}},{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{type:"withdraw"}},{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{}}]),N=B(),_=D(),$=s=>{c.value=s},g=async()=>{let s=a.value[c.value];try{let n={0:A,1:A,2:V};const{data:i}=await n[c.value]({page:s.page,pageSize:s.pageSize,...s.params});s.list=s.list.concat(i.data||[]),s.total=i.total,s.page++,s.loading=!1,s.list.length>=(i.total||0)&&(s.finished=!0)}catch{s.finished=!0}},m=(s,n)=>{!s||!n||N.push(`/detail?id=${s.id}&type=${n}`)};return Y((s,n,i)=>{let t=_.config.keepAliveList;s.path==="/detail"?t=["/record"]:t=[],_.setConfig({..._.config,keepAliveList:t}),setTimeout(()=>{i()})}),(s,n)=>{const i=R;return l(),d("section",F,[x(E,{title:"Record"}),e("section",U,[e("section",j,[(l(!0),d(h,null,p(M.value,(t,u)=>(l(),d("section",{key:u,class:C(["tabs-header-item",{active:u===c.value}]),onClick:z(fe=>$(u),["self"])},o(t),11,Q))),128))]),e("section",W,[c.value===0?(l(),k(i,{key:0,loading:a.value[0].loading,"onUpdate:loading":n[0]||(n[0]=t=>a.value[0].loading=t),finished:a.value[0].finished,"finished-text":"No More",onLoad:g,offset:"30"},{default:b(()=>[e("table",q,[e("thead",null,[e("tr",G,[e("th",null,"Quantity ("+o(s.$coinName)+")",1),J,K])]),e("tbody",null,[(l(!0),d(h,null,p(a.value[0].list,t=>(l(),d("tr",{key:t.id,onClick:u=>m(t,"deposit")},[e("td",null,"+"+o(t.coinAmount),1),e("td",null,o(L(S)(t.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1),e("td",{class:C({red:t.status===3})},o(t.statusDesc),3)],8,O))),128))])])]),_:1},8,["loading","finished"])):y("",!0),c.value===1?(l(),k(i,{key:1,loading:a.value[1].loading,"onUpdate:loading":n[1]||(n[1]=t=>a.value[1].loading=t),finished:a.value[1].finished,"finished-text":"No More",onLoad:g,offset:"30"},{default:b(()=>[e("table",P,[e("thead",null,[e("tr",X,[e("th",null,"Quantity ("+o(s.$coinName)+")",1),Z,ee])]),e("tbody",null,[(l(!0),d(h,null,p(a.value[1].list,t=>(l(),d("tr",{key:t.id,onClick:u=>m(t,"withdraw")},[e("td",null,"-"+o(t.coinAmount),1),e("td",null,o(L(S)(t.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1),e("td",{class:C({red:t.status===3})},o(t.statusDesc),3)],8,te))),128))])])]),_:1},8,["loading","finished"])):y("",!0),c.value===2?(l(),k(i,{key:2,loading:a.value[2].loading,"onUpdate:loading":n[2]||(n[2]=t=>a.value[2].loading=t),finished:a.value[2].finished,"finished-text":"No More",onLoad:g,offset:"30"},{default:b(()=>[e("section",se,[(l(!0),d(h,null,p(a.value[2].list,t=>(l(),d("section",{class:"block-item",key:t.id,onClick:u=>m(t,"exchange")},[e("section",ae,[e("section",null,o(t.type===1?`${s.$coinName}/LAMB`:`LAMB/${s.$coinName}`),1),e("section",null,o(L(S)(t.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1)]),ne,e("section",le,[e("section",null,o(s.$coinName),1),e("section",null,o(t.type===1?"-":"")+" "+o(t.coinAmount),1)]),e("section",ie,[de,e("section",null,o(t.type!==1?"-":"")+" "+o(t.lambAmount),1)]),e("section",ce,[re,e("section",null,o(t.statusDesc),1)])],8,oe))),128))])]),_:1},8,["loading","finished"])):y("",!0)])])])}}}),ye=T(ue,[["__scopeId","data-v-ce867bbd"]]);export{ye as default};
