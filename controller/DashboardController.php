<?php
require(ROOT . "model/DashboardModel.php");

function index()
{
    render("dashboard/index");
}
function bugTest()
{
    render("dashboard/new");
}
