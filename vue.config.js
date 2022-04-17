const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //关闭语法检查
  // 开启代理服务器
  devServer: {
    proxy: {
      '/api': {  //请求前缀，加上就走代理，不加就本地
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''}, //重写地址名，将api开头的地址换成空
        ws: true,  //支持websocket
        changeOrigin: true // 跨域欺骗用于控制请求头的host值
      },
      '/demo': {  //请求前缀，加上就走代理，不加就本地
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''}, //重写地址名，将api开头的地址换成空
        ws: true,  //支持websocket
        changeOrigin: true // 跨域欺骗用于控制请求头的host值
      },
    }
  }
})
