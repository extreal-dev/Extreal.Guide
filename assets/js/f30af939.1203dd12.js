"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[7724],{6949:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var i=a(9668),t=(a(6540),a(5680)),g=a(7443);const s={sidebar_position:5},l="Messaging",r={unversionedId:"integration/messaging",id:"version-1.3.0/integration/messaging",title:"Messaging",description:"What for?",source:"@site/versioned_docs/version-1.3.0/integration/messaging.md",sourceDirName:"integration",slug:"/integration/messaging",permalink:"/Extreal.Guide/integration/messaging",draft:!1,tags:[],version:"1.3.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Common for Web",permalink:"/Extreal.Guide/integration/web.common"},next:{title:"Multiplay using Messaging",permalink:"/Extreal.Guide/integration/multiplay.messaging"}},o={},p=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0",level:3},{value:"Socket.IO",id:"socketio",level:3},{value:"Unity",id:"unity",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0-1",level:4},{value:"Socket.IO",id:"socketio-1",level:4},{value:"Unity",id:"unity-1",level:5},{value:"npm",id:"npm",level:5},{value:"Dependencies",id:"dependencies",level:3},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0-2",level:4},{value:"Socket.IO",id:"socketio-2",level:4},{value:"Unity",id:"unity-2",level:5},{value:"npm",id:"npm-1",level:5},{value:"Settings",id:"settings",level:3},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0",level:4},{value:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3",level:4},{value:"Usage",id:"usage",level:2},{value:"\u30b0\u30eb\u30fc\u30d7\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3084\u308a\u3068\u308a\u3059\u308b",id:"messaging-among-group",level:3},{value:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u53d7\u4fe1\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5236\u5fa1\uff08\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\uff09\u3059\u308b",id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u53d7\u4fe1\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5236\u5fa1\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\u3059\u308b",level:3},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"client-event",level:3}],u={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,i.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"messaging"},"Messaging"),(0,t.yg)("h2",{id:"what-for"},"What for?"),(0,t.yg)("p",null,"\u4eba\u3005\u304c\u96c6\u307e\u3063\u3066\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u304d\u308b\u30d0\u30fc\u30c1\u30e3\u30eb\u7a7a\u9593\u3067\u306f\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u3084\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306a\u3069\u3001\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u3063\u3066\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3084\u308a\u3068\u308a\u3057\u305f\u3044\u5834\u5408\u304c\u591a\u304f\u3042\u308a\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u305d\u3053\u3067Extreal\u3067\u306f\u30b0\u30eb\u30fc\u30d7\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3084\u308a\u3068\u308a\u3067\u304d\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u5b9f\u88c5\u3068\u3057\u3066",(0,t.yg)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),"\u3092\u4f7f\u3063\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\nSocket.IO\u306e\u3088\u3046\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u306b\u4f7f\u7528\u3059\u308b\u30b5\u30fc\u30d0\u3092\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0\u3068\u547c\u3076\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,t.yg)("h2",{id:"specification"},"Specification"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u30b0\u30eb\u30fc\u30d7\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3084\u308a\u3068\u308a\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u53d7\u4fe1\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5236\u5fa1\uff08\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\uff09\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("li",{parentName:"ul"},"Socket.IO\u306b\u3088\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u304c\u3067\u304d\u307e\u3059\u3002",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Native(C#)\u3068WebGL(JavaScript)\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002")))),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u3092\u5b9f\u73fe\u3059\u308b\u969b\u306a\u3069\u3001\u77ed\u6642\u9593\u3067\u591a\u304f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3084\u308a\u53d6\u308a\u3059\u308b\u5834\u5408\u306f\u901a\u4fe1\u8ca0\u8377\u306e\u9ad8\u3044\u72b6\u614b\u304c\u7d9a\u304d\u307e\u3059\u3002\n\u305d\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u901a\u4fe1\u8ca0\u8377\u3092\u4f4e\u6e1b\u3067\u304d\u307e\u3059\u3002")),(0,t.yg)("h2",{id:"architecture"},"Architecture"),(0,t.yg)("h3",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0"),(0,t.yg)(g.K,{chart:"classDiagram\n\n    DisposableBase <|-- MessagingClient\n    DisposableBase <|-- QueuingMessagingClient\n    QueuingMessagingClient --\x3e MessagingClient\n    \n    class MessagingClient {\n        <<abstract>>\n        +OnJoined IObservable\n        +OnLeaving IObservable\n        +OnUnexpectedLeft IObservable\n        +OnJoiningApprovalRejected IObservable\n        +OnClientJoined IObservable\n        +OnClientLeaving IObservable\n        +OnMessageReceived IObservable\n\n        +ListGroupsAsync() List\n        +JoinAsync(connectionConfig) void\n        +LeaveAsync() void\n        +SendMessageAsync(message, to) void\n    }\n\n    class QueuingMessagingClient {\n        +OnJoined IObservable\n        +OnLeaving IObservable\n        +OnUnexpectedLeft IObservable\n        +OnJoiningApprovalRejected IObservable\n        +OnClientJoined IObservable\n        +OnClientLeaving IObservable\n\n        +QueuingMessagingClient(messagingClient)\n\n        +EnqueueRequest(message, to) void\n        +ResponseQueueCount() int\n        +DequeueResponse() from, message\n\n        +ListGroupsAsync() List\n        +JoinAsync(connectionConfig) void\n        +LeaveAsync() void\n    }\n    \n    class DisposableBase {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,t.yg)("h3",{id:"socketio"},"Socket.IO"),(0,t.yg)("h4",{id:"unity"},"Unity"),(0,t.yg)(g.K,{chart:"classDiagram\n    SocketIOMessagingClientProvider ..> SocketIOMessagingClient\n    SocketIOMessagingClient <|-- NativeSocketIOMessagingClient\n    SocketIOMessagingClient <|-- WebGLSocketIOMessagingClient\n    NativeSocketIOMessagingClient ..> SocketIOMessagingConfig\n    WebGLSocketIOMessagingClient ..> SocketIOMessagingConfig\n    MessagingClient <|-- SocketIOMessagingClient\n    DisposableBase <|-- SocketIOMessagingClient\n\n    class SocketIOMessagingClientProvider {\n        +Provide(messagingConfig)$ SocketIOMessagingClient\n    }\n    \n    class SocketIOMessagingClient {\n        <<abstract>>\n        +SocketIOMessagingClient()\n    }\n    \n    class SocketIOMessagingConfig {\n        +Url string\n        +SocketIOOptions SocketIOOptions\n        \n        +SocketIOMessagingConfig(url, socketIOOptions)\n    }\n    \n    class NativeSocketIOMessagingClient {\n        +NativeSocketIOMessagingClient(messagingConfig) \n    }\n    \n    class WebGLSocketIOMessagingClient {\n        +WebGLSocketIOMessagingClient(messagingConfig)\n    }\n\n    class MessagingClient {\n        <<extreal, abstract>>\n    }\n\n    class DisposableBase {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,t.yg)("h4",{id:"javascript"},"JavaScript"),(0,t.yg)(g.K,{chart:"classDiagram\n\n    WebGLSocketIOMessagingClient ..> WebGLHelper\n    WebGLHelper ..> SocketIOMessagingClient\n    SocketIOMessagingClientAdapter ..> SocketIOMessagingClient\n    \n    class WebGLHelper {\n        <<C#>>\n    }\n\n    class WebGLSocketIOMessagingClient {\n        <<C#>>\n    }\n\n    class SocketIOMessagingClientAdapter {\n        <<TypeScript>>\n    }\n    \n    class SocketIOMessagingClient {\n        <<TypeScript>>\n    }",mdxType:"Mermaid"}),(0,t.yg)("h2",{id:"installation"},"Installation"),(0,t.yg)("h3",{id:"package"},"Package"),(0,t.yg)("h4",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0-1"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Messaging.git\n")),(0,t.yg)("h4",{id:"socketio-1"},"Socket.IO"),(0,t.yg)("h5",{id:"unity-1"},"Unity"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO.git\n")),(0,t.yg)("h5",{id:"npm"},"npm"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"@extreal-dev/extreal.integration.messaging.socket.io\n")),(0,t.yg)("h3",{id:"dependencies"},"Dependencies"),(0,t.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,t.yg)("h4",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0-2"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/core/logging"},"Extreal.Core.Logging")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/core/common"},"Extreal.Core.Common")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,t.yg)("h4",{id:"socketio-2"},"Socket.IO"),(0,t.yg)("h5",{id:"unity-2"},"Unity"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/core/logging"},"Extreal.Core.Logging")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/core/common"},"Extreal.Core.Common")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/integration/web.common"},"Extreal.Integration.Web.Common")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/doghappy/socket.io-client-csharp"},"SocketIOClient")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://www.newtonsoft.com/json"},"Newtonsoft.Json"))),(0,t.yg)("h5",{id:"npm-1"},"npm"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common"},"@extreal-dev/extreal.integration.web.common")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/socket.io-client"},"socket.io-client"))),(0,t.yg)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u306f",(0,t.yg)("a",{parentName:"p",href:"../../category/release"},"Release"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("h3",{id:"settings"},"Settings"),(0,t.yg)("h4",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0"),(0,t.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0\u306f",(0,t.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),"\u3067\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u30b0\u30eb\u30fc\u30d7\u3067\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u306b\u306fSocket.IO\u306e",(0,t.yg)("a",{parentName:"p",href:"https://socket.io/docs/v4/rooms/"},"Rooms"),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0\u3092\u7acb\u3061\u4e0a\u3052\u308b\u969b\u306b1\u30b0\u30eb\u30fc\u30d7\u3042\u305f\u308a\u306e\u6700\u5927\u4eba\u6570\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\u6700\u5927\u4eba\u6570\u3092\u8d85\u3048\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30b0\u30eb\u30fc\u30d7\u306b\u53c2\u52a0\u3057\u3088\u3046\u3068\u3057\u305f\u5834\u5408\u306f\u305d\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u53c2\u52a0\u3092\u62d2\u5426\u3057\u307e\u3059\u3002\n1\u30b0\u30eb\u30fc\u30d7\u3042\u305f\u308a\u306e\u6700\u5927\u4eba\u6570\u306f",(0,t.yg)("a",{parentName:"p",href:"https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO/tree/main/MessagingServer~/compose.yaml"},"compose.yaml"),"\u30d5\u30a1\u30a4\u30eb\u5185\u306eMESSAGING_MAX_CAPACITY\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},'environment:\n    # If "on" is logging, otherwise is not. In production, set it to "off".\n    MESSAGING_LOGGING: ${MESSAGING_LOGGING:-on}\n    # Capacity of one room\n    MESSAGING_MAX_CAPACITY: ${MESSAGING_MAX_CAPACITY:-80} # Change here\n    # In production, change it to suit the environment.\n    MESSAGING_CORS_ORIGIN: ${MESSAGING_CORS_ORIGIN:-*}\n')),(0,t.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0\u306e\u7acb\u3061\u4e0a\u3052\u65b9\u306f",(0,t.yg)("a",{parentName:"p",href:"https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO/tree/main/MessagingServer~"},"README"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3092\u5897\u3084\u3057\u3066\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8\u3057\u305f\u3044\u5834\u5408\u306fSocket.IO\u304c\u63d0\u4f9b\u3059\u308bRedis Adapter\u3092\u4f7f\u3046\u3053\u3068\u3067\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002\u8a73\u7d30\u306f",(0,t.yg)("a",{parentName:"p",href:"https://socket.io/docs/v4/redis-adapter/"},"Redis Adapter"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,t.yg)("h4",{id:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"},"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),(0,t.yg)("p",null,"SocketIOMessagingClientProvider\u3092\u4f7f\u3063\u3066SocketIOMessagingClient\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ClientControlScope : LifetimeScope\n{\n    protected override void Configure(IContainerBuilder builder)\n    {\n        var messagingConfig = new SocketIOMessagingConfig("url", socketIOOptions);\n        var messagingClient = SocketIOMessagingClientProvider.Provide(messagingConfig);\n        builder.RegisterComponent<MessagingClient>(messagingClient);\n\n        builder.RegisterEntryPoint<ClientControlPresenter>();\n    }\n}\n')),(0,t.yg)("p",null,"WebGL\u3067\u4f7f\u3046\u5834\u5408\u3001JavaScript\u306e\u521d\u671f\u5316\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\nSocketIOMessagingAdapter\u3092\u4f5c\u6210\u3057\u3066adapt\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-typescript"},'import { SocketIOMessagingAdapter } from "@extreal-dev/extreal.integration.messaging.socket.io";\n\nconst messagingAdapter = new SocketIOMessagingAdapter();\nmessagingAdapter.adapt();\n')),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)("h3",{id:"messaging-among-group"},"\u30b0\u30eb\u30fc\u30d7\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3084\u308a\u3068\u308a\u3059\u308b"),(0,t.yg)("p",null,"\u30b0\u30eb\u30fc\u30d7\u3067\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u3084\u308a\u3068\u308a\u3059\u308b\u6a5f\u80fd\u306fMessagingClient\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u65e2\u5b58\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u53c2\u52a0\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30b0\u30eb\u30fc\u30d7\u4e00\u89a7\u3092ListGroupsAsync\u3067\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"var groups = await messagingClient.ListGroupsAsync();\n")),(0,t.yg)("p",null,"Group\u306e\u30ea\u30b9\u30c8\u304c\u8fd4\u308b\u306e\u3067\u3001\u3053\u3053\u3067\u53d6\u5f97\u3057\u305fGroup\u3092\u4f7f\u3063\u3066\u30b0\u30eb\u30fc\u30d7\u306b\u53c2\u52a0\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"var group = /* Select group from groups */;\nvar joiningConfig = new MessagingJoiningConfig(group.Name);\nawait messagingClient.JoinAsync(joiningConfig);\n")),(0,t.yg)("p",null,"\u65b0\u3057\u304f\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u65e2\u5b58\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u542b\u307e\u308c\u306a\u3044\u30b0\u30eb\u30fc\u30d7\u540d\u3092\u6307\u5b9a\u3057\u3066\u53c2\u52a0\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'var joiningConfig = new MessagingJoiningConfig("NewGroupName");\nawait messagingClient.JoinAsync(joiningConfig);\n')),(0,t.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306b\u306fSendMessageAsync\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u30b0\u30eb\u30fc\u30d7\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u305f\u3044\u5834\u5408\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u307f\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'await messagingClient.SendMessageAsync("message");\n')),(0,t.yg)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306e\u7279\u5b9a\u30e1\u30f3\u30d0\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u305f\u3044\u5834\u5408\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u52a0\u3048\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'await messagingClient.SendMessageAsync("message", toClientId);\n')),(0,t.yg)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306b\u53c2\u52a0\u3057\u3066\u3044\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306eID\u306fOnClientJoined\u306e\u30a4\u30d9\u30f3\u30c8\u30d1\u30e9\u30e1\u30fc\u30bf\u304b\u3089\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"private readonly List<string> joinedClients = new List<string>();\nmessagingClient.OnClientJoined\n    .Subscribe(joinedClients.Add)\n")),(0,t.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u53d7\u4fe1\u306b\u306fOnMessageReceived\u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"messagingClient.OnMessageReceived\n    .Subscribe(HandleReceivedMessage)\n    .AddTo(disposables);\n\nprivate void HandleReceivedMessage((string clientId, string message) tuple)\n{\n  // Handle message\n}\n")),(0,t.yg)("p",null,"\u30b0\u30eb\u30fc\u30d7\u304b\u3089\u51fa\u308b\u5834\u5408\u306fLeaveAsync\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"await messagingClient.LeaveAsync();\n")),(0,t.yg)("h3",{id:"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u53d7\u4fe1\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5236\u5fa1\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\u3059\u308b"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u53d7\u4fe1\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5236\u5fa1\uff08\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\uff09\u3059\u308b"),(0,t.yg)("p",null,"\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\u6a5f\u80fd\u306fQueuingMessagingClient\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002\nQueuingMessagingClient\u306fMessagingClient\u306e\u30e9\u30c3\u30d1\u30fc\u30af\u30e9\u30b9\u3067\u3059\u3002\n\u30ad\u30e5\u30fc\u30a4\u30f3\u30b0\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306fQueuingMessagingClient\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ClientControlScope : LifetimeScope\n{\n    protected override void Configure(IContainerBuilder builder)\n    {\n        var messagingConfig = new SocketIOMessagingConfig("url", socketIOOptions);\n        var messagingClient = SocketIOMessagingClientProvider.Provide(messagingConfig);\n        var queuingMessagingClient = new QueuingMessagingClient(messagingClient);\n        builder.RegisterComponent(queuingMessagingClient);\n\n        builder.RegisterEntryPoint<ClientControlPresenter>();\n    }\n}\n')),(0,t.yg)("p",null,"QueuingMessagingClient\u3067\u306f\u9001\u4fe1\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u53d7\u4fe1\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u305d\u308c\u305e\u308c\u30ea\u30af\u30a8\u30b9\u30c8\u30ad\u30e5\u30fc\u3068\u30ec\u30b9\u30dd\u30f3\u30b9\u30ad\u30e5\u30fc\u306b\u4fdd\u6301\u3059\u308b\u3053\u3068\u3067\u9001\u53d7\u4fe1\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5236\u5fa1\u3057\u3066\u3044\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u305f\u3044\u5834\u5408\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u30ad\u30e5\u30fc\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u305f\u3044\u5834\u5408\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u307f\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'await queuingMessagingClient.EnqueueRequest("message");\n')),(0,t.yg)("p",null,"\u30b0\u30eb\u30fc\u30d7\u306e\u7279\u5b9a\u30e1\u30f3\u30d0\u30fc\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u305f\u3044\u5834\u5408\u306f\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u52a0\u3048\u3066\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'await queuingMessagingClient.EnqueueRequest("message", toClientId);\n')),(0,t.yg)("p",null,"\u53d7\u4fe1\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\u30ec\u30b9\u30dd\u30f3\u30b9\u30ad\u30e5\u30fc\u304b\u3089\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\n\u30ec\u30b9\u30dd\u30f3\u30b9\u30ad\u30e5\u30fc\u306b\u5165\u3063\u3066\u3044\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u500b\u6570\u306fResponseQueueCount\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"while (queuingMessagingClient.ResponseQueueCount() > 0)\n{\n    (var from, var message) = queuingMessagingClient.DequeueResponse();\n    // Handle message\n}\n")),(0,t.yg)("h3",{id:"client-event"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,t.yg)("p",null,"MessagingClient/QueuingMessagingClient\u306f\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"OnJoined",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b0\u30eb\u30fc\u30d7\u306b\u53c2\u52a0\u3057\u305f\u76f4\u5f8c"),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u81ea\u5206\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID"))),(0,t.yg)("li",{parentName:"ul"},"OnLeaving",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b0\u30eb\u30fc\u30d7\u304b\u3089\u629c\u3051\u308b\u76f4\u524d"),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,t.yg)("li",{parentName:"ul"},"OnUnexpectedLeft",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u4e88\u671f\u3057\u3066\u3044\u306a\u3044\u30b5\u30fc\u30d0\u30fc\u5207\u65ad\u304c\u767a\u751f\u3057\u305f\u76f4\u5f8c"),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u5207\u65ad\u3055\u308c\u305f\u7406\u7531"))),(0,t.yg)("li",{parentName:"ul"},"OnJoiningApprovalRejected",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u53c2\u52a0\u304c\u62d2\u5426\u3055\u308c\u305f\u76f4\u5f8c"),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,t.yg)("li",{parentName:"ul"},"OnClientJoined",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u53c2\u52a0\u3057\u305f\u76f4\u5f8c"),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u53c2\u52a0\u3057\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID"))),(0,t.yg)("li",{parentName:"ul"},"OnClientLeaving",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u629c\u3051\u308b\u76f4\u524d"),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u5207\u65ad\u3059\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID"))),(0,t.yg)("li",{parentName:"ul"},"OnMessageReceived",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3057\u305f\u76f4\u5f8c"),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306eID\u304a\u3088\u3073\u30e1\u30c3\u30bb\u30fc\u30b8")))))}m.isMDXComponent=!0}}]);