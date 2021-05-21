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
<meta charset="utf-8">
<title>แผนกบริหารคุณภาพ - Quality Management</title>
<link rel="icon" href="images/favicon.ico" /> 
<link rel="shortcut icon" href="images/favicon.ico" /> 
<link rel="stylesheet" type="text/css" href="contentslider.css" />
<link href="main.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script type="text/javascript" src="function.js"></script>
<script type="text/javascript" src="contentslider.js">

/***********************************************
* Featured Content Slider- (c) Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for this script and 100s more
***********************************************/
</script>
<script>
$(document).ready(function(e) {
	$('#hide_img').mouseover();
});
function onmouseout_img(){
	$('#hide_img').mouseover();
}
</script>
<style type="text/css">
body {
	background-image: url(images/bg_index.jpg);
	background-repeat: repeat-x;
	background-position:center center;
	background-attachment: fixed;
}
#popTagLogin{
	z-index:99;
	width:400px;
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
#hide_img{
	display:none;
}
</style>
</head>
<body >
<? include ('include/header_main.html'); ?>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td height="400" valign="top">  
	<div id="slider1" class="sliderwrapper2" >
    <div class="contentdiv" style="background-image:url(images/qm_main.jpg)"></div>
    <div class="contentdiv" style="background-image:url(images/iso14001.jpg)"></div>
    <div class="contentdiv" style="background-image:url(images/5S.jpg)"></div>    
    <div class="contentdiv" style="background-image:url(images/safety.jpg)"></div>
    </div>  
    </td>
  </tr>
</table>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="0">  
<tr>
  <td><hr></td></tr>
  <tr>
    <td height="170" valign="bottom">
      <div id="paginate-slider1" class="pagination" >   
    <table width="900" border="0" cellspacing="5" cellpadding="0">
      <tr>
        <td width="33%" align="center">
        <a class="toc"><img src="images/qm_main.jpg" width="290" height="150" style="border:0px;" id="hide_img"></a>
        <a href="ISO.php?cate_id=1" class="toc" title="งานส่วน ISO 14001 มาตรฐานระบบการจัดการสิ่งแวดล้อม">
        <img src="images/iso14001_button.png" width="290" height="150" style="border:0px" id="ISO" onmouseout="onmouseout_img();">
        </a>
        </td>
        <td width="33%" align="center">
       	 <a href="5S.php?cate_id=2" class="toc" title="งานส่วนกิจกรรม 5 ส">
         <img src="images/5S_button.png" width="290" height="150" style="border:0px" id="5S" onmouseout="onmouseout_img();">
         </a>
        </td>
        <td width="33%" align="center">
        <a href="safety.php?cate_id=3" class="toc" title="งานส่วนความปลอดภัยในการทำงาน">
        <img src="images/safety_button.png" width="290" height="150" style="border:0px" id="safety" onmouseout="onmouseout_img();">
		</a>
       </td>
      </tr>
    </table>
    </div>
<script type="text/javascript">
	featuredcontentslider.init({
	id: "slider1",  //id of main slider DIV
	contentsource: ["inline", ""],  //Valid values: ["inline", ""] or ["ajax", "path_to_file"]
	toc: "markup",  //Valid values: "#increment", "markup", ["label1", "label2", etc]
	nextprev: [""],  //labels for "prev" and "next" links. Set to "" to hide.
	revealtype: "mouseover", //Behavior of pagination links to reveal the slides: "click" or "mouseover"
	enablefade: [true,0.2],  //[true/false, fadedegree]
	autorotate: [false, 3000],  //[true/false, pausetime]
	onChange: function(previndex, curindex, contentdivs){  //event handler fired whenever script changes slide
		//previndex holds index of last slide viewed b4 current (0=1st slide, 1=2nd etc)
		//curindex holds index of currently shown slide (0=1st slide, 1=2nd etc)
		
	}
	
})
</script>
    </td>
  </tr>
</table>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="0">
 <tr>
    <td class="text_black_normal">&nbsp; </td>
  </tr>  
</table>
<div id="popTagLogin">
  <table width="294" height="73%" border="1" cellpadding="0" cellspacing="0">
    <tr>
      <td height="31"></td>
      <td  bgcolor="#FFFFFF" width="300" align="left" valign="middle" >&nbsp;<img src="images/x.png" align="top" style="cursor:pointer" onclick="close_frm_Login()" />&nbsp;&nbsp;        &nbsp;<img src="images/key.png" width="32" height="32" /><b>เข้าสู่ระบบ</b></td>    
      <td ></td> 
    </tr>
    <tr bgcolor="#F0EBE2">
      <td></td>
      <td valign="top" bgcolor="#FFFFFF"><iframe frameborder="0" id="ifr_popTagLogin"></iframe></td>
      <td ></td>
    </tr>
    <tr bgcolor="#F0EBE2">
      <td height="2"></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div>  
<? include ('include/footer_main.html'); ?>
</body>
</html>
