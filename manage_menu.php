<?
	session_start();
	$var=array_merge($_GET,$_POST);
	extract($var);
	include ("con_fig/db.php");

	if($status=="add_cate"){
			$sql_insert="INSERT INTO tb_category  SET cate_name='".$cate_name."' ";
			$query_insert=mysql_query($sql_insert);
			if($query_insert){
				echo $sql_insert;
			}
			exit();
	}
	if($status=="add_main"){
			$sql_max="SELECT MAX(menu_order) AS max_order FROM tb_menu WHERE cate_id='".$cate_id."'";
			$query_max=mysql_query($sql_max);
			$row_max=mysql_fetch_array($query_max);
			$max_order=$row_max[max_order]+1;
			$url="main_menu/".$main_url;
			$sql_insert="INSERT INTO tb_menu SET 
										menu_name='".$main_name."',
										menu_main='0',
										menu_order='".$max_order."',
										menu_url='".$url."',
										cate_id='".$cate_id."' ";
			$query_insert=mysql_query($sql_insert);
			if($query_insert){
				echo $sql_insert;
			}
			exit();
	}
	if($status=="add_menu"){
			$sql_select="SELECT *
										FROM
										tb_menu
										WHERE
										tb_menu.menu_id='".$menu_id."' ";
			$query_select=mysql_query($sql_select);
			$row=mysql_fetch_array($query_select);
			
			$sql_max="SELECT MAX(menu_order) AS max_order FROM tb_menu WHERE cate_id='".$row[cate_id]."' AND menu_main='".$row[menu_order]."'";
			$query_max=mysql_query($sql_max);
			$row_max=mysql_fetch_array($query_max);
			$max_order=$row_max[max_order]+1;
			$url="menu/".$menu_url;
			$sql_insert="INSERT INTO tb_menu SET 
										menu_name='".$menu_name."',
										menu_main='".$row[menu_order]."',
										menu_order='".$max_order."',
										menu_url='".$url."',
										cate_id='".$row[cate_id]."' ";
			$query_insert=mysql_query($sql_insert);
			if($query_insert){
				echo $sql_insert;
			}
			exit();
	}
	if($status=="del_main"){
		$sql="SELECT
						tb_menu.menu_main,
						tb_menu.menu_order
						FROM
						tb_menu
						WHERE
						tb_menu.menu_order='".$menu_order."' 
						AND menu_main!=0";
		$query=mysql_query($sql);
		$num=mysql_num_rows($query);
		if($num>=1){
			echo "ลบข้อมูลไม่ได้";
		}else{
			$sql_del="DELETE  FROM tb_menu WHERE  tb_menu.menu_id='".$main_id."'";
			$query_del=mysql_query($sql_del);
			if($query_del){
					echo "ลบข้อมูลเรียบร้อย";
			}
		}
		exit();
	}
	if($status=="del_menu"){
		$sql_del="DELETE  FROM tb_menu WHERE  tb_menu.menu_id='".$menu_id."'";
		$query_del=mysql_query($sql_del);
		if($query_del){
			echo"ลบข้อมูลเรียบร้อย";
		}else{
			echo"ลบข้อมูลไม่ได้";
		}
		exit();
	}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>
<style>
body{
	font-family: "ms Sans Serif";
	font-size: small;
}
#popmenu{
	width:450px;
	height:180px;
	top:50%;
	left:50%;
	margin-top:-50px;
	margin-left:-150px;
	position:absolute;
	background-color:transparent;
}
#popmenu{
	display:none;
}
</style>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
$(document).ready(function(e) {

});
function cate(){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'category_add.php?xid='+Math.random());		
	$("#popmenu").show();
}
function add_cate(){
	var param   = "cate_name="+$('#ifr_mOrder').contents().find('#cate_name').val();
			param += "&status=add_cate"
			param += "&xid="+Math.random();
			
			getData = $.ajax({
				url : '?',
				data:encodeURI(param),
				async:false,
				success: function(getData){
					//alert(getData);
					location.reload();
				}
			}).responseText;
			
	$('#popmenu').hide();
	
}
function menumain(){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'menumain_add.php?xid='+Math.random());		
	$("#popmenu").show();
}
function add_main(){
	var main_name=$('#ifr_mOrder').contents().find('#main_name').val();
	var main_url=$('#ifr_mOrder').contents().find('#main_url').val();
	var cate_id=$('#ifr_mOrder').contents().find('#cate_id').val();

	if(main_name==""){
		alert('ระบุชื่อเมนูหลัก');
		$('#ifr_mOrder').contents().find('#main_name').select();
		return false;
	}
	if(main_url==""){
		alert('ระบุ URL');
		$('#ifr_mOrder').contents().find('#main_url').select();
		return false;
	}
	if(cate_id==""){
		alert('ระบุหมวดหมู่');
		$('#ifr_mOrder').contents().find('#cate_id').select();
		return false;
	}
	var param  = "main_name="+main_name;
			param += "&main_url="+main_url;
			param += "&cate_id="+cate_id;
			param += "&status=add_main";
			param += "&xid="+Math.random();
			//alert(param);
			getData = $.ajax({
				url:'?',
				data:encodeURI(param),
				async:false,
				success:function(getData){
					//alert(getData);
					location.reload();
				}
			}).responseText;
	$('#popmenu').hide();
}

function add_menu(){
	
	var menu_name=$('#ifr_mOrder').contents().find('#menu_name').val();
	var menu_url=$('#ifr_mOrder').contents().find('#menu_url').val();
	var menu_id=$('#ifr_mOrder').contents().find('#menu_id').val();

	if(menu_name==""){
		alert('ระบุชื่อเมนู');
		$('#ifr_mOrder').contents().find('#menu_name').select();
		return false;
	}
	if(menu_url==""){
		alert('ระบุ URL');
		$('#ifr_mOrder').contents().find('#menu_url').select();
		return false;
	}
	if(menu_id==""){
		alert('ระบุเมนูหลัก');
		$('#ifr_mOrder').contents().find('#menu_id').select();
		return false;
	}
	var param  = "menu_name="+menu_name;
			param += "&menu_url="+menu_url;
			param += "&menu_id="+menu_id;
			param += "&status=add_menu";
			param += "&xid="+Math.random();
			//alert(param);
			getData = $.ajax({
				url:'?',
				data:encodeURI(param),
				async:false,
				success:function(getData){
					//alert(getData);
					location.reload();
				}
			}).responseText;
	$('#popmenu').hide();
}

function menu(){
/* 	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'menu_add.php?xid='+Math.random());			
	$("#popmenu").show();  */
	 window.location='box_page.php';
}

function frame(){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'frame_add.php?xid='+Math.random());		
	$("#popmenu").show();
}

function close_frame(){
	$('#popmenu').hide(); 
	location.reload();
}

function close_frm_order(){
	$('#popmenu').hide();
}

function del_main(main_id,menu_order){
	var param   = "menu_order="+menu_order;
			param += "&main_id="+main_id;
			param += "&status=del_main";
			param += "&xid="+Math.random();
			getData = $.ajax({
				url :'?',
				data:encodeURI(param),
				async:false,
				success:function(getData){
					alert(getData);
					location.reload();
				}
			}).responseText;
}
function del_menu(menu_id){
	var param   = "menu_id="+menu_id;
			param += "&status=del_menu";
			param += "&xid="+Math.random();
			alert(param);
			getData = $.ajax({
				url :'?',
				data :encodeURI(param),
				async:false,
				success:function(getData){
					alert(getData);
					location.reload(); 
				}
			}).responseText;
}
</script>
<body>
<div id="popmenu"> 
  <table height="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#CCCCCC">
    <tr >
      <td height="31" bgcolor="#CCCCCC"></td>
      <td width="300" align="left" valign="middle" bgcolor="#CCCCCC">&nbsp;&nbsp;<img src="img/close_icon.gif" align="top" style="cursor:pointer" onclick="close_frm_order()" />&nbsp;&nbsp;<font  color="#FFFFFF"><b>เพิ่มข้อมูล</b></font></td>    
      <td bgcolor="#CCCCCC"></td> 
    </tr>
    <tr>
      <td bgcolor="#CCCCCC"></td>
      <td valign="top" bgcolor="#CCCCCC"><iframe frameborder="0" id="ifr_mOrder"></iframe></td>
      <td bgcolor="#CCCCCC"></td>
    </tr>
    <tr>
      <td bgcolor="#CCCCCC"></td>
      <td bgcolor="#CCCCCC"></td>
      <td bgcolor="#CCCCCC"></td>
    </tr>
  </table>
</div>
<table width="100%" border="1">
<?
	$sql="SELECT tb_frame.frame_img
				FROM
				tb_frame
				WHERE
				tb_frame.cate_id='".$_SESSION['cate_id']."' 
				AND frame_type=1";
	$query=mysql_query($sql);
	$row=mysql_fetch_array($query);
?>
  <tr>
    <td><img src="<?=$row[frame_img]?>" width="1000" height="200" /></td>
  </tr>
</table>
<table width="100%" border="0">
  <tr>
    <td colspan="2"><a href="logout.php">Logout</a></td>
  </tr>
  <tr>
    <td colspan="2">เพิ่มเมนูหมวด<a href="#" onclick="cate();">(เพิ่ม)</a></td>
 </tr>
  <?
  		$sql="SELECT
						tb_category.cate_id,
						tb_category.cate_name
						FROM
						tb_category";
		$query=mysql_query($sql);
		while($row=mysql_fetch_array($query)){
  ?>  
  <tr>
    <td width="5%">&nbsp;</td>
    <td><?=$row[cate_name]?></td>
  </tr>
   <?
		}
  ?>
  </tr>
  <tr>
    <td colspan="2">เพิ่มเมนูหลัก<a href="#" onclick="menumain();">(เพิ่ม)</a></td>
  </tr>
  <?
  		$sql="SELECT
						tb_menu.menu_id,
						tb_menu.menu_name,
						tb_menu.menu_main,
						tb_menu.menu_order,
						tb_menu.menu_url,
						tb_menu.cate_id
						FROM tb_menu
						WHERE tb_menu.menu_main = 0
						AND cate_id='".$_SESSION['cate_id']."' ";
		$query=mysql_query($sql);
		while($row=mysql_fetch_array($query)){ 
  ?>
  <tr>
    <td>&nbsp;</td>
    <td><?=$row[menu_name]?>&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="del_main('<?=$row[menu_id]?>','<?=$row[menu_order]?>');">(ลบ)</a></td>
  </tr>
  <?
		}
  ?>
  <tr>
    <td colspan="2">เพิ่มเมนูย่อย<a href="#" onclick="menu();">(เพิ่ม)</a></td>
  </tr>
  <?
   		$sql="SELECT
						tb_menu.menu_id,
						tb_menu.menu_name,
						tb_menu.menu_main,
						tb_menu.menu_order,
						tb_menu.menu_url,
						tb_menu.cate_id
						FROM tb_menu
						WHERE tb_menu.menu_main = 0
						AND cate_id='".$_SESSION['cate_id']."' ";
		$query=mysql_query($sql);
		while($row=mysql_fetch_array($query)){ 
		
  ?>
  <tr>
    <td><?=$row[menu_name]?></td>
  </tr>
    <?
		$sql_menu="SELECT *
									FROM
									tb_menu
									WHERE tb_menu.menu_main ='".$row[menu_order]."' 
									AND  cate_id='".$_SESSION['cate_id']."' ";
		$query_menu=mysql_query($sql_menu);
				while($row_menu=mysql_fetch_array($query_menu)){ 
	?>
    <tr>
    <td></td>
    <td><?=$row_menu[menu_name]?>&nbsp;&nbsp;&nbsp;&nbsp;<a  onclick="del_menu('<?=$row_menu[menu_id]?>');">(ลบ)</a></td>
    </tr>
    <?
				}
		}
  	?>
    <tr>
      <td colspan="2">หัวเว็บ <a href="#" onclick="frame();">(เพิ่ม)</a></td>
    </tr>
    <tr>
      <td></td>
      <td>&nbsp;</td>
    </tr>

</table>
<table width="100%" border="1">
  <tr>
<?
	$sql_foot="SELECT tb_frame.frame_img
							FROM
							tb_frame
							WHERE
							tb_frame.cate_id='".$_SESSION['cate_id']."' 
							AND frame_type=2";
	$query_foot=mysql_query($sql_foot);
	$row_foot=mysql_fetch_array($query_foot);
?>
    <td><img src="<?=$row_foot[frame_img]?>" width="1000" height="50" /></td>
  </tr>
</table>
</body>
</html>