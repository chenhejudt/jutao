// pages/hospital/hospital.js
Page({
  data: {
    menuTapCurrent: 0
  },
  menuTap: function (e) {
    console.log(e)
    this.setData({
      menuTapCurrent: e.currentTarget.dataset.current
    })
  },

  
})