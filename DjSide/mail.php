<?php

$to      = 'triko42@gmail.com';
$name    = $_POST['name1'];
$surname    = $_POST['surname1'];
$email   = $_POST['mail1'];
$tel     =  $_POST['tel1'];
$subject = 'Nowy e-mail od ' . $name . ' ' . $surname . ' (' . $tel . ') (' . $email . ')';
$message = $_POST['message1'];
$headers = 'From: ' . $name . ' (' . $email . ')';
$headers .= 'Content-Type: text/html; charset=utf-8';

mail($to, $subject, $message, $headers);

echo '<h1>Wiadomość wysłana :)</h1>';

?>