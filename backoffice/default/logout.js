var url_sub = url_sub || '';

const ck_session = (i) => {
    axios.post(url_sub+"../api/controller/login.php?status=ch_session")
    .then(res => { 
        console.log(res.data)
        if(res.data == null){
            alert('ไม่มีการทำงานกรุณา ล็อกอินใหม่');
            location.href='../index.html'
        }
        console.log('ck_secsstion')
     }).catch(error => {
        console.error(error);
     })
}

(function() {
    var i=0;
    while(i<60){
        setTimeout(ck_session, 60000*i);
        
        i++;
    }
    
    
})()

const sign_out = () => {
    axios.post(url_sub+"../api/controller/login.php?status=logout")
    .then(res => { 
        console.log(res.data)
        if(res.data==1){
            location.href = url_sub+'../'
        }
     }).catch(error => {
        console.error(error);
     })
}