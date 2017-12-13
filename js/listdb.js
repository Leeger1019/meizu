/*
 * 	商品列表通过ajax获取
 *  url: 待载入页面的URL地址
 * 	data: 待发送 Key/value参数
 *  callback: 载入成功时回调函数
 */
$(function(){
	$.get('data/db.json',function(str){
		var arr = str.list;
		//console.log(arr);
		$.each(arr, function(key,val) {
			//console.log(arr[key].title); 测试获取标题
			var $li = $("<li></li>");
			var $a = $("<a></a>");
			$a.attr({'href':'detail.html?id=' +arr[key].id});//给a标签添加href方式
			var $img = $("<img src=images/imgs1/"+arr[key].img+">");
			$a.append($img);
			$li.append($a);
			var $div1 = $("<div class='divs'></div>");
			$li.append($div1);
			
			var $img1 = $("<img src=images/imgs1/1-1.jpg>");
			var $img2 = $("<img src=images/imgs1/1-2.jpg>");
			var $img3 = $("<img src=images/imgs1/1-3.jpg>");

			var $p1 = $("<p>"+arr[key].title+"</p>");
			var $p2 = $("<p>"+arr[key].content+"</p>");
			var $p3 = $("<p>"+"￥"+arr[key].price+"</p>");
			$div1.append($img1);
			$div1.append($img2);
			$div1.append($img3);
		/*-----------点击小图片切换--------------*/	
			$imgs=$div1.children('img');
			$imgs.click(function(){
				//alert($(this).attr('src'));
				$img.attr({'src':$(this).attr('src')})
			})
			$li.append($p1);
			$li.append($p2);
			$li.append($p3);
			
			$("#shouji").append($li);
			/*--------------实现小图片的点击切换----------------*/
/*			var huoqu = divs.getElementsByTagName("img");
	for(var i=0,l=huoqu.length;i<l;i++){
		huoqu[i].onclick = function(){
			qiehuan.src = this.src;
		}
	}*/
		});
	});
	
	
});

