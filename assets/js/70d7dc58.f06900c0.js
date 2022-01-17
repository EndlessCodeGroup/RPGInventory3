"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[531],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6462:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={sidebar_position:2},c="Plugin configuration",s={unversionedId:"config/plugin",id:"config/plugin",title:"Plugin configuration",description:"Plugin configurations are specified in main.conf.",source:"@site/docs/config/plugin.md",sourceDirName:"config",slug:"/config/plugin",permalink:"/ECInventory/docs/config/plugin",editUrl:"https://github.com/EndlessCodeGroup/ECInventory/tree/develop/website/docs/config/plugin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration Basics",permalink:"/ECInventory/docs/config/basics"},next:{title:"Data: Slots",permalink:"/ECInventory/docs/config/slots"}},d=[{value:"Base configurations",id:"base-configurations",children:[{value:"<code>enabled</code>",id:"enabled",children:[],level:3},{value:"<code>locale</code>",id:"locale",children:[],level:3}],level:2},{value:"Database configuration",id:"database-configuration",children:[{value:"<code>type</code>",id:"type",children:[],level:3},{value:"<code>host</code>",id:"host",children:[],level:3},{value:"<code>port</code>",id:"port",children:[],level:3},{value:"<code>name</code>",id:"name",children:[],level:3},{value:"<code>username</code>",id:"username",children:[],level:3},{value:"<code>password</code>",id:"password",children:[],level:3}],level:2}],p={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugin-configuration"},"Plugin configuration"),(0,o.kt)("p",null,"Plugin configurations are specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.conf"),"."),(0,o.kt)("h2",{id:"base-configurations"},"Base configurations"),(0,o.kt)("h3",{id:"enabled"},(0,o.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("a",{parentName:"p",href:"/ECInventory/docs/config/basics#boolean"},"Boolean")),(0,o.kt)("p",null,"Allows to disable the plugin."),(0,o.kt)("h3",{id:"locale"},(0,o.kt)("inlineCode",{parentName:"h3"},"locale")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This option is not implemented yet."))),(0,o.kt)("h2",{id:"database-configuration"},"Database configuration"),(0,o.kt)("p",null,"ECInventory uses database to store inventories content.\nHere are described how to configure database."),(0,o.kt)("p",null,"All plugin-related tables are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"ecinv_"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Database configs are used only if you have set ",(0,o.kt)("inlineCode",{parentName:"p"},"type: mysql"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"sqlite")," database does not require any configuration."))),(0,o.kt)("h3",{id:"type"},(0,o.kt)("inlineCode",{parentName:"h3"},"type")),(0,o.kt)("p",null,"The driver that will be used for database:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sqlite")," is a file-based database.\nUsed by default.\nIt does not require any configuration but can't be shared between servers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mysql")," is a standalone database, so it can be shared between servers.\nRequires additional configuration.")),(0,o.kt)("h3",{id:"host"},(0,o.kt)("inlineCode",{parentName:"h3"},"host")),(0,o.kt)("p",null,"The host where the database running.\nIf it is running on the same machine, use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,o.kt)("h3",{id:"port"},(0,o.kt)("inlineCode",{parentName:"h3"},"port")),(0,o.kt)("p",null,"The database port.\nDefault port for MySQL is ",(0,o.kt)("inlineCode",{parentName:"p"},"3306"),"."),(0,o.kt)("h3",{id:"name"},(0,o.kt)("inlineCode",{parentName:"h3"},"name")),(0,o.kt)("p",null,"The name of the database.\nYou can create database using ",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/create-database.html"},"CREATE DATABASE statement"),"."),(0,o.kt)("h3",{id:"username"},(0,o.kt)("inlineCode",{parentName:"h3"},"username")),(0,o.kt)("p",null,"The username to connect to the database."),(0,o.kt)("h3",{id:"password"},(0,o.kt)("inlineCode",{parentName:"h3"},"password")),(0,o.kt)("p",null,"The password to connect to the database."))}u.isMDXComponent=!0}}]);