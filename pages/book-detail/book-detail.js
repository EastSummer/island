import BookModel from '../../models/book.js'
import LikeModel from '../../models/like.js'

const bookModel = new BookModel()
const likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading()
    
    const { bid } = options
    const detail = bookModel.getDetail(bid)
    const comments = bookModel.getComments(bid)
    const likeStatus = bookModel.getLikeStatus(bid)

    Promise.all([detail, comments, likeStatus])
      .then(res => {
        this.setData({
          book: res[0],
          comments: res[1].comments,
          likeStatus: res[2].like_status,
          likeCount: res[2].fav_nums
        })
        wx.hideLoading()
      })
  },

  onLike(event) {
    const { behavior } = event.detail
    likeModel.like(behavior, this.data.book.id, 400) 
  },

  onFakePost(event) {
    this.setData({ posting: true })
  },

  onCancel(event) {
    this.setData({ posting: false })
  },

  onPost(event) {
    const content = event.detail.text || event.detail.value
    const { book, comments } = this.data

    if (!content) return false
    if (content.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icon: 'none',
      })
      return false
    }

    bookModel.postComment(book.id, content)
    .then(res => {
      wx.showToast({
        title: '+ 1',
        icon: 'none',
      })
      comments.unshift({
        content,
        nums: 1,
      })
      this.setData({
        comments,
        posting: false,
      })
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})