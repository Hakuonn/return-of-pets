//GET請求

// import request from "../request.js";

window.onload = function(){
    document.getElementById('LogOutButton').onclick = function(){
        LogOut()
    }
    function LogOut(params) {
        
        window.localStorage.clear('jwtToken');
        alert('登出成功');
    }
}
