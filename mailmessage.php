<?php
$name=$_POST['name'];
alert($name);
/*
if (isset($_GET["name"])){
    alert ('dfgdfg');
}
*/
/*
require 'PHPMailer-master/PHPMailerAutoload.php';
$mail= new PHPmailer;
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->Host='smtp.gmail.com';
$mail->SMTPAuth= true;
$mail->Username='aarondelporto';
$mail->Password='oct_1992';
$mail->SMTPSecure='tls';
$mail->Port='587';
$mail->From='aarondelporto@gmail.com';
$mail->addAddress('aarondelporto@gmail.com');
$mail->isHTML(true);
 
$name=$_POST['name'];
$email=$_POST['email'];
$tema=$_POST['tema'];
$textArea=$_POST['textArea'];
 
$mail->Subject=$name." "." ".$tema;
$mail->Body=$email." "." ".$textArea;
 
//$mail->AltBody='Это альтернативное письмо';
if($mail->send()){
    echo 'Письмо отправлено';
    }
    else
    {
        echo 'Письмо не отравлено';
        echo 'Ошибка: '.$mail->ErrorInfo;
    }
*/
/*
if ($email!=null || $name!=null || $tema!=null || $textArea!=null)
    {
    mail('$email', '$textArea', '$textArea');
    echo "Ваше письмо отправлено!";
    }
    else
    {
    echo "Ваше письмо не отправлено!!!";
    }
//exit(header('Location:'.$_SERVER['REQUEST_URI'].''));
*/
?>