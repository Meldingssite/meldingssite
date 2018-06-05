<?php
require(ROOT . "model/DashboardModel.php");

function index($msg = null)
{
    render("dashboard/login", Array(
        'msg' => $msg));
}

function verifyLogin()
{
    if( 
        $_POST['usermail'] === 'admin@mail.com' &&
        $_POST['userpass'] === 'password'
    )
    {
        echo "Login Valid";
    }

    else
        header("Location:" . URL . "dashboard/index/1");
}

function retrieveLogin()
{
    echo "retrieve Login";
}

function bugTest()
{
    render("dashboard/new");
}
