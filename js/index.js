$(function(){
	//点赞功能
	var flag = true;
	$(".personal .Fabulous").on("click",function(){
		if(flag){
		  $(this).parents("li").find(".Num").text("1");
		  flag = false;
		}
		else{	
		  $(this).parents("li").find(".Num").text("0");
		  flag = true;
		}
	});
	//查看全部评论
	slidUp();
	//点击展开评论
	$(".commentDetalis dd em").on("click",function(){
		if($(this).text()=="查看全部10条评论"){
			$(this).text("收起");
			$(this).parents(".commentDetalis").children("dt").show();
			$(this).siblings("span").children("img").attr("src","img/xiangshang.jpg");
		}else{
			$(this).text("查看全部10条评论");
			slidUp();
		}
	});
})
//判断评论的条数，大于三条的时候隐藏。
function slidUp(){
		$(".commentDetalis dt").each(function(){
			if($(this).index()>2){
				$(this).hide();
			}
		});
	}