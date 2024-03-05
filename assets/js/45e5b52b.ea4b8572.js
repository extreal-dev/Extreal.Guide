"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[1755],{378:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=a(9668),i=(a(6540),a(5680)),l=a(7443);const r={sidebar_position:9},o="P2P using WebRTC",p={unversionedId:"integration/p2p.webrtc",id:"integration/p2p.webrtc",title:"P2P using WebRTC",description:"What for?",source:"@site/docs/integration/p2p.webrtc.md",sourceDirName:"integration",slug:"/integration/p2p.webrtc",permalink:"/Extreal.Guide/next/integration/p2p.webrtc",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Multiplay using Netcode for GameObjects",permalink:"/Extreal.Guide/next/integration/multiplay.ngo"},next:{title:"SFU using OME",permalink:"/Extreal.Guide/next/integration/sfu.ome"}},g={},s=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Unity",id:"unity",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Unity",id:"unity-1",level:4},{value:"npm",id:"npm",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Unity",id:"unity-2",level:4},{value:"npm",id:"npm-1",level:4},{value:"Settings",id:"settings",level:3},{value:"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0",id:"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0",level:4},{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:4},{value:"Usage",id:"usage",level:2},{value:"\u30db\u30b9\u30c8/\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306eP2P\u63a5\u7d9a\u3092\u78ba\u7acb\u3059\u308b",id:"p2p-webrtc-host-client",level:3},{value:"P2P\u306e\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"p2p\u306e\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"Native(C#)\u306eP2P\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"nativec\u306ep2p\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"WebGL(JavaScript)\u306eP2P\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"webgljavascript\u306ep2p\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3092\u5197\u9577\u5316\u3059\u308b",id:"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3092\u5197\u9577\u5316\u3059\u308b",level:3}],c={toc:s},d="wrapper";function m(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"p2p-using-webrtc"},"P2P using WebRTC"),(0,i.yg)("h2",{id:"what-for"},"What for?"),(0,i.yg)("p",null,"\u30b3\u30b9\u30c8\u3092\u3067\u304d\u308b\u3060\u3051\u6291\u3048\u3066\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u7b49\u3067\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u53d6\u308b\u624b\u6bb5\u3068\u3057\u3066P2P(Peer to Peer)\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.yg)("p",null,"WebRTC\u3092\u6d3b\u7528\u3059\u308b\u3068\u6bd4\u8f03\u7684\u5bb9\u6613\u306bP2P\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u304c\u3001P2P\u306e\u63a5\u7d9a\u78ba\u7acb\u306f\u4f3c\u901a\u3063\u305f\u51e6\u7406\u306b\u306a\u308b\u306e\u3067\u5171\u901a\u6a5f\u80fd\u3068\u3057\u3066\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u3053\u306e\u5171\u901a\u6a5f\u80fd\u3092\u4f7f\u3046\u3053\u3068\u3067\u30c7\u30fc\u30bf\u30c1\u30e3\u30f3\u30cd\u30eb\u3084\u30e1\u30c7\u30a3\u30a2\u30b9\u30c8\u30ea\u30fc\u30e0\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b\u306e\u307f\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306eP2P\u3092\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"),(0,i.yg)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306fNative(C#)\u3068WebGL(JavaScript)\u5411\u3051\u306eP2P\u306e\u30d9\u30fc\u30b9\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u30db\u30b9\u30c8/\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306eP2P\u63a5\u7d9a\u3092\u78ba\u7acb\u3067\u304d\u307e\u3059\u3002"),(0,i.yg)("li",{parentName:"ul"},"P2P\u306e\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,i.yg)("li",{parentName:"ul"},"Native(C#)\u306eP2P\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,i.yg)("li",{parentName:"ul"},"WebGL(JavaScript)\u306eP2P\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3092\u5197\u9577\u5316\u3067\u304d\u307e\u3059\u3002")),(0,i.yg)("h2",{id:"architecture"},"Architecture"),(0,i.yg)("h3",{id:"unity"},"Unity"),(0,i.yg)(l.K,{chart:"classDiagram\n\n    PeerClientProvider ..> PeerClient\n    PeerClient <|-- NativePeerClient\n    PeerClient <|-- WebGLPeerClient\n    PeerClient ..> PeerConfig\n    PeerConfig <|-- WebGLPeerConfig\n\n    class PeerClientProvider {\n        +Provide(peerConfig)$ PeerClient\n    }\n    \n    class PeerClient {\n        <<abstract>>\n        +OnStarted IObservable\n        +OnConnectFailed IObservable\n        +OnDisconnected IObservable\n        +OnUserConnected IObservable\n        +OnUserDisconnected IObservable\n        +IsRunning bool\n        +StartHostAsync(name) void\n        +ListHostsAsync() List\n        +StartClientAsync(hostId) void\n        +Stop() void\n    }\n    \n    class PeerConfig {\n        +SignalingUrl string\n        +SocketOptions SocketIOOptions\n        +IceServerUrls List\n    }\n\n    class NativePeerClient {\n    }\n    \n    class WebGLPeerClient {\n    }\n\n    class WebGLPeerConfig {\n        +WebGLSocketOptions WebGLSocketOptions\n    }",mdxType:"Mermaid"}),(0,i.yg)("h3",{id:"javascript"},"JavaScript"),(0,i.yg)(l.K,{chart:"classDiagram\n\n    WebGLPeerClient ..> WebGLHelper  \n    PeerClient <.. WebGLHelper  \n    PeerAdapter ..> PeerClient\n\n    class WebGLPeerClient {\n        <<C#>>\n    }\n    \n    class WebGLHelper {\n        <<C#>>\n    }\n\n    class PeerAdapter {\n        <<TypeScript>>\n        +adapt() void\n    }\n    \n    class PeerClient {\n        <<TypeScript>>\n        +role PeerRole\n        +hostId string\n        +addPcCreateHook(hook) void\n        +addPcCloseHook(hook) void\n        +startHost(name, handle) void\n        +listHosts(handle) void\n        +startClientAsync(hostId) void\n        +stop() void\n        +getSocketId() string\n    }",mdxType:"Mermaid"}),(0,i.yg)("p",null,"P2P\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u304c\u5354\u8abf\u3057\u3066P2P\u63a5\u7d9a\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002\n\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u306fP2P\u63a5\u7d9a\u3092\u78ba\u7acb\u3059\u308b\u305f\u3081\u3001\u6b21\u306e\u51e6\u7406\u30d5\u30ed\u30fc\u3092\u60f3\u5b9a\u3057\u305f\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n\u3042\u308b\u30e6\u30fc\u30b6\u30fc\u304c\u30db\u30b9\u30c8\u306b\u306a\u308a\u3001\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u30db\u30b9\u30c8\u306b\u53c2\u52a0\u3059\u308b\u3068\u3001\u30db\u30b9\u30c8\u53ca\u3073\u30db\u30b9\u30c8\u306b\u65e2\u306b\u53c2\u52a0\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u3068P2P\u63a5\u7d9a\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002"),(0,i.yg)(l.K,{chart:'sequenceDiagram\n    actor Host\n    participant Signaling\n    actor Client\n    actor ClientsAlreadyJoined\n    Host->>Signaling: create host\n    alt Succeeded\n        Signaling--\x3e>Host: 200 "Host have been created"\n    else Host already exists\n        Signaling--\x3e>Host: 409 "Host already exists"\n    end\n    Client->>Signaling: list hosts\n    Signaling--\x3e>Client: 200 host list or empty list\n    Client->>Signaling: message "join"\n    Signaling--\x3e>Host: message "join"\n    Host->>Signaling: message "offer"\n    Signaling--\x3e>Client: message "offer"\n    Client->>Signaling: message "answer" \n    Signaling--\x3e>Host: message "answer"\n    Host->>Signaling: message "done"\n    Signaling--\x3e>Client: message "done"\n    Host->>Signaling: message "call me"\n    Signaling--\x3e>ClientsAlreadyJoined: message "call me"\n    ClientsAlreadyJoined->>Signaling: message "offer"\n    Signaling--\x3e>Client: message "offer"\n    Client->>Signaling: followed by "answer" to "done" but omitted',mdxType:"Mermaid"}),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u306fWebRTC\u306e\u7d4c\u8def\u60c5\u5831\u53ce\u96c6\u306b\u30ed\u30b8\u30c3\u30af\u304c\u5358\u7d14\u306aVanilla ICE\u3092\u63a1\u7528\u3057\u3066\u3044\u307e\u3059\u3002\nVanilla ICE\u3067\u306f\u5168\u3066\u306e\u7d4c\u8def\u60c5\u5831\u53ce\u96c6\u304c\u5b8c\u4e86\u3059\u308b\u306e\u3092\u5f85\u3064\u305f\u3081\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u74b0\u5883\u306b\u3088\u3063\u3066\u306f\u7d4c\u8def\u60c5\u5831\u53ce\u96c6\u306b\u9577\u3044\u6642\u9593\uff08\u4f8b\u3048\u307040\u79d2\uff09\u3092\u8981\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\n\u5168\u3066\u306e\u7d4c\u8def\u60c5\u5831\u53ce\u96c6\u3092\u5f85\u305f\u306a\u304f\u3066\u3082\u63a5\u7d9a\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u305f\u3081\u3001\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u306fVanilla ICE\u306b\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u8a2d\u3051\u3001\u77ed\u3044\u6642\u9593\u3067\u7d4c\u8def\u60c5\u5831\u53ce\u96c6\u3092\u6b62\u3081\u3066\u3044\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u306f5\u79d2\u3067\u3059\u3002PeerConfig\u3092\u4f7f\u3063\u3066\u3053\u306e\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002")),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("h3",{id:"package"},"Package"),(0,i.yg)("h4",{id:"unity-1"},"Unity"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC.git\n")),(0,i.yg)("h4",{id:"npm"},"npm"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"@extreal-dev/extreal.integration.p2p.webrtc\n")),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.yg)("h4",{id:"unity-2"},"Unity"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Extreal.Guide/next/core/logging"},"Extreal.Core.Logging")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Extreal.Guide/next/core/common"},"Extreal.Core.Common")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Extreal.Guide/next/integration/web.common"},"Extreal.Integration.Web.Common")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.collections@1.2/manual/index.html"},"Collections")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html"},"WebRTC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json"},"System.Text.Json")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/doghappy/socket.io-client-csharp"},"SocketIOClient"))),(0,i.yg)("h4",{id:"npm-1"},"npm"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common"},"@extreal-dev/extreal.integration.web.common")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/socket.io-client"},"socket.io-client"))),(0,i.yg)("h3",{id:"settings"},"Settings"),(0,i.yg)("h4",{id:"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0"},"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0"),(0,i.yg)("p",null,"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u306f",(0,i.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),"\u3067\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/tree/main/SignalingServer~"},"README"),"\u3092\u53c2\u7167\u3057\u3066\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u3092\u6e96\u5099\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.yg)("h4",{id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),(0,i.yg)("p",null,"PeerClientProvider\u3092\u4f7f\u3063\u3066PeerClient\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\nPeerClient\u306e\u4f5c\u6210\u6642\u306b\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u306eURL\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ClientControlScope : LifetimeScope\n{\n    protected override void Configure(IContainerBuilder builder)\n    {\n        var peerConfig = new PeerConfig("http://127.0.0.1:3010");\n        var peerClient = PeerClientProvider.Provide(peerConfig);\n        builder.RegisterComponent(peerClient);\n    }\n}\n')),(0,i.yg)("p",null,"WebGL\u3067\u4f7f\u3046\u5834\u5408\u306f\u3055\u3089\u306bJavaScript\u3067\u521d\u671f\u5316\u3092\u884c\u3044\u307e\u3059\u3002\nPeerAdapter\u3092\u4f5c\u6210\u3057\u3066adapt\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'import { PeerAdapter } from "@extreal-dev/extreal.integration.p2p.webrtc";\n\nconst peerAdapter = new PeerAdapter();\npeerAdapter.adapt();\n')),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"TypeScript\u3092\u4f7f\u3063\u305f\u958b\u767a\u74b0\u5883\u306f\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306e",(0,i.yg)("a",{parentName:"p",href:"https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/tree/main/Samples~/MVS/WebGLScripts~"},"\u30b5\u30f3\u30d7\u30eb"),"\u3092\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h3",{id:"p2p-webrtc-host-client"},"\u30db\u30b9\u30c8/\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306eP2P\u63a5\u7d9a\u3092\u78ba\u7acb\u3059\u308b"),(0,i.yg)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306fP2P\u63a5\u7d9a\u3092\u78ba\u7acb\u3059\u308b\u305f\u3081\u306b\u30db\u30b9\u30c8/\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u3053\u308c\u3089\u306e\u6a5f\u80fd\u306fPeerClient\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.yg)("p",null,"\u307e\u305a\u540d\u524d\u3092\u6307\u5b9a\u3057\u3066\u30db\u30b9\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n\u4f5c\u6210\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u304c\u30db\u30b9\u30c8\u306b\u306a\u308a\u307e\u3059\u3002\n\u540d\u524d\u304c\u91cd\u8907\u3057\u305f\u5834\u5408\u306fHostNameAlreadyExistsException\u304c\u30b9\u30ed\u30fc\u3055\u308c\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'await peerClient.StartHostAsync("host name");\n')),(0,i.yg)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\uff08\u30db\u30b9\u30c8\u306b\u53c2\u52a0\u3057\u305f\u3044\u30e6\u30fc\u30b6\u30fc\uff09\u306f\u30db\u30b9\u30c8\u306e\u4e00\u89a7\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"var hosts = await peerClient.ListHostsAsync();\n")),(0,i.yg)("p",null,"Id\u3068Name\u3092\u6301\u3063\u305fHost\u306e\u30ea\u30b9\u30c8\u304c\u8fd4\u308b\u306e\u3067\u3001\u3053\u3053\u3067\u53d6\u5f97\u3057\u305fHost\u306eId\u3092\u4f7f\u3063\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u30db\u30b9\u30c8\u306b\u53c2\u52a0\u3057\u307e\u3059\u3002\n\u53c2\u52a0\u4f9d\u983c\u3057\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u30db\u30b9\u30c8\u3068\u65e2\u306b\u30db\u30b9\u30c8\u306b\u53c2\u52a0\u3057\u3066\u3044\u308b\u4ed6\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068P2P\u63a5\u7d9a\u3092\u78ba\u7acb\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"await peerClient.StartClientAsync(hostId);\n")),(0,i.yg)("p",null,"\u30db\u30b9\u30c8\u3092\u505c\u6b62\u3059\u308b\u5834\u5408\u3084\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30db\u30b9\u30c8\u304b\u3089\u9000\u5ba4\u3059\u308b\u5834\u5408\u306fP2P\u63a5\u7d9a\u3092\u505c\u6b62\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"peerClient.Stop();\n")),(0,i.yg)("h3",{id:"p2p\u306e\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"},"P2P\u306e\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,i.yg)("p",null,"PeerClient\u306f\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"OnStarted",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30db\u30b9\u30c8\u307e\u305f\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u958b\u59cb\u3057\u305f\u76f4\u5f8c",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u30db\u30b9\u30c8",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u30db\u30b9\u30c8\u304c\u4f5c\u6210\u3055\u308c\u305f\u76f4\u5f8c"))),(0,i.yg)("li",{parentName:"ul"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u6b21\u306e\u6761\u4ef6\u3092\u5168\u3066\u6e80\u305f\u3057\u305f\u76f4\u5f8c",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},'\u30db\u30b9\u30c8\u304b\u3089"done"\u3092\u53d7\u4fe1'),(0,i.yg)("li",{parentName:"ul"},"\u30db\u30b9\u30c8\u3068\u306eIceConnectionState\u304cConnected\u307e\u305f\u306fCompleted\u306b\u306a\u308b"))))))),(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30e6\u30fc\u30b6\u30fc\u81ea\u8eab\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID"))),(0,i.yg)("li",{parentName:"ul"},"OnStartFailed",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30db\u30b9\u30c8\u307e\u305f\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u958b\u59cb\u5931\u6557\u3057\u305f\u76f4\u5f8c",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u958b\u59cb\u51e6\u7406\u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3057\u305f\u5834\u5408\u306b\u958b\u59cb\u5931\u6557\u3068\u5224\u65ad\u3057\u307e\u3059\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306f15\u79d2\u3067\u3059\u3002PeerConfig\u3092\u4f7f\u3063\u3066\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"))),(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,i.yg)("li",{parentName:"ul"},"OnConnectFailed",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30db\u30b9\u30c8\u307e\u305f\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u306b\u63a5\u7d9a\u3067\u304d\u306a\u304b\u3063\u305f\u76f4\u5f8c"),(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u63a5\u7d9a\u3067\u304d\u306a\u304b\u3063\u305f\u7406\u7531"))),(0,i.yg)("li",{parentName:"ul"},"OnDisconnected",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u306b\u63a5\u7d9a\u4e2d\u306e\u30db\u30b9\u30c8\u307e\u305f\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5207\u65ad\u3055\u308c\u305f\u76f4\u5f8c"),(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u5207\u65ad\u3055\u308c\u305f\u7406\u7531"))),(0,i.yg)("li",{parentName:"ul"},"OnUserConnecting",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u63a5\u7d9a\u3059\u308b\u76f4\u524d",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u63a5\u7d9a\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u540c\u58eb\u304c\u304a\u4e92\u3044\u306b\u30a4\u30d9\u30f3\u30c8\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\u305d\u306e\u305f\u3081\u65b0\u305f\u306b\u63a5\u7d9a\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u65e2\u306b\u63a5\u7d9a\u3057\u3066\u3044\u308b\u5168\u3066\u306e\u30e6\u30fc\u30b6\u30fc\u6570\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"))),(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u63a5\u7d9a\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID"))),(0,i.yg)("li",{parentName:"ul"},"OnUserDisconnecting",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u5207\u65ad\u3059\u308b\u76f4\u524d"),(0,i.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u5207\u65ad\u3059\u308b\u30e6\u30fc\u30b6\u30fc\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID")))),(0,i.yg)("h3",{id:"nativec\u306ep2p\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"},"Native(C#)\u306eP2P\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"PeerConnection\u306eCreate/Close\u6642\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3067\u3082\u3001\u51e6\u7406\u304c\u7d99\u7d9a\u3055\u308c\u307e\u3059\u3002")),(0,i.yg)("p",null,"PeerClient\u306fP2P\u63a5\u7d9a\u306e\u958b\u59cb\u6642\u3068\u7d42\u4e86\u6642\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u308b\u30d5\u30c3\u30af\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"peerClient.AddPcCreateHook((id, isOffer, rtcPeerConnection) =>\n{\n    // do something\n});\n\npeerClient.AddPcCloseHook((id) =>\n{\n    // do something\n});\n")),(0,i.yg)("p",null,"\u3053\u308c\u3089\u306e\u30d5\u30c3\u30af\u3092\u4f7f\u3063\u3066\u30c7\u30fc\u30bf\u30c1\u30e3\u30f3\u30cd\u30eb\u3084\u30e1\u30c7\u30a3\u30a2\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u64cd\u4f5c\u3057\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u6a5f\u80fd\u3092P2P\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\n\u30c7\u30fc\u30bf\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306e\u5b9f\u88c5\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'#if !UNITY_WEBGL || UNITY_EDITOR\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Text;\nusing Extreal.Core.Logging;\nusing Unity.WebRTC;\n\nnamespace Extreal.Integration.P2P.WebRTC.MVS.ClientControl\n{\n    public class NativeDataChannelClient : DataChannelClient\n    {\n        private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(NativeDataChannelClient));\n\n        private static readonly string Label = "sample";\n\n        private readonly Dictionary<string, RTCDataChannel> dcDict;\n\n        public NativeDataChannelClient(NativePeerClient peerClient)\n        {\n            dcDict = new Dictionary<string, RTCDataChannel>();\n            peerClient.AddPcCreateHook(CreatePc);\n            peerClient.AddPcCloseHook(ClosePc);\n        }\n\n        private void CreatePc(string id, bool isOffer, RTCPeerConnection pc)\n        {\n            if (dcDict.ContainsKey(id))\n            {\n                return;\n            }\n\n            if (isOffer)\n            {\n                var dc = pc.CreateDataChannel(Label);\n                HandleDc(id, dc);\n            }\n            else\n            {\n                pc.OnDataChannel += (dc) => HandleDc(id, dc);\n            }\n        }\n\n        private void HandleDc(string id, RTCDataChannel dc)\n        {\n            if (dc.Label != Label)\n            {\n                return;\n            }\n\n            if (Logger.IsDebug())\n            {\n                Logger.LogDebug($"New DataChannel: id={id} label={dc.Label}");\n            }\n\n            dcDict.Add(id, dc);\n            dc.OnMessage = message => Logger.LogDebug(Encoding.UTF8.GetString(message));\n        }\n\n        private void ClosePc(string id)\n        {\n            if (!dcDict.TryGetValue(id, out var dc))\n            {\n                return;\n            }\n            dc.Close();\n            dcDict.Remove(id);\n        }\n\n        public override void Clear()\n        {\n            dcDict.Keys.ToList().ForEach(ClosePc);\n            dcDict.Clear();\n        }\n    }\n}\n#endif\n')),(0,i.yg)("h3",{id:"webgljavascript\u306ep2p\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"},"WebGL(JavaScript)\u306eP2P\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"PeerConnection\u306eCreate/Close\u6642\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u3067\u3082\u3001\u51e6\u7406\u304c\u7d99\u7d9a\u3055\u308c\u307e\u3059\u3002")),(0,i.yg)("p",null,"WebGL(JavaScript)\u306e\u5834\u5408\u306fC#\u3068JavaScript\u306e\u9023\u643a\u304c\u5fc5\u8981\u306b\u306a\u308b\u305f\u3081\u3001Native(C#)\u306b\u6bd4\u3079\u308b\u3068\u5c11\u3057\u5927\u639b\u304b\u308a\u306a\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002\n\u4ed5\u7d44\u307f\u306fNative(C#)\u3068\u540c\u3058\u3067\u30d5\u30c3\u30af\u3092\u4f7f\u3063\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092P2P\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,i.yg)("p",null,"\u30c7\u30fc\u30bf\u30c1\u30e3\u30f3\u30cd\u30eb\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u306e\u5b9f\u88c5\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002\nPeerClientProvider\u3068\u3044\u3046\u95a2\u6570\u304b\u3089PeerClient\u3092\u53d6\u5f97\u3059\u308b\u90e8\u5206\u304c\u5927\u304d\u304f\u7570\u306a\u308a\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'import { PeerClientProvider } from "@extreal-dev/extreal.integration.p2p.webrtc";\n\nclass DataChannelClient {\n    private readonly label: string = "sample";\n    private readonly isDebug: boolean;\n    private readonly dcMap: Map<string, RTCDataChannel>;\n    private readonly getPeerClient: PeerClientProvider;\n\n    constructor(getPeerClient: PeerClientProvider) {\n        this.isDebug = true;\n        this.dcMap = new Map();\n        this.getPeerClient = getPeerClient;\n        this.getPeerClient().addPcCreateHook(this.createPc);\n        this.getPeerClient().addPcCloseHook(this.closePc);\n    }\n\n    private createPc = (id: string, isOffer: boolean, pc: RTCPeerConnection) => {\n        if (this.dcMap.has(id)) {\n            return;\n        }\n\n        if (isOffer) {\n            const dc = pc.createDataChannel(this.label);\n            this.handleDc(id, dc);\n        } else {\n            pc.addEventListener("datachannel", (event) => this.handleDc(id, event.channel));\n        }\n    };\n\n    private handleDc = (id: string, dc: RTCDataChannel) => {\n        if (dc.label !== this.label) {\n            return;\n        }\n\n        if (this.isDebug) {\n            console.log(`New DataChannel: id=${id} label=${dc.label}`);\n        }\n\n        this.dcMap.set(id, dc);\n    };\n\n    private closePc = (id: string) => {\n        const dc = this.dcMap.get(id);\n        if (!dc) {\n            return;\n        }\n        dc.close();\n        this.dcMap.delete(id);\n    };\n\n    public clear = () => {\n        [...this.dcMap.keys()].forEach(this.closePc);\n        this.dcMap.clear();\n    };\n}\n\nexport { DataChannelClient };\n')),(0,i.yg)("p",null,"PeerClientProvider\u306f",(0,i.yg)("a",{parentName:"p",href:"#settings"},"Settings"),"\u3067\u767b\u5834\u3057\u305fPeerAdapter\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002\nPeerAdapter\u306f\u5185\u90e8\u3067PeerClient\u3092\u4fdd\u6301\u3057\u3001C#\u3068JavaScript\u306e\u76f8\u4e92\u4f5c\u7528\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.yg)("p",null,"WebGL\u3067P2P\u3092\u884c\u3046\u5834\u5408\u306f\u307e\u305aPeerAdapter\u3092\u4f5c\u6210\u3057\u3066adapt\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\n\u305d\u3057\u3066PeerAdapter\u306egetPeerClient\u95a2\u6570\u3092\u4f7f\u3063\u3066\u5148\u307b\u3069\u306eDataChannelClient\u306e\u3088\u3046\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,i.yg)("p",null,"\u3053\u3053\u3067\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u51e6\u7406\u3092\u547c\u3073\u51fa\u3059\u30bf\u30a4\u30df\u30f3\u30b0\u304c\u91cd\u8981\u306b\u306a\u308a\u307e\u3059\u3002\nC#\u306ePeerClient\u3088\u308a\u5148\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u8ffd\u52a0\u3057\u305f\u51e6\u7406\uff08\u4eca\u56de\u3067\u3042\u308c\u3070DataChannelClient\uff09\u304c\u521d\u671f\u5316\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nC#\u306ePeerClient\u306fPeerClientProvider\u306eProvide\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u3057\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u521d\u671f\u5316\u3055\u308c\u307e\u3059\u3002"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/next/integration/web.common"},"Web.Common"),"\u3092\u4f7f\u3063\u3066C#\u304b\u3089\u306e\u547c\u3073\u51fa\u3057\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'import { addAction } from "@extreal-dev/extreal.integration.web.common";\nimport { PeerAdapter } from "@extreal-dev/extreal.integration.p2p.webrtc";\nimport { DataChannelClient } from "./DataChannelClient";\n\nconst peerAdapter = new PeerAdapter();\npeerAdapter.adapt();\n\nlet dataChannelClient: DataChannelClient;\naddAction("start", () => dataChannelClient = new DataChannelClient(peerAdapter.getPeerClient));\naddAction("clear", () => dataChannelClient.clear);\n')),(0,i.yg)("p",null,"C#\u306e\u547c\u3073\u51fa\u3057\u5074\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/next/integration/web.common"},"Web.Common"),"\u306eWebGLHelper\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'using Extreal.Integration.Web.Common;\n\nnamespace Extreal.Integration.P2P.WebRTC.MVS.ClientControl\n{\n    public class WebGLDataChannelClient : DataChannelClient\n    {\n        public WebGLDataChannelClient() => WebGLHelper.CallAction("start");\n\n        public override void Clear() => WebGLHelper.CallAction("clear");\n    }\n}\n')),(0,i.yg)("h3",{id:"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3092\u5197\u9577\u5316\u3059\u308b"},"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3092\u5197\u9577\u5316\u3059\u308b"),(0,i.yg)("p",null,"\u30b7\u30b0\u30ca\u30ea\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u306b\u306f",(0,i.yg)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),"\u3092\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002\nSocket.IO\u30b5\u30fc\u30d0\u30fc\u3092\u8907\u6570\u306b\u3057\u3066\u5197\u9577\u5316\u3059\u308b\u5834\u5408\u306f\u30b9\u30c6\u30a3\u30c3\u30ad\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u304c\u63a8\u5968\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u8a73\u7d30\u306f",(0,i.yg)("a",{parentName:"p",href:"https://socket.io/docs/v4/using-multiple-nodes/"},"Using multiple nodes"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.yg)("p",null,"WebGL\u3067\u4f7f\u3046\u5834\u5408\u306b\u30b9\u30c6\u30a3\u30c3\u30ad\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001PeerClient\u306e\u4f5c\u6210\u6642\u306b\u8ffd\u52a0\u306e\u8a2d\u5b9a\u304c\u5fc5\u8981\u3067\u3059\u3002\nWebGLSocketOptions\u3092\u6307\u5b9a\u3057\u305fWebGLPeerConfig\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30b9\u30c6\u30a3\u30c3\u30ad\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ClientControlScope : LifetimeScope\n{\n    protected override void Configure(IContainerBuilder builder)\n    {\n        var peerConfig = new PeerConfig("http://127.0.0.1:3010");\n        var webGLPeerConfig = new WebGLPeerConfig(\n            peerConfig,\n            new WebGLSocketOptions(withCredentials: true)\n        );\n        var peerClient = PeerClientProvider.Provide(webGLPeerConfig);\n        builder.RegisterComponent(peerClient);\n    }\n}\n')),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"C#\u3067\u4f7f\u3046\u5834\u5408\u306f\u8a2d\u5b9a\u306e\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002")))}m.isMDXComponent=!0}}]);