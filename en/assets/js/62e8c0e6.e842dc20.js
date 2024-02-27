"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[4400],{1515:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(9668),i=(t(6540),t(5680));t(7443);const r={sidebar_position:2},o="Core",l={unversionedId:"learning/core",id:"version-1.2.0/learning/core",title:"Core",description:"In this section, you will learn about Core.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.2.0/learning/core.md",sourceDirName:"learning",slug:"/learning/core",permalink:"/Extreal.Guide/en/learning/core",draft:!1,tags:[],version:"1.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Extreal.Guide/en/learning/intro"},next:{title:"Chat using Vivox",permalink:"/Extreal.Guide/en/learning/chat.vivox"}},g={},p=[{value:"Create project",id:"create-project",level:2},{value:"Create entry point",id:"create-entry-point",level:2},{value:"Add Logging",id:"add-logging",level:2},{value:"Add Stage Navigation",id:"add-stage-navigation",level:2},{value:"Apply MV(R)P pattern",id:"apply-mvrp-pattern",level:2},{value:"VContainer",id:"vcontainer",level:3},{value:"UniRx",id:"unirx",level:3},{value:"Next Step",id:"next-step",level:2}],s={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(c,(0,a.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"core"},"Core"),(0,i.yg)("p",null,"In this section, you will learn about ",(0,i.yg)("a",{parentName:"p",href:"../category/core"},"Core"),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Approximate learning time",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"60 min"))),(0,i.yg)("li",{parentName:"ul"},"Unity Version",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"2022.3.2f1")))),(0,i.yg)("p",null,"You will start by creating a project and introducing Core features, as well as VContainer and UniRx, to build the application architecture assumed by Extreal."),(0,i.yg)("h2",{id:"create-project"},"Create project"),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"First, let's create a project.")),(0,i.yg)("p",null,"Create a new project from Unity Hub."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"create project",src:t(8546).A,width:"658",height:"386"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Editor version: ",(0,i.yg)("inlineCode",{parentName:"li"},"2022.3.2f1")),(0,i.yg)("li",{parentName:"ul"},"Template: ",(0,i.yg)("inlineCode",{parentName:"li"},"3D")),(0,i.yg)("li",{parentName:"ul"},"Project name: ",(0,i.yg)("inlineCode",{parentName:"li"},"ExtrealCoreLearning"))),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Once the Unity editor starts, run it to make sure there are no problems.")),(0,i.yg)("p",null,"Let's run SampleScene.\nSince nothing is placed in the scene, nothing will happen.\nIf nothing appears in the Console, it is a successful."),(0,i.yg)("h2",{id:"create-entry-point"},"Create entry point"),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Create a directory for the application and an App scene to serve as the entry point.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"App Scene",src:t(8982).A,width:"464",height:"328"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Remove the initial ",(0,i.yg)("inlineCode",{parentName:"li"},"Assets/Scenes")," directory"),(0,i.yg)("li",{parentName:"ul"},"Create a directory that will become ",(0,i.yg)("inlineCode",{parentName:"li"},"Assets/ExtrealCoreLearning/App")),(0,i.yg)("li",{parentName:"ul"},"Create an ",(0,i.yg)("inlineCode",{parentName:"li"},"App")," scene in the ",(0,i.yg)("inlineCode",{parentName:"li"},"App")," directory")),(0,i.yg)("h2",{id:"add-logging"},"Add Logging"),(0,i.yg)("p",null,"Add ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/logging"},"Logging")," to the application."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Add Logging from Package Manager.")),(0,i.yg)("p",null,"Add Logging by specifying a Git URL.\nGit URL is obtained from ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/logging#package"},"Package of Logging"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Add Logging",src:t(328).A,width:"618",height:"407"})),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"Extreal.Core.Logging")," is added to Package Manager, it is successful.\nThe version depends on the timing of implementation."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Allow scripts to reference Logging.")),(0,i.yg)("p",null,"Set Logging to Assembly Definition for the application."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Logging Assembly Configuration",src:t(6670).A,width:"863",height:"420"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create an Assembly Definition named ",(0,i.yg)("inlineCode",{parentName:"li"},"ExtrealCoreLearning")," in the ExtrealCoreLearning directory"),(0,i.yg)("li",{parentName:"ul"},"Specify ",(0,i.yg)("inlineCode",{parentName:"li"},"ExtrealCoreLearning")," as the Root Namespace"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"Extreal.Core.Logging")," to the Assembly Definition References"),(0,i.yg)("li",{parentName:"ul"},"Uncheck ",(0,i.yg)("inlineCode",{parentName:"li"},"Use GUIDs")," in Assembly Definition References")),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Add a Logging setting since we want to output Debug-level logs for development.")),(0,i.yg)("p",null,"Since the default logging level for Logging is Info, add Logging Settings to change the logging level."),(0,i.yg)("p",null,"Create an ",(0,i.yg)("inlineCode",{parentName:"p"},"AppTest")," script in the App scene by referring to ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/logging#settings"},"Logging Settings"),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create an AppTest script in the App directory"),(0,i.yg)("li",{parentName:"ul"},"Create a GameObject with the AppTest script attached in the App scene")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using Extreal.Core.Logging;\nusing UnityEngine;\n\nnamespace ExtrealCoreLearning.App\n{\n    public class AppTest : MonoBehaviour\n    {\n        private static void InitializeApp()\n        {\n            const LogLevel logLevel = LogLevel.Debug;\n            LoggingManager.Initialize(logLevel: logLevel);\n        }\n\n        private void Awake()\n        {\n            InitializeApp();\n        }\n    }\n}\n")),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Since it is not possible to check the operation of Logging as it is, add processing so that logging is output immediately after initialization of Logging.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'private static void InitializeApp()\n{\n    const LogLevel logLevel = LogLevel.Debug;\n    LoggingManager.Initialize(logLevel: logLevel);\n\n    // highlight-start\n    var logger = LoggingManager.GetLogger(nameof(AppTest));\n    if (logger.IsDebug())\n    {\n        logger.LogDebug("Hello, world!");\n    }\n    // highlight-end\n}\n')),(0,i.yg)("p",null,"Run the App scene.\nIf the Console outputs ",(0,i.yg)("inlineCode",{parentName:"p"},"Hello, world!"),", it is successful."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Logging assembly configuration",src:t(6449).A,width:"688",height:"171"})),(0,i.yg)("h2",{id:"add-stage-navigation"},"Add Stage Navigation"),(0,i.yg)("p",null,"Add ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/stage-navigation"},"Stage Navigation")," to the application."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Stage Navigation depends on ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Cysharp/UniTask"},"UniTask")," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/neuecc/UniRx"},"UniRx"),", so add UniTask and UniRx first.")),(0,i.yg)("p",null,"UniTask and UniRx are provided by ",(0,i.yg)("a",{parentName:"p",href:"https://openupm.com/"},"OpenUPM"),", so add OpenUPM settings.\nGo to ",(0,i.yg)("inlineCode",{parentName:"p"},"Edit")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Project Settings...")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Package Manager")," and add OpenUPM to Scoped Registries."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Add Unitask",src:t(5542).A,width:"537",height:"382"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Name:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"OpenUPM\n"))),(0,i.yg)("li",{parentName:"ul"},"URL:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"https://package.openupm.com\n"))),(0,i.yg)("li",{parentName:"ul"},"Scope(s):",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"UniTask",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"com.cysharp\n"))),(0,i.yg)("li",{parentName:"ul"},"UniRx",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"com.neuecc\n")))))),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Now that UniTask and UniRx have been added, make Stage Navigation available from the script.")),(0,i.yg)("p",null,"Stage Navigation depends on ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/common"},"Common"),", so add Common as well."),(0,i.yg)("p",null,"Operate the Package Manager and Assembly Definition in the same manner as for Logging.\nThe Git URLs for Common and Stage Navigation are obtained from ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/common#package"},"Package for Common")," and ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/stage-navigation#package"},"Package for Stage Navigation"),".\nAlso set UniTask and UniRx in Assembly Definition."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Add Stage Navigation",src:t(4902).A,width:"910",height:"386"})),(0,i.yg)("p",null,"To test the stage navigation, let's add a title screen and transition to the title screen immediately after launching the app."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"First, add a title screen.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"TitleScreen",src:t(3905).A,width:"393",height:"249"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a ",(0,i.yg)("inlineCode",{parentName:"li"},"TitleScreen")," directory in the same hierarchy as the App directory"),(0,i.yg)("li",{parentName:"ul"},"Create a ",(0,i.yg)("inlineCode",{parentName:"li"},"TitleScreen")," scene in it"),(0,i.yg)("li",{parentName:"ul"},"Remove the default GameObjects such as the camera from the TitleScreen scene and make the scene empty"),(0,i.yg)("li",{parentName:"ul"},"Add a ",(0,i.yg)("inlineCode",{parentName:"li"},"Canvas")," to the scene. In the inspector, make the following settings\n",(0,i.yg)("img",{alt:"Title Screen Canvas",src:t(907).A,width:"449",height:"156"}),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Canvas Scaler",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"UI Scale Mode: ",(0,i.yg)("inlineCode",{parentName:"li"},"Scale With Screen Size")))))),(0,i.yg)("li",{parentName:"ul"},"Add an ",(0,i.yg)("inlineCode",{parentName:"li"},"Image")," under the Canvas. Make the following settings in the ",(0,i.yg)("inlineCode",{parentName:"li"},"Image"),"'s inspector\n",(0,i.yg)("img",{alt:"Title Screen Image",src:t(9048).A,width:"450",height:"382"}),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Rect Transform",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Anchor Presets",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"X: ",(0,i.yg)("inlineCode",{parentName:"li"},"stretch")),(0,i.yg)("li",{parentName:"ul"},"Y: ",(0,i.yg)("inlineCode",{parentName:"li"},"stretch")))),(0,i.yg)("li",{parentName:"ul"},"All from Left to Buttom are ",(0,i.yg)("inlineCode",{parentName:"li"},"0 (Zero)")))),(0,i.yg)("li",{parentName:"ul"},"Image",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Color",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Hexadecimal: ",(0,i.yg)("inlineCode",{parentName:"li"},"FF6F61")))))))),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"Text - TextMeshPro")," under ",(0,i.yg)("inlineCode",{parentName:"li"},"Image"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Create a title ",(0,i.yg)("inlineCode",{parentName:"li"},"Extreal Core Learning")),(0,i.yg)("li",{parentName:"ul"},"You can decide the size and position freely"),(0,i.yg)("li",{parentName:"ul"},"When the TMP Importer appears, select ",(0,i.yg)("inlineCode",{parentName:"li"},"Import TMP Essentials"),". Only the first time you use TextMeshPro, the TMP Importer will appear. Once imported, close the TMP Importer"))),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"Button - TextMeshPro")," under Image",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Create a button called ",(0,i.yg)("inlineCode",{parentName:"li"},"Go")),(0,i.yg)("li",{parentName:"ul"},"You can decide the size and position of this button freely as well")))),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Now that the title screen has been added, create the stage settings.")),(0,i.yg)("p",null,"Refer to ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/stage-navigation#settings"},"Settings for Stage Navigation")," to create stage settings.\nThe three types to be created in the stage settings are placed in the App directory."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"public enum StageName\n{\n    TitleStage = 0,\n}\npublic enum SceneName\n{\n    TitleScreen = 100,\n}\n")),(0,i.yg)("p",null,"Once the three types have been created, create a ",(0,i.yg)("inlineCode",{parentName:"p"},"StageConfig")," object."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"StageConfig",src:t(3685).A,width:"1032",height:"310"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a ",(0,i.yg)("inlineCode",{parentName:"li"},"StageConfig")," object in the App directory from the Assets menu"),(0,i.yg)("li",{parentName:"ul"},"Set the stage of the title screen in the StageConfig object")),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Now that the stage transition is ready, add a processing to make the transition to the title screen immediately after the application is launched.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Add the SerializeField and Start method to the AppTest script"),(0,i.yg)("li",{parentName:"ul"},"Specify the StageConfig object in the inspector")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using Extreal.Core.Logging;\n// highlight-start\nusing Extreal.Core.StageNavigation;\n// highlight-end\nusing UnityEngine;\n\nnamespace ExtrealCoreLearning.App\n{\n    public class AppTest : MonoBehaviour\n    {\n        private static void InitializeApp()\n        {\n            // Omitted due to no changes\n        }\n\n        private void Awake()\n        {\n            // Omitted due to no changes\n        }\n        \n        // highlight-start\n        [SerializeField] private StageConfig stageConfig;\n\n        private void Start()\n        {\n            var stageNavigator = new StageNavigator<StageName, SceneName>(stageConfig);\n            stageNavigator.ReplaceAsync(StageName.TitleStage);\n        }\n        // highlight-end\n    }\n}\n")),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Let's run the App scene.")),(0,i.yg)("p",null,"Running the App scene in this state will result in the following error."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Stage transition error",src:t(5517).A,width:"606",height:"290"})),(0,i.yg)("p",null,"Add a ",(0,i.yg)("inlineCode",{parentName:"p"},"TitleScreen")," scene to ",(0,i.yg)("inlineCode",{parentName:"p"},"Scenes In Build")," in Build Settings."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Let's run the App scene again.")),(0,i.yg)("p",null,"If the title screen appears and the Console shows ",(0,i.yg)("inlineCode",{parentName:"p"},"[Debug:StageNavigator] Transitions to 'TitleStage'"),", it is successful."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Stage transition success",src:t(6630).A,width:"606",height:"676"})),(0,i.yg)("h2",{id:"apply-mvrp-pattern"},"Apply MV(R)P pattern"),(0,i.yg)("p",null,"That is all the Core features that Extreal provides, but we would like to add ",(0,i.yg)("a",{parentName:"p",href:"https://vcontainer.hadashikick.jp/"},"VContainer")," to get closer to ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/intro#application"},"the application architecture assumed by Extreal"),"."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Add an avatar selection screen to which the title screen transitions.")),(0,i.yg)("p",null,"The avatar selection screen is only used as a transition destination, so it is created by copying the title screen."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Avatar Selection Screen",src:t(2567).A,width:"902",height:"457"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create an ",(0,i.yg)("inlineCode",{parentName:"li"},"AvatarSelectionScreen")," directory in the same hierarchy as the App directory"),(0,i.yg)("li",{parentName:"ul"},"Create an ",(0,i.yg)("inlineCode",{parentName:"li"},"AvatarSelectionScreen")," scene in it"),(0,i.yg)("li",{parentName:"ul"},"Remove the default GameObjects such as the camera in the AvatarSelectionScreen scene and make the scene empty"),(0,i.yg)("li",{parentName:"ul"},"Copy the Canvas and EventSystem from the TitleScreen scene and paste them into the AvatarSelectionScreen scene"),(0,i.yg)("li",{parentName:"ul"},"Change the title to ",(0,i.yg)("inlineCode",{parentName:"li"},"Avatar Selection"))),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Then add the stage settings.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Avatar Selection Stage Configuration",src:t(9004).A,width:"437",height:"401"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"AvatarSelectionStage")," to StageName and ",(0,i.yg)("inlineCode",{parentName:"li"},"AvatarSelectionScreen")," to SceneName"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"AvatarSelectionStage")," in the StageConfig object inspector")),(0,i.yg)("p",null,"Add the ",(0,i.yg)("inlineCode",{parentName:"p"},"AvatarSelectionScreen")," scene to ",(0,i.yg)("inlineCode",{parentName:"p"},"Scenes In Build")," in Build Settings."),(0,i.yg)("p",null,"The UI and stage settings are ready."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Add VContainer to your application.")),(0,i.yg)("p",null,"VContainer is obtained from OpenUPM as well as UniTask and UniRx."),(0,i.yg)("p",null,"Go to ",(0,i.yg)("inlineCode",{parentName:"p"},"Edit")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Project Settings...")," -> ",(0,i.yg)("inlineCode",{parentName:"p"},"Package Manager")," and add the Scope(s) from OpenUPM."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Add VContainer",src:t(4947).A,width:"543",height:"385"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"VContainer:",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-text"},"jp.hadashikick\n")))),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Then add VContainer to Package Manager and Assembly Definition.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"VContainer setting",src:t(9659).A,width:"943",height:"407"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Select Packages: ",(0,i.yg)("inlineCode",{parentName:"li"},"My Registries")," in Package Manager and install VContainer"),(0,i.yg)("li",{parentName:"ul"},"Set VContainer to Assembly Definition of the application")),(0,i.yg)("p",null,"Now you can use VContainer."),(0,i.yg)("h3",{id:"vcontainer"},"VContainer"),(0,i.yg)("p",null,"Rebuild the AppTest created for confirmation using VContainer."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"First, create a Presenter script as an entry point.")),(0,i.yg)("p",null,"Create it in the App directory.\nWhen the App scene starts, make the transition to the title screen."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using System.Threading;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public class AppPresenter : IAsyncStartable\n    {\n        private StageNavigator<StageName, SceneName> stageNavigator;\n\n        public AppPresenter(StageNavigator<StageName, SceneName> stageNavigator)\n        {\n            this.stageNavigator = stageNavigator;\n        }\n\n        public async UniTask StartAsync(CancellationToken cancellation)\n        {\n            await stageNavigator.ReplaceAsync(StageName.TitleStage);\n        }\n    }\n}\n")),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Next, create a Scope script as a LifetimeScope for VContainer.")),(0,i.yg)("p",null,"Create it in the App directory.\nOverride Awake in the Scope script to configure Logging before VContainer processing."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},'using Extreal.Core.Logging;\nusing Extreal.Core.StageNavigation;\nusing UnityEngine;\nusing VContainer;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public class AppScope : LifetimeScope\n    {\n        [SerializeField] private StageConfig stageConfig;\n\n        private static void InitializeApp()\n        {\n            const LogLevel logLevel = LogLevel.Debug;\n            LoggingManager.Initialize(logLevel: logLevel);\n\n            var logger = LoggingManager.GetLogger(nameof(AppScope));\n            if (logger.IsDebug())\n            {\n                logger.LogDebug("Hello, world!");\n            }\n        }\n\n        protected override void Awake()\n        {\n            InitializeApp();\n            base.Awake();\n        }\n\n        protected override void Configure(IContainerBuilder builder)\n        {\n            builder.RegisterComponent(stageConfig).AsImplementedInterfaces();\n            builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton);\n\n            builder.RegisterEntryPoint<AppPresenter>();\n        }\n    }\n}\n')),(0,i.yg)("p",null,"StageConfig, StageNavigator and AppPresenter as entry points are registered.\nWith this registration, StageConfig is set to StageNavigator and StageNavigator is set to AppPresenter.\nIn this way, the DI container provided by VContainer is used to build up the object structure so that each object can execute processing."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Set the Scope script to the App scene.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"AppScope",src:t(29).A,width:"832",height:"356"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a GameObject with the AppScope script attached to the App scene with the name ",(0,i.yg)("inlineCode",{parentName:"li"},"Scope"),"."),(0,i.yg)("li",{parentName:"ul"},"Set the StageConfig object in the inspector"),(0,i.yg)("li",{parentName:"ul"},"Remove the AppTest script and the GameObject with the AppTest script attached in the App scene as they are no longer needed")),(0,i.yg)("p",null,"Run the App scene.\nIf the title screen and Console log output appear as before, it is successful."),(0,i.yg)("h3",{id:"unirx"},"UniRx"),(0,i.yg)("p",null,"Implement the Go button on the title screen using UniRx."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Create a View script for the title screen.")),(0,i.yg)("p",null,"Create it in the TitleScreen directory."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing UniRx;\nusing UnityEngine;\nusing UnityEngine.UI;\n\nnamespace ExtrealCoreLearning.TitleScreen\n{\n    public class TitleScreenView : MonoBehaviour\n    {\n        [SerializeField] private Button goButton;\n\n        public IObservable<Unit> OnGoButtonClicked\n            => goButton.OnClickAsObservable().TakeUntilDestroy(this);\n    }\n}\n")),(0,i.yg)("p",null,"This defines ",(0,i.yg)("inlineCode",{parentName:"p"},"OnGoButtonClicked"),", which notifies an event when the Go button is pressed using UniRx."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Next, create a Presenter script that will transition to the avatar selection screen when the Go button is pressed.")),(0,i.yg)("p",null,"Create it in the TitleScreen directory."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using Cysharp.Threading.Tasks;\nusing Extreal.Core.Common.System;\nusing Extreal.Core.StageNavigation;\nusing ExtrealCoreLearning.App;\nusing UniRx;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.TitleScreen\n{\n    public class TitleScreenPresenter : DisposableBase, IInitializable\n    {\n        private StageNavigator<StageName, SceneName> stageNavigator;\n\n        private TitleScreenView titleScreenView;\n\n        private CompositeDisposable compositeDisposable = new CompositeDisposable();\n\n        public TitleScreenPresenter(StageNavigator<StageName, SceneName> stageNavigator,\n            TitleScreenView titleScreenView)\n        {\n            this.stageNavigator = stageNavigator;\n            this.titleScreenView = titleScreenView;\n        }\n\n        public void Initialize()\n        {\n            titleScreenView.OnGoButtonClicked.Subscribe(_ =>\n            {\n                stageNavigator.ReplaceAsync(StageName.AvatarSelectionStage).Forget();\n            }).AddTo(compositeDisposable);\n        }\n\n        protected override void ReleaseManagedResources()\n        {\n            compositeDisposable?.Dispose();\n        }\n    }\n}\n")),(0,i.yg)("p",null,"This maps the event notification of the Go button to the transition to the avatar selection screen."),(0,i.yg)("p",null,"It is recommended that a class that disposes implement the ",(0,i.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose"},"Dispose Pattern"),".\nTo apply the Dispose Pattern, TitleScreenPresenter inherits from the DisposableBase class provided by Common and implements the managed resources release processing in the ReleaseManagedResources method.\nPlease refer to ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/core/common#core-common-dp"},"Common")," for details on how to apply the Dispose Pattern."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Last, create a Scope script that ties the View and Presenter together.")),(0,i.yg)("p",null,"Create it in the TitleScreen directory."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-csharp"},"using UnityEngine;\nusing VContainer;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.TitleScreen\n{\n    public class TitleScreenScope : LifetimeScope\n    {\n        [SerializeField] private TitleScreenView titleScreenView;\n\n        protected override void Configure(IContainerBuilder builder)\n        {\n            builder.RegisterComponent(titleScreenView);\n\n            builder.RegisterEntryPoint<TitleScreenPresenter>();\n        }\n    }\n}\n")),(0,i.yg)("p",null,"Set the View and Scope scripts to the TitleScreen scene."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"AppScope",src:t(4615).A,width:"855",height:"614"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a GameObject with the TitleScreenView script attached to the TitleScreen scene with the name ",(0,i.yg)("inlineCode",{parentName:"li"},"View")),(0,i.yg)("li",{parentName:"ul"},"Set up a Button object in the inspector"),(0,i.yg)("li",{parentName:"ul"},"Create a GameObject with the TitleScreenScope script attached to the TitleScreen scene with the name ",(0,i.yg)("inlineCode",{parentName:"li"},"Scope")),(0,i.yg)("li",{parentName:"ul"},"Set the View object in the inspector")),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Let's run the App scene.")),(0,i.yg)("p",null,"If you run the App scene in this state, you will get the following error."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"AppScope",src:t(8202).A,width:"708",height:"344"})),(0,i.yg)("p",null,"StageNavigator is set to TitleScreenPresenter, but it is not registered in the scope, resulting in the error.\nThis error occurs because StageNavigator is in AppScope and TitleScreenPresenter is in TitleScreenScope, which are different scopes."),(0,i.yg)("p",null,"In VContainer, you can specify the parent of a scope to extend the object's search range to the parent.\nSpecifying AppScope for Parent in the TitleScreenScope inspector resolves this error."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"AppScope",src:t(5242).A,width:"452",height:"366"})),(0,i.yg)("p",null,"In this way, scopes are created with hierarchy in mind.\nDesign the overall scope so that the commonly used scopes are more parental."),(0,i.yg)("admonition",{title:"step",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Let's run the App scene again.")),(0,i.yg)("p",null,"If you can transition from the title screen to the avatar selection screen, it is successful."),(0,i.yg)("h2",{id:"next-step"},"Next Step"),(0,i.yg)("p",null,"This concludes our hands-on with Core.\nThank you for your time."),(0,i.yg)("p",null,"Through this hands-on, you have already built the features required for ",(0,i.yg)("a",{parentName:"p",href:"/Extreal.Guide/en/intro#application"},"the application architecture assumed by Extreal"),".\nAs a next step, you might be interested in how the architecture you built in this hands-on will be used in a more serious application.\nTo meet your expectations, we provide ",(0,i.yg)("a",{parentName:"p",href:"../category/sample-application"},"Sample Application")," as an example of a full-scale implementation.\nPlease take a look at ",(0,i.yg)("a",{parentName:"p",href:"../category/sample-application"},"Sample Application"),"."))}d.isMDXComponent=!0},8982:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-app-scene-f3c3ff0917931aa467cab7d525b60e53.png"},8546:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-create-project-b1ad19b78bf2800f03ddb44854bc94b6.png"},6670:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-logging-assembly-787825f4b5a62caaec7da422925c168c.png"},328:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-logging-package-5b92cf39e900bbbc3612b0b77074660d.png"},6449:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-logging-success-e5cc020fc0b58879b0457aa0ba4c3585.png"},29:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-mvp-appscope-418745f96414528d86a1b823af42fa25.png"},2567:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-mvp-avatarselection-167bd1d16ff8cff0c07f343bfe9fea26.png"},8202:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-mvp-error-41eedec698c71fb75d612af204c3251e.png"},5242:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-mvp-parent-c326ff7d86c5ac94ecdd44bcdc2386b3.png"},9659:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-mvp-pmandad-73fe677d316f1fe417bdae1335091f49.png"},9004:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-mvp-stageconfig-1581de09c38ef2370c9fb5d73e4a327d.png"},4947:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-mvp-thirdparty-5c1e5ea29165f2afe2ce2f6f14540815.png"},4615:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-mvp-titlescreenobject-5e9c075ccb3fb9bb517a0ac18d31d8b7.png"},4902:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-stagenavigation-add-e8aa8d19b40133d5beaeb8516d00a487.png"},907:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-stagenavigation-canvas-8722869caafb1bcb8f07bc6db3412e66.png"},3685:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-stagenavigation-config-9454510a01a2fe14d552f236a745e03b.png"},5517:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-stagenavigation-error-e364088fd00842b3dc9fa4fe46f61345.png"},9048:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-stagenavigation-image-c6113f5c457a111ccea3eb1a103f8582.png"},6630:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-stagenavigation-success-f02b94fa36c4d6cf684e706518a27fdd.png"},3905:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-stagenavigation-titlescreen-55d7d4bfff7bc56e29b1d7a164678c6e.png"},5542:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/learning-core-stagenavigation-unitask-9805eb8fc21b47bbb6979491e13b1009.png"}}]);