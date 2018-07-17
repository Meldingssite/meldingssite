<link rel="stylesheet" href="<?php echo URL ?>public/css/users.css">
<link rel="stylesheet" href="<?php echo URL ?>public/css/forms.css">
<header>
    <h1><a href="<?php echo URL ?>users"><i id='btnBack' class="fas fa-arrow-circle-left"></i><a>Nieuwe Gebruiker<h1>
</header>

<main>
    <form action="addUser" method="post">
        <input name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Wachtwoord" required>
        <select name="rights">
            <option value=2>
                Volledig
            </option>
            <option value=0>
                Alleen Dashboard
            </option>
        </select>
        <input type="submit" value="Gebruiker Aanmaken">
    </form>
</main>
