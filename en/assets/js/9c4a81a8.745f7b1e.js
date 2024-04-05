"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[7800],{6051:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>g,metadata:()=>r,toc:()=>p});var i=a(9668),s=(a(6540),a(5680)),t=a(7443);const g={sidebar_position:5},l="Messaging",r={unversionedId:"integration/messaging",id:"integration/messaging",title:"Messaging",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/integration/messaging.md",sourceDirName:"integration",slug:"/integration/messaging",permalink:"/Extreal.Guide/en/next/integration/messaging",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Common for Web",permalink:"/Extreal.Guide/en/next/integration/web.common"},next:{title:"Multiplay using Messaging",permalink:"/Extreal.Guide/en/next/integration/multiplay.messaging"}},o={},p=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Messaging",id:"messaging-1",level:3},{value:"Socket.IO",id:"socketio",level:3},{value:"Unity",id:"unity",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Messaging",id:"messaging-2",level:4},{value:"Socket.IO",id:"socketio-1",level:4},{value:"Unity",id:"unity-1",level:5},{value:"npm",id:"npm",level:5},{value:"Dependencies",id:"dependencies",level:3},{value:"Messaging",id:"messaging-3",level:4},{value:"Socket.IO",id:"socketio-2",level:4},{value:"Unity",id:"unity-2",level:5},{value:"npm",id:"npm-1",level:5},{value:"Settings",id:"settings",level:3},{value:"Messaging server",id:"messaging-server",level:4},{value:"Application",id:"application",level:4},{value:"Usage",id:"usage",level:2},{value:"Exchange messages in groups",id:"messaging-among-group",level:3},{value:"Control the timing of sending and receiving messages (queuing)",id:"control-the-timing-of-sending-and-receiving-messages-queuing",level:3},{value:"Add processing triggered by client state",id:"client-event",level:3}],u={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,s.yg)(c,(0,i.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"messaging"},"Messaging"),(0,s.yg)("h2",{id:"what-for"},"What for?"),(0,s.yg)("p",null,"In virtual spaces where people can gather and communicate, they often want to form groups to exchange messages, such as multiplayer or text chat."),(0,s.yg)("p",null,"Therefore, Extreal provides a messaging feature that allows groups to exchange messages.\nThis module provides a default implementation of messaging features using ",(0,s.yg)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),".\nThe server used for messaging, like Socket.IO, is called a messaging server in this module."),(0,s.yg)("h2",{id:"specification"},"Specification"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"You can exchange messages in groups."),(0,s.yg)("li",{parentName:"ul"},"You can controls the timing of sending and receiving messages (queuing)."),(0,s.yg)("li",{parentName:"ul"},"You can add processing triggered by client state."),(0,s.yg)("li",{parentName:"ul"},"Messaging with Socket.IO.",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Native (C#) and WebGL (JavaScript) support.")))),(0,s.yg)("admonition",{type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"When many messages are exchanged in a short period of time, such as when realizing a multiplayer game, the communication load remains high.\nIn such cases, queuing can be used to reduce the communication load.")),(0,s.yg)("h2",{id:"architecture"},"Architecture"),(0,s.yg)("h3",{id:"messaging-1"},"Messaging"),(0,s.yg)(t.K,{chart:"classDiagram\n\n    DisposableBase <|-- MessagingClient\n    DisposableBase <|-- QueuingMessagingClient\n    QueuingMessagingClient --\x3e MessagingClient\n    \n    class MessagingClient {\n        <<abstract>>\n        +OnJoined IObservable\n        +OnLeaving IObservable\n        +OnUnexpectedLeft IObservable\n        +OnJoiningApprovalRejected IObservable\n        +OnClientJoined IObservable\n        +OnClientLeaving IObservable\n        +OnMessageReceived IObservable\n\n        +ListGroupsAsync() List\n        +JoinAsync(connectionConfig) void\n        +LeaveAsync() void\n        +SendMessageAsync(message, to) void\n    }\n\n    class QueuingMessagingClient {\n        +OnJoined IObservable\n        +OnLeaving IObservable\n        +OnUnexpectedLeft IObservable\n        +OnJoiningApprovalRejected IObservable\n        +OnClientJoined IObservable\n        +OnClientLeaving IObservable\n\n        +QueuingMessagingClient(messagingClient)\n\n        +EnqueueRequest(message, to) void\n        +ResponseQueueCount() int\n        +DequeueResponse() from, message\n\n        +ListGroupsAsync() List\n        +JoinAsync(connectionConfig) void\n        +LeaveAsync() void\n    }\n    \n    class DisposableBase {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,s.yg)("h3",{id:"socketio"},"Socket.IO"),(0,s.yg)("h4",{id:"unity"},"Unity"),(0,s.yg)(t.K,{chart:"classDiagram\n    SocketIOMessagingClientProvider ..> SocketIOMessagingClient\n    SocketIOMessagingClient <|-- NativeSocketIOMessagingClient\n    SocketIOMessagingClient <|-- WebGLSocketIOMessagingClient\n    NativeSocketIOMessagingClient ..> SocketIOMessagingConfig\n    WebGLSocketIOMessagingClient ..> SocketIOMessagingConfig\n    MessagingClient <|-- SocketIOMessagingClient\n    DisposableBase <|-- SocketIOMessagingClient\n\n    class SocketIOMessagingClientProvider {\n        +Provide(messagingConfig)$ SocketIOMessagingClient\n    }\n    \n    class SocketIOMessagingClient {\n        <<abstract>>\n        +SocketIOMessagingClient()\n    }\n    \n    class SocketIOMessagingConfig {\n        +Url string\n        +SocketIOOptions SocketIOOptions\n        \n        +SocketIOMessagingConfig(url, socketIOOptions)\n    }\n    \n    class NativeSocketIOMessagingClient {\n        +NativeSocketIOMessagingClient(messagingConfig) \n    }\n    \n    class WebGLSocketIOMessagingClient {\n        +WebGLSocketIOMessagingClient(messagingConfig)\n    }\n\n    class MessagingClient {\n        <<extreal, abstract>>\n    }\n\n    class DisposableBase {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,s.yg)("h4",{id:"javascript"},"JavaScript"),(0,s.yg)(t.K,{chart:"classDiagram\n\n    WebGLSocketIOMessagingClient ..> WebGLHelper\n    WebGLHelper ..> SocketIOMessagingClient\n    SocketIOMessagingClientAdapter ..> SocketIOMessagingClient\n    \n    class WebGLHelper {\n        <<C#>>\n    }\n\n    class WebGLSocketIOMessagingClient {\n        <<C#>>\n    }\n\n    class SocketIOMessagingClientAdapter {\n        <<TypeScript>>\n    }\n    \n    class SocketIOMessagingClient {\n        <<TypeScript>>\n    }",mdxType:"Mermaid"}),(0,s.yg)("h2",{id:"installation"},"Installation"),(0,s.yg)("h3",{id:"package"},"Package"),(0,s.yg)("h4",{id:"messaging-2"},"Messaging"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Messaging.git\n")),(0,s.yg)("h4",{id:"socketio-1"},"Socket.IO"),(0,s.yg)("h5",{id:"unity-1"},"Unity"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO.git\n")),(0,s.yg)("h5",{id:"npm"},"npm"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-text"},"@extreal-dev/extreal.integration.messaging.socket.io\n")),(0,s.yg)("h3",{id:"dependencies"},"Dependencies"),(0,s.yg)("p",null,"Messaging uses the following packages."),(0,s.yg)("h4",{id:"messaging-3"},"Messaging"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/logging"},"Extreal.Core.Logging")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/common"},"Extreal.Core.Common")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,s.yg)("h4",{id:"socketio-2"},"Socket.IO"),(0,s.yg)("h5",{id:"unity-2"},"Unity"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/logging"},"Extreal.Core.Logging")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/common"},"Extreal.Core.Common")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/next/integration/web.common"},"Extreal.Integration.Web.Common")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://github.com/doghappy/socket.io-client-csharp"},"SocketIOClient")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://www.newtonsoft.com/json"},"Newtonsoft.Json"))),(0,s.yg)("h5",{id:"npm-1"},"npm"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common"},"@extreal-dev/extreal.integration.web.common")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/socket.io-client"},"socket.io-client"))),(0,s.yg)("p",null,"Please refer to ",(0,s.yg)("a",{parentName:"p",href:"../../category/release"},"Release")," for the correspondence between module version and each package version."),(0,s.yg)("h3",{id:"settings"},"Settings"),(0,s.yg)("h4",{id:"messaging-server"},"Messaging server"),(0,s.yg)("p",null,"Messaging servers are provided by ",(0,s.yg)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"),"."),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://socket.io/docs/v4/rooms/"},"Rooms")," of Socket.IO are used for group messaging."),(0,s.yg)("p",null,"Sets the maximum number of people per group when starting up the messaging server.\nIf more than the maximum number of clients attempt to join a group, the client will be denied participation.\nThe maximum number of people per group is specified by MESSAGING_MAX_CAPACITY in the ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO/tree/main/MessagingServer~/compose.yaml"},"compose.yaml")," file."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'environment:\n    # If "on" is logging, otherwise is not. In production, set it to "off".\n    MESSAGING_LOGGING: ${MESSAGING_LOGGING:-on}\n    # Capacity of one room\n    MESSAGING_MAX_CAPACITY: ${MESSAGING_MAX_CAPACITY:-80} # Change here\n    # In production, change it to suit the environment.\n    MESSAGING_CORS_ORIGIN: ${MESSAGING_CORS_ORIGIN:-*}\n')),(0,s.yg)("p",null,"Please refer to ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO/tree/main/MessagingServer~"},"README")," to prepare your messaging server."),(0,s.yg)("admonition",{type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"If you wish to scale out by adding more messaging servers, you can do so by using the Redis Adapter provided by Socket.IO. See ",(0,s.yg)("a",{parentName:"p",href:"https://socket.io/docs/v4/redis-adapter/"},"Redis Adapter")," for details.")),(0,s.yg)("h4",{id:"application"},"Application"),(0,s.yg)("p",null,"Create a SocketIOMessagingClient using the SocketIOMessagingClientProvider."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ClientControlScope : LifetimeScope\n{\n    protected override void Configure(IContainerBuilder builder)\n    {\n        var messagingConfig = new SocketIOMessagingConfig("url", socketIOOptions);\n        var messagingClient = SocketIOMessagingClientProvider.Provide(messagingConfig);\n        builder.RegisterComponent<MessagingClient>(messagingClient);\n\n        builder.RegisterEntryPoint<ClientControlPresenter>();\n    }\n}\n')),(0,s.yg)("p",null,"When used with WebGL, JavaScript initialization is required.\nCreate a SocketIOMessagingAdapter and call the adapt function."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-typescript"},'import { SocketIOMessagingAdapter } from "@extreal-dev/extreal.integration.messaging.socket.io";\n\nconst messagingAdapter = new SocketIOMessagingAdapter();\nmessagingAdapter.adapt();\n')),(0,s.yg)("h2",{id:"usage"},"Usage"),(0,s.yg)("h3",{id:"messaging-among-group"},"Exchange messages in groups"),(0,s.yg)("p",null,"The feature to exchange messages in groups is provided by MessagingClient."),(0,s.yg)("p",null,"To join an existing group, use ListGroupsAsync to get a list of groups."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},"var groups = await messagingClient.ListGroupsAsync();\n")),(0,s.yg)("p",null,"A list of Groups will be returned, so join the group using the Group obtained here."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},"var group = /* Select group from groups */;\nvar joiningConfig = new MessagingJoiningConfig(group.Name);\nawait messagingClient.JoinAsync(joiningConfig);\n")),(0,s.yg)("p",null,"If you want to create a new group, join it by specifying a group name that is not part of existing groups."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},'var joiningConfig = new MessagingJoiningConfig("NewGroupName");\nawait messagingClient.JoinAsync(joiningConfig);\n')),(0,s.yg)("p",null,"To send a message, use SendMessageAsync.\nIf you want to send a message to the members of a group, specify only the message."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},'await messagingClient.SendMessageAsync("message");\n')),(0,s.yg)("p",null,"If you want to send a message to a specific member of a group, specify the client ID in addition to the message."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},'await messagingClient.SendMessageAsync("message", toClientId);\n')),(0,s.yg)("p",null,"The IDs of the clients participating in the group can be obtained from the OnClientJoined event parameter."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},"private readonly List<string> joinedClients = new List<string>();\nmessagingClient.OnClientJoined\n    .Subscribe(joinedClients.Add)\n")),(0,s.yg)("p",null,"The OnMessageReceived event is used to receive messages."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},"messagingClient.OnMessageReceived\n    .Subscribe(HandleReceivedMessage)\n    .AddTo(disposables);\n\nprivate void HandleReceivedMessage((string clientId, string message) tuple)\n{\n  // Handle message\n}\n")),(0,s.yg)("p",null,"To leave the group, use LeaveAsync."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},"await messagingClient.LeaveAsync();\n")),(0,s.yg)("h3",{id:"control-the-timing-of-sending-and-receiving-messages-queuing"},"Control the timing of sending and receiving messages (queuing)"),(0,s.yg)("p",null,"Queuing feature is provided by QueuingMessagingClient.\nQueuingMessagingClient is a wrapper class for MessagingClient.\nTo use the queuing feature, initialize QueuingMessagingClient."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},'public class ClientControlScope : LifetimeScope\n{\n    protected override void Configure(IContainerBuilder builder)\n    {\n        var messagingConfig = new SocketIOMessagingConfig("url", socketIOOptions);\n        var messagingClient = SocketIOMessagingClientProvider.Provide(messagingConfig);\n        var queuingMessagingClient = new QueuingMessagingClient(messagingClient);\n        builder.RegisterComponent(queuingMessagingClient);\n\n        builder.RegisterEntryPoint<ClientControlPresenter>();\n    }\n}\n')),(0,s.yg)("p",null,"QueuingMessagingClient controls the timing of sending and receiving by holding messages to be sent and received in the request and response queues, respectively."),(0,s.yg)("p",null,"If you want to send a message, add the message to the request queue."),(0,s.yg)("p",null,"If you want to send a message to a group member, specify only the message."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},'await queuingMessagingClient.EnqueueRequest("message");\n')),(0,s.yg)("p",null,"If you want to send a message to a specific member of a group, specify the client ID in addition to the message."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},'await queuingMessagingClient.EnqueueRequest("message", toClientId);\n')),(0,s.yg)("p",null,"Received messages are received from the response queue.\nThe number of messages in the response queue can be checked with ResponseQueueCount."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-csharp"},"while (queuingMessagingClient.ResponseQueueCount() > 0)\n{\n    (var from, var message) = queuingMessagingClient.DequeueResponse();\n    // Handle message\n}\n")),(0,s.yg)("h3",{id:"client-event"},"Add processing triggered by client state"),(0,s.yg)("p",null,"MessagingClient/QueuingMessagingClient has the following event notifications."),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"OnJoined",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Timing: Immediately after joining a group"),(0,s.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,s.yg)("li",{parentName:"ul"},"Parameters: Own client ID"))),(0,s.yg)("li",{parentName:"ul"},"OnLeaving",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Timing: Just before leaving the group"),(0,s.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,s.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,s.yg)("li",{parentName:"ul"},"OnUnexpectedLeft",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Timing: Immediately after an unexpected server disconnection occurs"),(0,s.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,s.yg)("li",{parentName:"ul"},"Parameters: Reason for disconnection"))),(0,s.yg)("li",{parentName:"ul"},"OnJoiningApprovalRejected",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Timing: Immediately after a joining was rejected"),(0,s.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,s.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,s.yg)("li",{parentName:"ul"},"OnClientJoined",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Timing: Immediately after a client joins"),(0,s.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,s.yg)("li",{parentName:"ul"},"Parameters: Joined client ID"))),(0,s.yg)("li",{parentName:"ul"},"OnClientLeaving",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Timing: Just before a client leaves"),(0,s.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,s.yg)("li",{parentName:"ul"},"Parameter: Client ID to be disconnected"))),(0,s.yg)("li",{parentName:"ul"},"OnMessageReceived",(0,s.yg)("ul",{parentName:"li"},(0,s.yg)("li",{parentName:"ul"},"Timing: Immediately after a message is received"),(0,s.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,s.yg)("li",{parentName:"ul"},"Parameters: ID of the client who sent the message and the message")))))}m.isMDXComponent=!0}}]);