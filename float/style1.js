// components/wePush/float/style1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: true
    },
    // 距离底部
    // 单位：rpx
    bottom: {
      type: Number,
      value: 200
    },
    // 订阅消息模板id列表
    tmplIds: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    show () {
      this.setData({
        show: true
      })
    },
    hide () {
      this.setData({
        show: false
      })
    },
    dingyueHandler () {
      if (this.data.tmplIds.length === 0) return;
      getApp().wePush.dingyue(this.data.tmplIds, () => {
        wx.showToast({
          title: '感谢您的订阅！',
        })
      })
    }
  }
})
