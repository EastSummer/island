import HTTP from '../util/http.js'

export default class LikeModel extends HTTP {
  like(behavior, artID, type) {
    const url = behavior==='like' ? 'like' : 'like/cancel'
    this.request({
      url,
      method: 'POST',
      data: {
        art_id: artID,
        type,
      },
    })
  }
}