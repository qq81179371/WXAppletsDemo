//index.js
//获取应用实例
const app = getApp()

  /**
   * 页面的初始数据
      banner_swiper banner的列表 
        {
          indicatorDots:提示小点儿,
          autoplay:自动播放,
          interval:自动切换时间间隔,
          duration:滑动动画时长,
          circular:是否采用衔接滑动,
          imaUrls:图片地址数组
        }


      classify 分类的列表
        {
          imgUrl:图片地址
          text:标语
        }
      today_recommend_list 今日推荐
        {
          src:图片地址
        }
      playing:播放 暂停

   */


Page({
  data: {
  	banner_swiper:{
      indicatorDots:true,
      autoplay:false,
      interval:5000,
      duration:500,
      circular:false,
      imgUrls:[
        '../../images/imagesHome/banner.png',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    },
    classify:[
    	[
			{
			imgUrl:'../../images/imagesHome/home_btn_a.png',
			name:'精品故事'
			},
			{
			imgUrl:'../../images/imagesHome/home_btn_b.png',
			name:'排行榜'
			},
			{
			imgUrl:'../../images/imagesHome/home_btn_c.png',
			name:'国学历史'
			},
			{
			imgUrl:'../../images/imagesHome/home_btn_d.png',
			name:'儿歌'
			}
      	],
      	[
			{
			imgUrl:'../../images/imagesHome/home_btn_e.png',
			name:'哄睡'
			},
			{
			imgUrl:'../../images/imagesHome/home_btn_f.png',
			name:'动画'
			},
			{
			imgUrl:'../../images/imagesHome/home_btn_g.png',
			name:'金牌主播'
			},
			{
			imgUrl:'../../images/imagesHome/home_btn_h.png',
			name:'亲子课堂'
			}
      	]
    ],
    storyList:[
    	[
    		{
    			imgUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    			name:'十万个为什么'
    		},
    		{
    			imgUrl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    			name:'小马过河'
    		},
    		{
    			imgUrl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    			name:'一千零一夜'
    		}
    	]
    ]
  },
  onLoad: function () {
  },
  dailyMore: function(){
  	console.log('dailyMore')
  	let storylist = this.data.storyList;
  	storylist.push(storylist[0])
  	this.setData({
  		storyList:storylist
  	})
  }
})
