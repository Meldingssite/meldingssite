
<header>
    <img src="<?php echo IMAGE_DIR ?>banner.jpg" alt="">
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