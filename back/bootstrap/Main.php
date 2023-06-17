<?php
require_once __DIR__ . "/../vendor/autoload.php";

use Middlewares\AuthMiddleware;
use vendor\DB;
use vendor\Router;

class Main{
    public static function run(){
        //設定DB
        $conf = parse_ini_file(__DIR__.'/../vendor/.env');
        DB::$dbHost = $conf['dbHost'];
        DB::$dbName = $conf['dbName'];
        DB::$dbUser = $conf['dbUser'];
        DB::$dbPassword = $conf['dbPassword'];
        // 偵測前端是否給予API
        if(isset($_GET['action'])){
            $action = $_GET['action'];
        }else{
            $action = "no_action";
        }
        // 先偵測是否為登入功能
        if ($action == "dologin"){
            $response = AuthMiddleware::dologin();
        }
        else if ($action == "newMember" | $action == "newCompany" | $action == "newEmployee"){
            $router = new Router();
            require_once __DIR__."/../routes/web.php";
            $response = $router->run($action);        }
        else{
            $response = $responseToken = AuthMiddleware::checktoken();
            if ($responseToken['status'] == 200){
                    $response = AuthMiddleware::checkPrevilege($action);
                    if($response['status'] == 200){
                        $router = new Router();
                        require_once __DIR__."/../routes/web.php";
                        $response = $router->run($action);
                      }

                $response['token'] = $responseToken['token'];
            }

        }


        echo json_encode($response);
    }
}
