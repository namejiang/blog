# egg-vue-webpack-boilerplate

个人博客系统

## 系统功能

### 前台博客系统 http://localhost:7001

**采用 Egg + Vue 服务端渲染**

### 后台管理系统 http://localhost:7001/admin

**采用 Egg + Vue + Vue-Router + Element 单页面服务端同构渲染**

## 版本

- Egg 版本： ^2.x.x
- Node 版本: ^8.x.x+
- Vue 版本: ^2.5.0
- Webpack 版本: ^4.x.x, 对应 `easywebpack-vue` 版本为 ^4.x.x; Webpack3 版本项目骨架请见 `webpack3` 分支, 对应 `easywebpack-react` 版本为 3.x.x

## 说明 

## 1.特性

- 支持服务端渲染, 前端渲染, 静态页面渲染三种方式,

- 支持单页面, 多页面服务端渲染, 前端渲染模式

- 支持 server 和 client 端代码修改, webpack 时时编译和热更新, `npm run dev` 一键启动应用

- 基于 vue + axios 多页面服务端渲染, 客户端渲染同构实现

- 基于 vue + vuex + vue-router + axios 单页面服务器客户端同构实现

- 基于 easywebpack 基础配置, 使用 es6 class 继承方式编写 webpack 配置 和 cli 构建

- 支持 js/css/image 资源依赖, 内置支持CDN特性, 支持 css/sass/less 样式编写

- 支持根据 .vue 文件自动创建 Webpack Entry 入口文件

- 开始支持多进程编译， 支持 webpack dll 自动化构建, 与多进程编译结合，构建速度减少 2/3

- 支持Vue组件异步加载, 具体实例请看[app/web/page/dynamic](app/web/page/dynamic)

- Node 8 版本的 async 和 await 特性, Controller 采用 class 方式编写

- 支持 service worker 构建和使用

- 提供 i18n 多语言示例


## 2.依赖

- [easywebpack](https://github.com/easy-team/easywebpack) ^4.x.x
- [easywebpack-vue](https://github.com/easy-team/easywebpack) ^4.x.x
- [egg-view-vue-ssr](https://github.com/easy-team/egg-view-vue-ssr) ^3.x.x
- [egg-webpack](https://github.com/easy-team/egg-webpack) ^4.x.x
- [egg-webpack-vue](https://github.com/easy-team/egg-webpack-vue) ^2.x.x


## 3. 使用

- 安装依赖

```bash
npm install
```

- 迁移数据库   注： 是npx 不是 npm

```bash
npx sequelize db:migrate
```


- 本地开发启动应用

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001

#### 3.4 发布模式启动应用

- 首先在本地或者ci构建好jsbundle文件

```bash
npm run build 
```

- 然后,启动应用

```bash
npm start 
```


详细打包部署请见： http://hubcarl.github.io/easywebpack/vue/dev/
