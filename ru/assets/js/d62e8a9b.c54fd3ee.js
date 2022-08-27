"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6129:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",l={unversionedId:"intro",id:"intro",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"ECInventory\xa0\u2014 \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0432\u043a\u0443\u0441\u0443. \u0421 \u0435\u0433\u043e \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0435\u0449\u0435 \u0431\u043e\u043b\u0435\u0435 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u044b\u043c, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u0432\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f Mimic API, ECInventory \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 (MMOItems, MMOCore, QuantumRPG, SkillAPI, PROSkillAPI, Heroes \u0438 \u0442. \u0434.).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ECInventory/ru/docs/intro",draft:!1,editUrl:"https://crowdin.com/project/ecinventory/ru",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",permalink:"/ECInventory/ru/docs/usage/getting-started"}},c={},p=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"features",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ECInventory"),"\xa0\u2014 \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f \u043f\u043e \u0441\u0432\u043e\u0435\u043c\u0443 \u0432\u043a\u0443\u0441\u0443. \u0421 \u0435\u0433\u043e \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0435\u0449\u0435 \u0431\u043e\u043b\u0435\u0435 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u044b\u043c, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u0432\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/82515/"},"Mimic")," API, ECInventory \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 (MMOItems, MMOCore, QuantumRPG, SkillAPI, PROSkillAPI, Heroes \u0438 \u0442. \u0434.)."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"ECInventory")," \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0438 ",(0,o.kt)("strong",{parentName:"p"},"\u041d\u0415 \u0413\u041e\u0422\u041e\u0412 \u041a \u0418\u0421\u041f\u041e\u041b\u042c\u0417\u041e\u0412\u0410\u041d\u0418\u042e"),". \u0415\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u0430\u043c\u0435\u043d\u044b RPGInventory."),(0,o.kt)("p",{parentName:"admonition"},"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e, \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 ",(0,o.kt)("a",{parentName:"p",href:"/ECInventory/ru/docs/usage/getting-started"},'\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0443 "\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"'),".")),(0,o.kt)("h2",{id:"features"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439 \u0434\u043b\u044f \u0438\u0433\u0440\u043e\u043a\u043e\u0432"),(0,o.kt)("li",{parentName:"ul"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 SQL"),(0,o.kt)("li",{parentName:"ul"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0438\u0433\u0440\u043e\u043a\u0430, \u0432\u043a\u043b\u044e\u0447\u0430\u044f Shift + Click, \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u0432 hotbar (\u043a\u043d\u043e\u043f\u043a\u0438 1-9) \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432 \u0432\u043e \u0432\u0442\u043e\u0440\u0443\u044e \u0440\u0443\u043a\u0443 (\u043e\u0431\u044b\u0447\u043d\u043e F)"),(0,o.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u0432\u044f\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043a \u043d\u0430\u0436\u0430\u0442\u0438\u044f\u043c \u041b\u041a\u041c, \u041f\u041a\u041c, Shift-\u041b\u041a\u041c \u0438 Shift-\u041f\u041a\u041c \u043f\u043e \u0441\u043b\u043e\u0442\u0430\u043c"),(0,o.kt)("li",{parentName:"ul"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0434\u043b\u044f \u0441\u043b\u043e\u0442\u043e\u0432, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432 (\u0447\u0435\u0440\u0435\u0437 ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/82515/"},"Mimic"),")"),(0,o.kt)("li",{parentName:"ul"},"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 ID \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u044b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0448\u0430\u0431\u043b\u043e\u043d ",(0,o.kt)("inlineCode",{parentName:"li"},"*_sword")," \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u043c\u0435\u0447 \u0432 \u0441\u043b\u043e\u0442"),(0,o.kt)("li",{parentName:"ul"},"\u041f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\u044b (\u0447\u0435\u0440\u0435\u0437 ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/6245/"},"PlaceholderAPI"),") \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u0445 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u0445, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f\u0445 \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0445 \u0441\u043b\u043e\u0442\u043e\u0432"),(0,o.kt)("li",{parentName:"ul"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0435\u0433\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435")))}s.isMDXComponent=!0}}]);