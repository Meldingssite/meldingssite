<?php
/*************************************/
/*************** Users ***************/
/*************************************/

function getUsers()
{
    if (isset($_SESSION['username'])) {
        $conn = openDatabaseConnection();
        $tabel = "users";
        $sql = "select * from `$tabel`";
        $result = $conn->query($sql);
        $data = $result->fetch_all();
        return $data;
    }
}