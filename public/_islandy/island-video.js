import{a,b as u,c as o}from"./chunk-VRJLXOLR.js";import"./chunk-OSBYYNH5.js";import{a as r,b as i,d as n}from"./chunk-BHBE5OCO.js";import"./chunk-CXCAHMKX.js";function l({title:d}){let e=i(null);return r(async()=>{let t=await fetch(a(u(d))).then(s=>s.json());return o.value=t,(!window.matchMedia("(prefers-reduced-motion)").matches||navigator.connection&&!navigator.connection.saveData)&&t&&t.full&&(e.current.addEventListener("loadedmetadata",function(){this.toggleAttribute("hidden")}),e.current.src=o.value.full),()=>{}},[]),n("video",{ref:e,class:"hero game-preview-trailer",autoplay:!0,loop:!0,muted:!0,playsinline:!0,hidden:!0})}export{l as default};