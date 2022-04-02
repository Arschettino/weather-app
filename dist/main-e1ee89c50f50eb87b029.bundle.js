(()=>{"use strict";var e={288:(e,t,r)=>{e.exports=r.p+"images/company.png"},725:(e,t,r)=>{e.exports=r.p+"images/search.svg"}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r(288),r(725);const e="58fed4c0ebe3af6d3eebb42a932cea95";let t=document.querySelector("button.weather"),i=document.querySelector("button.unit"),n=document.querySelector("input"),a="imperial",o="Farenheight",c="";async function l(t){let r=await async function(t){try{let r=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=1&appid=${e}`,{mode:"cors"}),i=await r.json();return{lat:i[0].lat,lon:i[0].lon}}catch{return Promise.reject("Invalid City")}}(t),i=await async function(t,r){return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${r}&appid=${e}&units=${a}`,{mode:"cors"})}(r.lat,r.lon),n=await i.json();return console.log(n),n}t.addEventListener("click",(e=>{n.value?l(n.value).then((e=>{c=n.value,function(e){let t=document.querySelector("h1.title"),r=document.querySelector("div.weather-1"),i=document.querySelector("div.weather-2"),n=document.querySelector("div.weather-3"),a=document.querySelector("div.weather-4"),l=document.querySelector("div.weather-5");t.textContent=c+" Weather",r.textContent="Current Temperature: "+e.main.temp+" "+o,i.textContent="Feels Like: "+e.main.feels_like+" "+o,n.textContent="Today's High: "+e.main.temp_max+" "+o,a.textContent="Today's Low: "+e.main.temp_min+" "+o,l.textContent="Cloud Coverage: "+e.weather[0].description}(e)})).catch((e=>{n.setCustomValidity("Invalid City"),n.reportValidity()})):(n.setCustomValidity("Please enter a city"),n.reportValidity())})),n.addEventListener("input",(e=>{e.target.setCustomValidity("")})),i.addEventListener("click",(e=>{!function(){switch(a="imperial"===a?"metric":"imperial",a){case"imperial":o="Farenheight";break;case"metric":o="Celsius"}}(),t.click()}))})()})();