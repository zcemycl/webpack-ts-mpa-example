(()=>{"use strict";console.log("this is about page...");const o=o=>{"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname?location.href="/webpack-ts-mpa-example/":location.href="/"},t=document.querySelector("#root"),e=document.createElement("button");e.textContent="Home",e.onclick=o,t.append(e);document.getElementById("homebtn").onclick=o})();