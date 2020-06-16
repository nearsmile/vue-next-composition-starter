const path = require('path');

function resolve(dir) {
  // 设置文件路径别名方法
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: './', // 公共路径
  //如果使用了history.pushState pages的路由时； 选项构建多页面应用时；
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist', // 打包(build)生成文件目录 默认dist
  assetsDir: '', // 默认不写或空，css js img文件夹都将放置在根目录下，所有的静态文件放置路径
  indexPath: 'index.html', // 指定打包生成的index.html放置的路径 例：xlz/index.html，index.html将被放置在dist/xlz/index.html
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  productionSourceMap: true, // 设置为true的时候,打包完成后生成一些js.map文件,如果有报错,可以精确的输出哪一个文件、哪一行报错
  css: {
    sourceMap: true, // 设置为true的时候 打包完成后会生成一些css.map文件,如果有报错,可以精确的输出哪一个文件、哪一行报错
    extract: true, // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    requireModuleExtension: true // 开启module <style module></style>
  },
  devServer: {
    open: true, // 启动后是否自动打开浏览器
    host: 'localhost', // 默认是localhost 设置启动的服务器地址 可设置为192.168.0.0本地ip方式
    port: '8888', // 启动服务端口号
    // index: '/account.html',   //启动项目后，默认进入的页面地址
    proxy: {
      // 使用对象的方式设置多个代理
      api: {
        target: 'http://localhost:3000', // 替换成需要请求的接口地址
        ws: true, // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/' // 替换target中的请求地址 请求地址直接使用 /login的形式
        }
      }
    }
  },
  configureWebpack: config => {
    // 必须添加环境判断代码，因为development(开发)环境下config.optimization是undefined
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      // 去掉所有console.log()
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    // 设置文件路径别名(需要配合顶部的方法)
    config.resolve.alias.set('@', resolve('src'));
  },
  pluginOptions: {
    // 第三方插件配置
  }
};
