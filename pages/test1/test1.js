// pages/test1/test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:'',
    address:'',
  },
  setText(e){
      this.setData({
        address: e.detail.value
      })
  },

  fanghui(){
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    console.log(this.data.address)
    prevPage.setData({
      flag:this.data.flag,
      address: this.data.address
    })
    wx.navigateBack({
      delta: 1,
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.flag)
    this.setData({
      flag: options.flag,
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