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
    if ($conn->connect_error)
        die("Connection failed: " . $conn->connect_error);

    // sql to delete a record
    $sql = "DELETE FROM `$tabel` WHERE id=$id";

    if ($conn->query($sql) === TRUE)
        echo "Record deleted successfully";
    else
        echo "Error deleting record: " . $conn->error;
    $conn->close();
}

function setCompleted($id) //Todo add to Dashboard page
{
    $tabel = "MainTabel";
    // Create connection
    $conn = OpenDatabaseConnection();

    // Check connection
    if ($conn->connect_error)
        die("Connection failed: " . $conn->connect_error);

    $sql = "UPDATE `$tabel`  SET Completed = 'true' WHERE id = '$id'";
    if ($conn->query($sql) === TRUE)
        echo "Record deleted successfully";
    else
        echo "Error deleting record: " . $conn->error;

    $conn->close();
}

/*************************************/
/*************** Login ***************/
/*************************************/

function loginValid($emailTemp, $passTemp)
{
    $conn = OpenDatabaseConnection();
    // Check if username is empty
    if (empty(trim($emailTemp))) {
        $username_err = 'Please enter username.';
    } else {
        $email = mysqli_real_escape_string($conn, trim($emailTemp));
    }

    // Check if password is empty
    if (empty(trim($passTemp))) {
        $password_err = 'Please enter your password.';
    } else {
        $pass = mysqli_real_escape_string($conn, trim($passTemp));
    }

    if (empty($username_err) && empty($password_err)) {
        if ($conn->connect_error) {
            $out['success'] = FALSE;
            $out['error'] = '3';
            return $out;
        }

        $table = "users";
        $stmt = $conn->prepare("SELECT * FROM `$table` WHERE email = ?");
        $stmt->bind_param('s', $email); // 's' specifies the variable type => 'string'
        $stmt->execute();
        mysqli_stmt_store_result($stmt);

        //TODO expand code underneeth
        // Check if username exists, if yes then verify password
        if (mysqli_stmt_num_rows($stmt) == 1) {
            // Bind result variables
            echo "1";
            mysqli_stmt_bind_result($stmt, $username, $hashed_password);
            if (mysqli_stmt_fetch($stmt)) {
                echo "2";
                if (password_verify($pass, $hashed_password)) {
                    echo "3";
                    /* Password is correct, so start a new session and
                    save the username to the session */
                    session_start();
                    $_SESSION['username'] = $username;
                    $out['success'] = TRUE;
                    $out['error'] = 0;
                    return $out;
                } else {
                    // Display an error message if password is not valid
                    $password_err = 'The password you entered was not valid.';
                }
            }
        } else {
            // Display an error message if username doesn't exist
//            $username_err = 'No account found with that username.';
            //  No matching email found
            $out['success'] = FALSE;
            $out['error'] = '1';
            return $out;
        }
    } else {
        //  Query failed
        echo "Error: Our query failed to execute and here is why: \n";
//        var_dump($stmt);
        echo "Error: " . $conn->errno . "\n";
        echo "Error: " . $conn->error . "\n";

        $out['success'] = FALSE;
        $out['error'] = '3';
        return $out;
//        echo "Oops! Something went wrong. Please try again later.";

    }


// Close statement
    mysqli_stmt_close($stmt);


// Close connection


//        if (!$result = $conn->query($sql)) {

//        }

//        if ($result->num_rows == 0) {

//        }

//var_dump($result->fetch_assoc());


}