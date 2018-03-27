<?php

require(ROOT . "model/AdminModel.php");

function index()
{
    render("admin/index");
}

function savePage($JSONString)
{
    saveJSON($JSONString);

    // header("Location:" . URL . "admin/index");
}