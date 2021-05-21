<?
	session_start();
	include '../con_fig/db.php';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<style>
body{
	background-color:#F0EBE2;
	font-family: "ms Sans Serif";
	font-size: small;
}
</style>
<body>
<table width="252" border="0" cellpadding="1" cellspacing="1">
  <tr>
    <td width="150" height="25">ชื่อเมนู</td>
    <td width="286">
    <?
			$sql_menu="SELECT
										tb_menu.menu_id,
										tb_menu.menu_name
										FROM tb_menu
										WHERE tb_menu.menu_id='".$menu_id."' ";
			$query_menu=mysql_query($sql_menu);
			$row_menu=mysql_fetch_array($query_menu);
	?>
    <input type="text" name="main_name" id="main_name" value="<?=$row_menu[menu_name]?>"/>
    </td>
  </tr>
      <?
	  		$sql="SELECT * FROM tb_category
							WHERE tb_category.cate_id='".$cate_id."'
							ORDER BY tb_category.cate_id ASC";
			$query=mysql_query($sql);
			$row=mysql_fetch_array($query);
	  ?>
     <input type="hidden" name="cate_id" id="cate_id" value="<?=$row[cate_id]?>"/>
     <input name="menu_id"  id="menu_id" type="hidden" value="<?=$menu_id?>"/>
  <tr>
    <td>&nbsp;</td>
    <td>
    <input type="submit" name="button" id="button" value="ตกลง" onclick="parent.add_main();"/>
    <input type="submit" name="button2" id="button2" value="ยกเลิก" onclick="parent.close_frm_order();"/>
    </td>
  </tr>
</table>
</body>
</html>