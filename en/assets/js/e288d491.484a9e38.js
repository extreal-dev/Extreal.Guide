"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[8076],{3861:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=a(9668),i=(a(6540),a(5680)),l=a(7443);const r={sidebar_position:4},o="Common for Web",s={unversionedId:"integration/web.common",id:"version-1.2.0/integration/web.common",title:"Common for Web",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.2.0/integration/web.common.md",sourceDirName:"integration",slug:"/integration/web.common",permalink:"/Extreal.Guide/en/integration/web.common",draft:!1,tags:[],version:"1.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Asset Workflow using Addressables",permalink:"/Extreal.Guide/en/integration/asset-workflow.addressables"},next:{title:"P2P using WebRTC",permalink:"/Extreal.Guide/en/integration/p2p.webrtc"}},c={},p=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Unity",id:"unity",level:4},{value:"npm",id:"npm",level:4},{value:"Dependencies",id:"dependencies",level:3},{value:"Unity",id:"unity-1",level:4},{value:"npm",id:"npm-1",level:4},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Call JavaScript from C#",id:"call-javascript-from-c",level:3},{value:"Callback from JavaScript to C#",id:"callback-from-javascript-to-c",level:3}],g={toc:p},u="wrapper";function d(e){let{components:n,...a}=e;return(0,i.yg)(u,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"common-for-web"},"Common for Web"),(0,i.yg)("h2",{id:"what-for"},"What for?"),(0,i.yg)("p",null,"Unity allows users to create browser-oriented applications using the WebGL platform.\nBrowser-oriented applications require calling processing and passing data between Unity(C#) and the browser(JavaScript)."),(0,i.yg)("p",null,"This module hides the slightly more complex mechanism of C# and JavaScript integration provided by Unity and provides a WebGL helper for easy C# and JavaScript interaction."),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You can call JavaScript from C#."),(0,i.yg)("li",{parentName:"ul"},"You can do callbacks from JavaScript to C#.")),(0,i.yg)("h2",{id:"architecture"},"Architecture"),(0,i.yg)(l.K,{chart:"classDiagram\n\n    WebGLHelper ..> WebGLHelperConfig\n    WebGLHelper ..> helper\n\n    class WebGLHelper {\n        <<C#>>\n        +Initialize(webGLHelperConfig)$ void\n        +CallAction(name, str1, str2)$ void\n        +CallFunction(name, str1, str2)$ string\n        +AddCallback(name, action)$ void\n    }\n    \n    class WebGLHelperConfig {\n        <<C#>>\n        +IsDebug bool\n    }\n\n    class helper {\n        <<TypeScript>>\n        +addAction(name, action) void\n        +addFunction(name, func) void\n        +callback(name, strParam1, strParam2) void\n        +isDebug boolean\n        +waitUntil(condition, cancel, interval) void\n        +isAsync(func) boolean\n    }",mdxType:"Mermaid"}),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("h3",{id:"package"},"Package"),(0,i.yg)("h4",{id:"unity"},"Unity"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Integration.Web.Common.git\n")),(0,i.yg)("h4",{id:"npm"},"npm"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"@extreal-dev/extreal.integration.web.common\n")),(0,i.yg)("h3",{id:"dependencies"},"Dependencies"),(0,i.yg)("p",null,"This module uses the following packages."),(0,i.yg)("h4",{id:"unity-1"},"Unity"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json"},"System.Text.Json"))),(0,i.yg)("h4",{id:"npm-1"},"npm"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"There are no dependencies.")),(0,i.yg)("h3",{id:"settings"},"Settings"),(0,i.yg)("p",null,"The WebGL helper needs to be initialized.\nPlease initialize the WebGL helper when you start the application."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"WebGLHelper.Initialize();\n")),(0,i.yg)("p",null,"The browser can log the status of JavaScript calls.\nThe default is to not output logs, so if you want to output logs, specify them in WebGLHelperConfig."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"WebGLHelper.Initialize(new WebGLHelperConfig { IsDebug = true });\n")),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("h3",{id:"call-javascript-from-c"},"Call JavaScript from C#"),(0,i.yg)("p",null,"C# to JavaScript calls provide only the following signatures."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Function with no return value",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Arguments: 2 strings"),(0,i.yg)("li",{parentName:"ul"},"Return value: None"),(0,i.yg)("li",{parentName:"ul"},"Example:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"const action = (param1: string, param2: string): void => {\n    // do something\n}\n"))))),(0,i.yg)("li",{parentName:"ul"},"Function with return value",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Arguments: 2 strings"),(0,i.yg)("li",{parentName:"ul"},"Return value: string"),(0,i.yg)("li",{parentName:"ul"},"Example:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'const func = (param1: string, param2: string): string => {\n    return "do something";\n}\n')))))),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Arguments and return value are strings, so use JSON if you want to handle complex data structures.")),(0,i.yg)("p",null,"The C# side calls JavaScript using WebGLHelper's CallAction/CallFunction.\nAction corresponds to a function without a return value and Function corresponds to a function with a return value.\nThe mapping between C# and JavaScript is done by the string target name."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'public class Sample : DisposableBase\n{\n    public void DoAction(string param1, string param2)\n        => WebGLHelper.CallAction("DoAction", param1, param2);\n\n    public string DoFunction(string param1, string param2)\n        => WebGLHelper.CallFunction("DoFunction", param1, param2);\n}\n')),(0,i.yg)("p",null,"The JavaScript side uses addAction/addFunction."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'import { addAction, addFunction } from "@extreal-dev/extreal.integration.web.common";\n\naddAction("DoAction", (str1, str2) => {\n    // do something\n});\n\naddFunction("DoFunction", (str1, str2) => {\n    return "do something";\n});\n')),(0,i.yg)("h3",{id:"callback-from-javascript-to-c"},"Callback from JavaScript to C#"),(0,i.yg)("p",null,"Only the following signatures are provided for JavaScript to C# callback."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Action<string, string>")),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Arguments and return value are strings, so use JSON if you want to handle complex data structures.")),(0,i.yg)("p",null,"The JavaScript side uses callback.\nThe mapping between JavaScript and C# is done by the string target name."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},'import { callback } from "@extreal-dev/extreal.integration.web.common";\n\ncallback("HandleOnCallback", "param1", "param2");\n')),(0,i.yg)("p",null,"The C# side uses WebGLHelper's AddCallback.\nIn this example implementation, the callback is received and event notification is sent."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'public class Sample : DisposableBase\n{\n    public IObservable<string> OnCallback => onCallback;\n    private readonly Subject<string> onCallback = new Subject<string>();\n\n    private static Sample instance;\n    public Sample()\n    {\n        instance = this;\n        WebGLHelper.AddCallback(nameof(HandleOnCallback), HandleOnCallback);\n    }\n\n    [MonoPInvokeCallback(typeof(Action<string, string>))]\n    private static void HandleOnCallback(string str1, string str2)\n        => instance.onCallback.OnNext($"received {str1} {str2} in callback");\n\n    protected override void ReleaseManagedResources() => onCallback.Dispose();\n}\n')))}d.isMDXComponent=!0}}]);