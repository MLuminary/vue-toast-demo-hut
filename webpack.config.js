const path = require('path');


module.exports = {
  mode:'development',
  entry: path.join(__dirname,'src/lib/index.js'),
  output: {
    path:path.join(__dirname,'./dist'),
    filename: 'vue-toast-demo-hut.js',
    libraryTarget:'umd', //文件输出的格式
    library:'VueToastDemo'
  },
  //放置加载器
  module:{
    rules:[
      {
        test:/\.vue$/,
        loader:'vue-loader',
        exclude:/node_modules/,
        options:{
          loaders:{
            scss:'style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        include:path.join(__dirname,'src'),
        exclude:/node_modules/
      }
    ]
  },
  //插件
  plugins:[

  ]
}