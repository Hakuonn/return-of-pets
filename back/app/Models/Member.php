<?php

namespace Models;
use vendor\DB;

class Member{

    public function getRoles($who){
        if ($who == 'visitor') {
            $sql = "SELECT action_id FROM `role_action` WHERE `role_name` = 'visitor' ";
        }
        else{
            $sql = "SELECT action_id FROM `role_action` WHERE `role_name` = 'customer' ";
        }
        $response = DB::select($sql,null);
        $result = $response['result'];
        for ($i = 0; $i < count($result); $i++){
            $result[$i] = $result[$i]['action_id'];
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

    public function getMember($params){
            $sql = "SELECT * FROM `member` WHERE `account` = ?";
            $arg = array($params);
        return DB::select($sql , $arg);
    }


    public function newMember($name,$address,$birth,$email,$phone,$account,$passwd){
        $member_quatity = DB::select("SELECT * FROM `member`",NULL);
        $id =  count($member_quatity) + 2;
        $id = sprintf("mem_%06d",$id);
        $sql = "INSERT INTO `member` (`memid`, `name`, `address`, `phone`, `birth`, `email`, `account`, `password`) VALUES (?,?, ?, ?, ?, ?, ?, ?);";
        $arg = array($id,$name,$address,$phone,$birth,$email,$account,$passwd);

             return DB::insert($sql,$arg);


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