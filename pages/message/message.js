// pages/message/message.js
var network_util = require('../../utils/network_utils.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      { id: 1, name: "发现" },
      { id: 2, name: "动态" }
    ],
    dataInfo:null,
    activeIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  getData:function(){
    var that=this;
    var url = "http://h5.lwest.cn/we7/app/index.php?i=3&c=entry&op=message2&do=feedback&m=lwx_helloting";
    network_util._post(url, function (res) {
      console.log(res.data);
      res.data.note.forEach(function (item) {
        item.createtime = util.formatTime(util.transLocalTime(item.createtime));
      })
      that.setData({
        dataInfo:res.data
      })
      console.log(that.data.dataInfo);
    })
  },
  navClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id,
    })
  },
})