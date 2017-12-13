/*-----------banner-------------*/
var $li = $("#banner li");
$li.mouseenter(function(){
	$(this).children("ol").stop().slideDown(500);
	$(this).css({"color":"skyblue"});
	$("#banner ol>li").css({"color":"black"});
	$("#banner ol").children("li").stop().animate({
		left:-50
	});
});
$li.mouseleave(function(){
	$(this).children("#banner ol").stop().slideUp(500);
	$(this).css({"color":"black"});
	$("#banner ol").children("li").stop().animate({
		left:0
	});
});
var $li2 = $("#tw");
$li2.mouseenter(function(){
	$("#div1").stop().slideDown(200);
	$li2.css({"color":"black"});
});
$li2.mouseleave(function(){
	$("#div1").stop().slideUp(0);
	$li2.css({"color":"black"});
});



		
		
/*------------foot2--------------*/
/*var lit = document.getElementById("th");
var divt = document.getElementById("tj");
lit.onmouseenter = function(){
	divt.style.display = "block";
}*/
$("#th").mouseenter(function(){
	$("#tj").stop().slideDown();
});
$("#th").mouseleave(function(){
	$("#tj").css({"display":"none"});
});
/*-----------右侧边栏rside--------------*/
function Aside(rside){
	this.rside = rside;
	this.rsideOlli2 = $(".rside li:eq(2)");
	this.init();
}
Aside.prototype.init = function(){
	var that = this;
	this.rsideOlli2.click(function(){
		$("html,body").animate({"scrollTop":0});	
	});
	$(window).scroll(function(){
		var st = $(window).scrollTop();
		var $rside = $(".rside");
		var h = 300;
		if(st > h){
			$rside.fadeIn();
		}else{
			$rside.fadeOut();
		}
	});
	window.onload = function(){
		var $rside = $(".rside");
		$rside.fadeOut();
}
}
var f = new Aside(".rside");


var $lirside = $(".rside li");
$lirside.mouseenter(function(){
	$(this).stop().animate({right:0});
});
$lirside.mouseleave(function(){
	$(this).stop().animate({right:-100});
});
$("#lima").mouseenter(function(){
	$("#ma").stop().slideDown();
});
$("#lima").mouseleave(function(){
	$("#ma").stop().slideUp();
});