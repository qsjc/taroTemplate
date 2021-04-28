// 正则
const env = process.env.TARO_ENV
export const isWeapp = env === 'weapp'
export const isAliapp = env === 'alipay'

export const validateTel = (tel) => {
  const reg = /^1[0-9]{10}/
  return reg.test(tel)
}

export const validateEmail = (email) => {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return reg.test(email)
}

export const validatePureNumber = (num) => {
  const reg = /^[0-9]*$/
  return reg.test(num)
}

export const validatePosInter = (num) => {
  const reg = /^[1-9]\d*(\.\d+)?$/
  return reg.test(num)
}

export const validateChineseAndEnglish = (str) => {
  let reg = /^[a-zA-Z\u4e00-\u9fa5]+$/g
  return reg.test(str)
}

export const validateNoChineseAndEnglish = (str) => {
  const reg = /[^a-zA-Z\u4e00-\u9fa5]+/g
  return reg.test(str)
}

export const valdiateHttpUrl = (url) => {
  const reg = /^http/
  return reg.test(url)
}
