// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify:[
      [
        {
        imgUrl:'../../images/imagesClassfy/class_btn_a.png',
        name:'儿歌童谣'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_b.png',
        name:'童话寓言'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_c.png',
        name:'动画视频'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_d.png',
        name:'连载故事'
        }
      ],[
        {
        imgUrl:'../../images/imagesClassfy/class_btn_e.png',
        name:'绘本故事'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_f.png',
        name:'国学历史'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_g.png',
        name:'精品故事'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_h.png',
        name:'科普益智'
        }
      ],[
        {
        imgUrl:'../../images/imagesClassfy/class_btn_i.png',
        name:'英语动画'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_j.png',
        name:'英文启蒙'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_k.png',
        name:'金牌主播'
        },
        {
        imgUrl:'../../images/imagesClassfy/class_btn_l.png',
        name:'胎教母婴'
        }
      ]
    ],
    age:[
      [
        {
          ageName:'0-1岁',status:false
        },{
          ageName:'2岁',status:false
        },{
          ageName:'3岁',status:false
        }
      ],[
        {
          ageName:'4岁',status:false
        },{
          ageName:'5岁',status:false
        },{
          ageName:'5岁以上',status:false
        }
      ]
    ],
    address:[
      [
        {addressName:'起床',status:false},{addressName:'哄睡',status:false},{addressName:'吃饭',status:false}
      ],[
        {addressName:'幼儿园',status:false},{addressName:'安全',status:false},{addressName:'礼貌',status:false}
      ]
    ]

  
  },
  //年龄选择
  agechoosed:function(event){
    // console.log('agechoosed');
    let item = event.currentTarget.dataset.item
    let age = this.data.age;
    for (var i = 0; i < age.length; i++) {
      for (var j = 0; j < age[i].length; j++) {
          age[i][j].status = false
      }
    }
    for (var i = 0; i < age.length; i++) {
      for (var j = 0; j < age[i].length; j++) {
        if(age[i][j].ageName == item.ageName){
          age[i][j].status = true
        }
      }
    }
    this.setData({
      age:age
    })
    //差交互
  },
  //场景选择
  adresschoosed:function(event){
    let item = event.currentTarget.dataset.item
    let address = this.data.address;
    for (var i = 0; i < address.length; i++) {
      for (var j = 0; j < address[i].length; j++) {
          address[i][j].status = false
      }
    }
    for (var i = 0; i < address.length; i++) {
      for (var j = 0; j < address[i].length; j++) {
        if(address[i][j].addressName == item.addressName){
          address[i][j].status = true
        }
      }
    }
    this.setData({
      address:address
    })
    //差交互
  }



  
})