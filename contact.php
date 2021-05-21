<?
	session_start();
	$var=array_merge($_GET,$_POST);
	extract($var);
	include 'con_fig/db.php';
	if($status=="login"){
		$sql="SELECT * FROM tb_user WHERE username='".$username."' AND password='".$password."' ";
		$result=mysql_query($sql);
		$num_doc  = mysql_num_rows($result);
		$row=mysql_fetch_array($result);
		$_SESSION['username'] = $row[username];	
		if($num_doc==0){
			echo "0||ไม่มีข้อมูลในระบบ||".$row[user_type];
		}else{
			echo "1||ยินดีต้อนรับ||".$row[user_type];
		}
		exit();
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<title>แผนกบริหารคุณภาพ - Quality Management</title>
<link rel="icon" href="images/favicon.ico" /> 
<link rel="shortcut icon" href="images/favicon.ico" /> 
<link href="main.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script type="text/javascript" src="function.js"></script>
<style type="text/css">
body {
	background-image: url(images/bg_index.jpg);
	background-repeat: repeat-x;
	background-position:center center;
	background-attachment: fixed;
}
#popTagLogin{
	width:450px;
	height:180px;
	
	top:50%;
	left:50%;
 	margin-top:-150px;
	margin-left:-150px;

	position:absolute;
	background-color:transparent;
}
#popTagLogin{
	display:none;
}
a img  
	{  
	border: none;  
	} 
</style>
</head>

<body>
<? include ('include/header_main.html'); ?>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
 <? 
 	
				$sql="SELECT * 
				FROM tb_contact";	
 				$query=mysql_query($sql);
				$row=mysql_fetch_array($query);
 ?>
  <tr>
    <td height="500" valign="top" class="text_black_normal"><?=stripslashes($row[contact_detail]);?></td>
  </tr>  
</table>
<div id="popTagLogin">
  <table width="294" height="73%" border="1" cellpadding="0" cellspacing="0">
    <tr>
      <td height="31"></td>
      <td  bgcolor="#FFFFFF" width="300" align="left" valign="middle" >&nbsp;<img src="images/x.png" align="top" style="cursor:pointer" onclick="close_frm_Login()" />&nbsp;&nbsp;        &nbsp;<img src="images/key.png" width="32" height="32" /><b>เข้าสู่ระบบ</b></td>    
      <td ></td> 
    </tr>
    <tr bgcolor="#F0EBE2">
      <td></td>
      <td valign="top" bgcolor="#FFFFFF"><iframe frameborder="0" id="ifr_popTagLogin"></iframe></td>
      <td ></td>
    </tr>
    <tr bgcolor="#F0EBE2">
      <td height="2"></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div>  
<? include ('include/footer_main.html'); ?>
</body>
</html>
