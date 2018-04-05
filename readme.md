# vue-toast-demo-hut

a mobile toast plugin for vue 

## Usage

```js
//导入
import ToastDemo from 'vue-toast-demo-hut'

Vue.use(ToastDemo);

//弹出 "hello toast" 的提示
this.$toast.show("hello toast",{});

//延迟3秒后弹出 "hello toast" 的提示
this.$toast.show("hello toast",{
  duration:3000
});

//回调函数
this.$toast.show("hello toast",{
  duration:3000
},function(){
  //...
});
```

## 注意

```js
//option必须存在且为对象
this.$toast.show(message,option,callback)
```

## npm 包的发布过程

首先在 https://www.npmjs.com/ 注册一个帐号

**npm init**

选择一个文件夹，在终端打开执行 `npm init`

然后接下来就是一个长串

- name: 包的名字
- version：版本
- description: 描述
- entry point: 入口文件，默认为 `index.js`
- test command: 测试命令
- git repository: git 仓库，没有的话也可以先跳过，然后在 `package.js` 添加如下字段 `"repository": git仓库地址`
- keyword: 关键字
- author: 作者名
- license: 默认 ISC

回车后发现生成了 `package.json`

**webpack.config.js**

建立 `webpack.config.js` 文件，在里面设置入口文件和出口，设置加载器

**index.js**

在 `webpack.config.js` 的入口文件中「这里是 `src/lib/index.js`」，编写插件

## webpack 打包准备

```shell
cnpm i webpack --save
```

安装各种加载器，如果不知道要安装啥可以运行一下 `webpack` ，然后就会提示缺少什么，根据提示安装对应包就可以

```shell
webpack
```

最后执行成功后，就会生成在出口设置的那个包

## 插件发布

添加自己的账户

```shell
npm adduser //添加用户  输入在 npm 官网注册的帐号
``` 

发布 npm 包

```shell
npm publish //发布
```

如果给包添加或删除内容想再发布话需要修改 `package.json` 中的版本号