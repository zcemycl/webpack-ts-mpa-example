(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var s=i.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})(),(()=>{const e=t.p+"parallax-bg/resources/aaa1ba1984e59dbf45abdfd8c45eb0bd.png",i=t.p+"parallax-bg/resources/31a97b4078e34d1590ef8007630cd704.png",s=t.p+"parallax-bg/resources/a3c7cc49b813898743ad1709473fdae0.png",h=t.p+"parallax-bg/resources/f42781d7b70acfa640a61f67de292d9a.png",a=t.p+"parallax-bg/resources/d641f7f5cb13dab9cf9fb318b8a38a7d.png";class r{constructor(t,e,i){this.x=0,this.y=0,this.aspect_ratio=16/9,this.width=2400,this.height=720,this.image=t,this.view=i,this.speedModifier=e,this.speed=this.view.gameSpeed*this.speedModifier,this.x2=this.width}update(){this.speed=this.view.gameSpeed*this.speedModifier,this.x<=-this.width&&(this.x=this.width+this.x2-this.speed),this.x2<=-this.width&&(this.x2=this.width+this.x-this.speed),this.x=Math.floor(this.x-this.speed),this.x2=Math.floor(this.x2-this.speed)}draw(){this.view.ctx.drawImage(this.image,this.x,0,this.height*this.aspect_ratio,this.height,0,0,this.view.cw,this.view.ch),this.view.ctx.drawImage(this.image,this.x2,0,this.height*this.aspect_ratio,this.height,0,0,this.view.cw,this.view.ch)}}new class{constructor(t,e){this.model=t,this.view=e}}(new class{constructor(){this.data=[1,2]}},new class{constructor(){this.spriteWidth=575,this.spriteHeight=523,this.gameSpeed=10,this.staggerFrames=5,this.aspect_ratio=16/9,this.bgLayers=[],this.i=0,this.i2=2400,this.getCanvasSize=()=>{let t=0;t=window.innerWidth<=800?window.innerWidth*this.sm_width_percentage:window.innerWidth*this.lg_width_percentage,t=Math.round(t),this.cw=this.canvas.width=t,this.ch=this.canvas.height=t/this.aspect_ratio},this.animate=()=>{this.ctx.clearRect(0,0,this.cw,this.ch);for(const t of this.bgLayers)t.draw(),t.update();requestAnimationFrame(this.animate.bind(this))},this.canvas=document.getElementById("canvas1"),this.ctx=this.canvas.getContext("2d");const t=getComputedStyle(document.documentElement);this.gameFrame=0,this.sm_width_percentage=parseInt(t.getPropertyValue("--sm-screen-width-percentage"))/100,this.lg_width_percentage=parseInt(t.getPropertyValue("--lg-screen-width-percentage"))/100,this.getCanvasSize(),window.addEventListener("resize",this.getCanvasSize);const c=[e,i,s,h,a];for(let t=0;t<c.length;t++){const e=new Image;e.src=c[t],this.bgLayers.push(new r(e,.2*(t+1),this))}this.animate()}})})()})();