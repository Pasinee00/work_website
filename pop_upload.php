<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?
	 include('con_fig/db.php'); 
if($save=="ok"){
		if($cate_id==1){
			$localtion="upfile_ISO/";
		}elseif($cate_id==2){
			$localtion="upfile_5s/";
		}elseif($cate_id==3){
			$localtion="upfile_safety/";
		}
		
		/* $tmpfile=$_FILES['fileUpload']['tmp_name'];
		$name=$_FILES['fileUpload']['name']; */
			
		if($_FILES["fileUpload"]["name"] != ""){
			$fileUpload_name=iconv("UTF-8", "TIS-620",$_FILES["fileUpload"]["name"]);
			if(copy($_FILES["fileUpload"]["tmp_name"],$localtion.$fileUpload_name)){
				//*** Insert Record ***//
				$strSQL = "INSERT  tb_link  SET
										link_detail='".$linkDetail."',
										link_name='".$_FILES["fileUpload"]["name"]."',
										link_localtion='".$localtion.$_FILES["fileUpload"]["name"]."',
										menu_id='".$menu_id."', 
										link_date='".date("Y-m-d")."'";
				$objQuery = mysql_query($strSQL);
				$strUp = "UPDATE tb_menu SET
									link_status=1
									WHERE menu_id='".$menu_id."' ";
				$objUp=mysql_query($strUp);
					if($objQuery && $objUp){
						    echo "<script>alert('เพิ่มข้อมูลเรียบร้อย')</script>";
							echo "<script>parent.close_frm_order();</script>";
							
					}else{
							echo"<script>alert('ไม่สามารถเพิ่มข้อมูลได้')</script>";
					}
			}
		}
			
		 exit();
	 }




?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<title>Untitled Document</title>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<style type="text/css">
body,td,th {
	background-color:transparent
	font-family: "MS Sans Serif";
	font-size: 11px;
}

</style>
</head>

<body>

        <form name="form1" id="form1" method="post" action="?save=ok" enctype="multipart/form-data">
                 <table border="1" cellpadding="0" cellspacing="0" bordercolor="#999999"> 
                    <tr>
                      <td>รายการ: </td>
                      <td><textarea name="linkDetail" id="linkDetail" cols="40" rows="5"></textarea> </td>       
                     </tr>
                     <tr>
                         <td>อัพโหลด :</td>
                         <td align="left"><input type="file" name="fileUpload" id="fileUpload" /></td>
                     </tr>
                      <tr>
                        <td><input name="menu_id" id="menu_id" type="hidden" value="<?=$menu_id?>" />
                        <input name="cate_id" id="cate_id" type="hidden" value="<?=$cate_id?>" /></td>
                        <td align="left"><input  type="submit"  name="btnSubmit" id="btnSubmit" value="บันทึก"  /></td>
                      </tr>
                 </table>   
        </form>

</body>
</html>