<div style="float: left" id="iso_menu" class="sdmenu">


<?php
	$var=array_merge($_GET,$_POST);
	extract($var);
	include 'con_fig/db.php';
	
   		$sql="SELECT
						tb_menu.menu_id,
						tb_menu.menu_name,
						tb_menu.menu_main,
						tb_menu.menu_order,
						tb_menu.menu_url,
						tb_menu.cate_id,
						tb_menu.type
						FROM tb_menu
						WHERE tb_menu.menu_main = 0
						AND cate_id='".$cate_id."' ";
		$query=mysql_query($sql);
		while($row=mysql_fetch_array($query)){ 
?>
		<div>
        <span><?=$row[menu_name]?></span>
<?
		$sql_menu="SELECT *
									FROM
									tb_menu
									WHERE tb_menu.menu_main ='".$row[menu_order]."' 
									AND  cate_id='".$cate_id."' 
									ORDER BY menu_order ASC ";
		$query_menu=mysql_query($sql_menu);
				while($row_menu=mysql_fetch_array($query_menu)){ 
				if($row_menu[status]==1){ ?>
				<a href="<?=$row_menu[menu_url]?>"><?=$row_menu[menu_name]?></a>
			<? 
			 }elseif($row_menu[status]==2){
	        ?>
            <a onclick="select_admin();" style="cursor:pointer;"><?=$row_menu[menu_name]?></a>
            <?
            }else{ if($row_menu[type]=="2"){ ?>
           <a href="ISO_type.php?page_id=<?=$row_menu[page_id]?>&menu_id=<?=$row_menu[menu_id]?>&cate_id=<?=$cate_id?>"><?=$row_menu[menu_name]?></a>
            <? }else{?>
            <a href="ISO_type.php?page_id=<?=$row_menu[page_id]?>&menu_id=<?=$row_menu[menu_id]?>&cate_id=<?=$cate_id?>"><?=$row_menu[menu_name]?></a>
	        <?
				}
			}
				}
		}
?>
      </div>
	  <div>
        <span>เอกสารบังคับใช้</span>
		<?php
		$sql_ISO="SELECT COUNT(Doc_type), Doc_type
					FROM website_db.master_doc
					LEFT JOIN website_db.make_doc ON make_doc.Master_doc_id = master_doc.id
					WHERE Doc_type != ''
					AND make_doc.status_approve = 'recive'

					GROUP BY Doc_type";
		$query_ISO=mysql_query($sql_ISO);
		while($row_ISO=mysql_fetch_array($query_ISO)){ ?>
				<a href="master_doc.php?cate_id=1&Doc_type=<?=$row_ISO[Doc_type]?>">เอกสาร <?php echo full_name_doc($row_ISO[Doc_type])?></a>
		<?php }?>
	  </div>
</div>
<?php 
function full_name_doc($name){
	if($name=='EM'){
		return 'คู่มือสิ่งแวดล้อม (EM)';
	}else if($name=='EP'){
		return 'ระเบียบปฏิบัติ (EP)';
	}else if($name=='EI'){
		return 'วิธปฏบัติ (EI)';
	}else if($name=='ED'){
		return 'เอกสารสนับสนุน (ED)';
	}else if($name=='EF'){
		return 'แบบฟอรืม (EF)';
	}else{
		return 'เอกสาร '.$name;
	}
}
?>
<script>

</script>
