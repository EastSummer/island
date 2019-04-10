import { classicBeh } from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,
    title: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },

  attached(event) {
    // 跳转页面(×) 当前页面组件切换(√)
    this._recoverStatus()
    this._monitorSwitch()
  },
  

  detached: function (event) {
    // wx:if会触发 hidden不会触发
    // mMgr.stop()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      // 图片要切换
      const { playing } = this.data
      const { src, title } = this.properties
      if(!playing) {
        mMgr.src = src
        mMgr.title = title
      }else {
        mMgr.pause()
      }
      this.setData({ playing: !playing })
    },

    _recoverStatus() {
      if (mMgr.paused) {
        this.setData({ playing: false })
        return
      }
      if (mMgr.src === this.properties.src) {
        this.setData({ playing: true })
      }
    },

    _monitorSwitch() {
      // 播放
      mMgr.onPlay(() => this._recoverStatus())
      // 暂停
      mMgr.onPause(() => this._recoverStatus())
      // 关闭播放器
      mMgr.onStop(() => this._recoverStatus())
      // 自然播放结束
      mMgr.onEnded(() => this._recoverStatus())
    },
  }
})
