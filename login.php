<?
	session_start();
	$var=array_merge($_POST,$_GET);
	extract($var);
	$_SESSION['cate_id'] = $cate_id;	
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
$(document).ready(function(e) {
    $('#username').select();
});
</script>
<style>
body{
	background-color:#EFEFEF;
	font-family: "ms Sans Serif";
	font-size: small;
}
.textB{
	background-color:#BFBFBF;
	font-family: "ms Sans Serif";
	font-size: small;
}
</style>
<body>
<table width="276" border="0">
  <tr>
    <td bgcolor="#EFEFEF">USERNAME</td>
    <td><input name="username"  class="textB" type="text" id="username" size="20" /></td>
  </tr>
  <tr>
    <td bgcolor="#EFEFEF">PASSWORD</td>
    <td><input name="password"  class="textB" type="password" id="password" size="20" /></td>
  </tr>
  <tr>
    <td></td>
    <td>
    <input name="cate_id" type="hidden" id="cate_id" value="<?=$cate_id?>" />
    <input type="submit" name="button" id="button" value="LOGIN"  onclick="parent.login();" />
    <input type="submit" name="button2" id="button2" value="EXIT"  onclick="parent.close_frm_Login();"/></td>
  </tr>
</table>
</body>
</html>