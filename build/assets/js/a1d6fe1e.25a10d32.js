"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[6373],{6742:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(3366),i=n(7294),o=n(3727),u=n(2263),a=n(3919),c=n(412),l=(0,i.createContext)({collectLink:function(){}}),s=n(4996),f=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,m=e.to,b=e.href,h=e.activeClassName,p=e.isActive,y=e["data-noBrokenLinkCheck"],_=e.autoAddBaseUrl,g=void 0===_||_,k=(0,r.Z)(e,d),w=(0,u.Z)().siteConfig,C=w.trailingSlash,E=w.baseUrl,Z=(0,s.C)().withBaseUrl,U=(0,i.useContext)(l),N=m||b,O=(0,a.Z)(N),S=null==N?void 0:N.replace("pathname://",""),B=void 0!==S?(n=S,g&&function(e){return e.startsWith("/")}(n)?Z(n):n):void 0;B&&O&&(B=(0,f.applyTrailingSlash)(B,{trailingSlash:C,baseUrl:E}));var L,j=(0,i.useRef)(!1),A=v?o.OL:o.rU,W=c.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!W&&O&&null!=B&&window.docusaurus.prefetch(B),function(){W&&L&&L.disconnect()}}),[B,W,O]);var I=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,M=!B||!O||I;return B&&O&&!I&&!y&&U.collectLink(B),M?i.createElement("a",Object.assign({href:B},N&&!O&&{target:"_blank",rel:"noopener noreferrer"},k)):i.createElement(A,Object.assign({},k,{onMouseEnter:function(){j.current||null==B||(window.docusaurus.preload(B),j.current=!0)},innerRef:function(e){var t,n;W&&e&&O&&(t=e,n=function(){null!=B&&window.docusaurus.prefetch(B)},(L=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t),L.disconnect(),n())}))}))).observe(t))},to:B||""},v&&{isActive:p,activeClassName:h}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return u}});var r=n(2263),i=n(3919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,u=o.forcePrependBaseUrl,a=void 0!==u&&u,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(o,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,o=e.split(/[#?]/)[0],u="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,u)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},3259:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),i=n(6010),o=n(6742),u="community_3XOy",a="communitycontainer_lLrq",c="communitytitle_1_CB",l="community_subtitle_2xrL",s="buttoncommunity_13lS",f="buttoncommunity2_877o",d=n(9554);(0,d.batch)((0,d.StickyIn)(),(0,d.FadeIn)(),(0,d.ZoomIn)()),(0,d.batch)((0,d.Fade)(),(0,d.Move)(),(0,d.Sticky)());function v(){return r.createElement("section",{className:u},r.createElement("div",{className:a},r.createElement("h1",{className:c},"\u52a0\u5165\u793e\u533a"),r.createElement("p",{className:l},"\u8ba2\u9605\u90ae\u4ef6\u7ec4\uff0c\u5173\u6ce8\u535a\u5ba2\u6587\u7ae0\uff0c\u53c2\u4e0e\u7ebf\u4e0a\u4e0b\u6d3b\u52a8"),r.createElement("div",null,r.createElement(o.Z,{className:(0,i.Z)("button button--outline button--secondary button--lg ",f),to:"/contact"},"\u52a0\u5165\u793e\u533a")),r.createElement("div",null,r.createElement(o.Z,{className:(0,i.Z)("button button--outline button--secondary button--lg",s),to:"/docs/\u8d21\u732e\u6307\u5357/29how-to-contribute"},"\u8d21\u732e\u6307\u5357")),r.createElement("div",null)))}},6010:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);