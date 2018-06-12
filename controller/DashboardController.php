<?php
require(ROOT . "model/DashboardModel.php");

function index($msg = null)
{
    if (isset($_SESSION['username'])) {
        render('dashboard/index');
    } else {
        render("dashboard/login", Array(
            'msg' => $msg));
    }
}


function Login()
{
    if (isset($_POST['usermail'], $_POST['userpass'])) {
        $result = loginValid($_POST['usermail'], $_POST['userpass']);
        if ($result['success'])
            index();
        else
            index($result['error']);
    } else {
        header("Location: ../dashboard");

    }
}

function retrieveLogin()
{
    echo "retrieve Login";
}

function bugTest()
{
    render("dashboard/new");
}
