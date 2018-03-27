<?php

require(ROOT . "model/AdminModel.php");

function index()
{
    render("admin/index");
}

function savePage()
{
    saveJSON();

    // header("Location:" . URL . "admin");
}