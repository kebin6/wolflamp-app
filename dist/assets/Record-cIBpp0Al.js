import{d as M,r as k,af as D,ag as B,i as d,k as z,f as t,F as p,a6 as _,e as b,w as y,a8 as S,u as H,b as n,n as L,ah as I,t as a,h as u,z as T,A as $,_ as N}from"./index-DCYTMmCm.js";import{L as O}from"./index-FQ-SKoHn.js";import{a as R,d as V,w as E,b as F}from"./constant-De4X57-W.js";import{a as C}from"./index-CLiQXqun.js";import{N as U}from"./Nav-zA6f3mDx.js";import{d as x}from"./dayjs.min-DE2R3_3L.js";import"./back-Kr7dO9h3.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f=h=>(T("data-v-3675b48e"),h=h(),$(),h),Q={class:"page-record g-box"},j={class:"tabs"},W={class:"tabs-header"},q=["onClick"],G={class:"tabs-content"},J={cellpadding:"0",class:"table",key:"depositTable"},K=f(()=>t("thead",null,[t("tr",{onClick:()=>{}},[t("th",null,"Quantity (SOL)"),t("th",null,"Time"),t("th",null,"Status")])],-1)),P=["onClick"],X={cellpadding:"0",class:"table",key:"withdrawTable"},Z=f(()=>t("thead",null,[t("tr",{tr:"",onClick:()=>{}},[t("th",null,"Quantity (SOL)"),t("th",null,"Time"),t("th",null,"Status")])],-1)),tt=["onClick"],et={class:"block"},st=["onClick"],at={class:"flex"},ot=f(()=>t("section",{class:"flex"},"Exchange",-1)),lt={class:"flex"},nt=f(()=>t("section",null,"SOL",-1)),it={class:"flex"},dt=f(()=>t("section",null,"LAMB",-1)),ct={class:"flex"},rt=f(()=>t("section",null,"Status",-1)),ut=M({__name:"Record",setup(h){const c=k(0),w=k(["Deposit","Withdraw","Exchange"]),o=k([{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{type:"deposit"}},{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{type:"withdraw"}},{total:0,page:1,pageSize:10,list:[],loading:!1,finished:!1,params:{}}]),A=H(),g=D(),Y=s=>{c.value=s},v=async()=>{let s=o.value[c.value];try{let l={0:C,1:C,2:R};const{data:i}=await l[c.value]({page:s.page,pageSize:s.pageSize,...s.params});s.list=s.list.concat(i.data||[]),s.total=i.total,s.page++,s.loading=!1,s.list.length>=(i.total||0)&&(s.finished=!0)}catch{s.finished=!0}},m=(s,l)=>{!s||!l||A.push(`/detail?id=${s.id}&type=${l}`)};return B((s,l,i)=>{let e=g.config.keepAliveList;s.path==="/detail"?e=["/record"]:e=[],g.setConfig({...g.config,keepAliveList:e}),setTimeout(()=>{i()})}),(s,l)=>{const i=O;return n(),d("section",Q,[z(U,{title:"Record"}),t("section",j,[t("section",W,[(n(!0),d(p,null,_(w.value,(e,r)=>(n(),d("section",{key:r,class:L(["tabs-header-item",{active:r===c.value}]),onClick:I(ft=>Y(r),["self"])},a(e),11,q))),128))]),t("section",G,[c.value===0?(n(),b(i,{key:0,loading:o.value[0].loading,"onUpdate:loading":l[0]||(l[0]=e=>o.value[0].loading=e),finished:o.value[0].finished,"finished-text":"没有更多了",onLoad:v,offset:"30"},{default:y(()=>[t("table",J,[K,t("tbody",null,[(n(!0),d(p,null,_(o.value[0].list,e=>(n(),d("tr",{key:e.id,onClick:r=>m(e,"deposit")},[t("td",null,"+"+a(e.coinAmount),1),t("td",null,a(u(x)(e.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1),t("td",{class:L({red:e.status===3})},a(u(V)[e.status]),3)],8,P))),128))])])]),_:1},8,["loading","finished"])):S("",!0),c.value===1?(n(),b(i,{key:1,loading:o.value[1].loading,"onUpdate:loading":l[1]||(l[1]=e=>o.value[1].loading=e),finished:o.value[1].finished,"finished-text":"没有更多了",onLoad:v,offset:"30"},{default:y(()=>[t("table",X,[Z,t("tbody",null,[(n(!0),d(p,null,_(o.value[1].list,e=>(n(),d("tr",{key:e.id,onClick:r=>m(e,"withdraw")},[t("td",null,"-"+a(e.coinAmount),1),t("td",null,a(u(x)(e.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1),t("td",{class:L({red:e.status===3})},a(u(E)[e.status]),3)],8,tt))),128))])])]),_:1},8,["loading","finished"])):S("",!0),c.value===2?(n(),b(i,{key:2,loading:o.value[2].loading,"onUpdate:loading":l[2]||(l[2]=e=>o.value[2].loading=e),finished:o.value[2].finished,"finished-text":"没有更多了",onLoad:v,offset:"30"},{default:y(()=>[t("section",et,[(n(!0),d(p,null,_(o.value[2].list,e=>(n(),d("section",{class:"block-item",key:e.id,onClick:r=>m(e,"exchange")},[t("section",at,[t("section",null,a(e.type===1?"SOL/LAMB":"LAMB/SOL"),1),t("section",null,a(u(x)(e.createAt*1e3).format("YYYY/MM/DD HH:mm:ss")),1)]),ot,t("section",lt,[nt,t("section",null,a(e.type===1?"-":"")+" "+a(e.coinAmount),1)]),t("section",it,[dt,t("section",null,a(e.type!==1?"-":"")+" "+a(e.lambAmount),1)]),t("section",ct,[rt,t("section",null,a(u(F)[e.status]),1)])],8,st))),128))])]),_:1},8,["loading","finished"])):S("",!0)])])])}}}),yt=N(ut,[["__scopeId","data-v-3675b48e"]]);export{yt as default};
