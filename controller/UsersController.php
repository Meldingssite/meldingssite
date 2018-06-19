<?php
require(ROOT . "model/UsersModel.php");
session_start();

function index()
{
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username'])) {
        render('users/index', $data = getUsers());
    } else {
        header("Location: ./dashboard");
    }
}

function edit($identifier)
{
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username'])) {
        render('users/edit', $data = getUser($identifier));
    } else {
        header("Location: ./dashboard");
    }
}

function remove($identifier)
{
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username'])) {
        render('users/remove', $data = getUser($identifier));
    } else {
        header("Location: ./dashboard");
    }
}

function create()
{
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username'])) {
        render('users/create');
    } else {
        header("Location: ./dashboard");
    }
}