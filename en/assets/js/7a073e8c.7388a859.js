"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[4592],{6072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(7624),a=t(5788);const s={sidebar_position:3},o="Chat using Vivox",r={id:"learning/chat.vivox",title:"Chat using Vivox",description:"In this section, you will learn about the Vivox wrapper.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/learning/chat.vivox.md",sourceDirName:"learning",slug:"/learning/chat.vivox",permalink:"/Extreal.Guide/en/1.0.0/learning/chat.vivox",draft:!1,unlisted:!1,tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/Extreal.Guide/en/1.0.0/learning/core"},next:{title:"Multiplay using Netcode for GameObjects",permalink:"/Extreal.Guide/en/1.0.0/learning/multiplay.ngo"}},l={},c=[{value:"Prepare project",id:"prepare-project",level:2},{value:"Add VivoxClient",id:"add-vivoxclient",level:2},{value:"Add text chat",id:"add-text-chat",level:2},{value:"Add base class",id:"add-base-class",level:2},{value:"Add voice chat",id:"add-voice-chat",level:2},{value:"Next Step",id:"next-step",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.MN)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"chat-using-vivox",children:"Chat using Vivox"}),"\n",(0,i.jsxs)(n.p,{children:["In this section, you will learn about the ",(0,i.jsx)(n.a,{href:"/Extreal.Guide/en/1.0.0/integration/chat.vivox",children:"Vivox wrapper"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Approximate learning time","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"60 min."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Unity Version","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"2021.3.16f1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The Vivox wrapper learning process uses a project prepared for learning.\nThis learning project is based on the application architecture built in the Core learning.\nIf you have not learned Core, it is recommended that you learn ",(0,i.jsx)(n.a,{href:"/Extreal.Guide/en/1.0.0/learning/core",children:"Learning Core"})," before learning this project."]}),"\n",(0,i.jsx)(n.p,{children:"Using the learning project with the Vivox wrapper set up, we will add an implementation of the application to allow text and voice chat in virtual space."}),"\n",(0,i.jsxs)(n.p,{children:["You will need to have an application on the ",(0,i.jsx)(n.a,{href:"https://developer.vivox.com/",children:"Vivox Developer Portal"})," to connect to from the client to do this learning.\nPlease create an application on the ",(0,i.jsx)(n.a,{href:"https://developer.vivox.com/",children:"Vivox Developer Portal"})," before starting the following hands-on activities."]}),"\n",(0,i.jsx)(n.h2,{id:"prepare-project",children:"Prepare project"}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"First, prepare your project."})}),"\n",(0,i.jsx)(n.p,{children:"Clone the learning project."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"https://github.com/extreal-dev/Extreal.Learning.Chat.Vivox.git\n"})}),"\n",(0,i.jsx)(n.p,{children:'Open the cloned project in the Unity editor.\nIf the message "Link your Unity project" appears, close it without setting it.'}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Review the project contents."})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ExtrealCoreLearning"})," directory in the Assets directory is the directory that contains the assets for the application.\nWe control the dependent packages by creating an Assembly Definition with the same name as the directory name."]}),"\n",(0,i.jsxs)(n.p,{children:["The state of the ",(0,i.jsx)(n.code,{children:"ExtrealCoreLearning"})," directory is as follows."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The title screen and virtual space have already been created"}),"\n",(0,i.jsxs)(n.li,{children:["The virtual space uses assets provided by ",(0,i.jsx)(n.a,{href:"http://u3d.as/2z1r",children:"Starter Assets - Third Person Character Controller"})]}),"\n",(0,i.jsx)(n.li,{children:"UIs for text chat and voice chat have already been created in the virtual space"}),"\n",(0,i.jsx)(n.li,{children:"Text chat and voice chat are realized in the virtual space"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Let's run the application to make sure there are no problems with the project."})}),"\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.code,{children:"App"})," scene in the App directory.\nIt is successful if you can press the Go button on the title screen to move to the virtual space."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Project success",src:t(4152).c+"",width:"1053",height:"507"})}),"\n",(0,i.jsx)(n.p,{children:"Try the text chat UI.\nEnter an appropriate message in the input field and press the Send button.\nThe message will appear on the screen."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Text chat",src:t(9856).c+"",width:"1137",height:"405"})}),"\n",(0,i.jsx)(n.p,{children:"The Voice Chat UI provides a button to toggle mute.\nPress the Voice button in the lower left corner of the screen.\nThe color of the button changes according to the mute status.\nRed indicates unmuted and gray indicates muted."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Voice chat",src:t(9052).c+"",width:"1086",height:"413"})}),"\n",(0,i.jsx)(n.p,{children:"Check the following directories for UI implementations of text and voice chat."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Text chat","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"ExtrealCoreLearning/TextChatControl\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Voice chat","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"ExtrealCoreLearning/VoiceChatControl\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We will add an implementation to allow text and voice chat in the virtual space."}),"\n",(0,i.jsx)(n.h2,{id:"add-vivoxclient",children:"Add VivoxClient"}),"\n",(0,i.jsx)(n.p,{children:"First, prepare a VivoxClient.\nSince only one VivoxClient needs to exist in the application, it should be included in the App scene so that it can be reused even if the space increases."}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Create a ScriptableObject that generates the VivoxAppConfig."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"VivoxAppConfig",src:t(5908).c+"",width:"917",height:"298"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a ChatConfig script that creates a VivoxAppConfig object in the App directory, referring to ",(0,i.jsx)(n.a,{href:"/Extreal.Guide/en/1.0.0/integration/chat.vivox#settings",children:"Settings in the Vivox wrapper"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Create a ChatConfig object from the Create Asset menu and set the connection information to Vivox in the inspector."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Initialize VivoxClient by changing AppScope."})}),"\n",(0,i.jsx)(n.p,{children:"Set VivoxAppConfig to VivoxClient using VContainer."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using Extreal.Core.Logging;\nusing Extreal.Core.StageNavigation;\n// highlight-start\nusing Extreal.Integration.Chat.Vivox;\n// highlight-end\nusing UnityEngine;\nusing VContainer;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public class AppScope : LifetimeScope\n    {\n        [SerializeField] private StageConfig stageConfig;\n        // highlight-start\n        [SerializeField] private ChatConfig chatConfig;\n        // highlight-end\n\n        private static void InitializeApp()\n        {\n            // Omitted due to no changes\n        }\n\n        protected override void Awake()\n        {\n            // Omitted due to no changes\n        }\n\n        protected override void Configure(IContainerBuilder builder)\n        {\n            builder.RegisterComponent(stageConfig).AsImplementedInterfaces();\n            builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton);\n\n            // highlight-start\n            builder.RegisterComponent(chatConfig.ToVivoxAppConfig());\n            builder.Register<VivoxClient>(Lifetime.Singleton);\n            // highlight-end\n\n            builder.RegisterEntryPoint<AppPresenter>();\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set the ChatConfig object to AppScope in the Inspector."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"AppScope",src:t(492).c+"",width:"999",height:"485"})}),"\n",(0,i.jsx)(n.h2,{id:"add-text-chat",children:"Add text chat"}),"\n",(0,i.jsx)(n.p,{children:"Now that VivoxClient is ready, we will add text chat."}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Create a Model script that provides the logic for text chat."})}),"\n",(0,i.jsx)(n.p,{children:"Create it in the ExtrealCoreLearning/TextChatControl directory.\nIt provides for joining and leaving the channel, sending and receiving messages.\nWhen joining a channel, log in if the user is not logged in."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing UniRx;\nusing VivoxUnity;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatChannel : IDisposable\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly string channelName;\n\n        private ChannelId channelId;\n\n        private readonly CompositeDisposable disposables = new CompositeDisposable();\n        \n        public IObservable<string> OnMessageReceived\n            => vivoxClient.OnTextMessageReceived.Select(channelTextMessage => channelTextMessage.Message);\n\n        public TextChatChannel(VivoxClient vivoxClient, string channelName)\n        {\n            this.vivoxClient = vivoxClient;\n            this.channelName = channelName;\n            this.vivoxClient.OnChannelSessionAdded\n                .Where(channelId => channelId.Name == this.channelName)\n                .Subscribe(channelId => this.channelId = channelId)\n                .AddTo(disposables);\n        }\n\n        public async UniTask JoinAsync()\n        {\n            if (!IsLoggedIn)\n            {\n                Login();\n            }\n            await UniTask.WaitUntil(() => IsLoggedIn);\n            vivoxClient.ConnectAsync(new VivoxChannelConfig(channelName, ChatType.TextOnly, transmissionSwitch: false)).Forget();\n        }\n\n        private bool IsLoggedIn\n            => vivoxClient.LoginSession?.State == LoginState.LoggedIn;\n\n        private void Login()\n        {\n            vivoxClient.LoginAsync(new VivoxAuthConfig(nameof(TextChatChannel))).Forget();\n        }\n\n        public void Leave()\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n            vivoxClient.Disconnect(channelId);\n        }\n\n        public void SendMessage(string message)\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n            vivoxClient.SendTextMessage(message, channelId);\n        }\n\n        public void Dispose()\n        {\n            disposables.Dispose();\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Change TextChatControlPresenter to use TextChatChannel."})}),"\n",(0,i.jsx)(n.p,{children:"A TextChatChannel is created and the user joins the channel when entering the stage, and he/she leaves the channel when exiting the stage.\nSending and receiving messages are realized by mapping TextChatControlView of the View script to TextChatChannel of the Model script."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using System;\n// highlight-start\nusing Cysharp.Threading.Tasks;\n// highlight-end\nusing Extreal.Core.Common.System;\n// highlight-start\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\n// highlight-end\nusing UniRx;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatControlPresenter : IInitializable, IDisposable\n    {\n        // highlight-start\n        private readonly StageNavigator<StageName, SceneName> stageNavigator;\n        private readonly VivoxClient vivoxClient;\n        // highlight-end\n        private readonly TextChatControlView textChatControlView;\n        private readonly CompositeDisposable disposables = new CompositeDisposable();\n\n        // highlight-start\n        private TextChatChannel textChatChannel;\n        private readonly CompositeDisposable stageDisposables = new CompositeDisposable();\n\n        public TextChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            TextChatControlView textChatControlView)\n        // highlight-end\n        {\n            // highlight-start\n            this.stageNavigator = stageNavigator;\n            this.vivoxClient = vivoxClient;\n            // highlight-end\n            this.textChatControlView = textChatControlView;\n        }\n\n        public void Initialize()\n        {\n            // highlight-start\n            stageNavigator.OnStageTransitioned\n                .Subscribe(OnStageEntered).AddTo(disposables);\n\n            stageNavigator.OnStageTransitioning\n                .Subscribe(OnStageExiting).AddTo(disposables);\n            // highlight-end\n\n            textChatControlView.OnSendButtonClicked.Subscribe(message =>\n            {\n                // highlight-start\n                textChatChannel.SendMessage(message);\n                // highlight-end\n            }).AddTo(disposables);\n        }\n\n        // highlight-start\n        private void OnStageEntered(StageName stageName)\n        {\n            textChatChannel = new TextChatChannel(vivoxClient, $"TextChat-{stageName}");\n            textChatChannel.OnMessageReceived.Subscribe(message =>\n            {\n                textChatControlView.ShowTextChatMessage(message);\n            }).AddTo(stageDisposables);\n            textChatChannel.JoinAsync().Forget();\n        }\n\n        private void OnStageExiting(StageName stageName)\n        {\n            textChatChannel.Leave();\n            textChatChannel.Dispose();\n            stageDisposables.Clear();\n        }\n        // highlight-end\n\n        public void Dispose()\n        {\n            // highlight-start\n            stageDisposables.Dispose();\n            // highlight-end\n            disposables.Dispose();\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Play text chat."})}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.a,{href:"https://github.com/VeriorPies/ParrelSync",children:"ParrelSync"})," to check how text chat works.\nSince ParrelSync is installed in the project, open multiple Unity editors using ParrelSync and play with them."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ParrelSync",src:t(9792).c+"",width:"1185",height:"505"})}),"\n",(0,i.jsx)(n.p,{children:"Run the App scene.\nIt may take some time to connect to Vivox, so if you send a message immediately after execution, it may not be sent.\nIf the message does not respond, please send a message after a short wait."}),"\n",(0,i.jsx)(n.p,{children:"If the message is sent to all running applications, it is successful."}),"\n",(0,i.jsx)(n.h2,{id:"add-base-class",children:"Add base class"}),"\n",(0,i.jsx)(n.p,{children:"Before adding voice chat, we will cut out the common processing in the Base class since the Model and Presenter scripts for text and voice chat have many parts in common.\nThe common processing is as follows."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Model script","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Joining and leaving a channel"}),"\n",(0,i.jsx)(n.li,{children:"When joining a channel, log in if the user is not logged in."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Presenter script","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creates a TextChatChannel and joins the channel when entering the stage, and leaves the channel when exiting the stage"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Create a Base class for the Model script."})}),"\n",(0,i.jsx)(n.p,{children:"Create it in the App directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.TextChatControl;\nusing UniRx;\nusing VivoxUnity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public abstract class ChatChannelBase : IDisposable\n    {\n        protected readonly VivoxClient VivoxClient;\n        protected readonly string ChannelName;\n        protected ChannelId ChannelId;\n\n        protected readonly CompositeDisposable Disposables = new CompositeDisposable();\n\n        protected ChatChannelBase(VivoxClient vivoxClient, string channelName)\n        {\n            VivoxClient = vivoxClient;\n            ChannelName = channelName;\n            VivoxClient.OnChannelSessionAdded\n                .Where(channelId => channelId.Name == ChannelName)\n                .Subscribe(channelId => ChannelId = channelId)\n                .AddTo(Disposables);\n        }\n\n        public async UniTask JoinAsync()\n        {\n            if (!IsLoggedIn)\n            {\n                Login();\n            }\n\n            await UniTask.WaitUntil(() => IsLoggedIn);\n            Connect();\n        }\n\n        protected bool IsLoggedIn\n            => VivoxClient.LoginSession?.State == LoginState.LoggedIn;\n\n        private void Login()\n        {\n            VivoxClient.LoginAsync(new VivoxAuthConfig(nameof(TextChatChannel))).Forget();\n        }\n\n        protected abstract void Connect();\n\n        public void Leave()\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n\n            VivoxClient.Disconnect(ChannelId);\n        }\n\n        public void Dispose()\n        {\n            Disposables.Dispose();\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Change TextChatChannel to use Base class."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatChannel : ChatChannelBase\n    {\n        public IObservable<string> OnMessageReceived\n            => VivoxClient.OnTextMessageReceived.Select(channelTextMessage => channelTextMessage.Message);\n\n        public TextChatChannel(VivoxClient vivoxClient, string channelName) : base(vivoxClient, channelName)\n        {\n        }\n\n        protected override void Connect()\n        {\n            VivoxClient.ConnectAsync(new VivoxChannelConfig(ChannelName, ChatType.TextOnly, transmissionSwitch: false)).Forget();\n        }\n\n        public void SendMessage(string message)\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n\n            VivoxClient.SendTextMessage(message, ChannelId);\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Create a Base class for the Presenter script."})}),"\n",(0,i.jsx)(n.p,{children:"Create it in the App directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing Extreal.Core.StageNavigation;\nusing UniRx;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public abstract class ControlPresenterBase : IInitializable, IDisposable\n    {\n        private readonly StageNavigator<StageName, SceneName> stageNavigator;\n        private readonly CompositeDisposable sceneDisposables = new CompositeDisposable();\n        private CompositeDisposable stageDisposables = new CompositeDisposable();\n\n        protected ControlPresenterBase(\n            StageNavigator<StageName, SceneName> stageNavigator)\n        {\n            this.stageNavigator = stageNavigator;\n        }\n\n        public void Initialize()\n        {\n            stageNavigator.OnStageTransitioned.Subscribe(stageName =>\n            {\n                OnStageEntered(stageName, stageDisposables);\n            }).AddTo(sceneDisposables);\n\n            stageNavigator.OnStageTransitioning.Subscribe(stageName =>\n            {\n                OnStageExiting(stageName);\n                stageDisposables.Clear();\n            }).AddTo(sceneDisposables);\n\n            Initialize(stageNavigator, sceneDisposables);\n        }\n\n        protected abstract void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables);\n\n        protected abstract void OnStageEntered(\n            StageName stageName, CompositeDisposable stageDisposables);\n\n        protected abstract void OnStageExiting(StageName stageName);\n\n        public void Dispose()\n        {\n            stageDisposables.Dispose();\n            sceneDisposables.Dispose();\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Change TextChatControlPresenter to use Base class."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatControlPresenter : ControlPresenterBase\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly TextChatControlView textChatControlView;\n        private TextChatChannel textChatChannel;\n\n        public TextChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            TextChatControlView textChatControlView) : base(stageNavigator)\n        {\n            this.vivoxClient = vivoxClient;\n            this.textChatControlView = textChatControlView;\n        }\n\n        protected override void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            CompositeDisposable sceneDisposables)\n        {\n            textChatControlView.OnSendButtonClicked\n                .Subscribe(message =>\n                {\n                    textChatChannel.SendMessage(message);\n                }).AddTo(sceneDisposables);\n        }\n\n        protected override void OnStageEntered(\n            StageName stageName,\n            CompositeDisposable stageDisposables)\n        {\n            textChatChannel = new TextChatChannel(vivoxClient, $"TextChat-{stageName}");\n            textChatChannel.OnMessageReceived\n                .Subscribe(message =>\n                {\n                    textChatControlView.ShowTextChatMessage(message);\n                }).AddTo(stageDisposables);\n            textChatChannel.JoinAsync().Forget();\n        }\n\n        protected override void OnStageExiting(StageName stageName)\n        {\n            textChatChannel.Leave();\n            textChatChannel.Dispose();\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you can run the App scene and play text chat as before the change, it is successful."}),"\n",(0,i.jsx)(n.h2,{id:"add-voice-chat",children:"Add voice chat"}),"\n",(0,i.jsx)(n.p,{children:"We will add voice chat."}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Change the VoiceChatChannel in the Model script to use the Base class and VivoxClient."})}),"\n",(0,i.jsx)(n.p,{children:"This uses VivoxClient to control the mute of the input device."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.VoiceChatControl\n{\n    public class VoiceChatChannel : ChatChannelBase\n    {\n        public IObservable<bool> IsMute => isMute.AddTo(Disposables);\n        private ReactiveProperty<bool> isMute = new ReactiveProperty<bool>();\n\n        public VoiceChatChannel(VivoxClient vivoxClient, string channelName) : base(vivoxClient, channelName)\n        {\n            SetMuteAsync(true).Forget();\n        }\n\n        protected override void Connect()\n        {\n            VivoxClient.ConnectAsync(new VivoxChannelConfig(ChannelName, ChatType.AudioOnly)).Forget();\n        }\n\n        public UniTask ToggleMuteAsync()\n        {\n            return SetMuteAsync(!isMute.Value);\n        }\n\n        private async UniTask SetMuteAsync(bool muted)\n        {\n            var audioInputDevices = await VivoxClient.GetAudioInputDevicesAsync();\n            audioInputDevices.Muted = muted;\n            isMute.Value = muted;\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Modify VoiceChatControlPresenter to use Base class and VoiceChatChannel."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.VoiceChatControl\n{\n    public class VoiceChatControlPresenter : ControlPresenterBase\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly VoiceChatControlView voiceChatControlView;\n        private VoiceChatChannel voiceChatChannel;\n\n        public VoiceChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            VoiceChatControlView voiceChatControlView) : base(stageNavigator)\n        {\n            this.vivoxClient = vivoxClient;\n            this.voiceChatControlView = voiceChatControlView;\n        }\n\n        protected override void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)\n        {\n            voiceChatControlView.OnVoiceButtonClicked.Subscribe(_ =>\n            {\n                voiceChatChannel.ToggleMuteAsync().Forget();\n            }).AddTo(sceneDisposables);\n        }\n\n        protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)\n        {\n            voiceChatChannel = new VoiceChatChannel(vivoxClient, $"VoiceChat-{stageName}");\n            voiceChatChannel.IsMute.Subscribe(isMute =>\n            {\n                voiceChatControlView.toggleMute(isMute);\n            }).AddTo(stageDisposables);\n            voiceChatChannel.JoinAsync().Forget();\n        }\n\n        protected override void OnStageExiting(StageName stageName)\n        {\n            voiceChatChannel.Leave();\n            voiceChatChannel.Dispose();\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"step",type:"info",children:(0,i.jsx)(n.p,{children:"Play voice chat."})}),"\n",(0,i.jsx)(n.p,{children:"Open and play multiple Unity editors using ParrelSync."}),"\n",(0,i.jsx)(n.p,{children:"Run the App scene.\nToggle mute, if the voice is sent to all running applications, it is successful."}),"\n",(0,i.jsx)(n.h2,{id:"next-step",children:"Next Step"}),"\n",(0,i.jsx)(n.p,{children:"This concludes our hands-on with the Vivox wrapper.\nThank you for your time."}),"\n",(0,i.jsxs)(n.p,{children:["Through this hands-on, you have experienced how to create text and voice chats using the ",(0,i.jsx)(n.a,{href:"/Extreal.Guide/en/1.0.0/integration/chat.vivox",children:"Vivox wrapper"}),".\nAs a next step, you might be interested in how the Vivox wrapper can be used in a more serious application.\nTo meet your expectations, we provide ",(0,i.jsx)(n.a,{href:"../category/sample-application",children:"Sample Application"})," as an example of a full-scale implementation.\nPlease take a look at ",(0,i.jsx)(n.a,{href:"../category/sample-application",children:"Sample Application"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,a.MN)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5788:(e,n,t)=>{t.d(n,{MN:()=>c});var i=t(1504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,x=p["".concat(l,".").concat(g)]||p[g]||h[g]||s;return t?i.createElement(x,o(o({ref:n},d),{},{components:t})):i.createElement(x,o({ref:n},d))}));d.displayName="MDXCreateElement"},9792:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/learning-ngo-parrelsync-d1b8359df842b754142e0ef6c2a2c187.png"},492:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/learning-vivox-appscope-vivoxappconfig-2bd62c46aab94edf4db9f71ec8015422.png"},4152:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/learning-vivox-project-success-88c1b0af63143a5126da12fa32dd3909.png"},9856:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/learning-vivox-ui-textchat-3662f76ee0ea1d1f507e32d63e982d96.png"},9052:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/learning-vivox-ui-voicechat-da8083869343839e747b2718e8de9152.png"},5908:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/learning-vivox-vivoxclient-vivoxappconfig-3523d98a403e4f95dd663cda5afd47ac.png"}}]);