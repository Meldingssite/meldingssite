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
    // var_dump($_POST);
    foreach ($_POST as $key => $ls_value) {
        if ($key != 'School' && $key != 'id') {
            $keys[] = $key;
            $data[] = $ls_value;
        }
    }
    foreach ($_FILES as $Filekey => $ls_value) {
        $Filekeys[] = $Filekey;

    }
// convert array to comma separated string
    $dataString = implode(", ", $data);
    $keyString = implode(", ", $keys);

    if (!isset($_POST['id'])) {   // No id given

//        var_dump($_FILES); var_dump($_POST);
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
    } else // id given
    {
        $id = $_POST['id'];
        for ($x = 0;
             $x < count($keys);
             $x++) {
            if (!preg_match("/(file)/   ", $keys[$x])) {
                echo $keys[$x];
                $sql = "UPDATE `$tabel`  SET $keys[$x] = '$data[$x]' WHERE id = '$id'";
                if ($conn->query($sql))
                    echo mysqli_insert_id($conn);
                else
                    echo "Error: " . $sql . "<br>" . $conn->error;
            }

        }


        for ($x = 0; $x != count($_FILES); $x++) {
            $naam = $Filekeys[$x];
            $filename = $_FILES[$naam]['name'];
            $tmpName = $_FILES[$naam]["tmp_name"];
            $target_dir = URL . UPLOADS;
            $uploadOk = 1;

            $target_file = $target_dir . basename($filename);
            $imageFileType = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
            $check = getimagesize($_FILES[$naam]["tmp_name"]);

//         Check if image file is a actual image or fake image


            if ($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }

            // Check if file already exists
            if (file_exists($target_file)) {
                echo "Sorry, file already exists.";
                $uploadOk = 0;
            }

            // Check file size
//            if ($_FILES[$naam]["size"] > 500000) {
//                echo "Sorry, your file is too large.";
//                $uploadOk = 0;
//            }

            // Allow certain file formats
            if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
                && $imageFileType != "gif") {
                echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                $uploadOk = 0;
            }
            // Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
                echo "Sorry, your file was not uploaded.";
                // if everything is ok, try to upload file
            } else {
                if (move_uploaded_file($tmpName, $target_file)) {
                    echo "The file " . basename($filename) . " has been uploaded.";
                } else {
                    echo "Sorry, there was an error uploading your file.";
                }
            }
        }
    }


    //return mysqli_insert_id($conn);
    $conn->close();
}
