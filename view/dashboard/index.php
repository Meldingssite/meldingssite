<link rel="stylesheet" href="<?php echo URL ?>public/css/dashboard.css">
<script src="<?php echo URL . SCRIPT_DIR ?>dashboard/dashboard.js"></script>
<script>window.onload = startbasic();</script>
<header>
<!--    <img src="--><?php //echo IMAGE_DIR ?><!--banner.jpg" alt="">-->
    <!--    TODO logout Button (logOut function PHP)-->
    <div id="Menu">
        <a id="btnArchive" onclick="archief()">
            <i class="fas fa-archive fa-lg"></i>
            <p>Naar Archief</p>
        </a>
        <div class="clearfix"></div>
        <a id="btnChangePasswords" href="users">
            <i class="fas fa-users fa-lg"></i>
            <p>Account Beheer</p>
        </a>

        <div class="clearfix"></div>
        <a id="btnLogout" href="dashboard/logOut">
            <i class="fas fa-sign-out-alt fa-lg"></i>
            <p>Uitloggen</p>
        </a>
    </div>
</header>
<main id="Dashboard">

</main>

