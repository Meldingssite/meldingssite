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
        render('users/index', Array(
            'data' => getUsers()));
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
        render('users/edit', Array(
            'data' => getUser($identifier)));
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
        render('users/remove', Array(
            'data' => getUser($identifier)));
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

function delete($identifier)
{
    $url = $_SERVER['REQUEST_URI'];
    if (substr($url, -1) == "/") {
        $url = substr_replace($url, "", -1);
        header("Location: $url");
    }
    if (isset($_SESSION['username'])) {
        removeUser($identifier);
        render('users/remove', array('user' => $identifier));
    } else {
        header("Location: ./dashboard");
    }
}