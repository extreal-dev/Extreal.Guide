"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[6888],{6783:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>y,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>g});var r=a(9668),t=(a(6540),a(5680)),l=a(7443);const s={sidebar_position:1},i="Common",o={unversionedId:"core/common",id:"core/common",title:"Common",description:"What for?",source:"@site/docs/core/common.md",sourceDirName:"core",slug:"/core/common",permalink:"/Extreal.Guide/next/core/common",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/Extreal.Guide/next/category/core"},next:{title:"Logging",permalink:"/Extreal.Guide/next/core/logging"}},y={},g=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"System",id:"system",level:3},{value:"Retry",id:"retry",level:3},{value:"Hook",id:"hook",level:3},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Dispose Pattern\u3092\u9069\u7528\u3059\u308b",id:"core-common-dp",level:3},{value:"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u9069\u7528\u3059\u308b",id:"core-common-retry",level:3},{value:"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406",id:"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406",level:4},{value:"\u30ea\u30c8\u30e9\u30a4\u6226\u7565",id:"\u30ea\u30c8\u30e9\u30a4\u6226\u7565",level:4},{value:"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u518d\u5229\u7528",id:"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u518d\u5229\u7528",level:4},{value:"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5",id:"core-common-retry-event",level:4},{value:"IObservable\u306b\u30d5\u30c3\u30af\u3092\u8ffd\u52a0\u3059\u308b",id:"core-common-hook",level:3}],p={toc:g},c="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,r.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"common"},"Common"),(0,t.yg)("h2",{id:"what-for"},"What for?"),(0,t.yg)("p",null,"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6a5f\u80fd\u3092\u5b9f\u73fe\u3059\u308b\u306b\u306f\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u3088\u3046\u306b\u6c4e\u7528\u7684\u306a\u6a5f\u80fd\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\n\u4f8b\u3048\u3070\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3067\u3042\u308c\u3070\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/next/integration/chat.vivox"},"Chat"),"\u3084",(0,t.yg)("a",{parentName:"p",href:"/Extreal.Guide/next/integration/multiplay.ngo"},"Multiplay"),"\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u5916\u90e8API\u547c\u3073\u51fa\u3057\u306a\u3069\u3001\u5916\u90e8\u63a5\u7d9a\u3092\u884c\u3046\u6a5f\u80fd\u3067\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002\n\u3053\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u306f\u305d\u3046\u3044\u3063\u305f\u6c4e\u7528\u7684\u306a\u51e6\u7406\u3092\u5171\u901a\u6a5f\u80fd\u3068\u3057\u3066\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,t.yg)("h2",{id:"specification"},"Specification"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern"),"\u3092\u9069\u7528\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u9069\u7528\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("li",{parentName:"ul"},"IObservable\u306b\u30d5\u30c3\u30af\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002")),(0,t.yg)("h2",{id:"architecture"},"Architecture"),(0,t.yg)("h3",{id:"system"},"System"),(0,t.yg)(l.K,{chart:"classDiagram\n\n    IDisposable <|.. DisposableBase\n    SafeDisposer <.. DisposableBase\n    \n    class SafeDisposer {\n        +SafeDisposer(target, releaseManagedResources, releaseUnmanagedResources)\n        +DisposeByFinalizer()\n        +Dispose()\n    }\n\n    class DisposableBase {\n        #DisposableBase()\n        #ReleaseManagedResources()\n        #ReleaseUnmanagedResources()\n    }\n\n    class IDisposable {\n        <<interface>>\n    }",mdxType:"Mermaid"}),(0,t.yg)("h3",{id:"retry"},"Retry"),(0,t.yg)(l.K,{chart:"classDiagram\n\n    DisposableBase <|-- RetryHandler\n    IRetryStrategy <.. RetryHandler\n    IRetryStrategy <|.. CountingRetryStrategy\n    IRetryStrategy <|.. NoRetryStrategy\n\n    class DisposableBase {\n    }\n\n    class RetryHandler {\n        +OnRetrying IObservable\n        +OnRetried IObservable\n        +Of(action, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(actionAsync, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(func, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(funcAsync, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +HandleAsync() TResult\n    }\n    \n    class IRetryStrategy {\n        <<interface>>\n        +Reset() void\n        +HasNext() bool\n        +Next() TimeSpan\n    }\n    \n    class CountingRetryStrategy {\n        +CountingRetryStrategy(maxRetryCount, nextRetryInterval)\n    }\n    \n    class NoRetryStrategy {\n        +Instance NoRetryStrategy\n    }",mdxType:"Mermaid"}),(0,t.yg)("h3",{id:"hook"},"Hook"),(0,t.yg)(l.K,{chart:"classDiagram\n\n    class ObservableExtensions {\n        Hook(this IObservable source, Action hook)$ IDisposable \n    }",mdxType:"Mermaid"}),(0,t.yg)("h2",{id:"installation"},"Installation"),(0,t.yg)("h3",{id:"package"},"Package"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Core.Common.git\n")),(0,t.yg)("h3",{id:"dependencies"},"Dependencies"),(0,t.yg)("p",null,"Common\u306f\u6b21\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/Extreal.Guide/next/core/logging"},"Extreal.Core.Logging")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,t.yg)("p",null,"\u30e2\u30b8\u30e5\u30fc\u30eb\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5404\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5bfe\u5fdc\u306f",(0,t.yg)("a",{parentName:"p",href:"../../category/release"},"Release"),"\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("h3",{id:"settings"},"Settings"),(0,t.yg)("p",null,"\u8a2d\u5b9a\u306f\u306a\u3044\u305f\u3081\u4f5c\u696d\u306f\u4e0d\u8981\u3067\u3059\u3002"),(0,t.yg)("h2",{id:"usage"},"Usage"),(0,t.yg)("h3",{id:"core-common-dp"},"Dispose Pattern\u3092\u9069\u7528\u3059\u308b"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern"),"\u3092\u9069\u7528\u3059\u308b\u65b9\u6cd5\u3068\u3057\u3066\u7d99\u627f\u3068\u79fb\u8b72\u306e2\u3064\u306e\u65b9\u6cd5\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\n\u7d99\u627f\u306e\u65b9\u304cDispose Pattern\u306e\u30ab\u30d0\u30fc\u7bc4\u56f2\u304c\u5e83\u3044\u306e\u3067\u3001\u7d99\u627f\u304c\u4f7f\u3048\u308b\u5834\u5408\u306f\u7d99\u627f\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u3002\n\u9069\u7528\u5bfe\u8c61\u306e\u30af\u30e9\u30b9\u304c\u65e2\u306b\u5225\u306e\u30af\u30e9\u30b9\u3092\u7d99\u627f\u3057\u3066\u3044\u3066\u7d99\u627f\u304c\u4f7f\u3048\u306a\u3044\u5834\u5408\u306f\u79fb\u8b72\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("p",null,"\u7d99\u627f\u3067\u306fDisposableBase\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"public class SomethingClass : DisposableBase\n{\n    // Processing something with resources\n    \n    protected override void ReleaseManagedResources()\n    {\n        // release managed resources\n    }\n\n    protected override void ReleaseUnmanagedResources()\n    {\n        // release unmanaged resources\n    }\n}\n")),(0,t.yg)("p",null,"\u6271\u3046\u30ea\u30bd\u30fc\u30b9\u306b\u5fdc\u3058\u3066ReleaseManagedResources\u30e1\u30bd\u30c3\u30c9\u3068ReleaseUnmanagedResources\u30e1\u30bd\u30c3\u30c9\u3092\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u3057\u3066\u30ea\u30bd\u30fc\u30b9\u3092\u89e3\u653e\u3057\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3053\u308c\u3089\u306e\u30e1\u30bd\u30c3\u30c9\u306f\u4f55\u3082\u51e6\u7406\u3057\u306a\u3044\u306e\u3067\u3001\u89e3\u653e\u51e6\u7406\u304c\u4e0d\u8981\u306a\u30e1\u30bd\u30c3\u30c9\u306e\u30aa\u30fc\u30d0\u30fc\u30e9\u30a4\u30c9\u306f\u4e0d\u8981\u3067\u3059\u3002\n\u3053\u308c\u3089\u306e\u30e1\u30bd\u30c3\u30c9\u306fDisposableBase\u30af\u30e9\u30b9\u306b\u3088\u308aDispose Pattern\u3067\u793a\u3055\u308c\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u547c\u3073\u51fa\u3055\u308c\u307e\u3059\u3002"),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},"\u30ea\u30bd\u30fc\u30b9\u306e\u89e3\u653e\u6f0f\u308c\u3092\u9632\u3050\u305f\u3081\u3001\u4f8b\u5916\u3084\u30a8\u30e9\u30fc\u3092\u767a\u751f\u3055\u305b\u306a\u3044\u3088\u3046\u306b\u30ea\u30bd\u30fc\u30b9\u89e3\u653e\u51e6\u7406\u3092\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,t.yg)("admonition",{type:"caution"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern"),"\u306fDispose\u306e\u6b63\u3057\u3044\u5b9f\u88c5\u65b9\u6cd5\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002\nDispose Pattern\u306b\u5f93\u3063\u305f\u3068\u3057\u3066\u3082\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067IDisposable\u306eDispose\u30e1\u30bd\u30c3\u30c9\u3092\u9069\u5207\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\nDisposableBase\u3092\u4f7f\u3063\u305f\u5834\u5408\u3082\u540c\u69d8\u3067\u3059\u3002")),(0,t.yg)("p",null,"\u79fb\u8b72\u3067\u306fSafeDisposer\u30af\u30e9\u30b9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\nDisposableBase\u30af\u30e9\u30b9\u306fSafeDisposer\u30af\u30e9\u30b9\u3092\u4f7f\u3063\u3066Dispose Pattern\u3092\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002\nSafeDisposer\u30af\u30e9\u30b9\u306e\u5b9f\u88c5\u4f8b\u3068\u3057\u3066DisposableBase\u30af\u30e9\u30b9\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u63b2\u8f09\u3057\u307e\u3059\u306e\u3067\u53c2\u8003\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"public class DisposableBase : IDisposable\n{\n    private readonly SafeDisposer safeDisposer;\n\n    protected DisposableBase()\n        => safeDisposer = new SafeDisposer(this, ReleaseManagedResources, ReleaseUnmanagedResources);\n\n    ~DisposableBase() => safeDisposer.DisposeByFinalizer();\n\n    protected virtual void ReleaseManagedResources() { }\n\n    protected virtual void ReleaseUnmanagedResources() { }\n\n    public void Dispose() => safeDisposer.Dispose();\n}\n")),(0,t.yg)("h3",{id:"core-common-retry"},"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u9069\u7528\u3059\u308b"),(0,t.yg)("h4",{id:"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406"},"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406"),(0,t.yg)("p",null,"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306fRetryHandler\u30af\u30e9\u30b9\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002\nRetryHandler\u30af\u30e9\u30b9\u3092\u4f7f\u3046\u3053\u3068\u3067\u30e1\u30bd\u30c3\u30c9\u306b\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u9069\u7528\u3067\u304d\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u9069\u7528\u3067\u304d\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u6761\u4ef6\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u6b21\u306e\u3044\u305a\u308c\u304b\u306e\u51e6\u7406\u3092\u884c\u3046\u30e1\u30bd\u30c3\u30c9\u304c\u5bfe\u8c61\u3067\u3059\u3002",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u623b\u308a\u5024\u306a\u3057\u306e\u540c\u671f\u51e6\u7406",(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"void RunAction()\n"))),(0,t.yg)("li",{parentName:"ul"},"\u623b\u308a\u5024\u306a\u3057\u306e\u975e\u540c\u671f\u51e6\u7406",(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"UniTask RunActionAsync()\n"))),(0,t.yg)("li",{parentName:"ul"},"\u623b\u308a\u5024\u3042\u308a\u306e\u540c\u671f\u51e6\u7406",(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"TResult RunFunc()\n"))),(0,t.yg)("li",{parentName:"ul"},"\u623b\u308a\u5024\u3042\u308a\u306e\u975e\u540c\u671f\u51e6\u7406",(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"UniTask<TResult> RunFuncAsync()\n"))))),(0,t.yg)("li",{parentName:"ul"},"\u30e1\u30bd\u30c3\u30c9\u5f15\u6570\u306f\u3042\u308a\u3068\u306a\u3057\u306e\u3069\u3061\u3089\u3067\u3082\u69cb\u3044\u307e\u305b\u3093\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u975e\u540c\u671f\u51e6\u7406\u306b\u306f",(0,t.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask"),"\u3092\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u3059\u308b\u304b\u3057\u306a\u3044\u304b\u3092\u4f8b\u5916\u3067\u5224\u65ad\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u30ea\u30c8\u30e9\u30a4\u5bfe\u8c61\u306e\u51e6\u7406\u5931\u6557\u306f\u4f8b\u5916\u3092\u30b9\u30ed\u30fc\u3057\u3066\u304f\u3060\u3055\u3044\uff09\u3002")),(0,t.yg)("p",null,"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u9069\u7528\u306fRetryHandler\u306eOf\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002\nOf\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u308aRetryHandler\u3092\u751f\u6210\u3057\u3066\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u9069\u7528\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u3092\u547c\u3073\u51fa\u305b\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002\nOf\u30e1\u30bd\u30c3\u30c9\u306b\u306f\u6b21\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u5bfe\u8c61\u30e1\u30bd\u30c3\u30c9"),(0,t.yg)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u3059\u308b\u304b\u3057\u306a\u3044\u304b\u306e\u5224\u5b9a\u51e6\u7406"),(0,t.yg)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u5236\u5fa1\u3059\u308b\u65b9\u6cd5\uff08\u30ea\u30c8\u30e9\u30a4\u6226\u7565\uff09"),(0,t.yg)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3059\u308b\u305f\u3081\u306e\u30c8\u30fc\u30af\u30f3")),(0,t.yg)("p",null,"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u9069\u7528\u3057\u305f\u30e1\u30bd\u30c3\u30c9\u306e\u5b9f\u884c\u306b\u306fRetryHandler\u306eHandleAsync\u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3044\u307e\u3059\u3002\nHandleAsync\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u308a\u30ea\u30c8\u30e9\u30a4\u5bfe\u8c61\u30e1\u30bd\u30c3\u30c9\u306e\u51e6\u7406\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002\nHandleAsync\u3067\u306f\u30ea\u30c8\u30e9\u30a4\u3059\u308b\u304b\u3057\u306a\u3044\u304b\u306e\u5224\u5b9a\u51e6\u7406\u3068\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u3092\u4f7f\u3063\u3066\u30ea\u30c8\u30e9\u30a4\u306e\u7d99\u7d9a\u5224\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"using var retryHandler = RetryHandler<Unit>.Of(RunAction, e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n")),(0,t.yg)("p",null,"\u30ea\u30c8\u30e9\u30a4\u5bfe\u8c61\u30e1\u30bd\u30c3\u30c9\u306b\u5f15\u6570\u304c\u3042\u308b\u5834\u5408\u306f",(0,t.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions"},"\u30e9\u30e0\u30c0\u5f0f"),"\u3092\u4f7f\u3044\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"// Synchronous processing without return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunAction(value), e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n\n// Asynchronous processing without return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunActionAsync(value), e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n\n// Synchronous processing with return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunFunc(value), e => e is AccessViolationException, new CountingRetryStrategy());\nvar result = await retryHandler.HandleAsync();\n\n// Asynchronous processing with return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunFuncAsync(value), e => e is AccessViolationException, new CountingRetryStrategy());\nvar result = await retryHandler.HandleAsync();\n")),(0,t.yg)("h4",{id:"\u30ea\u30c8\u30e9\u30a4\u6226\u7565"},"\u30ea\u30c8\u30e9\u30a4\u6226\u7565"),(0,t.yg)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6b21\u306e\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"CountingRetryStrategy",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u56de\u6570\u3067\u30ea\u30c8\u30e9\u30a4\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002"))),(0,t.yg)("li",{parentName:"ul"},"NoRetryStrategy",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u5e38\u306b\u30ea\u30c8\u30e9\u30a4\u3057\u307e\u305b\u3093\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u7d44\u307f\u8fbc\u3093\u3060\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u4f5c\u308b\u5834\u5408\u306b\u4f7f\u3044\u307e\u3059\u3002")))),(0,t.yg)("p",null,"CountingRetryStrategy\u306f\u6700\u5927\u30ea\u30c8\u30e9\u30a4\u56de\u6570\u3068\u30ea\u30c8\u30e9\u30a4\u9593\u9694\u3092\u6307\u5b9a\u3057\u3066\u4f7f\u3044\u307e\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"// Max retry count is 5, retry interval is 5 seconds each times\nvar retryStrategy = new CountingRetryStrategy(5, _ => TimeSpan.FromSeconds(5));\n\n// Max retry count is 5, retry interval is retry count x 5 seconds\nvar retryStrategy = new CountingRetryStrategy(5, retryCount => TimeSpan.FromSeconds(retryCount * 5));\n")),(0,t.yg)("p",null,"CountingRetryStrategy\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u30d5\u30a3\u30dc\u30ca\u30c3\u30c1\u6570\u3092\u4f7f\u3063\u305f\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30d5\u30a3\u30dc\u30ca\u30c3\u30c1\u6570\u306f20\u500b\u307e\u3067\u306a\u306e\u3067\u6700\u5927\u30ea\u30c8\u30e9\u30a4\u56de\u6570\u309220\u3088\u308a\u5927\u304d\u304f\u3057\u305f\u3044\u5834\u5408\u306f\u30ea\u30c8\u30e9\u30a4\u9593\u9694\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"// Max retry count is 12(default), retry interval is Fibonacci numbers\nvar retryStrategy = new CountingRetryStrategy();\n\n// Max retry count is 5, retry interval is Fibonacci numbers\nvar retryStrategy = new CountingRetryStrategy(5);\n")),(0,t.yg)("p",null,"\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u306fIRetryStrategy\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u304c\u63d0\u4f9b\u3057\u307e\u3059\u3002\n\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u63d0\u4f9b\u3057\u3066\u3044\u308b\u30af\u30e9\u30b9\u3067\u5bfe\u5fdc\u3067\u304d\u306a\u3044\u5834\u5408\u306fIRetryStrategy\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u3092\u5b9f\u88c5\u3057\u305f\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,t.yg)("h4",{id:"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u518d\u5229\u7528"},"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u518d\u5229\u7528"),(0,t.yg)("p",null,"\u30dc\u30a4\u30b9\u30c1\u30e3\u30c3\u30c8\u3084\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u3067\u306f\u63a5\u7d9a\u4e2d\u306b\u4e88\u671f\u3057\u306a\u3044\u5207\u65ad\u304c\u767a\u751f\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\n\u305d\u306e\u3088\u3046\u306a\u5207\u65ad\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u521d\u56de\u63a5\u7d9a\u6642\u306e\u72b6\u614b\uff08\u30c1\u30e3\u30f3\u30cd\u30eb\u540d\u306a\u3069\u306e\u30a2\u30af\u30bb\u30b9\u60c5\u5831\uff09\u3092\u4f7f\u3063\u3066\u518d\u63a5\u7d9a\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\nRetryHandler\u306fHandleAsync\u30e1\u30bd\u30c3\u30c9\u304c\u547c\u3070\u308c\u308b\u5ea6\u306b\u30ea\u30c8\u30e9\u30a4\u72b6\u614b\u3092\u30ea\u30bb\u30c3\u30c8\u3059\u308b\u305f\u3081\u3001\u518d\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,t.yg)("h4",{id:"core-common-retry-event"},"\u30ea\u30c8\u30e9\u30a4\u51e6\u7406\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5"),(0,t.yg)("p",null,"RetryHandler\u306f\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u901a\u77e5\u3092\u8a2d\u3051\u3066\u3044\u307e\u3059\u3002"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"OnRetrying",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30ea\u30c8\u30e9\u30a4\u3059\u308b\u76f4\u524d"),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30ea\u30c8\u30e9\u30a4\u56de\u6570",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"1\u56de\u76ee\u306f",(0,t.yg)("inlineCode",{parentName:"li"},"1"),"\u30012\u56de\u76ee\u306f",(0,t.yg)("inlineCode",{parentName:"li"},"2"),"\u3068\u306a\u308a\u307e\u3059\u3002"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"1"),"\u306f\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u306e\u5b9f\u884c\u958b\u59cb\u3092\u610f\u5473\u3057\u307e\u3059\u3002"))))),(0,t.yg)("li",{parentName:"ul"},"OnRetried",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30df\u30f3\u30b0\uff1a\u30ea\u30c8\u30e9\u30a4\u304c\u7d42\u4e86\u3057\u305f\u76f4\u5f8c",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u30ea\u30c8\u30e9\u30a4\u304c\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u305f\u5834\u5408\u306f\u901a\u77e5\u3055\u308c\u307e\u305b\u3093\u3002"))),(0,t.yg)("li",{parentName:"ul"},"\u30bf\u30a4\u30d7\uff1aIObservable"),(0,t.yg)("li",{parentName:"ul"},"\u30d1\u30e9\u30e1\u30fc\u30bf\uff1a\u30ea\u30c8\u30e9\u30a4\u7d50\u679c",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"true\uff1a\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u3092\u5b9f\u884c\u3057\u3066\u30ea\u30c8\u30e9\u30a4\u304c\u6210\u529f\u3057\u305f\u5834\u5408"),(0,t.yg)("li",{parentName:"ul"},"false\uff1a\u30ea\u30c8\u30e9\u30a4\u6226\u7565\u3092\u5b9f\u884c\u3057\u3066\u6700\u7d42\u7684\u306b\u30ea\u30c8\u30e9\u30a4\u304c\u6210\u529f\u3057\u306a\u304b\u3063\u305f\u5834\u5408")))))),(0,t.yg)("h3",{id:"core-common-hook"},"IObservable\u306b\u30d5\u30c3\u30af\u3092\u8ffd\u52a0\u3059\u308b"),(0,t.yg)("p",null,"IObservable\u3092\u4f7f\u3046\u5834\u5408\u306f\u901a\u5e38Subscribe\u30e1\u30bd\u30c3\u30c9\u3067\u901a\u77e5\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u64cd\u4f5c\u30ed\u30b0\u3092\u5916\u90e8\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3057\u305f\u3044\u5834\u5408\u306a\u3069\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u672c\u6765\u306e\u8cfc\u8aad\u51e6\u7406\u3092\u59a8\u3052\u305a\u306bIObservable\u306b\u51e6\u7406\u3092\u8ffd\u52a0\u3057\u305f\u3044\u30b1\u30fc\u30b9\u304c\u3042\u308a\u307e\u3059\u3002\n\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u672c\u6765\u306e\u51e6\u7406\u3092\u59a8\u3052\u305a\u306bIObservable\u306b\u8ffd\u52a0\u3057\u305f\u3044\u51e6\u7406\u3092\u30d5\u30c3\u30af\u3068\u547c\u3076\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u30d5\u30c3\u30af\u3067\u306f\u51e6\u7406\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u3067\u3082\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u51e6\u7406\u3092\u4e2d\u65ad\u3057\u306a\u3044\u3088\u3046\u306b\u4f8b\u5916\u51e6\u7406\u3092\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\nIObservable\u306e\u62e1\u5f35\u30e1\u30bd\u30c3\u30c9\u3068\u3057\u3066\u30d5\u30c3\u30af\u3092\u8ffd\u52a0\u3067\u304d\u308bHook\u30e1\u30bd\u30c3\u30c9\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,t.yg)("p",null,"\u30b9\u30c6\u30fc\u30b8\u9077\u79fb\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u30b9\u30c6\u30fc\u30b8\u5229\u7528\u72b6\u6cc1\uff08\u4f8b\u3048\u3070\u6ede\u5728\u6642\u9593\u306a\u3069\uff09\u3092\u9001\u4fe1\u3059\u308b\u5b9f\u88c5\u4f8b\u3067\u3059\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-csharp"},"stageNavigator.OnStageTransitioning\n              .Hook(_ => CollectStageUsage())\n              .AddTo(disposables);\n")),(0,t.yg)("p",null,"Subscribe\u3068\u306f\u7570\u306a\u308a\u3001Hook\u30e1\u30bd\u30c3\u30c9\u3067\u5b9f\u884c\u3057\u305f\u51e6\u7406\u3067\u4f8b\u5916\u304c\u767a\u751f\u3057\u3066\u3082\u4ed6\u306e\u8cfc\u8aad\u51e6\u7406\u306b\u306f\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u305b\u3093\u3002\nHook\u3067\u4f8b\u5916\u304c\u767a\u751f\u3057\u305f\u3053\u3068\u3092\u958b\u767a\u6642\u306b\u958b\u767a\u8005\u304c\u6c17\u4ed8\u3051\u308b\u3088\u3046\u306b\u3001\u30ed\u30b0\u30ec\u30d9\u30eb\u304cDebug\u306e\u5834\u5408\u306e\u307f\u3001\u4f8b\u5916\u60c5\u5831\u3092Error\u30ec\u30d9\u30eb\u3067\u30ed\u30b0\u51fa\u529b\u3092\u884c\u3044\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);