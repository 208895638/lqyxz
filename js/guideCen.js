
$(function(){
	var home={
		init:function(){
			this.bindEvent();
			this.render();
			this.swiper();
			
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
			
		},
		render:function(){
			var that=this;
			
		},
		swiper:function(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        spaceBetween: 30,
		        loop:true
		    });
		}
	};
	home.init();
})