<?php

function retrieveElements()
{
    $conn = OpenDatabaseConnection();
    $id = $_POST['id'];
    $dataArray = [];
    $tabel = "MainTabel";
    $sql = "select * from `$tabel` where id=$id";
    $result = $conn->query($sql);
    $dataArray[0] = $result->fetch_assoc();
    $result2 = $conn->query("select MAX(id) from `$tabel`");
    $highest_id = $result2->fetch_assoc();

    //Case at the last one to add
    if ($highest_id['MAX(id)'] == $id) {
        $dataArray[1] = $id + 1;
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
        $dataArray[1] = $id;
        $dataArray[2] = null;
        return $dataArray;
    }
}

function startID()
{
    $conn = OpenDatabaseConnection();
    $tabel = "MainTabel";
    $result2 = $conn->query("select MAX(id) from `$tabel`");
    echo $result2->fetch_assoc()['MAX(id)'];
}

function deleteEntry()//Todo delete Files
{
    $tabel = "MainTabel";
    $id = $_POST['id'];
    // Create connection
    $conn = OpenDatabaseConnection();
    // Check connection
    if ($conn->connect_error)
        die("Connection failed: " . $conn->connect_error);

    $sql = "select * from `$tabel` where id=$id";
    $result = $conn->query($sql);
    $data = $result->fetch_assoc();
//    var_dump($data);
    if ($data['FILE'] != null && $data['FILE'] != '' && $data['FILE'] != 'undefined') {
        $file = 'uploads/' . $data['id'] . '/' . $data['FILE'];
        unlink($file);
        rmdir('uploads/' . $data['id']);
        echo "file deleted successfully!";

    }
    // sql to delete a record
    $sql = "DELETE FROM `$tabel` WHERE id=$id";

    if ($conn->query($sql) === TRUE)
        echo "Record deleted successfully";
    else
        echo "Error deleting record: " . $conn->error;
    $conn->close();
}

function setCompleted()
{
    $dataArray = [];
    $tabel = "MainTabel";
    // Create connection
    $conn = OpenDatabaseConnection();
    $id = $_POST['id'];
    // Check connection
    if ($conn->connect_error)
        die("Connection failed: " . $conn->connect_error);
    $current = $conn->query("select Completed from `$tabel` where id = '$id'");
    $currentValue = $current->fetch_assoc();
    if ($currentValue['Completed'] == 'true') {
        $sql = "UPDATE `$tabel`  SET Completed = 'false' WHERE id = '$id'";
        if ($conn->query($sql) === TRUE) {
            $dataArray[0] = false;
            $conn->close();
            echo 'false';
            return json_encode($dataArray);
        } else
            echo "Error deleting record: " . $conn->error;
    } else {
        $sql = "UPDATE `$tabel`  SET Completed = 'true' WHERE id = '$id'";
        if ($conn->query($sql) === TRUE) {
            $dataArray[0] = true;
            $conn->close();
            echo 'true';
            return json_encode($dataArray);
        } else
            echo "Error deleting record: " . $conn->error;
    }
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
//        die("test");
        if (
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?")) {

            $stmt->bind_param('s', $email); // 's' specifies the variable type => 'string'
            $stmt->execute();
//            die(var_dump($stmt));
        } else {
            $error = $conn->errno . ' ' . $conn->error;
            die($error);
        }
        mysqli_stmt_store_result($stmt);

        //TODO expand code underneeth
        // Check if username exists, if yes then verify password
        if (mysqli_stmt_num_rows($stmt) == 1) {
            // Bind result variables

            mysqli_stmt_bind_result($stmt, $username, $hashed_password);
            if (mysqli_stmt_fetch($stmt)) {
//                die($pass . $hashed_password);
//                if (password_verify($pass, $hashed_password)) {
                if ($pass == $hashed_password) { //TODO hash Password

                    /* Password is correct, so start a new session and
                    save the username to the session */
                    session_start();
                    $_SESSION['username'] = $username;

                    $out['success'] = TRUE;
                    $out['error'] = 0;;
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

    mysqli_stmt_close($stmt);


}

function logOut()
{
    session_destroy();
    $_SESSION = array();

}
