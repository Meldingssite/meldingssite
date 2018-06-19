<link rel="stylesheet" href="<?php echo URL ?>public/css/users.css">
<header>
    <h1>Gebruikers<h1>
</header>        
        
<main>
    <div style='float:right'>
        <a href="users/create">
            <i id="addUser" class="fas fa-user-plus"></i>
        </a>
    </div>
    <?php foreach ($data as $users): ?>
        <div class="user">
            <a href="users/edit/<?php echo $users['email'] ?> ">
                <i class=" fas fa-user-edit editEmail"></i>
            </a>
    
            <p class='email'><?php echo $users['email'] ?></p>
        </div>
    <?php endforeach ?>
</main>