<?
      	include 'con_fig/db.php';
		
		$var=array_merge($_GET,$_POST);
		extract($var);
		
		function datelink($link){
			if($link==""){
				return "";
			}else{
			$t=explode('-',$link);
			return $t[2]."/".$t[1]."/".$t[0];
			}
		}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>

function addfile_download(menu_id,cate_id){
	
		var pTop = $('#popmenu').height() + $(window).scrollTop();
		param ='menu_id='+menu_id;
		param +='&cate_id='+cate_id;
		param +='&getmenu_id='+$('#getmenu_id').val();
		param +='&getcate_id='+$('#getcate_id').val();
		param +='&xid='+Math.random();
			$('#popmenu').css({position:"absolute", top: pTop });
			$('#ifr_mOrder').attr('src', 'pop_upload.php?'+param);		
			$("#popmenu").show();
}

function close_frm_order(){
		$('#popmenu').hide();
		location.reload();
	}

</script>
<style>
body{
	background-color:#F0EBE2; 
	font-family: "MS Sans Serif";
	font-size: small;
}

#hradup{
	font-family:"MS Sans Serif";
	font-size: small;
	color:#FFF;
}

#popmenu{
	width:450px;
	height:450px;
	top:50%;
	left:50%;
	margin-top:-400px;
	margin-left:-240px;
	position:absolute;
	background-color:transparent;
}
#popmenu{
	display:none;
}
</style>

</head>
<body>
<table>
	      <tr>
          		<td><img src="icon/add.png" width="25" height="25"style="cursor:pointer" onclick="addfile_download(<?=$menu_id?>,<?=$cate_id?>)" /> </td>
                <td>เพิ่มไฟล์อับโหลด</td>
          </tr>
</table>
<table width="100%" border="1" bordercolor="#999999"cellpadding="0" cellspacing="0"> 

          <tr>
	        <td align="center" bgcolor="#999999" width="30">ลำดับ</td>
	        <td align="center" bgcolor="#999999">รายการ</td>
	        <td align="center" bgcolor="#999999">ชื่อไฟล์</td>
            <td align="center" width="100" bgcolor="#999999">วันที่อัพไฟล์</td>
            <td align="center" width="100" bgcolor="#999999">ดาวน์โหลด</td>
	        <td align="center" bgcolor="#999999" width="50">ลบ</td>
          </tr>
          <?
		  		include'con_fig/db.php';
				$var=array_merge($_GET,$_POST);
				extract($var);
				$sql="SELECT
							tb_link.link_id,
							tb_link.link_detail,
							tb_link.link_name,
							tb_link.link_localtion,
							tb_link.menu_id,
							tb_link.link_date
							FROM
							tb_link
							WHERE
							tb_link.menu_id='".$menu_id."' 
							ORDER BY 
							tb_link.link_date DESC";
				$query=mysql_query($sql);
				$i=0;
				while($row=mysql_fetch_array($query)){
				$i++;
		  ?>
	      <tr>
	        <td align="center"><?=$i;?></td>
            <td><?=$row[link_detail]?></td>
	        <td><?=$row[link_name]?></td>
            <td align="center"><?=datelink($row[link_date])?></td>
	        <td align="center" valign="middle"><a href="download.php?link_localtion=<?=$row[link_localtion]?>">>>Downlode<<</a></td>
	        <td align="center"><a onclick="parent.del_link('<?=$row[link_id]?>','<?=$menu_id?>','<?=$cate_id?>','<?=$cmd?>');">
            <img src="icon/delete.png" width="20" height="20" /></a></td>
          </tr>
          <?
				}
		  ?>
            <input name="getcate_id" id="getcate_id" type="hidden" value="<?=$cate_id?>" />
            <input name="getmenu_id" id="getmenu_id" type="hidden" value="<?=$menu_id?>" />
  </table>
  <div id="popmenu">
  <table border="0" cellpadding="0" cellspacing="0" bordercolor="#000000" >
		  <?
          		$sql="SELECT
							tb_menu.menu_name,
							tb_menu.menu_id
							FROM
							tb_menu
							WHERE
							tb_menu.menu_id = '$menu_id' ";
				$query=mysql_query($sql);
				$row=mysql_fetch_array($query);
          ?>
    <tr >
      <td  id="hradup"  align="left"valign="middle" colspan="3" bgcolor="#999999">
         <img src="images/x.png" align="top" width="30" height="30"style="cursor:pointer" onclick="close_frm_order()" />
          อับไฟล์ดาว์นโหลด<?=$row[menu_name]?> 
      </td>
    </tr>
    <tr>
      <td height="175"></td>
      <td height="175"  valign="top" ><iframe frameborder="0" id="ifr_mOrder" scrolling="no" height="175"  width="420"></td>
      <td height="175"></td>
    </tr>
    <tr>
      <td height="10"></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div> 
</body>
</html>
