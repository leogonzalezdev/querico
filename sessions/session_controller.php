<?php
    session_start();
    if(isset($_POST['btnSubmit'])){
        if($_POST['user'] == 'admin' && $_POST['pass'] == '123'){ 
            $_SESSION['user'] = 'admin';
            $_SESSION['email'] = 'admin@gmail.com';
            $_SESSION['isLogged'] = true;
        }
    }
    if($_SESSION['isLogged'] === true){
        echo "Sesión Iniciada, Hola ",  $_SESSION['user'];

    }
    var_dump($_SESSION);
?>