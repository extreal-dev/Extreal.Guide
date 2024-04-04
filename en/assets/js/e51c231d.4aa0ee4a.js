"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[9207],{6306:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(9668),r=(n(6540),n(5680)),l=n(7443);const i={sidebar_position:4},o="Common for Web",s={unversionedId:"integration/web.common",id:"integration/web.common",title:"Common for Web",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/integration/web.common.md",sourceDirName:"integration",slug:"/integration/web.common",permalink:"/Extreal.Guide/en/next/integration/web.common",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Chat using WebRTC",permalink:"/Extreal.Guide/en/next/integration/chat.webrtc"},next:{title:"Messaging",permalink:"/Extreal.Guide/en/next/integration/messaging"}},p={},c=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"VideoPlayer",id:"videoplayer",level:3},{value:"Unity",id:"unity",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Unity",id:"unity-1",level:4},{value:"npm",id:"npm",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Unity",id:"unity-2",level:4},{value:"npm",id:"npm-1",level:4},{value:"Settings",id:"settings",level:3},{value:"VideoPlayer",id:"videoplayer-1",level:4},{value:"Usage",id:"usage",level:2},{value:"Call JavaScript from C#",id:"call-javascript-from-csharp",level:3},{value:"Callback from JavaScript to C#",id:"callback-from-javascript-to-csharp",level:3},{value:"Suppress trace logs of JavaScript call",id:"suppress-trace-logs-of-javascript-call",level:3},{value:"Play videos according to platform",id:"play-videos-according-to-platform",level:3}],d={toc:c},u="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"common-for-web"},"Common for Web"),(0,r.yg)("h2",{id:"what-for"},"What for?"),(0,r.yg)("p",null,"Unity allows users to create browser-oriented applications using the WebGL platform.\nBrowser-oriented applications require calling processing and passing data between Unity(C#) and the browser(JavaScript)."),(0,r.yg)("p",null,"This module hides the slightly more complex mechanism of C# and JavaScript integration provided by Unity and provides a WebGL helper for easy C# and JavaScript interaction."),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You can call JavaScript from C#."),(0,r.yg)("li",{parentName:"ul"},"You can do callbacks from JavaScript to C#."),(0,r.yg)("li",{parentName:"ul"},"You can suppress trace logs of JavaScript call."),(0,r.yg)("li",{parentName:"ul"},"You can play videos according to the platform.")),(0,r.yg)("h2",{id:"architecture"},"Architecture"),(0,r.yg)(l.K,{chart:"classDiagram\n\n    WebGLHelper ..> WebGLHelperConfig\n    WebGLHelper ..> helper\n\n    class WebGLHelper {\n        <<C#>>\n        +Initialize(webGLHelperConfig)$ void\n        +CallAction(name, str1, str2)$ void\n        +CallFunction(name, str1, str2)$ string\n        +AddCallback(name, action)$ void\n    }\n    \n    class WebGLHelperConfig {\n        <<C#>>\n        +IsDebug bool\n    }\n\n    class helper {\n        <<TypeScript>>\n        +addAction(name, action, isSuppressTraceLog) void\n        +addFunction(name, func, isSuppressTraceLog) void\n        +callback(name, strParam1, strParam2, isSuppressTraceLog) void\n        +isDebug boolean\n        +waitUntil(condition, cancel, interval) void\n        +isAsync(func) boolean\n    }",mdxType:"Mermaid"}),(0,r.yg)("h3",{id:"videoplayer"},"VideoPlayer"),(0,r.yg)("h4",{id:"unity"},"Unity"),(0,r.yg)(l.K,{chart:"classDiagram\n\n    EVideoPlayerProvider ..> EVideoPlayer\n    EVideoPlayer <|-- NativeEVideoPlayer\n    EVideoPlayer <|-- WebGLEVideoPlayer\n\n    class EVideoPlayerProvider {\n        +Provide(videoPlayer, targetRenderTexture)$ EVideoPlayer\n    }\n\n    class EVideoPlayer {\n        <<abstract>>\n        +OnPrepareCompleted IObservable\n        +OnErrorReceived IObservable\n        +Length double\n        +SetUrl(url) void\n        +SetTime(time) void\n        +Prepare() void\n        +Play() void\n        +Pause() void\n        +Stop() void\n        +SetAudioVolume(volume, trackIndex) void\n    }\n    \n    class NativeEVideoPlayer {\n    }\n\n    class WebGLEVideoPlayer {\n    }",mdxType:"Mermaid"}),(0,r.yg)("h4",{id:"javascript"},"JavaScript"),(0,r.yg)(l.K,{chart:"classDiagram\n\n    WebGLEVideoPlayer ..> WebGLHelper  \n    VideoPlayer <.. WebGLHelper  \n    VideoPlayerAdapter ..> VideoPlayer\n\n    class WebGLEVideoPlayer {\n        <<C#>>\n    }\n    \n    class WebGLHelper {\n        <<C#>>\n    }\n\n    class VideoPlayerAdapter {\n        <<TypeScript>>\n        +adapt() void\n    }\n    \n    class VideoPlayer {\n        <<TypeScript>>\n    }",mdxType:"Mermaid"}),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("h3",{id:"package"},"Package"),(0,r.yg)("h4",{id:"unity-1"},"Unity"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Web.Common.git\n")),(0,r.yg)("h4",{id:"npm"},"npm"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"@extreal-dev/extreal.integration.web.common\n")),(0,r.yg)("h3",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"This module uses the following packages."),(0,r.yg)("h4",{id:"unity-2"},"Unity"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/logging"},"Extreal.Core.Logging")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/common"},"Extreal.Core.Common")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json"},"System.Text.Json"))),(0,r.yg)("h4",{id:"npm-1"},"npm"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"There are no dependencies.")),(0,r.yg)("h3",{id:"settings"},"Settings"),(0,r.yg)("p",null,"The WebGL helper needs to be initialized.\nPlease initialize the WebGL helper when you start the application."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"WebGLHelper.Initialize();\n")),(0,r.yg)("p",null,"The browser can output debug logs of the status of JavaScript calls.\nThe default is to not output debug logs, so if you want to output debug logs, specify them in WebGLHelperConfig."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"WebGLHelper.Initialize(new WebGLHelperConfig { IsDebug = true });\n")),(0,r.yg)("h4",{id:"videoplayer-1"},"VideoPlayer"),(0,r.yg)("p",null,"Create an EVideoPlayer using EVideoPlayerProvider.\nIf using WebGL, set the RenderTexture you want to use to targetRenderTexture.\nFor non-WebGL, set the VideoPlayer component you want to use to videoPlayer."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"var eVideoPlayer = EVideoPlayerProvider.Provide(videoPlayer, renderTexture);\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If you set both TargetRenderTexture and VideoPlayer, you can use both WebGL-oriented and non-WebGL features simply by switching platforms.")),(0,r.yg)("p",null,"If you want to use on WebGL, initialize it further in JavaScript.\nCreate a VideoPlayerAdapter and call the adapt function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'import { VideoPlayerAdapter } from "@extreal-dev/extreal.integration.web.common";\n\nconst videoPlayerAdapter = new VideoPlayerAdapter();\nvideoPlayerAdapter.adapt();\n')),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"call-javascript-from-csharp"},"Call JavaScript from C#"),(0,r.yg)("p",null,"C# to JavaScript calls provide only the following signatures."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Function with no return value",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Arguments: 2 strings"),(0,r.yg)("li",{parentName:"ul"},"Return value: None"),(0,r.yg)("li",{parentName:"ul"},"Example:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"const action = (param1: string, param2: string): void => {\n    // do something\n}\n"))))),(0,r.yg)("li",{parentName:"ul"},"Function with return value",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Arguments: 2 strings"),(0,r.yg)("li",{parentName:"ul"},"Return value: string"),(0,r.yg)("li",{parentName:"ul"},"Example:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'const func = (param1: string, param2: string): string => {\n    return "do something";\n}\n')))))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Arguments and return value are strings, so use JSON if you want to handle complex data structures.")),(0,r.yg)("p",null,"The C# side calls JavaScript using WebGLHelper's CallAction/CallFunction.\nAction corresponds to a function without a return value and Function corresponds to a function with a return value.\nThe mapping between C# and JavaScript is done by the string target name."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'public class Sample : DisposableBase\n{\n    public void DoAction(string param1, string param2)\n        => WebGLHelper.CallAction("DoAction", param1, param2);\n\n    public string DoFunction(string param1, string param2)\n        => WebGLHelper.CallFunction("DoFunction", param1, param2);\n}\n')),(0,r.yg)("p",null,"The JavaScript side uses addAction/addFunction."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'import { addAction, addFunction } from "@extreal-dev/extreal.integration.web.common";\n\naddAction("DoAction", (str1, str2) => {\n    // do something\n});\n\naddFunction("DoFunction", (str1, str2) => {\n    return "do something";\n});\n')),(0,r.yg)("h3",{id:"callback-from-javascript-to-csharp"},"Callback from JavaScript to C#"),(0,r.yg)("p",null,"Only the following signatures are provided for JavaScript to C# callback."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Action<string, string>")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Arguments and return value are strings, so use JSON if you want to handle complex data structures.")),(0,r.yg)("p",null,"The JavaScript side uses callback.\nThe mapping between JavaScript and C# is done by the string target name."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'import { callback } from "@extreal-dev/extreal.integration.web.common";\n\ncallback("HandleOnCallback", "param1", "param2");\n')),(0,r.yg)("p",null,"The C# side uses WebGLHelper's AddCallback.\nIn this example implementation, the callback is received and event notification is sent."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'public class Sample : DisposableBase\n{\n    public IObservable<string> OnCallback => onCallback;\n    private readonly Subject<string> onCallback = new Subject<string>();\n\n    private static Sample instance;\n    public Sample()\n    {\n        instance = this;\n        WebGLHelper.AddCallback(nameof(HandleOnCallback), HandleOnCallback);\n    }\n\n    [MonoPInvokeCallback(typeof(Action<string, string>))]\n    private static void HandleOnCallback(string str1, string str2)\n        => instance.onCallback.OnNext($"received {str1} {str2} in callback");\n\n    protected override void ReleaseManagedResources() => onCallback.Dispose();\n}\n')),(0,r.yg)("h3",{id:"suppress-trace-logs-of-javascript-call"},"Suppress trace logs of JavaScript call"),(0,r.yg)("p",null,"If you specify to output logs when ",(0,r.yg)("a",{parentName:"p",href:"#settings"},"initializing the WebGL helper"),", it will print a log every time ",(0,r.yg)("a",{parentName:"p",href:"#call-javascript-from-csharp"},"JavaScript is called from C#")," and every time ",(0,r.yg)("a",{parentName:"p",href:"#callback-from-javascript-to-csharp"},"JavaScript calls back to C#"),"."),(0,r.yg)("p",null,"Sometimes you may want to suppress this log output, such as when functions or callbacks are called at a high frequency.\nIn such cases, you can suppress this log output at function registration or callback.\nBy setting isSuppressTraceLog of addAction/addFunction/callback to true, log output for that function call or callback will be suppressed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},'import { addAction, addFunction, callback } from "@extreal-dev/extreal.integration.web.common";\n\naddAction("DoTraceLogSuppressedAction",\n    (str1, str2) => {\n        // do something\n    },\n    true);  // isSuppressTraceLog\n\naddFunction(\n    "DoTraceLogSuppressedFunction",\n    (str1, str2) => {\n        return "do something";\n    },\n    true);  // isSuppressTraceLog\n\ncallback(\n    "DoTraceLogSuppressedCallback",\n    "param1",\n    "param2",\n    true);  // isSuppressTraceLog\n')),(0,r.yg)("h3",{id:"play-videos-according-to-platform"},"Play videos according to platform"),(0,r.yg)("p",null,"The ability to delegate video playback on WebGL to JavaScript is provided by EVideoPlayer."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The same API can be used for video playback on the platforms other than WebGL.")),(0,r.yg)("p",null,"Set the URL where the video you wish to use is located and prepare for video playback."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},'videoPlayer.SetUrl("URL");\nvideoPlayer.Prepare();\n')),(0,r.yg)("p",null,"The OnPrepareCompleted event fires when the video is ready to play."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.OnPrepareCompleted\n    .Subscribe(_ =>\n    {\n        // Handle processing when preparation is completed here.\n    })\n    .AddTo(disposables);\n")),(0,r.yg)("p",null,"Use the Play/Pause/Stop methods to play/pause/stop video, respectively."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.Play();\nvideoPlayer.Pause();\nvideoPlayer.Stop();\n")),(0,r.yg)("p",null,"If an error occurs during video preparation or playback, the OnErrorReceived event is fired."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.OnErrorReceived\n    .Subscribe(appState.Notify)\n    .AddTo(disposables);\n")),(0,r.yg)("p",null,"To adjust the volume of the video, use the SetAudioVolume method.\nEnter a float value between 0 and 1 for the argument volume."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.SetAudioVolume(volume);\n")),(0,r.yg)("p",null,"Use the Length property to obtain the length of the video.\nThe unit of the return value is seconds."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"var videoLength = videoPlayer.Length;\n")),(0,r.yg)("p",null,"Use the SetTime method to specify the playback position of the video.\nThe unit of argument is seconds."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"videoPlayer.SetTime(time);\n")))}g.isMDXComponent=!0}}]);