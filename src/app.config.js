export default {
  pages: [
    'pages/index/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: '',
        selectedIconPath: ''
      },
    ]
  },
  subPackages: [
    {
      root: 'subPackagesDemo',
      pages: [
        'pages/demo/index'
      ]
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    'scope.userLocation': {
      desc: "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
}
