"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4506],{2856:function(t,e,a){var r=a(1055),n=a(463),o=a(824),s=a(4469);const i={exposure:0,contrast:0,saturation:0},u=new n.Z({style:{exposure:["var","exposure"],contrast:["var","contrast"],saturation:["var","saturation"],variables:i},source:new s.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})});new r.Z({target:"map",layers:[u],view:new o.ZP({center:[0,0],zoom:0})});let p;for(p in i){const t=p,e=document.getElementById(t),a=i[t];e.value=a.toString(),document.getElementById(t+"-value").innerText=a.toFixed(2),e.addEventListener("input",(function(e){const a=parseFloat(e.target.value);document.getElementById(t+"-value").innerText=a.toFixed(2);const r={};r[t]=a,u.updateStyleVariables(r)}))}}},function(t){var e;e=2856,t(t.s=e)}]);
//# sourceMappingURL=webgl-tile-style.js.map