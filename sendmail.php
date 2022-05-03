<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage = ('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom('yakorablevrr@gmail.com', 'Ярослав')
  $mail->setFrom('jeros1337@gmail.com')
  $mail->Subject = "Отправка письма через пхпмайлер"

  $body = '<h1> Вы оставили заявку на сайте Патриот </h1>'

  if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Ваше имя:</strong> '.$POST['name'].</p>;
  }
  if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong> '.$POST['email'].</p>;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // invalid emailaddress
    $message = 'Неверный эмаил';
    $response = ['message' => $message];
    header('Content-type: application/json');
    echo json_encode($response);
  } else {
    $mail->Body = $body;

    if (!$mail->send()) {
      $message = 'Ошибка';
    } else {
      $message = 'Данные отправлены';
    }
  
    $response = ['message' => $message];
  
    header('Content-type: application/json');
    echo json_encode($response);
  }
?>