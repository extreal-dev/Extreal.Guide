"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[9648],{7616:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=r(7624),t=r(5788);const i={sidebar_position:3},a="Common",o={id:"core/common",title:"Common",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.2.0/core/common.md",sourceDirName:"core",slug:"/core/common",permalink:"/Extreal.Guide/en/core/common",draft:!1,unlisted:!1,tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Stage Navigation",permalink:"/Extreal.Guide/en/core/stage-navigation"},next:{title:"Integration",permalink:"/Extreal.Guide/en/category/integration"}},l={},c=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"System",id:"system",level:3},{value:"Retry",id:"retry",level:3},{value:"Hook",id:"hook",level:3},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Apply the Dispose Pattern",id:"core-common-dp",level:3},{value:"Apply a retry processing",id:"core-common-retry",level:3},{value:"Retry processing",id:"retry-processing",level:4},{value:"Retry strategy",id:"retry-strategy",level:4},{value:"Reuse of retry processing",id:"reuse-of-retry-processing",level:4},{value:"Event notifications for retry processing",id:"core-common-retry-event",level:4},{value:"Add hooks to IObservable",id:"core-common-hook",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,t.MN)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"common",children:"Common"}),"\n",(0,s.jsx)(n.h2,{id:"what-for",children:"What for?"}),"\n",(0,s.jsxs)(n.p,{children:["A generic feature like retry processing is needed to realize the features of a framework or application.\nFor example, retry processing is required for external connection features such as ",(0,s.jsx)(n.a,{href:"/Extreal.Guide/en/integration/chat.vivox",children:"Chat"})," and ",(0,s.jsx)(n.a,{href:"/Extreal.Guide/en/integration/multiplay.ngo",children:"Multiplay"})," in frameworks and external API calls in applications.\nThis module provides such generic processing as common features."]}),"\n",(0,s.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can apply the ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose",children:"Dispose Pattern"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"You can apply a retry processing."}),"\n",(0,s.jsx)(n.li,{children:"You can add hooks to IObservable."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.h3,{id:"system",children:"System"}),"\n",(0,s.jsx)(n.mermaid,{chart:"classDiagram\n\n    IDisposable <|.. DisposableBase\n    SafeDisposer <.. DisposableBase\n    \n    class SafeDisposer {\n        +SafeDisposer(target, releaseManagedResources, releaseUnmanagedResources)\n        +DisposeByFinalizer()\n        +Dispose()\n    }\n\n    class DisposableBase {\n        #DisposableBase()\n        #ReleaseManagedResources()\n        #ReleaseUnmanagedResources()\n    }\n\n    class IDisposable {\n        <<interface>>\n    }"}),"\n",(0,s.jsx)(n.h3,{id:"retry",children:"Retry"}),"\n",(0,s.jsx)(n.mermaid,{chart:"classDiagram\n\n    DisposableBase <|-- RetryHandler\n    IRetryStrategy <.. RetryHandler\n    IRetryStrategy <|.. CountingRetryStrategy\n    IRetryStrategy <|.. NoRetryStrategy\n\n    class DisposableBase {\n    }\n\n    class RetryHandler {\n        +OnRetrying IObservable\n        +OnRetried IObservable\n        +Of(action, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(actionAsync, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(func, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(funcAsync, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +HandleAsync() TResult\n    }\n    \n    class IRetryStrategy {\n        <<interface>>\n        +Reset() void\n        +HasNext() bool\n        +Next() TimeSpan\n    }\n    \n    class CountingRetryStrategy {\n        +CountingRetryStrategy(maxRetryCount, nextRetryInterval)\n    }\n    \n    class NoRetryStrategy {\n        +Instance NoRetryStrategy\n    }"}),"\n",(0,s.jsx)(n.h3,{id:"hook",children:"Hook"}),"\n",(0,s.jsx)(n.mermaid,{chart:"classDiagram\n\n    class ObservableExtensions {\n        Hook(this IObservable source, Action hook)$ IDisposable \n    }"}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.h3,{id:"package",children:"Package"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"https://github.com/extreal-dev/Extreal.Core.Common.git\n"})}),"\n",(0,s.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Common uses the following packages."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/Extreal.Guide/en/core/logging",children:"Extreal.Core.Logging"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/Cysharp/UniTask",children:"UniTask"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/neuecc/UniRx",children:"UniRx"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"../category/release",children:"Release"})," for the correspondence between module version and each package version."]}),"\n",(0,s.jsx)(n.h3,{id:"settings",children:"Settings"}),"\n",(0,s.jsx)(n.p,{children:"No work is required as there are no settings."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"core-common-dp",children:"Apply the Dispose Pattern"}),"\n",(0,s.jsxs)(n.p,{children:["We provide two ways to apply the ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose",children:"Dispose Pattern"}),": inheritance and delegation.\nUse inheritance if it is available, since inheritance covers a wider range of the Dispose Pattern.\nIf the class to which the pattern is applied has already inherited from another class and inheritance is not available, use delegation."]}),"\n",(0,s.jsx)(n.p,{children:"The DisposableBase class is used in the inheritance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public class SomethingClass : DisposableBase\n{\n    // Processing something with resources\n    \n    protected override void ReleaseManagedResources()\n    {\n        // release managed resources\n    }\n\n    protected override void ReleaseUnmanagedResources()\n    {\n        // release unmanaged resources\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Override the ReleaseManagedResources and ReleaseUnmanagedResources methods to release resources, depending on the resources to be handled.\nBy default, these methods do nothing, so there is no need to override methods that do not require release processing.\nThese methods are called by the DisposableBase class at the timing indicated in the Dispose Pattern."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"To prevent resource release omissions, implement the resource release processing in such a way that it does not raise exceptions or errors."})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose",children:"Dispose Pattern"})," shows the correct way to implement Dispose.\nEven if you follow the Dispose Pattern, your application must call IDisposable's Dispose method at the appropriate time.\nThe same is true when using DisposableBase."]})}),"\n",(0,s.jsx)(n.p,{children:"The SafeDisposer class is used in the delegation.\nThe DisposableBase class uses the SafeDisposer class to realize the Dispose Pattern.\nPlease refer to the source code of the DisposableBase class as an example of implementation of the SafeDisposer class."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"public class DisposableBase : IDisposable\n{\n    private readonly SafeDisposer safeDisposer;\n\n    protected DisposableBase()\n        => safeDisposer = new SafeDisposer(this, ReleaseManagedResources, ReleaseUnmanagedResources);\n\n    ~DisposableBase() => safeDisposer.DisposeByFinalizer();\n\n    protected virtual void ReleaseManagedResources() { }\n\n    protected virtual void ReleaseUnmanagedResources() { }\n\n    public void Dispose() => safeDisposer.Dispose();\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"core-common-retry",children:"Apply a retry processing"}),"\n",(0,s.jsx)(n.h4,{id:"retry-processing",children:"Retry processing"}),"\n",(0,s.jsx)(n.p,{children:"Retry processing is provided by the RetryHandler class.\nThe RetryHandler class can be used to apply retry processing to methods."}),"\n",(0,s.jsx)(n.p,{children:"The conditions for methods to which retry processing can be applied are as follows."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The target method is one of the following.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Synchronous processing without return value","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"void RunAction()\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Asynchronous processing without return value","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"UniTask RunActionAsync()\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Synchronous processing with return value","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"TResult RunFunc()\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Asynchronous processing with return value","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"UniTask<TResult> RunFuncAsync()\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Method arguments can be provided or not."}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.a,{href:"https://github.com/Cysharp/UniTask",children:"UniTask"})," for asynchronous processing."]}),"\n",(0,s.jsx)(n.li,{children:"Be able to determine whether to retry or not by looking at the exception. (Throw an exception if the processing to be retried fails)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Retry processing is applied using the Of method of RetryHandler.\nThe Of method creates a RetryHandler so that a method with retry processing applied can be called.\nThe Of method accepts the following parameters."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retry target method"}),"\n",(0,s.jsx)(n.li,{children:"Processing to determine whether to retry or not"}),"\n",(0,s.jsx)(n.li,{children:"How to control retry processing (retry strategy)"}),"\n",(0,s.jsx)(n.li,{children:"Token for cancelling retry"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The HandleAsync method of RetryHandler is used to run the method to which retry processing is applied.\nThe HandleAsync method starts the retry processing if the method to be retried fails.\nHandleAsync uses a retry or not retry decision processing and a retry strategy to determine whether or not to continue retries."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using var retryHandler = RetryHandler<Unit>.Of(RunAction, e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the method to be retried has arguments, use ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions",children:"lambda expression"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// Synchronous processing without return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunAction(value), e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n\n// Asynchronous processing without return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunActionAsync(value), e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n\n// Synchronous processing with return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunFunc(value), e => e is AccessViolationException, new CountingRetryStrategy());\nvar result = await retryHandler.HandleAsync();\n\n// Asynchronous processing with return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunFuncAsync(value), e => e is AccessViolationException, new CountingRetryStrategy());\nvar result = await retryHandler.HandleAsync();\n"})}),"\n",(0,s.jsx)(n.h4,{id:"retry-strategy",children:"Retry strategy"}),"\n",(0,s.jsx)(n.p,{children:"The following retry strategies are provided by default."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CountingRetryStrategy","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The retry processing is controlled by the retry count."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["NoRetryStrategy","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Always no retry."}),"\n",(0,s.jsx)(n.li,{children:"This is used when creating a library that has built-in retry processing."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"CountingRetryStrategy is used to specify the maximum retry count and retry interval."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// Max retry count is 5, retry interval is 5 seconds each times\nvar retryStrategy = new CountingRetryStrategy(5, _ => TimeSpan.FromSeconds(5));\n\n// Max retry count is 5, retry interval is retry count x 5 seconds\nvar retryStrategy = new CountingRetryStrategy(5, retryCount => TimeSpan.FromSeconds(retryCount * 5));\n"})}),"\n",(0,s.jsx)(n.p,{children:"CountingRetryStrategy provides retry processing using Fibonacci numbers by default.\nThe default Fibonacci number is limited to 20, so if you wish to increase the maximum retry count beyond 20, please specify the retry interval."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// Max retry count is 12(default), retry interval is Fibonacci numbers\nvar retryStrategy = new CountingRetryStrategy();\n\n// Max retry count is 5, retry interval is Fibonacci numbers\nvar retryStrategy = new CountingRetryStrategy(5);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retry strategy is provided by the IRetryStrategy interface.\nIf the class provided by default does not support your needs, please create a class that implements the IRetryStrategy interface."}),"\n",(0,s.jsx)(n.h4,{id:"reuse-of-retry-processing",children:"Reuse of retry processing"}),"\n",(0,s.jsx)(n.p,{children:"Unexpected disconnections may occur during connections in voice chat and multiplayer.\nWhen such a disconnection occurs, you may want to reconnect using the state of the initial connection (channel name and other access information).\nRetryHandler resets the retry state each time the HandleAsync method is called, so it can be reused."}),"\n",(0,s.jsx)(n.h4,{id:"core-common-retry-event",children:"Event notifications for retry processing"}),"\n",(0,s.jsx)(n.p,{children:"RetryHandler has the following event notifications."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["OnRetrying","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Timing\uff1aJust before retry"}),"\n",(0,s.jsx)(n.li,{children:"Type\uff1aIObservable"}),"\n",(0,s.jsxs)(n.li,{children:["Parameters\uff1aRetry count","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The first time is ",(0,s.jsx)(n.code,{children:"1"})," and the second time is ",(0,s.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1"})," means the start of retry strategy running."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["OnRetried","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Timing\uff1aImmediately after the retry is finished","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the retry is canceled, it will not be notified."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Type\uff1aIObservable"}),"\n",(0,s.jsxs)(n.li,{children:["Parameters\uff1aRetry result","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"true: If the retry strategy is run and the retry is successful"}),"\n",(0,s.jsx)(n.li,{children:"false: If the retry strategy is run and the retry is not successful finally"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"core-common-hook",children:"Add hooks to IObservable"}),"\n",(0,s.jsx)(n.p,{children:"When using IObservable, notifications are usually received via the Subscribe method.\nIn some cases, such as when you want to send the application's operation log to an external server, you may want to add processing to the IObservable without interfering with the application's original subscription processing.\nThe processing you want to add to the IObservable without interfering with the application's original processing is called a hook."}),"\n",(0,s.jsx)(n.p,{children:"Hooks must handle exceptions so that the processing of the application is not interrupted in the event of a processing failure.\nThe Hook method to which hooks can be added is provided as an extension method of IObservable."}),"\n",(0,s.jsx)(n.p,{children:"This is an example of an implementation that sends stage usage status (e.g., stay time) at the timing of stage transitions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"stageNavigator.OnStageTransitioning\n              .Hook(_ => CollectStageUsage())\n              .AddTo(disposables);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Unlike Subscribe, an exception raised by a processing executed with the Hook method does not affect other subscription processing.\nTo ensure that the developer is aware during development that an exception was raised by Hook, exception information is logged output with the Error level only when the log level is Debug."})]})}function h(e={}){const{wrapper:n}={...(0,t.MN)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5788:(e,n,r)=>{r.d(n,{MN:()=>c});var s=r(1504);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=s.createContext({}),c=function(e){var n=s.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(r),u=t,y=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return r?s.createElement(y,a(a({ref:n},h),{},{components:r})):s.createElement(y,a({ref:n},h))}));h.displayName="MDXCreateElement"}}]);