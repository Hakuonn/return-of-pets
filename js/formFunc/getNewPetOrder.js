// GET請求
// import request from "../request.js";

// 由於有header問題所以使用自製axios將自身需要的資訊傳去後端（token）
window.onload = function(){
    
    document.getElementById('petInfo_submit').onclick = function(){
        getNewOrder()
    }
    var methodForm = document.getElementsByName('methodForm');
    var religionForm = document.getElementsByName('religionForm');
    var methodValue = window.localStorage.getItem('method');
    getMethodValue()
    console.log(methodValue)
    function findChecked(which){
        for (let i = 0; i < which.length; i++) {
            if(which[i].checked){
                return which[i].value;
            }
        }
    }

    function getMethodValue(){
        switch (methodValue) {
            case 'methodA':
                methodForm[0].checked = true
                break
            case 'methodB':
                methodForm[1].checked = true
                break
            case 'methodC':
                methodForm[2].checked = true
                break
            default:
                break
        }
    }

    /**
     * getNewOrder -> 用於新增訂單資訊
     * @parms boolean
     */
    function getNewOrder(parms) {
        
        let pet_data = {
            'name' : document.getElementById('pet_name').value,
            'id':document.getElementById('pet_id').value,
            'weight':document.getElementById('pet_weight').value,
            'type':document.getElementById('pet_type').value,
            'method':findChecked(methodForm),
            'religion':findChecked(religionForm),
            'petOther':document.getElementById('petOther').value
        }
        alert(pet_data['religion'])
        request().post('index.php?action=new',Qs.stringify(params))
        .then((response => {
            let res = response['result']
            if (res['status'] == 200){
                alert('登入成功 :)')
    
                return pet_data
            }
            else if (res['status'] == 500){
                alert('系統出錯，請再試一次 :(')
            }
        }))
        .err((err)=>{
            console.log(err)
        })
        
    }
    

}
