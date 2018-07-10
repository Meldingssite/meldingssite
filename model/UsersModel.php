<?php
/*************************************/
/*************** Users ***************/
/*************************************/

function getUsers()
{
    /**************************
     * getUsers()
     **************************
     * Returns all users from the database.
     */
    $tabel = userTable;
    if (isset($_SESSION['username'])) {
        $conn = openDatabaseConnection();
        $sql = "select * from `$tabel`";
        $result = $conn->query($sql);
        $data = $result->fetch_all(MYSQLI_ASSOC);
        return $data;
    }
}

function getUser($identifier)
{
    /**************************
     * getUser()
     **************************
     * Returns a single user from the database.
     */
    $tabel = userTable;
    if (isset($_SESSION['username'])) {
        $conn = openDatabaseConnection();
        $sql = "select * from `$tabel` WHERE email = '$identifier'";
        $result = $conn->query($sql);
        $data = $result->fetch_assoc();
        return $data;
    }
}

function editUser($identifier)
{
    /**************************
     * editUser()
     **************************
     * Edit a users name, address and/or rights in the database
     */
    $passwordOptions = [
        'cost' => passwordCost,
    ];
    $tabel = userTable;

    $conn = openDatabaseConnection();
    $password = mysqli_escape_string($conn, $_POST['password']);
    $rights = mysqli_escape_string($conn, $_POST['rights']);
    $newPass = password_hash($password, PASSWORD_BCRYPT, $passwordOptions);
    $newMail = mysqli_escape_string($conn, $_POST['email']);
    if ($password != null && $password != '' && $password != 'undefined')
        $sql = "UPDATE `$tabel` SET email = '$newMail', password= '$newPass', rights = '$rights' WHERE email = '$identifier'";
    else
        $sql = "UPDATE `$tabel` SET email = '$newMail', rights = '$rights' WHERE email = '$identifier'";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
        header("Location: ../../users");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

}

function removeUser($identifier)
{
    /**************************
     * removeUser()
     **************************
     * Delete user from the database
     */
    $tabel = userTable;;
    $conn = openDatabaseConnection();
    $email = mysqli_escape_string($conn, $identifier);
    $sql = "DELETE FROM `$tabel` WHERE email='$email'";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
        header("Location: ../users");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

function addUser()
{
    /**************************
     * addUser()
     **************************
     * Creates a new user in the database
     */
    $conn = openDatabaseConnection();
    echo 'test';
    $passwordOptions = [
        'cost' => passwordCost,
    ];

    $password = mysqli_escape_string($conn, $_POST['password']);
    $tabel = userTable;
    $newMail = mysqli_escape_string($conn, $_POST['email']);
    $newPass = password_hash($password, algo, $passwordOptions);
    $rights = mysqli_escape_string($conn, $_POST['rights']);

    $sql = "INSERT INTO `$tabel` (email, password, rights) VALUES('$newMail', '$newPass', '$rights')";
    if ($conn->query($sql) === TRUE) {
        $conn->close();
        header("Location: ../users");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

}