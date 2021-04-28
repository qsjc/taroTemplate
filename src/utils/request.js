import Taro from '@tarojs/taro'
// import store from '@/store'
import { baseApi, code } from './config'

export const request = {
  get(url, data = {}, config ={}) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: baseApi + url,
        method: 'GET',
        header: {

        },
        ...config,
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
        url: baseApi + url,
        method: 'POST',
        header: {

        },
        ...config,
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
