Page({
  data: {
    activeName: 'basic-info',
    basicInfo: [{
      title: '姓名',
      value: '于长旭'
    }, {
      title: '年龄',
      value: '93年生人'
    }, {
      title: '家庭成员',
      value: '三口之家'
    }, {
      title: '学历',
      value: '本科/中北大学'
    }, {
      title: '公司',
      value: '中软国际有限公司'
    }, {
      title: '职位',
      value: '前端开发工程师'
    }, {
      title: '薪资',
      value: '20W+/年'
    }],
    selfAssessment: '简单的介绍一下我自己，我叫于长旭，93年生人，三口之家。毕业于中北大学。现就职于中软国际有限公司，担任前端开发工程师。年薪20以上，由于工作城市和实际需求，目前并没有准备车和房子。性格方面，大多时候我是偏外向一点的，为人比较好相处，朋友对我的评价也是说比较稳重。生活中，我是一个喜欢探索新鲜事物的人，周末偶尔会去想要去的地方用来放松自己的心情。有时也会宅在家里安静的看看书，追追剧，充实自己。自我评价的话，我觉得自己还是一个比较稳重，热爱生活，能力较强，对未来也充满期待的人。',
    selfAssessmentStrIndex: 0,
    selfAssessmentStr: '',
    strInterval: 0,
    tel: [
      { name: 'chat-o' },
      { name: 'phone-o', value: '17840961025' }
    ],
    qrCodeUrl: 'cloud://cloud1-7gvfkznp7d3130fe.636c-cloud1-7gvfkznp7d3130fe-1304466240/wx.png',
    showQrCode: false,
    showTelephone: false
  },
  onLoad() {

  },
  onChange(event: { detail: string }) {
    this.setData({
      activeName: event.detail,
    });
    const str = this.data.selfAssessment;
    if (this.data.selfAssessmentStrIndex === str.length) {
      clearInterval(this.data.strInterval)
      return
    }
    if (event.detail === 'self-assessment') {
      this.data.strInterval = setInterval(() => {
        this.setData({
          selfAssessmentStr: str.slice(0, this.data.selfAssessmentStrIndex)
        });
        if (this.data.selfAssessmentStrIndex++ === str.length) {
          clearInterval(this.data.strInterval)
        }
      }, 100)
      if (this.data.selfAssessmentStr === str) return
    } else {
      clearInterval(this.data.strInterval)
    }
  },

  telMe: function (event: { currentTarget: { dataset: { name: any; value: any; }; }; }) {
    const { name } = event.currentTarget.dataset
    switch (name) {
      case 'chat-o': {
        this.setData({
          showQrCode: !this.data.showQrCode,
          showTelephone: false
        });
        break
      }
      case 'phone-o': {
        this.setData({
          showQrCode: false,
          showTelephone: !this.data.showTelephone
        });
        break
      }
    }
  },
  copy: function (event: { currentTarget: { dataset: { value: string; }; }; }) {
    const data = event.currentTarget.dataset.value;
    wx.setClipboardData({ data })
  },
  onShareAppMessage: function () { }
})