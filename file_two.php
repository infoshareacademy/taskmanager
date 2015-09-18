<?php
//print_r($_POST);

//$ala = '- ala ma "Kota" kot ma ale ';
//echo addslashes(strtoupper(trim($ala)));


$conn = mysqli_connect("127.0.0.1", "test", "test", "test");
if (!$conn) {
    die ('connection failed: '.mysqli_connect_errno());
}
echo "sukces";
echo '</br>';

$sql = "SELECT * FROM ksiazki";
$result = mysqli_query($conn, $sql);
print_r($result);

if (mysql_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        echo "id: ".$row['idksiazki']."-imie: ".
            $row["imieautora"]."<br>";
    }
} else {
    echo "0 results";
}
?>