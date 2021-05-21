<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Menu</title>
<script type="text/javascript" src="js/jquery-1.5.1.js"></script>
<script>
function add_slider(){
		$('#Display').attr('src', 'add_slider.php?xid='+Math.random());		
}
function add_menu(){
		$('#Display').attr('src', 'manage_mainedit.php?xid='+Math.random());	
}
</script>
<style type="text/css">
<!--
    body {
        margin:0;
        padding:0;
        font: bold 11px/1.5em Verdana;
}

/*- Menu Tabs D--------------------------- */

    #tabsD {
      float:left;
      width:100%;
      background:#FCF3F8;
      font-size:93%;
      line-height:normal;
          border-bottom:1px solid #F4B7D6;
      }
    #tabsD ul {
        margin:0;
        padding:10px 10px 0 50px;
        list-style:none;
      }
    #tabsD li {
      display:inline;
      margin:0;
      padding:0;
      }
    #tabsD a {
      float:left;
      background:url("images/tableft8.gif") no-repeat left top;
      margin:0;
      padding:0 0 0 4px;
      text-decoration:none;
      }
    #tabsD a span {
      float:left;
      display:block;
      background:url("images/tabright8.gif") no-repeat right top;
      padding:5px 15px 4px 6px;
      color:#C7377D;
      }
    /* Commented Backslash Hack hides rule from IE5-Mac \*/
    #tabsD a span {float:none;}
    /* End IE5-Mac hack */
    #tabsD a:hover span {
      color:#C7377D;
      }
    #tabsD a:hover {
      background-position:0% -42px;
      }
    #tabsD a:hover span {
      background-position:100% -42px;
      }

        #tabsD #current a {
                background-position:0% -42px;
        }
        #tabsD #current a span {
                background-position:100% -42px;
        }
-->
</style>
</head>

<body>
	<table width="100%" border="0" cellpadding="0" cellspacing="0">
	  <tr>
	    <td bgcolor="#FCF3F8">

		</td>
	    <td>
       <div id="tabsD">
            <ul>
                <!-- CSS Tabs -->
                <li><a onclick="add_slider();" href="#"><span>Side หน้าแรก</span></a></li>
                <li><a onclick="add_menu();" href="#"><span>เมนูหน้าแรก</span></a></li>
            </ul>
		</div>
        </td>
	    <td bgcolor="#FCF3F8">&nbsp;</td>
      </tr>
	  <tr height="100%">
	    <td bgcolor="#FCF3F8">&nbsp;</td>
	    <td><iframe id="Display" name="Display" frameborder="0" width="100%" height="480" scrolling="no" src=""></iframe></td>
	    <td bgcolor="#FCF3F8">&nbsp;</td>
      </tr>
	  <tr>
	    <td bgcolor="#FCF3F8">&nbsp;</td>
	    <td bgcolor="#FCF3F8">&nbsp;</td>
	    <td bgcolor="#FCF3F8">&nbsp;</td>
      </tr>
</table>
</body>
</html>