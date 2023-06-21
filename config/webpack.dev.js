const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
  //开发模式
  mode: 'development',
  // 源码调试模式
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // 服务端口号
    port: 3000,
    // gzip压缩,开发环境不开启,提升热更新速度
    compress: false,
    // 开启热更新，后面会讲react模块热替换具体配置
    hot: true,
    // 解决history路由404问题
    historyApiFallback: true,
    static: {
      // 托管静态资源public文件夹
      directory: path.join(__dirname, '../public')
    }
  }
})
