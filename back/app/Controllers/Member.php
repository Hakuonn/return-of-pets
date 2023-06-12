<?php
    namespace Controllers;
    use vendor\Controller;
    use Models\Member as MemberModel;

    class Member extends Controller{
        private $em;
        public function __construct(){
            $this->em = new MemberModel();
        }
        // 權限控管、帳號密碼確認
  /**
     * 取得權限
     * @param mixed $account
     * @return array
     */
    public function getRoles($role){
        $sql = "SELECT action_id FROM `user_role` WHERE `role_name` = ? ";
        $arg = array($role);
        $response = DB::select($sql, $arg);
        $result = $response['result'];
        for ($i = 0; $i < count($result); $i++){
            $result[$i] = $result[$i]['action_id'];
        }
        $response['result'] = $result;
        return $response;
    }

    /**
     * 檢查密碼
     * @param mixed $account
     * @param mixed $pw
     * @return array
     */
    public function checkidpw($account,$passwd){
        $sql = "SELECT * FROM `Member` WHERE `account`=? and `passwd` =?;";
        $arg = array($account,$passwd);
        $response = DB::select($sql, $arg);
        $rows = $response['result'];
        if (count($rows)==0){
            $response['status'] = 404;
            $response['message'] = '帳號或密碼錯誤';
        }
        return $response;

    }
        // 與Mysql進行連接
        public function getMember(){
            $way = $_POST['way'] ; $params = $_POST['params'];
            return this -> em -> getMember($way,$params);
        }
        public function getMembers(){
            return this -> em -> getMembers();
        }
        public function newMember(){
            $name = $_POST['name'];
            $address = $_POST['address'];
            $birth = $_POST['birth'];$email = $_POST['email'];
            $phone = $_POST['phone'];
            $account = $_POST['account'];$passwd = $_POST['passwd'];
            return $this -> em -> newMember($name,$address,$birth,$email,$phone,$account,$passwd);
        }
        public function removeMember(){
            $id = $_POST['memid'];
            return $this->em->removeMember($id);
        }
        public function updateMember(){
            $memid = $_POST['memid'];$name = $_POST['name'];
            $address = $_POST['address'];
            $birth = $_POST['birth'];$email = $_POST['email'];
            $phone = $_POST['phone'];
            $account = $_POST['account'];$passwd = $_POST['passwd'];
            return $this -> em -> updateMember($name,$address,$birth,$email,$phone,$account,$passwd,$memid);
        }
    }

?>