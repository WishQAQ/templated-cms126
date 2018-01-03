$(function(){
		   $(".nav li").mouseenter(function(){
											var w=$(this).find(".lidiv a").size()*78;
											
											$(this).prev("li").css("background","none")
											        .end().children(".a").css("background","url(images/nav_li_on.jpg)")
													.siblings(".lidiv").width(w).stop().slideDown(200);
													
											}).mouseleave(function(){
												$(this).prev("li").css("background","url(images/nav_li_a_bg.jpg) right 10px no-repeat")
											        .end().children(".a").css("background","none")
													.siblings(".lidiv").stop().slideUp(200);
												});
		   });