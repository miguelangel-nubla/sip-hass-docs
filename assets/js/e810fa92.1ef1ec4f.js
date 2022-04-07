"use strict";(self.webpackChunksip_hass_docs=self.webpackChunksip_hass_docs||[]).push([[3671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),o=n(2389),i=n(7556),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.UB)(),w=y.tabGroupChoices,b=y.setTabGroupChoices,N=(0,a.useState)(g),C=N[0],S=N[1],x=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=w[m];null!=O&&O!==C&&v.some((function(e){return e.value===O}))&&S(O)}var E=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==C&&(T(t),S(r),null!=m&&b(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},1267:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],u={sidebar_position:3},c="Card",d={unversionedId:"tutorial/card",id:"tutorial/card",title:"Card",description:"Now we have a PBX to connect to, we can install the card.",source:"@site/docs/tutorial/card.mdx",sourceDirName:"tutorial",slug:"/tutorial/card",permalink:"/sip-hass-docs/docs/tutorial/card",editUrl:"https://github.com/TECH7Fox/sip-hass-docs/edit/main/docs/tutorial/card.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add-on",permalink:"/sip-hass-docs/docs/tutorial/add-on"},next:{title:"Integration",permalink:"/sip-hass-docs/docs/tutorial/integration"}},p={},m=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"SSL",id:"ssl",level:2},{value:"Manual",id:"manual",level:3},{value:"Port Forwarding",id:"port-forwarding",level:3},{value:"DNS Rewrite",id:"dns-rewrite",level:3}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"card"},"Card"),(0,o.kt)("p",null,"Now we have a PBX to connect to, we can install the card."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(i.Z,{groupId:"install-method",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"hacs",label:"HACS",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",null,"Go to ",(0,o.kt)("b",null,"HACS")),(0,o.kt)("li",null,"Click on ",(0,o.kt)("b",null,"Frontend")),(0,o.kt)("li",null,"Click on the 3 points in the upper right corner and click on ",(0,o.kt)("b",null,"Custom repositories")),(0,o.kt)("li",null,"Paste ",(0,o.kt)("code",null,"https://github.com/TECH7Fox/HA-SIP/")," into ",(0,o.kt)("b",null,"Add custom repository URL")," and by category choose ",(0,o.kt)("b",null,"Lovelace")),(0,o.kt)("li",null,"Click on add and check if the repository is there."),(0,o.kt)("li",null,"You should now see ",(0,o.kt)("b",null,"SIP Client"),". Click ",(0,o.kt)("b",null,"INSTALL")))),(0,o.kt)(l.Z,{value:"manual",label:"Manual",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",null,"Go to the latest release on github."),(0,o.kt)("li",null,"Copy ",(0,o.kt)("code",null,"sipjs-card.js")," to ",(0,o.kt)("code",null,"/www/"),"."),(0,o.kt)("li",null,"Add ",(0,o.kt)("code",null,"sipjs-card.js")," to resources.")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In edit mode, click on add card."),(0,o.kt)("li",{parentName:"ul"},"Search for ",(0,o.kt)("strong",{parentName:"li"},"SIP Card"),".")),(0,o.kt)("p",null,"Now we need to configure it."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Most things are configurable from the editor, except for the ",(0,o.kt)("strong",{parentName:"p"},"ICE settings"),".\nWe recommend using the ",(0,o.kt)("strong",{parentName:"p"},"card editor")," for all other settings."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="card configuration"',title:'"card','configuration"':!0},"type: 'custom:sipjs-card'\nserver: 'your-local-ip'                     # Set your local HA IP here!\nport: '8089'                                # WSS default is 8089.\nvideo: false                                # Send and receive video. Can require extra configuration.\nauto_answer: false                          # Auto-answer when called.\nhide_me: false                              # Hide the extension your registered as.\nstate_color: true                           # Show the set entity state in the icon.\ncustom_title: ''\nringtone: /local/asterisk/ringtone.mp3      # Optional, this points to /www/asterisk/ringtone.mp3\nringbacktone: /local/asterisk/backtone.mp3  # Optional, this points to /www/asterisk/backtone.mp3\nbutton_size: 42\nextensions:                                 # Set here the WSS extensions you can register as.\n  - person: person.person1                  # Your first person entity here\n    name: Person1\n    extension: '100'\n    secret: 'your-auto-generated-secret'    # Set the auto_generated_secret you set in the add-on here!\n    icon: mdi:monitor\n    entity: binary_sensor.sensor1\n    camera: ''\n  - person: person.person2                  # Your second person entity here\n    name: Person2\n    extension: '101'\n    secret: 'your-auto-generated-secret'    # Set the auto_generated_secret you set in the add-on here!\n    icon: mdi:monitor\n    entity: binary_sensor.sensor1\n    camera: ''\n")),(0,o.kt)("p",null,"Now you might get a ",(0,o.kt)("inlineCode",{parentName:"p"},"9006")," error. That's because the certificate doesn't match the domain. (in this case the server option)"),(0,o.kt)("p",null,"So now we need to fix ",(0,o.kt)("strong",{parentName:"p"},"SSL"),"."),(0,o.kt)("h2",{id:"ssl"},"SSL"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WSS")," requires ",(0,o.kt)("strong",{parentName:"p"},"SSL")," for security reason. The add-on set's up Asterisk's part of that, but you still need to setup your network to work with it."),(0,o.kt)("h3",{id:"manual"},"Manual"),(0,o.kt)("p",null,"You can temporary accept the certificate manually by going to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<YOUR-HA-ADDRESS>:8089/ws"),", click continue and accept. You should see ",(0,o.kt)("inlineCode",{parentName:"p"},"Upgrade Required"),"."),(0,o.kt)("p",null,"Now your browser accepts this certificate, even if the domain doesn't match."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Warning! This only works for a couple days max. When the certificate changes you have to do this again."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"This is not a permanent solution!")))),(0,o.kt)("h3",{id:"port-forwarding"},"Port Forwarding"),(0,o.kt)("p",null,"Best way is to port forward ",(0,o.kt)("inlineCode",{parentName:"p"},"8089"),". Then you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," option to your domain. But then you also need to forward the ",(0,o.kt)("strong",{parentName:"p"},"RTP ports"),", which is by default ",(0,o.kt)("inlineCode",{parentName:"p"},"10000-20000"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you do this, make sure you have ",(0,o.kt)("strong",{parentName:"p"},"secure passwords")," for your extensions! Bot's may try to brute-force it."),(0,o.kt)("p",{parentName:"div"},"If that happens often, you could set ",(0,o.kt)("inlineCode",{parentName:"p"},"8089")," to another non-standard port."))),(0,o.kt)("h3",{id:"dns-rewrite"},"DNS Rewrite"),(0,o.kt)("p",null,"It's possible to set a ",(0,o.kt)("strong",{parentName:"p"},"DNS rewrite")," in your router, so your certificate domain points towards your ",(0,o.kt)("strong",{parentName:"p"},"local IP"),". This way you don't have to port forward anything, but this only works locally."),(0,o.kt)("p",null,"You can find more info ",(0,o.kt)("a",{href:"../add-on/guides/dns_rewrite"},"here"),"."))}f.isMDXComponent=!0}}]);