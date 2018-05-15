<?php

function retrieveElements()
{
    $conn = OpenDatabaseConnection();
    $id = $_POST['id'];
    $school = $_POST['school'];
    $dataArray = [];
    $sql = "select * from $school where id=$id";
    $result = $conn->query($sql);
    $dataArray[0] = $result->fetch_assoc();
    $result2 = $conn->query("select MAX(id) from $school");
    $highest_id = $result2->fetch_assoc();
    if ($highest_id['MAX(id)'] == $id) {
        $dataArray[1] = $id;
        $dataArray[3] = true;
        $conn->close();
        $JSON = json_encode($dataArray);
        echo $JSON;
        return $JSON;
    } else if ($highest_id['MAX(id)'] > $id) {
        $dataArray[1] = $id + 1;
        $dataArray[3] = false;
        $conn->close();
        $JSON = json_encode($dataArray);
        echo $JSON;
        return $JSON;
    } else if ($highest_id['MAX(id)'] < $id) {
        return null;
    }
}