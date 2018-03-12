Page({
  data: {
    files: [],
    question:null,
    num:["0"]
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
        console.log(that.data.files);
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  delete:function(e){
    var index = parseInt(e.currentTarget.id);
    console.log(index);
    this.data.num.splice(index,1);
    this.setData({
      num:this.data.num
    })
    console.log(this.data.num)
  },
  addquestion:function(){
    var arr=this.data.num;
    arr.push("0");
    this.setData({
      num: arr
    })
    console.log(this.data.num)
  }
});