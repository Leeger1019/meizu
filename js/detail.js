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

/*----------detail详情------------*/
// 在url中，获取参数id的值
var id = query("id");
//alert(id);
// 在db.js中，根据id，获取商品对象
var obj = getGoods(id);
//alert(obj);
//console.log( obj );

imgleft.src = imgright.src = "images/imgs1/"+obj.img;
var $p1 = $("<p>"+obj.title+"</p>");
	$("#texttop").append($p1);
			var $p2 = $("<p>"+obj.content+"</p>");
	$("#texttop").append($p2);
			var $p3 = $("<p>"+"价	格： ￥"+obj.price+"</p>");
	$("#texttop").append($p3);
	/*-----------创建小图标节点--------------*/
	/*var $imgsm1 = $("<img src='images/imgs1/10.jpg' />");
	$("#imgsmall").append($imgsm1);
	var $imgsm2 = $("<img src='images/imgs1/13.jpg' />");
	$("#imgsmall").append($imgsm2);
	var $imgsm3 = $("<img src='images/imgs1/14.jpg' />");
	$("#imgsmall").append($imgsm3);
	var $imgsm4 = $("<img src='images/imgs1/4.jpg' />");
	$("#imgsmall").append($imgsm4);*/
	var arr1 = obj.imgs;
	//alert(arr1);
	var l =arr1.length;
	//alert(l);
	$.each(arr1, function(ind) {
		var $img = $("<img src=images/imgs1/"+arr1[ind]+" />");
		$("#imgsmall").append($img);
	});
	/*-----------点击小图片切换--------------*/	
			$imgs=$("#imgsmall").children('img');
			$imgs.click(function(){
				//alert($(this).attr('src'));
				$("#imgleft").attr({'src':$(this).attr('src')})
			})
divleft.onmousemove = function(e){
	e = e || window.event;
	var x = e.clientX - divleft.offsetLeft;
	var y = e.clientY - divleft.offsetTop;
	// 让鼠标处于glass的中心
	x -= 150;
	y -= 150;
	// 边界处理
	if(x<0){x=0}
	if(y<0){y=0}
	if(x>divleft.offsetWidth-glass.offsetWidth){x=300}
	if(y>300){y=300}
	// glass 跟随鼠标移动
	glass.style.left = x+"px";
	glass.style.top = y+"px";
	// imgright坐标更新
	imgright.style.left = x*-4 + "px";
	imgright.style.top = y*-4 + "px";
}

divleft.onmouseover = function(){
	glass.style.display = "block";
	divright.style.display = "block";
}

divleft.onmouseout = function(){
	glass.style.display = "none";
	divright.style.display = "none";
}


// 获取url中的参数
function query(_name){
	var str = location.search;
	if( str != "" ){
		str = str.substr(1);	// 将第一个字符？去掉
		var arr = str.split("&");	// 转换为数组
		for( var i=0,l=arr.length; i<l; i++ ){
			var col = arr[i].split("=");
			if( col[0] == _name ){
				return col[1];
			}
		}
		return "";
	}else{
		return "";
	}
}
// 根据id，获取对象
function getGoods(id){
	var arr = db.list;
	//alert(arr);
	for( var i=0,l=arr.length; i<l; i++ ){
		var obj = arr[i];
		if( obj.id == id ){
			return obj;
		}
	}
}

/*-----------foot---------------*/
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