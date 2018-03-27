<?php

function saveJSON($JSONString)
{
    // If permission denied error shows,
    // chmod 777 project folder
    $fp = fopen(ROOT . SCRIPT_DIR . "pages.json", 'w');
    fwrite($fp, $JSONString);
    fclose($fp);
}