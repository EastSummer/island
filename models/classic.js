import HTTP from '../util/http.js'

export default class ClassicModel extends HTTP {
  getLatest(cb) {
    this.request({
      url: 'classic/latest',
      success: res => cb(res)
    })
  }
}