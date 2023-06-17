import Page from "./PageContent/Page.js"
import request from "./request.js"


window.onload = function(){
    const page = new Page()
    document.getElementById('root').innerHTML = page.memberCenter()
    request.get("index.php?action=getMember",Qs.stringify(params))
    .then((res) => {
        
        if (res['status'] == 200){
            member_file = document.getElementsByName('member_file');
            
        }
        else{

        }
        
        
    })
    .catch((error) => {
        
    })
    
    
    
    // data
    document.getElementById('member_store').onclick = () => {
        let member_file = document.getElementsByName('member_file')
        let data = {
            name:member_file[0].value,
            email:member_file[1].value,
            phone:member_file[2].value,
            address:member_file[3].value,
            birth:member_file[4].value,
            passwd:member_file[5].value,
            role:'member'
        }
        
    }
}