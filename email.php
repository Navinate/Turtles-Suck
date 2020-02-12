<?php
print "<h2>PHP is Fun!</h2>";
$email = htmlspecialchars($_POST["email"]);
$subject = htmlspecialchars($_POST["subject"]);
$body = htmlspecialchars($_POST["body"]);
$password = htmlspecialchars($_POST["password"]);
echo "<h2>Sending to " . $email . "</h2>";
?>