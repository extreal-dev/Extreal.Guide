"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[2379],{5903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));a(1839);const l={sidebar_position:6},s="Development Guide",r={unversionedId:"sample-app/dev-guide",id:"sample-app/dev-guide",title:"Development Guide",description:"Project",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sample-app/dev-guide.md",sourceDirName:"sample-app",slug:"/sample-app/dev-guide",permalink:"/Extreal.Guide/en/next/sample-app/dev-guide",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Test Case",permalink:"/Extreal.Guide/en/next/sample-app/test-case"},next:{title:"Learning",permalink:"/Extreal.Guide/en/next/category/learning"}},o={},p=[{value:"Project",id:"project",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"Overview",id:"overview",level:4},{value:"Holiday",id:"holiday",level:4},{value:"Static analysis",id:"static-analysis",level:3},{value:"Assembly Definition(AD)",id:"assembly-definitionad",level:3},{value:"File settings",id:"file-settings",level:3},{value:"Application",id:"application",level:2},{value:"Entry point",id:"entry-point",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Stage configuration",id:"stage-configuration",level:3},{value:"Application state",id:"application-state",level:3},{value:"Utility class",id:"utility-class",level:3},{value:"Objects",id:"objects",level:2},{value:"DI",id:"di",level:3},{value:"Scope",id:"scope",level:3},{value:"Dispose pattern",id:"dispose-pattern",level:3},{value:"Assets",id:"assets",level:2},{value:"Scenes",id:"scenes",level:2},{value:"Design policy",id:"design-policy",level:3},{value:"Base class for Presenter",id:"base-class-for-presenter",level:3},{value:"Basic structure",id:"basic-structure",level:3},{value:"UI",id:"ui",level:2},{value:"Font",id:"font",level:3},{value:"Resolution",id:"resolution",level:3},{value:"Modularization",id:"modularization",level:3},{value:"Canvas",id:"canvas",level:3},{value:"Build",id:"build",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"development-guide"},"Development Guide"),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("h3",{id:"directory-structure"},"Directory structure"),(0,i.kt)("h4",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assets",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AddressableAssetsData",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Settings for using Addressables"))),(0,i.kt)("li",{parentName:"ul"},"Analyzer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Settings for using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/code-cracker/code-cracker"},"Code Cracker")))),(0,i.kt)("li",{parentName:"ul"},"Google Fonts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unity font assets created from ",(0,i.kt)("a",{parentName:"li",href:"https://fonts.google.com/noto/specimen/Noto+Sans+JP"},"Noto Sans Japanese")))),(0,i.kt)("li",{parentName:"ul"},"Holiday",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Assets created in the Holiday application"))),(0,i.kt)("li",{parentName:"ul"},"Holiday.Common",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Assets common to the Holiday application and the multiplayer server"))),(0,i.kt)("li",{parentName:"ul"},"Holiday.MultiplayServer",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Assets created by Holiday's multiplayer server"))),(0,i.kt)("li",{parentName:"ul"},"Holiday.PerformanceTest",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Materials for performance testing in Holiday"))),(0,i.kt)("li",{parentName:"ul"},"Mixamo",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unity character models created from ",(0,i.kt)("a",{parentName:"li",href:"https://www.mixamo.com/"},"Mixamo")))),(0,i.kt)("li",{parentName:"ul"},"Plugins",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Configuration files for Android builds"))),(0,i.kt)("li",{parentName:"ul"},"ScriptTemplates",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Script templates"))),(0,i.kt)("li",{parentName:"ul"},"StarterAssets",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526?locale=en-JP"},"Starter Assets - Third Person Character Controller")))),(0,i.kt)("li",{parentName:"ul"},"TextMesh Pro",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Settings for using TextMesh Pro"))),(0,i.kt)("li",{parentName:"ul"},"URP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Configuration for using Universal Render Pipeline"))))),(0,i.kt)("li",{parentName:"ul"},"Packages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unity packages for application development")))),(0,i.kt)("p",null,"We have a directory named starting with Holiday where we store our own assets.\nThis is to make it easier to distinguish between assets created by third parties and ourselves.\nDirectories other than Holiday are settings created for third parties or when using Unity features.\nWe have set up directories for applications, so all other directories have been created or named with names that identify them as third-party."),(0,i.kt)("h4",{id:"holiday"},"Holiday"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Application entry point"),(0,i.kt)("li",{parentName:"ul"},"Application-wide settings/status"),(0,i.kt)("li",{parentName:"ul"},"AssetWorkflow",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Common processing for asset downloads"))),(0,i.kt)("li",{parentName:"ul"},"Avatars",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Avatar prefabs"))),(0,i.kt)("li",{parentName:"ul"},"Config",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Application settings"))),(0,i.kt)("li",{parentName:"ul"},"Stages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Processing common to the stages"))))),(0,i.kt)("li",{parentName:"ul"},"Controls",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"XxxControl",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Control scene. Assets for each scene are placed together."))),(0,i.kt)("li",{parentName:"ul"},"Common",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Processing common to all Control scenes."))))),(0,i.kt)("li",{parentName:"ul"},"Editor",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AssetWorkflow",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Common processing for asset builds"))))),(0,i.kt)("li",{parentName:"ul"},"Screens",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"XxxScreen",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Screen scene. Assets for each scene are placed together."))),(0,i.kt)("li",{parentName:"ul"},"Common",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"UI and processing common to all Screen scenes."))))),(0,i.kt)("li",{parentName:"ul"},"Spaces",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"XxxSpace",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Space scene. Assets for each scene are placed together."))),(0,i.kt)("li",{parentName:"ul"},"Common",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"UI and processing common to all Space scenes.")))))),(0,i.kt)("p",null,"In many Unity applications, directories are divided by asset type, but since the assets that make up a single feature are scattered and difficult to find, Holiday will divide the directories by scene and place the assets for each scene together."),(0,i.kt)("p",null,"The application structure is shown below so that the correspondence between directories and scenes can be understood."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"application structure",src:a(6157).Z,width:"1099",height:"690"})),(0,i.kt)("h3",{id:"static-analysis"},"Static analysis"),(0,i.kt)("p",null,"Analyzer is configured in ",(0,i.kt)("inlineCode",{parentName:"p"},".editorconfig")," directly under root.\nEdit the script using an editor that supports ",(0,i.kt)("a",{parentName:"p",href:"https://editorconfig.org/"},"EditorConfig")," and make sure there are no problems with Analyzer before pushing."),(0,i.kt)("h3",{id:"assembly-definitionad"},"Assembly Definition(AD)"),(0,i.kt)("p",null,"Create one AD per application unit."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To limit third-party packages used in the application"),(0,i.kt)("li",{parentName:"ul"},"To facilitate the introduction of automated testing"),(0,i.kt)("li",{parentName:"ul"},"To apply ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/code-cracker/code-cracker"},"Code Cracker"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To apply Code Cracker, the AD to be checked must include Code Cracker.")))),(0,i.kt)("h3",{id:"file-settings"},"File settings"),(0,i.kt)("p",null,"Scripts and configuration files should have the following settings to avoid unintended change differences."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Encoding: ",(0,i.kt)("inlineCode",{parentName:"li"},"UTF-8 with BOM")),(0,i.kt)("li",{parentName:"ul"},"Newline code: ",(0,i.kt)("inlineCode",{parentName:"li"},"LF"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is set as ",(0,i.kt)("inlineCode",{parentName:"p"},"UTF-8 with BOM")," because ",(0,i.kt)("inlineCode",{parentName:"p"},"UTF-8 without BOM")," cannot be set in Visual Studio.")),(0,i.kt)("h2",{id:"application"},"Application"),(0,i.kt)("h3",{id:"entry-point"},"Entry point"),(0,i.kt)("p",null,"The entry point for the application is the following scene."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/App/App\n")),(0,i.kt)("h3",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"The initialization processing of the application is performed by InitializeApp in the following script.\nInitializeApp is called at the beginning of Awake."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/App/AppScope\n")),(0,i.kt)("p",null,"It sets the frame rate and ",(0,i.kt)("a",{parentName:"p",href:"/Extreal.Guide/en/next/core/logging#settings"},"Logging settings"),"."),(0,i.kt)("h3",{id:"stage-configuration"},"Stage configuration"),(0,i.kt)("p",null,"Three types of stage configurations are created as shown in ",(0,i.kt)("a",{parentName:"p",href:"/Extreal.Guide/en/next/core/stage-navigation#settings"},"Stage Navigation Settings"),".\nChange them when you create a stage or scene."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/App/Config/StageName\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/App/Config/SceneName\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/App/Config/StageConfig\n")),(0,i.kt)("h3",{id:"application-state"},"Application state"),(0,i.kt)("p",null,"The class to hold the application state is provided.\nIt is used to hold the player's name, selected avatar, and information across scenes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/App/AppState\n")),(0,i.kt)("h3",{id:"utility-class"},"Utility class"),(0,i.kt)("p",null,"Processing common to the entire application is provided as utility classes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/App/AppUtils\n")),(0,i.kt)("h2",{id:"objects"},"Objects"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://vcontainer.hadashikick.jp/"},"VContainer")," to manage the objects used in each scene."),(0,i.kt)("h3",{id:"di"},"DI"),(0,i.kt)("p",null,"For more information on DI, see ",(0,i.kt)("a",{parentName:"p",href:"https://vcontainer.hadashikick.jp/about/what-is-di"},"What is DI ?"),"."),(0,i.kt)("p",null,"There are several ways to do DI.\nVContainer recommends the following methods."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C# Type",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vcontainer.hadashikick.jp/resolving/constructor-injection"},"Constructor Injection")))),(0,i.kt)("li",{parentName:"ul"},"MonoBehaviour",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vcontainer.hadashikick.jp/resolving/property-field-injection"},"Property/Field Injection"))))),(0,i.kt)("p",null,"See RECOMMENDATION in ",(0,i.kt)("a",{parentName:"p",href:"https://vcontainer.hadashikick.jp/resolving/constructor-injection"},"Constructor Injection")," for VContainer's recommended reasons."),(0,i.kt)("p",null,"The following Register is used to register to VContainer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="C# Type"',title:'"C#','Type"':!0},"builder.Register<AppState>(Lifetime.Singleton);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="MonoBehaviour"',title:'"MonoBehaviour"'},"builder.RegisterComponent(networkManager);\n")),(0,i.kt)("p",null,"RegisterInstance and RegisterComponent can be used to register instances such as MonoBehaviour, but RegisterComponent should be used.\nRegisterInstance does not perform DI on the argument object, so if you mistakenly specify an object for which you want to use DI, it may take some time to resolve the problem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Entry point"',title:'"Entry','point"':!0},"builder.RegisterEntryPoint<AppPresenter>();\n")),(0,i.kt)("h3",{id:"scope"},"Scope"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://vcontainer.hadashikick.jp/"},"VContainer"),", an object attached to a class that extends LifetimeScope is placed in a scene, which represents one scope (one container).\nBy specifying the scope of the parent in the scope, the object search can be extended to the parent.\nHoliday uses the parent scope specification to make objects in the common scene available to each scene."),(0,i.kt)("p",null,"Common scenes for Holiday are as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"App scene"),(0,i.kt)("li",{parentName:"ul"},"ClientControl scene",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Vivox client and NGO client are provided.")))),(0,i.kt)("p",null,"Holiday's scope hierarchy is as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"App scene\n\u2191\nEach scene (Control scene, Screen scene, Space scene)\n\nor\n\nApp scene\n\u2191\nClientControl scene\n\u2191\nEach scene (Control scene, Screen scene, Space scene)\n")),(0,i.kt)("p",null,"Specify the scope of the common scene as the parent of each scene scope."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Parent of object scope",src:a(2716).Z,width:"657",height:"314"})),(0,i.kt)("h3",{id:"dispose-pattern"},"Dispose pattern"),(0,i.kt)("p",null,"It is recommended to implement the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern")," in the class that disposes.\nTo standardize the implementation of the Dispose Pattern, use the classes provided by ",(0,i.kt)("a",{parentName:"p",href:"/Extreal.Guide/en/next/core/common#core-common-dp"},"Common")," instead of implementing the Dispose Pattern individually."),(0,i.kt)("h2",{id:"assets"},"Assets"),(0,i.kt)("p",null,"Holiday externalizes content so that necessary content can be downloaded and used in applications.\nThis is to allow only the content to be changed, to reduce the size of the application and to shorten the download time."),(0,i.kt)("p",null,"Holiday uses ",(0,i.kt)("a",{parentName:"p",href:"/Extreal.Guide/en/next/integration/asset-workflow.addressables"},"AssetWorkflow.addressables")," for asset management."),(0,i.kt)("p",null,"The asset groups are as follows.\nThe asset is downloaded only the first time it is used, and the cache is used thereafter."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AppCommon",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Assets common to the entire application"),(0,i.kt)("li",{parentName:"ul"},"Message/chat/multiplayer settings, 3D models of avatars, etc"),(0,i.kt)("li",{parentName:"ul"},"Download timing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Before transitioning to the avatar selection stage"))))),(0,i.kt)("li",{parentName:"ul"},"VirtualSpace",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Assets for VirtualSpace stage"),(0,i.kt)("li",{parentName:"ul"},"3D model of virtual space, etc."),(0,i.kt)("li",{parentName:"ul"},"Download timing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Before transitioning to VirtualSpace stage"))))),(0,i.kt)("li",{parentName:"ul"},"Duplicate Asset Isolation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Duplicate assets in multiple asset groups"),(0,i.kt)("li",{parentName:"ul"},"Download timing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Same as AppCommon")))))),(0,i.kt)("p",null,"The following rules apply to remote base URLs, and assets are placed for each version of the application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Remote base URL\uff1a\n  https://<host>/<version>/<target>\nExample\uff1a\n  https://<host>/1.0.0/Android\n  https://<host>/1.0.0/iOS\n  https://<host>/1.0.0/StandaloneWindows64\n  https://<host>/1.1.0/Android\n  https://<host>/1.1.0/iOS\n  https://<host>/1.1.0/StandaloneWindows64\n")),(0,i.kt)("p",null,"When developing, you can play without downloading by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"Use Asset Database")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Play Mode Script")," in the settings of ",(0,i.kt)("inlineCode",{parentName:"p"},"Addressables Groups"),"."),(0,i.kt)("h2",{id:"scenes"},"Scenes"),(0,i.kt)("h3",{id:"design-policy"},"Design policy"),(0,i.kt)("p",null,"The following is a design policy for scenes.\nEach scene should be created according to this design policy.\nBy unifying the way each scene is created, we aim to create an application that is easy to maintain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scenes are created using the MV(R)P pattern"),(0,i.kt)("li",{parentName:"ul"},"Models used throughout the application will be managed in the scope of App scenes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"StageNavigator, AppState, repositories for data access, NetworkManager, etc."))),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"#application-state"},"AppState")," to exchange information across scenes"),(0,i.kt)("li",{parentName:"ul"},"Models used only in each scene are managed in the scope of each scene",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MultiplayRoom, TextChatChannel, etc."))),(0,i.kt)("li",{parentName:"ul"},"The scene loading/unloading process is handled by IInitializable/IDisposable",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is done by implementing IInitializable/IDisposable in Presenter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Note that the timing when IInitializable/IDisposable is called is not the timing of stage transitions. If the same scene continues at the stage transition, the scene is reused and IIInitializable/IDisposable is not called")))),(0,i.kt)("li",{parentName:"ul"},"StageNavigator's ",(0,i.kt)("a",{parentName:"li",href:"/Extreal.Guide/en/next/core/stage-navigation#core-sn-event"},"event notification")," is used for processing at stage transitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Implement IInitializable in Presenter to register StageNavigator's event subscription"),(0,i.kt)("li",{parentName:"ul"},"If you want to perform processing for each space, such as connecting/disconnecting to a multiplayer room or text chat channel, implement it as a processing at the time of stage transition")))),(0,i.kt)("h3",{id:"base-class-for-presenter"},"Base class for Presenter"),(0,i.kt)("p",null,"A base class is provided for the processing calls during stage transitions, as this processing is common to all presenter scripts in each scene."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/App/Common/StagePresenterBase\n")),(0,i.kt)("p",null,"A template is provided, so please create a presenter script from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Presenter Template"),"."),(0,i.kt)("p",null,"The Base class provides the following common processing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Calls for initialization when the scene is loaded"),(0,i.kt)("li",{parentName:"ul"},"Calls for processing when entering and exiting the stage"),(0,i.kt)("li",{parentName:"ul"},"Call to Dispose when exiting the stage"),(0,i.kt)("li",{parentName:"ul"},"Call to Dispose when the scene is unloaded")),(0,i.kt)("p",null,"The following is a template for a Presenter script that inherits from the Base class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class XxxxxPresenter : StagePresenterBase\n{\n\n    public XxxxxPresenter(StageNavigator<StageName, SceneName> stageNavigator) : base(stageNavigator)\n    {\n        // Constructor\n        // Pass StageNavigator to the Base class.\n        // Receive the objects needed for the scene via constructor injection.\n    }\n\n    protected override void Initialize(StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)\n    {\n        // Implement the initialization processing here when the scene is loaded.\n        // Add objects to sceneDisposables that you want to dispose of when unloading the scene.\n    }\n\n    protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)\n    {\n        // Implement the processing when entering the stage here.\n        // Add to stageDisposables the objects you want to dispose of when exiting the stage.\n    }\n\n    protected override void OnStageExiting(StageName stageName)\n    {\n        // Implement the process for exiting the stage here.\n    }\n}\n")),(0,i.kt)("h3",{id:"basic-structure"},"Basic structure"),(0,i.kt)("p",null,"For each scene, create a GameObject with the following asset name."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scope",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An empty GameObject to attach the LifetimeScope of the VContainer"))),(0,i.kt)("li",{parentName:"ul"},"View",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An empty GameObject to attach a View"))),(0,i.kt)("li",{parentName:"ul"},"(arbitrary name)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Screen/Space scene",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GameObjects such as UI of the screen or 3D objects in space"))),(0,i.kt)("li",{parentName:"ul"},"Control scene",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GameObjects such as cameras, etc.")))))),(0,i.kt)("p",null,"There is no need to create objects that are not necessary to realize the feature."),(0,i.kt)("p",null,"The objects and scripts of the avatar selection screen scene are shown below for reference."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Scope and View of the scene",src:a(6961).Z,width:"1235",height:"580"})),(0,i.kt)("p",null,"The avatar selection screen scene allows players to enter their name, select an avatar and transition to the next screen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class AvatarSelectionScreenScope : LifetimeScope\n{\n    [SerializeField] private AvatarSelectionScreenView avatarSelectionScreenView;\n\n    protected override void Configure(IContainerBuilder builder)\n    {\n        builder.RegisterComponent(avatarSelectionScreenView);\n\n        builder.RegisterEntryPoint<AvatarSelectionScreenPresenter>();\n    }\n}\n")),(0,i.kt)("p",null,"AvatarSelectionScreenScope registers a View and a Presenter in a scope.\nThe Presenter is registered as an entry point and serves as the starting point for scene processing.\nRefer to ",(0,i.kt)("a",{parentName:"p",href:"https://vcontainer.hadashikick.jp/integrations/entrypoint"},"Plain C# Entry point")," for the timing of processing that can be used at the entry point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'public class AvatarSelectionScreenPresenter : StagePresenterBase\n{\n    private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(AvatarSelectionScreenPresenter));\n\n    private readonly AvatarService avatarService;\n    private readonly AvatarSelectionScreenView avatarSelectionScreenView;\n    private readonly AppState appState;\n\n    public AvatarSelectionScreenPresenter\n    (\n        StageNavigator<StageName, SceneName> stageNavigator,\n        AvatarService avatarService,\n        AvatarSelectionScreenView avatarSelectionScreenView,\n        AppState appState\n    ) : base(stageNavigator)\n    {\n        this.avatarSelectionScreenView = avatarSelectionScreenView;\n        this.avatarService = avatarService;\n        this.appState = appState;\n    }\n\n    protected override void Initialize(\n        StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)\n    {\n        avatarSelectionScreenView.OnNameChanged\n            .Subscribe(appState.SetPlayerName)\n            .AddTo(sceneDisposables);\n\n        avatarSelectionScreenView.OnAvatarChanged\n            .Subscribe(avatarName =>\n            {\n                var avatar = avatarService.FindAvatarByName(avatarName);\n                appState.SetAvatar(avatar);\n            })\n            .AddTo(sceneDisposables);\n\n        avatarSelectionScreenView.OnGoButtonClicked\n            .Subscribe(_ => stageNavigator.ReplaceAsync(StageName.VirtualStage).Forget())\n            .AddTo(sceneDisposables);\n    }\n\n    protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)\n    {\n        var avatars = avatarService.Avatars;\n        if (appState.Avatar.Value == null)\n        {\n            appState.SetAvatar(avatars.First());\n        }\n\n        var avatarNames = avatars.Select(avatar => avatar.Name).ToList();\n        avatarSelectionScreenView.Initialize(avatarNames);\n\n        avatarSelectionScreenView.SetInitialValues(appState.PlayerName.Value, appState.Avatar.Value.Name);\n\n        if (Logger.IsDebug())\n        {\n            Logger.LogDebug($"player: name: {appState.PlayerName.Value} avatar: {appState.Avatar.Value.Name}");\n        }\n    }\n\n    protected override void OnStageExiting(StageName stageName)\n    {\n    }\n}\n')),(0,i.kt)("p",null,"Presenter injects Views and Models and performs View and Model processing mapping and stage transitions.\nSince the App scene scope is specified as the parent of the scope, StageNavigator and AppState managed by the App scene can be set and used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class AvatarSelectionScreenView : MonoBehaviour\n{\n    [SerializeField] private TMP_InputField nameInputField;\n    [SerializeField] private TMP_Dropdown avatarDropdown;\n    [SerializeField] private Button goButton;\n\n    private readonly List<string> avatarNames = new List<string>();\n\n    public void Initialize(List<string> avatarNames)\n    {\n        this.avatarNames.Clear();\n        this.avatarNames.AddRange(avatarNames);\n        avatarDropdown.options =\n            this.avatarNames.Select(avatarName => new TMP_Dropdown.OptionData(avatarName)).ToList();\n    }\n\n    public void SetInitialValues(string name, string avatarName)\n    {\n        nameInputField.text = name;\n        avatarDropdown.value = avatarNames.IndexOf(avatarName);\n    }\n\n    public IObservable<string> OnNameChanged =>\n        nameInputField.onEndEdit.AsObservable().TakeUntilDestroy(this);\n\n    public IObservable<string> OnAvatarChanged =>\n        avatarDropdown.onValueChanged.AsObservable()\n            .TakeUntilDestroy(this).Select(index => avatarNames[index]);\n\n    public IObservable<Unit> OnGoButtonClicked => goButton.OnClickAsObservable().TakeUntilDestroy(this);\n}\n")),(0,i.kt)("p",null,"View initializes the avatar pull-down, sets initial values for input items and notifies input item events."),(0,i.kt)("h2",{id:"ui"},"UI"),(0,i.kt)("h3",{id:"font"},"Font"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://fonts.google.com/noto/specimen/Noto+Sans+JP"},"Noto Sans Japanese")," has already been imported and set as the default for TextMesh Pro.\nPlease use Noto Sans Japanese font."),(0,i.kt)("h3",{id:"resolution"},"Resolution"),(0,i.kt)("p",null,"The resolution will be based on the generic size of 1920x1080.\nPC is assumed to be used at 1920x1080 and mobile at 1080x1920 in portrait mode.\nAdd 1080x1920 to the GameView resolution and check the two sizes on the Unity editor."),(0,i.kt)("h3",{id:"modularization"},"Modularization"),(0,i.kt)("p",null,"UIs that share a common design, such as screens and buttons, should be standardized for ease of maintenance.\nUse Unity's Prefab for UI commonization.\nIf you have added a Prefab, please add it below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/Screens/Common\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ScreenCanvas",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Canvas for screen"),(0,i.kt)("li",{parentName:"ul"},"Includes background color specification and SafeArea support"),(0,i.kt)("li",{parentName:"ul"},"Place the screen UI under the SafeArea"))),(0,i.kt)("li",{parentName:"ul"},"ScreenTitle",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Title for the screen"),(0,i.kt)("li",{parentName:"ul"},"Contains font and character settings"))),(0,i.kt)("li",{parentName:"ul"},"ScreenButton",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Button for the screen"),(0,i.kt)("li",{parentName:"ul"},"Contains font and character settings")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Assets/Holiday/Controls/Common\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SpaceCanvas",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Canvas for space"),(0,i.kt)("li",{parentName:"ul"},"Contains SafeArea support"),(0,i.kt)("li",{parentName:"ul"},"Place the screen UI under the SafeArea"))),(0,i.kt)("li",{parentName:"ul"},"SpaceButton",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Button for space"),(0,i.kt)("li",{parentName:"ul"},"Contains font and character settings")))),(0,i.kt)("h3",{id:"canvas"},"Canvas"),(0,i.kt)("p",null,"Specify SortOrder for the Canvas of common screens that are superimposed on a screen or space, such as background screens and loading screens, so that they are displayed in the front."),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"Since the build configuration is included in the repository, only the following settings need to be changed to build for production."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"HOLIDAY_PROD")," symbol to ",(0,i.kt)("inlineCode",{parentName:"li"},"Player Settings > Other Settings > Script Compilation"),".")),(0,i.kt)("p",null,"Applications are built on ",(0,i.kt)("inlineCode",{parentName:"p"},"Windows"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Android"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"iOS"),", and multiplayer servers are built on ",(0,i.kt)("inlineCode",{parentName:"p"},"Dedicated Server(Linux)"),"."))}u.isMDXComponent=!0},6157:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/holiday-app-structure-2ba2be59a5e81d27cfa63cc8b74e2bc9.png"},2716:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/holiday-object-scope-parent-91b1b485c4bdf474c9dcd13a1c0a5a56.png"},6961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/holiday-scene-scope-view-255ad95e1dc0fa69ca570cb918ca7ebb.png"}}]);