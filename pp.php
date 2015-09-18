<?php
$conn = mysqli_connect("sql.infoshareaca.nazwa.pl", 'infoshareaca_3', 'iSAf0r3v3r', "infoshareaca_3", 3307);
if (!$conn) {
    die ('connection failed: '.mysqli_connect_errno());
}
//print_r($_POST);

$sql = "INSERT INTO `tabela_newsletter`(`ID`, `imie`, `email`) VALUES (null,'".$_POST['imie']."','".$_POST['email']."')";

mysqli_query($conn, $sql);
//echo $sql;

header("location: index.html");
?>