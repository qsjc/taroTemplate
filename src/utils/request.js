import Taro from '@tarojs/taro'
import { baseApi, appKey, appSecret } from './config'
import md5 from 'md5'
import { formatLoginRoute } from "@/utils/format"
import store from "@/store"

// 生成一个十位随机数
function createRandom() {
  let str = ''
  for (let index = 0; index < 10; index++) {
    str += `${parseInt(Math.random() * 10)}`
  }
  return str
}

export const request = {
  get(url, data = {}, config ={}) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: baseApi + url,
        method: 'GET',
        ...config,
        header: {

        },
        data,
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },
  post(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      const nowTime = Date.now()
      const queryToken = md5(
        `${appSecret}&${appKey}&${JSON.stringify(data)}&${nowTime}`
      )
      Taro.request({
        url: baseApi + url,
        method: 'POST',
         ...config,
        header: {
          appkey: `${appKey}`,
          timestamp: `${nowTime}`,
          token: queryToken,
          v: createRandom(),
          shands: '2.0',
          Authorization: Taro.getStorageSync("token")
            ? `Bearer ${Taro.getStorageSync("token")}`
            : ""
        },
        data,
        success(res) {
          const errorCode = [991, 992, 993, 995]
          const resCode = res.data.code
          if (errorCode.findIndex(code => resCode === code) > -1) {
            // NOTE 类似token失效等操作逻辑
            Taro.removeStorageSync("token")
            if (store.state.common.loginRoute.startsWith("/pages/login/index")) {
              return false
            } else {
              formatLoginRoute()
              Taro.redirectTo({
                url: "/pages/login/index"
              })
              return false
            }
          }
          resolve(res.data)
        },
        fail (err) {
          Taro.hideLoading()
          reject(err)
        }
      })
    })
  }
}
