<link rel="stylesheet" href="<?php echo URL ?>public/css/dashboard.css">
<script src="<?php echo URL . SCRIPT_DIR ?>dashboard/dashboard.js"></script>
<script>window.onload = <?php echo $mode ?>();</script>
<header>
    <img src="<?php echo IMAGE_DIR ?>banner.jpg" alt="">
    <!--    TODO logout Button (logOut function PHP)-->
    <div id="Menu">
        <a href="../dashboard/Archief">
            <button id="btnArchive">Naar Archief</button>
        </a>
        <a href="../dashboard/users">
            <button id="btnChangePasswords">Wachtwoorden Wijzigen</button>
        </a>
        <a href="../dashboard/logOut">
            <button id="btnLogout">Uitloggen</button>
        </a>
    </div>
</header>
<main id="Dashboard">

</main>

