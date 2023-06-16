"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[5172],{4390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(1839);const o={sidebar_position:2},s="Multiplay using Netcode for GameObjects",l={unversionedId:"integration/multiplay.ngo",id:"integration/multiplay.ngo",title:"Multiplay using Netcode for GameObjects",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/integration/multiplay.ngo.md",sourceDirName:"integration",slug:"/integration/multiplay.ngo",permalink:"/Extreal.Guide/en/next/integration/multiplay.ngo",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Chat using Vivox",permalink:"/Extreal.Guide/en/next/integration/chat.vivox"},next:{title:"Asset Workflow using Addressables",permalink:"/Extreal.Guide/en/next/integration/asset-workflow.addressables"}},p={},c=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Use features for NGO servers",id:"use-features-for-ngo-servers",level:3},{value:"Add a processing triggered by NGO server state",id:"add-a-processing-triggered-by-ngo-server-state",level:3},{value:"Use features for NGO clients",id:"use-features-for-ngo-clients",level:3},{value:"Reconnect when communication is disconnected",id:"multiplay-ngo-retry",level:3},{value:"Add a processing triggered by NGO client state",id:"multiplay-ngo-event",level:3},{value:"Support non-default NetworkTransport provided by NGO",id:"int-ngo-nt",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multiplay-using-netcode-for-gameobjects"},"Multiplay using Netcode for GameObjects"),(0,r.kt)("h2",{id:"what-for"},"What for?"),(0,r.kt)("p",null,"We provide a wrapper that makes ",(0,r.kt)("a",{parentName:"p",href:"https://docs-multiplayer.unity3d.com/netcode/current/about/index.html"},"Netcode for GameObjects")," easier to use in your application."),(0,r.kt)("p",null,"In Extreal, Netcode for GameObjects is called NGO, and this feature that wraps NGO is called the NGO wrapper."),(0,r.kt)("p",null,"NGO provides server and client features in a single class called NetworkManager.\nSince using NetworkManager as-is always requires context-aware implementation and can be confusing, the NGO wrapper provides NgoServer and NgoClient as separate classes for the server and client, respectively."),(0,r.kt)("p",null,"The goal is to make NGO introduction smooth by using the NGO wrapper in your applications."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The NGO wrapper makes NGO easier to use, but it does not mean that you only need to know the NGO wrapper to realize multiplayer without knowing NGO.\nThe NGO wrapper compensates for the difficulties or lack of features when using NGO as it is, but transfers the multiplayer process to NGO.\nTherefore, to use the NGO wrapper, it is assumed that you know NGO.\nIf you do not know NGO, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/Extreal.Guide/en/next/learning/intro#multiplayer"},"Learning")," to learn about NGO.\nThis guide assumes you know NGO.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Example implementations of NGO wrappers for common multiplayer application requirements are provided in ",(0,r.kt)("a",{parentName:"p",href:"../category/sample-application"},"sample applications"),"."),(0,r.kt)("p",{parentName:"admonition"},"At this time, the following requirements have been provided."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The user can play with an avatar of the user's choice"),(0,r.kt)("li",{parentName:"ul"},"If the maximum number of people in the space is exceeded, users will not be able to enter the room")),(0,r.kt)("p",{parentName:"admonition"},"The following requirements will be added in the future."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The system allows users to wait until the maximum number of people on standby is exceeded if the maximum number of people in a space is exceeded",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The users on standby is hidden, while other users' multiplayer is visible"))),(0,r.kt)("li",{parentName:"ul"},"When other users leave the room and take their turn, they can join the multiplayer"),(0,r.kt)("li",{parentName:"ul"},"Users can play avatars offline as well as online"),(0,r.kt)("li",{parentName:"ul"},"Avatars can have objects"))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,"The specifications of the NGO Wrapper are as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use features for NGO servers."),(0,r.kt)("li",{parentName:"ul"},"You can add processing triggered by NGO server state."),(0,r.kt)("li",{parentName:"ul"},"You can use features for NGO clients."),(0,r.kt)("li",{parentName:"ul"},"Reconnect when communication is disconnected."),(0,r.kt)("li",{parentName:"ul"},"You can add processing triggered by NGO client state."),(0,r.kt)("li",{parentName:"ul"},"You can support any NetworkTransport other than the default one provided by the NGO.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The NGO wrapper supports the two transports provided by NGO (Unity Transport and UNet Transport), so no additional action is required if you use these two transports.\nWhen using a new transport not provided by NGO, the IConnectionSetter used by NgoClient must be changed.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#int-ngo-nt"},"Supporting non-default NetworkTransport provided by NGO")," for details.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Because it is easier to ensure stable performance and security, the NGO wrapper assumes the use of a dedicated server as the NGO architecture.\nFor more information on NGO architecture, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs-multiplayer.unity3d.com/netcode/current/terms-concepts/network-topologies"},"Network Topologies"),".\nBecause it assumes the use of a dedicated server, the NGO wrapper does not provide features for the host.\nIf you want to use them, please use NetworkManager directly.")),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)(i.G,{chart:"classDiagram\n\n    NetworkManager <.. NgoServer\n    NetworkManager <.. NgoClient\n    NgoClient ..> NgoConfig\n    NgoClient ..> IConnectionSetter\n    IConnectionSetter <|.. UnityTransportConnectionSetter\n    IConnectionSetter <|.. UNetTransportConnectionSetter\n    DisposableBase <|-- NgoServer\n    DisposableBase <|-- NgoClient\n\n    class NetworkManager {\n        <<NGO>>\n    }\n\n    class NgoServer {\n        +OnServerStarted IObservable\n        +OnServerStopping IObservable\n        +OnClientConnected IObservable\n        +OnClientDisconnecting IObservable\n        +OnClientRemoving IObservable\n        +ConnectedClients IReadOnlyDictionary\n        +NgoServer(networkManager)\n        +StartServerAsync(cancellationToken) void\n        +StopServerAsync() void\n        +SetConnectionApprovalCallback(connectionApprovalCallback) void\n        +RemoveClient(clientId) bool\n        +SendMessageToClients(clientIds, messageName, messageStream, networkDelivery) void\n        +SendMessageToAllClients(messageName, messageStream, networkDelivery) void\n        +RegisterMessageHandler(messageName, messageHandler) void\n        +UnregisterMessageHandler(messageName) void\n        +SetVisibilityDelegate(visibilityDelegate) void\n        +SpawnWithServerOwnership(prefab, position, rotation, parent, worldPositionStays) GameObject\n        +SpawnWithClientOwnership(ownerClientId, prefab, position, rotation, parent, worldPositionStays) GameObject\n        +SpawnAsPlayerObject(ownerClientId, prefab, position, rotation, parent, worldPositionStays) GameObject\n    }\n\n    class NgoClient {\n        +OnConnected IObservable\n        +OnDisconnecting IObservable\n        +OnUnexpectedDisconnected IObservable\n        +OnConnectionApprovalRejected IObservable\n        +OnConnectRetrying IObservable\n        +OnConnectRetried IObservable\n        +NgoClient(networkManager, connectRetryStrategy)\n        +AddConnectionSetter(connectionSetter) void\n        +ConnectAsync(ngoConfig, cancellationToken) bool\n        +DisconnectAsync() void\n        +SendMessage(messageName, messageStream, networkDelivery) void\n        +RegisterMessageHandler(messageName, messageHandler) void\n        +UnregisterMessageHandler(messageName) void\n    }\n\n    class NgoConfig {\n        +Address string\n        +Port ushort\n        +ConnectionData byte[]\n        +Timeout TimeSpan\n        +NgoConfig(address, port, connectionData, timeout)\n    }\n\n    class IConnectionSetter {\n        <<interface>>\n        +TargetType Type\n        +Set(networkTransport, ngoConfig)\n    }\n\n    class UnityTransportConnectionSetter {\n    }\n\n    class UNetTransportConnectionSetter {\n    }\n\n    class DisposableBase {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"package"},"Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO.git\n")),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The NGO wrapper uses the following packages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/logging"},"Extreal.Core.Logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/common"},"Extreal.Core.Common")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs-multiplayer.unity3d.com/netcode/current/about/index.html"},"Netcode for GameObjects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"../category/release"},"Release")," for the correspondence between module version and each package version."),(0,r.kt)("h3",{id:"settings"},"Settings"),(0,r.kt)("p",null,"NgoServer and NgoClient are initialized.\nInitializing NgoServer and NgoClient requires NetworkManager.\nThe NetworkManager is set to NgoServer and NgoClient using VContainer."),(0,r.kt)("p",null,"The NGO NetworkManager is assumed to be initialized by attaching it to a GameObject."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MultiplayServerScope : LifetimeScope\n{\n    [SerializeField] private NetworkManager networkManager;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(networkManager);\n        builder.Register<NgoServer>(Lifetime.Singleton);\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MultiplayControlScope : LifetimeScope\n{\n    [SerializeField] private NetworkManager networkManager;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(networkManager);\n        builder.Register<NgoClient>(Lifetime.Singleton)\n            .WithParameter(typeof(IRetryStrategy), NoRetryStrategy.Instance);\n    }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"NetworkManager needs to be configured the same on server and client, so it should be Prefab and use the same on server and client.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use a new transport not provided by NGO, please refer to ",(0,r.kt)("a",{parentName:"p",href:"#int-ngo-nt"},"Supporting non-default NetworkTransport provided by NGO"),".\nIf you use the two transports provided by the NGO (Unity Transport and UNet Transport), no work is required.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"use-features-for-ngo-servers"},"Use features for NGO servers"),(0,r.kt)("p",null,"The features for NGO servers are provided by NgoServer.\nHere are some basic instructions on how to use NgoServer.\nSince NgoServer transfers the multiplayer processing to NetworkManager, please refer to the NGO documentation for details on each feature."),(0,r.kt)("p",null,"The server is started using StartServerAsync."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.StartServerAsync().Forget();\n")),(0,r.kt)("p",null,"The server is stopped by StopServerAsync, but StopServerAsync is called in NgoServer's Dispose.\nWhen the application is terminated, NgoServer's Dispose should be called."),(0,r.kt)("p",null,"Processing in response to messages from clients is registered with RegisterMessageHandler.\nUnregistration is done with UnregisterMessageHandler.\nThe following code registers and unregisters at the start and end of the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.OnServerStarted.Subscribe(_ =>\n{\n    ngoServer.RegisterMessageHandler(MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);\n}).AddTo(compositeDisposable);\n\nngoServer.OnServerStopping.Subscribe(_ =>\n{\n    ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());\n}).AddTo(compositeDisposable);\n")),(0,r.kt)("p",null,"You can use SpawnAsPlayerObject if you want to spawn a player at an arbitrary time or if you want to dynamically switch the player's prefab.\nThe following code is a response to a message from the client registered with RegisterMessageHandler above.\nThe player is spawned in response to a message from the client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'private async void PlayerSpawnMessageHandler(ulong clientId, FastBufferReader messageStream)\n{\n    if (Logger.IsDebug())\n    {\n        Logger.LogDebug($"{MessageName.PlayerSpawn}: {clientId}");\n    }\n    messageStream.ReadValueSafe(out string avatarAssetName);\n    var result = Addressables.LoadAssetAsync<GameObject>(avatarAssetName);\n    var playerPrefab = await result.Task;\n    ngoServer.SpawnAsPlayerObject(clientId, playerPrefab);\n}\n')),(0,r.kt)("h3",{id:"add-a-processing-triggered-by-ngo-server-state"},"Add a processing triggered by NGO server state"),(0,r.kt)("p",null,"NgoServer has the following event notifications."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OnServerStarted",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Immediately after the server starts"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: None"))),(0,r.kt)("li",{parentName:"ul"},"OnServerStopping",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Just before the server stops"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: None"))),(0,r.kt)("li",{parentName:"ul"},"OnClientConnected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Immediately after a client connects"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Connected client ID"))),(0,r.kt)("li",{parentName:"ul"},"OnClientDisconnecting",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Just before a client disconnects"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Client ID to be disconnected"))),(0,r.kt)("li",{parentName:"ul"},"OnClientRemoving",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Immediately before the client is removed"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: Client ID to be removed")))),(0,r.kt)("p",null,"The following is an example of adding processing at server startup and shutdown"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoServer.OnServerStarted.Subscribe(_ =>\n{\n    ngoServer.RegisterMessageHandler(MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);\n}).AddTo(compositeDisposable);\n\nngoServer.OnServerStopping.Subscribe(_ =>\n{\n    ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());\n}).AddTo(compositeDisposable);\n")),(0,r.kt)("h3",{id:"use-features-for-ngo-clients"},"Use features for NGO clients"),(0,r.kt)("p",null,"NGO client features are provided by NgoClient.\nHere are some basic instructions on how to use NgoClient.\nNgoClient transfers the multiplayer processing to NetworkManager, so please refer to the NGO documentation for details on each feature."),(0,r.kt)("p",null,"ConnectAsync is used to connect to the server.\nConnection information is specified in NgoConfig.\nSince it is assumed that an instance of NgoClient is reused while the application is running, the connection information is specified each time the connection is made."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var ngoConfig = new NgoConfig();\nngoClient.ConnectAsync(ngoConfig).Forget();\n")),(0,r.kt)("p",null,"The default for NgoConfig is as follows.\nIf timeout is null, it is set to 10 seconds.\nTimeoutException is thrown when the timeout period elapses in the connection process."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public NgoConfig\n(\n    string address = "127.0.0.1",\n    ushort port = 7777,\n    byte[] connectionData = null,\n    TimeSpan timeout = null\n)\n')),(0,r.kt)("p",null,"DisconnectAsync is used to disconnect from the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.DisconnectAsync().Forget();\n")),(0,r.kt)("p",null,"SendMessage is used to send messages to the server.\nThe following code sends a message to the server to spawn a player after connecting to the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.OnConnected.Subscribe(_ =>\n{\n    var messageStream = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);\n    ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);\n}).AddTo(compositeDisposable);\n")),(0,r.kt)("h3",{id:"multiplay-ngo-retry"},"Reconnect when communication is disconnected"),(0,r.kt)("p",null,"NgoClient uses the retry processing provided by ",(0,r.kt)("a",{parentName:"p",href:"/Extreal.Guide/en/next/core/common"},"Common")," to reconnect when communication is disconnected.\nThe following description assumes that you are familiar with the retry processing, so if you have not checked the retry processing, please check the ",(0,r.kt)("a",{parentName:"p",href:"/Extreal.Guide/en/next/core/common#core-common-retry"},"retry processing")," first."),(0,r.kt)("p",null,"NgoClient does not reconnect by default.\nIf a retry strategy is specified when NgoClient is initialized, it will reconnect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"builder.Register<NgoClient>(Lifetime.Singleton).WithParameter(typeof(IRetryStrategy), new CountingRetryStrategy());\n")),(0,r.kt)("p",null,"The reconnection processing handled by NgoClient is as follows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When to run reconnection",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If a connection failed"),(0,r.kt)("li",{parentName:"ul"},"Unexpected disconnection from the server"))),(0,r.kt)("li",{parentName:"ul"},"Reconnection processing details",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If a connection failed",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Repeat the connection according to the retry strategy."))),(0,r.kt)("li",{parentName:"ul"},"Unexpected disconnection from the server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Repeat the connection according to the retry strategy.")))))),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"#multiplay-ngo-event"},"event notifications")," if you want to run processing based on the status of retry processing."),(0,r.kt)("h3",{id:"multiplay-ngo-event"},"Add a processing triggered by NGO client state"),(0,r.kt)("p",null,"NgoClient has the following event notifications."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OnConnected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Immediately after connecting to the server"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: None"))),(0,r.kt)("li",{parentName:"ul"},"OnDisconnecting",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Just before disconnecting from the server"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: None"))),(0,r.kt)("li",{parentName:"ul"},"OnUnexpectedDisconnected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Immediately after an unexpected server disconnection occurs"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: None"))),(0,r.kt)("li",{parentName:"ul"},"OnConnectionApprovalRejected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing: Immediately after a connection approval is rejected"),(0,r.kt)("li",{parentName:"ul"},"Type: IObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters: None"))),(0,r.kt)("li",{parentName:"ul"},"OnConnectRetrying",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing\uff1aJust before retrying the connection"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters\uff1aRetry count",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The first time is ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," and the second time is ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," means the start of retry strategy running."))))),(0,r.kt)("li",{parentName:"ul"},"OnConnectRetried",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Timing\uff1aImmediately after connection retry is finished",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the retry is canceled, it will not be notified."))),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"Parameters\uff1aRetry result",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"true: If the retry strategy is run and the retry is successful"),(0,r.kt)("li",{parentName:"ul"},"false: If the retry strategy is run and the retry is not successful finally")))))),(0,r.kt)("p",null,"The following is an example of adding processing immediately after connecting to the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.OnConnected.Subscribe(_ =>\n{\n    var messageStream = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);\n    ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);\n}).AddTo(compositeDisposable);\n")),(0,r.kt)("h3",{id:"int-ngo-nt"},"Support non-default NetworkTransport provided by NGO"),(0,r.kt)("p",null,"NGO can change the transport used for communication.\nThe NGO wrapper supports the two transports provided by NGO (Unity Transport and UNet Transport), so if you use these two transports, no additional action is required.\nIf you want to use a new transport that is not provided by NGO, you will need to change the IConnectionSetter used by NgoClient."),(0,r.kt)("p",null,"Since the part of each transport implementation that holds connection information is not standardized, it is necessary to absorb the differences.\nIConnectionSetter is provided to fill in the implementation differences of each transport."),(0,r.kt)("p",null,"To use a new transport, it is necessary to create a class that implements the IConnectionSetter and set it in NgoClient.\nThe implementation of IConnectionSetter for UnityTransport is shown below for reference when implementing IConnectionSetter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class UnityTransportConnectionSetter : IConnectionSetter\n{\n    public Type TargetType => typeof(UnityTransport);\n\n    public void Set(NetworkTransport networkTransport, NgoConfig ngoConfig)\n    {\n        var unityTransport = networkTransport as UnityTransport;\n        unityTransport.ConnectionData.Address = ngoConfig.Address.Trim();\n        unityTransport.ConnectionData.Port = ngoConfig.Port;\n        unityTransport.ConnectionData.ServerListenAddress = ngoConfig.Address.Trim();\n    }\n}\n")),(0,r.kt)("p",null,"Set the implemented class with NgoClient's AddConnectionSetter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"ngoClient.AddConnectionSetter(new UnityTransportConnectionSetter());\n")))}d.isMDXComponent=!0}}]);