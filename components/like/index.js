// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,  // default false
    },
    count: {
      type: Number, // default 0
    },
    readOnly: {
      type: Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      const { like, count, readOnly } = this.properties
      if (readOnly) {
        return false
      }
      this.setData({
        count: like ? count-1 : count+1,
        like: !like,
      })
      // 激活事件
      let behavior = like ? 'cancel' : 'like'
      this.triggerEvent('like', { behavior }, {})
    }
  }
})
