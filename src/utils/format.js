import Taro from '@tarojs/taro'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import QR from "@/assets/js/qrcode"
import parse from "mini-html-parser2"

dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
// NOTE 以上日期处理依赖

export function formatYMD (time) {
  return dayjs(time).format('YYYY-MM-DD')
}

export function formatLoginRoute() {
  const pages = Taro.getCurrentPages()
  const currentPage = pages[ pages.length - 1 ] // 获取当前页面的对象
  const currentRoute = currentPage.route
  const options = currentPage.options
  const optionsList = []
  for (const key in options) {
    if (key !== "$taroTimestamp") {
      optionsList.push(`${key}=${ options[ key ] }`)
    }
  }
  const loginRoute = `/${currentRoute}?${optionsList.join("&")}`
  store.dispatch("common/setLoginRoute", loginRoute)
}

export function unLoginOperator (callback) {
  if (!Taro.getStorageSync("token")) {
    Taro.showModal({
      title: "提示",
      content: "是否登录以使用完整功能?",
      confirmColor: "#ffbd27",
      success(res) {
        if (res.confirm) {
          formatLoginRoute()
          Taro.navigateTo({
            url: "/pages/login/index"
          })
        }
      }
    })
    return false
  } else {
    callback()
  }
}

export function jumpLoginRoute () {
  const loginRoute = store.state.common.loginRoute
  if (loginRoute) {
    // NOTE 区分底部tab和其他页面
    // if (loginRoute.startsWith("/pages/index/index") || loginRoute.startsWith("/pages/classify/index") || loginRoute.startsWith("/pages/mine/index") || loginRoute.startsWith("/pages/activity/index")) {
    //   Taro.switchTab({
    //     url: loginRoute
    //   })
    // } else {
    //   Taro.redirectTo({
    //     url: loginRoute
    //   })
    // }
  } else {
    Taro.switchTab({
      url: "/pages/index/index"
    })
  }
}

export function createQrcodeImg (codeStr) {
  return QR.drawImg(codeStr, {
    typeNumber: 1,
    errorCorrectLevel: "M",
    size: 500,
    color: "#000",
    background: "#fff",
    padding: 4
  })
}

export function formatRichText (html) {
  parse(html,(err, nodes) => {
    if (!err) {
      return nodes
    }
  })
  return html
}

export function goOtherMiniProgram (appId, path) {
  Taro.navigateToMiniProgram({
    appId: appId,
    path: path,
    // extraData: item.extraData,
    envVersion: "trial",
    success: function(res) {
      // 打开成功
    }
  })
}
