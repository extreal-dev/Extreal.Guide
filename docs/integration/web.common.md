---
sidebar_position: 4
---

# Common for Web

## What for?

UnityではWebGLプラットフォームを使用してブラウザ向けのアプリケーションを作成できます。
ブラウザ向けのアプリケーションではUnity(C#)とブラウザ(JavaScript)間の処理の呼び出しやデータの受け渡しが必要になります。

このモジュールではUnityで提供されているC#とJavaScript連携の仕組みをより簡単に利用できるようにします。

## Specification

- C#からJavaScriptを呼び出せます。
- JavaScriptからC#にコールバックできます。

## Architecture

```mermaid
classDiagram

    WebGLHelper
    
    class WebGLHelper {
        +Initialize(webGLHelperConfig)$ void
        +CallAction(name, str1, str2)$ void
        +CallFunction(name, str1, str2)$ string
        +AddCallback(name, action)$ void
    }
    
    class WebGLHelperConfig {
        +IsDebug bool
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

Web.Commonは次のパッケージを使います。

#### Unity
- [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json)

#### npm
依存するものはありません。

### Settings

ブラウザ側で出力するデバッグログの出力有無を設定できます。
デフォルトはデバッグログを出力しません。

デバッグログを出力したい場合はWebGLHelperのInitializeメソッドで指定します。

```csharp
WebGLHelper.Initialize(new WebGLHelperConfig { IsDebug = true });
```

## Usage

### C#からJavaScriptを呼び出す

C#からJavaScriptの呼び出しは次のシグネチャのみ提供しています。

- 戻り値なし関数
  - 引数：文字列2つ
  - 戻り値：なし
- 戻り値あり関数
  - 引数：文字列2つ
  - 戻り値：文字列

:::info
引数と戻り値は文字列にしているので、複雑なデータ構造を扱いたい場合はJSONを使用してください。
:::

C#側はWebGLHelperのCallActionメソッド、CallFunctionメソッドを使います。

```csharp
public class Sample : DisposableBase
{
    public void DoAction(string param1, string param2)
        => WebGLHelper.CallAction(nameof(DoAction), param1, param2);

    public string DoFunction(string param1, string param2)
        => WebGLHelper.CallFunction(nameof(DoFunction), param1, param2);
}
```

JavaScript側はaddAction関数、addFunction関数を使います。

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

JavaScript側はcallback関数を使います。

```typescript
import { callback } from "@extreal-dev/extreal.integration.web.common";

callback("HandleOnCallback", "param1", "param2");
```

C#側はWebGLHelperのAddCallbackメソッドを使います。
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
