<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
<?php
    $image_dir = "./resources/images/";
?>

    <header>
        <img src="<?php echo $image_dir ?>banner.jpg" alt="">
    </header>
    
    <main>
        <div class="box">Wat wilt u melden</div>
        <div class="btn">Ongeval</div>
        <div class="btn">Vechtpartij</div>
        <div class="btn">Wapens</div>
        <div class="btn">Drugs</div>
        
    </main>
</body>
</html>