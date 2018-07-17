<?php

// Define Constants Here


define('DB_TYPE', 'mysql');
define('DB_HOST', 'localhost');
define('DB_USER', 'meldendvc_nl_meldingsite');
define('DB_PASS', 'C@nsig2018');
define('DB_NAME', 'meldendvc_nl_meldingsite');
define('salt', 'csgodevonREEEEEEEEEEEEEEE');
define('passwordCost', 10);
define('algo', PASSWORD_BCRYPT );
define('userTable', 'users');
define('mainTable', 'MainTabel');

define('URL_PUBLIC_FOLDER', 'public');
define('URL_PROTOCOL', '//');
define('URL_DOMAIN', $_SERVER['HTTP_HOST']);
define('URL_SUB_FOLDER', str_replace(URL_PUBLIC_FOLDER, '', dirname($_SERVER['SCRIPT_NAME'])));
define('URL', URL_PROTOCOL . URL_DOMAIN . URL_SUB_FOLDER);

define('IMAGE_DIR', 'public' . "/" . 'images' . "/");
define('SCRIPT_DIR', 'public' . DIRECTORY_SEPARATOR . 'js' . DIRECTORY_SEPARATOR);
define('UPLOADS', 'public' . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR);

define('DEFAULT_CONTROLLER', 'Home');