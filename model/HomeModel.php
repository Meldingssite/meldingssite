<?php
function sendDataModel()
{

    $type = $_POST["type"];
    $locatie = $_POST['locatie'];
    $tabel =  $_POST['School'];

    $sql = "INSERT INTO `$tabel` (type, locatie)
  VALUES ('$type', '$locatie')";
    if ($conn->query($sql) === TRUE) {
        echo "Account created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
