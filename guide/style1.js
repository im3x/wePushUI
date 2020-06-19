// components/wePush/guide/style1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    top: {
      type: String,
      value: '400rpx'
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
    dingyue (tmplIds) {
      const NOW = +new Date;
      let TM = 0;
      getApp().wePush.dingyue(tmplIds, () => {
        wx.showToast({
          title: '订阅成功！',
        })
      }, null, () => {
        TM = +new Date - NOW;
        this.setData({
          show: false
        });
      });
      setTimeout(() => {
        if (TM == 0) {
          this.setData({
            show: true
          });
        }
      }, 800);
    }
  }
})
