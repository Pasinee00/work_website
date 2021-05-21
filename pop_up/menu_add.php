<?
	session_start();
	$var=array_merge($_GET,$_POST);
	extract($var);
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
    <td width="150">ชื่อเมนู</td>
    <td width="286">
    <input type="text" name="menu_name" id="menu_name" />
    <input type="hidden" name="menu_id" id="menu_id" value="<?=$menu_id?>"/>
    </td>
  </tr>
    <tr>
    <td width="150">ประเภท</td>
    <td width="286">
   <select id="type">
   <option value="">--เลือกประเภท--</option>
   <option value="1">บทความ</option>
   <option value="2">ดาวโหลด</option>
   </select>
    </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><input type="submit" name="button" id="button" value="ตกลง" onclick="parent.add_menu();"/>
      <input type="submit" name="button2" id="button2" value="ยกเลิก" onclick="parent.close_frm_order();"/></td>
  </tr>
</table>
</body>
</html>