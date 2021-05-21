<?
	$var=array_merge($_GET,$_POST);
	extract($var);
	include ("con_fig/db.php");
	if($status=="del_main"){
		$sql_del="DELETE  FROM tb_menu WHERE  tb_menu.menu_id='".$menu_id."' ";
		$query_del=mysql_query($sql_del);
		if($query_del){
			echo"ลบเมนูเรียบร้อย";
		}else{
			echo"ไม่สามารถลบเมนูได้";
		}
		exit();
	}
	if($status=="check_name"){
		$sql="SELECT
						tb_menu.menu_id,
						tb_menu.menu_name
						FROM
						tb_menu
						WHERE
						tb_menu.menu_id='".$menu_id."' ";
		$query=mysql_query($sql);
		$row=mysql_fetch_array($query);
		if($query){
				echo $row[menu_name]."||".$row[menu_id];
		}
		exit();
	 }
	if($status=="edit_menu"){
		$sql="UPDATE tb_menu SET 
						tb_menu.menu_name='".$menu_name."' 
						WHERE 
						tb_menu.menu_id='".$menu_id."'";
		$query=mysql_query($sql);
		if($query){
			echo "แก้ไขเมนูเรียบร้อย";
		}else{
			echo "แก้ไขผิดพลาด";
		}
		exit();
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="main.css" rel="stylesheet" type="text/css">
<title>Untitled Document</title>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
$(document).ready(function(e) {
    $('#div_menu').hide();
});
function del_main(menu_id){
 	var ok=confirm("ยืนยันการลบเมนู");
	if(ok){	
			var param   = 'menu_id='+menu_id;
					param += '&status=del_main';
					param += '&xid='+Math.random();
					getData = $.ajax({
						url :'?',
						data :encodeURI(param),
						async:false,
						success: function(getData){
							alert(getData);
						}
					}).responesText;
	}
}
function check_name(menu_id){
	var pt = $("#span_menu"+menu_id).offset();
	var pLeft  = pt.left;
	var pTop = pt.top;
	$("#div_menu").css({position:"absolute", top: pTop + 20,left: pLeft -1}); 
	$("#div_menu").show();
	var param   = "menu_id="+menu_id;
			param += "&status=check_name";
			param += "&xid="+Math.random();
			getData = $.ajax({
						url :'?',
						data :encodeURI(param),
						async:false,
						success: function(getData){
						var temp = getData.split("||");
						$('#menu_id').val(temp[1]);
						$('#menu_name').val(temp[0]);
						}
			}).responesText; 
}
function edit_menu(){
	if($('#menu_name').val()==""){
		alert('กรอกชื่อเมนู');
		return false;
	}
	var param   =  "menu_id="+$('#menu_id').val();
			param +=  "&menu_name="+$('#menu_name').val();
			param +=  "&status=edit_menu"
			param +=  "&xid="+Math.random;
			getData = $.ajax({
				url :'?',
				data : encodeURI(param),
				async:false,
				success: function(getData){
						alert(getData);
						window.location.reload();
				}
			}).responesText;
}
</script>
<style>
.text_box{	
	background-color: #0099FF;
	border: 0px solid #AAAAAA;
}
</style>
</head>

<body>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="80" valign="top"><img src="images/head.png" width="895" height="75"></td>
  </tr>
  <tr>
    <td align="right" class="menu_index">
    หน้าแรก | 
    <?
			include ("con_fig/db.php");
			$sql="SELECT *
							FROM
							tb_menu
							WHERE tb_menu.cate_id = 0
							AND tb_menu.menu_main = 0
							ORDER BY
							tb_menu.menu_order ASC";
			$query=mysql_query($sql);
			while($row=mysql_fetch_array($query)){
    ?>
    <img src="icon/delete.png" width="10" height="10" onclick="del_main('<?=$row[menu_id]?>');" />
	<span id="span_menu<?=$row[menu_id]?>" ondblclick="check_name('<?=$row[menu_id]?>');"><?=$row[menu_name]?>  | </span>
    <?
			}
	?>
    ผู้ดูแลระบบ
    </td>
  </tr>
  <tr>
    <td align="right"><hr></td>
  </tr>
</table>
    <span id="div_menu">
    <input  class="text_box"name="menu_name" type="text" id="menu_name"  value="" ondblclick="edit_menu();"/>
    <input name="menu_id" id="menu_id" type="hidden" value="" />
    </span>
</body>
</html>