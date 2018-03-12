Page({
  data: {
    selectPerson: true,
    firstPerson: '2018',
    firstjidu:'春',
    selectjidu:true,
    selectArea: false,
    selectArea2: false,
    flag: 0,
    flag2: 0,
    flag3: 0
  },
  //点击选择类型
  clickPerson: function () {
    var selectPerson = this.data.selectPerson;
    if (selectPerson == true) {
      this.setData({
        selectArea: true,
        selectPerson: false,
      })
    } else {
      this.setData({
        selectArea: false,
        selectPerson: true,
      })
    }
  },
  clickjidu: function () {
    var selectjidu = this.data.selectjidu;
    if (selectjidu == true) {
      this.setData({
        selectArea2: true,
        selectjidu: false,
      })
    } else {
      this.setData({
        selectArea2: false,
        selectjidu: true,
      })
    }
  },
  //点击切换
  mySelect: function (e) {
    this.setData({
      firstPerson: e.target.dataset.me,
      selectPerson: false,
      selectArea: false,
    })
  },
  mySelectjidu: function (e) {
    this.setData({
      firstjidu: e.target.dataset.me,
      selectjidu: false,
      selectArea2: false,
    })
  },
  //星星评价
  changeColor1: function () {
    this.setData({
      flag: 1
    });
  },
  changeColor2: function () {
    this.setData({
      flag: 2
    });
  },
  changeColor3: function () {
    this.setData({
      flag: 3
    });
  },
  changeColor4: function () {
    this.setData({
      flag: 4
    });
  },
  changeColor5: function () {
    this.setData({
      flag: 5
    });
  },
  changeClothes1: function () {
    this.setData({
      flag2: 1
    });
  },
  changeClothes2: function () {
    this.setData({
      flag2: 2
    });
  },
  changeClothes3: function () {
    this.setData({
      flag2: 3
    });
  },
  changeClothes4: function () {
    this.setData({
      flag2: 4
    });
  },
  changeClothes5: function () {
    this.setData({
      flag2: 5
    });
  },
  changeshop1: function () {
    this.setData({
      flag3: 1
    });
  },
  changeshop2: function () {
    this.setData({
      flag3: 2
    });
  },
  changeshop3: function () {
    this.setData({
      flag3: 3
    });
  },
  changeshop4: function () {
    this.setData({
      flag3: 4
    });
  },
  changeshop5: function () {
    this.setData({
      flag3: 5
    });
  },
  sendata:function(){
    wx.navigateTo({
      url: '../editnewgoods/editnewgoods'
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },

})