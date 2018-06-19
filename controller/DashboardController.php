<?php
require(ROOT . "model/DashboardModel.php");
session_start();


function index($msg = null)
{
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username'])) {
        render('dashboard/index', Array(
            'mode' => 'startbasic'));
    } else {
        render("dashboard/login", Array(
            'msg' => $msg));
    }
}


function Login()
{
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_POST['usermail'], $_POST['userpass'])) {
        $result = loginValid($_POST['usermail'], $_POST['userpass']);
        if ($result['success']) {
            header("Location: ../dashboard");
        } else
            index($result['error']);
    } else {
        header("Location: ../dashboard");
    }
}

function users()
{
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username'])) {
        render('dashboard/users');
    } else {
        header("Location: ../dashboard");
    }
}

function retrieveLogin()
{
    echo "Neem contact op met piet";
}

//function bugTest()
//{
//    render("dashboard/new");
//}
