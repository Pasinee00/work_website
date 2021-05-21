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
<form action="save_contact.php" method="post" enctype="multipart/form-data">
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
  <?
  	    $sql="SELECT * FROM tb_contact";
		$query=mysql_query($sql);
		$row=mysql_fetch_array($query);
		$num=mysql_num_rows($query);
		if($num==0){
			$status="add";
		}else{
			$status="update";
		}
		
  ?>
    <tr>
      <td bgcolor="#CCCCCC">ข้อมูลการติดต่อแผนกบริหารคุณภาพ</td>
    </tr>
    <tr>
      <td>
      <textarea cols="80" id="message" name="message" rows="10" ><?=stripslashes($row[contact_detail])?></textarea>
      <input name="status"  id="status" type="hidden" value="<?=$status?>" />
      <input name="contact_id"  id="contact_id" type="hidden" value="<?=$row[contact_id]?>" />
      </td>
    </tr>
  </table>
  <br />
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