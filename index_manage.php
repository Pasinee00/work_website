<?php
session_start();
include ("con_fig/db.php");
	$var=array_merge($_GET,$_POST);
	extract($var);
	if($status=="add_cate"){
		if($cate_id==""){
			$sql_insert="INSERT INTO tb_category  SET cate_name='".$cate_name."' ";
			$query_insert=mysql_query($sql_insert);
			if($query_insert){
				echo "เพิ่มข้อมูลรายการเรียบร้อย";
			}
		}else{
			$sql_update="UPDATE tb_category SET
											cate_name='".$cate_name."' 
											WHERE cate_id='".$cate_id."' ";
			$query_update=mysql_query($sql_update);
			if($query_update){
				echo"แก้ไขรายการเรียบร้อย";
			}else{
				echo"แก้ไขข้อมูลผิดพลาด";
			}
		}
			exit();
	}
	if($status=="add_main"){
		if($menu_id==""){
			$sql_max="SELECT MAX(menu_order) AS max_order FROM tb_menu WHERE cate_id='".$cate_id."'";
			$query_max=mysql_query($sql_max);
			$row_max=mysql_fetch_array($query_max);
			$max_order=$row_max[max_order]+1;

			$sql_insert="INSERT INTO tb_menu SET 
										menu_name='".$main_name."',
										menu_main='0',
										menu_order='".$max_order."',
										cate_id='".$cate_id."' ";
			$query_insert=mysql_query($sql_insert);
			if($query_insert){
				echo $cate_id."||";
			}
			exit();
		}else{
			$sql_update="UPDATE tb_menu SET
										menu_name='".$main_name."'
										WHERE menu_id='".$menu_id."' ";
			$query_update=mysql_query($sql_update);
			if($query_update){
				echo $cate_id."||";
			}
			exit();
		}
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
			if($type=="2"){
			$url = "wait";
			}
			$sql_insert="INSERT INTO tb_menu SET 
										menu_name='".$menu_name."',
										menu_main='".$row[menu_order]."',
										menu_order='".$max_order."',
										menu_url ='".$url."',
										type = '".$type."',
										cate_id='".$row[cate_id]."' ";
			$query_insert=mysql_query($sql_insert);
			if($query_insert){
				echo $row[cate_id]."||";
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
						tb_menu.menu_main='".$menu_order."' 
						AND
						tb_menu.cate_id='".$cate_id."' 
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
		if($cate_id==1){
			$localtion="upfile_ISO/";
		}elseif($cate_id==2){
			$localtion="upfile_5s/";
		}elseif($cate_id==3){
			$localtion="upfile_safety/";
		}
			  	$sql="SELECT *
					FROM tb_menu
					WHERE tb_menu.menu_id = '".$menu_id."'";
		$query=mysql_query($sql);
		$row=mysql_fetch_array($query);
		if($row[type]=="2"){
			if($row[menu_url]!="wait"){
				$oldfile_name = explode("/",$row[menu_url]);
				$oldfile_name = $oldfile_name[2];
				unlink($localtion.$oldfile_name);
				}
			}		
		$sql_del="DELETE  FROM tb_menu WHERE  tb_menu.menu_id='".$menu_id."'";
		$query_del=mysql_query($sql_del);
		$sql_page="DELETE  FROM tb_page WHERE  tb_page.page_id='".$page_id."'";
		$query_page=mysql_query($sql_page);
		$sql_sel="SELECT
								tb_link.link_localtion
								FROM
								tb_link
								WHERE
								tb_link.menu_id='".$menu_id."' ";
		$query_sel=mysql_query($sql_sel);
		while($row_sel=mysql_fetch_array($query_sel)){
		$localtion=iconv("UTF-8", "TIS-620",$row_sel[link_localtion]);
		$flgDelete = @unlink($localtion);
		}
		$sql_delsel="DELETE  FROM tb_link WHERE  tb_link.menu_id='".$menu_id."' ";
		$query_delsel=mysql_query($sql_delsel);
		if($query_del && $query_page && $query_delsel){
			echo"ลบข้อมูลเรียบร้อย";
		}else{
			echo"ลบข้อมูลไม่ได้";
		}
		exit();
	}
	if($status=="del_cate"){
		$sql_del="DELETE  FROM tb_category WHE RE  tb_category.cate_id='".$cate_id."' ";
		$query_del=mysql_query($sql_del);
		if($query_del){
			echo"ลบรายการเรียบร้อย";
		}else{
			echo"ไม่สามารถลบรายการได้";
		}
		exit();
	}
	if($status=="del_link"){
		$sql_sel="SELECT
								tb_link.link_localtion
								FROM
								tb_link
								WHERE
								tb_link.link_id='".$link_id."' ";
		$query_sel=mysql_query($sql_sel);
		$row_sel=mysql_fetch_array($query_sel);
		$localtion=iconv("UTF-8", "TIS-620",$row_sel[link_localtion]);
		$flgDelete = @unlink($localtion);
		$sql_del="DELETE  FROM tb_link WHERE  tb_link.link_id='".$link_id."' ";
		$query_del=mysql_query($sql_del);
		if($flgDelete && $query_del){
			echo "ลบรายการเรียบร้อย";

		}else{
			echo "ไม่สามารถลบรายการได้";
		}
		exit();
	}
	if($status=="del_news"){
			$sql_news="SELECT
								tb_news.news_localtion
								FROM
								tb_news
								WHERE
								tb_news.news_id='".$news_id."' ";
		$query_news=mysql_query($sql_news);
		$row_news=mysql_fetch_array($query_news);
		$localtion=iconv("UTF-8", "TIS-620",$row_news[news_localtion]);
		$flgDelete = @unlink($localtion);
		$sql_del="DELETE  FROM tb_news WHERE  tb_news.news_id='".$news_id."' ";
		$query_del=mysql_query($sql_del);
		if($flgDelete && $query_del){
			echo "ลบข้อมูลเรียบร้อย";
			}else{
				echo "ไม่สามารถลบข้อมุลได้";
			}
			exit();
		}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<title>MANAGER WEB SITE</title>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
$(function(){
	  //maximumwindows
	  window.moveTo(0, 0); 
	  window.resizeTo(screen.availWidth, screen.availHeight); 
      
	  var height=$(window).height();
	  var a_height=height*91/150 ;
	  var b_height=height*75/95;
	  
     $('#main_tb1').height(a_height);  
	 $('#Display').height(b_height)    ;
	 
	 window.status='ผู้ใช้งานระบบ : <?=$_SESSION['username']?>';
});

function oPenLink(url){
	 var ok=confirm("ยืนยันการออกจากระบบ");
			 if(ok){	
			window.location=url+'?xid='+Math.random();	
			 }
}

function del_link(link_id,menu_id,cate_id){
	
	var ok=confirm("ยืนยันการลบข้อมูล");
	if(ok){
	var param   = "link_id="+link_id;
			param += "&status=del_link";
			param += "&xid="+Math.random();
			getData = $.ajax({
				url : '?',
				data :encodeURI(param),
				async:false,
				success: function(getData){
					alert(getData);
				$('#Display').attr('src', 'upfile.php?menu_id='+menu_id+'&cate_id='+cate_id+'&xid='+Math.random());
				}
			}).responseText;
	}
}

function cate(){
	$('#Display').attr('src', 'list_category.php?xid='+Math.random());		
}

function manager_main(){
	$('#Display').attr('src', 'main_manager.php?xid='+Math.random());		
}
function cate_select(){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'pop_up/category_add.php?xid='+Math.random());		
	$("#popmenu").show();
}
function add_cate(){
	if($('#ifr_mOrder').contents().find('#cate_name').val()==""){
		alert('กรอกหมวดหมู่');
		return false;
	}
	var param   = "cate_name="+$('#ifr_mOrder').contents().find('#cate_name').val();
			param += "&cate_id="+$('#ifr_mOrder').contents().find('#cate_id').val();
			param += "&status=add_cate"
			param += "&xid="+Math.random();
			getData = $.ajax({
				url : '?',
				data:encodeURI(param),
				async:false,
				success: function(getData){
					$('#popmenu').hide();
					alert(getData);
					$('#Display').attr('src', 'list_category.php?xid='+Math.random());		
				}
			}).responseText;
}
function del_cate(cate_id){
	var param   = "cate_id="+cate_id;
			param += "&status=del_cate";
			param += "&xid="+Math.random(); 

			getData = $.ajax({
					url :'?',
					data:encodeURI(param),
					async:false,
					success:function(getData){
							alert(getData);
							$('#Display').attr('src', 'list_category.php?xid='+Math.random());		
					}	
			}).responseText;
}
function edit_cate(cate_id){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'pop_up/category_add.php?cate_id='+cate_id+'&xid='+Math.random());		
	$("#popmenu").show();
}

function menumain(cate_id){
	$('#Display').attr('src', 'list_menumain.php?cate_id='+cate_id+'&xid='+Math.random());		
}
function select_main(cate_id){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'pop_up/menumain_add.php?cate_id='+cate_id+'&xid='+Math.random());		
	$("#popmenu").show();
	//$('#Display').attr('src', 'menumain_add.php?cate_id='+cate_id+'&xid='+Math.random());		
}
function edit_main(menu_id){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'pop_up/menumain_add.php?menu_id='+menu_id+'&xid='+Math.random());		
	$("#popmenu").show();
}
function add_main(){
	var main_name=$('#ifr_mOrder').contents().find('#main_name').val();
	var cate_id=$('#ifr_mOrder').contents().find('#cate_id').val();
	var menu_id=$('#ifr_mOrder').contents().find('#menu_id').val();
	if(main_name==""){
		alert('ระบุชื่อเมนูหลัก');
		$('#ifr_mOrder').contents().find('#main_name').select();
		return false;
	}
	var param  = "main_name="+main_name;
			param += "&cate_id="+cate_id;
			param += "&menu_id="+menu_id;
			param += "&status=add_main";
			param += "&xid="+Math.random();
			getData = $.ajax({
				url:'?',
				data:encodeURI(param),
				async:false,
				success:function(getData){
					var temp = getData.split("||");
					$('#Display').attr('src', 'list_menumain.php?cate_id='+temp[0]+'&xid='+Math.random());			
				}
			}).responseText;
	$('#popmenu').hide();
}

function select_menu(menu_id){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'pop_up/menu_add.php?menu_id='+menu_id+'&xid='+Math.random());		
	$("#popmenu").show();
	//$('#Display').attr('src', 'menumain_add.php?cate_id='+cate_id+'&xid='+Math.random());		
}
function add_menu(){
	var menu_name=$('#ifr_mOrder').contents().find('#menu_name').val();
	var menu_id=$('#ifr_mOrder').contents().find('#menu_id').val();
	var type =$('#ifr_mOrder').contents().find('#type').val();
	if(menu_name==""){
		alert('ระบุชื่อเมนู');
		$('#ifr_mOrder').contents().find('#menu_name').select();
		return false;
	}else if(type ==""){
	alert('ระบุประเภท')	
	$('#ifr_mOrder').contents().find('#type').focus();
		return false;
	}
	var param  = "menu_name="+menu_name;
			param +="&menu_id="+menu_id;
			param += "&status=add_menu";
			param +="&type="+type;
			param += "&xid="+Math.random();
			getData = $.ajax({
				url:'?',
				data:encodeURI(param),
				async:false,
				success:function(getData){
					//alert(getData);
					var temp = getData.split("||");
					$('#Display').attr('src', 'list_menumain.php?cate_id='+temp[0]+'&xid='+Math.random());			
				}
			}).responseText;
	$('#popmenu').hide();
}
//////////////////////////
function edit_menu(menu_id,page_id){
	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'pop_up/write_content.php?menu_id='+menu_id+'&page_id='+page_id+'&xid='+Math.random());		
	$("#popmenu").show();
}
function view_menu(page_id,cate_id,menu_id){ 
	if(cate_id==1){
		window.open("ISO_type.php?cate_id="+cate_id+"&page_id="+page_id+"&menu_id="+menu_id, "_blank");
	}else if(cate_id==2){
		window.open("5S_type.php?cate_id="+cate_id+"&page_id="+page_id+"&menu_id="+menu_id, "_blank");
	}else if(cate_id==3){
		window.open("safety_type.php?cate_id="+cate_id+"&page_id="+page_id+"&menu_id="+menu_id, "_blank");
	}
}
function write_article(menu_id,status){
	$("#popmenu").hide();
	$('#Display').attr('src', 'box_page.php?menu_id='+menu_id+'&cmd='+status+'&xid='+Math.random());	
}
function upload_file(menu_id,status,cate_id){
	$("#popmenu").hide();
	$('#Display').attr('src', 'upfile.php?menu_id='+menu_id+'&cmd='+status+'&cate_id='+cate_id+'&xid='+Math.random());	
}

function menu(){
/* 	var pTop = $('#popmenu').height() + $(window).scrollTop();
	$('#popmenu').css({position:"absolute", top: pTop });
	$('#ifr_mOrder').attr('src', 'menu_add.php?xid='+Math.random());			
	$("#popmenu").show();  */
	// window.location='box_page.php';
	 $('#Display').attr('src', 'box_page.php?xid='+Math.random());	
}

function frame(){
	$('#Display').attr('src', 'frame_add.php?xid='+Math.random());		
}

function close_frame(){
	$('#popmenu').hide(); 
}

function close_frm_order(){
	$('#popmenu').hide(); 
}
function del_main(main_id,menu_order,cate_id){
	var ok=confirm("ยืนยันการลบข้อมูล");
	if(ok){
	var param   = "menu_order="+menu_order;
			param += "&main_id="+main_id;
			param += "&cate_id="+cate_id;
			param += "&status=del_main";
			param += "&xid="+Math.random();
			getData = $.ajax({
				url :'?',
				data:encodeURI(param),
				async:false,
				success:function(getData){
					alert(getData);
					$('#Display').attr('src', 'list_menumain.php?xid='+Math.random());		
				}
			}).responseText;
	}
}
function del_menu(menu_id,page_id,cate_id){
	var ok =confirm("ยืนยันการลบเมนู");
	if(ok){
	var param   = "menu_id="+menu_id;
			param += "&page_id="+page_id;
			param += "&cate_id="+cate_id;
			param += "&status=del_menu";
			param += "&xid="+Math.random();
			getData = $.ajax({
				url :'?',
				data :encodeURI(param),
				async:false,
				success:function(getData){
					alert(getData);
					$('#Display').attr('src', 'list_menumain.php?xid='+Math.random());		
				}
			}).responseText;
	}
}
//////////////////////////////////////////
function contact(){
	$('#Display').attr('src', 'box_contact.php?xid='+Math.random());		
}
//////////////////////////////////////
function news(cate_id){
	$('#Display').attr('src', 'list_news.php?cate_id='+cate_id+'&xid='+Math.random());	
	}
function newsbox(cate_id){
	$('#Display').attr('src', 'box_news.php?cate_id='+cate_id+'&cmd=1&xid='+Math.random());	
	}
function edit_news(news_id){
	$('#Display').attr('src', 'box_news.php?news_id='+news_id+'&cmd=2&xid='+Math.random());	
	}
function del_news(news_id){
	var ok=confirm("ยืนยันการลบข้อมูล");
	if(ok){
	var param   = "news_id="+news_id;
			param += "&status=del_news";
			param += "&xid="+Math.random();
			getData = $.ajax({
				url :'?',
				data:encodeURI(param),
				async:false,
				success:function(getData){
					alert(getData);
					$('#Display').attr('src', 'list_news.php?xid='+Math.random());		
				}
			}).responseText;
	}
}
function view_news(news_id,cate_id){
	if(cate_id==1)	{
		window.open("ISO.php", "_blank");
	}else if(cate_id==2){
		window.open("5S.php","_blank");
	}else if(cate_id==3){
		window.open("safety.php","_blank")
	}
}
</script>
<style>
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
#pcm{display:none;}
ul.pureCssMenu ul{display:none}
ul.pureCssMenu li:hover>ul{display:block}
ul.pureCssMenu ul{position: absolute;left:-1px;top:98%;}
ul.pureCssMenu ul ul{position: absolute;left:98%;top:-2px;}
ul.pureCssMenu,ul.pureCssMenu ul {
	margin:0px;
	list-style:none;
	padding:2px 5px 5px 5px;
	/* background-color:#FFFFFF; */
	background-repeat:repeat;
	border-color:#A6A6A6;
	border-width:0px;
	border-style:solid;
}
ul.pureCssMenu table {border-collapse:collapse}ul.pureCssMenu {
	display:block;
	zoom:1;
	float: left;
}
ul.pureCssMenu ul{ 
	width:250.70000000000002px;
}
ul.pureCssMenu li{
	display:block;
	margin:1px 0px 0px 1px;
	font-size:0px;
}
ul.pureCssMenu a:active, ul.pureCssMenu a:focus {
outline-style:none;
}
ul.pureCssMenu a, ul.pureCssMenu li.dis a:hover, ul.pureCssMenu li.sep a:hover {
	display:block;
	vertical-align:middle;
	background-color:#660b12;
	border-width:0px;
	border-color:#FFFFFF;
	border-style:solid;
	text-align:left;
	text-decoration:none;
	padding:5px;
	_padding-left:0;
	font:bold 10px MS Sans Serif;
	color: #FFFFFF;
	text-decoration:none;
	cursor:pointer;
}

ul.pureCssMenu span{
	overflow:hidden;
}
ul.pureCssMenu li {
	float:left;
}
ul.pureCssMenu ul li {
	float:none;
}
ul.pureCssMenu ul a {
	text-align:left;
	white-space:nowrap;
}
ul.pureCssMenu li.sep{
	text-align:left;
	padding:0px;
	line-height:0;
	height:100%;
}
ul.pureCssMenu li.sep span{
	float:none;	padding-right:0;
	width:3;
	height:100%;
	display:inline-block;
	background-color:#FF9900;	background-image:none;}
ul.pureCssMenu ul li.sep span{
	width:100%;
	height:3;
}
ul.pureCssMenu li:hover{
	position:relative;
}
ul.pureCssMenu li:hover>a{
	background-color:#F28E96;
	border-color:#FFFFFF;
	border-style:solid;
	font:bold 10px MS Sans Serif;
	color: #FFFFFF;
	text-decoration:none;
}
ul.pureCssMenu li a:hover{
	position:relative;
	background-color:#F28E96;
	border-color:#FFFFFF;
	border-style:solid;
	font:bold 10px MS Sans Serif;
	color: #FFFFFF;
	text-decoration:none;
}
ul.pureCssMenu li.dis a {
	color: #AAAAAA !important;
}
ul.pureCssMenu img {border: none;float:left;_float:none;margin-right:5px;width:16px;
height:16px;
}
ul.pureCssMenu ul img {width:16px;
height:16px;
}
ul.pureCssMenu img.over{display:none}
ul.pureCssMenu li.dis a:hover img.over{display:none !important}
ul.pureCssMenu li.dis a:hover img.def {display:inline !important}
ul.pureCssMenu li:hover > a img.def  {display:none}
ul.pureCssMenu li:hover > a img.over {display:inline}
ul.pureCssMenu a:hover img.over,ul.pureCssMenu a:hover ul img.def,ul.pureCssMenu a:hover a:hover ul img.def,ul.pureCssMenu a:hover a:hover a:hover ul img.def,ul.pureCssMenu a:hover a:hover img.over,ul.pureCssMenu a:hover a:hover a:hover img.over,ul.pureCssMenu a:hover a:hover a:hover a:hover img.over{display:inline}
ul.pureCssMenu a:hover img.def,ul.pureCssMenu a:hover ul img.over,ul.pureCssMenu a:hover a:hover ul img.over,ul.pureCssMenu a:hover a:hover a:hover ul img.over,ul.pureCssMenu a:hover a:hover img.def,ul.pureCssMenu a:hover a:hover a:hover img.def,ul.pureCssMenu a:hover a:hover a:hover a:hover img.def{display:none}
ul.pureCssMenu a:hover ul,ul.pureCssMenu a:hover a:hover ul,ul.pureCssMenu a:hover a:hover a:hover ul{display:block}
ul.pureCssMenu a:hover ul ul,ul.pureCssMenu a:hover a:hover ul ul{display:none}
ul.pureCssMenu span{
	display:block;
	background-image:url(images/arrv_blue_2.gif);
	background-position:right center;
	background-repeat: no-repeat;
   padding-right:8px;}
ul.pureCssMenu li:hover>a>span{	background-image:url(images/arrv_white_2.gif);
}
ul.pureCssMenu a:hover span{	_background-image:url(images/arrv_white_2.gif)}
ul.pureCssMenu ul span,ul.pureCssMenu a:hover table span{background-image:url(images/arr_blue_2.gif)}
ul.pureCssMenu ul li:hover > a span{	background-image:url(images/arr_white_2.gif);}
ul.pureCssMenu table a:hover span,ul.pureCssMenu table a:hover a:hover span,ul.pureCssMenu table a:hover a:hover a:hover span{background-image:url(images/arr_white_2.gif)}
ul.pureCssMenu table a:hover table span,ul.pureCssMenu table a:hover a:hover table span{background-image:url(images/arr_blue_2.gif)}
ul.pureCssMenu li a.pureCssMenui0{
font:n;
}
ul.pureCssMenu li a.pureCssMenui0:hover{
font:o;
}
body {
	background-image: url(images/bg_index.jpg);
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
div.menu {  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 8pt;
  font-style: normal;
  font-weight: normal;
  color: #000000;
}
div.menuBar {  font-family: "MS Sans Serif", Arial, sans-serif;
  font-size: 8pt;
  font-style: normal;
  font-weight: normal;
  color: #000000;
}
div.menuBar {  background-color: #d0d0d0;
  border: 1px solid;
  border-color: #f0f0f0 #909090 #909090 #f0f0f0;
  padding: 4px 2px 4px 2px;
  text-align: left;
}
body,td,th {
	font-family: "MS Sans Serif";
	font-size: 10px;
}

#loading {	position:absolute;
	width:100%;
	height:100%;
	z-index:1;
	background-color:#000;
	display:none ;
	filter: alpha(opacity=60);
	-moz-opacity: 0.60;
	opacity: 0.60;
}
</style>
</head>

<body>
 <div id="popmenu">  
  <table height="100%" border="1" cellpadding="0" cellspacing="0" bgcolor="#CCCCCC">
    <tr >
      <td height="31" bgcolor="#CCCCCC"></td>
      <td width="300" align="left" valign="bottom" bgcolor="#CCCCCC">&nbsp;&nbsp;
      <img src="images/x.png" align="top" style="cursor:pointer" onclick="close_frm_order()" />&nbsp;&nbsp;<font  color="#FFFFFF"><b>เพิ่มข้อมูล</b></font></td>    
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
<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td background="img/a.png" style="background-image:url(img/a.png); background-repeat:no-repeat; background-position: bottom right;"><table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td valign="top" background="img/a.png" style="background-image:url(img/a.png); background-repeat:no-repeat; background-position:top left;"><table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0" id="main_tb1">
          <tr>
            <td width="72%" align="left" valign="top">

			        <ul class="pureCssMenu pureCssMenum">
						<li class="pureCssMenui0"><a class="pureCssMenui0" href="#" ><span>MANAGER WEB SITE</span></a></li>
                        <li class="pureCssMenui0"><a class="pureCssMenui0" onclick="	contact()"><span>เพิ่ม/แก้ไขข้อมูลการติดต่อ</span></a></li>
					<? /*   <li class="pureCssMenui0"><a class="pureCssMenui0" onclick="cate();"><span>เพิ่ม/ลบ/แก้ไข หมวดงาน</span></a></li>*/?>
                        <li class="pureCssMenui0"><a class="pureCssMenui0" ><span>เพิ่ม/ลบ/แก้ไข  ข่าวประชาสัมพันธ์ </span></a>
                      <ul>
                        <?
							$sql_news="SELECT
											tb_category.cate_id,
											tb_category.cate_name
											FROM tb_category
											ORDER BY tb_category.cate_id ASC";
							$query_news=mysql_query($sql_news);
							while($row_news=mysql_fetch_array($query_news)){
						?>
                        <li ><a class="pureCssMenui" onclick="news('<?=$row_news[cate_id]?>')">:: <?=$row_news[cate_name]?></a></li>
                        <?
							}
						?>
                        </ul></li> 
                        <li class="pureCssMenui0"><a class="pureCssMenui0"><span>เพิ่ม/ลบ/แก้ไข เมนู</span></a>
                        <ul>
                        <?
							$sql="SELECT
											tb_category.cate_id,
											tb_category.cate_name
											FROM tb_category
											ORDER BY tb_category.cate_id ASC";
							$query=mysql_query($sql);
							while($row=mysql_fetch_array($query)){
						?>
                        <li id="subMenu"><a class="pureCssMenui" onclick="menumain('<?=$row[cate_id]?>')">:: <?=$row[cate_name]?></a></li>
                        <?
							}
						?>
                        </ul>	</li>
<?php /*      <li class="pureCssMenui0"><a class="pureCssMenui0" onclick="menu();"><span>เพิ่มเมนูย่อย</span></a></li>
                        <li class="pureCssMenui0"><a class="pureCssMenui0" onclick="frame();"><span>หัวเว็บ</span></a></li> 
                        <li class="pureCssMenui0"><a class="pureCssMenui0" onclick="	manager_main();"><span>เพิ่ม/ลบ/แก้ไข หน้าแรกของเว็บ</span></a></li>*/?>
						<li class="pureCssMenui0"><a class="pureCssMenui0" onclick="oPenLink('logout.php')" ><span>ออกจากระบบ</span></a></li>
                </ul>		
			 
		 </td>
            <td width="28%" align="right"><img src="images/manager_web.png" width="320" height="64"></td>
          </tr>
          <tr>
            <td height="100%" colspan="2" align="center" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" id="Table_01">
              <tr>
                <td width="24"><img src="images/body_01.png" width="24" height="22" alt=""></td>
                <td background="images/body_02.png"></td>
                <td width="24"><img src="images/body_03.png" width="24" height="22" alt=""></td>
              </tr>
              <tr>
                <td background="images/body_04.png">&nbsp;</td>
                <td background="images/body_05.png"><p>
                  <iframe id="Display" name="Display" frameborder="0" width="100%" height="100%" scrolling="auto" src="" ></iframe>
               </td>
                <td background="images/body_06.png">&nbsp;</td>
              </tr>
              <tr>
                <td><img src="images/body_07.png" width="24" height="23" alt=""></td>
                <td background="images/body_08.png"></td>
                <td><img src="images/body_09.png" width="24" height="23" alt=""></td>
              </tr>
            </table>
              <p><br>
              </p></td>
          </tr>
        </table></td>
      </tr>
    </table></td>
  </tr>
</table>
</body>
</html>