!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";function n(){return window.Piwik.getAsyncTrackers()}function o(e){return new Promise((function(r,t){var n=document.createElement("script");n.async=!0,n.defer=!0,n.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(n),n.onload=r,n.onerror=t}))}function i(e,r){return e.resolve(r).href}t.r(r),t.d(r,"matomoKey",(function(){return u})),t.d(r,"default",(function(){return s}));var a={debug:!1,disableCookies:!1,requireCookieConsent:!1,enableHeartBeatTimer:!1,enableLinkTracking:!0,heartBeatTimerInterval:15,requireConsent:!1,trackInitialView:!0,trackSiteSearch:!1,trackerFileName:"matomo",trackerUrl:void 0,trackerScriptUrl:void 0,userId:void 0,cookieDomain:void 0,domains:void 0,preInitActions:[]},u="Matomo";function c(e,r,t){if("function"==typeof e.trackSiteSearch){var o=e.trackSiteSearch(r);if(o)return void function(e,r){var t=r.keyword,o=r.category,i=r.resultsCount,a=n();e.debug&&console.debug("[vue-matomo] Site Search "+t),a.forEach((function(e){e.trackSiteSearch(t,o,i)}))}(e,o)}!function(e,r,t){var o,a,u,c=n();if(e.router){if(a=i(e.router,r.fullPath),u=t&&t.fullPath?i(e.router,t.fullPath):void 0,r.meta.analyticsIgnore)return void(e.debug&&console.debug("[vue-matomo] Ignoring "+a));e.debug&&console.debug("[vue-matomo] Tracking "+a),o=r.meta.title||a}u&&c.forEach((function(e){e.setReferrerUrl(u)}));a&&c.forEach((function(e){e.setCustomUrl(a)}));c.forEach((function(e){e.trackPageView(o)}))}(e,r,t)}function f(e,r){var t=n(),o=Number(e.version.split(".")[0]);if(t[0].allTrackers=function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];t.forEach((function(r){r[e].apply(r,n)}))},o>2?(e.config.globalProperties.$piwik=t[0],e.config.globalProperties.$matomo=t[0],e.provide(u,t[0])):(e.prototype.$piwik=t[0],e.prototype.$matomo=t[0]),r.trackInitialView&&r.router){var i=r.router.currentRoute.value?r.router.currentRoute.value:r.router.currentRoute;c(r,i)}r.router&&r.router.afterEach((function(e,n){c(r,e,n),r.enableLinkTracking&&t.forEach((function(e){e.enableLinkTracking()}))}))}function l(){return new Promise((function(e,r){var t=Date.now(),n=setInterval((function(){if(window.Piwik)return clearInterval(n),e();if(Date.now()>=t+3e3)throw clearInterval(n),new Error("[vue-matomo]: window.Piwik undefined after waiting for ".concat(3e3,"ms"))}),50)}))}function s(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object.assign({},a,r),n=t.host,i=t.siteId,u=t.trackerFileName,c=t.trackerUrl,s=t.trackerScriptUrl,d=s||"".concat(n,"/").concat(u,".js"),p=c||"".concat(n,"/").concat(u,".php");window._paq=window._paq||[],window._paq.push(["setTrackerUrl",p]),window._paq.push(["setSiteId",i]),t.requireConsent&&window._paq.push(["requireConsent"]),t.userId&&window._paq.push(["setUserId",t.userId]),t.enableLinkTracking&&window._paq.push(["enableLinkTracking"]),t.disableCookies&&window._paq.push(["disableCookies"]),t.requireCookieConsent&&window._paq.push(["requireCookieConsent"]),t.enableHeartBeatTimer&&window._paq.push(["enableHeartBeatTimer",t.heartBeatTimerInterval]),t.cookieDomain&&window._paq.push(["setCookieDomain",t.cookieDomain]),t.domains&&window._paq.push(["setDomains",t.domains]),t.preInitActions.forEach((function(e){return window._paq.push(e)})),o(d).then((function(){return l()})).then((function(){return f(e,t)})).catch((function(e){if(e.target)return console.error("[vue-matomo] An error occurred trying to load ".concat(e.target.src,". ")+"If the file exists you may have an ad- or trackingblocker enabled.");console.error(e)}))}}])}));