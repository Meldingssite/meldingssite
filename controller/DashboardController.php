<?php
require(ROOT . "model/DashboardModel.php");

function index($msg = null)
{
    render("dashboard/login", Array(
        'msg' => $msg));
}


function verifyLogin()
{
    $result = loginValid($_POST['usermail'], $_POST['userpass']);

    if (!$result['success'])
        header("Location:" . URL . "dashboard/index/" . $result['error']);
    else
        echo "Login Valid";
}

function retrieveLogin()
{
    echo "retrieve Login";
}

function bugTest()
{
    render("dashboard/new");
}
