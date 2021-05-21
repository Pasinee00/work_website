<?
	session_start();
	include 'con_fig/db.php';
	$var=array_merge($_GET,$_POST);
	extract($var);
	if($status=="add_page"){
		$detail=html_entity_decode($message);	
		stripslashes($detail);
		if(empty($detail)){
			echo"กรอกข้อมูลหน้าเว็บ";
			exit();
		}
	}
	
	if($del_file=="ok"){
					
		$sql="UPDATE tb_news SET
			 tb_news.news_file=NULL
			 WHERE
			 tb_news.news_id='".$news_id."' ";
		$query=mysql_query($sql);
				
					if($query){
						echo "1";
					}else{
						echo "0";
					}
				exit();
		}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
$(document).ready(function(e) {
	var status=<?=$cmd?>;
	if(status==1){
	$('#add_edit').show();
	$('#add_file').show();
	}else if(status==2){
    $('#add_edit').hide();
	$('#add_file').hide();
	}
});
function select_menu(menu_id,menu_name){
	$('#menu_id').val(menu_id);
}
function  show_edit(){
	$('#add_edit').show();
}
function  show_edit_file(){
	$('#add_file').show();
}
function show_file(url_file){
    window.open(url_file);	
}


function del_file(news_id){
	 var ok=confirm("ยืนยันการลบข้อมูล");
		if(ok){	
			param  ="news_id="+news_id;
			param +="&del_file=ok";
			param +="&xid="+Math.random(); 
			getData = $.ajax({
					url :'?',
					data:encodeURI(param),
					async:false,
					success:function(getData){
						if(getData==1){
							location.reload();
						}else{
							alert('ไม่สามารถบันทึกได้');
						}
					}	
			}).responseText;
	  }///confirm
}///function
</script>
<style>
body{
	background-color:#F0EBE2; 
	font:"MS Sans Serif";
	font-size:13px;	
}
</style>
</head>

<body>
<form action="save_news.php" method="post" enctype="multipart/form-data">
	<?
  	$sql_cate="SELECT
								tb_category.cate_id,
								tb_category.cate_name
								FROM tb_category
								WHERE cate_id='".$cate_id."' ";
	$query_cate=mysql_query($sql_cate);
	$row_cate=mysql_fetch_array($query_cate);
	
	$sql_news="SELECT*
								 FROM tb_news
								 WHERE news_id='".$news_id."'"; 
		$query_news=mysql_query($sql_news);
		$row_news=mysql_fetch_array($query_news);
	?>
    	<table width="100%" border="1" cellpadding="0" cellspacing="0"> 
 		<tr>
      		<td align="center" valign="baseline" colspan="3" bgcolor="#CCCCCC" >ข่าวประชาสัมพันธ์<?=$row_cate[cate_name]?>&nbsp; ลำดับ<input type="text" name="order_new" id="order_new"  value="<?=$row_news[order_new]?>"style="width:20px;" /></td>
 		</tr>
    <?
		
		if($cmd==2){	
	?>
    <tr>
      <td width="36%" align="center" id="update_show" ><img src=<?=$row_news[news_localtion]?> height="80" width="80">
        <a onclick="show_edit();" style="cursor:pointer;"><br />&gt;&gt;แก้ไขรูปหัวข้อข่าว&lt;&lt;</a>
      </td>
      <?
        }
	?>
      <td width="35%">
        หัวข้อข่าว:<textarea name="titlenews" id="titlenews" cols="50" rows="5"><?=$row_news[news_title]?></textarea>
      </td>
      <?
		
	if($cmd==2){
	?>
      <td align="center">
        <? if($row_news[news_file]!=''){?>
        <B><u>ไฟล</u></B>์<br />
        <img src="icon/comment.png" style="width:25px; height:25px; cursor:pointer;" onclick="show_file('<?=$row_news[news_file]?>');" title="ดูไฟล์"/>
        <img src="icon/cut.png" style="width:25px; height:25px; cursor:pointer;" onclick="show_edit_file();" title="แก้ไขไฟล์"/>
        <img src="icon/delete.png" style="width:25px; height:25px; cursor:pointer;" onclick="del_file('<?=$row_news[news_id]?>')" title="ลบไฟล์"/><? }else{?>
        <script>
	 $(document).ready(function(e) {
		show_edit_file();
	 });
	 </script>
        <?	}?>
      </td>
      <? }?>
    </tr>
    <tr >
      <td align="left" id="add_edit" >อัพรูปหัวข้อข่าว :  <input type="file" name="filUpload" /></td>
      <td  <? if($row_news[news_file]!=''){?>colspan="3"<? }else{ ?>colspan="2"<? }?> align="right" id="add_file">อัพไฟล์ PDF  <input type="file" name="filUpload_file" /></td>
    </tr>
    <tr>
    <td colspan="3" align="center" bgcolor="#CCCCCC">รายละเอียดข่าว</td>
    </tr>
    </table> 
    
  <table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td>
      <textarea cols="80" id="message" name="message" rows="10" ><?=stripslashes($row_news[news_detail])?></textarea>
      <input name="cate_id" id="cate_id" type="hidden" value="<?=$cate_id?>" />
      <input name="news_id" id="news_id" type="hidden" value="<?=$news_id?>" />
      <input name="cmd"  id="cmd" type="hidden" value="<?=$cmd?>" />
      </td>
    </tr>
  </table>
</form>
<script type="text/javascript">
	//<![CDATA[
   CKEDITOR.replace( 'message',{
	language : 'en',
	height : 350,
	filebrowserBrowseUrl : './ckeditor/ckfinder/ckfinder.html',
	filebrowserImageBrowseUrl : './ckeditor/ckfinder/ckfinder.html?Type=Images',
	filebrowserFlashBrowseUrl : './ckeditor/ckfinder/ckfinder.html?Type=Flash',
	filebrowserUploadUrl : './ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
	filebrowserImageUploadUrl : './ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
	filebrowserFlashUploadUrl : './ckeditor/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'
	} );
	//]]>
</script>
</body>
</html>