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
						tb_menu.cate_id
						FROM tb_menu
						WHERE tb_menu.menu_main = 0
						AND cate_id='".$cate_id."'";
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
            }else{
	        ?>
            <a href="safety_type.php?page_id=<?=$row_menu[page_id]?>&menu_id=<?=$row_menu[menu_id]?>&cate_id=<?=$cate_id?>"><?=$row_menu[menu_name]?></a>
	        <?
				}
				}
		}
?>
      </div>
    </div>