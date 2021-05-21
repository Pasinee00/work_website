<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<?php
	$var=array_merge($_GET,$_POST);
	extract($var);
	include ("con_fig/db.php");
	
	$name=$_FILES["fileField"]["name"];
	$tmp_name=$_FILES["fileField"]["tmp_name"];
	$file_name="img_category/".$name;
	copy($tmp_name,$file_name);
			if($cate_id==""){
			$sql_insert="INSERT INTO tb_category  SET 
									cate_name='".$cate_name."',
									cate_img='".$file_name."' ";
			$query_insert=mysql_query($sql_insert);
			if($query_insert){
				echo "<script>alert('เพิ่มข้อมูลรายการเรียบร้อย')</script>";
			}
		}else{
			if($name!=""){
					$sql_sel="SELECT * FROM tb_category
										WHERE cate_id='".$cate_id."' ";
					$query_sel=mysql_query($sql_sel);
					$row_sel=mysql_fetch_array($query_sel);
					$row_sel[cate_img];
					$localtion=iconv("UTF-8", "TIS-620",$row_sel[link_localtion]);
					$del_file=@unlink($localtion);
					
					$sql_update="UPDATE tb_category SET
												cate_name='".$cate_name."' ,
												cate_img='".$file_name."'
												WHERE cate_id='".$cate_id."' ";
					$query_update=mysql_query($sql_update);
			}else{
					$sql_update="UPDATE tb_category SET
												cate_name='".$cate_name."' 
												WHERE cate_id='".$cate_id."' ";
					$query_update=mysql_query($sql_update);
			}

			if($query_update){
				echo"<script>alert('แก้ไขรายการเรียบร้อย')</script>";
			}else{
				echo"<script>alert('แก้ไขข้อมูลผิดพลาด')</script>";
			}
		}

?>