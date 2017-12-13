/*
 * 功能：设置cookie
 * 参数：
 * 	_name	cookie名称
 * 	_value	该cookie名称所对应的数据
 * 	_date	该cookie的过期时间，单位天
 * 返回值：无
 * 示例：
 * 	setCookie("a", "10", 1);	创建或修改一个cookie，名称叫做a，值为"10"，过期时间为1天后
 *	setCookie("a", "10"); 		创建或修改一个cookie，过期时间为会话（会话指页面打开到关闭的时间有效）
 *	setCookie("a", "10", -1);	删除名称叫做a的这个cookie
 */
function setCookie(_name, _value, _date){
	// 创建一个对象
	var obj = {
		"tmp" : _value
	}
	//console.log( "obj : ", obj );
	// 将对象转为字符串
	var str = JSON.stringify(obj);	// str='{"tmp":_value}'
	//console.log( "str : ", str );
	str = encodeURIComponent(str);	// 中文编码
	//console.log( "str : ", str );
	// 存储cookie 
	if( _date ){	// 如果有输入这个参数，则表示设置一个具体的时间
		var d = new Date();
		d.setDate( d.getDate()+_date );
		document.cookie = _name+"="+str+"; path=/; expires="+d.toGMTString();
	}else{	// 没有设置_date这个参数时，创建和修改的cookie的过期时间为会话
		document.cookie = _name+"="+str+"; path=/;";
	}
}


/*
 * 功能：获取cookie
 * 参数：
 * 	_name 指cookie名称
 * 返回值：存储的内容
 * 示例：
 * 	getCookie("a")
 */
function getCookie(_name){
	// 找到所有的cookie
	var str = document.cookie;	// str="a=1; b=2; c=3"
	// 字符串转数组
	var arr = str.split("; ");// 注意分号后面有一个空格	arr = ["a=1", "b=2", "c=3"]
	// 循环
	for( var i=0,l=arr.length; i<l; i++ ){
		var col = arr[i].split("=");	// arr[i]="a=1"		col = ["a", "1"]
		if( col[0] == _name ){
			//return decodeURIComponent(col[1]);	// 下标0指cookie名称，下标1指cookie值
			// _name所对应的cookie
			//console.log("col[1] : ", col[1]);
			var str = decodeURIComponent(col[1]);
			//console.log("str : ", str);
			// 字符串转为json对象
			var obj = JSON.parse(str);
			//console.log("obj : ", obj);
			// 在json对象中，获取tmp属性
			return obj.tmp;
		}
	}
	// 如果循环结束后，也没有找到_name，直接返回空
	return "";	// 如果此处不写，则返回undefined
}


// 在所有的cookie中，找到购物车商品cookie
function getGoodsCookies( fn ){
	var str = document.cookie;
	var arr = str.split("; ");
	var num = 0;	// 商品数量
	// 对所有的cookie循环
	for( var i=0,l=arr.length; i<l; i++ ){
		var col = arr[i].split("=");
		// 找到我们想要的购物车中的商品cookie
		if( /^j\d+$/.test(col[0]) ){	// 这个条件成立多少次，fn函数就执行多少次，所以getGoodsCookies函数具备循环功能
			// 因为最初存储cookie时，有编码，所以现在要解码
			var str = decodeURIComponent(col[1]);
			// 字符串转为json对象
			var obj = JSON.parse(str);
			// 在json对象中，获取tmp属性，tmp属性才是我们真正保存的数据
			var v = obj.tmp;
			fn( col[0],  v);	// 执行函数
			// 所有商品的总数量
			num += v.num;
		}
	}	
	return num;
}