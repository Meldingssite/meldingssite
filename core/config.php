<?php

// Define Constants Here


define('DB_TYPE', 'mysql');
define('DB_HOST', '127.0.0.1');
define('DB_USER', 'root');
define('DB_PASS', 'mysql');
define('DB_NAME', 'meldingssite');

define('URL_PUBLIC_FOLDER', 'public');
define('URL_PROTOCOL', '//');
define('URL_DOMAIN', $_SERVER['HTTP_HOST']);
define('URL_SUB_FOLDER', str_replace(URL_PUBLIC_FOLDER, '', dirname($_SERVER['SCRIPT_NAME'])));
define('URL', URL_PROTOCOL . URL_DOMAIN . URL_SUB_FOLDER);

define('IMAGE_DIR', 'public' . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR);
define('SCRIPT_DIR', 'public' . DIRECTORY_SEPARATOR . 'js' . DIRECTORY_SEPARATOR);

define('DEFAULT_CONTROLLER', 'Home');