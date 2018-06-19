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
    $newMail = $_POST['email'];
    echo $newMail;
    var_dump($_POST);
    $password = $_POST['password'];
    $newPass = password_hash($password, PASSWORD_BCRYPT, $passwordOptions);
    $conn = openDatabaseConnection();
    $sql = "UPDATE `$tabel` SET email = '$newMail', password= '$newPass' WHERE email = '$identifier'";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
    }
}

function removeUser($identifier)
{
    $tabel = userTable;;
    $conn = openDatabaseConnection();
    $sql = "DELETE FROM `$tabel` WHERE email=$identifier";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
    }
}

function addUser()
{
    echo 'test';
    $passwordOptions = [
        'cost' => passwordCost,
        'salt' => salt,
    ];
    $password = $_POST['password'];
    $tabel = userTable;
    $newMail = $_POST['email'];
    $newPass = password_hash($password, PASSWORD_BCRYPT, $passwordOptions);
    $conn = openDatabaseConnection();
    $sql = "INSERT INTO `$tabel` (email, password) VALUES('$newMail', '$newPass')";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

}