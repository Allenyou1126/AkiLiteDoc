# Minecraft 服务器状态查询命令 `minecraftserverstatus`

该命令提供了查询 Minecraft Java Edition（下称 Minecraft JE）服务器状态的功能。

命令别名：`mcss`、`服务器状态`。

接收 1 个匿名参数，表示待查询的服务器地址。

调用格式为 `@Bot minecraftserverstatus [服务器地址]`。

## 行为描述

调用后，Bot 会以与 Minecraft JE 客户端相同的逻辑尝试解析该服务器地址，获取服务器的 IP 地址与端口号。随后，发起 TCP 连接，使用 Minecraft
JE 客户端协议（协议版本 ID 340，模拟 Minecraft JE 1.12.2 版本客户端）发送 `handshake` 尝试与服务器进行握手，并指定 `intend` 字段为 `0x01` 要求切换到 `status` 阶段，同时发送 `Status Request` 包获取服务器的 MOTD、版本、人数、在线玩家等信息。

## 权限需求

调用该命令需要用户具有 `minecraftserverstatus` 权限。
