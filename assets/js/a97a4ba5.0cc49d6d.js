"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[8547],{7745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>N,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=t(7462),r=(t(7294),t(3905)),i=t(1839);const l={sidebar_position:2},o="Multiplay using Netcode for GameObjects",s={unversionedId:"integration/multiplay.ngo",id:"integration/multiplay.ngo",title:"Multiplay using Netcode for GameObjects",description:"What for?",source:"@site/docs/integration/multiplay.ngo.md",sourceDirName:"integration",slug:"/integration/multiplay.ngo",permalink:"/Extreal.Guide/next/integration/multiplay.ngo",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Chat using Vivox",permalink:"/Extreal.Guide/next/integration/chat.vivox"},next:{title:"Sample Application",permalink:"/Extreal.Guide/next/category/sample-application"}},p={},g=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"NGO\u306e\u30b5\u30fc\u30d0\u30fc\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b",id:"ngo\u306e\u30b5\u30fc\u30d0\u30fc\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"NGO\u306e\u30b5\u30fc\u30d0\u30fc\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"ngo\u306e\u30b5\u30fc\u30d0\u30fc\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"NGO\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b",id:"ngo\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"NGO\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"ngo\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",level:3},{value:"NGO\u304c\u63d0\u4f9b\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u4ee5\u5916\u306eNetworkTransport\u306b\u5bfe\u5fdc\u3059\u308b",id:"int-ngo-nt",level:3}],c={toc:g};function N(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multiplay-using-netcode-for-gameobjects"},"Multiplay using Netcode for GameObjects"),(0,r.kt)("h2",{id:"what-for"},"What for?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs-multiplayer.unity3d.com/netcode/current/about/index.html"},"Netcode for GameObjects"),"\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u3044\u3084\u3059\u304f\u3059\u308b\u30e9\u30c3\u30d1\u30fc\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Extreal\u3067\u306fNetcode for GameObjects\u306e\u3053\u3068\u3092NGO\u3001NGO\u3092\u30e9\u30c3\u30d7\u3057\u3066\u3044\u308b\u3053\u306e\u6a5f\u80fd\u3092NGO\u30e9\u30c3\u30d1\u30fc\u3068\u547c\u3076\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"NGO\u3067\u306fNetworkManager\u3068\u3044\u30461\u3064\u306e\u30af\u30e9\u30b9\u3067\u30b5\u30fc\u30d0\u30fc\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\nNetworkManager\u3092\u305d\u306e\u307e\u307e\u4f7f\u3046\u5834\u5408\u306f\u5e38\u306b\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3092\u610f\u8b58\u3057\u305f\u5b9f\u88c5\u304c\u5fc5\u8981\u3068\u306a\u308a\u6df7\u4e71\u3057\u3084\u3059\u3044\u306e\u3067\u3001NGO\u30e9\u30c3\u30d1\u30fc\u3067\u306f\u30b5\u30fc\u30d0\u30fc\u5411\u3051\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306b\u5225\u3005\u306e\u30af\u30e9\u30b9\u3068\u3057\u3066NgoServer\u3068NgoClient\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067NGO\u30e9\u30c3\u30d1\u30fc\u3092\u4f7f\u3046\u3053\u3068\u3067NGO\u306e\u5c0e\u5165\u304c\u30b9\u30e0\u30fc\u30ba\u306b\u306a\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"NGO\u30e9\u30c3\u30d1\u30fc\u306fNGO\u3092\u4f7f\u3044\u3084\u3059\u304f\u3057\u307e\u3059\u304c\u3001NGO\u3092\u77e5\u3089\u306a\u304f\u3066\u3082NGO\u30e9\u30c3\u30d1\u30fc\u3060\u3051\u77e5\u3063\u3066\u3044\u308c\u3070\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u3092\u5b9f\u73fe\u3067\u304d\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\nNGO\u30e9\u30c3\u30d1\u30fc\u306fNGO\u3092\u305d\u306e\u307e\u307e\u4f7f\u3046\u5834\u5408\u306b\u4f7f\u3044\u306b\u304f\u3044\u70b9\u3084\u8db3\u308a\u306a\u3044\u6a5f\u80fd\u3092\u88dc\u3044\u307e\u3059\u304c\u3001\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u306e\u51e6\u7406\u306fNGO\u306b\u79fb\u8b72\u3057\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001NGO\u30e9\u30c3\u30d1\u30fc\u3092\u4f7f\u3046\u306b\u306fNGO\u3092\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u524d\u63d0\u3067\u3059\u3002\nNGO\u3092\u77e5\u3089\u306a\u3044\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"/learning/intro#multiplayer"},"Learning"),"\u3092\u53c2\u7167\u3057\u3066NGO\u306b\u3064\u3044\u3066\u5b66\u7fd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u306e\u30ac\u30a4\u30c9\u306fNGO\u3092\u77e5\u3063\u3066\u3044\u308b\u524d\u63d0\u3067\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u3088\u304f\u3042\u308b\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8981\u4ef6\u306b\u5bfe\u3059\u308bNGO\u30e9\u30c3\u30d1\u30fc\u306e\u5b9f\u88c5\u4f8b\u306f",(0,r.kt)("a",{parentName:"p",href:"/category/sample-application"},"\u30b5\u30f3\u30d7\u30eb\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),"\u3067\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u73fe\u6642\u70b9\u3067\u306f\u6b21\u306e\u8981\u4ef6\u3092\u63d0\u4f9b\u6e08\u307f\u3067\u3059\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u30e6\u30fc\u30b6\u30fc\u304c\u9078\u3093\u3060\u30a2\u30d0\u30bf\u30fc\u3067\u30d7\u30ec\u30a4\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u9593\u306e\u6700\u5927\u4eba\u6570\u3092\u8d85\u3048\u305f\u5834\u5408\u306f\u5165\u5ba4\u3067\u304d\u306a\u3044\u3088\u3046\u306b\u3059\u308b")),(0,r.kt)("p",{parentName:"admonition"},"\u4eca\u5f8c\u3001\u6b21\u306e\u8981\u4ef6\u3092\u8ffd\u52a0\u3057\u3066\u3044\u304f\u4e88\u5b9a\u3067\u3059\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e88\u671f\u3057\u306a\u3044\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5207\u65ad\u6642\u306b\u518d\u63a5\u7d9a\u3059\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u9593\u306e\u6700\u5927\u4eba\u6570\u3092\u8d85\u3048\u305f\u5834\u5408\u306f\u5f85\u6a5f\u4eba\u6570\u307e\u3067\u5f85\u6a5f\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f85\u6a5f\u4e2d\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u975e\u8868\u793a\u3001\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u306f\u898b\u3048\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u9000\u5ba4\u3057\u3066\u9806\u756a\u304c\u56de\u3063\u3066\u304f\u308b\u3068\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u306b\u53c2\u52a0\u3067\u304d\u308b"))),(0,r.kt)("li",{parentName:"ul"},"\u30aa\u30d5\u30e9\u30a4\u30f3\u3067\u3082\u30aa\u30f3\u30e9\u30a4\u30f3\u6642\u3068\u540c\u3058\u3088\u3046\u306b\u30a2\u30d0\u30bf\u30fc\u3092\u30d7\u30ec\u30a4\u3067\u304d\u308b"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30d0\u30bf\u30fc\u306b\u7269\u3092\u6301\u305f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u308b"))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,"NGO\u30e9\u30c3\u30d1\u30fc\u306e\u4ed5\u69d8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NGO\u306e\u30b5\u30fc\u30d0\u30fc\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"NGO\u306e\u30b5\u30fc\u30d0\u30fc\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"NGO\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"NGO\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"NGO\u304c\u63d0\u4f9b\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u4ee5\u5916\u306eNetworkTransport\u306b\u3082\u5bfe\u5fdc\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"NGO\u30e9\u30c3\u30d1\u30fc\u306fNGO\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308b2\u3064\u306e\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\uff08Unity Transport\u3001 UNet Transport\uff09\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u3053\u308c\u30892\u3064\u306e\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u5bfe\u5fdc\u304c\u4e0d\u8981\u3067\u3059\u3002\nNGO\u304c\u63d0\u4f9b\u3057\u3066\u3044\u306a\u3044\u65b0\u305f\u306a\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306fNgoClient\u304c\u4f7f\u3046IConnectionSetter\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u5bfe\u5fdc\u65b9\u6cd5\u306f",(0,r.kt)("a",{parentName:"p",href:"/integration/multiplay.ngo#int-ngo-nt"},"NGO\u304c\u63d0\u4f9b\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u4ee5\u5916\u306eNetworkTransport\u306b\u5bfe\u5fdc\u3059\u308b"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5b89\u5b9a\u3057\u305f\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3084\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3092\u62c5\u4fdd\u3057\u3084\u3059\u3044\u305f\u3081\u3001NGO\u30e9\u30c3\u30d1\u30fc\u306fNGO\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u3068\u3057\u3066\u5c02\u7528\u30b5\u30fc\u30d0\u30fc\u306e\u4f7f\u7528\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002\nNGO\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306b\u3064\u3044\u3066\u306f",(0,r.kt)("a",{parentName:"p",href:"https://docs-multiplayer.unity3d.com/netcode/current/reference/glossary/network-topologies"},"Network Topologies")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002\n\u5c02\u7528\u30b5\u30fc\u30d0\u30fc\u306e\u4f7f\u7528\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u308b\u305f\u3081\u3001NGO\u30e9\u30c3\u30d1\u30fc\u306f\u30db\u30b9\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u306f\u63d0\u4f9b\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u30db\u30b9\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u3044\u305f\u3044\u5834\u5408\u306fNetworkManager\u3092\u76f4\u63a5\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)(i.G,{chart:"classDiagram\n\n    NetworkManager <.. NgoServer\n    NetworkManager <.. NgoClient\n    NgoClient ..> NgoConfig\n    NgoClient ..> IConnectionSetter\n    IConnectionSetter <|.. UnityTransportConnectionSetter\n    IConnectionSetter <|.. UNetTransportConnectionSetter\n    IDisposable <|.. NgoServer\n    IDisposable <|.. NgoClient\n\n    class NetworkManager {\n        <<NGO>>\n    }\n\n    class NgoServer {\n        +OnServerStarted IObservable\n        +OnServerStopping IObservable\n        +OnClientConnected IObservable\n        +OnClientDisconnecting IObservable\n        +OnClientRemoving IObservable\n        +ConnectedClients IReadOnlyDictionary\n        +NgoServer(networkManager)\n        +StartServerAsync(cancellationToken) void\n        +StopServerAsync() void\n        +SetConnectionApprovalCallback(connectionApprovalCallback) void\n        +RemoveClient(clientId) bool\n        +SendMessageToClients(clientIds, messageName, messageStream, networkDelivery) void\n        +SendMessageToAllClients(messageName, messageStream, networkDelivery) void\n        +RegisterMessageHandler(messageName, messageHandler) void\n        +UnregisterMessageHandler(messageName) void\n        +SetVisibilityDelegate(visibilityDelegate) void\n        +SpawnWithServerOwnership(prefab, position, rotation, parent, worldPositionStays) GameObject\n        +SpawnWithClientOwnership(ownerClientId, prefab, position, rotation, parent, worldPositionStays) GameObject\n        +SpawnAsPlayerObject(ownerClientId, prefab, position, rotation, parent, worldPositionStays) GameObject\n    }\n\n    class NgoClient {\n        +OnConnected IObservable\n        +OnDisconnecting IObservable\n        +OnUnexpectedDisconnected IObservable\n        +OnConnectionApprovalRejected IObservable\n        +NgoClient(networkManager)\n        +AddConnectionSetter(connectionSetter) void\n        +ConnectAsync(ngoConfig, cancellationToken) bool\n        +DisconnectAsync() void\n        +SendMessage(messageName, messageStream, networkDelivery) void\n        +RegisterMessageHandler(messageName, messageHandler) void\n        +UnregisterMessageHandler(messageName) void\n    }\n\n    class NgoConfig {\n        +Address string\n        +Port ushort\n        +ConnectionData byte[]\n        +Timeout TimeSpan\n        +NgoConfig(address, port, connectionData, timeout)\n    }\n\n    class IConnectionSetter {\n        <<interface>>\n        +TargetType Type\n        +Set(networkTransport, ngoConfig)\n    }\n\n    class UnityTransportConnectionSetter {\n    }\n\n    class UNetTransportConnectionSetter {\n    }\n\n    class IDisposable {\n        <<system>>\n    }",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"package"},"Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO.git\n")),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"NGO\u30e9\u30c3\u30d1\u30fc\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/core/logging"},"Extreal.Core.Logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs-multiplayer.unity3d.com/netcode/current/about/index.html"},"Netcode for GameObjects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,r.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u306f",(0,r.kt)("a",{parentName:"p",href:"/category/release"},"Release"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"settings"},"Settings"),(0,r.kt)("p",null,"NgoServer\u3068NgoClient\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002\nNgoServer\u3068NgoClient\u306e\u521d\u671f\u5316\u306b\u306fNetworkManager\u304c\u5fc5\u8981\u3067\u3059\u3002\nVContainer\u3092\u4f7f\u3063\u3066NetworkManager\u3092NgoServer\u3068NgoClient\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"NGO\u306eNetworkManager\u306fGameObject\u306b\u30a2\u30bf\u30c3\u30c1\u3057\u3066\u521d\u671f\u5316\u3057\u3066\u3044\u308b\u3082\u306e\u3068\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MultiplayServerScope : LifetimeScope\n{\n    [SerializeField] private NetworkManager networkManager;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(networkManager);\n        builder.Register<NgoServer>(Lifetime.Singleton);\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MultiplayControlScope : LifetimeScope\n{\n    [SerializeField] private NetworkManager networkManager;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(networkManager);\n        builder.Register<NgoClient>(Lifetime.Singleton);\n    }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"NetworkManager\u306f\u30b5\u30fc\u30d0\u30fc\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u540c\u3058\u8a2d\u5b9a\u306e\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001Prefab\u306b\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3067\u540c\u3058\u3082\u306e\u3092\u4f7f\u3046\u3088\u3046\u306b\u3057\u307e\u3059\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"NGO\u304c\u63d0\u4f9b\u3057\u3066\u3044\u306a\u3044\u65b0\u305f\u306a\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u4f7f\u3046\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"/integration/multiplay.ngo#int-ngo-nt"},"NGO\u304c\u63d0\u4f9b\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u4ee5\u5916\u306eNetworkTransport\u3092\u4f7f\u7528\u3059\u308b"),"\u3092\u53c2\u7167\u3057\u3066\u5bfe\u5fdc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\nNGO\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308b2\u3064\u306e\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\uff08Unity Transport\u3001 UNet Transport\uff09\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u4f55\u3082\u4f5c\u696d\u304c\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"ngo\u306e\u30b5\u30fc\u30d0\u30fc\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b"},"NGO\u306e\u30b5\u30fc\u30d0\u30fc\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b"),(0,r.kt)("p",null,"NGO\u306e\u30b5\u30fc\u30d0\u30fc\u5411\u3051\u306e\u6a5f\u80fd\u306fNgoServer\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u3053\u3053\u3067\u306fNgoServer\u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002\nNgoServer\u306f\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u306e\u51e6\u7406\u3092NetworkManager\u306b\u79fb\u8b72\u3057\u3066\u3044\u308b\u306e\u3067\u5404\u6a5f\u80fd\u306e\u8a73\u7d30\u306fNGO\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u306e\u958b\u59cb\u306fStartServerAsync\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.StartServerAsync().Forget();\n")),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u306e\u505c\u6b62\u306fStopServerAsync\u3067\u884c\u3044\u307e\u3059\u304c\u3001NgoServer\u306eDispose\u3067StopServerAsync\u3092\u547c\u3093\u3067\u3044\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u7d42\u4e86\u6642\u306fNgoServer\u306eDispose\u304c\u547c\u3070\u308c\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5bfe\u5fdc\u3059\u308b\u51e6\u7406\u306fRegisterMessageHandler\u3067\u767b\u9332\u3057\u307e\u3059\u3002\n\u767b\u9332\u306e\u89e3\u9664\u306fUnregisterMessageHandler\u3067\u884c\u3044\u307e\u3059\u3002\n\u6b21\u306e\u30b3\u30fc\u30c9\u3067\u306f\u30b5\u30fc\u30d0\u30fc\u306e\u958b\u59cb\u6642\u3068\u7d42\u4e86\u6642\u306b\u767b\u9332\u3068\u767b\u9332\u89e3\u9664\u3092\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.OnServerStarted.Subscribe(_ =>\n{\n    ngoServer.RegisterMessageHandler(MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);\n}).AddTo(compositeDisposable);\n\nngoServer.OnServerStopping.Subscribe(_ =>\n{\n    ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());\n}).AddTo(compositeDisposable);\n")),(0,r.kt)("p",null,"\u4efb\u610f\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u30b9\u30dd\u30fc\u30f3\u3057\u305f\u3044\u5834\u5408\u3084\u30d7\u30ec\u30a4\u30e4\u30fc\u306ePrefab\u3092\u52d5\u7684\u306b\u5207\u308a\u66ff\u3048\u305f\u3044\u5834\u5408\u306fSpawnAsPlayerObject\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u4e0a\u8a18\u306eRegisterMessageHandler\u3067\u767b\u9332\u3057\u3066\u3044\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5bfe\u5fdc\u3059\u308b\u51e6\u7406\u3067\u3059\u3002\n\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u5bfe\u5fdc\u3057\u3066\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u30b9\u30dd\u30fc\u30f3\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'private async void PlayerSpawnMessageHandler(ulong clientId, FastBufferReader messageStream)\n{\n    if (Logger.IsDebug())\n    {\n        Logger.LogDebug($"{MessageName.PlayerSpawn}: {clientId}");\n    }\n    messageStream.ReadValueSafe(out string avatarAssetName);\n    var result = Addressables.LoadAssetAsync<GameObject>(avatarAssetName);\n    var playerPrefab = await result.Task;\n    ngoServer.SpawnAsPlayerObject(clientId, playerPrefab);\n}\n')),(0,r.kt)("h3",{id:"ngo\u306e\u30b5\u30fc\u30d0\u30fc\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"},"NGO\u306e\u30b5\u30fc\u30d0\u30fc\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"NgoServer\u306f\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OnServerStarted",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3057\u305f\u76f4\u5f8c"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,r.kt)("li",{parentName:"ul"},"OnServerStopping",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b5\u30fc\u30d0\u30fc\u3092\u505c\u6b62\u3059\u308b\u76f4\u524d"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,r.kt)("li",{parentName:"ul"},"OnClientConnected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u63a5\u7d9a\u3057\u305f\u76f4\u5f8c"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u63a5\u7d9a\u3057\u305f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID"))),(0,r.kt)("li",{parentName:"ul"},"OnClientDisconnecting",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5207\u65ad\u3059\u308b\u76f4\u524d"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u5207\u65ad\u3059\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID"))),(0,r.kt)("li",{parentName:"ul"},"OnClientRemoving",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3092\u524a\u9664\u3059\u308b\u76f4\u524d"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u524a\u9664\u3059\u308b\u30af\u30e9\u30a4\u30a2\u30f3\u30c8ID")))),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u306e\u958b\u59cb\u6642\u3068\u7d42\u4e86\u6642\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.OnServerStarted.Subscribe(_ =>\n{\n    ngoServer.RegisterMessageHandler(MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);\n}).AddTo(compositeDisposable);\n\nngoServer.OnServerStopping.Subscribe(_ =>\n{\n    ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());\n}).AddTo(compositeDisposable);\n")),(0,r.kt)("h3",{id:"ngo\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b"},"NGO\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b"),(0,r.kt)("p",null,"NGO\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5411\u3051\u306e\u6a5f\u80fd\u306fNgoClient\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u3053\u3053\u3067\u306fNgoClient\u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002\nNgoClient\u306f\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u306e\u51e6\u7406\u3092NetworkManager\u306b\u79fb\u8b72\u3057\u3066\u3044\u308b\u306e\u3067\u5404\u6a5f\u80fd\u306e\u8a73\u7d30\u306fNGO\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u63a5\u7d9a\u306fConnectAsync\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u63a5\u7d9a\u60c5\u5831\u306fNgoConfig\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u4e2d\u306fNgoClient\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u518d\u5229\u7528\u3059\u308b\u60f3\u5b9a\u306e\u305f\u3081\u3001\u63a5\u7d9a\u6642\u306b\u6bce\u56de\u63a5\u7d9a\u60c5\u5831\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var ngoConfig = new NgoConfig();\nngoClient.ConnectAsync(ngoConfig).Forget();\n")),(0,r.kt)("p",null,"NgoConfig\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002\ntimeout\u304cnull\u306e\u5834\u5408\u306f10\u79d2\u306b\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002\n\u63a5\u7d9a\u51e6\u7406\u3067\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593\u304c\u7d4c\u904e\u3059\u308b\u3068TimeoutException\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public NgoConfig\n(\n    string address = "127.0.0.1",\n    ushort port = 7777,\n    byte[] connectionData = null,\n    TimeSpan timeout = null\n)\n')),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u5207\u65ad\u306fDisconnectAsync\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.DisconnectAsync().Forget();\n")),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u3078\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u306fSendMessage\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u6b21\u306e\u30b3\u30fc\u30c9\u306f\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u5f8c\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u30b9\u30dd\u30fc\u30f3\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.OnConnected.Subscribe(_ =>\n{\n    var messageStream = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);\n    ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);\n}).AddTo(compositeDisposable);\n")),(0,r.kt)("h3",{id:"ngo\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"},"NGO\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"NgoClient\u306f\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OnConnected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3057\u305f\u76f4\u5f8c"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,r.kt)("li",{parentName:"ul"},"OnDisconnecting",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u5207\u65ad\u3059\u308b\u76f4\u524d"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,r.kt)("li",{parentName:"ul"},"OnUnexpectedDisconnected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u4e88\u671f\u3057\u3066\u3044\u306a\u3044\u30b5\u30fc\u30d0\u30fc\u5207\u65ad\u304c\u767a\u751f\u3057\u305f\u76f4\u5f8c"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,r.kt)("li",{parentName:"ul"},"OnConnectionApprovalRejected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u63a5\u7d9a\u627f\u8a8d\u304c\u62d2\u5426\u3055\u308c\u305f\u76f4\u5f8c"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057")))),(0,r.kt)("p",null,"\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3057\u305f\u76f4\u5f8c\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.OnConnected.Subscribe(_ =>\n{\n    var messageStream = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);\n    ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);\n}).AddTo(compositeDisposable);\n")),(0,r.kt)("h3",{id:"int-ngo-nt"},"NGO\u304c\u63d0\u4f9b\u3059\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u4ee5\u5916\u306eNetworkTransport\u306b\u5bfe\u5fdc\u3059\u308b"),(0,r.kt)("p",null,"NGO\u306f\u901a\u4fe1\u306b\u4f7f\u7528\u3059\u308b\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u5909\u66f4\u3067\u304d\u307e\u3059\u3002\nNGO\u30e9\u30c3\u30d1\u30fc\u306fNGO\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308b2\u3064\u306e\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\uff08Unity Transport\u3001 UNet Transport\uff09\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u3053\u308c\u30892\u3064\u306e\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u5bfe\u5fdc\u304c\u4e0d\u8981\u3067\u3059\u3002\nNGO\u304c\u63d0\u4f9b\u3057\u3066\u3044\u306a\u3044\u65b0\u305f\u306a\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306fNgoClient\u304c\u4f7f\u3046IConnectionSetter\u3092\u5909\u66f4\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u5404\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u306e\u5b9f\u88c5\u306b\u304a\u3044\u3066\u63a5\u7d9a\u60c5\u5831\u3092\u4fdd\u6301\u3059\u308b\u90e8\u5206\u306f\u5171\u901a\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u5dee\u7570\u3092\u5438\u53ce\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u5404\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u306e\u5b9f\u88c5\u5dee\u7570\u3092\u57cb\u3081\u308b\u305f\u3081\u306bIConnectionSetter\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u65b0\u305f\u306a\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306fIConnectionSetter\u3092\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3092\u4f5c\u308a\u3001NgoClient\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\nUnityTransport\u306b\u5bfe\u3059\u308bIConnectionSetter\u306e\u5b9f\u88c5\u3092\u793a\u3059\u306e\u3067IConnectionSetter\u5b9f\u88c5\u6642\u306e\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class UnityTransportConnectionSetter : IConnectionSetter\n{\n    public Type TargetType => typeof(UnityTransport);\n\n    public void Set(NetworkTransport networkTransport, NgoConfig ngoConfig)\n    {\n        var unityTransport = networkTransport as UnityTransport;\n        unityTransport.ConnectionData.Address = ngoConfig.Address.Trim();\n        unityTransport.ConnectionData.Port = ngoConfig.Port;\n        unityTransport.ConnectionData.ServerListenAddress = ngoConfig.Address.Trim();\n    }\n}\n")),(0,r.kt)("p",null,"NgoClient\u306eAddConnectionSetter\u3067\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.AddConnectionSetter(new UnityTransportConnectionSetter());\n")))}N.isMDXComponent=!0}}]);