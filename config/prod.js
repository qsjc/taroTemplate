module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    envBaseApi: '"/pro"',
    envBaseApi: '"https://m.kaiyuanhotels.com"',
    envPmUrl: '"https://m.kaiyuanhotels.com/mall"',
    envAppKey: 200001,
    envAppSecret: '"oel7ipwztv9388litv9f5d1sazdmdc"',
    envTdEnv: 1,
    envTdPartner: '"kaiyuanhotels"',
    envTdAppName: '"kaiyuan_web"',
    envTdToken: '"kaiyuanhotels"'
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
