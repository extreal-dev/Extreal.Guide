"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[1344],{4616:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=s(7624),t=s(5788);const a={sidebar_position:6},r="Development Guide",l={id:"sample-app/dev-guide",title:"Development Guide",description:"Project",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/sample-app/dev-guide.md",sourceDirName:"sample-app",slug:"/sample-app/dev-guide",permalink:"/Extreal.Guide/en/1.0.0/sample-app/dev-guide",draft:!1,unlisted:!1,tags:[],version:"1.0.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Test Case",permalink:"/Extreal.Guide/en/1.0.0/sample-app/test-case"},next:{title:"Learning",permalink:"/Extreal.Guide/en/1.0.0/category/learning"}},c={},o=[{value:"Project",id:"project",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"Overview",id:"overview",level:4},{value:"Holiday",id:"holiday",level:4},{value:"Static analysis",id:"static-analysis",level:3},{value:"Assembly Definition(AD)",id:"assembly-definitionad",level:3},{value:"File settings",id:"file-settings",level:3},{value:"Application",id:"application",level:2},{value:"Entry point",id:"entry-point",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Stage configuration",id:"stage-configuration",level:3},{value:"Application state",id:"application-state",level:3},{value:"Utility class",id:"utility-class",level:3},{value:"Objects",id:"objects",level:2},{value:"DI",id:"di",level:3},{value:"Scope",id:"scope",level:3},{value:"Assets",id:"assets",level:2},{value:"Scenes",id:"scenes",level:2},{value:"Design policy",id:"design-policy",level:3},{value:"Base class for Presenter",id:"base-class-for-presenter",level:3},{value:"Basic structure",id:"basic-structure",level:3},{value:"UI",id:"ui",level:2},{value:"Font",id:"font",level:3},{value:"Resolution",id:"resolution",level:3},{value:"Modularization",id:"modularization",level:3},{value:"Canvas",id:"canvas",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.MN)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"development-guide",children:"Development Guide"}),"\n",(0,i.jsx)(n.h2,{id:"project",children:"Project"}),"\n",(0,i.jsx)(n.h3,{id:"directory-structure",children:"Directory structure"}),"\n",(0,i.jsx)(n.h4,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Assets","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["AddressableAssetsData","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Settings for using Addressables"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Analyzer","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Settings for using ",(0,i.jsx)(n.a,{href:"https://github.com/code-cracker/code-cracker",children:"Code Cracker"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Google Fonts","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Unity font assets created from ",(0,i.jsx)(n.a,{href:"https://fonts.google.com/noto/specimen/Noto+Sans+JP",children:"Noto Sans Japanese"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Holiday","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assets created in the Holiday application"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Holiday.MultiplayCommon","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assets common to the Holiday application and the multiplayer server"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Holiday.MultiplayServer","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assets created by Holiday's multiplayer server"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Holiday.PerformanceTest","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Materials for performance testing in Holiday"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Mixamo","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Unity character models created from ",(0,i.jsx)(n.a,{href:"https://www.mixamo.com/",children:"Mixamo"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Plugins","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Configuration files for Android builds"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["StarterAssets","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526?locale=en-JP",children:"Starter Assets - Third Person Character Controller"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["TextMesh Pro","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Settings for using TextMesh Pro"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["URP","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Configuration for using Universal Render Pipeline"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Packages","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unity packages for application development"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We have a directory named starting with Holiday where we store our own assets.\nThis is to make it easier to distinguish between assets created by third parties and ourselves.\nDirectories other than Holiday are settings created for third parties or when using Unity features.\nWe have set up directories for applications, so all other directories have been created or named with names that identify them as third-party."}),"\n",(0,i.jsx)(n.h4,{id:"holiday",children:"Holiday"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["App.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Application entry point"}),"\n",(0,i.jsx)(n.li,{children:"Application-wide settings/status"}),"\n",(0,i.jsxs)(n.li,{children:["Common","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Processing common to the entire application"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Controls","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["XxxControl","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Control scene. Assets for each scene are placed together."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Common","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Processing common to all Control scenes."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Screens","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["XxxScreen","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Screen scene. Assets for each scene are placed together."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Common","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"UI and processing common to all Screen scenes."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Spaces","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["XxxSpace","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Space scene. Assets for each scene are placed together."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Common","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"UI and processing common to all Space scenes."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In many Unity applications, directories are divided by asset type, but since the assets that make up a single feature are scattered and difficult to find, Holiday will divide the directories by scene and place the assets for each scene together."}),"\n",(0,i.jsx)(n.p,{children:"The application structure is shown below so that the correspondence between directories and scenes can be understood."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"application structure",src:s(3596).c+"",width:"990",height:"687"})}),"\n",(0,i.jsx)(n.h3,{id:"static-analysis",children:"Static analysis"}),"\n",(0,i.jsxs)(n.p,{children:["Analyzer is configured in ",(0,i.jsx)(n.code,{children:".editorconfig"})," directly under root.\nEdit the script using an editor that supports ",(0,i.jsx)(n.a,{href:"https://editorconfig.org/",children:"EditorConfig"})," and make sure there are no problems with Analyzer before pushing."]}),"\n",(0,i.jsx)(n.h3,{id:"assembly-definitionad",children:"Assembly Definition(AD)"}),"\n",(0,i.jsx)(n.p,{children:"Create one AD per application unit."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To limit third-party packages used in the application"}),"\n",(0,i.jsx)(n.li,{children:"To facilitate the introduction of automated testing"}),"\n",(0,i.jsxs)(n.li,{children:["To apply ",(0,i.jsx)(n.a,{href:"https://github.com/code-cracker/code-cracker",children:"Code Cracker"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To apply Code Cracker, the AD to be checked must include Code Cracker."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"file-settings",children:"File settings"}),"\n",(0,i.jsx)(n.p,{children:"Scripts and configuration files should have the following settings to avoid unintended change differences."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Encoding: ",(0,i.jsx)(n.code,{children:"UTF-8 with BOM"})]}),"\n",(0,i.jsxs)(n.li,{children:["Newline code: ",(0,i.jsx)(n.code,{children:"LF"})]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["It is set as ",(0,i.jsx)(n.code,{children:"UTF-8 with BOM"})," because ",(0,i.jsx)(n.code,{children:"UTF-8 without BOM"})," cannot be set in Visual Studio."]})}),"\n",(0,i.jsx)(n.h2,{id:"application",children:"Application"}),"\n",(0,i.jsx)(n.h3,{id:"entry-point",children:"Entry point"}),"\n",(0,i.jsx)(n.p,{children:"The entry point for the application is the following scene."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/App/App\n"})}),"\n",(0,i.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsx)(n.p,{children:"The initialization processing of the application is performed by InitializeApp in the following script.\nInitializeApp is called at the beginning of Awake."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/App/AppScope\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It sets the frame rate and ",(0,i.jsx)(n.a,{href:"/Extreal.Guide/en/1.0.0/core/logging#settings",children:"Logging settings"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"stage-configuration",children:"Stage configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Three types of stage configurations are created as shown in ",(0,i.jsx)(n.a,{href:"/Extreal.Guide/en/1.0.0/core/stage-navigation#settings",children:"Stage Navigation Settings"}),".\nChange them when you create a stage or scene."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/App/Config/StageName\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/App/Config/SceneName\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/App/Config/StageConfig\n"})}),"\n",(0,i.jsx)(n.h3,{id:"application-state",children:"Application state"}),"\n",(0,i.jsx)(n.p,{children:"The class to hold the application state is provided.\nIt is used to hold the player's name, selected avatar, and information across scenes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/App/AppState\n"})}),"\n",(0,i.jsx)(n.h3,{id:"utility-class",children:"Utility class"}),"\n",(0,i.jsx)(n.p,{children:"Processing common to the entire application is provided as utility classes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/App/AppUtils\n"})}),"\n",(0,i.jsx)(n.h2,{id:"objects",children:"Objects"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"https://vcontainer.hadashikick.jp/",children:"VContainer"})," to manage the objects used in each scene."]}),"\n",(0,i.jsx)(n.h3,{id:"di",children:"DI"}),"\n",(0,i.jsxs)(n.p,{children:["For more information on DI, see ",(0,i.jsx)(n.a,{href:"https://vcontainer.hadashikick.jp/about/what-is-di",children:"What is DI ?"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"There are several ways to do DI.\nVContainer recommends the following methods."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["C# Type","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vcontainer.hadashikick.jp/resolving/constructor-injection",children:"Constructor Injection"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["MonoBehaviour","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://vcontainer.hadashikick.jp/resolving/method-injection",children:"Method Injection"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See RECOMMENDATION in ",(0,i.jsx)(n.a,{href:"https://vcontainer.hadashikick.jp/resolving/constructor-injection",children:"Constructor Injection"})," for VContainer's recommended reasons."]}),"\n",(0,i.jsx)(n.p,{children:"The following Register is used to register to VContainer."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="C# Type"',children:"builder.Register<AppState>(Lifetime.Singleton);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="MonoBehaviour"',children:"builder.RegisterComponent(networkManager);\n"})}),"\n",(0,i.jsx)(n.p,{children:"RegisterInstance and RegisterComponent can be used to register instances such as MonoBehaviour, but RegisterComponent should be used.\nRegisterInstance does not perform DI on the argument object, so if you mistakenly specify an object for which you want to use DI, it may take some time to resolve the problem."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Entry point"',children:"builder.RegisterEntryPoint<AppPresenter>();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"scope",children:"Scope"}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.a,{href:"https://vcontainer.hadashikick.jp/",children:"VContainer"}),", an object attached to a class that extends LifetimeScope is placed in a scene, which represents one scope (one container).\nBy specifying the scope of the parent in the scope, the object search can be extended to the parent.\nHoliday uses the parent scope specification to make objects in the App scene available to each scene.\nHoliday's scope hierarchy is as follows."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"App scene\n\u2191\nEach scene (Control scene, Screen scene, Space scene)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the scope of the App scene as the parent of each scene scope."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Parent of object scope",src:s(2692).c+"",width:"657",height:"314"})}),"\n",(0,i.jsx)(n.h2,{id:"assets",children:"Assets"}),"\n",(0,i.jsx)(n.p,{children:"Currently, all assets are included in the application, but if the content volume increases, it is assumed that the content will be externalized so that only the necessary content can be downloaded and used in the application. This is to reduce the download time by reducing the size of the application and the case where only the content needs to be changed."}),"\n",(0,i.jsx)(n.p,{children:"Holiday uses Addressables in Unity for asset management.\nAddressables are used for the following purposes."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Name the assets to be used and retrieve them in the application without relying on physical paths"}),"\n",(0,i.jsx)(n.li,{children:"Switch from local to remote fetching of assets without modifying the application source code"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The rules for naming assets are as follows."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Type + Name\n\n(Example)\nAvatarAmy\nAvatarMichelle\n"})}),"\n",(0,i.jsx)(n.h2,{id:"scenes",children:"Scenes"}),"\n",(0,i.jsx)(n.h3,{id:"design-policy",children:"Design policy"}),"\n",(0,i.jsx)(n.p,{children:"The following is a design policy for scenes.\nEach scene should be created according to this design policy.\nBy unifying the way each scene is created, we aim to create an application that is easy to maintain."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Scenes are created using the MV(R)P pattern"}),"\n",(0,i.jsxs)(n.li,{children:["Models used throughout the application will be managed in the scope of App scenes","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"StageNavigator, AppState, repositories for data access, NetworkManager, etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.a,{href:"#application-state",children:"AppState"})," to exchange information across scenes"]}),"\n",(0,i.jsxs)(n.li,{children:["Models used only in each scene are managed in the scope of each scene","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MultiplayRoom, TextChatChannel, etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The scene loading/unloading process is handled by IInitializable/IDisposable","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This is done by implementing IInitializable/IDisposable in Presenter"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Note that the timing when IInitializable/IDisposable is called is not the timing of stage transitions. If the same scene continues at the stage transition, the scene is reused and IIInitializable/IDisposable is not called"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["StageNavigator's ",(0,i.jsx)(n.a,{href:"/Extreal.Guide/en/1.0.0/core/stage-navigation#core-sn-event",children:"event notification"})," is used for processing at stage transitions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implement IInitializable in Presenter to register StageNavigator's event subscription"}),"\n",(0,i.jsx)(n.li,{children:"If you want to perform processing for each space, such as connecting/disconnecting to a multiplayer room or text chat channel, implement it as a processing at the time of stage transition"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"base-class-for-presenter",children:"Base class for Presenter"}),"\n",(0,i.jsx)(n.p,{children:"A base class is provided for the processing calls during stage transitions, as this processing is common to all presenter scripts in each scene.\nPresenter scripts should use this Base class."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/App/Common/StagePresenterBase\n"})}),"\n",(0,i.jsx)(n.p,{children:"The Base class provides the following common processing."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Calls for initialization when the scene is loaded"}),"\n",(0,i.jsx)(n.li,{children:"Calls for processing when entering and exiting the stage"}),"\n",(0,i.jsx)(n.li,{children:"Call to Dispose when exiting the stage"}),"\n",(0,i.jsx)(n.li,{children:"Call to Dispose when the scene is unloaded"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following is a template for a Presenter script that inherits from the Base class."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class XxxxxPresenter : StagePresenterBase\n{\n\n    public XxxxxPresenter(StageNavigator<StageName, SceneName> stageNavigator) : base(stageNavigator)\n    {\n        // Constructor\n        // Pass StageNavigator to the Base class.\n        // Receive the objects needed for the scene via constructor injection.\n    }\n\n    protected override void Initialize(StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)\n    {\n        // Implement the initialization processing here when the scene is loaded.\n        // Add objects to sceneDisposables that you want to dispose of when unloading the scene.\n    }\n\n    protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)\n    {\n        // Implement the processing when entering the stage here.\n        // Add to stageDisposables the objects you want to dispose of when exiting the stage.\n    }\n\n    protected override void OnStageExiting(StageName stageName)\n    {\n        // Implement the process for exiting the stage here.\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"basic-structure",children:"Basic structure"}),"\n",(0,i.jsx)(n.p,{children:"For each scene, create a GameObject with the following asset name."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Scope","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An empty GameObject to attach the LifetimeScope of the VContainer"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["View","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An empty GameObject to attach a View"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["(arbitrary name)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Screen/Space scene","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GameObjects such as UI of the screen or 3D objects in space"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Control scene","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GameObjects such as cameras, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There is no need to create objects that are not necessary to realize the feature."}),"\n",(0,i.jsx)(n.p,{children:"The objects and scripts of the avatar selection screen scene are shown below for reference."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Scope and View of the scene",src:s(4844).c+"",width:"1235",height:"580"})}),"\n",(0,i.jsx)(n.p,{children:"The avatar selection screen scene allows players to enter their name, select an avatar and transition to the next screen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class AvatarSelectionScreenScope : LifetimeScope\n{\n    [SerializeField] private AvatarSelectionScreenView avatarSelectionScreenView;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(avatarSelectionScreenView);\n\n        builder.RegisterEntryPoint<AvatarSelectionScreenPresenter>();\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["AvatarSelectionScreenScope registers a View and a Presenter in a scope.\nThe Presenter is registered as an entry point and serves as the starting point for scene processing.\nRefer to ",(0,i.jsx)(n.a,{href:"https://vcontainer.hadashikick.jp/integrations/entrypoint",children:"Plain C# Entry point"})," for the timing of processing that can be used at the entry point."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class AvatarSelectionScreenPresenter : StagePresenterBase\n{\n    private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(AvatarSelectionScreenPresenter));\n\n    private readonly AvatarService avatarService;\n    private readonly AvatarSelectionScreenView avatarSelectionScreenView;\n    private readonly AppState appState;\n\n    public AvatarSelectionScreenPresenter\n    (\n        StageNavigator<StageName, SceneName> stageNavigator,\n        AvatarService avatarService,\n        AvatarSelectionScreenView avatarSelectionScreenView,\n        AppState appState\n    ) : base(stageNavigator)\n    {\n        this.avatarSelectionScreenView = avatarSelectionScreenView;\n        this.avatarService = avatarService;\n        this.appState = appState;\n    }\n\n    protected override void Initialize(\n        StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)\n    {\n        avatarSelectionScreenView.OnNameChanged\n            .Subscribe(appState.SetPlayerName)\n            .AddTo(sceneDisposables);\n\n        avatarSelectionScreenView.OnAvatarChanged\n            .Subscribe(avatarName =>\n            {\n                var avatar = avatarService.FindAvatarByName(avatarName);\n                appState.SetAvatar(avatar);\n            })\n            .AddTo(sceneDisposables);\n\n        avatarSelectionScreenView.OnGoButtonClicked\n            .Subscribe(_ => stageNavigator.ReplaceAsync(StageName.VirtualStage).Forget())\n            .AddTo(sceneDisposables);\n    }\n\n    protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)\n    {\n        var avatars = avatarService.Avatars;\n        if (appState.Avatar.Value == null)\n        {\n            appState.SetAvatar(avatars.First());\n        }\n\n        var avatarNames = avatars.Select(avatar => avatar.Name).ToList();\n        avatarSelectionScreenView.Initialize(avatarNames);\n\n        avatarSelectionScreenView.SetInitialValues(appState.PlayerName.Value, appState.Avatar.Value.Name);\n\n        if (Logger.IsDebug())\n        {\n            Logger.LogDebug($"player: name: {appState.PlayerName.Value} avatar: {appState.Avatar.Value.Name}");\n        }\n    }\n\n    protected override void OnStageExiting(StageName stageName)\n    {\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Presenter injects Views and Models and performs View and Model processing mapping and stage transitions.\nSince the App scene scope is specified as the parent of the scope, StageNavigator and AppState managed by the App scene can be set and used."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public class AvatarSelectionScreenView : MonoBehaviour\n{\n    [SerializeField] private TMP_InputField nameInputField;\n    [SerializeField] private TMP_Dropdown avatarDropdown;\n    [SerializeField] private Button goButton;\n\n    private readonly List<string> avatarNames = new List<string>();\n\n    public void Initialize(List<string> avatarNames)\n    {\n        this.avatarNames.Clear();\n        this.avatarNames.AddRange(avatarNames);\n        avatarDropdown.options =\n            this.avatarNames.Select(avatarName => new TMP_Dropdown.OptionData(avatarName)).ToList();\n    }\n\n    public void SetInitialValues(string name, string avatarName)\n    {\n        nameInputField.text = name;\n        avatarDropdown.value = avatarNames.IndexOf(avatarName);\n    }\n\n    public IObservable<string> OnNameChanged =>\n        nameInputField.onEndEdit.AsObservable().TakeUntilDestroy(this);\n\n    public IObservable<string> OnAvatarChanged =>\n        avatarDropdown.onValueChanged.AsObservable()\n            .TakeUntilDestroy(this).Select(index => avatarNames[index]);\n\n    public IObservable<Unit> OnGoButtonClicked => goButton.OnClickAsObservable().TakeUntilDestroy(this);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"View initializes the avatar pull-down, sets initial values for input items and notifies input item events."}),"\n",(0,i.jsx)(n.h2,{id:"ui",children:"UI"}),"\n",(0,i.jsx)(n.h3,{id:"font",children:"Font"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://fonts.google.com/noto/specimen/Noto+Sans+JP",children:"Noto Sans Japanese"})," has already been imported and set as the default for TextMesh Pro.\nPlease use Noto Sans Japanese font."]}),"\n",(0,i.jsx)(n.h3,{id:"resolution",children:"Resolution"}),"\n",(0,i.jsx)(n.p,{children:"The resolution will be based on the generic size of 1920x1080.\nPC is assumed to be used at 1920x1080 and mobile at 1080x1920 in portrait mode.\nAdd 1080x1920 to the GameView resolution and check the two sizes on the Unity editor."}),"\n",(0,i.jsx)(n.h3,{id:"modularization",children:"Modularization"}),"\n",(0,i.jsx)(n.p,{children:"UIs that share a common design, such as screens and buttons, should be standardized for ease of maintenance.\nUse Unity's Prefab for UI commonization.\nIf you have added a Prefab, please add it below."}),"\n",(0,i.jsx)(n.p,{children:"Path of Prefab"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Assets/Holiday/Stages/Common\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ScreenCanvas","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Canvas for screen"}),"\n",(0,i.jsx)(n.li,{children:"Includes background color specification and SafeArea support"}),"\n",(0,i.jsx)(n.li,{children:"Place the screen UI under the SafeArea"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ScreenTitle","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Title for the screen"}),"\n",(0,i.jsx)(n.li,{children:"Contains font and character settings"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ScreenButton","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Button for the screen"}),"\n",(0,i.jsx)(n.li,{children:"Contains font and character settings"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["SpaceCanvas","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Canvas for space"}),"\n",(0,i.jsx)(n.li,{children:"Contains SafeArea support"}),"\n",(0,i.jsx)(n.li,{children:"Place the screen UI under the SafeArea"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["SpaceTitle","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Title for the space"}),"\n",(0,i.jsx)(n.li,{children:"Contains font and character settings"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["SpaceButton","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Button for space"}),"\n",(0,i.jsx)(n.li,{children:"Contains font and character settings"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"canvas",children:"Canvas"}),"\n",(0,i.jsx)(n.p,{children:"Specify SortOrder for the Canvas of common screens that are superimposed on a screen or space, such as background screens and loading screens, so that they are displayed in the front."})]})}function h(e={}){const{wrapper:n}={...(0,t.MN)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5788:(e,n,s)=>{s.d(n,{MN:()=>o});var i=s(1504);function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,i)}return s}function r(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?a(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function l(e,n){if(null==e)return{};var s,i,t=function(e,n){if(null==e)return{};var s,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)s=a[i],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)s=a[i],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var c=i.createContext({}),o=function(e){var n=i.useContext(c),s=n;return e&&(s="function"==typeof e?e(n):r(r({},n),e)),s},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var s=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=o(s),u=t,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return s?i.createElement(g,r(r({ref:n},h),{},{components:s})):i.createElement(g,r({ref:n},h))}));h.displayName="MDXCreateElement"},3596:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/holiday-app-structure-ba4f44e4e67ab3eeff26f81156c7eba4.png"},2692:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/holiday-object-scope-parent-91b1b485c4bdf474c9dcd13a1c0a5a56.png"},4844:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/holiday-scene-scope-view-255ad95e1dc0fa69ca570cb918ca7ebb.png"}}]);