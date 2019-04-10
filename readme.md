### 一些规范

### [数据绑定](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/data.html)

### [视图结构](https://developers.weixin.qq.com/miniprogram/dev/framework/view/)
1. WXML
2. WXSS
3. WXS(star)(事例可见```episode```组件)

### Event
1. [事件分类](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)
2. 事件绑定
   * ```bind```不会阻止冒泡事件向上冒泡
   * ```catch```可以阻止冒泡事件向上冒泡

### 组件
1. [Component构造器](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)
   * properties：组件的对外属性
   * data：组件的内部数据
   * methods：组件的方法
2. [生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)
3. [自定义事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)

### Api
1. [发起请求(wx.request)](https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html)
2. [背景音频(BackgroundAudioManager)](https://developers.weixin.qq.com/miniprogram/dev/api/BackgroundAudioManager.html)

### [Storage](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/storage.html)

### Tips
1. 命名规范
    * 项目中以 ```v-``` 开头
    * 项目中以 ```_``` 开头的方法表示为私有方法
    * 项目中以 ```Model``` 结尾的类表示为Model
2. ```<image />``` 默认300*250
3. 尺寸单位用 ```rpx```(自适应单位)
4. 在以iPhone6(```width:750px height:1334px```)为标准的设计稿中```rpx===px/2```
5. 默认字体：iphone-苹方 Android-思源
6. 只有```font color```会被组件继承
7. [npm支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)
8. 小程序将```properties```和```data```做了合并处理，指向同一个对象
9. ```behavior```中属性会被覆盖，生命周期则会依次执行

### [IMOOC-WX](https://coding.imooc.com/learn/list/251.html)
