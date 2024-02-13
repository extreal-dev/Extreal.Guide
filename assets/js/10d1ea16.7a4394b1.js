"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[6496],{4200:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>g,metadata:()=>t,toc:()=>s});var i=r(7624),o=r(5788);const g={sidebar_position:1},l="Logging",t={id:"core/logging",title:"Logging",description:"What for?",source:"@site/versioned_docs/version-1.0.0/core/logging.md",sourceDirName:"core",slug:"/core/logging",permalink:"/Extreal.Guide/1.0.0/core/logging",draft:!1,unlisted:!1,tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/Extreal.Guide/1.0.0/category/core"},next:{title:"Stage Navigation",permalink:"/Extreal.Guide/1.0.0/core/stage-navigation"}},a={},s=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"\u30ed\u30b0\u3092\u51fa\u529b\u3059\u308b",id:"\u30ed\u30b0\u3092\u51fa\u529b\u3059\u308b",level:3},{value:"\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u5909\u66f4\u3059\u308b",id:"\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u5909\u66f4\u3059\u308b",level:3},{value:"\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u3092\u5909\u66f4\u3059\u308b",id:"\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u3092\u5909\u66f4\u3059\u308b",level:3},{value:"\u30ed\u30b0\u66f8\u304d\u8fbc\u307f\u3092\u5909\u66f4\u3059\u308b",id:"\u30ed\u30b0\u66f8\u304d\u8fbc\u307f\u3092\u5909\u66f4\u3059\u308b",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,o.MN)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"logging",children:"Logging"}),"\n",(0,i.jsx)(n.h2,{id:"what-for",children:"What for?"}),"\n",(0,i.jsx)(n.p,{children:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3068\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30b0\u51fa\u529b\u3092\u5171\u901a\u5316\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u7d71\u4e00\u3057\u3066\u30ed\u30b0\u51fa\u529b\u3092\u5236\u5fa1\u3067\u304d\u308b\u3088\u3046\u306bLogging\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30b0\u51fa\u529b\u3092Logging\u306b\u96c6\u7d04\u3059\u308b\u3053\u3068\u3067\u3001\u958b\u767a\u3068\u672c\u756a\u904b\u7528\u3067\u51fa\u529b\u3059\u308b\u30ed\u30b0\u306e\u7a2e\u985e\u3084\u51fa\u529b\u5148\u306e\u5207\u308a\u66ff\u3048\u306a\u3069\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30ed\u30b0\u51fa\u529b\u5236\u5fa1\u304c\u5bb9\u6613\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u73fe\u6642\u70b9\u306eLogging\u306fUnity\u6a19\u6e96\u306eDebug\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u305f\u30ed\u30b0\u51fa\u529b\u306e\u307f\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u958b\u767a\u6642\u306e\u30c7\u30d0\u30c3\u30b0\u7528\u3068\u8003\u3048\u3066\u304f\u3060\u3055\u3044\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3067\u304d\u308b\u3088\u3046\u306b\u30d1\u30d6\u30ea\u30c3\u30af\u30af\u30e9\u30a6\u30c9\u3078\u306e\u30ed\u30b0\u9001\u4fe1\u306a\u3069\u3001\u4eca\u5f8c\u30ed\u30b0\u51fa\u529b\u5148\u3092\u5897\u3084\u3057\u3066\u3044\u304f\u4e88\u5b9a\u3067\u3059\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(n.p,{children:"Logging\u3067\u306f\u30ed\u30b0\u51fa\u529b\u3092\u5236\u5fa1\u3057\u3084\u3059\u3044\u3088\u3046\u306b\u30ed\u30b0\u30ec\u30d9\u30eb\u3068\u30ed\u30b0\u30ab\u30c6\u30b4\u30ea\u3092\u95a2\u9023\u4ed8\u3051\u3066\u30ed\u30b0\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30ed\u30b0\u30ec\u30d9\u30eb\u306f\u9ad8\u3044\u65b9\u304b\u3089\u9806\u306bError\u3001Warn\u3001Info\u3001Debug\u306e4\u3064\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Error","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u7d99\u7d9a\u3067\u304d\u306a\u3044\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Warn","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u3059\u3050\u306b\u5f71\u97ff\u306f\u306a\u3044\u304c\u653e\u7f6e\u3057\u3066\u304a\u304f\u3068\u554f\u984c\u3068\u306a\u308b\u4e8b\u8c61\u304c\u767a\u751f\u3057\u305f\u5834\u5408"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Info","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5229\u7528\u72b6\u6cc1\u3084\u5916\u90e8\u30b5\u30fc\u30d3\u30b9\u3068\u306e\u63a5\u7d9a\u72b6\u6cc1\u3092\u628a\u63e1\u3059\u308b\u76ee\u7684\u3067\u6b63\u5e38\u52d5\u4f5c\u306e\u4e8b\u8c61\u3092\u51fa\u529b\u3057\u305f\u3044\u5834\u5408"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Debug","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u958b\u767a\u6642\u306b\u30c7\u30d0\u30c3\u30b0\u60c5\u5831\u3092\u51fa\u529b\u3057\u305f\u3044\u5834\u5408"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u30ed\u30b0\u30ec\u30d9\u30eb\u306f\u6b21\u306e\u3088\u3046\u306a\u4f7f\u3044\u65b9\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u958b\u767a\u6642\u306fDebug\u4ee5\u4e0a\u3001\u672c\u756a\u904b\u7528\u6642\u306fInfo\u4ee5\u4e0a\u306e\u30ed\u30b0\u3092\u51fa\u529b\u3059\u308b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Error\u4ee5\u4e0a\u306e\u30ed\u30b0\u3092\u76e3\u8996\u3057\u3066\u901a\u77e5\u3059\u308b\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u30ed\u30b0\u30ab\u30c6\u30b4\u30ea\u306f\u30ed\u30b0\u3092\u5206\u985e\u3059\u308b\u540d\u524d\u3067\u3059\u3002\n\u6b21\u306e\u3088\u3046\u306a\u4f7f\u3044\u65b9\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30ed\u30b0\u51fa\u529b\u3092\u884c\u3046\u30af\u30e9\u30b9\u540d\u3092\u30ed\u30b0\u30ab\u30c6\u30b4\u30ea\u306b\u3057\u3066\u30ed\u30b0\u3092\u898b\u3066\u3069\u306e\u30af\u30e9\u30b9\u304b\u3089\u51fa\u529b\u3055\u308c\u305f\u306e\u304b\u5206\u304b\u308b\u3088\u3046\u306b\u3059\u308b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7279\u5b9a\u306e\u540d\u524d\u3092\u30ed\u30b0\u30ab\u30c6\u30b4\u30ea\u306b\u3057\u3066\u8907\u6570\u30af\u30e9\u30b9\u3067\u51fa\u529b\u3057\u3066\u3044\u308b\u30ed\u30b0\u3092\u5f8c\u304b\u3089\u8ffd\u8de1\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u969c\u5bb3\u306e\u518d\u73fe\u30c6\u30b9\u30c8\u306a\u3069\u3067\u7279\u5b9a\u30af\u30e9\u30b9\u306e\u307f\u30ed\u30b0\u30ec\u30d9\u30eb\u306b\u95a2\u4fc2\u306a\u304f\u5168\u3066\u306e\u30ed\u30b0\u3092\u51fa\u529b\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30ed\u30b0\u30ab\u30c6\u30b4\u30ea\u3092\u4f7f\u3063\u3066\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Logging\u306e\u4ed5\u69d8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u30ed\u30b0\u30ec\u30d9\u30eb\u3068\u30ed\u30b0\u30ab\u30c6\u30b4\u30ea\u3092\u95a2\u9023\u4ed8\u3051\u3066\u30ed\u30b0\u3092\u51fa\u529b\u3067\u304d\u307e\u3059\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u306f\u30ed\u30b0\u30ec\u30d9\u30eb\u306e\u307f\u3067\u5224\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306fInfo\u4ee5\u4e0a\u306e\u30ed\u30b0\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30ed\u30b0\u51fa\u529b\u306fUnity\u6a19\u6e96\u306eDebug\u30af\u30e9\u30b9\u3067\u884c\u3044\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u306b\u4f7f\u3046\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u30ed\u30b0\u66f8\u304d\u8fbc\u307f\uff08\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3084\u51fa\u529b\u5148\uff09\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.mermaid,{chart:"classDiagram\n\n    LoggingManager *-- ELogger\n    ELogger ..> ILogOutputChecker\n    ELogger ..> ILogWriter\n    ILogOutputChecker <|.. LogLevelLogOutputChecker\n    ILogWriter <|.. UnityDebugLogWriter\n\n    class LogLevel {\n        <<enumeration>>\n        Debug\n        Info\n        Warn\n        Error\n    }\n\n    class ELogger {\n        +IsXxx() bool\n        +LogXxx(message, exception) void\n    }\n\n    class LoggingManager {\n        +GetLogger(logCategory)$ ELogger\n        +Initialize(logLevel, checker, writer)$ void\n    }\n\n    class ILogOutputChecker {\n        <<interface>>\n        +Initialize(logLevel) void\n        +IsOutput(logLevel, logCategory) bool\n    }\n\n    class ILogWriter {\n        <<interface>>\n        +Log(logLevel, logCategory, message, exception) void\n    }\n\n    class LogLevelLogOutputChecker {\n    }\n\n    class UnityDebugLogWriter {\n    }"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Xxx"}),"\u306b\u306f\u30ed\u30b0\u30ec\u30d9\u30eb\uff08Error\u3001Warn\u3001Info\u3001Debug\uff09\u304c\u5165\u308a\u307e\u3059\u3002"]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Unity\u306eLogger\u3068Logging\u306eLogger\u304c\u91cd\u8907\u3057\u53c2\u7167\u304c\u66d6\u6627\u306b\u306a\u308b\u306e\u3092\u9632\u3050\u305f\u3081\u3001Logging\u306eLogger\u306b\u306fExtreal\u306e\u982d\u6587\u5b57\u306e",(0,i.jsx)(n.code,{children:"E"}),"\u3092\u4ed8\u3051\u3066\u3044\u307e\u3059\u3002"]})}),"\n",(0,i.jsx)(n.p,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30ed\u30b0\u51fa\u529b\u3059\u308b\u5834\u5408\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.mermaid,{chart:"sequenceDiagram\n    actor Application\n    Application->>LoggingManager: GetLogger(logCategory)\n    LoggingManager--\x3e>ELogger: new\n    LoggingManager--\x3e>Application: ELogger\n    Application->>ELogger: IsXxx()\n    ELogger->>ILogOutputChecker: IsOutput(logLevel, logCategory)\n    ELogger--\x3e>Application: bool\n    Application->>ELogger: LogXxx(message)\n    ELogger->>ILogOutputChecker: IsOutput(logLevel, logCategory)\n    ELogger->>ILogWriter: Log(logLevel, logCategory, message)"}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h3,{id:"package",children:"Package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"https://github.com/extreal-dev/Extreal.Core.Logging.git\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"\u4f9d\u5b58\u3059\u308b\u3082\u306e\u304c\u306a\u3044\u305f\u3081\u4f5c\u696d\u306f\u4e0d\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"settings",children:"Settings"}),"\n",(0,i.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u307e\u307e\u4f7f\u3046\u5834\u5408\u306f\u4ee5\u964d\u306e\u4f5c\u696d\u306f\u4e0d\u8981\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u521d\u671f\u5316\u51e6\u7406\u3067\u30ed\u30b0\u51fa\u529b\u304c\u5fc5\u8981\u306b\u306a\u308b\u30b1\u30fc\u30b9\u304c\u3042\u308b\u305f\u3081\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u3069\u306e\u6a5f\u80fd\u3088\u308a\u3082\u5148\u306b\u30ed\u30b0\u51fa\u529b\u3092\u521d\u671f\u5316\u3057\u3066\u5229\u7528\u3067\u304d\u308b\u72b6\u614b\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30ed\u30b0\u51fa\u529b\u306e\u521d\u671f\u5316\u306f\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8\u3068\u306a\u308bGameObject\u306eAwake\u3067\u884c\u3046\u306e\u304c\u30d9\u30b9\u30c8\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"LoggingManager\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066\u30ed\u30b0\u51fa\u529b\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class App : MonoBehaviour\n{\n    private static void InitializeApp()\n    {\n        const LogLevel logLevel = LogLevel.Debug;\n        LoggingManager.Initialize(logLevel: logLevel);\n    }\n\n    private void Awake()\n    {\n        InitializeApp();\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u958b\u767a\u6642\u3084\u672c\u756a\u904b\u7528\u6642\u306e\u8a2d\u5b9a\u5207\u308a\u66ff\u3048\u306b\u306f\u30b7\u30f3\u30dc\u30eb\u3092\u4f7f\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"#if DEV\nconst LogLevel logLevel = LogLevel.Debug;\n#elif PROD\nconst LogLevel logLevel = LogLevel.Info;\n#endif\nLoggingManager.Initialize(logLevel: logLevel);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"\u30ed\u30b0\u3092\u51fa\u529b\u3059\u308b",children:"\u30ed\u30b0\u3092\u51fa\u529b\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"ELogger\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066\u30ed\u30b0\u3092\u51fa\u529b\u3057\u307e\u3059\u3002\nELogger\u30af\u30e9\u30b9\u306fLoggingManager\u30af\u30e9\u30b9\u304b\u3089\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class SomethingService {\n\n    private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(SomethingService));\n\n    public void Something() {\n\n      Logger.LogInfo("Here we go!");\n\n      // something\n\n      Logger.LogInfo("It\'s over!!!");\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u30ed\u30b0\u306b\u51fa\u529b\u3059\u308b\u6587\u5b57\u5217\u4f5c\u6210\u306f\u51fa\u529b\u5834\u6240\u306b\u3088\u3063\u3066\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6027\u80fd\u52a3\u5316\u306b\u7e4b\u304c\u308b\u306e\u3067\u4e8b\u524d\u306b\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u3092\u884c\u3063\u3066\u304b\u3089\u30ed\u30b0\u51fa\u529b\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'if (Logger.IsDebug()) {\n    Logger.LogDebug($"Hello {name}!");\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u672c\u756a\u904b\u7528\u6642\u306b\u8a2d\u5b9a\u3059\u308b\u30ed\u30b0\u30ec\u30d9\u30eb\u304b\u3089\u5224\u65ad\u3057\u3066\u5e38\u306b\u51fa\u529b\u3055\u308c\u308b\u30ed\u30b0\u306b\u306f\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u306f\u4e0d\u8981\u3067\u3059\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u5909\u66f4\u3059\u308b",children:"\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u5909\u66f4\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"LoggingManager\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066\u30ed\u30b0\u30ec\u30d9\u30eb\u3092\u5909\u66f4\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"// Initialization script for Logging\nLoggingManager.Initialize(LogLevel.Debug);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u3092\u5909\u66f4\u3059\u308b",children:"\u30ed\u30b0\u51fa\u529b\u5224\u5b9a\u3092\u5909\u66f4\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"ILogOutputChecker\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u30ed\u30b0\u51fa\u529b\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002\nILogOutputChecker\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057LoggingManager\u30af\u30e9\u30b9\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Class that implements the ILogOutputChecker interface.\n// Adds special conditions to log output checks.\npublic class AppLogOutputChecker : ILogOutputChecker\n{\n    private LogLevel logLevel;\n\n    public void Initialize(LogLevel logLevel)\n    {\n        this.logLevel = logLevel;\n    }\n\n    public bool IsOutput(LogLevel logLevel, string logCategory)\n    {\n        return this.logLevel <= logLevel\n                || (logLevel == LogLevel.Debug && logCategory == "Debugger");\n    }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"// Initialization script for Logging\nLoggingManager.Initialize(checker: new AppLogOutputChecker());\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u30ed\u30b0\u66f8\u304d\u8fbc\u307f\u3092\u5909\u66f4\u3059\u308b",children:"\u30ed\u30b0\u66f8\u304d\u8fbc\u307f\u3092\u5909\u66f4\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"ILogWriter\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u30ed\u30b0\u3092\u66f8\u304d\u8fbc\u307f\u307e\u3059\u3002\nILogWriter\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057LoggingManager\u30af\u30e9\u30b9\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'// Class that implements the ILogWriter interface.\n// Changes the format of the log.\npublic class AppLogWriter : ILogWriter\n{\n    public void Log(LogLevel logLevel, string logCategory, string message, Exception exception = null)\n    {\n        switch (logLevel)\n        {\n            case LogLevel.Debug:\n                Debug.Log(LogFormat("o-o", logCategory, message, exception));\n                break;\n\n            case LogLevel.Info:\n                Debug.Log(LogFormat("(^_^)", logCategory, message, exception));\n                break;\n\n            case LogLevel.Warn:\n                Debug.LogWarning(LogFormat("(--;", logCategory, message, exception));\n                break;\n\n            case LogLevel.Error:\n                Debug.LogError(LogFormat("(*A*;", logCategory, message, exception));\n                break;\n\n            default:\n                throw new ArgumentOutOfRangeException(nameof(logLevel), "Undefined LogLevel was input");\n        }\n    }\n\n    private string LogFormat(string logLevel, string logCategory, string message, Exception exception = null)\n    {\n        var stringBuilder = new StringBuilder();\n        stringBuilder\n            .Append(logLevel)\n            .Append(" ")\n            .Append(logCategory)\n            .Append(": ")\n            .Append(message);\n        if (exception != null)\n        {\n            stringBuilder.Append("\\n---- Exception ----\\n").Append(exception).Append("\\n-------------------\\n");\n        }\n        return stringBuilder.ToString();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"// Initialization script for Logging\nLoggingManager.Initialize(writer: new AppLogWriter());\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.MN)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5788:(e,n,r)=>{r.d(n,{MN:()=>s});var i=r(1504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function g(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?g(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function t(e,n){if(null==e)return{};var r,i,o=function(e,n){if(null==e)return{};var r,i,o={},g=Object.keys(e);for(i=0;i<g.length;i++)r=g[i],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(i=0;i<g.length;i++)r=g[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=i.createContext({}),s=function(e){var n=i.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var r=e.components,o=e.mdxType,g=e.originalType,a=e.parentName,d=t(e,["components","mdxType","originalType","parentName"]),p=s(r),h=o,u=p["".concat(a,".").concat(h)]||p[h]||c[h]||g;return r?i.createElement(u,l(l({ref:n},d),{},{components:r})):i.createElement(u,l({ref:n},d))}));d.displayName="MDXCreateElement"}}]);