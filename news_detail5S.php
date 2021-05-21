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
<?
	function check_date($y){
	$day=explode('-',$y);
	return $day[2]."/".$day[1]."/".$day[0];
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta charset="utf-8">
<title>กิจกรรม 5 ส.</title>
<link href="main.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="scripts/5scss.css" />
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script type="text/javascript" src="function.js"></script>
<script type="text/javascript" src="scripts/sdmenu.js">	</script>
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
		background-image: url(images/bg_purple.jpg);
		background-repeat: repeat-x;
		background-position: center center;
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
		color: #F00;
	}
	a:hover {
		color: #00F;
	}
	a:active {
		color: #00F;
	}
</style>
</head>

<body>
<? include ('include/header_5s.html'); ?>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="7" background="images/bgtab_purple.jpg">
  <tr>
    <td width="190" height="600" valign="top"> <? include ('include/menu_5s.php'); ?></td>
    <td width="680" valign="top" <?php /* class="margin_white" */?> bgcolor="#FFFFFF">
    <table width="100%" border="0" cellspacing="5" cellpadding="0">
     <tr>
        <td class="topic_purple">รายละเอียดบทความ</td>
      </tr>
      <?
	  	$sql="SELECT
					tb_news.news_id,
					tb_news.news_title,
					tb_news.news_detail,
					tb_news.cate_id,
					tb_news.news_date,
					tb_news.news_file
					FROM
					tb_news
					WHERE
					tb_news.news_id='".$news_id."'";
					$query=mysql_query($sql);
					$row=mysql_fetch_array($query);
	  ?>
       <tr>
        <td align="right" >วันที่<?=check_date($row[news_date])?></td>
      </tr>
      <tr>
        <td align="left">&nbsp;&nbsp; &nbsp;  <? if($row[news_file]!=""){?> <iframe src="<?=$row[news_file]?>" type=frame&vlink=xx&link=xx&css=xxx&bg=xx&bgcolor=xx marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scorlling=yes width=680 height=560></iframe><? }else{ echo stripslashes($row[news_detail]);}?></td>
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
<? include ('include/footer_5s.html'); ?>
</body>
</html>