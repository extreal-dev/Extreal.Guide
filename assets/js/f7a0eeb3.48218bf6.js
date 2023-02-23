"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[4961],{4495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(7462),i=(t(7294),t(3905)),l=t(1839);const o={sidebar_position:1},r="Chat using Vivox",s={unversionedId:"integration/chat.vivox",id:"integration/chat.vivox",title:"Chat using Vivox",description:"What for?",source:"@site/docs/integration/chat.vivox.md",sourceDirName:"integration",slug:"/integration/chat.vivox",permalink:"/Extreal.Guide/next/integration/chat.vivox",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integration",permalink:"/Extreal.Guide/next/category/integration"},next:{title:"Multiplay using Netcode for GameObjects",permalink:"/Extreal.Guide/next/integration/multiplay.ngo"}},p={},u=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Vivox\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b",id:"vivox\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"Vivox\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"vivox\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",level:3}],c={toc:u};function v(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chat-using-vivox"},"Chat using Vivox"),(0,i.kt)("h2",{id:"what-for"},"What for?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://unity.com/ja/products/vivox"},"Vivox"),"\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u3044\u3084\u3059\u304f\u3059\u308b\u30e9\u30c3\u30d1\u30fc\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Vivox\u3092\u30e9\u30c3\u30d7\u3057\u3066\u3044\u308b\u3053\u306e\u6a5f\u80fd\u3092Vivox\u30e9\u30c3\u30d1\u30fc\u3068\u547c\u3076\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"Vivox\u306eAPI\u3092\u4f7f\u3063\u305f\u30ed\u30b0\u30a4\u30f3/\u30ed\u30b0\u30a2\u30a6\u30c8\u3084\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u63a5\u7d9a/\u5207\u65ad\u3068\u3044\u3063\u305f\u5b9f\u88c5\u306f\u3069\u306e\u3088\u3046\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3082\u540c\u3058\u3088\u3046\u306a\u5b9f\u88c5\u306b\u306a\u308a\u307e\u3059\u3002\nVivox\u30e9\u30c3\u30d1\u30fc\u306f\u305d\u306e\u3088\u3046\u306aVivox\u3092\u4f7f\u3046\u5834\u5408\u306b\u5171\u901a\u3059\u308b\u5b9f\u88c5\u3092\u6a5f\u80fd\u3068\u3057\u3066\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067Vivox\u30e9\u30c3\u30d1\u30fc\u3092\u4f7f\u3046\u3053\u3068\u3067Vivox\u306e\u5c0e\u5165\u304c\u30b9\u30e0\u30fc\u30ba\u306b\u306a\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Vivox\u30e9\u30c3\u30d1\u30fc\u306fVivox\u3092\u4f7f\u3044\u3084\u3059\u304f\u3057\u307e\u3059\u304c\u3001Vivox\u3092\u77e5\u3089\u306a\u304f\u3066\u3082Vivox\u30e9\u30c3\u30d1\u30fc\u3060\u3051\u77e5\u3063\u3066\u3044\u308c\u3070\u30dc\u30a4\u30b9/\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u5b9f\u73fe\u3067\u304d\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\nVivox\u30e9\u30c3\u30d1\u30fc\u306fVivox\u3092\u305d\u306e\u307e\u307e\u4f7f\u3046\u5834\u5408\u306b\u4f7f\u3044\u306b\u304f\u3044\u70b9\u3084\u8db3\u308a\u306a\u3044\u6a5f\u80fd\u3092\u88dc\u3044\u307e\u3059\u304c\u3001\u30dc\u30a4\u30b9/\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u51e6\u7406\u306fVivox\u306b\u79fb\u8b72\u3057\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001Vivox\u30e9\u30c3\u30d1\u30fc\u3092\u4f7f\u3046\u306b\u306fVivox\u3092\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u524d\u63d0\u3067\u3059\u3002\nVivox\u3092\u77e5\u3089\u306a\u3044\u5834\u5408\u306f",(0,i.kt)("a",{parentName:"p",href:"/Extreal.Guide/next/learning/intro#chat"},"Learning"),"\u3092\u53c2\u7167\u3057\u3066Vivox\u306b\u3064\u3044\u3066\u5b66\u7fd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u306e\u30ac\u30a4\u30c9\u306fVivox\u3092\u77e5\u3063\u3066\u3044\u308b\u524d\u63d0\u3067\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Vivox\u306f\u5143\u3005\u5b58\u5728\u3057\u3066\u3044\u305f",(0,i.kt)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal"),"\u30682021\u5e7410\u6708\u306b\u767b\u5834\u3057\u305f",(0,i.kt)("a",{parentName:"p",href:"https://unity.com/ja/solutions/gaming-services"},"Unity Gaming Services"),"\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\n\u73fe\u6642\u70b9\u306eVivox\u30e9\u30c3\u30d1\u30fc\u306f",(0,i.kt)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal"),"\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002\n",(0,i.kt)("a",{parentName:"p",href:"https://unity.com/ja/solutions/gaming-services"},"Unity Gaming Services"),"\u306b\u306f\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u3002\n\u4eca\u5f8c",(0,i.kt)("a",{parentName:"p",href:"https://unity.com/ja/solutions/gaming-services"},"Unity Gaming Services"),"\u3078\u306e\u5bfe\u5fdc\u3092\u691c\u8a0e\u3057\u307e\u3059\u3002")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"Vivox\u30e9\u30c3\u30d1\u30fc\u306e\u4ed5\u69d8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vivox\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Vivox\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002")),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)(l.G,{chart:"classDiagram\n\n    VivoxClient --\x3e VivoxAppConfig\n    VivoxClient ..> VivoxAuthConfig\n    VivoxClient ..> VivoxChannelConfig\n    VivoxChannelConfig --\x3e ChatType\n    DisposableBase <|-- VivoxClient\n\n    class VivoxClient {\n        +Client Client\n        +LoginSession ILoginSession\n        +OnLoggedIn IObservable\n        +OnLoggedOut IObservable\n        +OnRecoveryStateChanged IObservable\n        +OnChannelSessionAdded IObservable\n        +OnChannelSessionRemoved IObservable\n        +OnUserConnected IObservable\n        +OnUserDisconnected IObservable\n        +OnTextMessageReceived IObservable\n        +OnAudioEnergyChanged IObservable\n        +VivoxClient(appConfig)\n        +LoginAsync(authConfig) void\n        +Logout() void\n        +ConnectAsync(channelConfig) void\n        +Disconnect(channelId) void\n        +DisconnectAllChannels() void\n        +SendTextMessage(message, channelIds, language, applicationStanzaNamespace, applicationStanzaBody) void\n        +SendTextMessage(message, channelId, language, applicationStanzaNamespace, applicationStanzaBody) void\n        +SetTransmissionMode(transmissionMode, channelId) void\n        +GetAudioInputDevicesAsync() IAudioDevices\n        +SetAudioInputDeviceAsync(device) void\n        +GetAudioOutputDevicesAsync() IAudioDevices\n        +SetAudioOutputDeviceAsync(device) void\n    }\n\n    class VivoxAppConfig {\n        +ApiEndPoint string\n        +Domain string\n        +Issuer string\n        +SecretKey string\n        +VivoxAppConfig(apiEndPoint, domain, issuer, secretKey)\n    }\n\n    class VivoxAuthConfig {\n        +DisplayName string\n        +AccountName string\n        +TokenExpirationDuration TimeSpan\n        +Timeout TimeSpan\n        +VivoxAuthConfig(displayName, accountName, tokenExpirationDuration, timeout)\n    }\n\n    class ChatType {\n        <<enumeration>>\n        TextAndAudio\n        TextOnly\n        AudioOnly\n    }\n\n    class VivoxChannelConfig {\n        +ChannelName string\n        +ChatType ChatType\n        +ChannelType ChannelType\n        +Properties Channel3DProperties\n        +TransmissionSwitch bool\n        +TokenExpirationDuration TimeSpan\n        +Timeout TimeSpan\n        VivoxChannelConfig(channelName, chatType, channelType, transmissionSwitch, tokenExpirationDuration, timeout)\n    }\n\n    class DisposableBase {\n        <<extreal>>\n    }",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"package"},"Package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox.git\n")),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Vivox\u30e9\u30c3\u30d1\u30fc\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Extreal.Guide/next/core/logging"},"Extreal.Core.Logging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Extreal.Guide/next/core/common"},"Extreal.Core.Common")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm"},"Vivox Unity SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,i.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u306f",(0,i.kt)("a",{parentName:"p",href:"../category/release"},"Release"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("p",null,"VivoxClient\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal"),"\u3067\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089\u306e\u63a5\u7d9a\u5148\u3068\u306a\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u4f5c\u6210\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u3068\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"VivoxClient\u306e\u521d\u671f\u5316\u306b\u306fVivox\u3078\u306e\u63a5\u7d9a\u60c5\u5831\u3092\u4fdd\u6301\u3059\u308bVivoxAppConfig\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u4eca\u56de\u306f\u4e00\u4f8b\u3068\u3057\u3066ScriptableObject\u3067Vivox\u3078\u306e\u63a5\u7d9a\u60c5\u5831\u3092\u8a2d\u5b9a\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\nVivoxAppConfig\u3092\u751f\u6210\u3059\u308bScriptableObject\u3092\u4f5c\u6210\u3057\u3001\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067Vivox\u3078\u306e\u63a5\u7d9a\u60c5\u5831\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'[CreateAssetMenu(\n    menuName = "Config/" + nameof(ChatConfig),\n    fileName = nameof(ChatConfig))]\npublic class ChatConfig : ScriptableObject\n{\n    [SerializeField] private string apiEndPoint;\n    [SerializeField] private string domain;\n    [SerializeField] private string issuer;\n    [SerializeField] private string secretKey;\n\n    public VivoxAppConfig ToVivoxAppConfig()\n        => new VivoxAppConfig(apiEndPoint, domain, issuer, secretKey);\n}\n')),(0,i.kt)("p",null,"VContainer\u3092\u4f7f\u3063\u3066VivoxClient\u3092\u521d\u671f\u5316\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ChatControlScope : LifetimeScope\n{\n    [SerializeField] private ChatConfig chatConfig;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(chatConfig.ToVivoxAppConfig());\n        builder.Register<VivoxClient>(Lifetime.Singleton);\n    }\n}\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"vivox\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b"},"Vivox\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b"),(0,i.kt)("p",null,"Vivox\u306e\u6a5f\u80fd\u306fVivoxClient\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002\nVivoxClient\u304c\u63d0\u4f9b\u3057\u3066\u3044\u306a\u3044\u6a5f\u80fd\u306fVivoxClient\u304b\u3089Vivox\u304c\u63d0\u4f9b\u3059\u308bClient\u3084ILoginSession\u3092\u53d6\u5f97\u3057\u3066\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"var client = vivoxClient.Client;\nvar loginSession = vivoxClient.LoginSession;\n")),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306fVivoxClient\u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30dc\u30a4\u30b9/\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u884c\u3046\u306b\u306f\u307e\u305aVivox\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u30ed\u30b0\u30a4\u30f3\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30ed\u30b0\u30a4\u30f3\u306fVivoxClient\u306eLoginAsync\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var vivoxAuthConfig = new VivoxAuthConfig("Guest");\nvivoxClient.LoginAsync(vivoxAuthConfig).Forget();\n')),(0,i.kt)("p",null,"\u30ed\u30b0\u30a2\u30a6\u30c8\u306fVivoxClient\u306eLogout\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.Logout();\n")),(0,i.kt)("p",null,"\u30c1\u30e3\u30f3\u30cd\u30eb\u3078\u306e\u5165\u5ba4\u306fVivoxClient\u306eConnectAsync\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var vivoxChannelConfig = new VivoxChannelConfig("GuestChannel");\nvivoxClient.ConnectAsync(vivoxChannelConfig).Forget();\n')),(0,i.kt)("p",null,"VivoxChannelConfig\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3068\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002\n\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306e\u307f\u3001\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u307f\u306b\u5236\u9650\u3057\u305f\u3044\u5834\u5408\u306fChatType\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u306e\u307f\u306b\u5236\u9650\u3059\u308b\u5834\u5408\u306e\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var vivoxChannelConfig = new VivoxChannelConfig("GuestChannel", ChatType.AudioOnly);\n')),(0,i.kt)("p",null,"\u7a7a\u9593\u5185\u3067\u306e\u307f\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3084\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u3092\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u5834\u5408\u306a\u3069\u3001\u7a7a\u9593\u304b\u3089\u306e\u9000\u5ba4\u6642\u70b9\u3067\u5168\u3066\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u304b\u3089\u9000\u5ba4\u3059\u308b\u5834\u5408\u306fVivoxClient\u306eDisconnectAllChannels\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.DisconnectAllChannels();\n")),(0,i.kt)("p",null,"\u30b0\u30eb\u30fc\u30d7\u30c1\u30e3\u30c3\u30c8\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u308b\u5834\u5408\u306a\u3069\u3001\u7279\u5b9a\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u304b\u3089\u9000\u5ba4\u3059\u308b\u5834\u5408\u306fVivoxClient\u306eDisconnect\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.Disconnect(channelId);\n")),(0,i.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u9001\u4fe1\u306fVivoxClient\u306eSendTextMessage\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.SendTextMessage(message, channelId);\n")),(0,i.kt)("p",null,"\u30c6\u30ad\u30b9\u30c8\u30c1\u30e3\u30c3\u30c8\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u53d7\u4fe1\u306fVivoxClient\u304c\u767a\u884c\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u306eOnTextMessageReceived\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"vivoxClient.OnTextMessageReceived\n    .Subscribe(message => /* do something with message */)\n    .AddTo(disposables);\n")),(0,i.kt)("h3",{id:"vivox\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"},"Vivox\u306e\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u72b6\u614b\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,i.kt)("p",null,"VivoxClient\u306f\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OnLoggedIn",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u76f4\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,i.kt)("li",{parentName:"ul"},"OnLoggedOut",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u305f\u76f4\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u306a\u3057"))),(0,i.kt)("li",{parentName:"ul"},"OnRecoveryStateChanged",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u4e88\u671f\u3057\u306a\u3044\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5207\u65ad\u6642\u306e\u30ea\u30ab\u30d0\u30ea\u72b6\u614b\u304c\u5909\u5316\u3057\u305f\u76f4\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30ea\u30ab\u30d0\u30ea\u72b6\u614b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm#ReferenceManual/Unity/namespace_vivox_unity.html#a21771ea5086c36c42452bc29059ec379%3FTocPath%3DCore%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7CUnity%20API%20Reference%20Manual%7CUnity%20API%20Reference%20Manual%7C_____4"},"ConnectionRecoveryState")))))),(0,i.kt)("li",{parentName:"ul"},"OnChannelSessionAdded",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30c1\u30e3\u30f3\u30cd\u30eb\u304c\u8ffd\u52a0\u3055\u308c\u305f\u76f4\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u8ffd\u52a0\u3055\u308c\u305f\u30c1\u30e3\u30f3\u30cd\u30eb\u306eID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm#ReferenceManual/Unity/class_vivox_unity_1_1_channel_id.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____5"},"ChannelId")))))),(0,i.kt)("li",{parentName:"ul"},"OnChannelSessionRemoved",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30c1\u30e3\u30f3\u30cd\u30eb\u304c\u524a\u9664\u3055\u308c\u305f\u76f4\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u524a\u9664\u3055\u308c\u305f\u30c1\u30e3\u30f3\u30cd\u30eb\u306eID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm#ReferenceManual/Unity/class_vivox_unity_1_1_channel_id.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____5"},"ChannelId")))))),(0,i.kt)("li",{parentName:"ul"},"OnUserConnected",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u53c2\u52a0\u8005\u304c\u5165\u5ba4\u3057\u305f\u76f4\u5f8c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30a4\u30d9\u30f3\u30c8\u767a\u751f\u5143\u306b\u306a\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u306b\u3082\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u304c\u901a\u77e5\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u5165\u5ba4\u3057\u305f\u53c2\u52a0\u8005",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_participant.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____31"},"IParticipant")),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u52a0\u8005\u304c\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u5165\u5ba4\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u81ea\u8eab\u304b\u3069\u3046\u304b\u306fIParticipant\u306eIsSelf\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u5224\u5b9a\u3057\u307e\u3059\u3002"))))),(0,i.kt)("li",{parentName:"ul"},"OnUserDisconnected",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30c1\u30e3\u30f3\u30cd\u30eb\u304b\u3089\u53c2\u52a0\u8005\u304c\u9000\u5ba4\u3057\u305f\u76f4\u5f8c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30a4\u30d9\u30f3\u30c8\u767a\u751f\u5143\u306b\u306a\u3063\u305f\u30e6\u30fc\u30b6\u30fc\u306b\u3082\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u304c\u901a\u77e5\u3055\u308c\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u9000\u5ba4\u3057\u305f\u53c2\u52a0\u8005",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_participant.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____31"},"IParticipant")),(0,i.kt)("li",{parentName:"ul"},"\u53c2\u52a0\u8005\u304c\u30c1\u30e3\u30f3\u30cd\u30eb\u304b\u3089\u9000\u5ba4\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u81ea\u8eab\u304b\u3069\u3046\u304b\u306fIParticipant\u306eIsSelf\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u5224\u5b9a\u3057\u307e\u3059\u3002"))))),(0,i.kt)("li",{parentName:"ul"},"OnTextMessageReceived",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30c1\u30e3\u30f3\u30cd\u30eb\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u7740\u4fe1\u3057\u305f\u76f4\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u7740\u4fe1\u3057\u305f\u30e1\u30c3\u30bb\u30fc\u30b8",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_channel_text_message.html%3FTocPath%3DCore%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7CUnity%20API%20Reference%20Manual%7CClass%20List%7C_____33"},"IChannelTextMessage")))))),(0,i.kt)("li",{parentName:"ul"},"OnAudioEnergyChanged",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u53c2\u52a0\u8005\u306e\u97f3\u58f0\u306e\u5927\u304d\u3055\u306b\u5909\u5316\u304c\u3042\u3063\u305f\u76f4\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u53c2\u52a0\u8005\u3068\u97f3\u58f0\u306e\u5927\u304d\u3055\uff08\u30bf\u30d7\u30eb\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_participant.html%3FTocPath%3DVivox%2520Unity%2520SDK%2520documentation%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7C_____31"},"IParticipant")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm#ReferenceManual/Unity/interface_vivox_unity_1_1_i_participant_properties.html#ac14ea71429adc8e41eaa22af478296ee%3FTocPath%3DCore%7CUnity%2520API%2520Reference%2520Manual%7CClass%2520List%7CUnity%20API%20Reference%20Manual%7CClass%20List%7C_____40"},"AudioEnergy"))))))))}v.isMDXComponent=!0}}]);