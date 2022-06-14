const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.symlinks(true)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@com', resolve('src/components'))
      .set('@api', resolve('src/service'))
      .set('@media', resolve('src/assets'))
  },
  configureWebpack: (config) => {
    const plugins = []
    if (IS_PROD) {
      plugins.push(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
          threshold: 10240, // 归档需要进行压缩的文件大小最小值，10K以上的进行压缩
          deleteOriginalAssets: false, // 是否删除原文件
          minRatio: 0.8 // 压缩比
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins]
  }
}
