module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    baseApi: '/pro',
    gwUrl: 'https://m.kaiyuanhotels.com',
    pmUrl: 'https://m.kaiyuanhotels.com/mall',
    appKey: '200001',
    appSecret: 'oel7ipwztv9388litv9f5d1sazdmdc',
    tdEnv: 1,
    tdPartner: 'kaiyuanhotels',
    tdAppName: 'kaiyuan_web',
    tdToken: 'kaiyuanhotels'
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
