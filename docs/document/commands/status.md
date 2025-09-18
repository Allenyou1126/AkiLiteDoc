# 系统状态命令 `status`

该命令提供了一些与 Bot 状态监视相关的命令。

命令别名：`系统信息`、`系统状态`、`信息`、`状态`。

## 查询 Bot 信息 `bot`

查询 Bot QQ 号、名称、Aki-Lite 版本等信息。

调用格式为 `@Bot status bot`。

不接受参数。

需要权限：`status.bot`。

命令别名：`机器人`、`bot信息`、`机器人信息`。

## 查询系统信息 `system`

查询 Bot 所在服务器信息，如系统名称、平台、CPU 核心数、CPU 使用率、系统内存、系统内存使用率等。

调用格式为 `@Bot status system`。

不接受参数。

需要权限：`status.system`。

命令别名：`系统`、`系统信息`。

## 查询全部信息 `all`

查询 Bot 与所在服务器信息，包括 `system` 与 `bot` 命令的信息。

调用格式为 `@Bot status all`。

不接受参数。

需要权限：`status.system` 与 `status.bot`。

命令别名：`全部`、`全部信息`。
