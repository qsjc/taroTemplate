import Vue from 'vue'
import store from './store'
import Taro from '@tarojs/taro'
import './app.less'

// Vue.config.productionTip = false

// 行内样式转换规则 具体说明[参考文档](https://taro-docs.jd.com/taro/docs/size)
Taro.pxTransform({
  onePxTransform: true,
  unitPrecision: 5,
  propList: ['*'],
  selectorBlackList: [],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0
})

const App = new Vue({
  store,
  onShow (options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
