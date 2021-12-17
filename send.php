<?php
$to = "takututu95@gmail.com"; 
$tema = "Форма обратной связи на PHP"; 
$message = "Ваше ФИО: ".$_POST['name']."<br>";
$message .= "Номер телефона: ".$_POST['phone']."<br>"; 
$message .= "E-mail: ".$_POST['email']."<br>"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
mail($to, $tema, $message, $headers);
?>

<script>
  setTimeout(function(){
    location.replace("/");
  },2000);
</script>