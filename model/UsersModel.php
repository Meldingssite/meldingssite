<?php
/*************************************/
/*************** Users ***************/
/*************************************/

function getUsers()
{
    $tabel = userTable;
    if (isset($_SESSION['username'])) {
        $conn = openDatabaseConnection();
        $sql = "select * from `$tabel`";
        $result = $conn->query($sql);
        $data = $result->fetch_all(MYSQLI_ASSOC);
        return $data;
    }
}

function getUser($identifier)
{
    $tabel = userTable;
    if (isset($_SESSION['username'])) {
        $conn = openDatabaseConnection();
        $sql = "select * from `$tabel` WHERE email = '$identifier'";
        $result = $conn->query($sql);
        $data = $result->fetch_assoc();
        return $data;
    }
}

function editUser($identifier)
{
    $passwordOptions = [
        'cost' => passwordCost,
        'salt' => salt,
    ];
    $tabel = userTable;

//    echo $newMail;
//    var_dump($_POST);
    $conn = openDatabaseConnection();
    $password = mysqli_escape_string($conn,$_POST['password']);
    $newPass = password_hash($password, PASSWORD_BCRYPT, $passwordOptions);
    $newMail = mysqli_escape_string($conn,$_POST['email']);
    $sql = "UPDATE `$tabel` SET email = '$newMail', password= '$newPass' WHERE email = '$identifier'";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
    }
}

function removeUser($identifier)
{
    $tabel = userTable;;
    $conn = openDatabaseConnection();
    $email = mysqli_escape_string($conn,$identifier);
    $sql = "DELETE FROM `$tabel` WHERE email='$email'";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
//        sleep(1);
//        header("Location: ./dashboard");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

function addUser()
{
    echo 'test';
    $passwordOptions = [
        'cost' => passwordCost,
        'salt' => salt,
    ];
    $password = mysqli_escape_string($conn,$_POST['password']);
    $tabel = userTable;
    $newMail = mysqli_escape_string($conn,$_POST['email']);
    $newPass = password_hash($password, algo, $passwordOptions);
    $conn = openDatabaseConnection();
    $sql = "INSERT INTO `$tabel` (email, password) VALUES('$newMail', '$newPass')";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
        header("Location: ../users");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

}