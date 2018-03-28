<?php

function saveJSON()
{
    var_dump(file_get_contents('php://input'));

    var_dump($_POST);
    foreach ($_POST as $key => $value)
    {
    // ... Do what you want with $key and $value
        echo $key . " => " . $value;
    }

    // If permission denied error shows,
    // chmod 777 project folder
    //$fp = fopen(ROOT . SCRIPT_DIR . "pages.json", 'w');
    //fwrite($fp, $JSONString);
    //fclose($fp);

    //echo $JSONString;
}