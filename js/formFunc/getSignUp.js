//GET請求

// import request from "../request.js";

window.onload = function(){
    document.getElementById('signUpButton').onclick = function(){
        SignUp()
    }
    function SignUp(params) {
        let data = {
            'email': document.getElementById('email'),
            'password':document.getElementById('password'),
            'phonenumber':document.getElementById('phonenumber'),
            'birthday':document.getElementById('birthday'),
            'address':document.getElementById('address')
        }
        alert('註冊成功')
        // request().post('index.php?action=new',Qs.stringify(params))
        // .then(respone=>{
        //     let res = respone['result']
        //     if (res['status']==200) {
        //         alert('註冊成功')
        //         // location.href='./login.html';

        //     } else {
        //         alert('註冊失敗，請聯絡我們')
        //         // location.href='./signup.html';
        //     }
        // })
        // .err((err)=>{
        //     console.log(err)
        // })
    }
}
