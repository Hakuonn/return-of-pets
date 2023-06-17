import Page from "./PageContent/Page.js"
import request from "./request.js"


    window.onload = function(){
        const page = new Page()
        document.getElementById('root').innerHTML = page.signup()
        document.getElementById('signupbtn').onclick = () => {
            let account = document.getElementById('account').value
            let password = document.getElementById('password').value
            let email = document.getElementById('email').value
            let phone = document.getElementById('phone').value
            let name = document.getElementById('name').value
            let birthday = document.getElementById('birthday').value
            let address = document.getElementById('address').value
            let params = {
                account:account,
                password:password,
                email:email,
                phone:phone,
                name:name,
                birthday:birthday,
                address:address,
                role:'member'
            }
            request().post("index.php?action=newMember",Qs.stringify(params))
            .then((res) => {
                let response = res['result'];
                if (response['status'] == 200){
                    window.localStorage.setItem('jwtToken',response['token'])
                    alert('註冊成功')
                    
                }
                else{
                    alert('註冊失敗')
                    location.reload()
                } 
            })
            .catch((error => {
                console.log(error)
            }))
            
            
            
    }
    }
    

