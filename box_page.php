<?
	session_start();
	include 'con_fig/db.php';
	$var=array_merge($_GET,$_POST);
	extract($var);
	if($status=="add_page"){
		$detail=html_entity_decode($message);	
		stripslashes($detail);
		if(empty($detail)){
			echo"กรอกข้อมูลหน้าเว็บ";
			exit();
		}
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
function select_menu(menu_id,menu_name){
	$('#menu_id').val(menu_id);
}
</script>
</head>

<body>
<form action="save_code.php" method="post" enctype="multipart/form-data">
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
  <?
  		$sql="SELECT *
					FROM tb_menu
					WHERE tb_menu.menu_id = '".$menu_id."'";
		$query=mysql_query($sql);
		$row=mysql_fetch_array($query);
		$sql_main="SELECT 
								tb_menu.menu_name
								FROM tb_menu
								WHERE tb_menu.menu_order = '".$row[menu_main]."' 
								AND tb_menu.menu_main = 0";
		$query_main=mysql_query($sql_main);
		$row_main=mysql_fetch_array($query_main);
		
		$sql_page="SELECT * FROM tb_page
									WHERE
									tb_page.page_id='".$row[page_id]."'";
		$query_page=mysql_query($sql_page);
		$row_page=mysql_fetch_array($query_page);
  ?>
    <tr>
      <td colspan="2"> <?=$row_main[menu_name].">>".$row[menu_name]?>&nbsp;</td>
    </tr>
    <tr>
      <td align="left">หัวข้อ : <input type="text" name="menu_name" id="menu_name"  value="<?=$row[menu_name]?>"/></td>
    </tr>
    <tr>
      <td colspan="2">
      <textarea cols="80" id="message" name="message" rows="10" ><?=stripslashes($row_page[page_detail])?></textarea>
      <input name="menu_id" id="menu_id" type="hidden" value="<?=$menu_id?>" />
      <input name="cate_id" id="cate_id" type="hidden" value="<?=$row[cate_id]?>" />
      <input name="cmd"  id="cmd" type="hidden" value="<?=$cmd?>" />
      </td>
    </tr>
  </table>
</form>
<script type="text/javascript">
	//<![CDATA[
   CKEDITOR.replace( 'message',{
	language : 'en',
	height : 350,
	filebrowserBrowseUrl : './ckeditor/ckfinder/ckfinder.html',
	filebrowserImageBrowseUrl : './ckeditor/ckfinder/ckfinder.html?Type=Images',
	filebrowserFlashBrowseUrl : './ckeditor/ckfinder/ckfinder.html?Type=Flash',
	filebrowserUploadUrl : './ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
	filebrowserImageUploadUrl : './ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
	filebrowserFlashUploadUrl : './ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'
	} );
	//]]>
</script>
</body>
</html>