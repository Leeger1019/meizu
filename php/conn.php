<?php
$conn=@mysql_connect('localhost','root','548834');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	mysql_select_db('meizu');
	mysql_query('SET NAMES UTF8');
	
?>