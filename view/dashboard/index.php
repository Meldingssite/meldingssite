<link rel="stylesheet" href="<?php echo URL ?>public/css/dashboard.css">
<script src="<?php echo URL . SCRIPT_DIR ?>dashboard/dashboard.js"></script>
<script>window.onload = startbasic();</script>
<header>
    <img src="<?php echo IMAGE_DIR ?>banner.jpg" alt="">
    <!--    TODO logout Button (logOut function PHP)-->
    <div id="Menu">
        <button id="btnArchive" onclick="archief()"><p>Naar Archief</p></button>
        <a href="dashboard/users">
            <button id="btnChangePasswords"><p>Wachtwoorden Wijzigen</p></button>
        </a>
        <a href="dashboard/logOut">
            <button id="btnLogout"><p>Uitloggen</p></button>
        </a>
    </div>
</header>
<main id="Dashboard">

</main>

