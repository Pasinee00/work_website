
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?

	$var=array_merge($_GET,$_POST);
	extract($var);
	include '../con_fig/db.php';
	  	$sql="SELECT *
					FROM tb_menu
					WHERE tb_menu.menu_id = '".$menu_id."'";
		$query=mysql_query($sql);
		$row=mysql_fetch_array($query);
		if($row[type]=="1"||$row[type]==""){
		$border = "1";	
		if($row[page_id]=="" && $row[link_status]==""){
			$status="1";//ยังไม่มีการเขียนเพจ
		}elseif($row[page_id]!="" && $row[link_status]==""){
			$status="2";//มีการเขียนเพจแล้ว แก้ไขได้อย่างเดียว
		}elseif($row[page_id]!="" && $row[link_status]!=""){
			$status="2";//มีการเขียนเพจแล้ว แก้ไขได้อย่างเดียว
		}else{
			$status="1";//ยังไม่มีการเขียนเพจ
		}

		if($status==1){
				$write="เขียนบทความ";
				$upload_file="อัพโหลดไฟล์";
		}else{
				$write="แก้ไขบทความ";
				$upload_file="แก้ไขไฟล์อัพโหลด";
		}
		}elseif($row[type]=="2"){
			$border = "0";
			 if($row[menu_url]!=""){
			$upload_file="อัพโหลดไฟล์";
			 }else{
			$upload_file="แก้ไขไฟล์อัพโหลด";
			 }
		}
		
		
		if($save=="ok"){
		if($cate_id==1){
			$localtion="../upfile_ISO/";
		}elseif($cate_id==2){
			$localtion="../upfile_5s/";
		}elseif($cate_id==3){
			$localtion="../upfile_safety/";
		}
		if($row[type]=="2"){
			if($row[menu_url]!="wait"){
				$oldfile_name = explode("/",$row[menu_url]);
				$oldfile_name = $oldfile_name[2];
				unlink($localtion.$oldfile_name);
				}
			}		

		if(unlink){	
		if($_FILES["fileUpload"]["name"] != ""){
			$fileUpload_name=iconv("UTF-8", "TIS-620",$_FILES["fileUpload"]["name"]);		
			if(copy($_FILES["fileUpload"]["tmp_name"],$localtion.$fileUpload_name)){
				//*** Insert Record ***//
				$strUp = "UPDATE tb_menu SET
									menu_url = '".$localtion.$_FILES["fileUpload"]["name"]."'
									WHERE menu_id='".$menu_id."' ";
				$objUp=mysql_query($strUp);
					if( $objUp){
						    echo "<script>alert('เพิ่มข้อมูลเรียบร้อย')</script>";
							echo "<script>parent.close_frm_order();</script>";
							
					}else{
							echo"<script>alert('ไม่สามารถเพิ่มข้อมูลได้')</script>";
					}
			}
		}
		}
		 exit();
	 }
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
</head>

<body>
<table width="200" border="<?=$border?>" align="center">
<?php if($row[type]=="2"){ ?>
<form  id="form1" method="post" action="?save=ok" enctype="multipart/form-data" />
  <tr>
 <td>อัพโหลด :</td>
  <td align="left"><input type="file" name="fileUpload" id="fileUpload" /></td>                        
      </tr>
      <tr>
        <td align="center" colspan="2"><input  type="submit"  name="btnSubmit" id="btnSubmit" value="บันทึก"  /></td>
        <input type="hidden" name="menu_id" value="<?=$menu_id?>" />
         <input type="hidden" name="status" value="<?=$status?>" />
          <input type="hidden" name="cate_id" value="<?=$row[cate_id]?>" />
      </tr>
                </form>
  <? }else{?>
  <tr>
    <td align="center" onclick="parent.write_article('<?=$menu_id?>','<?=$status?>');" style="cursor:pointer"><?=$write?></td>
  </tr>
  <tr>
    <td height="23" align="center" onclick="parent.upload_file('<?=$menu_id?>','<?=$status?>','<?=$row[cate_id]?>');" style="cursor:pointer"><?=$upload_file?>
    </td>
  </tr>
  <? } ?>
</table>
</body>
</html>