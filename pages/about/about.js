// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  set:function(){
    wx.navigateTo({
      url: '/pages/set/set',
    })
  },
  insur:function(){
    wx.navigateTo({
      url: '/pages/insur/insur',
    })
  }

})