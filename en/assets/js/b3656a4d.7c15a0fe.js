"use strict";(self.webpackChunkextreal=self.webpackChunkextreal||[]).push([[9367],{207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),l=n(1839);const i={sidebar_position:1},g="Logging",r={unversionedId:"core/logging",id:"version-1.0.0/core/logging",title:"Logging",description:"What for?",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.0.0/core/logging.md",sourceDirName:"core",slug:"/core/logging",permalink:"/Extreal.Guide/en/1.0.0/core/logging",draft:!1,tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/Extreal.Guide/en/1.0.0/category/core"},next:{title:"Stage Navigation",permalink:"/Extreal.Guide/en/1.0.0/core/stage-navigation"}},s={},u=[{value:"What for?",id:"what-for",level:2},{value:"Specification",id:"specification",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Installation",id:"installation",level:2},{value:"Package",id:"package",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Settings",id:"settings",level:3},{value:"Usage",id:"usage",level:2},{value:"Output logs",id:"output-logs",level:3},{value:"Change log level",id:"change-log-level",level:3},{value:"Change log output checker",id:"change-log-output-checker",level:3},{value:"Change log writer",id:"change-log-writer",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logging"},"Logging"),(0,a.kt)("h2",{id:"what-for"},"What for?"),(0,a.kt)("p",null,"We provide Logging so that the log output of your framework and application can be commonized and log output can be controlled in a unified manner by your application."),(0,a.kt)("p",null,"By consolidating your application's log output into Logging, you can easily control your application's log output, such as switching log types and output destinations between development and production operations."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Currently, Logging only provides log output using the Unity standard Debug class.\nIt should be considered for debugging during development.\nWe plan to increase the number of log output destinations in the future, such as sending logs to the public cloud so that applications can be monitored.")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("p",null,"Logging outputs logs with associating log levels and log categories for easier control of log output."),(0,a.kt)("p",null,"The four log levels in order from highest to lowest are Error, Warn, Info, and Debug."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Error",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When an error occurs that prevents the application from continuing"))),(0,a.kt)("li",{parentName:"ul"},"Warn",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When an event occurs that has no immediate impact but could become problematic if left unchecked"))),(0,a.kt)("li",{parentName:"ul"},"Info",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When you want to output events of normal operation for the purpose of understanding the usage status of the application or the connection status with external services"))),(0,a.kt)("li",{parentName:"ul"},"Debug",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When you want to output debugging information during development")))),(0,a.kt)("p",null,"The log levels are intended to be used in the following ways."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Output logs of Debug or higher during development and Info or higher during production operation."),(0,a.kt)("li",{parentName:"ul"},"Logs of Error or higher are monitored and notified.")),(0,a.kt)("p",null,"Log category is a name to classify logs.\nWe assume the following usages."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The name of the class that outputs logs is set as the log category so that the logs can be determined which class outputs the logs."),(0,a.kt)("li",{parentName:"ul"},"A specific name is set as the log category so that logs output by multiple classes can be traced later."),(0,a.kt)("li",{parentName:"ul"},"In some cases, such as when testing the reproduction of a failure, you may want to output all logs for a specific class only, regardless of the log level. This can be achieved by using log categories to change the log output checker.")),(0,a.kt)("p",null,"Logging specifications are as follows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logs can be output by associating log levels and log categories.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The default log output checker is based on log level only."),(0,a.kt)("li",{parentName:"ul"},"The default log output is Info or higher."),(0,a.kt)("li",{parentName:"ul"},"Default log output is performed by the Unity standard Debug class."))),(0,a.kt)("li",{parentName:"ul"},"You can change the log level used to determine log output."),(0,a.kt)("li",{parentName:"ul"},"You can change the log output checker."),(0,a.kt)("li",{parentName:"ul"},"You can change the log writer (format and output destination).")),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)(l.G,{chart:"classDiagram\n\n    LoggingManager *-- ELogger\n    ELogger ..> ILogOutputChecker\n    ELogger ..> ILogWriter\n    ILogOutputChecker <|.. LogLevelLogOutputChecker\n    ILogWriter <|.. UnityDebugLogWriter\n\n    class LogLevel {\n        <<enumeration>>\n        Debug\n        Info\n        Warn\n        Error\n    }\n\n    class ELogger {\n        +IsXxx() bool\n        +LogXxx(message, exception) void\n    }\n\n    class LoggingManager {\n        +GetLogger(logCategory)$ ELogger\n        +Initialize(logLevel, checker, writer)$ void\n    }\n\n    class ILogOutputChecker {\n        <<interface>>\n        +Initialize(logLevel) void\n        +IsOutput(logLevel, logCategory) bool\n    }\n\n    class ILogWriter {\n        <<interface>>\n        +Log(logLevel, logCategory, message, exception) void\n    }\n\n    class LogLevelLogOutputChecker {\n    }\n\n    class UnityDebugLogWriter {\n    }",mdxType:"Mermaid"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Xxx")," is the log level (Error, Warn, Info, Debug).")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To prevent duplication and ambiguous references between Unity's Logger and Logging's Logger, Logging's Logger is marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),", the first letter of Extreal.")),(0,a.kt)("p",null,"The sequence for logging output by the application is as follows."),(0,a.kt)(l.G,{chart:"sequenceDiagram\n    actor Application\n    Application->>LoggingManager: GetLogger(logCategory)\n    LoggingManager--\x3e>ELogger: new\n    LoggingManager--\x3e>Application: ELogger\n    Application->>ELogger: IsXxx()\n    ELogger->>ILogOutputChecker: IsOutput(logLevel, logCategory)\n    ELogger--\x3e>Application: bool\n    Application->>ELogger: LogXxx(message)\n    ELogger->>ILogOutputChecker: IsOutput(logLevel, logCategory)\n    ELogger->>ILogWriter: Log(logLevel, logCategory, message)",mdxType:"Mermaid"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"package"},"Package"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/extreal-dev/Extreal.Core.Logging.git\n")),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"No work is required as there are no dependencies."),(0,a.kt)("h3",{id:"settings"},"Settings"),(0,a.kt)("p",null,"If the default is used, no further work is required."),(0,a.kt)("p",null,"In some cases, log output is required by the initialization process of the framework or application, so log output must be initialized and ready to use before any other feature of the framework or application.\nThe best time to initialize log output is at Awake of the GameObject that is the entry point."),(0,a.kt)("p",null,"Log output is initialized using the LoggingManager class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class App : MonoBehaviour\n{\n    private static void InitializeApp()\n    {\n        const LogLevel logLevel = LogLevel.Debug;\n        LoggingManager.Initialize(logLevel: logLevel);\n    }\n\n    private void Awake()\n    {\n        InitializeApp();\n    }\n}\n")),(0,a.kt)("p",null,"Symbols are used to switch settings during development and production."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"#if DEV\nconst LogLevel logLevel = LogLevel.Debug;\n#elif PROD\nconst LogLevel logLevel = LogLevel.Info;\n#endif\nLoggingManager.Initialize(logLevel: logLevel);\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"output-logs"},"Output logs"),(0,a.kt)("p",null,"The ELogger class is used to output logs.\nThe ELogger class is obtained from the LoggingManager class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public class SomethingService {\n\n    private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(SomethingService));\n\n    public void Something() {\n\n      Logger.LogInfo("Here we go!");\n\n      // something\n\n      Logger.LogInfo("It\'s over!!!");\n    }\n}\n')),(0,a.kt)("p",null,"The creation of character strings to be output to the log may degrade the performance of the application depending on the output location, so a log output determination is made in advance before log output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'if (Logger.IsDebug()) {\n    Logger.LogDebug($"Hello {name}!");\n}\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Log output determination is not required for logs that are always output based on the log level set for production operation.")),(0,a.kt)("h3",{id:"change-log-level"},"Change log level"),(0,a.kt)("p",null,"The log level is changed using the LoggingManager class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// Initialization script for Logging\nLoggingManager.Initialize(LogLevel.Debug);\n")),(0,a.kt)("h3",{id:"change-log-output-checker"},"Change log output checker"),(0,a.kt)("p",null,"The ILogOutputChecker interface determines log output.\nYou create a class that implements the ILogOutputChecker interface and set it to the LoggingManager class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Class that implements the ILogOutputChecker interface.\n// Adds special conditions to log output checks.\npublic class AppLogOutputChecker : ILogOutputChecker\n{\n    private LogLevel logLevel;\n\n    public void Initialize(LogLevel logLevel)\n    {\n        this.logLevel = logLevel;\n    }\n\n    public bool IsOutput(LogLevel logLevel, string logCategory)\n    {\n        return this.logLevel <= logLevel\n                || (logLevel == LogLevel.Debug && logCategory == "Debugger");\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// Initialization script for Logging\nLoggingManager.Initialize(checker: new AppLogOutputChecker());\n")),(0,a.kt)("h3",{id:"change-log-writer"},"Change log writer"),(0,a.kt)("p",null,"The ILogWriter interface writes logs.\nYou create a class that implements the ILogWriter interface and set it to the LoggingManager class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Class that implements the ILogWriter interface.\n// Changes the format of the log.\npublic class AppLogWriter : ILogWriter\n{\n    public void Log(LogLevel logLevel, string logCategory, string message, Exception exception = null)\n    {\n        switch (logLevel)\n        {\n            case LogLevel.Debug:\n                Debug.Log(LogFormat("o-o", logCategory, message, exception));\n                break;\n\n            case LogLevel.Info:\n                Debug.Log(LogFormat("(^_^)", logCategory, message, exception));\n                break;\n\n            case LogLevel.Warn:\n                Debug.LogWarning(LogFormat("(--;", logCategory, message, exception));\n                break;\n\n            case LogLevel.Error:\n                Debug.LogError(LogFormat("(*A*;", logCategory, message, exception));\n                break;\n\n            default:\n                throw new ArgumentOutOfRangeException(nameof(logLevel), "Undefined LogLevel was input");\n        }\n    }\n\n    private string LogFormat(string logLevel, string logCategory, string message, Exception exception = null)\n    {\n        var stringBuilder = new StringBuilder();\n        stringBuilder\n            .Append(logLevel)\n            .Append(" ")\n            .Append(logCategory)\n            .Append(": ")\n            .Append(message);\n        if (exception != null)\n        {\n            stringBuilder.Append("\\n---- Exception ----\\n").Append(exception).Append("\\n-------------------\\n");\n        }\n        return stringBuilder.ToString();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// Initialization script for Logging\nLoggingManager.Initialize(writer: new AppLogWriter());\n")))}c.isMDXComponent=!0}}]);