<?
session_start();
include ("con_fig/db.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<style>
body{
	background-color:#EFEFF0; 
	font-family: "ms Sans Serif";
	font-size: small;
}
</style>
<body>
<table width="100%" border="0">
  <tr>
    <td width="10%" align="left" valign="middle" bgcolor="#EFEFF0" style="font-family: 'ms Sans Serif'; font-size: large; font-weight: bold; color: #000;">รายการหมวดหมู่</td>
    <td width="89%" align="left">
    <img src="icon/add.png" width="30" height="30" onclick="parent.cate_select();"/>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center"><table width="50%" border="1" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">รายการ</td>
        <td width="60" align="center">แก้ไข</td>
        <td width="60" align="center">ลบ</td>
        </tr>
        <?
			$sql="SELECT
							tb_category.cate_id,
							tb_category.cate_name
							FROM tb_category
							ORDER BY tb_category.cate_id ASC";
			$query=mysql_query($sql);
			while($row=mysql_fetch_array($query)){
		?>
      <tr>
        <td><?=$row[cate_name]?>&nbsp;</td>
        <td align="center" onclick="parent.edit_cate('<?=$row[cate_id]?>');"><img src="icon/cut.png" width="20" height="20" /></td>
        <td align="center" onclick="parent.del_cate('<?=$row[cate_id]?>');"><img src="icon/delete.png" width="20" height="20" /></td>
      </tr>
      <?
			}
	  ?>
    </table></td>
  </tr>
  <tr>
    <td colspan="2" align="center">&nbsp;</td>
  </tr>
</table>
</body>
</html>