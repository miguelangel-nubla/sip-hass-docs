"use strict";(self.webpackChunksip_hass_docs=self.webpackChunksip_hass_docs||[]).push([[6544],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(7294),i=r(9960),c=r(7556),o=r(6010),a="cardContainer_woeA",s="cardTitle_pNjP",u="cardDescription_qC_k",l=r(3919),d=r(5999);function p(e){var t=e.href,r=e.children;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",a)},r)}function f(e){var t=e.href,r=e.icon,i=e.title,c=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},r," ",i),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",u),title:c},c))}function m(e){var t=e.item,r=(0,c.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,r=e.item,i=(0,l.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:i,title:r.label,description:null==o?void 0:o.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.items;return n.createElement("div",{className:"row"},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,c.Wl)(e)}))}(t).map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{key:t,item:e}))})))}},4946:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var n=r(7462),i=r(3366),c=(r(7294),r(3905)),o=r(5360),a=r(7556),s=["components"],u={slug:"/card/guides",title:"Guides"},l=void 0,d={unversionedId:"card/guides/introduction",id:"card/guides/introduction",title:"Guides",description:"Guides for the SIP card.",source:"@site/docs/card/guides/introduction.md",sourceDirName:"card/guides",slug:"/card/guides",permalink:"/sip-hass-docs/docs/card/guides",editUrl:"https://github.com/TECH7Fox/sip-hass-docs/tree/main/docs/card/guides/introduction.md",tags:[],version:"current",frontMatter:{slug:"/card/guides",title:"Guides"},sidebar:"cardSidebar",previous:{title:"Settings",permalink:"/sip-hass-docs/docs/card/settings"},next:{title:"Video Between Cards",permalink:"/sip-hass-docs/docs/card/guides/video"}},p={},f=[],m={toc:f};function g(e){var t=e.components,r=(0,i.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Guides for the SIP card."),(0,c.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);