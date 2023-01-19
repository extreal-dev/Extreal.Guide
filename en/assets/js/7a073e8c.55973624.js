"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[567],{5002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));t(1839);const o={sidebar_position:3},s="Chat using Vivox",l={unversionedId:"learning/chat.vivox",id:"version-1.0.0/learning/chat.vivox",title:"Chat using Vivox",description:"In this section, you will learn about the Vivox wrapper.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/learning/chat.vivox.md",sourceDirName:"learning",slug:"/learning/chat.vivox",permalink:"/Extreal.Guide/en/learning/chat.vivox",draft:!1,tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/Extreal.Guide/en/learning/core"},next:{title:"Multiplay using Netcode for GameObjects",permalink:"/Extreal.Guide/en/learning/multiplay.ngo"}},r={},p=[{value:"Prepare project",id:"prepare-project",level:2},{value:"Add VivoxClient",id:"add-vivoxclient",level:2},{value:"Add text chat",id:"add-text-chat",level:2},{value:"Add base class",id:"add-base-class",level:2},{value:"Add voice chat",id:"add-voice-chat",level:2},{value:"Next Step",id:"next-step",level:2}],h={toc:p};function g(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chat-using-vivox"},"Chat using Vivox"),(0,i.kt)("p",null,"In this section, you will learn about the ",(0,i.kt)("a",{parentName:"p",href:"/integration/chat.vivox"},"Vivox wrapper"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Approximate learning time",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"60 min."))),(0,i.kt)("li",{parentName:"ul"},"Unity Version",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"2021.3.16f1")))),(0,i.kt)("p",null,"The Vivox wrapper learning process uses a project prepared for learning.\nThis learning project is based on the application architecture built in the Core learning.\nIf you have not learned Core, it is recommended that you learn ",(0,i.kt)("a",{parentName:"p",href:"/learning/core"},"Learning Core")," before learning this project."),(0,i.kt)("p",null,"Using the learning project with the Vivox wrapper set up, we will add an implementation of the application to allow text and voice chat in virtual space."),(0,i.kt)("p",null,"You will need to have an application on the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal")," to connect to from the client to do this learning.\nPlease create an application on the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.vivox.com/"},"Vivox Developer Portal")," before starting the following hands-on activities."),(0,i.kt)("h2",{id:"prepare-project"},"Prepare project"),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"First, prepare your project.")),(0,i.kt)("p",null,"Clone the learning project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Learning.Chat.Vivox.git\n")),(0,i.kt)("p",null,'Open the cloned project in the Unity editor.\nIf the message "Link your Unity project" appears, close it without setting it.'),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Review the project contents.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtrealCoreLearning")," directory in the Assets directory is the directory that contains the assets for the application.\nWe control the dependent packages by creating an Assembly Definition with the same name as the directory name."),(0,i.kt)("p",null,"The state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtrealCoreLearning")," directory is as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The title screen and virtual space have already been created"),(0,i.kt)("li",{parentName:"ul"},"The virtual space uses assets provided by ",(0,i.kt)("a",{parentName:"li",href:"http://u3d.as/2z1r"},"Starter Assets - Third Person Character Controller")),(0,i.kt)("li",{parentName:"ul"},"UIs for text chat and voice chat have already been created in the virtual space"),(0,i.kt)("li",{parentName:"ul"},"Text chat and voice chat are realized in the virtual space")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Let's run the application to make sure there are no problems with the project.")),(0,i.kt)("p",null,"Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," scene in the App directory.\nIt is successful if you can press the Go button on the title screen to move to the virtual space."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project success",src:t(3503).Z,width:"1053",height:"507"})),(0,i.kt)("p",null,"Try the text chat UI.\nEnter an appropriate message in the input field and press the Send button.\nThe message will appear on the screen."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Text chat",src:t(6269).Z,width:"1137",height:"405"})),(0,i.kt)("p",null,"The Voice Chat UI provides a button to toggle mute.\nPress the Voice button in the lower left corner of the screen.\nThe color of the button changes according to the mute status.\nRed indicates unmuted and gray indicates muted."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Voice chat",src:t(7215).Z,width:"1086",height:"413"})),(0,i.kt)("p",null,"Check the following directories for UI implementations of text and voice chat."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Text chat",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ExtrealCoreLearning/TextChatControl\n"))),(0,i.kt)("li",{parentName:"ul"},"Voice chat",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"ExtrealCoreLearning/VoiceChatControl\n")))),(0,i.kt)("p",null,"We will add an implementation to allow text and voice chat in the virtual space."),(0,i.kt)("h2",{id:"add-vivoxclient"},"Add VivoxClient"),(0,i.kt)("p",null,"First, prepare a VivoxClient.\nSince only one VivoxClient needs to exist in the application, it should be included in the App scene so that it can be reused even if the space increases."),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Create a ScriptableObject that generates the VivoxAppConfig.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VivoxAppConfig",src:t(7041).Z,width:"917",height:"298"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a ChatConfig script that creates a VivoxAppConfig object in the App directory, referring to ",(0,i.kt)("a",{parentName:"li",href:"/integration/chat.vivox#settings"},"Settings in the Vivox wrapper"),"."),(0,i.kt)("li",{parentName:"ul"},"Create a ChatConfig object from the Create Asset menu and set the connection information to Vivox in the inspector.")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Initialize VivoxClient by changing AppScope.")),(0,i.kt)("p",null,"Set VivoxAppConfig to VivoxClient using VContainer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Extreal.Core.Logging;\nusing Extreal.Core.StageNavigation;\n// highlight-start\nusing Extreal.Integration.Chat.Vivox;\n// highlight-end\nusing UnityEngine;\nusing VContainer;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public class AppScope : LifetimeScope\n    {\n        [SerializeField] private StageConfig stageConfig;\n        // highlight-start\n        [SerializeField] private ChatConfig chatConfig;\n        // highlight-end\n\n        private static void InitializeApp()\n        {\n            // Omitted due to no changes\n        }\n\n        protected override void Awake()\n        {\n            // Omitted due to no changes\n        }\n\n        protected override void Configure(IContainerBuilder builder)\n        {\n            builder.RegisterComponent(stageConfig).AsImplementedInterfaces();\n            builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton);\n\n            // highlight-start\n            builder.RegisterComponent(chatConfig.ToVivoxAppConfig());\n            builder.Register<VivoxClient>(Lifetime.Singleton);\n            // highlight-end\n\n            builder.RegisterEntryPoint<AppPresenter>();\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Set the ChatConfig object to AppScope in the Inspector."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"AppScope",src:t(8064).Z,width:"999",height:"485"})),(0,i.kt)("h2",{id:"add-text-chat"},"Add text chat"),(0,i.kt)("p",null,"Now that VivoxClient is ready, we will add text chat."),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Create a Model script that provides the logic for text chat.")),(0,i.kt)("p",null,"Create it in the ExtrealCoreLearning/TextChatControl directory.\nIt provides for joining and leaving the channel, sending and receiving messages.\nWhen joining a channel, log in if the user is not logged in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing UniRx;\nusing VivoxUnity;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatChannel : IDisposable\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly string channelName;\n\n        private ChannelId channelId;\n\n        private readonly CompositeDisposable disposables = new CompositeDisposable();\n        \n        public IObservable<string> OnMessageReceived\n            => vivoxClient.OnTextMessageReceived.Select(channelTextMessage => channelTextMessage.Message);\n\n        public TextChatChannel(VivoxClient vivoxClient, string channelName)\n        {\n            this.vivoxClient = vivoxClient;\n            this.channelName = channelName;\n            this.vivoxClient.OnChannelSessionAdded\n                .Where(channelId => channelId.Name == this.channelName)\n                .Subscribe(channelId => this.channelId = channelId)\n                .AddTo(disposables);\n        }\n\n        public async UniTask JoinAsync()\n        {\n            if (!IsLoggedIn)\n            {\n                Login();\n            }\n            await UniTask.WaitUntil(() => IsLoggedIn);\n            vivoxClient.ConnectAsync(new VivoxChannelConfig(channelName, ChatType.TextOnly, transmissionSwitch: false)).Forget();\n        }\n\n        private bool IsLoggedIn\n            => vivoxClient.LoginSession?.State == LoginState.LoggedIn;\n\n        private void Login()\n        {\n            vivoxClient.LoginAsync(new VivoxAuthConfig(nameof(TextChatChannel))).Forget();\n        }\n\n        public void Leave()\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n            vivoxClient.Disconnect(channelId);\n        }\n\n        public void SendMessage(string message)\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n            vivoxClient.SendTextMessage(message, channelId);\n        }\n\n        public void Dispose()\n        {\n            disposables.Dispose();\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Change TextChatControlPresenter to use TextChatChannel.")),(0,i.kt)("p",null,"A TextChatChannel is created and the user joins the channel when entering the stage, and he/she leaves the channel when exiting the stage.\nSending and receiving messages are realized by mapping TextChatControlView of the View script to TextChatChannel of the Model script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\n// highlight-start\nusing Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\n// highlight-end\nusing UniRx;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatControlPresenter : IInitializable, IDisposable\n    {\n        // highlight-start\n        private readonly StageNavigator<StageName, SceneName> stageNavigator;\n        private readonly VivoxClient vivoxClient;\n        // highlight-end\n        private readonly TextChatControlView textChatControlView;\n        private readonly CompositeDisposable disposables = new CompositeDisposable();\n\n        // highlight-start\n        private TextChatChannel textChatChannel;\n        private readonly CompositeDisposable stageDisposables = new CompositeDisposable();\n\n        public TextChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            TextChatControlView textChatControlView)\n        // highlight-end\n        {\n            // highlight-start\n            this.stageNavigator = stageNavigator;\n            this.vivoxClient = vivoxClient;\n            // highlight-end\n            this.textChatControlView = textChatControlView;\n        }\n\n        public void Initialize()\n        {\n            // highlight-start\n            stageNavigator.OnStageTransitioned\n                .Subscribe(OnStageEntered).AddTo(disposables);\n\n            stageNavigator.OnStageTransitioning\n                .Subscribe(OnStageExiting).AddTo(disposables);\n            // highlight-end\n\n            textChatControlView.OnSendButtonClicked.Subscribe(message =>\n            {\n                // highlight-start\n                textChatChannel.SendMessage(message);\n                // highlight-end\n            }).AddTo(disposables);\n        }\n\n        // highlight-start\n        private void OnStageEntered(StageName stageName)\n        {\n            textChatChannel = new TextChatChannel(vivoxClient, $"TextChat-{stageName}");\n            textChatChannel.OnMessageReceived.Subscribe(message =>\n            {\n                textChatControlView.ShowTextChatMessage(message);\n            }).AddTo(stageDisposables);\n            textChatChannel.JoinAsync().Forget();\n        }\n\n        private void OnStageExiting(StageName stageName)\n        {\n            textChatChannel.Leave();\n            textChatChannel.Dispose();\n            stageDisposables.Clear();\n        }\n        // highlight-end\n\n        public void Dispose()\n        {\n            // highlight-start\n            stageDisposables.Dispose();\n            // highlight-end\n            disposables.Dispose();\n        }\n    }\n}\n')),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Play text chat.")),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/VeriorPies/ParrelSync"},"ParrelSync")," to check how text chat works.\nSince ParrelSync is installed in the project, open multiple Unity editors using ParrelSync and play with them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ParrelSync",src:t(2694).Z,width:"1185",height:"505"})),(0,i.kt)("p",null,"Run the App scene.\nIt may take some time to connect to Vivox, so if you send a message immediately after execution, it may not be sent.\nIf the message does not respond, please send a message after a short wait."),(0,i.kt)("p",null,"If the message is sent to all running applications, it is successful."),(0,i.kt)("h2",{id:"add-base-class"},"Add base class"),(0,i.kt)("p",null,"Before adding voice chat, we will cut out the common processing in the Base class since the Model and Presenter scripts for text and voice chat have many parts in common.\nThe common processing is as follows."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Model script",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Joining and leaving a channel"),(0,i.kt)("li",{parentName:"ul"},"When joining a channel, log in if the user is not logged in."))),(0,i.kt)("li",{parentName:"ul"},"Presenter script",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Creates a TextChatChannel and joins the channel when entering the stage, and leaves the channel when exiting the stage")))),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Create a Base class for the Model script.")),(0,i.kt)("p",null,"Create it in the App directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.TextChatControl;\nusing UniRx;\nusing VivoxUnity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public abstract class ChatChannelBase : IDisposable\n    {\n        protected readonly VivoxClient VivoxClient;\n        protected readonly string ChannelName;\n        protected ChannelId ChannelId;\n\n        protected readonly CompositeDisposable Disposables = new CompositeDisposable();\n\n        protected ChatChannelBase(VivoxClient vivoxClient, string channelName)\n        {\n            VivoxClient = vivoxClient;\n            ChannelName = channelName;\n            VivoxClient.OnChannelSessionAdded\n                .Where(channelId => channelId.Name == ChannelName)\n                .Subscribe(channelId => ChannelId = channelId)\n                .AddTo(Disposables);\n        }\n\n        public async UniTask JoinAsync()\n        {\n            if (!IsLoggedIn)\n            {\n                Login();\n            }\n\n            await UniTask.WaitUntil(() => IsLoggedIn);\n            Connect();\n        }\n\n        protected bool IsLoggedIn\n            => VivoxClient.LoginSession?.State == LoginState.LoggedIn;\n\n        private void Login()\n        {\n            VivoxClient.LoginAsync(new VivoxAuthConfig(nameof(TextChatChannel))).Forget();\n        }\n\n        protected abstract void Connect();\n\n        public void Leave()\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n\n            VivoxClient.Disconnect(ChannelId);\n        }\n\n        public void Dispose()\n        {\n            Disposables.Dispose();\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Change TextChatChannel to use Base class.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatChannel : ChatChannelBase\n    {\n        public IObservable<string> OnMessageReceived\n            => VivoxClient.OnTextMessageReceived.Select(channelTextMessage => channelTextMessage.Message);\n\n        public TextChatChannel(VivoxClient vivoxClient, string channelName) : base(vivoxClient, channelName)\n        {\n        }\n\n        protected override void Connect()\n        {\n            VivoxClient.ConnectAsync(new VivoxChannelConfig(ChannelName, ChatType.TextOnly, transmissionSwitch: false)).Forget();\n        }\n\n        public void SendMessage(string message)\n        {\n            if (!IsLoggedIn)\n            {\n                return;\n            }\n\n            VivoxClient.SendTextMessage(message, ChannelId);\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Create a Base class for the Presenter script.")),(0,i.kt)("p",null,"Create it in the App directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Extreal.Core.StageNavigation;\nusing UniRx;\nusing VContainer.Unity;\n\nnamespace ExtrealCoreLearning.App\n{\n    public abstract class ControlPresenterBase : IInitializable, IDisposable\n    {\n        private readonly StageNavigator<StageName, SceneName> stageNavigator;\n        private readonly CompositeDisposable sceneDisposables = new CompositeDisposable();\n        private CompositeDisposable stageDisposables = new CompositeDisposable();\n\n        protected ControlPresenterBase(\n            StageNavigator<StageName, SceneName> stageNavigator)\n        {\n            this.stageNavigator = stageNavigator;\n        }\n\n        public void Initialize()\n        {\n            stageNavigator.OnStageTransitioned.Subscribe(stageName =>\n            {\n                OnStageEntered(stageName, stageDisposables);\n            }).AddTo(sceneDisposables);\n\n            stageNavigator.OnStageTransitioning.Subscribe(stageName =>\n            {\n                OnStageExiting(stageName);\n                stageDisposables.Clear();\n            }).AddTo(sceneDisposables);\n\n            Initialize(stageNavigator, sceneDisposables);\n        }\n\n        protected abstract void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables);\n\n        protected abstract void OnStageEntered(\n            StageName stageName, CompositeDisposable stageDisposables);\n\n        protected abstract void OnStageExiting(StageName stageName);\n\n        public void Dispose()\n        {\n            stageDisposables.Dispose();\n            sceneDisposables.Dispose();\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Change TextChatControlPresenter to use Base class.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.TextChatControl\n{\n    public class TextChatControlPresenter : ControlPresenterBase\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly TextChatControlView textChatControlView;\n        private TextChatChannel textChatChannel;\n\n        public TextChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            TextChatControlView textChatControlView) : base(stageNavigator)\n        {\n            this.vivoxClient = vivoxClient;\n            this.textChatControlView = textChatControlView;\n        }\n\n        protected override void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            CompositeDisposable sceneDisposables)\n        {\n            textChatControlView.OnSendButtonClicked\n                .Subscribe(message =>\n                {\n                    textChatChannel.SendMessage(message);\n                }).AddTo(sceneDisposables);\n        }\n\n        protected override void OnStageEntered(\n            StageName stageName,\n            CompositeDisposable stageDisposables)\n        {\n            textChatChannel = new TextChatChannel(vivoxClient, $"TextChat-{stageName}");\n            textChatChannel.OnMessageReceived\n                .Subscribe(message =>\n                {\n                    textChatControlView.ShowTextChatMessage(message);\n                }).AddTo(stageDisposables);\n            textChatChannel.JoinAsync().Forget();\n        }\n\n        protected override void OnStageExiting(StageName stageName)\n        {\n            textChatChannel.Leave();\n            textChatChannel.Dispose();\n        }\n    }\n}\n')),(0,i.kt)("p",null,"If you can run the App scene and play text chat as before the change, it is successful."),(0,i.kt)("h2",{id:"add-voice-chat"},"Add voice chat"),(0,i.kt)("p",null,"We will add voice chat."),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Change the VoiceChatChannel in the Model script to use the Base class and VivoxClient.")),(0,i.kt)("p",null,"This uses VivoxClient to control the mute of the input device."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System;\nusing Cysharp.Threading.Tasks;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.VoiceChatControl\n{\n    public class VoiceChatChannel : ChatChannelBase\n    {\n        public IObservable<bool> IsMute => isMute.AddTo(Disposables);\n        private ReactiveProperty<bool> isMute = new ReactiveProperty<bool>();\n\n        public VoiceChatChannel(VivoxClient vivoxClient, string channelName) : base(vivoxClient, channelName)\n        {\n            isMute.Value = true;\n        }\n\n        protected override void Connect()\n        {\n            VivoxClient.ConnectAsync(new VivoxChannelConfig(ChannelName, ChatType.AudioOnly)).Forget();\n        }\n\n        public async UniTask ToggleMuteAsync()\n        {\n            isMute.Value = !isMute.Value;\n            var audioInputDevices = await VivoxClient.GetAudioInputDevicesAsync();\n            audioInputDevices.Muted = isMute.Value;\n        }\n    }\n}\n")),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Modify VoiceChatControlPresenter to use Base class and VoiceChatChannel.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Cysharp.Threading.Tasks;\nusing Extreal.Core.StageNavigation;\nusing Extreal.Integration.Chat.Vivox;\nusing ExtrealCoreLearning.App;\nusing UniRx;\n\nnamespace ExtrealCoreLearning.VoiceChatControl\n{\n    public class VoiceChatControlPresenter : ControlPresenterBase\n    {\n        private readonly VivoxClient vivoxClient;\n        private readonly VoiceChatControlView voiceChatControlView;\n        private VoiceChatChannel voiceChatChannel;\n\n        public VoiceChatControlPresenter(\n            StageNavigator<StageName, SceneName> stageNavigator,\n            VivoxClient vivoxClient,\n            VoiceChatControlView voiceChatControlView) : base(stageNavigator)\n        {\n            this.vivoxClient = vivoxClient;\n            this.voiceChatControlView = voiceChatControlView;\n        }\n\n        protected override void Initialize(\n            StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)\n        {\n            voiceChatControlView.OnVoiceButtonClicked.Subscribe(_ =>\n            {\n                voiceChatChannel.ToggleMuteAsync().Forget();\n            }).AddTo(sceneDisposables);\n        }\n\n        protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)\n        {\n            voiceChatChannel = new VoiceChatChannel(vivoxClient, $"VoiceChat-{stageName}");\n            voiceChatChannel.IsMute.Subscribe(isMute =>\n            {\n                voiceChatControlView.toggleMute(isMute);\n            }).AddTo(stageDisposables);\n            voiceChatChannel.JoinAsync().Forget();\n        }\n\n        protected override void OnStageExiting(StageName stageName)\n        {\n            voiceChatChannel.Leave();\n            voiceChatChannel.Dispose();\n        }\n    }\n}\n')),(0,i.kt)("admonition",{title:"step",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Play voice chat.")),(0,i.kt)("p",null,"Open and play multiple Unity editors using ParrelSync."),(0,i.kt)("p",null,"Run the App scene.\nToggle mute, if the voice is sent to all running applications, it is successful."),(0,i.kt)("h2",{id:"next-step"},"Next Step"),(0,i.kt)("p",null,"This concludes our hands-on with the Vivox wrapper.\nThank you for your time."),(0,i.kt)("p",null,"Through this hands-on, you have experienced how to create text and voice chats using the ",(0,i.kt)("a",{parentName:"p",href:"/integration/chat.vivox"},"Vivox wrapper"),".\nAs a next step, you might be interested in how the Vivox wrapper can be used in a more serious application.\nTo meet your expectations, we provide ",(0,i.kt)("a",{parentName:"p",href:"/category/sample-application"},"Sample Application")," as an example of a full-scale implementation.\nPlease take a look at ",(0,i.kt)("a",{parentName:"p",href:"/category/sample-application"},"Sample Application"),"."))}g.isMDXComponent=!0},2694:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-ngo-parrelsync-d1b8359df842b754142e0ef6c2a2c187.png"},8064:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-appscope-vivoxappconfig-2bd62c46aab94edf4db9f71ec8015422.png"},3503:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-project-success-88c1b0af63143a5126da12fa32dd3909.png"},6269:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-ui-textchat-3662f76ee0ea1d1f507e32d63e982d96.png"},7215:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-ui-voicechat-da8083869343839e747b2718e8de9152.png"},7041:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/learning-vivox-vivoxclient-vivoxappconfig-3523d98a403e4f95dd663cda5afd47ac.png"}}]);