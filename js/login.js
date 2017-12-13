/*---------ftop----------*/
var $spans = $("#ftop span");
$spans.mouseenter(function(){
	$(this).css({"color":"black"});
});
$spans.mouseleave(function(){
	$(this).css({"color":""});
});
$spans.mousedown(function(){
	$(this).css({"color":"#32a5e7"});
});
$("#hqyzm").click(function(){
	$("#tishi").fadeIn(200);
});
var $span = $("#tishi span");
$span.click(function(){
	$("#tishi").fadeOut(200);
});

$("#span1").click(function(){
	$("#form1").fadeOut(200);
	$("#form2").fadeIn(200);
	$("#span5").css({"color":"#32a5e7"});
});
$("#span2").click(function(){
	$("#form1").fadeIn(200);
	$("#form2").fadeOut(200);
	$("#span3").css({"color":"#32a5e7"});
});
/*--------登录cookie验证---------*/
var sjhm2 = document.getElementById("sjhm2");
var mm2 = document.getElementById("mm2");
var check = document.getElementById("check");
var denglu = document.getElementById("f2center5");
var str1 = getCookie("user");
var str2 = getCookie("password");
function userLogin(){
	sjhm2 = sjhm2.value;
	mm2 = mm2.value;
	if(sjhm2==str1&&mm2==str2){
		if(check.checked){
			setCookie("user",sjhm2,7);
			setCookie("password",mm2,7);
		}else{
			setCookie("user",sjhm2);
			setCookie("password",mm2);
		}
		window.location.href="index.html";
	}else{
		alert("手机号或密码错误！");
	}
	
}
denglu.onclick = function(){
		userLogin();
	}

