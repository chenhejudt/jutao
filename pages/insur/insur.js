// pages/insur/insur.js
Page({

  data: {
     hiddenName: false
  },
 
  click:function(e){
    // console.log(e)
    this.setData({
      showModal:true
    })
  },
  textHide: function (e) {
    // console.log(e)
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  }
  
})