<?php
if (empty($_POST['imie'] && $_POST['email'])) {
    echo 'Musisz wypelnic wszystkie pola!';


} else {
    $conn = mysqli_connect("sql.infoshareaca.nazwa.pl", 'infoshareaca_3', 'iSAf0r3v3r', "infoshareaca_3", 3307);

    if (!$conn) {
        die ('connection failed: ' . mysqli_connect_errno());
    }

    $check = "SELECT * FROM tabela_newsletter WHERE email = '$_POST[email]'";
    $emailDB = mysqli_query($conn, $check);
    $emailExist = mysqli_fetch_array($emailDB, MYSQLI_NUM);

    if ($emailExist[0] > 1) {
        echo "Twoj email znajduje sie juz w bazie, nie zostales ponownie dodany";
        mysqli_close($conn);
    } else {
        $insertQuery = "INSERT INTO `tabela_newsletter`(`ID`, `imie`, `email`) VALUES (NULL,'" . $_POST['imie'] . "','" . $_POST['email'] . "')";


        if (mysqli_query($conn, $insertQuery)) {
            mysqli_query($conn, $insertQuery);
            mysqli_close($conn);
            echo "Dziekujemy za zgloszenie do newslettera!
                  Zostales zarejestrowany i będziesz otrzymywał nasze wiadomosci
                  Twoje dane:
                    <ul>
                        <li>Imie:$_POST[imie];</li>
                        <li>Adres email: $_POST[email];</li>
                    </ul>";
        }

    }
}