//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    menuTapCurrent:0
  },
  menuTap: function (e) {
    console.log(e)
    this.setData({
      menuTapCurrent: e.currentTarget.dataset.current
    })
    },
   can:function(){
     wx.navigateTo({
       url: '/pages/details/details'
     })
   } 
})