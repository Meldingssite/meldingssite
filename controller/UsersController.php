<?php
require(ROOT . "model/UsersModel.php");
session_start();

function index()
{
    /**************************
     * index()
     **************************
     * DESCRIPTION HERE
     */
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username']) && $_SESSION['rights'] > 1) {
        render('users/index', Array(
            'data' => getUsers()));
    } else {
        header("Location: ./dashboard");
    }
}

function edit($identifier)
{
    /**************************
     * edit()
     **************************
     * DESCRIPTION HERE
     */
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username']) && $_SESSION['rights'] > 1) {
        render('users/edit', Array(
            'data' => getUser($identifier)));
    } else {
        header("Location: ./dashboard");
    }
}

function create()
{
    /**************************
     * create()
     **************************
     * DESCRIPTION HERE
     */
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username']) && $_SESSION['rights'] > 1) {
        render('users/create');
    } else {
        header("Location: ./dashboard");
    }
}

function delete($identifier)
{
    /**************************
     * delete()
     **************************
     * DESCRIPTION HERE
     */
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username']) && $_SESSION['rights'] > 1) {
        removeUser($identifier);
        header("Location: " . URL . "users");
    } else {
        header("Location: " . URL . "/dashboard");
    }
}