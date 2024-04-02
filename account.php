<?php
 session_start();
 if(!isset($_SESSION['user'])){
  header("location: login.php"); exit();
 }
 if(isset($_GET['logout'])){
  unset($_SESSION['user']);
  header("location: login.php"); exit();
 }
?>

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=, initial-scale=1.0">
 <title>Document</title>
</head>
<body>
 <div class="content">
  <header>
   <h2>Welcome <?php echo $_SESSION['user']; ?></h2>
   <a href="?logout">Log out</a>
  </header>

  <main>

  </main>
 </div>
</body>
</html>