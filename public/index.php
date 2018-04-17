<?php

// Enable Debugging Mode?
define("DEBUG", false);  //  true: debug enabled     false: debugging disabled

define("ROOT", dirname(__DIR__) . DIRECTORY_SEPARATOR);

require(ROOT . "core/config.php");
require(ROOT . "core/route.php");
require(ROOT . "core/core.php");

route();