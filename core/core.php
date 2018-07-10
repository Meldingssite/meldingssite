<?php

function openDatabaseConnection() 
{
	/**************************
     * openDatabaseConnection()
     **************************
     * Creates a Database Connection using mysqli
	 * Uses globals from core/config.php
	 * 
	 * Returns the database connection $conn
	 * 
	 * Process:
	 * 		[1]	Create a new database connection
	 * 		[2]	Check if there is a connect_error
	 * 		[3]	If there is, try a connection with a blank password
	 * 		[4] If that fails, die and report error
	 * 		[5] Return the connection $conn
     */
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

	if ($conn->connect_error)
	{
		$conn2 = new mysqli(DB_HOST, DB_USER, '', DB_NAME);
		if ($conn2->connect_error)
		{
			die("Connection failed: " . $conn->connect_error . $conn->connect_error);
		}
		else
			$conn = $conn2;
	}

	return $conn;
}

function render($filename, $data = null)
{
	/**************************
     * render()
     **************************
     * Renders a view
	 * 
	 * Process:
	 * 		[1] If in debug mode, do debug mode exclusive stuff
	 * 		[2] If there is data, do stuff with it
	 * 		[3] Require Header
	 * 		[4] Require View
	 * 		[5] Require Footer 
     */

	if(DEBUG)	//	Is Debugging Enabled?
	{
		//  Notify That Debug Mode Is Active

		echo "<a href='" . URL . "'><div class='debug'>Debug Mode</div></a>";
		
		require(ROOT . "core/debug.php");
	}

	if ($data)
	{
		foreach($data as $key => $value)
		{
			$$key = $value;
		}
	}

	require(ROOT . 'view/templates/header.php');
	require(ROOT . 'view/' . $filename . '.php');
	require(ROOT . 'view/templates/footer.php');
}