import Taro from '@tarojs/taro'
// 全局配置
export const code = 200
export const baseApi = envBaseApi

export const gwUrl = envGwUrl
export const pmUrl = envPmUrl
export const appKey = envAppkey
export const appSecret = envAppSecret
export const tdEnv = envTdEnv
export const tdPartner = envTdPartner
export const tdAppName = envTdAppName
export const tdToken = envTdToken
export const uploadUrl = `${envBaseApi}/gw-rest/api/file/imageBase64Upload?appkey=${envAppkey}`
export const token = Taro.getStorageSync('token')