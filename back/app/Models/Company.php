<?php

namespace Models;

use vendor\DB;

class Company
{
    /**
     * 確認員工權限是否可用
     * @param string $id 員工ID
     * @return response
     */
    public function getRoles($id)
    {
        $sql = "SELECT role_id FROM `user_role` WHERE `emp_id` = ? ";
        $arg = array($id);
        $response = DB::select($sql, $arg);
        $result = $response['result'];
        for ($i = 0; $i < count($result); $i++) {
            $result[$i] = $result[$i]['role_id'];
            // echo $result[$i]['role_id'];
        }
        $response['result'] = $result;
        return $response;
    }
    /**
     * 確認帳號密碼正確
     */
    public function checkidpw($account, $passwd)
    {
        $sql = "SELECT * FROM `Company` WHERE `account` = ? AND `password` = ? ;";
        $arg = array($account, $passwd);
        $response = DB::select($sql, $arg);
        $rows = $response['result'];
        if (count($rows) == 0) {
            $response['status'] = 404;
            $response['message'] = '帳號或密碼錯誤';
        }
        return $response;
    }

    public function getEmployee($way, $params)
    {
        if ($way == "name") {
            $sql = "SELECT * FROM `employee` WHERE `name` LIKE '%$params%'";
            $arg = NULL;
            $response = DB::select($sql, $arg);
        } else if ($way == "id") {
            $sql = "SELECT * FROM `employee` WHERE `id` = ?";
            $arg = array($params);
            $response = DB::select($sql, $arg);
        } else {
            $response['status'] = 404;
            $response['message'] = '帳號或密碼錯誤';
        }
        return $response;


    }
    public function getEmployees()
    {
        $sql = "SELECT * FROM `employee`";

    }
    public function insertEmployee()
    {
        $sql = "";
    }
    public function deleteEmployee()
    {
        $sql = "";
    }
    public function changeEmployee()
    {
        $sql = "";
    }

}

?>