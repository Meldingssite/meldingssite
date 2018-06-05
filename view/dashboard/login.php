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
        style="width: 175px; margin: 0 auto;"
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
    <div style="width: 175px; margin: 0 auto;">
        <a href="<?php echo URL?>dashboard/retrieveLogin"><button>Login vergeten</button></a>
        <input type="submit" value="Login" form="formLogin" style="float: right;">
    </div>

    <p style="color: red; width: 100%; text-align: center;"><?php echo getMessage( $data['msg'] ) ?></p>
</main>