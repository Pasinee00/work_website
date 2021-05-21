<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<?
	$var=array_merge($_GET,$_POST);
	extract($var);
	include 'con_fig/db.php';
	$detail=trim(addslashes($message));	
	$random = substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'),0,5);
	$rand=$random .".php";
	if($cate_id==1){
		$localtion="upfile_ISO/";
	}elseif($cate_id==2){
		$localtion="upfile_5s/";
	}elseif($cate_id==3){
		$localtion="upfile_safety/";
	}
		if($_FILES["filUpload"]["name"]!=""){
			$filUpload_name=trim(iconv("UTF-8", "TIS-620",$_FILES["filUpload"]["name"]));
			$ex=explode(".",$filUpload_name);
			copy($_FILES["filUpload"]["tmp_name"],$localtion.$random.".".$ex[1]);
		}
		if($_FILES["filUpload_file"]["name"]!=""){
			$filUpload_file_name=trim(iconv("UTF-8", "TIS-620",$_FILES["filUpload_file"]["name"]));
			$ex2=explode(".",$filUpload_file_name);
			copy($_FILES["filUpload_file"]["tmp_name"],$localtion.$random."news_file".".".$ex2[1]);
		}
		
		if($cmd==1){ 
				$sql="INSERT tb_news SET
							news_title='".$titlenews."' ,
							news_detail='".$detail."' ,
							news_localtion='".$localtion.$random.".".$ex[1]."',
							news_file='".$localtion.$random."news_file".".".$ex2[1]."',
							cate_id='".$cate_id."',
							news_date='".date("Y-m-d")."',
							news_time='".date("H:i:s")."',
							news_check=1";
				$query=mysql_query($sql);
						if($query ){
							echo "<script>alert('เพิ่มบทความเรียบร้อย');</script>";
							echo "<script>window.location='list_news.php?cate_id=$cate_id';</script>";  
						}
				exit();
		}else if($cmd==2){
				if($_FILES["filUpload"]["name"]!=""){
				$sql="SELECT 
								tb_news.news_localtion
								FROM
								tb_news
								WHERE
								tb_news.news_id='".$news_id."'";
					$query=mysql_query($sql);
					while ($row=mysql_fetch_array($query)){
						$localtion_del=iconv("UTF-8", "TIS-620",$row[news_localtion]);
						$flgDelete = @unlink($localtion_del);
				}
				
				}
					
				if($_FILES["filUpload_file"]["name"]!=""){
					 $sql2="SELECT 
								tb_news.news_file
								FROM
								tb_news
								WHERE
								tb_news.news_id='".$news_id."'";
					$query2=mysql_query($sql2);
					while ($row2=mysql_fetch_array($query2)){
						$localtion_del2=iconv("UTF-8", "TIS-620",$row2[news_file]);
						$flgDelete2 = @unlink($localtion_del2);
					}
				}
				
				$sql_update="UPDATE tb_news SET
								order_new='".$order_new."',
								news_title='".$titlenews."',
								news_detail='".$detail."',";
					if($_FILES["filUpload"]["name"]!=""){
					$sql_update.="news_localtion='".$localtion.$random.".".$ex[1]."',";
					}
					if($_FILES["filUpload_file"]["name"]!=""){
					$sql_update.="news_file='".$localtion.$random."news_file".".".$ex2[1]."',";
					}
				$sql_update.="news_date='".date("Y-m-d")."',
								  news_time='".date("H:i:s")."'
								  WHERE news_id='".$news_id."' ";
				}
					$query_update=mysql_query($sql_update);
					
					if($query_update){
									echo "<script>alert('แก้ไขบทความเรียบร้อย');</script>";
									echo "<script>window.location='list_news.php?cate_id=$cate_id';</script>";
					}
					

?>