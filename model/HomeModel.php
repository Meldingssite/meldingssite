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
    } else
        // id given
    {
        var_dump($_FILES["file_test"]);
        var_dump($_POST["file_test"]);
        print_r($_FILES);
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
            } else if (preg_match("/(file)/", $keys[$x])) {
                var_dump($_FILES);
            }
//                //Todo add file uploading logic
//
//                $target_dir = "uploads/";
//
//                $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
//
//                $uploadOk = 1;
//                $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
//                // Check if image file is a actual image or fake image
//                if (isset($_POST["submit"])) {
//                    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
//                    if ($check !== false) {
//                        echo "File is an image - " . $check["mime"] . ".";
//                        $uploadOk = 1;
//                    } else {
//                        echo "File is not an image.";
//                        $uploadOk = 0;
//                    }
//                }
//
//            }
//        }
        }
    }


    return mysqli_insert_id($conn);
    $conn->close();
}
