<?php
print "<h2>PHP is Fun!</h2>";
$sendee = $_POST["email"];
$subject = $_POST["subject"];
$body = $_POST["body"];
$txt = $sendee + " " + $subject + " " + $body;
$testfile = fopen("testfile.txt", "w") or die("Unable to open file!");
fwrite($testfile, $txt);
fclose($testfile);

?>