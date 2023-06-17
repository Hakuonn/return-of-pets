import Content from "./PageContent/Page.js";
import request from "./request.js";
window.onload = function () {
    let page = new Content();
    document.getElementById('root').innerHTML = page.index()
    if (window.localStorage.getItem('jwtToken') == null){
        window.localStorage.setItem('jwtToken','')
        location.reload()
    }
    else{
        let data = {
            role:'member',
            params:window.localStorage.getItem('reac')
        }
        request().post("index.php?action=getOrder",Qs.stringify(data))
        .then((res) => {
            let response = res['data'];
            if (response['status'] == 200){
                window.localStorage.setItem('jwtToken',response['token'])
                for (let i = 0; i < 2; i++) {
                    document.getElementsByName('logButton')[i].innerText = "登出"
                    document.getElementsByName('logButton')[i].onclick = function () {
                    window.localStorage.setItem('jwtToken','')
                    alert('已登出')
                    location.reload()
                }
                }
                
            }
        })
    }
}