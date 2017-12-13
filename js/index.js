/*-------top-------*/
var span1 = document.getElementById("span1");
var top1 = document.getElementById("top");
$(span1).click(function(){
	$(top1).stop().slideUp(500);
});
/*--------banner---------*/
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
/*-----------mover-----------*/
var mover = document.getElementById("mover");
var ul1 = document.getElementById("ul");
var ol1 = document.getElementById("ol");
var olli = Array.from(ol1.children);

olli.forEach(function(li, index){
	li.onclick = function(){
		//ul1.style.left = -810 * index+"px";
		now = index;	// 将下标赋给全局变量
		tab();	// 执行图片切换的代码
	}
});

var now = 0;	// 全局变量，记录当前轮播图显示的图片的下标
olli[now].className = "select";

function tab(){
	if( now==7 ){

		startMove(ul1, {"left":-1440*now}, function(){
			// 到达目标点之后，瞬间将ul定位到第一张图片上
			ul1.style.left = "0px";
		});
		now=0;
	}else{
		startMove(ul1, {"left":-1440*now});
	}
	// 设置按钮样式
	olli.forEach(function(li){
		li.className = "";
	})
	olli[now].className = "select";
}

function next(){
	now++;
	tab();
}

var timer = setInterval(next, 3000);

mover.onmouseover = function(){
	clearInterval(timer);
}

mover.onmouseout = function(){
	timer = setInterval(next, 3000);
}

$("li:has(#div3)").mouseenter(function(){
	$(this).css({"background":"white"});

	$(this).children("#div3").stop().fadeIn(500);
});

$("li:has(#div3)").mouseleave(function(){
	$(this).css({"background":""});
	$(this).children("#div3").stop().fadeOut(500);
});
/*------------small-------------*/
/*var small = document.getElementById("small");
var p = small.getElementsByTagName("p");
for(var i=0,l=p.length;i<l;i++){
	p[i].onmouseenter = function(){
		this.style.color = "gray";
	}
	p[i].onmouseleave = function(){
		this.style.color = "black";
	}
}*/
/*-------------hot---------------*/
var $img1 = $("#spanl img")
var $imgr = $("#spanr img")
var $spanl = $("#spanl");
var $spanr = $("#spanr");
var $ulq = $(".hot1 .ul1");
var $ulw = $(".hot1  .ul2");


$spanl.click(function(){
	$ulq.stop().fadeIn(1000);
	$ulw.stop().fadeOut(1000);
	
});
$spanl.mouseenter(function(){
	$spanl.css({"borderColor":"skyblue"});
});
$spanl.mouseleave(function(){
	$spanl.css({"borderColor":""});
});
$spanr.click(function(){
	$ulw.stop().fadeIn(1000);
	$ulq.stop().fadeOut(1000);
});
$spanr.mouseenter(function(){
	$spanr.css({"borderColor":"skyblue"});
});
$spanr.mouseleave(function(){
	$spanr.css({"borderColor":""});
});
/*--------------phone--------------*/
var $li = $(".phone2 li").not(":eq(4)");
$li.mouseenter(function(){
	$(this).stop().animate({
		marginTop:-3,
	},100);
});
$li.mouseleave(function(){
	$(this).stop().animate({
		marginTop:0,
	},100);
});
/*-----------数码配件shuma---------*/
var $span1 = $(".shuma1 span").slice(1,5);
var $ul1 = $(".shuma2 ul");
$span1.mouseenter(function(){
	$span1.removeClass("selected").eq($(this).stop().index()-1).addClass("selected");
	$ul1.stop().fadeOut().eq($(this).index()-1).stop().fadeIn();
});

var $li = $(".shuma2 li").not(":eq(4)");
$li.mouseenter(function(){
	$(this).stop().animate({
		marginTop:-3,
	},100);
});
$li.mouseleave(function(){
	$(this).stop().animate({
		marginTop:0,
	},100);
});
/*-------------手机周边around----------------*/
var $span2 = $(".around1 span").slice(1,4);
var $ul2 = $(".around2 ul");
$span2.mouseenter(function(){
	$span2.removeClass("selected").eq($(this).stop().index()-1).addClass("selected");
	$ul2.stop().fadeOut().eq($(this).index()-1).stop().fadeIn();
});

var $li = $(".around2 li").not(":eq(4)");
$li.mouseenter(function(){
	$(this).stop().animate({
		marginTop:-3,
	},100);
});
$li.mouseleave(function(){
	$(this).stop().animate({
		marginTop:0,
	},100);
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

/*------------购物车显示商品信息------------*/
getGoodsCookies(function(_name, obj){
	//购物车p标签 
	var p = document.createElement("p");
	cartbar.appendChild(p);
	p.id = "p"+obj.id;
	//图片
	var span1 = document.createElement("span");
	p.appendChild(span1);
	span1.innerHTML = "<img src='imgs1/"+obj.img+"' />";
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
$("#gouwu").mouseenter(function(){
	$("#cartbar").slideDown(200);
});
$("#gouwu").mouseleave(function(){
	$("#cartbar").slideUp(200);
});