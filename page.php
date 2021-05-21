<?
	session_start();
	$var=array_merge($_GET,$_POST);
	extract($var);
	include 'con_fig/db.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script src="SpryAssets/SpryMenuBar.js" type="text/javascript"></script>
<script>
function select_menu(menu_id){
	$('#f_content').attr("src","menu/page_show.php?menu_id="+menu_id+"&xid="+Math.random());
}
function getHeight(h){
	alert('dddd');
   if(h=='0'){
	 alert('ไม่มีข้อมูล');  
	 $('#f_content').height(150);
   }else{
	$('#f_content').height(h);
   }
}
</script>
<style>
body{
	font-family: "ms Sans Serif";
	font-size: small;
}
</style>
<link href="SpryAssets/SpryMenuBarHorizontal.css" rel="stylesheet" type="text/css" />
</head>
<body>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
<?
	$sql="SELECT tb_frame.frame_img
				FROM
				tb_frame
				WHERE
				tb_frame.cate_id='".$cate_id."'
				AND frame_type=1 ";
	$query=mysql_query($sql);
	$row=mysql_fetch_array($query);
?>
  <tr>
    <td width="20%" colspan="2"><img src="<?=$row[frame_img]?>" title="<?=$row[frame_title]?>" width="1250" height="250" /></td>
  </tr>
  <tr>
    <td><ul id="MenuBar1" class="MenuBarHorizontal">
    <?
			$sql="SELECT * FROM tb_menu
							WHERE tb_menu.cate_id='".$cate_id."'
							AND tb_menu.menu_main = 0";
			$query=mysql_query($sql);
			while($row=mysql_fetch_array($query)){
	?>
      <li><a class="MenuBarItemSubmenu" href="#"><?=$row[menu_name]?></a>
        <ul>
            <?
					$sql_type="SELECT * FROM tb_menu
											WHERE tb_menu.cate_id='".$cate_id."'
											AND tb_menu.menu_main != 0
											AND tb_menu.menu_main = '".$row[menu_order]."' ";
					$query_type=mysql_query($sql_type);
					while($row_type=mysql_fetch_array($query_type)){
			?>
          <li><a  onclick="select_menu('<?=$row_type[menu_id]?>')"><?=$row_type[menu_name]?></a></li>
          <?
					}
		  ?>
        </ul>
      </li>
   <?
			}
    ?>
    </ul>
    </td>
    <td><a href="logout.php">Logout</a></td>
  </tr>
  <tr>
    <td colspan="2" height="500px"><iframe id="f_content" name="f_content" width="100%" height="100%" frameborder="0"></iframe>&nbsp;</td>
  </tr>
<?
	$sql="SELECT tb_frame.frame_img
				FROM
				tb_frame
				WHERE
				tb_frame.cate_id='".$cate_id."'
				AND frame_type=2 ";
	$query=mysql_query($sql);
	$row=mysql_fetch_array($query);
?>
  <tr>
    <td colspan="2"><img src="<?=$row[frame_img]?>" title="<?=$row[frame_title]?>" width="1250" height="20" /></td>
  </tr>
</table>
<script type="text/javascript">
var MenuBar1 = new Spry.Widget.MenuBar("MenuBar1", {imgDown:"SpryAssets/SpryMenuBarDownHover.gif", imgRight:"SpryAssets/SpryMenuBarRightHover.gif"});
</script>
</body>
</html>