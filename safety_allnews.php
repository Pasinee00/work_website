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
<title>ความปลอดภัย</title>
<link href="main.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="scripts/safetycss.css" />
<script type="text/javascript" src="scripts/sdmenu.js">	</script>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script type="text/javascript" src="function.js"></script>
<script type="text/javascript">
	var myMenu;
	window.onload = function() {
		myMenu = new SDMenu("iso_menu");
		myMenu.init();
	};
</script>
<style type="text/css">
	body {
				font-family: Arial, sans-serif;
				font-size: 13px;
				margin-left: 0px;
				margin-top: 0px;
				margin-right: 0px;
				margin-bottom: 0px;
				background-image: url(images/bg_yellow.jpg);
				background-repeat: repeat-x;
				background-position:center center;
				background-attachment: fixed;
		}
	td{
		font-family:"MS Sans Serif";
		font-size:small;
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
	a:visited {
		color: #000;
		text-decoration: none;
	}
	a:hover {
		color: #FFF;
		text-decoration: none;
	}
	a:active {
		color: #03C;
		text-decoration: none;
	}
		a:link {
		color: #F00;
		text-decoration: none;
	}
</style>
</head>

<body>
<? include ('include/header_safety.html'); ?>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="7" background="images/bgtab_yellow.jpg">
  <tr>
    <td width="190" height="600" valign="top"> <? include ('include/menu_safety.php'); ?></td>
    <td width="680" valign="top" class="margin_white"><table width="100%" border="0" cellspacing="5" cellpadding="0">
      <tr>
      <td class="topic_yellow">ข่าวสารทั้งหมด</td>
      </tr>
      <tr>
      	<td>
      <? 
	  	$sql="SELECT
					tb_news.news_id,
					tb_news.news_title,
					tb_news.news_detail,
					tb_news.news_localtion,
					tb_news.cate_id,
					tb_news.news_date,
					tb_news.news_check
					FROM
					tb_news
					WHERE
					tb_news.cate_id='".$cate_id."'
					ORDER BY
					tb_news.news_date DESC,
					tb_news.order_new ASC";
					$query=mysql_query($sql);
					$num=mysql_num_rows($query);
					echo "<table border=\"1\" cellspacing=\"1\" cellpadding=\"1\" bordercolor=\"#FFCC00\"width=\"100%\" <tr  width=\"25%\"> ";
					$i=0;
				while($row=mysql_fetch_array($query)){
					echo "<td align=\"center\" width=\"15px\">";
					$i++;
	  			if($row[news_localtion]=="upfile_ISO/" || $row[news_localtion]=="upfile_5s/" || $row[news_localtion]=="upfile_safety/"){
	    ?>
       			<img src="images/no-photo.jpg" height="80" width="80" >
       <?
				}else if($row[news_localtion]!=""){
		?>
        <img src=<?=$row[news_localtion]?> height="80" width="80">
        <?
				}
	    echo "</td>";
		echo "<td width=\"500px\">";
	   ?>
       <a href="news_detailSafety.php?news_id=<?=$row[news_id]?>&cate_id=<?=$row[cate_id] ?>" >  <?=$row[news_title] ?></a>
       <?
	   		if($row[news_check]==1){
		?>
        <img src="images/new_icon.gif" width="30" height="20" />
        <?		
			} 
			echo "</td>";  
			if(($i)%1==0){
				echo  "</tr>";
			}
        }//while
		echo"</tr></table>"; 
		?> 
        </td>
	</tr>
    </table></td>
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
<? include ('include/footer_safety.html');?>
</body>
</html>