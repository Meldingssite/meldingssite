<?php

function saveJSON($JSONString)
{
    // If no permission error shows,
    // chmod 777 project folder
    $fp = fopen(ROOT . SCRIPT_DIR . "jsonWrite.json", 'w');
    fwrite($fp, json_encode($JSONString));
    fclose($fp);
}