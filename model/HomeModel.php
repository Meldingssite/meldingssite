<?php
function sendDataModel()
{
    $servername = "localhost";
//           ;
    $type = $_POST["type"];
    $locatie = $_POST['locatie'];
    $username = "root";
    $passwordDB = "mysql";
    $database = "meldingssite";
    $tabel =  $_POST['School'];
   // LEERPARKPROMENADE 100

    $conn = new mysqli($servername, $username, $passwordDB, $database);
    if ($conn->connect_error) {
        $conn2 = new mysqli($servername, $username, '', $database);
        if ($conn2->connect_error) {
            die("Connection failed: " . $conn->connect_error . $conn->connect_error);
        }
    }
    $sql = "INSERT INTO `$tabel` (type, locatie)
  VALUES ('$type', '$locatie')";
    if ($conn->query($sql) === TRUE) {
        echo "Account created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    if ($conn) {
        $conn->close();
    }
    if ($conn2) {
        $conn2->close();
    }
}
