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
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
$(function(){
	 var h=$(document).height();
	 parent.getHeight(h+10);	
});
</script>
</head>

<body>
<?
	$sql_select="SELECT
								tb_menu.page_id
								FROM
								tb_menu
								WHERE
								tb_menu.menu_id='".$menu_id."' ";
	$query_select=mysql_query($sql_select);
	$row_select=mysql_fetch_array($query_select);
	$sql="SELECT
					tb_page.page_id,
					tb_page.page_detail,
					tb_page.page_url
					FROM
					tb_page
					WHERE
					page_id='".$row_select[page_id]."' ";
	$query=mysql_query($sql);
	$row=mysql_fetch_array($query);
	echo stripslashes($row[page_detail]);
?>
</body>
</html>