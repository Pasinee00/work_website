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
<?
 function sS($fiveS){
	 if($fiveS==""){
	 return "";
	 }else{
		 $s=explode('-',$fiveS);
		 return $s[2]."/".$s[1]."/".$s[0];
		 }
	}

 function convert_date_th($date){
		 $date_split=explode('-',$date);
         if($date_split[1]=='01'){
            $date_split[1]='ม.ค.';
         }else if($date_split[1]=='02'){
            $date_split[1]='ก.พ.';
         }else if($date_split[1]=='03'){
            $date_split[1]='มี.ค.';
         }else if($date_split[1]=='04'){
            $date_split[1]='เม.ย.';
         }else if($date_split[1]=='05'){
            $date_split[1]='พ.ค.';
         }else if($date_split[1]=='06'){
            $date_split[1]='มิ.ย.';
         }else if($date_split[1]=='07'){
            $date_split[1]='ก.ค.';
         }else if($date_split[1]=='08'){
            $date_split[1]='ส.ค.';
         }else if($date_split[1]=='09'){
            $date_split[1]='ก.ย.';
         }else if($date_split[1]=='10'){
            $date_split[1]='ต.ค.';
         }else if($date_split[1]=='11'){
            $date_split[1]='พ.ย.';
         }else if($date_split[1]=='12'){
            $date_split[1]='ธ.ค.';
         }
         $date_split[0] = $date_split[0]+543;
		 return $date_split[2]." ".$date_split[1]." ".$date_split[0];
 }

 function word_type($type){
     if($type == 'EI'){
         return 'วิธีปฏิบัติ ( EI )';
     }else if($type == 'EP'){
         return 'ระเบียบปฏิบัติ ( EP ) ';
     }else if($type == 'ED'){
         return 'เอกสารสนับสนุน ( ED ) ';
     }else if($type == 'EF'){
         return 'แบบฟอร์ม ( EF ) ';
     }else if($type == 'EM'){
         return 'คู่มือสิ่งแวดล้อม (EM-TNB-01)';
     }
 }

 function full_word_type($type){
    if($type == 'EI'){
        return 'วิธีปฏิบัติ ( EI ) ในระบบการจัดการสิ่งแวดล้อม ( ISO14001 )';
    }else if($type == 'EP'){
        return 'ระเบียบปฏิบัติ ( EP ) ในระบบการจัดการสิ่งแวดล้อม ( ISO14001 )';
    }else if($type == 'ED'){
        return 'เอกสารสนับสนุน ( ED ) ในระบบการจัดการสิ่งแวดล้อม ( ISO14001 )';
    }else if($type == 'EF'){
        return 'แบบฟอร์ม ( EF ) ในระบบการจัดการสิ่งแวดล้อม ( ISO14001 ) ';
    }else if($type == 'EM'){
        return 'คู่มือสิ่งแวดล้อม (EM-TNB-01)';
    }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<title>ISO 14001 Quality Management - แผนกบริหารคุณภาพ</title>
<link href="main.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="scripts/isocss.css" />

<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script type="text/javascript" src="function.js"></script>
<script type="text/javascript" src="scripts/sdmenu.js">	</script>
<script type="text/javascript">
	var myMenu;
	window.onload = function() {
		myMenu = new SDMenu("iso_menu");
		myMenu.init();
	};
</script>
<style type="text/css">
	body {
			font-family: Arial, sans-serif;
			font-size: 13px;
			margin-left: 0px;
			margin-top: 0px;
			margin-right: 0px;
			margin-bottom: 0px;
			background-image: url(images/bg_green.jpg);
			background-repeat: repeat-x;
			background-position: center center;
			background-attachment: fixed;
	}
	td{
		font-family:"MS Sans Serif";
		font-size:small;
	}		
	#popTagLogin{
		width:450px;
		height:180px;
		
		top:50%;
		left:50%;
		margin-top:-120px;
		margin-left:-120px;
	
		position:absolute;
		background-color:transparent;
	}
	#popTagLogin{
		display:none;
	}
    .text-slid{
        color: white;
    }
	a:link {
	color: #00F;
	}
	a:visited {
		color: #00F;
	}
	a:hover {
		color: #06F;
	}
	a:active {
		color: #00F;
	}
	
	a img  
	{  
	border: none;  
	}
     html {
    scroll-behavior: smooth;
    }
    
</style>
</head>

<body>
<? include ('include/header_iso.html');?>
<table width="900" border="0" align="center" cellpadding="0" cellspacing="7" background="images/bgtab_green.jpg">
  <tr >
    <td width="190" height="600" valign="top"> <? include ('include/menu_iso.php'); ?></td>
    <td width="680" valign="top" class="margin_white">
        <div style="background-color:#FFF;" >
        <table width="100%"  align='center' ><tr>
            <td align='' class="topic_green"><h3>&nbsp; &nbsp;<?=word_type($_GET[Doc_type])?></h3></td>
        </tr></table>
        <h2 align="">&nbsp; &nbsp;<?=full_word_type($_GET[Doc_type])?></h2>
        <br>
        <?php 
        $sql_head ="SELECT count(brn_code),
                        master_doc.brn_id,
                        tbl_branch.brn_code,
                        tbl_company.comp_code,
                        tbl_branch.brn_name,
                        master_doc.comp_id
                        
                        from website_db.make_doc
                        LEFT JOIN website_db.master_doc ON master_doc.id = make_doc.Master_doc_id
                        LEFT JOIN pis_db.tbl_branch ON master_doc.brn_id = tbl_branch.brn_id
                        LEFT JOIN pis_db.tbl_company ON master_doc.comp_id = tbl_company.comp_id
                        WHERE master_doc.Doc_type = '".$_GET[Doc_type]."'
                        AND master_doc.comp_id is not null
                        AND make_doc.status_show_web = 'Y'
                        GROUP BY tbl_branch.brn_id
                        ";
        //  echo  $sql_head;
         $query_head=mysql_query($sql_head);
         while($row_head=mysql_fetch_array($query_head)){
        ?>
        
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<a href="#<?=$row_head[comp_code].'-'.$row_head[brn_code]?>" style="text-decoration:none;font-size:18px;" class="text-slid"><?php echo $row_head[comp_code].'-'.$row_head[brn_code]?></a>
        <br>
        <br>
        <?php } ?>
        <!-- สำหรับทุกสาขา -->
        <?php 
            $sql_all_comp ="SELECT
                            make_doc.id,
                            make_doc.status_approve,
                            make_doc.file_pdf,
                            make_doc.Doc_date,
                            make_doc.Due_date,
                            make_doc.Doc_edition,
                            master_doc.doc_code,
                            master_doc.Doc_Name,
                            master_doc.Doc_type
                        FROM
                            website_db.make_doc
                        LEFT JOIN website_db.master_doc ON master_doc.id = make_doc.Master_doc_id
                        WHERE make_doc.status_approve = 'recive'
                        AND master_doc.Doc_type = '".$_GET[Doc_type]."'
                        AND master_doc.comp_id is null
                AND make_doc.status_show_web = 'Y'";
            $query_all_comp=mysql_query($sql_all_comp);
            $num = 1;
            ?>
            <?php if(mysql_num_rows($query_all_comp)>0){?>
                <h2>&nbsp;สำหรับทุกสาขา</h2>
            <table  width="95%" border='1' align='center' cellspacing="0"  >
            <tr>
                <th align="center" height="30"><h3>ลำดับที่</h3></th>
                <th align="center" height="30"><h3>หมายเลขเอกสาร</h3></th>
                <th align="center" height="30" width=40%><h3>ชื่อเอกสาร</h3></th>
                <th align="center" height="30"><h3>ฉบับที่</h3></th>
                <th align="center" height="30"><h3>วันที่ออกเอกสาร</h3></th>
                <th align="center" height="30"><h3>วันที่มีผลบังคับใช้</h3></th>
            </tr>
            <?php while($row_all_comp=mysql_fetch_array($query_all_comp)){
                    
        ?>
         <tr>
                    <td align="center" height="30px"><?=$num?></td>
                    <td align="center"><?=$row_all_comp[doc_code]?></td>
                    <td><a href="#" style="text-decoration:none;font-size:12px;" onclick="show_pdf('<?=$row_all_comp[id]?>')" style="cursor:pointer; font-size: 12px;"><?=$row_all_comp[Doc_Name]?></a>
                    <?php if((strtotime(date("Y-m-d"))-strtotime($row_all_comp[Due_date]))/86400<30){
                        echo '<img src="images/new_icon.gif" alt="" width=12px>';
                    }?></td>
                    <td align="center"><?=$row_all_comp[Doc_edition]?></td>
                    <td align="center"><?=convert_date_th($row_all_comp[Doc_date])?></td>
                    <td align="center"><?=convert_date_th($row_all_comp[Due_date])?>  </td>
                </tr>
        <?php 
        $num += 1;
        } ?>
        </table>
        <?php } ?>
        
        <!-- หัวบริษัท และ สาขา -->
        <?php 
        $sql_head ="SELECT count(brn_code),
                        master_doc.brn_id,
                        tbl_branch.brn_code,
                        tbl_company.comp_code,
                        tbl_branch.brn_name,
                        master_doc.comp_id
                        
                        from website_db.make_doc
                        LEFT JOIN website_db.master_doc ON master_doc.id = make_doc.Master_doc_id
                        LEFT JOIN pis_db.tbl_branch ON master_doc.brn_id = tbl_branch.brn_id
                        LEFT JOIN pis_db.tbl_company ON master_doc.comp_id = tbl_company.comp_id
                        WHERE master_doc.Doc_type = '".$_GET[Doc_type]."'
                        AND master_doc.comp_id is not null
                        AND make_doc.status_show_web = 'Y'
                        GROUP BY tbl_branch.brn_id
                        ";
        //  echo  $sql_head;
         $query_head=mysql_query($sql_head);
         while($row_head=mysql_fetch_array($query_head)){
        ?>
        <br>
        <br>
        <h2 id=<?=$row_head[comp_code].'-'.$row_head[brn_code] ?>>&nbsp;<?php echo $row_head[comp_code].'-'.$row_head[brn_code]?></h2>
        <br>
        <table  width="95%" border='1' align='center' cellspacing="0"  style="border-spacing: 0px;">
            <tr >
                <td align="center" height=""><h3>ลำดับที่</h3></td>
                <td align="center" height=""><h3>หมายเลขเอกสาร</h3></td>
                <td align="center" height="" widtd=40%><h3>ชื่อเอกสาร</h3></td>
                <td align="center" height=""><h3>ฉบับที่</h3></td>
                <td align="center" height=""><h3>วันที่ออกเอกสาร</h3></td>
                <td align="center" height=""><h3>วันที่มีผลบังคับใช้</h3></td>
            </tr>
            <?php 
                $sql = "SELECT make_doc.id,
                            make_doc.status_approve,
                            make_doc.file_pdf,
                            make_doc.Doc_date,
                            make_doc.Due_date,
                            make_doc.Doc_edition,
                            master_doc.doc_code,
                            master_doc.Doc_Name
                        from website_db.make_doc
            LEFT JOIN website_db.master_doc ON master_doc.id = make_doc.Master_doc_id
            WHERE  master_doc.Doc_type = '".$_GET[Doc_type]."'
            AND make_doc.status_approve = 'recive'
            AND make_doc.status_show_web = 'Y'";
            if($row_head[brn_id]==''){
                $sql .= "AND master_doc.brn_id is null";
            }else{
                $sql .= "AND master_doc.brn_id = '".$row_head[brn_id]."'";
            }
            // echo $sql; 
            $query=mysql_query($sql);
            $num = 1;
            while($row=mysql_fetch_array($query)){
            ?>
                <tr>
                    <td align="center" height="30px"><?=$num?></td>
                    <td align="center"><?=$row[doc_code]?></td>
                    <td><a href="#" style="text-decoration:none;font-size:12px;" onclick="show_pdf('<?=$row[id]?>')" style="cursor:pointer; font-size: 12px;"><?=$row[Doc_Name]?></a>
                    <?php if((strtotime(date("Y-m-d"))-strtotime($row[Due_date]))/86400<30){
                        echo '<img src="images/new_icon.gif" alt="" width=12px>';
                    }?></td>
                    <td align="center"><?=$row[Doc_edition]?></td>
                    <td align="center"><?=convert_date_th($row[Doc_date])?></td>
                    <td align="center"><?=convert_date_th($row[Due_date])?>  </td>
                </tr>
            <?php $num += 1;
                    } ?>
        </table>
        <br>
        <br>
        <?php } ?>
        <br>
        <br>
        </div>
    </td>
      </tr>
    </table>
    </td>
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
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</div>  
<? include ('include/footer_iso.html'); ?>
<script>
    function show_pdf(id){
        window.open("backoffice/default/web_view_doc.html?make_doc_id="+id,"_blank")
    }
</script>
</body>
</html>