<?php

namespace Models;
use vendor\DB;

class Member{

    public function getRoles(){
        $sql = "SELECT action_id FROM `user_role` WHERE `role_name` = 'customer' ";
        $response = DB::select($sql,null);
        $result = $response['result'];
        for ($i = 0; $i < count($result); $i++){
            $result[$i] = $result[$i]['role_id'];
            // echo $result[$i]['role_id'];
        }
        $response['result'] = $result;
        return $response;
    }

    public function checkidpw($account,$passwd){
        $sql = "SELECT * FROM `member` WHERE `account` = ? AND `password` = ? ;";
        $arg = array($account,$passwd);
        $response = DB::select($sql,$arg);
        $rows = $response['result'];
        if (count($rows)==0){
            $response['status'] = 404;
            $response['message'] = '帳號或密碼錯誤';
        }
        return $response;
    }

    public function getMembers(){
        $sql = "SELECT * FROM `member`";
        $arg = NULL;
        return DB::select($sql,$arg);
    }

    public function getMember($findway,$params){
        if ($findway == "id"){
            $sql = "SELECT * FROM `member` WHERE `memid` = ?";
            $arg = array($params);
        }
        else if ($findway == "name"){
            $sql = "SELECT * FROM `member` WHERE `name` like '%$params%'";
            $arg = NULL;
        }
        else if ($findway == "account"){
            $sql = "SELECT * FROM `member` WHERE `account` = ?";
            $arg = array($params);
        }
        return DB::select($sql , $arg);
    }


    public function newMember($name,$address,$birth,$email,$phone,$account,$passwd){
        $member_quatity = DB::select("SELECT * FROM `member`",NULL);
        $id =  count($member_quatity) + 2;
        $id = sprintf("Mem_%05d",$id);
        $sql = "INSERT INTO `member` (`memid`,`role_name`, `name`, `address`, `birth`, `email`, `phone`, `account`, `passwd`) VALUES ($id,'customer',?, ?, ?, ?, ?, ?, ?);";
        $arg = array($name,$address,$birth,$email,$phone,$account,$passwd);
        try{
             return DB::insert($sql,$arg);
        }
        catch(Exception $e){

        }

    }

    public function removeMember($id){
        $sql = "DELETE FROM member WHERE `member`.`memid` = ?";
        $arg = array($id);
        return DB::delete($sql,$arg);
    }
    // ㄍㄥ
    public function updateMember($name,$address,$birth,$email,$phone,$account,$passwd,$memid){
        $sql = "UPDATE `member` SET `name` =?, `address` = ?, `birth` = ?, `email` = ?, `phone` =?, `account` = ?, `passwd` = ? WHERE `member`.`memid` = ?;";
        $arg = array($name,$address,$birth,$email,$phone,$account,$passwd,$memid);
        return DB::update($sql,$arg);
    }
}

?>