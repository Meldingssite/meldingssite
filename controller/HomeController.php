<?php
require(ROOT . "model/HomeModel.php");

function index()
{
    /**************************
     * index()
     **************************
     * DESCRIPTION HERE
     */
    render("home/index");
}

function sendData()
{
    /**************************
     * sendData()
     **************************
     * DESCRIPTION HERE
     */
    sendDataModel();
}
