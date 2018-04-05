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