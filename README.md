# Vite + Vue 3 + Vant + Element Plus 项目说明(一次打包)

本项目是一个基于 Vue3 + Vite 的多端应用解决方案，集成了 Vant（移动端UI）和 Element Plus（PC端UI）。
支持在同一代码库中开发和管理移动端和PC端两个独立的应用，一次打包，混合部署。

## 1. 项目概述
- **技术栈**：Vite (构建工具) + Vue 3 (前端框架) + Vant (移动端 UI 库) + Element Plus (PC 端 UI 库)
- **目标**：快速搭建兼容移动端和 PC 端的中后台管理系统。
- **特点**：
  - Vite 提供极速热更新和构建。
  - Vant 适配移动端，Element Plus 适配 PC 端。
  - 按需引入 UI 组件，减少打包体积。
  - 多项目一次启动, 共享配置环境, 一次打包部署, 根据路径(mobie/pc)区分项目入口。


## 2. 开发

```bash

# 安装依赖
yarn

# 启动服务
yarn dev

```

## 3. 发布

```bash
# 构建生产环境
yarn build   # 需先在.env.production中修改生产环境打包的部署域名和目录

```


## 4. 项目分类
```bash
移动端代码: src/ 目录

PC端代码: src2/ 目录

共享工具函数: 可提取到共享目录
```

## 5. 项目结构
```bash
project/
├── src/      # 移动端入口
│   ├── assets/          # 静态资源（图片、字体等）
│   ├── components/      # 公共组件
│   ├── router/          # 路由配置
│   ├── store/           # Pinia 状态管理
│   ├── styles/          # 全局 SCSS 变量和混入
│   ├── utils/           # 工具函数
│   ├── views/           # 页面组件
│   ├── App.vue          # 根组件
│   └── bootstrap.ts     # 启动/挂载Vue(React)入口文件
├── src2/     # PC端入口
│   ├── assets/          
│   ├── components/      
│   ├── router/          
│   ├── store/           
│   ├── styles/          
│   ├── utils/           
│   ├── views/           
│   ├── App.vue          
│   └── bootstrap.ts
├── public/              # 静态文件（直接复制到 dist）
├── index.html           # 挂载html
├── main.ts              # 进入页面主入口文件
├── vite.config.ts       # Vite 配置
├── package.json         # 依赖和脚本
└── README.md            # 本文件
```

## 6. 项目部署

```bash
# Nginx配置示例

server {
  listen       3500;
  server_name  localhost;
  location / {
      root   /var/www/app;
      index  index.html index.htm;
      try_files $uri $uri/ /index.html;
  }
}
```

## 7. Git提交规范参考

- `feat` 增加新的业务功能
- `fix` 修复业务问题/BUG
- `perf` 优化性能
- `style` 更改代码风格, 不影响运行结果
- `refactor` 重构代码
- `revert` 撤销更改
- `test` 测试相关, 不涉及业务代码的更改
- `docs` 文档和注释相关
- `chore` 更新依赖/修改脚手架配置等琐事
- `workflow` 工作流改进
- `ci` 持续集成相关
- `types` 类型定义文件更改
- `wip` 开发中

## 8. 许可证

开源免费, 使用 MIT 开源协议。
