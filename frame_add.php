<?
	session_start();
	include 'con_fig/db.php';
	$var=array_merge($_POST,$_GET);
	extract($var);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
function add_frame(){
	var img_up=$('#img_up').val();
	var frame_title=$('#frame_title').val();
	var cate_id=$('#cate_id').val();
	var frame_type=$('#frame_type').val();

	if(img_up==""){
		alert('เลือกรูปภาพ');
		$('#img_up').select();
		return false;
	}else if(frame_type==""){
		alert('ระบุ ชนิด');
		$('#frame_type').select();
		return false;
	}else if(cate_id==""){
		alert('ระบุหมวดหมู่');
		$('#cate_id').select();
		return false;
	}else{
			$('#f_upload').attr('action','frame_add.php?status=add_frame');	
			$('#f_upload').submit();
	}
}
</script>
<style>
body{
	background-color:#F0EBE2;
	font-family: "ms Sans Serif";
	font-size: small;
}
</style>
<body>
<form  action="" method="post" enctype="multipart/form-data" name="f_upload" id="f_upload">
<?
if($status=="add_frame"){
			$name=$_FILES["img_up"]["name"];
			$tmp_name=$_FILES["img_up"]["tmp_name"];
			$path="tempfile/".$name;
			$extension = strrchr($name,'.');
			if($extension==".jpg" || $extension==".png" || $extension==".gif"){
			
			move_uploaded_file($tmp_name,$path);

			$sql_frame="SELECT * FROM tb_frame
										WHERE tb_frame.cate_id ='".$cate_id."'
										AND tb_frame.frame_type='".$frame_type."' ";
			$query_frame=mysql_query($sql_frame);
			$row_frame=mysql_fetch_array($query_frame);
			$num_frame=mysql_num_rows($query_frame);
 			 if($num_frame>=1){	
							$sql_update="UPDATE tb_frame SET 
														frame_img='".$path."',
														frame_title='".$frame_title."',
														cate_id='".$cate_id."',
														frame_type='".$frame_type."'
														WHERE frame_id='".$row_frame[frame_id]."' ";
							$query_update=mysql_query($sql_update);
			}else{ 
							$sql_insert="INSERT INTO tb_frame SET 
														frame_img='".$path."',
														frame_title='".$frame_title."',
														cate_id='".$cate_id."',
														frame_type='".$frame_type."' ";
							$query_insert=mysql_query($sql_insert);
			 }
 			echo "<script>parent.close_frame();</script>";
			exit();  
			}else{
				echo "<script>alert('ไม่สามารถอัพไฟล์นามสกุล $extension นี้ได้');</script>";
				echo "<script>parent.close_frame();</script>";
				exit();  
			}
	}
?>
<table width="283" border="0" cellpadding="1" cellspacing="1">
  <tr>
    <td width="57">ชื่อเมนู</td>
    <td colspan="3"><input type="file" name="img_up" id="img_up" /></td>
  </tr>
  <tr>
    <td>คำอธิบาย</td>
    <td colspan="3"><input type="text" name="frame_title" id="frame_title" /></td>
  </tr>
  <tr>
    <td>หมวดหมู่</td>
    <td width="45">
    <select name="cate_id" id="cate_id">
    <?php /*   <option value="">- - - เลือก - - -</option> */?>
      <?
	  		$sql="SELECT * FROM tb_category
							WHERE cate_id='".$_SESSION['cate_id']."'
							ORDER BY tb_category.cate_id ASC";
			$query=mysql_query($sql);
			while($row=mysql_fetch_array($query)){ 
	  ?>
      <option value="<?=$row[cate_id]?>"><?=$row[cate_name]?></option>
      <?
			}
	  ?>
    </select>
    </td>
    <td width="24">ชนิด</td>
    <td width="144">
    <select name="frame_type" id="frame_type">
      <option value="1">Header</option>
      <option value="2">Footer</option>
    </select>
    </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td colspan="3"><input type="button" name="Button" id="button" value="ตกลง" onclick="add_frame();"/>
    <input type="submit" name="button2" id="button2" value="ยกเลิก" onclick="parent.close_frm_order();"/></td>
  </tr>
</table>
</form>
</body>
</html>