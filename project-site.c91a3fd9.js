var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiredf55;e.register("2Fivl",(function(t,n){e("ld7ca"),e("lJ5oQ"),e("4dIBK")})),e.register("ld7ca",(function(t,n){t.exports=new URL(e("kyEFX").resolve("aiARQ"),import.meta.url).toString()})),e.register("kyEFX",(function(e,t){var n,o,r,c,i;n=e.exports,o="resolve",r=function(){return i},c=function(e){return i=e},Object.defineProperty(n,o,{get:r,set:c,enumerable:!0,configurable:!0});var l={};i=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),e.register("lJ5oQ",(function(e,t){const n={LIGHT:"light-theme",DARK:"dark-theme"},o={body:document.querySelector("body"),themeSwitch:document.querySelector("#theme-switch-toggle")};function r(e){o.body.classList.add(e),o.themeSwitch.checked=e===n.DARK,localStorage.setItem("theme",e)}function c(e){o.body.classList.remove(e)}const i=localStorage.getItem("theme");i&&r(i),o.themeSwitch.addEventListener("change",(e=>{const t=e.target.checked?n.DARK:n.LIGHT;c(n.DARK),c(n.LIGHT),r(t)}))})),e.register("4dIBK",(function(e,t){const n=document.querySelector(".js-menu"),o=document.querySelector("#menu-template").innerHTML,r=Handlebars.compile(o);fetch("./src/menu.json").then((e=>e.json())).then((e=>{const t=e.map((e=>r(e))).join("");n.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e)))}));
//# sourceMappingURL=project-site.c91a3fd9.js.map