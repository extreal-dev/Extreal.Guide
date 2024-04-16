"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[3525],{6e3:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=a(9668),t=(a(6540),a(5680)),l=a(7443);const s={sidebar_position:6},r="Multiplay using Messaging",o={unversionedId:"integration/multiplay.messaging",id:"version-1.3.0/integration/multiplay.messaging",title:"Multiplay using Messaging",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.3.0/integration/multiplay.messaging.md",sourceDirName:"integration",slug:"/integration/multiplay.messaging",permalink:"/Extreal.Guide/en/integration/multiplay.messaging",draft:!1,tags:[],version:"1.3.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Messaging",permalink:"/Extreal.Guide/en/integration/messaging"},next:{title:"Multiplay using Netcode for GameObjects",permalink:"/Extreal.Guide/en/integration/multiplay.ngo"}},g={},u=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Unity",id:"unity",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Unity",id:"unity-1",level:4},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Multiplayer in groups",id:"multiplayer-in-groups",level:3},{value:"Send and receive messages within a group",id:"send-and-receive-messages-within-a-group",level:3},{value:"Add synchronized object movements",id:"add-synchronized-object-movements",level:3},{value:"Add processing triggered by client state",id:"add-processing-triggered-by-client-state",level:3}],p={toc:u},y="wrapper";function d(e){let{components:n,...a}=e;return(0,t.yg)(y,(0,i.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"multiplay-using-messaging"},"Multiplay using Messaging"),(0,t.yg)("h2",{id:"what-for"},"What for?"),(0,t.yg)("p",null,"When implementing multiplayer feature, it is necessary to synchronize player states (e.g., location and movement)."),(0,t.yg)("p",null,"Netcode for GameObjects, on which the ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/multiplay.ngo"},"NGO wrapper")," is based, centralizes player state within a single server process.\nSuch a design makes scale-out difficult."),(0,t.yg)("p",null,"This module uses ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging"},"Messaging")," to enable multi-group multiplayer on a single server, or to scale out to multiple servers to increase the number of players in multiplayer.\nThis allows for easier scale-out, resulting in lower operating costs."),(0,t.yg)("h2",{id:"specification"},"Specification"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Multiplayer in groups."),(0,t.yg)("li",{parentName:"ul"},"You can send and receive messages within a group."),(0,t.yg)("li",{parentName:"ul"},"You can add synchronized object movements."),(0,t.yg)("li",{parentName:"ul"},"You can add processing triggered by client state.")),(0,t.yg)("h2",{id:"architecture"},"Architecture"),(0,t.yg)(l.K,{chart:"classDiagram\n    MultiplayClient ..> PlayerInput\n    MultiplayClient ..> MultiplayJoiningConfig\n\n    QueuingMessagingClient <-- MultiplayClient\n    NetworkClient <-- MultiplayClient\n    MessagingJoiningConfig <-- MultiplayJoiningConfig\n    INetworkObjectsProvider <|.. MultiplayClient\n\n    PlayerInput --\x3e PlayerInputValues\n\n    class MultiplayClient {\n        +LocalClient NetworkClient\n        +JoinedClients IReadOnlyDictionary\n\n        +OnJoined IObservable\n        +OnLeaving IObservable\n        +OnUnexpectedLeft IObservable\n        +OnJoiningApprovalRejected IObservable\n        +OnClientJoined IObservable\n        +OnClientLeaving IObservable\n        +OnObjectSpawned IObservable\n        +OnMessageReceived IObservable\n\n        +MultiplayClient(messagingClient, networkObjectsProvider)\n        +ListGroupsAsync() UniTask\n        +JoinAsync(joiningConfig) void\n        +LeaveAsync() void\n        +SpawnObject(objectPrefab, position, rotation, parent, message) GameObject\n        +SendMessage(message, to) void\n    }\n\n    class NetworkClient {\n        +ClientId string\n        +NetworkObjects IReadOnlyList\n        +NetworkClient(clientId)\n    }\n\n    class INetworkObjectsProvider {\n        <<interface>>\n    }\n\n    class QueuingMessagingClient {\n        <<extreal>>\n    }\n\n    class PlayerInput {\n        +Values PlayerInputValues\n        +SetMove(newMoveDirection) void\n        +ApplyValues(synchronizedValues) void\n    }\n\n    class PlayerInputValues {\n        +Move Vector2\n        +SetMove(move) Vector2\n        +CheckWhetherToSendData() bool\n    }\n\n    class MultiplayJoiningConfig {\n        +MessagingJoiningConfig MessagingJoiningConfig\n    }\n\n    class MessagingJoiningConfig {\n        <<interface>>\n    }",mdxType:"Mermaid"}),(0,t.yg)("h2",{id:"installation"},"Installation"),(0,t.yg)("h3",{id:"package"},"Package"),(0,t.yg)("h4",{id:"unity"},"Unity"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Multiplay.Messaging.git\n")),(0,t.yg)("h3",{id:"dependencies"},"Dependencies"),(0,t.yg)("p",null,"This module uses the following packages."),(0,t.yg)("h4",{id:"unity-1"},"Unity"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/core/logging"},"Extreal.Core.Logging")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/core/common"},"Extreal.Core.Common")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/integration/messaging"},"Extreal.Integration.Messaging")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.2/manual/index.html"},"Newtonsoft Json"))),(0,t.yg)("p",null,"Please refer to ",(0,t.yg)("a",{parentName:"p",href:"../../category/release"},"Release")," for the correspondence between module version and each package version."),(0,t.yg)("h3",{id:"settings"},"Settings"),(0,t.yg)("p",null,"This module uses ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging"},"Messaging")," to realize multiplayer.\nTherefore, ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging#settings"},"Messaging Settings")," is required."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"public class ClientControlScope : LifetimeScope\n{\n    private MultiplayClient multiplayClient;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        // After initializing QueuingMessagingClient and NetworkObjectsProvider\n        multiplayClient = new MultiplayClient(queuingMessagingClient, networkObjectsProvider)\n    }\n}\n")),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)("h3",{id:"multiplayer-in-groups"},"Multiplayer in groups"),(0,t.yg)("p",null,"MultiplayClient provides the feature to play multiplayer in a group."),(0,t.yg)("p",null,"Joining/Leaving a group is used in the same way as in ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging"},"Messaging"),".\nSee ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging#messaging-among-group"},"Exchanging messages in a group"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'// Join a group\nvar messagingJoiningConfig = new MessagingJoiningConfig("groupName");\nvar multiplayJoiningConfig = new MultiplayJoiningConfig(messagingJoiningConfig);\nawait multiplayClient.JoinAsync(multiplayJoiningConfig);\n\n// Leave the group\nmultiplayClient.LeaveAsync();\n')),(0,t.yg)("p",null,"Once you join a group, spawn a player and join the multiplayer."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"multiplayClient.SpawnObject(playerObjectToBeSpawned)\n")),(0,t.yg)("p",null,"You can also spawn objects other than the player."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"multiplayClient.SpawnObject(objectToBeSpawned)\n")),(0,t.yg)("h3",{id:"send-and-receive-messages-within-a-group"},"Send and receive messages within a group"),(0,t.yg)("p",null,"You may want to send and receive messages within a group, such as synchronizing reactions.\nSending and receiving messages is used in the same way as ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging"},"Messaging"),".\nSee ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging#messaging-among-group"},"Exchanging messages in a group"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'// Send message to entire group\nawait messagingClient.SendMessageAsync("message");\n')),(0,t.yg)("h3",{id:"add-synchronized-object-movements"},"Add synchronized object movements"),(0,t.yg)("p",null,"The position and rotation of objects spawned by the SpawnObject method are synchronized in the default implementation."),(0,t.yg)("p",null,"Depending on your requirements, you may want to synchronize other movements besides object position and rotation, such as animation.\nThis module allows you to add additional object movements to be synchronized according to your requirements by adding an implementation."),(0,t.yg)("p",null,"This module synchronizes object movements by sending a player's input to other players.\nWhich player input is used for synchronization is indicated by PlayerInput and PlayerInputValues."),(0,t.yg)("p",null,"If you want to synchronize movements other than position and rotation, create a class that inherits PlayerInput and PlayerInputValues."),(0,t.yg)("p",null,"For example, here is a case where the input Jump is to be synchronized."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"public class HolidayPlayerInput : PlayerInput\n{\n    public override PlayerInputValues Values => HolidayValues;\n    public HolidayPlayerInputValues HolidayValues { get; } = new HolidayPlayerInputValues();\n\n    public void SetJump(bool newJump)\n        => HolidayValues.SetJump(newJump);\n\n    public override void ApplyValues(PlayerInputValues synchronizedValues)\n    {\n        var synchronizedHolidayValues = synchronizedValues as HolidayPlayerInputValues;\n\n        base.ApplyValues(synchronizedHolidayValues);\n        SetJump(synchronizedHolidayValues.Jump);\n    }\n}\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'public class HolidayPlayerInputValues : PlayerInputValues\n{\n    [SuppressMessage("Usage", "CC0047")] public bool Jump { get; set; }\n\n    public void SetJump(bool jump)\n        => Jump = jump;\n}\n')),(0,t.yg)("p",null,"Player inputs are synchronized at regular intervals.\nIf you want to control the conditions of synchronization, for example, if you want to synchronize every time the input changes, use the CheckWhetherToSendData method."),(0,t.yg)("p",null,"Here is an example of synchronizing when either Move or Jump changes."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'[Serializable]\npublic class HolidayPlayerInputValues : PlayerInputValues\n{\n    private Vector2 preMove;\n    private bool isMoveChanged;\n\n    [SuppressMessage("Usage", "CC0047")] public bool Jump { get; set; }\n    private bool preJump;\n    private bool isJumpChanged;\n\n    public override void SetMove(Vector2 move)\n    {\n        preMove = Move;\n        base.SetMove(move);\n        isMoveChanged = preMove != Move;\n    }\n\n    public void SetJump(bool jump)\n    {\n        preJump = Jump;\n        Jump = jump;\n        isJumpChanged = preJump != Jump;\n    }\n\n    public override bool CheckWhetherToSendData()\n    {\n        var ret = isMoveChanged || isJumpChanged;\n        isMoveChanged = isJumpChanged = false;\n        return ret;\n    }\n}\n')),(0,t.yg)("h3",{id:"add-processing-triggered-by-client-state"},"Add processing triggered by client state"),(0,t.yg)("p",null,"You can use the same event notification as in ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging"},"Messaging"),". See ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/integration/messaging#client-event"},"Adding Processes Triggered by Client State")," in Messaging for details."),(0,t.yg)("p",null,"In addition to the above, MultiplayClient has the following event notifications"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"OnObjectSpawned",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after spawning the object to be synchronized"),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: Participating client ID, spawned object, message sent")))))}d.isMDXComponent=!0}}]);