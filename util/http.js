import { config } from '../config.js'

const errCodeTip = {
  1: '抱歉，出了一个错误',
  1005: '不正确的开发者key',
  3000: '该期内容不存在',
}

/**
 * 封装 wx.request
 * @param url
 * @param data 往后台传递的 json 参数
 * @param method 可选参数项 默认GET
 * @param success 可选参数项 成功后的回调函数
 * @param fail 失败后的回调函数
 */
export default class HTTP {
  request(params){
    if (!params.method) params.method = 'GET'
    const { url, data, method, success } = params
    wx.request({
      url: config.api_base_url + url,
      data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey,
      },
      method,
      success: res => {
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          success && success(res.data)
        }else {
          // 服务器异常
          this._show_error(res.data.error_code)
        }
      },
      fail: res => {
        // Api调用失败
        this._show_error(1)
      },
    })
  }

  // _开头表示为私有方法(字面意义上，不是正在的)
  _show_error(code){
    if (!code) code = 1
    wx.showToast({
      title: errCodeTip[code] || errCodeTip[1],
      icon: 'none',
      duration: 2000,
    })
  }
}