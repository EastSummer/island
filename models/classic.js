import HTTP from '../util/http.js'

export default class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: 'classic/latest',
      success: res => {
        cb(res)
        this._setLatestIndex(res.index)
      }
    })
  }

  getClassic(index, nextOrPrevious, cb) {
    this.request({
      url: `classic/${index}/${nextOrPrevious}`,
      success: res => cb(res)
    })
  }

  isFirst(index) {
    return Boolean(index === 1)
  }

  isLatest(index) {
    const latestIndex = this._getLatestIndex()
    return Boolean(latestIndex === index)
  }

  // 最新期刊号写入缓存
  _setLatestIndex(index) {
    // 同步写入缓存
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex() {
    return wx.getStorageSync('latest')
  }
}