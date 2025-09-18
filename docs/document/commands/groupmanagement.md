# 群管工具命令 `groupmanagement`

该命令提供了设置群头衔、禁言、取消禁言等群聊管理相关的功能。

**该命令需要 Bot 为群主时才可使用**

命令别名：`gm`、`群管`、`群组管理`。

## 禁言 `ban`

禁言一名群成员。

调用格式为 `@Bot groupmanagement ban @[禁言对象] <禁言时间?>`。

接受一个**必需**匿名参数，代表欲禁言的对象，At 对方以指定。

**尝试禁言自己、禁言 Bot 都会报错。**

接受一个可选匿名参数，代表禁言时长。默认为 10 分钟。支持以下格式：

- `XXdAAhBBmCCs`：表示禁言 XX 天 AA 小时 BB 分钟 CC 秒。
- `AA:BB:CC`：表示禁言 AA 小时 BB 分钟 CC 秒。
- `AA:BB`：表示禁言 AA 分钟 BB 秒。

禁言时间必须大于等于 60 秒，小于等于 30 天。

需要权限 `groupmanagement.ban`。

命令别名：`禁言`、`口球`。

## 解除禁言 `unban`

解除禁言一名群成员。

调用格式为 `@Bot groupmanagement unban @[解除禁言对象]`。

接受一个**必需**匿名参数，代表欲解除禁言的对象，At 对方以指定。

**尝试解除禁言~~自己~~、Bot 都会报错。**

需要权限 `groupmanagement.unban`。

命令别名：`取消禁言`。

## 全员禁言 `mute`

开启全员禁言。

调用格式为 `@Bot groupmanagement mute`。

需要权限 `groupmanagement.mute`。

命令别名：`全员禁言`。

## 全员禁言 `unmute`

取消全员禁言。

调用格式为 `@Bot groupmanagement unmute`。

需要权限 `groupmanagement.unmute`。

命令别名：`取消全员禁言`。

## 设置管理员 `admin`

将一名群成员设置为群管理。

调用格式为 `@Bot groupmanagement admin @[操作对象]`。

接受一个**必需**匿名参数，代表欲操作的对象，At 对方以指定。

**尝试将 Bot 设为管理、操作已经是管理员/群主的成员都会报错。**

需要权限 `groupmanagement.admin`。

命令别名：`设管`、`管理员`。

## 取消管理员 `unadmin`

将一名群管理的身份取消。

调用格式为 `@Bot groupmanagement unadmin @[操作对象]`。

接受一个**必需**匿名参数，代表欲操作的对象，At 对方以指定。

**尝试将 Bot 取消管理、操作不是管理员的成员都会报错。**

需要权限 `groupmanagement.unadmin`。

命令别名：`撤管`、`取消管理员`。

## 踢人 `kick`

将一名群成员踢出群聊。

调用格式为 `@Bot groupmanagement unadmin @[操作对象]`。

接受一个**必需**匿名参数，代表欲操作的对象，At 对方以指定。

**尝试踢出自己、踢出 Bot 都会报错。**

需要权限 `groupmanagement.kick`。

如果被踢出的用户在超级用户列表中，还额外需要权限 `groupmanagement.kick.superuser`。

命令别名：`踢`、`踢人`。

## 设置群头衔 `settitle`

为一名群成员设置群头衔。

调用格式为 `@Bot groupmanagement settitle @[设置对象] <群头衔?>`。

接受一个**必需**匿名参数，代表欲设置的对象，At 对方以指定。

接受一个可选匿名参数，代表要设置的群头衔。如不指定，代表清除群头衔。群头衔最长为 6 个字符。

为他人设置群头衔需要权限 `groupmanagement.settitle`，为自己设置群头衔需要权限 `groupmanagement.settitle.self`。

设置 Bot 的群头衔额外需要权限 `groupmanagement.settitle.bot`。

命令别名：`头衔`、`群头衔`、`设置群头衔`。
