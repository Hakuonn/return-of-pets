<?php
namespace vendor;
use PHPMailer\PHPMailer;
use vendor\DB;

class mail extends PHPMailer\PHPMailer{
    public $Host = 'smtp.gmail.com';
    public $Mailer = 'smtp' ;
    public $SMTPAuth = true ;
    public $Username = '';
    public $Password = '';
    public $SMTPSecure = 'tls';
    public $WordWrap = 75;
    
    public function sendEmail($order_id){

    }
    private function company(){

    }
    private function employee(){

    }
}



?>