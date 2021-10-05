<?php
require 'session_controller.php';
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Meta Basic -->
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="cache-control" content="no-cache" />
  <!-- Style Sheet -->
  <link rel="stylesheet" href="css/session_style.css">
  <!-- SEO -->
  <meta name="description"
    content="Fiambres, quesos, tortas y tartas de la mejor calidad de Córdoba. Vinos Organicos, regalos y catering para eventos.Eso y más en Que Rico - Web" />
  <meta name="keywords" content="quesos, fiambres, salamines, cordoba, eventos, que rico" />
  <!-- AUTHOR -->
  <meta name="author" content="leogonzalezok" />
  <meta name="copyright" content="Gonzalez Leonel" />
  <title>Login - Que Rico</title>
</head>
<body>
    <center>
        <div class="login">
            <form method="POST">
                <h3>Inicia Sesion</h3>
                <div class="form-group">
                    <label for="user">Usuario o email</label>
                    <input id="user" name="user" type="text">
                </div>
                <div class="form-group">
                    <label for="pass">Password</label>
                    <input id="pass" name="pass" type="password">
                </div>
            
                <input class="btn" name="btnSubmit" value="Ingresar" type="submit">
                <input class="btn" value="Resetear" type="reset">

            </form>
        </div>
    </center>
</body>
</html>