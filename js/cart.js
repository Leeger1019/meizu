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
/*-------------添加商品-------------*/
getGoodsCookies(function(_name, obj){
	//购物车p标签 
	var p = document.createElement("p");
	footfl.appendChild(p);
	p.id = "p"+obj.id;
	//图片
	var span1 = document.createElement("span");
	p.appendChild(span1);
	span1.innerHTML = "<img src='images/imgs1/"+obj.img+"' />";
	//标题
	var span2 = document.createElement("span");
	p.appendChild(span2);
	span2.innerHTML = obj.title;
	// 单价
	var span3 = document.createElement("span");
	p.appendChild(span3);
	span3.innerHTML = "￥"+obj.price;
	// 数量
	var span3 = document.createElement("span");
	p.appendChild(span3);
	span3.innerHTML = obj.num;

// 总价
	var span4 = document.createElement("span");
	p.appendChild(span4);
	span4.innerHTML = "￥"+(obj.price*obj.num);
	
	// 操作删除商品
	var span5 = document.createElement("span");
	p.appendChild(span5);
	var a = document.createElement("a");
	span5.appendChild(a);
	a.innerHTML = "X";
	a.title = "删除";
	a.onclick = function(){
		if( confirm("您确定要删除该商品吗？") ){
			// 删除footfl
			footfl.removeChild(p);
			// 删除cookie
			setCookie("j"+obj.id, "", -1);
		}
	}
	
	/*--------全部删除----------*/
	btn.onclick = function(){
	if( confirm("您确定一键删除所有商品吗？") ){
				// 删除footfl
				footfl.remove(footfl);
				// 删除cookie
				setCookie("j"+obj.id, "", -1);
			}
	}

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
		var h = 00;
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

/*------------购物车显示商品信息------------*/
getGoodsCookies(function(_name, obj){
	//购物车p标签 
	var p = document.createElement("p");
	cartbar.appendChild(p);
	p.id = "p"+obj.id;
	//图片
	var span1 = document.createElement("span");
	p.appendChild(span1);
	span1.innerHTML = "<img src='images/imgs1/"+obj.img+"' />";
	//标题
	var span2 = document.createElement("span");
	p.appendChild(span2);
	span2.innerHTML = obj.title;
	// 单价
	var span3 = document.createElement("span");
	p.appendChild(span3);
	span3.innerHTML = "￥"+obj.price;
	// 数量
	var span3 = document.createElement("span");
	p.appendChild(span3);
	span3.innerHTML = obj.num;

	// 总价
	var span4 = document.createElement("span");
	p.appendChild(span4);
	span4.innerHTML = "￥"+(obj.price*obj.num);
	
	// 操作删除商品
	var span5 = document.createElement("span");
	p.appendChild(span5);
	var a = document.createElement("a");
	span5.appendChild(a);
	a.innerHTML = "X";
	a.title = "删除";
	a.onclick = function(){
		if( confirm("您确定要删除该商品吗？") ){
			// 删除footfl
			cartbar.removeChild(p);
			// 删除cookie
			setCookie("j"+obj.id, "", -1);
		}
	}
});
/*--------购物车按钮事件----------*/
$("#hovers").mouseenter(function(){
	$("#cartbar").slideDown(200);
});
$("#hovers").mouseleave(function(){
	$("#cartbar").slideUp(200);
});
