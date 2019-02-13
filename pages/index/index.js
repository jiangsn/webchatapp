//index.js
//获取应用实例
const app = getApp()


Page({
  data: {
    startpoint:'',
    endpoint: '',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    longitude: '',
    latitude: '',

  },
  onLoad:function(opt){
    console.log(1)
  //  this.setData({
  //    startpoint: opt.start|| '起始点',
  //    endpoint: opt.start || '结束点',
  //  })
  },
  selectStartPoint(){
    wx.navigateTo({
      url: '../test1/test1?flag=start',
    })
  },
  selectEndPoint() {
    wx.navigateTo({
      url: '../test1/test1?flag=end',
    })
  },
  onReady: function() {
    let bindthis = this;
    wx.getLocation({
      type: 'gcj02',
      success(res) {
      
        bindthis.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: 1,
            latitude: res.latitude,
            longitude: res.longitude,
           accuracy :res.accuracy,
            name: 'T.I.T 创意园'
          }],
        })
       
      }
    })
  },
  onShow(){
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 1];
    if (prevPage.data.flag == 'start') {
      this.setData({
        startpoint: prevPage.data.address || '开始点'
      })
    } else if ((prevPage.data.flag == 'end')){
      this.setData({
        endpoint: prevPage.data.address || '结束点'
      })
    }else{
      this.setData({
        startpoint:  '起点点',
        endpoint: '结束点'
      })
    }
   
  }

})