(()=>{"use strict";var t={904:(t,e,a)=>{a.r(e),a.d(e,{a:()=>o,func_a:()=>n});const o=1,n=()=>console.log("hello world")}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,a),i.exports}a.d=(t,e)=>{for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t=a(904);class e{constructor(){var e;console.log(null==t?void 0:t.a),null===(e=null==t?void 0:t.func_a)||void 0===e||e.call(t),this.app=this.getElement("#root"),this.button=this.createElement("button"),this.button.textContent="New Number",this.button.setAttribute("data-testid","0"),this.aboutbtn=this.createElement("button"),this.aboutbtn.textContent="About",this.paragraph=this.createElement("h4","output"),this.paragraph.innerHTML="",this.app.append(this.button,this.aboutbtn,this.paragraph),this.prevbtn=document.getElementById("prev-button"),this.nextbtn=document.getElementById("next-button"),this.groups=document.getElementsByClassName("card-group")}getElement(t){return document.querySelector(t)}createElement(t,e){const a=document.createElement(t);return e&&a.classList.add(e),a}bindAddRandom(t){this.button.addEventListener("click",(()=>{console.log("click!!!"),t(Math.floor(100*Math.random())+1)}))}displayChanges(t){console.log(t),this.paragraph.innerHTML=t.toString()}}class o{constructor(){this.activeIndex=0,this.data=[],this.onDataChanged=t=>{console.log(t)}}bindDataChanged(t){this.onDataChanged=t}_commit(t){this.onDataChanged(t)}addRandom(t){this.data.push(t),this._commit(this.data)}}const n=()=>{const t="/about/";return"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname?location.href="/webpack-ts-mpa-example/about/":location.href=t,location.href};class i{constructor(t,e){this.onDataChanged=t=>{console.log("changed data"),this.view.displayChanges(t)},this.handleAddRandom=t=>{this.model.addRandom(t)},this.handleNextClick=()=>{const t=this.model.activeIndex+1<=this.view.groups.length-1?this.model.activeIndex+1:0,e=document.querySelector(`[data-index="${this.model.activeIndex}"]`),a=document.querySelector(`[data-index="${t}"]`);e.dataset.status="after",a.dataset.status="becoming-active-from-before",setTimeout((()=>{a.dataset.status="active",this.model.activeIndex=t}))},this.handlePrevClick=()=>{const t=this.model.activeIndex-1>=0?this.model.activeIndex-1:this.view.groups.length-1,e=document.querySelector(`[data-index="${this.model.activeIndex}"]`),a=document.querySelector(`[data-index="${t}"]`);e.dataset.status="before",a.dataset.status="becoming-active-from-after",setTimeout((()=>{a.dataset.status="active",this.model.activeIndex=t}))},this.model=t,this.view=e,this.view.aboutbtn.onclick=n,this.model.bindDataChanged(this.onDataChanged),this.view.bindAddRandom(this.handleAddRandom),this.onDataChanged(this.model.data),this.view.nextbtn.onclick=this.handleNextClick,this.view.prevbtn.onclick=this.handlePrevClick}}let s=null;window.addEventListener("load",(()=>{s=new i(new o,new e);const t=document.querySelector(".loading-bar"),a=document.querySelector(".content-after-loading");t.classList.toggle("off"),a.classList.toggle("on")}))})()})();