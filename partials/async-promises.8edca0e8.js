const t={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockface:document.querySelector(".js-clockface")};const n=new class{init(){const t=this.getTimeComponents(0);this.onTick(t)}start(){if(this.isActive)return;const t=Date.now();this.isActive=!0,this.intervalId=setInterval((()=>{const n=Date.now()-t,e=this.getTimeComponents(n);this.onTick(e)}),1e3)}stop(){clearInterval(this.intervalId),this.isActive=!1;const t=this.getTimeComponents(0);this.onTick(t)}getTimeComponents(t){return{hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,"0")}constructor({onTick:t}){this.intervalId=null,this.isActive=!1,this.onTick=t,this.init()}}({onTick:function({hours:n,mins:e,secs:i}){t.clockface.textContent=`${n}:${e}:${i}`}});t.startBtn.addEventListener("click",n.start.bind(n)),t.stopBtn.addEventListener("click",n.stop.bind(n));const e=function({name:t,age:n,xp:e}={}){this.name=t,this.age=n,this.xp=e};e.prototype.gainXp=function(t){return this.xp+=t},e.prototype.getName=function(){return this.name};const i=new e({name:"Tommy",age:19,xp:12}),o=new e({name:"Billy",age:23,xp:27});i.gainXp(5),o.gainXp(10),console.log("shipboy",i),console.log("midshipman",o);
//# sourceMappingURL=async-promises.8edca0e8.js.map