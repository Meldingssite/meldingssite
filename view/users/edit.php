<link rel="stylesheet" href="<?php echo URL ?>public/css/users.css">
<link rel="stylesheet" href="<?php echo URL ?>public/css/forms.css">

<header>
    <h1><a href="<?php echo URL?>users"><i id='btnBack' class="fas fa-arrow-circle-left"></i><a>edit User</h1>
</header>

<main>
    <form action="../../users/editUser/<?php echo $data['email'] ?>" method="post">
        <input type="email" name="email" value="<?php echo $data['email'] ?>" required>
        <input type="password" name="password" value="" placeholder="Wijzig Wachtwoord" required>
        <input type="submit" value='Gebruiker Aanpassen'>
    </form>
</main>