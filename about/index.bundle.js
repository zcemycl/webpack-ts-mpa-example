(()=>{"use strict";var e={904:(e,o,t)=>{t.r(o),t.d(o,{a:()=>n,func_a:()=>r});const n=1,r=()=>console.log("hello world")}},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var a=o[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=t(904);const o=()=>("localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname?location.href="/webpack-ts-mpa-example/":location.href="/",location.href);new class{constructor(e,t){this.model=e,this.view=t,this.view.homeBtn.onclick=o,this.view.navbar_home.onclick=o}}(new class{constructor(){this.suffix="/about"}},new class{constructor(){console.log("this is about page..."),this.app=document.querySelector("#root"),this.homeBtn=document.createElement("button"),this.homeBtn.textContent="Home",this.app.append(this.homeBtn),this.navbar_home=document.getElementById("homebtn")}misc(){e.func_a()}})})()})();