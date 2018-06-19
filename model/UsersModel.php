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
    $tabel = userTable;
    $newMail = $_POST['newMail'];
    $newPass = crypt(password_hash($_POST['newPass'], algo), salt);
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
    $tabel = userTable;
    $newMail = $_POST['newMail'];
    $newPass = crypt(password_hash($_POST['newPass'], algo), salt);
    $conn = openDatabaseConnection();
    $sql = "INSERT INTO `$tabel` SET email = '$newMail', password= '$newPass'";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
    }
}