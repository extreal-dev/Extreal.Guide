---
sidebar_position: 7
---

# Common for Web

## What for?

UnityではWebGLプラットフォームを使用してブラウザ向けのアプリケーションを作成できます。
ブラウザ向けのアプリケーションではUnity(C#)とブラウザ(JavaScript)間の処理の呼び出しやデータの受け渡しが必要になります。

このモジュールではUnityで提供されているC#とJavaScript連携の少し複雑な仕組みを隠蔽し、C#とJavaScriptの相互作用を簡単に行えるようにWebGLヘルパーを提供します。

## Specification

- C#からJavaScriptを呼び出せます。
- JavaScriptからC#にコールバックできます。

## Architecture

```mermaid
classDiagram

    WebGLHelper ..> WebGLHelperConfig
    WebGLHelper ..> helper

    class WebGLHelper {
        <<C#>>
        +Initialize(webGLHelperConfig)$ void
        +CallAction(name, str1, str2)$ void
        +CallFunction(name, str1, str2)$ string
        +AddCallback(name, action)$ void
    }
    
    class WebGLHelperConfig {
        <<C#>>
        +IsDebug bool
    }

    class helper {
        <<TypeScript>>
        +addAction(name, action) void
        +addFunction(name, func) void
        +callback(name, strParam1, strParam2) void
        +isDebug boolean
        +waitUntil(condition, cancel, interval) void
        +isAsync(func) boolean
    }
```

## Installation

### Package

#### Unity
```text
https://github.com/extreal-dev/Extreal.Integration.Web.Common.git
```

#### npm
```text
@extreal-dev/extreal.integration.web.common
```

### Dependencies

このモジュールは次のパッケージを使います。

#### Unity
- [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json)

#### npm
- 依存するものはありません。

### Settings

WebGLヘルパーの初期化が必要です。
アプリケーションの起動時にWebGLヘルパーの初期化を行ってください。

```csharp
WebGLHelper.Initialize();
```

ブラウザ側でJavaScriptの呼び出し状況をログに出力できます。
デフォルトはログを出力しないので、ログを出力したい場合はWebGLHelperConfigで指定します。

```csharp
WebGLHelper.Initialize(new WebGLHelperConfig { IsDebug = true });
```

## Usage

### C#からJavaScriptを呼び出す

C#からJavaScriptの呼び出しは次のシグネチャのみ提供しています。

- 戻り値なし関数
  - 引数：文字列2つ
  - 戻り値：なし
  - 例：
    ```typescript
    const action = (param1: string, param2: string): void => {
        // do something
    }
    ```
- 戻り値あり関数
  - 引数：文字列2つ
  - 戻り値：文字列
  - 例：
    ```typescript
    const func = (param1: string, param2: string): string => {
        return "do something";
    }
    ```

:::info
引数と戻り値は文字列にしているので、複雑なデータ構造を扱いたい場合はJSONを使用してください。
:::

C#側はWebGLHelperのCallAction/CallFunctionを使ってJavaScriptを呼び出します。
Actionが戻り値なし、Functionが戻り値ありの関数に対応します。
C#とJavaScriptの対応付けは文字列のターゲット名で行います。

```csharp
public class Sample : DisposableBase
{
    public void DoAction(string param1, string param2)
        => WebGLHelper.CallAction("DoAction", param1, param2);

    public string DoFunction(string param1, string param2)
        => WebGLHelper.CallFunction("DoFunction", param1, param2);
}
```

JavaScript側はaddAction/addFunctionを使います。

```typescript
import { addAction, addFunction } from "@extreal-dev/extreal.integration.web.common";

addAction("DoAction", (str1, str2) => {
    // do something
});

addFunction("DoFunction", (str1, str2) => {
    return "do something";
});
```

### JavaScriptからC#にコールバックする

JavaScriptからC#へのコールバックは次のシグネチャのみ提供しています。

- Action<string, string>

:::info
引数は文字列にしているので、複雑なデータ構造を扱いたい場合はJSONを使用してください。
:::

JavaScript側はcallbackを使います。
JavaScriptとC#の対応付けは文字列のターゲット名で行います。

```typescript
import { callback } from "@extreal-dev/extreal.integration.web.common";

callback("HandleOnCallback", "param1", "param2");
```

C#側はWebGLHelperのAddCallbackを使います。
この実装例ではコールバックを受けてイベント通知を送信しています。

```csharp
public class Sample : DisposableBase
{
    public IObservable<string> OnCallback => onCallback;
    private readonly Subject<string> onCallback = new Subject<string>();

    private static Sample instance;
    public Sample()
    {
        instance = this;
        WebGLHelper.AddCallback(nameof(HandleOnCallback), HandleOnCallback);
    }

    [MonoPInvokeCallback(typeof(Action<string, string>))]
    private static void HandleOnCallback(string str1, string str2)
        => instance.onCallback.OnNext($"received {str1} {str2} in callback");

    protected override void ReleaseManagedResources() => onCallback.Dispose();
}
```
