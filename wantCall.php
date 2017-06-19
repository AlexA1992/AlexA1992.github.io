<?php

require 'PHPMailer-master/PHPMailerAutoload.php';
$mail= new PHPmailer;
$mail->isSMTP();
$mail->CharSet = "utf-8";
$mail->Host='smtp.gmail.com';
$mail->SMTPAuth= true;
$mail->Username='aarondelporto';
$mail->Password='oct_1992';
$mail->SMTPSecure='tls';
$mail->Port='587';
$mail->From='aarondelporto@gmail.com';
$mail->addAddress('aarondelporto@gmail.com');
$mail->isHTML(true);

$name=$_POST['call-name'];
$number=$_POST['call-number'];


$mail->Subject=$name;
$mail->Body=$number;

//$mail->AltBody='Это альтернативное письмо';
if($mail->send()){
    sleep ( 2 );
    header('Location:index.html', true, 301);
    exit();
}
else
{
    echo 'Письмо не отравлено';
    echo 'Ошибка: '.$mail->ErrorInfo;
}

/*
if ($email!=null || $name!=null || $textArea!=null)
    {
    mail('$email', '$textArea', '$textArea');
    //echo "Ваше письмо отправлено!!!";
    }
    else
    {
    echo "Ваше письмо не отправлено!";
    }

header('Location:index.html', true, 301);
exit();*/
?>