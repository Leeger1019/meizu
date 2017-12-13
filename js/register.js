var fcenter = document.getElementById("fcenter");
function myFunction2(){
	fcenter.style.borderColor="#32a5e7";
}
function myFunction22(){
	fcenter.style.borderColor="";
}
/*---------手机号密码验证------------*/
var sjhm = document.getElementById("sjhm");
var mm = document.getElementById("mm");
var tishis = document.getElementById("tishis");
var llzc = document.getElementById("fcenter4");
var arr = [];
var str;//存储手机号码的变量
var pass;//存储密码的变量
//验证手机号码
sjhm.onkeyup = function(){
		str = sjhm.value;
		if(str == ""){
			tishis.innerHTML = "内容不能为空";
			tishis.style.color = "red";
			
		}else if( /^1(3|5)\d{9}$/.test(str)){
			tishis.innerHTML = "成功";
			tishis.style.color = "#32A5E7";
			arr.push(str);
			
			
		}else{
			tishis.innerHTML = "必须为有效手机号码";
			tishis.style.color = "red";
			
		}
	}
//验证密码
mm.onkeyup = function(){
		pass = mm.value;
		if(pass == ""){
			tishis.innerHTML = "内容不能为空";
			tishis.style.color = "red";
		}else if( /^[^\/\\\^><-]{3,20}$/.test(pass) ){
			tishis.innerHTML = "成功";
			tishis.style.color = "#32A5E7";
			arr.push(pass);
		}else{
			tishis.innerHTML = "密码必须超过三位";
			tishis.style.color = "red";
		}
	}
/*------点击注册按钮--------*/

llzc.onclick = function(){
	
	var sum = 0;
	for(var i in arr){
		sum=sum+i;
	}
	if(sum==1){
		setCookie("user",str);
		setCookie("password",pass);
		window.location.href="login.html";
		}else{
			return false;
		}
}

