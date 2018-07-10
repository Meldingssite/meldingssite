<?php
require(ROOT . "model/DashboardModel.php");
session_start();

if(empty($_SERVER['HTTPS']) || $_SERVER['HTTPS'] == "off"){
    $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $redirect);
    exit();
}


function index($msg = null)
{
    /**************************
     * index()
     **************************
     * Renders either login or dashboard
     */
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
    /**************************
     * Login()
     **************************
     * DESCRIPTION HERE
     */
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

function retrieveLogin()
{
    /**************************
     * retrieveLogin()
     **************************
     * DESCRIPTION HERE
     */
    echo "Neem contact op met piet";
}