// pages/message/message.js
var network_util = require('../../utils/network_utils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      { id: 1, name: "发现" },
      { id: 2, name: "动态" },
      { id: 3, name: "评论" }
    ],
    activeIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  getData:function(){
    var url = "http://h5.lwest.cn/we7/app/index.php?i=3&c=entry&op=message2&do=feedback&m=lwx_helloting";
    network_util._post(url, function (res) {
      console.log(res.data)
    })
  },
  navClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id,
    })
  },
})