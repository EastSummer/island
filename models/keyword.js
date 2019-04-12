import HTTP from '../util/http-p.js'

export default class KeyWordModel extends HTTP {
  key = 'q'
  maxLength = 10

  getHistory() {
    const words = wx.getStorageSync(this.key)
    return words || []
  }

  getHot() {
    return this.request({ url: '/book/hot_keyword' })
  }

  addToHistory(keyword) {
    let words = this.getHistory()
    const has = words.includes(keyword)
    // 队列 栈
    if (!has) {
      // 数组末尾 删除 ， keyword 数组第一位
      if (words.length >= this.maxLength) {
        words.pop()
      }
      words.unshift(keyword)
      wx.setStorageSync(this.key, words)
    }
  }

}