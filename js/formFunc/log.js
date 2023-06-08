import { SignUp } from "./getSignUp";
import {LogOut} from "./getLogOut";

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
            // 這邊做登入(蔡)
        }
    }
    
}