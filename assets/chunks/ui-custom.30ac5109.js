import{u as l,a as _}from"./theme.5004fb1e.js";import{d as p,f as u,w as c,h as f,o as m,c as b,_ as v}from"./framework.0173b754.js";const A=p({__name:"VPCarbonAds",props:{carbonAds:null},setup(r){const d=r,{page:i}=l(),s=d.carbonAds,{isAsideEnabled:a}=_(),o=u();let n=!1;function t(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${s.code}&placement=${s.placement}`,e.async=!0,o.value.appendChild(e)}}return c(()=>i.value.relativePath,()=>{var e;n&&a.value&&((e=window._carbonads)==null||e.refresh())}),s&&f(()=>{a.value?t():c(a,e=>e&&t())}),(e,h)=>(m(),b("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}});const w=v(A,[["__scopeId","data-v-8d366e00"]]);export{w as default};
