"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[2270],{5272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));a(1839);const i={sidebar_position:2},l="Requirements",s={unversionedId:"sample-app/requirements",id:"version-1.0.0/sample-app/requirements",title:"Requirements",description:"Here are the requirements realized by Holiday.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/sample-app/requirements.md",sourceDirName:"sample-app",slug:"/sample-app/requirements",permalink:"/Extreal.Guide/en/sample-app/requirements",draft:!1,tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Extreal.Guide/en/sample-app/intro"},next:{title:"Architecture",permalink:"/Extreal.Guide/en/sample-app/architecture"}},u={},o=[{value:"Functional requirements",id:"functional-requirements",level:2},{value:"Non-functional requirements",id:"non-functional-requirements",level:2}],p={toc:o};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Here are the requirements realized by Holiday."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Holiday requirements do not cover those necessary for production applications.\nFor production applications, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.ipa.go.jp/sec/softwareengineering/std/ent03-b.html"},"Non-Functional Requirements Grade")," to identify the perspective of non-functional requirements and define them.")),(0,r.kt)("h2",{id:"functional-requirements"},"Functional requirements"),(0,r.kt)("p",null,"Holiday is an application aimed at gathering with friends and family to spend time together during the holidays."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"holiday",src:a(6520).Z,width:"1055",height:"210"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title Screen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Title display only"))),(0,r.kt)("li",{parentName:"ul"},"Avatar selection screen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allows users to enter a name"),(0,r.kt)("li",{parentName:"ul"},"Allows users to select an avatar",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Armature of ",(0,r.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526?locale=en-JP"},"Starter Assets - Third Person Character Controller")),(0,r.kt)("li",{parentName:"ul"},"Michelle and Amy from ",(0,r.kt)("a",{parentName:"li",href:"https://www.mixamo.com"},"Mixamo")))))),(0,r.kt)("li",{parentName:"ul"},"Virtual Space",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Voice chat is available"),(0,r.kt)("li",{parentName:"ul"},"Text chat is available"),(0,r.kt)("li",{parentName:"ul"},"Multiplayer is available"),(0,r.kt)("li",{parentName:"ul"},"Can return to avatar selection screen")))),(0,r.kt)("h2",{id:"non-functional-requirements"},"Non-functional requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Method of holding the event",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Each event will be held for one hour, with a set schedule and event announcement"),(0,r.kt)("li",{parentName:"ul"},"The server is started/stopped each time the event is held"))),(0,r.kt)("li",{parentName:"ul"},"Number of users",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Title screen, avatar selection screen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No limit"))),(0,r.kt)("li",{parentName:"ul"},"Virtual space",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum number of users 90"),(0,r.kt)("li",{parentName:"ul"},"If the maximum number of users is exceeded, users will be notified on the avatar selection screen"))))),(0,r.kt)("li",{parentName:"ul"},"Usage environment",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PC",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Windows 10"),(0,r.kt)("li",{parentName:"ul"},"Resolution: 1920x1080"))),(0,r.kt)("li",{parentName:"ul"},"Mobile phone",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"iOS 16"),(0,r.kt)("li",{parentName:"ul"},"Android 11"),(0,r.kt)("li",{parentName:"ul"},"Resolution: 1080x1920 (portrait mode)"))),(0,r.kt)("li",{parentName:"ul"},"Internet connection",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Up/Down stream: 40 Mbps or higher"))),(0,r.kt)("li",{parentName:"ul"},"Peripherals",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Wired earphones with microphone"))))),(0,r.kt)("li",{parentName:"ul"},"External Connections",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Vivox (SaaS)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Users are notified when the network is disconnected."),(0,r.kt)("li",{parentName:"ul"},"All features except text/voice chat can be used."),(0,r.kt)("li",{parentName:"ul"},"Reconnection process should not be necessary because the user can reconnect when re-entering the virtual space."))),(0,r.kt)("li",{parentName:"ul"},"Multiplayer server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Users are notified when the network is disconnected."),(0,r.kt)("li",{parentName:"ul"},"All features except for the multiplayer feature can be used."),(0,r.kt)("li",{parentName:"ul"},"Reconnection processing is not required because the user can reconnect when re-entering the virtual space."))))),(0,r.kt)("li",{parentName:"ul"},"Region, Language",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Japan, Japanese only")))))}m.isMDXComponent=!0},6520:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/holiday-7b6118bea5ac766cc4e87429dcf7415d.png"}}]);