//index.js
//获取应用实例
const app = getApp();
var network_util = require('../../utils/network_utils.js');
Page({
  data: {
    banner: null,
    navList: [
      { id: 1, name: "汀荐" },
      { id: 2, name: "汀图" },
      { id: 3, name: "汀向标" },
      { id: 0, name: "汀颜馆" },
      { id: 4, name: "汀直播" },
    ],
    activeIndex: 0,
    hidden: true,
    scrollList:null,
    type:1,
    page:0
  },
  //事件处理函数
  onLoad: function () {
    this.getBannerinfo();
    this.getoneinfo();
  },
  onReachBottom:function(){
    if(this.data.type==0){
      wx.showToast({
        title: '已经到底了',
        icon: 'none',
        duration: 1000
      })
      return;
    }
    var that = this;
    wx.showLoading({
      title: '玩命加载中',
    });
    wx.setStorage({
      key: 'first',
      data: 'first',
    })
    wx.getStorage({
      key: 'first',
      success: function(res) {
        var page = that.data.page++;
        that.setData({
          page: page
        })
      }
    })
    var url = "http://h5.lwest.cn/we7/app/index.php?i=3&c=entry&op=bnextf5&do=feedback&m=lwx_helloting";
    var data = { type: this.data.type, page: this.data.page };
    console.log(this.data.page)
    network_util.post(url, data, function (res) {
      console.log(res.data);
      if(res.data.length<1){
        wx.showToast({
          title: '已经到底了',
          icon: 'none',
          duration: 1000
        })
      }
      var addpage=that.data.page+1;
      that.setData({
        page:addpage
      })
      wx.hideLoading();
      var arr=that.data.scrollList.concat(res.data);
      that.setData({
        scrollList: arr
      })
    }, function (res) {
      // console.log(res);
    });
  },
  getBannerinfo: function () {
    var that = this;
    var url = 'http://h5.lwest.cn/we7/app/index.php?i=3&c=entry&op=banner&do=feedback&m=lwx_helloting';
    network_util._get(url,
      function (res) {
        that.setData({
          banner: res.data,
        })
      }, function (res) {
        console.log(res);
      });
  },
  getoneinfo:function(){
    var url ="http://h5.lwest.cn/we7/app/index.php?i=3&c=entry&op=bnextf5&do=feedback&m=lwx_helloting";
    var that=this;
    var data={type:this.data.type,page:this.data.page};
    network_util.post(url,data,function(res){
      console.log(res.data)
      if (that.data.type == 0) {
        console.log(1)
        for(var i=0;i<res.data.length;i++){
          res.data[i].thumb ="http://h5.lwest.cn/hellot_admin/thinkphp3/Public/uploads/"+res.data[i].thumb;
        }
      }
      that.setData({
        scrollList: res.data
      })
    },function(res){
      // console.log(res);
    });

  },
  navClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id,
      page:0
    });
    this.data.type = e.currentTarget.dataset.index;
    this.getoneinfo();
  },
})
