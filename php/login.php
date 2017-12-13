<?php
	 require 'conn.php';
     $username = $_POST['username'];
     $query =" select * from user where username = '$username' ";
     $result = mysql_query($query);
     if(mysql_fetch_array($result)){
    	echo true;
    }else{
    	echo false; 
    } 
?>