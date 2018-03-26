<header>
    <img src="<?php echo IMAGE_DIR ?>banner.jpg" alt="">
</header>


<main>




        
</main>

<script>
// Import PHP variables into JavaScript
var SCRIPT_DIR = <?php echo json_encode(URL . SCRIPT_DIR) ?>;
var IMAGE_DIR = <?php echo json_encode(URL . IMAGE_DIR) ?>;
</script>
<script src="<?php echo URL . SCRIPT_DIR?>classes.js"></script>
<script src="<?php echo URL . SCRIPT_DIR?>ajaxtest.js"></script>