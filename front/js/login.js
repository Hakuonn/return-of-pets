import Page from "./PageContent/Page.js"
import request from "./request.js"
window.onload = function(){
    const page = new Page()
    document.getElementById('root').innerHTML = page.login()
    /**
     * loginbtn ->登入按鈕
     */
    document.getElementById('loginbtn').onclick = () => {
        let account = document.getElementById('account').value
        let password = document.getElementById('password').value
        let params = {
            account:account,
            password:password,
            role:'member'
        }
        window.localStorage.setItem('reac',account)
        request().post("index.php?action=dologin",Qs.stringify(params))
        .then((res) => {
            let response = res['data'];
            if (response['status'] == 200){
                window.localStorage.setItem('jwtToken',response['token'])
                console.log(response['token'])
                alert('登入成功')
                location.href = 'index.html';
                
            }
            else{
                alert('登入失敗')
                location.reload()
            } 
        })
        .catch((error => {
            console.log(error)
        }))
}
}
