# 帮助命令 `help`

该命令提供了获取可用命令列表的功能。

命令别名：`帮助`。

## 获取子命令列表

调用格式为 `@Bot help [待获取帮助的命令（支持子命令）]`。

例如，假设有如下命令：

```text
cmd
├── subcmd1
└── subcmd2
    ├── sub1-subcmd2
    ├── sub2-subcmd2
    └── sub3-subcmd2
```

此时：调用 `help cmd` 将会得到以下列表：

```text
cmd subcmd1: 描述1
cmd subcmd2: 描述2
```

如果更进一步，调用 `help cmd subcmd2` 将会得到：

```text
cmd sub1-subcmd2: 描述2-1
cmd sub2-subcmd2: 描述2-2
cmd sub3-subcmd2: 描述2-3
```

## 获取总命令列表

调用格式为 `@Bot help <页码?>`。

调用后，会列出所有可用的命令，并按照 10 个/页的大小进行分页返回。

接受一个可选匿名参数，代表欲获取的列表页码（从 1 起始），如不指定，默认为 1。

## 权限需求

调用该命令不需要用户具有特定权限。
