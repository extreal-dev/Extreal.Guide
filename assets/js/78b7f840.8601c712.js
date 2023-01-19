"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[8161],{5071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>C,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));t(1839);const o={sidebar_position:3},s="Chat using Vivox",l={unversionedId:"learning/chat.vivox",id:"learning/chat.vivox",title:"Chat using Vivox",description:"\u3053\u3053\u3067\u306fVivox\u30e9\u30c3\u30d1\u30fc\u306b\u3064\u3044\u3066\u5b66\u7fd2\u3057\u307e\u3059\u3002",source:"@site/docs/learning/chat.vivox.md",sourceDirName:"learning",slug:"/learning/chat.vivox",permalink:"/Extreal.Guide/next/learning/chat.vivox",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/Extreal.Guide/next/learning/core"},next:{title:"Multiplay using Netcode for GameObjects",permalink:"/Extreal.Guide/next/learning/multiplay.ngo"}},r={},p=[{value:"Prepare project",id:"prepare-project",level:2},{value:"Add VivoxClient",id:"add-vivoxclient",level:2},{value:"Add text chat",id:"add-text-chat",level:2},{value:"Add base class",id:"add-base-class",level:2},{value:"Add voice chat",id:"add-voice-chat",level:2},{value:"Next Step",id:"next-step",level:2}],g={toc:p};function C(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chat-using-vivox"},"Chat using Vivox"),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306f",(0,i.kt)("a",{parentName:"p",href:"/integration/chat.vivox"},"Vivox\u30e9\u30c3\u30d1\u30fc"),"\u306b\u3064\u3044\u3066\u5b66\u7fd2\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b66\u7fd2\u6642\u9593\u306e\u76ee\u5b89",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"60\u5206"))),(0,i.kt)("li",{parentName:"ul"},"Unity\u30d0\u30fc\u30b8\u30e7\u30f3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"2021.3.16f1")))),(0,i.kt)("p",null,"Vivox\u30e9\u30c3\u30d1\u30fc\u306e\u5b66\u7fd2\u3067\u306f\u5b66\u7fd2\u7528\u306b\u7528\u610f\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u3053\u306e\u5b66\u7fd2\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306fCore\u306e\u5b66\u7fd2\u3067\u69cb\u7bc9\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3092\u30d9\u30fc\u30b9\u306b\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u3002\nCore\u306e\u5b66\u7fd2\u3092\u5b9f\u65bd\u3057\u3066\u3044\u306a\u3044\u65b9\u306f\u3053\u306e\u5b66\u7fd2\u3088\u308a\u5148\u306b",(0,i.kt)("a",{parentName:"p",href:"/learning/core"},"Core\u306e\u5b66\u7fd2"),"\u3092\u5b9f\u65bd\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Vivox\u30e9\u30c3\u30d1\u30fc\u304c\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3055\u308c\u305f\u5b66\u7fd2\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f7f\u3063\u3066\u3001\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u3067\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3068\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u3067\u304d\u308b\u3088\u3046\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u88c5\u3092\u8ffd\u52a0\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u5b66\u7fd2\u3092\u884c\u3046\u306b\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u306e\u63a5\u7d9a\u5148\u3068\u306a\u308b",(0,i.kt)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal"),"\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u4ee5\u964d\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u59cb\u3081\u308b\u524d\u306b",(0,i.kt)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal"),"\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3066\u304a\u3044\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h2",{id:"prepare-project"},"Prepare project"),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u307e\u305a\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u6e96\u5099\u3057\u307e\u3057\u3087\u3046\u3002")),(0,i.kt)("p",null,"\u5b66\u7fd2\u7528\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30af\u30ed\u30fc\u30f3\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Learning.Chat.Vivox.git\n")),(0,i.kt)("p",null,"Unity\u30a8\u30c7\u30a3\u30bf\u3067\u30af\u30ed\u30fc\u30f3\u3057\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304d\u307e\u3059\u3002\n\u300cLink your Unity project\u300d\u3068\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u306f\u8a2d\u5b9a\u305b\u305a\u306b\u9589\u3058\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002")),(0,i.kt)("p",null,"Assets\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e",(0,i.kt)("inlineCode",{parentName:"p"},"ExtrealCoreLearning"),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u683c\u7d0d\u3059\u308b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u3059\u3002\n\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u540d\u3068\u540c\u3058\u540d\u524d\u3067Assembly Definition\u3092\u4f5c\u6210\u3057\u3066\u4f9d\u5b58\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5236\u5fa1\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"ExtrealCoreLearning\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306e\u72b6\u614b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u3068\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u3092\u4f5c\u6210\u6e08\u307f\u3067\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u306f",(0,i.kt)("a",{parentName:"li",href:"http://u3d.as/2z1r"},"Starter Assets - Third Person Character Controller"),"\u304c\u63d0\u4f9b\u3059\u308b\u30a2\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u306b\u306f\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3068\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306eUI\u3092\u4f5c\u6210\u6e08\u307f\u3067\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u3067\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3068\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u554f\u984c\u304c\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),(0,i.kt)("p",null,"App\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3042\u308b",(0,i.kt)("inlineCode",{parentName:"p"},"App"),"\u30b7\u30fc\u30f3\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306eGo\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u306b\u79fb\u52d5\u3067\u304d\u308c\u3070\u6210\u529f\u3067\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project success",src:t(3503).Z,width:"1053",height:"507"})),(0,i.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306eUI\u3092\u8a66\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002\n\u5165\u529b\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u9069\u5f53\u306a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u5165\u529b\u3057\u3001Send\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u753b\u9762\u306b\u73fe\u308c\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Text chat",src:t(6269).Z,width:"1137",height:"405"})),(0,i.kt)("p",null,"\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306eUI\u3067\u306f\u30df\u30e5\u30fc\u30c8\u5207\u308a\u66ff\u3048\u3092\u884c\u3046\u30dc\u30bf\u30f3\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002\n\u753b\u9762\u5de6\u4e0b\u306eVoice\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002\n\u30df\u30e5\u30fc\u30c8\u72b6\u614b\u306b\u5fdc\u3058\u3066\u30dc\u30bf\u30f3\u306e\u8272\u3092\u5909\u3048\u3066\u3044\u307e\u3059\u3002\n\u8d64\u304c\u30df\u30e5\u30fc\u30c8\u89e3\u9664\u4e2d\u3001\u30b0\u30ec\u30fc\u304c\u30df\u30e5\u30fc\u30c8\u4e2d\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Voice chat",src:t(7215).Z,width:"1086",height:"413"})),(0,i.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3068\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306eUI\u5b9f\u88c5\u306f\u6b21\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ExtrealCoreLearning/TextChatControl\n"))),(0,i.kt)("li",{parentName:"ul"},"\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ExtrealCoreLearning/VoiceChatControl\n")))),(0,i.kt)("p",null,"\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u3067\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3068\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u3067\u304d\u308b\u3088\u3046\u306b\u5b9f\u88c5\u3092\u8ffd\u52a0\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"add-vivoxclient"},"Add VivoxClient"),(0,i.kt)("p",null,"\u307e\u305aVivoxClient\u3092\u6e96\u5099\u3057\u307e\u3059\u3002\nVivoxClient\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30671\u3064\u5b58\u5728\u3059\u308c\u3070\u3088\u3044\u306e\u3067App\u30b7\u30fc\u30f3\u306b\u542b\u3081\u3066\u304a\u304d\u3001\u7a7a\u9593\u304c\u5897\u3048\u3066\u3082\u518d\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"VivoxAppConfig\u3092\u751f\u6210\u3059\u308bScriptableObject\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VivoxAppConfig",src:t(7041).Z,width:"917",height:"298"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/integration/chat.vivox#settings"},"Vivox\u30e9\u30c3\u30d1\u30fc\u306eSettings"),"\u3092\u53c2\u7167\u3057\u3066\u3001App\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306bVivoxAppConfig\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u751f\u6210\u3059\u308bChatConfig\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210\u30e1\u30cb\u30e5\u30fc\u304b\u3089ChatConfig\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3057\u3001\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067Vivox\u3078\u306e\u63a5\u7d9a\u60c5\u5831\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"AppScope\u3092\u5909\u66f4\u3057\u3066VivoxClient\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,"VContainer\u3092\u4f7f\u3063\u3066VivoxAppConfig\u3092VivoxClient\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Extreal.Core.Logging;\nusing Extreal.Core.StageNavigation;\n// highlight-start\nusing Extreal.Integration.Chat.Vivox;\n// highlight-end\nusing UnityEngine;\nusing VContainer;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public class AppScope : LifetimeScope\n    {\n        [SerializeField] private StageConfig stageConfig;\n        // highlight-start\n        [SerializeField] private ChatConfig chatConfig;\n        // highlight-end\n\n        private static void InitializeApp()\n        {\n            // Omitted due to no changes\n        }\n\n        protected override void Awake()\n        {\n            // Omitted due to no changes\n        }\n\n        protected override void Configure(IContainerBuilder builder)\n        {\n            builder.RegisterComponent(stageConfig).AsImplementedInterfaces();\n            builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton);\n\n            // highlight-start\n            builder.RegisterComponent(chatConfig.ToVivoxAppConfig());\n            builder.Register<VivoxClient>(Lifetime.Singleton);\n            // highlight-end\n\n            builder.RegisterEntryPoint<AppPresenter>();\n        }\n    }\n}\n")),(0,i.kt)("p",null,"\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067AppScope\u306bChatConfig\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"AppScope",src:t(8064).Z,width:"999",height:"485"})),(0,i.kt)("h2",{id:"add-text-chat"},"Add text chat"),(0,i.kt)("p",null,"VivoxClient\u304c\u6e96\u5099\u3067\u304d\u305f\u306e\u3067\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u8ffd\u52a0\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u30ed\u30b8\u30c3\u30af\u3092\u63d0\u4f9b\u3059\u308bModel\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,"ExtrealCoreLearning/TextChatControl\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u53c2\u52a0\u3068\u30c1\u30e3\u30f3\u30cd\u30eb\u304b\u3089\u306e\u9000\u5ba4\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u3068\u30e1\u30c3\u30bb\u30fc\u30b8\u53d7\u4fe1\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u53c2\u52a0\u6642\u306f\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing UniRx;\nusing VivoxUnity;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatChannel : IDisposable\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly string channelName;\n\n        private ChannelId channelId;\n\n        private readonly CompositeDisposable disposables = new CompositeDisposable();\n        \n        public IObservable<string> OnMessageReceived\n            => vivoxClient.OnTextMessageReceived.Select(channelTextMessage => channelTextMessage.Message);\n\n        public TextChatChannel(VivoxClient vivoxClient, string channelName)\n        {\n            this.vivoxClient = vivoxClient;\n            this.channelName = channelName;\n            this.vivoxClient.OnChannelSessionAdded\n                .Where(channelId => channelId.Name == this.channelName)\n                .Subscribe(channelId => this.channelId = channelId)\n                .AddTo(disposables);\n        }\n\n        public async UniTask JoinAsync()\n        {\n            if (!IsLoggedIn)\n            {\n                Login();\n            }\n            await UniTask.WaitUntil(() => IsLoggedIn);\n            vivoxClient.ConnectAsync(new VivoxChannelConfig(channelName, ChatType.TextOnly, transmissionSwitch: false)).Forget();\n        }\n\n        private bool IsLoggedIn\n            => vivoxClient.LoginSession?.State == LoginState.LoggedIn;\n\n        private void Login()\n        {\n            vivoxClient.LoginAsync(new VivoxAuthConfig(nameof(TextChatChannel))).Forget();\n        }\n\n        public void Leave()\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n            vivoxClient.Disconnect(channelId);\n        }\n\n        public void SendMessage(string message)\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n            vivoxClient.SendTextMessage(message, channelId);\n        }\n\n        public void Dispose()\n        {\n            disposables.Dispose();\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"TextChatChannel\u3092\u4f7f\u3046\u3088\u3046\u306bTextChatControlPresenter\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,"\u30b9\u30c6\u30fc\u30b8\u306b\u5165\u3063\u305f\u6642\u306bTextChatChannel\u3092\u751f\u6210\u3057\u3066\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u53c2\u52a0\u3057\u3001\u30b9\u30c6\u30fc\u30b8\u304b\u3089\u51fa\u308b\u3068\u304d\u306b\u30c1\u30e3\u30f3\u30cd\u30eb\u304b\u3089\u9000\u5ba4\u3057\u3066\u3044\u307e\u3059\u3002\n\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u9001\u4fe1\u3068\u53d7\u4fe1\u306fView\u30b9\u30af\u30ea\u30d7\u30c8\u306eTextChatControlView\u3068Model\u30b9\u30af\u30ea\u30d7\u30c8\u306eTextChatChannel\u3092\u30de\u30c3\u30d4\u30f3\u30b0\u3057\u3066\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n// highlight-start\nusing Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\n// highlight-end\nusing UniRx;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatControlPresenter : IInitializable, IDisposable\n    {\n        // highlight-start\n        private readonly StageNavigator<StageName, SceneName> stageNavigator;\n        private readonly VivoxClient vivoxClient;\n        // highlight-end\n        private readonly TextChatControlView textChatControlView;\n        private readonly CompositeDisposable disposables = new CompositeDisposable();\n\n        // highlight-start\n        private TextChatChannel textChatChannel;\n        private readonly CompositeDisposable stageDisposables = new CompositeDisposable();\n\n        public TextChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            TextChatControlView textChatControlView)\n        // highlight-end\n        {\n            // highlight-start\n            this.stageNavigator = stageNavigator;\n            this.vivoxClient = vivoxClient;\n            // highlight-end\n            this.textChatControlView = textChatControlView;\n        }\n\n        public void Initialize()\n        {\n            // highlight-start\n            stageNavigator.OnStageTransitioned\n                .Subscribe(OnStageEntered).AddTo(disposables);\n\n            stageNavigator.OnStageTransitioning\n                .Subscribe(OnStageExiting).AddTo(disposables);\n            // highlight-end\n\n            textChatControlView.OnSendButtonClicked.Subscribe(message =>\n            {\n                // highlight-start\n                textChatChannel.SendMessage(message);\n                // highlight-end\n            }).AddTo(disposables);\n        }\n\n        // highlight-start\n        private void OnStageEntered(StageName stageName)\n        {\n            textChatChannel = new TextChatChannel(vivoxClient, $"TextChat-{stageName}");\n            textChatChannel.OnMessageReceived.Subscribe(message =>\n            {\n                textChatControlView.ShowTextChatMessage(message);\n            }).AddTo(stageDisposables);\n            textChatChannel.JoinAsync().Forget();\n        }\n\n        private void OnStageExiting(StageName stageName)\n        {\n            textChatChannel.Leave();\n            textChatChannel.Dispose();\n            stageDisposables.Clear();\n        }\n        // highlight-end\n\n        public void Dispose()\n        {\n            // highlight-start\n            stageDisposables.Dispose();\n            // highlight-end\n            disposables.Dispose();\n        }\n    }\n}\n')),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u30d7\u30ec\u30a4\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),(0,i.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u52d5\u4f5c\u78ba\u8a8d\u306b\u306f",(0,i.kt)("a",{parentName:"p",href:"https://github.com/VeriorPies/ParrelSync"},"ParrelSync"),"\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bParrelSync\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3042\u308b\u306e\u3067\u3001ParrelSync\u3092\u4f7f\u3063\u3066\u8907\u6570\u306eUnity\u30a8\u30c7\u30a3\u30bf\u3092\u958b\u3044\u3066\u30d7\u30ec\u30a4\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ParrelSync",src:t(2694).Z,width:"1185",height:"505"})),(0,i.kt)("p",null,"App\u30b7\u30fc\u30f3\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\nVivox\u3078\u306e\u63a5\u7d9a\u306b\u5c11\u3057\u6642\u9593\u304c\u304b\u304b\u308b\u306e\u3067\u5b9f\u884c\u5f8c\u3059\u3050\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u3057\u3066\u3082\u9001\u4fe1\u3055\u308c\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\n\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u304c\u53cd\u5fdc\u3057\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u5c11\u3057\u5f85\u3063\u3066\u304b\u3089\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,"\u5b9f\u884c\u3057\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u9001\u4fe1\u3055\u308c\u308c\u3070\u6210\u529f\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"add-base-class"},"Add base class"),(0,i.kt)("p",null,"\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u524d\u306b\u3001\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3068\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306eModel\u30b9\u30af\u30ea\u30d7\u30c8\u3068Presenter\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u5171\u901a\u3059\u308b\u90e8\u5206\u304c\u591a\u3044\u306e\u3067Base\u30af\u30e9\u30b9\u306b\u5171\u901a\u51e6\u7406\u3092\u5207\u308a\u51fa\u3057\u307e\u3059\u3002\n\u5171\u901a\u51e6\u7406\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Model\u30b9\u30af\u30ea\u30d7\u30c8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u53c2\u52a0\u3068\u30c1\u30e3\u30f3\u30cd\u30eb\u304b\u3089\u306e\u9000\u5ba4"),(0,i.kt)("li",{parentName:"ul"},"\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u53c2\u52a0\u6642\u306f\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u306a\u3051\u308c\u3070\u30ed\u30b0\u30a4\u30f3\u3059\u308b"))),(0,i.kt)("li",{parentName:"ul"},"Presenter\u30b9\u30af\u30ea\u30d7\u30c8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30b9\u30c6\u30fc\u30b8\u306b\u5165\u3063\u305f\u6642\u306bTextChatChannel\u3092\u751f\u6210\u3057\u3066\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u53c2\u52a0\u3057\u3001\u30b9\u30c6\u30fc\u30b8\u304b\u3089\u51fa\u308b\u3068\u304d\u306b\u30c1\u30e3\u30f3\u30cd\u30eb\u304b\u3089\u9000\u5ba4")))),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Model\u30b9\u30af\u30ea\u30d7\u30c8\u306eBase\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,"App\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.TextChatControl;\nusing UniRx;\nusing VivoxUnity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public abstract class ChatChannelBase : IDisposable\n    {\n        protected readonly VivoxClient VivoxClient;\n        protected readonly string ChannelName;\n        protected ChannelId ChannelId;\n\n        protected readonly CompositeDisposable Disposables = new CompositeDisposable();\n\n        protected ChatChannelBase(VivoxClient vivoxClient, string channelName)\n        {\n            VivoxClient = vivoxClient;\n            ChannelName = channelName;\n            VivoxClient.OnChannelSessionAdded\n                .Where(channelId => channelId.Name == ChannelName)\n                .Subscribe(channelId => ChannelId = channelId)\n                .AddTo(Disposables);\n        }\n\n        public async UniTask JoinAsync()\n        {\n            if (!IsLoggedIn)\n            {\n                Login();\n            }\n\n            await UniTask.WaitUntil(() => IsLoggedIn);\n            Connect();\n        }\n\n        protected bool IsLoggedIn\n            => VivoxClient.LoginSession?.State == LoginState.LoggedIn;\n\n        private void Login()\n        {\n            VivoxClient.LoginAsync(new VivoxAuthConfig(nameof(TextChatChannel))).Forget();\n        }\n\n        protected abstract void Connect();\n\n        public void Leave()\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n\n            VivoxClient.Disconnect(ChannelId);\n        }\n\n        public void Dispose()\n        {\n            Disposables.Dispose();\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Base\u30af\u30e9\u30b9\u3092\u4f7f\u3046\u3088\u3046\u306bTextChatChannel\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatChannel : ChatChannelBase\n    {\n        public IObservable<string> OnMessageReceived\n            => VivoxClient.OnTextMessageReceived.Select(channelTextMessage => channelTextMessage.Message);\n\n        public TextChatChannel(VivoxClient vivoxClient, string channelName) : base(vivoxClient, channelName)\n        {\n        }\n\n        protected override void Connect()\n        {\n            VivoxClient.ConnectAsync(new VivoxChannelConfig(ChannelName, ChatType.TextOnly, transmissionSwitch: false)).Forget();\n        }\n\n        public void SendMessage(string message)\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n\n            VivoxClient.SendTextMessage(message, ChannelId);\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Presenter\u30b9\u30af\u30ea\u30d7\u30c8\u306eBase\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,"App\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Extreal.Core.StageNavigation;\nusing UniRx;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public abstract class ControlPresenterBase : IInitializable, IDisposable\n    {\n        private readonly StageNavigator<StageName, SceneName> stageNavigator;\n        private readonly CompositeDisposable sceneDisposables = new CompositeDisposable();\n        private CompositeDisposable stageDisposables = new CompositeDisposable();\n\n        protected ControlPresenterBase(\n            StageNavigator<StageName, SceneName> stageNavigator)\n        {\n            this.stageNavigator = stageNavigator;\n        }\n\n        public void Initialize()\n        {\n            stageNavigator.OnStageTransitioned.Subscribe(stageName =>\n            {\n                OnStageEntered(stageName, stageDisposables);\n            }).AddTo(sceneDisposables);\n\n            stageNavigator.OnStageTransitioning.Subscribe(stageName =>\n            {\n                OnStageExiting(stageName);\n                stageDisposables.Clear();\n            }).AddTo(sceneDisposables);\n\n            Initialize(stageNavigator, sceneDisposables);\n        }\n\n        protected abstract void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables);\n\n        protected abstract void OnStageEntered(\n            StageName stageName, CompositeDisposable stageDisposables);\n\n        protected abstract void OnStageExiting(StageName stageName);\n\n        public void Dispose()\n        {\n            stageDisposables.Dispose();\n            sceneDisposables.Dispose();\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Base\u30af\u30e9\u30b9\u3092\u4f7f\u3046\u3088\u3046\u306bTextChatControlPresenter\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatControlPresenter : ControlPresenterBase\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly TextChatControlView textChatControlView;\n        private TextChatChannel textChatChannel;\n\n        public TextChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            TextChatControlView textChatControlView) : base(stageNavigator)\n        {\n            this.vivoxClient = vivoxClient;\n            this.textChatControlView = textChatControlView;\n        }\n\n        protected override void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            CompositeDisposable sceneDisposables)\n        {\n            textChatControlView.OnSendButtonClicked\n                .Subscribe(message =>\n                {\n                    textChatChannel.SendMessage(message);\n                }).AddTo(sceneDisposables);\n        }\n\n        protected override void OnStageEntered(\n            StageName stageName,\n            CompositeDisposable stageDisposables)\n        {\n            textChatChannel = new TextChatChannel(vivoxClient, $"TextChat-{stageName}");\n            textChatChannel.OnMessageReceived\n                .Subscribe(message =>\n                {\n                    textChatControlView.ShowTextChatMessage(message);\n                }).AddTo(stageDisposables);\n            textChatChannel.JoinAsync().Forget();\n        }\n\n        protected override void OnStageExiting(StageName stageName)\n        {\n            textChatChannel.Leave();\n            textChatChannel.Dispose();\n        }\n    }\n}\n')),(0,i.kt)("p",null,"App\u30b7\u30fc\u30f3\u3092\u5b9f\u884c\u3057\u3066\u5909\u66f4\u524d\u3068\u540c\u3058\u3088\u3046\u306b\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u304c\u30d7\u30ec\u30a4\u3067\u304d\u308c\u3070\u6210\u529f\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"add-voice-chat"},"Add voice chat"),(0,i.kt)("p",null,"\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u8ffd\u52a0\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Base\u30af\u30e9\u30b9\u3068VivoxClient\u3092\u4f7f\u3046\u3088\u3046\u306bModel\u30b9\u30af\u30ea\u30d7\u30c8\u306eVoiceChatChannel\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,i.kt)("p",null,"VivoxClient\u3092\u4f7f\u3063\u3066\u5165\u529b\u30c7\u30d0\u30a4\u30b9\u306e\u30df\u30e5\u30fc\u30c8\u5236\u5fa1\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.VoiceChatControl\n{\n    public class VoiceChatChannel : ChatChannelBase\n    {\n        public IObservable<bool> IsMute => isMute.AddTo(Disposables);\n        private ReactiveProperty<bool> isMute = new ReactiveProperty<bool>();\n\n        public VoiceChatChannel(VivoxClient vivoxClient, string channelName) : base(vivoxClient, channelName)\n        {\n            SetMuteAsync(true).Forget();\n        }\n\n        protected override void Connect()\n        {\n            VivoxClient.ConnectAsync(new VivoxChannelConfig(ChannelName, ChatType.AudioOnly)).Forget();\n        }\n\n        public UniTask ToggleMuteAsync()\n        {\n            return SetMuteAsync(!isMute.Value);\n        }\n\n        private async UniTask SetMuteAsync(bool muted)\n        {\n            var audioInputDevices = await VivoxClient.GetAudioInputDevicesAsync();\n            audioInputDevices.Muted = muted;\n            isMute.Value = muted;\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Base\u30af\u30e9\u30b9\u3068VoiceChatChannel\u3092\u4f7f\u3046\u3088\u3046\u306bVoiceChatControlPresenter\u3092\u5909\u66f4\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.VoiceChatControl\n{\n    public class VoiceChatControlPresenter : ControlPresenterBase\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly VoiceChatControlView voiceChatControlView;\n        private VoiceChatChannel voiceChatChannel;\n\n        public VoiceChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            VoiceChatControlView voiceChatControlView) : base(stageNavigator)\n        {\n            this.vivoxClient = vivoxClient;\n            this.voiceChatControlView = voiceChatControlView;\n        }\n\n        protected override void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)\n        {\n            voiceChatControlView.OnVoiceButtonClicked.Subscribe(_ =>\n            {\n                voiceChatChannel.ToggleMuteAsync().Forget();\n            }).AddTo(sceneDisposables);\n        }\n\n        protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)\n        {\n            voiceChatChannel = new VoiceChatChannel(vivoxClient, $"VoiceChat-{stageName}");\n            voiceChatChannel.IsMute.Subscribe(isMute =>\n            {\n                voiceChatControlView.toggleMute(isMute);\n            }).AddTo(stageDisposables);\n            voiceChatChannel.JoinAsync().Forget();\n        }\n\n        protected override void OnStageExiting(StageName stageName)\n        {\n            voiceChatChannel.Leave();\n            voiceChatChannel.Dispose();\n        }\n    }\n}\n')),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u30d7\u30ec\u30a4\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002")),(0,i.kt)("p",null,"ParrelSync\u3092\u4f7f\u3063\u3066\u8907\u6570\u306eUnity\u30a8\u30c7\u30a3\u30bf\u3092\u958b\u3044\u3066\u30d7\u30ec\u30a4\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("p",null,"App\u30b7\u30fc\u30f3\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\n\u30df\u30e5\u30fc\u30c8\u5207\u308a\u66ff\u3048\u3001\u5b9f\u884c\u3057\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u97f3\u58f0\u304c\u9001\u4fe1\u3055\u308c\u308c\u3070\u6210\u529f\u3067\u3059\u3002"),(0,i.kt)("h2",{id:"next-step"},"Next Step"),(0,i.kt)("p",null,"\u3053\u308c\u3067Vivox\u30e9\u30c3\u30d1\u30fc\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u306f\u7d42\u4e86\u3067\u3059\u3002\n\u304a\u75b2\u308c\u3055\u307e\u3067\u3057\u305f\u3002"),(0,i.kt)("p",null,"\u3053\u306e\u30cf\u30f3\u30ba\u30aa\u30f3\u3092\u901a\u3058\u3066",(0,i.kt)("a",{parentName:"p",href:"/integration/chat.vivox"},"Vivox\u30e9\u30c3\u30d1\u30fc"),"\u3092\u4f7f\u3063\u305f\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3068\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306e\u4f5c\u308a\u65b9\u3092\u4f53\u9a13\u3057\u307e\u3057\u305f\u3002\n\u6b21\u306e\u30b9\u30c6\u30c3\u30d7\u3068\u3057\u3066Vivox\u30e9\u30c3\u30d1\u30fc\u304c\u3088\u308a\u672c\u683c\u7684\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3069\u306e\u3088\u3046\u306b\u4f7f\u308f\u308c\u308b\u306e\u304b\u95a2\u5fc3\u304c\u3042\u308b\u3068\u601d\u3044\u307e\u3059\u3002\n\u305d\u306e\u671f\u5f85\u306b\u5fdc\u3048\u308b\u305f\u3081\u3001\u3088\u308a\u672c\u683c\u7684\u306a\u5b9f\u88c5\u4f8b\u3068\u3057\u3066",(0,i.kt)("a",{parentName:"p",href:"/category/sample-application"},"Sample Application"),"\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n\u305c\u3072Sample Application\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"))}C.isMDXComponent=!0},2694:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-ngo-parrelsync-d1b8359df842b754142e0ef6c2a2c187.png"},8064:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-appscope-vivoxappconfig-2bd62c46aab94edf4db9f71ec8015422.png"},3503:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-project-success-88c1b0af63143a5126da12fa32dd3909.png"},6269:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-ui-textchat-3662f76ee0ea1d1f507e32d63e982d96.png"},7215:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-ui-voicechat-da8083869343839e747b2718e8de9152.png"},7041:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-vivoxclient-vivoxappconfig-3523d98a403e4f95dd663cda5afd47ac.png"}}]);