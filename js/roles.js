
$(function(){
	var home={
		init:function(){
			this.bindEvent();
			this.render();
			this.swiper();
			
		},
		bindEvent:function(){
			var that=this;
			//点击视频播放
			$(".rolesFirCon").find(".rolesFirCB img").on("click",function(){
				$(".rolesVideo").fadeIn();
			})
			$(".rolesVideo").on("click",function(e){
				if (!$(e.target).closest(".rolesV").length) {
//			        $(".gkfGZH").addClass("gkfGZHNone")
					$(".rolesVideo").fadeOut();
			    }
			})
		},
		render:function(){
			var that=this;
			
		},
		swiper:function(){
			
		}
	};
	home.init();
})