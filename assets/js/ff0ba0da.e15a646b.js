"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[5383],{4323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(9668),i=(n(6540),n(5680)),r=n(7443);const l={sidebar_position:6},p="Chat using WebRTC",o={unversionedId:"integration/chat.webrtc",id:"version-1.2.0/integration/chat.webrtc",title:"Chat using WebRTC",description:"What for?",source:"@site/versioned_docs/version-1.2.0/integration/chat.webrtc.md",sourceDirName:"integration",slug:"/integration/chat.webrtc",permalink:"/Extreal.Guide/integration/chat.webrtc",draft:!1,tags:[],version:"1.2.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"P2P using WebRTC",permalink:"/Extreal.Guide/integration/p2p.webrtc"},next:{title:"Sample Application",permalink:"/Extreal.Guide/category/sample-application"}},c={},g=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Unity",id:"unity",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Unity",id:"unity-1",level:4},{value:"npm",id:"npm",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Unity",id:"unity-2",level:4},{value:"npm",id:"npm-1",level:4},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"P2P\u306b\u3088\u308b\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046",id:"p2p\u306b\u3088\u308b\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046",level:3},{value:"P2P\u306b\u3088\u308b\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046",id:"p2p\u306b\u3088\u308b\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046",level:3}],s={toc:g},C="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(C,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"chat-using-webrtc"},"Chat using WebRTC"),(0,i.yg)("h2",{id:"what-for"},"What for?"),(0,i.yg)("p",null,"\u30b3\u30b9\u30c8\u3092\u3067\u304d\u308b\u3060\u3051\u6291\u3048\u3066\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u53d6\u308b\u624b\u6bb5\u3068\u3057\u3066P2P(Peer to Peer)\u304c\u3042\u308a\u307e\u3059\u3002"),(0,i.yg)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306fNative(C#)\u3068WebGL(JavaScript)\u5411\u3051\u306eP2P\u306b\u3088\u308b\u30c6\u30ad\u30b9\u30c8/\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"P2P\u306b\u3088\u308b\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.yg)("li",{parentName:"ul"},"P2P\u306b\u3088\u308b\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u304c\u3067\u304d\u307e\u3059\u3002")),(0,i.yg)("h2",{id:"architecture"},"Architecture"),(0,i.yg)("h3",{id:"unity"},"Unity"),(0,i.yg)(r.K,{chart:"classDiagram\n\n    TextChatClientProvider ..> TextChatClient\n    TextChatClient <|-- NativeTextChatClient\n    TextChatClient <|-- WebGLTextChatClient\n    VoiceChatClientProvider ..> VoiceChatClient\n    VoiceChatClientProvider ..> VoiceChatConfig\n    VoiceChatClient <|-- NativeVoiceChatClient\n    VoiceChatClient <|-- WebGLVoiceChatClient\n\n    class TextChatClientProvider {\n        +Provide(peerClient)$ TextChatClient\n    }\n    \n    class TextChatClient {\n        +OnMessageReceived IObservable\n        +Send(message) void\n        +Clear() void\n    }\n    \n    class NativeTextChatClient {\n    }\n    \n    class WebGLTextChatClient {\n    }\n\n    class VoiceChatClientProvider {\n        +Provide(peerClient, config)$ VoiceChatClient\n    }\n\n    class VoiceChatConfig {\n    }\n\n    class VoiceChatClient {\n        +OnMuted IObservable\n        +ToggleMute() void\n        +Clear() void\n    }\n    \n    class NativeVoiceChatClient {\n    }\n    \n    class WebGLVoiceChatClient {\n    }",mdxType:"Mermaid"}),(0,i.yg)("h3",{id:"javascript"},"JavaScript"),(0,i.yg)(r.K,{chart:"classDiagram\n\n    WebGLTextChatClient ..> WebGLHelper\n    WebGLHelper ..> TextChatClient\n    TextChatAdapter ..> TextChatClient\n    WebGLVoiceChatClient ..> WebGLHelper\n    WebGLHelper ..> VoiceChatClient\n    VoiceChatAdapter ..> VoiceChatClient\n    \n    class WebGLHelper {\n        <<C#>>\n    }\n\n    class WebGLTextChatClient {\n        <<C#>>\n    }\n\n    class WebGLVoiceChatClient {\n        <<C#>>\n    }\n\n    class TextChatAdapter {\n        <<TypeScript>>\n    }\n    \n    class TextChatClient {\n        <<TypeScript>>\n    }\n\n    class VoiceChatAdapter {\n        <<TypeScript>>\n    }\n    \n    class VoiceChatClient {\n        <<TypeScript>>\n    }",mdxType:"Mermaid"}),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("h3",{id:"package"},"Package"),(0,i.yg)("h4",{id:"unity-1"},"Unity"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC.git\n")),(0,i.yg)("h4",{id:"npm"},"npm"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"@extreal-dev/extreal.integration.chat.webrtc\n")),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.yg)("h4",{id:"unity-2"},"Unity"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Extreal.Guide/core/logging"},"Extreal.Core.Logging")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Extreal.Guide/core/common"},"Extreal.Core.Common")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Extreal.Guide/integration/web.common"},"Extreal.Integration.Web.Common")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/Extreal.Guide/integration/p2p.webrtc"},"Extreal.Integration.P2P.WebRTC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html"},"WebRTC")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,i.yg)("h4",{id:"npm-1"},"npm"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common"},"@extreal-dev/extreal.integration.web.common")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@extreal-dev/extreal.integration.p2p.webrtc"},"@extreal-dev/extreal.integration.p2p.webrtc"))),(0,i.yg)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u306f",(0,i.yg)("a",{parentName:"p",href:"../category/release"},"Release"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,i.yg)("h3",{id:"settings"},"Settings"),(0,i.yg)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/integration/p2p.webrtc"},"P2P.WebRTC"),"\u3092\u4f7f\u3063\u3066P2P\u3092\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/integration/p2p.webrtc#settings"},"P2P.WebRTC\u306eSettings"),"\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\nP2P.WebRTC\u3092\u8a2d\u5b9a\u3057\u305f\u4e0a\u3067\u6b21\u306e\u521d\u671f\u5316\u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.yg)("p",null,"\u5404Provider\u3092\u4f7f\u3063\u3066Client\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ClientControlScope : LifetimeScope\n{\n    protected override void Configure(IContainerBuilder builder)\n    {\n        var peerConfig = new PeerConfig("http://127.0.0.1:3010");\n        var peerClient = PeerClientProvider.Provide(peerConfig);\n        builder.RegisterComponent(peerClient);\n\n        var textChatClient = TextChatClientProvider.Provide(peerClient);\n        builder.RegisterComponent(textChatClient);\n\n        var voiceChatClient = VoiceChatClientProvider.Provide(peerClient);\n        builder.RegisterComponent(voiceChatClient);\n\n        builder.RegisterEntryPoint<ClientControlPresenter>();\n    }\n}\n')),(0,i.yg)("p",null,"WebGL\u3067\u4f7f\u3046\u5834\u5408\u306f\u3055\u3089\u306bJavaScript\u306e\u521d\u671f\u5316\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\n\u5404Adapter\u3092\u4f5c\u6210\u3057\u3066adapt\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'import { PeerAdapter } from "@extreal-dev/extreal.integration.p2p.webrtc";\nimport { TextChatAdapter, VoiceChatAdapter } from "@extreal-dev/extreal.integration.chat.webrtc";\n\nconst peerAdapter = new PeerAdapter();\npeerAdapter.adapt();\n\nconst textChatAdapter = new TextChatAdapter();\ntextChatAdapter.adapt(peerAdapter.getPeerClient);\n\nconst voiceChatAdapter = new VoiceChatAdapter();\nvoiceChatAdapter.adapt(peerAdapter.getPeerClient);\n')),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h3",{id:"p2p\u306b\u3088\u308b\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046"},"P2P\u306b\u3088\u308b\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046"),(0,i.yg)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306f",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/integration/p2p.webrtc"},"P2P.WebRTC"),"\u3092\u4f7f\u3063\u3066P2P\u3092\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002\nP2P\u306e\u63a5\u7d9a\u78ba\u7acb\u306f",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/integration/p2p.webrtc#p2p-webrtc-host-client"},"P2P.WebRTC\u306eAPI"),"\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.yg)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u6a5f\u80fd\u306fTextChatClient\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u306fSend\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"textChatClient.Send(message);\n")),(0,i.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u53d7\u4fe1\u306fOnMessageReceived\u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u30d1\u30e9\u30e1\u30fc\u30bf\u3068\u3057\u3066\u6587\u5b57\u5217\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u6e21\u3063\u3066\u304d\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"textChatClient.OnMessageReceived\n    .Subscribe(message =>\n    {\n        // do something\n    })\n    .AddTo(disposables);\n")),(0,i.yg)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u7d42\u4e86\u3059\u308b\u5834\u5408\u306fClear\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"textChatClient.Clear();\n")),(0,i.yg)("h3",{id:"p2p\u306b\u3088\u308b\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046"},"P2P\u306b\u3088\u308b\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046"),(0,i.yg)("p",null,"\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306f",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/integration/p2p.webrtc"},"P2P.WebRTC"),"\u3092\u4f7f\u3063\u3066P2P\u3092\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002\nP2P\u306e\u63a5\u7d9a\u78ba\u7acb\u306f",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/integration/p2p.webrtc#p2p-webrtc-host-client"},"P2P.WebRTC\u306eAPI"),"\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.yg)("p",null,"\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306e\u6a5f\u80fd\u306fVoiceChatClient\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.yg)("p",null,"\u30df\u30e5\u30fc\u30c8\u5207\u308a\u66ff\u3048\u306fToggleMute\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"voiceChatClient.ToggleMute();\n")),(0,i.yg)("p",null,"\u30df\u30e5\u30fc\u30c8\u5207\u308a\u66ff\u3048\u5f8c\u306e\u5024\uff08bool\uff09\u306fOnMuted\u30a4\u30d9\u30f3\u30c8\u3067\u53d7\u3051\u53d6\u308c\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"voiceChatClient.OnMuted\n    .Subscribe(muted =>\n    {\n        // do something\n    })\n    .AddTo(disposables);\n")),(0,i.yg)("p",null,"\u30df\u30e5\u30fc\u30c8\u306e\u521d\u671f\u5024\u3092\u6307\u5b9a\u3057\u305f\u3044\u5834\u5408\u306fVoiceChatConfig\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"var voiceChatConfig = new VoiceChatConfig(initialMute: false);\nvar voiceChatClient = VoiceChatClientProvider.Provide(peerClient, voiceChatConfig);\n")))}d.isMDXComponent=!0}}]);