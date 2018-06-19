<link rel="stylesheet" href="<?php echo URL ?>public/css/users.css">
<?php //var_dump($data) ?>
</header>
<?php foreach ($data

               as $users): ?>
    <div class="user">
        <a href="users/edit/<?php echo $users['email'] ?> ">
            <i class=" fas fa-user-edit editEmail">
            </i></a>

        <p><?php echo $users['email'] ?></p>
<!--        <p>--><?php //echo $users['password'] ?><!--</p>-->
    </div>
<?php endforeach; ?>
</main>