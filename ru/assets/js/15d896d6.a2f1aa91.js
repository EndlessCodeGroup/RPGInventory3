"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[787],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3631:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={sidebar_position:3},p="\u0414\u0430\u043d\u043d\u044b\u0435: \u0421\u043b\u043e\u0442\u044b",s={unversionedId:"config/slots",id:"config/slots",title:"\u0414\u0430\u043d\u043d\u044b\u0435: \u0421\u043b\u043e\u0442\u044b",description:"Slots configurations are stored in .conf files inside data directory. All slots should be declared inside slots block. Each slot has an ID used as a key on slot declaration.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/config/slots.md",sourceDirName:"config",slug:"/config/slots",permalink:"/ECInventory/ru/docs/config/slots",editUrl:"https://github.com/EndlessCodeGroup/ECInventory/tree/develop/website/docs/config/slots.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u0430",permalink:"/ECInventory/ru/docs/config/plugin"},next:{title:"\u0414\u0430\u043d\u043d\u044b\u0435: \u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438",permalink:"/ECInventory/ru/docs/config/inventories"}},d=[{value:"Slot",id:"slot",children:[{value:"<code>display-name</code>",id:"display-name",children:[],level:3},{value:"<code>description</code>",id:"description",children:[],level:3},{value:"<code>texture</code>",id:"texture",children:[],level:3},{value:"<code>type</code>",id:"type",children:[],level:3},{value:"<code>actions</code>",id:"actions",children:[],level:3},{value:"<code>allowed-items</code>",id:"allowed-items",children:[],level:3},{value:"<code>denied-items</code>",id:"denied-items",children:[],level:3},{value:"<code>max-stack-size</code>",id:"max-stack-size",children:[],level:3}],level:2},{value:"Slot action binding",id:"slot-action-binding",children:[{value:"<code>on</code>",id:"on",children:[],level:3},{value:"<code>do</code>",id:"do",children:[],level:3}],level:2},{value:"Item wildcards",id:"item-wildcards",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u0434\u0430\u043d\u043d\u044b\u0435-\u0441\u043b\u043e\u0442\u044b"},"\u0414\u0430\u043d\u043d\u044b\u0435: \u0421\u043b\u043e\u0442\u044b"),(0,l.kt)("p",null,"Slots configurations are stored in ",(0,l.kt)("inlineCode",{parentName:"p"},".conf")," files inside ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," directory. All slots should be declared inside ",(0,l.kt)("inlineCode",{parentName:"p"},"slots")," block. Each slot has an ID used as a key on slot declaration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"slots {\n  [slot-id] {\n    // Slot declaration goes here\n  }\n  // ...\n}\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"slot-id")," should be a unique string. It is recommended to use kebab-case for all config keys for consistency."))),(0,l.kt)("h2",{id:"slot"},"Slot"),(0,l.kt)("p",null,"All slot properties are optional and takes default value if value is not specified."),(0,l.kt)("h3",{id:"display-name"},(0,l.kt)("inlineCode",{parentName:"h3"},"display-name")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/ECInventory/ru/docs/config/basics#string"},"String")," supporting colors and placeholders",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Default value:")," ",(0,l.kt)("inlineCode",{parentName:"p"},'""')," (empty string)"),(0,l.kt)("p",null,"The slot display name."),(0,l.kt)("p",null,"Will be shown only if ",(0,l.kt)("a",{parentName:"p",href:"#texture"},(0,l.kt)("inlineCode",{parentName:"a"},"texture"))," specified."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'display-name: "&6Totem"\n')),(0,l.kt)("h3",{id:"description"},(0,l.kt)("inlineCode",{parentName:"h3"},"description")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," list of ",(0,l.kt)("a",{parentName:"p",href:"/ECInventory/ru/docs/config/basics#string"},"Strings")," supporting colors and placeholders",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Default value:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," (empty list)"),(0,l.kt)("p",null,"The slot description. Each line will be displayed on the new line."),(0,l.kt)("p",null,"Will be shown only if ",(0,l.kt)("a",{parentName:"p",href:"#texture"},(0,l.kt)("inlineCode",{parentName:"a"},"texture"))," specified."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'description: [\n  "&aHere you can place the &6Totem of Undying",\n  "",\n  "&e\\"- It saved my life many times.\\" (c) Dad"\n]\n')),(0,l.kt)("h3",{id:"texture"},(0,l.kt)("inlineCode",{parentName:"h3"},"texture")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("a",{parentName:"p",href:"/ECInventory/ru/docs/config/basics#item"},"Item"),", nullable",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Default value:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("p",null,"The texture will be shown to the player when the slot is empty. Uses ",(0,l.kt)("a",{parentName:"p",href:"#display-name"},(0,l.kt)("inlineCode",{parentName:"a"},"display-name"))," and ",(0,l.kt)("a",{parentName:"p",href:"#description"},(0,l.kt)("inlineCode",{parentName:"a"},"description")),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"texture")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),", none texture will be shown when the slot is empty."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"texture: minecraft:orange_stained_glass_pane\n")),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," one of: ",(0,l.kt)("inlineCode",{parentName:"p"},"generic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"equipment"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"gui"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Default value:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"generic")),(0,l.kt)("p",null,"The slot type. Defines slot destination and capabilities. Some slot properties applicable only to particular slot types."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"generic")," is a basic slot used just to store items. Default ",(0,l.kt)("a",{parentName:"li",href:"#max-stack-size"},(0,l.kt)("inlineCode",{parentName:"a"},"max-stack-size"))," is ",(0,l.kt)("inlineCode",{parentName:"li"},"64"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"equipment")," is a slot that can store equipment. Items stored in equipment slots should be counted for player's attributes. Default ",(0,l.kt)("a",{parentName:"li",href:"#max-stack-size"},(0,l.kt)("inlineCode",{parentName:"a"},"max-stack-size"))," is ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gui")," is a GUI slot that can not store items.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"type: generic\n")),(0,l.kt)("h3",{id:"actions"},(0,l.kt)("inlineCode",{parentName:"h3"},"actions")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," list of ",(0,l.kt)("a",{parentName:"p",href:"#slot-action-binding"},"Slot action bindings"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Default value:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," (empty list)"),(0,l.kt)("p",null,"Bindings for player's interactions with the slot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'actions: [\n  {on: [click], do: ["say It will help you when you are unlucky"]}\n]\n')),(0,l.kt)("h3",{id:"allowed-items"},(0,l.kt)("inlineCode",{parentName:"h3"},"allowed-items")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," list of ",(0,l.kt)("a",{parentName:"p",href:"#item-wildcards"},"Item wildcards"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Default value:")," ",(0,l.kt)("inlineCode",{parentName:"p"},'["*"]')," (all items allowed)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Slot types:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"generic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"equipment")),(0,l.kt)("p",null,"Defines items allowed to be placed to the slot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"allowed-items: [totem_of_undying]\n")),(0,l.kt)("h3",{id:"denied-items"},(0,l.kt)("inlineCode",{parentName:"h3"},"denied-items")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," list of ",(0,l.kt)("a",{parentName:"p",href:"#item-wildcards"},"Item wildcards"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Default value:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"[]")," (empty list, none items denied)",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Slot types:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"generic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"equipment")),(0,l.kt)("p",null,"Defines items denied to be placed to the slot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"denied-items: [custom:totem_of_undying]\n")),(0,l.kt)("h3",{id:"max-stack-size"},(0,l.kt)("inlineCode",{parentName:"h3"},"max-stack-size")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," integer ",(0,l.kt)("a",{parentName:"p",href:"/ECInventory/ru/docs/config/basics#number"},"Number")," from range ",(0,l.kt)("inlineCode",{parentName:"p"},"1..64"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Default value:")," depends on ",(0,l.kt)("a",{parentName:"p",href:"#type"},"slot type"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Slot types:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"generic"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"equipment")),(0,l.kt)("p",null,"The maximal item stack size to be placed to the slot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"max-stack-size: 1\n")),(0,l.kt)("h2",{id:"slot-action-binding"},"Slot action binding"),(0,l.kt)("p",null,"Binds player's interactions listed in ",(0,l.kt)("inlineCode",{parentName:"p"},"on")," to commands listed in ",(0,l.kt)("inlineCode",{parentName:"p"},"do"),"."),(0,l.kt)("h3",{id:"on"},(0,l.kt)("inlineCode",{parentName:"h3"},"on")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," set of values (",(0,l.kt)("inlineCode",{parentName:"p"},"click"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"left_click"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"shift_left_click"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"right_click"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"shift_right_click"),")"),(0,l.kt)("p",null,"The list of player's interactions that should be initiate actions listed in ",(0,l.kt)("inlineCode",{parentName:"p"},"do"),". This list should not be empty."),(0,l.kt)("p",null,"Actions matching rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"click")," matches to any click"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"left_click")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"right_click")," matches to both clicks with and without ",(0,l.kt)("kbd",null,"Shift"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"on: [left_click, shift_right_click]\n")),(0,l.kt)("h3",{id:"do"},(0,l.kt)("inlineCode",{parentName:"h3"},"do")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," list of ",(0,l.kt)("a",{parentName:"p",href:"/ECInventory/ru/docs/config/basics#string"},"Strings")," supporting placeholders"),(0,l.kt)("p",null,"The list of commands will be executed when action described in ",(0,l.kt)("inlineCode",{parentName:"p"},"on")," was performed. Command should not start with slash. All commands will be executed from the player who interacted with the slot."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'do: ["gamemode creative"]\n')),(0,l.kt)("h2",{id:"item-wildcards"},"Item wildcards"),(0,l.kt)("p",null,"Item wildcards allows you to easier configure allowed and denied items. Instead of writing each allowed item, you can use wildcard matching to all of them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# Without wildcard\nallowed-items: [\n  "wooden_sword",\n  "stone_sword",\n  "iron_sword",\n  "golden_sword",\n  "diamond_sword",\n  "netherite_sword"\n]\n\n# With wildcard\nallowed-items: ["*_sword"]\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Syntax:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"*")," matches zero or more characters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," matches exactly one character")))))}m.isMDXComponent=!0}}]);