_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Juyh:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var r=t("q1tI"),o=t.n(r),a=t("YFqc"),u=t.n(a),c=o.a.createElement;function i(){return c("div",null,c("div",null,"About us"),c("div",null,"Back to"," ",c(u.a,{href:"/",as:"/"},c("a",null,"Home"))))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),u=t("elyg"),c=t("nOHt"),i=t("vNVm"),l={};function f(e,n,t,r){if(e&&(0,u.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,u.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],c=t[1];return{href:a,as:e.as?(0,u.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),m=g&&"object"===typeof g&&g.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),E=r(w,2),L=E[0],M=E[1],N=a.default.useCallback((function(e){L(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,L]);(0,a.useEffect)((function(){var e=M&&n&&(0,u.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,M,b,n,t]);var k={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,t,d,p,h,y,_,b)},onMouseEnter:function(e){(0,u.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var I="undefined"!==typeof b?b:t&&t.locale,J=(0,u.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);k.href=J||(0,u.addBasePath)((0,u.addLocale)(p,I,t&&t.defaultLocale))}return a.default.cloneElement(g,k)};n.default=s},rB5V:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("Juyh")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,o=(0,a.useRef)(),l=(0,a.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||s||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,u=r.elements;return u.set(e,n),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,a.useEffect)((function(){c||s||(0,u.default)((function(){return d(!0)}))}),[s]),[p,s]};var a=t("q1tI"),u=o(t("0G5g")),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["rB5V",0,2,1]]]);