<link rel="stylesheet" href="<?php echo URL ?>public/css/users.css">
<link rel="stylesheet" href="<?php echo URL ?>public/css/menu.css">
<header>
    <h1>Gebruikers<h1>
</header>

<main>
    <div id="Menu">
        <div class="clearfix"></div>
        <a id="btnLogout" href="dashboard/">
            <i id='btnBack' class="fas fa-arrow-circle-left"></i>
            <p>Terug naar Dashboard</p>
        </a>
    </div>

    <div style='float:right'>
        <a href="users/create">
            <i id="addUser" class="fas fa-user-plus"></i>
        </a>
    </div>
    <?php foreach ($data as $users): ?>
        <div class="user">
            <a href="users/edit/<?php echo htmlspecialchars($users['email']) ?> ">
                <i class=" fas fa-user-edit editEmail"></i>
            </a>

            <p class='email'><?php echo htmlspecialchars($users['email']) ?></p>

            <a href="users/delete/<?php echo htmlspecialchars($users['email']) ?>"
               class="deleteMail" onclick="return confirm('weet u zeker dat u deze gebruiker wilt verwijderen?')">
                <i class="fas fa-eraser"></i>
            </a>
        </div>
    <?php endforeach ?>
</main>