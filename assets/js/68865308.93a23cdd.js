"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[2811],{9650:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>t,metadata:()=>p,toc:()=>d});var l=n(9668),r=(n(6540),n(5680)),i=n(7443);const t={sidebar_position:5},o="Common for Web",p={unversionedId:"integration/web.common",id:"integration/web.common",title:"Common for Web",description:"What for?",source:"@site/docs/integration/web.common.md",sourceDirName:"integration",slug:"/integration/web.common",permalink:"/Extreal.Guide/next/integration/web.common",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Chat using WebRTC",permalink:"/Extreal.Guide/next/integration/chat.webrtc"},next:{title:"Messaging",permalink:"/Extreal.Guide/next/integration/messaging"}},c={},d=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"VideoPlayer",id:"videoplayer",level:3},{value:"Unity",id:"unity",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Unity",id:"unity-1",level:4},{value:"npm",id:"npm",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Unity",id:"unity-2",level:4},{value:"npm",id:"npm-1",level:4},{value:"Settings",id:"settings",level:3},{value:"VideoPlayer",id:"videoplayer-1",level:4},{value:"Usage",id:"usage",level:2},{value:"C#\u304b\u3089JavaScript\u3092\u547c\u3073\u51fa\u3059",id:"c\u304b\u3089javascript\u3092\u547c\u3073\u51fa\u3059",level:3},{value:"JavaScript\u304b\u3089C#\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b",id:"javascript\u304b\u3089c\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b",level:3},{value:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5fdc\u3058\u305f\u30d3\u30c7\u30aa\u518d\u751f\u3092\u884c\u3046",id:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5fdc\u3058\u305f\u30d3\u30c7\u30aa\u518d\u751f\u3092\u884c\u3046",level:3}],g={toc:d},s="wrapper";function y(e){let{components:a,...n}=e;return(0,r.yg)(s,(0,l.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"common-for-web"},"Common for Web"),(0,r.yg)("h2",{id:"what-for"},"What for?"),(0,r.yg)("p",null,"Unity\u3067\u306fWebGL\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u4f7f\u7528\u3057\u3066\u30d6\u30e9\u30a6\u30b6\u5411\u3051\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002\n\u30d6\u30e9\u30a6\u30b6\u5411\u3051\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u306fUnity(C#)\u3068\u30d6\u30e9\u30a6\u30b6(JavaScript)\u9593\u306e\u51e6\u7406\u306e\u547c\u3073\u51fa\u3057\u3084\u30c7\u30fc\u30bf\u306e\u53d7\u3051\u6e21\u3057\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.yg)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u306fUnity\u3067\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308bC#\u3068JavaScript\u9023\u643a\u306e\u5c11\u3057\u8907\u96d1\u306a\u4ed5\u7d44\u307f\u3092\u96a0\u853d\u3057\u3001C#\u3068JavaScript\u306e\u76f8\u4e92\u4f5c\u7528\u3092\u7c21\u5358\u306b\u884c\u3048\u308b\u3088\u3046\u306bWebGL\u30d8\u30eb\u30d1\u30fc\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"C#\u304b\u3089JavaScript\u3092\u547c\u3073\u51fa\u305b\u307e\u3059\u3002"),(0,r.yg)("li",{parentName:"ul"},"JavaScript\u304b\u3089C#\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u304d\u307e\u3059\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5fdc\u3058\u305f\u30d3\u30c7\u30aa\u518d\u751f\u304c\u3067\u304d\u307e\u3059\u3002")),(0,r.yg)("h2",{id:"architecture"},"Architecture"),(0,r.yg)(i.K,{chart:"classDiagram\n\n    WebGLHelper ..> WebGLHelperConfig\n    WebGLHelper ..> helper\n\n    class WebGLHelper {\n        <<C#>>\n        +Initialize(webGLHelperConfig)$ void\n        +CallAction(name, str1, str2)$ void\n        +CallFunction(name, str1, str2)$ string\n        +AddCallback(name, action)$ void\n    }\n    \n    class WebGLHelperConfig {\n        <<C#>>\n        +IsDebug bool\n    }\n\n    class helper {\n        <<TypeScript>>\n        +addAction(name, action) void\n        +addFunction(name, func) void\n        +callback(name, strParam1, strParam2) void\n        +isDebug boolean\n        +waitUntil(condition, cancel, interval) void\n        +isAsync(func) boolean\n    }",mdxType:"Mermaid"}),(0,r.yg)("h3",{id:"videoplayer"},"VideoPlayer"),(0,r.yg)("h4",{id:"unity"},"Unity"),(0,r.yg)(i.K,{chart:"classDiagram\n\n    EVideoPlayerProvider ..> EVideoPlayer\n    EVideoPlayer <|-- NativeEVideoPlayer\n    EVideoPlayer <|-- WebGLEVideoPlayer\n\n    class EVideoPlayerProvider {\n        +Provide(videoPlayer, targetRenderTexture)$ EVideoPlayer\n    }\n\n    class EVideoPlayer {\n        <<abstract>>\n        +OnPrepareCompleted IObservable\n        +OnErrorReceived IObservable\n        +Length double\n        +SetUrl(url) void\n        +SetTime(time) void\n        +Prepare() void\n        +Play() void\n        +Pause() void\n        +Stop() void\n        +SetAudioVolume(volume, trackIndex) void\n    }\n    \n    class NativeEVideoPlayer {\n    }\n\n    class WebGLEVideoPlayer {\n    }",mdxType:"Mermaid"}),(0,r.yg)("h4",{id:"javascript"},"JavaScript"),(0,r.yg)(i.K,{chart:"classDiagram\n\n    WebGLEVideoPlayer ..> WebGLHelper  \n    VideoPlayer <.. WebGLHelper  \n    VideoPlayerAdapter ..> VideoPlayer\n\n    class WebGLEVideoPlayer {\n        <<C#>>\n    }\n    \n    class WebGLHelper {\n        <<C#>>\n    }\n\n    class VideoPlayerAdapter {\n        <<TypeScript>>\n        +adapt() void\n    }\n    \n    class VideoPlayer {\n        <<TypeScript>>\n    }",mdxType:"Mermaid"}),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("h3",{id:"package"},"Package"),(0,r.yg)("h4",{id:"unity-1"},"Unity"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Web.Common.git\n")),(0,r.yg)("h4",{id:"npm"},"npm"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"@extreal-dev/extreal.integration.web.common\n")),(0,r.yg)("h3",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.yg)("h4",{id:"unity-2"},"Unity"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Extreal.Guide/next/core/logging"},"Extreal.Core.Logging")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Extreal.Guide/next/core/common"},"Extreal.Core.Common")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json"},"System.Text.Json"))),(0,r.yg)("h4",{id:"npm-1"},"npm"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4f9d\u5b58\u3059\u308b\u3082\u306e\u306f\u3042\u308a\u307e\u305b\u3093\u3002")),(0,r.yg)("h3",{id:"settings"},"Settings"),(0,r.yg)("p",null,"WebGL\u30d8\u30eb\u30d1\u30fc\u306e\u521d\u671f\u5316\u304c\u5fc5\u8981\u3067\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8d77\u52d5\u6642\u306bWebGL\u30d8\u30eb\u30d1\u30fc\u306e\u521d\u671f\u5316\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"WebGLHelper.Initialize();\n")),(0,r.yg)("p",null,"\u30d6\u30e9\u30a6\u30b6\u5074\u3067JavaScript\u306e\u547c\u3073\u51fa\u3057\u72b6\u6cc1\u3092\u30ed\u30b0\u306b\u51fa\u529b\u3067\u304d\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u30ed\u30b0\u3092\u51fa\u529b\u3057\u306a\u3044\u306e\u3067\u3001\u30ed\u30b0\u3092\u51fa\u529b\u3057\u305f\u3044\u5834\u5408\u306fWebGLHelperConfig\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"WebGLHelper.Initialize(new WebGLHelperConfig { IsDebug = true });\n")),(0,r.yg)("h4",{id:"videoplayer-1"},"VideoPlayer"),(0,r.yg)("p",null,"EVideoPlayerProvider\u3092\u4f7f\u3063\u3066EVideoPlayer\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\nWebGL\u3067\u4f7f\u3046\u5834\u5408\u306ftargetRenderTexture\u306b\u4f7f\u7528\u3057\u305f\u3044RenderTexture\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\nWebGL\u4ee5\u5916\u3067\u4f7f\u3046\u5834\u5408\u306fvideoPlayer\u306b\u4f7f\u7528\u3057\u305f\u3044VideoPlayer\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"var eVideoPlayer = EVideoPlayerProvider.Provide(videoPlayer, renderTexture);\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"TargetRenderTexture\u3068VideoPlayer\u3092\u3069\u3061\u3089\u3082\u8a2d\u5b9a\u3059\u308b\u3068\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u5207\u308a\u66ff\u3048\u308b\u3060\u3051\u3067WebGL\u5411\u3051\u306e\u6a5f\u80fd\u3082WebGL\u4ee5\u5916\u306e\u6a5f\u80fd\u3082\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,r.yg)("p",null,"WebGL\u3067\u4f7f\u3046\u5834\u5408\u306f\u3055\u3089\u306bJavaScript\u3067\u521d\u671f\u5316\u3092\u884c\u3044\u307e\u3059\u3002\nVideoPlayerAdapter\u3092\u4f5c\u6210\u3057\u3066adapt\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'import { VideoPlayerAdapter } from "@extreal-dev/extreal.integration.web.common";\n\nconst videoPlayerAdapter = new VideoPlayerAdapter();\nvideoPlayerAdapter.adapt();\n')),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"c\u304b\u3089javascript\u3092\u547c\u3073\u51fa\u3059"},"C#\u304b\u3089JavaScript\u3092\u547c\u3073\u51fa\u3059"),(0,r.yg)("p",null,"C#\u304b\u3089JavaScript\u306e\u547c\u3073\u51fa\u3057\u306f\u6b21\u306e\u30b7\u30b0\u30cd\u30c1\u30e3\u306e\u307f\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u623b\u308a\u5024\u306a\u3057\u95a2\u6570",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u5f15\u6570\uff1a\u6587\u5b57\u52172\u3064"),(0,r.yg)("li",{parentName:"ul"},"\u623b\u308a\u5024\uff1a\u306a\u3057"),(0,r.yg)("li",{parentName:"ul"},"\u4f8b\uff1a",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const action = (param1: string, param2: string): void => {\n    // do something\n}\n"))))),(0,r.yg)("li",{parentName:"ul"},"\u623b\u308a\u5024\u3042\u308a\u95a2\u6570",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u5f15\u6570\uff1a\u6587\u5b57\u52172\u3064"),(0,r.yg)("li",{parentName:"ul"},"\u623b\u308a\u5024\uff1a\u6587\u5b57\u5217"),(0,r.yg)("li",{parentName:"ul"},"\u4f8b\uff1a",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'const func = (param1: string, param2: string): string => {\n    return "do something";\n}\n')))))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"\u5f15\u6570\u3068\u623b\u308a\u5024\u306f\u6587\u5b57\u5217\u306b\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u8907\u96d1\u306a\u30c7\u30fc\u30bf\u69cb\u9020\u3092\u6271\u3044\u305f\u3044\u5834\u5408\u306fJSON\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.yg)("p",null,"C#\u5074\u306fWebGLHelper\u306eCallAction/CallFunction\u3092\u4f7f\u3063\u3066JavaScript\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002\nAction\u304c\u623b\u308a\u5024\u306a\u3057\u3001Function\u304c\u623b\u308a\u5024\u3042\u308a\u306e\u95a2\u6570\u306b\u5bfe\u5fdc\u3057\u307e\u3059\u3002\nC#\u3068JavaScript\u306e\u5bfe\u5fdc\u4ed8\u3051\u306f\u6587\u5b57\u5217\u306e\u30bf\u30fc\u30b2\u30c3\u30c8\u540d\u3067\u884c\u3044\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'public class Sample : DisposableBase\n{\n    public void DoAction(string param1, string param2)\n        => WebGLHelper.CallAction("DoAction", param1, param2);\n\n    public string DoFunction(string param1, string param2)\n        => WebGLHelper.CallFunction("DoFunction", param1, param2);\n}\n')),(0,r.yg)("p",null,"JavaScript\u5074\u306faddAction/addFunction\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'import { addAction, addFunction } from "@extreal-dev/extreal.integration.web.common";\n\naddAction("DoAction", (str1, str2) => {\n    // do something\n});\n\naddFunction("DoFunction", (str1, str2) => {\n    return "do something";\n});\n')),(0,r.yg)("h3",{id:"javascript\u304b\u3089c\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b"},"JavaScript\u304b\u3089C#\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3059\u308b"),(0,r.yg)("p",null,"JavaScript\u304b\u3089C#\u3078\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306f\u6b21\u306e\u30b7\u30b0\u30cd\u30c1\u30e3\u306e\u307f\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Action<string, string>")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"\u5f15\u6570\u306f\u6587\u5b57\u5217\u306b\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u8907\u96d1\u306a\u30c7\u30fc\u30bf\u69cb\u9020\u3092\u6271\u3044\u305f\u3044\u5834\u5408\u306fJSON\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.yg)("p",null,"JavaScript\u5074\u306fcallback\u3092\u4f7f\u3044\u307e\u3059\u3002\nJavaScript\u3068C#\u306e\u5bfe\u5fdc\u4ed8\u3051\u306f\u6587\u5b57\u5217\u306e\u30bf\u30fc\u30b2\u30c3\u30c8\u540d\u3067\u884c\u3044\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'import { callback } from "@extreal-dev/extreal.integration.web.common";\n\ncallback("HandleOnCallback", "param1", "param2");\n')),(0,r.yg)("p",null,"C#\u5074\u306fWebGLHelper\u306eAddCallback\u3092\u4f7f\u3044\u307e\u3059\u3002\n\u3053\u306e\u5b9f\u88c5\u4f8b\u3067\u306f\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u53d7\u3051\u3066\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u9001\u4fe1\u3057\u3066\u3044\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'public class Sample : DisposableBase\n{\n    public IObservable<string> OnCallback => onCallback;\n    private readonly Subject<string> onCallback = new Subject<string>();\n\n    private static Sample instance;\n    public Sample()\n    {\n        instance = this;\n        WebGLHelper.AddCallback(nameof(HandleOnCallback), HandleOnCallback);\n    }\n\n    [MonoPInvokeCallback(typeof(Action<string, string>))]\n    private static void HandleOnCallback(string str1, string str2)\n        => instance.onCallback.OnNext($"received {str1} {str2} in callback");\n\n    protected override void ReleaseManagedResources() => onCallback.Dispose();\n}\n')),(0,r.yg)("h3",{id:"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5fdc\u3058\u305f\u30d3\u30c7\u30aa\u518d\u751f\u3092\u884c\u3046"},"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5fdc\u3058\u305f\u30d3\u30c7\u30aa\u518d\u751f\u3092\u884c\u3046"),(0,r.yg)("p",null,"WebGL\u3067\u306e\u30d3\u30c7\u30aa\u518d\u751f\u3092JavaScript\u306b\u59d4\u8b72\u3059\u308b\u6a5f\u80fd\u306fEVideoPlayer\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"WebGL\u4ee5\u5916\u3067\u30d3\u30c7\u30aa\u518d\u751f\u3059\u308b\u5834\u5408\u3082\u540c\u69d8\u306eAPI\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002")),(0,r.yg)("p",null,"\u4f7f\u7528\u3057\u305f\u3044\u52d5\u753b\u304c\u5b58\u5728\u3059\u308bURL\u3092\u8a2d\u5b9a\u3057\u3066\u52d5\u753b\u518d\u751f\u306e\u6e96\u5099\u3092\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'videoPlayer.SetUrl("URL");\nvideoPlayer.Prepare();\n')),(0,r.yg)("p",null,"\u52d5\u753b\u518d\u751f\u3092\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u305f\u3089OnPrepareCompleted\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u706b\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.OnPrepareCompleted\n    .Subscribe(_ =>\n    {\n        // Handle processing when preparation is completed here.\n    })\n    .AddTo(disposables);\n")),(0,r.yg)("p",null,"\u52d5\u753b\u3092\u518d\u751f/\u4e00\u6642\u505c\u6b62/\u505c\u6b62\u3057\u305f\u3044\u5834\u5408\u306f\u305d\u308c\u305e\u308cPlay/Pause/Stop\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.Play();\nvideoPlayer.Pause();\nvideoPlayer.Stop();\n")),(0,r.yg)("p",null,"\u52d5\u753b\u306e\u6e96\u5099\u6642\u3084\u518d\u751f\u6642\u306b\u30a8\u30e9\u30fc\u304c\u751f\u3058\u305f\u5834\u5408\u306fOnErrorReceived\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u706b\u3057\u307e\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.OnErrorReceived\n    .Subscribe(appState.Notify)\n    .AddTo(disposables);\n")),(0,r.yg)("p",null,"\u52d5\u753b\u306e\u97f3\u91cf\u3092\u8abf\u7bc0\u3057\u305f\u3044\u5834\u5408\u306fSetAudioVolume\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u5f15\u6570\u306evolume\u306b\u306f0\uff5e1\u306efloat\u5024\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.SetAudioVolume(volume);\n")),(0,r.yg)("p",null,"\u52d5\u753b\u306e\u9577\u3055\u3092\u53d6\u5f97\u3057\u305f\u3044\u5834\u5408\u306fLength\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u623b\u308a\u5024\u306e\u5358\u4f4d\u306f\u79d2\u3067\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"var videoLength = videoPlayer.Length;\n")),(0,r.yg)("p",null,"\u52d5\u753b\u306e\u518d\u751f\u4f4d\u7f6e\u3092\u6307\u5b9a\u3057\u305f\u3044\u5834\u5408\u306fSetTime\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\n\u5f15\u6570\u306e\u5358\u4f4d\u306f\u79d2\u3067\u3059\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.SetTime(time);\n")))}y.isMDXComponent=!0}}]);