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

        // 與Mysql進行連接
        public function getMember(){
            $params = $_POST['params'];
            return $this -> em -> getMember($params);
        }
        public function getMembers(){
            return $this -> em -> getMembers();
        }
        public function newMember(){
            $name = $_POST['name'];
            $address = $_POST['address'];
            $birth = $_POST['birth'];$email = $_POST['email'];
            $phone = $_POST['phone'];
            $account = $_POST['account'];$passwd = $_POST['password'];
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