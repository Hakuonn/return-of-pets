<?php

namespace Middlewares;
use \Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

use vendor\Controller;
// MODEL
use Models\Employee as EmployeeModel;
use Models\Member as MemberModel;
use Models\Company as CompanyModel;
use Models\Action;

class AuthMiddleware extends Controller{
    private static $account;
    public static function checktoken(){
        $header = getallheaders(); // 拿取header資訊
        $jwt = $header['Authorization'];
        $secret = "BOBissohandsome"; // 秘密
        try{

            $payload = JWT::decode($jwt,new Key($secret,'HS256'));
            // 將token進行解碼
            self::$account = $payload->data->account;
            $jwt = self::gentoken($payload -> data -> account);
            $response['status'] = 200;
            $response['message'] = "Access granted";
            $response['token'] = $jwt;
        }
        catch (Exception $e){
            $response['status'] = 403 ;
            $response['message'] = $e -> getMessage();
        }
        return $response;
        }
    /**
     * checkPrevilege
     * 檢查目前權限是否可用
     * $action -> 方法
     *
     */
    public static function checkPrevilege($action){
        if (isset($_POST['role'])){
            $role = $_POST['role'];
            if ($role == 'customer'){
                $em = new MemberModel();
                $response = $em->getRoles();
                $user_roles = $response['result'];
            }
            else if ($role == 'company'){
                $em = new CompanyModel();
                $response = $em->getRoles();
                $user_roles = $response['result'];
            }
            else if ($role == 'employee'){
                $em = new EmployeeModel();
                $response = $em->getRoles();
                $user_roles = $response['result'];
            }
            else {
                return self::repsonse(404,'role not found');
            }
            $am = new Action();
            $response = $am->getRoles($action);
            $action_roles = $response['result'];
            $r = array_intersect($user_roles, $action_roles);
             if(count($r)!= 0 ){
                return self::response(200, '有權限');
             }
             else{
                return self::response(403, '權限不足');
             }
        }
        else{
            return self::response(403, '權限不足');
        }
    }
    /**
     * dologin()
     * 進行登入拿到token
     */
    public static function dologin(){
        // 收集資料
        $role = $_POST['role'];
        $account = $_POST['account'];
        $passwd = $_POST['password'];
        // 進入model 尋找資料庫
        if ($role == "member"){
            $em = new MemberModel();
            $response = $em -> checkidpw($account,$passwd);
        }
        else if ($role == "employee"){
            $em = new EmployeeModel();
            $response = $em -> checkidpw($account,$passwd);
        }
        else if ($role == "company"){
            $em = new CompanyModel();
            $response = $em -> checkidpw($account,$passwd);
        }
        else{
            $response['status'] = 404;
            $response['message'] = "Role not found";
            return $response;
        }

        if ($response['status'] == 200){
            $jwt = self::gentoken($account);
            $response['status'] = 200 ;
            $response['message'] = "Access granted";
            $response['token'] = $jwt;
        }
        else{
            $response['status'] = 404;
            $response['message'] = "account,password Not founded or Wrong ";
        }
        return $response ;
    }

    // /**
    //  * 公司登入端
    //  */
    // public static function dologin_em(){
    //     $account = $_POST['account'];
    //     $passwd = $_POST['password'];
    //     $em = new EmployeeModel();
    //     $response = $em -> checkidpw($account, $passwd);
    //     if($response['status'] == 200){
    //     $jwt = self::gentoken($account);
    //     $response['status'] = 200;
    //     $response['message']='Access granted';
    //     $response['token'] = $jwt;
    //     }
    //     else{
    //     $response['status'] = 404;
    //     $response['message']='not found';

    //     }

    //     return $response;
    // }

    private static function gentoken($account){
        $secret_key = "BOBissohandsome";
        $issuer_claim = "http://localhost";
        $audience_claim = 'http://localhost';
        $issuedat_claim = time();
        $expire_claim = $issuedat_claim + 6000;
        $payload = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "exp" => $expire_claim,
            "data" => array(
                "account" => $account
            )
        );
        $jwt = JWT::encode($payload,$secret_key,"HS256") ;
        return $jwt;

    }
}
