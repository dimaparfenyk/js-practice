const t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),closeBtn:document.querySelector("[data-stop]")};let e=null;function s(t,e){t.disabled=!1,e.disabled=!0,t.classList.toggle("is-active"),e.classList.toggle("is-active")}t.closeBtn.disabled=!0,t.closeBtn.classList.add("is-active"),t.startBtn.addEventListener("click",(()=>{s(t.closeBtn,t.startBtn),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.closeBtn.addEventListener("click",(()=>{clearInterval(e),s(t.startBtn,t.closeBtn)}));
//# sourceMappingURL=01-color-switcher.c2e11658.js.map
