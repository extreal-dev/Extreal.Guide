"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[2393],{2534:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=i(9668),t=(i(6540),i(5680)),o=i(7443);const l={sidebar_position:1},r="Chat using Vivox",s={unversionedId:"integration/chat.vivox",id:"version-1.2.0/integration/chat.vivox",title:"Chat using Vivox",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.2.0/integration/chat.vivox.md",sourceDirName:"integration",slug:"/integration/chat.vivox",permalink:"/Extreal.Guide/en/integration/chat.vivox",draft:!1,tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integration",permalink:"/Extreal.Guide/en/category/integration"},next:{title:"Multiplay using Netcode for GameObjects",permalink:"/Extreal.Guide/en/integration/multiplay.ngo"}},c={},g=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Use Vivox features",id:"use-vivox-features",level:3},{value:"Reconnect when communication is disconnected",id:"chat-vivox-retry",level:3},{value:"Add a processing triggered by Vivox client state",id:"chat-vivox-event",level:3}],p={toc:g},u="wrapper";function y(e){let{components:n,...i}=e;return(0,t.yg)(u,(0,a.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"chat-using-vivox"},"Chat using Vivox"),(0,t.yg)("h2",{id:"what-for"},"What for?"),(0,t.yg)("p",null,"We provide a wrapper that makes ",(0,t.yg)("a",{parentName:"p",href:"https://unity.com/ja/products/vivox"},"Vivox")," easier to use in applications."),(0,t.yg)("p",null,"We will call this feature, which wraps Vivox, the Vivox wrapper."),(0,t.yg)("p",null,"The implementation of login/logout or connecting/disconnecting to a channel using Vivox's API is similar in any application.\nThe Vivox wrapper provides features that are common to such implementations when using Vivox."),(0,t.yg)("p",null,"The goal is to make Vivox introduction smooth by using the Vivox wrapper in your applications."),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"The Vivox wrapper makes Vivox easier to use, but it does not mean that you only need to know the Vivox wrapper to realize voice/text chat without knowing Vivox.\nThe Vivox wrapper compensates for the difficulties and lack of features when using Vivox as it is, but transfers the voice/text chat process to Vivox.\nTherefore, to use the Vivox wrapper, it is assumed that you know Vivox.\nIf you do not know Vivox, please refer to ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/learning/intro#chat"},"Learning")," to learn about Vivox.\nThis guide assumes you know Vivox.")),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"Vivox is available on the originally existing ",(0,t.yg)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal")," and ",(0,t.yg)("a",{parentName:"p",href:"https://unity.com/ja/solutions/gaming-services"},"Unity Gaming Services"),", which appeared in October 2021.\nThe current Vivox wrapper is compatible with the ",(0,t.yg)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal"),".\nIt is not compatible with ",(0,t.yg)("a",{parentName:"p",href:"https://unity.com/ja/solutions/gaming-services"},"Unity Gaming Services"),".\nWe will consider supporting ",(0,t.yg)("a",{parentName:"p",href:"https://unity.com/ja/solutions/gaming-services"},"Unity Gaming Services")," in the future.")),(0,t.yg)("h2",{id:"specification"},"Specification"),(0,t.yg)("p",null,"The specifications of the Vivox wrapper are as follows."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"You can use Vivox features."),(0,t.yg)("li",{parentName:"ul"},"Reconnect when communication is disconnected."),(0,t.yg)("li",{parentName:"ul"},"You can add processing triggered by Vivox client state.")),(0,t.yg)("h2",{id:"architecture"},"Architecture"),(0,t.yg)(o.K,{chart:"classDiagram\n\n    VivoxClient --\x3e VivoxAppConfig\n    VivoxClient ..> VivoxAuthConfig\n    VivoxClient ..> VivoxChannelConfig\n    VivoxClient ..> VivoxConnectionException\n    VivoxChannelConfig --\x3e ChatType\n    DisposableBase <|-- VivoxClient\n\n    class VivoxClient {\n        +Client Client\n        +LoginSession ILoginSession\n        +OnLoggedIn IObservable\n        +OnLoggedOut IObservable\n        +OnRecoveryStateChanged IObservable\n        +OnChannelSessionAdded IObservable\n        +OnChannelSessionRemoved IObservable\n        +OnUserConnected IObservable\n        +OnUserDisconnected IObservable\n        +OnTextMessageReceived IObservable\n        +OnAudioEnergyChanged IObservable\n        +OnConnectRetrying IObservable\n        +OnConnectRetried IObservable\n        +VivoxClient(appConfig)\n        +LoginAsync(authConfig, retryCancellationToken) void\n        +Logout() void\n        +ConnectAsync(channelConfig, connectCancellationToken) ChannelId\n        +Disconnect(channelId) void\n        +DisconnectAllChannels() void\n        +SendTextMessage(message, channelIds, language, applicationStanzaNamespace, applicationStanzaBody) void\n        +SendTextMessage(message, channelId, language, applicationStanzaNamespace, applicationStanzaBody) void\n        +SetTransmissionMode(transmissionMode, channelId) void\n        +GetAudioInputDevicesAsync() IAudioDevices\n        +SetAudioInputDeviceAsync(device) void\n        +GetAudioOutputDevicesAsync() IAudioDevices\n        +SetAudioOutputDeviceAsync(device) void\n    }\n\n    class VivoxAppConfig {\n        +ApiEndPoint string\n        +Domain string\n        +Issuer string\n        +SecretKey string\n        +VivoxConfig VivoxConfig\n        +LoginRetryStrategy IRetryStrategy\n        +VivoxAppConfig(apiEndPoint, domain, issuer, secretKey, vivoxConfig, loginRetryStrategy)\n    }\n\n    class VivoxAuthConfig {\n        +DisplayName string\n        +AccountName string\n        +TokenExpirationDuration TimeSpan\n        +VivoxAuthConfig(displayName, accountName, tokenExpirationDuration)\n    }\n\n    class ChatType {\n        <<enumeration>>\n        TextAndAudio\n        TextOnly\n        AudioOnly\n    }\n\n    class VivoxChannelConfig {\n        +ChannelName string\n        +ChatType ChatType\n        +ChannelType ChannelType\n        +Properties Channel3DProperties\n        +TransmissionSwitch bool\n        +TokenExpirationDuration TimeSpan\n        +VivoxChannelConfig(channelName, chatType, channelType, transmissionSwitch, tokenExpirationDuration)\n    }\n\n    class VivoxConnectionException {\n        +VivoxConnectionException(message)\n        +VivoxConnectionException(message, innerException)\n    }\n\n    class DisposableBase {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,t.yg)("h2",{id:"installation"},"Installation"),(0,t.yg)("h3",{id:"package"},"Package"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox.git\n")),(0,t.yg)("h3",{id:"dependencies"},"Dependencies"),(0,t.yg)("p",null,"The Vivox wrapper uses the following packages."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/core/logging"},"Extreal.Core.Logging")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/core/common"},"Extreal.Core.Common")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm"},"Vivox Unity SDK")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,t.yg)("p",null,"Please refer to ",(0,t.yg)("a",{parentName:"p",href:"../category/release"},"Release")," for the correspondence between module version and each package version."),(0,t.yg)("h3",{id:"settings"},"Settings"),(0,t.yg)("p",null,"VivoxClient is initialized."),(0,t.yg)("p",null,"It is assumed that the application to which the client will connect has been created in ",(0,t.yg)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal"),"."),(0,t.yg)("p",null,"To initialize VivoxClient, VivoxAppConfig, which holds the connection information to Vivox, is required.\nAs an example, we will show how to set the connection information to Vivox with a ScriptableObject.\nCreate a ScriptableObject that generates VivoxAppConfig and set the connection information to Vivox in the inspector."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'[CreateAssetMenu(\n    menuName = "Config/" + nameof(ChatConfig),\n    fileName = nameof(ChatConfig))]\npublic class ChatConfig : ScriptableObject\n{\n    [SerializeField] private string apiEndPoint;\n    [SerializeField] private string domain;\n    [SerializeField] private string issuer;\n    [SerializeField] private string secretKey;\n\n    public VivoxAppConfig ToVivoxAppConfig()\n        => new VivoxAppConfig(apiEndPoint, domain, issuer, secretKey);\n}\n')),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Additionally to the connection information, VivoxAppConfig contains the following settings."),(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/class_vivox_unity_1_1_vivox_config.html?TocPath=Vivox%2520Unity%2520SDK%2520documentation%257CUnity%2520API%2520Reference%2520Manual%257CClass%2520List%257C_____15"},"VivoxConfig")),(0,t.yg)("li",{parentName:"ul"},"Retry strategy used in reconnecting after communication disconnection",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"See ",(0,t.yg)("a",{parentName:"li",href:"#chat-vivox-retry"},"Reconnect when communication is disconnected")," for details."))))),(0,t.yg)("p",null,"Initialize VivoxClient with VContainer."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"public class ChatControlScope : LifetimeScope\n{\n    [SerializeField] private ChatConfig chatConfig;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(chatConfig.ToVivoxAppConfig());\n        builder.Register<VivoxClient>(Lifetime.Singleton);\n    }\n}\n")),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)("h3",{id:"use-vivox-features"},"Use Vivox features"),(0,t.yg)("p",null,"Vivox features are provided by VivoxClient.\nFor features that are not provided by VivoxClient, please obtain the Client or ILoginSession provided by Vivox from VivoxClient and implement them."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"var client = vivoxClient.Client;\nvar loginSession = vivoxClient.LoginSession;\n")),(0,t.yg)("p",null,"Here are some basic instructions for using VivoxClient."),(0,t.yg)("p",null,"To conduct voice/text chat, you must first log in to the Vivox application.\nLogin is done using LoginAsync in VivoxClient."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'var vivoxAuthConfig = new VivoxAuthConfig("Guest");\nvivoxClient.LoginAsync(vivoxAuthConfig).Forget();\n')),(0,t.yg)("p",null,"Logout is done using Logout in VivoxClient."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.Logout();\n")),(0,t.yg)("p",null,"You can use VivoxClient's ConnectAsync to enter the channel."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'var vivoxChannelConfig = new VivoxChannelConfig("GuestChannel");\nvivoxClient.ConnectAsync(vivoxChannelConfig).Forget();\n')),(0,t.yg)("p",null,"VivoxChannelConfig enables voice and text chat by default.\nIf you want to restrict to voice chat only or text chat only, specify ChatType.\nAn example of restricting to voice chat only is as follows."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},'var vivoxChannelConfig = new VivoxChannelConfig("GuestChannel", ChatType.AudioOnly);\n')),(0,t.yg)("p",null,"If you want to exit from all channels at the point of exiting the space, such as when allowing voice or text chat only within a space, use DisconnectAllChannels in VivoxClient."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.DisconnectAllChannels();\n")),(0,t.yg)("p",null,"You can use Disconnect in VivoxClient to leave a specific channel, such as when a group chat feature is provided."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.Disconnect(channelId);\n")),(0,t.yg)("p",null,"You can use SendTextMessage in VivoxClient to send text chat messages."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.SendTextMessage(message, channelId);\n")),(0,t.yg)("p",null,"Text chat messages are received via OnTextMessageReceived, an event notification published by VivoxClient."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.OnTextMessageReceived\n    .Subscribe(message => /* do something with message */)\n    .AddTo(disposables);\n")),(0,t.yg)("h3",{id:"chat-vivox-retry"},"Reconnect when communication is disconnected"),(0,t.yg)("p",null,"VivoxClient uses the retry processing provided by ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/common"},"Common")," to reconnect when communication is disconnected.\nThe following description assumes that you are familiar with the retry processing, so if you have not checked the retry processing, please check the ",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/common#core-common-retry"},"retry processing")," first."),(0,t.yg)("p",null,"VivoxClient does not reconnect by default.\nIf a retry strategy is specified in VivoxAppConfig, it will reconnect."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"new VivoxAppConfig(apiEndPoint, domain, issuer, secretKey, loginRetryStrategy: new CountingRetryStrategy());\n")),(0,t.yg)("p",null,"The reconnection processing handled by VivoxClient is as follows."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"When to run reconnection",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"If login failed"),(0,t.yg)("li",{parentName:"ul"},"If Vivox Unity SDK ",(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#Unity/developer-guide/channels/automatic-connection-recovery/connection-recovery.htm?TocPath=Vivox%2520Unity%2520SDK%2520documentation%257CVivox%2520Unity%2520Developer%2520Guide%257CChannels%257CAutomatic%2520connection%2520recovery%257C_____0"},"automatic connection recovery")," failed",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"If communication is lost after login, Vivox Unity SDK will try to recover the connection automatically for 30 seconds."),(0,t.yg)("li",{parentName:"ul"},"If the automatic connection recovery failed, the client will be logged out by Vivox Unity SDK."))))),(0,t.yg)("li",{parentName:"ul"},"Reconnection processing details",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"If login failed",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Repeat login according to retry strategy."))),(0,t.yg)("li",{parentName:"ul"},"If Vivox Unity SDK automatic connection recovery failed",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Repeat login according to retry strategy."),(0,t.yg)("li",{parentName:"ul"},"If the login succeeds, it connects to all channels to which it was connected before disconnection.")))))),(0,t.yg)("p",null,"VivoxClient reconnection only covers the login processing, because if automatic connection recovery fails, the client is logged out and must start over from login."),(0,t.yg)("p",null,"Use ",(0,t.yg)("a",{parentName:"p",href:"#chat-vivox-event"},"event notifications")," if you want to run processing based on the status of retry processing."),(0,t.yg)("h3",{id:"chat-vivox-event"},"Add a processing triggered by Vivox client state"),(0,t.yg)("p",null,"VivoxClient has the following event notifications."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"OnLoggedIn",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after login"),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,t.yg)("li",{parentName:"ul"},"OnLoggedOut",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after logout"),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: None"))),(0,t.yg)("li",{parentName:"ul"},"OnRecoveryStateChanged",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after the recovery state changes on unexpected network disconnection"),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: Recovery state",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/namespace_vivox_unity.html#a21771ea5086c36c42452bc29059ec379%3FTocPath%3DCore%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7CUnity%20API%20Reference%20Manual%7CUnity%20API%20Reference%20Manual%7C_____4"},"ConnectionRecoveryState")))))),(0,t.yg)("li",{parentName:"ul"},"OnChannelSessionAdded",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after a channel is added"),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: ID of the added channel",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/class_vivox_unity_1_1_channel_id.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____5"},"ChannelId")))))),(0,t.yg)("li",{parentName:"ul"},"OnChannelSessionRemoved",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after a channel is removed"),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: ID of the removed channel",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/class_vivox_unity_1_1_channel_id.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____5"},"ChannelId")))))),(0,t.yg)("li",{parentName:"ul"},"OnUserConnected",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after a participant connects to the channel.",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"The user who originated the event is also notified of this event."))),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: Participant who connected to the channel.",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_participant.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____31"},"IParticipant")),(0,t.yg)("li",{parentName:"ul"},"The IsSelf property of IParticipant determines if the participant is the user itself who entered the channel."))))),(0,t.yg)("li",{parentName:"ul"},"OnUserDisconnected",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after a participant disconnects from the channel.",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"The user who originated the event is also notified of this event."))),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: Participant who disconnected from the room",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_participant.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____31"},"IParticipant")),(0,t.yg)("li",{parentName:"ul"},"The IsSelf property of IParticipant determines if the participant is the user itself who left the channel."))))),(0,t.yg)("li",{parentName:"ul"},"OnTextMessageReceived",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after a message is received on the channel"),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: Incoming message",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_channel_text_message.html%3FTocPath%3DCore%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7CUnity%20API%20Reference%20Manual%7CClass%20List%7C_____33"},"IChannelTextMessage")))))),(0,t.yg)("li",{parentName:"ul"},"OnAudioEnergyChanged",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing: Immediately after a change in the participant's audio loudness"),(0,t.yg)("li",{parentName:"ul"},"Type: IObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters: Participant and audio volume (tuple)",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_participant.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____31"},"IParticipant")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_participant_properties.html#ac14ea71429adc8e41eaa22af478296ee%3FTocPath%3DCore%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7CUnity%20API%20Reference%20Manual%7CClass%20List%7C_____40"},"AudioEnergy")))))),(0,t.yg)("li",{parentName:"ul"},"OnConnectRetrying",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing\uff1aJust before retrying the connection"),(0,t.yg)("li",{parentName:"ul"},"Type\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters\uff1aRetry count",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"The first time is ",(0,t.yg)("inlineCode",{parentName:"li"},"1")," and the second time is ",(0,t.yg)("inlineCode",{parentName:"li"},"2"),"."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1")," means the start of retry strategy running."))))),(0,t.yg)("li",{parentName:"ul"},"OnConnectRetried",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Timing\uff1aImmediately after connection retry is finished",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"If the retry is canceled, it will not be notified."))),(0,t.yg)("li",{parentName:"ul"},"Type\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"Parameters\uff1aRetry result",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"true: If the retry strategy is run and the retry is successful"),(0,t.yg)("li",{parentName:"ul"},"false: If the retry strategy is run and the retry is not successful finally")))))))}y.isMDXComponent=!0}}]);