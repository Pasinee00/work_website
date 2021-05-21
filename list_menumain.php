<?
	session_start();
	$var=array_merge($_GET,$_POST);
	extract($var);
	include ("con_fig/db.php");
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
</script>
</head>
<style>
body{
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
    <td colspan="2" align="left">รายการเมนู 
	<?=$row_cate[cate_name]?><img src="icon/add.png" width="20" height="20" onclick="parent.select_main('<?=$cate_id?>');" style="cursor:pointer"/>
    </td>
  </tr>
  <tr>
    <td width="188%" colspan="2" align="center">
    <div id="mainmenu_name">
    <table width="50%" border="0"align="center" cellpadding="0" cellspacing="0" >
      <tr>
        <td width="50" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">ลำดับ</td>
        <td align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">รายการ</td>
        <td width="80" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">ดูหน้า</td>
        <td width="80" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">แก้ไข</td>
        <td width="80" align="center" style="font-family: 'ms Sans Serif'; font-weight: bold;">ลบ</td>
      </tr>
        <?
			$sql="SELECT
							tb_menu.menu_id,
							tb_menu.menu_name,
							tb_menu.menu_main,
							tb_menu.menu_order,
							tb_menu.menu_url,
							tb_menu.cate_id,
							tb_menu.page_id,
							tb_menu.status
							FROM tb_menu
							WHERE tb_menu.menu_main = 0";
			if($cate_id!=""){
			$sql.=" AND tb_menu.cate_id='".$cate_id."' ";
			}else{
			$sql.=" AND tb_menu.cate_id='' ";
			}
			$query=mysql_query($sql);
			$i=0;
				while($row=mysql_fetch_array($query)){
					$i++;
		?>
      <tr>
      	<td align="center"><?=$i?></td>
        <td align="left"><? if($row[status]!=1) {?><img src="icon/add.png" width="15" height="15" onclick="parent.select_menu('<?=$row[menu_id]?>');" style="cursor:pointer"/>&nbsp;&nbsp;<?=$row[menu_name]?><? }?></td>
        <td align="center">&nbsp;</td>
        <td align="center" onclick="parent.edit_main('<?=$row[menu_id]?>');"><? if($row[status]!=1) {?><img src="icon/cut.png" width="20" height="20" /><? } ?></td>
        <td align="center" onclick="parent.del_main('<?=$row[menu_id]?>','<?=$row[menu_order]?>','<?=$cate_id?>');"><? if($row[status]!=1) {?><img src="icon/delete.png" width="20" height="20" /><? } ?></td>
      </tr>
   <?
		$sql_menu="SELECT *
									FROM
									tb_menu
									WHERE tb_menu.menu_main ='".$row[menu_order]."' 
									AND  cate_id='".$cate_id."' ";
		$query_menu=mysql_query($sql_menu);
				$k=0;
				while($row_menu=mysql_fetch_array($query_menu)){ 
				$k++;
	?>
       <tr>
         <td width="50" align="center" >&nbsp;</td>
         <td  align="left" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?=$row_menu[menu_name]?></td>
         <?php if($row_menu[type]!="2"){?>
         <td align="center" onclick="parent.view_menu('<?=$row_menu[page_id]?>','<?=$row_menu[cate_id]?>','<?=$row_menu[menu_id]?>');"><? if($row_menu[status]!=1 && $row_menu[status]!=2) {?><img src="icon/comment.png" width="20" height="20" /><? } ?></td>
         <? }else{ ?>
                <td align="center" ></td>
                <? }?>
        <td align="center" onclick="parent.edit_menu('<?=$row_menu[menu_id]?>','<?=$row_menu[page_id]?>');"><? if($row_menu[status]!=1 && $row_menu[status]!=2) {?><img src="icon/cut.png" width="20" height="20" /><? } ?></td>
        <td align="center" onclick="parent.del_menu('<?=$row_menu[menu_id]?>','<?=$row_menu[page_id]?>','<?=$row_menu[cate_id]?>');"><? if($row_menu[status]!=1 && $row_menu[status]!=2) {?><img src="icon/delete.png" width="20" height="20" /><? } ?></td>
       </tr>
     <?
				}//while_menu 
        		}
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