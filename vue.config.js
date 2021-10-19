module.exports = {
  runtimeCompiler: true,

  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: '8081', // 设置端口号
    proxy: {
        '/captcha': {
          target: 'http://blog.solexy.cn', //API服务器的地址
          ws: true, //代理websockets
          changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin

        }
    },
}
}
