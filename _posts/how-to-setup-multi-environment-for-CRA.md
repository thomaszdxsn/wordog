---
author: thomaszdxsn
title: 如何为CRA项目进行多环境配置
slug: how-to-setup-multi-environment-for-CRA
tags: react
date: 2020-04-21
---

# 如何为 CRA 项目进行多环境配置

> III. Config：Store config in the environment
> > — From [The TWELVE-FACTOR App](https://12factor.net/config)

CRA 项目通过 `.env` 文件提供配置支持。但是`.env`文件只支持三种环境:

- .env: 默认
- .env.local: 本地覆盖。这个文件会被除了「测试环境」之外的所有环境载入并覆盖，处于优先级的最高层。
- .env.development, .env.test, .env.production: 三种环境的特定配置
- .env.devlopment.local,.env.test.local,.env.production.local: 覆盖三种环境之上的配置

上面并没有 [staging environment](https://en.wikipedia.org/wiki/Deployment_environment#Staging) 的支持。

我在 CRA 的 issues 列表里面找到一个2016年创建，至今是 open 状态的 [issue: Support for staging builds](https://github.com/facebook/create-react-app/issues/790)，意味着目前还是没有给予任何官方支持。

里面倒是提到一些间接的方法，我归纳一下主要有两种。

1. 在不同环境编译的使用使用不同的命令/脚本/CI，来覆写配置文件/环境变量
2. 使用 `customize-cra` 提供的 webpack 扩展功能，利用 webpack 的 define 插件来实现环境配置[^1]。

## 覆盖配置文件

想要[增加自定义环境变量](https://create-react-app.dev/docs/adding-custom-environment-variables/)，需要使用 `.env` 文件，然后自定义环境变量前面必须加入前缀：`REACT_APP_`。

然后你可以建立一个`.env.staing` 文件，里面是你的 staging环境 配置。

```json
"scripts": {
    "build:prod": "react-scripts build",
    "build:staging": "react-scripts build --profile",
}
```


```json
"scripts": {
    "build:prod": "react-scripts build",
    "build:staging": "env-cmd -f .env.staging react-scripts build --profile",
}
```

[^1]:	[如何配置 webpack DefinePlugin](https://github.com/arackaf/customize-cra/issues/44)