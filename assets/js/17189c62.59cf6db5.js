"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[701],{8700:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>g,toc:()=>c});var n=t(7462),i=(t(7294),t(3905)),l=t(1839);const o={sidebar_position:2},r="Stage Navigation",g={unversionedId:"core/stage-navigation",id:"core/stage-navigation",title:"Stage Navigation",description:"What for?",source:"@site/docs/core/stage-navigation.md",sourceDirName:"core",slug:"/core/stage-navigation",permalink:"/Extreal.Guide/core/stage-navigation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/Extreal.Guide/core/logging"},next:{title:"Integration",permalink:"/Extreal.Guide/category/integration"}},s={},c=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"\u6307\u5b9a\u3057\u305f\u30b9\u30c6\u30fc\u30b8\u306b\u9077\u79fb\u3059\u308b",id:"\u6307\u5b9a\u3057\u305f\u30b9\u30c6\u30fc\u30b8\u306b\u9077\u79fb\u3059\u308b",level:3},{value:"\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"core-sn-event",level:3}],p={toc:c};function u(e){let{components:a,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stage-navigation"},"Stage Navigation"),(0,i.kt)("h2",{id:"what-for"},"What for?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/intro#application"},"Framework\u304c\u60f3\u5b9a\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"),"\u3067\u8aac\u660e\u3057\u305f\u8907\u6570\u306e\u30b7\u30fc\u30f3\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u30b9\u30c6\u30fc\u30b8\u306e\u4f5c\u6210\u3084\u30b9\u30c6\u30fc\u30b8\u306e\u5207\u308a\u66ff\u3048\u3092\u7c21\u5358\u306b\u3067\u304d\u308b\u3088\u3046\u306bStage Navigation\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/intro#application"},"Framework\u304c\u60f3\u5b9a\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3"),"\u3067\u793a\u3057\u305f\u56f3\u3092\u518d\u63b2\u3057\u307e\u3059\u3002\n",(0,i.kt)("img",{alt:"Multiple scenes",src:t(2478).Z,width:"1224",height:"436"})),(0,i.kt)("p",null,"\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067Stage Navigation\u3092\u4f7f\u3044\u6a5f\u80fd\u3092\u81ea\u7531\u306b\u7d44\u307f\u5408\u308f\u305b\u3066\u30b9\u30c6\u30fc\u30b8\u3092\u4f5c\u308c\u308b\u3088\u3046\u306b\u306a\u308b\u3068\u6a5f\u80fd\u306e\u518d\u5229\u7528\u6027\u304c\u9ad8\u307e\u308a\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3057\u3084\u3059\u3044\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u624b\u306b\u5165\u308a\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"Stage Navigation\u306e\u4ed5\u69d8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8907\u6570\u306e\u30b7\u30fc\u30f3\u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u30b9\u30c6\u30fc\u30b8\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5168\u3066\u306e\u30b9\u30c6\u30fc\u30b8\u306b\u5171\u901a\u3059\u308b\u30b7\u30fc\u30f3\u3092\u307e\u3068\u3081\u3066\u4e00\u7b87\u6240\u3067\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u30b9\u30c6\u30fc\u30b8\u306b\u9077\u79fb\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002")),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)(l.G,{chart:"classDiagram\n\n    StageNavigator ..> IStageConfig\n    IStageConfig <|.. StageConfigBase\n    StageConfigBase <|-- StageConfig\n    ScriptableObject <|-- StageConfigBase\n    IStageConfig *-- Stage : Stages\n    IStageConfig o-- SceneName : CommonStages\n    Stage --\x3e StageName : StageName\n    Stage o-- SceneName : SceneNames\n    IDisposable\u3000<|.. StageNavigator\n\n    class StageName {\n        <<enumeration>>\n    }\n\n    class SceneName {\n        <<enumeration>>\n    }\n\n    class StageConfig {\n    }\n\n    class StageNavigator {\n        +OnStageTransitioning IObservable\n        +OnStageTransitioned IObservable\n        +StageNavigator(stageConfig)\n        +ReplaceAsync(stageName) void\n    }\n\n    class IStageConfig {\n        +CommonScenes List\n        +Stages List\n    }\n\n    class StageConfigBase {\n        \n    }\n\n    class ScriptableObject {\n        <<unity>>\n    }\n\n    class Stage {\n        +StageName Enum\n        +SceneNames List\n    }\n\n    class IDisposable {\n        <<system>>\n    }",mdxType:"Mermaid"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u6b21\u306e\u30bf\u30a4\u30d7\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"StageName\uff1a\u30b9\u30c6\u30fc\u30b8\u540d\u3092\u8868\u3059Enum"),(0,i.kt)("li",{parentName:"ul"},"SceneName\uff1a\u30b7\u30fc\u30f3\u540d\u3092\u8868\u3059Enum"),(0,i.kt)("li",{parentName:"ul"},"StageConfig\uff1a\u30b9\u30c6\u30fc\u30b8\u8a2d\u5b9a\u3092\u4fdd\u6301\u3059\u308b\u30af\u30e9\u30b9"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"package"},"Package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://github.com/extreal-dev/Extreal.Core.StageNavigation.git\n")),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Stage Navigation\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/core/logging"},"Extreal.Core.Logging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,i.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u306f",(0,i.kt)("a",{parentName:"p",href:"/category/release"},"Release"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h3",{id:"settings"},"Settings"),(0,i.kt)("p",null,"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3059\u308b\u30b9\u30c6\u30fc\u30b8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\u6b21\u306e3\u3064\u306e\u30bf\u30a4\u30d7\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30b9\u30c6\u30fc\u30b8\u540d\u3092\u8868\u3059Enum"),(0,i.kt)("li",{parentName:"ul"},"\u30b7\u30fc\u30f3\u540d\u3092\u8868\u3059Enum"),(0,i.kt)("li",{parentName:"ul"},"\u30b9\u30c6\u30fc\u30b8\u8a2d\u5b9a\u3092\u4fdd\u6301\u3059\u308b\u30af\u30e9\u30b9")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Enum for the stage name\npublic enum StageName\n{\n    TitleStage = 0,\n    AvatarSelectionStage = 1,\n    SpaceSelectionStage = 2,\n    VirtualStage = 3,\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Enum for the scene name\npublic enum SceneName\n{\n    // Control\n    CameraControl = 100,\n    InputControl = 101,\n    NetworkControl = 102,\n    PlayerControl = 103,\n    LobbyControl = 104,\n    TextChatControl = 105,\n    VoiceChatControl = 106,\n    ReactionControl = 107,\n    \n    // Screen\n    TitleScreen = 200,\n    AvatarSelectionScreen = 201,\n    SpaceSelectionScreen = 202,\n\n    // Space\n    VirtualSpace = 300,\n}\n")),(0,i.kt)("p",null,"\u30b9\u30c6\u30fc\u30b8\u8a2d\u5b9a\u306e\u3088\u3046\u306a\u5b9a\u6570\u5024\u306f\u7de8\u96c6\u3057\u3084\u3059\u3044\u3088\u3046\u306bUnity\u30a8\u30c7\u30a3\u30bf\u306e\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067\u6307\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\n\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067Enum\u3092\u4f7f\u3046\u5834\u5408\u306f\u6b21\u306e\u554f\u984c\u304c\u3042\u308b\u305f\u3081\u3001\u30b9\u30c6\u30fc\u30b8\u540d\u3068\u30b7\u30fc\u30f3\u540d\u306eEnum\u306f\u5b9a\u6570\u5024\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"C#\u306e\u4ed5\u69d8\u3067Enum\u306f\u5b9a\u7fa9\u3057\u305f\u9806\u306b\u4e0a\u304b\u3089\u81ea\u52d5\u3067\u5b9a\u6570\u5024\u304c\u632f\u3089\u308c\u307e\u3059\u3002\nUnity\u30a8\u30c7\u30a3\u30bf\u306e\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067Enum\u3092\u6307\u5b9a\u3059\u308b\u3068\u5b9a\u6570\u5024\u3067\u72b6\u614b\u304c\u4fdd\u5b58\u3055\u308c\u308b\u305f\u3081\u3001Enum\u306e\u5909\u66f4\u3067\u5b9a\u7fa9\u9806\u304c\u5909\u308f\u308b\u3068\u610f\u56f3\u305b\u305a\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u306e\u8a2d\u5b9a\u5024\u3082\u5909\u308f\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u3053\u306e\u554f\u984c\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u3001\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067\u4f7f\u3046Enum\u306b\u306f\u5b9a\u6570\u5024\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\n\u5b9a\u6570\u5024\u306f\u8b58\u5225\u4ee5\u5916\u306b\u610f\u5473\u306f\u306a\u3044\u306e\u3067\u5404Enum\u3067\u91cd\u8907\u3057\u306a\u3051\u308c\u3070\u3069\u3093\u306a\u6570\u3067\u3082\u5927\u4e08\u592b\u3067\u3059\u3002")),(0,i.kt)("p",null,"IStageConfig\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u30b9\u30c6\u30fc\u30b8\u8a2d\u5b9a\u3092\u4fdd\u6301\u3057\u307e\u3059\u3002\n\u30b9\u30c6\u30fc\u30b8\u8a2d\u5b9a\u3092Unity\u30a8\u30c7\u30a3\u30bf\u306e\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067\u7de8\u96c6\u3067\u304d\u308b\u3088\u3046\u306bScriptableObject\u3092\u7d99\u627f\u3057\u305fBase\u30af\u30e9\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n\u30b9\u30c6\u30fc\u30b8\u8a2d\u5b9a\u3092\u4fdd\u6301\u3059\u308b\u30af\u30e9\u30b9\u306fStageConfigBase\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Class that holds the stage config\n[CreateAssetMenu(\n    menuName = "Config/" + nameof(StageConfig),\n    fileName = nameof(StageConfig))]\npublic class StageConfig : StageConfigBase<StageName, SceneName>\n{\n}\n')),(0,i.kt)("p",null,"Unity\u30a8\u30c7\u30a3\u30bf\u306e\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067\u30b9\u30c6\u30fc\u30b8\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\n\u8a2d\u5b9a\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stage config",src:t(8138).Z,width:"310",height:"518"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CommonScenes\u30d7\u30ed\u30d1\u30c6\u30a3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5168\u3066\u306e\u30b9\u30c6\u30fc\u30b8\u306b\u5171\u901a\u3059\u308b\u30b7\u30fc\u30f3\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Stages\u30d7\u30ed\u30d1\u30c6\u30a3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30b9\u30c6\u30fc\u30b8\u6bce\u306e\u30b7\u30fc\u30f3\u69cb\u6210\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,i.kt)("p",null,"StageNavigator\u3068StageConfig\u306e\u521d\u671f\u5316\u306fVContainer\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"    public class AppScope : LifetimeScope\n    {\n        [SerializeField] private StageConfig stageConfig;\n\n        protected override void Configure(IContainerBuilder builder)\n        {\n            builder.RegisterComponent(stageConfig).AsImplementedInterfaces();\n            builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton);\n        }\n    }\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"\u6307\u5b9a\u3057\u305f\u30b9\u30c6\u30fc\u30b8\u306b\u9077\u79fb\u3059\u308b"},"\u6307\u5b9a\u3057\u305f\u30b9\u30c6\u30fc\u30b8\u306b\u9077\u79fb\u3059\u308b"),(0,i.kt)("p",null,"StageNavigator\u306eReplaceAsync\u3092\u4f7f\u3063\u3066\u6307\u5b9a\u3057\u305f\u30b9\u30c6\u30fc\u30b8\u306b\u9077\u79fb\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// Transition to the title stage\nstageNavigator.ReplaceAsync(StageName.TitleStage);\n\n// Transition to the avatar selection stage\nstageNavigator.ReplaceAsync(StageName.AvatarSelectionStage);\n\n// Transition to the space selection stage\nstageNavigator.ReplaceAsync(StageName.SpaceSelectionStage);\n")),(0,i.kt)("p",null,"\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u3067\u540c\u3058\u30b7\u30fc\u30f3\u304c\u7d9a\u304f\u5834\u5408\u3001StageNavigator\u306f\u51e6\u7406\u6642\u9593\u3092\u77ed\u7e2e\u3059\u308b\u305f\u3081\u305d\u306e\u30b7\u30fc\u30f3\u3092\u518d\u30ed\u30fc\u30c9\u305b\u305a\u518d\u5229\u7528\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TitleStage\n  PlayerControl -> Loaded\n  TitleScreen -> Loaded\n\nAvatarSelectionStage\n  PlayerControl -> Not loading\n  AvatarSelectionScreen -> Loaded\n\nSpaceSelectionStage\n  PlayerControl -> Not loading\n  AvatarSelectionScreen -> Loaded\n")),(0,i.kt)("p",null,"\u518d\u5229\u7528\u3055\u308c\u305f\u30b7\u30fc\u30f3\u306eGameObject\u306eAwake\u3084Start\u306f\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u306e\u307f\u5b9f\u884c\u3055\u308c\u3001\u518d\u5229\u7528\u3055\u308c\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u306f\u5b9f\u884c\u3055\u308c\u307e\u305b\u3093\u3002\n\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u51e6\u7406\u3092\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\u306f\u3001StageNavigator\u304c\u767a\u884c\u3059\u308b",(0,i.kt)("a",{parentName:"p",href:"/core/stage-navigation#core-sn-event"},"\u30a4\u30d9\u30f3\u30c8\u901a\u77e5"),"\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3044\u3002"),(0,i.kt)("h3",{id:"core-sn-event"},"\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,i.kt)("p",null,"StageNavigator\u306f\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OnStageTransitioning",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u3059\u308b\u76f4\u524d"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u9077\u79fb\u3059\u308b\u30b9\u30c6\u30fc\u30b8\u306e\u540d\u524d"))),(0,i.kt)("li",{parentName:"ul"},"OnStageTransitioned",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u3057\u305f\u76f4\u5f8c"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,i.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u9077\u79fb\u3057\u305f\u30b9\u30c6\u30fc\u30b8\u306e\u540d\u524d")))),(0,i.kt)("p",null,"OnStageTransitioned\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u30ed\u30b0\u3092\u51fa\u529b\u3059\u308b\u4f8b\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"stageNavigator.OnStageTransitioned.Subscribe(stageName =>\n{\n    Logger.LogInfo(stageName);\n}).AddTo(compositeDisposable);\n")))}u.isMDXComponent=!0},8138:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/core-stagenavigation-stageconfig-e62946ef54611fe8609ff5226857756e.png"},2478:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/multi-scenes-2e2fcb7ef0e01e1f07c78920a84ecb84.png"}}]);