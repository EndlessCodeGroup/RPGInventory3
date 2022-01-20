"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[502],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},l="\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",p={unversionedId:"intro",id:"intro",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"ECInventory\xa0\u2014 \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0432\u043a\u0443\u0441\u0443. \u0421 \u0435\u0433\u043e \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0435\u0449\u0435 \u0431\u043e\u043b\u0435\u0435 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u044b\u043c, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u0432\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f Mimic API, ECInventory \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 (MMOItems, MMOCore, QuantumRPG, SkillAPI, PROSkillAPI, Heroes \u0438 \u0442. \u0434.).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ECInventory/ru/docs/intro",editUrl:"https://github.com/EndlessCodeGroup/ECInventory/tree/develop/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",permalink:"/ECInventory/ru/docs/usage/getting-started"}},u=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:[],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ECInventory"),"\xa0\u2014 \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0432\u043a\u0443\u0441\u0443. \u0421 \u0435\u0433\u043e \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0435\u0449\u0435 \u0431\u043e\u043b\u0435\u0435 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u044b\u043c, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u0432\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f ",(0,a.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/82515/"},"Mimic")," API, ECInventory \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 (MMOItems, MMOCore, QuantumRPG, SkillAPI, PROSkillAPI, Heroes \u0438 \u0442. \u0434.)."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"ECInventory")," \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0438 ",(0,a.kt)("strong",{parentName:"p"},"\u041d\u0415 \u0413\u041e\u0422\u041e\u0412 \u041a \u0418\u0421\u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u041d\u0418\u042e"),". \u0415\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u043c\u0435\u043d\u044b RPGInventory."),(0,a.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e, \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/ECInventory/ru/docs/usage/getting-started"},'\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0443 "\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"'),"."))),(0,a.kt)("h2",{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439 \u0434\u043b\u044f \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 SQL"),(0,a.kt)("li",{parentName:"ul"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438\u0433\u0440\u043e\u043a\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f Shift + Click, \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u0432 hotbar (\u043a\u043d\u043e\u043f\u043a\u0438 1-9) \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u0432\u043e \u0432\u0442\u043e\u0440\u0443\u044e \u0440\u0443\u043a\u0443 (\u043e\u0431\u044b\u0447\u043d\u043e F)"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043a \u043d\u0430\u0436\u0430\u0442\u0438\u044f\u043c \u041b\u041a\u041c, \u041f\u041a\u041c, Shift-\u041b\u041a\u041c \u0438 Shift-\u041f\u041a\u041c \u043f\u043e \u0441\u043b\u043e\u0442\u0430\u043c"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0434\u043b\u044f \u0441\u043b\u043e\u0442\u043e\u0432, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 (\u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/82515/"},"Mimic"),")"),(0,a.kt)("li",{parentName:"ul"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 ID \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0448\u0430\u0431\u043b\u043e\u043d ",(0,a.kt)("inlineCode",{parentName:"li"},"*_sword")," \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u043c\u0435\u0447 \u0432 \u0441\u043b\u043e\u0442"),(0,a.kt)("li",{parentName:"ul"},"\u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\u044b (\u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/6245/"},"PlaceholderAPI"),") \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u0445 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u0445, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f\u0445 \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0445 \u0441\u043b\u043e\u0442\u043e\u0432"),(0,a.kt)("li",{parentName:"ul"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0435\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435")))}m.isMDXComponent=!0}}]);