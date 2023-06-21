const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  // 生产模式
  mode: 'production'
})
