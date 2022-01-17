"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[256],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(v,r(r({ref:n},c),{},{components:t})):a.createElement(v,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8478:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={sidebar_position:4},l="Data: Inventarios",p={unversionedId:"config/inventories",id:"config/inventories",title:"Data: Inventarios",description:"Inventories configurations are stored in .conf files inside data directory. All inventories should be declared inside inventories block. Each inventory has an ID used as a key on inventory declaration.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/config/inventories.md",sourceDirName:"config",slug:"/config/inventories",permalink:"/ECInventory/es/docs/config/inventories",editUrl:"https://github.com/EndlessCodeGroup/ECInventory/tree/develop/website/docs/config/inventories.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data: Ranuras",permalink:"/ECInventory/es/docs/config/slots"},next:{title:"Data organizaci\xf3n",permalink:"/ECInventory/es/docs/config/organization"}},c=[{value:"Inventory",id:"inventory",children:[{value:"<code>display-name</code>",id:"display-name",children:[],level:3},{value:"<code>default-slot</code>",id:"default-slot",children:[],level:3},{value:"<code>slots</code>",id:"slots",children:[],level:3},{value:"<code>rows</code>",id:"rows",children:[],level:3}],level:2}],d={toc:c};function m(e){var n=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-inventarios"},"Data: Inventarios"),(0,o.kt)("p",null,"Inventories configurations are stored in ",(0,o.kt)("inlineCode",{parentName:"p"},".conf")," files inside ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," directory. All inventories should be declared inside ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories")," block. Each inventory has an ID used as a key on inventory declaration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"inventories {\n  [inventory-id] {\n    // Inventory declaration goes here\n  }\n  // ...\n}\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"inventory-id")," should be a unique string. It is recommended to use kebab-case for all config keys for consistency."))),(0,o.kt)("h2",{id:"inventory"},"Inventory"),(0,o.kt)("h3",{id:"display-name"},(0,o.kt)("inlineCode",{parentName:"h3"},"display-name")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ",(0,o.kt)("a",{parentName:"p",href:"/ECInventory/es/docs/config/basics#string"},"String"),", supporting colors and placeholders"),(0,o.kt)("p",null,"The inventory name displayed to the player when inventory is open."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'display-name: "&6Equipment"\n')),(0,o.kt)("h3",{id:"default-slot"},(0,o.kt)("inlineCode",{parentName:"h3"},"default-slot")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," ID of the ",(0,o.kt)("a",{parentName:"p",href:"/ECInventory/es/docs/config/slots"},"slot")),(0,o.kt)("p",null,"The slot that will be used for all not bound inventory slots."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Slot with ID "empty" should be declared in "slots" block\ndefault-slot: empty\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"gui")," slot to deny all interactions with not bound slots. If you want to allow store items in unbound slots use ",(0,o.kt)("inlineCode",{parentName:"p"},"generic")," slot as a default."))),(0,o.kt)("h3",{id:"slots"},(0,o.kt)("inlineCode",{parentName:"h3"},"slots")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," object where keys are slot positions and values are slot IDs should be bound to that position"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," is a slot position. You can also specify positions range if you want to bind similar slot to multiple positions. Range format is ",(0,o.kt)("inlineCode",{parentName:"li"},"[start]-[end]"),", for example ","[0-9]","."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," is a slot ID.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"slots {\n  0-8: free-slot\n  9-17: premium-slot\n  18: previous-page\n  26: next-page\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Slot position is an integer number in range ",(0,o.kt)("inlineCode",{parentName:"p"},"0..53"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," is the left top position and ",(0,o.kt)("inlineCode",{parentName:"p"},"53")," is the bottom right position."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"Slots positions in large chest",src:t(9730).Z})))),(0,o.kt)("h3",{id:"rows"},(0,o.kt)("inlineCode",{parentName:"h3"},"rows")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," integer ",(0,o.kt)("a",{parentName:"p",href:"/ECInventory/es/docs/config/basics#number"},"Number")," in range ",(0,o.kt)("inlineCode",{parentName:"p"},"1..6"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Default value:")," minimal number of lines enough to hold specified ",(0,o.kt)("inlineCode",{parentName:"p"},"slots")),(0,o.kt)("p",null,"The number of lines in inventory. Each line contains 9 slots, maximal possible inventory size is ",(0,o.kt)("inlineCode",{parentName:"p"},"54")," (6 lines)."))}m.isMDXComponent=!0},9730:function(e,n){n.Z="data:image/png;base64,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"}}]);