<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>แผนกบริหารคุณภาพ - Quality Management</title>
<link rel="icon" href="images/favicon.ico" /> 
<link rel="shortcut icon" href="images/favicon.ico" /> 
<style type="text/css">
body {
	background-image: url(images/bg_index.jpg);
	background-repeat: repeat-x;
	background-position:center center;
	background-attachment: fixed;
}

</style>
<link href="main.css" rel="stylesheet" type="text/css">
</head>

<body>
<? include ('include/header_contact_test.html'); ?>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
 <? 
 	$var=array_merge($_GET,$_POST);
	extract($var); 
include ('con_fig/db.php'); 
				$sql="SELECT * 
				FROM tb_contact";	
 				$query=mysql_query($sql);
				$row=mysql_fetch_array($query);
 ?>
  <tr>
    <td height="500" valign="top" class="text_black_normal"><?=stripslashes($row[contact_detail]);?></td>
  </tr>  
</table>
<? include ('include/footer_main.html'); ?>
</body>
</html>
