 - 无法使用:root来定义颜色值
 - scss的`mixin`放在`variable.scss`中
 - [二维码](https://github.com/Pudon/weapp-qrcode-base64) 但根据pr里又增加了颜色以及背景色的功能
 - ios新增的safeArea相关的css函数在开发工具上并不生效 但真机有效
 - 兼容平台处理时 可以在页面的config.js中赋值以及做环境判断
 - [微信小程序海报组件Painter](https://github.com/Kujiale-Mobile/Painter)
 - [支付宝小程序海报组件](https://github.com/painterjs/Painter-AliPay) 可以理解为painter对应的版本 只不过当前taro生成的小程序由于部分原因无法启用2.0基础库,
   部分api无法兼容(官方会在3.3.16版本中修复 坐等)
 - [富文本组件mp-html](https://github.com/jin-yufeng/mp-html)
 - [支付宝小程序消息订阅](https://opendocs.alipay.com/mini/plugin/message-subscription) 支付宝小程序的订阅消息需要单独引用
  >index.config.js
  ```javascript
    let usingComponents
    if (process.env.TARO_ENV === 'alipay') {
      usingComponents = {
        "subscribe-msg": "plugin://subscribeMsg/subscribe-msg"
      }
    }
  ```
  >index.vue
  ```html
    <subscribe-msg v-if="isAlipay" />
  ```
  >app.config.js
  ```js
  let plugins
  if (process.env.TARO_ENV === 'alipay') {
    plugins =  {
      subscribeMsg: {
        version: '*',
        provider: '2021001155639035'
      }
    }
  }
  ```
  - `scroll-view`的样式重置需要单独操作 写在`reset.scss`中无法生效
  - 支付宝小程序页面的window配置需要也写入config.js中 用环境判断的逻辑加入不会生效 虽然在微信端会提示无效的配置
  - 如果有使用 `Taro.getSystemInfoSync()` 不能缓存起来公用 用到的时候直接调取 不然会计算错误
  - 由于支付宝小程序的自定义组件无法全局注册 这跟微信完全不同 那我们就暂时在需要的页面单独判断和引入组件(原生组件)
