import ClassicModel from '../../models/classic.js'
import LikeModel from '../../models/like.js'

const classicModel = new ClassicModel()
const likeModel = new LikeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest(res => {
      this.setData({ classic: res })
    })
  },

  onLike(event) {
    const { behavior } = event.detail
    const { id, type } = this.data.classic
    likeModel.like(behavior, id, type)
  },

  onNext() {
    this._updateClassic('next')
  },

  onPrevious() {
    this._updateClassic('previous')
  },

  _updateClassic(nextOrPrevious) {
    const { index } = this.data.classic
    classicModel.getClassic(index, nextOrPrevious, res => {
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index),
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})