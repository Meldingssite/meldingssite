<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>

    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">
</head>
<body>

<!-- PHP Classes -->
<?php
class MainButton {
    public $innerText;
    public $imageUrl;
}
?>

<!-- PHP Variables -->
<?php
    $image_dir = "./resources/images/";
?>

<!-- PHP Objects -->
<?php
    $mainBtns = [];

    for($i = 0; $i < 8; $i++){
        $mainBtns[$i] = new MainButton;
    }

    $mainBtns[0]->innerText = "Ongeval";
    $mainBtns[0]->imageUrl = $image_dir."category-FirstAid.png";

    $mainBtns[1]->innerText = "Vechtpartij";
    $mainBtns[1]->imageUrl = $image_dir."category-fight.png";
    
    $mainBtns[2]->innerText = "Wapens";
    $mainBtns[2]->imageUrl = $image_dir."category-weapons.png";
    
    $mainBtns[3]->innerText = "Drugs";
    $mainBtns[3]->imageUrl = $image_dir."category-drugs.png";
    
    $mainBtns[4]->innerText = "Diefstal";
    $mainBtns[4]->imageUrl = $image_dir."category-theft.png";
    
    $mainBtns[5]->innerText = "Pesten";
    $mainBtns[5]->imageUrl = $image_dir."category-bullying.png";
    
    $mainBtns[6]->innerText = "Overlast";
    $mainBtns[6]->imageUrl = $image_dir."category-nuisance.png";
    
    $mainBtns[7]->innerText = "Overige";
    $mainBtns[7]->imageUrl = $image_dir."category-other.png";
?>

    <header>
        <img src="<?php echo $image_dir ?>banner.jpg" alt="">
    </header>
    
    <main>
        <div class="box">Wat wilt u melden</div>

    <?php foreach($mainBtns as $button) { ?>    
        <div class="btn">
            <img src="<?= $button->imageUrl?>" alt="">    
            <?= $button->innerText ?>
        </div>
    <?php } ?>

        
    </main>
</body>
</html>