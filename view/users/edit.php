<link rel="stylesheet" href="<?php echo URL ?>public/css/users.css">
<link rel="stylesheet" href="<?php echo URL ?>public/css/forms.css">

<header>
    <h1><a href="<?php echo URL?>users"><i id='btnBack' class="fas fa-arrow-circle-left"></i><a>edit User</h1>
</header>

<main>
    <form action="../../users/editUser/<?php echo $data['email'] ?>" method="post">
        <input  name="email" value="<?php echo $data['email'] ?>" required>
        <input type="password" name="password" value="" placeholder="Wijzig Wachtwoord(leeg laten om huidig behouden)">
        <select name="rights">
            <option value = 0 <?php if($data['rights'] == 0) echo 'selected' ?>>Alleen dashboard</option>
            <option value = 2 <?php if($data['rights'] == 2) echo 'selected' ?>>Volledig</option>
        </select>
        <input type="submit" value='Gebruiker Aanpassen'>
    </form>
</main>