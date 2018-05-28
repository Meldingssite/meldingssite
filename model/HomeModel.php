<?php

function sendDataModel()
{
    /****************************
     *     Sends Data to Database
     ****************************/

    //  Variable Init
    $tabel = $_POST['School'];
    $conn = OpenDatabaseConnection();
    $keys = [];
    $data = [];
    $id = $_POST['id'];
    foreach ($_POST as $key => $ls_value) {
        if ($key != 'School' && $key != 'id') {
            $keys[] = $key;
            $data[] = $ls_value;
        }
    }

    // convert array to comma separated string
    $dataString = implode(", ", $data);
    $keyString = implode(", ", $keys);

    if (!$id)   // No id given
    {
        $sql = "INSERT INTO `$tabel`  ($keyString) VALUES (";
        foreach ($data as $key) {
            $sql .= '"';
            $sql .= $key;
            $sql .= '",';
        }
        $sql = substr($sql, 0, -1);
        $sql .= ")";

        if ($conn->query($sql))
            echo mysqli_insert_id($conn);
        else
            echo "Error: " . $sql . "<br>" . $conn->error;
    } else    // id given
    {
        for ($x = 0; $x < count($keys); $x++) {
            if (!preg_match("/(file)/   ", $keys[$x])) {
                echo $keys[$x];
                $sql = "UPDATE `$tabel`  SET $keys[$x] = '$data[$x]' WHERE id = '$id'";
                if ($conn->query($sql))
                    echo mysqli_insert_id($conn);
                else
                    echo "Error: " . $sql . "<br>" . $conn->error;
            } else if (preg_match("file", $keys[$x])) {
                //Todo add file uploading logic
                $fileName = $_FILES['afile']['name'];
                $fileType = $_FILES['afile']['type'];
                $fileContent = file_get_contents($_FILES['afile']['tmp_name']);
                $dataUrl = 'data:' . $fileType . ';base64,' . base64_encode($fileContent);
            }
        }
    }

    return mysqli_insert_id($conn);
    $conn->close();
}
