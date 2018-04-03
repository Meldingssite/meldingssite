<?php

require(ROOT . "model/AdminModel.php");

function index()
{
    render("admin/index");
}

function create()
{
    render("admin/create");
}

function delete()
{
    render("admin/delete");
}

function savePage()
{
    saveJSON();

    header("Location:" . URL . "admin");
}

function deletePages()
{

}