<?php
namespace Models;

use vendor\DB;

class Employee
{

    public function getRoles()
    {
        $sql = "SELECT action_id FROM `role_action` WHERE `role_name` = 'employee' ";
        $response = DB::select($sql, null);
        $result = $response['result'];
        for ($i = 0; $i < count($result); $i++) {
            $result[$i] = $result[$i]['role_id'];
            // echo $result[$i]['role_id'];
        }
        $response['result'] = $result;
        return $response;
    }

    public function checkidpw($account, $passwd)
    {
        $sql = "SELECT * FROM `employee` WHERE `account`=? and `password` =?;";
        $arg = array($account, $passwd);
        $response = DB::select($sql, $arg);
        $rows = $response['result'];
        if (count($rows) == 0) {
            $response['status'] = 404;
            $response['message'] = '帳號或密碼錯誤';
        }
        return $response;

    }

    public function getEmployees()
    {
        $sql = "SELECT * FROM `company`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function getEmployee($id)
    {

        $sql = "SELECT * FROM `company` WHERE `user_id`=?";
        $arg = array($id);
        return DB::select($sql, $arg);
    }
    public function newEmployee($id, $passwd, $name, $addr, $phone, $email)
    {
        $sql = "INSERT INTO `company` (`comid`, `name`, `area`, `address`, `email`, `phone`, `account`, `password`) VALUES (?,?,?,?,?,?,?,?);";
        return DB::insert($sql, array($id, $passwd, $name, $addr, $phone, $email));
    }
    public function removeEmployee($id)
    {
        $sql = "DELETE FROM `company` WHERE user_id=?";
        return DB::delete($sql, array($id));
    }
    public function updateEmployee($id, $passwd, $name, $addr, $phone, $email)
    {
        $sql = "UPDATE `company` SET `passwd`=?,`name`=?,`addr`=?,`phone`=?,`email`=? WHERE user_id=?";
        return DB::update($sql, array($passwd, $name, $addr, $phone, $email, $id));
    }
}