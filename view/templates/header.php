<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="<?php echo URL ?>public/css/style.css">
    <title>Document</title>

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
</head>
<body>

<script>
// Import PHP variables into JavaScript
var ROOT = <?php echo json_encode(ROOT) ?>;
var URL = <?php echo json_encode(URL) ?>;
var SCRIPT_DIR = <?php echo json_encode(URL . SCRIPT_DIR) ?>;
var IMAGE_DIR = <?php echo json_encode(URL . IMAGE_DIR) ?>;
</script>