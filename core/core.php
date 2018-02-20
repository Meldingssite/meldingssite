<?php

function render($filename)
{

	if(DEBUG)	//	Is Debugging Enabled?
	{
		//  Notify That Debug Mode Is Active
		echo "<div class='debug'>Debug Mode</div>";
		
		require(ROOT . "core/debug.php");
	}

	require(ROOT . 'view/templates/header.php');
	require(ROOT . 'view/' . $filename . '.php');
	require(ROOT . 'view/templates/footer.php');
}