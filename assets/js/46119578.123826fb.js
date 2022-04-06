"use strict";(self.webpackChunksip_hass_docs=self.webpackChunksip_hass_docs||[]).push([[2476],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),k=a,f=d["".concat(l,".").concat(k)]||d[k]||u[k]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6262:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:3,title:"Parking",tags:["Asterisk","Dialplan"]},l=void 0,p={unversionedId:"add-on/parking",id:"add-on/parking",title:"Parking",description:"The add-on includes parking extensions. With this you can park a call, and pickup later.",source:"@site/docs/add-on/parking.md",sourceDirName:"add-on",slug:"/add-on/parking",permalink:"/sip-hass-docs/docs/add-on/parking",editUrl:"https://github.com/TECH7Fox/sip-hass-docs/edit/main/docs/add-on/parking.md",tags:[{label:"Asterisk",permalink:"/sip-hass-docs/docs/tags/asterisk"},{label:"Dialplan",permalink:"/sip-hass-docs/docs/tags/dialplan"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Parking",tags:["Asterisk","Dialplan"]},sidebar:"addonSidebar",previous:{title:"Settings",permalink:"/sip-hass-docs/docs/add-on/settings"},next:{title:"Guides",permalink:"/sip-hass-docs/docs/add-on/guides"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Customize",id:"customize",level:2}],d={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The add-on includes parking extensions. With this you can park a call, and pickup later."),(0,i.kt)("p",null,"This is very usefull for ",(0,i.kt)("strong",{parentName:"p"},"doorbells"),", so you have time to load the card and register."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Simply use it by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"777")," to park, and ",(0,i.kt)("inlineCode",{parentName:"p"},"888")," to pickup a parked call."),(0,i.kt)("h2",{id:"customize"},"Customize"),(0,i.kt)("p",null,"The parking space is configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"res_parking.conf"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-editorconfig",metastring:'title="res_parking.conf"',title:'"res_parking.conf"'},"[default]\nparkext => 700\nparkpos => 701-703\ncontext => parkedcalls\nparkingtime => 60\ncomebacktoorigin = no\ncomebackcontext = parkedcallstimeout\nparkedmusicclass = default\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+16+Configuration_res_parking"},"Here")," are all the options for parking."),(0,i.kt)("p",null,"And the default dialplan includes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-editorconfig",metastring:'title="extensions.conf"',title:'"extensions.conf"'},"; this extension parks the call.\nexten => 777,1,Park(,s)\n\n; this extension get's the first parked call. 701 is the parking position.\nexten => 888,1,ParkedCall(default,701)\n")))}k.isMDXComponent=!0}}]);