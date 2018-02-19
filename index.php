<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <script source="homepage.js"></script>
    <title>Document</title>

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
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
        <div class="btn">Diefstal</div>
        <div class="btn">Pesten</div>
        <div class="btn">Overlast</div>
        <div class="btn">Overige</div>
        
    </main>
</body>
</html>