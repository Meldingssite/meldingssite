<?php

function splitUrl()
{
	/**************************
     * splitUrl()
     **************************
     * Split the URL and place it in an array
     */
    
    if (isset($_GET['url'])) {
        $tmp_url = trim($_GET['url'], "/");
        $tmp_url = filter_var($tmp_url, FILTER_SANITIZE_URL);
        $tmp_url = explode("/", $tmp_url);
        $url['controller'] = isset($tmp_url[0]) ? ucwords($tmp_url[0] . 'Controller') : null;
        $url['action'] = isset($tmp_url[1]) ? $tmp_url[1] : 'index';
        unset($tmp_url[0], $tmp_url[1]);
        $url['params'] = array_values($tmp_url);
        return $url;	
    }	
}

function route()
{
	/**************************
     * route()
     **************************
     * Gets the controller and function from the URL and calls the according functions
     */
	$url = splitUrl();
	if (!$url['controller']) {
		//  No Controller Given, Result To Default
		require(ROOT . 'controller/' . DEFAULT_CONTROLLER . 'Controller.php');
		call_user_func('index');
	
    }
    
    elseif (file_exists(ROOT . 'controller/' . $url['controller'] . '.php')) {
		
		require(ROOT . 'controller/' . $url['controller'] . '.php');
		if (function_exists($url['action'])) {
			if ($url['params']) {
				call_user_func_array($url['action'], $url['params']);
			} else {
				call_user_func($url['action']);
				
			}
		} else {
			require(ROOT . 'controller/ErrorController.php');
			call_user_func('index');
		}
    }
    
    else {
	
		require(ROOT . 'controller/ErrorController.php');
		call_user_func('index');
	
	}
}