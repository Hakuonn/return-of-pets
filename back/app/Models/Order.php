<?php
namespace Models;
use vendor\DB;

class Order{
    public function getOrders(){
        $sql = "SELECT * FROM `fd_order`";
        $arg = NULL;
        return DB::select($sql,$arg);
    }

    /**
     * 用於-查詢特定顧客的訂單
     * @param mixed $id
     * @return array
     */
    public function getOrder($account){
        $id = DB::select("",array());
        $sql = "SELECT * FROM `fd_order` WHERE `account`=?";
        $arg = array($account);
        return DB::select($sql,$arg);
    }

    public function newOrder($time,$id,$name,$amount){
        $sql = "INSERT INTO `fd_order` (`time`, `order_id`, `account`, `name`, `amount`)VALUES(?,NULL,?,?,?)";
        return DB::insert($sql,array($time,$id,$name,$amount));
    }

    public function removeOrder($id){
        $sql = "DELETE FROM `fd_order` WHERE order_id=?";
        return DB::delete($sql,array($id));
    }

    public function updateOrder($time,$id,$name,$amount){
        $sql = "UPDATE `fd_order` SET `time`=?,`name`=?,`amount`=? WHERE order_id=?";
        return DB::update($sql,array($time,$name,$amount,$id));

    }

}