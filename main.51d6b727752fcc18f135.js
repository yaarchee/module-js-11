(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO");var a,o,r,i,s,c=document.querySelector("button[data-action=start]"),u=document.querySelector("button[data-action=stop]"),l=document.querySelector("body"),d=(n("e+qc"),n("fp1L")),f=n.n(d),h=function(){function t(t){var e=t.selector,n=t.targetDate;this.timerRef=document.querySelector(e),this.targetDate=n,this.arrItems=["days","hours","minutes","seconds"],this.init(),this.targetDateRef=document.querySelector(".target-data").textContent="Целевая дата "+n,this.secsRef=document.querySelector("span[data-value=seconds]"),this.minsRef=document.querySelector("span[data-value=minutes]"),this.hoursRef=document.querySelector("span[data-value=hours]"),this.dayssRef=document.querySelector("span[data-value=days]")}var e=t.prototype;return e.getReminderDate=function(){var t=this;setInterval((function(){console.log();var e=t.targetDate.getTime()-Date.now();t.parseDate(e)}),1e3)},e.pad=function(t){return String(t).padStart(2,0)},e.parseDate=function(t){var e=this.pad(Math.floor(t/864e5)),n=this.pad(Math.floor(t%864e5/36e5)),a=this.pad(Math.floor(t%36e5/6e4)),o=Math.floor(t%6e4/1e3);this.secsRef.textContent=o,this.minsRef.textContent=a,this.hoursRef.textContent=n,this.dayssRef.textContent=e},e.init=function(){this.timerRef.insertAdjacentHTML("beforeend",f()(this.arrItems))},t}();n("JBxO"),n("FdtR"),n("lmye"),n("D/wG"),n("wCa+");!function(){var t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e={intervalID:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,c.disabled=!0,this.intervalID=setInterval((function(){var e=n(1,t.length);l.style.backgroundColor=t[e]}),100))},stop:function(){clearInterval(this.intervalID),this.isActive=!1,c.disabled=!1}};c.addEventListener("click",e.start.bind(e)),u.addEventListener("click",e.stop.bind(e));var n=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}}(),new h({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")}).getReminderDate(),o=function(t){return console.log("Resolved after "+t+"ms")},(a=function(t){return new Promise((function(e){e(t)}))})(2e3).then(o),a(1e3).then(o),a(1500).then(o),function(){var t=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],e=function(t,e){return new Promise((function(n){n(t.map((function(t){return t.name===e?Object.assign({},t,{active:!t.active}):t})))}))},n=function(t){return console.table(t)};e(t,"Mango").then(n),e(t,"Lux").then(n)}(),i=function(t){var e=t.id,n=t.time;console.log("Transaction "+e+" processed in "+n+"ms")},s=function(t){console.warn("Error processing transaction "+t+". Please try again later.")},(r=function(t){return new Promise((function(e,n){var a,o,r=(a=200,o=500,Math.floor(Math.random()*(o-a+1)+a));setTimeout((function(){Math.random()>.3?e({id:t.id,time:r}):n(t.id)}),r)}))})({id:70,amount:150}).then(i).catch(s),r({id:71,amount:230}).then(i).catch(s),r({id:72,amount:75}).then(i).catch(s),r({id:73,amount:100}).then(i).catch(s)},fp1L:function(t,e,n){var a=n("mp5j");t.exports=(a.default||a).template({1:function(t,e,n,a,o){var r=t.lambda,i=t.escapeExpression;return'    <div class="field">\r\n      <span class="value" data-value="'+i(r(e,e))+'">11</span>\r\n      <span class="label">'+i(r(e,e))+"</span>\r\n    </div>\r\n\r\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,a,o){var r;return null!=(r=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?r:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.51d6b727752fcc18f135.js.map