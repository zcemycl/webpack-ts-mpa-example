(()=>{"use strict";new class{constructor(t,e){this.model=t,this.view=e,this.view.buttons.forEach((t=>{t.addEventListener("click",(()=>{"false"===t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")}))}))}}(new class{constructor(){this.data=[1,2]}},new class{constructor(){this.app=document.querySelector("#root"),this.buttons=document.querySelectorAll("button"),this.buttonThree=document.querySelector(".button-three")}})})();