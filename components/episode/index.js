// components/episode/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      // 用wxs更好
      // observer(newVal, oldVal, changedPath){
      //   const _index = newVal < 10 ? `0${newVal}` : newVal.toString()
      //   this.setData({ _index })
      // },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
      '十二月'
    ],
    year: 0,
    month: '',
    // _index: '',
  },

  attached(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()

    this.setData({
      year,
      month: this.data.months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
