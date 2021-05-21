<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<?
	$var=array_merge($_GET,$_POST);
	extract($var);
	include 'con_fig/db.php';
	$detail=trim(addslashes($message));	
	$random = substr(str_shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'),0,5);
	$rand=$random .".php";
	$sql="INSERT tb_page SET
				page_detail='".$detail."' ,
				page_url='".$rand."' ";
	$query=mysql_query($sql);

	$sql_maxpage="SELECT MAX(page_id) AS max_page FROM tb_page";
	$query_maxpage=mysql_query($sql_maxpage);
	$row_maxpage=mysql_fetch_array($query_maxpage);
	
			$sql_select="SELECT *
										FROM
										tb_menu
										WHERE
										tb_menu.cate_id='".$cate_id."' 
										ORDER BY
										tb_menu.menu_id DESC";
			$query_select=mysql_query($sql_select);
			$row=mysql_fetch_array($query_select);
			
			$max_order=$row[max_order]+1;
			$url="menu/".$rand;
			$sql_insert="INSERT INTO tb_menu SET 
										menu_name='".$page_title."',
										menu_main='0',
										menu_order='".$max_order."',
										menu_url='".$url."',
										cate_id='".$cate_id."',
										page_id='".$row_maxpage[max_page]."' ";
			$query_insert=mysql_query($sql_insert);
			if($query && $query_insert){
				echo "<script>window.location='manage_menu.php';</script>";
			}
?>