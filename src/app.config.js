let plugins = {}
if (process.env.TARO_ENV === "alipay") {
  plugins =  {

  }
}
if (process.env.TARO_ENV === "weapp") {
  plugins =  {

  }
}
export default {
  pages: [
    "pages/index/index",
    "pages/login/index"
  ],
  subPackages: [
    {
      root: "subPackagesDemo",
      pages: [
        "pages/demo/index"
      ]
    },
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "",
        selectedIconPath: ""
      },
      {
        pagePath: "pages/index/index",
        text: "我的",
        iconPath: "",
        selectedIconPath: ""
      }
    ]
  },
  style: "v2",
  networkTimeout: {
    request: 60000,
    connectSocket: 60000,
    uploadFile: 60000,
    downloadFile: 60000
  },
  plugins,
  lazyCodeLoading: "requiredComponents",
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
}
