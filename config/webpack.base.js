const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件
  entry: path.join(__dirname, '../src/index.tsx'),
  // 打包文件出口
  output: {
    // js名称
    filename: 'static/js/[name].js',
    // 产物输出路径
    path: path.join(__dirname, '../dist'),
    // 清理产物文件夹
    clean: true,
    // 产物的公共路径
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        // 匹配.ts, .tsx文件
        test: /.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
                  useBuiltIns: 'usage', //
                  // 配置使用core-js低版本
                  corejs: 3
                }
              ],
              // 执行顺序由右往左,所以先处理ts,再处理jsx
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        // 匹配.css、.scss、.sass 文件
        test: /\.s[ac]ss$/i,
        use: [
          // 将 js 字符串生成为 style 节点
          'style-loader',
          // 将 css 转化成 CommonJS 模块
          'css-loader',
          // css 前缀
          'postcss-loader',
          // 将 sass 编译成 css
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 模版文件路径
      template: path.resolve(__dirname, '../public/index.html'),
      // 自动注入静态资源
      inject: true
    })
  ]
}
