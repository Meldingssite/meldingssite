<?php

function retrieveElements()
{
    $conn = OpenDatabaseConnection();
    $id = $_POST['id'];
    $school = $_POST['school'];
    $tabel = "MainTabel";
    $dataArray = [];
    $sql = "select * from `$tabel` where id=$id";
    $result = $conn->query($sql);
    $dataArray[0] = $result->fetch_assoc();
    $result2 = $conn->query("select MAX(id) from `$tabel`");
    $highest_id = $result2->fetch_assoc();
    //Case at the last one to add
    if ($highest_id['MAX(id)'] == $id) {
        $dataArray[1] = $id;
        $conn->close();
        $JSON = json_encode($dataArray);
        echo $JSON;
        return $JSON;
    }
    //Case more to add
    else if ($highest_id['MAX(id)'] > $id) {
        $dataArray[1] = $id + 1;
        $conn->close();
        $JSON = json_encode($dataArray);
        echo $JSON;
        return $JSON;
    }
    //Case More added then already present
    else if ($highest_id['MAX(id)'] < $id) {
        $dataArray[1] = $id - 1;
        $dataArray[2] = null;
        return $dataArray;
    }
}