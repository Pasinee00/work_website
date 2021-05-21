<?
	session_start();
	$var=array_merge($_GET,$_POST);
	extract($var);
	include 'con_fig/db.php';
	if($status=="login"){
		$sql="SELECT * FROM tb_user WHERE username='".$username."' AND password='".$password."' ";
		$result=mysql_query($sql);
		$num_doc  = mysql_num_rows($result);
		$row=mysql_fetch_array($result);
		$_SESSION['username'] = $row[username];	
		if($num_doc==0){
			echo "0||ไม่มีข้อมูลในระบบ||".$row[user_type];
		}else{
			echo "1||ยินดีต้อนรับ||".$row[user_type];
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
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
function select_admin(){
	$('#popTagLogin').show();
	$('#ifr_popTagLogin').attr('src', 'login.php?xid='+Math.random());		
}
function select_type(cate_id){
	window.location='page.php?cate_id='+cate_id;
}
function close_frm_Login(){
	$('#popTagLogin').hide();
}
function login(){
	var username=$('#ifr_popTagLogin').contents().find('#username').val();
	var password=$('#ifr_popTagLogin').contents().find('#password').val();
	var cate_id=$('#ifr_popTagLogin').contents().find('#cate_id').val();

	if(username==""  && password==""){
		alert('กรอกข้อมูลให้ครบ');
		$('#ifr_popTagLogin').contents().find('#username').select();
		return false; 
	}
	if(username==""){
		alert('กรุณากรอก USERNAME');
		$('#ifr_popTagLogin').contents().find('#username').select();
		return false; 
	}
	if(password==""){
		alert('กรุณากรอก PASSWORD');
		$('#ifr_popTagLogin').contents().find('#password').select();
		return false; 
	}
	var param  =  "status=login";
			param  += "&username="+username;
			param  += "&password="+password;
			param  += "&xid="+Math.random();
			getData = $.ajax({
					url : '?',
					data : encodeURI(param) ,
					async : false,
					success:function(getData){
			
						var temp=getData.split('||');
						if(temp[0]==0){
							alert(temp[1]);
							$('#ifr_popTagLogin').contents().find('#username').select();
						}
						if(temp[0]==1){
							$('#popTagLogin').hide();
							if(temp[2]==1){
								window.location='index_manage.php?xid='+Math.random();
/* 									var url='index_manage.php?cate_id='+cate_id+'&admin=admin&xid='+Math.random();
									window.open(url,'','toolbar=no,scrollBars=auto,location=0,resizable=no,status=yes,width=800,height=500');
									window.open('','_parent','');
									window.close(); */
							}else{
								window.location='page.php?cate_id='+cate_id;
							}
						}
					
					}
			}).responseText;
}
</script>
<style>
body{
	font-family: "ms Sans Serif";
	font-size: small;
}
#popTagLogin{
	width:450px;
	height:180px;
	
	top:50%;
	left:50%;
 	margin-top:-150px;
	margin-left:-150px;
	
	position:absolute;
	background-color:transparent;
}
#popTagLogin{
	display:none;	
}
</style>
<body>
<div id="popTagLogin" > 
  <table height="100%" border="0" cellpadding="0" cellspacing="0">
    <tr bgcolor="#F0EBE2">
      <td height="31"></td>
      <td width="300" align="left" valign="middle" background="images/2.png">&nbsp;&nbsp;
      <img src="icon/close_icon.gif" align="top" style="cursor:pointer" onclick="close_frm_Login()" />&nbsp;&nbsp;<b>เข้าสู่ระบบ</b>
      </td>    
      <td></td> 
    </tr>
    <tr bgcolor="#F0EBE2">
      <td></td>
      <td valign="top" bgcolor="#F0EBE2"><iframe frameborder="0" id="ifr_popTagLogin"></iframe></td>
      <td ></td>
    </tr>
    <tr bgcolor="#F0EBE2">
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div> 
<table width="100%" border="1">
  <tr>
  <?
  		$sql="SELECT * FROM tb_category";
		$query=mysql_query($sql);
		while($row=mysql_fetch_array($query)){
  ?>
    <td onclick="select_type(<?=$row[cate_id]?>);" style="cursor:pointer"><?=$row[cate_name]?></td>
  <?
		}
  ?>
  </tr>
  <tr >
    <td onclick="select_admin();" style="cursor:pointer" colspan="3">admin</td>
  </tr>
</table>
</body>
</html>