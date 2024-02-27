"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[7772],{9339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(9668),a=(t(6540),t(5680)),i=t(7443);const o={sidebar_position:2},s="Multiplay using Netcode for GameObjects",l={unversionedId:"integration/multiplay.ngo",id:"version-1.2.0/integration/multiplay.ngo",title:"Multiplay using Netcode for GameObjects",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.2.0/integration/multiplay.ngo.md",sourceDirName:"integration",slug:"/integration/multiplay.ngo",permalink:"/Extreal.Guide/en/integration/multiplay.ngo",draft:!1,tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Chat using Vivox",permalink:"/Extreal.Guide/en/integration/chat.vivox"},next:{title:"Asset Workflow using Addressables",permalink:"/Extreal.Guide/en/integration/asset-workflow.addressables"}},g={},p=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"NGO wrapper",id:"ngo-wrapper",level:3},{value:"WebRtcTransport",id:"webrtctransport",level:3},{value:"Unity",id:"unity",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Unity",id:"unity-1",level:4},{value:"npm",id:"npm",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Unity",id:"unity-2",level:4},{value:"npm",id:"npm-1",level:4},{value:"Settings",id:"settings",level:3},{value:"NGO wrapper",id:"ngo-wrapper-1",level:4},{value:"WebRtcTransport",id:"mulitplay-ngo-settings-webrtctransport",level:4},{value:"Usage",id:"usage",level:2},{value:"Use features for NGO servers/hosts",id:"mulitplay-ngo-server-host",level:3},{value:"Add a processing triggered by NGO server/host state",id:"add-a-processing-triggered-by-ngo-serverhost-state",level:3},{value:"Use features for NGO clients",id:"use-features-for-ngo-clients",level:3},{value:"Reconnect when NGO client communication is disconnected",id:"multiplay-ngo-retry",level:3},{value:"Add a processing triggered by NGO client state",id:"multiplay-ngo-event",level:3},{value:"Support non-default NetworkTransport provided by NGO",id:"int-ngo-nt",level:3},{value:"Multiplayer by P2P(Host/Client)",id:"mulitplay-ngo-p2p",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"multiplay-using-netcode-for-gameobjects"},"Multiplay using Netcode for GameObjects"),(0,a.yg)("h2",{id:"what-for"},"What for?"),(0,a.yg)("p",null,"We provide a wrapper that makes ",(0,a.yg)("a",{parentName:"p",href:"https://docs-multiplayer.unity3d.com/netcode/current/about/index.html"},"Netcode for GameObjects")," easier to use in your application."),(0,a.yg)("p",null,"In Extreal, Netcode for GameObjects is called NGO, and this feature that wraps NGO is called the NGO wrapper."),(0,a.yg)("p",null,"NGO provides server and client features in a single class called NetworkManager.\nSince using NetworkManager as-is always requires context-aware implementation and can be confusing, the NGO wrapper provides NgoServer and NgoClient as separate classes for the server and client, respectively."),(0,a.yg)("p",null,"The goal is to make NGO introduction smooth by using the NGO wrapper in your applications."),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"The NGO wrapper makes NGO easier to use, but it does not mean that you only need to know the NGO wrapper to realize multiplayer without knowing NGO.\nThe NGO wrapper compensates for the difficulties or lack of features when using NGO as it is, but transfers the multiplayer process to NGO.\nTherefore, to use the NGO wrapper, it is assumed that you know NGO.\nIf you do not know NGO, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/learning/intro#multiplayer"},"Learning")," to learn about NGO.\nThis guide assumes you know NGO.")),(0,a.yg)("h2",{id:"specification"},"Specification"),(0,a.yg)("p",null,"The specifications of the NGO Wrapper are as follows."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You can use features for NGO servers/hosts."),(0,a.yg)("li",{parentName:"ul"},"You can add processing triggered by NGO server/host state."),(0,a.yg)("li",{parentName:"ul"},"You can use features for NGO clients."),(0,a.yg)("li",{parentName:"ul"},"Reconnect when NGO client communication is disconnected."),(0,a.yg)("li",{parentName:"ul"},"You can add processing triggered by NGO client state."),(0,a.yg)("li",{parentName:"ul"},"You can support any NetworkTransport other than the default one provided by the NGO."),(0,a.yg)("li",{parentName:"ul"},"Multiplayer by P2P(Host/Client). (WebRtcTransport)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Native(C#) and WebGL(JavaScript) support.")))),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"Since many of the features for NGO servers/hosts are common, only the different parts are clearly marked as host.\nPlease understand that the part described as server also applies to host.")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"The NGO wrapper supports the default transport provided by NGO (Unity Transport), so no additional action is required if you use the default transport.\nWhen using a new transport not provided by NGO, the IConnectionSetter used by NgoClient must be changed.\nSee ",(0,a.yg)("a",{parentName:"p",href:"#int-ngo-nt"},"Supporting non-default NetworkTransport provided by NGO")," for details.")),(0,a.yg)("h2",{id:"architecture"},"Architecture"),(0,a.yg)("h3",{id:"ngo-wrapper"},"NGO wrapper"),(0,a.yg)(i.K,{chart:"classDiagram\n\n    NetworkManager <.. NgoServer\n    NetworkManager <.. NgoClient\n    NgoServer ..> NgoConfig\n    NgoClient ..> NgoConfig\n    NgoServer ..> IConnectionSetter\n    NgoClient ..> IConnectionSetter\n    IConnectionSetter <|.. UnityTransportConnectionSetter\n    DisposableBase <|-- NgoServer\n    DisposableBase <|-- NgoClient\n\n    class NetworkManager {\n        <<NGO>>\n    }\n\n    class NgoServer {\n        +OnServerStarted IObservable\n        +OnServerStopping IObservable\n        +OnClientConnected IObservable\n        +OnClientDisconnecting IObservable\n        +OnClientRemoving IObservable\n        +ConnectedClients IReadOnlyDictionary\n        +NgoServer(networkManager)\n        +AddConnectionSetter(connectionSetter) void\n        +StartHostAsync(ngoConfig, cancellationToken) void\n        +StartServerAsync(cancellationToken) void\n        +StopServerAsync() void\n        +SetConnectionApprovalCallback(connectionApprovalCallback) void\n        +RemoveClient(clientId) bool\n        +SendMessageToClients(clientIds, messageName, messageStream, networkDelivery) void\n        +SendMessageToAllClients(messageName, messageStream, networkDelivery) void\n        +RegisterMessageHandler(messageName, messageHandler) void\n        +UnregisterMessageHandler(messageName) void\n        +SetVisibilityDelegate(visibilityDelegate) void\n        +SpawnWithServerOwnership(prefab, position, rotation, parent, worldPositionStays) GameObject\n        +SpawnWithClientOwnership(ownerClientId, prefab, position, rotation, parent, worldPositionStays) GameObject\n        +SpawnAsPlayerObject(ownerClientId, prefab, position, rotation, parent, worldPositionStays) GameObject\n    }\n\n    class NgoClient {\n        +OnConnected IObservable\n        +OnDisconnecting IObservable\n        +OnUnexpectedDisconnected IObservable\n        +OnConnectionApprovalRejected IObservable\n        +OnConnectRetrying IObservable\n        +OnConnectRetried IObservable\n        +NgoClient(networkManager, connectRetryStrategy)\n        +AddConnectionSetter(connectionSetter) void\n        +ConnectAsync(ngoConfig, cancellationToken) bool\n        +DisconnectAsync() void\n        +SendMessage(messageName, messageStream, networkDelivery) void\n        +RegisterMessageHandler(messageName, messageHandler) void\n        +UnregisterMessageHandler(messageName) void\n    }\n\n    class NgoConfig {\n        +Address string\n        +Port ushort\n        +ConnectionData byte[]\n        +Timeout TimeSpan\n        +NgoConfig(address, port, connectionData, timeout)\n    }\n\n    class IConnectionSetter {\n        <<interface>>\n        +TargetType Type\n        +Set(networkTransport, ngoConfig)\n    }\n\n    class UnityTransportConnectionSetter {\n    }\n\n    class DisposableBase {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,a.yg)("h3",{id:"webrtctransport"},"WebRtcTransport"),(0,a.yg)("h4",{id:"unity"},"Unity"),(0,a.yg)(i.K,{chart:"classDiagram\n\n    NetworkTransport <|-- WebRtcTransport\n    IConnectionSetter <|.. WebRtcTransportConnectionSetter\n    WebRtcTransportConnectionSetter ..> WebRtcTransport\n    WebRtcClientProvider ..> WebRtcClient\n    WebRtcTransport ..> WebRtcClient\n    WebRtcClient <|-- NativeWebRtcClient\n    WebRtcClient <|-- WebGLWebRtcClient\n    NativeWebRtcClient ..> NativePeerClient\n\n    class NetworkTransport {\n        <<NGO>>\n    }\n\n    class WebRtcTransport {\n    }\n\n    class IConnectionSetter {\n        <<interface>>\n    }\n    \n    class WebRtcTransportConnectionSetter {\n    }\n\n    class WebRtcClientProvider {\n        +Provide(peerClient)$ WebRtcClient\n    }\n    \n    class WebRtcClient {\n    }\n    \n    class NativeWebRtcClient {\n    }\n    \n    class WebGLWebRtcClient {\n    }\n    \n    class NativePeerClient {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,a.yg)("h4",{id:"javascript"},"JavaScript"),(0,a.yg)(i.K,{chart:"classDiagram\n\n    WebGLWebRtcClient ..> WebGLHelper\n    WebGLHelper ..> WebRtcClient\n    WebRtcAdapter ..> WebRtcClient \n\n    class WebGLWebRtcClient {\n        <<C#>>\n    }\n    \n    class WebGLHelper {\n        <<C#>>\n    }\n    \n    class WebRtcAdapter {\n        <<TypeScript>>\n    }\n\n    class WebRtcClient {\n        <<TypeScript>>\n    }",mdxType:"Mermaid"}),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("h3",{id:"package"},"Package"),(0,a.yg)("h4",{id:"unity-1"},"Unity"),(0,a.yg)("p",null,"Using the NGO Wrapper"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO.git\n")),(0,a.yg)("p",null,"Using WebRtcTransport"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO.WebRTC.git\n")),(0,a.yg)("h4",{id:"npm"},"npm"),(0,a.yg)("p",null,"Using WebRtcTransport"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"@extreal-dev/extreal.integration.multiplay.ngo.webrtc\n")),(0,a.yg)("h3",{id:"dependencies"},"Dependencies"),(0,a.yg)("p",null,"Using the NGO Wrapper"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/core/logging"},"Extreal.Core.Logging")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/core/common"},"Extreal.Core.Common")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs-multiplayer.unity3d.com/netcode/current/about/index.html"},"Netcode for GameObjects")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,a.yg)("p",null,"Using WebRtcTransport"),(0,a.yg)("h4",{id:"unity-2"},"Unity"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/integration/web.common"},"Extreal.Integration.Web.Common")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/integration/p2p.webrtc"},"Extreal.Integration.P2P.WebRTC")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html"},"WebRTC"))),(0,a.yg)("h4",{id:"npm-1"},"npm"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common"},"@extreal-dev/extreal.integration.web.common")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@extreal-dev/extreal.integration.p2p.webrtc"},"@extreal-dev/extreal.integration.p2p.webrtc"))),(0,a.yg)("p",null,"Please refer to ",(0,a.yg)("a",{parentName:"p",href:"../category/release"},"Release")," for the correspondence between module version and each package version."),(0,a.yg)("h3",{id:"settings"},"Settings"),(0,a.yg)("h4",{id:"ngo-wrapper-1"},"NGO wrapper"),(0,a.yg)("p",null,"NgoServer and NgoClient are initialized.\nInitializing NgoServer and NgoClient requires NetworkManager.\nThe NetworkManager is set to NgoServer and NgoClient using VContainer."),(0,a.yg)("p",null,"The NGO NetworkManager is assumed to be initialized by attaching it to a GameObject."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"public class MultiplayServerScope : LifetimeScope\n{\n    [SerializeField] private NetworkManager networkManager;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(networkManager);\n        builder.Register<NgoServer>(Lifetime.Singleton);\n    }\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"public class MultiplayControlScope : LifetimeScope\n{\n    [SerializeField] private NetworkManager networkManager;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(networkManager);\n        builder.Register<NgoClient>(Lifetime.Singleton)\n            .WithParameter(typeof(IRetryStrategy), NoRetryStrategy.Instance);\n    }\n}\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"NetworkManager needs to be configured the same on server and client, so it should be Prefab and use the same on server and client.")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"If you want to use a new transport not provided by NGO, please refer to ",(0,a.yg)("a",{parentName:"p",href:"#int-ngo-nt"},"Supporting non-default NetworkTransport provided by NGO"),".\nIf you use the default transport provided by the NGO (Unity Transport), no work is required.")),(0,a.yg)("h4",{id:"mulitplay-ngo-settings-webrtctransport"},"WebRtcTransport"),(0,a.yg)("p",null,"WebRtcTransport uses ",(0,a.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/p2p.webrtc"},"P2P.WebRTC")," to realize P2P.\n",(0,a.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/p2p.webrtc#settings"},"WebRTC Settings")," is required.\nAdd the following initialization after setting up P2P.WebRTC."),(0,a.yg)("p",null,"If using WebRtcTransport, first configure WebRtcTransport in the NetworkManager inspector.\nNext, initialize NgoServer and NgoClient so that WebRtcClient can be configured for WebRtcTransport.\nSet WebRtcClient to WebRtcTransport via WebRtcTransportConnectionSetter."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ClientControlScope : LifetimeScope\n{\n    [SerializeField] private NetworkManager networkManager;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        var peerConfig = new PeerConfig("http://127.0.0.1:3010");\n        var peerClient = PeerClientProvider.Provide(peerConfig);\n        builder.RegisterComponent(peerClient);\n\n        var webRtcClient = WebRtcClientProvider.Provide(peerClient);\n        var webRtcTransportConnectionSetter = new WebRtcTransportConnectionSetter(webRtcClient);\n\n        var ngoHost = new NgoServer(networkManager);\n        ngoHost.AddConnectionSetter(webRtcTransportConnectionSetter);\n        builder.RegisterComponent(ngoHost);\n\n        var ngoClient = new NgoClient(networkManager, assetHelper.NgoClientConfig.RetryStrategy);\n        ngoClient.AddConnectionSetter(webRtcTransportConnectionSetter);\n        builder.RegisterComponent(ngoClient);\n\n        builder.RegisterEntryPoint<ClientControlPresenter>();\n    }\n}\n')),(0,a.yg)("p",null,"If used with WebGL, further JavaScript initialization is required.\nCreate a WebRtcAdapter and call the adapt function."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'import { PeerAdapter } from "@extreal-dev/extreal.integration.p2p.webrtc";\nimport { WebRtcAdapter } from "@extreal-dev/extreal.integration.multiplay.ngo.webrtc";\n\nconst peerAdapter = new PeerAdapter();\npeerAdapter.adapt();\n\nconst webRtcAdapter = new WebRtcAdapter();\nwebRtcAdapter.adapt(peerAdapter.getPeerClient);\n')),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("h3",{id:"mulitplay-ngo-server-host"},"Use features for NGO servers/hosts"),(0,a.yg)("p",null,"Features for NGO servers/hosts are provided by NgoServer.\nHere are some basic instructions on how to use NgoServer.\nSince NgoServer transfers the multiplayer processing to NetworkManager, please refer to the NGO documentation for details on each feature."),(0,a.yg)("p",null,"The server is started using StartServerAsync."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.StartServerAsync().Forget();\n")),(0,a.yg)("p",null,"The host is started using StartHostAsync."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.StartHostAsync(ngoConfig).Forget();\n")),(0,a.yg)("p",null,"The server is stopped by StopServerAsync, but StopServerAsync is called in NgoServer's Dispose.\nWhen the application is terminated, NgoServer's Dispose should be called."),(0,a.yg)("p",null,"Processing in response to messages from clients is registered with RegisterMessageHandler.\nUnregistration is done with UnregisterMessageHandler.\nThe following code registers and unregisters at the start and end of the server."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.OnServerStarted.Subscribe(_ =>\n{\n    ngoServer.RegisterMessageHandler(MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);\n}).AddTo(compositeDisposable);\n\nngoServer.OnServerStopping.Subscribe(_ =>\n{\n    ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());\n}).AddTo(compositeDisposable);\n")),(0,a.yg)("p",null,"You can use SpawnAsPlayerObject if you want to spawn a player at an arbitrary time or if you want to dynamically switch the player's prefab.\nThe following code is a response to a message from the client registered with RegisterMessageHandler above.\nThe player is spawned in response to a message from the client."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'private async void PlayerSpawnMessageHandler(ulong clientId, FastBufferReader messageStream)\n{\n    if (Logger.IsDebug())\n    {\n        Logger.LogDebug($"{MessageName.PlayerSpawn}: {clientId}");\n    }\n    messageStream.ReadValueSafe(out string avatarAssetName);\n    var result = Addressables.LoadAssetAsync<GameObject>(avatarAssetName);\n    var playerPrefab = await result.Task;\n    ngoServer.SpawnAsPlayerObject(clientId, playerPrefab);\n}\n')),(0,a.yg)("h3",{id:"add-a-processing-triggered-by-ngo-serverhost-state"},"Add a processing triggered by NGO server/host state"),(0,a.yg)("p",null,"NgoServer has the following event notifications."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"OnServerStarted",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Immediately after the server starts"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,a.yg)("li",{parentName:"ul"},"OnServerStopping",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Just before the server stops"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,a.yg)("li",{parentName:"ul"},"OnClientConnected",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Immediately after a client connects"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: Connected client ID"))),(0,a.yg)("li",{parentName:"ul"},"OnClientDisconnecting",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Just before a client disconnects"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: Client ID to be disconnected"))),(0,a.yg)("li",{parentName:"ul"},"OnClientRemoving",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Immediately before the client is removed"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: Client ID to be removed")))),(0,a.yg)("p",null,"The following is an example of adding processing at server startup and shutdown"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.OnServerStarted.Subscribe(_ =>\n{\n    ngoServer.RegisterMessageHandler(MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);\n}).AddTo(compositeDisposable);\n\nngoServer.OnServerStopping.Subscribe(_ =>\n{\n    ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());\n}).AddTo(compositeDisposable);\n")),(0,a.yg)("h3",{id:"use-features-for-ngo-clients"},"Use features for NGO clients"),(0,a.yg)("p",null,"NGO client features are provided by NgoClient.\nHere are some basic instructions on how to use NgoClient.\nNgoClient transfers the multiplayer processing to NetworkManager, so please refer to the NGO documentation for details on each feature."),(0,a.yg)("p",null,"ConnectAsync is used to connect to the server.\nConnection information is specified in NgoConfig.\nSince it is assumed that an instance of NgoClient is reused while the application is running, the connection information is specified each time the connection is made."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"var ngoConfig = new NgoConfig();\nngoClient.ConnectAsync(ngoConfig).Forget();\n")),(0,a.yg)("p",null,"The default for NgoConfig is as follows.\nIf timeout is null, it is set to 10 seconds.\nTimeoutException is thrown when the timeout period elapses in the connection process."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},'public NgoConfig\n(\n    string address = "127.0.0.1",\n    ushort port = 7777,\n    byte[] connectionData = null,\n    TimeSpan timeout = null\n)\n')),(0,a.yg)("p",null,"DisconnectAsync is used to disconnect from the server."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.DisconnectAsync().Forget();\n")),(0,a.yg)("p",null,"SendMessage is used to send messages to the server.\nThe following code sends a message to the server to spawn a player after connecting to the server."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.OnConnected.Subscribe(_ =>\n{\n    var messageStream = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);\n    ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);\n}).AddTo(compositeDisposable);\n")),(0,a.yg)("h3",{id:"multiplay-ngo-retry"},"Reconnect when NGO client communication is disconnected"),(0,a.yg)("p",null,"NgoClient uses the retry processing provided by ",(0,a.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/common"},"Common")," to reconnect when communication is disconnected.\nThe following description assumes that you are familiar with the retry processing, so if you have not checked the retry processing, please check the ",(0,a.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/common#core-common-retry"},"retry processing")," first."),(0,a.yg)("p",null,"NgoClient does not reconnect by default.\nIf a retry strategy is specified when NgoClient is initialized, it will reconnect."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"builder.Register<NgoClient>(Lifetime.Singleton).WithParameter(typeof(IRetryStrategy), new CountingRetryStrategy());\n")),(0,a.yg)("p",null,"The reconnection processing handled by NgoClient is as follows."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When to run reconnection",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"If a connection failed"),(0,a.yg)("li",{parentName:"ul"},"Unexpected disconnection from the server"))),(0,a.yg)("li",{parentName:"ul"},"Reconnection processing details",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"If a connection failed",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Repeat the connection according to the retry strategy."))),(0,a.yg)("li",{parentName:"ul"},"Unexpected disconnection from the server",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Repeat the connection according to the retry strategy.")))))),(0,a.yg)("p",null,"Use ",(0,a.yg)("a",{parentName:"p",href:"#multiplay-ngo-event"},"event notifications")," if you want to run processing based on the status of retry processing."),(0,a.yg)("h3",{id:"multiplay-ngo-event"},"Add a processing triggered by NGO client state"),(0,a.yg)("p",null,"NgoClient has the following event notifications."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"OnConnected",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Immediately after connecting to the server"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,a.yg)("li",{parentName:"ul"},"OnDisconnecting",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Just before disconnecting from the server"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,a.yg)("li",{parentName:"ul"},"OnUnexpectedDisconnected",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Immediately after an unexpected server disconnection occurs"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,a.yg)("li",{parentName:"ul"},"OnConnectionApprovalRejected",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing: Immediately after a connection approval is rejected"),(0,a.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,a.yg)("li",{parentName:"ul"},"OnConnectRetrying",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing\uff1aJust before retrying the connection"),(0,a.yg)("li",{parentName:"ul"},"Type\uff1aIObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters\uff1aRetry count",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The first time is ",(0,a.yg)("inlineCode",{parentName:"li"},"1")," and the second time is ",(0,a.yg)("inlineCode",{parentName:"li"},"2"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"1")," means the start of retry strategy running."))))),(0,a.yg)("li",{parentName:"ul"},"OnConnectRetried",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Timing\uff1aImmediately after connection retry is finished",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"If the retry is canceled, it will not be notified."))),(0,a.yg)("li",{parentName:"ul"},"Type\uff1aIObservable"),(0,a.yg)("li",{parentName:"ul"},"Parameters\uff1aRetry result",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"true: If the retry strategy is run and the retry is successful"),(0,a.yg)("li",{parentName:"ul"},"false: If the retry strategy is run and the retry is not successful finally")))))),(0,a.yg)("p",null,"The following is an example of adding processing immediately after connecting to the server."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.OnConnected.Subscribe(_ =>\n{\n    var messageStream = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);\n    ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);\n}).AddTo(compositeDisposable);\n")),(0,a.yg)("h3",{id:"int-ngo-nt"},"Support non-default NetworkTransport provided by NGO"),(0,a.yg)("p",null,"NGO can change the transport used for communication.\nThe NGO wrapper supports the default transport provided by NGO (Unity Transport), so if you use the default transport, no additional action is required.\nIf you want to use a new transport that is not provided by NGO, you will need to change the IConnectionSetter used by NgoClient."),(0,a.yg)("p",null,"Since the part of each transport implementation that holds connection information is not standardized, it is necessary to absorb the differences.\nIConnectionSetter is provided to fill in the implementation differences of each transport."),(0,a.yg)("p",null,"To use a new transport, it is necessary to create a class that implements the IConnectionSetter and set it in NgoClient.\nThe implementation of IConnectionSetter for UnityTransport is shown below for reference when implementing IConnectionSetter."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"public class UnityTransportConnectionSetter : IConnectionSetter\n{\n    public Type TargetType => typeof(UnityTransport);\n\n    public void Set(NetworkTransport networkTransport, NgoConfig ngoConfig)\n    {\n        var unityTransport = networkTransport as UnityTransport;\n        unityTransport.ConnectionData.Address = ngoConfig.Address.Trim();\n        unityTransport.ConnectionData.Port = ngoConfig.Port;\n        unityTransport.ConnectionData.ServerListenAddress = ngoConfig.Address.Trim();\n    }\n}\n")),(0,a.yg)("p",null,"Set the implemented class with NgoClient's AddConnectionSetter."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.AddConnectionSetter(new UnityTransportConnectionSetter());\n")),(0,a.yg)("h3",{id:"mulitplay-ngo-p2p"},"Multiplayer by P2P(Host/Client)"),(0,a.yg)("p",null,"The WebRtcTransport setting allows for P2P multiplayer.\nTo set it up, go to ",(0,a.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/multiplay.ngo#multitplay-ngo-settings-webrtctransport"},"Settings"),"."),(0,a.yg)("p",null,"WebRtcTransport uses ",(0,a.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/p2p.webrtc"},"P2P.WebRTC")," to realize P2P.\nUse ",(0,a.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/p2p.webrtc#p2p-webrtc-host-client"},"P2P.WebRTC's API")," to establish the host/client connection."),(0,a.yg)("p",null,"Since the NGO connection must be initiated after the P2P connection is established, the start timing of NgoServer and NgoClient is determined by the OnStarted event of PeerClient."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csharp"},"peerClient.OnStarted\n    .Subscribe(_ => ngoServer.StartHostAsync(ngoConfig).Forget())\n    .AddTo(disposables);\n\npeerClient.OnStarted\n    .Subscribe(_ => ngoClient.ConnectAsync(ngoConfig).Forget())\n    .AddTo(disposables);\n")))}u.isMDXComponent=!0}}]);