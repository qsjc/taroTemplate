import Taro from '@tarojs/taro'
// import { code } from './config'
// import store from '@/store'
export const request = {
  get(url, data = {}) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'baseUrl' + url,
        method: 'get',
        header: {

        },
        data
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        Taro.hideLoading()
        reject(err)
      })
    })
  },
  post(url, data = {}, config = {}) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: 'baseUrl' + url,
        method: 'post',
        header: {

        },
        data
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        Taro.hideLoading()
        reject(err)
      })
    })
  }
}
