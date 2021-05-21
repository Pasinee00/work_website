<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<?
	$var=array_merge($_GET,$_POST);
	extract($var);
	include 'con_fig/db.php';
	$detail=trim(addslashes($message));	
	$random = substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'),0,5);
	$rand=$random .".php";
	if($status=="add"){
				$sql="INSERT tb_contact  SET
							contact_detail='".$detail."' ";
				$query=mysql_query($sql);
							echo "<script>alert('เพิ่มบทความเรียบร้อย');</script>";
							echo "<script>window.location='contact_test.php?contact_id=$contact_id';</script>"; 
				exit();
	}else if($status=="update"){
			$sql_upcon="UPDATE tb_contact SET
										contact_detail='".trim($detail)."'
										WHERE contact_id='".$contact_id."' ";
			$query_update=mysql_query($sql_upcon);

 				echo "<script>alert('แก้ไขบทความเรียบร้อย');</script>";
				echo "<script>window.location='contact_test.php?contact_id=$contact_id';</script>";  
	exit();
	}
?>