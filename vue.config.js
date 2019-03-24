// vue.config.js
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  // 选项...
  baseUrl: process.env.NODE_ENV === 'production' ? './'
    : '/',
  outputDir: "dist",
  assetsDir: "assets",
  indexPath: "index.html",
  filenameHashing: true,
  pages: undefined,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  chainWebpack: config => {
    config.resolve.alias  //别名
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_v', resolve('src/views'))
  },
  devServer: {
    port: 8080,
    proxy: 'https://mobile.zihaiwangluo.com'//配置跨域处理,只有一个代理
  }
}