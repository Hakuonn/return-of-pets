

window.onload =  function(){
    document.getElementById('logButton').onclick = function(){
        checkLog()
    }
    function checkLog(){
        if (window.localStorage.getItem != null){
            document.getElementById('logButton').herf = "index.html";
            document.getElementById('logButton').innerText = 登出;
            window.localStorage.setItem('jwtToken','');
            alert('登出成功');
        }else{
            let data = {
                'email': document.getElementById('email'),
                'password':document.getElementById('password')
            }
    
            alert('登入成功')
            request().post('index.php?action=new',Qs.stringify(params))
            
            .then(respone=>{
                let res = respone['result']
                if (res['status']==200) {
                    alert('登入成功')
                    location.href='./index.html';
    
                } else {
                    alert('登入失敗，請聯絡我們')
                    location.href='./login.html';
                }
             })
             .err((err)=>{
                 console.log(err)
             })
        }
    }
    
}