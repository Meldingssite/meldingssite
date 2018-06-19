<?php
var_dump($data);

?>
<form action="../../users/editUser/<?php echo $data['email'] ?>" method="post">
    <h1>edit User
    </h1>
    <input type="email" name="email" value="<?php echo $data['email'] ?>" required>
    <input type="password" name="password" value="" required>
    <input type="submit">
</form>