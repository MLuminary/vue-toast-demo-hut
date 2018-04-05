import ToastComponet from './vue-toast.vue'

let Toast = {}
//vue插件必须要 install 方法 接受全局对象Vue和配置
Toast.install =  function(Vue,options){

  var opt = {
    duration: 3000
  }
  //用户自定义选项替换默认选项
  Object.assign(opt, options);
  //在原型上扩展 toast 函数
  Vue.prototype.$toast = function(message, option, callback){

    //option必须存在且为对象
    if(option&&Object.prototype.toString.call(option)){
      //用户自定义选项替换默认选项
      Object.assign(opt, option);
    }else{
      throw new Error("option is needed and it must be object");
    }
  
    //创建一个子类 ToastController，继承自 ToastComponet
    const ToastController = Vue.extend(ToastComponet);

    //生成实例绑定到新创建的 div
    var instance = new ToastController().$mount(document.createElement('div'));

    //设置 message visible 以供动态加载
    instance.message = message;
    instance.visible = true;

    document.body.appendChild(instance.$el);

    setTimeout(()=>{
      //设置为隐藏
      instance.visible = false;
      //为了让淡出有效果
      setTimeout(()=>{
        document.body.removeChild(instance.$el);
        callback && callback();
      },300)
    },opt.duration)

    
  }

  //类似与重定向 
  Vue.prototype.$toast['show'] = function(message, option, callback) {
    Vue.prototype.$toast(message,option,callback)
  }
}

//vue插件需要用 Vue.use 使用
if(window.Vue){
  Vue.use(Toast);
}

export default Toast

