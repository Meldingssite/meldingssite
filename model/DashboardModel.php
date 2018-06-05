<?php

function retrieveElements()
{
    $conn = OpenDatabaseConnection();
    $id = $_POST['id'];
    $school = $_POST['school'];
    $dataArray = [];
    $tabel = "MainTabel";
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
    } //Case more to add
    else if ($highest_id['MAX(id)'] > $id) {
        $dataArray[1] = $id + 1;
        $conn->close();
        $JSON = json_encode($dataArray);
        echo $JSON;
        return $JSON;
    } //Case More added then already present
    else if ($highest_id['MAX(id)'] < $id) {
        $dataArray[1] = $id - 1;
        $dataArray[2] = null;
        return $dataArray;
    }
}

function deleteEntry($id)//Todo add to Dashboard page
{
    $tabel = "MainTabel";
// Create connection
    $conn = OpenDatabaseConnection();
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

// sql to delete a record
    $sql = "DELETE FROM `$tabel` WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
    $conn->close();
}

function setCompleted($id) //Todo add to Dashboard page
{
    $tabel = "MainTabel";
// Create connection
    $conn = OpenDatabaseConnection();
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "UPDATE `$tabel`  SET Completed = 'true' WHERE id = '$id'";
    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
    $conn->close();
}

/*************************************/
/*************** Login ***************/
/*************************************/

function loginValid($email, $pass)
{
    $table = "users";
    $sql = "select * from `$table` where email='$email'";

    $conn = OpenDatabaseConnection();
    if($conn->connect_error)
    {
        $out['success'] = FALSE;
        $out['error'] = '3';
        return $out;
    }

    if(!$result = $conn->query($sql))
    {
        //  Query failed
        echo "Error: Our query failed to execute and here is why: \n";
        echo "Query: " . $sql . "\n";
        echo "Errno: " . $conn->errno . "\n";
        echo "Error: " . $conn->error . "\n";
        
        $out['success'] = FALSE;
        $out['error'] = '3';
        return $out;
    }

    if($result->num_rows == 0)
    {
        //  No matching email found
        $out['success'] = FALSE;
        $out['error'] = '1';
        return $out;
    }

    //var_dump($result->fetch_assoc());

    $out['success'] = TRUE;
    $out['error'] = 0;
    return $out;
}