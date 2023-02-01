"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[2315],{1780:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(7462),n=(s(7294),s(3905)),o=s(1839);const i={sidebar_position:3},r="Common",l={unversionedId:"core/common",id:"core/common",title:"Common",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/core/common.md",sourceDirName:"core",slug:"/core/common",permalink:"/Extreal.Guide/en/next/core/common",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Stage Navigation",permalink:"/Extreal.Guide/en/next/core/stage-navigation"},next:{title:"Integration",permalink:"/Extreal.Guide/en/next/category/integration"}},p={},c=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Apply the Dispose Pattern",id:"core-common-dp",level:3}],d={toc:c};function u(e){let{components:a,...s}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"common"},"Common"),(0,n.kt)("h2",{id:"what-for"},"What for?"),(0,n.kt)("p",null,"A generic feature like retry processing is needed to realize the features of a framework or application.\nFor example, retry processing is required for external connection features such as ",(0,n.kt)("a",{parentName:"p",href:"/integration/chat.vivox"},"Chat")," and ",(0,n.kt)("a",{parentName:"p",href:"/integration/multiplay.ngo"},"Multiplay")," in frameworks and external API calls in applications.\nThis module provides such generic processing as common features."),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can apply the ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern"),".")),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)(o.G,{chart:"classDiagram\n\n    IDisposable <|.. DisposableBase\n    SafeDisposer <.. DisposableBase \n    \n    class SafeDisposer {\n        +SafeDisposer(target, releaseManagedResources, releaseUnmanagedResources)\n        +DisposeByFinalizer()\n        +Dispose()\n    }\n\n    class DisposableBase {\n        #DisposableBase()\n        #ReleaseManagedResources()\n        #ReleaseUnmanagedResources()\n    }\n\n    class IDisposable {\n        <<interface>>\n    }",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"package"},"Package"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Core.Common.git\n")),(0,n.kt)("h3",{id:"dependencies"},"Dependencies"),(0,n.kt)("p",null,"Common uses the following packages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/core/logging"},"Extreal.Core.Logging"))),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/category/release"},"Release")," for the correspondence between module version and each package version."),(0,n.kt)("h3",{id:"settings"},"Settings"),(0,n.kt)("p",null,"No work is required as there are no settings."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"core-common-dp"},"Apply the Dispose Pattern"),(0,n.kt)("p",null,"We provide two ways to apply the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern"),": inheritance and delegation.\nUse inheritance if it is available, since inheritance covers a wider range of the Dispose Pattern.\nIf the class to which the pattern is applied has already inherited from another class and inheritance is not available, use delegation."),(0,n.kt)("p",null,"The DisposableBase class is used in the inheritance."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class SomethingClass : DisposableBase\n{\n    // Processing something with resources\n    \n    protected override void ReleaseManagedResources()\n    {\n        // release managed resources\n    }\n\n    protected override void ReleaseUnmanagedResources()\n    {\n        // release unmanaged resources\n    }\n}\n")),(0,n.kt)("p",null,"Override the ReleaseManagedResources and ReleaseUnmanagedResources methods to release resources, depending on the resources to be handled.\nBy default, these methods do nothing, so there is no need to override methods that do not require release processing.\nThese methods are called by the DisposableBase class at the timing indicated in the Dispose Pattern."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To prevent resource release omissions, implement the resource release processing in such a way that it does not raise exceptions or errors.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern")," shows the correct way to implement Dispose.\nEven if you follow the Dispose Pattern, your application must call IDisposable's Dispose method at the appropriate time.\nThe same is true when using DisposableBase.")),(0,n.kt)("p",null,"The SafeDisposer class is used in the delegation.\nThe DisposableBase class uses the SafeDisposer class to realize the Dispose Pattern.\nPlease refer to the source code of the DisposableBase class as an example of implementation of the SafeDisposer class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"public class DisposableBase : IDisposable\n{\n    private readonly SafeDisposer safeDisposer;\n\n    protected DisposableBase()\n        => safeDisposer = new SafeDisposer(this, ReleaseManagedResources, ReleaseUnmanagedResources);\n\n    ~DisposableBase() => safeDisposer.DisposeByFinalizer();\n\n    protected virtual void ReleaseManagedResources() { }\n\n    protected virtual void ReleaseUnmanagedResources() { }\n\n    public void Dispose() => safeDisposer.Dispose();\n}\n")))}u.isMDXComponent=!0}}]);