<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<?
	$var=array_merge($_GET,$_POST);
	extract($var);
	include 'con_fig/db.php';
	$detail=trim(addslashes($message));	
	$random = substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'),0,5);
	$rand=$random .".php";
	if($cmd==1){
				$sql="INSERT tb_page SET
							page_detail='".$detail."' ,
							page_url='".$rand."' ";
				$query=mysql_query($sql);
			
				$sql_maxpage="SELECT MAX(page_id) AS max_page FROM tb_page";
				$query_maxpage=mysql_query($sql_maxpage);
				$row_maxpage=mysql_fetch_array($query_maxpage);
				
				$sql_update="UPDATE tb_menu SET
											menu_name='".$menu_name."',
											page_id='".$row_maxpage[max_page]."'
											WHERE menu_id='".$menu_id."' ";
				$query_update=mysql_query($sql_update);
						if($query && $query_update){
							echo "<script>alert('เพิ่มบทความเรียบร้อย');</script>";
							echo "<script>window.location='list_menumain.php?cate_id=$cate_id';</script>";
						}
				exit();
	}else if($cmd==2){
			$sql="SELECT
							tb_menu.page_id
							FROM
							tb_menu
							WHERE
							tb_menu.menu_id = '".$menu_id."' ";
			$query=mysql_query($sql);
			$row=mysql_fetch_array($query);
			$sql_update="UPDATE tb_page SET
										page_title='".$page_title."',
										page_detail='".$detail."'
										WHERE page_id='".$row[page_id]."' ";
			$query_update=mysql_query($sql_update);
			$sql_upmenu="UPDATE tb_menu SET
											menu_name='".$menu_name."'
											WHERE menu_id='".$menu_id."' ";
			$query_upmenu=mysql_query($sql_upmenu);
			if($query && $query_update && $query_upmenu){
							echo "<script>alert('แก้ไขบทความเรียบร้อย');</script>";
							echo "<script>window.location='list_menumain.php?cate_id=$cate_id';</script>";
			}
			exit();
	}
?>