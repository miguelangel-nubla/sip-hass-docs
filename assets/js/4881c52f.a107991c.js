"use strict";(self.webpackChunksip_hass_docs=self.webpackChunksip_hass_docs||[]).push([[6686],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"Doorbell",tags:["Dialplan","SIP Device","Video"]},s=void 0,d={unversionedId:"add-on/guides/doorbell",id:"add-on/guides/doorbell",title:"Doorbell",description:"If you have a SIP doorbell, you can connect it to the add-on.",source:"@site/docs/add-on/guides/doorbell.md",sourceDirName:"add-on/guides",slug:"/add-on/guides/doorbell",permalink:"/sip-hass-docs/docs/add-on/guides/doorbell",editUrl:"https://github.com/TECH7Fox/sip-hass-docs/edit/main/docs/add-on/guides/doorbell.md",tags:[{label:"Dialplan",permalink:"/sip-hass-docs/docs/tags/dialplan"},{label:"SIP Device",permalink:"/sip-hass-docs/docs/tags/sip-device"},{label:"Video",permalink:"/sip-hass-docs/docs/tags/video"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Doorbell",tags:["Dialplan","SIP Device","Video"]},sidebar:"addonSidebar",previous:{title:"Guides",permalink:"/sip-hass-docs/docs/add-on/guides"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Create PJSIP contact",id:"create-pjsip-contact",level:2},{value:"Dialplan",id:"dialplan",level:2},{value:"Parking",id:"parking",level:3}],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you have a SIP doorbell, you can connect it to the add-on."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"For this guide you will need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Working Add-on"),(0,a.kt)("li",{parentName:"ul"},"Doorbell or other SIP device")),(0,a.kt)("h2",{id:"create-pjsip-contact"},"Create PJSIP contact"),(0,a.kt)("p",null,"First, create a extension for your device in ",(0,a.kt)("inlineCode",{parentName:"p"},"pjsip_custom.conf"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-editorconfig",metastring:'title="pjsip_custom.conf"',title:'"pjsip_custom.conf"'},'[8000]\ntype = endpoint\ncontext = default\ndirect_media_method=invite\ndtmf_mode=info\ncallerid="Doorbell" <8000>\nforce_rport=no\naors= 8000\nauth = auth8000\n\n[8000]\ntype = aor\nmax_contacts = 1\n\n[auth8000]\ntype=auth\nauth_type=userpass\npassword=mypassword         ; Set your password here\nusername=8000\n')),(0,a.kt)("p",null,"Restart the add-on, and check the logs if the doorbell registers."),(0,a.kt)("h2",{id:"dialplan"},"Dialplan"),(0,a.kt)("p",null,"Now we need to choose and configure a dialplan to send the call to the right place. This could be complicated depending on if you have a 24/7 registered extension."),(0,a.kt)("p",null,"The dialplan is set in ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions.conf"),"."),(0,a.kt)("h3",{id:"parking"},"Parking"),(0,a.kt)("p",null,"With parking, the doorbell parks itself and wait for the other to retrieve the call.\nThe add-on includes a parking extension by default, so you only need to point to it."),(0,a.kt)("p",null,"Simply use it by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"777")," to park, and ",(0,a.kt)("inlineCode",{parentName:"p"},"888")," to pickup a parked call."),(0,a.kt)("p",null,"You can find more info about parking ",(0,a.kt)("a",{href:"../parking/"},"here"),"."))}f.isMDXComponent=!0}}]);