<?php
require(ROOT . "model/HomeModel.php");
function index()
{
    render("home/index");
}

function sendData()
{
    die("test");
    echo "werkt";
    sendDataModel();
}
