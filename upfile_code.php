<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="page_menager/js/jquery-1.5.1.js"></script>
<?
	$var=array_merge($_GET,$_POST);
	extract($var);
	include'con_fig/db.php';
	$cate_id;
	if($cate_id==1){
		$localtion="upfile_ISO/";
	}elseif($cate_id==2){
		$localtion="upfile_5s/";
	}elseif($cate_id==3){
		$localtion="upfile_safety/";
	}
	for($i=0;$i<count($_FILES["filUpload"]["name"]);$i++){
		
		if($_FILES["filUpload"]["name"][$i] != ""){
			$filUpload_name=iconv("UTF-8", "TIS-620",$_FILES["filUpload"]["name"][$i]);
			if(copy($_FILES["filUpload"]["tmp_name"][$i],$localtion.$filUpload_name)){
				//*** Insert Record ***//
				$strSQL = "INSERT  tb_link  SET
										link_detail='".$linkDetail."',
										link_name='".$_FILES["filUpload"]["name"][$i]."',
										link_localtion='".$localtion.$_FILES["filUpload"]["name"][$i]."',
										menu_id='".$menu_id."', 
										link_date='".date("Y-m-d")."'";
				$objQuery = mysql_query($strSQL);
				$strUp = "UPDATE tb_menu SET
									link_status=1
									WHERE menu_id='".$menu_id."' ";
				$objUp=mysql_query($strUp);
				if($objQuery && $objUp){
						 echo "<script> alert ('เพิ่มข้อมูลไฟล์เรียบร้อย');</script>";
						 echo "<script>window.location = 'upfile.php?menu_id=$menu_id ,cmd=$cmd,cate_id=$cate_id'</script>";  	  	 
				}
			}//if2
		}//if1
	}//for
?>
