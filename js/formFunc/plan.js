window.onload = function(){
    const methods = document.getElementsByName('methods')

    for (let i = 0 ; i < methods.length ; i++){
        methods[i].onclick = function () {
            window.localStorage.setItem('method',methods[i].value)
            location.href='./form.html';
            console.log(methods[i].value)
        }
    }
}