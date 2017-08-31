
$(function(){
	var home={
		init:function(){
			this.bindEvent();
			this.render();
			this.swiper();
			this.swipers();
		},
		bindEvent:function(){
			var that=this;
			//顶部滑动变色
			$(".webTopCon").find("li").hover(function(){
				$(this).find("dt").addClass("webTopConColor");
				$(this).find("dd").addClass("webTopConColor");
			},function(){
				$(this).find("dt").removeClass("webTopConColor");
				$(this).find("dd").removeClass("webTopConColor");
			})
			//顶部微信微博
			$(".webTopRCon").find(".webTopRConTL2").mouseover(function(){
				$(".webTopRCon").find(".webTopRConTL2").addClass("webTopRConTNone").siblings().removeClass("webTopRConTNone");
				$(".webTopRCon").find(".webTopRConBL").stop().fadeIn();
			})			
			$(".webTopRCon").find(".webTopRConTL1").mouseleave(function(){
				$(".webTopRCon").find(".webTopRConTL1").addClass("webTopRConTNone").siblings().removeClass("webTopRConTNone");
				$(".webTopRCon").find(".webTopRConBL").stop().fadeOut();
			})
			$(".webTopRCon em img").eq(1).hide();
			$('.webTopRCon em').hover(function(){
				$(this).find('img').eq(0).hide().siblings().show();
				$(this).find('.webTopRConBR ').fadeIn();
			},function(){
				$(this).find('img').eq(1).hide().siblings().show();
				$(this).find('.webTopRConBR ').fadeOut();
			})
//			$(".webTopRCon").find(".webTopRConTR").mouseover(function(){
//				$(".webTopRCon").find(".webTopRConTB2").addClass("webTopRConTRNone").siblings().removeClass("webTopRConTRNone");
//				$(".webTopRCon").find(".webTopRConBR").stop().fadeIn();
//			})
//			$(".webTopRCon").find(".webTopRConTR").mouseleave(function(){
//				$(".webTopRCon").find(".webTopRConTB2").addClass("webTopRConTRNone").siblings().removeClass("webTopRConTRNone");
//				$(".webTopRCon").find(".webTopRConBR").stop().fadeOut();
//			})
			//banner Tab切换
			$(".webBanCT").find("li").hover(function(){
				var i=$(this).index();
				$(this).find("a").addClass("webBanCTActive").parent().siblings().find("a").removeClass("webBanCTActive");
				$(".webBanCBCom").eq(i).removeClass("webBanCBNone").siblings().addClass("webBanCBNone")
			},function(){
				
			})
			//banner Tab切换下的文字悬浮效果
			$(".webBanCBCom li a span").hover(function(){
				$(this).addClass("webBanCBComColor")
			},function(){
				$(this).removeClass("webBanCBComColor")
			})
			//新手引导 划过变色
			$(".webXinCon dd").find("a").hover(function(){
				console.log($(this))
				$(this).addClass("webXinConColor")
			},function(){
				$(this).removeClass("webXinConColor")
			})
			//影音滑动遮罩
			$(".webVLConL").hover(function(){
				$(this).find("span").stop().fadeIn();
			},function(){
				$(this).find("span").fadeOut();
			})
			$(".webVLConR").find("span").hover(function(){
				$(this).find("em").stop().fadeIn();
			},function(){
				$(this).find("em").fadeOut();
			})
			//视频播放
			$(".webVLConR").find("b").hover(function(){
				$(this).find("a").stop().fadeIn();
			},function(){
				$(this).find("a").stop().fadeOut();
			})
			$(".webVLConR b").find("a").on("click",function(){
				$(".videoPlay").fadeIn();
			})
			//视频播放点遮罩隐藏
			$(".videoPlay").click(function (e) {
			    if (!$(e.target).closest("video").length) {
					$(".videoPlay").fadeOut();
					
			    }
			});
			//全屏查看多图
			$(".webVLConL").find("a").on("click",function(){
				$(".webP").fadeIn();
				var swipers = new Swiper('.swiperPhoto', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			        spaceBetween: 30,
			        loop:true,
			        autoplayDisableOnInteraction : true,
			        prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
					paginationType : 'fraction',
					observer:true,//修改swiper自己或子元素时，自动初始化swiper  
					observeParents:true,//修改swiper的父元素时，自动初始化swiper  
			    });
			})
			//点差号消失
			$(".webPhoto h2").on("click",function(){
				$(".webPhoto").fadeOut();
			})
			//截图查看
			$(".webVLConR em").on("click",function(){
				$(".webSec").fadeIn();
				var swipers = new Swiper('.swiperSecs', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			        spaceBetween: 30,
			        loop:true,
			        autoplayDisableOnInteraction : true,
			        prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
					paginationType : 'fraction',
					observer:true,//修改swiper自己或子元素时，自动初始化swiper  
					observeParents:true,//修改swiper的父元素时，自动初始化swiper  
			    });
			})
			//点差号消失
			$(".webSec h2").on("click",function(){
				$(".webSec").fadeOut();
			})
		},
		render:function(){
			var that=this;
			
		},
		swiper:function(){
			var swiper = new Swiper('.swiperLB', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        spaceBetween: 30,
		        loop:true,
//		        autoplay: 3000,
		        autoplayDisableOnInteraction : true
		        
		    });
		    $(".swiperLB").mouseenter(function(){
		    	swiper.stopAutoplay();
		    }).mouseout(function(){
		    	swiper.startAutoplay();
		    })
		}
	};
	home.init();
})