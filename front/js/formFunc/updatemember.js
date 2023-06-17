window.onload = function(){
    
    document.getElementById('update_memberInfo').onclick = function(){
        Updatemember()
    }
    function Updatemember(){
        var mysql      = require('mysql');

        var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123456',
        database : 'memberinfo?'
        });
        
        connection.connect();
        
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
        });
    }
}