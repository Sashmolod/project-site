!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequiredf55;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequiredf55=o),o.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var c={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},o=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),o[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.js","hgSxm":"project-site.e1709228.html","ee16w":"sprite.c6da56e5.svg","5ZPII":"project-site.c91a3fd9.js","aiARQ":"project-site.3930c8eb.html","lp5u4":"sprite.c6da56e5.svg","5UbS1":"index.1d27907e.css"}'));o("aNJCr").getBundleURL("EVgbq"),o("iE7OH").resolve("hgSxm");const c={LIGHT:"light-theme",DARK:"dark-theme"},i={body:document.querySelector("body"),themeSwitch:document.querySelector("#theme-switch-toggle")};function s(e){i.body.classList.add(e),i.themeSwitch.checked=e===c.DARK,localStorage.setItem("theme",e)}function u(e){i.body.classList.remove(e)}const a=localStorage.getItem("theme");a&&s(a),i.themeSwitch.addEventListener("change",(e=>{const t=e.target.checked?c.DARK:c.LIGHT;u(c.DARK),u(c.LIGHT),s(t)}));const l=document.querySelector(".js-menu"),f=document.querySelector("#menu-template").innerHTML,d=Handlebars.compile(f);fetch("./src/menu.json").then((e=>e.json())).then((e=>{const t=e.map((e=>d(e))).join("");l.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e)))}();
//# sourceMappingURL=index.js.map
