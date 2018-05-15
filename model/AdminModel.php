<?php

function saveJSON()
{
    // If permission denied error shows,
    // chmod 777 project folder

    $fp = fopen(ROOT . SCRIPT_DIR . "pages.json", 'w');
    fwrite($fp, $_POST["JSON"]);
    fclose($fp);
}

function deleteJSON()
{
    if (unlink(ROOT . SCRIPT_DIR . "pages.json"))
        echo "File Deleted.";
}

