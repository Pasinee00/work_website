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
     function safety($safetylink){
		if($safetylink==""){
			return ""; 
		}else{
			$d=explode('-',$safetylink);
			return $d[2]."/".$d[1]."/".$d[0];
			}
	}
?>
<?
 function sS($fiveS){
	 if($fiveS==""){
	 return "";
	 }else{
		 $s=explode('-',$fiveS);
		 return $s[2]."/".$s[1]."/".$s[0];
		 }
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<title>ความปลอดภัย</title>
<link href="main.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="scripts/safetycss.css" />
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
	a:link {
		color: #00F;
	}
	a:visited {
		color: #F00;
	}
	a:hover {
		color: #FFF;
	}
	a:active {
		color: #000;
	}
	a img  
	{  
	border: none;  
	} 
</style>
</head>

<body>
<? include ('include/header_safety.html'); ?>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="7" background="images/bgtab_yellow.jpg">
  <tr>
    <td width="190" height="600" valign="top"> <? include ('include/menu_safety.php'); ?></td>
    <td width="680" valign="top" class="margin_white">
      <table width="99%" border="0" cellspacing="5" cellpadding="0"  bgcolor="#FFFFFF">
           <?
			$sql_menu="SELECT *
						FROM
						tb_menu
						WHERE
						menu_id='".$menu_id."' ";
			$query_menu=mysql_query($sql_menu);
			$row_menu=mysql_fetch_array($query_menu);
	  ?>
      <tr>
        <td class="topic_yellow"><?=$row_menu[menu_name]?></td>
      </tr>
          <?
			$sql="SELECT
						tb_page.page_id,
						tb_page.page_detail,
						tb_page.page_url,
						tb_page.page_title
						FROM
						tb_page
						WHERE
						page_id='".$page_id."' ";
			$query=mysql_query($sql);
			$row=mysql_fetch_array($query);
	  ?>
      <tr>
        <td class="text_black_normal"><?=stripslashes($row[page_detail]);?></td>
      </tr>
     <? $sql_page="SELECT
										tb_link.link_id,
										tb_link.link_detail,
										tb_link.link_name,
										tb_link.link_localtion,
										tb_link.menu_id,
										tb_link.link_date
										FROM
										tb_link
										WHERE
										tb_link.menu_id='".$menu_id."' 
										ORDER BY 
										tb_link.link_date DESC";
			$query_page=mysql_query($sql_page);
			$num=mysql_num_rows($query_page);
			if($num!=0){
			$i;
	?>
      <tr>
        <td class="topic_yellow">File Download</td>
      </tr>
      <tr>
        <td class="text_black_normal"><table width="667" border="0" cellpadding="0" cellspacing="0">
        <tr>
        <td width="29" bgcolor="#FFFF00">ลำดับ</td>
      	<td width="346" align="center" bgcolor="#FFFF00">รายการ</td>
        <td width="128" align="center" bgcolor="#FFFF00">ชื่อไฟล์</td>
        <td width="71" align="center" bgcolor="#FFFF00">วันที่อัพไฟล์</td>
        <td width="98" align="center" bgcolor="#FFFF00">ดาวน์โหลด</td>
        </tr>
		<?
			while($row_page=mysql_fetch_array($query_page)){
			$i++;
	  ?>
          <tr>
          	<td><?=$i?></td>
          	<td><?= $row_page[link_detail]?></td>
            <td width="128"><?=$row_page[link_name]?>&nbsp;</td>
            <td width="87" align="center"><?=sS($row_page[link_date])?>&nbsp;</td>
            <td align="center"><a href="download.php?link_localtion=<?=$row_page[link_localtion]?>">&gt;&gt;Download&lt;&lt;</a></td>
          </tr>
      <?
			}
			}//if
	  ?>
        </table></td>
      </tr>
    </table>
    </td>
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
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div>  
<? include ('include/footer_safety.html'); ?>
</body>
</html>