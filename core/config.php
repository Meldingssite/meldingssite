<?php

// Define Constants Here


define('DB_TYPE', 'mysql');
define('DB_HOST', '127.0.0.1');
define('DB_USER', 'melding_site');
define('DB_PASS', 'mysql');
define('DB_NAME', 'melding_site');

define('URL_PUBLIC_FOLDER', 'public');
define('URL_PROTOCOL', '//');
define('URL_DOMAIN', $_SERVER['HTTP_HOST']);
define('URL_SUB_FOLDER', str_replace(URL_PUBLIC_FOLDER, '', dirname($_SERVER['SCRIPT_NAME'])));
define('URL', URL_PROTOCOL . URL_DOMAIN . URL_SUB_FOLDER);

define('IMAGE_DIR', 'public' . "/" . 'images' . "/");
define('SCRIPT_DIR', 'public' . DIRECTORY_SEPARATOR . 'js' . DIRECTORY_SEPARATOR);
define('UPLOADS', 'public' . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR);

define('DEFAULT_CONTROLLER', 'Home');