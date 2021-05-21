function select_admin(){
	window.location.href = "backoffice"
	// $('#popTagLogin').show();
	// $('#ifr_popTagLogin').attr('src', 'login.php?xid='+Math.random());		
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
								/* window.location='index_manage.php?xid='+Math.random(); */
 									var url='index_manage.php?xid='+Math.random();
									//window.location=url;
									window.open(url,'','toolbar=no,scrollBars=auto,location=0,resizable=no,status=yes,width=800');
									window.open('','_parent','');
									window.close(); 
														
							}else{
								window.location='page.php?cate_id='+cate_id;
							}
						}
					
					}
			}).responseText;
}
