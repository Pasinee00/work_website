<? session_start();
session_destroy();

if(!empty($_SESSION)){
		foreach($_SESSION as $k=>$v){
			unset($_SESSION[$k]);
		}
	}
	//	header("Location: index.php");
	echo"<script>window.open('index.php');</script>";
	echo"<script>window.close('logout.php');</script>"
?>
