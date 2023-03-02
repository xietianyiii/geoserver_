const {
  defineConfig
} = require('@vue/cli-service')
const path = require('path')

module.exports = {
  parallel: false,
  lintOnSave: false,
  // publicPath: './',
  // assetsDir: './',

  // entry: './src/components/index.js',
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: '/dist/',
  //   filename: "cgs-data-server-components.min.js",
  //   library: "cgsDsComponents",
  //   libraryTarget: 'umd',
  //   umdNameDefine: true
  // },
  // configureWebpack: {
  //   output: {
  //     publicPath: './',
  //   }

  // },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.join(__dirname, "src"))
    config.resolve.alias.set("@style", path.join(__dirname, "src/assets/style"))
    config.resolve.alias.set("@image", path.join(__dirname, "src/assets/image"))
    config.resolve.alias.set("@js", path.join(__dirname, "src/assets/js"))
    config.resolve.alias.set("@public", path.join(__dirname, "public"))
    config.resolve.alias.set("@api", path.join(__dirname, "src/api"))
    config.resolve.alias.set("@component", path.join(__dirname, "src/components"))

    // config.publicPath = './'

    // config.assetsDir = './'
      //设置标题  默认不设置的话是项目名字
      // config.plugin('html').tap(args => {
      //   args[0].title = "数据服务"
      //   return args
      // })
  }
}