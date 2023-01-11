---
sidebar_position: 2
---

# Multiplay using Netcode for GameObjects

## What for?

We provide a wrapper that makes [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/about/index.html) easier to use in your application.

In Extreal, Netcode for GameObjects is called NGO, and this feature that wraps NGO is called the NGO wrapper.

NGO provides server and client features in a single class called NetworkManager.
Since using NetworkManager as-is always requires context-aware implementation and can be confusing, the NGO wrapper provides NgoServer and NgoClient as separate classes for the server and client, respectively.

The goal is to make NGO introduction smooth by using the NGO wrapper in your applications.

:::caution
The NGO wrapper makes NGO easier to use, but it does not mean that you only need to know the NGO wrapper to realize multiplayer without knowing NGO.
The NGO wrapper compensates for the difficulties or lack of features when using NGO as it is, but transfers the multiplayer process to NGO.
Therefore, to use the NGO wrapper, it is assumed that you know NGO.
If you do not know NGO, please refer to [Learning](/learning/intro#multiplayer) to learn about NGO.
This guide assumes you know NGO.
:::

:::info
Example implementations of NGO wrappers for common multiplayer application requirements are provided in [sample applications](/category/sample-application).

At this time, the following requirements have been provided.

- The user can play with an avatar of the user's choice
- If the maximum number of people in the space is exceeded, users will not be able to enter the room

The following requirements will be added in the future.

- The system reconnects in case of unexpected network disconnection
- The system allows users to wait until the maximum number of people on standby is exceeded if the maximum number of people in a space is exceeded
  - The users on standby is hidden, while other users' multiplayer is visible
- When other users leave the room and take their turn, they can join the multiplayer
- Users can play avatars offline as well as online
- Avatars can have objects
:::

## Specification

The specifications of the NGO Wrapper are as follows.

- You can use features for NGO servers.
- You can add processing triggered by NGO server state.
- You can use features for NGO clients.
- You can add processing triggered by NGO client state.
- You can support any NetworkTransport other than the default one provided by the NGO.

:::info
The NGO wrapper supports the two transports provided by NGO (Unity Transport and UNet Transport), so no additional action is required if you use these two transports.
When using a new transport not provided by NGO, the IConnectionSetter used by NgoClient must be changed.
See [Supporting non-default NetworkTransport provided by NGO](/integration/multiplay.ngo#int-ngo-nt) for details.
:::

:::info
Because it is easier to ensure stable performance and security, the NGO wrapper assumes the use of a dedicated server as the NGO architecture.
For more information on NGO architecture, see [Network Topologies](https://docs-multiplayer.unity3d.com/netcode/current/reference/glossary/network-topologies).
Because it assumes the use of a dedicated server, the NGO wrapper does not provide features for the host.
If you want to use them, please use NetworkManager directly.
:::

## Architecture

```mermaid
classDiagram

    NetworkManager <.. NgoServer
    NetworkManager <.. NgoClient
    NgoClient ..> NgoConfig
    NgoClient ..> IConnectionSetter
    IConnectionSetter <|.. UnityTransportConnectionSetter
    IConnectionSetter <|.. UNetTransportConnectionSetter
    IDisposable <|.. NgoServer
    IDisposable <|.. NgoClient

    class NetworkManager {
        <<NGO>>
    }

    class NgoServer {
        +OnServerStarted IObservable
        +OnServerStopping IObservable
        +OnClientConnected IObservable
        +OnClientDisconnecting IObservable
        +OnClientRemoving IObservable
        +ConnectedClients IReadOnlyDictionary
        +NgoServer(networkManager)
        +StartServerAsync(cancellationToken) void
        +StopServerAsync() void
        +SetConnectionApprovalCallback(connectionApprovalCallback) void
        +RemoveClient(clientId) bool
        +SendMessageToClients(clientIds, messageName, messageStream, networkDelivery) void
        +SendMessageToAllClients(messageName, messageStream, networkDelivery) void
        +RegisterMessageHandler(messageName, messageHandler) void
        +UnregisterMessageHandler(messageName) void
        +SetVisibilityDelegate(visibilityDelegate) void
        +SpawnWithServerOwnership(prefab, position, rotation, parent, worldPositionStays) GameObject
        +SpawnWithClientOwnership(ownerClientId, prefab, position, rotation, parent, worldPositionStays) GameObject
        +SpawnAsPlayerObject(ownerClientId, prefab, position, rotation, parent, worldPositionStays) GameObject
    }

    class NgoClient {
        +OnConnected IObservable
        +OnDisconnecting IObservable
        +OnUnexpectedDisconnected IObservable
        +OnConnectionApprovalRejected IObservable
        +NgoClient(networkManager)
        +AddConnectionSetter(connectionSetter) void
        +ConnectAsync(ngoConfig, cancellationToken) bool
        +DisconnectAsync() void
        +SendMessage(messageName, messageStream, networkDelivery) void
        +RegisterMessageHandler(messageName, messageHandler) void
        +UnregisterMessageHandler(messageName) void
    }

    class NgoConfig {
        +Address string
        +Port ushort
        +ConnectionData byte[]
        +Timeout TimeSpan
        +NgoConfig(address, port, connectionData, timeout)
    }

    class IConnectionSetter {
        <<interface>>
        +TargetType Type
        +Set(networkTransport, ngoConfig)
    }

    class UnityTransportConnectionSetter {
    }

    class UNetTransportConnectionSetter {
    }

    class IDisposable {
        <<system>>
    }
```

## Installation

### Package

```text
https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO.git
```

### Dependencies

The NGO wrapper uses the following packages.

- [Extreal.Core.Logging](/core/logging)
- [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/about/index.html)
- [UniTask](https://github.com/Cysharp/UniTask)
- [UniRx](https://github.com/neuecc/UniRx)

Please refer to [Release](/category/release) for the correspondence between module version and each package version.

### Settings

NgoServer and NgoClient are initialized.
Initializing NgoServer and NgoClient requires NetworkManager.
The NetworkManager is set to NgoServer and NgoClient using VContainer.

The NGO NetworkManager is assumed to be initialized by attaching it to a GameObject.

```csharp
public class MultiplayServerScope : LifetimeScope
{
    [SerializeField] private NetworkManager networkManager;

    protected override void Configure(IContainerBuilder builder)
    {
        builder.RegisterComponent(networkManager);
        builder.Register<NgoServer>(Lifetime.Singleton);
    }
}
```

```csharp
public class MultiplayControlScope : LifetimeScope
{
    [SerializeField] private NetworkManager networkManager;

    protected override void Configure(IContainerBuilder builder)
    {
        builder.RegisterComponent(networkManager);
        builder.Register<NgoClient>(Lifetime.Singleton);
    }
}
```

:::tip
NetworkManager needs to be configured the same on server and client, so it should be Prefab and use the same on server and client.
:::

:::info
If you want to use a new transport not provided by NGO, please refer to [Supporting non-default NetworkTransport provided by NGO](/integration/multiplay.ngo#int-ngo-nt).
If you use the two transports provided by the NGO (Unity Transport and UNet Transport), no work is required.
:::

## Usage

### Use features for NGO servers

The features for NGO servers are provided by NgoServer.
Here are some basic instructions on how to use NgoServer.
Since NgoServer transfers the multiplayer processing to NetworkManager, please refer to the NGO documentation for details on each feature.

The server is started using StartServerAsync.

```csharp
ngoServer.StartServerAsync().Forget();
```

The server is stopped by StopServerAsync, which is called automatically when the application terminates because StopServerAsync is called in NgoServer's Dispose.

Processing in response to messages from clients is registered with RegisterMessageHandler.
Unregistration is done with UnregisterMessageHandler.
The following code registers and unregisters at the start and end of the server.

```csharp
ngoServer.OnServerStarted.Subscribe(_ =>
{
    ngoServer.RegisterMessageHandler(MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);
}).AddTo(compositeDisposable);

ngoServer.OnServerStopping.Subscribe(_ =>
{
    ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());
}).AddTo(compositeDisposable);
```

You can use SpawnAsPlayerObject if you want to spawn a player at an arbitrary time or if you want to dynamically switch the player's prefab.
The following code is a response to a message from the client registered with RegisterMessageHandler above.
The player is spawned in response to a message from the client.

```csharp
private async void PlayerSpawnMessageHandler(ulong clientId, FastBufferReader messageStream)
{
    if (Logger.IsDebug())
    {
        Logger.LogDebug($"{MessageName.PlayerSpawn}: {clientId}");
    }
    messageStream.ReadValueSafe(out string avatarAssetName);
    var result = Addressables.LoadAssetAsync<GameObject>(avatarAssetName);
    var playerPrefab = await result.Task;
    ngoServer.SpawnAsPlayerObject(clientId, playerPrefab);
}
```

### Add a processing triggered by NGO server state

NgoServer has the following event notifications.

- OnServerStarted
  - Timing: Immediately after the server starts
  - Type: IObservable
  - Parameters: None
- OnServerStopping
  - Timing: Just before the server stops
  - Type: IObservable
  - Parameters: None
- OnClientConnected
  - Timing: Immediately after a client connects
  - Type: IObservable
  - Parameters: Connected client ID
- OnClientDisconnecting
  - Timing: Just before a client disconnects
  - Type: IObservable
  - Parameters: Client ID to be disconnected
- OnClientRemoving
  - Timing: Immediately before the client is removed
  - Type: IObservable
  - Parameters: Client ID to be removed

The following is an example of adding processing at server startup and shutdown

```csharp
ngoServer.OnServerStarted.Subscribe(_ =>
{
    ngoServer.RegisterMessageHandler(MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);
}).AddTo(compositeDisposable);

ngoServer.OnServerStopping.Subscribe(_ =>
{
    ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());
}).AddTo(compositeDisposable);
```

### Use features for NGO clients

NGO client features are provided by NgoClient.
Here are some basic instructions on how to use NgoClient.
NgoClient transfers the multiplayer processing to NetworkManager, so please refer to the NGO documentation for details on each feature.

ConnectAsync is used to connect to the server.
Connection information is specified in NgoConfig.
Since it is assumed that an instance of NgoClient is reused while the application is running, the connection information is specified each time the connection is made.

```csharp
var ngoConfig = new NgoConfig();
ngoClient.ConnectAsync(ngoConfig).Forget();
```

The default for NgoConfig is as follows.
If timeout is null, it is set to 10 seconds.
TimeoutException is thrown when the timeout period elapses in the connection process.

```csharp
public NgoConfig
(
    string address = "127.0.0.1",
    ushort port = 7777,
    byte[] connectionData = null,
    TimeSpan timeout = null
)
```

DisconnectAsync is used to disconnect from the server.

```csharp
ngoClient.DisconnectAsync().Forget();
```

SendMessage is used to send messages to the server.
The following code sends a message to the server to spawn a player after connecting to the server.

```csharp
ngoClient.OnConnected.Subscribe(_ =>
{
    var messageStream = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);
    ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);
}).AddTo(compositeDisposable);
```

### Add a processing triggered by NGO client state

NgoClient has the following event notifications.

- OnConnected
  - Timing: Immediately after connecting to the server
  - Type: IObservable
  - Parameters: None
- OnDisconnecting
  - Timing: Just before disconnecting from the server
  - Type: IObservable
  - Parameters: None
- OnUnexpectedDisconnected
  - Timing: Immediately after an unexpected server disconnection occurs
  - Type: IObservable
  - Parameters: None
- OnConnectionApprovalRejected
  - Timing: Immediately after a connection approval is rejected
  - Type: IObservable
  - Parameters: None

The following is an example of adding processing immediately after connecting to the server.

```csharp
ngoClient.OnConnected.Subscribe(_ =>
{
    var messageStream = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);
    ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);
}).AddTo(compositeDisposable);
```

### Support non-default NetworkTransport provided by NGO {#int-ngo-nt}

NGO can change the transport used for communication.
The NGO wrapper supports the two transports provided by NGO (Unity Transport and UNet Transport), so if you use these two transports, no additional action is required.
If you want to use a new transport that is not provided by NGO, you will need to change the IConnectionSetter used by NgoClient.

Since the part of each transport implementation that holds connection information is not standardized, it is necessary to absorb the differences.
IConnectionSetter is provided to fill in the implementation differences of each transport.

To use a new transport, it is necessary to create a class that implements the IConnectionSetter and set it in NgoClient.
The implementation of IConnectionSetter for UnityTransport is shown below for reference when implementing IConnectionSetter.

```csharp
public class UnityTransportConnectionSetter : IConnectionSetter
{
    public Type TargetType => typeof(UnityTransport);

    public void Set(NetworkTransport networkTransport, NgoConfig ngoConfig)
    {
        var unityTransport = networkTransport as UnityTransport;
        unityTransport.ConnectionData.Address = ngoConfig.Address.Trim();
        unityTransport.ConnectionData.Port = ngoConfig.Port;
        unityTransport.ConnectionData.ServerListenAddress = ngoConfig.Address.Trim();
    }
}
```

Set the implemented class with NgoClient's AddConnectionSetter.

```csharp
ngoClient.AddConnectionSetter(new UnityTransportConnectionSetter());
```
