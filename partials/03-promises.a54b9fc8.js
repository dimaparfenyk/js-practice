var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("7Y9D8");const l=document.querySelector(".form");let r=null;function a(e,t){return new Promise(((o,n)=>{r=setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}l.addEventListener("submit",(e=>{e.preventDefault();let t=0;const o=l.elements.amount.value;for(let e=1;e<=o;e+=1)1===e?t=Number(l.elements.delay.value):t+=Number(l.elements.step.value),a(e,t).then((({position:e,delay:t})=>{i.Notify.success(`Position: ${e}; Delay: ${t}`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`Position: ${e}; Delay: ${t}`)}));l.reset()}));
//# sourceMappingURL=03-promises.a54b9fc8.js.map