"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[8395],{3231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>y});var a=t(9668),r=(t(6540),t(5680)),s=t(7443);const i={sidebar_position:1},o="Common",l={unversionedId:"core/common",id:"core/common",title:"Common",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/core/common.md",sourceDirName:"core",slug:"/core/common",permalink:"/Extreal.Guide/en/next/core/common",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/Extreal.Guide/en/next/category/core"},next:{title:"Logging",permalink:"/Extreal.Guide/en/next/core/logging"}},c={},y=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"System",id:"system",level:3},{value:"Retry",id:"retry",level:3},{value:"Hook",id:"hook",level:3},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Apply the Dispose Pattern",id:"core-common-dp",level:3},{value:"Apply a retry processing",id:"core-common-retry",level:3},{value:"Retry processing",id:"retry-processing",level:4},{value:"Retry strategy",id:"retry-strategy",level:4},{value:"Reuse of retry processing",id:"reuse-of-retry-processing",level:4},{value:"Event notifications for retry processing",id:"core-common-retry-event",level:4},{value:"Add hooks to IObservable",id:"core-common-hook",level:3}],p={toc:y},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"common"},"Common"),(0,r.yg)("h2",{id:"what-for"},"What for?"),(0,r.yg)("p",null,"A generic feature like retry processing is needed to realize the features of a framework or application.\nFor example, retry processing is required for external connection features such as ",(0,r.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/next/integration/chat.vivox"},"Chat")," and ",(0,r.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/next/integration/multiplay.ngo"},"Multiplay")," in frameworks and external API calls in applications.\nThis module provides such generic processing as common features."),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You can apply the ",(0,r.yg)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern"),"."),(0,r.yg)("li",{parentName:"ul"},"You can apply a retry processing."),(0,r.yg)("li",{parentName:"ul"},"You can add hooks to IObservable.")),(0,r.yg)("h2",{id:"architecture"},"Architecture"),(0,r.yg)("h3",{id:"system"},"System"),(0,r.yg)(s.K,{chart:"classDiagram\n\n    IDisposable <|.. DisposableBase\n    SafeDisposer <.. DisposableBase\n    \n    class SafeDisposer {\n        +SafeDisposer(target, releaseManagedResources, releaseUnmanagedResources)\n        +DisposeByFinalizer()\n        +Dispose()\n    }\n\n    class DisposableBase {\n        #DisposableBase()\n        #ReleaseManagedResources()\n        #ReleaseUnmanagedResources()\n    }\n\n    class IDisposable {\n        <<interface>>\n    }",mdxType:"Mermaid"}),(0,r.yg)("h3",{id:"retry"},"Retry"),(0,r.yg)(s.K,{chart:"classDiagram\n\n    DisposableBase <|-- RetryHandler\n    IRetryStrategy <.. RetryHandler\n    IRetryStrategy <|.. CountingRetryStrategy\n    IRetryStrategy <|.. NoRetryStrategy\n\n    class DisposableBase {\n    }\n\n    class RetryHandler {\n        +OnRetrying IObservable\n        +OnRetried IObservable\n        +Of(action, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(actionAsync, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(func, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +Of(funcAsync, isRetryable, retryStrategy, cancellationToken)$ RetryHandler\n        +HandleAsync() TResult\n    }\n    \n    class IRetryStrategy {\n        <<interface>>\n        +Reset() void\n        +HasNext() bool\n        +Next() TimeSpan\n    }\n    \n    class CountingRetryStrategy {\n        +CountingRetryStrategy(maxRetryCount, nextRetryInterval)\n    }\n    \n    class NoRetryStrategy {\n        +Instance NoRetryStrategy\n    }",mdxType:"Mermaid"}),(0,r.yg)("h3",{id:"hook"},"Hook"),(0,r.yg)(s.K,{chart:"classDiagram\n\n    class ObservableExtensions {\n        Hook(this IObservable source, Action hook)$ IDisposable \n    }",mdxType:"Mermaid"}),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("h3",{id:"package"},"Package"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Core.Common.git\n")),(0,r.yg)("h3",{id:"dependencies"},"Dependencies"),(0,r.yg)("p",null,"Common uses the following packages."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/logging"},"Extreal.Core.Logging")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/neuecc/UniRx"},"UniRx"))),(0,r.yg)("p",null,"Please refer to ",(0,r.yg)("a",{parentName:"p",href:"../category/release"},"Release")," for the correspondence between module version and each package version."),(0,r.yg)("h3",{id:"settings"},"Settings"),(0,r.yg)("p",null,"No work is required as there are no settings."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"core-common-dp"},"Apply the Dispose Pattern"),(0,r.yg)("p",null,"We provide two ways to apply the ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern"),": inheritance and delegation.\nUse inheritance if it is available, since inheritance covers a wider range of the Dispose Pattern.\nIf the class to which the pattern is applied has already inherited from another class and inheritance is not available, use delegation."),(0,r.yg)("p",null,"The DisposableBase class is used in the inheritance."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"public class SomethingClass : DisposableBase\n{\n    // Processing something with resources\n    \n    protected override void ReleaseManagedResources()\n    {\n        // release managed resources\n    }\n\n    protected override void ReleaseUnmanagedResources()\n    {\n        // release unmanaged resources\n    }\n}\n")),(0,r.yg)("p",null,"Override the ReleaseManagedResources and ReleaseUnmanagedResources methods to release resources, depending on the resources to be handled.\nBy default, these methods do nothing, so there is no need to override methods that do not require release processing.\nThese methods are called by the DisposableBase class at the timing indicated in the Dispose Pattern."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"To prevent resource release omissions, implement the resource release processing in such a way that it does not raise exceptions or errors.")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern")," shows the correct way to implement Dispose.\nEven if you follow the Dispose Pattern, your application must call IDisposable's Dispose method at the appropriate time.\nThe same is true when using DisposableBase.")),(0,r.yg)("p",null,"The SafeDisposer class is used in the delegation.\nThe DisposableBase class uses the SafeDisposer class to realize the Dispose Pattern.\nPlease refer to the source code of the DisposableBase class as an example of implementation of the SafeDisposer class."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"public class DisposableBase : IDisposable\n{\n    private readonly SafeDisposer safeDisposer;\n\n    protected DisposableBase()\n        => safeDisposer = new SafeDisposer(this, ReleaseManagedResources, ReleaseUnmanagedResources);\n\n    ~DisposableBase() => safeDisposer.DisposeByFinalizer();\n\n    protected virtual void ReleaseManagedResources() { }\n\n    protected virtual void ReleaseUnmanagedResources() { }\n\n    public void Dispose() => safeDisposer.Dispose();\n}\n")),(0,r.yg)("h3",{id:"core-common-retry"},"Apply a retry processing"),(0,r.yg)("h4",{id:"retry-processing"},"Retry processing"),(0,r.yg)("p",null,"Retry processing is provided by the RetryHandler class.\nThe RetryHandler class can be used to apply retry processing to methods."),(0,r.yg)("p",null,"The conditions for methods to which retry processing can be applied are as follows."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The target method is one of the following.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Synchronous processing without return value",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"void RunAction()\n"))),(0,r.yg)("li",{parentName:"ul"},"Asynchronous processing without return value",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"UniTask RunActionAsync()\n"))),(0,r.yg)("li",{parentName:"ul"},"Synchronous processing with return value",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"TResult RunFunc()\n"))),(0,r.yg)("li",{parentName:"ul"},"Asynchronous processing with return value",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"UniTask<TResult> RunFuncAsync()\n"))))),(0,r.yg)("li",{parentName:"ul"},"Method arguments can be provided or not."),(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Cysharp/UniTask"},"UniTask")," for asynchronous processing."),(0,r.yg)("li",{parentName:"ul"},"Be able to determine whether to retry or not by looking at the exception. (Throw an exception if the processing to be retried fails)")),(0,r.yg)("p",null,"Retry processing is applied using the Of method of RetryHandler.\nThe Of method creates a RetryHandler so that a method with retry processing applied can be called.\nThe Of method accepts the following parameters."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Retry target method"),(0,r.yg)("li",{parentName:"ul"},"Processing to determine whether to retry or not"),(0,r.yg)("li",{parentName:"ul"},"How to control retry processing (retry strategy)"),(0,r.yg)("li",{parentName:"ul"},"Token for cancelling retry")),(0,r.yg)("p",null,"The HandleAsync method of RetryHandler is used to run the method to which retry processing is applied.\nThe HandleAsync method starts the retry processing if the method to be retried fails.\nHandleAsync uses a retry or not retry decision processing and a retry strategy to determine whether or not to continue retries."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"using var retryHandler = RetryHandler<Unit>.Of(RunAction, e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n")),(0,r.yg)("p",null,"If the method to be retried has arguments, use ",(0,r.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/lambda-expressions"},"lambda expression"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"// Synchronous processing without return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunAction(value), e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n\n// Asynchronous processing without return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunActionAsync(value), e => e is AccessViolationException, new CountingRetryStrategy());\nawait retryHandler.HandleAsync();\n\n// Synchronous processing with return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunFunc(value), e => e is AccessViolationException, new CountingRetryStrategy());\nvar result = await retryHandler.HandleAsync();\n\n// Asynchronous processing with return value\nusing var retryHandler = RetryHandler<Unit>.Of(() => RunFuncAsync(value), e => e is AccessViolationException, new CountingRetryStrategy());\nvar result = await retryHandler.HandleAsync();\n")),(0,r.yg)("h4",{id:"retry-strategy"},"Retry strategy"),(0,r.yg)("p",null,"The following retry strategies are provided by default."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"CountingRetryStrategy ",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The retry processing is controlled by the retry count."))),(0,r.yg)("li",{parentName:"ul"},"NoRetryStrategy",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Always no retry."),(0,r.yg)("li",{parentName:"ul"},"This is used when creating a library that has built-in retry processing.")))),(0,r.yg)("p",null,"CountingRetryStrategy is used to specify the maximum retry count and retry interval."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"// Max retry count is 5, retry interval is 5 seconds each times\nvar retryStrategy = new CountingRetryStrategy(5, _ => TimeSpan.FromSeconds(5));\n\n// Max retry count is 5, retry interval is retry count x 5 seconds\nvar retryStrategy = new CountingRetryStrategy(5, retryCount => TimeSpan.FromSeconds(retryCount * 5));\n")),(0,r.yg)("p",null,"CountingRetryStrategy provides retry processing using Fibonacci numbers by default.\nThe default Fibonacci number is limited to 20, so if you wish to increase the maximum retry count beyond 20, please specify the retry interval."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"// Max retry count is 12(default), retry interval is Fibonacci numbers\nvar retryStrategy = new CountingRetryStrategy();\n\n// Max retry count is 5, retry interval is Fibonacci numbers\nvar retryStrategy = new CountingRetryStrategy(5);\n")),(0,r.yg)("p",null,"Retry strategy is provided by the IRetryStrategy interface.\nIf the class provided by default does not support your needs, please create a class that implements the IRetryStrategy interface."),(0,r.yg)("h4",{id:"reuse-of-retry-processing"},"Reuse of retry processing"),(0,r.yg)("p",null,"Unexpected disconnections may occur during connections in voice chat and multiplayer.\nWhen such a disconnection occurs, you may want to reconnect using the state of the initial connection (channel name and other access information).\nRetryHandler resets the retry state each time the HandleAsync method is called, so it can be reused."),(0,r.yg)("h4",{id:"core-common-retry-event"},"Event notifications for retry processing"),(0,r.yg)("p",null,"RetryHandler has the following event notifications."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"OnRetrying",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Timing\uff1aJust before retry"),(0,r.yg)("li",{parentName:"ul"},"Type\uff1aIObservable"),(0,r.yg)("li",{parentName:"ul"},"Parameters\uff1aRetry count",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The first time is ",(0,r.yg)("inlineCode",{parentName:"li"},"1")," and the second time is ",(0,r.yg)("inlineCode",{parentName:"li"},"2"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"1")," means the start of retry strategy running."))))),(0,r.yg)("li",{parentName:"ul"},"OnRetried",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Timing\uff1aImmediately after the retry is finished",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"If the retry is canceled, it will not be notified."))),(0,r.yg)("li",{parentName:"ul"},"Type\uff1aIObservable"),(0,r.yg)("li",{parentName:"ul"},"Parameters\uff1aRetry result",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"true: If the retry strategy is run and the retry is successful"),(0,r.yg)("li",{parentName:"ul"},"false: If the retry strategy is run and the retry is not successful finally")))))),(0,r.yg)("h3",{id:"core-common-hook"},"Add hooks to IObservable"),(0,r.yg)("p",null,"When using IObservable, notifications are usually received via the Subscribe method.\nIn some cases, such as when you want to send the application's operation log to an external server, you may want to add processing to the IObservable without interfering with the application's original subscription processing.\nThe processing you want to add to the IObservable without interfering with the application's original processing is called a hook."),(0,r.yg)("p",null,"Hooks must handle exceptions so that the processing of the application is not interrupted in the event of a processing failure.\nThe Hook method to which hooks can be added is provided as an extension method of IObservable."),(0,r.yg)("p",null,"This is an example of an implementation that sends stage usage status (e.g., stay time) at the timing of stage transitions."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-csharp"},"stageNavigator.OnStageTransitioning\n              .Hook(_ => CollectStageUsage())\n              .AddTo(disposables);\n")),(0,r.yg)("p",null,"Unlike Subscribe, an exception raised by a processing executed with the Hook method does not affect other subscription processing.\nTo ensure that the developer is aware during development that an exception was raised by Hook, exception information is logged output with the Error level only when the log level is Debug."))}u.isMDXComponent=!0}}]);