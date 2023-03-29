"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[59],{5457:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var s=t(7462),r=(t(7294),t(3905)),n=t(1839);const l={sidebar_position:3},i="Asset Workflow using Addressables",o={unversionedId:"integration/asset-workflow.addressables",id:"version-1.1.0/integration/asset-workflow.addressables",title:"Asset Workflow using Addressables",description:"What for?",source:"@site/versioned_docs/version-1.1.0/integration/asset-workflow.addressables.md",sourceDirName:"integration",slug:"/integration/asset-workflow.addressables",permalink:"/Extreal.Guide/integration/asset-workflow.addressables",draft:!1,tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Multiplay using Netcode for GameObjects",permalink:"/Extreal.Guide/integration/multiplay.ngo"},next:{title:"Sample Application",permalink:"/Extreal.Guide/category/sample-application"}},d={},p=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Addressables wrapper",id:"addressables-wrapper",level:3},{value:"Addressables customization",id:"addressables-customization",level:3},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Addressables\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b",id:"addressables\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b",level:3},{value:"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u63a5\u7d9a\u3067\u304d\u306a\u3044\u6642\u306b\u518d\u63a5\u7d9a\u3059\u308b",id:"assets-addressables-retry",level:3},{value:"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u72b6\u6cc1\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b",id:"assets-addressables-event",level:3},{value:"\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316\u3068\u5fa9\u53f7\u3092\u884c\u3046",id:"assets-addressables-crypto",level:3}],u={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asset-workflow-using-addressables"},"Asset Workflow using Addressables"),(0,r.kt)("h2",{id:"what-for"},"What for?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Packages/com.unity.addressables@1.19/manual/index.html"},"Addressables"),"\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u3044\u3084\u3059\u304f\u3059\u308b\u30e9\u30c3\u30d1\u30fc\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Addressables\u3092\u30e9\u30c3\u30d7\u3057\u3066\u3044\u308b\u3053\u306e\u6a5f\u80fd\u3092Addressables\u30e9\u30c3\u30d1\u30fc\u3068\u547c\u3076\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Addressables\u30e9\u30c3\u30d1\u30fc\u3067\u306fAddressables\u3092\u4f7f\u3063\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u5fc5\u8981\u3068\u306a\u308b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u72b6\u6cc1\u8868\u793a\u3084\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316/\u5fa9\u53f7\u3092\u4f5c\u308a\u3084\u3059\u304f\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067Addressables\u30e9\u30c3\u30d1\u30fc\u3092\u4f7f\u3046\u3053\u3068\u3067Addressables\u306e\u5c0e\u5165\u304c\u30b9\u30e0\u30fc\u30ba\u306b\u306a\u308b\u3053\u3068\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Addressables\u30e9\u30c3\u30d1\u30fc\u306fAddressables\u3092\u4f7f\u3044\u3084\u3059\u304f\u3057\u307e\u3059\u304c\u3001Addressables\u3092\u77e5\u3089\u306a\u304f\u3066\u3082Addressables\u30e9\u30c3\u30d1\u30fc\u3060\u3051\u77e5\u3063\u3066\u3044\u308c\u3070\u30a2\u30bb\u30c3\u30c8\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092\u5b9f\u73fe\u3067\u304d\u308b\u308f\u3051\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\nAddressables\u30e9\u30c3\u30d1\u30fc\u306fAddressables\u3092\u305d\u306e\u307e\u307e\u4f7f\u3046\u5834\u5408\u306b\u4f7f\u3044\u306b\u304f\u3044\u70b9\u3084\u8db3\u308a\u306a\u3044\u6a5f\u80fd\u3092\u88dc\u3044\u307e\u3059\u304c\u3001\u30a2\u30bb\u30c3\u30c8\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u51e6\u7406\u306fAddressables\u306b\u79fb\u8b72\u3057\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001Addressables\u30e9\u30c3\u30d1\u30fc\u3092\u4f7f\u3046\u306b\u306fAddressables\u3092\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u524d\u63d0\u3067\u3059\u3002\nAddressables\u3092\u77e5\u3089\u306a\u3044\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"/Extreal.Guide/learning/intro#asset-workflow"},"Learning"),"\u3092\u53c2\u7167\u3057\u3066Addressables\u306b\u3064\u3044\u3066\u5b66\u7fd2\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u3053\u306e\u30ac\u30a4\u30c9\u306fAddressables\u3092\u77e5\u3063\u3066\u3044\u308b\u524d\u63d0\u3067\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,"Addressables\u30e9\u30c3\u30d1\u30fc\u306e\u4ed5\u69d8\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Addressables\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u63a5\u7d9a\u3067\u304d\u306a\u3044\u6642\u306b\u518d\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u72b6\u6cc1\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316\u3068\u5fa9\u53f7\u304c\u3067\u304d\u307e\u3059\u3002")),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("h3",{id:"addressables-wrapper"},"Addressables wrapper"),(0,r.kt)(n.G,{chart:"classDiagram\n\n    AssetProvider ..> AssetDisposable\n    AssetProvider ..> Addressables\n    AssetDisposable ..> Addressables\n    DisposableBase <|-- AssetProvider\n    DisposableBase <|-- AssetDisposable\n\n    class AssetProvider {\n        +OnDownloading IObservable\n        +OnDownloaded IObservable\n        +OnConnectRetrying IObservable\n        +OnConnectRetried IObservable\n        +AssetProvider(retryStrategy)\n        +DownloadAsync(assetName, downloadStatusInterval, nextFunc) void\n        +GetDownloadSizeAsync(assetName) long\n        +LoadAssetAsync(assetName) AssetDisposable\n        +LoadAssetAsync() AssetDisposable\n        +LoadSceneAsync(assetName, loadMode) AssetDisposable\n    }\n\n    class AssetDisposable {\n        +Result TResult\n    }\n\n    class DisposableBase {\n        <<extreal>>\n    }\n    \n    class Addressables {\n        <<Addressables>>\n    }",mdxType:"Mermaid"}),(0,r.kt)("h3",{id:"addressables-customization"},"Addressables customization"),(0,r.kt)(n.G,{chart:"classDiagram\n\n    BuildScriptBase <|-- BuildScriptEncryptMode\n    ResourceProviderBase <|-- CryptoAssetBundleProviderBase\n    IAssetBundleResource <|.. CryptoAssetBundleResource\n    DownloadHandlerScript <|-- DownloadHandlerFileWithDecryption\n    BuildScriptEncryptMode ..> ICryptoStreamFactory\n    CryptoAssetBundleProviderBase ..> ICryptoStreamFactory\n    CryptoAssetBundleResource ..> ICryptoStreamFactory\n    DownloadHandlerFileWithDecryption ..> ICryptoStreamFactory\n    CryptoAssetBundleProviderBase ..> CryptoAssetBundleResource\n    CryptoAssetBundleResource ..> DownloadHandlerFileWithDecryption\n\n    class ResourceProviderBase {\n        <<ResourceManager>>\n    }\n    \n    class CryptoAssetBundleProviderBase {\n    }\n    \n    class IAssetBundleResource {\n        <<ResourceManager>>\n    }\n\n    class CryptoAssetBundleResource {\n    }\n\n    class DownloadHandlerScript {\n        <<Networking>>\n    }\n\n    class DownloadHandlerFileWithDecryption {\n    }\n\n    class ICryptoStreamFactory {\n        <<interface>>\n        +CreateEncryptStream(baseStream, options) CryptoStream\n        +CreateDecryptStream(baseStream, options) CryptoStream\n    }\n    \n    class BuildScriptBase {\n        <<Addressables>>\n    }\n    \n    class BuildScriptEncryptMode {\n        <<editor>>\n    }",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"package"},"Package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables.git\n")),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Addressables\u30e9\u30c3\u30d1\u30fc\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Extreal.Guide/core/logging"},"Extreal.Core.Logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Extreal.Guide/core/common"},"Extreal.Core.Common")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.addressables@1.19/manual/index.html"},"Addressables")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,r.kt)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u306f",(0,r.kt)("a",{parentName:"p",href:"../category/release"},"Release"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"settings"},"Settings"),(0,r.kt)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u4f7f\u3046\u5834\u5408\u306f\u7279\u5225\u306a\u8a2d\u5b9a\u306f\u3042\u308a\u307e\u305b\u3093\u3002\n\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316\u3068\u5fa9\u53f7\u3092\u884c\u3046\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"#assets-addressables-crypto"},"\u6697\u53f7\u5316\u3068\u5fa9\u53f7"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"addressables\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b"},"Addressables\u306e\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b"),(0,r.kt)("p",null,"Addressables\u306e\u6a5f\u80fd\u306fAssetProvider\u30af\u30e9\u30b9\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002\nAssetProvider\u304c\u63d0\u4f9b\u3057\u3066\u3044\u306a\u3044\u6a5f\u80fd\u306fAddressables\u3092\u76f4\u63a5\u4f7f\u3063\u3066\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var assetProvider = new AssetProvider();\n")),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306fAssetProvider\u306e\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u3092\u3044\u304f\u3064\u304b\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30b5\u30a4\u30ba\u306e\u53d6\u5f97\u306b\u306fGetDownloadSizeAsync\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var size = await assetProvider.GetDownloadSizeAsync("AssetName");\n')),(0,r.kt)("p",null,"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u306b\u306fDownloadAsync\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'assetProvider.DownloadAsync("AssetName").Forget();\n')),(0,r.kt)("p",null,"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u5f8c\u306b\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3057\u3066\u304b\u3089\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u3055\u305b\u308b\u306a\u3069\u3001\u30c0\u30a6\u30ed\u30fc\u30c9\u5f8c\u306e\u51e6\u7406\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Func<UniTask> navigate = async () =>\n{\n    MessageConfig = await LoadAsync<MessageConfig>();\n    stageNavigator.ReplaceAsync(nextStage).Forget();\n};\nassetProvider.DownloadAsync("AssetName", nextFunc: navigate).Forget();\n')),(0,r.kt)("p",null,"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u72b6\u6cc1\u306b\u5fdc\u3058\u3066\u51e6\u7406\u3092\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"#assets-addressables-event"},"\u30a4\u30d9\u30f3\u30c8\u901a\u77e5"),"\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u30a2\u30bb\u30c3\u30c8\u306e\u30ed\u30fc\u30c9\u306b\u306fLoadAssetAsync\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using var assetDisposable = await assetProvider.LoadAssetAsync<GameObject>("AssetName");\nvar prefab = assetDisposable.Result;\n')),(0,r.kt)("p",null,"\u30a2\u30bb\u30c3\u30c8\u3084\u30b7\u30fc\u30f3\u3092\u30ed\u30fc\u30c9\u3059\u308b\u30e1\u30bd\u30c3\u30c9\u306fAssetDisposable\u3092\u8fd4\u3057\u307e\u3059\u3002\nAssetDisposable\u306f\u30ed\u30fc\u30c9\u3057\u305f\u30a2\u30bb\u30c3\u30c8\u306e\u30ea\u30ea\u30fc\u30b9\u3092IDisposable\u306eDispose\u3067\u5b9f\u73fe\u3059\u308b\u30af\u30e9\u30b9\u3067\u3059\u3002\nAssetDisposable\u306b\u3088\u308a\u4ed6\u306eIDisposable\u3092\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3068\u540c\u3058\u3088\u3046\u306b\u30a2\u30bb\u30c3\u30c8\u3092\u6271\u3048\u307e\u3059\u3002\n\u30ed\u30fc\u30c9\u3057\u305f\u30a2\u30bb\u30c3\u30c8\u306fAssetDisposable\u306eResult\u30d7\u30ed\u30d1\u30c6\u30a3\u304b\u3089\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"ScriptableObject\u306a\u3069\u3001\u30bf\u30a4\u30d7\u540d\u3092\u30a2\u30bb\u30c3\u30c8\u540d\u306b\u3059\u308b\u3068\u3001\u30a2\u30bb\u30c3\u30c8\u540d\u3092\u6307\u5b9a\u305b\u305a\u306b\u30a2\u30bb\u30c3\u30c8\u3092\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Asset name: "ChatConfig"\nusing var assetDisposable = await assetProvider.LoadAssetAsync<ChatConfig>();\nvar chatConfig = assetDisposable.Result;\n')),(0,r.kt)("p",null,"\u30b7\u30fc\u30f3\u306e\u30ed\u30fc\u30c9\u306b\u306fLoadSceneAsync\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using var assetDisposable = await assetProvider.LoadSceneAsync("VirtualSpace");\nvar sceneInstance = assetDisposable.Result;\n')),(0,r.kt)("h3",{id:"assets-addressables-retry"},"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u63a5\u7d9a\u3067\u304d\u306a\u3044\u6642\u306b\u518d\u63a5\u7d9a\u3059\u308b"),(0,r.kt)("p",null,"AssetProvider\u306f",(0,r.kt)("a",{parentName:"p",href:"/Extreal.Guide/core/common"},"Common"),"\u304c\u63d0\u4f9b\u3059\u308b\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u4f7f\u3063\u3066\u63a5\u7d9a\u3067\u304d\u306a\u3044\u6642\u306e\u518d\u63a5\u7d9a\u3092\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002\n\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u77e5\u3063\u3066\u3044\u308b\u524d\u63d0\u3067\u4ee5\u964d\u306e\u8aac\u660e\u3092\u3059\u308b\u305f\u3081\u3001\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u78ba\u8a8d\u3057\u3066\u3044\u306a\u3044\u65b9\u306f\u5148\u306b",(0,r.kt)("a",{parentName:"p",href:"/Extreal.Guide/core/common#core-common-retry"},"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406"),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"AssetProvider\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u518d\u63a5\u7d9a\u3092\u884c\u3044\u307e\u305b\u3093\u3002\nAssetProvider\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306b\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u3092\u6307\u5b9a\u3059\u308b\u3068\u518d\u63a5\u7d9a\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var assetProvider = new AssetProvider(new CountingRetryStrategy());\n")),(0,r.kt)("p",null,"AssetProvider\u304c\u884c\u3046\u518d\u63a5\u7d9a\u306e\u51e6\u7406\u5185\u5bb9\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u518d\u63a5\u7d9a\u3092\u5b9f\u884c\u3059\u308b\u30bf\u30a4\u30df\u30f3\u30b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u5931\u6557\u3057\u305f\u5834\u5408",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u3057\u3066\u3044\u306a\u3044\u72b6\u614b\u3067\u30a2\u30bb\u30c3\u30c8\u306e\u30ed\u30fc\u30c9\u3092\u3057\u305f\u5834\u5408\u3082\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u767a\u751f\u3059\u308b\u305f\u3081\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u30ed\u30fc\u30c9\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u3082\u542b\u307e\u308c\u307e\u3059\u3002"))))),(0,r.kt)("li",{parentName:"ul"},"\u518d\u63a5\u7d9a\u306e\u51e6\u7406\u5185\u5bb9",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u5931\u6557\u3057\u305f\u5834\u5408",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u306b\u5fdc\u3058\u3066\u63a5\u7d9a\u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002")))))),(0,r.kt)("p",null,"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u72b6\u6cc1\u306b\u5fdc\u3058\u3066\u51e6\u7406\u3092\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\u306f",(0,r.kt)("a",{parentName:"p",href:"#assets-addressables-event"},"\u30a4\u30d9\u30f3\u30c8\u901a\u77e5"),"\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"assets-addressables-event"},"\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u72b6\u6cc1\u3092\u30c8\u30ea\u30ac\u30fc\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3059\u308b"),(0,r.kt)("p",null,"AssetProvider\u306f\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OnDownloading",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3092\u958b\u59cb\u3059\u308b\u76f4\u524d"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30a2\u30bb\u30c3\u30c8\u540d"))),(0,r.kt)("li",{parentName:"ul"},"OnDownloaded",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u305f\u76f4\u5f8c\uff08\u9014\u4e2d\u7d4c\u904e\u3082\u542b\u3080\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u72b6\u6cc1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u540d\u3001\u30c8\u30fc\u30bf\u30eb\u30d0\u30a4\u30c8\u6570\u3001\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u6e08\u307f\u30d0\u30a4\u30c8\u6570\u3001\u30d1\u30fc\u30bb\u30f3\u30c8\u306a\u3069"))))),(0,r.kt)("li",{parentName:"ul"},"OnConnectRetrying",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u63a5\u7d9a\u3092\u30ea\u30c8\u30e9\u30a4\u3059\u308b\u76f4\u524d"),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30ea\u30c8\u30e9\u30a4\u56de\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1\u56de\u76ee\u306f",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\u30012\u56de\u76ee\u306f",(0,r.kt)("inlineCode",{parentName:"li"},"2"),"\u3068\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),"\u306f\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u306e\u5b9f\u884c\u958b\u59cb\u3092\u610f\u5473\u3057\u307e\u3059\u3002"))))),(0,r.kt)("li",{parentName:"ul"},"OnConnectRetried",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u63a5\u7d9a\u306e\u30ea\u30c8\u30e9\u30a4\u304c\u7d42\u4e86\u3057\u305f\u76f4\u5f8c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u305f\u5834\u5408\u306f\u901a\u77e5\u3055\u308c\u307e\u305b\u3093\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30ea\u30c8\u30e9\u30a4\u7d50\u679c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"true\uff1a\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u3092\u5b9f\u884c\u3057\u3066\u30ea\u30c8\u30e9\u30a4\u304c\u6210\u529f\u3057\u305f\u5834\u5408"),(0,r.kt)("li",{parentName:"ul"},"false\uff1a\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u3092\u5b9f\u884c\u3057\u3066\u6700\u7d42\u7684\u306b\u30ea\u30c8\u30e9\u30a4\u304c\u6210\u529f\u3057\u306a\u304b\u3063\u305f\u5834\u5408")))))),(0,r.kt)("h3",{id:"assets-addressables-crypto"},"\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316\u3068\u5fa9\u53f7\u3092\u884c\u3046"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u3046\u3060\u3051\u3067\u306f\u77e5\u7684\u8ca1\u7523\u4fdd\u8b77\u3068\u3057\u3066\u306f\u5f31\u3044\u306e\u3067\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u3046\u3053\u3068\u3067\u6697\u53f7\u5316\u3055\u308c\u305f\u30a2\u30bb\u30c3\u30c8\u306e\u307f\u3092\u624b\u306b\u5165\u308c\u305f\u5834\u5408\u306f\u5fa9\u53f7\u3067\u304d\u307e\u305b\u3093\u3002\n\u4f8b\u3048\u3070\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u5148\u306eURL\u304c\u5206\u304b\u3063\u3066\u3082\u5fa9\u53f7\u3067\u304d\u306a\u3044\u305f\u3081\u30a2\u30bb\u30c3\u30c8\u306e\u6d41\u7528\u3092\u9632\u3052\u307e\u3059\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u3057\u304b\u3057\u3001\u6697\u53f7\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3084\u5fa9\u53f7\u306b\u4f7f\u3046\u30ad\u30fc\uff08ICryptoStreamFactory\u306e\u5b9f\u88c5\uff09\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d44\u307f\u8fbc\u3093\u3067\u3044\u308b\u5834\u5408\u306f\u3001\u30ea\u30d0\u30fc\u30b9\u30a8\u30f3\u30b8\u30cb\u30a2\u30a2\u30ea\u30f3\u30b0\u306b\u3088\u308a\u5fa9\u53f7\u306b\u5fc5\u8981\u306a\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u5fa9\u53f7\u3067\u304d\u3066\u3057\u307e\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u77e5\u7684\u8ca1\u7523\u4fdd\u8b77\u3092\u76ee\u7684\u3068\u3059\u308b\u5834\u5408\u306f\u672c\u6a5f\u80fd\u306b\u52a0\u3048\u3066\u30ea\u30d0\u30fc\u30b9\u30a8\u30f3\u30b8\u30cb\u30a2\u30a2\u30ea\u30f3\u30b0\u5bfe\u5fdc\u306a\u3069\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u306e\u5fa9\u53f7\u3092\u9632\u3050\u5bfe\u5fdc\u304c\u5fc5\u8981\u3067\u3059\u3002")),(0,r.kt)("p",null,"Addressables\u306e\u30d3\u30eb\u30c9\u30b9\u30af\u30ea\u30d7\u30c8\u3068ResourceProvider\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316\u3068\u5fa9\u53f7\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002\n\u6b21\u306e\u30af\u30e9\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316\u3092\u884c\u3046\u30d3\u30eb\u30c9\u30b9\u30af\u30ea\u30d7\u30c8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BuildScriptEncryptMode"))),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u5fa9\u53f7\u3092\u884c\u3046ResourceProvider",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CryptoAssetBundleProviderBase"),(0,r.kt)("li",{parentName:"ul"},"CryptoAssetBundleResource"),(0,r.kt)("li",{parentName:"ul"},"DownloadHandlerFileWithDecryption"))),(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316\u3068\u5fa9\u53f7\u306b\u4f7f\u3046CryptoStream\u3092\u751f\u6210\u3059\u308b\u30d5\u30a1\u30af\u30c8\u30ea",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ICryptoStreamFactory")))),(0,r.kt)("p",null,"\u3053\u308c\u3089\u306e\u30af\u30e9\u30b9\u306f\u6b21\u306e\u3088\u3046\u306a\u95a2\u9023\u304c\u3042\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u3059\u308b\u6697\u53f7\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3084\u30ad\u30fc\u306e\u7ba1\u7406\u306f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u6c42\u3081\u3089\u308c\u308b\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30ec\u30d9\u30eb\u306b\u5fdc\u3058\u3066\u5909\u308f\u308b\u305f\u3081\u3001\u305d\u308c\u3089\u306e\u51e6\u7406\u3092\u63d0\u4f9b\u3059\u308bICryptoStreamFactory\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"ICryptoStreamFactory\u3092\u7d44\u307f\u8fbc\u3080\u305f\u3081\u306bBase\u30af\u30e9\u30b9\u3068\u3057\u3066CryptoAssetBundleProviderBase\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},"CryptoAssetBundleProviderBase\u306fICryptoStreamFactory\u3092\u4f7f\u3063\u3066\u30a2\u30bb\u30c3\u30c8\u3092\u5fa9\u53f7\u3057\u307e\u3059\u3002(\u5b9f\u969b\u306b\u306fCryptoAssetBundleResource\u3001DownloadHandlerFileWithDecryption\u304c\u884c\u3044\u307e\u3059)"),(0,r.kt)("li",{parentName:"ul"},"BuildScriptEncryptMode\u306f\u30d3\u30eb\u30c9\u5b9f\u884c\u6642\u306bAsset Group\u306b\u6307\u5b9a\u3055\u308c\u3066\u3044\u308bResourceProvider\u304cCryptoAssetBundleProviderBase\u3092\u7d99\u627f\u3057\u305f\u30af\u30e9\u30b9\u306e\u5834\u5408\u306fICryptoStreamFactory\u3092\u4f7f\u3063\u3066\u6697\u53f7\u5316\u3092\u884c\u3044\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f\u6697\u53f7\u5316\u3092\u884c\u3044\u307e\u305b\u3093\u3002")),(0,r.kt)("p",null,"\u3053\u306e\u6a5f\u80fd\u306e\u9069\u7528\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u307e\u305a\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u6697\u53f7\u5316\u3092\u884c\u3046\u30d3\u30eb\u30c9\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u6b21\u306e\u624b\u9806\u3067\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30a2\u30bb\u30c3\u30c8\u4f5c\u6210\u30e1\u30cb\u30e5\u30fc\u306e",(0,r.kt)("inlineCode",{parentName:"li"},"Extreal > Integration.AssetWorkflow.Addressables.Editor > Encrypt Build Script"),"\u304b\u3089ScriptableObject\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AddressablesAssetSettings"),"\u306e\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"li"},"Build and Play Mode Scripts"),"\u306b\u4f5c\u6210\u3057\u305fScriptableObject\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,r.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u306b\u3088\u308a\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Addressables Group"),"\u30a6\u30a3\u30f3\u30c9\u30a6\u306e",(0,r.kt)("inlineCode",{parentName:"p"},"Build > New Build > Encrypt Build Script"),"\u304c\u9078\u3079\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u6b21\u306b\u3001\u30a2\u30bb\u30c3\u30c8\u306e\u5fa9\u53f7\u3092\u884c\u3046ResourceProvider\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n\u5148\u306bICryptoStreamFactory\u306e\u5b9f\u88c5\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8981\u4ef6\u306b\u5408\u308f\u305b\u3066ICryptoStreamFactory\u3092\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002\n\u5b9f\u88c5\u30a4\u30e1\u30fc\u30b8\u3092\u4f1d\u3048\u308b\u305f\u3081\u306bAES\u3092\u4f7f\u3063\u305f\u5b9f\u88c5\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class CryptoStreamFactory : ICryptoStreamFactory\n{\n    public CryptoStream CreateEncryptStream(Stream baseStream, AssetBundleRequestOptions options)\n        => CreateCryptoStream(baseStream, options, CryptoStreamMode.Write);\n\n    public CryptoStream CreateDecryptStream(Stream baseStream, AssetBundleRequestOptions options)\n        => CreateCryptoStream(baseStream, options, CryptoStreamMode.Read);\n\n    private static CryptoStream CreateCryptoStream\n    (\n        Stream baseStream,\n        AssetBundleRequestOptions options,\n        CryptoStreamMode mode\n    )\n    {\n        using var aes = CreateAesManaged(options);\n        var cryptor = mode == CryptoStreamMode.Write ? aes.CreateEncryptor() : aes.CreateDecryptor();\n        return new CryptoStream(baseStream, cryptor, mode);\n    }\n\n    [SuppressMessage("Usage", "CC0022")]\n    private static AesManaged CreateAesManaged(AssetBundleRequestOptions options)\n    {\n        const int keyLength = 128;\n        var salt = Encoding.UTF8.GetBytes(options.BundleName);\n\n        using var keyGen = new Rfc2898DeriveBytes(SecretVariables.CryptAssetPassword, salt, 100, HashAlgorithmName.SHA256);\n        using var ivGen = new Rfc2898DeriveBytes(SecretVariables.CryptAssetIv, salt, 1, HashAlgorithmName.SHA256);\n\n        var key = keyGen.GetBytes(keyLength / 8);\n        var iv = ivGen.GetBytes(keyLength / 8);\n\n        return new AesManaged\n        {\n            BlockSize = keyLength,\n            KeySize = keyLength,\n            Mode = CipherMode.CBC,\n            Padding = PaddingMode.PKCS7,\n            Key = key,\n            IV = iv\n        };\n    }\n}\n')),(0,r.kt)("p",null,"CryptoAssetBundleProviderBase\u3092\u7d99\u627f\u3057\u305f\u30af\u30e9\u30b9\u3092\u5b9f\u88c5\u3057\u307e\u3059\u3002\nICryptoStreamFactory\u3092\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3092\u8fd4\u3059\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[DisplayName("Crypto AssetBundle Provider")]\npublic class CryptoAssetBundleProvider : CryptoAssetBundleProviderBase\n{\n    public override ICryptoStreamFactory CryptoStreamFactory => new CryptoStreamFactory();\n}\n')),(0,r.kt)("p",null,"\u3053\u308c\u3067",(0,r.kt)("inlineCode",{parentName:"p"},"Addressables Asset Group"),"\u306e\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u304b\u3089",(0,r.kt)("inlineCode",{parentName:"p"},"Content Packing & Loading > Advanced Options > Asset Bundle Provider"),"\u306b\u3066\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3092\u9078\u3079\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"))}c.isMDXComponent=!0}}]);