<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $mail = $_POST['mail'];
  $date = $_POST['date'];
  $count = $_POST['peoples'];
  $comment = $_POST['comment'];
  $hotel = $_POST['hotel'];
  
$body = <<<EOT
Отель: $hotel\n 
Имя: $name\n 
Телефон: $phone\n
Email: $mail\n 
Дата: $date\n 
Количество человек: $count\n 
Комментарий: $comment
EOT;

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/plain; charset=utf-8' . "\r\n";
mail('juicy.igor@gmail.com, indurova@advpositive.ru, tatiana@travelmc.rum, director@travelmc.ru', "Новая заявка Travel MC", $body, $headers);

echo 'ok';

?>