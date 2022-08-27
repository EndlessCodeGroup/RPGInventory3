"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",p={unversionedId:"usage/getting-started",id:"usage/getting-started",title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",description:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f Spigot: 1.16.5. ECInventory \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u0443\u044e \u0432 Spigot 1.16.5.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/usage/getting-started.md",sourceDirName:"usage",slug:"/usage/getting-started",permalink:"/ECInventory/ru/docs/usage/getting-started",draft:!1,editUrl:"https://crowdin.com/project/ecinventory/ru",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",permalink:"/ECInventory/ru/docs/intro"},next:{title:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u0438 \u043f\u0435\u0440\u043c\u0438\u0448\u0435\u043d\u044b",permalink:"/ECInventory/ru/docs/usage/commands"}},l={},s=[{value:"1. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",id:"1",level:2},{value:"2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ECInventory",id:"2",level:2},{value:"3. \u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",id:"3",level:2},{value:"4. \u0412\u043f\u0435\u0440\u0451\u0434!",id:"4",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043d\u0430\u0447\u0430\u043b\u043e-\u0440\u0430\u0431\u043e\u0442\u044b"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f Spigot: ",(0,a.kt)("strong",{parentName:"p"},"1.16.5"),". ECInventory \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,a.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/threads/510208/#post-4184317"},"\u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a"),", \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u0443\u044e \u0432 Spigot 1.16.5.")),(0,a.kt)("h2",{id:"1"},"1. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ECInventory")," \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0431\u0435\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u0432:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/82515/"},"Mimic")," (v0.8.0+) - required to integrate with other plugins."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/62353/"},"CommandAPI")," (v8.0.0+) - required for commands. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0432\u0442\u043e\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434.",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("em",{parentName:"li"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u043a\u0430\u043a\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u043d\u0443\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u043b\u044f \u0441\u0432\u043e\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 Spigot, \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/JorelAli/CommandAPI#readme"},"Command API \u043d\u0430 GitHub"),"."))),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0436\u0435\u043b\u0430\u043d\u0438\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u044d\u0442\u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u044b \u0434\u043b\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 ",(0,a.kt)("strong",{parentName:"p"},"ECInventory"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/6245/"},"PlaceholderAPI")," \u2014 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\u044b \u0432 \u0438\u043c\u0435\u043d\u0438 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0438, \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0445 \u0441\u043b\u043e\u0442\u043e\u0432.")),(0,a.kt)("h2",{id:"2"},"2. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ECInventory"),(0,a.kt)("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0441\u0431\u043e\u0440\u043a\u0443 \u0441\u043e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/EndlessCodeGroup/ECInventory/releases"},"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b GitHub Releases"),". \u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"jar")," \u0444\u0430\u0439\u043b \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/"),"."),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0447\u0442\u043e \u043f\u043b\u0430\u0433\u0438\u043d \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e. \u041a\u043e\u0433\u0434\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043f\u0443\u0449\u0435\u043d, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"/plugins"),", ECInventory \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0437\u0435\u043b\u0451\u043d\u044b\u043c \u0432 \u044d\u0442\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435."),(0,a.kt)("h2",{id:"3"},"3. \u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,a.kt)("p",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},"data.zip"),", \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0441\u0431\u043e\u0440\u043a\u0435, \u0441\u043e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/EndlessCodeGroup/ECInventory/releases"},"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b GitHub Releases"),". \u0420\u0430\u0437\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"plugins/ECInventory/data/"),"."),(0,a.kt)("p",null,"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 ECInventory \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"/inv reload"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u0414\u0435\u043c\u043e\u043d\u0441\u0442\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0442\u0440\u0438 \u0444\u0430\u0439\u043b\u0430:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"demo.conf")," \u2014 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"demo")," \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f \u0438 \u0441\u043b\u043e\u0442\u043e\u0432 \u0434\u043b\u044f \u043d\u0435\u0433\u043e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equipments.conf")," \u2014 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"equipments")," \u0438 \u0441\u043b\u043e\u0442\u043e\u0432 \u0434\u043b\u044f \u043d\u0435\u0433\u043e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"common.conf")," \u2014 \u0441\u043b\u043e\u0442\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u043a\u0430\u043a \u0432 ",(0,a.kt)("inlineCode",{parentName:"li"},"demo"),", \u0442\u0430\u043a \u0438 \u0432 ",(0,a.kt)("inlineCode",{parentName:"li"},"equipment")," \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044f\u0445"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"equipments"),' \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u043e\u043b\u0436\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c ("\u043a\u0430\u043a \u0432 RPGInventory"), \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/EndlessCodeGroup/ECInventory/issues/9"},'"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u0430\u043d\u0438\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439"')," \u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/EndlessCodeGroup/ECInventory/issues/19"},'"\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043b\u043e\u0442\u043e\u0432"')," \u043f\u043e\u043a\u0430 \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b. \u042d\u0442\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/EndlessCodeGroup/ECInventory/milestone/2"},"\u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432 \u0432\u0435\u0440\u0441\u0438\u0438 0.2"),". \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u043d\u0430 GitHub.")),(0,a.kt)("h2",{id:"4"},"4. \u0412\u043f\u0435\u0440\u0451\u0434!"),(0,a.kt)("p",null,"ECInventory \u0433\u043e\u0442\u043e\u0432 \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"/inv open demo"),"."),(0,a.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 ",(0,a.kt)("a",{parentName:"li",href:"/ECInventory/ru/docs/usage/commands"},"\u043a\u043e\u043c\u0430\u043d\u0434\u044b")),(0,a.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0439\u0442\u0435 ",(0,a.kt)("a",{parentName:"li",href:"/ECInventory/ru/docs/config/plugin"},"\u043a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0438\u0448\u0438\u0442\u0435 \u043b\u044e\u0431\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u0441\u043e\u043e\u0431\u0449\u0430\u0439\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430\u0445 \u0432 ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/5NfPsgb"},"Discord"),". \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u044d\u0442\u043e\u0442 \u043f\u043b\u0430\u0433\u0438\u043d \u043b\u0443\u0447\u0448\u0435 \u0432\u043c\u0435\u0441\u0442\u0435!")))}m.isMDXComponent=!0}}]);