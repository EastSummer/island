import HTTP from '../util/http.js'

export default class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: 'classic/latest',
      success: res => {
        cb(res)
        this._setLatestIndex(res.index)
        const key = this._getKey(res.index)
        wx.setStorageSync(key, res)
      }
    })
  }

  getClassic(index, nextOrPrevious, cb) {
    // 查找缓存 or API->保存到缓存
    const key = this._getKey(nextOrPrevious==='next' ? index+1 : index-1)
    const classic = wx.getStorageSync(key)
    if( !classic ) {
      this.request({
        url: `classic/${index}/${nextOrPrevious}`,
        success: res => {
          wx.setStorageSync(this._getKey(res.index), res)
          cb(res)
        }
      })
    } else {
      cb(classic)
    }
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

  // 产生缓存期刊的key
  _getKey(index) {
    return `classic-${index}`
  }
}