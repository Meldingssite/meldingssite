<?php
require(ROOT . "model/DashboardModel.php");
//var_dump($_SESSION);
session_start();
function index($msg = null)
{
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
    if (isset($_POST['usermail'], $_POST['userpass'])) {
        $result = loginValid($_POST['usermail'], $_POST['userpass']);
        if ($result['success']) {
//            $_SESSION['username'] = $result['username'];
            header("Location: ../dashboard");
        } else
            index($result['error']);
    } else {
        header("Location: ../dashboard");
    }
}

//function archief()
//{
//    if (isset($_SESSION['username'])) {
//        render('dashboard/index', Array(
//            'mode' => 'archief'));
//    } else {
//        header("Location: ../dashboard");
//    }
//}

function users()
{
    if (isset($_SESSION['username'])) {
        render('dashboard/users');
    } else {
        header("Location: ../dashboard");
    }
}

function retrieveLogin()
{
    echo "retrieve Login";
}

//function bugTest()
//{
//    render("dashboard/new");
//}
