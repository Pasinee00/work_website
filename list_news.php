<?
	session_start();
	$var=array_merge($_GET,$_POST);
	extract($var);
	include ("con_fig/db.php");
	if($status=="del_news"){
		$sql_news="SELECT
								tb_news.news_check
								FROM
								tb_news
								WHERE
								tb_news.news_id='".$news_id."'";
		$query_news=mysql_query($sql_news);
		$row_news=mysql_fetch_array($query_news);
		if($row_news[news_check]==1){
		$sql="UPDATE  tb_news SET
					news_check=0
					WHERE tb_news.news_id='".$news_id."'";
		}else {
			$sql="UPDATE  tb_news SET
					news_check=1
					WHERE tb_news.news_id='".$news_id."'";
			}
		$query=mysql_query($sql);
	exit();	
		}
		
		
	function check_date($y){
	$day=explode('-',$y);
	return $day[2]."/".$day[1]."/".$day[0];
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
$(document).ready(function(e) {
    //$('#mainmenu_name').hide();
});
function del_news(news_id){
	var param   = "news_id="+news_id;
			param += "&status=del_news";
			param += "&xid="+Math.random();
			getData = $.ajax({
				url : '?',
				data :encodeURI(param),
				async:false,
				success: function(getData){
				$('#Display').attr('src', 'list_news.php?news_id='+news_id+'&xid='+Math.random());
				}
			}).responseText;
}

</script>
</head>
<style>
body,td,th {
	background-color:#F0EBE2; 
	font-family: "ms Sans Serif";
	font-size: small;
}
</style>
<body>
<table width="100%" border="0">
  <tr>
   <?
  	$sql_cate="SELECT
								tb_category.cate_id,
								tb_category.cate_name
								FROM tb_category
								WHERE cate_id='".$cate_id."' ";
	$query_cate=mysql_query($sql_cate);
	$row_cate=mysql_fetch_array($query_cate);
	?>
    <td colspan="2" align="left">รายการประชาสัมพันธ์
	<?=$row_cate[cate_name]?><img src="icon/add.png" width="20" height="20" onclick="parent.newsbox('<?=$cate_id?>');" style="cursor:pointer"/>
    </td>
  </tr>
  <tr>
    <td width="188%" colspan="2" align="center">
    <div id="mainmenu_name">
    <table width="60%" border="0"align="center" cellpadding="0" cellspacing="0" >
      <tr>
        <td width="50" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">new update</td>
        <td width="50" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">ลำดับ</td>
        <td align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">หัวข้อข่าว</td>
        <td width="80" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">วันที่</td>
        <td width="80" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">เวลา</td>
        <td width="80" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">ดูหน้า</td>
        <td width="80" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">แก้ไข</td>
        <td width="80" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">ลบ</td>
      </tr>
        <?
			$sql="SELECT
						tb_news.news_id,
						tb_news.news_title,
						tb_news.order_new,
						tb_news.news_detail,
						tb_news.news_localtion,
						tb_news.cate_id,
						tb_news.news_date,
						tb_news.news_check,
						tb_news.news_time
						FROM
						tb_news";
			if($cate_id!=""){
			$sql.=" WHERE tb_news.cate_id='".$cate_id."' ";
			}else{
			$sql.=" WHERE tb_news.cate_id='' ";
			}
			$sql.=" ORDER BY  tb_news.news_date DESC,tb_news.order_new ASC";
			$query=mysql_query($sql);
			$i=0;
				while($row=mysql_fetch_array($query)){
					$i++;
		?>
      <tr>
      	<td align="center"><input name="checknew" type="checkbox" value="1" <? if($row[news_check]==1){ echo "checked='checked'"; }?> onclick="del_news(<?=$row[news_id]?>);"/></td>
      	<td align="center"><?=$row[order_new] ?></td>
        <td align="left"><?=$row[news_title] ?></td>
        <td align="center" onclick="parent.view_news('<?=$row[news_id]?>','<?=$cate_id?>');"><?=check_date($row[news_date]) ?></td>
        <td align="center" onclick="parent.view_news('<?=$row[news_id]?>','<?=$cate_id?>');"><?=$row[news_time] ?> น.</td>
        <td align="center" onclick="parent.view_news('<?=$row[news_id]?>','<?=$cate_id?>');"><img src="icon/comment.png" width="20" height="20" /></td>
        <td align="center" onclick="parent.edit_news('<?=$row[news_id]?>');"><img src="icon/cut.png" width="20" height="20" /></td>
        <td align="center" onclick="parent.del_news('<?=$row[news_id]?>');"><img src="icon/delete.png" width="20" height="20" /></td>
      </tr>
     <?
				}//while		
	  ?>
    </table>
    </div>
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">&nbsp;</td>
  </tr>
</table>

</body>
</html>