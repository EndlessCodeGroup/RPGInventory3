"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[602],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,v=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(v,o(o({ref:n},d),{},{components:t})):r.createElement(v,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3721:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={sidebar_position:2},c="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u0430",p={unversionedId:"config/plugin",id:"config/plugin",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u0430",description:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 main.conf.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/config/plugin.md",sourceDirName:"config",slug:"/config/plugin",permalink:"/ECInventory/ru/docs/config/plugin",editUrl:"https://github.com/EndlessCodeGroup/ECInventory/tree/develop/website/docs/config/plugin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0441\u043d\u043e\u0432\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/ECInventory/ru/docs/config/basics"},next:{title:"\u0414\u0430\u043d\u043d\u044b\u0435: \u0421\u043b\u043e\u0442\u044b",permalink:"/ECInventory/ru/docs/config/slots"}},d=[{value:"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",children:[{value:"<code>enabled</code>",id:"enabled",children:[],level:3},{value:"<code>locale</code>",id:"locale",children:[],level:3}],level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",children:[{value:"<code>type</code>",id:"type",children:[],level:3},{value:"<code>host</code>",id:"host",children:[],level:3},{value:"<code>port</code>",id:"port",children:[],level:3},{value:"<code>name</code>",id:"name",children:[],level:3},{value:"<code>username</code>",id:"username",children:[],level:3},{value:"<code>password</code>",id:"password",children:[],level:3}],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u043f\u043b\u0430\u0433\u0438\u043d\u0430"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u0430"),(0,i.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"main.conf"),"."),(0,i.kt)("h2",{id:"\u0431\u0430\u0437\u043e\u0432\u044b\u0435-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,i.kt)("h3",{id:"enabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0422\u0438\u043f:")," ",(0,i.kt)("a",{parentName:"p",href:"/ECInventory/ru/docs/config/basics#boolean"},"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043b\u0430\u0433\u0438\u043d."),(0,i.kt)("h3",{id:"locale"},(0,i.kt)("inlineCode",{parentName:"h3"},"locale")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043f\u043e\u043a\u0430 \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d."))),(0,i.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"ECInventory \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0435\u0439. \u0417\u0434\u0435\u0441\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u043e, \u043a\u0430\u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("p",null,"\u0412\u0441\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u043b\u0430\u0433\u0438\u043d\u043e\u043c, \u0438\u043c\u0435\u044e\u0442 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",(0,i.kt)("inlineCode",{parentName:"p"},"ecinv_"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f, \u0442\u043e\u043b\u044c\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"type: mysql"),". \u0411\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlite")," \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438."))),(0,i.kt)("h3",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,"\u0414\u0440\u0430\u0439\u0432\u0435\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sqlite")," \u2014 \u044d\u0442\u043e \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e. \u041d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043d\u043e \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," \u2014 \u044d\u0442\u043e \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0435\u0435 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445. \u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438.")),(0,i.kt)("h3",{id:"host"},(0,i.kt)("inlineCode",{parentName:"h3"},"host")),(0,i.kt)("p",null,"\u0425\u043e\u0441\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445. \u0415\u0441\u043b\u0438 \u043e\u043d\u0430 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430 \u043d\u0430 \u0442\u043e\u043c \u0436\u0435 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435, \u0447\u0442\u043e \u0438 \u0441\u0435\u0440\u0432\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,i.kt)("h3",{id:"port"},(0,i.kt)("inlineCode",{parentName:"h3"},"port")),(0,i.kt)("p",null,"\u041f\u043e\u0440\u0442 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e\u0440\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0434\u043b\u044f MySQL \u2014 ",(0,i.kt)("inlineCode",{parentName:"p"},"3306"),"."),(0,i.kt)("h3",{id:"name"},(0,i.kt)("inlineCode",{parentName:"h3"},"name")),(0,i.kt)("p",null,"\u0418\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,i.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/create-database.html"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f CREATE DATABASE"),"."),(0,i.kt)("h3",{id:"username"},(0,i.kt)("inlineCode",{parentName:"h3"},"username")),(0,i.kt)("p",null,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("h3",{id:"password"},(0,i.kt)("inlineCode",{parentName:"h3"},"password")),(0,i.kt)("p",null,"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."))}u.isMDXComponent=!0}}]);