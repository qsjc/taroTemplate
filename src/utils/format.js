import Taro from '@tarojs/taro'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

// const ua = navigator.userAgent.toLowerCase()

// NOTE 以上日期处理依赖

export function formatYMD (time) {
  return dayjs(time).format('YYYY-MM-DD')
}

export function formatHotelScore(score) {
  if (score >= 4.9) {
    return '超棒!'
  }
  if (score === 4.8) {
    return '棒!'
  }
  if (score === 4.7) {
    return '很好!'
  }
  if (score === 4.6) {
    return '好!'
  }
  if (score === 4.5) {
    return '不错'
  }
  return ''
}