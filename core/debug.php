<?php


//  PHP Classes
class MainButton {
    public $innerText;
    public $imageUrl;
}

//  PHP Variables
//  Most Should Be Defined In core/config



//  PHP Objects
$mainBtns = [];

for($i = 0; $i < 8; $i++){
    $mainBtns[$i] = new MainButton;
}

$mainBtns[0]->innerText = "Ongeval";
$mainBtns[0]->imageUrl = IMAGE_DIR."category-FirstAid.png";

$mainBtns[1]->innerText = "Vechtpartij";
$mainBtns[1]->imageUrl = IMAGE_DIR."category-fight.png";

$mainBtns[2]->innerText = "Wapens";
$mainBtns[2]->imageUrl = IMAGE_DIR."category-weapons.png";

$mainBtns[3]->innerText = "Drugs";
$mainBtns[3]->imageUrl = IMAGE_DIR."category-drugs.png";

$mainBtns[4]->innerText = "Diefstal";
$mainBtns[4]->imageUrl = IMAGE_DIR."category-theft.png";

$mainBtns[5]->innerText = "Pesten";
$mainBtns[5]->imageUrl = IMAGE_DIR."category-bullying.png";

$mainBtns[6]->innerText = "Overlast";
$mainBtns[6]->imageUrl = IMAGE_DIR."category-nuisance.png";

$mainBtns[7]->innerText = "Overige";
$mainBtns[7]->imageUrl = IMAGE_DIR."category-other.png";