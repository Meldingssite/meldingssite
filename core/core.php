<?php

function openDatabaseConnection() 
{
	$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

	if ($conn->connect_error)
	{
		$conn2 = new mysqli($servername, $username, '', $database);
		if ($conn2->connect_error)
		{
			die("Connection failed: " . $conn->connect_error . $conn->connect_error);
		}
		else
			$conn = $conn2;
	}

	return $conn;
}

function render($filename)
{

	if(DEBUG)	//	Is Debugging Enabled?
	{
		//  Notify That Debug Mode Is Active

		echo "<a href='" . URL . "'><div class='debug'>Debug Mode</div></a>";
		
		require(ROOT . "core/debug.php");
	}

	require(ROOT . 'view/templates/header.php');
	require(ROOT . 'view/' . $filename . '.php');
	require(ROOT . 'view/templates/footer.php');
}