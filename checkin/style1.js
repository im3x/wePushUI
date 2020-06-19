// components/wePush/checkin/style1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: '每日签到'
    },
    date: {
      type: String,
      value: new Date().toISOString().split('T')[0]
    },
    btnTxt: {
      type: String,
      value: '签到'
    },
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
    qiandaoHandler: function () {
      if (this.data.tmplIds.length === 0) return this.closeHandler();
      getApp().wePush.dingyue(this.data.tmplIds, () => {
        wx.showToast({
          title: '订阅签到成功！'
        })
        this.closeHandler()
      })
    },
    closeHandler: function () {
      this.setData({
        show: false
      })
    }
  }
})
