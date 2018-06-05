<link rel="stylesheet" href="<?php echo URL ?>public/css/forms.css">

<?php
    function getMessage($msg)
    {
        switch($msg){
            //  Define Messages here
            case 1:
                return 'Onbekend Email Adres';
                break;
            
            case 3:
                return 'Kan niet verbinden met de database';
                break;

            default:
                return;
        }
    }
?>

<main id="login">

    <form
        action="<?php echo URL ?>dashboard/verifyLogin" 
        method="post" 
        id="formLogin" 
    >

        <input 
            type="email" 
            name="usermail" 
            id="usermail" 
            placeholder="Email" 
            autofocus
            required    
            value="admin@mail.com"
        >
        <input
            type="password" 
            name="userpass" 
            id="userpass" 
            placeholder="Password"
            required
            minlength="8"
            value="password"
        >
    </form>
    <div>
        <a href="<?php echo URL?>dashboard/retrieveLogin"><button id="btnForgotLogin">Login vergeten</button></a>
        <input id="btnLogin" type="submit" value="Login" form="formLogin" style="float: right;">
    </div>

    <p class="errorMessage"><?php echo getMessage( $data['msg'] ) ?></p>
</main>