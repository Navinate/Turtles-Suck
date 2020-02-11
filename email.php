<?php
print "<h2>PHP is Fun!</h2>";
$sendee = htmlspecialchars($_POST["email"]);
$subject = htmlspecialchars($_POST["subject"]);
$body = htmlspecialchars($_POST["body"]);
echo "<h2>"+$sendee+"</h2>";

?>