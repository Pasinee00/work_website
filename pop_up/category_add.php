<?
	include '../con_fig/db.php';
	$sql="SELECT
					tb_category.cate_id,
					tb_category.cate_name
					FROM tb_category
					WHERE tb_category.cate_id='".$cate_id."' ";
	$query=mysql_query($sql);
	$row=mysql_fetch_array($query);
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
<table width="298" border="0" cellpadding="1" cellspacing="1">
  <tr>
    <td width="52">ชื่อ</td>
    <td width="239">
      <input type="text" name="cate_name" id="cate_name" value="<?=$row[cate_name]?>" />
      <input type="hidden" name="cate_id" id="cate_id" value="<?=$row[cate_id]?>" />
      </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><input type="submit" name="button" id="button" value="ตกลง" onclick="parent.add_cate();"/>
      <input type="reset" name="button2" id="button2" value="ยกเลิก" onclick="parent.close_frm_order();"/></td>
  </tr>
</table>
</body>
</html>