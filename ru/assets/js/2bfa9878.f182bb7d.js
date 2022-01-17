"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5249:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={sidebar_position:1},l="Configuration Basics",c={unversionedId:"config/basics",id:"config/basics",title:"Configuration Basics",description:"ECInventory uses HOCON format for configuration files. Configuration files use the file extension .conf.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/config/basics.md",sourceDirName:"config",slug:"/config/basics",permalink:"/ECInventory/ru/docs/config/basics",editUrl:"https://github.com/EndlessCodeGroup/ECInventory/tree/develop/website/docs/config/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u0438 \u043f\u0435\u0440\u043c\u0438\u0448\u0435\u043d\u044b",permalink:"/ECInventory/ru/docs/usage/commands"},next:{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u043b\u0430\u0433\u0438\u043d\u0430",permalink:"/ECInventory/ru/docs/config/plugin"}},d=[{value:"HOCON basics",id:"hocon-basics",children:[{value:"Objects",id:"objects",children:[],level:3},{value:"Arrays and lists",id:"arrays-and-lists",children:[],level:3},{value:"List of objects",id:"list-of-objects",children:[],level:3}],level:2},{value:"Types",id:"types",children:[{value:"String",id:"string",children:[],level:3},{value:"Number",id:"number",children:[],level:3},{value:"Boolean",id:"boolean",children:[],level:3},{value:"Item",id:"item",children:[],level:3}],level:2},{value:"Advanced HOCON",id:"advanced-hocon",children:[{value:"Path as key",id:"path-as-key",children:[],level:3},{value:"Substitutions",id:"substitutions",children:[],level:3},{value:"Concatenation and inheritance",id:"concatenation-and-inheritance",children:[],level:3}],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-basics"},"Configuration Basics"),(0,o.kt)("p",null,"ECInventory uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON")," format for configuration files. Configuration files use the file extension ",(0,o.kt)("inlineCode",{parentName:"p"},".conf"),"."),(0,o.kt)("h2",{id:"hocon-basics"},"HOCON basics"),(0,o.kt)("p",null,"HOCON (Human-Optimized Config Object Notation) is a human-friendly configuration format, and a superset of JSON."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a brief HOCON format description targeted on users who already familiar with YAML. If you want to know all about HOCON, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"read the specification"),"."))),(0,o.kt)("p",null,"Properties in HOCON has ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," separated by ",(0,o.kt)("inlineCode",{parentName:"p"},"key-value separator"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"key")," is a string describing ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," destination"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," may be string, number, object, boolean, enumeration type or ",(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"key-value separator")," separates key and value, should be either ",(0,o.kt)("inlineCode",{parentName:"li"},":")," (YAML-like), or ",(0,o.kt)("inlineCode",{parentName:"li"},"=")," (JSON-like)")),(0,o.kt)("p",null,"If line in config starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"//")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"#"),", it is considered a comment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# This is a comment. It can contain additional information about property.\n# Here "display-name" is a key, ":" is a key-value separator and "My beautiful inventory" is a value.\ndisplay-name: "My beautiful inventory"\n')),(0,o.kt)("p",null,"HOCON config may be very similar to YAML, but it has significant differences in objects and lists declaration."),(0,o.kt)("h3",{id:"objects"},"Objects"),(0,o.kt)("p",null,"YAML uses indentation for object declaration, but HOCON uses curly braces ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'## YAML\nmy-slot:\n  display-name: "Custom slot"\n  type: storage\n\n## HOCON\nmy-slot {\n  display-name: "Custom slot"\n  type: storage\n}\n# HOCON also supports one-line object declaration\nmy-slot { display-name: "Custom slot", type: storage }\n')),(0,o.kt)("h3",{id:"arrays-and-lists"},"Arrays and lists"),(0,o.kt)("p",null,"YAML has two notations to declare list elements \u2014 using square braces ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," or using hyphen ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),' at the line start. HOCON supports only "square braces" style:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'## YAML\ndescription:\n  - "First line"  \n  - "Second line"\n# One-line list declaration also supported\ndescription: ["First line", "Second line"]\n\n## HOCON\ndescription: [\n  "First line",\n  "Second line"\n]\n# One-line list declaration looks exactly like in YAML\ndescription: ["First line", "Second line"]\n')),(0,o.kt)("h3",{id:"list-of-objects"},"List of objects"),(0,o.kt)("p",null,"YAML allows declaring list of objects using hyphen list notation, but in HOCON we should use curly braces to declare objects in list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'## YAML\nactions:\n  - on: [right_click]\n    do: ["weather clear"]\n\n## HOCON\nactions: [\n  {\n      on: [right_click]\n      do: ["weather clear"]\n  }\n]\n# Or more compact variant using one-line object declaration\nactions: [\n  {on: [right_click], do: ["weather_clear"]}\n]\n')),(0,o.kt)("h2",{id:"types"},"Types"),(0,o.kt)("p",null,"Here are listed common types used in configs. Other types are described in the place of usage."),(0,o.kt)("h3",{id:"string"},"String"),(0,o.kt)("p",null,"Strings may be quoted and unquoted. It is recommended to always use quoted strings because unquoted strings has limited set of characters they can contain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'quoted-string: "This is a string value"\nunquoted-string: This also allowed but not recommended\n')),(0,o.kt)("h3",{id:"number"},"Number"),(0,o.kt)("p",null,"Numbers may be either integer, or with floating point. Allowed range usually specified in field specification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"integer-value: 42\nfloat-value: 0.5\n")),(0,o.kt)("h3",{id:"boolean"},"Boolean"),(0,o.kt)("p",null,"Primitive logical type that can have only the values ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"yes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"on"),") or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," (aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"no"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"off"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"boolean-field: true\n")),(0,o.kt)("h3",{id:"item"},"Item"),(0,o.kt)("p",null,"Item ID that can be used to obtain item via ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/82515/"},"Mimic"),". You can add namespace if you want to get item from the defined source."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"minecraft-item: minecraft:iron_sword\ncustom-item: mmoitems:iron_sword\nitem-without-namespace: iron_sword\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can check list of available items using command:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"/mimic item give <player> <item_id>\n")))),(0,o.kt)("h2",{id:"advanced-hocon"},"Advanced HOCON"),(0,o.kt)("p",null,"HOCON provides features good to know because it may be useful when you configure the plugin."),(0,o.kt)("h3",{id:"path-as-key"},"Path as key"),(0,o.kt)("p",null,"You can use paths as a keys for values to configure nested objects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'my-slot {\n  display-name: "Change my type"\n}\n\n# HOCON will go to the "my-slot" and change its property called "type"\nmy-slot.type: generic\n\n# This is also a valid notation to declare "other-slot" object\nother-slot.display-name: "Slot created by path keys"\nother-slot.type: generic\n')),(0,o.kt)("h3",{id:"substitutions"},"Substitutions"),(0,o.kt)("p",null,"HOCON allows referring from value to other paths in configuration. Referent path should be in format ",(0,o.kt)("inlineCode",{parentName:"p"},"${absolute.path.to.field}"),"."),(0,o.kt)("p",null,"For example, you can create a variable and reuse it in several values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'server-name: "Best Server"\n\nserver-info-slot {\n  display-name: ${server-name} info\n  description: ["Server name is "${server-name}]\n  type: gui\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Substitutions are not allowed inside quotes ",(0,o.kt)("inlineCode",{parentName:"p"},'"'),". So you should move substitution out of the quotes the following way:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Bad\n"Server name is ${server-name}!"\n\n# Good\n"Server name is "${server-name}"!"\n')))),(0,o.kt)("h3",{id:"concatenation-and-inheritance"},"Concatenation and inheritance"),(0,o.kt)("p",null,"HOCON allows concatenating values including objects and lists. It is a powerful feature in combination with ",(0,o.kt)("a",{parentName:"p",href:"#substitutions"},"substitutions"),"."),(0,o.kt)("p",null,"Lists concatenation can be used to share common configurations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"offhand {\n  allowed-items: [dagger, shield]\n}\n\n# We can hold in main hand everything we can hold in offhand and sword or axe additionally\nmainhand {\n  allowed-items: ${offhand.allowed-items} [sword, axe]\n}\n")),(0,o.kt)("p",null,"Objects concatenation can be used for inheritance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'ammo-base {\n  type: generic\n  max-stack-size: 16\n}\n\n# Arrows slot will inherit all fields from "ammo-base"\narrows: ${ammo-base} {\n  allowed-items: [arrow]\n}\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Remember you should use absolute path to objects for substitution. In real configs paths will look like ",(0,o.kt)("inlineCode",{parentName:"p"},"slots.ammo-base")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ammo-base"),"."))))}m.isMDXComponent=!0}}]);