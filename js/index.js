
$(function(){
	var home={
		init:function(){
			this.bindEvent();
			this.render();
			this.swiper();
			
		},
		bindEvent:function(){
			
			
			var that=this;
			var i,j;
			//swiper
			 var swiper = new Swiper('.swiper1', {
		        pagination: '.swiper-pagination',
		        direction: 'vertical',
		        slidesPerView: 1,
		        spaceBetween: 30,
		        mousewheelControl: true,
		        paginationClickable:true,
		        prevButton:'.swiper-button-prev',
				nextButton:'.swiper-button-next',
		        onInit:function(swiper){
		        	console.log(swiper.activeIndex)
	        	   	var i=swiper.activeIndex;
	        	   	i=1;
//			      	if(i==1){
//			      		$(".indexFixC .indexFixT").addClass("indexFixNone");
//			      	}else{
//			      		$(".indexFixC .indexFixT").removeClass("indexFixNone");
//			     	}
//			      	if(i==4){
//			      		$(".indexFixC .indexFixB").addClass("indexFixNone");
//			      	}else{
//			      		$(".indexFixC .indexFixB").removeClass("indexFixNone");
//			      	}
			      	//fix的加减
					$(".indexFixC .indexFixT").on("click",function(){
						console.log(i)
						if(i==1){
//							$(".indexFixC .indexFixT").addClass("indexFixNone");
							swiper.slideTo(i-1, 500, false)
							return;
							
						}else{
//							$(".indexFixC .indexFixT").removeClass("indexFixNone");
//							$(".indexFixC .indexFixB").removeClass("indexFixNone");
							
							i=i-1;
							swiper.slideTo(i-1, 500, false)
						}
					})
					$(".indexFixC .indexFixB").on("click",function(){
						if(i==5){
//							$(".indexFixC .indexFixB").addClass("indexFixNone");
//							swiper.slideTo(i, 500, false)
							return;
							
						}else{
//							$(".indexFixC .indexFixT").removeClass("indexFixNone");
//							$(".indexFixC .indexFixB").removeClass("indexFixNone");
							i=i+1;
							swiper.slideTo(i-1, 500, false)
						}
					})
		      }
		    });
		    var swiper = new Swiper('.swiper2', {
//		    	effect : 'coverflow',/
//				slidesPerView: 5,/
//				grabCursor: true,/
//				centeredSlides: true,/
//				initialSlide :2,
//				coverflow: {
//				            rotate: 50,
//				            stretch: 0,
//				            depth: 200,
//				            modifier: 1,
//				            slideShadows : true
//				        }
			
		        effect: 'coverflow',
		        grabCursor: true,
		        centeredSlides: true,
		        slidesPerView: 4,
		        observer:true,
		    	observeParents:true,
		    	initialSlide:2,
		        coverflow: {
		            rotate: 50,
		            stretch: 0,
		            depth: 100,
		            modifier: 1,
		            slideShadows : true
		        }
		    });
	    
			//新闻资讯中的Tab切换
			$(".indexFMainTRBWQW").find("li").hover(function(){
				i=$(this).index();
				console.log(i)
				$(".indexFMainTRBDisImgCon").find("em").eq(i).stop().animate({"opacity":"1","filter":"Alpha(opacity=100)"},1000);
			},function(){
				$(".indexFMainTRBDisImgCon").find("em").eq(i).stop().animate({"opacity":"0","filter":"Alpha(opacity=0)"},1000);
			})
			$(".indexSecBT img").on("click",function(){
				$(".indexSecBBZheZhao").fadeIn();
			})
			$(".indexSecBBZheZhao").click(function (e) {
			    if (!$(e.target).closest(".indexSecBBZheZhaoVideo").length&&!$(e.target).closest(".indexSecBBZheZhaoCon span").length) {
//			        $(".gkfGZH").addClass("gkfGZHNone")
					$(".indexSecBBZheZhao").fadeOut();
			    }
			});
			//滚动条
			$('.indexSecBBT').slimscroll({
				color: '#fff'
			});
			//几个图片显示
			var flag=false;
			$(".indexTConBT li a").mouseover(function(){
					$('.index3N').addClass("indexTConBTSNone");
					$(this).find('.index3').addClass("indexTConBTSNone");
					$(this).find('.index3N').removeClass("indexTConBTSNone");
					
//				if(flag){
//					$(".index3").removeClass("indexTConBTSNone");
//					$(".index3N").addClass("indexTConBTSNone");
//					$(this).addClass("indexTConBTSNone").siblings().removeClass("indexTConBTSNone");	
//					
//				}
						
			})
			$(".indexTConBT li a").mouseout(function(){
//					$('.index3').addClass("indexTConBTSNone");
					$(this).find('.index3').removeClass("indexTConBTSNone");
					$(this).find('.index3N').addClass("indexTConBTSNone");
					
//				if(flag){
//					$(".index3").removeClass("indexTConBTSNone");
//					$(".index3N").addClass("indexTConBTSNone");
//					$(this).addClass("indexTConBTSNone").siblings().removeClass("indexTConBTSNone");	
//					
//				}
						
			})
			//首屏点击播放视频
			$(".indexFMainBBL").on("click",function(){
				$(".videoMain").fadeIn();
			})
			$(".videoMain").click(function (e) {
			    if (!$(e.target).closest(".videoM").length) {
//			        $(".gkfGZH").addClass("gkfGZHNone")
					$(".videoMain").fadeOut();
			    }
			});
			
		},
		render:function(){
			var that=this;
			
		},
		swiper:function(){
			
		}
	};
	home.init();
})