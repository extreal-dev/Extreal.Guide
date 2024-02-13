"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[5720],{8916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7624),i=r(5788);const a={sidebar_position:3},c="Architecture",s={id:"sample-app/architecture",title:"Architecture",description:"System Structure",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sample-app/architecture.md",sourceDirName:"sample-app",slug:"/sample-app/architecture",permalink:"/Extreal.Guide/en/next/sample-app/architecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/Extreal.Guide/en/next/sample-app/requirements"},next:{title:"Test Planning",permalink:"/Extreal.Guide/en/next/sample-app/test-planning"}},o={},p=[{value:"System Structure",id:"system-structure",level:2},{value:"Application Structure",id:"application-structure",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",...(0,i.MN)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(t.h2,{id:"system-structure",children:"System Structure"}),"\n",(0,n.jsx)(t.p,{children:"Users use the application from a browser.\nAssets such as 3D models and connection information to the server are not included in the application, but are downloaded from S3 when the application is run.\nThe application connects directly to the server for processing.\nText/voice chat and multiplayer use P2P to exchange data between applications."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"system structure",src:r(7336).c+"",width:"856",height:"247"})}),"\n",(0,n.jsx)(t.h2,{id:"application-structure",children:"Application Structure"}),"\n",(0,n.jsxs)(t.p,{children:["The application architecture of Holiday will be the ",(0,n.jsx)(t.a,{href:"/Extreal.Guide/en/next/intro#application",children:"architecture"})," assumed by Extreal.\nThe stages and scenes of Holiday are as follows."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"application structure",src:r(840).c+"",width:"1256",height:"561"})}),"\n",(0,n.jsx)(t.p,{children:"The App scene is explained here because it is a special scene, not a separate feature offering."}),"\n",(0,n.jsx)(t.p,{children:"The App scene is the entry point for the application.\nThe App scene handles the application initialization process, stage configuration, application state provision, and other processing related to the application as a whole."})]})}function u(e={}){const{wrapper:t}={...(0,i.MN)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5788:(e,t,r)=>{r.d(t,{MN:()=>p});var n=r(1504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=i,f=d["".concat(o,".").concat(h)]||d[h]||l[h]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));u.displayName="MDXCreateElement"},840:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/holiday-app-structure-3152130e363b79c5e315ae2f8f7f82a1.png"},7336:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/holiday-sys-structure-5ef7f99fbd2027785e22cd4b45c5ac7f.png"}}]);