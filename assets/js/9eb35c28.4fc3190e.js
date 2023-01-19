"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[5070],{2092:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>o,frontMatter:()=>p,metadata:()=>n,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));a(1839);const p={sidebar_position:3},s="Architecture",n={unversionedId:"sample-app/architecture",id:"sample-app/architecture",title:"Architecture",description:"System Structure",source:"@site/docs/sample-app/architecture.md",sourceDirName:"sample-app",slug:"/sample-app/architecture",permalink:"/Extreal.Guide/next/sample-app/architecture",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/Extreal.Guide/next/sample-app/requirements"},next:{title:"Test Planning",permalink:"/Extreal.Guide/next/sample-app/test-planning"}},u={},c=[{value:"System Structure",id:"system-structure",level:2},{value:"Application Structure",id:"application-structure",level:2}],l={toc:c};function o(t){let{components:e,...p}=t;return(0,i.kt)("wrapper",(0,r.Z)({},l,p,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("h2",{id:"system-structure"},"System Structure"),(0,i.kt)("p",null,"\u30e6\u30fc\u30b6\u306f\u5404\u30b9\u30c8\u30a2\u3084AWS S3\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b3D\u30e2\u30c7\u30eb\u306a\u3069\u306e\u30a2\u30bb\u30c3\u30c8\u3084\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u63a5\u7d9a\u60c5\u5831\u3092\u542b\u3081\u3066\u914d\u5e03\u3057\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u76f4\u63a5\u51e6\u7406\u306b\u5fc5\u8981\u306aSaaS\u3084\u30b5\u30fc\u30d0\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"system structure",src:a(9666).Z,width:"683",height:"383"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u5b9f\u969b\u306b\u5404\u30b9\u30c8\u30a2\u3084AWS S3\u306b\u914d\u7f6e\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u4eca\u5f8c\u3001\u5404\u30b9\u30c8\u30a2\u306e\u5be9\u67fb\u5bfe\u5fdc\u306a\u3069\u30ce\u30a6\u30cf\u30a6\u3092\u516c\u958b\u3057\u3066\u3044\u304f\u4e88\u5b9a\u3067\u3059\u3002")),(0,i.kt)("h2",{id:"application-structure"},"Application Structure"),(0,i.kt)("p",null,"Holiday\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306fExtreal\u304c\u60f3\u5b9a\u3057\u3066\u3044\u308b",(0,i.kt)("a",{parentName:"p",href:"/intro#application"},"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"),"\u3092\u63a1\u7528\u3057\u307e\u3059\u3002\nHoliday\u306e\u30b9\u30c6\u30fc\u30b8\u3068\u30b7\u30fc\u30f3\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"application structure",src:a(9482).Z,width:"990",height:"687"})),(0,i.kt)("p",null,"App\u30b7\u30fc\u30f3\u306f\u500b\u5225\u306e\u6a5f\u80fd\u63d0\u4f9b\u3067\u306a\u304f\u3001\u7279\u5225\u306a\u30b7\u30fc\u30f3\u306a\u306e\u3067\u3053\u3053\u3067\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"App\u30b7\u30fc\u30f3\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8\u306b\u306a\u308a\u307e\u3059\u3002\nApp\u30b7\u30fc\u30f3\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u521d\u671f\u5316\u51e6\u7406\u3001\u30b9\u30c6\u30fc\u30b8\u69cb\u6210\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u72b6\u614b\u306e\u63d0\u4f9b\u306a\u3069\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5168\u4f53\u306b\u95a2\u308f\u308b\u51e6\u7406\u3092\u884c\u3044\u307e\u3059\u3002"))}o.isMDXComponent=!0},9482:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/holiday-app-structure-ba4f44e4e67ab3eeff26f81156c7eba4.png"},9666:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/holiday-sys-structure-3525fbc1c1d80984227851ca16c35d6b.png"}}]);